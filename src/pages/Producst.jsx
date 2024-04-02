import React, { useContext } from 'react'
import { Data } from '../DataProvider'
import './Product.css'
const Producst = () => {

    let {result, setResult} = useContext(Data)

  return (
    <div className='productsContainer'>
        {result?.data?.map((ele, i) => {
            let {id, image, title, category, price} = ele
            return( 
                <div>
                    <img src={image}/>
                    <h2>{title}</h2>
                    <span>{category}</span>
                    <h3>{`$${price}`}</h3>
                </div>
            )
        })}
    </div>
  )
}

export default Producst