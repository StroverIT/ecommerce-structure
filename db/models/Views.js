import { Schema, model, models } from "mongoose";

const ViewsSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  totalViews: {
   type: Number,
   default: 0
  },
});

const View = models.View || model("View", ViewsSchema);

export default View;
