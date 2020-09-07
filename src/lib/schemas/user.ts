import mongoose from 'mongoose';

export default
  mongoose.model(
    'user',
    new mongoose.Schema({
      firstName: String,
      lastName: String
    })
  );