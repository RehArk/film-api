// firebase emulators:start

const express = require('express');

const app = express();
app.use(express.json());
const port = 3000;

const router = require('./src/router/Router');
new router.Router(app);

const MoviesRouter = require("./src/router/MoviesRouter");
const CategoriesRouter = require("./src/router/CategorieRouter");

app.use("/movies", MoviesRouter.MoviesRouter());
app.use("/categories", CategoriesRouter.CategoriesRouter());

app.listen(port, () => {
    console.log(`server running at port ${port}`);
});