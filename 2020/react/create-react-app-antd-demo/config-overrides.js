// const fs = require('fs');
// const fastJson = require('fast-json-stringify');
// const stringify = require('fast-json-stable-stringify');
// const JSON5 = require('json5');

// module.exports = function override(config, env) {
//   fs.writeFileSync('cra-config.js', JSON.stringify(config, null, 2));
//   fs.writeFileSync('cra-env.js', JSON.stringify(env, null, 2));

//   // fs.writeFileSync('cra-config-fast-json.js', fastJson(config));
//   fs.writeFileSync('cra-config-stringify.js', stringify(config));

//   fs.writeFileSync('cra-config-toString.js', config.toString());

//   fs.writeFileSync('cra-config-json5.js', JSON5.stringify(config, null, 2));
//   // console.log(config);
//   // console.log(env);
//   // do stuff with the webpack config...
//   return config;
// };

const AutoDllPlugin = require('autodll-webpack-plugin');
const {
  override,
  fixBabelImports,
  addWebpackPlugin,
  addBundleVisualizer,
  addLessLoader,
  overrideDevServer,
} = require('customize-cra');



// const devServerCustom = (config) =>  {
//   quiet: false,
//   // stats: 'verbose',
//   stats: {
//     timings: true,
//     colors: true,
//   },
// };

const devServerCustom = () => config => {
  console.log(config);
  config.quiet = false;
  config.stats = {
    timings: true,
    colors: true,
  };
  return config;
};

module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
      // style: 'css',
    }),
    addLessLoader({
      javascriptEnabled: true,
       modifyVars: { '@primary-color': '#1DA57A' },
    }),
    addWebpackPlugin(new AutoDllPlugin({
      inject: true, // will inject the DLL bundle to index.html
      debug: true,
      filename: '[name].js',
      path: './dll',
      entry: {
        vendor: [
          'react',
          'react-dom',
          // 'antd',
        ]
      }
    })),
    addBundleVisualizer({}, true),
  ),
  devServer: overrideDevServer(
    devServerCustom(),
    // dev server plugin
  ),
  // devServer: {
  //   // overrideDevServer(
  //   //   // dev server plugin
  //   //   // watchAll()
  //   // ),
  //   ...devServerCustom,
  // },
  performance: {
    hints: 'warning',
  },
};

// module.exports = override(
//   fixBabelImports('import', {
//     libraryName: 'antd',
//     libraryDirectory: 'es',
//     style: true,
//     // style: 'css',
//   }),
//   addLessLoader({
//     javascriptEnabled: true,
//      modifyVars: { '@primary-color': '#1DA57A' },
//   }),
//   addWebpackPlugin(new AutoDllPlugin({
//     inject: true, // will inject the DLL bundle to index.html
//     debug: true,
//     filename: '[name].js',
//     path: './dll',
//     entry: {
//       vendor: [
//         'react',
//         'react-dom',
//         'antd',
//       ]
//     }
//   })),
//   addBundleVisualizer({}, true),
// );