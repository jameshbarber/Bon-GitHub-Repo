import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import LoginBox from './LoginBox';
import CheckoutID from './CheckoutID';
import ReceiptList from './ReceiptList';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: true,
  };

  handleClick = e => {
    console.log('click ', e);
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="vertical">
            <Menu.Item key="1">
              <PieChartOutlined />
              <span><Link to="/">Test</Link></span>
            </Menu.Item>
            <Menu.Item key="2">
              <DesktopOutlined />
              <span><Link to="/id">CheckoutID</Link></span>
            </Menu.Item>
            <Menu.Item key="3">
              <DesktopOutlined />
              <span><Link to="/receipts">Receipts</Link></span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Switch>
                  <Route path="/id">
                    <CheckoutID />
                  </Route>
                  <Route path="/receipts">
                    <ReceiptList />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </div>
            
          </Content>
          <Footer style={{ textAlign: 'center' }}>BON DIGITAL 2020</Footer>
        </Layout>
      </Layout>
      </Router>
      );
  }
}

function Users() {
  return <h2>Users</h2>;
}

export default SiderDemo;