import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/auth/public/SignIn';
import SignUp from '../pages/auth/public/SignUp';
import RegisterProfile from '../pages/auth/public/RegisterProfile';
import ForgotPassword from '../pages/auth/public/ForgotPassword';
import ResetPassword from '../pages/auth/public/ResetPassword';

import UpdateProfile from '../pages/auth/private/UpdateProfile';
import ChangePassword from '../pages/auth/private/ChangePassword';

import Profile from '../pages/app/Profile';
import Movies from '../pages/app/Movies';
import TVSeries from '../pages/app/TVSeries';
import Upcoming from '../pages/app/Upcoming';
import Playlists from '../pages/app/Playlists';

const Routes: React.FC = () => (
  <Switch>
    {/* public routes */}
    <Route path="/" exact component={SignIn} />
    <Route path="/register" component={SignUp} />
    <Route path="/register-profile/:token" component={RegisterProfile} />
    <Route path="/forgot" component={ForgotPassword} />
    <Route path="/reset" component={ResetPassword} />

    {/* private routes */}
    <Route path="/account/edit" component={UpdateProfile} isPrivate />
    <Route
      path="/account/password/change"
      component={ChangePassword}
      isPrivate
    />

    <Route path="/profile" component={Profile} isPrivate />
    <Route path="/movies" component={Movies} isPrivate />
    <Route path="/tvseries" component={TVSeries} isPrivate />
    <Route path="/upcoming" component={Upcoming} isPrivate />
    <Route path="/playlists" component={Playlists} isPrivate />
  </Switch>
);

export default Routes;
