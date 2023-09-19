"use client"
import SwiperPag from '@/swiper/SwiperPag';
import { useEffect, useState } from 'react';

const swiperPag = [
    {
      src: "/images/homeBanner/seriqMaster.jpg",
      key: "Интериони бои Master",
      pageUrl: "/listSeries/master",
      hash: "seriaMaster"
    },
    {
      src: "/images/homeBanner/4Seasons.jpg",
      key: "Фасадни бои 4 Seasons",
      pageUrl: "/listSeries/4-seasons",
      hash: "fourSeasons"

    },
  ];
  
const HeroSection = () => {
  const [hash,setHash] = useState(swiperPag[0].hash)

  useEffect(()=>{
    const getHash = ()=>{
     setHash(window.location.hash.slice(1))
    }
   window.addEventListener("hashchange", getHash);
    return ()=>{
      window.removeEventListener("hashchange",getHash )
    }
  },[])
    return (
        <div className="container ">
        <section className="relative w-full lg:grid grid-cols-[20%80%] space-x-10 bg-white shadow-lg mb-5">
        <section className='flex flex-col mt-5 space-y-2 bg-white'>
            {swiperPag.map(swiper=>{
              return <a href={`#${swiper.hash}`} className={`${hash == swiper.hash && "bg-sky-100 "} py-2 text-lg pl-4`}  key={swiper.hash}>{swiper.key}</a>
            })}
        </section>
          <section className="relative flex items-center justify-center h-full ">
            <SwiperPag images={swiperPag} navSize="3xl" />
          </section>
        </section>
      </div>
    );
}

export default HeroSection;
