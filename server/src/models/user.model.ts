import { Document, InferSchemaType, model, Schema, Types } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  course_ids: [
    {
      type: Types.ObjectId,
      ref: "Course",
    },
  ],
});

const User = model("User", userSchema);
export default User;

// extract types
export type UserModel = InferSchemaType<typeof userSchema>;
export type UserDocument = Document & UserModel;
