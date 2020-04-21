(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(1),a=(n(0),n(166));const o={id:"project",title:"Project"},c={id:"api/project",title:"Project",description:"## API Endpoint",source:"@site/docs/api/project.md",permalink:"/docs/api/project",editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/api/project.md",lastUpdatedAt:1587468244,sidebar:"docs",previous:{title:"Common responses",permalink:"/docs/api/common-responses"},next:{title:"Project Start",permalink:"/docs/api/project-start"}},i=[{value:"API Endpoint",id:"api-endpoint",children:[]},{value:"Request params",id:"request-params",children:[]},{value:"Call example",id:"call-example",children:[]},{value:"Response",id:"response",children:[]}],l={rightToc:i};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"api-endpoint"},"API Endpoint"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text",metastring:'title="API endpoint"',title:'"API','endpoint"':!0}),"GET /api/project/[id]?apikey=[key]\n")),Object(a.b)("h2",{id:"request-params"},"Request params"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Parameter"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Mandatory"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"id")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Your project ID"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"required")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"apikey")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"An API key unique to each project"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"required")))),Object(a.b)("h2",{id:"call-example"},"Call example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:'title="Example CURL call"',title:'"Example',CURL:!0,'call"':!0}),"curl https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581?apikey=4PJAOwTK\n")),Object(a.b)("h2",{id:"response"},"Response"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'title="Example JSON response"',title:'"Example',JSON:!0,'response"':!0}),'{\n    "apiKey": "4PJAOwTK",\n    "checkDefaultErrors": true,\n    "created": "2020-04-14T15:59:51+00:00",\n    "delay": 50,\n    "id": "5e95ddf7a39e5a44428b4581",\n    "location": "eu",\n    "name": "1icaoc-testomato.com",\n    "payerId": "7",\n    "period": "5 minutes",\n    "status": null,\n    "timeout": 7,\n    "title": "testomato.com",\n    "uptimeEnabled": 15,\n    "uptimeUrl": "http://testomato.com/",\n    "url": "https://www.testomato.com/",\n    "userAgent": null,\n    "userIds": [\n        "7"\n    ]\n}\n')))}p.isMDXComponent=!0},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return n?a.a.createElement(d,i({ref:t},p,{components:n})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);