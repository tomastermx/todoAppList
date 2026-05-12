

require('dotenv').config();
const mongoose = require('mongoose');

const DB_USER = process.env.MONGO_USER || "";
const DB_PASS = process.env.MONGO_PASSWORD || "";
const DB_HOST = process.env.MONGO_HOST || "mongo";
const DB_PORT = process.env.MONGO_PORT || "27017";
const DB_NAME = process.env.MONGO_DB || "test";
const AUTH_SOURCE = process.env.MONGO_AUTH_SOURCE || "admin";

let mongoURI = "";

if (DB_USER && DB_PASS) {
  mongoURI = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=${AUTH_SOURCE}`;
} else {
  mongoURI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
}

console.log(`Mongo URI: mongodb://${DB_USER ? DB_USER + '@' : ''}${DB_HOST}:${DB_PORT}/${DB_NAME}`);

mongoose.connect(mongoURI)
  .then(() => console.log("Mongo conectado"))
  .catch(err => console.error("Error Mongo:", err));

  mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log('MongoDB event connected');
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB event disconnected');
});

mongoose.connection.on('reconnected', () => {
  console.log('MongoDB event reconnected');
});

mongoose.connection.on('error', (err) => {
  console.log('MongoDB event error:', err);
});