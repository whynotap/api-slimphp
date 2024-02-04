const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const userRoutes = require('./routes/UserRoutes');
const newsRouter = require("./routes/NewsRouter");
const shopRouter = require("./routes/ShopRouter");

require('./database/db');
const app = express();
const port = 3000;

app.use(express.json());

app.use(morgan('tiny'));
app.use(helmet());

app.use('/users', userRoutes);
app.use('/news', newsRouter);
app.use('/shop', shopRouter);

app.listen(port, () => {
    console.log(`Serveur démarré depuis : http://localhost:${port}`);
});