import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import Layout from './Layout/Layout';
import { createContext } from 'react';
import { useState } from 'react';
import { fetchShops } from 'API/api';
import { GoodsList } from './GoodsList/GoodsList';

export const MyContext = createContext();

const Home = lazy(() => import('../pages/Home'));
const Cart = lazy(() => import('../pages/Cart'));

export const App = () => {
  const [shops, setShops] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );
  const [activeShop, setActiveShop] = useState('');
  console.log(activeShop);
  const contextValue = { shops, cart, setCart, setActiveShop, activeShop };

  useEffect(() => {
    getShops();
    const shop = JSON.parse(localStorage.getItem('cart'));
    if (shop) {
      setActiveShop(shop[0].shopId);
    }
  }, []);

  const getShops = async () => {
    try {
      const data = await fetchShops();
      if (data === null) {
        // toast.error(errorText, { duration: 5000 });
        console.log('Data is null');
        return;
      }
      setShops(data);
    } catch (error) {
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
    </MyContext.Provider>
  );
};
