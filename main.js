'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activate = activate;

var _electron = require('electron');

var _electron2 = _interopRequireDefault(_electron);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function activate() {
  [_electron2.default.remote.getCurrentWindow()].map(function (win) {
    win.setMenuBarVisibility(false);
    win.setAutoHideMenuBar(true);
  });
}