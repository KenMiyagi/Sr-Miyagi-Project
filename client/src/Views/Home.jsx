import React, { useEffect } from 'react'
import MyCarousel from "../Components/Home/Carousel"
import Warning from "../Components/Home/Warning"
import Products from "../Components/Home/Products"
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
