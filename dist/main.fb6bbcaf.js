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
})({"js/main.js":[function(require,module,exports) {
var menuToggle = document.querySelector('.menu_toggle');
menuToggle.onclick = function () {
  var navigation = document.querySelector('.navigation');
  var main = document.querySelector('.main');
  // let video_lyrics = document.querySelector('.video_lyrics');
  // let tags = document.querySelector('.tags');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
  main.classList.toggle('active');
  // video_lyrics.classList.toggle('active');
  // tags.classList.toggle('active');
  if ($('.navigation.active')) {
    $('.statistics').slideToggle();
    $('.info').slideToggle();
  }
};
var video_title = document.querySelector('.video_title');
var isOne = false;
menuToggle.addEventListener('click', function () {
  isOne = !isOne;
  if (isOne) {
    video_title.classList.add('one_line');
  } else {
    video_title.classList.remove('one_line');
  }
});

/* 하나 클릭시 하나의 div만 작동되게 */
var arrowDirection = false;
var hideDiv = false;
function hideList(id) {
  var list = document.getElementById(id);
  hideDiv = !hideDiv;
  if (hideDiv) {
    list.classList.add('hide');
  } else {
    list.classList.remove('hide');
  }
}
function arrowChange(id) {
  var arrow = document.getElementById(id);
  arrowDirection = !arrowDirection;
  if (arrowDirection) {
    arrow.classList.add('arrow_change');
  } else {
    arrow.classList.remove('arrow_change');
  }
}
var today = new Date();
var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var day = ('0' + today.getDate()).slice(-2);
var todayFormat = year + '-' + month + '-' + day;
var getDateDiff = function getDateDiff(d1, d2) {
  var date1 = new Date(d1);
  var date2 = new Date(d2);
  var diffDate = date1.getTime() - date2.getTime();
  return Math.abs(diffDate / (1000 * 60 * 60 * 24));
};
// const fromDoorStepping = getDateDiff(todayFormat, "2022-07-25");
var inauguration = getDateDiff(todayFormat, "2022-05-10") + 1;
var resignation = getDateDiff(todayFormat, "2027-05-09") - 1;
// document.getElementById("date").innerHTML = "7월 25일, " + fromDoorStepping + "일 전";
document.getElementById("inauguration").innerHTML = "취임 D+" + inauguration;
document.getElementById("resignation").innerHTML = "퇴임까지 D-" + resignation;
document.getElementById("today").innerHTML = month + "월 " + day + "일";

// Swiper
new Swiper('.today_section .swiper', {
  direction: 'vertical',
  autoplay: {
    delay: 5000
  },
  loop: true
});

// change screen
var playlist_btn = document.querySelector('.playlist');
var fulltext_btn = document.querySelector('.fulltext');
var statistics_btn = document.querySelector('.stats');
var info_btn = document.querySelector('.playList_Menu .information');
var Playlist = document.querySelector('#Playlist');
var Fulltext = document.querySelector('#Fulltext');
var Statistics = document.querySelector('#Statistics');
var Info = document.querySelector('#Info');
function moveto_playlist() {
  Playlist.style.display = "flex";
  Fulltext.style.display = "none";
  Statistics.style.display = "none";
  Info.style.display = "none";
  document.querySelector('.playList_Menu nav a:nth-child(1)').style.color = "#9f2f34";
  $('.playList_Menu nav a:nth-child(1)').css('font-weight', 'bold');
  document.querySelector('.playList_Menu nav a:nth-child(2)').style.color = "black";
  $('.playList_Menu nav a:nth-child(2)').css('font-weight', 'normal');
  document.querySelector('.playList_Menu nav a:nth-child(3)').style.color = "black";
  $('.playList_Menu nav a:nth-child(3)').css('font-weight', 'normal');
  document.querySelector('.playList_Menu nav a:nth-child(4)').style.color = "black";
  $('.playList_Menu nav a:nth-child(4)').css('font-weight', 'normal');
}
function moveto_fulltext() {
  Playlist.style.display = "none";
  Fulltext.style.display = "flex";
  Statistics.style.display = "none";
  Info.style.display = "none";
  document.querySelector('.playList_Menu nav a:nth-child(1)').style.color = "black";
  $('.playList_Menu nav a:nth-child(1)').css('font-weight', 'normal');
  document.querySelector('.playList_Menu nav a:nth-child(2)').style.color = "#9f2f34";
  $('.playList_Menu nav a:nth-child(2)').css('font-weight', 'bold');
  document.querySelector('.playList_Menu nav a:nth-child(3)').style.color = "black";
  $('.playList_Menu nav a:nth-child(3)').css('font-weight', 'normal');
  document.querySelector('.playList_Menu nav a:nth-child(4)').style.color = "black";
  $('.playList_Menu nav a:nth-child(4)').css('font-weight', 'normal');
}
function moveto_statistics() {
  Playlist.style.display = "none";
  Fulltext.style.display = "none";
  Statistics.style.display = "flex";
  Info.style.display = "none";
  document.querySelector('.playList_Menu nav a:nth-child(1)').style.color = "black";
  $('.playList_Menu nav a:nth-child(1)').css('font-weight', 'normal');
  document.querySelector('.playList_Menu nav a:nth-child(2)').style.color = "black";
  $('.playList_Menu nav a:nth-child(2)').css('font-weight', 'normal');
  document.querySelector('.playList_Menu nav a:nth-child(3)').style.color = "#9f2f34";
  $('.playList_Menu nav a:nth-child(3)').css('font-weight', 'bold');
  document.querySelector('.playList_Menu nav a:nth-child(4)').style.color = "black";
  $('.playList_Menu nav a:nth-child(4)').css('font-weight', 'normal');
}
function moveto_info() {
  Playlist.style.display = "none";
  Fulltext.style.display = "none";
  Statistics.style.display = "none";
  Info.style.display = "flex";
  document.querySelector('.playList_Menu nav a:nth-child(1)').style.color = "black";
  $('.playList_Menu nav a:nth-child(1)').css('font-weight', 'normal');
  document.querySelector('.playList_Menu nav a:nth-child(2)').style.color = "black";
  $('.playList_Menu nav a:nth-child(2)').css('font-weight', 'normal');
  document.querySelector('.playList_Menu nav a:nth-child(3)').style.color = "black";
  $('.playList_Menu nav a:nth-child(3)').css('font-weight', 'normal');
  document.querySelector('.playList_Menu nav a:nth-child(4)').style.color = "#9f2f34";
  $('.playList_Menu nav a:nth-child(4)').css('font-weight', 'bold');
}
playlist_btn.onclick = function () {
  moveto_playlist();
};
fulltext_btn.onclick = function () {
  moveto_fulltext();
};
statistics_btn.onclick = function () {
  moveto_statistics();
};
info_btn.onclick = function () {
  moveto_info();
};
var home = document.querySelector('.home');
home.onclick = function () {
  moveto_playlist();
};
var look_lyrics = document.querySelector('.look_lyrics');
look_lyrics.onclick = function () {
  moveto_fulltext();
};
var statistics = document.querySelector('.statistics');
statistics.onclick = function () {
  moveto_statistics();
};
var info = document.querySelector('.info');
info.onclick = function () {
  moveto_info();
};
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54000" + '/');
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
      });

      // Enable HMR for CSS by default.
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map