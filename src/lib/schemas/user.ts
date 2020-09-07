import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  lastname: String,
  firstName: String
});
const User = mongoose.model('User', UserSchema);