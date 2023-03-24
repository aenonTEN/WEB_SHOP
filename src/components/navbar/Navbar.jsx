import React, {useState} from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';


const Navbar = () => {
  const products = useSelector(state=>state.cart.products)

  const handleStrapiLogin = () => {
    window.location.href = "http://localhost:1337/admin";
  }
  const [open,setOpen] = useState(false)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
        <div className="center">
          <Link className ="link" to="/"> Eba & Co.</Link>
        </div>
          
        </div>
        
        <div className="right">
          <div className="item">
            <Link className ="link" to="/">Home</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/1">Category</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/about">About</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/pricing/">Pricing</Link>
          </div>
          {/* <div className="item">
            <Link className ="link" to="/">Blog</Link>
          </div> */}
          {/* <div className="item">
            <Link className ="link" to="/register">Register</Link>
          </div> */}
          <div className="item">
            <Link className ="link" to="/login">Login</Link>
          </div>
          {/* <div className="item">
            <Link className ="link" to="/seller">Seller</Link>
          </div> */}
          {/* <div className="item">
         <Link><SearchIcon/></Link> 
          </div> */}


          <div className="icons">
            {/* <FavoriteBorderOutlinedIcon/> */}
            <div className="cartIcon" onClick={()=>setOpen(!open)}
              // {products.length}
              >
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
              
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
}

export default Navbar
