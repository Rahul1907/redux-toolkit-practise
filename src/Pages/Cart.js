import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  const onRemoveItem = (item) => {
    dispatch(remove(item.id))
  }

  return (
    <div>
      <h4>Cart</h4>
      {cartItems.map((item) => {
        return (<div className='card' key={item.id}>
          <img src={item.image} />
          <h4>{item.title}</h4>
          <h5>{item.price}</h5>
          <button className='btn' onClick={() => { onRemoveItem(item) }}> Remove Item </button>
        </div>)
      })}
    </div>
  )
}

export default Cart