"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[1077],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return u}});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=s(r),u=c,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||o;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function u(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,a=new Array(o);a[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:c,a[1]=i;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5007:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=r(7462),c=r(3366),o=(r(7294),r(3905)),a=["components"],i={id:"redirect",title:"Check Redirect Location",sidebar_label:"Redirect check"},l=void 0,s={unversionedId:"checks/redirect",id:"checks/redirect",title:"Check Redirect Location",description:"Check Redirect Location",source:"@site/docs/checks/04-redirect.md",sourceDirName:"checks",slug:"/checks/redirect",permalink:"/checks/redirect",draft:!1,editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/checks/04-redirect.md",tags:[],version:"current",lastUpdatedAt:1618859174,formattedLastUpdatedAt:"Apr 19, 2021",sidebarPosition:4,frontMatter:{id:"redirect",title:"Check Redirect Location",sidebar_label:"Redirect check"},sidebar:"docs",previous:{title:"Semantic checks",permalink:"/checks/semantic"},next:{title:"Common Server Errors",permalink:"/checks/common-server-errors"}},d={},p=[{value:"Check Redirect Location",id:"check-redirect-location",level:3},{value:"Types of Redirects",id:"types-of-redirects",level:3},{value:"Create new Page check",id:"create-new-page-check",level:3},{value:"Check Redirect response code",id:"check-redirect-response-code",level:3},{value:"Check Redirect location URL",id:"check-redirect-location-url",level:3}],h={toc:p};function u(e){var t=e.components,i=(0,c.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"check-redirect-location"},"Check Redirect Location"),(0,o.kt)("p",null,"Every page on the Internet has an address called a URL - which stands for ",(0,o.kt)("inlineCode",{parentName:"p"},"Uniform Resource Locator"),".\nSometimes, content moves from one URL to another URL. That\u2019s when you need a redirect.\nA redirect automatically makes a browser go from one URL to another URL."),(0,o.kt)("p",null,"Testomato allows you to check redirect location and response codes."),(0,o.kt)("h3",{id:"types-of-redirects"},"Types of Redirects"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'301, "Moved Permanently"\u2014recommended for SEO'),(0,o.kt)("li",{parentName:"ul"},'302, "Found" or "Moved Temporarily"'),(0,o.kt)("li",{parentName:"ul"},"Meta Refresh ")),(0,o.kt)("p",null,"The HyperText Transfer Protocol (HTTP) ",(0,o.kt)("strong",{parentName:"p"},"301 Moved Permanently")," redirect status response code\nindicates that the resource requested has been definitively moved to the URL given by the Location headers.\nThe 301 redirect is the best method for implementing redirects on a website.\nGet more info ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301"},"about 301 redirects"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"302 Found redirect")," status response code indicates that the resource requested\nhas been temporarily moved to the URL given by the Location header.\nGet more info ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302"},"about 302 redirects"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Meta refreshes")," are a type of redirect executed on the page level rather\nthan the server level. They are usually slower, and not a recommended SEO technique.   "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<http-equiv="refresh" content="0; url=https://example.com/">\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Testomato can't detect Meta refreshes redirects.")),(0,o.kt)("h3",{id:"create-new-page-check"},"Create new Page check"),(0,o.kt)("p",null,"First you have to create a new ",(0,o.kt)("strong",{parentName:"p"},"Page check"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add new Page check",src:r(4579).Z,width:"1206",height:"298"})),(0,o.kt)("p",null,"Enter the URL you want to check:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Enter URL for check",src:r(7714).Z,width:"1177",height:"503"})),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"This form always follow redirects. Do not worry, you can change that URL later. ")),(0,o.kt)("h3",{id:"check-redirect-response-code"},"Check Redirect response code"),(0,o.kt)("p",null,"Click on the pencil to edit ",(0,o.kt)("strong",{parentName:"p"},"Page check"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Edit new Page check",src:r(5326).Z,width:"1553",height:"299"})),(0,o.kt)("p",null,"Edit new ",(0,o.kt)("strong",{parentName:"p"},"Page check"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Edit new Page check",src:r(9414).Z,width:"1552",height:"763"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Change check URL if needed"),(0,o.kt)("li",{parentName:"ol"},"Add expected response code"),(0,o.kt)("li",{parentName:"ol"},"Turn off ",(0,o.kt)("strong",{parentName:"li"},"Follow redirects")," "),(0,o.kt)("li",{parentName:"ol"},"Save changes")),(0,o.kt)("h3",{id:"check-redirect-location-url"},"Check Redirect location URL"),(0,o.kt)("p",null,"You can also check exact Redirect location URL. Click on the pencil to edit ",(0,o.kt)("strong",{parentName:"p"},"Page check"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Edit new Page check",src:r(5326).Z,width:"1553",height:"299"})),(0,o.kt)("p",null,"Add ",(0,o.kt)("strong",{parentName:"p"},"Redirect Location")," check:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Redirect location Check",src:r(9836).Z,width:"1206",height:"568"})))}u.isMDXComponent=!0},4579:function(e,t,r){t.Z=r.p+"assets/images/redirect-add-page-check-030d445ddcf6015f3676f0d82b35af83.png"},9414:function(e,t,r){t.Z=r.p+"assets/images/redirect-check-edit-24acd5304bb9d17ac767fc95ec692a7b.png"},5326:function(e,t,r){t.Z=r.p+"assets/images/redirect-edit-new-check-c92e1af59dc2f0767a413f102c73a6f7.png"},7714:function(e,t,r){t.Z=r.p+"assets/images/redirect-enter-url-633525237cb766f71c08bbe1024d60a1.png"},9836:function(e,t,r){t.Z=r.p+"assets/images/redirect-redirect-location-f8dd69ce6ea70de52e2bb6fa4afc4c59.png"}}]);