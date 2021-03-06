const mongoose = require('mongoose');
const {Schema} = mongoose;

const probabilitiesSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('probabilities', probabilitiesSchema);