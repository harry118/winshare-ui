import React, { useState } from 'react';
import { DownOutlined, UpOutlined, CaretLeftFilled, CaretUpFilled } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import { searchList } from './constants';

const { Option } = Select;
import styles from './index.module.less';

const SearchBox: React.FC = () => {
  const [expand, setExpand] = useState(false);
  const [allExpand, setAllExpand] = useState(true);
  const [form] = Form.useForm();

  const getFields = () => {
    const list = expand ? searchList : searchList.filter((_item, index) => index < 3);
    const children = list.map((item) => (
      <Col span={8} key={item.key}>
        <Form.Item name={item.key} label={item.name}>
          <Input placeholder={`请输入${item.name}`} className={styles.searchInput} />
        </Form.Item>
      </Col>
    ));
    return children;
  };

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>搜索条件</h3>
        <span
          onClick={() => {
            setAllExpand(!allExpand);
          }}
        >
          收起 {allExpand ? <CaretLeftFilled /> : <CaretUpFilled />}
        </span>
      </div>
      {allExpand && (
        <Form
          form={form}
          name="advanced_search"
          className="ant-advanced-search-form"
          onFinish={onFinish}
        >
          <Row gutter={24}>{getFields()}</Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <a
                style={{ marginRight: 12 }}
                onClick={() => {
                  setExpand(!expand);
                }}
              >
                更多 {expand ? <UpOutlined /> : <DownOutlined />}
              </a>
              <Button
                style={{ marginRight: 8, borderRadius: 8 }}
                onClick={() => {
                  form.resetFields();
                }}
                size="middle"
              >
                重置
              </Button>
              <Button type="primary" htmlType="submit" size="middle">
                查询
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </div>
  );
};

export default SearchBox;
