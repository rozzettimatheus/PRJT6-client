import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/auth/public/SignIn';
import Register from '../pages/auth/public/Register';
import RegisterProfile from '../pages/auth/public/Register/RegisterProfile';
import ForgotPassword from '../pages/auth/public/ForgotPassword';
import ResetPassword from '../pages/auth/public/ResetPassword';

import Page404 from '../pages/auth/public/404';

import UpdateProfile from '../pages/auth/private/UpdateProfile';
import ChangePassword from '../pages/auth/private/ChangePassword';

import Profile from '../pages/app/Profile';
import PlaylistMovies from '../pages/app/Profile/PlaylistMovies';
import PlaylistSeries from '../pages/app/Profile/PlaylistSeries';

import Movies from '../pages/app/Movies';
import MediaGrid from '../pages/app/MediaGrid';
import TVSeries from '../pages/app/TVSeries';
import Playlists from '../pages/app/Playlists';
import Search from '../pages/app/Search';

const Routes: React.FC = () => (
  <Switch>
    {/* public routes */}
    <Route path="/" exact component={SignIn} />
    <Route path="/register" component={Register} />
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

    <Route exact path="/profile" component={Profile} isPrivate />
    <Route
      path="/profile/:playlist/movies"
      component={PlaylistMovies}
      isPrivate
    />
    <Route
      path="/profile/:playlist/tvseries"
      component={PlaylistSeries}
      isPrivate
    />

    <Route exact path="/movies" component={Movies} isPrivate />
    <Route path="/movies/:genre" component={MediaGrid} isPrivate />

    <Route exact path="/tvseries" component={TVSeries} isPrivate />
    <Route path="/tvseries/:genre" component={MediaGrid} isPrivate />

    <Route path="/playlists" component={Playlists} isPrivate />
    <Route path="/search" component={Search} isPrivate />

    {/* Not found route */}
    <Route component={Page404} isPrivate />
  </Switch>
);

export default Routes;
