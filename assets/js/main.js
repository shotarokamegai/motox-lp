/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Util)
/* harmony export */ });
/* harmony import */ var _BrowserUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/**
 * @example
 * import _ from 'utils/Util';
 * _.r(0,100);
 * _.show(element);
 */
var Util = /*#__PURE__*/function () {
  function Util() {
    _classCallCheck(this, Util);
  }
  _createClass(Util, null, [{
    key: "r",
    value:
    // const RAD = Math.PI / 180; //.017453293

    function r(min, max) {
      return Math.random() * (max - min) + min;
    }
  }, {
    key: "show",
    value: function show(el) {
      if (!el) return;
      Util.removeClass(el, "dn");
      Util.addClass(el, "db");
    }
  }, {
    key: "hide",
    value: function hide(el) {
      if (!el) return;
      Util.addClass(el, "dn");
      Util.removeClass(el, "db");
    }
  }, {
    key: "el",
    value: function el(id) {
      var el = document.getElementById(id);
      if (!el) el = null;
      return el;
    }
  }, {
    key: "elClass",
    value: function elClass(c) {
      var el = document.getElementsByClassName(c);
      if (!el) el = null;
      return el;
    }
  }, {
    key: "find",
    value: function find(el, selector) {
      if (!el) return;
      return el.querySelectorAll(selector);
    }
  }, {
    key: "find1st",
    value: function find1st(el, selector) {
      if (!el) return;
      return el.querySelectorAll(selector)[0];
    }

    // static each(selector)
    // {
    //  let elements = document.querySelectorAll(selector);
    //  Array.prototype.forEach.call(elements, function(el, i){

    //  });
    // }
  }, {
    key: "append",
    value: function append(parent, el) {
      if (!el) return;
      parent.appendChild(el);
    }
  }, {
    key: "empty",
    value: function empty(el) {
      if (!el || !el.innerHTML) return;
      el.innerHTML = '';
    }
  }, {
    key: "getAttr",
    value: function getAttr(el, prop) {
      if (!el) return;
      return el.getAttribute(prop);
    }
  }, {
    key: "setAttr",
    value: function setAttr(el, prop, val) {
      if (!el) return;
      return el.setAttribute(prop, val);
    }
  }, {
    key: "html",
    value: function html(el, src) {
      if (!el || !el.innerHTML) return;
      return el.innerHTML = src;
    }
  }, {
    key: "prepend",
    value: function prepend(parent, el) {
      if (!el) return;
      parent.insertBefore(el, parent.firstChild);
    }
  }, {
    key: "dispose",
    value: function dispose(el) {
      if (!el) return;
      el.innerHTML = "";
      el.parentNode.removeChild(el);
    }
  }, {
    key: "addEvent",
    value: function addEvent(el, type, eventHandler) {
      if (!el || !type || !eventHandler) return null;
      el.addEventListener(type, eventHandler, false);
    }
  }, {
    key: "removeEvent",
    value: function removeEvent(el, type, eventHandler) {
      if (!el || !type || !eventHandler) return null;
      el.removeEventListener(type, eventHandler, false);
    }
  }, {
    key: "getStyle",
    value: function getStyle(aElement, aCssProperty) {
      if (aElement.currentStyle) {
        return aElement.currentStyle[aCssProperty]; //IE
      } else {
        var style = document.defaultView.getComputedStyle(aElement, null);
        return style.getPropertyValue(aCssProperty);
      }
    }

    /**
     * [static] addClass
     * classを追加します
     * IE11でsvgだとコケる
     *
     * @param element:object
     * @param className:string
     */
  }, {
    key: "addClass",
    value: function addClass(el, className) {
      if (!el) return;
      if (el.classList) el.classList.add(className);else {
        // t(el.getAttribute('class'));
        el.setAttribute('class', className);
      }
    }

    /**
     * [static] removeClass
     * classを削除します
     * IE11でsvgだとコケる
     *
     * @param element:object
     * @param className:string
     */
  }, {
    key: "removeClass",
    value: function removeClass(el, className) {
      if (!el) return;
      if (el.classList) el.classList.remove(className);else {
        // t(el.getAttribute('class'));
        el.setAttribute('class', '');
      }
    }

    /**
     * [static] hasClass
     * classを持っているか判別
     *
     * @param element:object
     * @param className:string
     */
  }, {
    key: "hasClass",
    value: function hasClass(el, className) {
      if (!el) return;
      if (el.classList) return el.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }

    /**
     * [static] toggleClass
     *
     * @param element:object
     * @param className:string
     */
  }, {
    key: "toggleClass",
    value: function toggleClass(el, className) {
      if (!el) return;
      if (el.classList) el.classList.toggle(className);
    }
  }, {
    key: "getPageSize",
    value: function getPageSize() {
      var obj = {};
      obj.sx = document.documentElement.scrollLeft || document.body.scrollLeft;
      obj.sy = document.documentElement.scrollTop || document.body.scrollTop;
      obj.ww = document.documentElement.clientWidth || document.body.clientWidth || document.body.scrollWidth;
      obj.wh = document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight;
      obj.dw = document.documentElement.scrollWidth || document.body.scrollWidth;
      obj.dh = document.documentElement.scrollHeight || document.body.scrollHeight;
      return obj;
    }

    // static offset(el)
    // {
    //   if(!el) return;
    //   let rect = el.getBoundingClientRect();
    //   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //   let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    //   return {
    //      top  : rect.top + scrollTop
    //     ,left : rect.left + scrollLeft
    //   }
    // }
  }, {
    key: "getRelativePosition",
    value: function getRelativePosition(target) {
      return {
        x: target.offsetLeft,
        y: target.offsetTop
      };
    }
  }, {
    key: "getPosition",
    value: function getPosition(target) {
      var rect = target.getBoundingClientRect();
      var positionX = rect.left;
      var positionY = rect.top;
      var dElm = document.documentElement,
        dBody = document.body;
      var scrollX = dElm.scrollLeft || dBody.scrollLeft;
      var scrollY = dElm.scrollTop || dBody.scrollTop;
      var x = positionX + scrollX >> 0;
      var y = positionY + scrollY >> 0;
      // t( "x:" + x + "px , y:" + y + "px" );

      return {
        x: x,
        y: y
      };
    }
  }, {
    key: "getRect",
    value: function getRect(el) {
      var rect = Util.getPosition(el);
      rect.width = el.offsetWidth;
      rect.height = el.offsetHeight;
      return rect;
    }
  }, {
    key: "getW",
    value: function getW(el) {
      if (!el) return;
      // offsetWidth : width + padding + border
      // clientWidth : width + padding
      return el.offsetWidth;
    }
  }, {
    key: "getH",
    value: function getH(el) {
      if (!el) return;
      return el.offsetHeight;
    }
  }, {
    key: "delayedCall",
    value: function delayedCall(func, wait) {
      var _int = setTimeout(func, wait * 1000);
      return _int;
    }
  }, {
    key: "killDelayedCall",
    value: function killDelayedCall(_int2) {
      clearTimeout(_int2);
    }

    /**
      一文字ずつ足していって指定した行数で三点リーダーを追加
      divのheightは指定しないこと
    */
    // static addEllipsis(el, row = 3, ellipsis = "...")
    // {
    //   let text = el.innerHTML;
    //   if(!el.origin) el.origin = text;

    //   // 1行の高さ取得
    //   el.innerHTML = "a";
    //   let rowHeight = el.clientHeight;
    //   let rowCount = 1;
    //   // 一旦空にする
    //   el.innerHTML = "";

    //   let len = el.origin.length;
    //   for (let i = 0; i < len; i++)
    //   {
    //     let s = el.origin.substring(0, i + 1);
    //     el.innerHTML = s;

    //     let height = el.clientHeight;
    //     if (height > rowHeight)
    //     {
    //       // 高さが変わったら行数インクリメント
    //       rowHeight = height;
    //       rowCount++;

    //       // 指定行数になったら2文字削って ellipsis 追加
    //       if(rowCount > row)
    //       {
    //         el.innerHTML = el.origin.substring(0, i - 2) + ellipsis;
    //         break;
    //       }
    //     }
    //   }
    // };

    // static getImageSize(img)
    // {
    //  let obj = { w:null, h:null };

    //  if( img.naturalWidth !== undefined )
    //  {
    //    obj.w = img.naturalWidth;
    //    obj.h = img.naturalHeight;
    //  }
    //  else if( img.runtimeStyle !== undefined ) // IE
    //  {
    //    let style = img.runtimeStyle;

    //    style.width = "auto";
    //    style.height = "auto";

    //    obj.w = img.width;
    //    obj.h = img.height;
    //  }
    //  else // Opera
    //  {
    //    img.removeAttribute("width");
    //    img.removeAttribute("height");

    //    obj.w = img.width;
    //    obj.h = img.height;
    //  }

    //  return obj;
    // }

    // static click(el, func, timing)
    // {
    //  if(!el || !el.addEventListener) return;
    //  if(BrowserUtil.isSP())
    //  {
    //    if(timing == "touchstart")
    //    {
    //      el.addEventListener("touchstart", func);
    //      el.addEventListener("touchend", null);
    //    }
    //    else
    //    {
    //      el.addEventListener("touchstart", null);
    //      el.addEventListener("touchend", func);
    //    }
    //  }
    //  else
    //  {
    //    el.addEventListener("click", func);
    //    el.style.cursor = "pointer" ;
    //  }

    //  //offClick用に返す
    //  return func;
    // }

    // static offClick(el, func, timing)
    // {
    //  if(!el || !el.addEventListener) return;

    //  if(BrowserUtil.isSP())
    //  {
    //    if(timing == "touchstart")
    //    {
    //      el.removeEventListener("touchstart", func);
    //      el.removeEventListener("touchend", null);
    //    }
    //    else
    //    {
    //      el.removeEventListener("touchstart", null);
    //      el.removeEventListener("touchend", func);
    //    }
    //  }
    //  else
    //  {
    //    el.removeEventListener("click", func);
    //    el.style.cursor = "auto";
    //  }
    // }

    // static over(el, func)
    // {
    //  if(!el) return;
    //  el.addEventListener("mouseover", func);

    //  //offOver用に返す
    //  return func;
    // }

    // static offOver(el, func)
    // {
    //  if(!el) return;
    //  el.removeEventListener("mouseover", func);
    // }

    // static out(el, func)
    // {
    //  if(!el) return;
    //  el.addEventListener("mouseout", func);

    //  //offOut用に返す
    //  return func;
    // }

    // static offOut(el, func)
    // {
    //  if(!el) return;
    //  el.removeEventListener("mouseout", func);
    // }

    /**
     * [sortObjectArray] 複製せず配列そのものをソート
     * @param  {[type]} data  array
     * @param  {[type]} key   value
     * @param  {[type]} order asc or desc
     * @return {[type]}       sorted array
     */
  }, {
    key: "sortObjectArray",
    value: function sortObjectArray(arr, key, order) {
      //デフォルトでは降順(DESC)
      var num_a = -1;
      var num_b = 1;
      if (order === 'asc') {
        //指定があれば昇順(ASC)
        num_a = 1;
        num_b = -1;
      }
      arr = arr.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        if (x > y) return num_a;
        if (x < y) return num_b;
        return 0;
      });
    }
  }, {
    key: "shuffle",
    value: function shuffle(arr) {
      var i, j, temp;
      arr = arr.slice();
      i = arr.length;
      if (i === 0) {
        return arr;
      }
      while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      return arr;
    }
  }]);
  return Util;
}();


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BrowserUtil)
/* harmony export */ });


