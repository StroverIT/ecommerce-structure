"use client"
import React from 'react';

type Button = {
    onClick: ()=> void
}
const Button = ({onClick}: Button) => {
    return (
        <form action={onClick}>
        <button className='bg-white text-red'  type='submit'>Тествам брат</button>
        </form>

    );
}

export default Button;
