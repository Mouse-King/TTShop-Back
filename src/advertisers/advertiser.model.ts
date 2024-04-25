import * as mongoose from 'mongoose';

export const AdvertiserSchema = new mongoose.Schema({
  advId: { type: String, required: true },
  advName: { type: String, required: true },
});

export interface Advertiser extends mongoose.Document {
  id: string;
  advId: string;
  advName: string;
}
