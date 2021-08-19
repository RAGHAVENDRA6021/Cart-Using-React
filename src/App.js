
import React from 'react';
import './App.css';
import Cart from './Cart'
import Navbar from './Navbar';
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>

class App extends React.Component {
    constructor(){
        super();
        this.state={
        products:[{
            name:'watch',
            price : 62,
            qty : 1,
            total : 62,
            image:'./images/iphone.jpg',
            id:1
        },
        {
            name:'earphones',
            price : 55,
            qty : 1,
            total : 55,
            image:"./images/headphones.jpg",
            id:2
        },
        {
            name:'Iphone',
            price : 999,
            qty : 1,
            total : 999,
            image:"./images/shoes.jpg",
            id:3
        }
    ]
    }}
    handleIncreaseQuantity= (product) =>{
        const {products}=this.state;
       
        const index= products.indexOf(product);
        products[index].qty+=1;
        products[index].total=products[index].qty*products[index].price;
        this.setState({
            products:products
        })
    }
    handleDecreaseQuantity=(product)=>{
        const {products}=this.state;
        const index= products.indexOf(product);
        if(products[index].qty<1){
            return;
        }
        products[index].qty-=1;
        products[index].total=products[index].qty*products[index].price;
        this.setState({
            products:products
        });
    }
    handleDelete=(product)=>{
        console.log("hi")
        const {products} = this.state;
        const items= products.filter((item)=>  {
            
            return item.id!==product.id})
        console.log(items)
        this.setState({
            products:items
        });
    }
    getCartCount=()=>{
        const {products}=this.state;
        var sum=0;
        for(var i=0;i<products.length;i++){
            sum+=products[i].qty;
        }
        return sum;
    }
    render(){
        const {products}=this.state;
    return (
         <div className = "App" >
             <Navbar  count={this.getCartCount()}/>
        
        <div className="arrange">
        <Cart products={products}
         onIncreaseQuantity={this.handleIncreaseQuantity} 
         onDecreaseQuantity={this.handleDecreaseQuantity} 
         onDelete={this.handleDelete}/>
     
        </div>
        
</div >
    );
    }
}

export default App;