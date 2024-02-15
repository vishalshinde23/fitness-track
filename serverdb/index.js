const express = require("express");
const app = express();
const exercisesRouter = require("./routes/exercise");
const usersRouter = require("./routes/user");
const database=require("./config/database");
const cors = require("cors");
const dotenv = require("dotenv");




const PORT = process.env.PORT||5000 ;
database.connect();
app.use(express.json());
// app.use(cookieParser());
app.use(
	cors({
		origin: "https://get-fitts.onrender.com",
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
  
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});