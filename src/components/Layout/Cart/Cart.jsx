import './Cart.css';
import React, { useContext } from 'react';
import CartItem from './CartItem/CartItem';
import AppContext from '../../../context/AppContext';
import formatCurrency from '../../../utils/formatCurrency';

function Cart() {

  const {cartItems, isCartVisible} = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return ( 
    <section className={`cart ${isCartVisible ? 'cart--active': ''}`}>
      <div className="cart_items">
        {
          cartItems.map(element => <CartItem key={element.id} data={element} />)
        }
      </div>
      <div className="cart_resume">{formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
}

export default Cart;
