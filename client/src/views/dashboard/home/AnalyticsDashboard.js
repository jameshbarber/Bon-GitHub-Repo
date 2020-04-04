import React from "react"
import { Row, Col } from "reactstrap"
import SalesCard from "./SalesCard"
import SuberscribersGained from "../../ui-elements/cards/statistics/SubscriberGained"
import OrdersReceived from "../../ui-elements/cards/statistics/OrdersReceived"
import AvgSession from "../../ui-elements/cards/analytics/AvgSessions"
import SupportTracker from "../../ui-elements/cards/analytics/SupportTracker"
import ProductOrders from "../../ui-elements/cards/analytics/ProductOrders"
import SalesStat from "../../ui-elements/cards/analytics/Sales"
import ActivityTimeline from "./ActivityTimeline"
import DispatchedOrders from "./DispatchedOrders"
import "../../../assets/scss/pages/dashboard-analytics.scss"
import ReceiptCard from "../receipt/ReceiptCard"
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard";
import {
  Monitor,
  UserCheck,
  Mail,
  Eye,
  MessageSquare,
  ShoppingBag,
  Heart,
  Smile,
  Truck,
  Cpu,
  Server,
  Activity,
  AlertOctagon
} from "react-feather"

let $primary = "#7367F0",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $info = "#00cfe8",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292",
  $info_light = "#1edec5",
  $stroke_color = "#e8e8e8",
  $label_color = "#e7eef7",
  $white = "#fff"

class AnalyticsDashboard extends React.Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/lastPurchase');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col lg="6" md="12">
            <Row>
              <Col lg="12" md="12" sm="12">
                <p> data={this.state.response}</p>
                <ReceiptCard></ReceiptCard>
              </Col>
            </Row>
          </Col>
          <Col lg="6" md="12">
            <Col lg="12" md="12">
              <SalesCard />
            </Col>
            <Row className="match-height">
              <Col lg="6" sm="12">
                <StatisticsCard
                  hideChart
                  iconRight
                  iconBg="primary"
                  icon={<Cpu className="primary" size={22} />}
                  stat="86L"
                  statTitle="Water Saved"
                />
              </Col>
              <Col lg="6" sm="12">
                <StatisticsCard
                  hideChart
                  iconRight
                  iconBg="success"
                  icon={<Server className="success" size={22} />}
                  stat="1.2gb"
                  statTitle="Memory Usage"
                />
              </Col>
              <Col lg="6" sm="12">
                <StatisticsCard
                  hideChart
                  iconRight
                  iconBg="danger"
                  icon={<Activity className="danger" size={22} />}
                  stat="0.1%"
                  statTitle="Downtime Ratio"
                />
              </Col>
              <Col lg="6" sm="12">
                <StatisticsCard
                  hideChart
                  iconRight
                  iconBg="warning"
                  icon={<AlertOctagon className="warning" size={22} />}
                  stat="13"
                  statTitle="Issues Found"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default AnalyticsDashboard


{/*

        <Row className="match-height">
          <Col md="6" sm="12">
            <AvgSession labelColor={$label_color} primary={$primary} />
          </Col>
          <Col md="6" sm="12">
            <SupportTracker
              primary={$primary}
              danger={$danger}
              white={$white}
            />
          </Col>
        </Row>
        <Row className="match-height">
          <Col lg="4">
            <ProductOrders
              primary={$primary}
              warning={$warning}
              danger={$danger}
              primaryLight={$primary_light}
              warningLight={$warning_light}
              dangerLight={$danger_light}
            />
          </Col>
          <Col lg="4">
            <SalesStat
              strokeColor={$stroke_color}
              infoLight={$info_light}
              primary={$primary}
              info={$info}
            />
          </Col>
          <Col lg="4">
            <ActivityTimeline />
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <DispatchedOrders />
          </Col>
        </Row>
*/}