(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{198:function(e,t,a){"use strict";a.r(t);var n=a(62),i=a.n(n),l=a(9),s=a.n(l),r=a(0),o=a.n(r),c=a(4),u=a.n(c),d=a(202),m=a(201),p=a(211),f=a(204),h=a(242),g=a(199),E=a(200),v=a.n(E),b=(a(243),function(){return o.a.createElement(g.StaticQuery,{query:"3352276073",render:function(e){return o.a.createElement(v.a,{className:"img",fluid:e.placeholderImage.childImageSharp.fluid})},data:h})}),y=function(){return o.a.createElement("ul",{className:"partners"},o.a.createElement("li",null,o.a.createElement(b,null),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consecte adipiscing elit.")),o.a.createElement("li",null,o.a.createElement(b,null),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consecte adipiscing elit.")),o.a.createElement("li",null,o.a.createElement(b,null),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consecte adipiscing elit.")),o.a.createElement("li",null,o.a.createElement(b,null),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consecte adipiscing elit.")))},S=a(206),w=(a(244),function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"persona-section "+this.props.className+" "+(this.props.isShown?"open":"")},o.a.createElement("div",{className:"persona-contents"},this.props.children))},t}(o.a.Component));w.propTypes={isShown:u.a.bool.isRequired,children:u.a.node.isRequired,className:u.a.string.isRequired};var A=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleClick=a.handleClick.bind(i()(i()(a))),a}s()(t,e);var a=t.prototype;return a.handleClick=function(){this.props.onNavigate(this.props.title)},a.render=function(){return o.a.createElement("li",{className:this.props.isSelected?"selected":"",onClick:this.handleClick},o.a.createElement("h3",null,this.props.title),this.props.children)},t}(o.a.Component);A.propTypes={title:u.a.string.isRequired,children:u.a.node,onNavigate:u.a.func.isRequired,isSelected:u.a.bool.isRequired};var N=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={openSection:""},a.benefitsSection=o.a.createRef(),a.handlePersonaNavigate=a.handlePersonaNavigate.bind(i()(i()(a))),a.handleClearPersona=a.handleClearPersona.bind(i()(i()(a))),a.handleScrollToBenefits=a.handleScrollToBenefits.bind(i()(i()(a))),a}s()(t,e);var a=t.prototype;return a.handlePersonaNavigate=function(e){this.setState({openSection:e})},a.handleClearPersona=function(){this.setState({openSection:""})},a.handleScrollToBenefits=function(){this.benefitsSection.current.scrollIntoView({alignToTop:!0,behavior:"smooth"})},a.isAnySectionOpen=function(){return Boolean(this.state.openSection)},a.isSectionOpen=function(e){return this.state.openSection===e},a.render=function(){return o.a.createElement(d.a,{className:"home",ref:this.layout},o.a.createElement(m.a,{title:"Home",keywords:["gatsby","application","react"]}),o.a.createElement("section",{className:"contents"},o.a.createElement("div",{className:"intro "+(this.isAnySectionOpen()?"closed":"")},o.a.createElement("h1",null,"Commission. Sorted."),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci magna, eu rutrum nulla volutpat eget. Duis non massa iaculis, euismod nunc quis, egestas metus. "),o.a.createElement(S.a,null,"Request a Demo")),o.a.createElement(w,{className:"commercial",isShown:this.isSectionOpen("Commercial")},o.a.createElement("h2",null,"This is a section heading"),o.a.createElement("div",{className:"columns"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("h3",null,"End to End Automation"),o.a.createElement("p",null,"No more spreadsheets, paper forms and emails. Less mistakes and full audit trails so you can focus on growing your business.")),o.a.createElement("li",null,o.a.createElement("h3",null,"Total Flexibility"),o.a.createElement("p",null,"Manage one off bonuses or clawbacks with ease whilst automatically informing all concerned.")),o.a.createElement("li",null,o.a.createElement("h3",null,"Enhanced Performance"),o.a.createElement("p",null,"Increase team motivation with one click access to personal commission pipelines for every consultant and manager."))),o.a.createElement("div",{className:"details"},o.a.createElement("p",null,"Take the pain out of payroll with auto-calculation of commissions, no matter how complex your scheme setup. Konquest will also drive performance by making consultant earnings visible to them in real-time, a proven motivator."),o.a.createElement(S.a,null,"Request Demo")))),o.a.createElement(w,{className:"operations",isShown:this.isSectionOpen("Operations")},o.a.createElement("h2",null,"Donec lacinia meat lover"),o.a.createElement("p",null,"Remove spreadsheets from your commissions process with a secure, automated solution in the cloud."),o.a.createElement("ul",null,o.a.createElement("li",{className:"auto-calc"},o.a.createElement("h3",null,"Auto Calculation"),o.a.createElement("p",null,"Automatically calculate all your commission payments and allocate them to the right payroll periods.")),o.a.createElement("li",{className:"central-data"},o.a.createElement("h3",null,"Centralised Date"),o.a.createElement("p",null,"Organise commission and bonus related data in one, cloud based solution.")),o.a.createElement("li",{className:"secure-auto"},o.a.createElement("h3",null,"Secure Automation"),o.a.createElement("p",null,"End to end, securely encrypted cloud solution. No more unsecure emails or corrupted spreadsheets.")),o.a.createElement("li",{className:"crm"},o.a.createElement("h3",null,"CRM Integration"),o.a.createElement("p",null,"Securely integrate with your CRM via API to push sales data into Konquest"))),o.a.createElement(S.a,null,"Request Demo")),o.a.createElement(w,{className:"finance",isShown:this.isSectionOpen("Finance")},o.a.createElement("h2",null,"Donec lacinia meat lover"),o.a.createElement("ul",null,o.a.createElement("li",{className:"accuracy"},o.a.createElement("h3",null,"Accuracy"),o.a.createElement("p",null,"Minimize costly mistakes by alleviating the risk of human error.")),o.a.createElement("li",{className:"audits"},o.a.createElement("h3",null,"Audit Trails"),o.a.createElement("p",null,"Record every transaction or event for each claim.")),o.a.createElement("li",{className:"forecasting"},o.a.createElement("h3",null,"Improved Forecasting"),o.a.createElement("p",null,"Realtime insight into estimated and actual commissions payable in any given period")),o.a.createElement("li",{className:"productivity"},o.a.createElement("h3",null,"Increased Productivity"),o.a.createElement("p",null,"Less time spent calculating commissions and chasing claim submissions with total automation."))),o.a.createElement(f.a,null)),o.a.createElement(w,{className:"sales",isShown:this.isSectionOpen("Sales")},o.a.createElement("h2",null,"Total Transparency for your Reward Sytem"),o.a.createElement("p",null,"Understand how much you are earning before you earn it, automatically compile commission claims and be involved in the approvals process so there’s never a nasty surprise on pay day."),o.a.createElement("ul",null,o.a.createElement("li",{className:"motivation"},o.a.createElement("h3",null,"Motivation"),o.a.createElement("p",null,"One click access to commission pipelines for every consultant, real-time tracking against organisational or personal targets with notifications ")),o.a.createElement("li",{className:"focus"},o.a.createElement("h3",null,"Focus"),o.a.createElement("p",null,"Less time working out how much you’re getting paid, more time focused on what makes you more money!"))),o.a.createElement(S.a,null,"Request Demo")),o.a.createElement("nav",{className:"persona-navigation"},o.a.createElement("ul",null,o.a.createElement(A,{title:"Commercial",isSelected:this.isSectionOpen("Commercial"),onNavigate:this.handlePersonaNavigate},o.a.createElement("p",null,"Ut imperdiet sed felis vitae aliquam. Pellent posuere metus in auctor.")),o.a.createElement(A,{title:"Operations",isSelected:this.isSectionOpen("Operations"),onNavigate:this.handlePersonaNavigate},o.a.createElement("p",null,"Ut imperdiet sed felis vitae aliquam. Pellent posuere metus in auctor.")),o.a.createElement(A,{title:"Finance",isSelected:this.isSectionOpen("Finance"),onNavigate:this.handlePersonaNavigate},o.a.createElement("p",null,"Ut imperdiet sed felis vitae aliquam. Pellent posuere metus in auctor.")),o.a.createElement(A,{title:"Sales",isSelected:this.isSectionOpen("Sales"),onNavigate:this.handlePersonaNavigate},o.a.createElement("p",null,"Ut imperdiet sed felis vitae aliquam. Pellent posuere metus in auctor.")),o.a.createElement("li",{className:"benefits-nav",onClick:this.handleScrollToBenefits},"Benefits"))),o.a.createElement("nav",{className:"persona-radio-navigation"},o.a.createElement("ul",null,o.a.createElement("li",{onClick:this.handleClearPersona,className:this.isAnySectionOpen()?"":"selected"},"Intro"),o.a.createElement(A,{title:"Commercial",isSelected:this.isSectionOpen("Commercial"),onNavigate:this.handlePersonaNavigate}),o.a.createElement(A,{title:"Operations",isSelected:this.isSectionOpen("Operations"),onNavigate:this.handlePersonaNavigate}),o.a.createElement(A,{title:"Finance",isSelected:this.isSectionOpen("Finance"),onNavigate:this.handlePersonaNavigate}),o.a.createElement(A,{title:"Sales",isSelected:this.isSectionOpen("Sales"),onNavigate:this.handlePersonaNavigate})))),o.a.createElement("section",{className:"benefits",ref:this.benefitsSection},o.a.createElement("h2",null,"This is the benefits section"),o.a.createElement("div",{className:"benefits-contents"},o.a.createElement("blockquote",null,o.a.createElement("span",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci magna, eu rutrum nulla volutpat eget. Duis non massa iaculis, euismod nunc quis, egestas metus. Curabitur ac leo a dui vehicula blandit. Donec a purus id ex tincidunt "),o.a.createElement("cite",null,"Jack Skellington, ",o.a.createElement("span",{className:"company"},"Halloween Inc"))),o.a.createElement("ul",{className:"benefits-list"},o.a.createElement("li",null,o.a.createElement("h3",null,"Drive Efficiency"),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci magna, eu rutrum nulla volutpat eget. Duis non massa iaculis, euismod nunc quis, egestas metus. Curabitur ac leo a dui vehicula blandit. Donec a purus id ex tincidunt pulvinar. Proin a eleifend metus.")),o.a.createElement("li",null,o.a.createElement("h3",null,"Drive Efficiency"),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci magna, eu rutrum nulla volutpat eget. Duis non massa iaculis, euismod nunc quis, egestas metus. Curabitur ac leo a dui vehicula blandit. Donec a purus id ex tincidunt pulvinar. Proin a eleifend metus.")),o.a.createElement("li",null,o.a.createElement("h3",null,"Drive Efficiency"),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci magna, eu rutrum nulla volutpat eget. Duis non massa iaculis, euismod nunc quis, egestas metus. Curabitur ac leo a dui vehicula blandit. Donec a purus id ex tincidunt pulvinar. Proin a eleifend metus.")),o.a.createElement("li",null,o.a.createElement("h3",null,"Drive Efficiency"),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci magna, eu rutrum nulla volutpat eget. Duis non massa iaculis, euismod nunc quis, egestas metus. Curabitur ac leo a dui vehicula blandit. Donec a purus id ex tincidunt pulvinar. Proin a eleifend metus."))))),o.a.createElement("section",{className:"partners"},o.a.createElement("h2",null,"Connect, Automate..."),o.a.createElement("p",null,"Sed in nisi efficitur, vestibulum tellus in, sagittis orci. Cras placerat enim justo, sit amet rhoncus."),o.a.createElement(y,null)),o.a.createElement("section",{className:"customers"},o.a.createElement("h2",null,"Trusted by"),o.a.createElement(p.a,null),o.a.createElement(f.a,null)))},t}(o.a.Component);t.default=N},200:function(e,t,a){"use strict";var n=a(10);t.__esModule=!0,t.default=void 0;var i,l=n(a(9)),s=n(a(62)),r=n(a(207)),o=n(a(208)),c=n(a(0)),u=n(a(4)),d=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},m={},p=function(e){var t=d(e),a=t.fluid?t.fluid.src:t.fixed.src;return m[a]||!1},f=[];var h=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){f.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),f.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",l=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',r=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+n+i+"<img "+r+o+t+s+l+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},E=c.default.forwardRef(function(e,t){var a=e.style,n=e.onLoad,i=e.onError,l=(0,r.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,o.default)({},l,{onLoad:n,onError:i,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});E.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var v=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,i=!1,l=t.fadeIn,r=p(t);!r&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,i=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,i=!1);var o=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:!1,IOSupported:i,fadeIn:l,hasNoScript:o,seenBefore:r},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),a=t.fluid?t.fluid.src:t.fixed.src,m[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,n=e.className,i=e.style,l=void 0===i?{}:i,s=e.imgStyle,r=void 0===s?{}:s,u=e.placeholderStyle,m=void 0===u?{}:u,p=e.placeholderClassName,f=e.fluid,h=e.fixed,v=e.backgroundColor,b=e.Tag,y=e.itemProp,S="boolean"==typeof v?"lightgray":v,w=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},r,m),A=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},r),N={title:t,alt:this.state.isVisible?"":a,style:w,className:p};if(f){var L=f;return c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},l),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),L.base64&&c.default.createElement(E,(0,o.default)({src:L.base64},N)),L.tracedSVG&&c.default.createElement(E,(0,o.default)({src:L.tracedSVG},N)),S&&c.default.createElement(b,{title:t,style:{backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,L.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),c.default.createElement("source",{srcSet:L.srcSet,sizes:L.sizes}),c.default.createElement(E,{alt:a,title:t,src:L.src,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},L))}}))}if(h){var q=h,R=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},l);return"inherit"===l.display&&delete R.display,c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},q.base64&&c.default.createElement(E,(0,o.default)({src:q.base64},N)),q.tracedSVG&&c.default.createElement(E,(0,o.default)({src:q.tracedSVG},N)),S&&c.default.createElement(b,{title:t,style:{backgroundColor:S,width:q.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:q.height}}),this.state.isVisible&&c.default.createElement("picture",null,q.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:q.srcSetWebp,sizes:q.sizes}),c.default.createElement("source",{srcSet:q.srcSet,sizes:q.sizes}),c.default.createElement(E,{alt:a,title:t,width:q.width,height:q.height,src:q.src,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t,width:q.width,height:q.height},q))}}))}return null},t}(c.default.Component);v.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),y=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});v.propTypes={resolutions:b,sizes:y,fixed:b,fluid:y,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string};var S=v;t.default=S},204:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(9),i=a.n(n),l=a(0),s=a.n(l),r=a(206),o=(a(205),function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return s.a.createElement("div",{className:"request-demo"},s.a.createElement("div",{className:"demo-details"},s.a.createElement("p",null,"Ut porttitor massa tellus, sit amet tempor nibh tincidunt eget."),s.a.createElement(r.a,null,"Request Demo")))},t}(s.a.Component))},205:function(e,t,a){},211:function(e,t,a){"use strict";var n=a(212),i=a(0),l=a.n(i),s=a(199),r=a(200),o=a.n(r),c=(a(213),function(){return l.a.createElement(s.StaticQuery,{query:"1888718175",render:function(e){return l.a.createElement(o.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:n})});t.a=function(){return l.a.createElement("ul",{className:"logos"},l.a.createElement("li",null,l.a.createElement(c,null)),l.a.createElement("li",null,l.a.createElement(c,null)),l.a.createElement("li",null,l.a.createElement(c,null)),l.a.createElement("li",null,l.a.createElement(c,null)),l.a.createElement("li",null,l.a.createElement(c,null)))}},212:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACIElEQVQ4y2P4TwFgIErVv38gRKZmiAl///5DNYKBsJ3//39/8ODDiRPIIkRoBqv7+eLFKXuH4+bmd+rqv968BRL/+5ew5n9//gDJu21tB+TkTzk5H1ZXv5qa9v3xY7i5DLiCB6Lz3eHDp+zsT9rYnrCwOG5ucURL+9WmzXBzGfB59dGj41ZWR3X1TljbnLSzP25mftLaBuh/sMux2QwM0q83b36+fOXb3btXUlMPqakfNTQ64+G1R0j4YnTM+yNH/v74gS3AwLY9nT8f6LZDGppARwL1HFRSPqCgeMLG9oCs3NXMLByhDRb6dv/+EV29w+oawBA6ZmwCtPawptYBeYVjJqYHlVXOeHj8ev0aWT8D3LVA8suNGyDVcvJAHx4zMtovLbNfVu6EpRUwnoDsI9o6D/r64YrRbf7+6CHQksMamqddXICBfFTf4FxAwPNVq84HBZ8wtzikqnbayfnP5y8YUQU27Ovdu8eMjA9r65x2dLpVUfn11q1fb9/+/fkTGMmXYmOBZp1ycPz7/Tu6ZohL7ra375OQOufnD7T5w8mT8Pi8FBPzbNmyBxMnAQMcI23DYvWIri7Ih6Zml2Lj/v36BZL5/RtIPpgw4eHkyUAFQHF42oRqhlgLjMMLYWGX4hOupKbdqW/4fPky3ObXO3Y8mb/g17t3t6trcMQzMMf9/v332zeQNGrW+/fzJ0j+588/374RkSWxZX2KCgNMAAAhywJvlGQAvQAAAABJRU5ErkJggg==",aspectRatio:1,src:"/konquest-web/static/c042cfef338fd9f55260c257c10de417/5d833/konquest_logo.png",srcSet:"/konquest-web/static/c042cfef338fd9f55260c257c10de417/10a6c/konquest_logo.png 25w,\n/konquest-web/static/c042cfef338fd9f55260c257c10de417/e6b9d/konquest_logo.png 50w,\n/konquest-web/static/c042cfef338fd9f55260c257c10de417/5d833/konquest_logo.png 100w,\n/konquest-web/static/c042cfef338fd9f55260c257c10de417/d59fc/konquest_logo.png 150w,\n/konquest-web/static/c042cfef338fd9f55260c257c10de417/d95fd/konquest_logo.png 200w",sizes:"(max-width: 100px) 100vw, 100px"}}}}}},213:function(e,t,a){},242:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACIElEQVQ4y2P4TwFgIErVv38gRKZmiAl///5DNYKBsJ3//39/8ODDiRPIIkRoBqv7+eLFKXuH4+bmd+rqv968BRL/+5ew5n9//gDJu21tB+TkTzk5H1ZXv5qa9v3xY7i5DLiCB6Lz3eHDp+zsT9rYnrCwOG5ucURL+9WmzXBzGfB59dGj41ZWR3X1TljbnLSzP25mftLaBuh/sMux2QwM0q83b36+fOXb3btXUlMPqakfNTQ64+G1R0j4YnTM+yNH/v74gS3AwLY9nT8f6LZDGppARwL1HFRSPqCgeMLG9oCs3NXMLByhDRb6dv/+EV29w+oawBA6ZmwCtPawptYBeYVjJqYHlVXOeHj8ev0aWT8D3LVA8suNGyDVcvJAHx4zMtovLbNfVu6EpRUwnoDsI9o6D/r64YrRbf7+6CHQksMamqddXICBfFTf4FxAwPNVq84HBZ8wtzikqnbayfnP5y8YUQU27Ovdu8eMjA9r65x2dLpVUfn11q1fb9/+/fkTGMmXYmOBZp1ycPz7/Tu6ZohL7ra375OQOufnD7T5w8mT8Pi8FBPzbNmyBxMnAQMcI23DYvWIri7Ih6Zml2Lj/v36BZL5/RtIPpgw4eHkyUAFQHF42oRqhlgLjMMLYWGX4hOupKbdqW/4fPky3ObXO3Y8mb/g17t3t6trcMQzMMf9/v332zeQNGrW+/fzJ0j+588/374RkSWxZX2KCgNMAAAhywJvlGQAvQAAAABJRU5ErkJggg==",aspectRatio:1,src:"/konquest-web/static/c042cfef338fd9f55260c257c10de417/f507a/konquest_logo.png",srcSet:"/konquest-web/static/c042cfef338fd9f55260c257c10de417/3d1f4/konquest_logo.png 41w,\n/konquest-web/static/c042cfef338fd9f55260c257c10de417/f1f1a/konquest_logo.png 82w,\n/konquest-web/static/c042cfef338fd9f55260c257c10de417/f507a/konquest_logo.png 163w,\n/konquest-web/static/c042cfef338fd9f55260c257c10de417/62462/konquest_logo.png 200w",sizes:"(max-width: 163px) 100vw, 163px"}}}}}},243:function(e,t,a){},244:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-e35301513f8c83e8ca86.js.map