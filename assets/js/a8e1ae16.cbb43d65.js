"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[622],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),c=d(n),s=r,k=c["".concat(o,".").concat(s)]||c[s]||u[s]||i;return n?a.createElement(k,l(l({ref:e},m),{},{components:n})):a.createElement(k,l({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6247:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return m},default:function(){return c}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],p={id:"introduction",title:"Testomato REST API",sidebar_label:"Introduction"},o=void 0,d={unversionedId:"api/introduction",id:"api/introduction",isDocsHomePage:!1,title:"Testomato REST API",description:"Testomato REST API",source:"@site/docs/api/01-introduction.md",sourceDirName:"api",slug:"/api/introduction",permalink:"/api/introduction",editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/api/01-introduction.md",tags:[],version:"current",lastUpdatedAt:1623831937,formattedLastUpdatedAt:"6/16/2021",sidebarPosition:1,frontMatter:{id:"introduction",title:"Testomato REST API",sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"CSRF protection",permalink:"/checks/CSRF-protection"},next:{title:"How to Get API Key",permalink:"/api/api-key"}},m=[{value:"Testomato REST API",id:"testomato-rest-api",children:[],level:2},{value:"<code>/api/project/*</code>",id:"apiproject",children:[],level:2},{value:"<code>/api/incident/*</code>",id:"apiincident",children:[],level:2},{value:"<code>/api/user/*</code>",id:"apiuser",children:[],level:2},{value:"Others",id:"others",children:[],level:2}],u={toc:m};function c(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"testomato-rest-api"},"Testomato REST API"),(0,i.kt)("p",null,"Testomato ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"REST"),"\nAPI provides simple interfaces for Testomato functionality. To use a\nREST API, your application makes an HTTP request and parses the JSON\nformatted response."),(0,i.kt)("h2",{id:"apiproject"},(0,i.kt)("inlineCode",{parentName:"h2"},"/api/project/*")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Entrypoint"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/api/project/get-project"},"GET")),(0,i.kt)("td",{parentName:"tr",align:null},"Project"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/api/project/[id]")),(0,i.kt)("td",{parentName:"tr",align:null},"Getting basic Project information")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/api/project/project-start"},"GET")),(0,i.kt)("td",{parentName:"tr",align:null},"Starting"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/api/project/[id]/start")),(0,i.kt)("td",{parentName:"tr",align:null},"run all checks in Project")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/api/project/project-results"},"GET")),(0,i.kt)("td",{parentName:"tr",align:null},"Results"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/api/project/[id]/job/[jobid]/results")),(0,i.kt)("td",{parentName:"tr",align:null},"Return results of selected job")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/api/project/project-simple-status"},"GET")),(0,i.kt)("td",{parentName:"tr",align:null},"Simple Status"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/api/project/[id]/simple-status")),(0,i.kt)("td",{parentName:"tr",align:null},"Simplify project status")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/api/project/project-status"},"GET")),(0,i.kt)("td",{parentName:"tr",align:null},"Status"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/api/project/[id]/status")),(0,i.kt)("td",{parentName:"tr",align:null},"Full project status")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/api/project/project-response-times"},"GET")),(0,i.kt)("td",{parentName:"tr",align:null},"Response times"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/api/project/[id]/responseTimes")),(0,i.kt)("td",{parentName:"tr",align:null},"Response times in select time period")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/api/project/project-users"},"GET")),(0,i.kt)("td",{parentName:"tr",align:null},"Users"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/api/project/[id]/responseTimes")),(0,i.kt)("td",{parentName:"tr",align:null},"Project Users")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/api/project/project-group"},"GET")),(0,i.kt)("td",{parentName:"tr",align:null},"Group"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/api/project/[id]/responseTimes")),(0,i.kt)("td",{parentName:"tr",align:null},"Project Users")))),(0,i.kt)("h2",{id:"apiincident"},(0,i.kt)("inlineCode",{parentName:"h2"},"/api/incident/*")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Entrypoint"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/api/incident"},"GET")),(0,i.kt)("td",{parentName:"tr",align:null},"Incidents"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/api/incident/byInterval")),(0,i.kt)("td",{parentName:"tr",align:null},"Getting list of incidents")))),(0,i.kt)("h2",{id:"apiuser"},(0,i.kt)("inlineCode",{parentName:"h2"},"/api/user/*")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Entrypoint"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/api/user-projects"},"GET")),(0,i.kt)("td",{parentName:"tr",align:null},"Project"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/api/user/[id]/projects")),(0,i.kt)("td",{parentName:"tr",align:null},"Getting list of user projects")))),(0,i.kt)("h2",{id:"others"},"Others"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/common-responses"},"Common responses")," - common responses"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/api-key"},"Get API key")," - how to get API key")))}c.isMDXComponent=!0}}]);