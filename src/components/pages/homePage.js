import React, { useEffect, useState } from 'react';
// import styles from '../../../sass/app.scss';

const homePage = ({
  fullScreen , getFullScreen
}) => {
  useEffect(() => {
    getFullScreen()
  }, []);
  return (
    <div className = "index vh-100 auto-header-hight">
      <main role="main" className="index">
        {fullScreen.map((item, index) => {
          return (
            <section
              className="big-banner container-fluid text-center p-0 m-0"
              key= {index}
            >
              <img src= {item.picture_url} className="img-fluid indexbannerimg" />
              <div className="gotocontent">
                <i className="fas fa-camera"></i>
              </div>
            </section>
          )
        })}
  
        <div className="album pt-5">
          <div className="container">
            <div className="news__wrap">
              <div className="news__title section__title">
                <span className="zh_word">最新消息</span>
                <span className="en_word">NEWS</span>
              </div>
              <div className="newsslideshow__wrap">
                <div
                  id="myCarousel_banner"
                  className="carousel slide mb-4"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#myCarousel_banner"
                      data-slide-to="newsDotIndex"
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    <a
                      className="carousel-item"
                      target="_blank"
                    >
                      <img className="img-fluid"  />
                    </a>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#myCarousel_banner"
                    role="button"
                    data-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#myCarousel_banner"
                    role="button"
                    data-slide="next"
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
  
            <div className="recommend__wrap">
              <div className="recommend__title section__title">
                <span className="zh_word">本月推薦</span>
                <span className="en_word">RECOMMEND</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default homePage;
