(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{182:function(e,t,a){"use strict";a.r(t),a.d(t,"resourceQuery",function(){return d});var n=a(7),r=a.n(n),i=a(0),s=a.n(i),c=a(197),o=a(191),u=a(201),l=a(206),m=(a(226),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allContentfulResourceItem.edges,t=null;return e.length>3&&(t=s.a.createElement("ul",{className:"resource-items"},e.slice(3).map(function(e){var t=e.node;return s.a.createElement("li",{key:t.id},s.a.createElement(l.b,{resourceItem:t}))}))),s.a.createElement(c.a,{className:"resources"},s.a.createElement(o.a,{title:"Resources",keywords:["resources","blog"]}),s.a.createElement("h1",null,"Resources"),s.a.createElement("div",{className:"contents"},s.a.createElement("div",null,s.a.createElement("ul",{className:"resource-items"},e.slice(0,3).map(function(e){var t=e.node;return s.a.createElement("li",{key:t.id},s.a.createElement(l.a,{resourceItem:t}))})),t)),s.a.createElement(u.a,null))},t}(s.a.Component));t.default=m;var d="2580955606"},191:function(e,t,a){"use strict";var n=a(192),r=a(0),i=a.n(r),s=a(4),c=a.n(s),o=a(198),u=a.n(o),l=a(189);function m(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,c=e.title;return i.a.createElement(l.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m;var d="1025518380"},192:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},201:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(202);t.a=function(){return r.a.createElement("div",{className:"request-demo"},r.a.createElement("div",{className:"demo-details"},r.a.createElement("p",null,"Ut porttitor massa tellus, sit amet tempor nibh tincidunt eget. Cras volutpat interdum sem vitae vulputate. Morbi a dolor ut nisl ullamcorper tempor. Proin est ante, aliquet sed."),r.a.createElement("button",{type:"button"},"Request Demo")))}},202:function(e,t,a){},206:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(205),r=a.n(n),i=a(189),s=a(0),c=a.n(s),o=(a(207),function(e){var t=e.resourceItem;return c.a.createElement("div",{className:"resource-item"},c.a.createElement(r.a,{fluid:t.headerImage.fluid}),c.a.createElement("div",{className:"details"},c.a.createElement("h2",null,t.title),c.a.createElement("p",null,"Etiam in faucibus lectus, ut lobortis ex. Pellentese habitant morbi tristique senectus et netus. Prae interdum sed sapien consequat tincidunt. "),c.a.createElement(i.Link,{to:"/resources/"+t.id},"Read More")))});t.b=function(e){var t=e.resourceItem;return c.a.createElement("div",{className:"resource-item short"},c.a.createElement("div",{className:"details"},c.a.createElement("h2",null,t.title),c.a.createElement("p",null,"Etiam in faucibus lectus, ut lobortis ex. Pellentese habitant morbi tristique senectus et netus. Prae interdum sed sapien consequat tincidunt. "),c.a.createElement(i.Link,{to:"/resources/"+t.id},"Read More")))}},207:function(e,t,a){},226:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-resources-js-baf1c48eb3a3526e52cb.js.map