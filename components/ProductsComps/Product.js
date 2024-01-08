import React from "react";

// NextJs
import Image from "next/image";
import Link from "next/link";
//Components
import Pricing from "@/components/ProductsComps/Pricing";

export default function Product({
    imageUrl,
    price,
    name,
    route
}) {

  return (
    <section className="flex items-center mb-5 transition-shadow border shadow-md border-gray hover:shadow-xl">
      <div className="flex flex-col justify-between w-full h-full">
        <div className="items-center h-full ">
          {imageUrl && (
            <Link
              href={route}
            >
              <div className="relative flex items-center justify-center w-full h-64 cursor-pointer ">
                <Image
                  src={`/uploads/${imageUrl && imageUrl}`}
                  layout="fill"
                  alt={`${imageUrl}`}
                  className="object-contain"
                />
              </div>
            </Link>
          )}
        </div>
        <div className="container text-center border-y border-gray">
          <div className="">
            <Pricing price={price[0]} priceDec={price[1]} size="2xl" />
          </div>
          {/* Create grayer color for future*/}
        </div>
        <div className="container flex flex-col justify-between h-full py-5 mt-auto text-center">
          <div className="">
            <Link href={route}>
              <h2 className="cursor-pointer ">{name}</h2>
            </Link>
          </div>
         
        </div>
      </div>
    </section>
  );
}
