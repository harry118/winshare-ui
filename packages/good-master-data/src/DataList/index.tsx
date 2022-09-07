import React, { useState, useContext } from 'react';
import { RightOutlined, LeftOutlined, CaretLeftFilled, CaretUpFilled } from '@ant-design/icons';
import { Table, Col, Divider } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useHistory } from 'react-router-dom';
import { GoodsContext } from '@/models/goodMasterData';
import IconFont from '../components/IconFont';
import { dataList } from './constants';
import styles from './index.module.less';

const SearchBox: React.FC = () => {
  const [allExpand, setAllExpand] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const history = useHistory();
  const { data: data1 } = useContext(GoodsContext);
  console.log(data1, 'data1');
  const defaultColumns: ColumnsType<any> = [
    {
      title: '#',
      dataIndex: 'key',
    },
    {
      title: '公司代码',
      dataIndex: 'code',
    },
    {
      title: 'SAP商品编码',
      dataIndex: 'sapGoodCode',
      render: (text) => (
        <a onClick={() => history.push('/masterData/goodMasterData/detail')}>{text}</a>
      ),
    },
    {
      title: '商品全名',
      dataIndex: 'goodName',
    },
    {
      title: '国际商品编号',
      dataIndex: 'godeCode',
    },
    {
      title: '定价',
      dataIndex: 'price',
    },
    {
      title: '商品类型',
      dataIndex: 'type',
    },
    {
      title: '商品类目',
      dataIndex: 'goodCategory',
    },
    {
      title: '管理分类',
      dataIndex: 'manageCategory',
    },
    {
      title: '管理分类',
      dataIndex: 'manageCategory',
    },
    {
      title: '管理分类',
      dataIndex: 'manageCategory',
    },
    {
      title: '管理分类',
      dataIndex: 'manageCategory',
    },
    {
      title: '管理分类',
      dataIndex: 'manageCategory',
    },
    {
      title: '管理分类',
      dataIndex: 'manageCategory',
    },
    {
      title: '管理分类',
      dataIndex: 'manageCategory',
    },
    {
      title: '管理分类',
      dataIndex: 'manageCategory',
    },
  ];
  const [columns, setColumns] = useState(defaultColumns);
  const data = dataList.map((item, index) => ({ ...item, key: index + 1 }));
  const handleShowMore = () => {
    setShowMore(!showMore);
    if (!showMore) {
      const newColumns = columns.concat([
        {
          title: '启停状态',
          dataIndex: 'status',
          fixed: 'right',
          render: (_, record) => (
            <>
              <a>启用</a>
              <a>停用</a>
            </>
          ),
        },
        {
          title: '操作',
          dataIndex: 'action',
          fixed: 'right',
          render: (_, record) => <span>编辑</span>,
        },
      ]);
      setColumns(newColumns);
    } else {
      setColumns(defaultColumns);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>主数据管理</h3>
        <span
          onClick={() => {
            setAllExpand(!allExpand);
          }}
        >
          收起 {allExpand ? <CaretLeftFilled /> : <CaretUpFilled />}
        </span>
      </div>
      {allExpand && (
        <>
          <div className={styles.menuBox}>
            <span>
              <IconFont type="icon_chuangjian" className={styles.innerIcon} />
              <span>创建</span>
            </span>
            <span>
              <IconFont type="icon_mobanxiazai1" className={styles.innerIcon} />
              <span>模版下载</span>
            </span>
            <span>
              <IconFont type="icon_daoru" className={styles.innerIcon} />
              <span>导入</span>
            </span>
            <span>
              <IconFont type="icon_daochu" className={styles.innerIcon} />
              <span>导出</span>
            </span>
            <span>
              <IconFont type="icon_xiangxiajiantou" className={styles.innerIcon} />
              <span>更多</span>
            </span>
            <Divider type="vertical" />
            <span style={{ marginLeft: 0 }}>
              <IconFont type="icon_shuaxin" className={styles.icon} style={{ marginRight: 6 }} />
              <IconFont type="icon_quanpinghua" className={styles.icon} />
            </span>
          </div>
          <div className={styles.tableContainer}>
            <Table
              rowSelection={{
                type: 'checkbox',
              }}
              columns={columns}
              dataSource={data}
              scroll={{ x: 'max-content' }}
              pagination={{
                showTotal: (total, range) => {
                  return `共${total}条，${Math.ceil(range[0] / 10)}/共${Math.ceil(total / 10)}页`;
                },
                showQuickJumper: true,
              }}
            />
            <div className={styles.hideIconContainer} onClick={handleShowMore}>
              {showMore ? <RightOutlined /> : <LeftOutlined />}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchBox;
