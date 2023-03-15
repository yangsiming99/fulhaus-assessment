const express = require('express');
const acronymRoutes = require('./routes/acronym');

const app = express();
const port = process.env.PORT || 8080

app.use('/acronym', acronymRoutes)

app.get('/', (req, res) => {
    res.send("hello world");
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});