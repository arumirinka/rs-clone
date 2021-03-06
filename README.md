# Технологии, задействованные в процессе разработки приложения

## React

Это одна из наиболее популярных JavaScript библиотек, основанная на компонентном подходе. React имеет ряд преимуществ, из основных: созданные компоненты можно переиспользовать, а благодаря virtual DOM мы сильно повышаем производительность приложения. В реальной работе React требуется часто, поэтому очень хотелось попробовать с ним поработать.

Одним из наиболее каверзных моментов, с которым пришлось повозиться, стало добавление hotkeys в упражнения. Дело в том, что в React работа с еvent listener’ами строится немного иначе, чем при использовании vanilla JS, поэтому потребовалось какое-то количество времени на то, чтобы осознать это и перестроить подход.

## Typescript

TypeScript позволяет избавиться от ошибок, возникающих из-за динамической типизации языка JavaScript (когда тип переменной может быть изменен в любой момент). Такие ошибки сложно обнаружить, и на исправление может уйти достаточно много времени. TypeScript эти ошибки просто не пропускает: в этом его несомненный плюс как на этапе разработки, так и на этапе поддержки. Помимо этого, TypeScript сильно улучшает читабельность кода: удобно, когда можно описать все передаваемые в компонент props'ы с помощью type или interface.

Начинать работать с TypeScript'ом было сложно - для всех нас это был первый опыт. Поначалу сложновато было также совмещать его с React'ом. Выпадало немало ошибок, которые тогда приходилось гуглить, зато сейчас всё кажется очевидным.

## Ant design

Это библиотека, которая предоставляет набор готовых элементов user интерфейса. Таким образом, получается выдержать приложение в одном стиле. С её помощью в нашем проекте были реализованы header и footer, выпадающее меню и настройки, модальный диалог, кнопки, прогресс бар. Ant design очень прост в использовании, код компонентов имеется также в формате .tsx, особых проблем у нас не возникало. Напротив, эта библиотека значительно упростила нам жизнь и сократила время разработки.

## Redux

Redux - менеджер состояний приложения. Как только мы столкнулись с необходимостью передавать изменения, произведенные в одном дочернем компоненте, в другой компонент, стало очевидным, что делать это через props'ы - не самый удобный вариант. Здесь на помощь пришел Redux. Он позволяет получить доступ ко всем нужным данным в любом месте приложения, и это действительно удобно.

Сложность была в том, чтобы разобраться со всеми нужными нам тонкостями, а также внедрение в уже готовые компоненты отняло некоторое количество времени.

## Node.js & Express

Node.js - это популярная платформа для разработки различных веб-сайтов, которая даёт возможность писать на едином языке локальные задачи и задачи, связанные с серверной работой и базами данных.

Для того, чтобы упростить разработку backend’а мы использовали Express - один из самых мощных универсальных фреймворков для серверов Node.js. С его помощью мы осуществили обработку с различными HTTP-методами в разных URL-адресах (маршрутах) и обработали ошибки.

Express имеет достаточно простую и понятную документацию, в которой не составит особого труда разобраться даже новичку.

## MongoDB

Для хранения необходимой нам информации (авторизационных данных пользователя, статистики, а также данных для уроков) была выбрана база данных MongoDB. Она является нереляционной и хранит данные в виде JSON документов. БД основана на коллекциях различных документов. Количество полей, содержание и размер этих документов может отличаться.

## Mongoose

Это библиотека JavaScript, позволяющая определять схемы со строго типизированными данными. Сразу после определения схемы Mongoose даёт возможность создать модель, основанную на определённой схеме. Затем модель синхронизируется с документом MongoDB с помощью определения схемы модели. В нашем случае, это были модель для хранения контента уроков и модель для данных о пользователе.
