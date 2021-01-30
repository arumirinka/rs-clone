/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { createContext } from 'react';

function noop() {}
function noopLogin(token, id) {}

export const AuthContext = createContext({
  token: null,
  userId: null,
  login: noopLogin,
  logout: noop,
  isAuthenticated: false,
});
