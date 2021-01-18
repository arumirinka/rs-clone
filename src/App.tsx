import React from 'react';
import './App.css';
import { Route, withRouter, Switch } from 'react-router-dom';
import { Divider } from 'antd';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import StatsPage from './pages/StatsPage/StatsPage';
import Footer from './components/Footer/Footer';
import StepsLayout from './components/StepsLayout/StepsLayout';
import LessonsLayout from './components/LessonsLayout/LessonsLayout';

function App() {
  const {
    token, login, logout, userId,
  } = useAuth();
  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isAuthenticated,
      }}
    >
      <div className="App">
        <Header />
        <Divider />
        <div className="content-wrapper">
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/stats" component={StatsPage} exact />
            <Route path="/steps" component={StepsLayout} exact />
            <Route path="/lessons" component={LessonsLayout} exact />
          </Switch>
        </div>
        <Divider />
        <Footer />

      </div>
    </AuthContext.Provider>
  );
}

export default withRouter(App);
