const express = require('express');
const acronymRoutes = require('./routes/acronym');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use('/acronym', acronymRoutes);

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});