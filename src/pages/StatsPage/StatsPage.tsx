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
    bestUsers = data.rating.map((item: any) => [item.email, item.points]);
    dataSource = [
      {
        key: '1',
        email: bestUsers[0][0],
        score: bestUsers[0][1],
      },
      {
        key: '2',
        email: bestUsers[1][0],
        score: bestUsers[1][1],
      },
      {
        key: '3',
        email: bestUsers[2][0],
        score: bestUsers[2][1],
      },
      {
        key: '4',
        email: bestUsers[3][0],
        score: bestUsers[3][1],
      },
      {
        key: '5',
        email: bestUsers[4][0],
        score: bestUsers[4][1],
      },
    ];
    console.log(bestUsers);
  } catch (e) {
    console.log('something wrong');
  }
};
rating();

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
        rowClassName="stats_table_row"
      />
      ;
    </div>
  </div>
);

export default StatsPage;
