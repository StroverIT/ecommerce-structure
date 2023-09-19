import { Schema, model, models, Model } from "mongoose";

import { IArticle } from "@/interface/ModelInterface";

const articlesScheme = new Schema<IArticle>({
  name: {
    type: String,
  },

  items: [{type: Schema.Types.ObjectId, ref: 'Items'}],

});
const Article =
  (models.Article as Model<IArticle>) ||
  model<IArticle>("Article", articlesScheme);

export default Article;
