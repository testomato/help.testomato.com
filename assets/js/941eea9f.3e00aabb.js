"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[4193],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,g=s["".concat(i,".").concat(m)]||s[m]||d[m]||l;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6141:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const l={title:"Project Groups"},o=void 0,p={unversionedId:"api/project/project-group",id:"api/project/project-group",title:"Project Groups",description:"API Endpoint",source:"@site/docs/api/project/08-project-group.md",sourceDirName:"api/project",slug:"/api/project/project-group",permalink:"/api/project/project-group",draft:!1,editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/api/project/08-project-group.md",tags:[],version:"current",lastUpdatedAt:1665325519,formattedLastUpdatedAt:"Oct 9, 2022",sidebarPosition:8,frontMatter:{title:"Project Groups"}},i={},c=[{value:"API Endpoint",id:"api-endpoint",level:3},{value:"Request params",id:"request-params",level:3},{value:"Call example",id:"call-example",level:3},{value:"Response",id:"response",level:3}],u={toc:c},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(s,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"api-endpoint"},"API Endpoint"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"GET /api/areas/[id]?apikey=[key]\n")),(0,a.yg)("h3",{id:"request-params"},"Request params"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Mandatory"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"id")),(0,a.yg)("td",{parentName:"tr",align:null},"Project ID"),(0,a.yg)("td",{parentName:"tr",align:null},"required")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"apikey")),(0,a.yg)("td",{parentName:"tr",align:null},"An API key unique to each project"),(0,a.yg)("td",{parentName:"tr",align:null},"required")))),(0,a.yg)("h3",{id:"call-example"},"Call example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="Example CURL call"',title:'"Example',CURL:!0,'call"':!0},"curl https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581/areas?apikey=4PJAOwTK\n")),(0,a.yg)("h3",{id:"response"},"Response"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON response"',title:'"Example',JSON:!0,'response"':!0},'[\n    {\n        "projectId": "5e95ddf7a39e5a44428b4581",\n        "name": "Public",\n        "public": true,\n        "rules": [],\n        "httpAuth": null,\n        "period": true,\n        "result": null,\n        "options": {\n            "w": null,\n            "2": false\n        },\n        "id": "5e95de00a39e5a44428b4583",\n        "nextRun": 126,\n        "periodInt": 300\n    }\n]\n')))}d.isMDXComponent=!0}}]);