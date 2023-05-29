import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import Layout from './Layout/Layout';
import { createContext } from 'react';
import { useState } from 'react';
import { fetchShops } from 'API/api';
import { GoodsList } from './GoodsList/GoodsList';
import { Puff } from 'react-loader-spinner';

export const MyContext = createContext();

const Home = lazy(() => import('../pages/Home'));
const Cart = lazy(() => import('../pages/Cart'));

export const App = () => {
  const [shops, setShops] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );
  const [activeShop, setActiveShop] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);

  const contextValue = {
    shops,
    cart,
    setCart,
    setActiveShop,
    activeShop,
  };

  useEffect(() => {
    getShops();
    const shop = JSON.parse(localStorage.getItem('cart'));
    if (shop && cart.length !== 0) {
      setActiveShop(shop[0].shopId);
    }
  }, [cart.length]);

  const getShops = async () => {
    setShowSpinner(true);
    try {
      const data = await fetchShops();
      if (data === null) {
        console.log('Data is null');
        setShowSpinner(false);
        return;
      }
      setShops(data);

      setShowSpinner(false);
    } catch (error) {
      setShowSpinner(false);
      console.log(error.message);
    }
  };

  return (
    <MyContext.Provider value={contextValue}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path=":shopId" element={<GoodsList />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          width: '100vw',
        }}
      >
        <Puff
          height="80"
          width="80"
          radius={1}
          color="#4fa94d"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={showSpinner}
        />
      </div>
    </MyContext.Provider>
  );
};
