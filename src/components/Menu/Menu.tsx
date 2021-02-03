/* eslint-disable react/destructuring-assignment */
import React from 'react';
import 'antd/dist/antd.css';
import './menu.css';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, LineChartOutlined } from '@ant-design/icons';

import { appLangConst } from '../../assets/appLangConst';

interface IProps {
  onClick: any,
  appTheme: any,
  appLang: string,
}

interface IState {
  current: string,
}

class SideMenu extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      current: '1',
    };
  }

  handleClick = (e: { key: any; }) => {
    this.setState({
      current: e.key,
    });
    this.props.onClick();
  };

  render() {
    return (
      <div className="menu-wrapper">
        <Menu
          onClick={this.handleClick}
          style={{ width: 200 }}
          selectedKeys={[this.state.current]}
          mode="inline"
          theme={this.props.appTheme}
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
