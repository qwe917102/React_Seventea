import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../history';
import Header  from '../containers/header';
// import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import HomePage from '../containers/homePage';
import ItemIntro from '../containers/itemIntro';
import StoreIntro from '../containers/storeIntro';
import CorporatePhilosophy from '../containers/corporatePhilosophy';
import InspectionReport from '../containers/inspectionReport';
import ContactUs from '../containers/contactUs';

import PrivateRoute from '../components/PrivateRoute';

class RouteView extends Component {
  render() {
    const { mainRoutes } = this.props;
    // console.log(mainRoutes);
    return (
      <Router history={history}>
        <Header />
        <Switch>
          <Route component={HomePage} path="/" exact/>
          <Route component={ItemIntro} path="/item-intro" exact/>
          <Route component={StoreIntro} path="/store-intro" exact/>
          <Route component={CorporatePhilosophy} path="/corporate-philosophy" exact/>
          <Route component={InspectionReport} path="/inspection-report" exact/>
          <Route component={ContactUs} path="/contact-us" exact/>
          {/* {mainRoutes.map((route, i) => {
            return (
              !route.isAuth ? 
              // render ok
              <Route
                key={i}
                {...route}
                routes={route.routes}
              />
              :
              <PrivateRoute
                key={i}
                {...route}
                routes={route.routes}
              />
            )
          })} */}
        </Switch>
        <Footer></Footer>
      </Router>
    )
  }
}

export default RouteView;