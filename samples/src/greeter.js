"use strict";
exports.__esModule = true;
var YDSJsx_js_1 = require("../../src/YDSJsx.js");
var App = (YDSJsx_js_1["default"].createElement("div", null,
    YDSJsx_js_1["default"].createElement("p", null, "My awesome app :)")));
var blah = (YDSJsx_js_1["default"].createElement(YDSJsx_js_1["default"].FRAGMENT, null,
    YDSJsx_js_1["default"].createElement("div", null, "Hello"),
    YDSJsx_js_1["default"].createElement("div", null, "World")));
document.body.append(App);
document.body.append(blah);
