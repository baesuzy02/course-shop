const express = require("express");
require("dotenv").config();

const database = require("./config/database");

const systemConfig = require("./config/system")

const routeAdmin = require("./routes/admin/index.route");
const route = require("./routes/client/index.route");

database.connect();

const app = express();
const port = process.env.PORT;

//App locals variables
app.locals.prefixAdmin = systemConfig.prefixAdmin;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

//Routes
routeAdmin(app);
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
