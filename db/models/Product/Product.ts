import { Schema, model, models, Model } from "mongoose";

import { IProduct } from "@/interface/ModelInterface";


const productScheme = new Schema<IProduct>({
  name: {
    type: String,
  },
  imageUrl: String,
  description: {
    type: [{ type: String }],
  },
  itemUnit: { type: String },
  articles: [{type: Schema.Types.ObjectId, ref: 'Article'}],

});
const Product =
  (models.Product as Model<IProduct>) ||
  model<IProduct>("Product", productScheme);

export default Product;
