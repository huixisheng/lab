module.exports = {
  dest: 'dist',
  head: [
    [ 'link', { rel: 'icon', href: `/logo.jpeg` }],
    [ 'link', { rel: 'stylesheet', href: '//unpkg.com/iview/dist/styles/iview.css' }],
    [ 'script', {src: '//vuejs.org/js/vue.js' }],
    [ 'script', {src: '//unpkg.com/iview/dist/iview.js' }],
  ],
  locales: {
    '/': {
      lang: 'en-US', // 这个值会被设置在 <html> 的 lang 属性上
      title: 'vuepress example',
      description: 'lab for vuepress'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'vuepress 例子',
      description: 'vuepress相关功能试验'
    }
  },
  themeConfig: {
    repo: 'huixisheng/lab',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        nav: [{
          text: 'guide',
          link: '/en/guide/'
        }, {
          text: 'ui',
          items: [
            { text: 'ui', link: '/en/ui/' },
            { text: 'iview', link: '/en/ui/iview' }
          ]
        }],
        sidebar: {

        }
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [{
          text: '指南',
          link: '/zh/guide/'
        }, {
          text: 'ui',
          link: '/zh/ui/'
        }],
        sidebar: {}
      }
    }
  },
  configureWebpack: (config, isServer) => {
    config.externals = {
      vue: 'Vue',
    };
    if (!isServer) {
      // mutate the config for client
    }
  }
}