import React from 'react';
import { Layout, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import logo from '../img/Group 7136.png'
import './navbar.css';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header className="navbar">
      <div className="logo"><img src={logo} alt="" /></div>
      <Menu theme="dark" mode="horizontal" className="menu">
        <Menu.Item key="home">About Us <DownOutlined /></Menu.Item>
        <Menu.Item key="about">Services <DownOutlined /></Menu.Item>
        <Menu.Item key="blog">Development <DownOutlined /></Menu.Item>
        <Menu.Item key="services">INDUSTRIES <DownOutlined /></Menu.Item>
        <Menu.Item key="contact">PORTFOLIO <DownOutlined /></Menu.Item>
        <Menu.Item key="contact">PROJECTS <DownOutlined /></Menu.Item>
        <Menu.Item key="contact">BLOG <DownOutlined /></Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
