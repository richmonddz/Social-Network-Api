const { Schema, model } = require("mongoose");

const moment = require("moment");

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,

      required: true,

      minlength: 1,

      maxlength: 280,
    },

    createdAt: {
      type: Date,

      default: Date.now,

      get: (createdAtVal) =>
        moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },

    username: {
      type: String,

      required: trues,
    },

    reactions: [ReactionsSchema],
  },

  {
    toJSON: {
      virtuals: true,

      getters: true,
    },

    id: false,
  }
);

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
