
import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:99,
            name:'Phone',
            qty:1
        }
    }
   render(){
       const {price,name,qty}=this.state;
       return (
           <div className="cart-item">
               <div className="left-block">
                  <img style={styles.image} src="./images/iphone.png"alt="no display"/>
               </div>
               <div className="right-block">
                  <div style={productName.name}>{name}</div>
                  <div style={{color:'#777',fontWeight:500}}>Price : ${price}</div>
                  <div style={{color:'#777',fontWeight:500}}>Quantity : {qty}</div>
                  <div className="cart-item-actions">
                      {/*buttons*/}
                      <img alt="increase" className="action-icons" src="./images/add.png"/>
                      <img alt="decrease" className="action-icons" src="./images/minus.png"/>
                      <img alt="delete" className="action-icons" src="./images/delete.png"/>



                  </div>
               </div>

           </div>
       );
   }
}
const styles={
    image:{
      height:110,
      width:110,
      borderRadius:6,
      background:'white',
    }
  }
const productName={
    name:{
        fontSize:30,
        color:'#307fe2',
        fontWeight:800
    }
}
export default CartItem;