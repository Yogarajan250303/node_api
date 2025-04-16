const express = required('express');
const rateLimit = required('express-rate-limit');

const app = express();
const PORT = 1000;
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 5, // limit each IP to 5 requests per windowMs
    handler: (req, res) => {
        res.status(429).json({ error: 'Too many requests, please try again later.' });
    }
})

app.use(express.json());
app.use(limiter);

app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });

})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})