import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640] mx-auto p-4'>
        <div className='container relative mx-auto flex flex-col'>
            {/* Overlay */}
            <div className='absolute w-full h-full flex flex-col text-white font-bold rounded-xl text-4xl md:text-5xl lg:text-6xl justify-center bg-black/80 pl-4'>
                <h1>The <span className='text-orange-600'>Best</span></h1>
                <h1><span className='text-orange-600'>Foods</span> Delivered</h1>
            </div>
            <img className='w-full max-h-[600px] object-cover rounded-xl' src='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        </div>
    </div>
  )
}

export default Hero