import { queryCache } from "react-query";
import axios from "axios";

export const client = axios.create({
  baseURL: "/api/v1",
});

export function authenticate(response) {
  console.log({ response });
  client({
    method: "POST",
    url: "/auth/google-login",
    data: { idToken: response.tokenId },
  })
    .then((response) => {
      console.log("Sign in success: ", response);
      window.location.assign(window.location.href);
    })
    .catch((error) => {
      console.log("Sign in error: ", error.response);
    });
}

export async function signoutUser() {
  await client.get("/auth/signout");
  window.location.pathname = "/";
}

export async function updateUser(user) {
  await client.put("/users", user);
  await queryCache.invalidateQueries("Channel");
}

export async function addVideoView(videoId) {
  await client.get(`/videos/${videoId}/view`);
  await queryCache.invalidateQueries("History");
}

export async function addComment({ video, comment }) {
  await client.post(`/videos/${video.id}/comments`, { text: comment });
  await queryCache.invalidateQueries(["WatchVideo", video.id]);
}

export async function addVideo(video) {
  await client.post("/videos", video);
  await queryCache.invalidateQueries("Channel");
}

export async function toggleSubscribeUser(channelId) {
  await client.get(`/users/${channelId}/toggle-subscribe`);
  await queryCache.invalidateQueries("Channel");
  await queryCache.invalidateQueries("Channels");
  await queryCache.invalidateQueries("Subscriptions");
  await queryCache.invalidateQueries("AuthProvider");
  await queryCache.invalidateQueries("WatchVideo");
  await queryCache.invalidateQueries("SearchResults");
}

export async function likeVideo(videoId) {
  await client.get(`/videos/${videoId}/like`);
  await queryCache.invalidateQueries(["WatchVideo", videoId]);
}

export async function dislikeVideo(videoId) {
  await client.get(`/videos/${videoId}/dislike`);
  await queryCache.invalidateQueries(["WatchVideo", videoId]);
}

export async function deleteVideo(videoId) {
  await client.delete(`/videos/${videoId}`);
  await queryCache.invalidateQueries("Channel");
}

export async function deleteComment(comment) {
  await client.delete(`/videos/${comment.videoId}/comments/${comment.id}`);
  await queryCache.invalidateQueries("WatchVideo");
}
