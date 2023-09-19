"use client"

import React, { useState } from 'react';
import { Squash as Ham } from 'hamburger-react'

import { useGlolContext } from '@/context/Global';

const Hamburger = () => {
    const { setHamburgerMenu} = useGlolContext()
    let toggled = false
    return (
       <div className='flex items-center cursor-pointer lg:ml-4' onClick={()=> setHamburgerMenu(true)}>
           <Ham  toggled={toggled}  size={24}/>
           
           <div className='text-lg font-semibold max-lg:hidden' >Продукти</div>
       </div>
    );
}

export default Hamburger;
