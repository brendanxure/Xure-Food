import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from "react-icons/ai"
import {BsFillCartFill, BsFillSaveFill} from "react-icons/bs"
import {TbTruckDelivery} from "react-icons/tb"
import {MdFavorite, MdHelp} from "react-icons/md"
import {FaWallet, FaUserFriends} from "react-icons/fa"


const Navbar = () => {
    
    const [nav, setNav] =useState(false)
  return (
    <div className='container mx-auto flex justify-between p-2 z-10'>
        {/* left side */}
        <div className='flex items-center'>
            <span onClick={()=> setNav(!nav)} className='cursor-pointer'>
                <AiOutlineMenu size={30} />
            </span>
            <h1 className='text-2xl sm:text-3xl lg:text-5xl px-2'>
                Xure <span className='font-bold'>Foods</span>
            </h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1'>
                <p className='p-2 bg-black text-white rounded-full'>Delivery</p>
                <p>Pickup</p>
            </div>
        </div>
        {/* search input */}
        <div className='flex bg-gray-200 items-center rounded-full w-[200px] sm:w-[400px] lg:w-[500px] p-1'>
            <AiOutlineSearch size={25} className="ml-4" />
            <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Search foods' />
        </div>
        {/* cart-button */}
        <button className='bg-black text-white items-center py-2 hidden md:flex'>
            <BsFillCartFill size={20} className="mr-2" /> Cart
        </button>

        {/* mobile menu */}
        {/* overlay */}
        {nav && <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>}
        {/* side drawer menu */}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <AiOutlineClose onClick={()=> setNav(false)} size={30} className="absolute right-4 top-4 cursor-pointer" />
            <h2 className='text-2xl p-4'>
                Xure <span className='font-bold'>Foods</span>
            </h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='flex gap-4 hover:shadow-xl hover:ml-2 duration-300 hover:bg-orange-600 text-xl p-1 cursor-pointer py-4'><TbTruckDelivery size={25} /> Orders</li>
                    <li className='flex gap-4 hover:shadow-xl hover:ml-2 duration-300 hover:bg-orange-600 p-1 cursor-pointer text-xl py-4'><MdFavorite size={25} /> Favourites</li>
                    <li className='flex gap-4 hover:shadow-xl hover:ml-2 duration-300 hover:bg-orange-600 p-1 cursor-pointer text-xl py-4'><FaWallet size={25} /> Wallet</li>
                    <li className='flex gap-4 hover:shadow-xl hover:ml-2 duration-300 hover:bg-orange-600 p-1 cursor-pointer text-xl py-4'><MdHelp size={25} /> Help</li>
                    <li className='flex gap-4 hover:shadow-xl hover:ml-2 duration-300 hover:bg-orange-600 p-1 cursor-pointer text-xl py-4'><AiFillTag size={25} /> Promotions</li>
                    <li className='flex gap-4 hover:shadow-xl hover:ml-2 duration-300 hover:bg-orange-600 p-1 cursor-pointer text-xl py-4'><BsFillSaveFill size={25} /> Best Ones</li>
                    <li className='flex gap-4 hover:shadow-xl hover:ml-2 duration-300 hover:bg-orange-600 p-1 cursor-pointer text-xl py-4'><FaUserFriends size={25} /> Invite Friends</li>
                </ul>
            </nav>
        </div>
        
    </div>
  )
}

export default Navbar