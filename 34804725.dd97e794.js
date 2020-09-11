(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{142:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},b=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,f=b["".concat(i,".").concat(d)]||b[d]||p[d]||a;return r?o.a.createElement(f,u(u({ref:t},s),{},{components:r})):o.a.createElement(f,u({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},143:function(e,t,r){"use strict";var n=r(0),o=r(19);t.a=function(){var e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},144:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var n=r(143),o=r(148);function a(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,u=void 0!==i&&i,c=a.absolute,s=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(u)return t+r;var l=!r.startsWith(t)?t+r.replace(/^\//,""):r;return s?e+l:l}(a,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},148:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},82:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(2),o=r(6),a=(r(0),r(142)),i=r(144),u={sidebar_label:"Rui.BOT",title:"Case Study: Rui.BOT"},c={unversionedId:"case-study/rui-bot",id:"case-study/rui-bot",isDocsHomePage:!1,title:"Case Study: Rui.BOT",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/case-study/rui-bot.mdx",slug:"/case-study/rui-bot",permalink:"/docs/case-study/rui-bot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/case-study/rui-bot.mdx",version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1599816783,sidebar_label:"Rui.BOT",sidebar:"docs",previous:{title:"Case Study: OSS.Chat",permalink:"/docs/case-study/osschat-bot"},next:{title:"Wechaty API Reference",permalink:"/docs/api/"}},s=[],l={rightToc:s};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("img",{alt:"Friday.BOT",src:Object(i.a)("img/docs/rui-bot.png"),width:"256",height:"256"}),Object(a.b)("p",null,"Rui.BOT is an assistant bot for Rui, who is the  Founder & CEO of Juzi.BOT."),Object(a.b)("p",null,"It has the following functions:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Introduce JuziBot"),Object(a.b)("li",{parentName:"ul"},"Introduce Jiarui Li"),Object(a.b)("li",{parentName:"ul"},"Introduce the product"),Object(a.b)("li",{parentName:"ul"},"Answer the frequency questions"),Object(a.b)("li",{parentName:"ul"},"valuation"),Object(a.b)("li",{parentName:"ul"},"receive friendship automatically and introduce it selt"),Object(a.b)("li",{parentName:"ul"},"Change Qnamaker key to a formal one"),Object(a.b)("li",{parentName:"ul"},"Add rui.juzi.bot domain for ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://rui-bot.herokuapp.com"}),"https://rui-bot.herokuapp.com")),Object(a.b)("li",{parentName:"ul"},"Add more frequency questions into QnAMaker"),Object(a.b)("li",{parentName:"ul"},"Reply the right valuation")),Object(a.b)("p",null,"GitHub: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/juzibot/rui-bot"}),"https://github.com/juzibot/rui-bot")))}b.isMDXComponent=!0}}]);