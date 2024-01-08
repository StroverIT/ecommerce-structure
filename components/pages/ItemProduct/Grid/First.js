import React from 'react';
import ThumbsGallery from "@/swiper/ThumbsGallery";

const First = ({foundItem}) => {
    return (
        <section className="">
                <ThumbsGallery navSize="2xl" image={foundItem.imageUrl} />
              </section>
    );
}

export default First;
