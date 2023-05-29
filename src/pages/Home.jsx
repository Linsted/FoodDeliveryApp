import { ShopList } from 'components/ShopList/ShopList';

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
