import React from 'react';
import ReactDOM from 'react-dom/client';
import Task from './views/Task';
/* ANTD */
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import './index.less';
dayjs.locale('zh-cn');




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider locale={zhCN}>
    <Task />
  </ConfigProvider>
);