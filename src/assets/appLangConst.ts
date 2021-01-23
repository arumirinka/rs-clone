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

export const nextButtonConst: IAppLangConst = {
  russian: {
    nextButton: 'Дальше',
  },
  english: {
    nextButton: 'Next',
  },
  german: {
    nextButton: 'Nächster',
  },
};

export const matchWordsConst: IAppLangConst = {
  russian: {
    header: 'Соедините слова и перевод',
  },
  english: {
    header: 'Match words and translations',
  },
  german: {
    header: 'Wörter und übersetzungen abgleichen',
  },
};

export const wordsListConst: IAppLangConst = {
  russian: {
    header: 'Слова к уроку',
  },
  english: {
    header: 'Words for the Lesson',
  },
  german: {
    header: 'Worte für die Lektion',
  },
};
