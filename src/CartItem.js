import { div } from 'prelude-ls';
import React from 'react';

const CartItem=(props)=>{
    
    
   
    
    
    const {name,price,qty,image}=props.product;
       /*  const arr=[1,2,3,4]; */
        return (
            
            <div className="cart-item" style={{border:2,borderRadius:6,width:'20vw',margin:20,background:'black',padding:10,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                
                <div className="left-block">
                    <img src={image} style={styles.image} alt="Iphone"/>
                </div>
                <div className="right-block">
                    <div style={styles.name}>{name} </div>
                    <div style={{color:'white',fontSize:25}}>Price : ${price}</div>
                    <div style={{color:'#307fe2',fontSize:40}}> Quantity : {qty}</div>
                    <div style={styles.total}>

                        total : $ {price*qty}
                    </div>
                    <div className="cart-item-actions" style={styles.icongroup}>
                        <img src="https://image.flaticon.com/icons/png/512/2037/2037400.png" className="cart-icons" style={styles.icons} onClick={()=> props.onIncreaseQuantity(props.product)} alt="" />
                        <img src="https://image.flaticon.com/icons/png/512/753/753340.png" className="cart-icons" style={styles.icons}   onClick={()=>props.onDecreaseQuantity(props.product)} alt="" />
                        <img src="https://image.flaticon.com/icons/png/512/3221/3221897.png" className="cart-icons" style={styles.icons} alt="" onClick={()=>props.onDelete(props.product)} />

                    </div>

                </div>

            </div>
        )
    
}
const styles={
    icons :{
        height:40,
        width:40,
        margin:5,background:'#ffffff',
        borderRadius:'50%'
    },
    icongroup:{
        flex:1,
        marginTop:20

    },
     image:{
        height:200,
        width:200,
        borderRadius:6,
        background:'white',
      },
      name:{
          fontSize:30,
          color:'#ffffff',
          fontWeight:800
      },
      total:{
          fontSize:35,
          color:'#ffffff',
          fontWeight:600    
      }
}

export default CartItem;