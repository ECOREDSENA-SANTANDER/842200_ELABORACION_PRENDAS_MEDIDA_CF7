(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["creditos","chunk-863a1ee8"],{"13aa":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-fluid banner-interno"},[e("div",{staticClass:"banner-interno__fondo",style:{"background-image":`url(${t.globalData.fondoBannerPrincipal})`}}),e("div",{staticClass:"container"},[e("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?e("div",{staticClass:"banner-interno__titulo__icono me-3"},[e("i",{class:t.icono})]):t._e(),e("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.titulo)}})])])])},n=[],o={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:()=>({}),computed:{globalData(){return this.$config.global}}},r=o,a=(s("4cfe"),s("2877")),c=Object(a["a"])(r,i,n,!1,null,null,null);e["default"]=c.exports},"2e81":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"curso-main-container creditos-vista"},[e("BannerInterno",{attrs:{icono:"far fa-registered",titulo:"Créditos"}}),e("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[e("div",{staticClass:"creditos mb-4 mb-md-5"},t._l(t.creditosData,(function(s,i){return e("div",{key:"credito-"+i,staticClass:"creditos__item",class:i!=t.creditosData.length-1?"mb-4":""},[e("div",{staticClass:"creditos__titulo"},[t._v(t._s(s.titulo))]),e("table",[e("tbody",t._l(s.autores,(function(s,i){return e("tr",{key:"autor-"+i},[e("td",{staticClass:"text-bold",attrs:{colspan:"2"},domProps:{innerHTML:t._s(t.renderText(s.nombre))}}),e("td",{attrs:{colspan:"2"},domProps:{innerHTML:t._s(t.renderText(s.cargo))}}),e("td",{attrs:{colspan:"3"},domProps:{innerHTML:t._s(t.renderText(s.centro))}})])})),0)])])})),0),e("div",{staticClass:"row mb-4 mb-md-5"},[e("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[e("div",{staticClass:"tarjeta credito p-3 text-center h-100"},[e("img",{staticClass:"d-inline-block",staticStyle:{width:"70px"},attrs:{src:s("ef52")}}),e("p",{domProps:{innerHTML:t._s(t.creditosAdicionales.imagenes)}})])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"tarjeta credito p-3 text-center h-100"},[e("img",{staticClass:"d-inline-block",staticStyle:{width:"70px"},attrs:{src:s("e1f5")}}),e("p",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.creditosAdicionales.creativeCommons)}})])])]),e("Footer",{attrs:{"all-round":""}})],1)],1)},n=[],o=s("13aa"),r=s("e9c6"),a={name:"Creditos",components:{BannerInterno:o["default"],Footer:r["a"]},data:()=>({configTitulos:{liderEquipo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",contenidoInstruccional:"CONTENIDO INSTRUCCIONAL",desarrolloProducto:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",gestoresRepositorio:"GESTORES DE REPOSITORIO"}}),computed:{creditosData(){return this.$config.creditos},creditosAdicionales(){return this.$config.creditosAdicionales}},methods:{renderText(t){let e="";return Array.isArray(t)?t.forEach((t,s)=>{e+=(s?"<br/>":"")+t}):e+=t,e}}},c=a,d=(s("d9e1"),s("2877")),l=Object(d["a"])(c,i,n,!1,null,null,null);e["default"]=l.exports},"4c48":function(t,e,s){},"4cfe":function(t,e,s){"use strict";s("4c48")},d9e1:function(t,e,s){"use strict";s("eec4")},e1f5:function(t,e,s){t.exports=s.p+"img/creditos-cc.4836eb56.svg"},eec4:function(t,e,s){},ef52:function(t,e,s){t.exports=s.p+"img/creditos-img.689712e2.svg"}}]);
//# sourceMappingURL=creditos.31aca081.js.map