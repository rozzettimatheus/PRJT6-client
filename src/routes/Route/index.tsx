import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import Main from '../../layout/Main';
import Auth from '../../layout/Auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  registerPage?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  // registerPage = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  // const user = 'null';
  // const Layout: React.FC = !user || registerPage ? Auth : Main;

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/profile',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
