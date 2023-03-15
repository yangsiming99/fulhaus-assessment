const express = require('express');
const router = express.Router();

const { 
    get, 
    post, 
    patch,
    deleteEntry
} = require('../helpers/acronymHelper');

router.get('/', async (req, res) => {
    let { page, limit, search } = req.query;
    let data = await get(limit, search);
    if(Number(page) < 1){
        res.status(400);
        res.json({"ERROR": "Invalid Page Number"});
    }
    else if (data.length == 0) {
        res.json({"results": "No Matches"});
    }
    else {
        res.set('total-pages', data.length);
        res.json(data[page-1]);
    }
});

router.post('/', async (req, res) => {
    let {acronym, definition} = req.body;
    let result = await post(acronym.toUpperCase(), definition);
    console.log(result);
    res.json({"Message": result});
});

router.patch('/:acronymID', async (req, res) => {
    let {acronym, definition} = req.body;
    let result = await patch(req.params.acronymID, acronym, definition);
    if (result === true){
        res.json({'Message': `Acronym with id of ${req.params.acronymID} Updated`});
    }
    else {
        res.status(400);
        res.json({'ERROR': 'No Match'});
    }
})

router.delete('/:acronymID', async (req, res) => {
    let result = await deleteEntry(req.params.acronymID);
    if(result == 'No Match'){
        res.status(400);
    }
    res.json({'message':result});
});

module.exports = router;