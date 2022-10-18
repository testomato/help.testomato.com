"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[456],{29198:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return h},default:function(){return j},frontMatter:function(){return y},metadata:function(){return f},toc:function(){return b}});var o=a(87462),r=a(63366),s=(a(67294),a(3905)),i=a(26389),l=a(94891),n=a(74933),p=a(47507),c=a(24310),m=a(63303),d=(a(75035),a(85162)),u=["components"],y={id:"delete-project",title:"Delete Project",description:"Delete selected Project",sidebar_label:"Delete Project",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Delete Project",description:"Delete selected Project",tags:["Project"],security:[{ApiKey:[]}],responses:{200:{description:"Common success massage",content:{"application/json":{schema:{properties:{message:{type:"string"},code:{type:"integer",default:200},ok:{type:"boolean",default:!0},error:{type:"boolean",default:!1}}}}}},404:{description:"Object not found error",content:{"application/json":{schema:{properties:{message:{description:"Error message text",default:"Object not found",type:"string"},code:{description:"Error code number",default:404,type:"integer"},ok:{type:"boolean",default:!1},error:{type:"boolean",default:!0}}}}}}},parameters:[{name:"id",description:"A unique Project ID",example:"5e9602e7a39e5a46428b457f",allowEmptyValue:!1,required:!0,in:"path",schema:{type:"string"}}],method:"delete",path:"/project/{id}",servers:[{url:"https://testomato.com/api/",description:"Testomato"}],securitySchemes:{ApiKey:{description:"Project or User API key",type:"apiKey",name:"apiKey",in:"query"}},info:{title:"Testomato API",description:"If you would like to participate in the future development of our\nroadmap, please don't be shy! We'd love to hear your suggestions:\nsupport@testomato.com\n",termsOfService:"https://www.testomato.com/terms-of-service",version:"1.0.0",contact:{email:"support@testomato.com"}},postman:{name:"Delete Project",description:{content:"Delete selected Project",type:"text/plain"},url:{path:["project",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) A unique Project ID",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE",auth:{type:"apikey",apikey:[{type:"any",value:"apiKey",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"query",key:"in"}]}}},sidebar_class_name:"delete api-method",info_path:"docs/api/testomato-api"},h=void 0,f={unversionedId:"api/delete-project",id:"api/delete-project",title:"Delete Project",description:"Delete selected Project",source:"@site/docs/api/delete-project.api.mdx",sourceDirName:"api",slug:"/api/delete-project",permalink:"/api/delete-project",draft:!1,editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/api/delete-project.api.mdx",tags:[],version:"current",lastUpdatedAt:1666093578,formattedLastUpdatedAt:"Oct 18, 2022",frontMatter:{id:"delete-project",title:"Delete Project",description:"Delete selected Project",sidebar_label:"Delete Project",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Delete Project",description:"Delete selected Project",tags:["Project"],security:[{ApiKey:[]}],responses:{200:{description:"Common success massage",content:{"application/json":{schema:{properties:{message:{type:"string"},code:{type:"integer",default:200},ok:{type:"boolean",default:!0},error:{type:"boolean",default:!1}}}}}},404:{description:"Object not found error",content:{"application/json":{schema:{properties:{message:{description:"Error message text",default:"Object not found",type:"string"},code:{description:"Error code number",default:404,type:"integer"},ok:{type:"boolean",default:!1},error:{type:"boolean",default:!0}}}}}}},parameters:[{name:"id",description:"A unique Project ID",example:"5e9602e7a39e5a46428b457f",allowEmptyValue:!1,required:!0,in:"path",schema:{type:"string"}}],method:"delete",path:"/project/{id}",servers:[{url:"https://testomato.com/api/",description:"Testomato"}],securitySchemes:{ApiKey:{description:"Project or User API key",type:"apiKey",name:"apiKey",in:"query"}},info:{title:"Testomato API",description:"If you would like to participate in the future development of our\nroadmap, please don't be shy! We'd love to hear your suggestions:\nsupport@testomato.com\n",termsOfService:"https://www.testomato.com/terms-of-service",version:"1.0.0",contact:{email:"support@testomato.com"}},postman:{name:"Delete Project",description:{content:"Delete selected Project",type:"text/plain"},url:{path:["project",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) A unique Project ID",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE",auth:{type:"apikey",apikey:[{type:"any",value:"apiKey",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"query",key:"in"}]}}},sidebar_class_name:"delete api-method",info_path:"docs/api/testomato-api"},sidebar:"docs",previous:{title:"Update Project",permalink:"/api/update-project"},next:{title:"Get Project status",permalink:"/api/get-project-status"}},k={},b=[{value:"Delete Project",id:"delete-project",level:2}],g={toc:b};function j(e){var t=e.components,a=(0,r.Z)(e,u);return(0,s.kt)("wrapper",(0,o.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"delete-project"},"Delete Project"),(0,s.kt)("p",null,"Delete selected Project"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(n.Z,{className:"paramsItem",param:{name:"id",description:"A unique Project ID",example:"5e9602e7a39e5a46428b457f",allowEmptyValue:!1,required:!0,in:"path",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Common success massage")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"code",required:!1,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:200,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"ok",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:!0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"error",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:!1,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "message": "string",\n  "code": 200,\n  "ok": true,\n  "error": false\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Object not found error")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaDescription:"Error message text",schemaName:"string",qualifierMessage:void 0,defaultValue:"Object not found",mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"code",required:!1,schemaDescription:"Error code number",schemaName:"integer",qualifierMessage:void 0,defaultValue:404,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"ok",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:!1,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"error",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:!0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "message": "Object not found",\n  "code": 404,\n  "ok": false,\n  "error": true\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}j.isMDXComponent=!0}}]);