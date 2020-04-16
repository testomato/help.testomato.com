(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),c=(n(0),n(161)),i={id:"areas",title:"Areas"},o={id:"api/areas",title:"Areas",description:"## Project Areas info",source:"@site/docs/api/areas.md",permalink:"/docs/api/areas",editUrl:"https://github.com/testomato/help-and-docs/edit/master/docs/api/areas.md",lastUpdatedAt:1586893071,sidebar:"someSidebar",previous:{title:"Project Response Times",permalink:"/docs/api/project-response-times"}},l=[{value:"Project Areas info",id:"project-areas-info",children:[{value:"API Endpoint",id:"api-endpoint",children:[]},{value:"Request params",id:"request-params",children:[]},{value:"Call example",id:"call-example",children:[]},{value:"Response",id:"response",children:[]}]}],p={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"project-areas-info"},"Project Areas info"),Object(c.b)("h3",{id:"api-endpoint"},"API Endpoint"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-txt",metastring:'title="API endpoint"',title:'"API','endpoint"':!0}),"GET /api/areas/[id]?apikey=[key]\n")),Object(c.b)("h3",{id:"request-params"},"Request params"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Parameter"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Mandatory"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"id")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Project ID"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"required")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"apikey")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"An API key unique to each project"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"required")))),Object(c.b)("h3",{id:"call-example"},"Call example"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:'title="Example CURL call"',title:'"Example',CURL:!0,'call"':!0}),"curl https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581/areas?apikey=4PJAOwTK\n")),Object(c.b)("h3",{id:"response"},"Response"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'title="Example JSON response"',title:'"Example',JSON:!0,'response"':!0}),'[\n    {\n        "projectId": "5e95ddf7a39e5a44428b4581",\n        "name": "Public",\n        "public": true,\n        "rules": [],\n        "httpAuth": null,\n        "period": true,\n        "result": null,\n        "options": {\n            "w": null,\n            "2": false\n        },\n        "id": "5e95de00a39e5a44428b4583",\n        "nextRun": 126,\n        "periodInt": 300\n    }\n]\n')))}b.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||c;return n?a.a.createElement(m,o({ref:t},p,{components:n})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<c;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);