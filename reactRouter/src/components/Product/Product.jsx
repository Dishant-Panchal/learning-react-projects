import React from 'react'
import { useParams } from 'react-router-dom'

function Product() {
    const {productId} = useParams();    
  return (
    <div className='px-2 py-2 bg-blue-400 text-white'>
      <h1 className='text-2xl text-center font-bold'>ProductDetail: {productId || "No data"}</h1>
    </div>
  )
}

export default Product
