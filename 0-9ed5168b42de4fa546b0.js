(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{199:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),l=n.n(o),i=n(204),c=n.n(i);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var s=n(217),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var m=n(57);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},201:function(e,t,n){"use strict";var a=n(9),r=n.n(a),o=n(62),l=n.n(o),i=n(0),c=n.n(i),s=n(4),u=n.n(s),m=n(65),d=n(218),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleRequestDemo=n.handleRequestDemo.bind(l()(l()(n))),n}r()(t,e);var n=t.prototype;return n.handleRequestDemo=function(){this.props.openContact()},n.render=function(){return c.a.createElement("button",{type:"button",className:"open-contact-form",onClick:this.handleRequestDemo},this.props.children)},t}(c.a.Component);p.propTypes={children:u.a.node.isRequired},t.a=Object(m.b)(null,{openContact:d.b})(p)},202:function(e,t,n){"use strict";var a=n(236),r=n(0),o=n.n(r),l=n(4),i=n.n(l),c=n(237),s=n.n(c),u=n(199);function m(e){var t=e.description,n=e.lang,r=e.meta,l=e.keywords,i=e.title;return o.a.createElement(u.StaticQuery,{query:d,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:i},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:a}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})},data:a})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=m;var d="1025518380"},203:function(e,t,n){"use strict";var a=n(9),r=n.n(a),o=n(62),l=n.n(o),i=n(0),c=n.n(i),s=n(4),u=n.n(s),m=(n(220),n(222)),d=n(199),p=(n(224),n(225),n(24)),h=n(201),f=function(e){var t=e.path,n=e.children;return c.a.createElement(p.Location,null,function(e){var a=e.location,r=("/"===t?a.pathname===Object(d.withPrefix)(t):a.pathname.startsWith(Object(d.withPrefix)(t)))?"selected":null;return c.a.createElement("li",null,c.a.createElement(d.Link,{to:t,className:r},n))})},g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("nav",{className:"site-nav"},c.a.createElement("ul",null,c.a.createElement(f,{path:"/"},"Home"),c.a.createElement(f,{path:"/pricing/"},"Pricing"),c.a.createElement(f,{path:"/resources/"},"Resources"),c.a.createElement("li",null,c.a.createElement(h.a,null,"Contact"))))},t}(c.a.Component);f.propTypes={path:u.a.string.isRequired,children:u.a.node.isRequired};n(226);var b=n(200),E=n.n(b),y=function(){return c.a.createElement(d.StaticQuery,{query:"1729079464",render:function(e){return c.a.createElement(E.a,{className:"img",fixed:e.logoImage.childImageSharp.fixed,fadeIn:!1})},data:m})},v=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={open:!1},n.handleToggleOpen=n.handleToggleOpen.bind(l()(l()(n))),n}r()(t,e);var n=t.prototype;return n.handleToggleOpen=function(){this.setState({open:!this.state.open})},n.render=function(){return c.a.createElement("header",{className:"site-header"},c.a.createElement("div",{className:"logo"},c.a.createElement(d.Link,{to:"/"},c.a.createElement(y,null),"Konquest")),c.a.createElement("div",{className:"nav-container "+(this.state.open?"open":"")},c.a.createElement(g,null),c.a.createElement("a",{href:"https://app.konquest.io",className:"sign-in"},"Sign In")),c.a.createElement("button",{className:"open-nav",type:"button",onClick:this.handleToggleOpen},"Open Navigation"))},t}(c.a.Component),C=(n(227),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={email:""},n.handleChange=n.handleChange.bind(l()(l()(n))),n}r()(t,e);var n=t.prototype;return n.handleChange=function(e){this.setState({email:e.target.value})},n.render=function(){return c.a.createElement("form",{action:"https://konquest.us19.list-manage.com/subscribe/post",method:"POST",target:"_blank",noValidate:!0},c.a.createElement("input",{type:"hidden",name:"u",value:"1b4fcadd18b78063061131d93"}),c.a.createElement("input",{type:"hidden",name:"id",value:"f3a7dd4abc"}),c.a.createElement("label",{htmlFor:"mail-subscription"},c.a.createElement("span",null,"Join the ",c.a.createElement("b",null,"Commission Mission")," Newsletter"),c.a.createElement("span",null,"The inside track on incentive strategy")),c.a.createElement("input",{type:"text",id:"mail-subscription",name:"EMAIL",placeholder:"you@domain.com",value:this.state.email,onChange:this.handleChange}),c.a.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},c.a.createElement("input",{type:"text",name:"b_1b4fcadd18b78063061131d93_f3a7dd4abc",tabIndex:"-1",value:"",onChange:function(){}})),c.a.createElement("button",{type:"submit"},"Subscribe"))},t}(c.a.Component)),w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=(new Date).getUTCFullYear();return c.a.createElement("footer",{className:"site-footer"},c.a.createElement("div",{className:"contact"},c.a.createElement("div",{className:"links"},c.a.createElement("div",{className:"social"},c.a.createElement("a",{href:"https://www.linkedin.com/company/konquest/",target:"_blank",rel:"noopener noreferrer",className:"linkedin"},"LinkedIn"),c.a.createElement("a",{href:"https://www.facebook.com/Konquest-256106555318391/",target:"_blank",rel:"noopener noreferrer",className:"facebook"},"Facebook"),c.a.createElement("a",{href:"https://twitter.com/KonquestHQ",target:"_blank",rel:"noopener noreferrer",className:"twitter"},"Twitter")),c.a.createElement("address",{className:"contact vcard",itemScope:!0,itemType:"http://schema.org/Organization"},c.a.createElement("p",null,"Call: ",c.a.createElement("a",{href:"tel:+441915111298",className:"tel",itemProp:"telephone"},"0191 511 1298")," | ",c.a.createElement("a",{href:"mailto:hello@konquest.io",className:"email",itemProp:"email"},"hello@konquest.io")))),c.a.createElement("div",{className:"subscribe"},c.a.createElement(C,null))),c.a.createElement("div",{className:"copyright"},c.a.createElement("b",null,"© Konquest")," ",e," All rights reserved",c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(d.Link,{to:"/privacy"},"Privacy")),c.a.createElement("li",null,c.a.createElement(d.Link,{to:"/terms-and-conditions"},"Terms & Conditions")))))},t}(c.a.Component),q=(n(228),n(229)),N=n(65),x=n(218),k=n(230),T=(n(233),"80df4943-44b4-45a9-8359-5b2eccb787e7"),S=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={name:"",email:"",phone:"",comments:""},n.handleClose=n.handleClose.bind(l()(l()(n))),n.handleInputChange=n.handleInputChange.bind(l()(l()(n))),n.handleSubmit=n.handleSubmit.bind(l()(l()(n))),Object(k.init)("user_JbfWFohRc0NNaocgaVbDF"),n}r()(t,e);var n=t.prototype;return n.handleClose=function(){this.props.closeContact()},n.handleInputChange=function(e){var t,n=e.target,a=n.value,r=n.name;this.setState(((t={})[r]=a,t))},n.handleSubmit=function(e){e.preventDefault(),this.state[T]||(Object(k.send)("sendgrid","contact_form_submission",this.state),this.handleClose(),Object(p.navigate)(Object(d.withPrefix)("/thanks")))},n.render=function(){var e=this;return c.a.createElement(d.StaticQuery,{query:"3058594228",render:function(t){var n=t.contentfulContactForm;return c.a.createElement("div",{className:"contact-form "+(e.props.isContactOpen?"open":"")+" "},c.a.createElement("div",null,c.a.createElement("button",{type:"button",className:"close-button",onClick:e.handleClose},"Close"),c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("h2",null,n.displayTitle),c.a.createElement("p",null,n.introText.introText),c.a.createElement("label",null,"Name *",c.a.createElement("input",{type:"text",name:"name",value:e.state.name,onChange:e.handleInputChange,required:!0})),c.a.createElement("label",null,"Email *",c.a.createElement("input",{type:"text",name:"email",value:e.state.email,onChange:e.handleInputChange,required:!0})),c.a.createElement("label",null,"Phone",c.a.createElement("input",{type:"text",name:"phone",value:e.state.phone,onChange:e.handleInputChange})),c.a.createElement("label",null,"Comments",c.a.createElement("textarea",{name:"comments",value:e.state.comments,onChange:e.handleInputChange})),c.a.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},c.a.createElement("input",{type:"text",name:T,tabIndex:"-1",value:"",onChange:e.handleInputChange})),c.a.createElement("button",{type:"submit"},n.submitButtonText)),c.a.createElement("address",{className:"vcard",itemScope:!0,itemType:"http://schema.org/Organization"},c.a.createElement("span",{className:"org",itemProp:"name"},n.contactCompanyName),c.a.createElement("div",{className:"adr",itemProp:"address",itemScope:!0,itemType:"http://schema.org/PostalAddress"},c.a.createElement("span",{className:"street-address",itemProp:"streetAddress"},n.contactStreetAddress),c.a.createElement("span",{className:"extended-address",itemProp:"extendedAddress"},n.contactExtendedAddress),c.a.createElement("span",{className:"locality",itemProp:"addressLocality"},n.contactLocality),c.a.createElement("span",{className:"postal-code",itemProp:"postalCode"},n.contactPostalCode)),c.a.createElement("p",null,"Call: ",c.a.createElement("a",{href:"tel:"+n.contactInternationalTelephone,className:"tel",itemProp:"telephone"},n.contactTelephone)),c.a.createElement("p",null,c.a.createElement("a",{href:"mailto:"+n.contactEmail,className:"email",itemProp:"email"},n.contactEmail)))))},data:q})},t}(c.a.Component);S.propTypes={isContactOpen:u.a.bool.isRequired};var P=Object(N.b)(function(e){return{isContactOpen:e.isContactOpen}},{closeContact:x.a})(S);n(234),n(235);n.d(t,"a",function(){return L});var O=function(e){return e.ownerDocument.scrollingElement||e.ownerDocument.documentElement},I=function(e){return O(e).scrollTop>0},R=function(e){var t=O(e);return t.scrollTop>=t.clientHeight},D=function(e){var t=O(e);return t.scrollHeight<=t.clientHeight+t.scrollTop},L=function(e){function t(t){var n;return(n=e.call(this,t)||this).siteContainer=c.a.createRef(),n.state={pageDown:!1,onBottom:!1,scrolled:!1},n.handleScroll=n.handleScroll.bind(l()(l()(n))),n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll);var e=this.siteContainer.current;this.setState({pageDown:R(e),onBottom:D(e),scrolled:I(e)})},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},n.handleScroll=function(){var e=this.siteContainer.current;this.setState({pageDown:R(e),onBottom:D(e),scrolled:I(e)})},n.render=function(){var e="site-container";return this.props.className&&(e+=" "+this.props.className),this.state.onBottom&&(e+=" bottom"),this.state.pageDown&&(e+=" page-down"),this.state.scrolled&&(e+=" scrolled"),c.a.createElement("div",{className:e,ref:this.siteContainer},c.a.createElement(v,null),c.a.createElement("main",null,this.props.children),c.a.createElement(w,null),c.a.createElement(P,null))},t}(c.a.Component);L.propTypes={children:u.a.node.isRequired,className:u.a.string}},217:function(e,t,n){var a;e.exports=(a=n(223))&&a.default||a},218:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o});var a=n(58),r=function(){return{type:a.b}},o=function(){return{type:a.a}}},222:function(e){e.exports={data:{logoImage:{childImageSharp:{fixed:{width:78,height:82,src:"/konquest-web/static/9680267004e81d23e42bb59261143c42/e21ab/logo.png",srcSet:"/konquest-web/static/9680267004e81d23e42bb59261143c42/e21ab/logo.png 1x,\n/konquest-web/static/9680267004e81d23e42bb59261143c42/c504d/logo.png 1.5x,\n/konquest-web/static/9680267004e81d23e42bb59261143c42/9ff61/logo.png 2x,\n/konquest-web/static/9680267004e81d23e42bb59261143c42/1f319/logo.png 3x"}}}}}},223:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),r=n.n(a),o=n(4),l=n.n(o),i=n(85),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},225:function(e,t,n){},226:function(e,t,n){},227:function(e,t,n){},229:function(e){e.exports={data:{contentfulContactForm:{displayTitle:"We'd love to hear from you!",introText:{introText:"Got a question? Please complete our contact form and a member of the team will get back to you asap."},submitButtonText:"Send",contactCompanyName:"Konquest",contactStreetAddress:"Ye Olde Hundred",contactExtendedAddress:"69 Church Way",contactLocality:"North Shields",contactPostalCode:"NE29 0AE",contactTelephone:"0191 511 1298",contactInternationalTelephone:"+441915111298",contactEmail:"hello@konquest.io"}}}},233:function(e,t,n){},234:function(e,t,n){},235:function(e,t,n){},236:function(e){e.exports={data:{site:{siteMetadata:{title:"Konquest",description:"Konquest automatically calculates your sales commissions, no matter how complex they are, allocating them to the right period and exposing earning pipelines to your team. No more spreadsheets. Just Konquest.",author:"@KonquestHQ"}}}}}}]);
//# sourceMappingURL=0-9ed5168b42de4fa546b0.js.map