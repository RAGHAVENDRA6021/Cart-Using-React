import React from 'react';

const Navbar=(props)=>{
   
   
        const count= props.count;
    return(
        <div className="navcart" style={styles.nav}>
        <div  style={styles.name}>
                   E-commerce
                </div>
                <div>
                    <img src="https://img-premium.flaticon.com/png/512/3714/premium/3714918.png?token=exp=1629286934~hmac=8ad46718cde0e6f7a9ab37d6aeac6378" style={styles.image} alt="" />
                    <span style={styles.cnt} >{count}</span>
                </div>

            </div>
        )
    
}
export default Navbar;
const styles={
    nav:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding: 20,
        background:'yellow',
        opacity : 0.8,position: '-webkit-sticky',
        position: 'sticky',
        top: 0
    },
    name:{
        fontSize:45,
        

    },
    image:{
        height:50,
        width:50,
        border:'2px solid grey'
    },
    cnt:{
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-end',
        fontSize:40,color:'#307fe2',background:'#ffffff',
        borderRadius:'50%',opacity:1
        
    },
    navbar :{
        
        position: '-webkit-sticky',
    position: 'sticky',
    top: 0
       
      }
}