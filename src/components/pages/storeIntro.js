import React, { useEffect, useState } from 'react';
import TestModal from './testModel';

const storeIntro = ({
  storeList, getStoreList
}) => {
  useEffect(() => {
    getStoreList()
  }, []);
  return (
    <div className = "store-intro vh-100 auto-header-hight">
      this is Store Intro page
      <TestModal storeList={ storeList.name }></TestModal>
    </div>
  );
}

export default storeIntro;
