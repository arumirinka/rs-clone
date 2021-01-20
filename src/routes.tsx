/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './pages/Main/Main';
import StatsPage from './pages/StatsPage/StatsPage';
import StepsLayout from './components/StepsLayout/StepsLayout';
import LessonsLayout from './components/LessonsLayout/LessonsLayout';

export const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Switch>
        {/* <Route path="/" component={Main} exact /> */}
        <Route path="/stats" component={StatsPage} exact />
        <Route path="/steps" component={StepsLayout} exact />
        <Route path="/lessons" component={LessonsLayout} exact />
        <Redirect to="/steps" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" component={Main} exact />
      <Redirect to="/" />
    </Switch>
  );
};
