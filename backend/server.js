const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require("cookie-parser");


const AuthRoutes = require("./Routes/AuthRoutes");
const messageRoutes = require("./Routes/MessageRoutes");
const UserRoutes = require("./Routes/UserRoutes")

require("./Db/DbConnection");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", AuthRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", UserRoutes);

app.listen(port, () => {
  console.log("server running on " + port);
});
