"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9662],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=c(n),m=r,y=l["".concat(p,".").concat(m)]||l[m]||u[m]||o;return n?i.createElement(y,a(a({ref:t},d),{},{components:n})):i.createElement(y,a({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const o={},a="Incident Types",s={unversionedId:"administration/incident/incident-type",id:"administration/incident/incident-type",title:"Incident Types",description:"Dispatch allows you to categorize your incidents by defining incidents types and to map them to various Dispatch resources (e.g. templates).",source:"@site/docs/administration/incident/incident-type.mdx",sourceDirName:"administration/incident",slug:"/administration/incident/incident-type",permalink:"/dispatch/docs/administration/incident/incident-type",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/master/docs/docs/administration/incident/incident-type.mdx",tags:[],version:"current",frontMatter:{},sidebar:"adminSidebar",previous:{title:"Incident Priority",permalink:"/dispatch/docs/administration/incident/incident-priority"},next:{title:"Notification",permalink:"/dispatch/docs/administration/incident/notification"}},p={},c=[],d={toc:c},l="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(l,(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"incident-types"},"Incident Types"),(0,r.kt)("p",null,"Dispatch allows you to categorize your incidents by defining incidents types and to map them to various Dispatch resources (e.g. templates)."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(862).Z,width:"786",height:"1666"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Name:")," The name of the incident type presented to the user."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," The description of the incident type presented to the user."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Visibility:")," Allows you to specify how visible an incident of this type will be. For example, if ",(0,r.kt)("inlineCode",{parentName:"p"},"Open")," is chosen, then notifications about an incident of this type will be sent on incident creation and update, and updates included on daily incident reports. All Dispatch users will be able to see incidents of this type in the Web UI regardless of their role. Also, Dispatch will use the Google domain provided to add organization-wide permission to the incident folder and its contents when the incident is marked as closed. However, if ",(0,r.kt)("inlineCode",{parentName:"p"},"Restricted")," is chosen, incidents of this type will not be included in notifications, won't be visible to Dispatch users with a ",(0,r.kt)("inlineCode",{parentName:"p"},"member")," role in the Web UI, and Dispatch won't open the incident folder and its contents to the whole organization. This setting defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"Open"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Incident Template:")," Allows you to create a new or map an existing incident document template to the incident type."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Executive Template:")," Allows you to create a new or map an existing executive report document template to the incident type."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Review Template:")," Allows you to create a new or map an existing post-incident review document template to the incident type."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tracking Template:")," Allows you to create a new or map an existing incident tracking sheet template to the incident type."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exclude From Metrics:"),' Enable this setting to exclude all incidents of this type from metrics (e.g., "Simulation" or "Test" incidents).'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default Incident Type:")," If the reporter of an incident does not provide an incident type, a default incident type is used. Enable this setting to make this incident type the default."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Enabled:")," Whether the incident type is enabled or not."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Plugin Metadata:")," Allows you to define and pass metadata key-value pairs to plugins. For example, create issues in different Jira projects based on the incident type."))}u.isMDXComponent=!0},862:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/admin-ui-incident-types-254ff95675a9bdaaf9aea420dec55c59.png"}}]);