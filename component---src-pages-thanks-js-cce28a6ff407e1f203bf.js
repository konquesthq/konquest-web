(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{184:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(208),o=n(191);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Thank You"}),r.a.createElement("h1",null,"Message Received, Thank You"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci magna, eu rutrum nulla volutpat eget."))}},189:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(188),s=n.n(c);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(190),l=n.n(u);n.d(t,"PageRenderer",function(){return l.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},190:function(e,t,n){var a;e.exports=(a=n(193))&&a.default||a},191:function(e,t,n){"use strict";var a=n(192),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(198),u=n.n(s),l=n(189);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var p="1025518380"},192:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},193:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(57),s=n(2),u=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},194:function(e,t,n){},195:function(e,t,n){},196:function(e,t,n){"use strict";var a=n(189),r=n(0),i=n.n(r),o=(n(34),n(4)),c=n.n(o),s=(n(194),n(16)),u=function(e){var t=e.path,n=e.children;return i.a.createElement(s.Location,null,function(e){var r=e.location.pathname.replace("/konquest-web","")===t?"selected":null;return i.a.createElement(a.Link,{to:t,className:r},n)})};u.propTypes={path:c.a.string.isRequired,children:c.a.node.isRequired};var l=function(){return i.a.createElement("nav",null,i.a.createElement(u,{path:"/"},"Home"),i.a.createElement(u,{path:"/pricing/"},"Pricing"),i.a.createElement(u,{path:"/resources/"},"Resources"),i.a.createElement(u,{path:"/contact/"},"Contact"))};n(195),t.a=function(){return i.a.createElement("header",{className:"site-header"},i.a.createElement("div",{className:"logo"},i.a.createElement(a.Link,{to:"/"},"Konquest")),i.a.createElement(l,null),i.a.createElement("a",{href:"https://app.konquest.io",className:"sign-in"},"Sign In"))}},208:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(196),s=(n(209),function(e){var t=e.children,n=e.className;return r.a.createElement("div",{className:"site-container info "+(n||"")},r.a.createElement(c.a,null),r.a.createElement("main",null,r.a.createElement("div",{className:"contents"},t)))});s.propTypes={children:o.a.node.isRequired},t.a=s},209:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-thanks-js-cce28a6ff407e1f203bf.js.map