// Starter code for backend
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Male Taxi App Backend!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
