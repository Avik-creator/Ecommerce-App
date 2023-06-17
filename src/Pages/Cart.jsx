import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../Store/cartSlice'

export const Cart = () => {
  const dispatch = useDispatch()
  const handleRemove = (productID) => {
    dispatch(remove(productID))
  }

  const products = useSelector(state => state.cart)
  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {
          products.map(product => (
            <div className="cartCard" key={product.id}>
              <img src={product.image} alt='productImage'/>
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button className='btn' onClick={()=> handleRemove(product.id)}>Remove</button>
            </div>
          ))
        }
      </div>

    </div>
  )
}
