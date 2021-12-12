require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const mainRouter = require("./routes/main");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const notFoundMiddleware = require("./middlewares/not-found");

app.use(express.json());

app.use("/api/v1/", mainRouter);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const port = process.env.PORT || 3000;

const initialiseProject = () => {
  try {
    //connect DB;
    app.listen(port, () => {
      console.log(`Server is Up and Running on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

initialiseProject();
