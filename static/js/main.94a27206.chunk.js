(this.webpackJsonpdemovideo=this.webpackJsonpdemovideo||[]).push([[0],{20:function(e,t,a){},52:function(e,t,a){e.exports=a(65)},57:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(9),c=a.n(i),o=(a(57),a(8)),r=a(47),d=a(87),m=a(89),s=(a(20),a(88)),u=a(86),g=a(84),h=a(74),p=a(75),v=a(76),k=a(77),E=a(78),w=a(82);var b=function(e){for(var t=e.videoperpage,a=e.totalvideos,n=e.paginate,i=[],c=1;c<=Math.ceil(a/t);c++)i.push(c);return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{width:"xxlarge",direction:"row",justify:"center",align:"center"},l.a.createElement(r.a,{direction:"row",background:"white",elevation:"medium"},i.map((function(e){return l.a.createElement(r.a,{border:!0,focusIndicator:"white",onClick:function(){return n(e)},pad:{left:"small",right:"small"},justify:"center",align:"center"},e)})))))},f=[{tittle:"video 1",videolink:"",addedon:"20 Sep 2020",checked:!1},{tittle:"video 2",videolink:"",addedon:"20 Sep 2020",checked:!1},{tittle:"video 3",videolink:"",addedon:"20 Sep 2020",checked:!1},{tittle:"video 4",videolink:"",addedon:"20 Sep 2020",checked:!1},{tittle:"video 5",videolink:"",addedon:"20 Sep 2020",checked:!1},{tittle:"game 6",videolink:"",addedon:"20 Sep 2020",checked:!1},{tittle:"game 7",videolink:"",addedon:"20 Sep 2020",checked:!1},{tittle:"game 8",videolink:"",addedon:"20 Sep 2020",checked:!1},{tittle:"game 9",videolink:"",addedon:"20 Sep 2020",checked:!1},{tittle:"game 10",videolink:"",addedon:"20 Sep 2020",checked:!1},{tittle:"movie 11",videolink:"",addedon:"20 Sep 2020",checked:!1},{tittle:"movie 12",videolink:"",addedon:"20 Sep 2020",checked:!1},{tittle:"movie 13",videolink:"",addedon:"20 Sep 2020",checked:!1},{tittle:"movie 14",videolink:"",addedon:"20 Sep 2020",checked:!1},{tittle:"movie 15",videolink:"",addedon:"20 Sep 2020",checked:!1},{tittle:"song 16",videolink:"",addedon:"20 Sep 2020",checked:!1},{tittle:"song 17",videolink:"",addedon:"20 Sep 2020",checked:!1},{tittle:"song 18",videolink:"",addedon:"20 Sep 2020",checked:!1},{tittle:"song 19",videolink:"",addedon:"20 Sep 2020",checked:!1},{tittle:"song 20",videolink:"",addedon:"20 Sep 2020",checked:!1}],j=function(e){var t=Object(n.useState)(e.checked),a=Object(o.a)(t,2),i=a[0],c=a[1];console.log(i);var d=Object(n.useState)(!1),u=Object(o.a)(d,2);u[0],u[1];return l.a.createElement(r.a,{width:"xxlarge",direction:"row-responsive",align:"center",margin:{top:"30px"},round:"small",pad:"small",elevation:"small",gap:"small"},l.a.createElement(r.a,{direction:"row",gap:"small",align:"center",justify:"between",className:"video",border:"right",pad:{right:"small"}},l.a.createElement(r.a,{direction:"row",justify:"start",width:"50%",align:"center",gap:"small"},l.a.createElement(s.a,{checked:i,onChange:function(e){return c(e.target.checked)}}),l.a.createElement(r.a,{className:"vid",align:"center",background:"dark-1",justify:"center"},"Video"),l.a.createElement(m.a,{className:"stl",weight:"bold",size:"small"},e.tittle)),l.a.createElement(r.a,{width:"40%",pad:"10px",round:"small",elevation:"medium",gap:"small",direction:"row",justify:"center",background:"light-2",align:"center"},l.a.createElement(h.a,{color:"black"}),l.a.createElement(p.a,{color:"black"}),l.a.createElement(v.a,{color:"black"}),l.a.createElement(k.a,{color:"black"}))),l.a.createElement(r.a,{className:"inform",direction:"row",justify:"between",align:"center"},l.a.createElement(r.a,{direction:"column",gap:"small"},l.a.createElement(m.a,{className:"stl",weight:"bold",size:"small"},"Type"),l.a.createElement(m.a,{className:"stl",weight:"bold",size:"small"},"Added On"),l.a.createElement(m.a,{className:"stl",weight:"bold",size:"small"},"Table of Content"),l.a.createElement(m.a,{className:"stl",weight:"bold",size:"small"},"Phrase Cloud")),l.a.createElement(r.a,{direction:"column",gap:"small"},l.a.createElement(E.a,{color:"blue"}),l.a.createElement(m.a,{className:"stl",weight:"bold",size:"small"},e.addedon),l.a.createElement(E.a,{color:"blue"}),l.a.createElement(E.a,{color:"blue"}))))};var S=function(e){var t=Object(n.useState)("all"),a=Object(o.a)(t,2),i=a[0],c=a[1],d=Object(n.useState)(!1),h=Object(o.a)(d,2),p=h[0],v=h[1],k=Object(n.useState)(""),E=Object(o.a)(k,2),S=E[0],x=E[1],y=Object(n.useState)(f),O=Object(o.a)(y,2),N=O[0],z=O[1];Object(n.useEffect)((function(){var e=f.filter((function(e){return e.tittle.includes(S)}));console.log(e),z(e)}),[S]);var C=Object(n.useState)(5),V=Object(o.a)(C,2),F=V[0],M=V[1],B=Object(n.useState)(1),I=Object(o.a)(B,2),J=I[0],T=I[1],W=Object(n.useState)(5),A=Object(o.a)(W,2),P=A[0],U=A[1],$=J*P,q=$-P;return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{fill:!0,direction:"column",background:"white",elevation:"medium",gap:"medium",height:"auto",round:"small",pad:"small"},l.a.createElement(r.a,{width:"xxlarge",direction:"row",justify:"between"},l.a.createElement(r.a,{direction:"row",gap:"small"},l.a.createElement(m.a,{className:"stl",size:"medium"},"Videos"),l.a.createElement(r.a,{background:"neutral-4",width:"30px",direction:"row",justify:"center",round:"full"},f.length)),l.a.createElement(r.a,{background:"neutral-4",width:"30px",direction:"row",justify:"center",round:"full"},"?")),l.a.createElement(r.a,{width:"xxlarge",direction:"row",justify:"end",gap:"small"},l.a.createElement(r.a,{width:"small",direction:"row",justify:"center",align:"center",elevation:"medium"},l.a.createElement(u.a,{plain:!0,placeholder:"Search by name",value:S,onChange:function(e){x(e.target.value)}}),l.a.createElement(w.a,null)),l.a.createElement(r.a,{width:"auto",direction:"row",justify:"center",align:"center",elevation:"medium"},l.a.createElement(g.a,{plain:!0,placeholder:l.a.createElement(m.a,{weight:"bold"},"Filetr by Category:"),options:["small","medium","large"],value:i,onChange:function(e){var t=e.option;return c(t)}}))),l.a.createElement(r.a,{width:"xxlarge",direction:"row",gap:"medium",justify:"between"},l.a.createElement(r.a,{width:{min:"auto",max:"150px"},direction:"row",justify:"start",align:"center",gap:"small"},l.a.createElement(s.a,{checked:p,onChange:function(e){return v(e.target.checked)}}),l.a.createElement(m.a,{className:"stl",size:"small",weight:"bold"},"Videos"))),N.slice(q,$).map((function(e,t){return l.a.createElement(j,{tittle:e.tittle,addedon:e.addedon,checked:p})})),l.a.createElement(r.a,{width:"xxlarge",justify:"center",direction:"row",align:"center"},l.a.createElement(r.a,{width:"100px"},l.a.createElement(g.a,{size:"medium",options:[5,10,20,30,40,50],value:F,onChange:function(e){var t=e.option;M(t),U(t)}}))),l.a.createElement(b,{videoperpage:P,totalvideos:f.length,paginate:function(e){return T(e)}})))};var x=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2);return t[0],t[1],l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{fill:!0,align:"center",width:{min:"auto"},overflow:{horizontal:"auto",vertical:"auto"},direction:"column",pad:"small",gap:"small"},l.a.createElement(r.a,{align:"center",height:{min:"auto"},width:"xxlarge",round:"small",direction:"row",pad:{left:"xlarge",top:"small",bottom:"small"},background:"white",elevation:"medium",gap:"large"},l.a.createElement(d.a,null,l.a.createElement(m.a,{size:"16px",className:"txt"},"Video Manager")),l.a.createElement(d.a,null,l.a.createElement(m.a,{size:"16px",className:"txt"},"Upload a Video"))),l.a.createElement(r.a,{width:"xxlarge",height:{min:"auto"}},l.a.createElement(S,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=a(85);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y.a,{full:!0,theme:{tabs:{header:{background:"light-4"}}}},l.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.94a27206.chunk.js.map