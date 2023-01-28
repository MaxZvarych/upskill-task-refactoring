import React from 'react';
import Header from '../../components/Semantics/Header/Header';
import { Switch, useLocation } from 'react-router-dom';
import Navigation from '../../components/Routing/Navigation/Navigation';
import Footer from '../../components/Semantics/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import { RouteWithSubRoutes } from '../../components/Routing/Routes/Routes';
import { routes } from '../../configs/routes.config';
import { ExtendedRouteProps } from '../../interfaces/Navigation/Route';
import { MobileNav } from '../../components/Routing/Navigation/Mobile/MobileNav';

import 'react-toastify/dist/ReactToastify.css';
import './Layout.scss';

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <div className="app-container">
        <Header>
          <Navigation />
        </Header>
        <Switch>
          {routes.list.map((route: ExtendedRouteProps, i: number) => (
            <RouteWithSubRoutes key={i + route.path} {...route} />
          ))}
        </Switch>
        <ToastContainer />
        {location.pathname !== '/' && <MobileNav />}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