/**
 * @example
 * import BrowserUtil from 'utils/BrowserUtil';
 * let ua = BrowserUtil.getUserAgent();
 */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var BrowserUtil = /*#__PURE__*/function () {
  function BrowserUtil() {
    _classCallCheck(this, BrowserUtil);
  }
  _createClass(BrowserUtil, null, [{
    key: "getUserAgent",
    value:
    /**
    * [static] getUserAgent
    * UserAgentを取得します.
    */
    function getUserAgent() {
      var ua = navigator.userAgent;
      if (ua.indexOf("iPhone") != -1) return "IPHONE";else if (ua.indexOf("Android") != -1) return "ANDROID";else if (ua.indexOf("iPad") != -1) return "IPAD";
      return "PC";
    }
  }, {
    key: "isSP",
    value:
    /**
    * [static] isSP
    * モバイル端末かを判別します.
    */
    function isSP() {
      var ua = navigator.userAgent;
      if (ua.indexOf('iPhone') > 0 && ua.indexOf('iPad') == -1 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) return true;
      return false;
    }
  }, {
    key: "isTablet",
    value:
    /**
    * [static] isTablet
    * タブレットかを判別します.
    */
    function isTablet() {
      var ua = navigator.userAgent;
      if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') == -1) return true;
      return false;
    }
  }, {
    key: "checkSpWebView",
    value: function checkSpWebView() {
      var ua = navigator.userAgent.toLowerCase();
      var isTW = /twitter/.test(ua);
      var isFB = /fbav/.test(ua);
      var isLN = /line/.test(ua);
      if (isTW || isFB || isLN) return true;else return false;
    }
  }, {
    key: "isWindows",
    value: function isWindows() {
      return navigator.userAgent.toLowerCase().indexOf('windows') > 0;
    }
  }, {
    key: "getAndroidVersion",
    value:
    /**
     * Androidバージョンを返す
     * @return version : number --> 4.2, 5.0 など
     */
    function getAndroidVersion() {
      var version = -1;
      var ua = navigator.userAgent;
      if (ua.indexOf("Android") > 0) {
        version = parseFloat(ua.slice(ua.indexOf("Android") + 8));
      }
      return version;
    }
  }, {
    key: "isAndroidAOSP",
    value:
    /**
     * android標準ブラウザかどうか
     */
    function isAndroidAOSP() {
      var isNormalBrowser = false;
      if (BrowserUtil.getAndroidVersion() <= 4.4 && BrowserUtil.getUserAgent() == "ANDROID") {
        if ('AudioContext' in window) {} else {
          isNormalBrowser = true;
        }
      }
      return isNormalBrowser;
    }
  }, {
    key: "getiOSVersion",
    value:
    /**
     * iOSバージョンを返す
     * @return version : 百倍されたnumber 9.2 --> 920
     */
    function getiOSVersion() {
      var version = -1;
      var ios_ua = navigator.userAgent;
      if (ios_ua.indexOf("iPhone") > 0) {
        ios_ua.match(/iPhone OS (\w+){1,3}/g);
        version = (RegExp.$1.replace(/_/g, '') + '00').slice(0, 3);
      } else if (ios_ua.indexOf("iPad") > 0) {
        ios_ua.match(/CPU OS (\w+){1,3}/g);
        version = (RegExp.$1.replace(/_/g, '') + '00').slice(0, 3);
      }
      return version;
    }
  }, {
    key: "getBrowser",
    value: function getBrowser() {
      var ua = navigator.userAgent.toLowerCase();
      var ver = navigator.appVersion.toLowerCase();
      var name = 'unknown';
      if (ua.indexOf("msie") != -1) {
        if (ver.indexOf("msie 6.") != -1) {
          name = 'ie6';
        } else if (ver.indexOf("msie 7.") != -1) {
          name = 'ie7';
        } else if (ver.indexOf("msie 8.") != -1) {
          name = 'ie8';
        } else if (ver.indexOf("msie 9.") != -1) {
          name = 'ie9';
        } else if (ver.indexOf("msie 10.") != -1) {
          name = 'ie10';
        } else {
          name = 'ie';
        }
      } else if (ua.indexOf('trident/7') != -1) {
        name = 'ie11';
      } else if (ua.indexOf('edge') != -1) {
        name = 'edge';
      } else if (ua.indexOf('chrome') != -1) {
        name = 'chrome';
      } else if (ua.indexOf('safari') != -1) {
        name = 'safari';
      } else if (ua.indexOf('opera') != -1) {
        name = 'opera';
      } else if (ua.indexOf('firefox') != -1) {
        name = 'firefox';
      }
      return name;
    }
  }, {
    key: "getQuery",
    value:
    /**
    * [static] getLocationSearch
    * ページのパラメータを全て取得します.
    */
    // static getLocationSearch()
    // {
    //   if(window.location.search) return window.location.search.substring(1,window.location.search.length);
    //   return null;
    // };

    /**
    * [static] getQuery
    * ページのパラメータをオブジェクトで返します.
    */
    function getQuery() {
      var query = window.location.search;
      var params = {};
      if (query) {
        var reg = query.match(/(.*)(\?)(.*)/);
        if (RegExp.$3) {
          var a = RegExp.$3.split("&");
          if (a) {
            for (var k = 0; k < a.length; k++) {
              var p = a[k].split("=");
              if (p[0]) params[p[0]] = p[1];
            }
          } else return false;
        } else return false;
      } else return false;
      return params;
    }
  }, {
    key: "removeQuery",
    value:
    /**
    * [static] removeQuery
    * ページのパラメータを消す
    */
    function removeQuery() {
      if (window.history && window.history.pushState) {
        var url = location.href;
        if (url.indexOf("?") > -1) {
          url = url.split("?")[0];
          window.history.pushState("", document.title, url);
        }
      }
    }
  }]);
  return BrowserUtil;
}();


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Event)
/* harmony export */ });
/* harmony import */ var _utils_Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var enableInt = -1;
var resizeInt = -1;
var pageSize;

