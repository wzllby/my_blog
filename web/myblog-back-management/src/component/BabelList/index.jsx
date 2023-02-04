import { Table, Space, Button, Form, Input, Modal, message } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';

  
    const App = () => {
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
          title: '状态',
          dataIndex: 'state',
          key: 'state',
        },
        {
          title: '创建时间',
          dataIndex: 'create_time',
          key: 'create_time',
        },
        {
          title: '操作',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <Button type='primary' onClick={e => handleState(record.key)}>{record.state === "锁定" ? "解锁" : "锁定"}</Button>
              <Button danger onClick={e => deleteDate(record.key)}>删除</Button>
            </Space>
          ),
        },
      ];

      useEffect(() => {
        initLabels();
      }, [])
      // 新增弹出框
      const [isModalOpen, setIsModalOpen] = useState(false);
      // 表格数据源
      const [labelData, setLabelData] = useState([]);
      // 新增表单
      const [form] = Form.useForm();
      // 弹出层
      const [messageApi, contextHolder] = message.useMessage();
      // 发送请求查询表格数据
      const initLabels = () => {
        axios.get('http://localhost:4558/label').then(e => {
          const labels = e.data.data.data;
          let res = [];
          for (const label of labels) {
            const date = new Date(label.createTime);
            const createTime = date.getFullYear() + "-" + (parseInt(date.getMonth()) + 1) + "-" + date.getDate();
            let obj = {key: label.id, name: label.labelName, nums: 0, create_time: createTime, state: label.state === 0 ? "正常":"锁定"}
            res = [obj,...res];
          }
          setLabelData(res);
        })
      }
      
      // 发送请求删除Label标签
      const deleteDate = (key) => {
        axios.delete("http://localhost:4558/label", {
          data: {key},
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        }).then(e => {
          if (e.data.code === 200) {
            msg("success", "删除成功");
            initLabels();
          }
        })
      }
      const handleState = (key) => {
        axios.put("http://localhost:4558/label", {key} ,{
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        }).then(e => {
          if (e.data.code === 200) {
            msg("success", "成功");
            initLabels();
          }
        })
      }
      const showModal = () => {
        form.resetFields();
        setIsModalOpen(true);
      };
      // 弹出消息的公共方法
      const msg = (type, content) => {
        messageApi.open({
          type, content
        });
      };
      // 发送请求添加标签
      const handleOk = () => {
        const labelName = form.getFieldValue("labelname");
        axios({
          url: 'http://localhost:4558/label',
          method: 'post',
          data: {
            labelName
          },
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        }).then(e => {
          if (e.data.code === 200) {
           msg("success", "添加成功");
           initLabels();
           setIsModalOpen(false);
          } else {
            msg("error", "添加失败");
          }
         }).catch(e => {
          msg("error", "添加失败");
         })
      };

      const handleCancel = () => {
        setIsModalOpen(false);
      };
      
        return (
          <>
          {contextHolder}
            <Space size='middle'>
              <Button type="primary" onClick={showModal}>新增</Button>
            </Space>
            <Table dataSource={labelData} columns={columns} />
            <Modal title="新增标签" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <Form form={form}>
                <Form.Item label="标签名" name="labelname">
                  <Input />
                </Form.Item>
              </Form>
            </Modal>
          </>
        )
    }

  export default App;