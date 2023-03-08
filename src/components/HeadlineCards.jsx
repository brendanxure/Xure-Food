import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640] container mx-auto p-4 grid md:grid-cols-3 gap-8 my-10'>
        {/* card */}
        <div className='relative mx-auto w-full'>
            {/* overlay */}
            <div className='absolute text-white w-full pl-2 h-full bg-black/50 rounded-xl'>
                <p className='text-3xl lg:5xl font-bold mt-4 pt-4'>Sun's Out, BOGO's Out</p>
                <p>Through 8/26</p>
                <button className='border-white bg-white text-black absolute bottom-6'>Order Now</button>
            </div>
            <img className='max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=600' />
        </div>
        <div className='relative mx-auto w-full'>
            {/* overlay */}
            <div className='absolute text-white w-full pl-2 h-full bg-black/50 rounded-xl'>
                <p className='text-3xl lg:5xl font-bold mt-4 pt-4'>Sun's Out, BOGO's Out</p>
                <p>Through 8/26</p>
                <button className='border-white bg-white text-black absolute bottom-6'>Order Now</button>
            </div>
            <img className='max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=600' />
        </div>
        <div className='relative mx-auto w-full'>
            {/* overlay */}
            <div className='absolute text-white w-full pl-2 h-full bg-black/50 rounded-xl'>
                <p className='text-3xl lg:5xl font-bold mt-4 pt-4'>Sun's Out, BOGO's Out</p>
                <p>Through 8/26</p>
                <button className='border-white bg-white text-black absolute bottom-6'>Order Now</button>
            </div>
            <img className='max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=600' />
        </div>
    </div>
  )
}

export default HeadlineCards