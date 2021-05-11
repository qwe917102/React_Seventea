import React, { useEffect, useState } from 'react';
// import styles from '../../../sass/app.scss';

const contactUs = ({
  jobList, getJobList
}) => {
  useEffect(() => {
    getJobList()
  }, []);
  return (
    <div className = "contact-us vh-100 auto-header-hight">
      this is contact Us
    </div>
  );
}

export default contactUs;
