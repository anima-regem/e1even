import mongoose from "mongoose";

const nameSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

export const nameModel =
    mongoose.models && "Name" in mongoose.models
        ? mongoose.models.Name
        : mongoose.model("Name", nameSchema, "name");