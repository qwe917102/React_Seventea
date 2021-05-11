import React, { useEffect, useState } from 'react';
// import styles from '../../../sass/app.scss';

const testModel = ({
  storeList
}) => {
  useEffect(() => {
    // const storeList  = props.match;
  }, []);
  return (
    <div className = "test-model vh-100 auto-header-hight">
      this is test model { storeList }
    </div>
  );
}

export default testModel;
