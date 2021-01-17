/* eslint-disable react/destructuring-assignment */
import React from 'react';
import 'antd/dist/antd.css';
import './menu.css';
import { Link } from 'react-router-dom';
import { Menu, Switch } from 'antd';
import { MailOutlined, CalendarOutlined } from '@ant-design/icons';

interface IProps {
  onClick: any,
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
          checkedChildren="Dark"
          unCheckedChildren="Light"
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
          <Menu.Item key="1" icon={<MailOutlined />}>
            <Link to="/">
              Main
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<CalendarOutlined />}>
            <Link to="/stats">
              Stats
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default SideMenu;
