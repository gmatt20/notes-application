require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 10000;
const connectMongoDB = require("./libs/mongodb");
const notesRoutes = require("./routes/notes");

app.use(cors());
app.use(express.json());

connectMongoDB();

app.use("/api", notesRoutes);

app.get("/api/home", (req, res) => {
  res.json({ message: "Hello world!" });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
