import React, { FC, Fragment } from 'react';
export interface OrderListProps {
  /**
   * @description 订单详情跳转地址
   * @default 无
   */
  detailUrl: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export const OrderList: FC<OrderListProps> = ({ detailUrl }) => {
  return (
    <Fragment>
      <div>我是订单列表页面 2222</div>
      <p>第二版本增加的东西</p>
      <em>跳转的详情地址:{detailUrl}</em>
    </Fragment>
  );
};
