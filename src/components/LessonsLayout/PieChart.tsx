import React from 'react';
import { Pie } from 'react-chartjs-2';

type Props = {
  done: string,
  toDo: string,
  value: number
};

const PieChart = ({ done, toDo, value }:Props) => {
  console.log(toDo, done);
  return (
    <Pie
      data={{
        datasets: [{
          data: [value, 100 - value],
          backgroundColor: [
            'rgba(101, 219, 98, 1)',
            'rgba(238, 232, 89, 1)',
          ],
        }],
        labels: [
          `${done} (%)`,
          `${toDo} (%)`,
        ],
      }}
      width={300}
      height={200}
      options={{
        maintainAspectRatio: false,
        legend: {
          display: true,
          labels: {
            fontSize: 14,
            fontColor: 'black',
          },
        },
      }}
    />
  );
};
export default PieChart;
