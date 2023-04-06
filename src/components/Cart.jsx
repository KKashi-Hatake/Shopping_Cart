import React from "react";
import "../sass/cart.scss";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Cart = () => {
const dispatch=useDispatch()
const inc=(id)=>{
  dispatch({type:"addToCart",payload:{id}})
  dispatch({type:"calculatePrice"})
}
const dec=(id)=>{
  dispatch({type:"decrement",payload:id})
  dispatch({type:"calculatePrice"})
}
const del=(id)=>{
  dispatch({type:"del",payload:id})
  dispatch({type:"calculatePrice"})
}






  const { cart,subTotal,tax,shipping,total } = useSelector((state) => state.cart);
  return (
    <div className="cart">
      <main>
        {
          cart.length>0?(
            cart.map((e) => (
              <CartItem
              key={e.id}
                name={e.name}
                imgSrc={e.imgSrc}
                price={e.price}
                qty={e.qty}
                dec={dec}
                inc={inc}
                del={del}
                id={e.id}
              />
            ))
          ):<h1>No Items Yet</h1>
        }
      </main>
      <aside>
        <h2>Subtotal: ${subTotal}</h2>
        <h2>Shipping: ${shipping}</h2>
        <h2>Tax: ${tax}</h2>
        <h2>Total: ${total}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({ name, imgSrc, price, qty, dec, inc, del, id }) => (
  <div className="cartItem">
    <img src={imgSrc} alt="Item" />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>
    <div>
      <button onClick={() => inc(id)}>+</button>
      <p>{qty}</p>
      <button onClick={() => dec(id)}>-</button>
    </div>
    <AiFillDelete onClick={() => del(id)} />
  </div>
);

export default Cart;
