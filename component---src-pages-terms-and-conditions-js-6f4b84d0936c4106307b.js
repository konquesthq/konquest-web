(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{183:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(190),o=n(196);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Terms"}),r.a.createElement("h1",null,"Terms & Conditions"),r.a.createElement("p",null,"Terms & Conditions will go here"))}},188:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(187),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(189),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var m=n(32);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},189:function(e,t,n){var a;e.exports=(a=n(191))&&a.default||a},190:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(188),c=(n(34),n(192),n(16)),s=function(e){var t=e.path,n=e.children;return r.a.createElement(c.Location,null,function(e){var a=e.location.pathname.replace("/konquest-web","")===t?"selected":null;return r.a.createElement(l.Link,{to:t,className:a},n)})};s.propTypes={path:o.a.string.isRequired,children:o.a.node.isRequired};var u=function(){return r.a.createElement("nav",null,r.a.createElement(s,{path:"/"},"Home"),r.a.createElement(s,{path:"/pricing/"},"Pricing"),r.a.createElement(s,{path:"/resources/"},"Resources"),r.a.createElement(s,{path:"/contact/"},"Contact"))},m=(n(193),function(){return r.a.createElement("header",{className:"site-header"},r.a.createElement("div",{className:"logo"},r.a.createElement(l.Link,{to:"/"},"Konquest")),r.a.createElement(u,null),r.a.createElement("a",{href:"https://app.konquest.io",className:"sign-in"},"Sign In"))}),d=n(7),p=n.n(d),h=n(56),f=n.n(h),g=(n(194),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={email:""},n.handleChange=n.handleChange.bind(f()(f()(n))),n}p()(t,e);var n=t.prototype;return n.handleChange=function(e){this.setState({email:e.target.value})},n.render=function(){return r.a.createElement("form",{action:"https://konquest.us19.list-manage.com/subscribe/post",method:"POST",target:"_blank",noValidate:!0},r.a.createElement("input",{type:"hidden",name:"u",value:"1b4fcadd18b78063061131d93"}),r.a.createElement("input",{type:"hidden",name:"id",value:"f3a7dd4abc"}),r.a.createElement("label",{htmlFor:"mail-subscription"},r.a.createElement("span",null,"Join the ",r.a.createElement("b",null,"Commission Mission")," Newsletter"),r.a.createElement("span",null,"The inside track on incentive strategy")),r.a.createElement("input",{type:"text",id:"mail-subscription",name:"EMAIL",placeholder:"you@domain.com",value:this.state.email,onChange:this.handleChange}),r.a.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},r.a.createElement("input",{type:"text",name:"b_1b4fcadd18b78063061131d93_f3a7dd4abc",tabIndex:"-1",value:"",onChange:function(){}})),r.a.createElement("button",{type:"submit"},"Subscribe"))},t}(r.a.Component)),y=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=(new Date).getUTCFullYear();return r.a.createElement("footer",{className:"site-footer"},r.a.createElement("div",{className:"contact"},r.a.createElement("div",{className:"links"},r.a.createElement("div",{className:"social"},r.a.createElement("a",{href:"https://www.linkedin.com/company/konquest/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn"),r.a.createElement("a",{href:"https://www.facebook.com/Konquest-256106555318391/",target:"_blank",rel:"noopener noreferrer"},"Facebook"),r.a.createElement("a",{href:"https://twitter.com/KonquestHQ",target:"_blank",rel:"noopener noreferrer"},"Twitter")),r.a.createElement("div",{className:"contact",itemScope:!0,itemType:"http://schema.org/Organization"},r.a.createElement("p",null,"Call: ",r.a.createElement("a",{href:"tel:+441915111298",itemProp:"telephone"},"0191 511 1298")," | ",r.a.createElement("a",{href:"mailto:hello@konquest.io",itemProp:"email"},"hello@konquest.io")))),r.a.createElement("div",{className:"subscribe"},r.a.createElement(g,null))),r.a.createElement("div",{className:"copyright"},r.a.createElement("b",null,"© Konquest")," ",e," All rights reserved",r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/privacy"},"Privacy")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/terms-and-conditions"},"Terms & Conditions")))))},t}(r.a.Component),E=(n(195),function(e){var t=e.children;return r.a.createElement("div",{className:"site-container"},r.a.createElement(m,null),r.a.createElement("main",null,t),r.a.createElement(y,null))});E.propTypes={children:o.a.node.isRequired};t.a=E},191:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(57),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},192:function(e,t,n){},193:function(e,t,n){},194:function(e,t,n){},195:function(e,t,n){},196:function(e,t,n){"use strict";var a=n(197),r=n(0),i=n.n(r),o=n(4),l=n.n(o),c=n(198),s=n.n(c),u=n(188);function m(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(u.StaticQuery,{query:d,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m;var d="1025518380"},197:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-terms-and-conditions-js-6f4b84d0936c4106307b.js.map