"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Carlonator = function () {
  function Carlonator() {
    _classCallCheck(this, Carlonator);
  }

  _createClass(Carlonator, [{
    key: "sumar",
    value: function sumar(a, b) {
      return a + b;
    }
  }, {
    key: "restar",
    value: function restar(a, b) {
      return a - b;
    }
  }, {
    key: "multiplicar",
    value: function multiplicar(a, b) {
      return a * b;
    }
  }, {
    key: "dividir",
    value: function dividir(a, b) {
      return a / b;
    }
  }]);

  return Carlonator;
}();

exports.default = Carlonator;