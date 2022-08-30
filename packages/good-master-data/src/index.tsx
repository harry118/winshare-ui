import React, { useCallback, useState } from 'react';
import StatisticCard from './StatisticCard';
import SearchBox from './SearchBox';
import DataList from './DataList';
import styles from './index.less';

const MasterData: React.FC = () => {
  return (
    <div className={styles.container}>
      <StatisticCard />
      <SearchBox />
      <DataList />
    </div>
  );
};

export default MasterData;
