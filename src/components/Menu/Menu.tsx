/* eslint-disable react/destructuring-assignment */
import React from 'react';
import 'antd/dist/antd.css';
import './menu.css';
import { Link } from 'react-router-dom';
import { Menu, Switch } from 'antd';
import { HomeOutlined, LineChartOutlined } from '@ant-design/icons';

import { appLangConst } from '../../assets/appLangConst';

interface IProps {
  onClick: any,
  onChangeTheme: any
  appLang: string
}

interface IState {
  theme: any,
  current: string,
}

class SideMenu extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      theme: 'light',
      current: '1',
    };
  }

  changeTheme = (value: any) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
    this.props.onChangeTheme(value);
  };

  handleClick = (e: { key: any; }) => {
    this.setState({
      current: e.key,
    });
    this.props.onClick();
  };

  render() {
    return (
      <div className="menu-wrapper">
        <Switch
          checked={this.state.theme === 'dark'}
          onChange={this.changeTheme}
          checkedChildren={appLangConst[this.props.appLang].darkTheme}
          unCheckedChildren={appLangConst[this.props.appLang].lightTheme}
        />
        <br />
        <br />
        <Menu
          onClick={this.handleClick}
          style={{ width: 200 }}
          selectedKeys={[this.state.current]}
          mode="inline"
          theme={this.state.theme}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/main">{appLangConst[this.props.appLang].menuMain}</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<LineChartOutlined />}>
            <Link to="/stats">
              {appLangConst[this.props.appLang].menuStats}
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default SideMenu;
