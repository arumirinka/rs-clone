/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-console */
// import { message } from 'antd';
import { Table } from 'antd';
import React from 'react';
import { LineChart, Line } from 'recharts';
// import Chart from 'chart.js';
// import { useHttp } from '../../hooks/http.hook';
import './stats.css';

interface IProps {
  appLang: string
}

let bestUsers: Array<any> = [];
let dataSource: Array<any> = [];
// const { request } = useHttp();
let weekResults;
const weekProgress = async () => {
  try {
    let currentId;
    const currentUser = localStorage.getItem('userData');
    if (typeof currentUser === 'string') {
      currentId = JSON.parse(currentUser).userId;
    }

    const res = await fetch('/api/stats/weekProgress', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: currentId,
        appLang: 'russianApp',
        learningLang: 'english',
      }),
    });
    const data = await res.json();
    weekResults = data;
    return data;
  } catch (e) {
    console.log('something wrong');
  }
};

weekProgress();

const rating = async () => {
  try {
    const res = await fetch(
      '/api/stats/rating',
    );
    const data = await res.json();
    bestUsers = data.rating;

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
    <LineChart
      width={400}
      height={400}
      data={data}
      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
      <XAxis dataKey="name" />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
      <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
    </LineChart>

    <div className="stats_best">
      <h3>Лидеры</h3>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  </div>
);

export default StatsPage;
