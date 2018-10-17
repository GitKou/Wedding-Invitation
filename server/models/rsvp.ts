import { Schema, model } from 'mongoose'


const rsvpSchema = new Schema({
    guestName: String,
    isPresent: Boolean,
    numberOfAttendance: Number
});

export const Rsvp = model("Rsvp", rsvpSchema);