import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react';
import { Button } from 'antd';
import Store from './store';

import './style.less';




const HomePage = () => {
  // console.log(useContext(Store))
  const { pageTitle } = useContext(Store); // useContext 订阅mobx数据
  const [num, setNum] = useState(0);

  return (
    <div className="page-home page-content">
      <h2>{pageTitle || ""}</h2>
      <div>
        <span>num值: {num}</span>
        <Button type="primary" size="small" style={{ marginLeft: 10 }} onClick={() => setNum(num + 1)}>+1</Button>
      </div>
    </div>
  );
};

export default observer(HomePage);
