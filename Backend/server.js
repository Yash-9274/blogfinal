const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const { OAuth2Client } = require("google-auth-library");

const IndexRoute = require("./Routers/index");
const connectDatabase = require("./Helpers/database/connectDatabase");
const customErrorHandler = require("./Middlewares/Errors/customErrorHandler");

dotenv.config({
  path: "./Config/config.env",
});

const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);

connectDatabase();

const app = express();
app.use(express.json());
app.use(cors());

const users = [];

function upsert(array, item) {
  const i = array.findIndex((_item) => _item.email === item.email);
  if (i > -1) array[i] = item;
  else array.push(item);
}

app.post("/google-login", async (req, res) => {
  // console.log("/api/google-login");
  const { token } = req.body;
  console.log(token);
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  });
  // console.log(ticket);
  const { name, email, picture } = ticket.getPayload();
  upsert(users, { name, email, picture });
  res.status(201);
  res.json({ name, email, picture });
});

app.use("/", IndexRoute);

app.use(customErrorHandler);

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(PORT, () => {
  console.log(`Server running on port  ${PORT} : ${process.env.NODE_ENV}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error : ${err}`);

  server.close(() => process.exit(1));
});
