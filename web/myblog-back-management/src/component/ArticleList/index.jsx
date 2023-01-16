import { Table } from 'antd';

    const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
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
  ];
    const App = () => {
        return (
            <Table dataSource={dataSource} columns={columns} />
        )
    }

  export default App;