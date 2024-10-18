import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1000px] mx-auto flex justify-center items-center gap-10 p-6 md:p-10 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>Ahsan Naseem</h3>
            <div className='flex flex-row gap-6 text-gray-400 text-2xl items-center justify-center' >
                <a href="https://github.com/ahsannaseem1" target='blank' className='hover:scale-150 transition-transform'><FaGithub/></a>
                <a href="https://www.instagram.com/ahsanzart" target='blank' className='hover:scale-150 transition-transform'><FaInstagram/></a>
                <a href="https://pk.linkedin.com/in/ahsan-naseem-779075253" target='blank' className='hover:scale-150 transition-transform'><FaLinkedinIn/></a>
            </div>

        </div>
    </div>
  )
}

export default Footer
