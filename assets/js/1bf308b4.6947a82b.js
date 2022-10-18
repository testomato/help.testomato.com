"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[1761],{70841:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return h},default:function(){return j},frontMatter:function(){return y},metadata:function(){return f},toc:function(){return b}});var i=a(87462),o=a(63366),s=(a(67294),a(3905)),r=a(26389),n=a(94891),p=a(74933),l=a(47507),c=a(24310),m=a(63303),d=(a(75035),a(85162)),u=["components"],y={id:"update-project",title:"Update Project",description:"Update selected Project",sidebar_label:"Update Project",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Update Project",description:"Update selected Project",tags:["Project"],security:[{ApiKey:[]}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{id:{description:"Project ID",example:"50a9f72f14db3be812000233",type:"string"},title:{description:"Project title",type:"string"},url:{description:"Project base URL",example:"https://testomato.com",type:"string"},period:{description:"Period of test checking - `false` means never check Test automatically.",default:"5 minutes",enum:["5 minutes","30 minutes","1 hour","8 hours","1 day","7 days",!1],type:"string"},uptimeUrl:{description:"Uptime URL",type:"string"},uptimeEnabled:{description:"Uptime period in seconds - `false` means uptime is disabled",type:"string",enum:[!1,15,30,60]},apiKey:{description:"apiKey that can be used for the project operations",example:123456,type:"string"},payerId:{description:"Identification of the project owner.",type:"integer"},location:{description:"Project check location",type:"string",enum:["eu","de","gb","ca","us","tx","dc","sg","hk"]},checkDefaultErrors:{type:"boolean",default:!0},created:{description:"Date and time of project creation",type:"string",format:"date-time"},userAgent:{description:"User agent",default:"Testomatobot/1.0 (Linux x86_64; +https://www.testomato.com/testomatobot) minicrawler/5.2.2",type:"string"},timeout:{description:"Cumulated project timeout in seconds",type:"integer",default:3},delay:{description:"Bulk request delay in miliseconds",type:"integer",format:"int64",default:50},userIds:{type:"array",description:"Array of users ID's with access to the project",items:{type:"integer"}},name:{description:"Project name was replaced by Project title",type:"string",deprecated:!0}}}}}},responses:{200:{description:"Common success massage",content:{"application/json":{schema:{properties:{message:{type:"string"},code:{type:"integer",default:200},ok:{type:"boolean",default:!0},error:{type:"boolean",default:!1}}}}}},404:{description:"Object not found error",content:{"application/json":{schema:{properties:{message:{description:"Error message text",default:"Object not found",type:"string"},code:{description:"Error code number",default:404,type:"integer"},ok:{type:"boolean",default:!1},error:{type:"boolean",default:!0}}}}}}},parameters:[{name:"id",description:"A unique Project ID",example:"5e9602e7a39e5a46428b457f",allowEmptyValue:!1,required:!0,in:"path",schema:{type:"string"}}],method:"put",path:"/project/{id}",servers:[{url:"https://testomato.com/api/",description:"Testomato"}],securitySchemes:{ApiKey:{description:"Project or User API key",type:"apiKey",name:"apiKey",in:"query"}},jsonRequestBodyExample:{id:"50a9f72f14db3be812000233",title:"string",url:"https://testomato.com",period:"5 minutes",uptimeUrl:"string",uptimeEnabled:!1,apiKey:123456,payerId:0,location:"eu",checkDefaultErrors:!0,created:"2022-10-18",userAgent:"Testomatobot/1.0 (Linux x86_64; +https://www.testomato.com/testomatobot) minicrawler/5.2.2",timeout:3,delay:50,userIds:[0]},info:{title:"Testomato API",description:"If you would like to participate in the future development of our\nroadmap, please don't be shy! We'd love to hear your suggestions:\nsupport@testomato.com\n",termsOfService:"https://www.testomato.com/terms-of-service",version:"1.0.0",contact:{email:"support@testomato.com"}},postman:{name:"Update Project",description:{content:"Update selected Project",type:"text/plain"},url:{path:["project",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) A unique Project ID",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"apiKey",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"query",key:"in"}]}}},sidebar_class_name:"put api-method",info_path:"docs/api/testomato-api"},h=void 0,f={unversionedId:"api/update-project",id:"api/update-project",title:"Update Project",description:"Update selected Project",source:"@site/docs/api/update-project.api.mdx",sourceDirName:"api",slug:"/api/update-project",permalink:"/api/update-project",draft:!1,editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/api/update-project.api.mdx",tags:[],version:"current",lastUpdatedAt:1666093578,formattedLastUpdatedAt:"Oct 18, 2022",frontMatter:{id:"update-project",title:"Update Project",description:"Update selected Project",sidebar_label:"Update Project",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Update Project",description:"Update selected Project",tags:["Project"],security:[{ApiKey:[]}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{id:{description:"Project ID",example:"50a9f72f14db3be812000233",type:"string"},title:{description:"Project title",type:"string"},url:{description:"Project base URL",example:"https://testomato.com",type:"string"},period:{description:"Period of test checking - `false` means never check Test automatically.",default:"5 minutes",enum:["5 minutes","30 minutes","1 hour","8 hours","1 day","7 days",!1],type:"string"},uptimeUrl:{description:"Uptime URL",type:"string"},uptimeEnabled:{description:"Uptime period in seconds - `false` means uptime is disabled",type:"string",enum:[!1,15,30,60]},apiKey:{description:"apiKey that can be used for the project operations",example:123456,type:"string"},payerId:{description:"Identification of the project owner.",type:"integer"},location:{description:"Project check location",type:"string",enum:["eu","de","gb","ca","us","tx","dc","sg","hk"]},checkDefaultErrors:{type:"boolean",default:!0},created:{description:"Date and time of project creation",type:"string",format:"date-time"},userAgent:{description:"User agent",default:"Testomatobot/1.0 (Linux x86_64; +https://www.testomato.com/testomatobot) minicrawler/5.2.2",type:"string"},timeout:{description:"Cumulated project timeout in seconds",type:"integer",default:3},delay:{description:"Bulk request delay in miliseconds",type:"integer",format:"int64",default:50},userIds:{type:"array",description:"Array of users ID's with access to the project",items:{type:"integer"}},name:{description:"Project name was replaced by Project title",type:"string",deprecated:!0}}}}}},responses:{200:{description:"Common success massage",content:{"application/json":{schema:{properties:{message:{type:"string"},code:{type:"integer",default:200},ok:{type:"boolean",default:!0},error:{type:"boolean",default:!1}}}}}},404:{description:"Object not found error",content:{"application/json":{schema:{properties:{message:{description:"Error message text",default:"Object not found",type:"string"},code:{description:"Error code number",default:404,type:"integer"},ok:{type:"boolean",default:!1},error:{type:"boolean",default:!0}}}}}}},parameters:[{name:"id",description:"A unique Project ID",example:"5e9602e7a39e5a46428b457f",allowEmptyValue:!1,required:!0,in:"path",schema:{type:"string"}}],method:"put",path:"/project/{id}",servers:[{url:"https://testomato.com/api/",description:"Testomato"}],securitySchemes:{ApiKey:{description:"Project or User API key",type:"apiKey",name:"apiKey",in:"query"}},jsonRequestBodyExample:{id:"50a9f72f14db3be812000233",title:"string",url:"https://testomato.com",period:"5 minutes",uptimeUrl:"string",uptimeEnabled:!1,apiKey:123456,payerId:0,location:"eu",checkDefaultErrors:!0,created:"2022-10-18",userAgent:"Testomatobot/1.0 (Linux x86_64; +https://www.testomato.com/testomatobot) minicrawler/5.2.2",timeout:3,delay:50,userIds:[0]},info:{title:"Testomato API",description:"If you would like to participate in the future development of our\nroadmap, please don't be shy! We'd love to hear your suggestions:\nsupport@testomato.com\n",termsOfService:"https://www.testomato.com/terms-of-service",version:"1.0.0",contact:{email:"support@testomato.com"}},postman:{name:"Update Project",description:{content:"Update selected Project",type:"text/plain"},url:{path:["project",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) A unique Project ID",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"apiKey",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"query",key:"in"}]}}},sidebar_class_name:"put api-method",info_path:"docs/api/testomato-api"},sidebar:"docs",previous:{title:"Get Project",permalink:"/api/get-project"},next:{title:"Delete Project",permalink:"/api/delete-project"}},g={},b=[{value:"Update Project",id:"update-project",level:2}],k={toc:b};function j(e){var t=e.components,a=(0,o.Z)(e,u);return(0,s.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"update-project"},"Update Project"),(0,s.kt)("p",null,"Update selected Project"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"id",description:"A unique Project ID",example:"5e9602e7a39e5a46428b457f",allowEmptyValue:!1,required:!0,in:"path",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(n.Z,{mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:"Project ID",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"title",required:!1,schemaDescription:"Project title",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"url",required:!1,schemaDescription:"Project base URL",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"period",required:!1,schemaDescription:"Period of test checking - `false` means never check Test automatically.",schemaName:"string",qualifierMessage:"**Possible values:** [`5 minutes`, `30 minutes`, `1 hour`, `8 hours`, `1 day`, `7 days`, `false`]",defaultValue:"5 minutes",mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"uptimeUrl",required:!1,schemaDescription:"Uptime URL",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"uptimeEnabled",required:!1,schemaDescription:"Uptime period in seconds - `false` means uptime is disabled",schemaName:"string",qualifierMessage:"**Possible values:** [`false`, `15`, `30`, `60`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"apiKey",required:!1,schemaDescription:"apiKey that can be used for the project operations",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"payerId",required:!1,schemaDescription:"Identification of the project owner.",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"location",required:!1,schemaDescription:"Project check location",schemaName:"string",qualifierMessage:"**Possible values:** [`eu`, `de`, `gb`, `ca`, `us`, `tx`, `dc`, `sg`, `hk`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"checkDefaultErrors",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:!0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"created",required:!1,schemaDescription:"Date and time of project creation",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"userAgent",required:!1,schemaDescription:"User agent",schemaName:"string",qualifierMessage:void 0,defaultValue:"Testomatobot/1.0 (Linux x86_64; +https://www.testomato.com/testomatobot) minicrawler/5.2.2",mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"timeout",required:!1,schemaDescription:"Cumulated project timeout in seconds",schemaName:"integer",qualifierMessage:void 0,defaultValue:3,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"delay",required:!1,schemaDescription:"Bulk request delay in miliseconds",schemaName:"int64",qualifierMessage:void 0,defaultValue:50,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"userIds",required:!1,schemaDescription:"Array of users ID's with access to the project",schemaName:"integer[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:"Project name was replaced by Project title",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Common success massage")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"code",required:!1,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:200,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"ok",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:!0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"error",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:!1,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "message": "string",\n  "code": 200,\n  "ok": true,\n  "error": false\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Object not found error")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaDescription:"Error message text",schemaName:"string",qualifierMessage:void 0,defaultValue:"Object not found",mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"code",required:!1,schemaDescription:"Error code number",schemaName:"integer",qualifierMessage:void 0,defaultValue:404,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"ok",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:!1,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"error",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:!0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "message": "Object not found",\n  "code": 404,\n  "ok": false,\n  "error": true\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}j.isMDXComponent=!0}}]);