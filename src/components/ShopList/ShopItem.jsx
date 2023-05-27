import { MyContext } from 'components/App';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export const ShopItem = ({ shop }) => {
  const { activeShop } = useContext(MyContext);
  const [isActive, setIsActive] = useState(true);

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
        <div>{shop.name}</div>
      )}
    </li>
  );
};
