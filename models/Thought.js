const {Schema, model} = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: () => Date.now(),
        get: function () {
          return this.createdAt;
        },
      },
      username: {
        type: String,
        required: true,
      },
      reactions: [reactionSchema],
    },
    {
      toJSON: {
        virtuals: true,
      },
    }
  );
  const Thought = model("Thought", thoughtSchema);
  thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
  });
  module.exports = Thought;