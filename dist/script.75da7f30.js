// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"script.js":[function(require,module,exports) {
(function ($) {
  $(document).ready(function () {
    $(window).load(function () {
      var cars = ['S500 Cabriolet AMG', 'Cayenne 400', 'GLC 250D 4MATIC', 'CLA SB Standard'],
          counter = 0;
      $("body").on('click', '#choose_1', function (event) {
        counter = 0;
        $('.col_img').empty();
        $('.col_img').append('<img src="https://testdrive.andersenlab.com/img/1493300397-Mercedes-S500-Cabriolet-AMG.png" class="img-fluid">');
        $('.headline_start').empty();
        $('.headline_start').append('<a href="#" id="go_to_step_2">Продолжить</a>');
      });
      $("body").on('click', '#choose_2', function (event) {
        counter = 1;
        $('.col_img').empty();
        $('.col_img').append('<img src="https://testdrive.andersenlab.com/img/mercedes-2015-cayenne-400.png" class="img-fluid">');
        $('.headline_start').empty();
        $('.headline_start').append('<a href="#" id="go_to_step_2">Продолжить</a>');
      });
      $("body").on('click', '#choose_3', function (event) {
        counter = 2;
        $('.col_img').empty();
        $('.col_img').append('<img src="https://testdrive.andersenlab.com/img/1486985670-Large-Mercedes-GLC-250d-4MATIC-AMGline-auto.png" class="img-fluid">');
        $('.headline_start').empty();
        $('.headline_start').append('<a href="#" id="go_to_step_2">Продолжить</a>');
      });
      $("body").on('click', '#choose_4', function (event) {
        counter = 3;
        $('.col_img').empty();
        $('.col_img').append('<img src="https://testdrive.andersenlab.com/img/cla_sb_standard-cirrushvid.png" class="img-fluid">');
        $('.headline_start').empty();
        $('.headline_start').append('<a href="#" id="go_to_step_2">Продолжить</a>');
      });
      $("body").on('click', '#go_to_step_2', function (event) {
        event.preventDefault();
        $('#title').html('<span class="number">2</span> Технические характеристики ' + cars[counter]);
        $('#step_1').fadeOut(0);
        $('#step_2').fadeIn(500);

        switch (counter) {
          case 0:
            $('#engine').html('<option>Бензиновый 3.0</option><option>Бензиновый 3.5</option>');
            $('#transmission').html('<option>Автоматическая</option>');
            break;

          case 1:
            $('#engine').html('<option>Бензиновый 1.9</option><option>Дизельный 1.3</option>');
            $('#transmission').html('<option>Автоматическая</option><option>Механическая</option>');
            break;

          case 2:
            $('#engine').html('<option>Бензиновый 2.2</option><option>Бензиновый 2.5</option><option>Дизельный 1.9</option><option>OutOfMemoryError</option>');
            $('#transmission').html('<option>Автоматическая</option><option>Механическая</option>');
            break;

          case 3:
            $('#engine').html('<option>Бензиновый 2.0</option><option>Дизельный 2.0</option>');
            $('#transmission').html('<option>Автоматическая</option><option>Механическая</option>');
            break;
        }
      });
      $("body").on('click', '#go_to_step_3', function (event) {
        event.preventDefault();
        $('#title').html('<span class="number">4</span> Контактные данные');
        $('#step_2').fadeOut(0);
        $('#step_3').fadeIn(500);
        $('#step_4_car').text(cars[counter]);
        var transmission = $("#transmission option:selected").text();
        var engine = $("#engine option:selected").text();

        if (engine === 'OutOfMemoryError') {
          engine = '{transmission}';
        }

        $('#step_4_equipment').text('Двигатель ' + engine + ', ' + transmission + ' трансмиссия');
      });
      var firstName, lastName, middleName, age, phone;
      $("body").on('click', '#go_to_step_4', function (event) {
        event.preventDefault();
        $('#title').html('<span class="number">5</span> Подтверждение данных');
        $('#step_3').fadeOut(0);
        $('#step_4').fadeIn(500);
        firstName = $("#form_first_name").val();
        lastName = $("#form_last_name").val();
        middleName = $("#form_middle_name").val();
        age = $("#form_age").val();
        phone = $("#form_phone").val();
        firstName = firstName === '' ? '{firstName}' : firstName;
        lastName = lastName === '' ? '{lastName}' : lastName;
        middleName = middleName === '' ? '{middleName}' : middleName;
        age = age === '' ? '{age}' : age;
        phone = phone === '' ? '{phone}' : phone;
        $('#step_4_name').text(lastName + ' ' + firstName + ' ' + middleName);
        $('#step_4_age').text(age);
        $('#step_4_phone').text(phone);
      });
      $("body").on('click', '#finish', function (event) {
        event.preventDefault();
        $('#title').html('Благодарим за запись на тест драйв!');
        $('#step_4').fadeOut(0);
        $('#step_5').fadeIn(500);
      });
    });
  });
})(jQuery);
},{}],"C:/Users/malch/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59605" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/malch/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map