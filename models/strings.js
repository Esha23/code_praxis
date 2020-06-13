const mongoose = require('mongoose');
const {Schema} = mongoose;

const stringsSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('strings', stringsSchema);