console.log('██▒   █▓ ██▓ ▄████▄  ▓█████ ▄▄▄       ██▓███   ██▓ ');
console.log('▓██░   █▒▓██▒▒██▀ ▀█  ▓█   ▀▒████▄    ▓██░  ██▒▓██▒ ');
console.log(' ▓██  █▒░▒██▒▒▓█    ▄ ▒███  ▒██  ▀█▄  ▓██░ ██▓▒▒██▒ ');
console.log('  ▒██ █░░░██░▒▓▓▄ ▄██▒▒▓█  ▄░██▄▄▄▄██ ▒██▄█▓▒ ▒░██░ ');
console.log('   ▒▀█░  ░██░▒ ▓███▀ ░░▒████▒▓█   ▓██▒▒██▒ ░  ░░██░ ');
console.log('   ░ ▐░  ░▓  ░ ░▒ ▒  ░░░ ▒░ ░▒▒   ▓▒█░▒▓▒░ ░  ░░▓   ');
console.log('   ░ ░░   ▒ ░  ░  ▒    ░ ░  ░ ▒   ▒▒ ░░▒ ░      ▒ ░ ');
console.log('     ░░   ▒ ░░           ░    ░   ▒   ░░        ▒ ░ ');
console.log('      ░   ░  ░ ░         ░  ░     ░  ░          ░   ');                            

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require("compression");
const ratelimit = require("express-rate-limit");

const userRoutes = require('./routes/UserRouter');
const newsRouter = require("./routes/NewsRouter");
const shopRouter = require("./routes/ShopRouter");
const rankRouter = require("./routes/RankRouter");
const podiumRouter = require("./routes/PodiumRouter");
const feedsRouter = require("./routes/FeedsRouter");
const calendarRouter = require("./routes/CalendarRouter");
const wordfilterRouter = require("./routes/WordfilterRouter");
const catalogRouter = require("./routes/CatalogRouter");

require('./database/db');
const app = express();
const port = 3000;

app.use(express.json());

app.use(morgan('tiny'));
app.use(helmet());

const limiter = ratelimit({
  windowMs: 1 * 60 * 1000, 
  max: 20,
});

app.use(limiter);

app.use(compression());

app.use('/users', userRoutes);
app.use('/news', newsRouter);
app.use('/shop', shopRouter);
app.use('/rank', rankRouter);
app.use('/podium', podiumRouter);
app.use('/feeds', feedsRouter);
app.use('/calendar', calendarRouter);
app.use('/catalog', catalogRouter);
app.use('/wordfilter', wordfilterRouter);

app.listen(port, () => {
    console.log(`Serveur démarré depuis : http://localhost:${port}`);
});
