import { Schema } from "mongoose";

export const GalaxiesSchema = new Schema({
  name: { type: String, required: true,  },
  stars: { type: Number, required: true, }
}, { timestamps: true, toJSON: { virtuals: true } })