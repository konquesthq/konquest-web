(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{186:function(e,t,a){"use strict";a.r(t);var i=a(0),l=a.n(i),n=a(192),r=a(189),s=a(223),o=a(188),u=a(191),c=a.n(u),d=(a(224),function(){return l.a.createElement(o.StaticQuery,{query:"1888718175",render:function(e){return l.a.createElement(c.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:s})}),f=function(){return l.a.createElement("ul",{className:"logos"},l.a.createElement("li",null,l.a.createElement(d,null)),l.a.createElement("li",null,l.a.createElement(d,null)),l.a.createElement("li",null,l.a.createElement(d,null)),l.a.createElement("li",null,l.a.createElement(d,null)),l.a.createElement("li",null,l.a.createElement(d,null)))},m=a(197);a(225),t.default=function(){return l.a.createElement(n.a,null,l.a.createElement(r.a,{title:"Pricing"}),l.a.createElement("h1",null,"Pricing"),l.a.createElement("div",{className:"pricing-overview"},l.a.createElement("section",{className:"plan-details"},l.a.createElement("h2",null,"Plan Details"),l.a.createElement("p",null,l.a.createElement("span",{className:"price"},"£10")," user/month"),l.a.createElement("div",{className:"features"},l.a.createElement("ul",null,l.a.createElement("li",null,"Feature description"),l.a.createElement("li",null,"Feature description"),l.a.createElement("li",null,"Feature description"),l.a.createElement("li",null,"Feature description")),l.a.createElement("button",{type:"button"},"Btn Text"))),l.a.createElement("section",{className:"faqs"},l.a.createElement("h2",null,"FAQs"),l.a.createElement("div",{className:"faq-items"},l.a.createElement("dl",null,l.a.createElement("dt",null,"Here is a question about pricing?"),l.a.createElement("dd",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra malesuada odio, eget vulputate ipsum blandit eget."),l.a.createElement("dt",null,"Here is a question about another concern on two lines?"),l.a.createElement("dd",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra malesuada odio, eget vulputate ipsum blandit eget."),l.a.createElement("dt",null,"And who on earth are you?"),l.a.createElement("dd",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra malesuada odio, eget vulputate ipsum blandit eget."),l.a.createElement("dt",null,"Why haven't you bought yet?"),l.a.createElement("dd",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra malesuada odio, eget vulputate ipsum blandit eget."),l.a.createElement("dt",null,"Another question?"),l.a.createElement("dd",null,"No more."))))),l.a.createElement("div",{className:"testimonial"},l.a.createElement("section",{className:"current-customers"},l.a.createElement("h2",null,"Current Customers"),l.a.createElement(f,null)),l.a.createElement("section",{className:"quote"},l.a.createElement("blockquote",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci magna, eu rutrum nulla volutpat eget. Duis non massa iaculis, euismod nunc quis, egestas metus. Curabitur ac leo a dui vehicula blandit. Donec a purus id ex tincidunt pulvinar.",l.a.createElement("cite",null,"Jack Skellington, ",l.a.createElement("span",{className:"company"},"Halloween Inc"))))),l.a.createElement(m.a,null))}},191:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var l,n=i(a(7)),r=i(a(56)),s=i(a(200)),o=i(a(201)),u=i(a(0)),c=i(a(4)),d=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},m=function(e){var t=d(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},p=[];var h=function(e,t){(void 0===l&&"undefined"!=typeof window&&window.IntersectionObserver&&(l=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),l).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",l=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",u=e.opacity?e.opacity:"1";return"<picture>"+i+l+"<img "+s+o+t+r+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+u+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=u.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,l=e.onError,n=(0,s.default)(e,["style","onLoad","onError"]);return u.default.createElement("img",(0,o.default)({},n,{onLoad:i,onError:l,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});b.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var E=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,l=!1,n=t.fadeIn,s=m(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,l=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,l=!1);var o=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:l,fadeIn:n,hasNoScript:o,seenBefore:s},a.imageRef=u.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)((0,r.default)(a))),a.handleRef=a.handleRef.bind((0,r.default)((0,r.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,i=e.className,l=e.style,n=void 0===l?{}:l,r=e.imgStyle,s=void 0===r?{}:r,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,h=e.fixed,E=e.backgroundColor,y=e.Tag,w=e.itemProp,v="boolean"==typeof E?"lightgray":E,S=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),L=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),A={title:t,alt:this.state.isVisible?"":a,style:S,className:m};if(p){var q=p;return u.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},u.default.createElement(y,{style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),q.base64&&u.default.createElement(b,(0,o.default)({src:q.base64},A)),q.tracedSVG&&u.default.createElement(b,(0,o.default)({src:q.tracedSVG},A)),v&&u.default.createElement(y,{title:t,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&u.default.createElement("picture",null,q.srcSetWebp&&u.default.createElement("source",{type:"image/webp",srcSet:q.srcSetWebp,sizes:q.sizes}),u.default.createElement("source",{srcSet:q.srcSet,sizes:q.sizes}),u.default.createElement(b,{alt:a,title:t,src:q.src,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},q))}}))}if(h){var R=h,I=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},n);return"inherit"===n.display&&delete I.display,u.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:I,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&u.default.createElement(b,(0,o.default)({src:R.base64},A)),R.tracedSVG&&u.default.createElement(b,(0,o.default)({src:R.tracedSVG},A)),v&&u.default.createElement(y,{title:t,style:{backgroundColor:v,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&u.default.createElement("picture",null,R.srcSetWebp&&u.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),u.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),u.default.createElement(b,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(u.default.Component);E.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var y=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});E.propTypes={resolutions:y,sizes:w,fixed:y,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var v=E;t.default=v},197:function(e,t,a){"use strict";var i=a(0),l=a.n(i);a(198);t.a=function(){return l.a.createElement("div",{className:"request-demo"},l.a.createElement("div",{className:"demo-details"},l.a.createElement("p",null,"Ut porttitor massa tellus, sit amet tempor nibh tincidunt eget. Cras volutpat interdum sem vitae vulputate. Morbi a dolor ut nisl ullamcorper tempor. Proin est ante, aliquet sed."),l.a.createElement("button",{type:"button"},"Request Demo")))}},198:function(e,t,a){},223:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACIElEQVQ4y2P4TwFgIErVv38gRKZmiAl///5DNYKBsJ3//39/8ODDiRPIIkRoBqv7+eLFKXuH4+bmd+rqv968BRL/+5ew5n9//gDJu21tB+TkTzk5H1ZXv5qa9v3xY7i5DLiCB6Lz3eHDp+zsT9rYnrCwOG5ucURL+9WmzXBzGfB59dGj41ZWR3X1TljbnLSzP25mftLaBuh/sMux2QwM0q83b36+fOXb3btXUlMPqakfNTQ64+G1R0j4YnTM+yNH/v74gS3AwLY9nT8f6LZDGppARwL1HFRSPqCgeMLG9oCs3NXMLByhDRb6dv/+EV29w+oawBA6ZmwCtPawptYBeYVjJqYHlVXOeHj8ev0aWT8D3LVA8suNGyDVcvJAHx4zMtovLbNfVu6EpRUwnoDsI9o6D/r64YrRbf7+6CHQksMamqddXICBfFTf4FxAwPNVq84HBZ8wtzikqnbayfnP5y8YUQU27Ovdu8eMjA9r65x2dLpVUfn11q1fb9/+/fkTGMmXYmOBZp1ycPz7/Tu6ZohL7ra375OQOufnD7T5w8mT8Pi8FBPzbNmyBxMnAQMcI23DYvWIri7Ih6Zml2Lj/v36BZL5/RtIPpgw4eHkyUAFQHF42oRqhlgLjMMLYWGX4hOupKbdqW/4fPky3ObXO3Y8mb/g17t3t6trcMQzMMf9/v332zeQNGrW+/fzJ0j+588/374RkSWxZX2KCgNMAAAhywJvlGQAvQAAAABJRU5ErkJggg==",aspectRatio:1,src:"/konquest-web/static/c042cfef338fd9f55260c257c10de417/5d833/konquest_logo.png",srcSet:"/konquest-web/static/c042cfef338fd9f55260c257c10de417/10a6c/konquest_logo.png 25w,\n/konquest-web/static/c042cfef338fd9f55260c257c10de417/e6b9d/konquest_logo.png 50w,\n/konquest-web/static/c042cfef338fd9f55260c257c10de417/5d833/konquest_logo.png 100w,\n/konquest-web/static/c042cfef338fd9f55260c257c10de417/d59fc/konquest_logo.png 150w,\n/konquest-web/static/c042cfef338fd9f55260c257c10de417/d95fd/konquest_logo.png 200w",sizes:"(max-width: 100px) 100vw, 100px"}}}}}},224:function(e,t,a){},225:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-pricing-js-6c4a297dfd07f44dcfdb.js.map