(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{179:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(195),o=a(196);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"404"),r.a.createElement("p",null,"This is not the primate you're looking for"))}},188:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(187),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(189),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},189:function(e,t,a){var n;e.exports=(n=a(190))&&n.default||n},190:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(57),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},191:function(e,t,a){},192:function(e,t,a){},193:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(188),c=(a(34),a(191),a(16)),s=function(e){var t=e.path,a=e.children;return r.a.createElement(c.Location,null,function(e){var n=e.location.pathname.replace("/konquest-web","")===t?"selected":null;return r.a.createElement(l.Link,{to:t,className:n},a)})};s.propTypes={path:o.a.string.isRequired,children:o.a.node.isRequired};var u=function(){return r.a.createElement("nav",null,r.a.createElement(s,{path:"/"},"Home"),r.a.createElement(s,{path:"/pricing/"},"Pricing"),r.a.createElement(s,{path:"/resources/"},"Resources"),r.a.createElement(s,{path:"/contact/"},"Contact"))},m=(a(192),function(){return r.a.createElement("header",{className:"site-header"},r.a.createElement("div",{className:"logo"},r.a.createElement(l.Link,{to:"/"},"Konquest")),r.a.createElement(u,null),r.a.createElement("a",{href:"https://app.konquest.io",className:"sign-in"},"Sign In"))}),d=a(7),p=a.n(d),h=a(56),f=a.n(h),g=(a(193),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={email:""},a.handleChange=a.handleChange.bind(f()(f()(a))),a}p()(t,e);var a=t.prototype;return a.handleChange=function(e){this.setState({email:e.target.value})},a.render=function(){return r.a.createElement("form",{action:"https://konquest.us19.list-manage.com/subscribe/post",method:"POST",target:"_blank",noValidate:!0},r.a.createElement("input",{type:"hidden",name:"u",value:"1b4fcadd18b78063061131d93"}),r.a.createElement("input",{type:"hidden",name:"id",value:"f3a7dd4abc"}),r.a.createElement("label",{htmlFor:"mail-subscription"},r.a.createElement("span",null,"Join the ",r.a.createElement("b",null,"Commission Mission")," Newsletter"),r.a.createElement("span",null,"The inside track on incentive strategy")),r.a.createElement("input",{type:"text",id:"mail-subscription",name:"EMAIL",placeholder:"you@domain.com",value:this.state.email,onChange:this.handleChange}),r.a.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},r.a.createElement("input",{type:"text",name:"b_1b4fcadd18b78063061131d93_f3a7dd4abc",tabIndex:"-1",value:""})),r.a.createElement("button",{type:"submit"},"Subscribe"))},t}(r.a.Component)),y=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=(new Date).getUTCFullYear();return r.a.createElement("footer",{className:"site-footer"},r.a.createElement("div",{className:"contact"},r.a.createElement("div",{className:"links"},r.a.createElement("div",{className:"social"},r.a.createElement("a",{href:"https://www.linkedin.com/company/konquest/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn"),r.a.createElement("a",{href:"https://www.facebook.com/Konquest-256106555318391/",target:"_blank",rel:"noopener noreferrer"},"Facebook"),r.a.createElement("a",{href:"https://twitter.com/KonquestHQ",target:"_blank",rel:"noopener noreferrer"},"Twitter")),r.a.createElement("div",{className:"contact",itemScope:!0,itemType:"http://schema.org/Organization"},r.a.createElement("p",null,"Call: ",r.a.createElement("a",{href:"tel:+441915111298",itemProp:"telephone"},"0191 511 1298")," | ",r.a.createElement("a",{href:"mailto:hello@konquest.io",itemProp:"email"},"hello@konquest.io")))),r.a.createElement("div",{className:"subscribe"},r.a.createElement(g,null))),r.a.createElement("div",{className:"copyright"},r.a.createElement("b",null,"© Konquest")," ",e," All rights reserved",r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/privacy"},"Privacy")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/terms-and-conditions"},"Terms & Conditions")))))},t}(r.a.Component),E=(a(194),function(e){var t=e.children;return r.a.createElement("div",{className:"site-container"},r.a.createElement(m,null),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t)),r.a.createElement(y,null))});E.propTypes={children:o.a.node.isRequired};t.a=E},196:function(e,t,a){"use strict";var n=a(197),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(198),s=a.n(c),u=a(188);function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(u.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m;var d="1025518380"},197:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-bfd90b8993231935665b.js.map