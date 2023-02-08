 const { injectBabelPlugin } = require('react-app-rewired');

//  react-app-rewired模块



  module.exports = function override(config, env) {
    config = injectBabelPlugin(
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
        config,
    );
        return config;
  };