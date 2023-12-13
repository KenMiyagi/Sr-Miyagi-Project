import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from "../Components/ProductCard"
import CustomFilters from "../Components/Filters"

const Products = () => {
    const products = useSelector((state)=>state.products)
    const productsPaginate = useSelector((state)=>state.productsPaginate)
  return (
    <div>
        <h2 class="d-flex justify-content-center">A la venta</h2>
        <div class="d-flex" >
        <CustomFilters/>
            <div class="d-flex justify-content-center flex-wrap">
            {
                productsPaginate?.map(({productName, image, description, originalPrice, fridayPrice, type, color, state, size, seasson})=>(
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
        </div>
    </div>
  )
}

export default Products
