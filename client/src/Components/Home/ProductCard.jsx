import React from 'react'
import testImg from "../../../pictures/vertical.jpg"

const ProductCard = (props) => {
    const {productName, image, description, originalPrice, fridayPrice, type, color, state, size, seasson} = props
  return (
    <div className="card mx-2 my-5 " style={{ width: "18em" }}>
        <img
        src={testImg}
        className="card-img-top"
        alt="..."
        />
        <div className="card-body">
        <h5 className="card-title ">{productName}</h5>
        <p className="card-text">
        {description}
        </p>
        <a href="#" className="btn btn-primary">
            Ver más
        </a>
        </div>
    </div>
  )
}

export default ProductCard
