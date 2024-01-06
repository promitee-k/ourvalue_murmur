# murmur(=twitter) webapp 


### Features
1. user can create tweet
2. user can like tweets
3. user can delete own tweets
4. user can follow other users
5. user can see other user's tweets

### Tech Stack:

 Client: Nuxt and Vue.js
 
 Server: Nestjs,TypeORM
 
 Database: SQL,Docker

### The default current user id is set to 3.

### Env:
node version: 14.0.0
npm version: 6.14.4
nest/cli version: 7.6.0

### run project
After cloning the project checkout branch "develop"

#### DB
docker-compose build

docker-compose up -d

#### Server
npm run start:dev 

#### Client
yarn dev


