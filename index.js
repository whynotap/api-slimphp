const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const userRoutes = require('./routes/UserRoutes');
const loginRouter = require('./routes/LoginRouter');
const registerRouter = require("./routes/RegisterRouter");
const newsRouter = require("./routes/NewsRouter");
const commentsRouter = require("./routes/CommentsRouter");

require('./database/db');
const app = express();
const port = 3000;

app.use(express.json());

app.use(morgan('tiny'));
app.use(helmet());

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/users', userRoutes);
app.use('/news', newsRouter);
app.use('/comments', commentsRouter);

app.listen(port, () => {
    console.log(`Serveur démarré depuis : http://localhost:${port}`);
});