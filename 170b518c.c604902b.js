(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(1),o=(r(0),r(166));const a={id:"example-page",title:"Example page"},c={id:"api/example-page",title:"Example page",description:"Testomato [provide page](https://www.testomato.com/example) that randomly ",source:"@site/docs/api/example.md",permalink:"/docs/api/example-page",editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/api/example.md",lastUpdatedAt:1587468244,sidebar:"docs",previous:{title:"User Projects",permalink:"/docs/api/user-projects"}},p=[{value:"Errors",id:"errors",children:[]},{value:"Warnings (timeouts)",id:"warnings-timeouts",children:[]}],i={rightToc:p};function s({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Testomato ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.testomato.com/example"}),"provide page")," that randomly\ngenerate failing state of website like ",Object(o.b)("strong",{parentName:"p"},"timeouts"),", ",Object(o.b)("strong",{parentName:"p"},"blank page"),", ",Object(o.b)("strong",{parentName:"p"},"404 errors"),", ",Object(o.b)("strong",{parentName:"p"},"500 errors"),".\nThis page can be very useful for API testing."),Object(o.b)("h2",{id:"errors"},Object(o.b)("a",Object(n.a)({parentName:"h2"},{href:"https://www.testomato.com/example/error"}),"Errors")),Object(o.b)("p",null,"To getting randomly generated errors add to your Project ",Object(o.b)("strong",{parentName:"p"},"Testomato check")," for follow URL: "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"https://www.testomato.com/example/error\n")),Object(o.b)("h2",{id:"warnings-timeouts"},Object(o.b)("a",Object(n.a)({parentName:"h2"},{href:"https://www.testomato.com/example/warning"}),"Warnings (timeouts)")),Object(o.b)("p",null,"To getting randomly generated timeouts add to your Project ",Object(o.b)("strong",{parentName:"p"},"Testomato check")," for follow URL:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"https://www.testomato.com/example/warning\n")))}s.isMDXComponent=!0},166:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},m=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(r),b=n,d=m["".concat(c,".").concat(b)]||m[b]||u[b]||a;return r?o.a.createElement(d,p({ref:t},s,{components:r})):o.a.createElement(d,p({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);