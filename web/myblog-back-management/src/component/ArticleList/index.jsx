import { Table,Space, Button } from 'antd';
import { useState } from 'react';

    const dataSource = [
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
  ];
  
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
      render: () => (
        <Space size="middle">
          <Button type='primary'>编辑</Button>
          <Button danger onClick={() => {}}>删除</Button>
        </Space>
      ),
    },
  ];
    const App = () => {
      
      const [selectedRowKeys, setSelectedRowKeys] = useState([]);
      const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
      };
      const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
      };
        return (
            <Table rowSelection={rowSelection} dataSource={dataSource} columns={columns} />
        )
    }

  export default App;