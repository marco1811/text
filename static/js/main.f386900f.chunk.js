(this["webpackJsonpfrontend-store-online"]=this["webpackJsonpfrontend-store-online"]||[]).push([[0],{30:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var i=c(1),r=c.n(i),n=c(16),s=c.n(n),a=(c(30),c(23)),o=c(2),l=c(17),d=c(8),h=c(9),j=c(15),u=c(12),b=c(11),m=c(0),O=function(e){Object(u.a)(c,e);var t=Object(b.a)(c);function c(){var e;return Object(d.a)(this,c),(e=t.call(this)).state={Nombre:"",Descripcion:"",Precio:"",Img:"",_id:"",articulos:[]},e.addArticulo=e.addArticulo.bind(Object(j.a)(e)),e.handleChange=e.handleChange.bind(Object(j.a)(e)),e}return Object(h.a)(c,[{key:"addArticulo",value:function(e){var t=this;this.state._id?fetch("http://localhost:3001/articulo/".concat(this.state._id),{method:"PUT",body:JSON.stringify({Nombre:this.state.Nombre,Descripcion:this.state.Descripcion,Precio:this.state.Precio,Img:this.state.Img}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){window.M.toast({html:"Articulo actualizado"}),t.setState({_id:"",Nombre:"",Descripcion:"",Precio:"",Img:""}),t.fetchArticulo()})):fetch("http://localhost:3001/articulo",{method:"POST",body:JSON.stringify(this.state),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),window.M.toast({html:"Articulo Agregado"}),t.setState({Nombre:"",Descripcion:"",Precio:"",Img:""}),t.fetchArticulo()})).catch((function(e){return console.error(e)})),e.preventDefault()}},{key:"componentDidMount",value:function(){this.fetchArticulo()}},{key:"fetchArticulo",value:function(){var e=this;fetch("http://localhost:3001/articulo").then((function(e){return e.json()})).then((function(t){e.setState({articulos:t.articulos}),console.log(e.state.articulos)}))}},{key:"handleChange",value:function(e){var t=e.target,c=t.name,i=t.value;this.setState(Object(l.a)({},c,i))}},{key:"deleteArticulo",value:function(e){var t=this;console.log("Eliminado",e),window.confirm("Seguro que quieres eliminar?")&&fetch("http://localhost:3001/articulo/".concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),window.M.toast({html:"Articulo Eliminado"}),t.fetchArticulo()}))}},{key:"editArticulo",value:function(e){var t=this;fetch("http://localhost:3001/articulo/".concat(e)).then((function(e){return e.json()})).then((function(e){console.log(e.articulos),t.setState({Nombre:e.articulos.Nombre,Descripcion:e.articulos.Descripcion,Precio:e.articulos.Precio,Img:e.articulos.Img,_id:e.articulos._id}),console.log(t.state)}))}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)("nav",{className:"light-blue darken-4",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"nav-wrapper",children:Object(m.jsx)("a",{href:"#",className:"brand-logo",children:"Gestion de Articulos"})})})}),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col s5",children:Object(m.jsx)("div",{className:"card",children:Object(m.jsxs)("form",{onSubmit:this.addArticulo,children:[Object(m.jsx)("div",{className:"input-field col s12",children:Object(m.jsx)("input",{type:"text",id:"nombre",name:"Nombre",onChange:this.handleChange,placeholder:"Igresa el nombre del articulo",value:this.state.Nombre})}),Object(m.jsx)("div",{className:"input-field col s12",children:Object(m.jsx)("textarea",{type:"text",id:"desc",name:"Descripcion",onChange:this.handleChange,placeholder:"escribe una descrpcion ",value:this.state.Descripcion})}),Object(m.jsx)("div",{className:"input-field col s12",children:Object(m.jsx)("input",{type:"number",id:"precio",name:"Precio",onChange:this.handleChange,placeholder:"Ingresa el precio del articulo",value:this.state.Precio})}),Object(m.jsx)("div",{className:"input-field col s12",children:Object(m.jsx)("input",{type:"text",id:"img",name:"Img",onChange:this.handleChange,placeholder:"Ingresa imagen del articulo",value:this.state.Img})}),Object(m.jsx)("button",{type:"submit",id:"btnAdd",className:"btn light-blue darken-4",children:"Agregar Articulo"})]})})}),Object(m.jsx)("div",{className:"col s7",children:Object(m.jsxs)("table",{children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Nombre"}),Object(m.jsx)("th",{children:"Descripcion"}),Object(m.jsx)("th",{children:"Precio"}),Object(m.jsx)("th",{children:"Imagen"})]})}),Object(m.jsx)("tbody",{children:this.state.articulos.map((function(t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:t.Nombre}),Object(m.jsx)("td",{children:t.Descripcion}),Object(m.jsx)("td",{children:t.Precio}),Object(m.jsx)("td",{children:Object(m.jsx)("img",{src:t.Img,width:"60",height:"60"})}),Object(m.jsxs)("td",{children:[Object(m.jsx)("button",{onClick:function(){return e.deleteArticulo(t._id)},className:"btn light-blue darken-4",children:Object(m.jsx)("i",{className:"material-icons",children:"delete"})}),Object(m.jsx)("button",{onClick:function(){return e.editArticulo(t._id)},className:"btn light-blue darken-4",children:Object(m.jsx)("i",{className:"material-icons",children:"edit"})})]})]},t._id)}))})]})})]})})]})}}]),c}(r.a.Component),p=c(20),x=0,f=window.paypal.Buttons.driver("react",{React:r.a,ReactDOM:s.a}),v=function(e){Object(u.a)(c,e);var t=Object(b.a)(c);function c(e){var i;return Object(d.a)(this,c),(i=t.call(this,e)).state={Nombre:"",Descripcion:"",Precio:"",Img:"",_id:"",total:"",carrito:[]},i}return Object(h.a)(c,[{key:"createOrder",value:function(e,t){return t.order.create({purchase_units:[{amount:{value:x}}]})}},{key:"onApprove",value:function(e,t){return t.order.capture()}},{key:"prueba",value:function(){var e=window.localStorage.getItem("carrito",JSON.stringify(e)),t=JSON.parse(e);this.setState(Object(p.a)(Object(p.a)({},this.state),{},{carrito:t}));for(var c=0,i=0;i<t.length;i++)c+=t[i].Precio,x=c;console.log(c)}},{key:"componentDidMount",value:function(){this.prueba()}},{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{children:[this.state.carrito.map((function(e){return Object(m.jsxs)("div",{className:"card text-center",style:{width:400},children:[Object(m.jsx)("img",{className:"card-img-top",src:e.Img}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h5",{className:"card-title",children:e.Nombre}),Object(m.jsx)("p",{class:"card-text",children:e.Descripcion}),Object(m.jsxs)("p",{class:"card-text",children:["$",e.Precio]})]})]})})),Object(m.jsxs)("h2",{children:["El total de la Compra es $ ",x]}),Object(m.jsx)(f,{createOrder:function(t,c){return e.createOrder(t,c)},onApprove:function(t,c){return e.onApprove(t,c)}}),");"]})})}}]),c}(r.a.Component),g=[],N=function(e){Object(u.a)(c,e);var t=Object(b.a)(c);function c(){var e;return Object(d.a)(this,c),(e=t.call(this)).stateCar={carrito:[]},e.state={Nombre:"",Descripcion:"",Precio:"",Img:"",_id:"",articulos:[]},e}return Object(h.a)(c,[{key:"componentDidMount",value:function(){this.fetchArticulo()}},{key:"fetchArticulo",value:function(){var e=this;fetch("http://localhost:3001/articulo").then((function(e){return e.json()})).then((function(t){e.setState({articulos:t.articulos}),console.log(e.state.articulos)}))}},{key:"addcart",value:function(e){var t=this.state.articulos.filter((function(t){return t._id===e}));g.push(t[0]),localStorage.setItem("carrito",JSON.stringify(g));var c=localStorage.getItem("carrito");console.log(c)}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)("nav",{className:"light-blue darken-4",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"nav-wrapper",children:Object(m.jsx)("a",{href:"#",className:"brand-logo",children:"Consulta de articulos"})})})}),Object(m.jsx)("div",{children:this.state.articulos.map((function(t){return Object(m.jsxs)("div",{className:"card text-center",style:{width:400},children:[Object(m.jsx)("img",{className:"card-img-top",src:t.Img}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h5",{className:"card-title",children:t.Nombre}),Object(m.jsx)("p",{class:"card-text",children:t.Descripcion}),Object(m.jsxs)("p",{class:"card-text",children:["$",t.Precio]}),Object(m.jsxs)("p",{children:["key=",t._id," "]}),Object(m.jsx)("button",{onClick:function(){return e.addcart(t._id)},className:"btn btn-primary",children:"Comprar"})]})]})}))}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:g.map((function(t){return Object(m.jsxs)("div",{className:"card text-center",style:{width:400},children:[Object(m.jsx)("img",{className:"card-img-top",src:t.Img}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h5",{className:"card-title",children:t.Nombre}),Object(m.jsx)("p",{class:"card-text",children:t.Descripcion}),Object(m.jsxs)("p",{class:"card-text",children:["$",t.Precio]}),Object(m.jsxs)("p",{children:["key=",t._id," "]}),Object(m.jsx)("button",{onClick:function(){return e.addcart(t._id)},className:"btn btn-primary",children:"Comprar"})]})]})}))})})]})}}]),c}(r.a.Component),y=c(10),A=function(){var e=Object(y.b)().loginWithRedirect;return Object(m.jsx)("div",{children:Object(m.jsx)("button",{onClick:function(){return e()},children:"login"})})};var k=function(){var e=Object(y.b)().loginWithRedirect;return Object(m.jsxs)(a.a,{children:[Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("nav",{class:"light-blue darken-4",children:Object(m.jsxs)("div",{className:"nav-wrapper",children:[Object(m.jsx)("a",{href:"#",class:"brand-logo",children:Object(m.jsx)("img",{src:"https://preview.free3d.com/img/2017/02/2272884236681741608/te2hj2bq-900.jpg",width:"60",height:"60"})}),Object(m.jsxs)("ul",{id:"nav-mobile",class:"right hide-on-med-and-down",children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"http://localhost:3000/usuarios",children:"Administrar Usuarios"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"http://localhost:3000/articulos",children:"Administracion de Articulo"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"http://localhost:3000/marticulos",children:"Consulta de Articulos"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"http://localhost:3000/carrito",children:"Carrito"})})]})]})}),Object(m.jsx)("button",{onClick:function(){return e()},children:"login"})]}),Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{path:"/articulos",children:Object(m.jsx)(O,{})}),Object(m.jsx)(o.a,{path:"/marticulos",children:Object(m.jsx)(N,{})}),Object(m.jsx)(o.a,{path:"/usuarios",children:Object(m.jsx)(A,{})}),Object(m.jsx)(o.a,{path:"/carrito",children:Object(m.jsx)(v,{})})]})]})};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(y.a,{domain:"dev-3dcpo3to.us.auth0.com",clientId:"zan8Mtb6ISXg7OcflMG6FySogeu7mlue",redirectUri:window.location.origin,children:Object(m.jsx)(k,{})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.f386900f.chunk.js.map