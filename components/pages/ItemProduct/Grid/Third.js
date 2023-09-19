"use client";

import { useRouter } from "next/navigation";

import React, { useState } from "react";

import Weight from "@/pages/ItemProduct/Grid/Third/Weight"
const Third = ({ data, slug, params }) => {
    
  const [productId, articleId, itemId] = slug

    const router = useRouter()
  const [article, setArticle] = useState(
    data?.articles?.find((article) => article._id == productId)
  );

  const changeArticle = (routerArticle) => {
    router.push(
      `/products/${params.sectionName}/${productId}/${routerArticle._id}/${routerArticle.items[0]._id}`,
      undefined,
      { shallow: true }
    );
    setArticle(routerArticle);
  };

  const changeItem = (item) => {
    router.push(
      `/products/${params.sectionName}/${productId}/${article._id}/${item._id}`,
      undefined,
      { shallow: true }
    );
  };
  if(!article){ 
    return <div className="text-xl flex-center">Зарежда се...</div>
  }
  return (
    <section className="flex flex-col justify-center h-full p-10">
      <section className="">
        <div className="flex flex-wrap justify-center mb-10 gap-y-2 gap-x-2">
          {data &&
            data.articles.map((article) => {
              if (article.name) {
                return (
                  <div
                    key={article._id}
                    className={`inline-block px-8 text-center border cursor-pointer w-max  transition-transform text-sm ${
                      searchParams.article == article._id
                        ? "bg-blue-500 text-white border-primary-lighter"
                        : "hover:-translate-y-1 border-gray bg-white"
                    }`}
                    onClick={() => changeArticle(article)}
                  >
                    {article.name}
                  </div>
                );
              }
            })}
        </div>
        <Weight article={article} changeItem={changeItem} searchParams={searchParams} data={data}/>
      </section>
    </section>
  );
};

export default Third;
