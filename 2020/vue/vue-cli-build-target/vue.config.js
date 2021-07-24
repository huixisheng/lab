module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default',
      // cli的优先级更高些
      // library: 'MyAppXX',
    },
  },
  css: {
    extract: true,
    // loaderOptions: {
    //   postcss: {
    //     plugins: [require('autoprefixer')({})]
    //   },
    // },
  },
};