(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{199:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return d});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(202),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(213),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var m=n(57);n.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),d=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},200:function(e,t,n){"use strict";var a=n(223),r=n(0),i=n.n(r),o=n(4),l=n.n(o),s=n(224),c=n.n(s),u=n(199);function m(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(u.StaticQuery,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m;var p="1025518380"},201:function(e,t,n){"use strict";var a=n(9),r=n.n(a),i=n(0),o=n.n(i),l=n(4),s=n.n(l),c=n(199),u=(n(37),n(217),n(24)),m=n(208),p=function(e){var t=e.path,n=e.children;return o.a.createElement(u.Location,null,function(e){var a=e.location.pathname.replace("/konquest-web","")===t?"selected":null;return o.a.createElement(c.Link,{to:t,className:a},n)})},d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("nav",null,o.a.createElement(p,{path:"/"},"Home"),o.a.createElement(p,{path:"/pricing/"},"Pricing"),o.a.createElement(p,{path:"/resources/"},"Resources"),o.a.createElement(m.a,null,"Contact"))},t}(o.a.Component);p.propTypes={path:s.a.string.isRequired,children:s.a.node.isRequired};n(218);var h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("header",{className:"site-header"},o.a.createElement("div",{className:"logo"},o.a.createElement(c.Link,{to:"/"},"Konquest")),o.a.createElement(d,null),o.a.createElement("a",{href:"https://app.konquest.io",className:"sign-in"},"Sign In"))},t}(o.a.Component),f=n(62),E=n.n(f),y=(n(219),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={email:""},n.handleChange=n.handleChange.bind(E()(E()(n))),n}r()(t,e);var n=t.prototype;return n.handleChange=function(e){this.setState({email:e.target.value})},n.render=function(){return o.a.createElement("form",{action:"https://konquest.us19.list-manage.com/subscribe/post",method:"POST",target:"_blank",noValidate:!0},o.a.createElement("input",{type:"hidden",name:"u",value:"1b4fcadd18b78063061131d93"}),o.a.createElement("input",{type:"hidden",name:"id",value:"f3a7dd4abc"}),o.a.createElement("label",{htmlFor:"mail-subscription"},o.a.createElement("span",null,"Join the ",o.a.createElement("b",null,"Commission Mission")," Newsletter"),o.a.createElement("span",null,"The inside track on incentive strategy")),o.a.createElement("input",{type:"text",id:"mail-subscription",name:"EMAIL",placeholder:"you@domain.com",value:this.state.email,onChange:this.handleChange}),o.a.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},o.a.createElement("input",{type:"text",name:"b_1b4fcadd18b78063061131d93_f3a7dd4abc",tabIndex:"-1",value:"",onChange:function(){}})),o.a.createElement("button",{type:"submit"},"Subscribe"))},t}(o.a.Component)),b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=(new Date).getUTCFullYear();return o.a.createElement("footer",{className:"site-footer"},o.a.createElement("div",{className:"contact"},o.a.createElement("div",{className:"links"},o.a.createElement("div",{className:"social"},o.a.createElement("a",{href:"https://www.linkedin.com/company/konquest/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn"),o.a.createElement("a",{href:"https://www.facebook.com/Konquest-256106555318391/",target:"_blank",rel:"noopener noreferrer"},"Facebook"),o.a.createElement("a",{href:"https://twitter.com/KonquestHQ",target:"_blank",rel:"noopener noreferrer"},"Twitter")),o.a.createElement("address",{className:"contact vcard",itemScope:!0,itemType:"http://schema.org/Organization"},o.a.createElement("p",null,"Call: ",o.a.createElement("a",{href:"tel:+441915111298",className:"tel",itemProp:"telephone"},"0191 511 1298")," | ",o.a.createElement("a",{href:"mailto:hello@konquest.io",className:"email",itemProp:"email"},"hello@konquest.io")))),o.a.createElement("div",{className:"subscribe"},o.a.createElement(y,null))),o.a.createElement("div",{className:"copyright"},o.a.createElement("b",null,"© Konquest")," ",e," All rights reserved",o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/privacy"},"Privacy")),o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/terms-and-conditions"},"Terms & Conditions")))))},t}(o.a.Component),g=n(65),v=n(214),C=(n(220),function(e){function t(t){var n;return(n=e.call(this,t)||this).handleClose=n.handleClose.bind(E()(E()(n))),n}r()(t,e);var n=t.prototype;return n.handleClose=function(){this.props.closeContact()},n.render=function(){return o.a.createElement("div",{className:"contact-form "+(this.props.isContactOpen?"open":"")+" "},o.a.createElement("div",null,o.a.createElement("button",{type:"button",className:"close-button",onClick:this.handleClose},"Close"),o.a.createElement("form",null,o.a.createElement("h2",null,"Contact Konquest"),o.a.createElement("p",null,"Vivamus ultricies nisi consequat erdum porttitor. Integer eu ipsum vehicula felis tincut convallis et a diam. "),o.a.createElement("label",null,"Name",o.a.createElement("input",{type:"text"})),o.a.createElement("label",null,"Email",o.a.createElement("input",{type:"text"})),o.a.createElement("label",null,"Phone",o.a.createElement("input",{type:"text"})),o.a.createElement("label",null,"Comments",o.a.createElement("textarea",null)),o.a.createElement("button",{type:"submit"},"Send")),o.a.createElement("address",{className:"vcard",itemScope:!0,itemType:"http://schema.org/Organization"},o.a.createElement("span",{className:"org",itemProp:"name"},"Konquest"),o.a.createElement("div",{className:"adr",itemProp:"address",itemScope:!0,itemType:"http://schema.org/PostalAddress"},o.a.createElement("span",{className:"street-address",itemProp:"streetAddress"},"Address 1"),o.a.createElement("span",{className:"locality",itemProp:"addressLocality"},"Address 2"),o.a.createElement("span",{className:"region",itemProp:"addressRegion"},"Address 3"),o.a.createElement("span",{className:"postal-code",itemProp:"postalCode"},"Address 4")),o.a.createElement("p",null,"Call: ",o.a.createElement("a",{href:"tel:+441915111298",className:"tel",itemProp:"telephone"},"0191 511 1298")),o.a.createElement("p",null,o.a.createElement("a",{href:"mailto:hello@konquest.io",className:"email",itemProp:"email"},"hello@konquest.io")))))},t}(o.a.Component));C.propTypes={isContactOpen:s.a.bool.isRequired};var q=Object(g.b)(function(e){return{isContactOpen:e.isContactOpen}},{closeContact:v.a})(C);n(221),n(222);n.d(t,"a",function(){return w});var w=function(e){function t(t){var n;return(n=e.call(this,t)||this).children=t.children,n.className=t.className,n}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"site-container "+(this.className?this.className:"")},o.a.createElement(h,null),o.a.createElement("main",null,this.children),o.a.createElement(b,null),o.a.createElement(q,null))},t}(o.a.Component);w.propTypes={children:s.a.node.isRequired,className:s.a.string}},208:function(e,t,n){"use strict";var a=n(9),r=n.n(a),i=n(62),o=n.n(i),l=n(0),s=n.n(l),c=n(4),u=n.n(c),m=n(65),p=n(214),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleRequestDemo=n.handleRequestDemo.bind(o()(o()(n))),n}r()(t,e);var n=t.prototype;return n.handleRequestDemo=function(){this.props.openContact()},n.render=function(){return s.a.createElement("button",{type:"button",onClick:this.handleRequestDemo},this.props.children)},t}(s.a.Component);d.propTypes={children:u.a.node.isRequired},t.a=Object(m.b)(null,{openContact:p.b})(d)},213:function(e,t,n){var a;e.exports=(a=n(216))&&a.default||a},214:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return i});var a=n(58),r=function(){return{type:a.b}},i=function(){return{type:a.a}}},216:function(e,t,n){"use strict";n.r(t);n(26);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(85),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},217:function(e,t,n){},218:function(e,t,n){},219:function(e,t,n){},220:function(e,t,n){},221:function(e,t,n){},222:function(e,t,n){},223:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=0-8ca7343e8487abef4984.js.map