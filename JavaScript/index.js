const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const graphqlHTTP = require("express-graphql").graphqlHTTP;

const userRoutes = require("./src/controllers/user.controller");
const proyectRoutes = require("./src/controllers/proyect.controller");

const app = express();

const PORT = process.env.PORT || 5000;
const DB_ATLAS = process.env.ATLAS_DB_CONNECTION;

app.use(cors());
app.use(express.json());
app.use(
  "/graphiql",
  graphqlHTTP({
    schema: require("./src/graphql/schema"),
    graphiql: true,
  })
);

//Connection to mongodb Atlas with mongoose
mongoose.connect(DB_ATLAS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => console.log("DB Connected"));

//Route path on proyect
app.get("/", (req, res) => {
  res.send("Proyect Managment App Mintic running");
});

//Routes path on users
app.use("/users", userRoutes);

//Routes path on proyects
app.use("/projects", proyectRoutes);

app.listen(PORT, () => {
  console.log(`app listening at port ${PORT}`);
});
