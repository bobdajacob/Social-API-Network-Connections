# Social-API-Network-Connections

## Description
The Social Network API is designed for a web application where users can share their thoughts, interact with friends' thoughts, and manage a friend list. This API will serve as the backbone for a full-stack social networking platform. By building the API from scratch, you'll gain a comprehensive understanding of how social media applications structure their backend, and you'll implement critical technologies that drive modern web applications.

## Table of Contents
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [GitHub Link](#github-link)
- [Walkthrough Video Link](#walkthrough-video-link)

## Features

The Social Network API includes the following core functionalities:

### 1. **User Management**
- Users can create, update, and delete their profiles.
- Each user has a username, email, and an associated friend list.

### 2. **Thought Sharing**
- Users can post thoughts, which are short text messages.
- Thoughts are timestamped with the date they are created.

### 3. **Reactions to Thoughts**
- Users can react to their friends' thoughts with custom reactions.
- Reactions are stored along with their associated timestamps.

### 4. **Friendship System**
- Users can send friend requests, accept, or remove friends.
- The friend list is dynamically updated as users interact.

### 5. **Routing**
- Express.js is used to create endpoints for interacting with users, thoughts, and reactions.
- API endpoints support the full range of CRUD (Create, Read, Update, Delete) operations.

## API Endpoints

The following API routes are available:

### Users
- `POST /api/users`: Create a new user
- `GET /api/users`: Get all users
- `GET /api/users/:userId`: Get a specific user by ID
- `PUT /api/users/:userId`: Update a user by ID
- `DELETE /api/users/:userId`: Delete a user by ID

### Thoughts
- `POST /api/thoughts`: Create a new thought
- `GET /api/thoughts`: Get all thoughts
- `GET /api/thoughts/:thoughtId`: Get a specific thought by ID
- `PUT /api/thoughts/:thoughtId`: Update a thought by ID
- `DELETE /api/thoughts/:thoughtId`: Delete a thought by ID

### Reactions
- `POST /api/thoughts/:thoughtId/reactions`: Add a reaction to a thought
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Remove a reaction from a thought

### Adding and Removing a friend
- `POST /api/users/:userId/friends/:friendId`: Add a friend
- `DELETE /api/users/:userId/friends/:friendId`: Remove a friend

## Technologies Used
- **Express.js**: A web framework for Node.js used for routing and handling API requests.
- **MongoDB**: A NoSQL database ideal for storing large amounts of unstructured data.
- **Mongoose**: A MongoDB object modeling tool that simplifies database interactions.
- **JavaScript Date Object** (optional): Used for handling timestamps (or an optional date library of your choice).

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:bobdajacob/Social-API-Network-Connections.git

2. Navigate to the project directory:
   ```
   cd project-directory

3. Install dependencies:
   ```
   npm install

4. Setup MongoDB

5. Start the development server:
   ```
   npm run start

## Usage

- Use Postman or Insomnia to interact with the API and test endpoints.
- Ensure your MongoDB database is properly connected and operational.
- The API supports all CRUD operations for users, thoughts, and reactions.

## License
This project is licensed under the MIT License.

![License](https://img.shields.io/badge/license-MIT-yellow)

## GitHub Link
https://github.com/bobdajacob/Social-API-Network-Connections

## Walkthrough Video Link
https://drive.google.com/file/d/1a9r6Fzk3CkepJwrMw13q_sdAr1rsvfLk/view