import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { history } from "./history"
import { connect } from "react-redux"
import Spinner from "./components/@vuexy/spinner/Loading-spinner"
import { ContextLayout } from "./utility/context/Layout"

// Route-based code splitting
const receiptDash = lazy(() => import("./views/dashboard/receipt/ReceiptDashboard"))
const checkoutID = lazy(() => import("./views/dashboard/checkoutID/CheckoutIDView"))
const analyticsDashboard = lazy(() => import("./views/dashboard/home/AnalyticsDashboard"))
const ReceiptDetail = lazy(() => import("./views/dashboard/receipt/ReceiptDetail"))
const LoginView = lazy(() => import('./views/authentication/login/Login'))
const Uploader = lazy(()=> import("./views/pages/Uploader"))
const error404 = lazy(() => import("./views/pages/misc/error/404"))

// Set Layout and Component Using App Route
const RouteConfig = ({ component: Component, fullLayout, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return (
        <ContextLayout.Consumer>
          {context => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                ? context.horizontalLayout
                : context.VerticalLayout
            return (
              <LayoutTag {...props} permission={props.user}>
                <Suspense fallback={<Spinner />}>
                  <Component {...props} />
                </Suspense>
              </LayoutTag>
            )
          }}
        </ContextLayout.Consumer>
      )
    }}
  />
)
const mapStateToProps = state => {
  return {
    user: state.auth.login.userRole
  }
}

const AppRoute = connect(mapStateToProps)(RouteConfig)

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <AppRoute exact path="/" component={analyticsDashboard} />
          <AppRoute
            path="/id"
            component={checkoutID}
            />
          <AppRoute
            path="/receipts"
            component={receiptDash}
            />
            <AppRoute
            path="/detail"
            component={ReceiptDetail}
            />
            <AppRoute
            path="/login"
            component={LoginView}
            />
            <AppRoute
              path="/upload"
              component={Uploader}
              />

          <AppRoute component={error404} fullLayout />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter
