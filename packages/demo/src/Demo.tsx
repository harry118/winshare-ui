import React, { FC } from 'react';
import { useCommon, CommonContext } from '@winshare/common-store';

import './index.less';

export interface DemoProps {
  size?: 'small' | 'middle' | 'large';
  shape?: 'circle' | 'round';
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export const Demo: FC<DemoProps> = (props) => {
  const { common, dispatchCommon } = useCommon();
  console.log('demo common', common);
  console.log('demo dispatchCommon', dispatchCommon);
  return (
    <div>
      <p>name:{common?.name}</p>
      <p>version:{common?.version}</p>
      <button
        onClick={() =>
          dispatchCommon({
            type: 'UPDATE_COMMON',
            payload: {
              name: '44444',
              version: '0.4.0',
            },
          })
        }
      >
        changeData
      </button>
      <p>我是一个demo 用来测试context</p>;
    </div>
  );
};
