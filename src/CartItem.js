
import React from 'react';

class CartItem extends React.Component{
   render(){
       return (
           <div className="cart-item">
               <div className="left-block">
                  <img style={styles.image} alt="no display"/>
               </div>
               <div className="right-block">
                  <div style={productName.name}>Phone</div>
                  <div style={{color:'#777'}}>$99</div>
                  <div style={{color:'#777'}}>qty 1</div>
                  <div className="cart-item-actions">
                      {/*buttons*/}

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
      background:'#777'
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