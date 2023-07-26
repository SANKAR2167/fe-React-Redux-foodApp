import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { AppBar, Badge, Button, Toolbar } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Foods from "./components/Foods";
import { Toaster } from "react-hot-toast";
import Cart from "./components/Cart";
import './App.css';
import { useSelector } from "react-redux";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CheckOut from "./components/CheckOut";
import OrderSuccess from "./components/OrderSuccess";
import { Loading } from "./Loading";
import { useEffect, useState } from "react";

function App() {
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);

  const [hide, setHide] = useState(true)

  useEffect(()=>{
    const token = localStorage.getItem("token");
    setHide(token);
  },[])


  const Logout = ()=> {
    localStorage.clear();
    window.location.reload();
    setHide(false)
  }


  return (
    <div className="App">
      <AppBar position='static' color='error'>
        <Toolbar>
          <Button color='inherit' onClick={() => navigate(`/`)}>Home</Button>
          <Button color='inherit' onClick={() => navigate(`/foods`)}>Foods</Button>
          {hide ? (<Button className='menu' color='inherit' onClick={Logout}>Logout</Button>) : null}
          <Button color='inherit' sx={{ marginLeft: 'auto' }} onClick={() => navigate(`/cart`)}><Badge color="primary" badgeContent={cartItems.length}>
            <ShoppingCartIcon />
          </Badge></Button>
        </Toolbar>
      </AppBar>

      {/* route setup */}
      <Routes>
        <Route path="/foods" element={<ProductedRoute><Foods /></ProductedRoute>} />
        <Route path="/fd_users/signup" element={<SignUp />} />
        <Route path="/fd_users/login" element={<Login />} />
        <Route path="/cart" element={<ProductedRoute><Cart /></ProductedRoute>} />
        <Route path="/cart/checkout" element={<ProductedRoute><CheckOut /></ProductedRoute>} />
        <Route path="/cart/checkout/ordersuccess" element={<ProductedRoute><OrderSuccess /></ProductedRoute>} />
        <Route path="/" element={<ProductedRoute><Home /></ProductedRoute>} />
        <Route path="/cart/checkout/loading" element={<ProductedRoute><Loading /></ProductedRoute>} />
      </Routes>
      <Toaster />
    </div>
  );
}


function ProductedRoute({ children }) {
  const isAuth = localStorage.getItem("token");
  // console.log(isAuth);
  return isAuth ? children : <Navigate replace to={"/fd_users/login"} />;
}


function Home() {

  const navigate = useNavigate();

  return (
    <div className="food-home">
      <h1>Welcome To Food App</h1>
      <Button onClick={() => navigate('/foods')} variant='contained' color='error'>Enjoy Your Food</Button>
    </div>
  )
}

export default App;
