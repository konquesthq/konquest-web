(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{198:function(e,a,t){"use strict";t.r(a);var n=t(62),s=t.n(n),i=t(9),c=t.n(i),l=t(0),o=t.n(l),r=t(4),A=t.n(r),m=t(203),u=t(202),d=t(209),p=t(205),f=t(245),g=t(199),h=t(200),b=t.n(h),E=(t(246),function(){return o.a.createElement(g.StaticQuery,{query:"4152158708",render:function(e){return o.a.createElement("ul",{className:"partners"},e.contentfulLogos.logos.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(b.a,{className:"img",fluid:e.fluid}))}))},data:f})}),w=t(201),y=t(247),C=function(){return o.a.createElement(g.StaticQuery,{query:"3841706330",render:function(e){return o.a.createElement(b.a,{className:"img",fluid:e.image.childImageSharp.fluid})},data:y})},S=t(248),M=function(){return o.a.createElement(g.StaticQuery,{query:"1091938504",render:function(e){return o.a.createElement(b.a,{className:"img",fluid:e.image.childImageSharp.fluid})},data:S})},v=t(249),k=function(){return o.a.createElement(g.StaticQuery,{query:"2624259288",render:function(e){return o.a.createElement(b.a,{className:"img",fluid:e.image.childImageSharp.fluid})},data:v})},B=t(250),N=function(){return o.a.createElement(g.StaticQuery,{query:"1663648671",render:function(e){return o.a.createElement(b.a,{className:"img",fluid:e.image.childImageSharp.fluid})},data:B})},x=(t(251),function(e){function a(){return e.apply(this,arguments)||this}return c()(a,e),a.prototype.render=function(){return o.a.createElement("div",{className:"persona-section "+this.props.className+" "+(this.props.isShown?"open":"")},o.a.createElement("div",{className:"persona-contents"},this.props.children))},a}(o.a.Component));x.propTypes={isShown:A.a.bool.isRequired,children:A.a.node.isRequired,className:A.a.string.isRequired};var U=function(e){function a(a){var t;return(t=e.call(this,a)||this).handleClick=t.handleClick.bind(s()(s()(t))),t}c()(a,e);var t=a.prototype;return t.handleClick=function(){this.props.onNavigate(this.props.title)},t.render=function(){return o.a.createElement("li",{className:this.props.title.toLowerCase()+"-persona-navigation "+(this.props.isSelected?"selected":""),onClick:this.handleClick},o.a.createElement("h3",null,this.props.title),this.props.children)},a}(o.a.Component);U.propTypes={title:A.a.string.isRequired,children:A.a.node,onNavigate:A.a.func.isRequired,isSelected:A.a.bool.isRequired};var I=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={openSection:""},t.benefitsSection=o.a.createRef(),t.handlePersonaNavigate=t.handlePersonaNavigate.bind(s()(s()(t))),t.handleClearPersona=t.handleClearPersona.bind(s()(s()(t))),t.handleScrollToBenefits=t.handleScrollToBenefits.bind(s()(s()(t))),t}c()(a,e);var t=a.prototype;return t.handlePersonaNavigate=function(e){this.setState({openSection:e})},t.handleClearPersona=function(){this.setState({openSection:""})},t.handleScrollToBenefits=function(){var e=this.benefitsSection.current,a=e.ownerDocument.scrollingElement||e.ownerDocument.documentElement;a.scrollTo?a.scrollTo({top:a.clientHeight-65,left:0,behavior:"smooth"}):a.scrollTop=a.clientHeight-65},t.isAnySectionOpen=function(){return Boolean(this.state.openSection)},t.isSectionOpen=function(e){return this.state.openSection===e},t.render=function(){return o.a.createElement(m.a,{className:"home "+this.state.openSection.toLowerCase(),ref:this.layout},o.a.createElement(u.a,{title:"Home",keywords:["konquest","commission","sales","recruitment"]}),o.a.createElement("section",{className:"contents"},o.a.createElement("div",{className:"intro "+(this.isAnySectionOpen()?"closed":"")},o.a.createElement("div",{className:"intro-contents"},o.a.createElement("h1",null,"Commission. Sorted."),o.a.createElement("p",null,"Konquest automatically calculates your sales commissions, no matter how complex they are, allocating them to the right period and exposing earning pipelines to your team. No more spreadsheets. Just Konquest."),o.a.createElement(w.a,null,"Request a Demo")),o.a.createElement(N,null)),o.a.createElement(x,{className:"commercial",isShown:this.isSectionOpen("Commercial")},o.a.createElement("h2",null,"Automate. Motivate."),o.a.createElement("div",{className:"columns"},o.a.createElement("div",{className:"details"},o.a.createElement("ul",null,o.a.createElement("li",{className:"automation"},o.a.createElement("h3",null,"End to End Automation"),o.a.createElement("p",null,"No more spreadsheets, paper forms and emails. Less mistakes and full audit trails so you can focus on growing your business.")),o.a.createElement("li",{className:"flexibility"},o.a.createElement("h3",null,"Total Flexibility"),o.a.createElement("p",null,"Manage one off bonuses or clawbacks with ease whilst automatically informing all concerned.")),o.a.createElement("li",{className:"performance"},o.a.createElement("h3",null,"Enhanced Performance"),o.a.createElement("p",null,"Increase team motivation with one click access to personal commission pipelines for every consultant and manager."))),o.a.createElement("p",null,"Take the pain out of payroll with auto-calculation of commissions, no matter how complex your scheme setup. Konquest will also drive performance by making consultant earnings visible to them in real-time, a proven motivator.")),o.a.createElement("div",{className:"demo"},o.a.createElement(k,null),o.a.createElement("p",null,"Take the pain out of payroll with auto-calculation of commissions, no matter how complex your scheme setup. Konquest will also drive performance by making consultant earnings visible to them in real-time, a proven motivator."),o.a.createElement(w.a,null,"Request Demo")))),o.a.createElement(x,{className:"operations",isShown:this.isSectionOpen("Operations")},o.a.createElement("h2",null,"Secure, Intelligent Automation"),o.a.createElement("p",null,"Remove spreadsheets from your commissions process with a secure, automated solution in the cloud."),o.a.createElement("ul",null,o.a.createElement("li",{className:"auto-calc"},o.a.createElement("h3",null,"Auto Calculation"),o.a.createElement("p",null,"Konquest automatically calculates all of your commission payments and allocates them to the right payroll periods.")),o.a.createElement("li",{className:"central-data"},o.a.createElement("h3",null,"Centralised Data"),o.a.createElement("p",null,"Organise all of your commission and bonus related data in one, cloud based solution.")),o.a.createElement("li",{className:"secure-auto"},o.a.createElement("h3",null,"Secure Automation"),o.a.createElement("p",null,"No more insecure emails or corrupted spreadsheets. Konquest offers a securely encrypted, end to end solution in the cloud.")),o.a.createElement("li",{className:"crm"},o.a.createElement("h3",null,"CRM Integration"),o.a.createElement("p",null,"Securely integrate with your CRM via API to push sales data into Konquest."))),o.a.createElement(w.a,null,"Request Demo")),o.a.createElement(x,{className:"finance",isShown:this.isSectionOpen("Finance")},o.a.createElement("div",{className:"description"},o.a.createElement("h2",null,"Minimise Errors and Payslip Queries"),o.a.createElement("p",null,"Minimize errors and improve efficiency by removing manual input from your commission claim process. All the while ensuring every transaction is recorded in a transparent audit trail."),o.a.createElement(M,null)),o.a.createElement("div",{className:"details"},o.a.createElement("ul",null,o.a.createElement("li",{className:"accuracy"},o.a.createElement("h3",null,"Accuracy"),o.a.createElement("p",null,"Minimize costly mistakes by alleviating the risk of human error.")),o.a.createElement("li",{className:"audits"},o.a.createElement("h3",null,"Audit Trails"),o.a.createElement("p",null,"Record every transaction or event for each claim.")),o.a.createElement("li",{className:"forecasting"},o.a.createElement("h3",null,"Improved Forecasting"),o.a.createElement("p",null,"Realtime insight into estimated and actual commissions payable in any given period.")),o.a.createElement("li",{className:"productivity"},o.a.createElement("h3",null,"Increased Productivity"),o.a.createElement("p",null,"Less time spent calculating commissions and chasing claim submissions with total automation."))),o.a.createElement(p.a,null))),o.a.createElement(x,{className:"sales",isShown:this.isSectionOpen("Sales")},o.a.createElement("div",{className:"details"},o.a.createElement("h2",null,"A Transparent Reward System for All"),o.a.createElement("p",null,"Understand how much you are earning before you earn it, automatically compile commission claims and be involved in the approvals process so there's never a nasty surprise on pay day."),o.a.createElement("ul",null,o.a.createElement("li",{className:"motivation"},o.a.createElement("h3",null,"Motivation"),o.a.createElement("p",null,"One click access to commission pipelines for all, real-time tracking against company or personal commission targets with alerts and earnings summaries.")),o.a.createElement("li",{className:"focus"},o.a.createElement("h3",null,"Focus"),o.a.createElement("p",null,"Less time working out how much you're getting paid, more time focused on what makes you more money!"))),o.a.createElement(w.a,null,"Request Demo")),o.a.createElement(C,null)),o.a.createElement("nav",{className:"persona-navigation"},o.a.createElement("ul",null,o.a.createElement(U,{title:"Commercial",isSelected:this.isSectionOpen("Commercial"),onNavigate:this.handlePersonaNavigate},o.a.createElement("p",null,"For business owners, MD's and Sales Directors")),o.a.createElement(U,{title:"Operations",isSelected:this.isSectionOpen("Operations"),onNavigate:this.handlePersonaNavigate},o.a.createElement("p",null,"For Operations Directors and IT Managers")),o.a.createElement(U,{title:"Finance",isSelected:this.isSectionOpen("Finance"),onNavigate:this.handlePersonaNavigate},o.a.createElement("p",null,"For the finance team, from FD to Payroll Administrators")),o.a.createElement(U,{title:"Sales",isSelected:this.isSectionOpen("Sales"),onNavigate:this.handlePersonaNavigate},o.a.createElement("p",null,"For the business end of the team - Sales Execs and Recruitment Consultants")),o.a.createElement("li",{className:"benefits-nav",onClick:this.handleScrollToBenefits},"Benefits"))),o.a.createElement("nav",{className:"persona-radio-navigation"},o.a.createElement("ul",null,o.a.createElement("li",{onClick:this.handleClearPersona,className:"intro-persona-navigation "+(this.isAnySectionOpen()?"":"selected")},"Intro"),o.a.createElement(U,{title:"Commercial",isSelected:this.isSectionOpen("Commercial"),onNavigate:this.handlePersonaNavigate}),o.a.createElement(U,{title:"Operations",isSelected:this.isSectionOpen("Operations"),onNavigate:this.handlePersonaNavigate}),o.a.createElement(U,{title:"Finance",isSelected:this.isSectionOpen("Finance"),onNavigate:this.handlePersonaNavigate}),o.a.createElement(U,{title:"Sales",isSelected:this.isSectionOpen("Sales"),onNavigate:this.handlePersonaNavigate})))),o.a.createElement("section",{className:"benefits",ref:this.benefitsSection},o.a.createElement("h2",null,"Why Konquest?"),o.a.createElement("blockquote",null,"Konquest removed a headache we go through every month with our commissions, but for me the real win is putting our consultants earnings right in front of them, they love that.",o.a.createElement("cite",null,"Mark Bracknall, ",o.a.createElement("span",{className:"company"},"Director, Theo James"))),o.a.createElement("ul",{className:"benefits-list"},o.a.createElement("li",null,o.a.createElement("h3",null,"Drive Efficiency"),o.a.createElement("p",null,"Konquest dramatically reduces the amount of time and effort your organisation needs to put into managing commission, saving you substantial amounts of time every month – time that could and should be spent driving revenue and profitability."),o.a.createElement("p",null,"By integrating with your CRM, or using a Konquest custom interface through which to record deal data, the process from calculation to approval can be almost entirely automated. Anything that can't be automatically calculated, such as guaranteed bonus for new starters, or deductions such as clawbacks, can be added in a couple of clicks."),o.a.createElement("p",null,"The end result is a dramatic reduction in manual input, not to mention monthly headaches!")),o.a.createElement("li",null,o.a.createElement("h3",null,"Increased Engagement"),o.a.createElement("p",null,"Konquest brings total transparency to your rewards program by ensuring that every member of your team knows exactly how your schemes work and what that means to them for any given period in real time."),o.a.createElement("p",null,"Estimated and secured earnings are visible for all, and any time something changes the effected team member is notified which helps alleviate any nasty surprises come pay day, as well as giving them an opportunity to take any necessary or expected actions."),o.a.createElement("p",null,"The result is an informed and engaged team who trust you and your process.")),o.a.createElement("li",null,o.a.createElement("h3",null,"Increased Performance"),o.a.createElement("p",null,"Konquest shows your team their estimated and secured earnings for current and future months. Associating their efforts to their personal outcome so clearly is a powerful motivator – who doesn't want to see their commission pot increase?!"),o.a.createElement("p",null,"Add in progress indicators against organisational or personal targets and you can expect a real increase in performance company wide.")),o.a.createElement("li",null,o.a.createElement("h3",null,"Ensure Accuracy and Accountability"),o.a.createElement("p",null,"Konquest automatically calculates everything for you based on your unique commission schemes. This means the chances of an error are greatly reduced, and because we record every event associated with claims, each stakeholder is accountable to their own actions. Be that the deal data entered by consultants, an approval actioned by a manager, or a clawback added by your FD.")))),o.a.createElement("section",{className:"partners"},o.a.createElement("h2",null,"Integration Partners"),o.a.createElement("p",null,"Easy Integration with your CRM or Timesheet solution using the Konquest API."),o.a.createElement(E,null)),o.a.createElement("section",{className:"customers"},o.a.createElement("h2",null,"Loved by"),o.a.createElement(d.a,null),o.a.createElement(p.a,null)))},a}(o.a.Component);a.default=I},205:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var n=t(9),s=t.n(n),i=t(0),c=t.n(i),l=t(201),o=(t(206),function(e){function a(){return e.apply(this,arguments)||this}return s()(a,e),a.prototype.render=function(){return c.a.createElement("div",{className:"request-demo"},c.a.createElement("div",{className:"demo-details"},c.a.createElement("p",null,"Can you spare 30mins? We'd love to show you Konquest!"),c.a.createElement(l.a,null,"Request Demo")))},a}(c.a.Component))},206:function(e,a,t){},209:function(e,a,t){"use strict";var n=t(210),s=t(0),i=t.n(s),c=t(199),l=t(200),o=t.n(l);t(211);a.a=function(){return i.a.createElement(c.StaticQuery,{query:"877817960",render:function(e){return i.a.createElement("ul",{className:"logos"},e.contentfulLogos.logos.map(function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(o.a,{className:"img",fluid:e.fluid}))}))},data:n})}},210:function(e){e.exports={data:{contentfulLogos:{logos:[{id:"a16ec948-35af-5ec7-a64d-1449fabeffd6",fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAMAAACDi47UAAAAXVBMVEUAAACVJCeVJCeVJCeVJCeVJCeVJCeWJSiWJSiWJCiVJCeWJSeWJCiVJSiVJCeVJCeVJSeWJCiVJCiWJSmVJCeVJCeVJCeWJSeVJCeVJCeVJCeVJCeVJSiVJCeWJSjqEtD1AAAAH3RSTlMANx6CHRNLChsWGRIaAxIOFhIIASc4OigXKENFJxoCL41CAAAAAAlwSFlzAAAXEQAAFxEByibzPwAAAAd0SU1FB+MECxMnOeUlxQkAAABBSURBVAjXY2AgHTAyYooxMTOzYAiysrGxYlGKqpCdg5OLm4eXj5+PVUBQCCooLCIqJs4oISklKc0oI4uqXw6/6wCDhQIVBRSVqAAAAABJRU5ErkJggg==",aspectRatio:7.142857142857143,src:"//images.ctfassets.net/iisnpk0tsa92/7yMqtwn2zyDli7SzX8sMYC/302cb9ad31f700cffe4b5fd5ab7270a2/customer-theojames.png?w=800&h=112&q=50",srcSet:"//images.ctfassets.net/iisnpk0tsa92/7yMqtwn2zyDli7SzX8sMYC/302cb9ad31f700cffe4b5fd5ab7270a2/customer-theojames.png?w=200&h=28&q=50 200w,\n//images.ctfassets.net/iisnpk0tsa92/7yMqtwn2zyDli7SzX8sMYC/302cb9ad31f700cffe4b5fd5ab7270a2/customer-theojames.png?w=400&h=56&q=50 400w,\n//images.ctfassets.net/iisnpk0tsa92/7yMqtwn2zyDli7SzX8sMYC/302cb9ad31f700cffe4b5fd5ab7270a2/customer-theojames.png?w=486&h=68&q=50 486w",sizes:"(max-width: 800px) 100vw, 800px"}},{id:"8388be18-bd4c-555a-9159-7a2a6d965cf0",fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAMAAACDi47UAAAApVBMVEUAAAA3qb9ov9NlvtJswNLr8/c+P0o+P0o+P0o+P0o+P0o+P0o+P0qAx812w8s+P0o+P0o+P0o+P0o+P0o+P0o+P0o+P0o+P0o+P0qNzMiCx8M+P0o+P0o+P0o+P0o+P0o+P0o+P0o+P0pft6OGybWPzblzwKt/xrcensUensUensUensUensUensUensUensUub4hcuMJ2w8x4xMyRzsmPzciKy8VoD8h8AAAAMXRSTlMAD7HqhgE2RFs+VCAnfztwlGJ4EUBBPFI/gj44GVkzJCE9SxK68Y8BGx0lISciHiMLUACzLwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAAd0SU1FB+MECxMnOeUlxQkAAABHSURBVAjXY2CgPmBkYEQCXyCCLAw8KoyMtxk/CgCFeH/zgqReAAWZGRl5GH98E2P8yc0JZDO+AmpXhun9y8ACJBkYL5BgOwDWnAwxEeCHiQAAAABJRU5ErkJggg==",aspectRatio:7.142857142857143,src:"//images.ctfassets.net/iisnpk0tsa92/77UmGlVFMQoxG6yyNANX2i/559b5f768941d16bc04ece8199dc5f15/customer-cps.png?w=800&h=112&q=50",srcSet:"//images.ctfassets.net/iisnpk0tsa92/77UmGlVFMQoxG6yyNANX2i/559b5f768941d16bc04ece8199dc5f15/customer-cps.png?w=200&h=28&q=50 200w,\n//images.ctfassets.net/iisnpk0tsa92/77UmGlVFMQoxG6yyNANX2i/559b5f768941d16bc04ece8199dc5f15/customer-cps.png?w=400&h=56&q=50 400w,\n//images.ctfassets.net/iisnpk0tsa92/77UmGlVFMQoxG6yyNANX2i/559b5f768941d16bc04ece8199dc5f15/customer-cps.png?w=486&h=68&q=50 486w",sizes:"(max-width: 800px) 100vw, 800px"}},{id:"6d1a3e2e-f0fe-5b15-b8dd-766cc5717553",fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAMAAACDi47UAAAAe1BMVEUAAACz2I2y14yz14202I6z2I2y14yy14y12Y+z2Iy02Y612Y+02Y6z2I19kWUuKisuKistKiouKywuKywtKSqz2I2z2I2z2I2z2I2z2I2LpHAvKywvLC0wLC0uKyswLS4sKSq02I6y14yy14yz2I2325K02I202Y6y14xL5qO8AAAAKHRSTlMAP5V/E0n91AapfXBzs2dHRUI6TimRoq6r1DcwLDUuNDMXz/x+AioXtojOmwAAAAlwSFlzAAAXEQAAFxEByibzPwAAAAd0SU1FB+MECxMnOeUlxQkAAAA5SURBVAjXY2CgCDBCSCD4gybIyqjEcJ/xB6ogJyMCvAHyWUCCPNgF2X4z3kGYyQwiPogwMN8m5CQAvgII39no8dQAAAAASUVORK5CYII=",aspectRatio:7.142857142857143,src:"//images.ctfassets.net/iisnpk0tsa92/2PCmtgzRHnImkP9Sv8bApT/48c635633a2c05a679e8225b58b0695b/customer-gem.png?w=800&h=112&q=50",srcSet:"//images.ctfassets.net/iisnpk0tsa92/2PCmtgzRHnImkP9Sv8bApT/48c635633a2c05a679e8225b58b0695b/customer-gem.png?w=200&h=28&q=50 200w,\n//images.ctfassets.net/iisnpk0tsa92/2PCmtgzRHnImkP9Sv8bApT/48c635633a2c05a679e8225b58b0695b/customer-gem.png?w=400&h=56&q=50 400w,\n//images.ctfassets.net/iisnpk0tsa92/2PCmtgzRHnImkP9Sv8bApT/48c635633a2c05a679e8225b58b0695b/customer-gem.png?w=486&h=68&q=50 486w",sizes:"(max-width: 800px) 100vw, 800px"}},{id:"adf741ca-c0e4-595d-a96c-82be3714dffc",fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAMAAACDi47UAAAApVBMVEUAAAD////////++uf//////vn////98sr+99z97bT845r//PT97bL////8343967b+78f97Lz+89X+7sP97L397b7+89P845n++Of+8c7+9dn96bH+8tH+9+L+9dX98L7///3////85Zj85Jf//vn//PT//fj856D845b95J783IL834z83YP84JH84JD83on83of97Lz97cD97sL+8c7+8tD+8MqiDeuWAAAAHnRSTlMAAAYGAv0D/QL9A+vt7e3t7e3t7e3t7e3t7e3t7QONc7TRAAAACXBIWXMAABcRAAAXEQHKJvM/AAAAB3RJTUUH4wQLEyc55SXFCQAAAD5JREFUCB2lwcENQEAARcH3+EuiA/3X5qAGZGUTB+IiMcM/KlYeanpnlbsldNEDiBuXxKKDzWSzl9WMvvDZCdKaB0dzoMtuAAAAAElFTkSuQmCC",aspectRatio:7.142857142857143,src:"//images.ctfassets.net/iisnpk0tsa92/6QC4hpShgEedHab4aYn0QJ/8363c3e2ff72e4cf66e558e665c6ae98/customer-premiergroup.png?w=800&h=112&q=50",srcSet:"//images.ctfassets.net/iisnpk0tsa92/6QC4hpShgEedHab4aYn0QJ/8363c3e2ff72e4cf66e558e665c6ae98/customer-premiergroup.png?w=200&h=28&q=50 200w,\n//images.ctfassets.net/iisnpk0tsa92/6QC4hpShgEedHab4aYn0QJ/8363c3e2ff72e4cf66e558e665c6ae98/customer-premiergroup.png?w=400&h=56&q=50 400w,\n//images.ctfassets.net/iisnpk0tsa92/6QC4hpShgEedHab4aYn0QJ/8363c3e2ff72e4cf66e558e665c6ae98/customer-premiergroup.png?w=486&h=68&q=50 486w",sizes:"(max-width: 800px) 100vw, 800px"}},{id:"f1fc9ac2-09ea-5dad-b9f9-d9a4acbfc47e",fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAMAAACDi47UAAAAnFBMVEX////s8/bn7Of8+ezg6u/r58zs47r+/fjc6O7h5+L79eL+/fn67cf67sz678z78dT78tf78dP57Maausenws7B1NywydPA1Ny2zNb24J/y1Hv35a/135r13Zb24aH13JKkwc20y9WDqrp0n7KvyNPG2N/z9/je6Ovf6Ovg6ezl7e/d5+rn7vDi6+3M2+HP3eL09/j+/v79/f37/P3ry7DRAAAACXBIWXMAABcRAAAXEQHKJvM/AAAAB3RJTUUH4wQLEyc55SXFCQAAAE1JREFUCNdjYCAFMDIxowkAMQsjI+NPZEEWiOA3dJXcjHDAAMQvICp5ISJfecAURPDrVzUwj/cfMyPjH1aomQy3GBgMGc+BjTP+h8uNAC4dDEfkTRwIAAAAAElFTkSuQmCC",aspectRatio:7.142857142857143,src:"//images.ctfassets.net/iisnpk0tsa92/6QgCc2VKjD5GrVACQO5PG0/e638ad737b95e7f1e65be3e4d2727145/customer-lennonwright.png?w=800&h=112&q=50",srcSet:"//images.ctfassets.net/iisnpk0tsa92/6QgCc2VKjD5GrVACQO5PG0/e638ad737b95e7f1e65be3e4d2727145/customer-lennonwright.png?w=200&h=28&q=50 200w,\n//images.ctfassets.net/iisnpk0tsa92/6QgCc2VKjD5GrVACQO5PG0/e638ad737b95e7f1e65be3e4d2727145/customer-lennonwright.png?w=400&h=56&q=50 400w,\n//images.ctfassets.net/iisnpk0tsa92/6QgCc2VKjD5GrVACQO5PG0/e638ad737b95e7f1e65be3e4d2727145/customer-lennonwright.png?w=486&h=68&q=50 486w",sizes:"(max-width: 800px) 100vw, 800px"}}]}}}},211:function(e,a,t){},245:function(e){e.exports={data:{contentfulLogos:{logos:[{id:"8b05ff8c-f7a9-592a-b84b-46b93077d854",fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAMAAAAFH/x6AAAAqFBMVEUAAADyejvzcy/zejvycCvxayTxbSbydDHybijxayPxayPybSbybyooMUwoMUw7Q1smL0ssNE8oMUxcYnZoboB3fIzMdUrxayTxayPybSb0hUsoMEsoMUwoMUwnMEsrM04kLUkoMEwmL0ooMEslLkmicmHybynybijybykrM04oMEsnMEsqMk0xOVMrNE8pMUwoMUwuNlEsNE9obX/yfT/ycCvycSzxaiKyIgznAAAAN3RSTlMABRgEOaKeBzfY6YMQLE8DIEEcAQEBBK/5ggJXdGSPg5Z7lnWPCYiAVhk7ICIhHSsrFBwBATQf1/SgbAAAAAlwSFlzAAAXEQAAFxEByibzPwAAAAd0SU1FB+MECxQ0FipUr0cAAAA9SURBVAjXY2AgBBiZoDRCiJkRCH6CWEwIwb8sLIbM3DxQlbyMcKDwkJHxGVhQmhEZ3GBgYAEK8qEIMpACABjMBXiFwOmnAAAAAElFTkSuQmCC",aspectRatio:3.4188034188034186,src:"//images.ctfassets.net/iisnpk0tsa92/1bB4wep193kze1TPeBalZG/69522bda6755dcd39496c36e9a5e040b/partner-bullhorn.png?w=800&h=234&q=50",srcSet:"//images.ctfassets.net/iisnpk0tsa92/1bB4wep193kze1TPeBalZG/69522bda6755dcd39496c36e9a5e040b/partner-bullhorn.png?w=200&h=59&q=50 200w,\n//images.ctfassets.net/iisnpk0tsa92/1bB4wep193kze1TPeBalZG/69522bda6755dcd39496c36e9a5e040b/partner-bullhorn.png?w=400&h=117&q=50 400w,\n//images.ctfassets.net/iisnpk0tsa92/1bB4wep193kze1TPeBalZG/69522bda6755dcd39496c36e9a5e040b/partner-bullhorn.png?w=474&h=139&q=50 474w",sizes:"(max-width: 800px) 100vw, 800px"}},{id:"bbd67c62-c71c-568c-bd1d-71382dbfd4a8",fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAMAAAAFH/x6AAAAYFBMVEUAAADnFj/lFj7lFj7lFj7mFj7lFj7lFj7lFj7kFj56SVVYWVxYWVxYWVxYWVxYWl1YWVxYWVzlFj7lFj7nFj7lFj7lFj5YWVxYWVxYWVxYWVxYWVxYWVzlFj7lFj7lFj6e0lE1AAAAIHRSTlMAA4SHfwVGTF++H1pGQUBbVyYpgQqQYBowKykqHTp9MUnPi1oAAAAJcEhZcwAAFxEAABcRAcom8z8AAAAHdElNRQfjBAsUNBYqVK9HAAAAN0lEQVQI12NgoAgwgjAI/EYTZGP8ycEIBX9Y3zMwsAAFeRh5QXygjv9MDIzvISoZZBkZH5JnOwBRNwcZJsgkugAAAABJRU5ErkJggg==",aspectRatio:3.4188034188034186,src:"//images.ctfassets.net/iisnpk0tsa92/3kIlLVxEi6ecicIXmbtRov/e5013ff59e3064a85b7591d611a8165c/partner-accessgroup.png?w=800&h=234&q=50",srcSet:"//images.ctfassets.net/iisnpk0tsa92/3kIlLVxEi6ecicIXmbtRov/e5013ff59e3064a85b7591d611a8165c/partner-accessgroup.png?w=200&h=59&q=50 200w,\n//images.ctfassets.net/iisnpk0tsa92/3kIlLVxEi6ecicIXmbtRov/e5013ff59e3064a85b7591d611a8165c/partner-accessgroup.png?w=400&h=117&q=50 400w,\n//images.ctfassets.net/iisnpk0tsa92/3kIlLVxEi6ecicIXmbtRov/e5013ff59e3064a85b7591d611a8165c/partner-accessgroup.png?w=474&h=139&q=50 474w",sizes:"(max-width: 800px) 100vw, 800px"}},{id:"b186add6-d3b7-5a34-b23f-ac2d762c8395",fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAMAAAAFH/x6AAAAq1BMVEUAAACHh4e7xlC6xU+5xEy+x1W6xU66xU+7xU+6xU2xvTu4w0m6xU67xlFERERYWFiFhYWEhIRZWVlXV1eHh4dDQ0O7xVC6xU66xU65xEwLCwsSEhITExMUFBQREREPDw8ZGRkQEBBmZmaxvTu4w0q6xU66xU+6xU8cHBwbGxs6OjoTExMoKCgsLCwUFBQbGxtpaWm4wku6xU26xU+6xU66xE27xlC4w0u6xU4WK6yeAAAAOXRSTlMAAAo1NQIySD1HEFZTEAEDAQEBAQECMk4+UVJyk4RqbIeUBw5dQ00bDxsRHRQRISECBDZJSE4WUC5CjM4fAAAACXBIWXMAABcRAAAXEQHKJvM/AAAAB3RJTUUH4wQLFDQWKlSvRwAAAENJREFUCNdjYMACGMEkEyPjHyRBFiBmZWREFQSp5GL8AxYHgzf/odrFGJHAPYh2ZWQxRqiZfCD2aTSLzjOYMTIyEAIAQe8ILZ0C09wAAAAASUVORK5CYII=",aspectRatio:3.4188034188034186,src:"//images.ctfassets.net/iisnpk0tsa92/5e368TVhEZNEIUmBKlq1LM/c005b5d05fe3010e068f4dfe67a07a08/partner-engage.png?w=800&h=234&q=50",srcSet:"//images.ctfassets.net/iisnpk0tsa92/5e368TVhEZNEIUmBKlq1LM/c005b5d05fe3010e068f4dfe67a07a08/partner-engage.png?w=200&h=59&q=50 200w,\n//images.ctfassets.net/iisnpk0tsa92/5e368TVhEZNEIUmBKlq1LM/c005b5d05fe3010e068f4dfe67a07a08/partner-engage.png?w=400&h=117&q=50 400w,\n//images.ctfassets.net/iisnpk0tsa92/5e368TVhEZNEIUmBKlq1LM/c005b5d05fe3010e068f4dfe67a07a08/partner-engage.png?w=474&h=139&q=50 474w",sizes:"(max-width: 800px) 100vw, 800px"}},{id:"072a3cd8-7b85-5de3-98b7-9483ae8df7cb",fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAMAAAAFH/x6AAAAmVBMVEUAAAAyMjIyMjIyMjIyMjI0NDQyMjIzMzMyMjIzMzMzMzMzMzMyMjIyMjIyMjIyMjIyMjIxMTFKNzBoPi4yMjIyMjIyMjIzMzMyMjIyMjIyMjIyMjIyMjIyMjIwMDAyMjJFNjDwXCLwXCLwXCIzMzMyMjIyMjIzMzMzMzMyMjIyMjIyMjIyMjIzMzMyMjI0NDQyMjLwXCLwXCL9RlL0AAAAM3RSTlMAThB6bwQEBAMFAwgJBgGGdBU6PFZin2NzP5Z3aa8NQaZniiwNKigtQUYxUCkuDAEOGxP6dbNtAAAACXBIWXMAABcRAAAXEQHKJvM/AAAAB3RJTUUH4wQLFDQWKlSvRwAAADJJREFUCNdjYKAIMAIRAvxmY/zLxPSJhYGBDyLwnwkmBRIUYEQBz6UeQQXPIZn4hgTbAeT/COsFSIG+AAAAAElFTkSuQmCC",aspectRatio:3.4188034188034186,src:"//images.ctfassets.net/iisnpk0tsa92/3FFvGHfqvej9rf9hxkak0a/254383dc7114170bae2d4b3ac11f6ccb/partner-vincere.png?w=800&h=234&q=50",srcSet:"//images.ctfassets.net/iisnpk0tsa92/3FFvGHfqvej9rf9hxkak0a/254383dc7114170bae2d4b3ac11f6ccb/partner-vincere.png?w=200&h=59&q=50 200w,\n//images.ctfassets.net/iisnpk0tsa92/3FFvGHfqvej9rf9hxkak0a/254383dc7114170bae2d4b3ac11f6ccb/partner-vincere.png?w=400&h=117&q=50 400w,\n//images.ctfassets.net/iisnpk0tsa92/3FFvGHfqvej9rf9hxkak0a/254383dc7114170bae2d4b3ac11f6ccb/partner-vincere.png?w=474&h=139&q=50 474w",sizes:"(max-width: 800px) 100vw, 800px"}}]}}}},246:function(e,a,t){},247:function(e){e.exports={data:{image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACMElEQVQoz41RS2gTURR9RESpKzcu/C0U/BGZugu4EMSl7vysXAmCguJChC5sC4WWZiMVAiktFowV6wdcCMGClKoghMQaY8GQNLETJwk1iZnM7828z/W+NBYpKF44c9+bcz/n3kfI/9m2o+FT10f274scJuTSGULGhkOhbCYeTyiymkrtkFL2AUAfwU8ELxHf9yOe53W9Qq1WizQajZPIa0bTCr98+mLJzKXHFh4+GJwdHrqTnpoab+v6NPKPhBCf0BtY5zupVCrgui7gBZT99vV6XXLOQXBmJF8vLN0duUfvTya8b+Wyi7SNcBAMNlm3oGEYYFkWdDqd7k8eMNBLK3JNL4Nr/lxLZ7LFC5dvwvybd1JgEwvjpBCAE6k81CAFpgnlSaFQEPl8XjSbTVEqlYRl2wJbiw+5zzxbLKr6RcOov71ybUA1ZDhNN87GuFarJXuTyN50kmyWzBwHGnNz0EwkoDP7GGev1m4NTuQGhiY2VqKAe+uuysF4xpjs1ZMEQZGkLAio5/uUmiY1YjGqR6Pe6ugos5aXa1dvj7fj089UkodqKPU8GmC8aZpBu93G1ICrTWEtTrCLhl00SqnGGdNwyxqs4wTiEPXt81/eL858zaRuYMUjjm33M877UcRF5KOIeURr41H+ZbEDB7fzlY9hgGAPOJVjf3KYuxWL7kZVxxGn8X4O/VmCykL4WutQZ9cNtYxqSDV7FZvZpZIXnzzfmU0m96rzj1V9i4r9m4hfHLs813qDLu4AAAAASUVORK5CYII=",aspectRatio:2.093525179856115,src:"/konquest-web/static/4e9e55b707f474b1215d16d0e3022d90/5aed1/sales.png",srcSet:"/konquest-web/static/4e9e55b707f474b1215d16d0e3022d90/d57d1/sales.png 200w,\n/konquest-web/static/4e9e55b707f474b1215d16d0e3022d90/cd078/sales.png 400w,\n/konquest-web/static/4e9e55b707f474b1215d16d0e3022d90/5aed1/sales.png 800w,\n/konquest-web/static/4e9e55b707f474b1215d16d0e3022d90/06282/sales.png 1200w,\n/konquest-web/static/4e9e55b707f474b1215d16d0e3022d90/d6418/sales.png 1600w,\n/konquest-web/static/4e9e55b707f474b1215d16d0e3022d90/c125d/sales.png 1746w",sizes:"(max-width: 800px) 100vw, 800px"}}}}}},248:function(e){e.exports={data:{image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAACC0lEQVQoz2WRTWgTQRTH40cPEg8WCRYUBA9SREmwBvy49FD8iKmaaEWFEtFSTxpQ7IdY8RLUolQ9qIeCFnoQQRBv2oNNDyLNNg022MZQS6uk2O6mu8kmu7M7O39nN40GfPCfeTxmfvN/b1zuBp+rNsaafGvt3Xfg8Ma+aFTI9PdjuucWnbrZhamubqS57Dzd04u5wUFIggCzXGYMAGPMciAbtng3HWluree1uhp2XXMgnMolEpAS41ROTkCenMQKB8jJJORUCsVsFiSfB6MUNs9eKlfXb/cfC0Wez7x4erV4py8023nZ52/yHgxEOoUSP2cCVLMsEFWFwS/pJoWp66BVimOOOYvD86zxNGz1BxduN+59mT4RtGY72t8/bj365HQwLOVlBQZvSS8UHIdE06AtLaGQycA0DDD+0CrMkQOs9+zav21PS3lo4NmP3JvXSD28/z1+t/dee/gsmfv5C79zi0xcFiFx+DKHiaKEFf6AWizC4sBVi/+APNa5Nze+nfiWSSuSiHfHAyPd50/duNhxRZaLJZgmZWWNQNN0aLrBRUAIAaUVd/8BZxLT7n2HAo8+fxwZWxz9hHj02odLbWeCJy9EvmqEt8VgmfbcakT5R1Rh9iCrucvFNT88vHv8wUDoSyy2Mzv06roSH/XGwm07WkLnBJW3pqsqVRUFpap4zZ6lVfndv+7s+AN+YMkNDwj96gAAAABJRU5ErkJggg==",aspectRatio:2.5944584382871536,src:"/konquest-web/static/f4e7e4120135f6bd55bb4c620676aef4/5aed1/finance.png",srcSet:"/konquest-web/static/f4e7e4120135f6bd55bb4c620676aef4/d57d1/finance.png 200w,\n/konquest-web/static/f4e7e4120135f6bd55bb4c620676aef4/cd078/finance.png 400w,\n/konquest-web/static/f4e7e4120135f6bd55bb4c620676aef4/5aed1/finance.png 800w,\n/konquest-web/static/f4e7e4120135f6bd55bb4c620676aef4/06282/finance.png 1200w,\n/konquest-web/static/f4e7e4120135f6bd55bb4c620676aef4/d6418/finance.png 1600w,\n/konquest-web/static/f4e7e4120135f6bd55bb4c620676aef4/5c137/finance.png 2400w,\n/konquest-web/static/f4e7e4120135f6bd55bb4c620676aef4/8425e/finance.png 3090w",sizes:"(max-width: 800px) 100vw, 800px"}}}}}},249:function(e){e.exports={data:{image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAAD+klEQVQ4y4VTbUxbVRi+1CaKbjAwddEfatRtxhkk6Bz4w+yPshj3Y2GIGcQYJrrF4BgsKKUm4iejGtcJ04FbRjbi+GophfI52LBsEJSkFkqbgna9/f4mpbf39t57Xs8paaN/9Emee07e+77Pfc59z0tFo9EsCsNms+UIgmBnmAT4/QExFApDMBiCOMMAjgPP8/+kABg4vqhSqaSkPhgMUim0nr8gIavX487hkkm7LxCEe7RTdNAuvG6T7B1OFzhdHqCdbrA7nEIcf1gUxcW2NmVKMBQKUf+C0WTCDkU7+TKX5EVMsgKfcidAEjuLbcWBYzlgE2zG4aXOzvtJfTS6Sel0Oop65qXih48cOboXv99JjkwSk7wg8rwIgoggEopCwBsgYegdGYPm79tTWuSBRNGQNuT3+bY3uY8//fP8yKAXgCnBQuaUQ44TWZYFQnrDAX6nF7tBsDo7Decq3oJfOzpEkheLMy71wOD76zarBAFQ+tFRrJid07A0f+vclvvPanw0aygcAbfHK7rcHnD7/LAwpAM37QbabAaFTAaKXbnwIUWJ6lOnIBCJbHzXfnFtanyslJjTarVSSvb8gfLi8neYL89fWAchGQuEIuDzB5HPH4DgZgzMhnkYlMtBdfgwNOXnQxMWlctkqGnHDuiu/ch1pW/ArFOryzLN6PjxYvMZuYJu+1Y5AYj3kKNgp4j8wyRuCoHhUidMtSlBp/gUGrKzCdG1qiroKi9n+rs6Z8cnJy3jen3dkFb7AoXzZW9UVS+/XnniY7xfSDclmeqskBEluP1DO5yRSqFOIkEDtbXIqtfDJ9XvReu+aF3TaIdhcmK8Fnt86Imd+wqh8LU35bjmd5bjIBwOi7FYLCWCEAIBxwiWenqgMS8PGvPz0S81NTxttcDJsvJrWCSrTvGZbXxsLEjlPlt4VPrkc/BU8aFmXPOb148vtmP7YtMud4pk78Fx490F6Dp9Gq7U18PVlhaxurQUyoqK+Ipjb9/qvtEHE2P6z0lTDj64pwAeK3pFSRziqwdMghUxER7DFONxBiVFhOwWK9KoVEjf1YVGLl+Gs5WVkYqSkvWfVCrh5sxMj3pw8FVqc+OPA3cnh/tnRofqieD2pAh4CgU+TY7jyY/k761ZhNt9fcLy9E1uZXaWpM5pNJpHpqanSzJdhsBfe4D1vQub7mMCQjT8B7YCAaBNJmCjUXAZjSS0ltYx3Llz37BWm0W5TIs5Yevyi9615f0Jlq3H06HE/Arz6zQTDPMNLm6xLC1dNc7NdYf9/laDRjOJYzUNx49L+3t7s0wrK9SN69cpquBgye6mxrN7T35Qs4/6fxzC3I25i3ogLzUdjxa8LFldXc0k/A3Q02bmMyNegQAAAABJRU5ErkJggg==",aspectRatio:1.212707182320442,src:"/konquest-web/static/45f9fbf1e441f3549cc85bc12baf3aac/5aed1/commercial.png",srcSet:"/konquest-web/static/45f9fbf1e441f3549cc85bc12baf3aac/d57d1/commercial.png 200w,\n/konquest-web/static/45f9fbf1e441f3549cc85bc12baf3aac/cd078/commercial.png 400w,\n/konquest-web/static/45f9fbf1e441f3549cc85bc12baf3aac/5aed1/commercial.png 800w,\n/konquest-web/static/45f9fbf1e441f3549cc85bc12baf3aac/06282/commercial.png 1200w,\n/konquest-web/static/45f9fbf1e441f3549cc85bc12baf3aac/a0dbc/commercial.png 1317w",sizes:"(max-width: 800px) 100vw, 800px"}}}}}},250:function(e){e.exports={data:{image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACvklEQVQoz4WTW0gUURjHp4sJCS1G0FPp5j0vWctmt4c0LMEkFDShCLQMIsIgUtxMfCkjNNDdtAzyOZLwUiSVmD5Impu1Krpm7mXUdS+zOzs7l925nK+z6xIVQQd+/Od835k//3NmDkH8No5RsKW56e70zKM2MN9rkU0NOpi50wgzuv+Cwmqsb0BEbGJGTkxCeq4qJScVe27blan9OmfohJWuLsWu1wNpMIAdQ0ax/2MeVbTc0QFEXNrBkCpDA3HJ2bPYMCarsMToRwB+QLIIADJGwUhRlGjtrx6K9hChytSi+Kw8iE3cv/Ss+UbytetXre+GR4D2uJSQIADLMCA4HCCyLHAcD5zbDbLXB0FeADEYBFmUQMTrBNyTRBEnzNBI8dhUc7KQulxdvXalpgaG3g4hjgmgEH4hFAgANTICvMsZSSiYF2H65QuYM33BeRD4vV4Ij8VZE4ziIMT2dA2kHz8FaYdP0OcrK/3lFy4BaV9Bq3YS3E4nUDiRl8GmHg+4HevABQWYnDCCoaUdHBYruFft4PO4obuuDl496QZClZr7WXO2eDL/XIn5Zm2tXFRWoSzbSOB5AdHYyB+GZiJK+wMgShIMD36Aet0D4HF6n48GjmfhcVUVGF8PAJFfULo1/MuMfxoreDM4aDpTcVFcdazjzwJIlGQkycoGkoKwIEmU0dPmdtT6sHNjTUiMaJuuCb3v7UUEnmwOG459HD3d39evP1pcJjidrsi5yJIMiqz8QpLkSH0Cb/l24/3IsyJv1Jpqb4GutAyI1nZ9xHCgvy+v53lPeXZ+0aLNahVDLMsFfD6epek/4BiGZ9zOoGNpIfh7/fvUeJCcnxWITdFbsnunaod67574fYeOJK2QK2o/Rakpl0vtdbmjuNQ05VGv2cgky7TxgNfyI3fdZk1hA2yCzTyfZvk2qV2YGtf+BCplhJKEhKxXAAAAAElFTkSuQmCC",aspectRatio:1.8198614318706698,src:"/konquest-web/static/f14063d25d468022bb46eb8ee39615a3/5aed1/default.png",srcSet:"/konquest-web/static/f14063d25d468022bb46eb8ee39615a3/d57d1/default.png 200w,\n/konquest-web/static/f14063d25d468022bb46eb8ee39615a3/cd078/default.png 400w,\n/konquest-web/static/f14063d25d468022bb46eb8ee39615a3/5aed1/default.png 800w,\n/konquest-web/static/f14063d25d468022bb46eb8ee39615a3/06282/default.png 1200w,\n/konquest-web/static/f14063d25d468022bb46eb8ee39615a3/d6418/default.png 1600w,\n/konquest-web/static/f14063d25d468022bb46eb8ee39615a3/9be9a/default.png 2364w",sizes:"(max-width: 800px) 100vw, 800px"}}}}}},251:function(e,a,t){}}]);
//# sourceMappingURL=component---src-pages-index-js-bd1872e9931add6748f2.js.map