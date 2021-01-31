import React, { useContext, useState } from 'react';
import {
  Menu, Dropdown, Button, Space, Drawer,
} from 'antd';
import Icon, {
  DownOutlined, MenuOutlined, SettingOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import SideMenu from '../Menu/Menu';
import Settings from '../Settings/Settings';
import './header.css';

import { AuthContext } from '../../context/AuthContext';

import { appLangConst } from '../../assets/appLangConst';
import flag_RU from '../../assets/RU.svg';
import flag_US from '../../assets/US.svg';
import flag_DE from '../../assets/DE.svg';

type IProps = {
  handleLangChange: any,
  appLang: string
};

let currLang = 'Русский';

const Header: React.FC<IProps> = ({ handleLangChange, appLang }: IProps) => {
  const handleLangMenuClick = (e: any) => {
    if (e.key === 'russian') {
      currLang = 'Русский';
    }
    if (e.key === 'english') {
      currLang = 'English';
    }
    if (e.key === 'german') {
      currLang = 'Deutsch';
    }
    handleLangChange(e.key);
  };

  const langMenu = (
    <Menu onClick={handleLangMenuClick}>
      <Menu.Item key="russian" icon={<Icon component={() => (<img src={flag_RU} alt="ru" className="lang-img" />)} />}>
        Русский
      </Menu.Item>
      <Menu.Item key="english" icon={<Icon component={() => (<img src={flag_US} alt="en" className="lang-img" />)} />}>
        English
      </Menu.Item>
      <Menu.Item key="german" icon={<Icon component={() => (<img src={flag_DE} alt="de" className="lang-img" />)} />}>
        Deutsch
      </Menu.Item>
    </Menu>
  );

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

  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = () => {
    auth.logout();
    history.push('/');
  };

  const [theme, setTheme] = useState('light');
  const onChangeTheme = (value: any) => {
    setTheme(value ? 'dark' : 'light');
  };

  return (
    <div>
      <Drawer
        placement="left"
        closable={false}
        onClose={onCloseMenu}
        visible={visibleMenu}
        className={(theme === 'light') ? 'drawer-light' : 'drawer-dark'}
      >
        <SideMenu onClick={toggleMenu} onChangeTheme={onChangeTheme} appLang={appLang} />
      </Drawer>
      <Space wrap>
        <MenuOutlined onClick={toggleMenu} className="header__icon" />
        <Dropdown overlay={langMenu}>
          <Button>
            {currLang} <DownOutlined />
          </Button>
        </Dropdown>
        <Button type="primary" htmlType="submit" onClick={logoutHandler}>
          {appLangConst[appLang].logout}
        </Button>

        <SettingOutlined onClick={toggleSettings} className="header__icon" />
      </Space>
      <Drawer
        title={appLangConst[appLang].settingsDrawerHeader}
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
