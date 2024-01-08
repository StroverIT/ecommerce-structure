import GlowBtn from '@/components/Buttons/GlowBtn/GlowBtn';
import React from 'react';

const Page = () => {
    return (
        <Container/>
    );
}

export default Page;

function Container(){
    return(
        <section className='grid grid-cols-2 px-10 shadow-xl'>
            <section>
                <ul>
                    <ListItem/>
                </ul>
            </section>
            <section className='ml-auto'>
                <GlowBtn text="Виж поръчката" />
            </section>

        </section>
    )
}

function ListItem(){
   
    return  <li className='flex justify-between w-full'><div>Номер на поръчката: </div><div>6956897</div></li>
}