"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[8079],{1837:function(e){e.exports=JSON.parse('{"url":"redocusaurus/plugin-redoc-0.yaml","themeId":"theme-redoc","isSpecFile":true,"spec":{"openapi":"3.0.1","info":{"title":"Testomato API","description":"","version":"1.0.0","contact":{"email":"support@testomato.com"}},"servers":[{"url":"https://testomato.com/api/","description":"Testomato"}],"paths":{"/api/project/create":{"post":{"operationId":"Create Project","description":"Create a new Project from array of URLs. Successful response will be streamed as JSONP format response","tags":["Project"],"requestBody":{"content":{"application/json":{"schema":{"properties":{"urls":{"type":"array","description":"Array of URLs","example":["https://www.example.com","https://testomato.com"]}}}}}},"responses":{"200":{"description":"There Successfully created projects. Response is <a href=\\"https://en.wikipedia.org/wiki/JSONP\\" target=\\"_blank\\">JSONP</a> payload with individual projects.","content":{"application/json":{"schema":{"allOf":[{"$ref":"#/components/schemas/Project"},{"type":"object","properties":{"originalUrl":{"description":"Original URL that was processed","type":"string"}}}]}}}},"400":{"description":"Sorry! You can only add 30 projects at a time."},"403":{"description":"You have reached your project limit."},"406":{"description":"Invalid or not supported URL"},"500":{"description":"Project creation failed with fatal error."}}}},"/project/{id}":{"get":{"operationId":"Get Project","description":"Retrieve project by `Project ID`","security":[{"ApiKey":[]}],"tags":["Project"],"parameters":[{"$ref":"#/components/parameters/ProjectId"}],"responses":{"200":{"description":"Successful operation","content":{"application/json":{"schema":{"allOf":[{"$ref":"#/components/schemas/Project"},{"$ref":"#/components/schemas/ProjectPermissions"}]}}}},"404":{"$ref":"#/components/responses/NotFound"}}},"put":{"operationId":"Update project","description":"Update selected project","tags":["Project"],"security":[{"ApiKey":[]}],"responses":{"200":{"description":"Successfully operation"},"404":{"$ref":"#/components/responses/NotFound"}},"parameters":[{"name":"id","required":true,"description":"Project ID","in":"path","schema":{"type":"string"}}]},"delete":{"operationId":"Delete Project","description":"Delete selected Project","tags":["Project"],"responses":{"404":{"$ref":"#/NotFound"}},"security":[{"ApiKey":[]}],"parameters":[{"name":"id","required":true,"description":"Project ID","in":"path","schema":{"type":"string"}}]}},"/project/{id}/status":{"get":{"description":"Get project status","tags":["Project"],"parameters":[{"$ref":"#/components/parameters/ProjectId"}],"responses":{"200":{"description":"Project status"}}}},"/project/{id}/start":{"get":{"description":"Start all checks in project","operationId":"Starts project checks","tags":["Project"],"parameters":[{"$ref":"#/components/parameters/ProjectId"}],"responses":{"200":{"description":"OL"}}}},"/api/project/{id}/job/{jobid}/results":{"get":{"description":"Retrieve latest Project\'s checks results","operationId":"Get project results","tags":["Project"],"parameters":[{"$ref":"#/components/parameters/ProjectId"}],"responses":{"200":{"description":"Ok"}}}},"/api/project/{id}/regenerateApiKey":{"description":"Regenerate project API key","parameters":[{"name":"id","required":true,"description":"Project ID","in":"path","schema":{"type":"string"}}]},"/tests/{id}":{"get":{"tags":["Checks"],"parameters":[{"$ref":"#/components/parameters/TestId"}],"responses":{"200":{"description":"Test response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Test"}}}}}}}},"components":{"parameters":{"ProjectId":{"description":"Project ID","in":"path","name":"id","required":true,"schema":{"type":"string"}},"TestId":{"description":"Test ID","in":"path","name":"id","required":true,"schema":{"type":"string"}}},"securitySchemes":{"ApiKey":{"description":"Project or User API key","type":"apiKey","name":"apiKey","in":"query"}},"responses":{"SuccessMessage":{"description":"Common success massage","content":{"application/json":{"schema":{"properties":{"message":{"type":"string"},"code":{"type":"integer","default":200},"ok":{"type":"boolean","default":true},"error":{"type":"boolean","default":false}}}}}},"ErrorMessage":{"description":"Common error message","content":{"application/json":{"schema":{"properties":{"message":{"type":"string","description":"Error message text"},"code":{"type":"integer","default":404},"ok":{"type":"boolean","default":false},"error":{"type":"boolean","default":true}}}}}},"NotFound":{"description":"Object not found error","content":{"application/json":{"schema":{"properties":{"message":{"description":"Error message text","default":"Object not found","type":"string"},"code":{"description":"Error code number","default":404,"type":"integer"},"ok":{"type":"boolean","default":false},"error":{"type":"boolean","default":true}}}}}}},"schemas":{"ProjectPermissions":{"type":"object","properties":{"permissions":{"type":"object","description":"Project permissions for current user","properties":{"read":{"type":"boolean","description":"Can current user view results?"},"run":{"type":"boolean","description":"Can current user run checks?"},"editTest":{"type":"boolean"},"edit":{"type":"boolean","description":"Can current user edit project settings?"},"manageUsers":{"description":"Can current user manage others?","type":"boolean"},"apiKey":{"description":"Can current user view apiKey?","type":"boolean"},"leave":{"description":"Can current user leave project?","type":"boolean"}}}}},"Project":{"type":"object","properties":{"id":{"description":"Project ID","type":"string"},"title":{"description":"Project title","type":"string"},"url":{"description":"Project base URL","type":"string"},"period":{"description":"Period of test checking - `false` means never check Test automatically.","default":"5 minutes","enum":["5 minutes","30 minutes","1 hour","8 hours","1 day","7 days",false],"type":"string"},"uptimeUrl":{"description":"Uptime URL","type":"string"},"uptimeEnabled":{"description":"Uptime period in seconds - `false` means uptime is disabled","type":"string","enum":[false,15,30,60]},"apiKey":{"description":"apiKey that can be used for the project operations","type":"string"},"payerId":{"description":"Identification of the project owner.","type":"integer"},"location":{"description":"Project check location","type":"string","enum":["eu","de","gb","ca","us","tx","dc","sg","hk"]},"checkDefaultErrors":{"type":"boolean","default":true},"created":{"description":"Date and time of project creation","type":"string","format":"date-time"},"userAgent":{"description":"User agent","type":"string"},"delay":{"description":"Delay between requests","type":"integer","format":"int64","default":50},"userIds":{"type":"array","description":"Array of users ID\'s with access to the project","items":{"type":"integer"}},"name":{"description":"Project name was replaced by Project title","type":"string","deprecated":true}}},"Test":{"type":"object","properties":{"id":{"type":"string"}}}}}}}')}}]);