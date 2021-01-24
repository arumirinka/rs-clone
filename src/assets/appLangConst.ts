interface IAppLangConst {
  [key: string]: {
    [key: string]: string
  }
}

export const appLangConst: IAppLangConst = {
  russian: {
    login: 'Войти',
    logout: 'Выйти',
    plzLogin: 'Пожалуйста, войдите или зарегистрируйтесь',
    menuMain: 'Главная',
    menuStats: 'Статистика',
    settingsDrawerHeader: 'Настройки',
    lightTheme: 'Светло',
    darkTheme: 'Темно',
    lang1: 'Английский',
    lang2: 'Японский',
    lang3: 'Французский',
  },
  english: {
    login: 'Log in',
    logout: 'Log out',
    plzLogin: 'Please log in or register',
    menuMain: 'Main',
    menuStats: 'Stats',
    settingsDrawerHeader: 'Settings',
    lightTheme: 'Light',
    darkTheme: 'Dark',
    lang1: 'Russian',
    lang2: 'Japanese',
    lang3: 'French',
  },
  german: {
    login: 'Einloggen',
    logout: 'Log out',
    plzLogin: 'Bitte einloggen oder anmelden',
    menuMain: 'Main',
    menuStats: 'Stats',
    settingsDrawerHeader: 'Settings',
    lightTheme: 'Light',
    darkTheme: 'Dark',
    lang1: 'Englisch',
    lang2: 'Japanisch',
    lang3: 'Französisch',
  },
};

export const langsLayoutLangConst: IAppLangConst = {
  russian: {
    lang1: 'Английский',
    lang2: 'Японский',
    lang3: 'Французский',
    header: 'Помоги Кэтали найти с людьми общий язык!',
  },
  english: {
    lang1: 'Russian',
    lang2: 'Japanese',
    lang3: 'French',
    header: 'Help CATalie to find common language with people!',
  },
  german: {
    lang1: 'Englisch',
    lang2: 'Japanisch',
    lang3: 'Französisch',
    header: 'Hilf CATalie, gemeinsame Sprache mit Menschen zu finden!',
  },
};
