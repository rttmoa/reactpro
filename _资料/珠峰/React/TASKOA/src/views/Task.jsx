import React, { useState, useEffect } from "react";
import styled from "styled-components";
import dayjs from 'dayjs';
import { Typography, Button, Tag, Table, Popconfirm, Modal, Form, Input, DatePicker, message } from 'antd';
import API from "../api";
const { Title } = Typography;

/* 组件样式 */
const TaskStyled = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
    width: 800px;

    .ant-btn-link{
        padding: 4px 2px;
    }

    /* 头部区域 */
    .header-box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0 20px 0;
        border-bottom: 1px solid #DDD;

        .ant-typography{
            margin-bottom: 0;
        }
    }

    /* 标签区域 */
    .tag-box{
        margin: 10px 0;

        .ant-tag{
            padding: 5px 14px;
            margin-right: 12px;
            border-radius: 0;
            cursor: pointer;
            font-size: 14px;
        }
    }
`;

/* 工具类方法 */
const replenZero = (value) => {
    value = +value;
    return value < 10 ? '0' + value : value;
};
const formatTime = (time) => {
    let arr = time.match(/\d+/g);
    if (!arr) return null;
    let [, month = 0, day = 0, hours = 0, minutes = 0] = arr;
    return `${replenZero(month)}/${replenZero(day)} ${replenZero(hours)}:${replenZero(minutes)}`;
};

/* 组件核心 */
const Task = function Task() {
    /* 定义表格列 */
    const columns = [{
        title: '编号',
        align: 'center',
        dataIndex: 'id',
        width: '8%'
    }, {
        title: '任务描述',
        dataIndex: 'task',
        ellipsis: true,
        width: '45%'
    }, {
        title: '完成状态',
        align: 'center',
        dataIndex: 'state',
        width: '10%',
        render(text, record) {
            // text:单元格中的数据  record:单元格所在这一行的数据
            return +text === 1 ? '未完成' : '已完成';
        }
    }, {
        title: '完成时间',
        align: 'center',
        width: '15%',
        render(_, record) {
            let { state, time, complete } = record;
            if (+state === 2) time = complete;
            return formatTime(time);
        }
    }, {
        title: '操作',
        width: '12%',
        render(_, record) {
            let { state, id } = record;
            return <>
                <Popconfirm title="您确定要删除此任务吗?"
                    onConfirm={removeHandle.bind(null, id)}>
                    <Button type="link" danger>删除</Button>
                </Popconfirm>

                {+state === 1 ?
                    <Popconfirm title="您确定要把此任务设置为已完成吗?"
                        onConfirm={updateHandle.bind(null, id)}>
                        <Button type="link">完成</Button>
                    </Popconfirm> :
                    null
                }
            </>;
        }
    }];

    /* 定义状态 */
    let [tableLoading, setTableLoading] = useState(false);
    let [tableData, setTableData] = useState([]);
    let [modelVisible, setModelVisible] = useState(false);
    let [confirmLoading, setConfirmLoading] = useState(false);
    let [formIns] = Form.useForm();
    let [selectedIndex, setSelectedIndex] = useState(0);

    /* 定义方法 */
    // 新增任务
    const submit = async () => {
        try {
            await formIns.validateFields();
            // 向服务器发送请求 
            setConfirmLoading(true);
            let { task, time } = formIns.getFieldsValue();
            time = time.format('YYYY-MM-DD HH:mm:ss');
            let { code } = await API.addTask(task, time);
            if (+code !== 0) {
                message.error('很遗憾，新增失败，请稍后再试~');
            } else {
                message.success('恭喜您，任务新增成功啦~');
                close();
                init();
            }
        } catch (_) { }
        setConfirmLoading(false);
    };
    // 关掉Model
    const close = () => {
        setModelVisible(false);
        setConfirmLoading(false);
        formIns.resetFields();
    };
    // 向服务器发送请求获取数据{根据选中状态}
    const init = async () => {
        setTableLoading(true);
        try {
            let { code, list } = await API.getTaskList(selectedIndex);
            if (+code !== 0) list = [];
            setTableData(list);
        } catch (_) { }
        setTableLoading(false);
    };
    // 删除/修改任务
    const removeHandle = async (id) => {
        try {
            let { code } = await API.removeTask(id);
            if (+code !== 0) {
                message.error('很遗憾，当前操作失败，请稍后再试~');
                return;
            }
            message.success('恭喜您，当前操作成功了啦~');
            init();
        } catch (_) { }
    };
    const updateHandle = async (id) => {
        try {
            let { code } = await API.completeTask(id);
            if (+code !== 0) {
                message.error('很遗憾，当前操作失败，请稍后再试~');
                return;
            }
            message.success('恭喜您，当前操作成功了啦~');
            init();
        } catch (_) { }
    };

    /* 页面渲染/状态改变,获取数据 */
    useEffect(() => {
        init();
    }, [selectedIndex]);

    return <TaskStyled>
        {/* 头部 */}
        <header className="header-box">
            <Title level={3}>TASK OA 任务管理系统</Title>
            <Button type="primary" onClick={() => setModelVisible(true)}>新增任务</Button>
        </header>

        {/* 标签 */}
        <div className="tag-box">
            {['全部', '未完成', '已完成'].map((item, index) => {
                return <Tag key={index}
                    color={selectedIndex === index ? '#1677ff' : ''}
                    onClick={() => {
                        setSelectedIndex(index);
                    }}>
                    {item}
                </Tag>;
            })}
        </div>

        {/* 表格 */}
        <Table columns={columns} dataSource={tableData} loading={tableLoading}
            pagination={false} rowKey="id" />

        {/* 对话框 */}
        <Modal title="新增任务窗口" open={modelVisible} confirmLoading={confirmLoading}
            keyboard={false} maskClosable={false} okText="确认提交"
            onOk={submit}
            onCancel={close}>
            <Form validateTrigger="onBlur" form={formIns}
                initialValues={{
                    task: '',
                    time: dayjs().add(1, 'day')
                }}>
                <Form.Item label="任务描述" name="task" className="taskItem"
                    rules={[
                        { required: true, message: '任务描述是必填内容' },
                        { min: 10, message: '请至少输入10位内容' }
                    ]}>
                    <Input.TextArea
                        rows={4}
                        maxLength={500}
                        showCount={{
                            formatter({ count, maxLength }) {
                                return `当前已经输入${count}个 / 最多输入${maxLength}个`;
                            }
                        }} />
                </Form.Item>
                <Form.Item label="预期完成时间" name="time"
                    rules={[
                        { required: true, message: '预期完成时间是必选内容' }
                    ]}>
                    <DatePicker
                        inputReadOnly
                        showTime={{
                            defaultValue: dayjs('00:00:00', 'HH:mm:ss')
                        }}
                        disabledDate={cur => {
                            return cur && cur <= dayjs().subtract(1, 'day');
                        }} />
                </Form.Item>
            </Form>
        </Modal>
    </TaskStyled>;
};
export default Task;
