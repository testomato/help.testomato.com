"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[231],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=o,d=m["".concat(c,".").concat(h)]||m[h]||u[h]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8091:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={title:"CSRF protection"},c=void 0,l={unversionedId:"checks/CSRF-protection",id:"checks/CSRF-protection",title:"CSRF protection",description:"Testomato & CSRF protecion",source:"@site/docs/checks/06-CSRF-protection.md",sourceDirName:"checks",slug:"/checks/CSRF-protection",permalink:"/checks/CSRF-protection",editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/checks/06-CSRF-protection.md",tags:[],version:"current",lastUpdatedAt:1644307587,formattedLastUpdatedAt:"2/8/2022",sidebarPosition:6,frontMatter:{title:"CSRF protection"},sidebar:"docs",previous:{title:"Common Server Errors",permalink:"/checks/common-server-errors"},next:{title:"Notifications and alerts",permalink:"/checks/notifications"}},p={},u=[{value:"Testomato &amp; CSRF protecion",id:"testomato--csrf-protecion",level:2},{value:"What&#39;s CSRF protecion",id:"whats-csrf-protecion",level:2},{value:"Preventing CSRF Requests",id:"preventing-csrf-requests",level:3},{value:"Per-Form Tokens",id:"per-form-tokens",level:3},{value:"Resources",id:"resources",level:2}],m={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"testomato--csrf-protecion"},"Testomato & CSRF protecion"),(0,a.kt)("p",null,"Can Testomato hadle forms with CSRF protecion. The simply answer is NO.\nIf your application is protected from cross-site request forgery attacks, it's also\npreventing Testomato from sending requests with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/testomato/minicrawler"},"minicralwer"),", but we can try to\nbridge the simplest type of protection by doubling the request."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"During the first request"),", Testomato ignores HTTP response code -\nusually there\u2019s some sort of unauthorized request response,\nbut we update all hidden form params values and save the session."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"The second request")," is submitted within the same session in the hopes that one of the hidden params has a valid CSRF token")),(0,a.kt)("h2",{id:"whats-csrf-protecion"},"What's CSRF protecion"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery"},"Cross-site request forgeries")," are a type of malicious\nexploit where unauthorized commands are performed on behalf of an authenticated user."),(0,a.kt)("p",null,"In case you're not familiar with cross-site request forgeries, let's discuss an example of how this\nvulnerability can be exploited. Imagine your application has a ",(0,a.kt)("inlineCode",{parentName:"p"},"/user/email")," route that accepts a\n",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request to change the authenticated user's email address. Most likely, this route expects\nan email input field to contain the email address the user would like to begin using."),(0,a.kt)("p",null,"Without CSRF protection, a malicious website could create an HTML form that points to your\napplication's ",(0,a.kt)("inlineCode",{parentName:"p"},"/user/email")," route and submits the malicious user's own email address"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<form action="https://your-application.com/user/email" method="POST">\n  <input type="email" value="malicious-email@example.com">\n</form>\n\n<script>\n  document.forms[0].submit();\n<\/script>\n')),(0,a.kt)("h3",{id:"preventing-csrf-requests"},"Preventing CSRF Requests"),(0,a.kt)("p",null,'You can generate CSRF "token" for each active user session managed by the application.\nThis token is used to verify that the authenticated user is the person actually making\nthe requests to the application. Since this token is stored in the user\'s session\nand changes each time the session is regenerated, a malicious application is unable to access it.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'<?php\nsession_start();\nif (empty($_SESSION[\'token\'])) {\n    $_SESSION[\'token\'] = bin2hex(random_bytes(32));\n}\n$token = $_SESSION[\'token\'];\n?>\n<form action="https://your-application.com/user/email" method="POST">\n  <input type="email" value="malicious-email@example.com">\n  <input type="hidden" name="token" value="<?php echo $token ?>" />\n</form>\n')),(0,a.kt)("p",null,"Anytime you define an HTML form in your application,\nyou should include a hidden CSRF ",(0,a.kt)("inlineCode",{parentName:"p"},"_token")," field in the\nform so that the CSRF protection can validate the request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"if (!empty($_POST['token'])) {\n    if (hash_equals($_SESSION['token'], $_POST['token'])) {\n         // Proceed to process the form data\n    } else {\n         // Log this as a warning and keep an eye on these attempts\n    }\n}\n")),(0,a.kt)("h3",{id:"per-form-tokens"},"Per-Form Tokens"),(0,a.kt)("p",null,"You can go even further and generate Per-Form Tokens for every single\nform on your application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php $second_token = hash_hmac('sha256', '/my_form.php', $_SESSION['second_token']); ?>\n<input type=\"hidden\" name=\"token\" value=\"<?php echo $second_token ?>\" />\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n$calc = hash_hmac('sha256', '/my_form.php', $_SESSION['second_token']);\nif (hash_equals($calc, $_POST['token'])) {\n    // Continue...\n}\n")),(0,a.kt)("p",null,"You can also change the name of the token variable or invalidate a token\nperiodically in time. If you have a security requirement that each CSRF\ntoken is allowed to be usable exactly once, the simplest strategy\nis to regenerate it after each successful validation.\nHowever, doing so will invalidate every previous token which doesn't\nmix well with people who browse multiple tabs at once."),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery"},"Cross-site request forgeries")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://laravel.com/docs/8.x/csrf#csrf-explanation"},"CSRF Protection with Laravel")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://symfony.com/doc/current/security/csrf.html"},"CSRF Protection with Symfony")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://expressjs.com/en/resources/middleware/csurf.html"},"CSRF Protection with Express.js"))))}h.isMDXComponent=!0}}]);