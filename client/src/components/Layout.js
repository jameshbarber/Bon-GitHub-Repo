import React from 'react'
import { Router, Link } from "@reach/router"
import { Layout, Menu, Breadcrumb } from 'antd';
import { MenuOutlined, UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class LayoutProvider extends React.Component {
    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Location>
                            {props => {
                                return (
                                    <Menu selectedKeys={[props.location.pathname]}>
                                        <Menu.Item key="/courses">
                                            <Link to="/courses">Courses</Link>
                                        </Menu.Item>
                                        <Menu.Item key="/users">
                                            <Link to="/users">Users</Link>
                                        </Menu.Item>
                                        <Menu.Item key="/profile">
                                            <Link to="/profile">My Profile</Link>
                                        </Menu.Item>
                                    </Menu>
                                );
                            }}
                        </Location>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <Menu.Item>Home</Menu.Item>
                            <Menu.Item>Checkout ID</Menu.Item>
                            <Menu.Item><MenuOutlined />All Receipts</Menu.Item>

                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content>
                            Content
                        </Content>
                    </Layout>
                </Layout>
            </Layout>);

    }
}

export default LayoutProvider;
