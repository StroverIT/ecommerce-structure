import GlowBtn from '@/components/Buttons/GlowBtn/GlowBtn'
import GoogleInputs from '@/components/Inputs/GoogleInputs'
import React from 'react'

export default function page() {
  return (
    <>
      <section className='p-10 bg-white shadow-xl'>
      <h2 className='mb-4 text-xl font-semibold'>Секция</h2>
        
        {/* Section */}
        <GoogleInputs placeholder='Име на секцията' name="name" />
      
      </section>
      <section className="my-4 flex-center">
        <GlowBtn text='Добави Продукт' icon="plusCircle" iconPos='left' className='px-10 font-semibold' classNameIcon='px-2 text-3xl'/>
      </section>
      <section className='p-10 bg-white shadow-xl'>
      <h2 className='mb-4 text-xl font-semibold'>Продукт</h2>

         {/* Product */}
      <section className="grid grid-cols-2 gap-x-10">
        <GoogleInputs placeholder='Име на продукта' name="name" />
        <GoogleInputs placeholder='Снимка' name="image" />
        <GoogleInputs placeholder='Описание' name="description" />


      </section>
      {/* Article */}
      <section className="grid grid-cols-2 p-4 gap-x-10">
        <GoogleInputs placeholder='Име на артикула' name="name" />


      </section>
      {/* Item */}
      <section className="grid grid-cols-2 p-6 gap-x-10">
        <GoogleInputs placeholder='Features' name="name" />


      </section>

      </section>
    </>
  )
}
