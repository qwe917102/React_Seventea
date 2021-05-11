import React, { useEffect, useState } from 'react';
// import styles from '../../../sass/app.scss';

const ItemIntro = ({
  itemList, getItemList
}) => {
  useEffect(() => {
    getItemList()
  }, []);
  return (
    <div className = "item-intro vh-100 auto-header-hight">
      this is Item Intro page
    </div>
  );
}

export default ItemIntro;
