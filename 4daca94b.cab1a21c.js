(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{103:function(e,r,t){"use strict";t.d(r,"a",(function(){return m})),t.d(r,"b",(function(){return O}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function b(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=l(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},u=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),m=l(t),u=n,O=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return t?a.a.createElement(O,i(i({ref:r},s),{},{components:t})):a.a.createElement(O,i({ref:r},s))}));function O(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=u;var i={};for(var b in r)hasOwnProperty.call(r,b)&&(i[b]=r[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},147:function(e,r,t){"use strict";t.r(r),r.default=t.p+"assets/images/common-server-error-messages-5d4fdbe405d4a456b78203e46fc0116a.png"},76:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return b})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(7),o=(t(0),t(103)),c={id:"common-server-errors",title:"Common Server Errors"},i={unversionedId:"common-server-errors",id:"common-server-errors",isDocsHomePage:!1,title:"Common Server Errors",description:"Testomato is sensitive to Common Server Error Messages. They are a marker",source:"@site/docs/common-server-errors.md",slug:"/common-server-errors",permalink:"/common-server-errors",editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/common-server-errors.md",version:"current",lastUpdatedAt:1587493981,sidebar:"docs",previous:{title:"Project",permalink:"/project"},next:{title:"Checks",permalink:"/checks/introduction"}},b=[{value:"Disable Common Server Error Check",id:"disable-common-server-error-check",children:[]}],s={rightToc:b};function l(e){var r=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,c,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.testomato.com"}),"Testomato")," is sensitive to ",Object(o.b)("strong",{parentName:"p"},"Common Server Error Messages"),". They are a marker\nfor us to indicate that something is broken on your website."),Object(o.b)("h4",{id:"php-errors"},"PHP Errors"),Object(o.b)("p",null,"Testomato is sensitive to ",Object(o.b)("strong",{parentName:"p"},"all types of PHP error messages"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Fatal error")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Catchable fatal error")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Warning")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Parse error")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Notice")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Strict Standards")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Deprecated")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Unknown error"))),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/book.errorfunc.php"}),"https://www.php.net/manual/en/book.errorfunc.php")),Object(o.b)("h4",{id:"database-errors"},"Database Errors"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://dev.mysql.com/doc/refman/8.0/en/server-error-reference.html"}),"All MySQL error messages"))),Object(o.b)("h4",{id:"database-connection-errors"},"Database connection errors"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"The server encountered an internal error")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Internal server error")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Can't connect to MySQL server")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Your browser sent a request that this server could not understand or process")),Object(o.b)("li",{parentName:"ul"},"Wordpress ",Object(o.b)("inlineCode",{parentName:"li"},"Error establishing a database connection"))),Object(o.b)("h4",{id:"php-debuggers"},"PHP Debuggers"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://xdebug.org"}),"XDebug")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/nette/tracy"}),"Tracy Debuger")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://symfony.com"}),"Symfony error pages")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.phusionpassenger.com/"}),"Phusion Passenger errors")),Object(o.b)("li",{parentName:"ul"},"Blank page - empty page without any content")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"We have a page that shows randomly generated examples of some of the\nmost common error messages: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.testomato.com/example/error"}),"https://www.testomato.com/example/error")))),Object(o.b)("h3",{id:"disable-common-server-error-check"},"Disable Common Server Error Check"),Object(o.b)("p",null,"You can disable this functionality in Project Settings:"),Object(o.b)("p",null,Object(o.b)("img",{src:t(147).default})))}l.isMDXComponent=!0}}]);