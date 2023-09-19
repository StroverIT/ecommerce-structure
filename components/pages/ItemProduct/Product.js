"use client";
import React, { useEffect, useState } from "react";

import Main from "@/pages/ItemProduct/Main";


const Product = ({ data, params, slug}) => {
  const foundItem = data.foundItem;

  const [product, setProduct] = useState(foundItem);


  


  if(!product){
    return <div className="h-screen text-4xl font-semibold flex-center">Зарежда се...</div>
  }
  
  return (
    <Main foundItem={foundItem}  product={product} data={data} setProduct={setProduct} params={params} slug={slug}/>
  );
};

export default Product;
