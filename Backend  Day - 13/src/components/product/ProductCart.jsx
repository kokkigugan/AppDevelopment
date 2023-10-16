import React from "react"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { cartActions } from "../../store/cartSlice"
import axios from "axios"

export const ProductCart = ({ key, id, cover, name, price }) => {
  const dispatch = useDispatch()

  const getdata = async() => {
    const response = await axios.post("http://localhost:8181/api/cart/add",
    { id,name,price });
    console.log(response.data);
  }
  const addToCart = () => {
    getdata();
    dispatch(cartActions.addToCart({ id, name, price, cover }))

  }
  return (
    <>
      <div className='box boxItems' id='product'>
        <div className='img'>
          <Link>
            <img src={cover} alt='cover' />
          </Link>
        </div>
        <div className='details'>
          <h3>${price}</h3>
          <p>{name}</p>
          <button onClick={addToCart}>
            <AiOutlinePlusCircle />
          </button>
        </div>
      </div>
    </>
  )
}
