"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[313],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=o.createContext({}),m=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=m(t.components);return o.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},c=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=m(n),d=i,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||r;return n?o.createElement(f,a(a({ref:e},p),{},{components:n})):o.createElement(f,a({ref:e},p))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,a=new Array(r);a[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,a[1]=s;for(var m=2;m<r;m++)a[m]=n[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2644:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return u}});var o=n(3117),i=n(102),r=(n(7294),n(3905)),a=["components"],s={id:"uptime",title:"Uptime monitoring"},l=void 0,m={unversionedId:"monitoring/uptime",id:"monitoring/uptime",title:"Uptime monitoring",description:"Getting false timeouts",source:"@site/docs/monitoring/01-uptime.md",sourceDirName:"monitoring",slug:"/monitoring/uptime",permalink:"/monitoring/uptime",editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/monitoring/01-uptime.md",tags:[],version:"current",lastUpdatedAt:1618859174,formattedLastUpdatedAt:"4/19/2021",sidebarPosition:1,frontMatter:{id:"uptime",title:"Uptime monitoring"},sidebar:"docs",previous:{title:"Invoices",permalink:"/payment/invoices"},next:{title:"Hypertext Transfer Protocol",permalink:"/monitoring/http"}},p={},u=[{value:"Getting false timeouts",id:"getting-false-timeouts",level:3},{value:"Location Matters",id:"location-matters",level:3},{value:"Disable Uptime Monitoring",id:"disable-uptime-monitoring",level:2},{value:"How to Disable Uptime Monitoring",id:"how-to-disable-uptime-monitoring",level:4}],c={toc:u};function d(t){var e=t.components,s=(0,i.Z)(t,a);return(0,r.kt)("wrapper",(0,o.Z)({},c,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"getting-false-timeouts"},"Getting false timeouts"),(0,r.kt)("p",null,"Why Does Testomato Say My Site Is Down When It's Not? Testomato may\noccasionally report your site is down or unavailable, but everything\nlooks fine when you go and investigate the problem for yourself."),(0,r.kt)("h3",{id:"location-matters"},"Location Matters"),(0,r.kt)("p",null,"Uptime Monitoring in Testomato is done externally rather than internally\nThis means that ",(0,r.kt)("a",{parentName:"p",href:"https://www.testomato.com"},"Testomatobot")," tests and\nmonitors your site or server from a location that is outside the\nlocal network where your server is hosted."),(0,r.kt)("p",null,"In some cases, a project may be unavailable to Testomato a very short\nperiod of time due to problems with network latency, i.e. how long it\ntakes data to get from one point to another."),(0,r.kt)("p",null,"To help avoid sending alerts about false timeouts or short-term issues,\nwe retest your project a second time before we send an alert if\n",(0,r.kt)("a",{parentName:"p",href:"https://www.testomato.com"},"Testomato")," is unable to connect with your site or server."),(0,r.kt)("p",null,"We have also started adding more testing locations in Testomato to help\nminimize the influence of our connection on your project test results."),(0,r.kt)("h2",{id:"disable-uptime-monitoring"},"Disable Uptime Monitoring"),(0,r.kt)("p",null,"Site downtime can mean loss of revenue and user trust, so it's important\nto stay one step ahead by knowing when your website is up or down.\nUptime Monitoring & Response Time is automatically enabled for our:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Professional Plan")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Business Plan")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enterprise Plan")),(0,r.kt)("li",{parentName:"ul"},"and during a 30-day free trial period")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If your plan does not support uptime monitoring, please take a look at\nour ",(0,r.kt)("a",{parentName:"p",href:"https://www.testomato.com/pricing"},"pricing plans")," for more\ninformation."))),(0,r.kt)("h4",{id:"how-to-disable-uptime-monitoring"},"How to Disable Uptime Monitoring"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on the project you'd like to manage or select it from your All\nprojects menu in the top right corner."),(0,r.kt)("li",{parentName:"ol"},"Click to ",(0,r.kt)("strong",{parentName:"li"},"edit button")," near to uptime ",(0,r.kt)("img",{src:n(2438).Z,width:"1392",height:"601"})),(0,r.kt)("li",{parentName:"ol"},"Then select ",(0,r.kt)("inlineCode",{parentName:"li"},"OFF")," in uptime interval menu, and confirm change ",(0,r.kt)("img",{src:n(930).Z,width:"506",height:"204"}))))}d.isMDXComponent=!0},930:function(t,e,n){e.Z=n.p+"assets/images/uptime-disable-068599a82cdf6b0866e733cc279ceccb.png"},2438:function(t,e,n){e.Z=n.p+"assets/images/uptime-setup-44dff714683fb6b1afce390910bf5d18.png"}}]);