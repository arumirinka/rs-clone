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
    soundOn: 'Вкл',
    soundOff: 'Выкл',
    lang1: 'Английский',
    lang2: 'Японский',
    lang3: 'Французский',
  },
  english: {
    login: 'Log in',
    logout: 'Log out',
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
    soundOn: 'On',
    soundOff: 'Off',
    lang1: 'Russian',
    lang2: 'Japanese',
    lang3: 'French',
  },
  german: {
    login: 'Einloggen',
    logout: 'Abmelden',
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
    soundOn: 'On',
    soundOff: 'Off',
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
    helpCatalie: 'Помоги Кэтали найти с людьми общий язык!',
  },
  english: {
    lang1: 'Russian',
    lang2: 'Japanese',
    lang3: 'French',
    helpCatalie: 'Help CATalie to find common language with people!',
  },
  german: {
    lang1: 'Englisch',
    lang2: 'Japanisch',
    lang3: 'Französisch',
    helpCatalie: 'Hilf CATalie, gemeinsame Sprache mit Menschen zu finden!',
  },
};

export const lessonsConst: IAppLangConst = {
  russian: {
    level: 'Уровень',
    lesson: 'Урок',
    lessonsIntro: 'Муррр, мы начинаем учиться! Ввожу в курс дела: для успешного перехода на новый уровень нам надо пройти 4 урока и набрать минимум 340/400 баллов (100 баллов за урок) или 85%.',
    chartCompleted: 'Пройдено',
    chartLeft: 'Осталось',
  },
  english: {
    level: 'Level',
    lesson: 'Lesson',
    lessonsIntro: 'Meow, we\'re going to start learning now! Let me bring you up to speed: to move to the next level you\'ll have to complete 4 lessons and get at least 340/400 points (100 points per lesson) or 85%.',
    chartCompleted: 'Completed',
    chartLeft: 'Not completed',
  },
  german: {
    level: 'Level',
    lesson: 'Lektion',
    lessonsIntro: 'Meow, jetzt beginnen wir zu lernen! Ich setze dich ins Bild: du hast vor, 4 Lektionen abzuschließen und mindestens 340/400 Punkte (100 Punkte pro Lektion) oder 85% zu erhalten, um das nächste Level zu starten.',
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
    endOfLessonTitle: 'Вот и урок завершён!',
    endOfLessonText: 'Смотри, сколько баллов мы смогли набрать',
    toLessons: 'Вернуться к урокам',
  },
  english: {
    chooseTranslation: 'Choose translation for word',
    сontinue: 'Continue',
    makeAPhrase: 'Make a phrase',
    сheck: 'Check',
    correctAnswer: 'Correct answer',
    endOfLessonTitle: 'And the lesson is over!',
    endOfLessonText: 'Have a look, how many points we have gained',
    toLessons: 'Back to lessons',
  },
  german: {
    chooseTranslation: 'Wählen Sie eine Übersetzung für das Wort',
    сontinue: 'Weiter',
    makeAPhrase: 'Bilden Sie die Phrase',
    сheck: 'Prüfen',
    correctAnswer: 'Richtige Antwort',
    endOfLessonTitle: 'Und die Lektion ist vorbei!',
    endOfLessonText: 'Sieh mal, wie viele Punkte wir gekriegt haben',
    toLessons: 'Zurück zu Lektionen',
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
    nextButton: 'Weiter',
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
    header: 'Setzen Sie Wörter und Übersetzungen zusammen',
  },
};

export const findPronouncedWordConst: IAppLangConst = {
  russian: {
    header: 'Выберите произнесённое слово',
  },
  english: {
    header: 'Choose the pronounced word',
  },
  german: {
    header: 'Wählen Sie das ausgesprochene Wort',
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
    header: 'Wörter für die Lektion',
  },
};
