require('dotenv').config()
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
const connectDB = require('./api/v1/services/connectDB');

const PORT = process.env.PORT || 5000;

const { roleRoutes, authRoutes, communityRoutes, memberRoutes } = require('./api/v1/routes');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/v1/role', roleRoutes);
app.use('/v1/auth', authRoutes);
app.use('/v1/community', communityRoutes);
app.use('/v1/member', memberRoutes);

const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`App has been started on port ${PORT}...`)
        });
    } catch (e) {
        console.log(e);
    }
};

start();