import React from 'react';
import Clock from '../../assets/Clock.svg';
import RecommendCommon from './RecommendCommon';

const RecommendItemList = () => {
  return (
    <div>
      <div>
        <img src={Clock} alt="clock" />
        <div>0분 ~ 60분</div>
      </div>
      <div>
        <RecommendCommon />
        <RecommendCommon />
        <RecommendCommon />
        <RecommendCommon />
      </div>
    </div>
  );
};

export default RecommendItemList;
