"use strict";(self.webpackChunkrunlet_website=self.webpackChunkrunlet_website||[]).push([[3465],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},742:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),i=["components"],l={id:"scheduling",title:"Scheduling",sidebar_label:"Scheduling"},c=void 0,u={unversionedId:"job/scheduling",id:"job/scheduling",title:"Scheduling",description:"Users can schedule jobs with the every key when defining jobs. There are two valid syntaxes: cron-like format and human-readable.",source:"@site/docs/job/scheduling.md",sourceDirName:"job",slug:"/job/scheduling",permalink:"/docs/job/scheduling",draft:!1,editUrl:"https://github.com/runletapp/website/edit/main/docs/job/scheduling.md",tags:[],version:"current",frontMatter:{id:"scheduling",title:"Scheduling",sidebar_label:"Scheduling"},sidebar:"docs",previous:{title:"Arguments",permalink:"/docs/job/arguments"},next:{title:"Settings",permalink:"/docs/job/settings"}},s={},d=[{value:"Scheduling a job with the cron-like format",id:"scheduling-a-job-with-the-cron-like-format",level:3},{value:"Scheduling a job with the human-readable format",id:"scheduling-a-job-with-the-human-readable-format",level:3}],p={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Users can schedule jobs with the ",(0,a.kt)("inlineCode",{parentName:"p"},"every")," key when defining jobs. There are two valid syntaxes: cron-like format and human-readable."),(0,a.kt)("h3",{id:"scheduling-a-job-with-the-cron-like-format"},"Scheduling a job with the cron-like format"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'myjob:\n    script: backup.sh\n    every: "0 1 * * *"\n')),(0,a.kt)("p",null,"It runs ",(0,a.kt)("inlineCode",{parentName:"p"},"myjob")," every day at 1 AM."),(0,a.kt)("h3",{id:"scheduling-a-job-with-the-human-readable-format"},"Scheduling a job with the human-readable format"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"myjob:\n    script: backup.sh\n    every: 6h\n")),(0,a.kt)("p",null,"It runs ",(0,a.kt)("inlineCode",{parentName:"p"},"myjob")," every 6 hours. The first execution will happen in the following 6 hours. Possible other modifiers are ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," (seconds), ",(0,a.kt)("inlineCode",{parentName:"p"},"m")," (minutes) and ",(0,a.kt)("inlineCode",{parentName:"p"},"d")," (days)."))}h.isMDXComponent=!0}}]);