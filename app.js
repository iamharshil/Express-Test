const express = require('express')
const port = 8000;
const app = express();

// app.use(express.json());
app.post('/users', (req, res) => {
    res.sendStatus(200)
})


app.listen(port, () => console.log(`Server running on port ${port}`));