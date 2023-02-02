import { Table,Space, Button, Popconfirm, Modal } from 'antd';
import { useState } from 'react';
import Publish from '../../Publish';

    const data = [
    {
      key: '1',
      cover: '',
      title: 'java入门',
      class: '西湖区湖底公园1号',
      babel: 'java',
      words_num: 699,
      post_formats: '加密',
      post_time: '2023-1-15',
      hot_num: 55,
      likes_num: 5,
      state: '原创'
    },
    {
      key: '2',
      cover: '',
      title: 'css入门',
      class: '西湖区湖底公园1号',
      babel: 'css',
      words_num: 699,
      post_formats: '加密',
      post_time: '2023-1-15',
      hot_num: 55,
      likes_num: 5,
      state: '原创'
    },
  ];
    const App = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [dataSource, setDataSource] = useState(data);

      const showPopconfirm = (e) => {
        console.log(e)
        const newDate = data.filter(x => x.key !== e);
        setDataSource(newDate);
        this.data = newDate;
      };
      const showModal = () => {
        setIsModalOpen(true);
      };
      const handleOk = () => {
        setIsModalOpen(false);
      };
      const columns = [
        {
          title: '封面',
          dataIndex: 'cover',
          key: 'cover',
        },
        {
          title: '标题',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: '分类',
          dataIndex: 'class',
          key: 'class',
        },
        {
          title: '标签',
          dataIndex: 'babel',
          key: 'babel',
        },
        {
          title: '字数',
          dataIndex: 'words_num',
          key: 'words_num',
        },
        {
          title: '类型',
          dataIndex: 'state',
          key: 'state',
        },
        {
          title: '发布方式',
          dataIndex: 'post_formats',
          key: 'post_formats',
        },
        {
          title: '发布时间',
          dataIndex: 'post_time',
          key: 'post_time',
        },
        {
          title: '热度',
          dataIndex: 'hot_num',
          key: 'hot_num',
        },
        {
          title: '点赞数',
          dataIndex: 'likes_num',
          key: 'likes_num',
        },
        {
          title: '操作',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <Button type='primary' onClick={showModal}>编辑</Button>
              <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk}>
                <Publish />
              </Modal>
              <Popconfirm
                title="警告"
                description="确认要删除本条数据？"
                onConfirm={() => showPopconfirm(record.key)}
              >
                <Button danger>删除</Button>
              </Popconfirm>
            </Space>
          ),
        },
      ];
      const [selectedRowKeys, setSelectedRowKeys] = useState([]);
      const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
      };
      const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
      };
      const add = () => {
        
      };
        return (
          <>
            <Space size='middle'>
              <Button type="primary" onClick={add}>新增</Button>
            </Space>
            <Table rowSelection={rowSelection} dataSource={dataSource} columns={columns} />
          </>
        )
    }

  export default App;