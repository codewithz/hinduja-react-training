import React,{useState} from 'react'
import ProductComponent from './ProductComponent'

export default function CartHome() {

   const orders=[
       {product:'Bread',qty:1},
       {product:'Butter',qty:2},
       {product:'Jam',qty:1},
       {product:'Maggi',qty:5},
       {product:'Eggs',qty:6},
   ]

   const [cart,setCart]=useState(orders);

    return (
        <div>
            
           {cart.map(item=>
                <ProductComponent product={item.product} />
            )}
          
           
            
            
        </div>
    )
}
