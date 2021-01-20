import React, { useContext, useState } from 'react';
import {
  Menu, Dropdown, Button, message, Space, Drawer,
} from 'antd';
import {
  DownOutlined, MenuOutlined, UserOutlined, SettingOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import SideMenu from '../Menu/Menu';
import RegistrationFormInModal from '../RegistrationForm/RegistrationFormInModal';
import Settings from '../Settings/Settings';
import './header.css';
import { useAuth } from '../../hooks/auth.hook';
import { AuthContext } from '../../context/AuthContext';

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

const Header: React.FC = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const toggleMenu = () => {
    setVisibleMenu(!visibleMenu);
  };
  const onCloseMenu = () => {
    setVisibleMenu(false);
  };

  const [visibleSettings, setVisibleSettings] = useState(false);
  const toggleSettings = () => {
    setVisibleSettings(!visibleSettings);
  };
  const onCloseSettings = () => {
    setVisibleSettings(false);
  };

  const { token } = useAuth();
  const isAuthenticated = !!token;

  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = () => {
    auth.logout();
    history.push('/');
  };

  return (
    <div>
      <Drawer
        placement="left"
        closable={false}
        onClose={onCloseMenu}
        visible={visibleMenu}
      >
        <SideMenu onClick={toggleMenu} />
      </Drawer>
      <Space wrap>
        {isAuthenticated && (
        <MenuOutlined onClick={toggleMenu} className="header__icon" />
        )}
        <Dropdown overlay={menu}>
          <Button>
            Choose Lang <DownOutlined />
          </Button>
        </Dropdown>
        {!isAuthenticated && <RegistrationFormInModal />}
        {isAuthenticated && (
        <Button type="primary" htmlType="submit" onClick={logoutHandler}>
          Выйти
        </Button>
        )}

        <SettingOutlined onClick={toggleSettings} className="header__icon" />
      </Space>
      <Drawer
        title="Settings"
        placement="right"
        closable={false}
        onClose={onCloseSettings}
        visible={visibleSettings}
      >
        <Settings />
      </Drawer>
    </div>
  );
};

export default Header;
