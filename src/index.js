import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
// import configureStore from './src/store/configureStore';
import store from './store';
import '../sass/app.scss';
// import 'jQuery';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

// 後面可能可以加的就是polyfill，用來支援ie舊版本的東西

import App from './App';

// const store = configureStore();

// 這層render重點在處理例外頁面轉導
// app.js檔案是laravel預設的不調整原有的東西去擴充，所以多做了一個 /app/index.js
// 這邊只要確定redux有灌進去就好了
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// service worker






// import HiNewReactElement from './components/pages';

// ReactDOM.render(
//   <HiNewReactElement />,
//   document.getElementById('root'),
// );