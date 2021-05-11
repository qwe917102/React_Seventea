// pages
// import IndexWrap from './containers/IndexWrapContainer';
// import Login from './containers/Member/LoginContainer';
// import Register from './containers/Member/RegisterContainer';
// import RegisterSuccess from './components/FrontStage/Member/RegisterSuccess';
// import Article from '././containers/Article/ArticleContainer';
// import Member from './components/FrontStage/Member/Member';
// import MemberDetail from './components/FrontStage/Member/MemberDetail';
// import Example from './containers/ExampleContainer';
// import ExampleForm from './containers/ExampleFormContainer';

// import Electronics from './components/Other/Electronics';
// import Mobile from './components/Other/Mobile';
// import Desktop from './components/Other/Desktop';
// import Laptop from './components/Other/Laptop';
import HiNewReactElement from './components/pages/homePage';

const routes = [
  {
    path: "/hello",
    // exact: true,
    isAuth: false,
    component: HiNewReactElement,
    breadcrumbName: "HiNewReactElement"
  },
];

export default routes; 