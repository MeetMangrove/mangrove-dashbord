import React from 'react'
import Switch from 'react-router-dom/Switch'

// Routes
import Login from 'src/containers/Login/Login'
import Logout from 'src/containers/Logout/Logout'
import Register from 'src/containers/Register/Register'
import Home from 'src/containers/Home/Home'
import Links from 'src/containers/Ressources/RessourcesList'

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
      <PrivateRoute layout={PrivateLayout} path="/links" component={Links} exact />
    </Switch>
  </div>
)

export default Layout
