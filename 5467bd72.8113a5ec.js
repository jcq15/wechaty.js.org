(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{142:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var b=c.a.createContext({}),s=function(e){var t=c.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return c.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=s(a),f=n,u=p["".concat(o,".").concat(f)]||p[f]||m[f]||r;return a?c.a.createElement(u,l(l({ref:t},b),{},{components:a})):c.a.createElement(u,l({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var b=2;b<r;b++)o[b]=a[b];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},91:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(2),c=a(6),r=(a(0),a(142)),o={title:"ContactSelf"},l={unversionedId:"api/contact-self",id:"api/contact-self",isDocsHomePage:!1,title:"ContactSelf",description:"Bot itself will be encapsulated as a ContactSelf. This class is extends Contact.",source:"@site/docs/api/contact-self.md",slug:"/api/contact-self",permalink:"/docs/api/contact-self",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/api/contact-self.md",version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1599816783},i=[{value:"ContactSelf",id:"contactself",children:[{value:"contactSelf.avatar([file]) \u21d2 <code>Promise &lt;void | FileBox&gt;</code>",id:"contactselfavatarfile-\u21d2-promise-void--filebox",children:[]},{value:"contactSelf.qrcode() \u21d2 <code>Promise &lt;string&gt;</code>",id:"contactselfqrcode-\u21d2-promise-string",children:[]},{value:"contactSelf.signature(signature) \u21d2 <code>Promise &lt;void&gt;</code>",id:"contactselfsignaturesignature-\u21d2-promise-void",children:[]},{value:"contactSelf.name([name]) \u21d2 <code>Promise&lt;void&gt; | string</code>",id:"contactselfnamename-\u21d2-promisevoid--string",children:[]}]}],b={rightToc:i};function s(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Bot itself will be encapsulated as a ContactSelf. This class is extends Contact."),Object(r.b)("h2",{id:"contactself"},"ContactSelf"),Object(r.b)("p",null,"Bot itself will be encapsulated as a ContactSelf."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Tips: this class is extends Contact")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Kind"),": global class"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/contact-self#contactself"}),"ContactSelf"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/contact-self#contactself"}),"intance"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/contact-self#contactselfavatarfile-%E2%87%92-promise"}),"contactSelf.avatar","(","[","file","]",")"," \u21d2 ",Object(r.b)("inlineCode",{parentName:"a"},"Promise <void | FileBox>"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/contact-self#contactselfqrcode-%E2%87%92-promise"}),"contactSelf.qrcode","(",")"," \u21d2 ",Object(r.b)("inlineCode",{parentName:"a"},"Promise <string>"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/contact-self#contactselfsignaturesignature"}),"contactSelf.signature","(","signature",")"," \u21d2 ",Object(r.b)("inlineCode",{parentName:"a"},"Promise <string>"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/contact-self#contactselfname-%E2%87%92-promisestring"}),"contactSelf.name","(","[","name","]",")"," \u21d2 ",Object(r.b)("inlineCode",{parentName:"a"},"Promise <void> | string")))))))),Object(r.b)("h3",{id:"contactselfavatarfile-\u21d2-promise-void--filebox"},"contactSelf.avatar","(","[","file","]",")"," \u21d2 ",Object(r.b)("inlineCode",{parentName:"h3"},"Promise <void | FileBox>")),Object(r.b)("p",null,"GET / SET bot avatar"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/contact-self#ContactSelf"}),Object(r.b)("inlineCode",{parentName:"a"},"ContactSelf"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Param"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"[","file","]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"FileBox"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example")," ",Object(r.b)("em",{parentName:"p"},"("," GET the avatar for bot, return {Promise","<","FileBox",">","}",")")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// Save avatar to local file like `1-name.jpg`\n\nbot.on('login', async user => {\n  console.log(`user ${user} login`)\n  const file = await user.avatar()\n  const name = file.name\n  await file.toFile(name, true)\n  console.log(`Save bot avatar: ${user.name()} with avatar file: ${name}`)\n})\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example")," ",Object(r.b)("em",{parentName:"p"},"(","SET the avatar for a bot",")")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { FileBox }  from 'file-box'\nbot.on('login', user => {\n  console.log(`user ${user} login`)\n  const fileBox = FileBox.fromUrl('https://wechaty.github.io/wechaty/images/bot-qr-code.png')\n  await user.avatar(fileBox)\n  console.log(`Change bot avatar successfully!`)\n})\n")),Object(r.b)("h3",{id:"contactselfqrcode-\u21d2-promise-string"},"contactSelf.qrcode","(",")"," \u21d2 ",Object(r.b)("inlineCode",{parentName:"h3"},"Promise <string>")),Object(r.b)("p",null,"Get bot qrcode"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/contact-self#ContactSelf"}),Object(r.b)("inlineCode",{parentName:"a"},"ContactSelf"))),Object(r.b)("h4",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { generate } from 'qrcode-terminal'\nbot.on('login', async user => {\n  console.log(`user ${user} login`)\n  const qrcode = await user.qrcode()\n  console.log(`Following is the bot qrcode!`)\n  generate(qrcode, { small: true })\n})\n")),Object(r.b)("h3",{id:"contactselfsignaturesignature-\u21d2-promise-void"},"contactSelf.signature","(","signature",")"," \u21d2 ",Object(r.b)("inlineCode",{parentName:"h3"},"Promise <void>")),Object(r.b)("p",null,"Change bot signature"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/contact-self#ContactSelf"}),Object(r.b)("inlineCode",{parentName:"a"},"ContactSelf"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Param"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"signature"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The new signature that the bot will change to")))),Object(r.b)("h4",{id:"example-1"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"bot.on('login', async user => {\n  console.log(`user ${user} login`)\n  try {\n    await user.signature(`Signature changed by wechaty on ${new Date()}`)\n  } catch (e) {\n    console.error('change signature failed', e)\n  }\n})\n")),Object(r.b)("h3",{id:"contactselfnamename-\u21d2-promisevoid--string"},"contactSelf.name","(","[","name","]",")"," \u21d2 ",Object(r.b)("inlineCode",{parentName:"h3"},"Promise<void> | string")),Object(r.b)("p",null,"Get or change bot name."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/contact-self#contactself"}),Object(r.b)("inlineCode",{parentName:"a"},"ContactSelf"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Param"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"[","name","]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The new alias that the bot will change to")))),Object(r.b)("h4",{id:"example-2"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"bot.on('login', async user => {\n  console.log(`user ${user} login`)\n  const oldName = user.name() // get bot name\n  try {\n    await user.name(`${oldName}-${new Date().getTime()}`) // change bot name\n  } catch (e) {\n    console.error('change name failed', e)\n  }\n})\n")))}s.isMDXComponent=!0}}]);