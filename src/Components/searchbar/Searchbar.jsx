import React, { useEffect , useState} from 'react'
import './searchbar.css'
import {Card, Row, Col} from 'react-bootstrap'
import {ImSearch} from 'react-icons/im'



function Searchbar() { 

const [data, setData] = useState('') 


useEffect(() => {
fetch('https://fakestoreapi.com/products') 
.then((res) => res.json()) 
.then((res => setData(res)))
.catch((err) => console.error(err))
}, [])

  return (
   <div> 
     <div className="searchbarContainer">
        <input 
        className="searchbox"
        placeholder='Search Amazon'
        />
        <button className='search_button'><ImSearch/></button> 

        <div className="cat_button">
        <h4 style={{color: "white"}}>Men</h4> 
        <h4 style={{color: "white"}}>Women</h4> 
        <h4 style={{color: "white"}}>electronics</h4>
        <h4 style={{color: "white"}}>jewelery</h4>
        </div>
    </div> 
    
    <div className="products_container">
   <img src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" 
   style={{height: 300, width: "100%"}}
   />
  
 



   </div>

   </div>
  )
}

export default Searchbar