import React from "react"
import {
  Card,
  CardBody,
  Row,
  Col,
  Media,
  Table,
  InputGroup,
  Input,
  InputGroupAddon,
  Button
} from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import { Mail, Phone, FileText, Download } from "react-feather"

import "../../../assets/scss/pages/invoice.scss"

class ReceiptDetail extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col className="invoice-wrapper" sm="12">
            <Card className="invoice-page">
              <CardBody>
                <Row>
                  <Col md="6" sm="12" className="text-left">
                    <h1>Store Name</h1>
                    <div className="invoice-details mt-2">
                      <h6>PURCHASE RECEIPT</h6>
                      <p>10 Dec 2018</p>
                    </div>
                  </Col>
                </Row>
                <div className="invoice-items-table pt-1">
                  <Row>
                    <Col sm="12">
                      <Table responsive borderless>
                        <thead>
                          <tr>
                            <th>QTY</th>
                            <th>Item</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2</td>
                            <td>Grilled Peppers</td>
                            <td>15 USD</td>
                            <td>90000 USD</td>
                          </tr>
                          <tr>
                            <td>Newsletter template design</td>
                            <td>20</td>
                            <td>12 USD</td>
                            <td>24000 USD</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </div>
                <div className="invoice-total-table">
                  <Row>
                    <Col
                      sm={{ size: 7, offset: 5 }}
                      xs={{ size: 7, offset: 5 }}
                    >
                      <Table responsive borderless>
                        <tbody>
                          <tr>
                            <th>TOTAL</th>
                            <td>108300 USD</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </div>
                <Row className="pt-2">
                  <Col md="6" sm="12" className="text-left">
                    <h5>Microsion Technologies Pvt. Ltd.</h5>
                    <div className="company-info my-2">
                      <p>9 N. Sherwood Court</p>
                      <p>Elyria, OH</p>
                      <p>94203</p>
                    </div>
                    <div className="company-contact">
                      <p>
                        <Mail size={15} className="mr-50" />
                        hello@pixinvent.net
                      </p>
                      <p>
                        <Phone size={15} className="mr-50" />
                        +91 999 999 9999
                      </p>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-1 invoice-header" md="5" sm="12">
            <InputGroup>
              <Input placeholder="Email" />
              <InputGroupAddon addonType="append">
                <Button.Ripple color="primary" outline>
                  Send ReceiptDetail
                </Button.Ripple>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <Col
            className="d-flex flex-column flex-md-row justify-content-end invoice-header mb-1"
            md="7"
            sm="12"
          >
            <Button
              className="mr-1 mb-md-0 mb-1"
              color="primary"
              onClick={() => window.print()}
            >
              <FileText size="15" />
              <span className="align-middle ml-50">Print</span>
            </Button>
            <Button.Ripple color="primary" outline>
              <Download size="15" />
              <span className="align-middle ml-50">Download</span>
            </Button.Ripple>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default ReceiptDetail
