const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  EventAttending: { type: Schema.Types.Event, ref: 'Event' },
})

const EventSchema = mongoose.Schema({
  title: String,
  City:String,
  State:String,
  Zipcode: Number,
  Date: Date,
  Description: String,
  Category: String,
  Attendees:[{ type: Schema.Types.UserId, ref: 'user' }],
  Host: {type: Schema.Types.UserId, ref:'user'}
})

const AttendeSchema = mongoos.Schema({
  Attendees: ,
  EventId:
})



module.exports = mongoose.model('User', UserSchema)