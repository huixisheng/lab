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
      "interceptors": [],
      "_x": []
    },
    "rebuildModule": {
      "_args": [
        "module"
      ],
      "taps": [
        {
          "type": "sync",
          "name": "FlagDependencyExportsPlugin"
        }
      ],
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
      "interceptors": [],
      "_x": []
    },
    "dependencyReference": {
      "_args": [
        "dependencyReference",
        "dependency",
        "module"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "finishModules": {
      "_args": [
        "modules"
      ],
      "taps": [
        {
          "type": "sync",
          "name": "FlagDependencyExportsPlugin"
        }
      ],
      "interceptors": [],
      "_x": [
        null
      ]
    },
    "finishRebuildingModule": {
      "_args": [
        "module"
      ],
      "taps": [
        {
          "type": "sync",
          "name": "FlagDependencyExportsPlugin"
        }
      ],
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
      "taps": [
        {
          "type": "sync",
          "name": "WarnCaseSensitiveModulesPlugin"
        }
      ],
      "interceptors": [],
      "_x": [
        null
      ]
    },
    "beforeChunks": {
      "_args": [],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "afterChunks": {
      "_args": [
        "chunks"
      ],
      "taps": [
        {
          "type": "sync",
          "name": "WebAssemblyModulesPlugin"
        }
      ],
      "interceptors": [],
      "_x": [
        null
      ]
    },
    "optimizeDependenciesBasic": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "optimizeDependencies": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "optimizeDependenciesAdvanced": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "afterOptimizeDependencies": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "optimize": {
      "_args": [],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "optimizeModulesBasic": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "optimizeModules": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "optimizeModulesAdvanced": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "afterOptimizeModules": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "optimizeChunksBasic": {
      "_args": [
        "chunks",
        "chunkGroups"
      ],
      "taps": [
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
        }
      ],
      "interceptors": [],
      "_x": [
        null,
        null,
        null,
        null
      ]
    },
    "optimizeChunks": {
      "_args": [
        "chunks",
        "chunkGroups"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
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
        },
        {
          "type": "sync",
          "name": "RemoveEmptyChunksPlugin"
        }
      ],
      "interceptors": [],
      "_x": [
        null,
        null
      ]
    },
    "afterOptimizeChunks": {
      "_args": [
        "chunks",
        "chunkGroups"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "optimizeTree": {
      "_args": [
        "chunks",
        "modules"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "afterOptimizeTree": {
      "_args": [
        "chunks",
        "modules"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "optimizeChunkModulesBasic": {
      "_args": [
        "chunks",
        "modules"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "optimizeChunkModules": {
      "_args": [
        "chunks",
        "modules"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "optimizeChunkModulesAdvanced": {
      "_args": [
        "chunks",
        "modules"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "afterOptimizeChunkModules": {
      "_args": [
        "chunks",
        "modules"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "shouldRecord": {
      "_args": [],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "reviveModules": {
      "_args": [
        "modules",
        "records"
      ],
      "taps": [
        {
          "type": "sync",
          "name": "RecordIdsPlugin"
        }
      ],
      "interceptors": [],
      "_x": [
        null
      ]
    },
    "optimizeModuleOrder": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "advancedOptimizeModuleOrder": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "beforeModuleIds": {
      "_args": [
        "modules"
      ],
      "taps": [
        {
          "type": "sync",
          "name": "NamedModulesPlugin"
        }
      ],
      "interceptors": [],
      "_x": [
        null
      ]
    },
    "moduleIds": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "optimizeModuleIds": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "afterOptimizeModuleIds": {
      "_args": [
        "modules"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "reviveChunks": {
      "_args": [
        "chunks",
        "records"
      ],
      "taps": [
        {
          "type": "sync",
          "name": "RecordIdsPlugin"
        }
      ],
      "interceptors": [],
      "_x": [
        null
      ]
    },
    "optimizeChunkOrder": {
      "_args": [
        "chunks"
      ],
      "taps": [
        {
          "type": "sync",
          "name": "OccurrenceOrderChunkIdsPlugin"
        }
      ],
      "interceptors": [],
      "_x": [
        null
      ]
    },
    "beforeChunkIds": {
      "_args": [
        "chunks"
      ],
      "taps": [
        {
          "type": "sync",
          "name": "NamedChunksPlugin"
        }
      ],
      "interceptors": [],
      "_x": [
        null
      ]
    },
    "optimizeChunkIds": {
      "_args": [
        "chunks"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "afterOptimizeChunkIds": {
      "_args": [
        "chunks"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "recordModules": {
      "_args": [
        "modules",
        "records"
      ],
      "taps": [
        {
          "type": "sync",
          "name": "RecordIdsPlugin"
        }
      ],
      "interceptors": [],
      "_x": [
        null
      ]
    },
    "recordChunks": {
      "_args": [
        "chunks",
        "records"
      ],
      "taps": [
        {
          "type": "sync",
          "name": "RecordIdsPlugin"
        }
      ],
      "interceptors": [],
      "_x": [
        null
      ]
    },
    "beforeHash": {
      "_args": [],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "contentHash": {
      "_args": [
        "chunk"
      ],
      "taps": [
        {
          "type": "sync",
          "name": "JavascriptModulesPlugin"
        }
      ],
      "interceptors": [],
      "_x": [
        null
      ]
    },
    "afterHash": {
      "_args": [],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "recordHash": {
      "_args": [
        "records"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "record": {
      "_args": [
        "compilation",
        "records"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "beforeModuleAssets": {
      "_args": [],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "shouldGenerateChunkAssets": {
      "_args": [],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "beforeChunkAssets": {
      "_args": [],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "additionalChunkAssets": {
      "_args": [
        "chunks"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "additionalAssets": {
      "_args": [],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "optimizeChunkAssets": {
      "_args": [
        "chunks"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "afterOptimizeChunkAssets": {
      "_args": [
        "chunks"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "optimizeAssets": {
      "_args": [
        "assets"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "afterOptimizeAssets": {
      "_args": [
        "assets"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "needAdditionalSeal": {
      "_args": [],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "afterSeal": {
      "_args": [],
      "taps": [],
      "interceptors": [],
      "_x": []
    },
    "chunkHash": {
      "_args": [
        "chunk",
        "chunkHash"
      ],
      "taps": [],
      "interceptors": [],
      "_x": []
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
      "interceptors": [],
      "_x": []
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
      "taps": [
        {
          "type": "sync",
          "name": "LoaderTargetPlugin"
        },
        {
          "type": "sync",
          "name": "LoaderPlugin"
        }
      ],
      "interceptors": [],
      "_x": [
        null,
        null
      ]
    },
    "optimizeExtractedChunksBasic": {
      "_args": [
        "chunks"
      ],
      "taps": [
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
        }
      ],
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
      "taps": [
        {
          "type": "sync",
          "name": "RemoveEmptyChunksPlugin"
        }
      ],
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
        "interceptors": [],
        "_x": [
          null
        ]
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
        "interceptors": [],
        "_x": [
          null,
          null,
          null
        ]
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
        "interceptors": [],
        "_x": [
          null,
          null
        ]
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
        "interceptors": [],
        "_x": [
          null,
          null
        ]
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
        "count": 9,
        "interval": {
          "_called": false,
          "_idleTimeout": 530,
          "_idlePrev": {
            "_idleNext": "~compiler~inputFileSystem~_statStorage~interval",
            "_idlePrev": {
              "_called": false,
              "_idleTimeout": 530,
              "_idlePrev": {
                "_called": false,
                "_idleTimeout": 530,
                "_idlePrev": {
                  "_called": false,
                  "_idleTimeout": 530,
                  "_idlePrev": "~compiler~inputFileSystem~_statStorage~interval",
                  "_idleNext": "~compiler~inputFileSystem~_statStorage~interval~_idlePrev~_idlePrev~_idlePrev",
                  "_idleStart": 1990,
                  "_repeat": 530,
                  "_destroyed": false
                },
                "_idleNext": "~compiler~inputFileSystem~_statStorage~interval~_idlePrev~_idlePrev",
                "_idleStart": 1919,
                "_repeat": 530,
                "_destroyed": false
              },
              "_idleNext": "~compiler~inputFileSystem~_statStorage~interval~_idlePrev",
              "_idleStart": 1918,
              "_repeat": 530,
              "_destroyed": false
            },
            "_timer": {
              "_list": "~compiler~inputFileSystem~_statStorage~interval~_idlePrev"
            },
            "_unrefed": false,
            "msecs": 530,
            "nextTick": false
          },
          "_idleNext": "~compiler~inputFileSystem~_statStorage~interval~_idlePrev~_idlePrev~_idlePrev~_idlePrev",
          "_idleStart": 1991,
          "_repeat": 530,
          "_destroyed": false
        },
        "needTickCheck": false,
        "nextTick": null,
        "passive": false
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
        "count": 11,
        "interval": "~compiler~inputFileSystem~_statStorage~interval~_idlePrev~_idlePrev",
        "needTickCheck": false,
        "nextTick": null,
        "passive": false
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
        "count": 8,
        "interval": "~compiler~inputFileSystem~_statStorage~interval~_idlePrev~_idlePrev~_idlePrev",
        "needTickCheck": false,
        "nextTick": null,
        "passive": false
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
        "count": 20,
        "interval": "~compiler~inputFileSystem~_statStorage~interval~_idlePrev~_idlePrev~_idlePrev~_idlePrev",
        "needTickCheck": false,
        "nextTick": null,
        "passive": false
      }
    },
    "records": {
      "modules": {
        "byIdentifier": {},
        "usedIds": {}
      },
      "chunks": {
        "byName": {},
        "bySource": {
          "0 /Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/src/index.js ./lazy-module": 0
        },
        "usedIds": [
          0
        ]
      }
    },
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
          "automaticNameDelimiter": "\\x7e",
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
      "inputFileSystem": "~compiler~inputFileSystem",
      "watcherOptions": {
        "aggregateTimeout": 200
      },
      "watcher": {
        "domain": null,
        "_events": {},
        "_eventsCount": 0,
        "options": "~compiler~watchFileSystem~watcherOptions",
        "watcherOptions": {},
        "fileWatchers": [],
        "dirWatchers": [],
        "mtimes": {},
        "paused": false,
        "aggregatedChanges": [],
        "aggregatedRemovals": [],
        "aggregateTimeout": 0
      }
    },
    "_lastCompilationFileDependencies": {},
    "_lastCompilationContextDependencies": {
      "_lastActiveSortFn": null
    }
  },
  "resolverFactory": "~compiler~resolverFactory",
  "inputFileSystem": "~compiler~inputFileSystem",
  "requestShortener": "~compiler~requestShortener",
  "options": "~compiler~options",
  "outputOptions": "~compiler~options~output",
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
    "outputOptions": "~compiler~options~output",
    "hooks": {
      "renderManifest": {
        "_args": [
          "result",
          "options"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "JavascriptModulesPlugin"
          }
        ],
        "interceptors": [],
        "_x": [
          null
        ]
      },
      "modules": {
        "_args": [
          "modules",
          "chunk",
          "hash",
          "moduleTemplate",
          "dependencyTemplates"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "JavascriptModulesPlugin"
          }
        ],
        "interceptors": [],
        "_x": [
          null
        ]
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
        "interceptors": [],
        "_x": [
          null
        ]
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
        "interceptors": [],
        "_x": [
          null,
          null,
          null
        ]
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
        "interceptors": [],
        "_x": [
          null
        ]
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
        "interceptors": [],
        "_x": [
          null,
          null,
          null
        ]
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
        "interceptors": [],
        "_x": [
          null
        ]
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
        "interceptors": [],
        "_x": [
          null,
          null,
          null
        ]
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
        "interceptors": [],
        "_x": [
          null,
          null
        ]
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
        "interceptors": [],
        "_x": [
          null,
          null
        ]
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
        "interceptors": [],
        "_x": [
          null
        ]
      },
      "renderWithEntry": {
        "_args": [
          "source",
          "chunk",
          "hash"
        ],
        "taps": [],
        "interceptors": [],
        "_x": []
      },
      "moduleRequire": {
        "_args": [
          "source",
          "chunk",
          "hash",
          "moduleIdExpression"
        ],
        "taps": [],
        "interceptors": [],
        "_x": []
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
        "interceptors": [],
        "_x": []
      },
      "currentHash": {
        "_args": [
          "source",
          "requestedLength"
        ],
        "taps": [],
        "interceptors": [],
        "_x": []
      },
      "assetPath": {
        "_args": [
          "path",
          "options"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "TemplatedPathPlugin"
          }
        ],
        "interceptors": [],
        "_x": [
          null
        ]
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
        "interceptors": [],
        "_x": [
          null,
          null
        ]
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
          },
          {
            "type": "sync",
            "name": "TemplatedPathPlugin"
          }
        ],
        "interceptors": [],
        "_x": [
          null,
          null
        ]
      },
      "globalHashPaths": {
        "_args": [
          "paths"
        ],
        "taps": [],
        "interceptors": [],
        "_x": []
      },
      "globalHash": {
        "_args": [
          "chunk",
          "paths"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "TemplatedPathPlugin"
          }
        ],
        "interceptors": [],
        "_x": [
          null
        ]
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
        "interceptors": [],
        "_x": [
          null
        ]
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
    "outputOptions": "~compiler~options~output",
    "hooks": {
      "renderManifest": {
        "_args": [
          "result",
          "options"
        ],
        "taps": [
          {
            "type": "sync",
            "name": "JavascriptModulesPlugin"
          },
          {
            "type": "sync",
            "name": "WebAssemblyModulesPlugin"
          }
        ],
        "interceptors": [],
        "_x": [
          null,
          null
        ]
      },
      "modules": {
        "_args": [
          "source",
          "chunk",
          "moduleTemplate",
          "dependencyTemplates"
        ],
        "taps": [],
        "interceptors": [],
        "_x": []
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
        "interceptors": [],
        "_x": [
          null
        ]
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
        "interceptors": [],
        "_x": [
          null
        ]
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
        "interceptors": [],
        "_x": [
          null
        ]
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
    "outputOptions": "~compiler~options~output",
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
    "outputOptions": "~compiler~options~output",
    "requestShortener": "~compiler~requestShortener"
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
      "runtimeTemplate": "~runtimeTemplate",
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
          "interceptors": [],
          "_x": []
        },
        "module": {
          "_args": [
            "source",
            "module",
            "options",
            "dependencyTemplates"
          ],
          "taps": [
            {
              "type": "sync",
              "name": "EvalDevToolModuleTemplatePlugin"
            }
          ],
          "interceptors": [],
          "_x": [
            null
          ]
        },
        "render": {
          "_args": [
            "source",
            "module",
            "options",
            "dependencyTemplates"
          ],
          "taps": [
            {
              "type": "sync",
              "name": "FunctionModuleTemplatePlugin"
            }
          ],
          "interceptors": [],
          "_x": [
            null
          ]
        },
        "package": {
          "_args": [
            "source",
            "module",
            "options",
            "dependencyTemplates"
          ],
          "taps": [
            {
              "type": "sync",
              "name": "FunctionModuleTemplatePlugin"
            }
          ],
          "interceptors": [],
          "_x": [
            null
          ]
        },
        "hash": {
          "_args": [
            "hash"
          ],
          "taps": [
            {
              "type": "sync",
              "name": "FunctionModuleTemplatePlugin"
            },
            {
              "type": "sync",
              "name": "EvalDevToolModuleTemplatePlugin"
            }
          ],
          "interceptors": [],
          "_x": [
            null,
            null
          ]
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
      "runtimeTemplate": "~runtimeTemplate",
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
          "interceptors": [],
          "_x": []
        }
      }
    }
  },
  "semaphore": {
    "available": 100,
    "waiters": []
  },
  "entries": [
    {
      "dependencies": [
        {
          "module": null,
          "weak": false,
          "optional": false,
          "loc": {
            "start": {
              "line": -1,
              "column": 0
            },
            "end": {
              "line": -1,
              "column": 0
            },
            "index": -3
          },
          "originModule": "~entries~0"
        },
        {
          "module": null,
          "weak": false,
          "optional": false,
          "loc": {
            "start": {
              "line": -1,
              "column": 0
            },
            "end": {
              "line": -1,
              "column": 0
            },
            "index": -2
          },
          "originModule": "~entries~0"
        },
        {
          "module": null,
          "weak": false,
          "optional": false,
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 44
            }
          },
          "expression": "",
          "range": [
            0,
            44
          ]
        },
        {
          "module": {
            "dependencies": [
              {
                "module": null,
                "weak": false,
                "optional": false,
                "loc": {
                  "start": {
                    "line": -1,
                    "column": 0
                  },
                  "end": {
                    "line": -1,
                    "column": 0
                  },
                  "index": -3
                },
                "originModule": "~entries~0~dependencies~3~module"
              },
              {
                "module": null,
                "weak": false,
                "optional": false,
                "loc": {
                  "start": {
                    "line": -1,
                    "column": 0
                  },
                  "end": {
                    "line": -1,
                    "column": 0
                  },
                  "index": -2
                },
                "originModule": "~entries~0~dependencies~3~module"
              },
              {
                "module": null,
                "weak": false,
                "optional": false,
                "loc": {
                  "index": -1
                },
                "range": [
                  15,
                  20
                ],
                "rangeStatement": [
                  0,
                  21
                ]
              },
              {
                "module": null,
                "weak": false,
                "optional": false,
                "loc": {
                  "index": -1
                },
                "originModule": "~entries~0~dependencies~3~module",
                "range": "~entries~0~dependencies~3~module~dependencies~2~range",
                "rangeStatement": "~entries~0~dependencies~3~module~dependencies~2~rangeStatement"
              }
            ],
            "blocks": [],
            "variables": [],
            "type": "javascript/auto",
            "context": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/src",
            "debugId": 1001,
            "hash": "a428c30a53dbdab48b9d81c22d3c70cd",
            "renderedHash": "a428c30a53dbdab48b9d",
            "resolveOptions": "~compiler~options~module~defaultRules~0~resolve",
            "factoryMeta": {},
            "warnings": [],
            "errors": [],
            "buildMeta": {
              "exportsType": "namespace",
              "providedExports": [
                "default"
              ]
            },
            "buildInfo": {
              "cacheable": true,
              "fileDependencies": {},
              "contextDependencies": {},
              "strict": true,
              "exportsArgument": "__webpack_exports__"
            },
            "reasons": [
              {
                "module": "~entries~0",
                "dependency": "~entries~0~dependencies~3",
                "_chunks": null
              },
              {
                "module": "~entries~0",
                "dependency": {
                  "module": "~entries~0~dependencies~3~module",
                  "weak": false,
                  "optional": false,
                  "loc": {
                    "start": {
                      "line": 11,
                      "column": 12
                    },
                    "end": {
                      "line": 11,
                      "column": 21
                    }
                  },
                  "request": "./static-esm-module",
                  "userRequest": "./static-esm-module",
                  "originModule": "~entries~0",
                  "sourceOrder": 1,
                  "parserScope": {
                    "importVarMap": {}
                  },
                  "id": "default",
                  "name": "esmModule",
                  "range": [
                    215,
                    224
                  ],
                  "strictExportPresence": false,
                  "namespaceObjectAsContext": false,
                  "directImport": true,
                  "shorthand": false
                },
                "_chunks": null
              }
            ],
            "_chunks": {
              "_lastActiveSortFn": null
            },
            "id": "./src/static-esm-module.js",
            "index": 1,
            "index2": 0,
            "depth": 1,
            "issuer": "~entries~0",
            "prefetched": false,
            "built": true,
            "used": null,
            "usedExports": null,
            "optimizationBailout": [],
            "useSourceMap": false,
            "_source": {
              "_value": "export default 'foo';\n",
              "_name": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/src/static-esm-module.js"
            },
            "request": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/src/static-esm-module.js",
            "userRequest": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/src/static-esm-module.js",
            "rawRequest": "./static-esm-module",
            "binary": false,
            "parser": {
              "_pluginCompat": {
                "_args": [
                  "options"
                ],
                "taps": [
                  {
                    "type": "sync",
                    "name": "Parser"
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
                "evaluateTypeof": {
                  "_map": {},
                  "_interceptors": []
                },
                "evaluate": {
                  "_map": {},
                  "_interceptors": []
                },
                "evaluateIdentifier": {
                  "_map": {},
                  "_interceptors": []
                },
                "evaluateDefinedIdentifier": {
                  "_map": {},
                  "_interceptors": []
                },
                "evaluateCallExpressionMember": {
                  "_map": {},
                  "_interceptors": []
                },
                "statement": {
                  "_args": [
                    "statement"
                  ],
                  "taps": [],
                  "interceptors": [],
                  "_x": []
                },
                "statementIf": {
                  "_args": [
                    "statement"
                  ],
                  "taps": [
                    {
                      "type": "sync",
                      "name": "ConstPlugin"
                    }
                  ],
                  "interceptors": []
                },
                "label": {
                  "_map": {},
                  "_interceptors": []
                },
                "import": {
                  "_args": [
                    "statement",
                    "source"
                  ],
                  "taps": [
                    {
                      "type": "sync",
                      "name": "HarmonyImportDependencyParserPlugin"
                    }
                  ],
                  "interceptors": [],
                  "_x": [
                    null
                  ]
                },
                "importSpecifier": {
                  "_args": [
                    "statement",
                    "source",
                    "exportName",
                    "identifierName"
                  ],
                  "taps": [
                    {
                      "type": "sync",
                      "name": "HarmonyImportDependencyParserPlugin"
                    }
                  ],
                  "interceptors": [],
                  "_x": [
                    null
                  ]
                },
                "export": {
                  "_args": [
                    "statement"
                  ],
                  "taps": [
                    {
                      "type": "sync",
                      "name": "HarmonyExportDependencyParserPlugin"
                    }
                  ],
                  "interceptors": [],
                  "_x": [
                    null
                  ]
                },
                "exportImport": {
                  "_args": [
                    "statement",
                    "source"
                  ],
                  "taps": [
                    {
                      "type": "sync",
                      "name": "HarmonyExportDependencyParserPlugin"
                    }
                  ],
                  "interceptors": []
                },
                "exportDeclaration": {
                  "_args": [
                    "statement",
                    "declaration"
                  ],
                  "taps": [
                    {
                      "type": "sync",
                      "name": "HarmonyExportDependencyParserPlugin"
                    }
                  ],
                  "interceptors": []
                },
                "exportExpression": {
                  "_args": [
                    "statement",
                    "declaration"
                  ],
                  "taps": [
                    {
                      "type": "sync",
                      "name": "HarmonyExportDependencyParserPlugin"
                    }
                  ],
                  "interceptors": [],
                  "_x": [
                    null
                  ]
                },
                "exportSpecifier": {
                  "_args": [
                    "statement",
                    "identifierName",
                    "exportName",
                    "index"
                  ],
                  "taps": [
                    {
                      "type": "sync",
                      "name": "HarmonyExportDependencyParserPlugin"
                    }
                  ],
                  "interceptors": []
                },
                "exportImportSpecifier": {
                  "_args": [
                    "statement",
                    "source",
                    "identifierName",
                    "exportName",
                    "index"
                  ],
                  "taps": [
                    {
                      "type": "sync",
                      "name": "HarmonyExportDependencyParserPlugin"
                    }
                  ],
                  "interceptors": []
                },
                "varDeclaration": {
                  "_map": {},
                  "_interceptors": []
                },
                "varDeclarationLet": {
                  "_map": {},
                  "_interceptors": []
                },
                "varDeclarationConst": {
                  "_map": {},
                  "_interceptors": []
                },
                "varDeclarationVar": {
                  "_map": {},
                  "_interceptors": []
                },
                "canRename": {
                  "_map": {},
                  "_interceptors": []
                },
                "rename": {
                  "_map": {},
                  "_interceptors": []
                },
                "assigned": {
                  "_map": {},
                  "_interceptors": []
                },
                "assign": {
                  "_map": {},
                  "_interceptors": []
                },
                "typeof": {
                  "_map": {},
                  "_interceptors": []
                },
                "importCall": {
                  "_args": [
                    "expression"
                  ],
                  "taps": [
                    {
                      "type": "sync",
                      "name": "ImportParserPlugin"
                    }
                  ],
                  "interceptors": [],
                  "_x": [
                    null
                  ]
                },
                "call": {
                  "_map": {},
                  "_interceptors": []
                },
                "callAnyMember": {
                  "_map": {},
                  "_interceptors": []
                },
                "new": {
                  "_map": {},
                  "_interceptors": []
                },
                "expression": {
                  "_map": {},
                  "_interceptors": []
                },
                "expressionAnyMember": {
                  "_map": {},
                  "_interceptors": []
                },
                "expressionConditionalOperator": {
                  "_args": [
                    "expression"
                  ],
                  "taps": [
                    {
                      "type": "sync",
                      "name": "ConstPlugin"
                    }
                  ],
                  "interceptors": []
                },
                "program": {
                  "_args": [
                    "ast",
                    "comments"
                  ],
                  "taps": [
                    {
                      "type": "sync",
                      "name": "HarmonyDetectionParserPlugin"
                    },
                    {
                      "type": "sync",
                      "name": "UseStrictPlugin"
                    }
                  ],
                  "interceptors": [],
                  "_x": [
                    null,
                    null
                  ]
                },
                "hotAcceptCallback": {
                  "_args": [
                    "expression",
                    "requests"
                  ],
                  "taps": [
                    {
                      "type": "sync",
                      "name": "HarmonyImportDependencyParserPlugin"
                    }
                  ],
                  "interceptors": []
                },
                "hotAcceptWithoutCallback": {
                  "_args": [
                    "expression",
                    "requests"
                  ],
                  "taps": [
                    {
                      "type": "sync",
                      "name": "HarmonyImportDependencyParserPlugin"
                    }
                  ],
                  "interceptors": []
                }
              },
              "options": {},
              "sourceType": "auto"
            },
            "generator": {},
            "resource": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/src/static-esm-module.js",
            "loaders": [],
            "error": null,
            "_buildHash": "de985635ff10fc916705673e0e388de9",
            "buildTimestamp": 1535187134061,
            "_cachedSources": {},
            "lineToLine": false,
            "_lastSuccessfulBuildMeta": "~entries~0~dependencies~3~module~buildMeta",
            "_ast": null
          },
          "weak": false,
          "optional": false,
          "loc": "~entries~0~dependencies~2~loc",
          "request": "./static-esm-module",
          "userRequest": "./static-esm-module",
          "originModule": "~entries~0",
          "sourceOrder": 1,
          "parserScope": "~entries~0~dependencies~3~module~reasons~1~dependency~parserScope"
        },
        "~entries~0~dependencies~3~module~reasons~1~dependency"
      ],
      "blocks": [
        {
          "dependencies": [
            {
              "module": {
                "dependencies": [
                  {
                    "module": null,
                    "weak": false,
                    "optional": false,
                    "loc": {
                      "start": {
                        "line": -1,
                        "column": 0
                      },
                      "end": {
                        "line": -1,
                        "column": 0
                      },
                      "index": -3
                    },
                    "originModule": "~entries~0~blocks~0~dependencies~0~module"
                  },
                  {
                    "module": null,
                    "weak": false,
                    "optional": false,
                    "loc": {
                      "start": {
                        "line": -1,
                        "column": 0
                      },
                      "end": {
                        "line": -1,
                        "column": 0
                      },
                      "index": -2
                    },
                    "originModule": "~entries~0~blocks~0~dependencies~0~module"
                  },
                  {
                    "module": null,
                    "weak": false,
                    "optional": false,
                    "loc": {
                      "index": -1
                    },
                    "range": [
                      15,
                      21
                    ],
                    "rangeStatement": [
                      0,
                      22
                    ]
                  },
                  {
                    "module": null,
                    "weak": false,
                    "optional": false,
                    "loc": {
                      "index": -1
                    },
                    "originModule": "~entries~0~blocks~0~dependencies~0~module",
                    "range": "~entries~0~blocks~0~dependencies~0~module~dependencies~2~range",
                    "rangeStatement": "~entries~0~blocks~0~dependencies~0~module~dependencies~2~rangeStatement"
                  }
                ],
                "blocks": [],
                "variables": [],
                "type": "javascript/auto",
                "context": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/src",
                "debugId": 1002,
                "hash": "50c6a73eeb4263aa6ae3fec096b1551e",
                "renderedHash": "50c6a73eeb4263aa6ae3",
                "resolveOptions": "~compiler~options~module~defaultRules~0~resolve",
                "factoryMeta": {},
                "warnings": [],
                "errors": [],
                "buildMeta": {
                  "exportsType": "namespace",
                  "providedExports": [
                    "default"
                  ]
                },
                "buildInfo": {
                  "cacheable": true,
                  "fileDependencies": {},
                  "contextDependencies": {},
                  "strict": true,
                  "exportsArgument": "__webpack_exports__"
                },
                "reasons": [
                  {
                    "module": "~entries~0",
                    "dependency": "~entries~0~blocks~0~dependencies~0",
                    "_chunks": null
                  }
                ],
                "_chunks": {
                  "_lastActiveSortFn": null
                },
                "id": "./src/lazy-module.js",
                "index": 2,
                "index2": 2,
                "depth": 1,
                "issuer": "~entries~0",
                "prefetched": false,
                "built": true,
                "used": null,
                "usedExports": null,
                "optimizationBailout": [],
                "useSourceMap": false,
                "_source": {
                  "_value": "export default 'lazy';\n",
                  "_name": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/src/lazy-module.js"
                },
                "request": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/src/lazy-module.js",
                "userRequest": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/src/lazy-module.js",
                "rawRequest": "./lazy-module",
                "binary": false,
                "parser": "~entries~0~dependencies~3~module~parser",
                "generator": "~entries~0~dependencies~3~module~generator",
                "resource": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/src/lazy-module.js",
                "loaders": [],
                "error": null,
                "_buildHash": "966b554a9a57aef351eeae45eec44fa6",
                "buildTimestamp": 1535187134061,
                "_cachedSources": {},
                "lineToLine": false,
                "_lastSuccessfulBuildMeta": "~entries~0~blocks~0~dependencies~0~module~buildMeta",
                "_ast": null
              },
              "weak": false,
              "optional": false,
              "loc": {
                "start": {
                  "line": 3,
                  "column": 28
                },
                "end": {
                  "line": 3,
                  "column": 51
                }
              },
              "request": "./lazy-module",
              "userRequest": "./lazy-module",
              "originModule": "~entries~0",
              "block": "~entries~0~blocks~0"
            }
          ],
          "blocks": [],
          "variables": [],
          "groupOptions": {
            "name": null
          },
          "chunkGroup": {
            "groupDebugId": 5001,
            "options": "~entries~0~blocks~0~groupOptions",
            "_children": {
              "_lastActiveSortFn": null
            },
            "_parents": {
              "_lastActiveSortFn": null
            },
            "_blocks": {
              "_lastActiveSortFn": null
            },
            "chunks": [
              {
                "id": 0,
                "ids": [
                  0
                ],
                "debugId": 1001,
                "name": null,
                "preventIntegration": false,
                "_modules": {
                  "_lastActiveSortFn": null,
                  "_cache": {}
                },
                "_groups": {
                  "_lastActiveSortFn": null
                },
                "files": [
                  "0.chunk.js"
                ],
                "rendered": true,
                "hash": "77a012918ad1a10d59eabcb3e3cf1b77",
                "contentHash": {
                  "javascript": "5ab9ca480672c0cf5287"
                },
                "renderedHash": "77a012918ad1a10d59ea",
                "extraAsync": false
              }
            ],
            "origins": [
              {
                "module": "~entries~0",
                "loc": "~entries~0~blocks~0~dependencies~0~loc",
                "request": "./lazy-module"
              }
            ],
            "_moduleIndicies": {},
            "_moduleIndicies2": {}
          },
          "module": "~entries~0",
          "loc": "~entries~0~blocks~0~dependencies~0~loc",
          "request": "./lazy-module",
          "parent": "~entries~0",
          "range": [
            74,
            97
          ]
        }
      ],
      "variables": [],
      "type": "javascript/auto",
      "context": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/src",
      "debugId": 1000,
      "hash": "a0cd7b958587bc833ee4f96c320b23d5",
      "renderedHash": "a0cd7b958587bc833ee4",
      "resolveOptions": "~compiler~options~module~defaultRules~0~resolve",
      "factoryMeta": {},
      "warnings": [],
      "errors": [],
      "buildMeta": {
        "exportsType": "namespace",
        "providedExports": []
      },
      "buildInfo": {
        "cacheable": true,
        "fileDependencies": {},
        "contextDependencies": {},
        "strict": true,
        "exportsArgument": "__webpack_exports__"
      },
      "reasons": [
        {
          "module": null,
          "dependency": {
            "module": "~entries~0",
            "weak": false,
            "optional": false,
            "loc": {
              "name": "main"
            },
            "request": "./src/index.js",
            "userRequest": "./src/index.js"
          },
          "_chunks": null
        }
      ],
      "_chunks": {
        "_lastActiveSortFn": null
      },
      "id": "./src/index.js",
      "index": 0,
      "index2": 1,
      "depth": 0,
      "issuer": null,
      "prefetched": false,
      "built": true,
      "used": null,
      "usedExports": null,
      "optimizationBailout": [],
      "useSourceMap": false,
      "_source": {
        "_value": "import esmModule from './static-esm-module';\n\nconst getLazyModule = () => import('./lazy-module');\n\nsetTimeout(() => {\n  getLazyModule.then((modDefault) => {\n    console.log(modDefault);\n  });\n}, 300);\n\nconsole.log(esmModule);\n",
        "_name": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/src/index.js"
      },
      "request": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/src/index.js",
      "userRequest": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/src/index.js",
      "rawRequest": "./src/index.js",
      "binary": false,
      "parser": "~entries~0~dependencies~3~module~parser",
      "generator": "~entries~0~dependencies~3~module~generator",
      "resource": "/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/src/index.js",
      "loaders": [],
      "error": null,
      "_buildHash": "684ac24fd2da311d8702f0f5333fa821",
      "buildTimestamp": 1535187134022,
      "_cachedSources": {},
      "lineToLine": false,
      "_lastSuccessfulBuildMeta": "~entries~0~buildMeta",
      "_ast": null
    }
  ],
  "_preparedEntrypoints": [
    {
      "name": "main",
      "request": "./src/index.js",
      "module": "~entries~0"
    }
  ],
  "entrypoints": {},
  "chunks": [
    {
      "id": "main",
      "ids": [
        "main"
      ],
      "debugId": 1000,
      "name": "main",
      "preventIntegration": false,
      "entryModule": "~entries~0",
      "_modules": {
        "_cache": {}
      },
      "_groups": {
        "_lastActiveSortFn": null
      },
      "files": [
        "main.chunk.js"
      ],
      "rendered": true,
      "hash": "9886ba1a0d9653e0050930af916315b7",
      "contentHash": {
        "javascript": "497125b6eefcc5b5f488"
      },
      "renderedHash": "9886ba1a0d9653e00509",
      "extraAsync": false
    },
    "~entries~0~blocks~0~chunkGroup~chunks~0"
  ],
  "chunkGroups": [
    {
      "groupDebugId": 5000,
      "options": {
        "name": "main"
      },
      "_children": {
        "_lastActiveSortFn": null
      },
      "_parents": {
        "_lastActiveSortFn": null
      },
      "_blocks": {
        "_lastActiveSortFn": null
      },
      "chunks": [
        "~chunks~0"
      ],
      "origins": [
        {
          "module": null,
          "loc": "main",
          "request": "./src/index.js"
        }
      ],
      "_moduleIndicies": {},
      "_moduleIndicies2": {},
      "runtimeChunk": "~chunks~0"
    },
    "~entries~0~blocks~0~chunkGroup"
  ],
  "namedChunkGroups": {},
  "namedChunks": {},
  "modules": [
    "~entries~0",
    "~entries~0~blocks~0~dependencies~0~module",
    "~entries~0~dependencies~3~module"
  ],
  "_modules": {},
  "cache": {
    "m/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/src/index.js": "~entries~0",
    "m/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/src/static-esm-module.js": "~entries~0~dependencies~3~module",
    "m/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple/src/lazy-module.js": "~entries~0~blocks~0~dependencies~0~module",
    "chunkmain": {
      "hash": "9886ba1a0d9653e0050930af916315b7",
      "source": {
        "_source": {
          "children": [
            "/******/ (function(modules) { // webpackBootstrap\n",
            {
              "_source": {
                "_value": " \t// install a JSONP callback for chunk loading\n \tfunction webpackJsonpCallback(data) {\n \t\tvar chunkIds = data[0];\n \t\tvar moreModules = data[1];\n\n\n \t\t// add \"moreModules\" to the modules object,\n \t\t// then flag all \"chunkIds\" as loaded and fire callback\n \t\tvar moduleId, chunkId, i = 0, resolves = [];\n \t\tfor(;i < chunkIds.length; i++) {\n \t\t\tchunkId = chunkIds[i];\n \t\t\tif(installedChunks[chunkId]) {\n \t\t\t\tresolves.push(installedChunks[chunkId][0]);\n \t\t\t}\n \t\t\tinstalledChunks[chunkId] = 0;\n \t\t}\n \t\tfor(moduleId in moreModules) {\n \t\t\tif(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {\n \t\t\t\tmodules[moduleId] = moreModules[moduleId];\n \t\t\t}\n \t\t}\n \t\tif(parentJsonpFunction) parentJsonpFunction(data);\n\n \t\twhile(resolves.length) {\n \t\t\tresolves.shift()();\n \t\t}\n\n \t};\n\n\n \t// The module cache\n \tvar installedModules = {};\n\n \t// object to store loaded and loading chunks\n \t// undefined = chunk not loaded, null = chunk preloaded/prefetched\n \t// Promise = chunk loading, 0 = chunk loaded\n \tvar installedChunks = {\n \t\t\"main\": 0\n \t};\n\n\n\n \t// script path function\n \tfunction jsonpScriptSrc(chunkId) {\n \t\treturn __webpack_require__.p + \"\" + ({}[chunkId]||chunkId) + \".chunk.js\"\n \t}\n\n \t// The require function\n \tfunction __webpack_require__(moduleId) {\n\n \t\t// Check if module is in cache\n \t\tif(installedModules[moduleId]) {\n \t\t\treturn installedModules[moduleId].exports;\n \t\t}\n \t\t// Create a new module (and put it into the cache)\n \t\tvar module = installedModules[moduleId] = {\n \t\t\ti: moduleId,\n \t\t\tl: false,\n \t\t\texports: {}\n \t\t};\n\n \t\t// Execute the module function\n \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n\n \t\t// Flag the module as loaded\n \t\tmodule.l = true;\n\n \t\t// Return the exports of the module\n \t\treturn module.exports;\n \t}\n\n \t// This file contains only the entry chunk.\n \t// The chunk loading function for additional chunks\n \t__webpack_require__.e = function requireEnsure(chunkId) {\n \t\tvar promises = [];\n\n\n \t\t// JSONP chunk loading for javascript\n\n \t\tvar installedChunkData = installedChunks[chunkId];\n \t\tif(installedChunkData !== 0) { // 0 means \"already installed\".\n\n \t\t\t// a Promise means \"currently loading\".\n \t\t\tif(installedChunkData) {\n \t\t\t\tpromises.push(installedChunkData[2]);\n \t\t\t} else {\n \t\t\t\t// setup Promise in chunk cache\n \t\t\t\tvar promise = new Promise(function(resolve, reject) {\n \t\t\t\t\tinstalledChunkData = installedChunks[chunkId] = [resolve, reject];\n \t\t\t\t});\n \t\t\t\tpromises.push(installedChunkData[2] = promise);\n\n \t\t\t\t// start chunk loading\n \t\t\t\tvar head = document.getElementsByTagName('head')[0];\n \t\t\t\tvar script = document.createElement('script');\n \t\t\t\tvar onScriptComplete;\n\n \t\t\t\tscript.charset = 'utf-8';\n \t\t\t\tscript.timeout = 120;\n \t\t\t\tif (__webpack_require__.nc) {\n \t\t\t\t\tscript.setAttribute(\"nonce\", __webpack_require__.nc);\n \t\t\t\t}\n \t\t\t\tscript.src = jsonpScriptSrc(chunkId);\n\n \t\t\t\tonScriptComplete = function (event) {\n \t\t\t\t\t// avoid mem leaks in IE.\n \t\t\t\t\tscript.onerror = script.onload = null;\n \t\t\t\t\tclearTimeout(timeout);\n \t\t\t\t\tvar chunk = installedChunks[chunkId];\n \t\t\t\t\tif(chunk !== 0) {\n \t\t\t\t\t\tif(chunk) {\n \t\t\t\t\t\t\tvar errorType = event && (event.type === 'load' ? 'missing' : event.type);\n \t\t\t\t\t\t\tvar realSrc = event && event.target && event.target.src;\n \t\t\t\t\t\t\tvar error = new Error('Loading chunk ' + chunkId + ' failed.\\n(' + errorType + ': ' + realSrc + ')');\n \t\t\t\t\t\t\terror.type = errorType;\n \t\t\t\t\t\t\terror.request = realSrc;\n \t\t\t\t\t\t\tchunk[1](error);\n \t\t\t\t\t\t}\n \t\t\t\t\t\tinstalledChunks[chunkId] = undefined;\n \t\t\t\t\t}\n \t\t\t\t};\n \t\t\t\tvar timeout = setTimeout(function(){\n \t\t\t\t\tonScriptComplete({ type: 'timeout', target: script });\n \t\t\t\t}, 120000);\n \t\t\t\tscript.onerror = script.onload = onScriptComplete;\n \t\t\t\thead.appendChild(script);\n \t\t\t}\n \t\t}\n \t\treturn Promise.all(promises);\n \t};\n\n \t// expose the modules object (__webpack_modules__)\n \t__webpack_require__.m = modules;\n\n \t// expose the module cache\n \t__webpack_require__.c = installedModules;\n\n \t// define getter function for harmony exports\n \t__webpack_require__.d = function(exports, name, getter) {\n \t\tif(!__webpack_require__.o(exports, name)) {\n \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n \t\t}\n \t};\n\n \t// define __esModule on exports\n \t__webpack_require__.r = function(exports) {\n \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n \t\t}\n \t\tObject.defineProperty(exports, '__esModule', { value: true });\n \t};\n\n \t// create a fake namespace object\n \t// mode & 1: value is a module id, require it\n \t// mode & 2: merge all properties of value into the ns\n \t// mode & 4: return value when already ns object\n \t// mode & 8|1: behave like require\n \t__webpack_require__.t = function(value, mode) {\n \t\tif(mode & 1) value = __webpack_require__(value);\n \t\tif(mode & 8) return value;\n \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n \t\tvar ns = Object.create(null);\n \t\t__webpack_require__.r(ns);\n \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n \t\treturn ns;\n \t};\n\n \t// getDefaultExport function for compatibility with non-harmony modules\n \t__webpack_require__.n = function(module) {\n \t\tvar getter = module && module.__esModule ?\n \t\t\tfunction getDefault() { return module['default']; } :\n \t\t\tfunction getModuleExports() { return module; };\n \t\t__webpack_require__.d(getter, 'a', getter);\n \t\treturn getter;\n \t};\n\n \t// Object.prototype.hasOwnProperty.call\n \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n\n \t// __webpack_public_path__\n \t__webpack_require__.p = \"\";\n\n \t// on error function for async loading\n \t__webpack_require__.oe = function(err) { console.error(err); throw err; };\n\n \tvar jsonpArray = window[\"webpackJsonp\"] = window[\"webpackJsonp\"] || [];\n \tvar oldJsonpFunction = jsonpArray.push.bind(jsonpArray);\n \tjsonpArray.push = webpackJsonpCallback;\n \tjsonpArray = jsonpArray.slice();\n \tfor(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);\n \tvar parentJsonpFunction = oldJsonpFunction;\n\n\n \t// Load entry module and return exports\n \treturn __webpack_require__(__webpack_require__.s = \"./src/index.js\");\n",
                "_name": "webpack/bootstrap"
              },
              "_prefix": "/******/"
            },
            "/******/ })\n",
            "/************************************************************************/\n",
            "/******/ (",
            "{\n",
            "\n/***/ \"./src/index.js\":\n",
            "/*!**********************!*\\\n",
            "  !*** ./src/index.js ***!\n",
            "  \\**********************/\n",
            "/*! no exports provided */\n",
            "/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n",
            "\"use strict\";\n",
            {
              "_value": "eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony import */ var _static_esm_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static-esm-module */ \\\"./src/static-esm-module.js\\\");\\n\\n\\nconst getLazyModule = () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./lazy-module */ \\\"./src/lazy-module.js\\\"));\\n\\nsetTimeout(() => {\\n  getLazyModule.then((modDefault) => {\\n    console.log(modDefault);\\n  });\\n}, 300);\\n\\nconsole.log(_static_esm_module__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"]);\\n\\n\\n//# sourceURL=webpack:///./src/index.js?\");"
            },
            "\n\n/***/ })",
            ",\n",
            "\n/***/ \"./src/static-esm-module.js\":\n",
            "/*!**********************************!*\\\n",
            "  !*** ./src/static-esm-module.js ***!\n",
            "  \\**********************************/\n",
            "/*! exports provided: default */\n",
            "/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n",
            "\"use strict\";\n",
            {
              "_value": "eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony default export */ __webpack_exports__[\\\"default\\\"] = ('foo');\\n\\n\\n//# sourceURL=webpack:///./src/static-esm-module.js?\");"
            },
            "\n\n/***/ })",
            "\n\n/******/ }",
            ")",
            ";"
          ]
        },
        "_cachedMaps": {}
      }
    },
    "chunk0": {
      "hash": "77a012918ad1a10d59eabcb3e3cf1b77",
      "source": {
        "_source": {
          "children": [
            "(window[\"webpackJsonp\"] = window[\"webpackJsonp\"] || []).push([[0],",
            "{\n",
            "\n/***/ \"./src/lazy-module.js\":\n",
            "/*!****************************!*\\\n",
            "  !*** ./src/lazy-module.js ***!\n",
            "  \\****************************/\n",
            "/*! exports provided: default */\n",
            "/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n",
            "\"use strict\";\n",
            {
              "_value": "eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony default export */ __webpack_exports__[\\\"default\\\"] = ('lazy');\\n\\n\\n//# sourceURL=webpack:///./src/lazy-module.js?\");"
            },
            "\n\n/***/ })",
            "\n\n}",
            "])",
            ";"
          ]
        },
        "_cachedMaps": {}
      }
    }
  },
  "records": "~compiler~records",
  "additionalChunkAssets": [],
  "assets": {
    "main.chunk.js": "~cache~chunkmain~source",
    "0.chunk.js": "~cache~chunk0~source"
  },
  "errors": [],
  "warnings": [],
  "children": [],
  "dependencyFactories": {},
  "dependencyTemplates": {},
  "childrenCounters": {},
  "usedChunkIds": null,
  "usedModuleIds": null,
  "fileTimestamps": "~compiler~fileTimestamps",
  "contextTimestamps": "~compiler~contextTimestamps",
  "compilationDependencies": {},
  "_buildingModules": {},
  "_rebuildingModules": {},
  "fullHash": "98f9ba480da2363d037c696118e60991",
  "hash": "98f9ba480da2363d037c",
  "fileDependencies": "~compiler~_lastCompilationFileDependencies",
  "contextDependencies": "~compiler~_lastCompilationContextDependencies",
  "missingDependencies": {
    "_lastActiveSortFn": null
  }
}