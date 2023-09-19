import React from 'react';

import GoogleInputs from '@/components/Inputs/GoogleInputs';
import GlowBtn from '@/components/Buttons/GlowBtn/GlowBtn';
import Icons from '@/components/Icons/Icons';


type TContainer = {
    title: string
    paragraph?: string
    icon?: string
    key?: string
    isLast?: boolean


}
// Private information
const Page = () => {
    return (
        <>
            <h2 className='mt-4 mb-4 text-3xl font-semibold'>Настройки</h2>
            <section className='py-5 border border-gray-300 shadow-xl '>
                <section className="container lg:px-2">
                    <h3 className='text-lg font'>Данни за профила</h3>
                    
                                <section className='mt-4'>
                                    <Container title="Име" icon="email"/>
                                    <Container title="Email" icon="email"/>
                                    <Container title="Парола" icon="email" isLast={true}/>
                                </section>

                </section>
               </section>
        </>
    );
}

export default Page;


function Container(props: TContainer) {
    return (
            <section className={`flex items-center justify-between py-4 ${!props.isLast ? "border-b border-gray-300" : ""} `}>
               <section className='flex items-center '>
                    <div className='px-4 text-4xl'><Icons iconType={props.icon}/></div>
                    <section className='ml-4 text-sm'>
                        <h4>
                            {props.title}:
                        </h4>
                        <p className='mt-1'>Емил Златинов</p>
                    </section>
               </section>
               <section>
                <GlowBtn text='Редактирай' theme="black" isBg={false} classNameText='text-black' className='px-4 border-2 border-black'/>
               </section>
            </section>
    )
}