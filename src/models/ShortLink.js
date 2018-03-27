import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ShortLinkSchema = new Schema({
  random_id: String,
  link_href: String
});

const ShortLink = mongoose.model('ShortLink', ShortLinkSchema);

export default ShortLink;