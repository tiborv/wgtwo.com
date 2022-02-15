"use strict";(self.webpackChunkworking_group_two_website=self.webpackChunkworking_group_two_website||[]).push([[835],{4137:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,y=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7755:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return m},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(4137)),i=["components"],s={slug:"kafka-timers",title:"Kafka timers",date:new Date("2021-02-28T00:00:00.000Z"),tags:["kafka","timer","stateless"],authors:"sergey-zyrianov"},l=void 0,c={permalink:"/blog/kafka-timers",editUrl:"https://github.com/working-group-two/wgtwo.com/edit/main/blog/../blog/2021-02-28-kafka-timers.md",source:"@site/../blog/2021-02-28-kafka-timers.md",title:"Kafka timers",description:"A timer is a cornerstone of any software that communicates over the network. There are plenty of implementations",date:"2021-02-28T00:00:00.000Z",formattedDate:"February 28, 2021",tags:[{label:"kafka",permalink:"/blog/tags/kafka"},{label:"timer",permalink:"/blog/tags/timer"},{label:"stateless",permalink:"/blog/tags/stateless"}],readingTime:4.69,truncated:!0,authors:[{name:"Sergey Zyrianov",title:"Tech Lead @ wgtwo",url:"https://www.linkedin.com/in/sergey-zyrianov-8a7ab34/",imageURL:"https://media-exp1.licdn.com/dms/image/C4E03AQGorLVCY4wycA/profile-displayphoto-shrink_400_400/0/1517717861631?e=1648684800&v=beta&t=AlFhQGwrDEEj2XpvCyK5RzuwGE8Fw1TkPCT66GOAIAI",key:"sergey-zyrianov"}],frontMatter:{slug:"kafka-timers",title:"Kafka timers",date:"2021-02-28T00:00:00.000Z",tags:["kafka","timer","stateless"],authors:"sergey-zyrianov"},prevItem:{title:"Mitsui Knowledge Industry (MKI) to develop private networks business",permalink:"/blog/mitsui-knowledge-industry-mki-private-networks-business"},nextItem:{title:"Changing the color of your bulbs: The fancy way",permalink:"/blog/mqtt-event-bridge"}},u={authorsImageUrls:[void 0]},m=[],p={toc:m};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A timer is a cornerstone of any software that communicates over the network. There are plenty of implementations\nthat provide a timer facility. Most of them are in memory and will lose scheduled timers should the application crash.\nIn this blog we discuss durable Kafka timers that do not depend on in memory state. By design\nwe shall assume 1 second resolution of these timers."))}f.isMDXComponent=!0}}]);