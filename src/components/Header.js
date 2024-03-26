import {LOGO_URL} from '../utils/constants' 
import {useState} from 'react'


const Header = ()=>{
    const [btn,setbtn] = useState('login')
    return (
        <div className="flex justify-between border  py-2 px-2 bg-red-50">
            <div className='logo-container w-20 md:w-24 p-2'>
              <img className='rounded-full ' src={LOGO_URL}/>
            </div>
            <div className="nav-items m-3 p-2">
                <ul className='flex '>  
                    <li className="px-2 hover:bg-zinc-200" >
                        Home
                    </li>
                    <li className='px-2 hover:bg-zinc-200'>    
                        About us
                    </li>
                    <li className='px-2 hover:bg-zinc-200'>
                        Cart
                    </li>
                    <li className='px-2 hover:bg-zinc-200'>
                    </li>   
                    <li>
                    <button className='px-2  border border-gray-500 w-20 h-10 hover:bg-zinc-200 bg-pink-500 ' onClick={()=> { return btn==='login'?setbtn('logout'):setbtn('login')}}>
                      {btn}
                    </button>   
                     </li>    
                          
                   
                </ul>
            </div>
        </div>  
        
    )
}

export default Header;