/**
 *	import Event from 'events/Event';
 *
 * Event.add(this.listen.bind(this));
 * // or
 * // Event.add((param)=>this.listen(param));
 * 
 * listen(param)
 * {
 *   switch(param)
 *   {
 *     case Event.READY:

 *       break;
 *     case Event.LOAD:

 *       break;
 *     case Event.SCROLL:
 *       this.scroll();
 *       break;
 *     case Event.RESIZE:
 *       this.resize();
 *       break;
 *   }
 * }
 */

var READY = "DOMContentLoaded";
var DOMContentLoaded = "DOMContentLoaded";
var onreadystatechange = "onreadystatechange";
var LOAD = "load";
var UNLOAD = "unload";
var COMPLETE = "complete";
var RESIZE = "resize";
var SCROLL = "scroll";
var ENABLE = "enable";
var DISABLE = "disable";
var Event = /*#__PURE__*/function () {
  function Event() {
    _classCallCheck(this, Event);
    // EventEmitter.ee.on('viewEvent', data => {
    // 	console.log('[ viewEvent ::: ' + data + ' ]');
    // });

    // ready ------------------------------------------------

    if (document.readyState === Event.COMPLETE) {
      _EventEmitter__WEBPACK_IMPORTED_MODULE_1__["default"].ee.emit("viewEvent", Event.READY);
    } else {
      var _ready = function _ready() {
        document.removeEventListener(Event.READY, _ready, false);
        _EventEmitter__WEBPACK_IMPORTED_MODULE_1__["default"].ee.emit("viewEvent", Event.READY);
      };
      document.addEventListener(Event.READY, _ready, false);
    }

    // load ------------------------------------------------
    var _load = function _load() {
      window.removeEventListener(Event.LOAD, _load);
      _EventEmitter__WEBPACK_IMPORTED_MODULE_1__["default"].ee.emit("viewEvent", Event.LOAD);
    };
    window.addEventListener(Event.LOAD, _load, false);

    // scroll ------------------------------------------------

    var _scroll = function _scroll() {
      pageSize = _utils_Util__WEBPACK_IMPORTED_MODULE_0__["default"].getPageSize();
      _EventEmitter__WEBPACK_IMPORTED_MODULE_1__["default"].ee.emit("viewEvent", Event.SCROLL);
    };
    window.addEventListener(Event.SCROLL, _scroll, false);

    // resize ------------------------------------------------
    pageSize = _utils_Util__WEBPACK_IMPORTED_MODULE_0__["default"].getPageSize();
    var _resize = function _resize() {
      clearTimeout(resizeInt);
      resizeInt = setTimeout(function () {
        pageSize = _utils_Util__WEBPACK_IMPORTED_MODULE_0__["default"].getPageSize();
        _EventEmitter__WEBPACK_IMPORTED_MODULE_1__["default"].ee.emit("viewEvent", Event.RESIZE);
      }, 20);
    };
    window.addEventListener(Event.RESIZE, _resize, false);
  }

  /**
   * 強制実行
   */
  _createClass(Event, null, [{
    key: "scroll",
    value: function scroll() {
      pageSize = _utils_Util__WEBPACK_IMPORTED_MODULE_0__["default"].getPageSize();
      _EventEmitter__WEBPACK_IMPORTED_MODULE_1__["default"].ee.emit("viewEvent", Event.SCROLL);
    }

    /**
     * 強制実行
     */
  }, {
    key: "resize",
    value: function resize() {
      pageSize = _utils_Util__WEBPACK_IMPORTED_MODULE_0__["default"].getPageSize();
      _EventEmitter__WEBPACK_IMPORTED_MODULE_1__["default"].ee.emit("viewEvent", Event.RESIZE);
    }
  }, {
    key: "size",
    get: function get() {
      return pageSize;
    }
  }, {
    key: "add",
    value: function add(func) {
      _EventEmitter__WEBPACK_IMPORTED_MODULE_1__["default"].ee.on("viewEvent", func);
    }
  }, {
    key: "remove",
    value: function remove(func) {
      _EventEmitter__WEBPACK_IMPORTED_MODULE_1__["default"].ee.removeListener("viewEvent", func);
    }
  }]);
  return Event;
}();

