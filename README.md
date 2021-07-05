# Node.js CRUD API

A simple RESTful API built with **Node.js**, **Express**, and **MongoDB**, featuring image uploads.

## What You Will Learn

By exploring this project, you will gain experience with:
- **Express.js** for building APIs efficiently.
- **Mongoose** for managing MongoDB interactions.
- **Multer** for handling image uploads.
- **File system operations** for deleting images when needed.
- **Express-validator** for request validation.
- **Modularization** to keep code maintainable.
- **RESTful API principles** for proper API design.

---

## Installation & Setup

### Step 1: Install Dependencies
Clone the repository and install the necessary dependencies:
```bash
npm install
```

## Step 2: Create a .env file
Create a .env at the root of your project and add the following configurations:
  #### For MongoDB Atlas:
  ```properties
  MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.eox3j.mongodb.net/player-db?retryWrites=true&w=majority
  PORT=3000
  ```
 Replace **username** and **password** with your actual MongoDB Atlas credentials.

   #### For local MongoDB:
   ```properties
  MONGODB_URL=mongodb://localhost:27017/player-db
  PORT=3000
  ```
Choose the appropriate configuration based on your environment

## Step 3: Run the server
Start the API with the following command:
```
node app.js
```
Your API will now be running on http://localhost:3000

## Step 4: Test the API endpoints

This is an API that manages players (football for example). A player is characterized by:
* name: the name of the player
* age: the player's age
* bio: a brief biography of the player (at least 15 characters)
* photoUrl: player photo
* createdAt and updatedAt are generated automatically using the **timestamps: true** statement in the **models/player.js file**

So we have a total of 5 routes

1. Add player http://localhost:3000/api/v1/player
2. List of all players http://localhost:3000/api/v1/players
3. Find player by Id http://localhost:3000/api/v1/player/:playerId
4. Update player http://localhost:3000/api/v1/player/:playerId
5. Delete player http://localhost:3000/api/v1/player/:playerId

## Additional Information

* Player images are stored in the **/images** directory (ensure this folder exists at the same level as **controllers/**).
* When updating a player, the old image is automatically deleted if replaced.
* Reusable utility functions can be found in utils/syd-functions.js.

## API Testing with Postman

* Add Player

<img src="https://i.ibb.co/TqTVxsn/add-player.png" alt="add-player" border="0">

* List of players
<img src="https://i.ibb.co/RSgvjLt/list-of-players.png" alt="list-of-players" border="0">

For a complete API reference and to test the endpoints, visit the Postman documentation: https://documenter.getpostman.com/view/16446301/2sAYXBEeV5#c7c23cc9-2dbd-499e-abde-d443127a317b

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed!

Peace!
