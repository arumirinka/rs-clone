/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { Table } from 'antd';
import moment from 'moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AreaChart,
  ResponsiveContainer,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { StarOutlined } from '@ant-design/icons';
import { statsLangConst } from '../../assets/appLangConst';
import { getPointsFromDB } from '../../redux/actions';
// import StatsData from './StatsData';

import './stats.css';

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

    const res = await fetch(
      'https://enigmatic-peak-52817.herokuapp.com/api/stats/weekProgress',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: currentId,
          appLang: 'russianApp',
          learningLang: 'english',
        }),
      },
    );
    const data = await res.json();
    weekResults = data.weekProgress;
    console.log(weekResults);
    chartData = getWeekData();
    return weekResults;
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
      'https://enigmatic-peak-52817.herokuapp.com/api/stats/rating',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          appLang: 'russianApp',
          learningLang: 'english',
        }),
      },
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
  const selectAppState = (state: { app: any }) => state.app;
  const appState = useSelector(selectAppState);
  const { appLang, learnLang } = appState;

  const dispatch = useDispatch();
  const userID = JSON.parse(localStorage.getItem('userData') || '{}').userId;
  dispatch(getPointsFromDB(userID, appLang, learnLang));

  const selectStats = (state: { stats: any }) => state.stats;
  const stats = useSelector(selectStats);
  // const totalScore = stats[appLang][learnLang].langPoints;
  // const totalScore = stats[appLang][learnLang];
  //   const totalScore = Object.values(stats[appLang][learnLang].level1).concat(
  //     Object.values(stats[appLang][learnLang].level1),
  //   ).reduce((a, b) => (a + b), 0);
  // е
  // let totalScore = 0;
  // for (let i = 1; i <= 2; i += 1) {
  //   for (let j = 1; j <= 4; j += 1) totalScore += stats[appLang][learnLang][level{i}][lesson{j}];
  // }
  // console.log(totalScore);

  return (
    <div className="stats">
      <div style={{ display: 'flex', margin: '30px auto' }}>
        <h2>{statsLangConst[appLang].header}</h2>
        <span>
          <span>
            <StarOutlined
              className="header__icon"
              style={{
                marginLeft: 35,
                marginRight: 5,
                color: '#1c8673',
              }}
            />
          </span>
          <span style={{ fontSize: 26 }}>{ 425 }</span>
        </span>
      </div>

      <div className="stats_inner">
        <div className="stats_chart">
          <h3>{statsLangConst[appLang].chartName}</h3>
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
          <h3>{statsLangConst[appLang].tableName}</h3>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
