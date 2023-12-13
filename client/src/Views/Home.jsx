import React, { useEffect } from 'react'
import MyCarousel from "../Components/Carousel"
import Warning from "../Components/Warning"
import Products from "../Components/Products"
import { useDispatch } from 'react-redux'
import { getProducts } from '../Redux/Actions/productsActions'

const Home = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getProducts())
  },[])
  return (
    <div>
      {/* <Warning/> */}
      <MyCarousel/>
      <Products/>
    </div>
  )
}

export default Home
