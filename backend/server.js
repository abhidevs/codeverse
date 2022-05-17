const express = require("express");
const connectDB = require("./db/connectDB");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;

require("dotenv").config();
connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.get("/api", (req, res) => res.send("Hello from codeverse api 😀"));

app.listen(port, () =>
  console.log(`Server listening on port http://localhost:${port}`)
);
