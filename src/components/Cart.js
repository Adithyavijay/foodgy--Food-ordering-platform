  import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListItem from './ListItem'
import { clearCart } from '../utils/cartSlice'

  const Cart = () => { 
    const dispatch= useDispatch()

    const handleClearCart=()=>{
        dispatch(clearCart())

    }

    const cartItems = useSelector(store=>store.cart.items)
    return (
      <div className='text-center m-4 p-4'>
        <div className='text-3xl font-bold'>
          Cart
        </div> 
        <button onClick={handleClearCart} className='bg-black text-white p-1 rounded-lg'>Clear cart</button>
        <div className='w-6/12 m-auto my-8'>
          {cartItems.length===0 ? <div className={ `${cartItems.length===0 ? ' my-24' : ''} font-medium ` }>Cart is empty . Add items to the cart  </div> : <ListItem item = {cartItems } /> }
          
        </div>


      </div>
    )
  }

  export default Cart