


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routes } from "@/router";
import { Provider, connect } from "react-redux";
import { store, actions } from "@/store";

// const { setAaa, setBbb } = actions;
// store.dispatch(setAaa(2))
// store.dispatch(setBbb(3))



const Root = function ({ store }) {
  return (
    // 这里用 Provider 没用
    <Provider store={store}>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </Provider>
  );
};
connect(state => ({ state }), actions)(Root);

ReactDOM.render(<Root store={store} />, document.getElementById("root"));