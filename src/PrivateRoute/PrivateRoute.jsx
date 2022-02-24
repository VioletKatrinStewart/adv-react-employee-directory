import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { useUser } from '../Context/UserContext';

export default function PrivateRoute({ children, ...routeProps }) {
  const { user } = useUser();
  const location = useLocation();
  return (
    <Route {...routeProps}>
      {user ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />}
    </Route>
  );
}
