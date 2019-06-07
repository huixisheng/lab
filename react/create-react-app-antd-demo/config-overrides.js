const fs = require('fs');

module.exports = function override(config, env) {
  fs.writeFileSync('cra-config.js', JSON.stringify(config, null, 2));
  fs.writeFileSync('cra-env.js', JSON.stringify(env, null, 2));
  // console.log(config);
  // console.log(env);
  // do stuff with the webpack config...
  return config;
};
// const { override, fixBabelImports } = require('customize-cra');

// module.exports = override(
//   fixBabelImports('import', {
//     libraryName: 'antd',
//     libraryDirectory: 'es',
//     style: 'css',
//   }),
// );