import { PrismaClient } from "@prisma/client";
import express from "express";
import { getAuthUser, protect } from "../middleware/authorization";
import { getVideoViews } from "./video";

const prisma = new PrismaClient();

function getUserRoutes() {
  const router = express.Router();

  router.get("/", protect, getRecommendedChannels);
  router.put("/", protect, editUser);

  router.get("/liked-videos", protect, getLikedVideos);
  router.get("/history", protect, getHistory);
  router.get("/subscriptions", protect, getFeed);
  router.get("/search", getAuthUser, searchUser);

  router.get("/:userId", getAuthUser, getProfile);
  router.get("/:userId/toggle-subscribe", protect, toggleSubscribe);

  return router;
}

async function getLikedVideos(req, res) {
  await getVideos(prisma.videoLike, req, res);
}

async function getHistory(req, res) {
  await getVideos(prisma.view, req, res);
}

async function getVideos(model, req, res) {
  const videoRelations = await model.findMany({
    where: {
      userId: req.user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const videoIds = videoRelations.map((videoLike) => videoLike.videoId);

  let videos = await prisma.video.findMany({
    where: {
      id: {
        in: videoIds,
      },
    },
    include: {
      user: true,
    },
  });

  if (!videos.length) {
    return res.status(200).json({ videos });
  }

  videos = await getVideoViews(videos);

  res.status(200).json({ videos });
}

async function toggleSubscribe(req, res, next) {
  if (req.user.id === req.params.userId) {
    return next({
      message: "You cannot subscribe to your own channel",
      statusCode: 400,
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      id: req.params.userId,
    },
  });

  if (!user) {
    return next({
      message: `No user found with id: "${req.params.userId}"`,
      statusCode: 404,
    });
  }

  const isSubscribed = await prisma.subscription.findFirst({
    where: {
      subscriberId: {
        equals: req.user.id,
      },
      subscribedToId: {
        equals: req.params.userId,
      },
    },
  });

  if (isSubscribed) {
    await prisma.subscription.delete({
      where: {
        id: isSubscribed.id,
      },
    });
  } else {
    await prisma.subscription.create({
      data: {
        subscriber: {
          connect: {
            id: req.user.id,
          },
        },
        subscribedTo: {
          connect: {
            id: req.params.userId,
          },
        },
      },
    });
  }

  res.status(200).json({});
}

async function getFeed(req, res) {
  const subscribedTo = await prisma.subscription.findMany({
    where: {
      subscriberId: {
        equals: req.user.id,
      },
    },
  });

  const subscriptions = subscribedTo.map((sub) => sub.subscribedToId);

  const feed = await prisma.video.findMany({
    where: {
      userId: {
        in: subscriptions,
      },
    },
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!feed.length) {
    return res.status(200).json({ feed });
  }

  const feedVideos = await getVideoViews(feed);

  res.status(200).json({ feed: feedVideos });
}

async function searchUser(req, res, next) {
  if (!req.query.query) {
    return next({
      message: "Please enter a search query",
      statusCode: 400,
    });
  }

  const users = await prisma.user.findMany({
    where: {
      username: {
        contains: req.query.query,
        mode: "insensitive",
      },
    },
  });

  if (!users.length) {
    return res.status(200).json({ users });
  }

  for (const user of users) {
    const subscribersCount = await prisma.subscription.count({
      where: {
        subscribedToId: {
          equals: user.id,
        },
      },
    });

    const videosCount = await prisma.video.count({
      where: {
        userId: user.id,
      },
    });

    let isMe = false;
    let isSubscribed = false;

    if (req.user) {
      isMe = req.user.id === user.id;

      isSubscribed = await prisma.subscription.findFirst({
        where: {
          AND: {
            subscriberId: {
              equals: req.user.id,
            },
            subscribedToId: {
              equals: user.id,
            },
          },
        },
      });
    }

    user.subscribersCount = subscribersCount;
    user.videosCount = videosCount;
    user.isSubscribed = Boolean(isSubscribed);
    user.isMe = isMe;
  }

  res.status(200).json({ users });
}

async function getRecommendedChannels(req, res) {
  const channels = await prisma.user.findMany({
    where: {
      id: {
        not: req.user.id,
      },
    },
    take: 10,
  });

  if (!channels.length) {
    return res.status(200).json({ channels });
  }

  for (const channel of channels) {
    const subscribersCount = await prisma.subscription.count({
      where: {
        subscribedToId: {
          equals: channel.id,
        },
      },
    });

    const videosCount = await prisma.video.count({
      where: {
        userId: channel.id,
      },
    });

    const isSubscribed = await prisma.subscription.findFirst({
      where: {
        AND: {
          subscriberId: {
            equals: req.user.id,
          },
          subscribedToId: {
            equals: channel.id,
          },
        },
      },
    });

    channel.subscribersCount = subscribersCount;
    channel.videosCount = videosCount;
    channel.isSubscribed = Boolean(isSubscribed);
  }

  res.status(200).json({ channels });
}

async function getProfile(req, res, next) {
  const user = await prisma.user.findUnique({
    where: {
      id: req.params.userId,
    },
  });

  if (!user) {
    return next({
      message: `No user found with id: "${req.params.userId}"`,
      statusCode: 404,
    });
  }

  const subscribersCount = await prisma.subscription.count({
    where: {
      subscribedToId: {
        equals: user.id,
      },
    },
  });

  let isMe = false;
  let isSubscribed = false;

  if (req.user) {
    isMe = req.user.id === user.id;

    isSubscribed = await prisma.subscription.findFirst({
      where: {
        AND: {
          subscriberId: {
            equals: req.user.id,
          },
          subscribedToId: {
            equals: user.id,
          },
        },
      },
    });
  }

  const subscribedTo = await prisma.subscription.findMany({
    where: {
      subscriberId: {
        equals: user.id,
      },
    },
  });

  const subscriptions = subscribedTo.map((sub) => sub.subscribedToId);

  const channels = await prisma.user.findMany({
    where: {
      id: {
        in: subscriptions,
      },
    },
  });

  for (const channel of channels) {
    const subscribersCount = await prisma.subscription.count({
      where: {
        subscribedToId: {
          equals: channel.id,
        },
      },
    });
    channel.subscribersCount = subscribersCount;
  }

  const videos = await prisma.video.findMany({
    where: {
      userId: {
        equals: user.id,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  user.subscribersCount = subscribersCount;
  user.isSubscribed = Boolean(isSubscribed);
  user.isMe = isMe;
  user.channels = channels;
  user.videos = videos;

  if (!videos.length) {
    return res.status(200).json({ user });
  }

  user.videos = await getVideoViews(videos);

  res.status(200).json({ user });
}

async function editUser(req, res) {
  const { username, cover, avatar, about } = req.body;

  const user = await prisma.user.update({
    where: {
      id: req.user.id,
    },
    data: {
      username,
      cover,
      avatar,
      about,
    },
  });

  res.status(200).json({ user });
}

export { getUserRoutes };
