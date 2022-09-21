const express = require('express');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(cors());
// app.use(express.static(client));

app.use('/', (req, res) => {
    res.status(200).json('Welcome')
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})