new Event();

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventEmitter)
/* harmony export */ });


/**
 * @exsample
 *
import EventEmitter from 'events/EventEmitter';

//listen
EventEmitter.ee.on('event_name', func);

//remove
EventEmitter.ee.removeListener('event_name', func);

//emit
EventEmitter.ee.emit('event_name', data);
 */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var EventEmitter = /*#__PURE__*/_createClass(function EventEmitter() {
  _classCallCheck(this, EventEmitter);
  var EE = (__webpack_require__(5).EventEmitter);
  var ee;
  EventEmitter.ee = new EE();
  EventEmitter.ee.setMaxListeners(0); //unlimit
});

new EventEmitter();

/***/ }),
/* 5 */
/***/ ((module) => {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scroll)
/* harmony export */ });


// import DisableCover from 'controller/DisableCover';

/**
 * import Scroll from 'utils/Scroll';
 */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Scroll = /*#__PURE__*/function () {
  function Scroll() {
    _classCallCheck(this, Scroll);
  }
  _createClass(Scroll, null, [{
    key: "to",
    value:
    /**
     * @example Scroll.to(0,1,Power2.easeOut);
     */
    function to(y) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .3;
      var ease = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Power3.easeInOut;
      TweenMax.to([document.body, document.documentElement], time, {
        scrollTop: y,
        ease: ease
      });

      // DisableCover.timer(time);
    }

    /**
     * @example Scroll.set(0);
     */
  }, {
    key: "set",
    value: function set() {
      var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var tgt;
      if ('scrollingElement' in document) tgt = document.scrollingElement;else if ('WebkitAppearance' in document.documentElement.style) tgt = document.body;else tgt = document.documentElement;
      tgt.scrollTop = y;
    }
  }]);
  return Scroll;
}();


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _events_Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _js_utils_Scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var Main = /*#__PURE__*/function () {
  function Main() {
    var _this = this;
    _classCallCheck(this, Main);
    window.onload = function () {
      _this.pageSize = _utils_Util__WEBPACK_IMPORTED_MODULE_0__["default"].getPageSize();
      _this.header = document.getElementById('header');
      _this.headerFixed = document.getElementById('header-fixed');
      _this.root = document.getElementById('container');
      _this.menu = document.getElementById('menu');
      _this.logo = document.getElementById('logo');
      _this.top = document.getElementById('top');
      _this.subMenu = document.getElementById('sub-menu');
      _this.anim = document.getElementsByClassName('anim');
      _this.swiperContainer = document.getElementsByClassName('swiper-container');
      _this.menuTrigger = document.getElementsByClassName('menu-trigger');
      _this.scrollTrigger = document.getElementsByClassName('scroll-trigger');
      _this.animRatio = .8;
      _this.index = 1;
      _this.swipers = [];
      _this.parallaxArray = [];
      _this.scrollingElement = 'scrollingElement' in document ? document.scrollingElement : window.navigator.userAgent.indexOf('WebKit') != -1 ? body : document.documentElement || body.parentNode;
      _this.scrollY = _this.scrollingElement.scrollTop;
      _this.startPos = 0;
      _events_Event__WEBPACK_IMPORTED_MODULE_1__["default"].add(_this.listen.bind(_this));
      _this.isIE();
      _this.ready();
      window.onscroll = function () {
        _this.scrollAnimation();
        if (_this.scrollY <= _this.startPos) {
          // this.headerFixed.classList.remove('show');
        } else if (_this.startPos !== 0) {
          // this.headerFixed.classList.add('show');
        }
        _this.startPos = _this.scrollY;
      };
      window.onresize = function () {
        _this.resizeEvent();
      };
      _this.resizeEvent();
      for (var i = 0; i < _this.menuTrigger.length; i++) {
        _this.menuTrigger[i].addEventListener('click', _this.triggerMenu.bind(_this));
      }
      if (!_this.scrollTrigger) return;
      for (var _i = 0; _i < _this.scrollTrigger.length; _i++) {
        _this.scrollTrigger[_i].addEventListener('click', _this.toScroll);
      }
    };
  }
  _createClass(Main, [{
    key: "isIE",
    value: function isIE() {
      var ua = navigator.userAgent;
      /* MSIE used to detect old browsers and Trident used to newer ones*/
      this.is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
      if (this.is_ie) {
        document.body.classList.add('ie');
        // document.getElementsByTagName('html')[0].classList.add('html-ie')
        if (!ua.match(/Win(dows )?NT 10\.0/)) {
          document.body.classList.add('under10');
        }
      }
    }
  }, {
    key: "resizeEvent",
    value: function resizeEvent() {
      var vh = window.innerHeight * 0.01;
      this.pageSize = _utils_Util__WEBPACK_IMPORTED_MODULE_0__["default"].getPageSize();
      // カスタム変数--vhの値をドキュメントのルートに設定
      // this.menu.style.setProperty("--vh", `${vh}px`);
      if (this.pageSize.ww < 750) {
        var top = window.innerHeight - this.header.clientHeight;
        this.animRatio = 1;
        // this.subMenu.setAttribute('style', `height: ${top}px; top: ${this.header.clientHeight}px`);
        if (this.pastww > 750) {
          // this.initSwiper();
        }
      } else {
        // this.subMenu.setAttribute('style', ``);
        this.animRatio = .8;
      }
      this.pastww = this.pageSize.ww;
    }
  }, {
    key: "checkScrollPosition",
    value: function checkScrollPosition() {
      if (window.location.hash) {
        var target = document.getElementById(window.location.hash.split('#')[1]);
        if (target) {
          var header = '';
          if (document.getElementById('header')) {
            header = document.getElementById('header');
          } else if (document.getElementById('header-new')) {
            header = document.getElementById('header-new');
          }
          var scrollY = window.scrollY || window.pageYOffset;
          var top = target.getBoundingClientRect().top + scrollY;
          top -= header.clientHeight;
          setTimeout(function () {
            _js_utils_Scroll__WEBPACK_IMPORTED_MODULE_2__["default"].to(top, 0);
          }, 10);
        }
      }
    }
  }, {
    key: "toScroll",
    value: function toScroll() {
      var target = document.getElementById(this.getAttribute('data-target'));
      var menu = document.getElementById('menu');
      var menuTrigger = document.getElementsByClassName('menu-trigger');
      var headerFixed = document.getElementById('header-fixed');
      var elemRect = target.getBoundingClientRect();
      var scrollY = window.scrollY || window.pageYOffset;
      var top = elemRect.top + scrollY;

      // top -= headerFixed.clientHeight;

      for (var i = 0; i < menuTrigger.length; i++) {
        menuTrigger[i].classList.remove('active');
      }
      menu.classList.remove('active');
      _js_utils_Scroll__WEBPACK_IMPORTED_MODULE_2__["default"].to(top, 2);
    }
  }, {
    key: "listen",
    value: function listen(param) {
      var _this2 = this;
      switch (param) {
        case _events_Event__WEBPACK_IMPORTED_MODULE_1__["default"].READY:
          this.ready();
          break;
        case _events_Event__WEBPACK_IMPORTED_MODULE_1__["default"].SCROLL:
          window.onscroll = function () {
            _this2.scrollAnimation();
          };
          break;
        case _events_Event__WEBPACK_IMPORTED_MODULE_1__["default"].LOAD:
          break;
      }
    }
  }, {
    key: "ready",
    value: function ready() {
      window.scrollTo(0, 0);
      this.root.classList.add('loaded');
      this.scrollAnimation();
      this.checkScrollPosition();
    }
  }, {
    key: "scrollAnimation",
    value: function scrollAnimation() {
      this.scrollY = this.scrollingElement.scrollTop;
      for (var i = 0; i < this.anim.length; i++) {
        var anim = this.anim[i];
        var offset = anim.getAttribute('data-offset');
        var elemRect = anim.getBoundingClientRect();
        var rect = {
          top: elemRect.top + window.pageYOffset,
          bottom: elemRect.bottom + window.pageYOffset,
          left: elemRect.left + window.pageXOffset
        };
        if (offset != null) {
          rect.top = rect.top + parseInt(offset);
        }
        if (this.scrollY > rect.top - this.pageSize.wh * this.animRatio || window.scrollY > rect.top - this.pageSize.wh * this.animRatio) {
          anim.classList.remove('reset');
          anim.classList.add('active');
        }
      }
    }
  }]);
  return Main;
}();
new Main();
})();

/******/ })()
;