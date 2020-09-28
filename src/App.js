import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products ={
    one:{name :"adobe rs " , price :"$56"},
    two:{name :"adobe ps", price : "$67"},
    three:{name :"adobe hs", price : "$97"}

  }

  let value=[
    {name :"adobe rs " , price :"$56"},
    {name :"adobe ps", price : "$67"},
    {name :"adobe hs", price : "$97"}
  ]

  let nayoks =["amit-hasan","razzak","munna","alomgir"]
  

 
  



  





  return (
    <div className="App">

      <Users >

      </Users>
     
      <Product product ={products.one}>

      </Product>
      <Product product={products.two}>

      </Product>
      <Product product={products.three}>

      </Product>
     


      <ul>
        {
          nayoks.map(nayok=> <li>{nayok}</li>)
        }
      </ul>

      <div>
        {
          value.map(element=><h1>{element.price}</h1>)
        }
      </div>

      <Counter>

      </Counter>

      
      
      
   




    </div>
  );
}







function Users(){
  let design ={
    backgroundColor:"pink",
    borderRadius:"15px",
    margin:"10px",
    padding:"15px"
  }
  const [users , setUsers]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return(
    <div style={design}>
      <h1>Dynamic users:{users.length} </h1>
      <ul>
        {
          users.map(element=> <li>{element.name}</li>)
        }
      </ul>
    </div>
  )
}





function Counter(){

  


  const [count, setCount] = useState(1000)
  return (
    <div>
      <h1>Count : {count} </h1>
      <button onClick={()=>{
        setCount(count+1)
      }}>Increase</button>
      <button onClick={()=>{
        setCount(count-1)
      }}>Decrease</button>

    </div>
  )
}





function Product (props){
  console.log(props)
  let design ={
    backgroundColor:"yellow",
    borderRadius:"15px",
    margin:"10px",
    padding:"15px"
  }
  return (
    <div style={design}>
      <h1> name: {props.product.name}</h1>
      <h4> price :{props.product.price}</h4>
    </div>
  )
}

export default App;
