import { fetchById } from 'API/api';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GoodsItem } from './GoodsItem';
import { GoodsListContainerStyled } from './GoodsList.styled';

export const GoodsList = () => {
  const { shopId } = useParams();
  const [goods, setGoods] = useState({});
  const { products } = goods;

  useEffect(() => {
    getShopById(shopId);
  }, [shopId]);

  const getShopById = async id => {
    try {
      const data = await fetchById(id);
      setGoods(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GoodsListContainerStyled>
      {products &&
        products.map(product => (
          <GoodsItem key={product.id} product={product} shopId={shopId} />
        ))}
    </GoodsListContainerStyled>
  );
};
