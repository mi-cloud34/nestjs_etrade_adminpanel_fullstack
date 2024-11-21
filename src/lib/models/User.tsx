import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  surname: { require: true, type: String},
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  hashedPassword: {required: true, type: String},
  ImageUrl: { require:false, type: String},
  emailVerified:{require:false,type:String}
});

export const User = mongoose.models.User ?? mongoose.model("User", userSchema);