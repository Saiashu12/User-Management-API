# User Management REST API

A RESTful API built with Node.js, Express, and MongoDB to manage user data.

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv
- CORS

## ⚙️ Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/Saiashu12/User-Management-API

cd User-Management_API

2.Install dependencies

```bash
npm install


3. Create a `.env` file from `.env.example` and set your environment variables.

4. Start the server:

```bash
npm start

Either on POSTMAN API or on Terminal


## 🔗 API Endpoints

| Method | Endpoint         | Description         |
|--------|------------------|---------------------|
| GET    | `/api/users`     | Get all users       |
| GET    | `/api/users/:id` | Get user by ID      |
| POST   | `/api/users`     | Create new user     |
| PUT    | `/api/users/:id` | Update user         |
| DELETE | `/api/users/:id` | Delete user         |

## 📫 Sample cURL

```bash
curl -X POST http://localhost:5000/api/users \
-H "Content-Type: application/json" \
-d '{
 "name": "Alice",
 "email": "alice@example.com",
 "phone": "1234567890",
 "company": "Test Corp",
 "address": {
   "city": "Hyderabad",
   "zipcode": "500081",
   "geo": {
     "lat": "17.385044",
     "lng": "78.486671"
   }
 }
}'



---

Once you've pasted all these into the right files, you're ready to:

1. Create your `.env` file from `.env.example`.
2. Make sure MongoDB is running (`mongod`).
3. Start the server:

```bash
npm start
