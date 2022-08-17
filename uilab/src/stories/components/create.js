var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/* This  utility allows me to create styled components from a single function called create. It takes an HTML ElementType,Tailwind utility classes and an optional object containing props
 */
import React from 'react';
import classNames from 'classnames';
function create(type) {
    var className = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        className[_i - 1] = arguments[_i];
    }
    return function Classed(props) {
        return React.createElement(type, __assign(__assign({}, props), { className: classNames.apply(void 0, __spreadArray([props === null || props === void 0 ? void 0 : props.className], className, false)) }));
    };
}
;
export default create;
/* Example usage */
