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

import './stats.css';
import { getPointsFromDB } from '../../redux/actions';

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

const StatsPage: React.FC = () => {
  const selectAppState = (state: { app: any }) => state.app;
  const appState = useSelector(selectAppState);
  const { appLang, learnLang } = appState;

  const selectStats = (state: { stats: any }) => state.stats;
  const stats = useSelector(selectStats);

  const dispatch = useDispatch();
  const userID = JSON.parse(localStorage.getItem('userData') || '{}').userId;
  dispatch(getPointsFromDB(userID, appLang, learnLang));

  const lessonsNumber = 4;
  const levelsNumber = (appLang === 'russian' && learnLang === 'english') ? 5 : 2;
  let totalScore = 0;
  for (let i = 1; i <= levelsNumber; i += 1) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (let j = 1; j <= lessonsNumber; j += 1) totalScore += (stats[appLang][learnLang][`level${i}`][`lesson${j}`]);
  }

  const updateScore = async () => {
    try {
      const res = await fetch(
        'https://enigmatic-peak-52817.herokuapp.com/api/stats/updateScore',
        {
          method: 'put',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: userID,
            appLang: `${appLang}App`,
            learningLang: learnLang,
            score: totalScore,
          }),
        },
      );
      await res.json();
    } catch (e) {
      console.log('something wrong:', e);
    }
  };

  updateScore();

  const getWeekData = () => {
    const weekData = weekDays.map((item) => ({
      date: item,
      points: weekResults[weekDays.indexOf(item)],
    }));
    return weekData;
  };

  // eslint-disable-next-line consistent-return
  const weekProgress = async () => {
    try {
      const res = await fetch(
        'https://enigmatic-peak-52817.herokuapp.com/api/stats/weekProgress',
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: userID,
            appLang: `${appLang}App`,
            learningLang: learnLang,
          }),
        },
      );
      const data = await res.json();
      weekResults = data.weekProgress;
      chartData = getWeekData();
      return weekResults;
    } catch (e) {
      console.log('something wrong');
    }
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
            appLang: `${appLang}App`,
            learningLang: learnLang,
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
          <span style={{ fontSize: 26 }}>{ stats[appLang][learnLang].langPoints }</span>
        </span>
      </div>
      {/* <StatsData /> */}
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
