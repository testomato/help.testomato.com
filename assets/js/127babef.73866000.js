"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[7537],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1935:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],p={title:"Get Project"},i=void 0,c={unversionedId:"api/project/get-project",id:"api/project/get-project",title:"Get Project",description:"API Endpoint",source:"@site/docs/api/project/01-get-project.md",sourceDirName:"api/project",slug:"/api/project/get-project",permalink:"/api/project/get-project",draft:!1,editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/api/project/01-get-project.md",tags:[],version:"current",lastUpdatedAt:1665325519,formattedLastUpdatedAt:"Oct 9, 2022",sidebarPosition:1,frontMatter:{title:"Get Project"},sidebar:"docs",previous:{title:"Example page",permalink:"/api/example-page"},next:{title:"Starting Project",permalink:"/api/project/project-start"}},u={},s=[{value:"API Endpoint",id:"api-endpoint",level:2},{value:"Request params",id:"request-params",level:2},{value:"Call example",id:"call-example",level:2},{value:"Response",id:"response",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"api-endpoint"},"API Endpoint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="API endpoint"',title:'"API','endpoint"':!0},"GET /api/project/[id]?apikey=[key]\n")),(0,o.kt)("h2",{id:"request-params"},"Request params"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Mandatory"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"id")),(0,o.kt)("td",{parentName:"tr",align:null},"Your project ID"),(0,o.kt)("td",{parentName:"tr",align:null},"required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"apikey")),(0,o.kt)("td",{parentName:"tr",align:null},"An API key unique to each project"),(0,o.kt)("td",{parentName:"tr",align:null},"required")))),(0,o.kt)("h2",{id:"call-example"},"Call example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Example CURL call"',title:'"Example',CURL:!0,'call"':!0},"curl https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581?apikey=4PJAOwTK\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON response"',title:'"Example',JSON:!0,'response"':!0},'{\n    "apiKey": "4PJAOwTK",\n    "checkDefaultErrors": true,\n    "created": "2020-04-14T15:59:51+00:00",\n    "delay": 50,\n    "id": "5e95ddf7a39e5a44428b4581",\n    "location": "eu",\n    "name": "1icaoc-testomato.com",\n    "payerId": "7",\n    "period": "5 minutes",\n    "status": null,\n    "timeout": 7,\n    "title": "testomato.com",\n    "uptimeEnabled": 15,\n    "uptimeUrl": "http://testomato.com/",\n    "url": "https://www.testomato.com/",\n    "userAgent": null,\n    "userIds": [\n        "7"\n    ]\n}\n')))}d.isMDXComponent=!0}}]);