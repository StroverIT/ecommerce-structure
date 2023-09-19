import { Types } from 'mongoose';

export interface ISection {
    name: string;
   
    products: [Types.ObjectId];
  }

 export interface IProduct {
    name: string;
    imageUrl: string;
    description: Object;
    itemUnit: string;
    articles: [Types.ObjectId];
  }


 export interface IArticle {
    name: string;
    items: [Types.ObjectId];
  }
 export interface IItems {
    weight: number;
    price: number;
    totalBoughts: number;

  }
  