"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[218],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4055:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return u}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),l=["components"],s={title:"Project Create"},p=void 0,i={unversionedId:"api/project/project-create",id:"api/project/project-create",title:"Project Create",description:"API Endpoint",source:"@site/docs/api/project/09-project-create.md",sourceDirName:"api/project",slug:"/api/project/project-create",permalink:"/api/project/project-create",draft:!1,editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/api/project/09-project-create.md",tags:[],version:"current",lastUpdatedAt:1640176750,formattedLastUpdatedAt:"Dec 22, 2021",sidebarPosition:9,frontMatter:{title:"Project Create"},sidebar:"docs",previous:{title:"Project Groups",permalink:"/api/project/project-group"},next:{title:"Incident",permalink:"/api/incident"}},c={},u=[{value:"API Endpoint",id:"api-endpoint",level:3},{value:"Request params",id:"request-params",level:3},{value:"Authenticate user",id:"authenticate-user",level:3},{value:"Example",id:"example",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"api-endpoint"},"API Endpoint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"POST /api/project/create?period=[period]\n")),(0,o.kt)("h3",{id:"request-params"},"Request params"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Mandatory"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"period")),(0,o.kt)("td",{parentName:"tr",align:null},"Check period interval ",(0,o.kt)("inlineCode",{parentName:"td"},"5 minutes"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"30 minutes"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"1 hour"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"8 hours")," ,",(0,o.kt)("inlineCode",{parentName:"td"},"1 day")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"7 days")),(0,o.kt)("td",{parentName:"tr",align:null},"optional")))),(0,o.kt)("p",null,"Payload data:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"urls")),(0,o.kt)("td",{parentName:"tr",align:null},"array of URLs that will be add as new Testomato projects")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"blank")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean parameter specifies whether the preset check will be added automatically or not")))),(0,o.kt)("h3",{id:"authenticate-user"},"Authenticate user"),(0,o.kt)("p",null,"First you have to retrieve ",(0,o.kt)("inlineCode",{parentName:"p"},"SESSION_ID")," from us:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -F "login=email@example.com" -F "password=123456" https://www.testomato.com/api/auth/login\n')),(0,o.kt)("p",null,"You can use ",(0,o.kt)("a",{parentName:"p",href:"http://php.net/manual/en/book.curl.php"},"standard CURL from PHP")," to retrieve ",(0,o.kt)("inlineCode",{parentName:"p"},"SESSION_ID"),". We are expect here ",(0,o.kt)("strong",{parentName:"p"},"password")," and ",(0,o.kt)("strong",{parentName:"p"},"user login")," (email) as POST field:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$curl = curl_init();\ncurl_setopt($curl, CURLOPT_URL, 'https://www.testomato.com/api/auth/login');\ncurl_setopt($curl, CURLOPT_POST, true);\ncurl_setopt($curl, CURLOPT_POSTFIELDS, ['login' => 'email@example.com', 'password' => '123456']);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\n\n$session_id = json_decode(curl_exec($curl))->session->id;\n")),(0,o.kt)("p",null,"You are getting from us valid JSON response with following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "123",\n    "isLoggedIn": true,\n    "session": {\n        "id": "4as56d4asf46456f654"\n    }\n}\n')),(0,o.kt)("p",null,"Now you have ",(0,o.kt)("a",{parentName:"p",href:"http://php.net/manual/en/function.session-id.php"},"SESSION_ID"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"SESSION_ID")," need to be used in ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/project/create")," POST request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$url = sprintf(\"https://www.testomato.com/api/project/create?%s\", http_build_query(['period' => $period]));\n\n$data = json_encode(['urls' => ['https://example.com'], 'blank' => $blank]);\n\n$curl = curl_init();\ncurl_setopt($curl, CURLOPT_URL, $url);\ncurl_setopt($curl, CURLOPT_POST, true);\ncurl_setopt($curl, CURLOPT_COOKIE, sprintf(\"PHPSESSID=%s; path=/\", $session_id));\ncurl_setopt($curl, CURLOPT_POSTFIELDS, $data);\ncurl_setopt($curl, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\n\n$response = curl_exec($curl);\n")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n/**\n * Testomato API example\n *\n * @author Roman O\u017eana <roman@ozana.cz>\n */\nclass TestomatoApi {\n\n    const URL = 'https://www.testomato.com/api/';\n    const AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.71 Safari/537.36';\n\n    static string $session_id = '';\n\n    /**\n     * @throws Exception\n     */\n    public static function login(string $login, string $password): stdClass {\n        $curl = curl_init();\n        curl_setopt($curl, CURLOPT_URL, sprintf(\"%s/auth/login\", self::URL));\n        curl_setopt($curl, CURLOPT_POST, true);\n        curl_setopt($curl, CURLOPT_POSTFIELDS, ['login' => $login, 'password' => $password]);\n        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\n\n        $response = json_decode(curl_exec($curl));\n\n        if (\n            isset($response->session->id) && $response->session->id &&\n            isset($response->isLoggedIn) && $response->isLoggedIn\n        ) {\n            static::$session_id = $response->session->id;\n            return $response;\n        } else {\n            throw new Exception('Login was not successful!' . isset($response->messsage) ? ' ' . $response->message : null);\n        }\n    }\n\n    public static function addProjects(array $urls, $blank = false, $period = '5 minutes'): Generator {\n        $url = sprintf(\"%s/project/create?%s\", self::URL, http_build_query(['period' => $period]));\n\n        $data = json_encode(['urls' => $urls, 'blank' => $blank]);\n\n        $curl = curl_init();\n        curl_setopt($curl, CURLOPT_URL, $url);\n        curl_setopt($curl, CURLOPT_POST, true);\n        curl_setopt($curl, CURLOPT_USERAGENT, self::AGENT);\n        curl_setopt($curl, CURLOPT_COOKIE, sprintf(\"PHPSESSID=%s; path=/\", static::$session_id));\n        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);\n        curl_setopt($curl, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);\n        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\n\n        $response = str_replace('}{', \"}\\n{\", curl_exec($curl));\n\n        foreach (explode(\"\\n\", $response) as $part) {\n            yield json_decode($part);\n        }\n    }\n\n    /**\n     * @throws Exception\n     */\n    public static function logout(): stdClass {\n        $curl = curl_init();\n        curl_setopt($curl, CURLOPT_URL, sprintf(\"%s/auth/logout\", self::URL));\n        curl_setopt($curl, CURLOPT_POST, true);\n        curl_setopt($curl, CURLOPT_USERAGENT, self::AGENT);\n        curl_setopt($curl, CURLOPT_COOKIE, sprintf(\"PHPSESSID=%s; path=/\", static::$session_id));\n        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\n\n        $response = json_decode(curl_exec($curl));\n\n        if (isset($response->message)) {\n            return $response;\n        } else {\n            throw new \\Exception('Invalid response format');\n        }\n\n    }\n}\n")),(0,o.kt)("p",null,"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nrequire_once __DIR__ . '/TestomatoApi.php';\n\n$login = TestomatoApi::login('exampl@email.com', '123456'); // login\n\nforeach (TestomatoApi::addProjects(['https://example.com', 'https://example2.com']) as $response) {\n    if (isset($response->id)) {\n        printf(\"https://www.testomato.com/project/%s/#/tests\\n\", $response->id);\n    }\n}\n\necho TestomatoApi::logout()->message; // logout\n")))}m.isMDXComponent=!0}}]);