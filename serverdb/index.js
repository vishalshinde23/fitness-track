const express = require("express");
const cors = require("cors");
require("dotenv/config");
const exercisesRouter = require("./routes/exercise");
const usersRouter = require("./routes/user");
const database=require("./config/database")

database.connect();
// const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
// app.use(cookieParser());
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);

// mongoose.connect(
//   process.env.MONGODB_URL,
//   { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
//   () => console.log("Database connected")
// );



app.use("/api/user", usersRouter);
app.use("/api/exercise", exercisesRouter);


app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});
  
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});