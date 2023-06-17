import React, {useState, useEffect} from 'react'
import {add} from '../Store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, STATUSES } from '../Store/productSlice';

export const Product = () => {
  const dispatch = useDispatch()
  const {data: products, status} = useSelector((state)=> state.product)
  


  useEffect(()=> {
    dispatch(fetchProducts())
    // const fetchProducts = async () => {
    //   const res = await fetch('https://fakestoreapi.com/products')
    //   const data = await res.json()
    //   console.log(data)
    //   setProducts(data)
    // }
    // fetchProducts()
  }, [])

  function handleAdd(product) {
    dispatch(add(product))
  }

  if (status === STATUSES.LOADING){
    return (
      <iframe src="https://embed.lottiefiles.com/animation/83357" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}></iframe>
    )
  }

  if (status === STATUSES.ERROR){
    return (
      <iframe src="https://embed.lottiefiles.com/animation/98642" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}></iframe>
    )
  }



  return (
    <div className='productsWrapper'>
      {
        products.map(product => (
          <div className='card' key={product.id}>
            <img src={product.image} alt=''/>
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={()=> handleAdd(product)} className='btn'>Add to Cart</button>
          </div>
        )
      )}
    </div>
  )
}
