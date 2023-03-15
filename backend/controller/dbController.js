const fs = require('fs').promises;

async function get(page, limit=10, search) {
    fs.readFile('../model/db.json')
    .then(body => JSON.parse(body))
    .then(json => {
        console.log(json)
    })
}

get()