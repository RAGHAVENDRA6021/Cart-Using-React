
import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:99,
            name:'IPhone',
            qty:1,
            total:99
        }
        //this.increaseQuanity=this.increaseQuanity.bind(this);
    }
    increaseQuantity = () =>{
        console.log(this);
      var x=this.state.qty
      x+=1
      var sum=x*this.state.price
    //set state form 1
    this.setState({
       qty: x,
       total:sum
    });
   
    }
    decreaseQuantity =()=>{
        var x=this.state.qty;
        if(x>1){
            this.setState({
                qty:x-1,
                total:this.state.total-this.state.price
            })
        }
    }
   render(){
       const {price,name,qty,total}=this.state;
       return (
           <div className="cart-item">
               <div className="left-block">
                  <img style={styles.image} src="./images/iphone.png"alt="no display"/>
               </div>
               <div className="right-block">
                  <div style={styles.name}>{name}</div>
                  <div style={{color:'#777',fontWeight:500}}>Price : ${price}</div>
                  <div style={{color:'#777',fontWeight:500}}>Quantity : {qty}</div>
                  <div className="cart-item-actions">
                      {/*buttons*/}
                      <img alt="increase" className="action-icons" src="./images/add.png"onClick={this.increaseQuantity} />
                      <img alt="decrease" className="action-icons" src="./images/minus.png" onClick={this.decreaseQuantity}/>
                      <img alt="delete" className="action-icons" src="./images/delete.png"/>
                  </div>
                  <div style={styles.total}>Total :${total}</div>
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
    },
    name:{
        fontSize:30,
        color:'#307fe2',
        fontWeight:800
    },
    total:{
        fontSize:35,
        color:'#373737',
        fontWeight:600    
    }
  }


export default CartItem;