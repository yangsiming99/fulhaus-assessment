const fs = require('fs').promises;
const { randomUUID } = require('crypto');
const { writeFile } = require('fs');

const filename = './model/db.json'

function _paginate(arr, size) {
    return arr.reduce((acc, val, i) => {
        let idx = Math.floor(i / size);
        let page = acc[idx] || (acc[idx] = []);
        page.push(val);
        return acc
    }, [])
}

function _readDB() {
    return new Promise((resolve) => {
        fs.readFile(filename)
        .then(body => JSON.parse(body))
        .then(json => {
            resolve(json)
        })
    })
}

async function get(limit=5, searchVal) {
    let list = await _readDB();
    if(searchVal !== undefined){
        let filtered = list.filter((val) => {
            if(val.acronym.search(searchVal.toUpperCase()) !== -1 || val.definition.search(searchVal) !== -1) {
                return true;
            }
            else {
                return false;
            }
        })
        list = filtered;
    }
    return _paginate(list, limit)
}

async function post(acr, def) {
    let list = await _readDB();
    let id = randomUUID();
    list.push({
        _id: id,
        acronym: acr,
        definition: def,
    });
    fs.writeFile(filename, JSON.stringify(list));
    return `Acronym with id of ${id} created`;
}

async function patch(id, acr, def){
    let list = await _readDB();
    let match = false
    await list.forEach((el, inx) => {
        if(el._id == id) {
            match = true;
            console.log(match)
            list[inx] = {
                '_id': el._id,
                'acronym': acr,
                'definition': def
            };
        };
    })
    if(match){
        fs.writeFile(filename, JSON.stringify(list));
        return true;
    }
    else {
        return false;
    }
}

async function deleteEntry(id) {
    let list = await _readDB();
    let match = false;
    let nlist = list.filter((entry) => {
        if(entry._id == id) {
            match = true;
            return false;
        }
        else {
            return true;
        } 
    })
    if(match) {
        fs.writeFile(filename, JSON.stringify(nlist));
        return `Acronym with ID of ${id} has been deleted`;
    }
    else {
        return 'No Match';
    }
}

module.exports = {
    get,
    post,
    patch,
    deleteEntry
}