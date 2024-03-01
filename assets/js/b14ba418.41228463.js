"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[5846],{15680:(t,e,o)=>{o.d(e,{xA:()=>l,yg:()=>f});var r=o(96540);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function n(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,r,a=function(t,e){if(null==t)return{};var o,r,a={},n=Object.keys(t);for(r=0;r<n.length;r++)o=n[r],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)o=n[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),o=e;return t&&(o="function"==typeof t?t(e):s(s({},e),t)),o},l=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var o=t.components,a=t.mdxType,n=t.originalType,c=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),m=p(o),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||n;return o?r.createElement(f,s(s({ref:e},l),{},{components:o})):r.createElement(f,s({ref:e},l))}));function f(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var n=o.length,s=new Array(n);s[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[m]="string"==typeof t?t:a,s[1]=i;for(var p=2;p<n;p++)s[p]=o[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},62341:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=o(58168),a=(o(96540),o(15680));const n={id:"about",title:"About TestomatoBot",sidebar_label:"About"},s=void 0,i={unversionedId:"bot/about",id:"bot/about",title:"About TestomatoBot",description:"What is TestomatoBot?",source:"@site/docs/bot/01-about.md",sourceDirName:"bot",slug:"/bot/about",permalink:"/bot/about",draft:!1,editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/bot/01-about.md",tags:[],version:"current",lastUpdatedAt:1618859174,formattedLastUpdatedAt:"Apr 19, 2021",sidebarPosition:1,frontMatter:{id:"about",title:"About TestomatoBot",sidebar_label:"About"},sidebar:"docs",previous:{title:"Hypertext Transfer Protocol",permalink:"/monitoring/http"},next:{title:"DDoS protection",permalink:"/bot/ddos"}},c={},p=[{value:"What is TestomatoBot?",id:"what-is-testomatobot",level:3},{value:"Open source code",id:"open-source-code",level:2}],l={toc:p},m="wrapper";function u(t){let{components:e,...o}=t;return(0,a.yg)(m,(0,r.A)({},l,o,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"what-is-testomatobot"},"What is TestomatoBot?"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.testomato.com/bot"},"TestomatoBot")," is the web crawler software and toolset used by ",(0,a.yg)("a",{parentName:"p",href:"https://www.testomato.com"},"Testomato"),"\nto access checked websites, submit HTML Forms, downloads web pages and other resources that will be checked according to the\nproject configurations of Testomato's users."),(0,a.yg)("p",null,"TestomatoBot using by default follow ",(0,a.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent"},"User-Agent string"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"Testomatobot/1.0 (Linux x86_64; +https://www.testomato.com/testomatobot) minicrawler/5.1.2\n")),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"   Get list of all TestomatoBot IP addresses: ",(0,a.yg)("a",{parentName:"p",href:"https://www.testomato.com/bot"},"https://www.testomato.com/bot"))),(0,a.yg)("h2",{id:"open-source-code"},"Open source code"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.testomato.com/bot"},"TestomatoBot")," uses ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/testomato/minicrawler"},"Minicrawler")," to perform an HTTP requests for a given\nURL to get an HTTP response, including headers. It was developed to have the smallest possible memory footprint, processor time consumption,\nand fit the needs of ",(0,a.yg)("a",{parentName:"p",href:"https://www.testomato.com"},"Testomato"),", as well as other internal projects. ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/testomato/minicrawler"},"Minicrawler"),"\nis open-sourced under the AGPL License."),(0,a.yg)("p",null,"We encourage you to check ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/testomato/minicrawler"},"Minicrawler")," out and try it out for yourself.\nWe welcome any suggestions or feedback you might have for ways we can improve it!"),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"   If you don't want Testomatobot to access your server (i.e. due to overloading), please contact us at ",(0,a.yg)("a",{parentName:"p",href:"mailto:info@testomato.com"},"info@testomato.com"),".")))}u.isMDXComponent=!0}}]);