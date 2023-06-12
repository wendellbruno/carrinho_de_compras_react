import React, { useContext } from 'react';
import './CartButton.css';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import AppContext from '../../../context/AppContext';

function CartButton() {

  const {cartItems, isCartVisible, setIsCartVisible} = useContext(AppContext);

  return ( 
    <button 
      type="button" 
      onClick={() => setIsCartVisible(!isCartVisible)}
      className="cart_button">
      <AiOutlineShoppingCart />
      {cartItems.length > 0 && <span className="cart_status">{cartItems.length}</span>}
    </button>
  );
}

export default CartButton;
