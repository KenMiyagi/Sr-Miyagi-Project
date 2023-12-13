import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from "../Components/ProductCard"

const Products = () => {
    const products = useSelector((state)=>state.products)
  return (
    <div>
      {
        products?.map(({productName, image, description, originalPrice, fridayPrice, type, color, state, size, seasson})=>(
            <ProductCard
            productName={productName}
            image={image}
            description={description}
            originalPrice={originalPrice}
            fridayPrice={fridayPrice}
            type={type}
            color={color}
            state={state}
            size={size}
            seasson={seasson}
            />
        ))
      }
    </div>
  )
}

export default Products
