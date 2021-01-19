import React from 'react';
import './App.css';
import { Route, withRouter, Switch } from 'react-router-dom';
import { Divider } from 'antd';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import StatsPage from './pages/StatsPage/StatsPage';
import Footer from './components/Footer/Footer';
import StepsLayout from './components/StepsLayout/StepsLayout';
import WordsList from './components/WordsList/WordsList';
import LessonsLayout from './components/LessonsLayout/LessonsLayout';

function App() {
  return (
    <div className="App">
      <Header />
      <Divider />
      <div className="content-wrapper">
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/stats" component={StatsPage} exact />
          <Route path="/steps" component={StepsLayout} exact />
          <Route path="/words" component={WordsList} exact />
          <Route path="/lessons" component={LessonsLayout} exact />
        </Switch>
      </div>
      <Divider />
      <Footer />
    </div>
  );
}

export default withRouter(App);
