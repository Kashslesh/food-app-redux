import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Repas from './components/Repas/Repas';
import CartProvider from './components/store/CartProvider';
function App() {
  const [modalIsShow, setModalIsShow] = useState(false);
  const showHandler = () => {
    setModalIsShow(true);
  };
  const closeHandler = () => {
    setModalIsShow(false);
  };
  return (
    <CartProvider>
      {modalIsShow && <Cart onCloseCart={closeHandler} />}
      <Header onShowCart={showHandler} />
      <main>
        <Repas />
      </main>
    </CartProvider>
  );
}

export default App;
