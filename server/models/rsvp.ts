import { Schema, model } from 'mongoose'


const rsvpSchema = new Schema({
    guestName: String,
    isPresent: Boolean,
    numberOfAttendance: Number
});

export const RSVP = model("RSVP", rsvpSchema);