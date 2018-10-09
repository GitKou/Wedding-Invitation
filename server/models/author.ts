import { Schema, model } from 'mongoose'

const authorSchema = new Schema({
    name: String,
    age: Number
});

export const Author = model("Author", authorSchema);