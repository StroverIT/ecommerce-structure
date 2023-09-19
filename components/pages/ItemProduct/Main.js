import React from "react";

// Nextjs
import Image from "next/image";

// Grid
import First from "@/pages/ItemProduct/Grid/First";
import Second from "@/pages/ItemProduct/Grid/Second";
import Third from "@/pages/ItemProduct/Grid/Third";
import Fourth from "@/pages/ItemProduct/Grid/Fourth";

// Swipers
import SwiperFreeMode from "@/swiper/SwiperFreeMode";

const Main = ({
  hash,
  foundItem,
  product,
  data,
  setProduct,
  params,
  slug,
}) => {
  

  const itemName = `${foundItem.name} ${product?.article?.name} ${product?.item?.weight} ${foundItem?.itemUnit}`;

 

  

  return (
    <main className="font-sans bg-white ">
      <div className="">
        <div className="container">
          <div className="flex flex-col justify-between py-5 mt-5 text-gray-500 md:flex-row ">
            <div className="flex items-center text-3xl font-semibold text-gray-250 ">
              <div className="ml-1 ">{itemName && itemName}</div>{" "}
            </div>
            {/* <div className="mt-5 md:mt-1">
                <ul className="text-sm text-right text-gray-250">
                  <li>Код: 23141412</li>
                  <li>КатНомер: {product.item.katNomer}</li>
                </ul>
              </div> */}
            <div className="relative w-40 h-14">
              <Image alt="Kraft" src="/icons/kraftLogo.png" layout="fill" />
            </div>
          </div>
          <div className="grid-cols-2 lg:grid xl:grid-cols-[20%25%25%25%] items-center justify-evenly gap-x-4">
            <First foundItem={foundItem} />
            <Second foundItem={foundItem} />
            <Third
              data={foundItem}
              slug={slug}
              params={params}
            />
            <Fourth product={product} itemName={itemName}/>
          </div>
        </div>
      </div>
      <div className="container">
        <section className="relative pt-10 pb-10 my-16 border border-gray-150">
          <h3 className="absolute px-4 text-2xl font-semibold text-center uppercase -translate-x-1/2 bg-white -top-5 left-1/2 text-cyan-600">
            Описание
          </h3>
          <div className="flex px-20 ml-4 sm:ml-10">
            <ul className="grid list-disc lg:grid-cols-2 gap-x-20">
              {foundItem.description[0].split("\n").sort((a,b) => b.length - a.length).map((description) => {
                return <li key={description} className="mt-1 text-xl">{description}</li>;
              })}
            </ul>
          </div>
        </section>
      </div>
      <section className="py-24">
        <SwiperFreeMode data={data.alternatives} />
      </section>
    </main>
  );
};

export default Main;
