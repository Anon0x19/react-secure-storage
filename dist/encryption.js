"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cryptoJs = require("crypto-js");

var _aes = _interopRequireDefault(require("crypto-js/aes"));

var _fingerprint = _interopRequireDefault(require("./fingerprint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EncryptionService = /*#__PURE__*/function () {
  function EncryptionService() {
    _classCallCheck(this, EncryptionService);

    _defineProperty(this, "secureKey", "");

    this.secureKey = (0, _fingerprint.default)();
  }

  _createClass(EncryptionService, [{
    key: "encrypt",
    value: function encrypt(value) {
      return _aes.default.encrypt(value, this.secureKey).toString();
    }
  }, {
    key: "decrypt",
    value: function decrypt(value) {
      var bytes = _aes.default.decrypt(value, this.secureKey);

      return bytes.toString(_cryptoJs.enc.Utf8);
    }
  }]);

  return EncryptionService;
}();

var encryptService = new EncryptionService();
var _default = encryptService;
exports.default = _default;