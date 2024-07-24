import { NavLink } from 'react-router-dom'
import {LOGO_URL} from '../utils/constants' 
import {useState} from 'react';
import useOnlineStatus from '../utils/useOnlineStatus';
import Grocery from './Grocery'; 
import { useSelector } from 'react-redux';


const Header = ()=>{
    const [btn,setbtn] = useState('login')
    const onlineStatus=useOnlineStatus(); 
    const cart = useSelector(store => store.cart.items) 
    console.log(cart)
    return (
        <div className="flex justify-between border  py-3 px-2 bg-yellow-100  ">
            <div className='logo-container w-24 p-2 ml-10 '>
              <img className='rounded-full w-full h-full' src={LOGO_URL}/>
            </div>
            <div className="nav-items m-3 p-2 flex justify-center items-center ">
                <ul className='flex gap-x-8'>  
                    {/* <li className="px-2 hover:bg-zinc-200" >
                        <NavLink to="/grocery">Grocery</NavLink>
                    </li> */}
                    {/* <li className='px-2 text-green-500'>
                    {onlineStatus ? "online" : "offline"}
                    </li> */}
                    <li className="px-2" >
                        <NavLink className={({isActive})=> isActive ? ' bg-gray-200 p-5 rounded-lg text-lg' : ""} to="/">Home</NavLink>
                    </li>
                    <li className='px-2  '>
                     <NavLink className={({isActive})=> isActive ? ' bg-gray-200 p-5 rounded-lg text-lg' : ""} to="/contact">Contact </NavLink>  
                    </li> 
                    <li className='px-2 '>    
                      <NavLink className={({isActive})=> isActive ? ' bg-gray-200 p-5 rounded-lg text-lg' : ""} to="/about">About Us</NavLink>  
                    </li>
                    <li className='px-2 relative'>
            <NavLink
                className={({ isActive }) => isActive ? 'bg-gray-200 p-5 rounded-lg text-lg' : ''}
                to="/cart"
            >
                {({ isActive }) => (
                    <>
                        <div className={`absolute bg-red-400 px-2 py-1 text-[10px] ${isActive ? ' py-0 leading-3 px-2 left-14' : 'left-8'} bottom-3 text-white font-bold rounded-full`}>
                            {cart.length}
                        </div>
                        Cart
                    </>
                )}
            </NavLink>
        </li>
                   
                </ul>
            </div>
        </div>  
        
    )
}

export default Header;