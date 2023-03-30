import { Button, Card } from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartItems, subTotal, tax, shipping, total } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch({
      type: "addToCart",
      payload: { id },
    });
    dispatch({ type: "calculatePrice" });
  };
  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });

    dispatch({ type: "calculatePrice" });
  };
  const deleteHandler = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });
    dispatch({ type: "calculatePrice" });
  };

  return (
    <div className="food-cart">
      <main className="product-list">
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1>No Items Yet</h1>
        )}
      </main>
      <aside className="total-cart">
        <h2>Subtotal: ₹{subTotal}</h2>
        <h2>Shipping: ₹{shipping}</h2>
        <h2>Tax: ₹{tax}</h2>
        <h2>Total: ₹{total}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <div className="cartitem">
    <Card className="cart-card">
      <img src={imgSrc} alt="Item" className='cart-image' />
      <article className="cart-spec">
        <h3>{name}</h3>
        <div className="qty">
          <button className="quantity" onClick={() => decrement(id)}>-</button>
          <h3 className="quantity">{qty}</h3>
          <button className="quantity" onClick={() => increment(id)}>+</button>
        </div>
      </article>

      <div>
        <h3>₹{price}</h3>
      </div>

      <Button color='error' className='cart-del-icon' onClick={() => deleteHandler(id)}><DeleteIcon /></Button>
    </Card>
  </div>
);

export default Cart;
