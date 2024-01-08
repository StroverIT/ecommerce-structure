

import {
  translationToDb,
  translationToRoute,
} from "@/utils/translationToRoute";
import { formatSection } from "@/utils/dataFormatter";

import { connectMongo } from "@/db/connectDb";
import Section from "@/models/Product/Section";

export const getAll = async ({ sectionName }) => {
  await connectMongo();
  // for case insensitive
  let section = translationToDb(sectionName);
  if (section == "антибактерялна боя") section = "антибактериална боя";

  const sectionData = await Section.findOne({
    name: {
      $regex: new RegExp(section, "i"),
    },
  })
    .populate({
      path: "products",
      populate: {
        path: "articles",
        model: "Article",
        populate: {
          path: "items",
          model: "Item",
        },
      },
    })
    .lean();

  let arr = [];
  
  sectionData?.products?.forEach((section) => {
  section?.articles?.forEach((article) => {
    article?.items?.forEach((item, index) => {
      arr.push(
        formatSection({section,article,item, sectionRoute: sectionName})
     );
   });
 });
});


  return arr;
};

export const productByItemId = async (section, slug) => {
  try {
    let translated = translationToDb(section);
    if (translated == "антибактерялна боя") translated = "антибактериална боя";

    let data = await Section.findOne({
      name: { $regex: new RegExp(translated, "i") },
    })  .populate({
      path: "products",
      populate: {
        path: "articles",
        model: "Article",
        populate: {
          path: "items",
          model: "Item",
        },
      },
    })
    .lean();

    const filteredData = {
      foundItem: {},
      alternatives: [],
    };
    const [productId, articleId, itemId] = slug

    // Product
    inner: for (let product of data.products) {
      if (product._id == productId) {
        filteredData.foundItem = product;
        console.log(product);
        break inner;
      }
    }
    // Alternatives
    for (let article of data.products) {
     
      filteredData.alternatives.push({
        sectionName: article.name,
        imageUrl: article.imageUrl,
        route: `/products/${translationToRoute(section)}/${
          article._id
        }/${article.articles[0]._id}/${
          article.articles[0].items[0]._id
        }`,
      });
    }

    return filteredData;
  } catch (e) {
    console.log(e);
  }
};

