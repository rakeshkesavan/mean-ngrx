const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
  // creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});
postSchema.plugin(timestamp);

module.exports = mongoose.model("Post", postSchema);
