import React from 'react' 
import {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'
import './Navbar.css'
import {FaBars, FaUserAlt, FaAmazon, FaShoppingCart} from 'react-icons/fa'
import {IoIosClose} from 'react-icons/io'



 
const Navbar = () => {


    const data = [{
        name: "Amazon Home" 
    }, {
        name: "Trending", 
        trendingTypes: "Movers and Shakers"
    }
]



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
return (
    <div className="nav_container"> 

    <div className="left-nav"> 
       <span> 
        <span onClick={handleShow}>
            <FaBars size={28} color="white"/> 
            </span> 

        <FaAmazon size={28} color="orange" 
        style={{marginLeft: 22}}
        />

        </span>  
    
    </div> 

    <div className="right-nav">  
    <code style={{color: "white", marginRight: 5}}>sign in</code> 
     <span>
    <FaUserAlt size={27} color="white" style={{marginRight: 24}}/>  
    <FaShoppingCart size={27} color="white"/>
        </span>
    </div>

    <Modal show={show} onHide={handleClose} className="modalContainer">
      <Modal.Header className="modalHeader">
       <IoIosClose onClick={() => handleClose()} size={45}  
       /> 
      {
        data.map((i) => {
            return (
                <div key={i.name}>
                    <code>{i.name}</code> 
                    <hr/>
                </div>
            )
                
            
        })
      }
      </Modal.Header>
    </Modal>
    </div>
)
}


export default Navbar