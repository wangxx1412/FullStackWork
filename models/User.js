//mongoose model class
const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
});

mongoose.model("User", userSchema);//create a new collection
