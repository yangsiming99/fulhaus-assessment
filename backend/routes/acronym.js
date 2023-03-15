const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let {page, limit, search} = req.query
    console.log(page)
    console.log(limit)
    console.log(search)
    res.send("acry get");
    //query page, limit, search
});

router.post('/', (req, res) => {
    // adds acronym to db
});

router.patch('/', (req, res) => {
    //updates acrpnym
})

router.delete('/', (req, res) => {
    //deletes
})


module.exports = router;