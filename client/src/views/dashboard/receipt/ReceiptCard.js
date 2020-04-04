import React from "react"
import {
  Card,
  CardBody,
  CardImg,
  Row,
  Col,
  Button,
  Progress,
  Breadcrumb
} from "reactstrap"
import Breadcrumbs from '../../../components/@vuexy/breadCrumbs/BreadCrumb'

class ReceiptCard extends React.Component {
  render() {
    return (
      <div>
        <Card>
        <CardBody>
          <h1>Rewe East Side Mall</h1>
          <h4>PURCHASE RECEIPT</h4>
          <hr className="my-1" />
          <h2>Test</h2>
          <div className="card-btns d-flex justify-content-between mt-2">
            <div className="float-left">
              <p className="font-medium-2 mb-0">$ 4785.78</p>
              <p>Income</p>
            </div>
            <div className="float-right">
              <p className="font-medium-2 mb-0">12 June 2020</p>
              <p>Delivery Date</p>
            </div>
          </div>
        </CardBody>
      </Card>
      </div>
    )
  }
}
export default ReceiptCard
