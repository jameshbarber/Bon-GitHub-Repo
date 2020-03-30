import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginBox from "./components/LoginBox";
import Home from "./components/Home";
import Sider from "./components/Sidebar";
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    <Layout>
      <Header>
        Test
      </Header>
      <Content>
        Test
      </Content>
      <Footer>Bon Digital</Footer>
    </Layout>

  );
}

function Receipts() {
  return <h2>Receipts</h2>;
}