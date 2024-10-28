import React from 'react'


const Footer = () => {
  return (
    <div className='max-w-[1000px] mx-auto flex justify-center items-center p-6 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <h3 className='text-3xl text-gray-200 font-semibold text-center'>DevSolt</h3>
            <div className='flex flex-row gap-2 text-gray-400 text-2xl items-center justify-center' >
                <p className='text-sm'>Copyright 2024 - All Rights Reserved</p>

            </div>

        </div>
    </div>
  )
}

export default Footer
