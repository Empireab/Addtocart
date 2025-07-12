import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../redux/ProductSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cartstuff.cartItem);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <div className="empty-cart"> Your cart is empty 😅</div>;
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Shopping Cart</h2>
      <button className="clear-cart-btn" onClick={() => dispatch(clearCart())}>
        Clear Everything
      </button>

      <div className="cart-list">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} className="item-img" />

            <div className="item-details">
              <h3 className="item-title">{item.title}</h3>
              <p className="item-price">${item.price.toFixed(2)}</p>

              <div className="qty-control">
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>
                  +
                </button>
              </div>
            </div>

            <button
              className="remove-btn"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              ❌ Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <span>Total:</span> <strong>${total.toFixed(2)}</strong>
      </div>
    </div>
  );
}

export default Cart;
