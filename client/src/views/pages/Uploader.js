import React from "react"
import { Row, Col } from "reactstrap"
import ExtensionsHeader from "../../extensions/extensionsHeader"
import DropzoneBasic from "../../extensions/dropzone/DropzoneBasic"
import DropzoneAccept from "../../extensions/dropzone/DropzoneAccept"
import DropzoneProgrammatically from "../../extensions/dropzone/DropzoneProgrammatically"
import DropzoneDisabled from "../../extensions/dropzone/DropzoneDisabled"

import "../../assets/scss/plugins/extensions/dropzone.scss"

class Uploader extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ExtensionsHeader
          title="Add Receipt Manually"
          subTitle="Unfortunately, not all stores support Bon. You can still use the features you know and love by addind a receipt manually."
          link="https://react-dropzone.js.org"
        />

        <Row>
          <Col lg="12" md="12">
            <DropzoneBasic />{" "}
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Uploader
