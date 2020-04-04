import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import IDCard from "./idCard"

class CheckoutIDView extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Checkout ID"
        />
        <Row>
          <Col sm="6">
            <IDCard></IDCard>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default CheckoutIDView;
