"use server";
import { ObjectId } from "mongodb";
import { data } from "./Data";

import {connectMongo} from "@/db/connectDb"

import Section from "@/models/Product/Section";
import Product from "@/models/Product/Product";
import Article from "@/models/Product/Article";
import Item from "@/models/Product/Item";

const onClick = async () => {
  const sections: any = [],
    products: any = [],
    articles: any = [],
    items: any = [];

    //---- Section
    data.forEach(section=>{
      sections.push({
        name: section.section,
        products: section.products.map(product=>{
          return new ObjectId(product._id.$oid)
        }),
        _id: new ObjectId(section._id.$oid)
      })
    })
    //---- Products
    data.forEach(section=>{
      section.products.forEach(product=>{
        products.push({
          name: product.sectionName,
          imageUrl: product.imageUrl,
          description: product.description,
          itemUnit: product.itemUnit,
          articles: product.articles.map(article=>{
            return new ObjectId(article._id.$oid)
          }),
          _id: new ObjectId(product._id.$oid)
        })
      })
    })
    // ---- Article
    data.forEach(section=>{
      section.products.forEach(product=>{
        product.articles.forEach(article=>{
          articles.push({
            name: article.articleName,
            items: article.items.map(item=>{
              return new ObjectId(item._id.$oid)
            }),
            _id: new ObjectId(article._id.$oid),
          })
        })
      })
    })
    // ---- Items
    data.forEach(section=>{
      section.products.forEach(product=>{
        product.articles.forEach(article=>{
          article.items.forEach(item=>{
            items.push({
              weight: Number.parseFloat(item.weight),
              price: item.price,
              totalBoughts: item.boughts,
              _id: new ObjectId(item._id.$oid)
            })
          })
        })
      })
    })

 

  sections.forEach(async (data: any) => {
    await Section.create(data);
  });

  function addData(array: any, model: any) {
    array.forEach(async (data: any) => {
      await model.create(data);
    });
  }

  await connectMongo()
  addData(sections, Section);
  addData(products, Product);
  addData(articles, Article);
  addData(items, Item);

};

export default onClick;
