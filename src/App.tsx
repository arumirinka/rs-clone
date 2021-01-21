import React, { useState } from 'react';
import './App.css';
import {
  Redirect, Route, Switch, withRouter,
} from 'react-router-dom';
import { Divider } from 'antd';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import StepsLayout from './components/StepsLayout/StepsLayout';
import WordsList from './components/WordsList/WordsList';
import LessonsLayout from './components/LessonsLayout/LessonsLayout';
import StatsPage from './pages/StatsPage/StatsPage';
import Main from './pages/Main/Main';

function App() {
  const [appLang, setAppLang] = useState('russian');

  const handleLangChange:any = (lang: string) => {
    setAppLang(lang);
  };

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
        <Header handleLangChange={handleLangChange} appLang={appLang} />
        <Divider />
        <div className="content-wrapper">
          {isAuthenticated && (
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/stats" render={() => <StatsPage appLang={appLang} />} exact />
            <Route path="/steps" component={StepsLayout} exact />
            <Route path="/words" component={WordsList} exact />
            <Route path="/lessons" component={LessonsLayout} exact />
            <Redirect to="/stats" />
          </Switch>
          )}
          {!isAuthenticated && (
          <Switch>
            <Route path="/" component={Main} exact />
            <Redirect to="/" />
          </Switch>
          )}
        </div>
        <Divider />
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default withRouter(App);
