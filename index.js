require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
const port = process.env.PORT || 5050;
const path = require("./Router");
const app = express();
// const url = "mongodb://localhost:";
const MONGODB_URL =
  "mongodb+srv://ScivJQcHukB0sTud:<password>@cluster0.jorwk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(process.env.MONGODB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log("Database is ShuttingDown");
  });

// app.use(cors());
app.use(express.json());
app.get("/api", async (req, res) => {
  res.status(200).send("lets test our API");
});

app.use("/api", path);

app.listen(port, () => {
  console.log(`Server is up and ready to fly: ${port}`);
});
