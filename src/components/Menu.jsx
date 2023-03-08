import React, { useState } from 'react'
import { data } from '../data/data'

const Menu = () => {
    const [menu, setMenu] = useState(data)

    const filterFood = (foodtype) => {
        const theFood = data.filter(item => item.category === foodtype )
        setMenu(theFood)
    }

    const filterPrice = (price)=> {
        const thePrice = data.filter(item=> item.price === price)
        setMenu(thePrice)
    }

  return (
    <div className='p-4 max-w-[1640] mx-auto'>
        <h1 className='text-4xl text-center font-bold text-orange-600'>Top Rated Menu Items</h1>
        <div className='mx-auto w-full lg:flex justify-between my-4 container'>
            <div className='w-full'>
                <p className='font-bold text-lg'>Filter Type</p>
                <div className='max-w-[60%] flex flex-wrap justify-between'>
                    <button onClick={()=> setMenu(data)} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white cursor:pointer my-2 font-bold'>All</button>
                    <button onClick={()=> filterFood('burger')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white cursor:pointer my-2 font-bold ml-2'>Burger</button>
                    <button onClick={()=> filterFood('pizza')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white cursor:pointer my-2 font-bold ml-2'>Pizza</button>
                    <button onClick={()=> filterFood('salad')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white cursor:pointer my-2 font-bold ml-2'>Salad</button>
                    <button onClick={()=> filterFood('chicken')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white cursor:pointer my-2 font-bold ml-2'>Chicken</button>
                </div>
            </div>
            <div className='my-4 lg:my-0'>
                <p className='font-bold text-lg'>Filter Price</p>
                <div className='w-[60%] lg:w-[400px] flex-wrap gap-2 flex justify-between'>
                    <button onClick={()=> filterPrice('$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white cursor:pointer my-2 font-bold'>$</button>
                    <button onClick={()=> filterPrice('$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white cursor:pointer my-2 font-bold'>$$</button>
                    <button onClick={()=> filterPrice('$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white cursor:pointer my-2 font-bold'>$$$</button>
                    <button onClick={()=> filterPrice('$$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white cursor:pointer my-2 font-bold'>$$$$</button>
                </div>
            </div>
        </div>
        <div className='w-full mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-12 container'>
            {menu.map((item, index)=> 
            <div key={index} className="shadow-lg hover:scale-105 cursor-pointer duration-300 my-16 md:my-0 rounded-xl">
                <img className='w-full h-[400px] object-cover rounded-t-xl' src={item.image}/>
                <div className='flex justify-between p-4 text-lg font-bold'>
                    <p>{item.name}</p>
                    <p className='bg-orange-600 px-3 rounded-full'><span>{item.price}</span></p>
                </div>
            </div>
            )}
        </div>
    </div>
  )
}

export default Menu