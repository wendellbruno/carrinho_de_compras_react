import React from 'react';
import Header from './components/Layout/Header/Header';
import Products from './components/pages/Products/Products';
import Provider from './context/Provider';
import Cart from './components/Layout/Cart/Cart';

function App() {
  return (
    <Provider>
      <Header />
      <Products />
      <Cart />
    </Provider>
  );
}
export default App;
