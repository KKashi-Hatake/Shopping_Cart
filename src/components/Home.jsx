import React from "react";
import "../sass/Home.scss"
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpeg";
import toast from "react-hot-toast"
import {useDispatch} from "react-redux"




const Home = () => {

const productList=[{
  name:"Mac Book",
  price:11999,
  imgsrc:img1,
  id:1
},
{
  name:"Black Shoes",
  price:499,
  imgsrc:img2,
  id:2
}]
const dispatch=useDispatch()
const addToCartHandler=(options)=>{
  dispatch({type:"addToCart",payload:options})
  dispatch({type:"calculatePrice"})
  toast.success("Added to cart")
}


  return (
<div className="wrapper">
  {
    productList.map((e)=>(
      <ProductCard 
        key={e.id}
        name={e.name}
        imgSrc={e.imgsrc}
        price={e.price}
        id={e.id}
        handler={addToCartHandler}
      />
    ))
  }
</div>
  );
};


const ProductCard=({name,price,imgSrc,id,handler})=>(
  <div className="productcard">
    <img src={imgSrc} alt={name}/>
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={()=>handler({name,price,imgSrc,id,qty:1})}>Add to cart</button>

  </div>
)





export default Home;



