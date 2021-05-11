import React from 'react';
// icon photo
import iconInstagram from '../../images/icon/icon_instagram.png';
import iconFacebook from '../../images/logo/logo_white.png';
import iconIosDownload from '../../images/icon/ios_download.png';
import iconAndroidDownload from '../../images/icon/android_download.png';

// logo photo
import logoWhite from '../../images/logo/logo_white.png';

// import styles from '../../../sass/app.scss';

const header = () => (
  <footer className="mainbgcolor">
    <div className="container">
      <div className="row py-3">
        <div
          className="contactinfo order-2 order-md-0 mx-auto py-3 mx-md-0 text-center text-md-left col-12 col-md-6"
        >
          <div className="contactemail pb-2 d-none d-md-block">
            <a
              className="text-white text-decoration-none"
              href="mailto:taiwan.seventea@gmail.com"
            >聯絡信箱:taiwan.seventea@gmail.com</a>
          </div>
          <div className="d-block pb-2 d-md-none">
            <a
              className="text-white text-decoration-none"
              href="mailto:taiwan.seventea@gmail.com"
            >聯絡信箱:taiwan.seventea@gmail.com</a>
          </div>
          <div className="contactaddress pb-2">
            新北市泰山區貴陽街36巷1號之1 /
            <a
              className="text-decoration-none"
              href="tel:02-2970-5168"
            >TEL:02-2970-5168</a>
          </div>
          <div className="contactcopyright">© Copyright © 2018 七盞茶 Seven Tea,版權所有 All rights reserved.</div>
        </div>
        <div className="d-block col-12 col-sm-6 col-md-3">
          <div className="row m-0 text-center text-md-left px-0 py-3 col-12">
            <div className="d-block contactusword align-center p-0 col-12">追蹤我們</div>
            <div
              className="icon__wrap justify-content-center justify-content-md-start row m-0 px-0 py-3 col-12"
            >
              <div className="igicon_wrap icon p-0 col-3">
                <a
                  className="p-0 col-12"
                  target="_blank"
                  href="https://www.instagram.com/taiwan.seventea"
                >
                  <img
                    className="img-fluid p-0 col-7"
                    src= { iconInstagram }
                  />
                </a>
              </div>
              <div className="igicon_wrap icon p-0 col-3">
                <a
                  className="p-0 col-12"
                  target="_blank"
                  href="https://www.facebook.com/taiwan.se7entea"
                >
                  <img
                    className="img-fluid p-0 col-7"
                    src= { iconFacebook }
                    
                  />
                </a>
              </div>
              {/* <div className="lineicon_wrap icon p-0 col-4 col-md-3">line</div> */}
            </div>
            {/* <div className="row mx-auto mb-3 col-9 border-bottom border-white d-block d-sm-none"></div> */}
            <div className="d-block contactusword align-center px-0 pb-2 col-12">
              <a className="text-decoration-none" href="/privacy-policy">隱私條款</a>
            </div>
            <div className="d-block contactusword align-center p-0 col-12">
              <a className="text-decoration-none" href="/FAQ">常見問題</a>
            </div>
          </div>
        </div>
        {/* <div className="row mx-auto col-8 border-bottom border-white d-block d-sm-none"></div> */}
        <div className="d-block col-12 col-sm-6 col-md-3">
          <div className="row m-0 px-0 py-3 col-12">
            <div className="d-block downloadappwording p-0 text-center text-sm-left col-12">下載七盞茶APP</div>
            <div className="row m-0 px-0 py-3 align-items-center justify-content-between col-12">
              <div className="icon text-center px-0 col-5">
                <img
                  className="img-fluid p-0 col-7"
                  src= { logoWhite }
                  
                />
              </div>
              <div className="download_area p-0 col-7">
                <div className="ios icon px-0 pb-2 col-12">
                  <div className="p-0 col-12">
                    <img
                      className="img-fluid p-0 col-12"
                      src= { iconIosDownload }
                      
                    />
                  </div>
                </div>
                <div className="android icon px-0 col-12">
                  <div className="p-0 col-12">
                    <img
                      className="img-fluid p-0 col-12"
                      src= { iconAndroidDownload }
                      
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default header;