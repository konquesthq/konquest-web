(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{179:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(196),o=a(197);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"404"),r.a.createElement("p",null,"This is not the primate you're looking for"))}},189:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(188),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(190),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},190:function(e,t,a){var n;e.exports=(n=a(191))&&n.default||n},191:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(56),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},192:function(e,t,a){},193:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){},196:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(189),l=(a(34),a(192),a(16)),s=function(e){var t=e.path,a=e.children;return r.a.createElement(l.Location,null,function(e){var n=e.location.pathname.replace("/konquest-web","")===t?"selected":null;return r.a.createElement(c.Link,{to:t,className:n},a)})};s.propTypes={path:o.a.string.isRequired,children:o.a.node.isRequired};var u=function(){return r.a.createElement("nav",null,r.a.createElement(s,{path:"/"},"Home"),r.a.createElement(s,{path:"/benefits/"},"Benefits"),r.a.createElement(s,{path:"/pricing/"},"Pricing"),r.a.createElement(s,{path:"/resources/"},"Resources"),r.a.createElement(s,{path:"/contact/"},"Contact"))},d=(a(193),function(){return r.a.createElement("header",{className:"site-header"},r.a.createElement("div",{className:"logo"},r.a.createElement(c.Link,{to:"/"},"Konquest")),r.a.createElement(u,null),r.a.createElement("a",{href:"https://app.konquest.io",className:"sign-in"},"Sign In"))}),m=(a(194),function(){return r.a.createElement("footer",null,r.a.createElement("section",{className:"social"},r.a.createElement("a",{href:"#"},"LinkedIn"),r.a.createElement("a",{href:"#"},"Facebook"),r.a.createElement("a",{href:"#"},"Instagram"),r.a.createElement("a",{href:"#"},"Twitter")),r.a.createElement("section",{className:"contact",itemScope:!0,itemType:"http://schema.org/Organization"},r.a.createElement("p",null,"Call: ",r.a.createElement("a",{href:"tel:+441915111298",itemProp:"telephone"},"0191 511 1298")," | ",r.a.createElement("a",{href:"mailto:hello@konquest.io",itemProp:"email"},"hello@konquest.io"))))}),p=(a(195),function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t),r.a.createElement(m,null)))});p.propTypes={children:o.a.node.isRequired};t.a=p},197:function(e,t,a){"use strict";var n=a(198),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(199),s=a.n(l),u=a(189);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var m="1025518380"},198:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-a3b32e1526acf46cc27f.js.map