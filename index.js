const express = require('express');
const userRoutes = require('./routes/UserRoutes');
const loginRouter = require('./routes/LoginRouter');

require('./database/db');
const app = express();
const port = 3000;

app.use(express.json());

app.use('/login', loginRouter);
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Serveur démarré depuis : http://localhost:${port}`);
});