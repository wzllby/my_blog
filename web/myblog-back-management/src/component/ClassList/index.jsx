import { Table, Button, Space, Modal, Form, Input } from 'antd';
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
      const [isModalOpen, setIsModalOpen] = useState(false);
      const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
      };
      const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
      };

      const showModal = () => {
        setIsModalOpen(true);
      };
      // 发送请求添加分类
      const handleOk = () => {
        setIsModalOpen(false);
      };

      const handleCancel = () => {
        setIsModalOpen(false);
      };
        return (
          <>
            <Space size='middle'>
              <Button type="primary" onClick={showModal}>新增</Button>
            </Space>
            <Table rowSelection={rowSelection} dataSource={dataSource} columns={columns} />
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <Form>
                <Form.Item label="分类名" name="classname">
                  <Input />
                </Form.Item>
              </Form>
            </Modal>
          </>
        )
    }

  export default App;