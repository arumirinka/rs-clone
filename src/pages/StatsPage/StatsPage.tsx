/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-console */
// import { message } from 'antd';
import { Table } from 'antd';
import React from 'react';
// import Chart from 'chart.js';
// import { useHttp } from '../../hooks/http.hook';
import './stats.css';

interface IProps {
  appLang: string
}

let bestUsers: Array<any> = [];
let dataSource: Array<any> = [];
// const { request } = useHttp();
const rating = async () => {
  try {
    const res = await fetch(
      '/api/stats/rating',
    );
    const data = await res.json();
    bestUsers = data.rating.map((item: any) => [
      item.email,
      item.results.english.langPoints,
    ]);

    dataSource = bestUsers.map((item) => ({
      key: bestUsers.indexOf(item) + 1,
      email: item[0],
      score: item[1],
    }));

    console.log(dataSource);
  } catch (e) {
    console.log('something wrong');
  }
};
rating();
console.log(dataSource);

const columns = [
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Score',
    dataIndex: 'score',
    key: 'score',
  },
];

const StatsPage: React.FC<IProps> = ({ appLang }: IProps) => (
  <div className="stats">
    {/* <header className="stats-header">
        <p>
          This is going to be the statistics page!
        </p>
        <p>
          This is the appLang: {appLang}!
        </p>
        <p>
          This is the way to print variables inside jsx/tsx.
          <br />
          Here is the <code>num</code> variable value: {num}
          , and its type is <code>number</code>.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <HelloWorld propName="props" propNum={num} />
      </header> */}

    <p>This is the appLang: {appLang}!</p>

    <div className="stats_best">
      <h3>Лидеры</h3>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      />
    </div>
  </div>
);

export default StatsPage;
