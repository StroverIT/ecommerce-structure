

import { Schema, model, models, Model } from "mongoose";

import { ISection } from "@/interface/ModelInterface";



const SectionScheme = new Schema<ISection>({
  name: {
    type: String,
  },

  products: [{type: Schema.Types.ObjectId, ref: 'Product'}],
});

const Section =
(models.Section as Model<ISection>) ||
model<ISection>("Section", SectionScheme);

export default Section;
