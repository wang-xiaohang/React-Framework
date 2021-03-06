'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style/css');

var _reactMobileDatepicker = require('react-mobile-datepicker');

var _reactMobileDatepicker2 = _interopRequireDefault(_reactMobileDatepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import './style/picker.css';


var Picker = function (_Component) {
    _inherits(Picker, _Component);

    function Picker() {
        _classCallCheck(this, Picker);

        return _possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).apply(this, arguments));
    }

    _createClass(Picker, [{
        key: 'render',
        value: function render() {
            var value = this.props.value;
            var isOpen = this.props.isOpen;
            var onSelect = this.props.onSelect;
            var onCancel = this.props.onCancel;
            var dateFormat = this.props.dateFormat;
            var showFormat = this.props.showFormat;
            var theme = this.props.theme || "android";
            var min = this.props.min;
            return _react2.default.createElement(
                'div',
                { className: 'gsp-timepicker' },
                _react2.default.createElement(_reactMobileDatepicker2.default, {
                    value: value,
                    isOpen: isOpen,
                    onSelect: onSelect,
                    onCancel: onCancel,
                    dateFormat: dateFormat,
                    showFormat: showFormat,
                    theme: theme,
                    min: min
                })
            );
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren(props) {
            //遍历所有子组件
            return _react2.default.Children.map(props.children, function (child) {
                return child;
            });
        }
    }]);

    return Picker;
}(_react.Component);

exports.default = Picker;