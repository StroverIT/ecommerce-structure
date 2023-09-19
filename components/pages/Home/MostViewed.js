import React from 'react';

import SwiperFreeMode from "@/swiper/SwiperFreeMode";
import MostViewedTempData from "@/data/MostViewedTempData"

const MostViewed = () => {

    return (
        <section className="mb-5 ">
          <div className="container">
            <h1 className="mb-3 text-xl font-semibold">Най-гледани</h1>
            <SwiperFreeMode data={MostViewedTempData} navSize="3xl" />
          </div>
        </section>
    );
}

export default MostViewed;
