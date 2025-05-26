const express = require('express');
const app = express();
const userRouter = require('./routes/user.router');
const { Sequelize } = require('sequelize');

app.use('/users', userRouter);

app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
});

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres',
});

const User = sequelize.define('User', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
});

sequelize.sync();



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


