//mongoose model class
const mongoose = require("mongoose");
const { Schema } = mongoose; //ES6,const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
});

//Create a new mongoose collection
mongoose.model("User", userSchema);//create a new collection
