(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{157:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(1),o=r(9),a=(r(0),r(161)),c={id:"api-key",title:"How to Get API Key"},i={id:"api/api-key",title:"How to Get API Key",description:"All API endpoints require authentication via an **API key**. Each",source:"@site/docs/api/api-key.md",permalink:"/help.testomato.com/docs/api/api-key",editUrl:"https://github.com/testomato/help-and-docs/edit/master/docs/api/api-key.md",lastUpdatedAt:1586893071,sidebar:"someSidebar",previous:{title:"Testomato REST API",permalink:"/help.testomato.com/docs/api/introduction"},next:{title:"Common responses",permalink:"/help.testomato.com/docs/api/common-responses"}},p=[],u={rightToc:p};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"All API endpoints require authentication via an ",Object(a.b)("strong",{parentName:"p"},"API key"),". Each\nproject has its own unique API key that protects your data against\nunwanted access. An API key parameter is ",Object(a.b)("strong",{parentName:"p"},"mandatory")," for all requests."),Object(a.b)("p",null,"You can find your API Key at the bottom of ",Object(a.b)("strong",{parentName:"p"},"Project Settings")),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"./api-key-project.png",alt:"API key"}))),Object(a.b)("p",null,"You can also use user key from your ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.testomato.com/user/profile"}),"User Profile"),": "),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"./api-key-user.png",alt:"API key"}))))}s.isMDXComponent=!0},161:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},l=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(r),b=n,f=l["".concat(c,".").concat(b)]||l[b]||m[b]||a;return r?o.a.createElement(f,i({ref:t},u,{components:r})):o.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);