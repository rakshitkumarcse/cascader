webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(255);


/***/ },

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _rcCascader = __webpack_require__(3);
	
	var _rcCascader2 = _interopRequireDefault(_rcCascader);
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(79);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable no-console */
	var addressOptions = [{
	  label: '福建',
	  value: 'fj',
	  children: [{
	    label: '福州',
	    value: 'fuzhou',
	    children: [{
	      label: '马尾',
	      value: 'mawei'
	    }]
	  }, {
	    label: '泉州',
	    value: 'quanzhou'
	  }]
	}, {
	  label: '浙江',
	  value: 'zj',
	  children: [{
	    label: '杭州',
	    value: 'hangzhou',
	    children: [{
	      label: '余杭',
	      value: 'yuhang'
	    }]
	  }]
	}, {
	  label: '北京',
	  value: 'bj',
	  children: [{
	    label: '朝阳区',
	    value: 'chaoyang'
	  }, {
	    label: '海淀区',
	    value: 'haidian'
	  }]
	}];
	
	var Demo = _react2.default.createClass({
	  displayName: 'Demo',
	  getInitialState: function getInitialState() {
	    return {
	      inputValue: ''
	    };
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      _rcCascader2.default,
	      { options: addressOptions, disabled: true },
	      _react2.default.createElement('input', {
	        placeholder: 'please select address',
	        disabled: true,
	        value: this.state.inputValue,
	        readOnly: true
	      })
	    );
	  }
	});
	
	_reactDom2.default.render(_react2.default.createElement(Demo, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=disabled.js.map