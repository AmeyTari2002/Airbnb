
const mongoose = require('mongoose')
const {Schema} = mongoose;

const bookingSchema = new mongoose.Schema({
    place:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'Place'},
    user:{type:mongoose.Schema.Types.ObjectId,required:true},
    checkIn:{type:Date, required:true},
    checkOut:{type:Date, required:true},
    fullName:{type:String, required:true},
    mobile:{type:String, required:true},
    price:Number
})

const BookingModel = mongoose.model('Booking',bookingSchema)


module.exports = BookingModel;