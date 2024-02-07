const mongoose = require('mongoose');

async function connectDBurl(url){
    return mongoose.connect(url)
}

module.exports = {
    connectDBurl
}