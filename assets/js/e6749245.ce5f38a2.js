"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[7827],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,u=m["".concat(p,".").concat(d)]||m[d]||g[d]||o;return n?a.createElement(u,c(c({ref:t},l),{},{components:n})):a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const o={id:"semantic",title:"Semantic checks",sidebar_label:"Semantic checks"},c=void 0,i={unversionedId:"checks/semantic",id:"checks/semantic",title:"Semantic checks",description:"Testomato can check some basics metadata or semantic tags inside HTML `` tag.",source:"@site/docs/checks/03-semantic.md",sourceDirName:"checks",slug:"/checks/semantic",permalink:"/checks/semantic",draft:!1,editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/checks/03-semantic.md",tags:[],version:"current",lastUpdatedAt:1618859174,formattedLastUpdatedAt:"Apr 19, 2021",sidebarPosition:3,frontMatter:{id:"semantic",title:"Semantic checks",sidebar_label:"Semantic checks"},sidebar:"docs",previous:{title:"String checks",permalink:"/checks/string-checks"},next:{title:"Redirect check",permalink:"/checks/redirect"}},p={},s=[{value:"Page title",id:"page-title",level:3},{value:"Meta description",id:"meta-description",level:3},{value:"The Open Graph tags",id:"the-open-graph-tags",level:3},{value:"Twitter Cards tags",id:"twitter-cards-tags",level:3}],l={toc:s},m="wrapper";function g(e){let{components:t,...o}=e;return(0,r.yg)(m,(0,a.A)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Testomato can check some basics ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Metadata"},"metadata")," or semantic tags inside HTML ",(0,r.yg)("inlineCode",{parentName:"p"},"<head>")," tag. "),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Twitter Semantic",src:n(19745).A,width:"1166",height:"775"})),(0,r.yg)("h3",{id:"page-title"},"Page title"),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title"},"title tag")," is main and most important anchor for SEO.\nCheck ",(0,r.yg)("inlineCode",{parentName:"p"},"Page <title>")," allow you to check exact HTML ",(0,r.yg)("inlineCode",{parentName:"p"},"<title>")," tag content:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},"<title>content...</title>\n")),(0,r.yg)("h3",{id:"meta-description"},"Meta description"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<meta name="description" content="content..."/>\n')),(0,r.yg)("h3",{id:"the-open-graph-tags"},"The Open Graph tags"),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"https://ogp.me/"},"Open Graph protocol")," enables any web page to become a rich object in a social graph.\nFor instance, this is used on Facebook to allow any web page to have the same functionality as any other object on Facebook."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<meta property="og:title" content="content..."/>\n<meta property="og:description" content="content..."/>\n<meta property="og:image" content="content..."/>\n<meta property="og:image:height" content="content..."/>\n<meta property="og:image:width" content="content..."/>\n<meta property="og:type" content="content..."/>\n<meta property="og:url" content="content..."/>\n<meta property="og:site_name" content="content..."/>\n<meta property="og:locale" content="content..."/>\n<meta property="og:updated_time" content="content..."/>\n')),(0,r.yg)("p",null,"and without ",(0,r.yg)("inlineCode",{parentName:"p"},"og")," prefixes"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<meta property="article:modified_time" content="content..."/>\n<meta property="article:published_time" content="content..."/>\n<meta property="article:publisher" content="content..."/>\n<meta property="article:section" content="content..."/>\n<meta property="article:tag" content="content..."/>\n')),(0,r.yg)("h3",{id:"twitter-cards-tags"},"Twitter Cards tags"),(0,r.yg)("p",null,"Testomato allow check ",(0,r.yg)("a",{parentName:"p",href:"https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards"},"Twitter Card")," markup meta: "),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Twitter Semantic",src:n(92275).A,width:"1556",height:"710"})),(0,r.yg)("p",null,"Currently are supported follow markups:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<meta name="twitter:title" content="content..."/>\n<meta name="twitter:image" content="content..."/>\n<meta name="twitter:image:alt" content="content..."/>\n<meta name="twitter:description" content="content..."/>\n<meta name="twitter:card" content="content..."/>\n<meta name="twitter:site" content="content..."/>\n')),(0,r.yg)("p",null,"Get more information about ",(0,r.yg)("a",{parentName:"p",href:"https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup"},"Twitter Cards markup"),"."))}g.isMDXComponent=!0},92275:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/semantic-checks-twitter-cfb8477106867f88511a757804f5a68f.png"},19745:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/semantic-checks-9772e6da22c98989479a5d9706cecd78.png"}}]);