import React, { useState } from 'react';
import {
  Menu, Dropdown, Button, message, Space,
} from 'antd';
import {
  DownOutlined, MenuOutlined, UserOutlined, SettingOutlined,
} from '@ant-design/icons';
import Sider from '../Menu/Menu';
import ModalBtn from '../ModalBtn/ModalBtn';
import './header.css';

function handleMenuClick(e: any) {
  message.info('Click on lang menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="ru" icon={<UserOutlined />}>
      Русский
    </Menu.Item>
    <Menu.Item key="en" icon={<UserOutlined />}>
      English
    </Menu.Item>
    <Menu.Item key="de" icon={<UserOutlined />}>
      Deutsch
    </Menu.Item>
  </Menu>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {menuOpen ? <Sider /> : null}
      <Space wrap className="header-wrapper">
        <MenuOutlined onClick={handleBurgerClick} />
        <Dropdown overlay={menu}>
          <Button>
            Choose Lang <DownOutlined />
          </Button>
        </Dropdown>
        <ModalBtn />
        <SettingOutlined />
      </Space>
    </div>
  );
};

export default Header;
