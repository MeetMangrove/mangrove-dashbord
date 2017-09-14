import React from 'react'
import Switch from 'react-router-dom/Switch'

// Routes
import Login from 'src/containers/Login/Login'
import Logout from 'src/containers/Logout/Logout'
import Register from 'src/containers/Register/Register'

import Home from 'src/containers/Home/Home'

import NotFound from 'src/containers/Error/NotFound'

import RessourceListContainer from 'src/containers/Ressource/RessourceList'
import LinkEdit from 'src/containers/Ressource/RessourceEdit'

import BookclubSearchContainer from 'src/containers/Bookclub/Search'

// Layout
import PrivateRoute from 'src/utils/PrivateRoute'
import PublicRoute from 'src/utils/PublicRoute'
import PrivateLayout from 'src/components/Layout/PrivateLayout'
import EmptyLayout from 'src/components/Layout/EmptyLayout'

const Layout = () => (
  <div>
    <Switch>
      <PublicRoute layout={PrivateLayout} path="/register" component={Register} exact />
      <PublicRoute layout={PrivateLayout} path="/login" component={Login} exact />
      <PublicRoute layout={EmptyLayout} path="/logout" component={Logout} exact />
      <PrivateRoute layout={PrivateLayout} path="/" component={Home} exact />
      <PrivateRoute layout={PrivateLayout} path="/link" component={RessourceListContainer} exact />
      <PrivateRoute layout={PrivateLayout} path="/link/edit" component={LinkEdit} exact />
      <PrivateRoute layout={PrivateLayout} path="/link/edit/:id" component={LinkEdit} exact />
      <PrivateRoute
        layout={PrivateLayout}
        path="/bookclub/search"
        component={BookclubSearchContainer}
        exact
      />
      <PublicRoute layout={EmptyLayout} component={NotFound} />
    </Switch>
  </div>
)

export default Layout
