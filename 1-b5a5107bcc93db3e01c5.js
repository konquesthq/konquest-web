(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{188:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(187),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(189),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},189:function(e,t,a){var n;e.exports=(n=a(190))&&n.default||n},190:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(57),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},191:function(e,t,a){},192:function(e,t,a){},193:function(e,t,a){"use strict";var n=a(188),r=a(0),i=a.n(r),s=(a(34),a(4)),o=a.n(s),l=(a(191),a(16)),c=function(e){var t=e.path,a=e.children;return i.a.createElement(l.Location,null,function(e){var r=e.location.pathname.replace("/konquest-web","")===t?"selected":null;return i.a.createElement(n.Link,{to:t,className:r},a)})};c.propTypes={path:o.a.string.isRequired,children:o.a.node.isRequired};var d=function(){return i.a.createElement("nav",null,i.a.createElement(c,{path:"/"},"Home"),i.a.createElement(c,{path:"/pricing/"},"Pricing"),i.a.createElement(c,{path:"/resources/"},"Resources"),i.a.createElement(c,{path:"/contact/"},"Contact"))};a(192),t.a=function(){return i.a.createElement("header",{className:"site-header"},i.a.createElement("div",{className:"logo"},i.a.createElement(n.Link,{to:"/"},"Konquest")),i.a.createElement(d,null),i.a.createElement("a",{href:"https://app.konquest.io",className:"sign-in"},"Sign In"))}},194:function(e,t,a){"use strict";var n=a(198),r=a(0),i=a.n(r),s=a(4),o=a.n(s),l=a(199),c=a.n(l),d=a(188);function u(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title;return i.a.createElement(d.StaticQuery,{query:f,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var f="1025518380"},195:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(193),l=a(7),c=a.n(l),d=a(56),u=a.n(d),f=a(188),p=(a(196),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={email:""},a.handleChange=a.handleChange.bind(u()(u()(a))),a}c()(t,e);var a=t.prototype;return a.handleChange=function(e){this.setState({email:e.target.value})},a.render=function(){return r.a.createElement("form",{action:"https://konquest.us19.list-manage.com/subscribe/post",method:"POST",target:"_blank",noValidate:!0},r.a.createElement("input",{type:"hidden",name:"u",value:"1b4fcadd18b78063061131d93"}),r.a.createElement("input",{type:"hidden",name:"id",value:"f3a7dd4abc"}),r.a.createElement("label",{htmlFor:"mail-subscription"},r.a.createElement("span",null,"Join the ",r.a.createElement("b",null,"Commission Mission")," Newsletter"),r.a.createElement("span",null,"The inside track on incentive strategy")),r.a.createElement("input",{type:"text",id:"mail-subscription",name:"EMAIL",placeholder:"you@domain.com",value:this.state.email,onChange:this.handleChange}),r.a.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},r.a.createElement("input",{type:"text",name:"b_1b4fcadd18b78063061131d93_f3a7dd4abc",tabIndex:"-1",value:"",onChange:function(){}})),r.a.createElement("button",{type:"submit"},"Subscribe"))},t}(r.a.Component)),h=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=(new Date).getUTCFullYear();return r.a.createElement("footer",{className:"site-footer"},r.a.createElement("div",{className:"contact"},r.a.createElement("div",{className:"links"},r.a.createElement("div",{className:"social"},r.a.createElement("a",{href:"https://www.linkedin.com/company/konquest/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn"),r.a.createElement("a",{href:"https://www.facebook.com/Konquest-256106555318391/",target:"_blank",rel:"noopener noreferrer"},"Facebook"),r.a.createElement("a",{href:"https://twitter.com/KonquestHQ",target:"_blank",rel:"noopener noreferrer"},"Twitter")),r.a.createElement("div",{className:"contact",itemScope:!0,itemType:"http://schema.org/Organization"},r.a.createElement("p",null,"Call: ",r.a.createElement("a",{href:"tel:+441915111298",itemProp:"telephone"},"0191 511 1298")," | ",r.a.createElement("a",{href:"mailto:hello@konquest.io",itemProp:"email"},"hello@konquest.io")))),r.a.createElement("div",{className:"subscribe"},r.a.createElement(p,null))),r.a.createElement("div",{className:"copyright"},r.a.createElement("b",null,"© Konquest")," ",e," All rights reserved",r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(f.Link,{to:"/privacy"},"Privacy")),r.a.createElement("li",null,r.a.createElement(f.Link,{to:"/terms-and-conditions"},"Terms & Conditions")))))},t}(r.a.Component),m=(a(197),function(e){var t=e.children,a=e.className;return r.a.createElement("div",{className:"site-container "+(a||"")},r.a.createElement(o.a,null),r.a.createElement("main",null,t),r.a.createElement(h,null))});m.propTypes={children:s.a.node.isRequired,pageClassName:s.a.string};t.a=m},196:function(e,t,a){},197:function(e,t,a){},198:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},205:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r,i=n(a(7)),s=n(a(56)),o=n(a(200)),l=n(a(201)),c=n(a(0)),d=n(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var m=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+n+r+"<img "+o+l+t+s+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var a=e.style,n=e.onLoad,r=e.onError,i=(0,o.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},i,{onLoad:n,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!1,i=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,r=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:!1,IOSupported:r,fadeIn:i,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,E=e.Tag,v=e.itemProp,w="boolean"==typeof b?"lightgray":b,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),L=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),k={title:t,alt:this.state.isVisible?"":a,style:S,className:p};if(h){var q=h;return c.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),q.base64&&c.default.createElement(y,(0,l.default)({src:q.base64},k)),q.tracedSVG&&c.default.createElement(y,(0,l.default)({src:q.tracedSVG},k)),w&&c.default.createElement(E,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,q.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:q.srcSetWebp,sizes:q.sizes}),c.default.createElement("source",{srcSet:q.srcSet,sizes:q.sizes}),c.default.createElement(y,{alt:a,title:t,src:q.src,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},q))}}))}if(m){var R=m,I=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},i);return"inherit"===i.display&&delete I.display,c.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:I,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&c.default.createElement(y,(0,l.default)({src:R.base64},k)),R.tracedSVG&&c.default.createElement(y,(0,l.default)({src:R.tracedSVG},k)),w&&c.default.createElement(E,{title:t,style:{backgroundColor:w,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&c.default.createElement("picture",null,R.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),c.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),c.default.createElement(y,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(c.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var E=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),v=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:E,sizes:v,fixed:E,fluid:v,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var w=b;t.default=w}}]);
//# sourceMappingURL=1-b5a5107bcc93db3e01c5.js.map