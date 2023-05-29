import { MyContext } from 'components/App';
import { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';

import { ShopItemContainerStyled, ShopLink, ShopName } from './ShopList.styled';

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
    <ShopItemContainerStyled>
      {isActive ? (
        <ShopLink to={shop._id}>{shop.name} </ShopLink>
      ) : (
        <ShopName>{shop.name}</ShopName>
      )}
    </ShopItemContainerStyled>
  );
};

ShopItem.propTypes = {
  shop: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
