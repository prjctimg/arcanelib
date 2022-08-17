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
import { jsx as _jsx } from "react/jsx-runtime";
import { Blog } from "./stories/components/Blog/Blog";
function App(props) {
    return (_jsx("div", __assign({ className: "w-screen h-screen bg-cyan-700" }, { children: _jsx(Blog, {}) })));
}
export default App;
