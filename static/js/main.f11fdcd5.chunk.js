(this.webpackJsonprealtime_covid19=this.webpackJsonprealtime_covid19||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Thumbnail.274509f1.jpg"},,,function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(6),r=a.n(c),o=(a(15),a(9)),i=a(1),u=(a(16),a(17),a(7)),s=a.n(u),m=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){fetch("https://coronavirus-19-api.herokuapp.com/all").then((function(e){return e.json()})).then((function(e){return c(e)}))})),l.a.createElement("div",{className:"Home"},l.a.createElement("div",{className:"Content-Home"},l.a.createElement("img",{src:s.a}),l.a.createElement("div",{className:"Content",style:{left:"50%"}},l.a.createElement("div",{style:{color:"#FF0742",paddingLeft:20}},l.a.createElement("h3",null,a.cases),l.a.createElement("p",null,"Coronavirus Cases")),l.a.createElement("div",{style:{color:"#FF0742"}},l.a.createElement("h3",null,a.deaths),l.a.createElement("p",null,"Total Deaths")),l.a.createElement("div",{style:{color:"#FF0742"}},l.a.createElement("h3",null,a.recovered),l.a.createElement("p",null,"Recovered Cases")))))},E=(a(18),function(e){for(var t=e.postsPerPage,a=e.totalPosts,c=e.paginate,r=(e.height,[]),o=1;o<=Math.ceil(a/t);o++)r.push(o);var u=r.length/5,s=Object(n.useState)(0),m=Object(i.a)(s,2),E=m[0],d=m[1],h=Object(n.useState)(5),f=Object(i.a)(h,2),p=f[0],v=f[1],g=Object(n.useState)(0),b=Object(i.a)(g,2),j=b[0],y=b[1];console.log(E),console.log(j);var O=r.slice(E,p).map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",null,l.a.createElement("li",{key:e,className:"page-item"},l.a.createElement("a",{onClick:function(){return c(e)}},e))))}));return l.a.createElement("div",{className:"container"},l.a.createElement("ul",{className:"pagination"},l.a.createElement("div",{className:"item"},l.a.createElement("a",{onClick:function(){return y(j-1),d(E-5),void v(p-5)},style:{textAlign:"right",backgroundColor:"black"}},"<<"),l.a.createElement("a",{style:{textAlign:"center"}},O),l.a.createElement("a",{onClick:function(){j<u?(y(j+1),d(E+5),v(p+5)):j>u&&(y(0),d(0),v(5))},style:{backgroundColor:"black"}},">>"))))}),d=(a(19),function(e){var t=e.detail.map((function(e,t){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,t+1),l.a.createElement("td",null,e.country),l.a.createElement("td",null,e.cases),l.a.createElement("td",null,e.todayCases),l.a.createElement("td",null,e.deaths),l.a.createElement("td",null,e.todayDeaths),l.a.createElement("td",null,e.recovered),l.a.createElement("td",null,e.active),l.a.createElement("td",null,e.critical))}));return l.a.createElement("div",{className:"table-container"},l.a.createElement("div",null,l.a.createElement("h1",null,"COVID-19 DETAIL TRACKER")),l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"No"),l.a.createElement("th",null,"Country"),l.a.createElement("th",null,"Cases"),l.a.createElement("th",null,"Today Cases"),l.a.createElement("th",null,"Deaths"),l.a.createElement("th",null,"Today Deaths"),l.a.createElement("th",null,"Recovered"),l.a.createElement("th",null,"Active"),l.a.createElement("th",null,"Critical"))),l.a.createElement("tbody",null,t)))}),h=a(8),f=a.n(h);var p=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),u=Object(i.a)(r,2),s=u[0],h=u[1],p=Object(n.useState)(!1),v=Object(i.a)(p,2),g=v[0],b=v[1],j=Object(n.useState)(1),y=Object(i.a)(j,2),O=y[0],C=y[1],k=Object(n.useState)(10),N=Object(i.a)(k,2),S=N[0],A=N[1],F=Object(n.useState)(1305),R=Object(i.a)(F,2),T=R[0],w=R[1],x=O*S,D=x-S,I=a.slice(D,x);return""!==s&&(I=Object(o.a)(a).filter((function(e){return e.country===s}))),Object(n.useEffect)((function(){return fetch("https://coronavirus-19-api.herokuapp.com/countries").then((function(e){return e.json()})).then((function(e){return c(e)})),console.log("mounting"),setTimeout((function(){b(!g)}),2e4),function(){fetch("https://coronavirus-19-api.herokuapp.com/countries").then((function(e){return e.json()})).then((function(e){return c(e)})),console.log("updating")}}),[g,S]),l.a.createElement("div",{className:"App"},l.a.createElement(m,{posts:I}),l.a.createElement("div",null,l.a.createElement("div",{style:{position:"absolute",left:150,top:650}},l.a.createElement("select",{className:"select-filter",onChange:function(e){"25"===e.target.value?(A(25),w(2070)):"50"===e.target.value?(A(50),w(3345)):"10"===e.target.value&&(A(10),w(1305))}},l.a.createElement("option",{value:"10"},"10"),l.a.createElement("option",{value:"25"},"25"),l.a.createElement("option",{value:"50"},"50"))),l.a.createElement("div",{style:{position:"absolute",right:150,top:650}},l.a.createElement("input",{placeholder:"Search",className:"Search",type:"text",value:s,onChange:function(e){h(e.target.value)}}))),l.a.createElement(d,{detail:I}),""===s&&l.a.createElement(E,{postsPerPage:S,totalPosts:a.length,paginate:function(e){return C(e)},height:T}),l.a.createElement("div",{style:{position:"absolute",paddingLeft:20,paddingRight:20,top:-20,left:"35%",borderRadius:20,backgroundColor:"#FF0742",color:"#ffffff",height:200}},l.a.createElement("h1",{style:{borderColor:"black",borderWidth:4,paddingTop:80}},"CORONA VIRUS LIVE UPDATE"),l.a.createElement("h3",{style:{textAlign:"center"}},l.a.createElement(f.a,{format:"HH:mm:ss",ticking:!0,timezone:"Indonesia"}))),l.a.createElement("p",{style:{textAlign:"center",color:"#FF0742"}},"\u24b8 2020 FAKHRIL AK"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.f11fdcd5.chunk.js.map