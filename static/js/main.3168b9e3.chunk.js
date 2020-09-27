(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/indiaFlag.ced5790f.png"},22:function(e,t,a){e.exports=a(75)},27:function(e,t,a){},28:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(13),r=a.n(c),s=(a(27),a(5)),m=(a(28),a(29),a(1));var i=function(e){var t=e.title;return l.a.createElement("header",null,l.a.createElement(m.Navbar,{alignLinks:"right",brand:l.a.createElement("a",{className:"brand-logo",href:"#!"},t),centerLogo:!0,id:"nav",menuIcon:!1,options:{draggable:!0,edge:"left",inDuration:250,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:200,preventScrolling:!0}}))},o=a(20),d=a.n(o);var u=function(){return l.a.createElement("section",{className:"section center-align loader-container"},l.a.createElement(m.Preloader,{active:!0,color:"red",flashing:!1,size:"big"}))};var E=function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)({}),i=Object(s.a)(r,2),o=i[0],E=i[1],h=Object(n.useState)({}),g=Object(s.a)(h,2),N=g[0],p=g[1],v=Object(n.useState)([]),f=Object(s.a)(v,2),b=f[0],S=f[1],C=Object(n.useState)([]),w=Object(s.a)(C,2),O=w[0],j=w[1];Object(n.useEffect)((function(){fetch("https://api.covid19india.org/data.json").then((function(e){return e.json()})).then((function(e){E(e.statewise[0]),p(e.tested.pop()),S(e.statewise.slice(1))})),fetch("https://api.covid19india.org/v2/state_district_wise.json").then((function(e){return e.json()})).then((function(e){j(e),c(!1)}))}),[]);var y=function(e){return e.toString().includes(",")?e:new Intl.NumberFormat("en-IN",{maximumSignificantDigits:8}).format(e)};return a?l.a.createElement(u,null):l.a.createElement("div",null,l.a.createElement("section",{className:"center-align"},l.a.createElement("h4",null,"INDIA"),l.a.createElement("img",{src:d.a,alt:"Indian Flag",height:"120px",width:"200px"}),l.a.createElement("div",{className:"center-align mtb-1"},"Last Updated On: ",o.lastupdatedtime)),l.a.createElement("section",{className:"section"},l.a.createElement("h5",{className:"center-align"},"Count"),l.a.createElement(m.Card,{className:"count"},l.a.createElement(m.Row,null,o.confirmed&&l.a.createElement(m.Col,{s:6,className:"total-cases"},l.a.createElement("h5",{className:"center-align"},"Total"),l.a.createElement("h5",{className:"center-align"},y(o.confirmed))),o.active&&l.a.createElement(m.Col,{s:6,className:"total-active"},l.a.createElement("h5",{className:"center-align"},"Active"),l.a.createElement("h5",{className:"center-align"},y(o.active)))),l.a.createElement(m.Row,null,o.recovered&&l.a.createElement(m.Col,{s:6,className:"total-recovered"},l.a.createElement("h5",{className:"center-align"},"Recovered"),l.a.createElement("h5",{className:"center-align"},y(o.recovered))),o.deaths&&l.a.createElement(m.Col,{s:6,className:"total-deaths"},l.a.createElement("h5",{className:"center-align"},"Deaths"),l.a.createElement("h5",{className:"center-align"},y(o.deaths)))),l.a.createElement("div",{className:"center-align"},l.a.createElement("blockquote",null,"Source: covid19india.org")))),l.a.createElement("section",{className:"section"},l.a.createElement("h5",{className:"center-align"},"Testing"),l.a.createElement(m.Card,{className:"testing"},l.a.createElement(m.Row,null,N.totalsamplestested&&l.a.createElement(m.Col,{s:6},l.a.createElement("h5",{className:"center-align"},"Sample Tested"),l.a.createElement("h5",{className:"center-align"},y(N.totalsamplestested))),N.updatetimestamp&&l.a.createElement(m.Col,{s:6},l.a.createElement("h5",{className:"center-align"},"Last Updated"),l.a.createElement("h5",{className:"center-align"},N.updatetimestamp))),N.testsconductedbyprivatelabs&&l.a.createElement(m.Row,null,l.a.createElement(m.Col,{s:6},l.a.createElement("h5",{className:"center-align"},"Tested by Private labs"),l.a.createElement("h5",{className:"center-align"},y(N.testsconductedbyprivatelabs)))),l.a.createElement("div",{className:"center-align"},l.a.createElement("blockquote",null,"Source: ",N.source)))),l.a.createElement(m.Slider,{className:"z-depth-1",fullscreen:!1,options:{duration:500,height:140,indicators:!1,interval:3e3}},l.a.createElement(m.Slide,{image:!1},l.a.createElement(m.Caption,{placement:"center"},l.a.createElement("h5",{className:"blue-text"},"STAY home"))),l.a.createElement(m.Slide,{image:!1},l.a.createElement(m.Caption,{placement:"center"},l.a.createElement("h5",{className:"blue-text"},"KEEP a safe distance"))),l.a.createElement(m.Slide,{image:!1},l.a.createElement(m.Caption,{placement:"center"},l.a.createElement("h5",{className:"blue-text"},"Do Physical Distancing But, Show Social Solidarity"))),l.a.createElement(m.Slide,{image:!1},l.a.createElement(m.Caption,{placement:"center"},l.a.createElement("h5",{className:"blue-text"},"WASH hands often"))),l.a.createElement(m.Slide,{image:!1},l.a.createElement(m.Caption,{placement:"center"},l.a.createElement("h5",{className:"blue-text"},"COVER your cough"))),l.a.createElement(m.Slide,{image:!1},l.a.createElement(m.Caption,{placement:"center"},l.a.createElement("h5",{className:"blue-text"},"SICK? Call the helpline.Check Details"," ",l.a.createElement("a",{rel:"noreferrer noopener",target:"_blank",href:"https://www.mygov.in/covid-19/"},l.a.createElement("span",{role:"img","aria-label":"Link"},"\ud83d\udd17")," ","Here")))),l.a.createElement(m.Slide,{image:!1},l.a.createElement(m.Caption,{placement:"center"},l.a.createElement("h5",{className:"blue-text"},"Check More Details"," ",l.a.createElement("a",{rel:"noreferrer noopener",target:"_blank",href:"https://who.int"},"WHO Official Website"))))),l.a.createElement("section",{className:"section"},l.a.createElement("h5",{className:"center-align"},"State Wise"),l.a.createElement(m.Table,{centered:!0,hoverable:!0,responsive:!0,striped:!0},l.a.createElement("thead",{className:"red lighten-2 white-text"},l.a.createElement("tr",null,l.a.createElement("th",{"data-field":"id"},"State"),l.a.createElement("th",{"data-field":"name"},"Total Cases"),l.a.createElement("th",null,"Active"),l.a.createElement("th",null,"Recovered"),l.a.createElement("th",null,"Deaths"))),l.a.createElement("tbody",null,b.map((function(e){return l.a.createElement("tr",{key:e.state},l.a.createElement("td",null,e.state),l.a.createElement("td",null,e.confirmed," ",e.delta&&l.a.createElement("sub",null,"(+",e.delta.confirmed,")")),l.a.createElement("td",null,e.active),l.a.createElement("td",null,e.recovered),l.a.createElement("td",null,e.deaths))})))),l.a.createElement("br",null),l.a.createElement("div",{className:"center-align "},l.a.createElement("span",{className:"hide-on-med-and-up"},"Scroll horizontally on table to view more states."),l.a.createElement("blockquote",null,"Source: covid19india.org"))),l.a.createElement("section",{className:"section"},l.a.createElement("h5",{className:"center-align"},"State-District Wise"),l.a.createElement(m.Collapsible,{className:"state-district",accordion:!1},O.map((function(e){return l.a.createElement(m.CollapsibleItem,{key:e.state,expanded:!1,header:l.a.createElement(n.Fragment,null,e.state," ",l.a.createElement("i",{className:"material-icons state-icon"},"arrow_drop_down")),icon:l.a.createElement(m.Icon,null,"location_on"),node:"div"},l.a.createElement(m.Table,{centered:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{"data-field":"id"},"District"),l.a.createElement("th",{"data-field":"name"},"Cases"))),l.a.createElement("tbody",null,e.districtData.map((function(e){return l.a.createElement("tr",{key:e.district},l.a.createElement("td",null,e.district),l.a.createElement("td",null,e.confirmed))})))))}))),l.a.createElement("div",{className:"center-align"},l.a.createElement("blockquote",null,"Source: covid19india.org"))))},h=a(21);var g=function(e){var t=e.updateSearched,a=Object(n.useState)({}),c=Object(s.a)(a,2),r=c[0],i=c[1],o=Object(n.useState)({}),d=Object(s.a)(o,2),u=d[0],E=d[1];return Object(n.useEffect)((function(){fetch("https://api.covid19api.com/countries").then((function(e){return e.json()})).then((function(e){var t,a={},n={},l=Object(h.a)(e);try{for(l.s();!(t=l.n()).done;){var c=t.value;""!==c.Country&&(a[c.Country.trim()]=null,n[c.Country.trim()]=c.Slug.trim())}}catch(r){l.e(r)}finally{l.f()}E(n),i(a)}))}),[]),l.a.createElement("section",{className:"center-align"},l.a.createElement(m.Autocomplete,{id:"Autocomplete-1",className:"autocomplete-container",options:{data:r,limit:10,onAutocomplete:function(e){t({name:e,slug:u[e]})}},name:"autocomplete",placeholder:"Enter a Country Name Here"}))};var N=function(e){var t=e.country,a=Object(n.useState)(!0),c=Object(s.a)(a,2),r=c[0],i=c[1],o=Object(n.useState)({}),d=Object(s.a)(o,2),E=d[0],h=d[1],g=Object(n.useState)({}),N=Object(s.a)(g,2),p=N[0],v=N[1],f=Object(n.useState)(""),b=Object(s.a)(f,2),S=b[0],C=b[1];Object(n.useEffect)((function(){null!==t&&fetch("https://api.covid19api.com/summary").then((function(e){return e.json()})).then((function(e){var a=e.Countries;for(var n in a){var l=a[n];if(l.Slug===t.slug){var c={confirmed:l.TotalConfirmed,recovered:l.TotalRecovered,deaths:l.TotalDeaths},r={confirmed:l.NewConfirmed,recovered:l.NewRecovered,deaths:l.NewDeaths};h(c),v(r);break}}C(e.Date.slice(0,10)),i(!1)}))}),[t]);var w=function(e){return e<=0||void 0===e?"-":new Intl.NumberFormat("en-IN",{maximumSignificantDigits:8}).format(e)};return r?l.a.createElement(u,null):l.a.createElement("div",null,l.a.createElement("h4",{className:"center-align"},t.name),l.a.createElement("br",null),l.a.createElement("h5",{className:"center-align"},"Count"),l.a.createElement("section",{className:"section"},l.a.createElement(m.Card,null,l.a.createElement(m.Row,{className:""},l.a.createElement(m.Col,{s:6,className:"total-cases"},l.a.createElement("h6",{className:"center-align"},"Total"),l.a.createElement("h5",{className:"center-align"},w(E.confirmed))),l.a.createElement(m.Col,{s:6,className:"total-recovered"},l.a.createElement("h6",{className:"center-align"},"Recovered"),l.a.createElement("h5",{className:"center-align"},w(E.recovered)))),l.a.createElement(m.Row,null,l.a.createElement(m.Col,{s:6,className:"total-deaths"},l.a.createElement("h6",{className:"center-align"},"Deaths"),l.a.createElement("h5",{className:"center-align"},w(E.deaths))),l.a.createElement(m.Col,{s:6},l.a.createElement("h6",{className:"center-align"},"Last Updated"),l.a.createElement("h5",{className:"center-align"},S))),l.a.createElement("div",{className:"center-align"},l.a.createElement("blockquote",null,"Source: covid19api.com")))),l.a.createElement("h5",{className:"center-align"},"New Cases"),l.a.createElement("section",{className:"section"},l.a.createElement(m.Card,null,l.a.createElement(m.Row,null,l.a.createElement(m.Col,{s:6,className:"total-cases"},l.a.createElement("h5",{className:"center-align"},"New Cases"),l.a.createElement("h5",{className:"center-align"},w(p.confirmed))),l.a.createElement(m.Col,{s:6,className:"total-recovered"},l.a.createElement("h5",{className:"center-align"},"New Recovered"),l.a.createElement("h5",{className:"center-align"},w(p.recovered)))),l.a.createElement(m.Row,null,l.a.createElement(m.Col,{s:6,className:"total-deaths"},l.a.createElement("h5",{className:"center-align"},"New Deaths"),l.a.createElement("h5",{className:"center-align"},w(p.deaths))),l.a.createElement(m.Col,{s:6},l.a.createElement("h5",{className:"center-align"},"Last Updated"),l.a.createElement("h5",{className:"center-align"},S))),l.a.createElement("div",{className:"center-align"},l.a.createElement("blockquote",null,"Source: covid19api.com")))))};var p=function(){return l.a.createElement(m.Footer,{className:"footer",copyrights:"Created By Abdul Samad"},l.a.createElement("h6",{className:"white-text"},"Special Thanks to"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"grey-text text-lighten-3",href:"https://github.com/covid19india/",target:"_blank",rel:"noreferrer noopener"},"COVID-19INDIA")),l.a.createElement("li",null,l.a.createElement("a",{className:"grey-text text-lighten-3",target:"_blank",href:"https://covid19api.com/",rel:"noreferrer noopener"},"KYLE REDELINGHUYS"))),l.a.createElement("h6",null,"for the API."))};var v=function(){var e=Object(n.useState)({name:"India",slug:"india"}),t=Object(s.a)(e,2),a=t[0],c=t[1];return l.a.createElement("div",{className:"App"},l.a.createElement(i,{title:"Covid-19 Stats"}),l.a.createElement(g,{updateSearched:function(e){c(e)}}),l.a.createElement("div",{className:"container"},"india"===a.slug?l.a.createElement(E,null):l.a.createElement(N,{country:a})),l.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.3168b9e3.chunk.js.map