(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{110:function(e,t,o){"use strict";o.d(t,"a",(function(){return m})),o.d(t,"b",(function(){return d}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=n.a.createContext({}),l=function(e){var t=n.a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},m=function(e){var t=l(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(o),b=r,d=m["".concat(i,".").concat(b)]||m[b]||p[b]||a;return o?n.a.createElement(d,s(s({ref:t},u),{},{components:o})):n.a.createElement(d,s({ref:t},u))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=o[u];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},96:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return l}));var r=o(3),n=o(8),a=(o(0),o(110)),i={id:"introduction",title:"Introduction",hide_title:!0},s={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"How Does Testomato Work?",source:"@site/docs/introduction.md",slug:"/introduction",permalink:"/introduction",editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/introduction.md",version:"current",lastUpdatedAt:1606225405,formattedLastUpdatedAt:"11/24/2020",sidebar:"docs",next:{title:"Testomato Dashboard",permalink:"/dashboard"}},c=[{value:"How Does Testomato Work?",id:"how-does-testomato-work",children:[]},{value:"What Does Testomato Do?",id:"what-does-testomato-do",children:[]}],u={toc:c};function l(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("a",{href:"http://www.testomato.com"},Object(a.b)("img",{src:"https://www.testomato.com/img/logo/testomato.svg",style:{width:"320px",margin:"0 auto",display:"block"}})),Object(a.b)("h3",{id:"how-does-testomato-work"},"How Does Testomato Work?"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://www.testomato.com"},"Testomato")," is an easy automated monitoring\nservice that actively monitors your website without requiring advanced\ntechnical knowledge or complicated maintenance, allowing you to check\nyour website for problems that impact users directly. This article\nwill give you a quick overview of how Testomato works."),Object(a.b)("p",null,"In order to monitor your website, Testomato downloads and scans your\nHTML code in a way similar to other popular web crawlers (like\nGooglebot). However, we use our own crawler, the\n",Object(a.b)("a",{parentName:"p",href:"https://www.testomato.com/bot"},"Testomatobot")),Object(a.b)("p",null,"Testomato downloads your HTML source code in order to run checks, but it\ndoes not execute any of the JavaScript on your website. This means that\nwhile we can catch errors in your UI just like a common user would, we\ndo not run your website in a browser and are unable to find problems\nthat may occur across different browsers."),Object(a.b)("h3",{id:"what-does-testomato-do"},"What Does Testomato Do?"),Object(a.b)("p",null,"Modern websites require many complex and critical actions to work\ncorrectly. Most of the time everything works great, but even if your\nwebsite is available, there may be parts that are slow or broken. And\nthese problems can sometimes take days, or even weeks, to find."),Object(a.b)("p",null,"With Testomato, you can discover issues as they happen to minimize the\nimpact of those issues on your users and prevent your business from\nlosing new signups, current customers, and revenue."),Object(a.b)("p",null,"Testomato allows you to set automated checks to monitor your website for\nproblems that interfere with the normal operation of your business,\nalerting you when something goes wrong."),Object(a.b)("p",null,"You can set up simple checks in seconds to monitor for:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Web pages and forms"),Object(a.b)("li",{parentName:"ul"},"Password-protected pages"),Object(a.b)("li",{parentName:"ul"},"Important SEO indicators"),Object(a.b)("li",{parentName:"ul"},"Common error messages"),Object(a.b)("li",{parentName:"ul"},"HTTP status codes"),Object(a.b)("li",{parentName:"ul"},"Missing content or broken forms"),Object(a.b)("li",{parentName:"ul"},"Network & SSL issues"),Object(a.b)("li",{parentName:"ul"},"Uptime monitoring"),Object(a.b)("li",{parentName:"ul"},"Response time")),Object(a.b)("p",null,"All website monitoring results are organized and stored in easy-to-read\nreports, allowing you to identify error patterns and make responsible\ndecisions based on reliable data."),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://www.testomato.com/team"},"Team Testomato")," is always working\nhard to improve and expand the features we have available."),Object(a.b)("p",null,"If you would like to participate in the future development of our\nroadmap, please don't be shy! We'd love to hear your suggestions:\n",Object(a.b)("a",{parentName:"p",href:"mailto:support@testomato.com"},"support@testomato.com"),"."))}l.isMDXComponent=!0}}]);