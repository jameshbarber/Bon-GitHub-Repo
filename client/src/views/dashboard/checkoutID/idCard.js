import React from "react"
import {
  Card,
  CardBody, 
  CardImg
} from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"


import img1 from "../../../assets/img/pages/frame.png"

class IDCard extends React.Component {
  render() {
    return (
      <div>
        <Card>
        <CardBody>
        <CardImg
              top
              className="img-fluid"
              src={img1}
              alt="card image cap"
            />
        </CardBody>
      </Card>
      <h4>We do not share any personal data using this code.</h4></div>
    )
  }
}
export default IDCard
