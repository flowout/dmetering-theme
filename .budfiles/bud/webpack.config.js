module.exports = {
  "entry": {
    "app": {
      "import": [
        "@scripts/app",
        "@styles/app"
      ]
    },
    "editor": {
      "import": [
        "@scripts/editor",
        "@styles/editor"
      ]
    }
  },
  "bail": true,
  "cache": {
    "name": "bud.production",
    "type": "filesystem",
    "version": "0ma8mgqlpcarfy7jy7bdtmmbh4m_",
    "cacheDirectory": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/.budfiles/cache/webpack",
    "managedPaths": [
      "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules"
    ],
    "buildDependencies": {
      "bud": [
        "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/package.json",
        "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/bud.config.js",
        "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/composer.json",
        "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/jsconfig.json",
        "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/package-lock.json",
        "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/theme.json"
      ]
    }
  },
  "context": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme",
  "infrastructureLogging": {
    "console": {
      "Console": {}
    },
    "level": "none"
  },
  "mode": "production",
  "module": {
    "noParse": {},
    "rules": [
      {
        "test": {},
        "exclude": [
          {}
        ],
        "parser": {
          "requireEnsure": false
        }
      },
      {
        "oneOf": [
          {
            "test": {},
            "include": [
              "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/resources"
            ],
            "use": [
              {
                "loader": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/babel-loader/lib/index.js",
                "options": {
                  "cacheDirectory": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/.budfiles/cache/babel",
                  "presets": [
                    [
                      "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/@babel/preset-env/lib/index.js"
                    ],
                    [
                      "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/@babel/preset-react/lib/index.js"
                    ]
                  ],
                  "plugins": [
                    [
                      "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/@babel/plugin-transform-runtime/lib/index.js",
                      {
                        "helpers": false
                      }
                    ],
                    [
                      "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/@babel/plugin-proposal-object-rest-spread/lib/index.js"
                    ],
                    [
                      "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js"
                    ],
                    [
                      "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/@babel/plugin-proposal-class-properties/lib/index.js"
                    ]
                  ],
                  "env": {
                    "development": {
                      "compact": false
                    }
                  },
                  "root": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme"
                }
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/resources"
            ],
            "use": [
              {
                "loader": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/mini-css-extract-plugin/dist/loader.js"
              },
              {
                "loader": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 1,
                  "sourceMap": false
                }
              },
              {
                "loader": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/postcss-loader/dist/cjs.js",
                "options": {
                  "postcssOptions": {
                    "syntax": "postcss-scss",
                    "plugins": [
                      [
                        "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/postcss-import/index.js"
                      ],
                      [
                        "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/postcss-nested/index.js"
                      ],
                      [
                        "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/postcss-preset-env/dist/index.cjs",
                        {
                          "stage": 1,
                          "features": {
                            "focus-within-pseudo-class": false
                          }
                        }
                      ]
                    ]
                  },
                  "sourceMap": true
                }
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/resources"
            ],
            "use": [
              {
                "loader": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/mini-css-extract-plugin/dist/loader.js"
              },
              {
                "loader": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 1,
                  "localIdentName": "[name]__[local]___[hash:base64:5]",
                  "modules": true,
                  "sourceMap": false
                }
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/resources"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/resources"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/resources"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/resources"
            ],
            "type": "asset",
            "generator": {
              "filename": "fonts/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme"
            ],
            "exclude": [
              "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules"
            ],
            "type": "json",
            "parser": {}
          },
          {
            "test": {},
            "include": [
              "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme"
            ],
            "exclude": [
              "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules"
            ],
            "use": [
              {
                "loader": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/js-yaml-loader/index.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme"
            ],
            "exclude": [
              "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules"
            ],
            "use": [
              {
                "loader": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/html-loader/dist/cjs.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme"
            ],
            "exclude": [
              "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules"
            ],
            "use": [
              {
                "loader": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/csv-loader/index.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme"
            ],
            "exclude": [
              "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules"
            ],
            "use": [
              {
                "loader": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/xml-loader/index.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme"
            ],
            "exclude": [
              "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules"
            ],
            "type": "json",
            "parser": {}
          },
          {
            "test": {},
            "include": [
              "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/resources"
            ],
            "use": [
              {
                "loader": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/mini-css-extract-plugin/dist/loader.js"
              },
              {
                "loader": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 1,
                  "sourceMap": false
                }
              },
              {
                "loader": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/postcss-loader/dist/cjs.js",
                "options": {
                  "postcssOptions": {
                    "syntax": "postcss-scss",
                    "plugins": [
                      [
                        "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/postcss-import/index.js"
                      ],
                      [
                        "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/postcss-nested/index.js"
                      ],
                      [
                        "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/postcss-preset-env/dist/index.cjs",
                        {
                          "stage": 1,
                          "features": {
                            "focus-within-pseudo-class": false
                          }
                        }
                      ]
                    ]
                  },
                  "sourceMap": true
                }
              },
              {
                "loader": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/resolve-url-loader/index.js",
                "options": {
                  "root": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/resources",
                  "sourceMap": false
                }
              },
              {
                "loader": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/node_modules/sass-loader/dist/cjs.js",
                "options": {
                  "implementation": {
                    "sassNull": {},
                    "sassTrue": {
                      "value": true
                    },
                    "sassFalse": {
                      "value": false
                    },
                    "Logger": {
                      "silent": {}
                    },
                    "info": "dart-sass\t1.52.1\t(Sass Compiler)\t[Dart]\ndart2js\t2.17.1\t(Dart Compiler)\t[Dart]",
                    "types": {},
                    "NULL": {},
                    "TRUE": {
                      "value": true
                    },
                    "FALSE": {
                      "value": false
                    },
                    "default": {
                      "sassNull": {},
                      "sassTrue": {
                        "value": true
                      },
                      "sassFalse": {
                        "value": false
                      },
                      "Logger": {
                        "silent": {}
                      },
                      "info": "dart-sass\t1.52.1\t(Sass Compiler)\t[Dart]\ndart2js\t2.17.1\t(Dart Compiler)\t[Dart]",
                      "types": {},
                      "NULL": {},
                      "TRUE": {
                        "value": true
                      },
                      "FALSE": {
                        "value": false
                      }
                    }
                  },
                  "sourceMap": true
                }
              }
            ]
          }
        ]
      }
    ],
    "unsafeCache": false
  },
  "name": "bud",
  "node": false,
  "output": {
    "assetModuleFilename": "[name].[contenthash:6][ext]",
    "chunkFilename": "[name].[contenthash:6].js",
    "filename": "[name].[contenthash:6].js",
    "path": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/public",
    "pathinfo": false,
    "publicPath": ""
  },
  "optimization": {
    "emitOnErrors": false,
    "minimize": true,
    "minimizer": [
      "...",
      {
        "options": {
          "test": {},
          "parallel": true,
          "minimizer": {
            "options": {
              "preset": [
                "default",
                {
                  "discardComments": {
                    "removeAll": true
                  }
                }
              ]
            }
          }
        }
      }
    ],
    "runtimeChunk": "single",
    "splitChunks": {
      "cacheGroups": {
        "bud": {
          "chunks": "all",
          "test": {},
          "reuseExistingChunk": true,
          "priority": -10
        },
        "vendor": {
          "chunks": "all",
          "test": {},
          "reuseExistingChunk": true,
          "priority": -20
        }
      }
    }
  },
  "parallelism": 70,
  "performance": {
    "hints": false
  },
  "recordsPath": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/.budfiles/bud/modules.json",
  "stats": {
    "preset": "errors-warnings"
  },
  "target": "browserslist:/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/package.json",
  "plugins": [
    {
      "definitions": {
        "jQuery": "jquery",
        "$": "jquery"
      }
    },
    {
      "patterns": [
        {
          "from": "images",
          "to": "[name].[contenthash:6][ext]",
          "context": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/resources",
          "noErrorOnMissing": true
        }
      ],
      "options": {}
    },
    {
      "options": {
        "assetHookStage": null,
        "basePath": "",
        "fileName": "manifest.json",
        "filter": null,
        "map": null,
        "publicPath": "",
        "removeKeyHash": {},
        "sort": null,
        "transformExtensions": {},
        "useEntryKeys": false,
        "useLegacyEmit": false,
        "writeToFileEmit": true
      }
    },
    {
      "_sortedModulesCache": {},
      "options": {
        "filename": "[name].[contenthash:6].css",
        "ignoreOrder": false,
        "runtime": true,
        "chunkFilename": "[name].[contenthash:6].css"
      },
      "runtimeOptions": {
        "linkType": "text/css"
      }
    },
    {
      "options": {
        "enabled": true,
        "verbose": false,
        "extensions": {},
        "ignore": [],
        "remove": {}
      },
      "enabled": true,
      "verbose": false
    },
    {
      "options": {
        "emitHtml": false,
        "publicPath": ""
      },
      "plugin": {
        "name": "EntrypointsManifestPlugin",
        "stage": null
      },
      "name": "entrypoints.json"
    },
    {
      "name": "WordPressExternalsWebpackPlugin",
      "stage": null,
      "externals": {
        "type": "window"
      }
    },
    {
      "plugin": {
        "name": "WordPressDependenciesWebpackPlugin",
        "stage": null
      },
      "manifest": {},
      "usedDependencies": {},
      "fileName": "wordpress.json"
    },
    {
      "plugin": {
        "name": "MergedManifestPlugin"
      },
      "file": "entrypoints.json",
      "entrypointsName": "entrypoints.json",
      "wordpressName": "wordpress.json"
    }
  ],
  "resolve": {
    "alias": {
      "@src": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/resources",
      "@dist": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/public",
      "@fonts": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/resources/fonts",
      "@images": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/resources/images",
      "@scripts": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/resources/scripts",
      "@styles": "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/resources/styles"
    },
    "extensions": [
      ".mjs",
      ".cjs",
      ".js",
      ".jsx",
      ".css",
      ".json",
      ".wasm",
      ".yml",
      ".toml",
      ".scss",
      ".sass"
    ],
    "modules": [
      "/Applications/MAMP/htdocs/dmetering/wp-content/themes/dmetering-theme/resources",
      "node_modules"
    ]
  }
}