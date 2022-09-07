import React from 'react';
import { Col, Row, Statistic } from 'antd';
import classNames from 'classnames';
import styles from './index.module.less';

const StatisticCard: React.FC = () => {
  const textColor = '#333';
  const textFontSize = 20;
  const titleStyle = {
    color: textColor,
    fontSize: textFontSize,
  };
  const valueStyle = { color: textColor, fontSize: 36, fontWeight: 'bolder' };
  const suffixStyle = { fontSize: textFontSize, fontWeight: 'normal', marginLeft: 16 };
  return (
    <Row gutter={16}>
      <Col span={8}>
        <div className={classNames(styles.boxStyle)}>
          <Statistic
            title={<span style={titleStyle}>全社品种</span>}
            value={884000}
            valueStyle={valueStyle}
            suffix={<span style={suffixStyle}>个</span>}
          />
        </div>
      </Col>
      <Col span={8}>
        <div className={classNames(styles.boxStyle)}>
          <Statistic
            title={<span style={titleStyle}>今年新品</span>}
            value={884000}
            valueStyle={valueStyle}
            suffix={<span style={suffixStyle}>个</span>}
          />
        </div>
      </Col>
      <Col span={8}>
        <div className={classNames(styles.boxStyle)}>
          <Statistic
            title={<span style={titleStyle}>加印品种</span>}
            value={4000}
            valueStyle={valueStyle}
            suffix={<span style={suffixStyle}>个</span>}
          />
        </div>
      </Col>
    </Row>
  );
};

export default StatisticCard;
