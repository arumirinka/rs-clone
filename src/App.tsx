import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import { Divider } from 'antd';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useRoutes } from './routes';

function App() {
  const {
    token, login, logout, userId,
  } = useAuth();
  const isAuthenticated = !!token;
  console.log(isAuthenticated);
  const routes = useRoutes(isAuthenticated);

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
        {isAuthenticated && <Header />}
        {!isAuthenticated && <Header />}
        <Divider />
        <div className="content-wrapper">{routes}</div>
        <Divider />
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default withRouter(App);
