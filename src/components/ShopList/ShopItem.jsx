import { MyContext } from 'components/App';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export const ShopItem = ({ shop }) => {
  const { activeShop } = useContext(MyContext);
  const [isActive, setIsActive] = useState(true);

  console.log(shop._id);
  console.log(activeShop);
  console.log(isActive);
  useEffect(() => {
    if (activeShop === '' || shop._id === activeShop) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [activeShop, shop._id]);
  return (
    <li>
      {isActive ? (
        <Link to={shop._id}>{shop.name}</Link>
      ) : (
        <div to={shop._id}>{shop.name}</div>
      )}
    </li>
  );
};
