import { Table, Space, Button, Form, Input, Modal } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
  let dataSource = [];
  const columns = [
    {
      title: '标签名',
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
      
      useEffect(() => {
        dataSource = [];
        initLabels();
      })
      const [selectedRowKeys, setSelectedRowKeys] = useState([]);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const initLabels = () => {
        axios.get('http://localhost:4558/label').then(e => {
          const labels = e.data.data;
          console.log(labels);
          for (const label of labels) {
            let obj = {key: label.id, name: label.labelName, nums: 0, create_time: label.createTime}
            dataSource.push(obj)
          }
        })
      }
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
      // 发送请求添加标签
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
            <Modal title="新增标签" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <Form>
                <Form.Item label="标签名" name="labelname">
                  <Input />
                </Form.Item>
              </Form>
            </Modal>
          </>
            
        )
    }

  export default App;