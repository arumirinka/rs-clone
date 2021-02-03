import React from 'react';
import { useSelector } from 'react-redux';

const StatsData: React.FC = () => {
  const selectStats = (state: { stats: any; }) => state.stats;
  const statsState = useSelector(selectStats);

  console.log('the stats data:', statsState);

  return (
    <div className="stats">
      <p>Stats</p>
    </div>
  );
};

export default StatsData;
