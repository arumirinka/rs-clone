import React, { useContext, useState } from 'react';
import {
  Menu, Dropdown, Button, Space, Drawer,
} from 'antd';
import Icon, {
  DownOutlined,
  MenuOutlined,
  SettingOutlined,
  StarOutlined,
  // StarOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SideMenu from '../Menu/Menu';
import Settings from '../Settings/Settings';
import './header.css';

import StatsData from '../../pages/StatsPage/StatsData';

import { AuthContext } from '../../context/AuthContext';

import { appLangConst } from '../../assets/appLangConst';
import flag_RU from '../../assets/RU.svg';
import flag_US from '../../assets/US.svg';
import flag_DE from '../../assets/DE.svg';

import { changeAppLang } from '../../redux/actions';

let currLang = 'Русский';

const selectAppState = (state: { app: any }) => state.app;

interface IProps {
  isAuth: any
}

const Header: React.FC<IProps> = ({ isAuth }: IProps) => {
  const { appLang, theme } = useSelector(selectAppState);

  const dispatch = useDispatch();
  const history = useHistory();

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
    dispatch(changeAppLang(e.key));

    if (isAuth) {
      history.push('/main');
    }
  };

  const langMenu = (
    <Menu onClick={handleLangMenuClick}>
      <Menu.Item
        key="russian"
        icon={(
          <Icon
            component={() => (
              <img src={flag_RU} alt="ru" className="lang-img" />
            )}
          />
        )}
      >
        Русский
      </Menu.Item>
      <Menu.Item
        key="english"
        icon={(
          <Icon
            component={() => (
              <img src={flag_US} alt="en" className="lang-img" />
            )}
          />
        )}
      >
        English
      </Menu.Item>
      <Menu.Item
        key="german"
        icon={(
          <Icon
            component={() => (
              <img src={flag_DE} alt="de" className="lang-img" />
            )}
          />
        )}
      >
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

  const auth = useContext(AuthContext);

  const logoutHandler = () => {
    auth.logout();
    history.push('/');
  };

  // const [theme, setTheme] = useState('light');
  // const onChangeTheme = (value: any) => {
  //   setTheme(value ? 'dark' : 'light');
  // };
  // const [points] = useState(0);

  // const userID = JSON.parse(localStorage.getItem('userData') || '{}').userId;
  // dispatch(getPointsFromDB(userID, appLang, learnLang));

  return (
    <div>
      {isAuth && (
      <Drawer
        placement="left"
        closable={false}
        onClose={onCloseMenu}
        visible={visibleMenu}
        className={theme === 'light' ? 'drawer-light' : 'drawer-dark'}
      >
        <SideMenu onClick={toggleMenu} appTheme={theme} appLang={appLang} />

      </Drawer>
      )}
      <Space wrap>
        {isAuth && <MenuOutlined onClick={toggleMenu} className="header__icon" />}
        <Dropdown overlay={langMenu}>
          <Button>
            {currLang} <DownOutlined />
          </Button>
        </Dropdown>
        {isAuth && (
        <Button type="primary" htmlType="submit" onClick={logoutHandler}>
          {appLangConst[appLang].logout}
        </Button>
        )}

        {isAuth && <SettingOutlined onClick={toggleSettings} className="header__icon" />}
      </Space>
      {isAuth && (
      <Drawer
        title={appLangConst[appLang].settingsDrawerHeader}
        placement="right"
        closable={false}
        onClose={onCloseSettings}
        visible={visibleSettings}
        className={(theme === 'light') ? 'drawer-light' : 'drawer-dark'}
      >
        <Settings />
      </Drawer>

      )}

      {isAuth && (
      <span>
        <span>
          <StarOutlined
            className="header__icon"
            style={{
              marginLeft: 35,
              marginRight: 5,
              color: '#1c8673',
            }}
          />
        </span>
        <span style={{ fontSize: 26 }}><StatsData /></span>
      </span>
      ) }

    </div>
  );
};

export default Header;
