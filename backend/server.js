const express = require("express");
const cors = require("cors");

const connectDB = require("./db/connectDB");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");
const likeRoutes = require("./routes/likeRoutes");
const followRoutes = require("./routes/followRoutes");

const app = express();
const port = process.env.PORT || 8000;

require("dotenv").config();
connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.use("/api/like", likeRoutes);
app.use("/api/follow", followRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.get("/api", (req, res) => res.send("Hello from codeverse api 😀"));

app.listen(port, () =>
  console.log(`Server listening on port http://localhost:${port}`)
);
