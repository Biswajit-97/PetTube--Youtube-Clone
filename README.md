# <span><img src="https://res.cloudinary.com/ddnzqpnvg/image/upload/v1642150586/Tube_gmaurh.png" width="150px"></span > PetTube - YouTube Clone Building

-----
A Full Stack clone of the YouTube web for Pet Videos that looks and works similar to the real one
-----

#Live Preview -  https://pettube---youtube-clone.herokuapp.com/

should be able to:
- signin using google authentication (oAuth)
- fully functional video streaming and video play
- Video Upload or delete uploaded video
- Like, Dislike, Comment any video
- Follow / Subcribe other users
- watch history or liked videos library
- account subcription follow up or subscription suggestions 
- Video watch time and like count 

Framework Used -  

<span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="40px"></span >
<span><img src="https://github.com/devicons/devicon/blob/v2.14.0/icons/nodejs/nodejs-original.svg" width="40px"></span >
<span><img src="https://github.com/devicons/devicon/blob/v2.14.0/icons/express/express-original.svg" width="40px"></span >
<span><img src="https://github.com/devicons/devicon/blob/v2.14.0/icons/postgresql/postgresql-original.svg" width="40px"></span >

<br> <br>

-------

## Project Setup

1. Add your node version in the "engines" section of the root package.json file.

- You can find out your node version by running the command `node -v` in your terminal.

2. Install dependencies for package.json files for server (in root of project) and for client (in "client" folder)

```
npm install
cd client && npm install

```

3. Run dev script in project root to run both server and client scripts simultaneously.

- Note: Make sure you are not in the "client" folder

```
npm run dev

```

## Accounts Required

- [Heroku Account](https://signup.heroku.com/)
- [Google Account](https://accounts.google.com/signup/v2/webcreateaccount?service=mail)
- [cloudinary Account] (https://cloudinary.com/)

## SetUp .env file with all Required

DATABASE_URL= (from heroku after creating account and setting up postgres database with heroku)

GOOGLE_CLIENT_ID= (from console.developers.google after creating account and credentials for oAuth)
GOOGLE_CLIENT_SECRET= (from console.developers.google after creating account and credentials for oAuth)

## Note - If using any other schema or adding anything in schema need to update prisma schema with postgres

- first migrate the schema using : npm run save
- then up the schema using : npm run up
- finally generate the schema using : npm run generate

for opening prisma studio use - npm run studio

## Helpful Links

- [Google Developer Console](https://console.developers.google.com/)
- [Prisma Docs](https://prisma.io)
- [Cloudinary Documentation](https://cloudinary.com/documentation/)
