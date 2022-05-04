"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[380],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,p(p({ref:t},u),{},{components:r})):n.createElement(f,p({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5754:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),p=["components"],l={title:"Project Groups"},i=void 0,c={unversionedId:"api/project/project-group",id:"api/project/project-group",title:"Project Groups",description:"API Endpoint",source:"@site/docs/api/project/08-project-group.md",sourceDirName:"api/project",slug:"/api/project/project-group",permalink:"/api/project/project-group",editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/api/project/08-project-group.md",tags:[],version:"current",lastUpdatedAt:1618860419,formattedLastUpdatedAt:"4/19/2021",sidebarPosition:8,frontMatter:{title:"Project Groups"},sidebar:"docs",previous:{title:"Project Users",permalink:"/api/project/project-users"},next:{title:"Project Create",permalink:"/api/project/project-create"}},u={},s=[{value:"API Endpoint",id:"api-endpoint",level:3},{value:"Request params",id:"request-params",level:3},{value:"Call example",id:"call-example",level:3},{value:"Response",id:"response",level:3}],d={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"api-endpoint"},"API Endpoint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"GET /api/areas/[id]?apikey=[key]\n")),(0,o.kt)("h3",{id:"request-params"},"Request params"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Mandatory"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"id")),(0,o.kt)("td",{parentName:"tr",align:null},"Project ID"),(0,o.kt)("td",{parentName:"tr",align:null},"required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"apikey")),(0,o.kt)("td",{parentName:"tr",align:null},"An API key unique to each project"),(0,o.kt)("td",{parentName:"tr",align:null},"required")))),(0,o.kt)("h3",{id:"call-example"},"Call example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Example CURL call"',title:'"Example',CURL:!0,'call"':!0},"curl https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581/areas?apikey=4PJAOwTK\n")),(0,o.kt)("h3",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON response"',title:'"Example',JSON:!0,'response"':!0},'[\n    {\n        "projectId": "5e95ddf7a39e5a44428b4581",\n        "name": "Public",\n        "public": true,\n        "rules": [],\n        "httpAuth": null,\n        "period": true,\n        "result": null,\n        "options": {\n            "w": null,\n            "2": false\n        },\n        "id": "5e95de00a39e5a44428b4583",\n        "nextRun": 126,\n        "periodInt": 300\n    }\n]\n')))}m.isMDXComponent=!0}}]);