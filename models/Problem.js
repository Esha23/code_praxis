const mongoose = require('mongoose');
const {Schema} = mongoose;

const problemSchema = new Schema({
    name: String,
    url: String,
    // rating: Number,
    // tag: String,
})

var Problems = mongoose.model('Problems', problemSchema);