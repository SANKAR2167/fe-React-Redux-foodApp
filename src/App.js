import { Routes, Route, useNavigate } from "react-router-dom";
import { AppBar, Badge, Button, Toolbar } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Foods from "./components/Foods";
import { Toaster } from "react-hot-toast";
import Cart from "./components/Cart";
import './App.css';
import { useSelector } from "react-redux";

function App() {
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="App">
      <AppBar position='static' color='error'>
        <Toolbar>
          <Button color='inherit' onClick={() => navigate(`/`)}>Home</Button>
          <Button color='inherit' onClick={() => navigate(`/foods`)}>Foods</Button>
          <Button color='inherit' sx={{ marginLeft: 'auto' }} onClick={() => navigate(`/cart`)}><Badge color="primary"  badgeContent={cartItems.length}>
            <ShoppingCartIcon />
          </Badge></Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/foods" element={<Foods />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Toaster />
    </div>
  );
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
