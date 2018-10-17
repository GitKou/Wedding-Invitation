import { Schema, model } from 'mongoose'



const authorSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
});

export const Author = model("Author", authorSchema);
