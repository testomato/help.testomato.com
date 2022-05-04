"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[933],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,c(c({ref:t},l),{},{components:n})):r.createElement(h,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3822:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),c=["components"],i={id:"semantic",title:"Semantic checks",sidebar_label:"Semantic checks"},p=void 0,s={unversionedId:"checks/semantic",id:"checks/semantic",title:"Semantic checks",description:"Testomato can check some basics metadata or semantic tags inside HTML `` tag.",source:"@site/docs/checks/03-semantic.md",sourceDirName:"checks",slug:"/checks/semantic",permalink:"/checks/semantic",editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/checks/03-semantic.md",tags:[],version:"current",lastUpdatedAt:1618859174,formattedLastUpdatedAt:"4/19/2021",sidebarPosition:3,frontMatter:{id:"semantic",title:"Semantic checks",sidebar_label:"Semantic checks"},sidebar:"docs",previous:{title:"String checks",permalink:"/checks/string-checks"},next:{title:"Redirect check",permalink:"/checks/redirect"}},l={},m=[{value:"Page title",id:"page-title",level:3},{value:"Meta description",id:"meta-description",level:3},{value:"The Open Graph tags",id:"the-open-graph-tags",level:3},{value:"Twitter Cards tags",id:"twitter-cards-tags",level:3}],u={toc:m};function d(e){var t=e.components,i=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Testomato can check some basics ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Metadata"},"metadata")," or semantic tags inside HTML ",(0,o.kt)("inlineCode",{parentName:"p"},"<head>")," tag. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Twitter Semantic",src:n(3883).Z,width:"1166",height:"775"})),(0,o.kt)("h3",{id:"page-title"},"Page title"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title"},"title tag")," is main and most important anchor for SEO.\nCheck ",(0,o.kt)("inlineCode",{parentName:"p"},"Page <title>")," allow you to check exact HTML ",(0,o.kt)("inlineCode",{parentName:"p"},"<title>")," tag content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<title>content...</title>\n")),(0,o.kt)("h3",{id:"meta-description"},"Meta description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<meta name="description" content="content..."/>\n')),(0,o.kt)("h3",{id:"the-open-graph-tags"},"The Open Graph tags"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://ogp.me/"},"Open Graph protocol")," enables any web page to become a rich object in a social graph.\nFor instance, this is used on Facebook to allow any web page to have the same functionality as any other object on Facebook."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<meta property="og:title" content="content..."/>\n<meta property="og:description" content="content..."/>\n<meta property="og:image" content="content..."/>\n<meta property="og:image:height" content="content..."/>\n<meta property="og:image:width" content="content..."/>\n<meta property="og:type" content="content..."/>\n<meta property="og:url" content="content..."/>\n<meta property="og:site_name" content="content..."/>\n<meta property="og:locale" content="content..."/>\n<meta property="og:updated_time" content="content..."/>\n')),(0,o.kt)("p",null,"and without ",(0,o.kt)("inlineCode",{parentName:"p"},"og")," prefixes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<meta property="article:modified_time" content="content..."/>\n<meta property="article:published_time" content="content..."/>\n<meta property="article:publisher" content="content..."/>\n<meta property="article:section" content="content..."/>\n<meta property="article:tag" content="content..."/>\n')),(0,o.kt)("h3",{id:"twitter-cards-tags"},"Twitter Cards tags"),(0,o.kt)("p",null,"Testomato allow check ",(0,o.kt)("a",{parentName:"p",href:"https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards"},"Twitter Card")," markup meta: "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Twitter Semantic",src:n(4514).Z,width:"1556",height:"710"})),(0,o.kt)("p",null,"Currently are supported follow markups:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<meta name="twitter:title" content="content..."/>\n<meta name="twitter:image" content="content..."/>\n<meta name="twitter:image:alt" content="content..."/>\n<meta name="twitter:description" content="content..."/>\n<meta name="twitter:card" content="content..."/>\n<meta name="twitter:site" content="content..."/>\n')),(0,o.kt)("p",null,"Get more information about ",(0,o.kt)("a",{parentName:"p",href:"https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup"},"Twitter Cards markup"),"."))}d.isMDXComponent=!0},4514:function(e,t,n){t.Z=n.p+"assets/images/semantic-checks-twitter-cfb8477106867f88511a757804f5a68f.png"},3883:function(e,t,n){t.Z=n.p+"assets/images/semantic-checks-9772e6da22c98989479a5d9706cecd78.png"}}]);