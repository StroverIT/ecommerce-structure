import React from 'react';

import Image from "next/image";

// Components
import Hamburger from "@/components/Layout/NavComps/Hamburger"

const LeftPart = () => {
    return (
        <section className="flex">
            <div className="relative w-[250px] h-[50px]"><Image src="/logo.png" fill alt="`companyLogo`"/></div>
            <div className='max-lg:hidden'><Hamburger/></div>
        </section>
    );
}

export default LeftPart;
