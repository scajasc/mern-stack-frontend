(this["webpackJsonpmern-stack-frontend"]=this["webpackJsonpmern-stack-frontend"]||[]).push([[0],{177:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(2),r=a.n(c),s=a(33),o=a.n(s),i=(a(88),a(89),a(90),a(91),a(93),a(21)),l=a(8),u=a(38),j=a(36),d=a(5),p=a.n(d),b=a(12),m=a(10),h=a(13),O=a.n(h),f=a(79),x=a.n(f);a(112);var v=function(e){var t=Object(c.useState)([]),a=Object(m.a)(t,2),r=a[0],s=a[1],o=Object(c.useState)(new Date),i=Object(m.a)(o,2),d=i[0],h=i[1],f=Object(c.useState)([{title:"",content:"",author:"",date:d}]),v=Object(m.a)(f,2),N=v[0],g=v[1],k=Object(c.useState)(""),y=Object(m.a)(k,2),w=y[0],S=y[1],C=Object(l.e)(),U=Object(c.useState)("https://mern-app-scajas.herokuapp.com/api/notas"),D=Object(m.a)(U,2),E=D[0],I=(D[1],Object(c.useState)("https://mern-app-scajas.herokuapp.com/api/notas/")),_=Object(m.a)(I,2),F=_[0],M=(_[1],Object(c.useState)("https://mern-app-scajas.herokuapp.com/api/users")),T=Object(m.a)(M,2),A=T[0];T[1],Object(c.useEffect)((function(){B(),q(),G(),console.log(e.match.params.id)}),[]);var B=function(){var e=Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get(A);case 2:t=e.sent,s(t.data.map((function(e){return e.username})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var t=Object(b.a)(p.a.mark((function t(){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e.match.params.id){t.next=6;break}return t.next=3,O.a.get(F+e.match.params.id);case 3:a=t.sent,g(a.data),console.log(N);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),J=function(){var t=Object(b.a)(p.a.mark((function t(){var a,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e.match.params.id){t.next=7;break}return t.next=3,O.a.put(F+e.match.params.id,N);case 3:a=t.sent,console.log(a),t.next=11;break;case 7:return t.next=9,O.a.post(E,N);case 9:n=t.sent,console.log(n);case 11:C.push("/mern-stack-frontend");case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();onsubmit=function(e){e.preventDefault(),J(),console.log(N)};var L=function(e){g(Object(j.a)(Object(j.a)({},N),{},Object(u.a)({},e.target.name,e.target.value)))},P=function(){var e=Object(b.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(t),e.next=3,g(Object(j.a)(Object(j.a)({},N),{},{date:t}));case 3:console.log(N.date);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){null!=e.match.params.id?(console.log("Este es el modificar"),S("Modificar")):(console.log("Este es el registrar"),S("Crear"))};return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"col-md-6 offset-md-3 mt-3",children:Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"card-header bg-dark text-white text-center",children:Object(n.jsxs)("h4",{children:[w," Nota"]})}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsxs)("form",{children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsxs)("select",{name:"author",id:"selectUser",onChange:L,className:"form-control",children:[Object(n.jsx)("option",{value:"",children:"Seleccione un usuario"}),r.map((function(e){return Object(n.jsx)("option",{value:e,children:e},e)}))]})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{className:"form-control",type:"text",name:"title",id:"titulo",value:N.title,onChange:L,placeholder:"Ingrese el Titulo"})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("textarea",{className:"form-control",type:"text",name:"content",id:"content",value:N.content,onChange:L,placeholder:"Ingrese el contenido"})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)(x.a,{className:"form-control",name:"date",selected:d,onChange:P})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Guardar"})})]})})]})})})},N=a(43),g=a(44),k=a(47),y=a(46),w=function(e){Object(k.a)(a,e);var t=Object(y.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(i.b,{className:"navbar-brand",to:"/mern-stack-frontend",children:"Aplicaci\xf3n de Notas"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(n.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(n.jsx)("li",{className:"nav-item active",children:Object(n.jsxs)(i.b,{className:"nav-link",to:"/",children:["Notas ",Object(n.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(i.b,{className:"nav-link",to:"create",children:"Crear Notas"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(i.b,{className:"nav-link",to:"user",children:"Crear Usuario"})})]})})]})})})}}]),a}(c.Component),S=a(82);var C=function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)("https://mern-app-scajas.herokuapp.com/api/notas"),o=Object(m.a)(s,2),l=o[0],u=(o[1],Object(c.useState)("https://mern-app-scajas.herokuapp.com/api/notas/")),j=Object(m.a)(u,2),d=j[0];j[1],Object(c.useEffect)((function(){h()}),[]);var h=function(){var e=Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get(l);case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(b.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.delete(d+t);case 2:a=e.sent,console.log(a),h();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:a.map((function(e){return Object(n.jsx)("div",{className:"col-md-4 p-3",children:Object(n.jsxs)("div",{className:"card",children:[Object(n.jsxs)("div",{className:"card-header bg-dark text-white d-flex justify-content-between",children:[Object(n.jsx)("h4",{children:e.title}),Object(n.jsx)(i.b,{className:"btn btn-secondary",to:"/edit/"+e._id,children:"Editar"})]}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("p",{children:e.content}),Object(n.jsx)("p",{children:Object(n.jsx)("strong",{children:e.author})}),Object(n.jsx)("p",{children:Object(S.a)(e.date)})]}),Object(n.jsx)("div",{className:"card-footer text-center",children:Object(n.jsx)("button",{className:"btn btn-danger",onClick:function(){return f(e._id)},children:"Eliminar"})})]},e._id)})}))})})};var U=function(e){var t=Object(c.useState)(""),a=Object(m.a)(t,2),r=a[0],s=a[1],o=Object(c.useState)("https://mern-app-scajas.herokuapp.com/api/users"),i=Object(m.a)(o,2),l=i[0],u=(i[1],function(){var t=Object(b.a)(p.a.mark((function t(a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,O.a.post(l,{username:r});case 3:s(""),e.reload();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"card-header text-center",children:Object(n.jsx)("h4",{children:"Crear usuario"})}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsxs)("form",{onSubmit:u,children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{className:"form-control",type:"text",name:"name",id:"name",value:r,onChange:function(e){return s(e.target.value)},placeholder:"Ingrese el nombre de Usuario"})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Guardar"})})]})})]})},D=function(e){Object(k.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(N.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={users:[],urlNotas:"https://mern-app-scajas.herokuapp.com/api/notas",urlNota:"https://mern-app-scajas.herokuapp.com/api/notas/",urlUsers:"https://mern-app-scajas.herokuapp.com/api/users",urlUser:"https://mern-app-scajas.herokuapp.com/api/users/"},e.reload=function(){e.componentDidMount()},e.deleteUser=function(){var t=Object(b.a)(p.a.mark((function t(a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.delete(e.state.urlUser+a);case 2:e.reload();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get(this.state.urlUsers);case 2:t=e.sent,this.setState({users:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-5 mt-4",children:Object(n.jsx)(U,{reload:this.reload})}),Object(n.jsx)("div",{className:"col-md-7",children:Object(n.jsx)("ul",{className:"list-group mt-4",children:this.state.users.map((function(t){return Object(n.jsx)("li",{className:"list-group-item list-group-item-action",onDoubleClick:function(){return e.deleteUser(t._id)},children:t.username},t._id)}))})})]})})}}]),a}(c.Component);var E=function(){return Object(n.jsxs)(i.a,{children:[Object(n.jsx)(w,{}),Object(n.jsx)(l.a,{path:"/mern-stack-frontend",exact:!0,component:C}),Object(n.jsx)(l.a,{path:"/mern-stack-frontend/edit/:id",exact:!0,component:v}),Object(n.jsx)(l.a,{path:"/mern-stack-frontend/create",exact:!0,component:v}),Object(n.jsx)(l.a,{path:"/mern-stack-frontend/user",exact:!0,component:D})]})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,183)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root")),I()},88:function(e,t,a){},89:function(e,t,a){}},[[177,1,2]]]);
//# sourceMappingURL=main.63aaf747.chunk.js.map