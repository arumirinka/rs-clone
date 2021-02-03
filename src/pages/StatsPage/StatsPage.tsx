/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-console */
import { Table } from 'antd';
import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  AreaChart,
  ResponsiveContainer,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

import './stats.css';
import { statsWordsConst } from '../../assets/appLangConst';

// interface IProps {
//   appLang: string
// }

let bestUsers: Array<any> = [];
let dataSource: Array<any> = [];
let weekResults: any[];
let chartData: any;

const getDate = (daysBefore: moment.DurationInputArg1) => moment().subtract(daysBefore, 'days').format('DD/MM');
const weekDays = [
  getDate(6),
  getDate(5),
  getDate(4),
  getDate(3),
  getDate(2),
  getDate(1),
  getDate(0),
];

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
    weekResults = data.weekProgress;
    console.log(weekResults);
    chartData = getWeekData();
    return data;
  } catch (e) {
    console.log('something wrong');
  }
};
const getWeekData = () => {
  const weekData = weekDays.map((item) => ({
    date: item,
    points: weekResults[weekDays.indexOf(item)],
  }));
  console.log(weekData);
  return weekData;
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

const StatsPage: React.FC = () => {
  // const num: number = 2;
  const selectAppLang = (state: { app: { appLang: any; }; }) => state.app.appLang;
  const appLang = useSelector(selectAppLang);
  return (
    <div className="stats">
      <div className="stats_chart">
        <h3>{statsWordsConst[appLang].chartName}</h3>
        <ResponsiveContainer width="100%">
          <AreaChart
            width={600}
            height={400}
            data={chartData}
            margin={{
              top: 5,
              right: 20,
              left: 10,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="color-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#136052" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#e6ffec" stopOpacity={0.5} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Area
              type="monotone"
              dataKey="points"
              stroke="#136052"
              fillOpacity={1}
              fill="url(#color-fill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="stats_best">
        <h3>{statsWordsConst[appLang].tableName}</h3>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
      </div>
    </div>
  );
};

export default StatsPage;
