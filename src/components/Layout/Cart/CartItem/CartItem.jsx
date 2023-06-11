import React from 'react';
import './CartItem.css';
import {BsCartDashFill} from 'react-icons/bs';

function CartItem() {
  return ( 
    <section className="cart_item">
      <img src="i" alt="img do produto" className="cart_item_image" />
      <div className="cart_item_content">
        <h3 className="cart_item_title">Titulo do produto</h3>
        <h3 className="cart_item_price">R$ 0000</h3>
        <button
          type="button"
          className="button_remover"
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}

export default CartItem;
