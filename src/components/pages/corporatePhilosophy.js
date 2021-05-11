import React, { useEffect, useState } from 'react';
// import styles from '../../../sass/app.scss';

const corporatePhilosophy = ({
  philosophy, getPhilosophy
}) => {
  useEffect(() => {
    getPhilosophy()
  }, []);
  return (
    <div className = "corporate-philosophy vh-100 auto-header-hight">
      this is Corporate Philosophy
    </div>
  );
}

export default corporatePhilosophy;
