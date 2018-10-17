import { Schema, model } from 'mongoose'



const wishSchema = new Schema({
    guestName: { type: String, required: true },
    message: { type: Number, required: true },
});

export const Wish = model("Wish", wishSchema);
