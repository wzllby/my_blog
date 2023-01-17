import { Table } from 'antd';
import { useState } from 'react';

    const dataSource = [
    {
      key: '1',
      name: 'Java',
      nums: '8',
      create_time: '2023-1-15'
    },
    {
      key: '2',
      name: 'Vue',
      nums: '8',
      create_time: '2023-1-15'
    },
  ];
  
  const columns = [
    {
      title: '分类名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '文章量',
      dataIndex: 'nums',
      key: 'nums',
    },
    {
      title: '创建时间',
      dataIndex: 'create_time',
      key: 'create_time',
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