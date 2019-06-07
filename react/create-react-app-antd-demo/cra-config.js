{
  "mode": "development",
  "bail": false,
  "devtool": "cheap-module-source-map",
  "entry": [
    "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/react-dev-utils/webpackHotDevClient.js",
    "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/src/index.js"
  ],
  "output": {
    "pathinfo": true,
    "filename": "static/js/bundle.js",
    "futureEmitAssets": true,
    "chunkFilename": "static/js/[name].chunk.js",
    "publicPath": "/"
  },
  "optimization": {
    "minimize": false,
    "minimizer": [
      {
        "options": {
          "test": {},
          "extractComments": false,
          "sourceMap": true,
          "cache": true,
          "parallel": true,
          "terserOptions": {
            "output": {
              "ecma": 5,
              "comments": false,
              "ascii_only": true
            },
            "parse": {
              "ecma": 8
            },
            "compress": {
              "ecma": 5,
              "warnings": false,
              "comparisons": false,
              "inline": 2
            },
            "mangle": {
              "safari10": true
            }
          }
        }
      },
      {
        "pluginDescriptor": {
          "name": "OptimizeCssAssetsWebpackPlugin"
        },
        "options": {
          "assetProcessors": [
            {
              "phase": "compilation.optimize-chunk-assets",
              "regExp": {}
            }
          ],
          "assetNameRegExp": {},
          "cssProcessorOptions": {
            "map": {
              "inline": false,
              "annotation": true
            }
          },
          "cssProcessorPluginOptions": {}
        },
        "phaseAssetProcessors": {
          "compilation.optimize-chunk-assets": [
            {
              "phase": "compilation.optimize-chunk-assets",
              "regExp": {}
            }
          ],
          "compilation.optimize-assets": [],
          "emit": []
        },
        "deleteAssetsMap": {}
      }
    ],
    "splitChunks": {
      "chunks": "all",
      "name": false
    },
    "runtimeChunk": true
  },
  "resolve": {
    "modules": [
      "node_modules",
      "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules"
    ],
    "extensions": [
      ".web.mjs",
      ".mjs",
      ".web.js",
      ".js",
      ".json",
      ".web.jsx",
      ".jsx"
    ],
    "alias": {
      "react-native": "react-native-web"
    },
    "plugins": [
      {
        "topLevelLoader": {}
      },
      {
        "appSrcs": [
          "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/src"
        ],
        "allowedFiles": {}
      }
    ]
  },
  "resolveLoader": {
    "plugins": [
      {}
    ]
  },
  "module": {
    "strictExportPresence": true,
    "rules": [
      {
        "parser": {
          "requireEnsure": false
        }
      },
      {
        "test": {},
        "enforce": "pre",
        "use": [
          {
            "options": {
              "formatter": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/react-dev-utils/eslintFormatter.js",
              "eslintPath": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/eslint/lib/api.js",
              "baseConfig": {
                "extends": [
                  "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/eslint-config-react-app/index.js"
                ]
              },
              "ignore": false,
              "useEslintrc": false
            },
            "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/eslint-loader/index.js"
          }
        ],
        "include": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/src"
      },
      {
        "oneOf": [
          {
            "test": [
              {},
              {},
              {},
              {}
            ],
            "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/url-loader/dist/cjs.js",
            "options": {
              "limit": 10000,
              "name": "static/media/[name].[hash:8].[ext]"
            }
          },
          {
            "test": {},
            "include": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/src",
            "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/react-scripts/node_modules/babel-loader/lib/index.js",
            "options": {
              "customize": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/babel-preset-react-app/webpack-overrides.js",
              "babelrc": false,
              "configFile": false,
              "presets": [
                "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/babel-preset-react-app/index.js"
              ],
              "cacheIdentifier": "development:babel-plugin-named-asset-import@:babel-preset-react-app@9.0.0:react-dev-utils@9.0.1:react-scripts@3.0.1",
              "plugins": [
                [
                  "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/react-scripts/node_modules/babel-plugin-named-asset-import/index.js",
                  {
                    "loaderMap": {
                      "svg": {
                        "ReactComponent": "@svgr/webpack?-svgo,+ref![path]"
                      }
                    }
                  }
                ]
              ],
              "cacheDirectory": true,
              "cacheCompression": false,
              "compact": false
            }
          },
          {
            "test": {},
            "exclude": {},
            "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/react-scripts/node_modules/babel-loader/lib/index.js",
            "options": {
              "babelrc": false,
              "configFile": false,
              "compact": false,
              "presets": [
                [
                  "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/babel-preset-react-app/dependencies.js",
                  {
                    "helpers": true
                  }
                ]
              ],
              "cacheDirectory": true,
              "cacheCompression": false,
              "cacheIdentifier": "development:babel-plugin-named-asset-import@:babel-preset-react-app@9.0.0:react-dev-utils@9.0.1:react-scripts@3.0.1",
              "sourceMaps": false
            }
          },
          {
            "test": {},
            "exclude": {},
            "use": [
              "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/style-loader/index.js",
              {
                "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 1,
                  "sourceMap": false
                }
              },
              {
                "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/postcss-loader/src/index.js",
                "options": {
                  "ident": "postcss",
                  "sourceMap": false
                }
              }
            ],
            "sideEffects": true
          },
          {
            "test": {},
            "use": [
              "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/style-loader/index.js",
              {
                "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 1,
                  "sourceMap": false,
                  "modules": true
                }
              },
              {
                "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/postcss-loader/src/index.js",
                "options": {
                  "ident": "postcss",
                  "sourceMap": false
                }
              }
            ]
          },
          {
            "test": {},
            "exclude": {},
            "use": [
              "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/style-loader/index.js",
              {
                "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 2,
                  "sourceMap": false
                }
              },
              {
                "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/postcss-loader/src/index.js",
                "options": {
                  "ident": "postcss",
                  "sourceMap": false
                }
              },
              {
                "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/sass-loader/lib/loader.js",
                "options": {
                  "sourceMap": false
                }
              }
            ],
            "sideEffects": true
          },
          {
            "test": {},
            "use": [
              "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/style-loader/index.js",
              {
                "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 2,
                  "sourceMap": false,
                  "modules": true
                }
              },
              {
                "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/postcss-loader/src/index.js",
                "options": {
                  "ident": "postcss",
                  "sourceMap": false
                }
              },
              {
                "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/sass-loader/lib/loader.js",
                "options": {
                  "sourceMap": false
                }
              }
            ]
          },
          {
            "loader": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules/file-loader/dist/cjs.js",
            "exclude": [
              {},
              {},
              {}
            ],
            "options": {
              "name": "static/media/[name].[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  "plugins": [
    {
      "options": {
        "template": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/public/index.html",
        "templateContent": false,
        "filename": "index.html",
        "hash": false,
        "inject": true,
        "compile": true,
        "favicon": false,
        "cache": true,
        "showErrors": true,
        "chunks": "all",
        "excludeChunks": [],
        "chunksSortMode": "auto",
        "meta": {},
        "title": "Webpack App",
        "xhtml": false
      },
      "version": 4
    },
    {
      "replacements": {
        "NODE_ENV": "development",
        "PUBLIC_URL": ""
      }
    },
    {
      "appPath": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo"
    },
    {
      "definitions": {
        "process.env": {
          "NODE_ENV": "\"development\"",
          "PUBLIC_URL": "\"\""
        }
      }
    },
    {
      "options": {},
      "fullBuildTimeout": 200,
      "requestTimeout": 10000
    },
    {
      "options": {},
      "pathCache": {},
      "fsOperations": 0,
      "primed": false
    },
    {
      "nodeModulesPath": "/Users/huixisheng/Workspaces/Export/lab/react/create-react-app-antd-demo/node_modules"
    },
    {
      "opts": {
        "publicPath": "/",
        "basePath": "",
        "fileName": "asset-manifest.json",
        "transformExtensions": {},
        "writeToFileEmit": false,
        "seed": null,
        "filter": null,
        "map": null,
        "sort": null
      }
    },
    {
      "options": {
        "resourceRegExp": {},
        "contextRegExp": {}
      }
    }
  ],
  "node": {
    "module": "empty",
    "dgram": "empty",
    "dns": "mock",
    "fs": "empty",
    "http2": "empty",
    "net": "empty",
    "tls": "empty",
    "child_process": "empty"
  },
  "performance": false
}