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
    email: 'E-mail',
    password: 'Пароль',
    passwordMsg: 'Пожалуйста, введите пароль',
    loginGithub: 'Войти через Github',
    register: 'Зарегистрироваться',
    menuMain: 'Главная',
    menuStats: 'Статистика',
    settingsDrawerHeader: 'Настройки',
    lightTheme: 'Светло',
    darkTheme: 'Темно',
  },
  english: {
    login: 'Log in',
    plzLogin: 'Please log in or register',
    email: 'E-mail',
    password: 'Password',
    passwordMsg: 'Please, enter password',
    loginGithub: 'Log in with Github',
    register: 'Register',
    menuMain: 'Main',
    menuStats: 'Stats',
    settingsDrawerHeader: 'Settings',
    lightTheme: 'Light',
    darkTheme: 'Dark',
  },
  german: {
    login: 'Einloggen',
    plzLogin: 'Bitte einloggen oder anmelden',
    email: 'E-mail',
    password: 'Passwort',
    passwordMsg: 'Bitte, geben Sie Ihr Passwort ein',
    loginGithub: 'Einloggen mit Github',
    register: 'Ein Konto erstellen',
    menuMain: 'Home',
    menuStats: 'Statistik',
    settingsDrawerHeader: 'Einstellungen',
    lightTheme: 'Hell',
    darkTheme: 'Dunkel',
  },
};

export const mainPageConst: IAppLangConst = {
  russian: {
    english: 'Английский',
    japanese: 'Японский',
    french: 'Французский',
    helpCatalie: 'Помоги Кэтали найти с людьми общий язык!',
  },
  english: {
    english: 'English',
    japanese: 'Japanese',
    french: 'French',
    helpCatalie: 'Help CATalie to find common language with people!',
  },
  german: {
    english: 'Englisch',
    japanese: 'Japanisch',
    french: 'Französisch',
    helpCatalie: 'Hilf CATalie, gemeinsame Sprache mit Menschen zu finden! ',
  },
};

export const lessonsConst: IAppLangConst = {
  russian: {
    level: 'Уровень',
    lesson: 'Урок',
    lessonsIntro: 'Муррр, мы начинаем учиться! Ввожу в курс дела: для успешного перехода на новый уровень нам надо пройти 6 уроков и набрать минимум 510/600 баллов (100 баллов за урок) или 85%.',
    chartCompleted: 'Пройдено',
    chartLeft: 'Осталось',
  },
  english: {
    level: 'Level',
    lesson: 'Lesson',
    lessonsIntro: 'Meow, we\'re going to start learning now! Let me bring you up to speed: to move to the next level you\'ll have to complete 6 lessons and get at least 510/600 points (100 points per lesson) or 85%.',
    chartCompleted: 'Completed',
    chartLeft: 'Not completed',
  },
  german: {
    level: 'Level',
    lesson: 'Lektion',
    lessonsIntro: 'Meow, jetzt beginnen wir zu lernen! Ich setze dich ins Bild: du hast vor, 6 Lektionen abzuschließen und mindestens 510/600 Punkten (100 Punkten pro Lektion) oder 85% zu erhalten, um das nächste Level zu starten.',
    chartCompleted: 'Abgeschlossen',
    chartLeft: 'Nicht abgeschlossen',
  },
};

export const exercisesInterface: IAppLangConst = {
  russian: {
    chooseTranslation: 'Выберите перевод для слова',
    сontinue: 'Продолжить',
    makeAPhrase: 'Составьте фразу',
    сheck: 'Проверить',
    correctAnswer: 'Правильный ответ',
  },
  english: {
    chooseTranslation: 'Choose translation for word',
    сontinue: 'Continue',
    makeAPhrase: 'Make a phrase',
    сheck: 'Check',
    correctAnswer: 'Correct answer',
  },
  german: {
    chooseTranslation: 'Wählen Sie eine Übersetzung für das Wort',
    сontinue: 'Weiter',
    makeAPhrase: 'Bilden Sie die Phrase',
    сheck: 'Prüfen',
    correctAnswer: 'Richtige Antwort',
  },
};
