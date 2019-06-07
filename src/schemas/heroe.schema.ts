import * as mongoose from 'mongoose';

export const HeroeSchema = new mongoose.Schema({
  name: String,
  title: String,
  power: String,
});
