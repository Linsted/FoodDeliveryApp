import { MyContext } from 'components/App';
import { ShopList } from 'components/ShopList/ShopList';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <ShopList />
      <Outlet />
    </>
  );
};
export default Home;
