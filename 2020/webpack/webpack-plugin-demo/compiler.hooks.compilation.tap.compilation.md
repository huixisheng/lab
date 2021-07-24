{
  "_pluginCompat": {
    "_args": [
      "options"
    ],
    "taps": [
      {
        "type": "sync",
        "name": "Compilation"
      },
      {
        "type": "sync",
        "name": "Tapable camelCase",
        "stage": 100
      },
      {
        "type": "sync",
        "name": "Tapable this.hooks",
        "stage": 200
      }
    ],
    "interceptors": []
  },
  "hooks": {
    "buildModule": {
      "_args": [
        "module"
      ],
      "taps": [],
      "interceptors": []
    },
    "rebuildModule": {
      "_args": [
        "module"
      ],
      "taps": [],
      "interceptors": []
    },
    "failedModule": {
      "_args": [
        "module",
        "error"
      ],
      "taps": [],
      "interceptors": []
    },
    "succeedModule": {
      "_args": [
        "module"
      ],
      "taps": [],
      "interceptors": []
    },
    "dependencyReference": {
      "_args": [
        "dependencyReference",
        "dependency",
        "module"
      ],
      "taps": [],
      "interceptors": []
    },
    "finishModules": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": []
    },
    "finishRebuildingModule": {
      "_args": [
        "module"
      ],
      "taps": [],
      "interceptors": []
    },
    "unseal": {
      "_args": [],
      "taps": [
        {
          "type": "sync",
          "name": "SplitChunksPlugin"
        }
      ],
      "interceptors": []
    },
    "seal": {
      "_args": [],
      "taps": [],
      "interceptors": []
    },
    "beforeChunks": {
      "_args": [],
      "taps": [],
      "interceptors": []
    },
    "afterChunks": {
      "_args": [
        "chunks"
      ],
      "taps": [],
      "interceptors": []
    },
    "optimizeDependenciesBasic": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": []
    },
    "optimizeDependencies": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": []
    },
    "optimizeDependenciesAdvanced": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": []
    },
    "afterOptimizeDependencies": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": []
    },
    "optimize": {
      "_args": [],
      "taps": [],
      "interceptors": []
    },
    "optimizeModulesBasic": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": []
    },
    "optimizeModules": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": []
    },
    "optimizeModulesAdvanced": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": []
    },
    "afterOptimizeModules": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": []
    },
    "optimizeChunksBasic": {
      "_args": [
        "chunks",
        "chunkGroups"
      ],
      "taps": [],
      "interceptors": []
    },
    "optimizeChunks": {
      "_args": [
        "chunks",
        "chunkGroups"
      ],
      "taps": [],
      "interceptors": []
    },
    "optimizeChunksAdvanced": {
      "_args": [
        "chunks",
        "chunkGroups"
      ],
      "taps": [
        {
          "type": "sync",
          "name": "SplitChunksPlugin"
        }
      ],
      "interceptors": []
    },
    "afterOptimizeChunks": {
      "_args": [
        "chunks",
        "chunkGroups"
      ],
      "taps": [],
      "interceptors": []
    },
    "optimizeTree": {
      "_args": [
        "chunks",
        "modules"
      ],
      "taps": [],
      "interceptors": []
    },
    "afterOptimizeTree": {
      "_args": [
        "chunks",
        "modules"
      ],
      "taps": [],
      "interceptors": []
    },
    "optimizeChunkModulesBasic": {
      "_args": [
        "chunks",
        "modules"
      ],
      "taps": [],
      "interceptors": []
    },
    "optimizeChunkModules": {
      "_args": [
        "chunks",
        "modules"
      ],
      "taps": [],
      "interceptors": []
    },
    "optimizeChunkModulesAdvanced": {
      "_args": [
        "chunks",
        "modules"
      ],
      "taps": [],
      "interceptors": []
    },
    "afterOptimizeChunkModules": {
      "_args": [
        "chunks",
        "modules"
      ],
      "taps": [],
      "interceptors": []
    },
    "shouldRecord": {
      "_args": [],
      "taps": [],
      "interceptors": []
    },
    "reviveModules": {
      "_args": [
        "modules",
        "records"
      ],
      "taps": [],
      "interceptors": []
    },
    "optimizeModuleOrder": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": []
    },
    "advancedOptimizeModuleOrder": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": []
    },
    "beforeModuleIds": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": []
    },
    "moduleIds": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": []
    },
    "optimizeModuleIds": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": []
    },
    "afterOptimizeModuleIds": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": []
    },
    "reviveChunks": {
      "_args": [
        "chunks",
        "records"
      ],
      "taps": [],
      "interceptors": []
    },
    "optimizeChunkOrder": {
      "_args": [
        "chunks"
      ],
      "taps": [],
      "interceptors": []
    },
    "beforeChunkIds": {
      "_args": [
        "chunks"
      ],
      "taps": [],
      "interceptors": []
    },
    "optimizeChunkIds": {
      "_args": [
        "chunks"
      ],
      "taps": [],
      "interceptors": []
    },
    "afterOptimizeChunkIds": {
      "_args": [
        "chunks"
      ],
      "taps": [],
      "interceptors": []
    },
    "recordModules": {
      "_args": [
        "modules",
        "records"
      ],
      "taps": [],
      "interceptors": []
    },
    "recordChunks": {
      "_args": [
        "chunks",
        "records"
      ],
      "taps": [],
      "interceptors": []
    },
    "beforeHash": {
      "_args": [],
      "taps": [],
      "interceptors": []
    },
    "contentHash": {
      "_args": [
        "chunk"
      ],
      "taps": [],
      "interceptors": []
    },
    "afterHash": {
      "_args": [],
      "taps": [],
      "interceptors": []
    },
    "recordHash": {
      "_args": [
        "records"
      ],
      "taps": [],
      "interceptors": []
    },
    "record": {
      "_args": [
        "compilation",
        "records"
      ],
      "taps": [],
      "interceptors": []
    },
    "beforeModuleAssets": {
      "_args": [],
      "taps": [],
      "interceptors": []
    },
    "shouldGenerateChunkAssets": {
      "_args": [],
      "taps": [],
      "interceptors": []
    },
    "beforeChunkAssets": {
      "_args": [],
      "taps": [],
      "interceptors": []
    },
    "additionalChunkAssets": {
      "_args": [
        "chunks"
      ],
      "taps": [],
      "interceptors": []
    },
    "additionalAssets": {
      "_args": [],
      "taps": [],
      "interceptors": []
    },
    "optimizeChunkAssets": {
      "_args": [
        "chunks"
      ],
      "taps": [],
      "interceptors": []
    },
    "afterOptimizeChunkAssets": {
      "_args": [
        "chunks"
      ],
      "taps": [],
      "interceptors": []
    },
    "optimizeAssets": {
      "_args": [
        "assets"
      ],
      "taps": [],
      "interceptors": []
    },
    "afterOptimizeAssets": {
      "_args": [
        "assets"
      ],
      "taps": [],
      "interceptors": []
    },
    "needAdditionalSeal": {
      "_args": [],
      "taps": [],
      "interceptors": []
    },
    "afterSeal": {
      "_args": [],
      "taps": [],
      "interceptors": []
    },
    "chunkHash": {
      "_args": [
        "chunk",
        "chunkHash"
      ],
      "taps": [],
      "interceptors": []
    },
    "moduleAsset": {
      "_args": [
        "module",
        "filename"
      ],
      "taps": [],
      "interceptors": []
    },
    "chunkAsset": {
      "_args": [
        "chunk",
        "filename"
      ],
      "taps": [],
      "interceptors": []
    },
    "assetPath": {
      "_args": [
        "filename",
        "data"
      ],
      "taps": [],
      "interceptors": []
    },
    "needAdditionalPass": {
      "_args": [],
      "taps": [],
      "interceptors": []
    },
    "childCompiler": {
      "_args": [
        "childCompiler",
        "compilerName",
        "compilerIndex"
      ],
      "taps": [
        {
          "type": "sync",
          "name": "CachePlugin"
        }
      ],
      "interceptors": []
    },
    "normalModuleLoader": {
      "_args": [
        "loaderContext",
        "module"
      ],
      "taps": [],
      "interceptors": []
    },
    "optimizeExtractedChunksBasic": {
      "_args": [
        "chunks"
      ],
      "taps": [],
      "interceptors": []
    },
    "optimizeExtractedChunks": {
      "_args": [
        "chunks"
      ],
      "taps": [],
      "interceptors": []
    },
    "optimizeExtractedChunksAdvanced": {
      "_args": [
        "chunks"
      ],
      "taps": [],
      "interceptors": []
    },
    "afterOptimizeExtractedChunks": {
      "_args": [
        "chunks"
      ],
      "taps": [],
      "interceptors": []
    }
  },
  "compiler": {
    "_pluginCompat": {
      "_args": [
        "options"
      ],
      "taps": [
        {
          "type": "sync",
          "name": "Compiler"
        },
        {
          "type": "sync",
          "name": "Tapable camelCase",
          "stage": 100
        },
        {
          "type": "sync",
          "name": "Tapable this.hooks",
          "stage": 200
        }
      ],
      "interceptors": [],
      "_x": [
        null,
        null,
        null
      ]
    },
    "hooks": {
      "shouldEmit": {
        "_args": [
          "compilation"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "MyWebpackPlugin"
          }
        ],
        "interceptors": []
      },
      "done": {
        "_args": [
          "stats"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "MyWebpackPlugin"
          }
        ],
        "interceptors": []
      },
      "additionalPass": {
        "_args": [],
        "taps": [],
        "interceptors": []
      },
      "beforeRun": {
        "_args": [
          "compiler"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "NodeEnvironmentPlugin"
          },
          {
            "type": "sync",
            "name": "MyWebpackPlugin"
          }
        ],
        "interceptors": [],
        "_x": [
          null,
          null
        ]
      },
      "run": {
        "_args": [
          "compiler"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "MyWebpackPlugin"
          },
          {
            "type": "async",
            "name": "CachePlugin"
          }
        ],
        "interceptors": [],
        "_x": [
          null,
          null
        ]
      },
      "emit": {
        "_args": [
          "compilation"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "MyWebpackPlugin"
          },
          {
            "type": "sync",
            "name": "MyWebpackPlugin"
          },
          {
            "type": "async",
            "name": "FileListPlugin"
          }
        ],
        "interceptors": []
      },
      "afterEmit": {
        "_args": [
          "compilation"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "MyWebpackPlugin"
          }
        ],
        "interceptors": []
      },
      "thisCompilation": {
        "_args": [
          "compilation",
          "params"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "MyWebpackPlugin"
          },
          {
            "type": "sync",
            "name": "JsonpTemplatePlugin"
          },
          {
            "type": "sync",
            "name": "FetchCompileWasmTemplatePlugin"
          },
          {
            "type": "sync",
            "name": "SplitChunksPlugin"
          },
          {
            "type": "sync",
            "name": "CachePlugin"
          }
        ],
        "interceptors": [],
        "_x": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "compilation": {
        "_args": [
          "compilation",
          "params"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "MyWebpackPlugin"
          },
          {
            "type": "sync",
            "name": "FunctionModulePlugin"
          },
          {
            "type": "sync",
            "name": "NodeSourcePlugin"
          },
          {
            "type": "sync",
            "name": "LoaderTargetPlugin"
          },
          {
            "type": "sync",
            "name": "EvalDevToolModulePlugin"
          },
          {
            "type": "sync",
            "name": "JavascriptModulesPlugin"
          },
          {
            "type": "sync",
            "name": "JsonModulesPlugin"
          },
          {
            "type": "sync",
            "name": "WebAssemblyModulesPlugin"
          },
          {
            "type": "sync",
            "name": "SingleEntryPlugin"
          },
          {
            "type": "sync",
            "name": "CompatibilityPlugin"
          },
          {
            "type": "sync",
            "name": "HarmonyModulesPlugin"
          },
          {
            "type": "sync",
            "name": "AMDPlugin"
          },
          {
            "type": "sync",
            "name": "CommonJsPlugin"
          },
          {
            "type": "sync",
            "name": "LoaderPlugin"
          },
          {
            "type": "sync",
            "name": "LoaderPlugin"
          },
          {
            "type": "sync",
            "name": "NodeStuffPlugin"
          },
          {
            "type": "sync",
            "name": "RequireJsStuffPlugin"
          },
          {
            "type": "sync",
            "name": "APIPlugin"
          },
          {
            "type": "sync",
            "name": "ConstPlugin"
          },
          {
            "type": "sync",
            "name": "UseStrictPlugin"
          },
          {
            "type": "sync",
            "name": "RequireIncludePlugin"
          },
          {
            "type": "sync",
            "name": "RequireEnsurePlugin"
          },
          {
            "type": "sync",
            "name": "RequireContextPlugin"
          },
          {
            "type": "sync",
            "name": "ImportPlugin"
          },
          {
            "type": "sync",
            "name": "SystemPlugin"
          },
          {
            "type": "sync",
            "name": "EnsureChunkConditionsPlugin"
          },
          {
            "type": "sync",
            "name": "RemoveParentModulesPlugin"
          },
          {
            "type": "sync",
            "name": "RemoveEmptyChunksPlugin"
          },
          {
            "type": "sync",
            "name": "MergeDuplicateChunksPlugin"
          },
          {
            "type": "sync",
            "name": "FlagDependencyExportsPlugin"
          },
          {
            "type": "sync",
            "name": "NamedModulesPlugin"
          },
          {
            "type": "sync",
            "name": "OccurrenceOrderChunkIdsPlugin"
          },
          {
            "type": "sync",
            "name": "NamedChunksPlugin"
          },
          {
            "type": "sync",
            "name": "DefinePlugin"
          },
          {
            "type": "sync",
            "name": "TemplatedPathPlugin"
          },
          {
            "type": "sync",
            "name": "RecordIdsPlugin"
          },
          {
            "type": "sync",
            "name": "WarnCaseSensitiveModulesPlugin"
          }
        ],
        "interceptors": [],
        "_x": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "normalModuleFactory": {
        "_args": [
          "normalModuleFactory"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "MyWebpackPlugin"
          }
        ],
        "interceptors": [],
        "_x": [
          null
        ]
      },
      "contextModuleFactory": {
        "_args": [
          "contextModulefactory"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "MyWebpackPlugin"
          }
        ],
        "interceptors": [],
        "_x": [
          null
        ]
      },
      "beforeCompile": {
        "_args": [
          "params"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "MyWebpackPlugin"
          }
        ],
        "interceptors": [],
        "_x": [
          null
        ]
      },
      "compile": {
        "_args": [
          "params"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "MyWebpackPlugin"
          }
        ],
        "interceptors": [],
        "_x": [
          null
        ]
      },
      "make": {
        "_args": [
          "compilation"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "MyWebpackPlugin"
          },
          {
            "type": "async",
            "name": "SingleEntryPlugin"
          }
        ],
        "interceptors": []
      },
      "afterCompile": {
        "_args": [
          "compilation"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "MyWebpackPlugin"
          },
          {
            "type": "sync",
            "name": "CachePlugin"
          }
        ],
        "interceptors": []
      },
      "watchRun": {
        "_args": [
          "compiler"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "watchRun"
          },
          {
            "type": "sync",
            "name": "CachePlugin"
          }
        ],
        "interceptors": []
      },
      "failed": {
        "_args": [
          "error"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "MyWebpackPlugin"
          }
        ],
        "interceptors": []
      },
      "invalid": {
        "_args": [
          "filename",
          "changeTime"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "MyWebpackPlugin"
          }
        ],
        "interceptors": []
      },
      "watchClose": {
        "_args": [],
        "taps": [
          {
            "type": "sync",
            "name": "MyWebpackPlugin"
          }
        ],
        "interceptors": []
      },
      "environment": {
        "_args": [],
        "taps": [
          {
            "type": "sync",
            "name": "MyWebpackPlugin"
          }
        ],
        "interceptors": [],
        "_x": [
          null
        ]
      },
      "afterEnvironment": {
        "_args": [],
        "taps": [
          {
            "type": "sync",
            "name": "MyWebpackPlugin"
          }
        ],
        "interceptors": [],
        "_x": [
          null
        ]
      },
      "afterPlugins": {
        "_args": [
          "compiler"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "MyWebpackPlugin"
          }
        ],
        "interceptors": [],
        "_x": [
          null
        ]
      },
      "afterResolvers": {
        "_args": [
          "compiler"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "MyWebpackPlugin"
          },
          {
            "type": "sync",
            "name": "NodeSourcePlugin"
          },
          {
            "type": "sync",
            "name": "AMDPlugin"
          }
        ],
        "interceptors": [],
        "_x": [
          null,
          null,
          null
        ]
      },
      "entryOption": {
        "_args": [
          "context",
          "entry"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "unnamed compat plugin",
            "stage": 0
          },
          {
            "type": "sync",
            "name": "MyWebpackPlugin"
          },
          {
            "type": "sync",
            "name": "EntryOptionPlugin"
          }
        ],
        "interceptors": [],
        "_x": [
          null,
          null,
          null
        ]
      }
    },
    "outputPath": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/example_dist",
    "outputFileSystem": {},
    "inputFileSystem": {
      "fileSystem": {},
      "_statStorage": {
        "duration": 60000,
        "running": {},
        "data": {},
        "levels": [
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {}
        ],
        "count": 0,
        "interval": null,
        "needTickCheck": false,
        "nextTick": null,
        "passive": true
      },
      "_readdirStorage": {
        "duration": 60000,
        "running": {},
        "data": {},
        "levels": [
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {}
        ],
        "count": 0,
        "interval": null,
        "needTickCheck": false,
        "nextTick": null,
        "passive": true
      },
      "_readFileStorage": {
        "duration": 60000,
        "running": {},
        "data": {},
        "levels": [
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {}
        ],
        "count": 0,
        "interval": null,
        "needTickCheck": false,
        "nextTick": null,
        "passive": true
      },
      "_readJsonStorage": {
        "duration": 60000,
        "running": {},
        "data": {},
        "levels": [
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {}
        ],
        "count": 0,
        "interval": null,
        "needTickCheck": false,
        "nextTick": null,
        "passive": true
      },
      "_readlinkStorage": {
        "duration": 60000,
        "running": {},
        "data": {},
        "levels": [
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {}
        ],
        "count": 0,
        "interval": null,
        "needTickCheck": false,
        "nextTick": null,
        "passive": true
      }
    },
    "records": {},
    "fileTimestamps": {},
    "contextTimestamps": {},
    "resolverFactory": {
      "_pluginCompat": {
        "_args": [
          "options"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "ResolverFactory"
          },
          {
            "type": "sync",
            "name": "Tapable camelCase",
            "stage": 100
          },
          {
            "type": "sync",
            "name": "Tapable this.hooks",
            "stage": 200
          }
        ],
        "interceptors": []
      },
      "hooks": {
        "resolveOptions": {
          "_map": {},
          "_interceptors": []
        },
        "resolver": {
          "_map": {},
          "_interceptors": []
        }
      },
      "cache1": {},
      "cache2": {}
    },
    "resolvers": {
      "normal": {},
      "loader": {},
      "context": {}
    },
    "options": {
      "entry": "./src/index.js",
      "output": {
        "path": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/example_dist",
        "filename": "[name].chunk.js",
        "chunkFilename": "[name].chunk.js",
        "webassemblyModuleFilename": "[modulehash].module.wasm",
        "library": "",
        "hotUpdateFunction": "webpackHotUpdate",
        "jsonpFunction": "webpackJsonp",
        "chunkCallbackName": "webpackChunk",
        "globalObject": "window",
        "devtoolNamespace": "",
        "libraryTarget": "var",
        "pathinfo": true,
        "sourceMapFilename": "[file].map[query]",
        "hotUpdateChunkFilename": "[id].[hash].hot-update.js",
        "hotUpdateMainFilename": "[hash].hot-update.json",
        "crossOriginLoading": false,
        "jsonpScriptType": false,
        "chunkLoadTimeout": 120000,
        "hashFunction": "md4",
        "hashDigest": "hex",
        "hashDigestLength": 20,
        "devtoolLineToLine": false,
        "strictModuleExceptionHandling": false
      },
      "plugins": [
        {}
      ],
      "mode": "development",
      "context": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple",
      "devtool": "eval",
      "cache": true,
      "target": "web",
      "module": {
        "unknownContextRequest": ".",
        "unknownContextRegExp": false,
        "unknownContextRecursive": true,
        "unknownContextCritical": true,
        "exprContextRequest": ".",
        "exprContextRegExp": false,
        "exprContextRecursive": true,
        "exprContextCritical": true,
        "wrappedContextRegExp": {},
        "wrappedContextRecursive": true,
        "wrappedContextCritical": false,
        "strictExportPresence": false,
        "strictThisContextOnImports": false,
        "unsafeCache": true,
        "rules": [],
        "defaultRules": [
          {
            "type": "javascript/auto",
            "resolve": {}
          },
          {
            "test": {},
            "type": "javascript/esm",
            "resolve": {
              "mainFields": [
                "browser",
                "main"
              ]
            }
          },
          {
            "test": {},
            "type": "json"
          },
          {
            "test": {},
            "type": "webassembly/experimental"
          }
        ]
      },
      "node": {
        "console": false,
        "process": true,
        "global": true,
        "Buffer": true,
        "setImmediate": true,
        "__filename": "mock",
        "__dirname": "mock"
      },
      "performance": false,
      "optimization": {
        "removeAvailableModules": true,
        "removeEmptyChunks": true,
        "mergeDuplicateChunks": true,
        "flagIncludedChunks": false,
        "occurrenceOrder": false,
        "sideEffects": false,
        "providedExports": true,
        "usedExports": false,
        "concatenateModules": false,
        "splitChunks": {
          "hidePathInfo": false,
          "chunks": "async",
          "minSize": 10000,
          "minChunks": 1,
          "maxAsyncRequests": null,
          "automaticNameDelimiter": "~",
          "maxInitialRequests": null,
          "name": true,
          "cacheGroups": {
            "default": {
              "automaticNamePrefix": "",
              "reuseExistingChunk": true,
              "minChunks": 2,
              "priority": -20
            },
            "vendors": {
              "automaticNamePrefix": "vendors",
              "test": {},
              "priority": -10
            }
          }
        },
        "noEmitOnErrors": false,
        "checkWasmTypes": false,
        "mangleWasmImports": false,
        "namedModules": true,
        "hashedModuleIds": false,
        "namedChunks": true,
        "portableRecords": false,
        "minimize": false,
        "minimizer": [
          {}
        ],
        "nodeEnv": "development"
      },
      "resolve": {
        "unsafeCache": true,
        "modules": [
          "node_modules"
        ],
        "extensions": [
          ".wasm",
          ".mjs",
          ".js",
          ".json"
        ],
        "mainFiles": [
          "index"
        ],
        "aliasFields": [
          "browser"
        ],
        "mainFields": [
          "browser",
          "module",
          "main"
        ],
        "cacheWithContext": false
      },
      "resolveLoader": {
        "unsafeCache": true,
        "mainFields": [
          "loader",
          "main"
        ],
        "extensions": [
          ".js",
          ".json"
        ],
        "mainFiles": [
          "index"
        ],
        "cacheWithContext": false
      }
    },
    "context": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple",
    "requestShortener": {
      "currentDirectoryRegExp": {},
      "parentDirectoryRegExp": {},
      "buildinsAsModule": false,
      "buildinsRegExp": {},
      "cache": {}
    },
    "running": true,
    "watchFileSystem": {
      "inputFileSystem": {
        "fileSystem": {},
        "_statStorage": {
          "duration": 60000,
          "running": {},
          "data": {},
          "levels": [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
          ],
          "count": 0,
          "interval": null,
          "needTickCheck": false,
          "nextTick": null,
          "passive": true
        },
        "_readdirStorage": {
          "duration": 60000,
          "running": {},
          "data": {},
          "levels": [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
          ],
          "count": 0,
          "interval": null,
          "needTickCheck": false,
          "nextTick": null,
          "passive": true
        },
        "_readFileStorage": {
          "duration": 60000,
          "running": {},
          "data": {},
          "levels": [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
          ],
          "count": 0,
          "interval": null,
          "needTickCheck": false,
          "nextTick": null,
          "passive": true
        },
        "_readJsonStorage": {
          "duration": 60000,
          "running": {},
          "data": {},
          "levels": [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
          ],
          "count": 0,
          "interval": null,
          "needTickCheck": false,
          "nextTick": null,
          "passive": true
        },
        "_readlinkStorage": {
          "duration": 60000,
          "running": {},
          "data": {},
          "levels": [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
          ],
          "count": 0,
          "interval": null,
          "needTickCheck": false,
          "nextTick": null,
          "passive": true
        }
      },
      "watcherOptions": {
        "aggregateTimeout": 200
      },
      "watcher": {
        "domain": null,
        "_events": {},
        "_eventsCount": 0,
        "options": {
          "aggregateTimeout": 200
        },
        "watcherOptions": {},
        "fileWatchers": [],
        "dirWatchers": [],
        "mtimes": {},
        "paused": false,
        "aggregatedChanges": [],
        "aggregatedRemovals": [],
        "aggregateTimeout": 0
      }
    }
  },
  "resolverFactory": {
    "_pluginCompat": {
      "_args": [
        "options"
      ],
      "taps": [
        {
          "type": "sync",
          "name": "ResolverFactory"
        },
        {
          "type": "sync",
          "name": "Tapable camelCase",
          "stage": 100
        },
        {
          "type": "sync",
          "name": "Tapable this.hooks",
          "stage": 200
        }
      ],
      "interceptors": []
    },
    "hooks": {
      "resolveOptions": {
        "_map": {},
        "_interceptors": []
      },
      "resolver": {
        "_map": {},
        "_interceptors": []
      }
    },
    "cache1": {},
    "cache2": {}
  },
  "inputFileSystem": {
    "fileSystem": {},
    "_statStorage": {
      "duration": 60000,
      "running": {},
      "data": {},
      "levels": [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ],
      "count": 0,
      "interval": null,
      "needTickCheck": false,
      "nextTick": null,
      "passive": true
    },
    "_readdirStorage": {
      "duration": 60000,
      "running": {},
      "data": {},
      "levels": [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ],
      "count": 0,
      "interval": null,
      "needTickCheck": false,
      "nextTick": null,
      "passive": true
    },
    "_readFileStorage": {
      "duration": 60000,
      "running": {},
      "data": {},
      "levels": [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ],
      "count": 0,
      "interval": null,
      "needTickCheck": false,
      "nextTick": null,
      "passive": true
    },
    "_readJsonStorage": {
      "duration": 60000,
      "running": {},
      "data": {},
      "levels": [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ],
      "count": 0,
      "interval": null,
      "needTickCheck": false,
      "nextTick": null,
      "passive": true
    },
    "_readlinkStorage": {
      "duration": 60000,
      "running": {},
      "data": {},
      "levels": [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ],
      "count": 0,
      "interval": null,
      "needTickCheck": false,
      "nextTick": null,
      "passive": true
    }
  },
  "requestShortener": {
    "currentDirectoryRegExp": {},
    "parentDirectoryRegExp": {},
    "buildinsAsModule": false,
    "buildinsRegExp": {},
    "cache": {}
  },
  "options": {
    "entry": "./src/index.js",
    "output": {
      "path": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/example_dist",
      "filename": "[name].chunk.js",
      "chunkFilename": "[name].chunk.js",
      "webassemblyModuleFilename": "[modulehash].module.wasm",
      "library": "",
      "hotUpdateFunction": "webpackHotUpdate",
      "jsonpFunction": "webpackJsonp",
      "chunkCallbackName": "webpackChunk",
      "globalObject": "window",
      "devtoolNamespace": "",
      "libraryTarget": "var",
      "pathinfo": true,
      "sourceMapFilename": "[file].map[query]",
      "hotUpdateChunkFilename": "[id].[hash].hot-update.js",
      "hotUpdateMainFilename": "[hash].hot-update.json",
      "crossOriginLoading": false,
      "jsonpScriptType": false,
      "chunkLoadTimeout": 120000,
      "hashFunction": "md4",
      "hashDigest": "hex",
      "hashDigestLength": 20,
      "devtoolLineToLine": false,
      "strictModuleExceptionHandling": false
    },
    "plugins": [
      {}
    ],
    "mode": "development",
    "context": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple",
    "devtool": "eval",
    "cache": true,
    "target": "web",
    "module": {
      "unknownContextRequest": ".",
      "unknownContextRegExp": false,
      "unknownContextRecursive": true,
      "unknownContextCritical": true,
      "exprContextRequest": ".",
      "exprContextRegExp": false,
      "exprContextRecursive": true,
      "exprContextCritical": true,
      "wrappedContextRegExp": {},
      "wrappedContextRecursive": true,
      "wrappedContextCritical": false,
      "strictExportPresence": false,
      "strictThisContextOnImports": false,
      "unsafeCache": true,
      "rules": [],
      "defaultRules": [
        {
          "type": "javascript/auto",
          "resolve": {}
        },
        {
          "test": {},
          "type": "javascript/esm",
          "resolve": {
            "mainFields": [
              "browser",
              "main"
            ]
          }
        },
        {
          "test": {},
          "type": "json"
        },
        {
          "test": {},
          "type": "webassembly/experimental"
        }
      ]
    },
    "node": {
      "console": false,
      "process": true,
      "global": true,
      "Buffer": true,
      "setImmediate": true,
      "__filename": "mock",
      "__dirname": "mock"
    },
    "performance": false,
    "optimization": {
      "removeAvailableModules": true,
      "removeEmptyChunks": true,
      "mergeDuplicateChunks": true,
      "flagIncludedChunks": false,
      "occurrenceOrder": false,
      "sideEffects": false,
      "providedExports": true,
      "usedExports": false,
      "concatenateModules": false,
      "splitChunks": {
        "hidePathInfo": false,
        "chunks": "async",
        "minSize": 10000,
        "minChunks": 1,
        "maxAsyncRequests": null,
        "automaticNameDelimiter": "~",
        "maxInitialRequests": null,
        "name": true,
        "cacheGroups": {
          "default": {
            "automaticNamePrefix": "",
            "reuseExistingChunk": true,
            "minChunks": 2,
            "priority": -20
          },
          "vendors": {
            "automaticNamePrefix": "vendors",
            "test": {},
            "priority": -10
          }
        }
      },
      "noEmitOnErrors": false,
      "checkWasmTypes": false,
      "mangleWasmImports": false,
      "namedModules": true,
      "hashedModuleIds": false,
      "namedChunks": true,
      "portableRecords": false,
      "minimize": false,
      "minimizer": [
        {}
      ],
      "nodeEnv": "development"
    },
    "resolve": {
      "unsafeCache": true,
      "modules": [
        "node_modules"
      ],
      "extensions": [
        ".wasm",
        ".mjs",
        ".js",
        ".json"
      ],
      "mainFiles": [
        "index"
      ],
      "aliasFields": [
        "browser"
      ],
      "mainFields": [
        "browser",
        "module",
        "main"
      ],
      "cacheWithContext": false
    },
    "resolveLoader": {
      "unsafeCache": true,
      "mainFields": [
        "loader",
        "main"
      ],
      "extensions": [
        ".js",
        ".json"
      ],
      "mainFiles": [
        "index"
      ],
      "cacheWithContext": false
    }
  },
  "outputOptions": {
    "path": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/example_dist",
    "filename": "[name].chunk.js",
    "chunkFilename": "[name].chunk.js",
    "webassemblyModuleFilename": "[modulehash].module.wasm",
    "library": "",
    "hotUpdateFunction": "webpackHotUpdate",
    "jsonpFunction": "webpackJsonp",
    "chunkCallbackName": "webpackChunk",
    "globalObject": "window",
    "devtoolNamespace": "",
    "libraryTarget": "var",
    "pathinfo": true,
    "sourceMapFilename": "[file].map[query]",
    "hotUpdateChunkFilename": "[id].[hash].hot-update.js",
    "hotUpdateMainFilename": "[hash].hot-update.json",
    "crossOriginLoading": false,
    "jsonpScriptType": false,
    "chunkLoadTimeout": 120000,
    "hashFunction": "md4",
    "hashDigest": "hex",
    "hashDigestLength": 20,
    "devtoolLineToLine": false,
    "strictModuleExceptionHandling": false
  },
  "performance": false,
  "mainTemplate": {
    "_pluginCompat": {
      "_args": [
        "options"
      ],
      "taps": [
        {
          "type": "sync",
          "name": "Tapable camelCase",
          "stage": 100
        },
        {
          "type": "sync",
          "name": "Tapable this.hooks",
          "stage": 200
        }
      ],
      "interceptors": []
    },
    "outputOptions": {
      "path": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/example_dist",
      "filename": "[name].chunk.js",
      "chunkFilename": "[name].chunk.js",
      "webassemblyModuleFilename": "[modulehash].module.wasm",
      "library": "",
      "hotUpdateFunction": "webpackHotUpdate",
      "jsonpFunction": "webpackJsonp",
      "chunkCallbackName": "webpackChunk",
      "globalObject": "window",
      "devtoolNamespace": "",
      "libraryTarget": "var",
      "pathinfo": true,
      "sourceMapFilename": "[file].map[query]",
      "hotUpdateChunkFilename": "[id].[hash].hot-update.js",
      "hotUpdateMainFilename": "[hash].hot-update.json",
      "crossOriginLoading": false,
      "jsonpScriptType": false,
      "chunkLoadTimeout": 120000,
      "hashFunction": "md4",
      "hashDigest": "hex",
      "hashDigestLength": 20,
      "devtoolLineToLine": false,
      "strictModuleExceptionHandling": false
    },
    "hooks": {
      "renderManifest": {
        "_args": [
          "result",
          "options"
        ],
        "taps": [],
        "interceptors": []
      },
      "modules": {
        "_args": [
          "modules",
          "chunk",
          "hash",
          "moduleTemplate",
          "dependencyTemplates"
        ],
        "taps": [],
        "interceptors": []
      },
      "moduleObj": {
        "_args": [
          "source",
          "chunk",
          "hash",
          "moduleIdExpression"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "MainTemplate"
          }
        ],
        "interceptors": []
      },
      "requireEnsure": {
        "_args": [
          "source",
          "chunk",
          "hash",
          "chunkIdExpression"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "JsonpMainTemplatePlugin load"
          },
          {
            "type": "sync",
            "name": "WasmMainTemplatePlugin"
          },
          {
            "type": "sync",
            "name": "JsonpMainTemplatePlugin preload",
            "stage": 10
          }
        ],
        "interceptors": []
      },
      "bootstrap": {
        "_args": [
          "source",
          "chunk",
          "hash",
          "moduleTemplate",
          "dependencyTemplates"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "JsonpMainTemplatePlugin"
          }
        ],
        "interceptors": []
      },
      "localVars": {
        "_args": [
          "source",
          "chunk",
          "hash"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "MainTemplate"
          },
          {
            "type": "sync",
            "name": "JsonpMainTemplatePlugin"
          },
          {
            "type": "sync",
            "name": "WasmMainTemplatePlugin"
          }
        ],
        "interceptors": []
      },
      "require": {
        "_args": [
          "source",
          "chunk",
          "hash"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "MainTemplate"
          }
        ],
        "interceptors": []
      },
      "requireExtensions": {
        "_args": [
          "source",
          "chunk",
          "hash"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "MainTemplate"
          },
          {
            "type": "sync",
            "name": "JsonpMainTemplatePlugin"
          },
          {
            "type": "sync",
            "name": "WasmMainTemplatePlugin"
          }
        ],
        "interceptors": []
      },
      "beforeStartup": {
        "_args": [
          "source",
          "chunk",
          "hash"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "JsonpMainTemplatePlugin"
          },
          {
            "type": "sync",
            "name": "JsonpMainTemplatePlugin"
          }
        ],
        "interceptors": []
      },
      "startup": {
        "_args": [
          "source",
          "chunk",
          "hash"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "MainTemplate"
          },
          {
            "type": "sync",
            "name": "JsonpMainTemplatePlugin"
          }
        ],
        "interceptors": []
      },
      "render": {
        "_args": [
          "source",
          "chunk",
          "hash",
          "moduleTemplate",
          "dependencyTemplates"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "MainTemplate"
          }
        ],
        "interceptors": []
      },
      "renderWithEntry": {
        "_args": [
          "source",
          "chunk",
          "hash"
        ],
        "taps": [],
        "interceptors": []
      },
      "moduleRequire": {
        "_args": [
          "source",
          "chunk",
          "hash",
          "moduleIdExpression"
        ],
        "taps": [],
        "interceptors": []
      },
      "addModule": {
        "_args": [
          "source",
          "chunk",
          "hash",
          "moduleIdExpression",
          "moduleExpression"
        ],
        "taps": [],
        "interceptors": []
      },
      "currentHash": {
        "_args": [
          "source",
          "requestedLength"
        ],
        "taps": [],
        "interceptors": []
      },
      "assetPath": {
        "_args": [
          "path",
          "options"
        ],
        "taps": [],
        "interceptors": []
      },
      "hash": {
        "_args": [
          "hash"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "JsonpMainTemplatePlugin"
          },
          {
            "type": "sync",
            "name": "WasmMainTemplatePlugin"
          }
        ],
        "interceptors": []
      },
      "hashForChunk": {
        "_args": [
          "hash",
          "chunk"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "WasmMainTemplatePlugin"
          }
        ],
        "interceptors": []
      },
      "globalHashPaths": {
        "_args": [
          "paths"
        ],
        "taps": [],
        "interceptors": []
      },
      "globalHash": {
        "_args": [
          "chunk",
          "paths"
        ],
        "taps": [],
        "interceptors": []
      },
      "hotBootstrap": {
        "_args": [
          "source",
          "chunk",
          "hash"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "JsonpMainTemplatePlugin"
          }
        ],
        "interceptors": []
      },
      "jsonpScript": {
        "_args": [
          "source",
          "chunk",
          "hash"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "JsonpMainTemplatePlugin"
          }
        ],
        "interceptors": []
      },
      "linkPreload": {
        "_args": [
          "source",
          "chunk",
          "hash"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "JsonpMainTemplatePlugin"
          }
        ],
        "interceptors": []
      },
      "linkPrefetch": {
        "_args": [
          "source",
          "chunk",
          "hash"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "JsonpMainTemplatePlugin"
          }
        ],
        "interceptors": []
      }
    },
    "requireFn": "__webpack_require__"
  },
  "chunkTemplate": {
    "_pluginCompat": {
      "_args": [
        "options"
      ],
      "taps": [
        {
          "type": "sync",
          "name": "Tapable camelCase",
          "stage": 100
        },
        {
          "type": "sync",
          "name": "Tapable this.hooks",
          "stage": 200
        }
      ],
      "interceptors": []
    },
    "outputOptions": {
      "path": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/example_dist",
      "filename": "[name].chunk.js",
      "chunkFilename": "[name].chunk.js",
      "webassemblyModuleFilename": "[modulehash].module.wasm",
      "library": "",
      "hotUpdateFunction": "webpackHotUpdate",
      "jsonpFunction": "webpackJsonp",
      "chunkCallbackName": "webpackChunk",
      "globalObject": "window",
      "devtoolNamespace": "",
      "libraryTarget": "var",
      "pathinfo": true,
      "sourceMapFilename": "[file].map[query]",
      "hotUpdateChunkFilename": "[id].[hash].hot-update.js",
      "hotUpdateMainFilename": "[hash].hot-update.json",
      "crossOriginLoading": false,
      "jsonpScriptType": false,
      "chunkLoadTimeout": 120000,
      "hashFunction": "md4",
      "hashDigest": "hex",
      "hashDigestLength": 20,
      "devtoolLineToLine": false,
      "strictModuleExceptionHandling": false
    },
    "hooks": {
      "renderManifest": {
        "_args": [
          "result",
          "options"
        ],
        "taps": [],
        "interceptors": []
      },
      "modules": {
        "_args": [
          "source",
          "chunk",
          "moduleTemplate",
          "dependencyTemplates"
        ],
        "taps": [],
        "interceptors": []
      },
      "render": {
        "_args": [
          "source",
          "chunk",
          "moduleTemplate",
          "dependencyTemplates"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "JsonpChunkTemplatePlugin"
          }
        ],
        "interceptors": []
      },
      "renderWithEntry": {
        "_args": [
          "source",
          "chunk"
        ],
        "taps": [],
        "interceptors": []
      },
      "hash": {
        "_args": [
          "hash"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "JsonpChunkTemplatePlugin"
          }
        ],
        "interceptors": []
      },
      "hashForChunk": {
        "_args": [
          "hash",
          "chunk"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "JsonpChunkTemplatePlugin"
          }
        ],
        "interceptors": []
      }
    }
  },
  "hotUpdateChunkTemplate": {
    "_pluginCompat": {
      "_args": [
        "options"
      ],
      "taps": [
        {
          "type": "sync",
          "name": "Tapable camelCase",
          "stage": 100
        },
        {
          "type": "sync",
          "name": "Tapable this.hooks",
          "stage": 200
        }
      ],
      "interceptors": []
    },
    "outputOptions": {
      "path": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/example_dist",
      "filename": "[name].chunk.js",
      "chunkFilename": "[name].chunk.js",
      "webassemblyModuleFilename": "[modulehash].module.wasm",
      "library": "",
      "hotUpdateFunction": "webpackHotUpdate",
      "jsonpFunction": "webpackJsonp",
      "chunkCallbackName": "webpackChunk",
      "globalObject": "window",
      "devtoolNamespace": "",
      "libraryTarget": "var",
      "pathinfo": true,
      "sourceMapFilename": "[file].map[query]",
      "hotUpdateChunkFilename": "[id].[hash].hot-update.js",
      "hotUpdateMainFilename": "[hash].hot-update.json",
      "crossOriginLoading": false,
      "jsonpScriptType": false,
      "chunkLoadTimeout": 120000,
      "hashFunction": "md4",
      "hashDigest": "hex",
      "hashDigestLength": 20,
      "devtoolLineToLine": false,
      "strictModuleExceptionHandling": false
    },
    "hooks": {
      "modules": {
        "_args": [
          "source",
          "modules",
          "removedModules",
          "moduleTemplate",
          "dependencyTemplates"
        ],
        "taps": [],
        "interceptors": []
      },
      "render": {
        "_args": [
          "source",
          "modules",
          "removedModules",
          "hash",
          "id",
          "moduleTemplate",
          "dependencyTemplates"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "JsonpHotUpdateChunkTemplatePlugin"
          }
        ],
        "interceptors": []
      },
      "hash": {
        "_args": [
          "hash"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "JsonpHotUpdateChunkTemplatePlugin"
          }
        ],
        "interceptors": []
      }
    }
  },
  "runtimeTemplate": {
    "outputOptions": {
      "path": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/example_dist",
      "filename": "[name].chunk.js",
      "chunkFilename": "[name].chunk.js",
      "webassemblyModuleFilename": "[modulehash].module.wasm",
      "library": "",
      "hotUpdateFunction": "webpackHotUpdate",
      "jsonpFunction": "webpackJsonp",
      "chunkCallbackName": "webpackChunk",
      "globalObject": "window",
      "devtoolNamespace": "",
      "libraryTarget": "var",
      "pathinfo": true,
      "sourceMapFilename": "[file].map[query]",
      "hotUpdateChunkFilename": "[id].[hash].hot-update.js",
      "hotUpdateMainFilename": "[hash].hot-update.json",
      "crossOriginLoading": false,
      "jsonpScriptType": false,
      "chunkLoadTimeout": 120000,
      "hashFunction": "md4",
      "hashDigest": "hex",
      "hashDigestLength": 20,
      "devtoolLineToLine": false,
      "strictModuleExceptionHandling": false
    },
    "requestShortener": {
      "currentDirectoryRegExp": {},
      "parentDirectoryRegExp": {},
      "buildinsAsModule": false,
      "buildinsRegExp": {},
      "cache": {}
    }
  },
  "moduleTemplates": {
    "javascript": {
      "_pluginCompat": {
        "_args": [
          "options"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "Tapable camelCase",
            "stage": 100
          },
          {
            "type": "sync",
            "name": "Tapable this.hooks",
            "stage": 200
          }
        ],
        "interceptors": []
      },
      "runtimeTemplate": {
        "outputOptions": {
          "path": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/example_dist",
          "filename": "[name].chunk.js",
          "chunkFilename": "[name].chunk.js",
          "webassemblyModuleFilename": "[modulehash].module.wasm",
          "library": "",
          "hotUpdateFunction": "webpackHotUpdate",
          "jsonpFunction": "webpackJsonp",
          "chunkCallbackName": "webpackChunk",
          "globalObject": "window",
          "devtoolNamespace": "",
          "libraryTarget": "var",
          "pathinfo": true,
          "sourceMapFilename": "[file].map[query]",
          "hotUpdateChunkFilename": "[id].[hash].hot-update.js",
          "hotUpdateMainFilename": "[hash].hot-update.json",
          "crossOriginLoading": false,
          "jsonpScriptType": false,
          "chunkLoadTimeout": 120000,
          "hashFunction": "md4",
          "hashDigest": "hex",
          "hashDigestLength": 20,
          "devtoolLineToLine": false,
          "strictModuleExceptionHandling": false
        },
        "requestShortener": {
          "currentDirectoryRegExp": {},
          "parentDirectoryRegExp": {},
          "buildinsAsModule": false,
          "buildinsRegExp": {},
          "cache": {}
        }
      },
      "type": "javascript",
      "hooks": {
        "content": {
          "_args": [
            "source",
            "module",
            "options",
            "dependencyTemplates"
          ],
          "taps": [],
          "interceptors": []
        },
        "module": {
          "_args": [
            "source",
            "module",
            "options",
            "dependencyTemplates"
          ],
          "taps": [],
          "interceptors": []
        },
        "render": {
          "_args": [
            "source",
            "module",
            "options",
            "dependencyTemplates"
          ],
          "taps": [],
          "interceptors": []
        },
        "package": {
          "_args": [
            "source",
            "module",
            "options",
            "dependencyTemplates"
          ],
          "taps": [],
          "interceptors": []
        },
        "hash": {
          "_args": [
            "hash"
          ],
          "taps": [],
          "interceptors": []
        }
      }
    },
    "webassembly": {
      "_pluginCompat": {
        "_args": [
          "options"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "Tapable camelCase",
            "stage": 100
          },
          {
            "type": "sync",
            "name": "Tapable this.hooks",
            "stage": 200
          }
        ],
        "interceptors": []
      },
      "runtimeTemplate": {
        "outputOptions": {
          "path": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/example_dist",
          "filename": "[name].chunk.js",
          "chunkFilename": "[name].chunk.js",
          "webassemblyModuleFilename": "[modulehash].module.wasm",
          "library": "",
          "hotUpdateFunction": "webpackHotUpdate",
          "jsonpFunction": "webpackJsonp",
          "chunkCallbackName": "webpackChunk",
          "globalObject": "window",
          "devtoolNamespace": "",
          "libraryTarget": "var",
          "pathinfo": true,
          "sourceMapFilename": "[file].map[query]",
          "hotUpdateChunkFilename": "[id].[hash].hot-update.js",
          "hotUpdateMainFilename": "[hash].hot-update.json",
          "crossOriginLoading": false,
          "jsonpScriptType": false,
          "chunkLoadTimeout": 120000,
          "hashFunction": "md4",
          "hashDigest": "hex",
          "hashDigestLength": 20,
          "devtoolLineToLine": false,
          "strictModuleExceptionHandling": false
        },
        "requestShortener": {
          "currentDirectoryRegExp": {},
          "parentDirectoryRegExp": {},
          "buildinsAsModule": false,
          "buildinsRegExp": {},
          "cache": {}
        }
      },
      "type": "webassembly",
      "hooks": {
        "content": {
          "_args": [
            "source",
            "module",
            "options",
            "dependencyTemplates"
          ],
          "taps": [],
          "interceptors": []
        },
        "module": {
          "_args": [
            "source",
            "module",
            "options",
            "dependencyTemplates"
          ],
          "taps": [],
          "interceptors": []
        },
        "render": {
          "_args": [
            "source",
            "module",
            "options",
            "dependencyTemplates"
          ],
          "taps": [],
          "interceptors": []
        },
        "package": {
          "_args": [
            "source",
            "module",
            "options",
            "dependencyTemplates"
          ],
          "taps": [],
          "interceptors": []
        },
        "hash": {
          "_args": [
            "hash"
          ],
          "taps": [],
          "interceptors": []
        }
      }
    }
  },
  "semaphore": {
    "available": 100,
    "waiters": []
  },
  "entries": [],
  "_preparedEntrypoints": [],
  "entrypoints": {},
  "chunks": [],
  "chunkGroups": [],
  "namedChunkGroups": {},
  "namedChunks": {},
  "modules": [],
  "_modules": {},
  "cache": {},
  "records": {},
  "additionalChunkAssets": [],
  "assets": {},
  "errors": [],
  "warnings": [],
  "children": [],
  "dependencyFactories": {},
  "dependencyTemplates": {},
  "childrenCounters": {},
  "usedChunkIds": null,
  "usedModuleIds": null,
  "fileTimestamps": {},
  "contextTimestamps": {},
  "compilationDependencies": {},
  "_buildingModules": {},
  "_rebuildingModules": {}
}