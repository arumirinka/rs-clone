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
import LoginPage from './pages/LoginPage/LoginPage';
import ExercisesLayout from './components/Exercises/ExercisesLayout';

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
        {isAuthenticated && <Header handleLangChange={handleLangChange} appLang={appLang} />}
        {isAuthenticated && <Divider />}
        <div className="content-wrapper">
          {isAuthenticated && (
          <Switch>
            <Route path="/main" component={Main} exact />
            <Route path="/stats" render={() => <StatsPage appLang={appLang} />} exact />
            <Route path="/steps" component={StepsLayout} exact />
            <Route path="/lessons" component={LessonsLayout} exact />
            <Route path="/lessons/words" component={WordsList} exact />
            <Route path="/lessons/exercises" component={ExercisesLayout} exact />
            <Redirect to="/main" />
          </Switch>
          )}
          {!isAuthenticated && (
          <Switch>
            <Route path="/" component={LoginPage} exact />
            {/* <Redirect to="/" /> */}
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
