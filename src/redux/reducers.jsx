
import {createReducer} from "@reduxjs/toolkit"




export const cartReducer=createReducer({
    cart:[],
    total:0,
    shipping:0,
    tax:0,
    subTotal:0
},{
    addToCart:(state,action)=>{
        const item=action.payload;
        const isItemExist=state.cart.find((i)=>i.id===item.id);
        
        if(isItemExist){
            state.cart.forEach((e)=>{
                if(e.id===item.id)
                e.qty+=1;
            })
        }else{
            state.cart.push(item)
        }
    },
    decrement:(state,action)=>{
        const item=state.cart.find((i)=>i.id===action.payload)
        if(item.qty>1){
            state.cart.forEach((i)=>{
                if(i.id===item.id)
                i.qty-=1
            })
        }
    },
    del:(state,action)=>{
        state.cart=state.cart.filter((e)=>e.id!==action.payload)
    },
    calculatePrice:(state)=>{
        let sum=0;
        state.cart.forEach((e)=>sum+=e.price*e.qty)
        state.subTotal=sum
        state.shipping=sum>20000?0:79
        state.tax=+(sum*0.18).toFixed()
        state.total=state.subTotal+state.tax+state.shipping
    },

})