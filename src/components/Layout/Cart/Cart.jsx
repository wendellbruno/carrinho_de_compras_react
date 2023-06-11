import './Cart.css';
import React from 'react';
import CartItem from './CartItem/CartItem';

function Cart() {
  return ( 
    <section className="cart">
      <div className="cart_items">
        <CartItem />
      </div>
      <div className="cart_resume">resulmo do carrinho</div>
    </section>
  );
}

export default Cart;
