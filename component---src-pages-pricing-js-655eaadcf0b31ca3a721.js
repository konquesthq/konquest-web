(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{181:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(195),l=a(196);a(211);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"Pricing"}),r.a.createElement("h1",null,"Pricing"),r.a.createElement("div",{className:"pricing-overview"},r.a.createElement("section",{className:"plan-details"},r.a.createElement("h2",null,"Plan Details"),r.a.createElement("p",null,r.a.createElement("span",{className:"price"},"£10")," user/month"),r.a.createElement("div",{className:"features"},r.a.createElement("ul",null,r.a.createElement("li",null,"Feature description"),r.a.createElement("li",null,"Feature description"),r.a.createElement("li",null,"Feature description"),r.a.createElement("li",null,"Feature description")),r.a.createElement("button",{type:"button"},"Btn Text"))),r.a.createElement("section",{className:"faqs"},r.a.createElement("h2",null,"FAQs"),r.a.createElement("div",{className:"faq-items"},r.a.createElement("dl",null,r.a.createElement("dt",null,"Here is a question about pricing?"),r.a.createElement("dd",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra malesuada odio, eget vulputate ipsum blandit eget. Duis sed urna vitae leo efficitur tempor. Duis tempor nisl ac pharetra dapibus. In hac habitasse platea dictumst."),r.a.createElement("dt",null,"Here is a question about another concern on two lines?"),r.a.createElement("dd",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra malesuada odio, eget vulputate ipsum blandit eget. Duis sed urna vitae leo efficitur tempor. Duis tempor nisl ac pharetra dapibus. In hac habitasse platea dictumst."),r.a.createElement("dt",null,"And who on earth are you?"),r.a.createElement("dd",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra malesuada odio, eget vulputate ipsum blandit eget. Duis sed urna vitae leo efficitur tempor. Duis tempor nisl ac pharetra dapibus. In hac habitasse platea dictumst.")),r.a.createElement("dl",null,r.a.createElement("dt",null,"Why haven't you bought yet?"),r.a.createElement("dd",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra malesuada odio, eget vulputate ipsum blandit eget. Duis sed urna vitae leo efficitur tempor. Duis tempor nisl ac pharetra dapibus. In hac habitasse platea dictumst."),r.a.createElement("dt",null,"Another question?"),r.a.createElement("dd",null,"No more."))))),r.a.createElement("div",{className:"testimonial"},r.a.createElement("section",{className:"current-customers"},r.a.createElement("h2",null,"Current Customers")),r.a.createElement("section",{className:"testimonial"})),r.a.createElement("div",{className:"request-demo"},r.a.createElement("p",null,"Ut porttitor massa tellus, sit amet tempor nibh tincidunt eget. Cras volutpat interdum sem vitae vulputate. Morbi a dolor ut nisl ullamcorper tempor. Proin est ante, aliquet sed."),r.a.createElement("button",{type:"button"},"Request Demo")))}},188:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(187),s=a.n(o);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(189),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},189:function(e,t,a){var n;e.exports=(n=a(190))&&n.default||n},190:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(57),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},191:function(e,t,a){},192:function(e,t,a){},193:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(188),s=(a(34),a(191),a(16)),c=function(e){var t=e.path,a=e.children;return r.a.createElement(s.Location,null,function(e){var n=e.location.pathname.replace("/konquest-web","")===t?"selected":null;return r.a.createElement(o.Link,{to:t,className:n},a)})};c.propTypes={path:l.a.string.isRequired,children:l.a.node.isRequired};var u=function(){return r.a.createElement("nav",null,r.a.createElement(c,{path:"/"},"Home"),r.a.createElement(c,{path:"/pricing/"},"Pricing"),r.a.createElement(c,{path:"/resources/"},"Resources"),r.a.createElement(c,{path:"/contact/"},"Contact"))},m=(a(192),function(){return r.a.createElement("header",{className:"site-header"},r.a.createElement("div",{className:"logo"},r.a.createElement(o.Link,{to:"/"},"Konquest")),r.a.createElement(u,null),r.a.createElement("a",{href:"https://app.konquest.io",className:"sign-in"},"Sign In"))}),d=a(7),p=a.n(d),h=a(56),f=a.n(h),E=(a(193),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={email:""},a.handleChange=a.handleChange.bind(f()(f()(a))),a}p()(t,e);var a=t.prototype;return a.handleChange=function(e){this.setState({email:e.target.value})},a.render=function(){return r.a.createElement("form",{action:"https://konquest.us19.list-manage.com/subscribe/post",method:"POST",target:"_blank",noValidate:!0},r.a.createElement("input",{type:"hidden",name:"u",value:"1b4fcadd18b78063061131d93"}),r.a.createElement("input",{type:"hidden",name:"id",value:"f3a7dd4abc"}),r.a.createElement("label",{htmlFor:"mail-subscription"},r.a.createElement("span",null,"Join the ",r.a.createElement("b",null,"Commission Mission")," Newsletter"),r.a.createElement("span",null,"The inside track on incentive strategy")),r.a.createElement("input",{type:"text",id:"mail-subscription",name:"EMAIL",placeholder:"you@domain.com",value:this.state.email,onChange:this.handleChange}),r.a.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},r.a.createElement("input",{type:"text",name:"b_1b4fcadd18b78063061131d93_f3a7dd4abc",tabIndex:"-1",value:"",onChange:function(){}})),r.a.createElement("button",{type:"submit"},"Subscribe"))},t}(r.a.Component)),g=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=(new Date).getUTCFullYear();return r.a.createElement("footer",{className:"site-footer"},r.a.createElement("div",{className:"contact"},r.a.createElement("div",{className:"links"},r.a.createElement("div",{className:"social"},r.a.createElement("a",{href:"https://www.linkedin.com/company/konquest/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn"),r.a.createElement("a",{href:"https://www.facebook.com/Konquest-256106555318391/",target:"_blank",rel:"noopener noreferrer"},"Facebook"),r.a.createElement("a",{href:"https://twitter.com/KonquestHQ",target:"_blank",rel:"noopener noreferrer"},"Twitter")),r.a.createElement("div",{className:"contact",itemScope:!0,itemType:"http://schema.org/Organization"},r.a.createElement("p",null,"Call: ",r.a.createElement("a",{href:"tel:+441915111298",itemProp:"telephone"},"0191 511 1298")," | ",r.a.createElement("a",{href:"mailto:hello@konquest.io",itemProp:"email"},"hello@konquest.io")))),r.a.createElement("div",{className:"subscribe"},r.a.createElement(E,null))),r.a.createElement("div",{className:"copyright"},r.a.createElement("b",null,"© Konquest")," ",e," All rights reserved",r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.Link,{to:"/privacy"},"Privacy")),r.a.createElement("li",null,r.a.createElement(o.Link,{to:"/terms-and-conditions"},"Terms & Conditions")))))},t}(r.a.Component),b=(a(194),function(e){var t=e.children;return r.a.createElement("div",{className:"site-container"},r.a.createElement(m,null),r.a.createElement("main",null,t),r.a.createElement(g,null))});b.propTypes={children:l.a.node.isRequired};t.a=b},196:function(e,t,a){"use strict";var n=a(197),r=a(0),i=a.n(r),l=a(4),o=a.n(l),s=a(198),c=a.n(s),u=a(188);function m(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,o=e.title;return i.a.createElement(u.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=m;var d="1025518380"},197:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},211:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-pricing-js-655eaadcf0b31ca3a721.js.map