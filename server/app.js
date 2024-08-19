const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const userRouter = require('./routes/userRoute.js');
const stickersRouter = require('./routes/stickersRouter.js');
const formSubmissionRoutes = require('./routes/formSubmissionRoutes.js');
const adminRoute = require('./routes/adminRouter.js');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send({ message: 'hello world' });
})

// users
app.use('/api/users', userRouter);
// admin

app.use('/api/admin', adminRoute);

// stickers
app.use('/api/stickers', stickersRouter);

app.use('/api', formSubmissionRoutes);

// server
const port = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectDB(process.env.DBURL);
        app.listen(port, () => console.log(`http://localhost:${port}`));
    } catch (error) {
        console.log(error);
    }
};

startServer();
