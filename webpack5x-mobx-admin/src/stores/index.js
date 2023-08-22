import React from 'react';



const context = {};

const req = require.context('.', true, /Store$/);
req.keys().forEach((key) => {
  const name = key.match(/([a-zA-Z0-9].*)$/)[1];
  const Store = req(key).default;
  context[name] = new Store();
});

export const storesContext = React.createContext(context);

/** #### TODO: 处理Store，这里作为全局Store使用  */
export function appStores() {
  return React.useContext(storesContext);
}
