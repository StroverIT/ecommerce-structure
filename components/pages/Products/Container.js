"use client"
import React, { useState } from 'react';

import Aside from "@/components/pages/Products/Aside";
import ListProducts from "@/components/pages/Products/ListProducts";

const Container = ({data}) => {

    const sections = JSON.parse(data)
    const [products, setProducts] = useState(sections)
    const [currPage, setCurrPage] = useState(1)
  
   

    return (
        <>
          <Aside  setProducts={setProducts} sections={sections} setCurrPage={setCurrPage}/>
        <ListProducts products={products} setCurrPage={setCurrPage} currPage={currPage}/>
        </>
    );
}

export default Container;
