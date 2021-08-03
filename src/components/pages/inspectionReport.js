import React, { useEffect, useState } from 'react';
// import styles from '../../../sass/app.scss';

const inspectionReport = ({
  reportList, getReportList,
  getReportDetailList, reportDetailList
}) => {
  useEffect(() => {
    getReportList();
    getReportDetailList();
  }, []);
  return (
    <main role="main" className="reports mt-4">
    {/* <section className="jumbotron text-center p-0 m-0">
      <img src="/img/indexbanner/banner.png" alt srcset className="img-fluid indexbannerimg" />
      <div className="gotocontent">
        <i className="fas fa-camera"></i>
      </div>
    </section> */}

    <div className="album pt-5">
      <div className="container">
        <div className="reports__wrap">
          <div className="news__title reports__title">
            <span className="zh_word">檢驗報告</span>
            <span className="en_word">SEVEN TEA CERTIFIED</span>
          </div>
        </div>
        <div className="row m-0">
          { reportList.map((item, index) => {
            return (
              <div data-id= { item.id } key= { index } className="col-12 col-sm-6 col-md-4 mx-0 my-4">
                <div className="reportsBox mx-auto">
                  <div className="row m-0 p-0 text-center align-items-center reportsBox__Inner">
                    <div className="col-12 mt-3">
                      <h5>{ item.name }</h5>
                      <p className="reportsBox__Inner__p my-0 mx-auto">檢驗報告</p>
                    </div>
                    <p className="reportsBox__Inner__Plus col-12 mb-0 text-center">+</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </main>
  );
}

export default inspectionReport;
