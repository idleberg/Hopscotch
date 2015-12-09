/*
 *  Hopscotch
 *  by Jan T. Sott
 *  https://github.com/idleberg/Hopscotch
 */

define(function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-hopscotch";
exports.cssText = require("../requirejs/text!./hopscotch.css");

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
