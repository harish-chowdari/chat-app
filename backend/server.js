const express = require("express");
const app = express();
app.use(express.json());

const cookieParser = require("cookie-parser")
app.use(cookieParser())


const AuthRoutes = require("./Routes/AuthRoutes");
const messageRoutes = require("./Routes/MessageRoutes");

const dotenv = require("dotenv");
dotenv.config();

require("./Db/DbConnection");

app.use("/api/auth", AuthRoutes);
app.use("/api/messages", messageRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("server running on " + port);
});
