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

require('./database/db');
const app = express();
const port = 3000;

app.use(express.json());

app.use(morgan('tiny'));
app.use(helmet());

// Set up rate limiter: maximum of twenty requests per minute
const limiter = ratelimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20,
});
// Apply rate limiter to all requests
app.use(limiter);

app.use(compression());

app.use('/users', userRoutes);
app.use('/news', newsRouter);
app.use('/shop', shopRouter);
app.use('/rank', rankRouter);

app.listen(port, () => {
    console.log(`Serveur démarré depuis : http://localhost:${port}`);
});