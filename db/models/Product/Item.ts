import { Schema, model, models, Model } from "mongoose";
import { IItems } from "@/interface/ModelInterface";


const ItemsScheme = new Schema<IItems>({
    weight: Number,
    price: Number,
    totalBoughts: { type: Number, default: 0 },
  });
const Item =
  (models.Item as Model<IItems>) ||
  model<IItems>("Item", ItemsScheme);

export default Item;
