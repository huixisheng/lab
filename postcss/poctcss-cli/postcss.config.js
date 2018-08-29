const cssnanoOptions = {
  safe: true,
  // preset: 'advanced',
  autoprefixer: { disable: false },
  mergeLonghand: false
};
module.exports = {
  plugins: [
    // require('cssnano')({
    //   preset: 'default',
    // }),
    require('cssnano')(cssnanoOptions),
    require('autoprefixer')({}),
  ],
};