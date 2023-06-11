import React from 'react';
import './CartButton.css';
import {AiOutlineShoppingCart} from 'react-icons/ai';

function CartButton() {
  return ( 
    <button type="button" className="cart_button">
      <AiOutlineShoppingCart />
      <span className="cart_status">1</span>
    </button>
  );
}

export default CartButton;
