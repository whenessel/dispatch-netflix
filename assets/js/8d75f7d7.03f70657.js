"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(n),g=i,f=d["".concat(c,".").concat(g)]||d[g]||s[g]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[d]="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={description:"Configuration options for the PagerDuty plugin."},a="Configuring PagerDuty",u={unversionedId:"administration/plugins/configuring-pagerduty",id:"administration/plugins/configuring-pagerduty",title:"Configuring PagerDuty",description:"Configuration options for the PagerDuty plugin.",source:"@site/docs/administration/plugins/configuring-pagerduty.mdx",sourceDirName:"administration/plugins",slug:"/administration/plugins/configuring-pagerduty",permalink:"/dispatch/docs/administration/plugins/configuring-pagerduty",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/master/docs/docs/administration/plugins/configuring-pagerduty.mdx",tags:[],version:"current",frontMatter:{description:"Configuration options for the PagerDuty plugin."},sidebar:"adminSidebar",previous:{title:"Configuring Opsgenie",permalink:"/dispatch/docs/administration/plugins/configuring-opsgenie"},next:{title:"Configuring Slack",permalink:"/dispatch/docs/administration/plugins/configuring-slack"}},c={},l=[{value:"Env Configuration",id:"env-configuration",level:3},{value:"<code>PAGERDUTY_API_KEY</code> [Required. Secret: True]",id:"pagerduty_api_key-required-secret-true",level:2},{value:"<code>PAGERDUTY_API_FROM_EMAIL</code> [Required]",id:"pagerduty_api_from_email-required",level:2},{value:"Oncall Service Configuration",id:"oncall-service-configuration",level:2}],p={toc:l},d="wrapper";function s(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuring-pagerduty"},"Configuring PagerDuty"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Dispatch ships with support for resolving on-call schedules via the PagerDuty API.")),(0,i.kt)("h3",{id:"env-configuration"},"Env Configuration"),(0,i.kt)("p",null,"Add the following env vars to your ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,i.kt)("h2",{id:"pagerduty_api_key-required-secret-true"},(0,i.kt)("inlineCode",{parentName:"h2"},"PAGERDUTY_API_KEY")," ","[","Required. Secret: True","]"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"PagerDuty API key.")),(0,i.kt)("h2",{id:"pagerduty_api_from_email-required"},(0,i.kt)("inlineCode",{parentName:"h2"},"PAGERDUTY_API_FROM_EMAIL")," ","[","Required","]"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Email to be added to all outgoing incident pages.")),(0,i.kt)("h2",{id:"oncall-service-configuration"},"Oncall Service Configuration"),(0,i.kt)("p",null,"Go to /services on your Web server running Dispatch and add a new service. Select type ",(0,i.kt)("inlineCode",{parentName:"p"},"pagerduty-oncall")," and add your PagerDuty Service ID in the external id field."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7617).Z,width:"1695",height:"1297"})))}s.isMDXComponent=!0},7617:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pagerduty-service-setup-5339e2eb2d6e6d856bfa05c0258f0479.png"}}]);