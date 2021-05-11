import React, { useEffect, useState } from 'react';
// import styles from '../../../sass/app.scss';

const inspectionReport = ({
  reportList, getReportList
}) => {
  useEffect(() => {
    getReportList()
  }, []);
  return (
    <div className = "inspection-report vh-100 auto-header-hight">
      this is Inspection Report
    </div>
  );
}

export default inspectionReport;
