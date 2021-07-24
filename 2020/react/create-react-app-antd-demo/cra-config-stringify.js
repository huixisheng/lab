{
  "bail": false,
  "devtool": "cheap-module-source-map",
  "entry": ["/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/react-dev-utils/webpackHotDevClient.js", "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/src/index.js"],
  "mode": "development",
  "module": {
    "rules": [{
      "parser": {
        "requireEnsure": false
      }
    }, {
      "enforce": "pre",
      "include": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/src",
      "test": {},
      "use": [{
        "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/eslint-loader/index.js",
        "options": {
          "baseConfig": {
            "extends": ["/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/eslint-config-react-app/index.js"]
          },
          "eslintPath": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/eslint/lib/api.js",
          "formatter": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/react-dev-utils/eslintFormatter.js",
          "ignore": false,
          "useEslintrc": false
        }
      }]
    }, {
      "oneOf": [{
        "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/url-loader/dist/cjs.js",
        "options": {
          "limit": 10000,
          "name": "static/media/[name].[hash:8].[ext]"
        },
        "test": [{}, {}, {}, {}]
      }, {
        "include": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/src",
        "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/react-scripts/node_modules/babel-loader/lib/index.js",
        "options": {
          "babelrc": false,
          "cacheCompression": false,
          "cacheDirectory": true,
          "cacheIdentifier": "development:babel-plugin-named-asset-import@:babel-preset-react-app@9.0.0:react-dev-utils@9.0.1:react-scripts@3.0.1",
          "compact": false,
          "configFile": false,
          "customize": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/babel-preset-react-app/webpack-overrides.js",
          "plugins": [
            ["/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/react-scripts/node_modules/babel-plugin-named-asset-import/index.js", {
              "loaderMap": {
                "svg": {
                  "ReactComponent": "@svgr/webpack?-svgo,+ref![path]"
                }
              }
            }]
          ],
          "presets": ["/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/babel-preset-react-app/index.js"]
        },
        "test": {}
      }, {
        "exclude": {},
        "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/react-scripts/node_modules/babel-loader/lib/index.js",
        "options": {
          "babelrc": false,
          "cacheCompression": false,
          "cacheDirectory": true,
          "cacheIdentifier": "development:babel-plugin-named-asset-import@:babel-preset-react-app@9.0.0:react-dev-utils@9.0.1:react-scripts@3.0.1",
          "compact": false,
          "configFile": false,
          "presets": [
            ["/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/babel-preset-react-app/dependencies.js", {
              "helpers": true
            }]
          ],
          "sourceMaps": false
        },
        "test": {}
      }, {
        "exclude": {},
        "sideEffects": true,
        "test": {},
        "use": ["/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/style-loader/index.js", {
          "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/css-loader/dist/cjs.js",
          "options": {
            "importLoaders": 1,
            "sourceMap": false
          }
        }, {
          "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/postcss-loader/src/index.js",
          "options": {
            "ident": "postcss",
            "sourceMap": false
          }
        }]
      }, {
        "test": {},
        "use": ["/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/style-loader/index.js", {
          "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/css-loader/dist/cjs.js",
          "options": {
            "importLoaders": 1,
            "modules": true,
            "sourceMap": false
          }
        }, {
          "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/postcss-loader/src/index.js",
          "options": {
            "ident": "postcss",
            "sourceMap": false
          }
        }]
      }, {
        "exclude": {},
        "sideEffects": true,
        "test": {},
        "use": ["/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/style-loader/index.js", {
          "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/css-loader/dist/cjs.js",
          "options": {
            "importLoaders": 2,
            "sourceMap": false
          }
        }, {
          "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/postcss-loader/src/index.js",
          "options": {
            "ident": "postcss",
            "sourceMap": false
          }
        }, {
          "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/sass-loader/lib/loader.js",
          "options": {
            "sourceMap": false
          }
        }]
      }, {
        "test": {},
        "use": ["/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/style-loader/index.js", {
          "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/css-loader/dist/cjs.js",
          "options": {
            "importLoaders": 2,
            "modules": true,
            "sourceMap": false
          }
        }, {
          "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/postcss-loader/src/index.js",
          "options": {
            "ident": "postcss",
            "sourceMap": false
          }
        }, {
          "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/sass-loader/lib/loader.js",
          "options": {
            "sourceMap": false
          }
        }]
      }, {
        "exclude": [{}, {}, {}],
        "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/file-loader/dist/cjs.js",
        "options": {
          "name": "static/media/[name].[hash:8].[ext]"
        }
      }]
    }],
    "strictExportPresence": true
  },
  "node": {
    "child_process": "empty",
    "dgram": "empty",
    "dns": "mock",
    "fs": "empty",
    "http2": "empty",
    "module": "empty",
    "net": "empty",
    "tls": "empty"
  },
  "optimization": {
    "minimize": false,
    "minimizer": [{
      "options": {
        "cache": true,
        "extractComments": false,
        "parallel": true,
        "sourceMap": true,
        "terserOptions": {
          "compress": {
            "comparisons": false,
            "ecma": 5,
            "inline": 2,
            "warnings": false
          },
          "mangle": {
            "safari10": true
          },
          "output": {
            "ascii_only": true,
            "comments": false,
            "ecma": 5
          },
          "parse": {
            "ecma": 8
          }
        },
        "test": {}
      }
    }, {
      "deleteAssetsMap": {},
      "options": {
        "assetNameRegExp": {},
        "assetProcessors": [{
          "phase": "compilation.optimize-chunk-assets",
          "regExp": {}
        }],
        "cssProcessorOptions": {
          "map": {
            "annotation": true,
            "inline": false
          }
        },
        "cssProcessorPluginOptions": {}
      },
      "phaseAssetProcessors": {
        "compilation.optimize-assets": [],
        "compilation.optimize-chunk-assets": [{
          "phase": "compilation.optimize-chunk-assets",
          "regExp": {}
        }],
        "emit": []
      },
      "pluginDescriptor": {
        "name": "OptimizeCssAssetsWebpackPlugin"
      }
    }],
    "runtimeChunk": true,
    "splitChunks": {
      "chunks": "all",
      "name": false
    }
  },
  "output": {
    "chunkFilename": "static/js/[name].chunk.js",
    "filename": "static/js/bundle.js",
    "futureEmitAssets": true,
    "pathinfo": true,
    "publicPath": "/"
  },
  "performance": false,
  "plugins": [{
    "options": {
      "cache": true,
      "chunks": "all",
      "chunksSortMode": "auto",
      "compile": true,
      "excludeChunks": [],
      "favicon": false,
      "filename": "index.html",
      "hash": false,
      "inject": true,
      "meta": {},
      "showErrors": true,
      "template": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/public/index.html",
      "templateContent": false,
      "title": "Webpack App",
      "xhtml": false
    },
    "version": 4
  }, {
    "replacements": {
      "NODE_ENV": "development",
      "PUBLIC_URL": ""
    }
  }, {
    "appPath": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo"
  }, {
    "definitions": {
      "process.env": {
        "NODE_ENV": "\"development\"",
        "PUBLIC_URL": "\"\""
      }
    }
  }, {
    "fullBuildTimeout": 200,
    "options": {},
    "requestTimeout": 10000
  }, {
    "fsOperations": 0,
    "options": {},
    "pathCache": {},
    "primed": false
  }, {
    "nodeModulesPath": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules"
  }, {
    "opts": {
      "basePath": "",
      "fileName": "asset-manifest.json",
      "filter": null,
      "map": null,
      "publicPath": "/",
      "seed": null,
      "sort": null,
      "transformExtensions": {},
      "writeToFileEmit": false
    }
  }, {
    "options": {
      "contextRegExp": {},
      "resourceRegExp": {}
    }
  }],
  "resolve": {
    "alias": {
      "react-native": "react-native-web"
    },
    "extensions": [".web.mjs", ".mjs", ".web.js", ".js", ".json", ".web.jsx", ".jsx"],
    "modules": ["node_modules", "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules"],
    "plugins": [{
      "topLevelLoader": {}
    }, {
      "allowedFiles": {},
      "appSrcs": ["/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/src"]
    }]
  },
  "resolveLoader": {
    "plugins": [{}]
  }
}