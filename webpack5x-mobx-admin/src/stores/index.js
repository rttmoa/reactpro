import React from 'react';


// todo 获取 /stores/ 下 Store对象

const context = {};

const req = require.context('.', true, /Store$/);
// console.log(req)
req.keys().forEach((key) => {
  const name = key.match(/([a-zA-Z0-9].*)$/)[1];
  const Store = req(key).default;
  // console.log(key) // ./commonStore & ./globalStore
  // console.log(name) // commonStore & globalStore
  // console.log(new Store()) // CommonStore{} & GlobalStore{}
  // console.log("For")
  context[name] = new Store();
});
// console.log(context) // {commonStore: CommonStore, globalStore: GlobalStore}

export const storesContext = React.createContext(context);

/** #### TODO: 处理Store，这里作为全局Store使用  */
export function appStores() {
  return React.useContext(storesContext);
}
