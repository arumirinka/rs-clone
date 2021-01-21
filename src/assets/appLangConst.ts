interface IAppLangConst {
  [key: string]: {
    [key: string]: string
  }
}

// eslint-disable-next-line import/prefer-default-export
export const appLangConst: IAppLangConst = {
  russian: {
    login: 'Войти',
    plzLogin: 'Пожалуйста, войдите или зарегистрируйтесь',
    menuMain: 'Главная',
    menuStats: 'Статистика',
    settingsDrawerHeader: 'Настройки',
    lightTheme: 'Светло',
    darkTheme: 'Темно',
  },
  english: {
    login: 'Log in',
    plzLogin: 'Please log in or register',
    menuMain: 'Main',
    menuStats: 'Stats',
    settingsDrawerHeader: 'Settings',
    lightTheme: 'Light',
    darkTheme: 'Dark',
  },
  german: {
    login: 'Einloggen',
    plzLogin: 'Bitte einloggen oder anmelden',
    menuMain: 'Main',
    menuStats: 'Stats',
    settingsDrawerHeader: 'Settings',
    lightTheme: 'Light',
    darkTheme: 'Dark',
  },
};
