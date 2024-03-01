"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[5472],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>m});var n=r(96540);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),g=c,m=p["".concat(l,".").concat(g)]||p[g]||h[g]||a;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,o=new Array(a);o[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:c,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},83833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(58168),c=(r(96540),r(15680));const a={id:"redirect",title:"Check Redirect Location",sidebar_label:"Redirect check"},o=void 0,i={unversionedId:"checks/redirect",id:"checks/redirect",title:"Check Redirect Location",description:"Check Redirect Location",source:"@site/docs/checks/04-redirect.md",sourceDirName:"checks",slug:"/checks/redirect",permalink:"/checks/redirect",draft:!1,editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/checks/04-redirect.md",tags:[],version:"current",lastUpdatedAt:1618859174,formattedLastUpdatedAt:"Apr 19, 2021",sidebarPosition:4,frontMatter:{id:"redirect",title:"Check Redirect Location",sidebar_label:"Redirect check"},sidebar:"docs",previous:{title:"Semantic checks",permalink:"/checks/semantic"},next:{title:"Common Server Errors",permalink:"/checks/common-server-errors"}},l={},s=[{value:"Check Redirect Location",id:"check-redirect-location",level:3},{value:"Types of Redirects",id:"types-of-redirects",level:3},{value:"Create new Page check",id:"create-new-page-check",level:3},{value:"Check Redirect response code",id:"check-redirect-response-code",level:3},{value:"Check Redirect location URL",id:"check-redirect-location-url",level:3}],d={toc:s},p="wrapper";function h(e){let{components:t,...a}=e;return(0,c.yg)(p,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,c.yg)("h3",{id:"check-redirect-location"},"Check Redirect Location"),(0,c.yg)("p",null,"Every page on the Internet has an address called a URL - which stands for ",(0,c.yg)("inlineCode",{parentName:"p"},"Uniform Resource Locator"),".\nSometimes, content moves from one URL to another URL. That\u2019s when you need a redirect.\nA redirect automatically makes a browser go from one URL to another URL."),(0,c.yg)("p",null,"Testomato allows you to check redirect location and response codes."),(0,c.yg)("h3",{id:"types-of-redirects"},"Types of Redirects"),(0,c.yg)("ul",null,(0,c.yg)("li",{parentName:"ul"},'301, "Moved Permanently"\u2014recommended for SEO'),(0,c.yg)("li",{parentName:"ul"},'302, "Found" or "Moved Temporarily"'),(0,c.yg)("li",{parentName:"ul"},"Meta Refresh ")),(0,c.yg)("p",null,"The HyperText Transfer Protocol (HTTP) ",(0,c.yg)("strong",{parentName:"p"},"301 Moved Permanently")," redirect status response code\nindicates that the resource requested has been definitively moved to the URL given by the Location headers.\nThe 301 redirect is the best method for implementing redirects on a website.\nGet more info ",(0,c.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301"},"about 301 redirects"),"."),(0,c.yg)("p",null,"The ",(0,c.yg)("strong",{parentName:"p"},"302 Found redirect")," status response code indicates that the resource requested\nhas been temporarily moved to the URL given by the Location header.\nGet more info ",(0,c.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302"},"about 302 redirects"),"."),(0,c.yg)("p",null,(0,c.yg)("strong",{parentName:"p"},"Meta refreshes")," are a type of redirect executed on the page level rather\nthan the server level. They are usually slower, and not a recommended SEO technique.   "),(0,c.yg)("pre",null,(0,c.yg)("code",{parentName:"pre",className:"language-html"},'<http-equiv="refresh" content="0; url=https://example.com/">\n')),(0,c.yg)("admonition",{type:"info"},(0,c.yg)("p",{parentName:"admonition"},"Testomato can't detect Meta refreshes redirects.")),(0,c.yg)("h3",{id:"create-new-page-check"},"Create new Page check"),(0,c.yg)("p",null,"First you have to create a new ",(0,c.yg)("strong",{parentName:"p"},"Page check"),":"),(0,c.yg)("p",null,(0,c.yg)("img",{alt:"Add new Page check",src:r(1206).A,width:"1206",height:"298"})),(0,c.yg)("p",null,"Enter the URL you want to check:"),(0,c.yg)("p",null,(0,c.yg)("img",{alt:"Enter URL for check",src:r(52366).A,width:"1177",height:"503"})),(0,c.yg)("admonition",{type:"important"},(0,c.yg)("p",{parentName:"admonition"},"This form always follow redirects. Do not worry, you can change that URL later. ")),(0,c.yg)("h3",{id:"check-redirect-response-code"},"Check Redirect response code"),(0,c.yg)("p",null,"Click on the pencil to edit ",(0,c.yg)("strong",{parentName:"p"},"Page check"),":"),(0,c.yg)("p",null,(0,c.yg)("img",{alt:"Edit new Page check",src:r(54120).A,width:"1553",height:"299"})),(0,c.yg)("p",null,"Edit new ",(0,c.yg)("strong",{parentName:"p"},"Page check"),":"),(0,c.yg)("p",null,(0,c.yg)("img",{alt:"Edit new Page check",src:r(86319).A,width:"1552",height:"763"})),(0,c.yg)("ol",null,(0,c.yg)("li",{parentName:"ol"},"Change check URL if needed"),(0,c.yg)("li",{parentName:"ol"},"Add expected response code"),(0,c.yg)("li",{parentName:"ol"},"Turn off ",(0,c.yg)("strong",{parentName:"li"},"Follow redirects")," "),(0,c.yg)("li",{parentName:"ol"},"Save changes")),(0,c.yg)("h3",{id:"check-redirect-location-url"},"Check Redirect location URL"),(0,c.yg)("p",null,"You can also check exact Redirect location URL. Click on the pencil to edit ",(0,c.yg)("strong",{parentName:"p"},"Page check"),":"),(0,c.yg)("p",null,(0,c.yg)("img",{alt:"Edit new Page check",src:r(54120).A,width:"1553",height:"299"})),(0,c.yg)("p",null,"Add ",(0,c.yg)("strong",{parentName:"p"},"Redirect Location")," check:"),(0,c.yg)("p",null,(0,c.yg)("img",{alt:"Redirect location Check",src:r(29464).A,width:"1206",height:"568"})))}h.isMDXComponent=!0},1206:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/redirect-add-page-check-030d445ddcf6015f3676f0d82b35af83.png"},86319:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/redirect-check-edit-24acd5304bb9d17ac767fc95ec692a7b.png"},54120:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/redirect-edit-new-check-c92e1af59dc2f0767a413f102c73a6f7.png"},52366:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/redirect-enter-url-633525237cb766f71c08bbe1024d60a1.png"},29464:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/redirect-redirect-location-f8dd69ce6ea70de52e2bb6fa4afc4c59.png"}}]);