(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["referencias","chunk-863a1ee8"],{"13aa":function(n,t,e){"use strict";e.r(t);var a=function(){var n=this,t=n._self._c;return t("div",{staticClass:"container-fluid banner-interno"},[t("div",{staticClass:"banner-interno__fondo",style:{"background-image":`url(${n.globalData.fondoBannerPrincipal})`}}),t("div",{staticClass:"container"},[t("div",{staticClass:"banner-interno__titulo py-5"},[n.icono.length?t("div",{staticClass:"banner-interno__titulo__icono me-3"},[t("i",{class:n.icono})]):n._e(),t("h2",{staticClass:"mb-0",domProps:{innerHTML:n._s(n.titulo)}})])])])},i=[],s={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:()=>({}),computed:{globalData(){return this.$config.global}}},r=s,o=(e("4cfe"),e("2877")),c=Object(o["a"])(r,a,i,!1,null,null,null);t["default"]=c.exports},"4c48":function(n,t,e){},"4cfe":function(n,t,e){"use strict";e("4c48")},"64ef":function(n,t,e){"use strict";e.r(t);var a=function(){var n=this,t=n._self._c;return t("div",{staticClass:"curso-main-container referencias"},[t("BannerInterno",{attrs:{icono:"fas fa-book",titulo:"Referencias bibliográficas"}}),t("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},n._l(n.orderedData,(function(e){return t("div",{key:e.link,staticClass:"referencias__item"},[t("span",{domProps:{innerHTML:n._s(e.referencia)}}),e.link?t("a",{staticClass:"ms-1",attrs:{href:e.link,target:"_blank"}},[t("span",{domProps:{innerHTML:n._s(e.link)}}),t("i",{staticClass:"ms-1 fas fa-external-link-alt"})]):n._e(),t("hr",{staticClass:"my-3"})])})),0)],1)},i=[],s=e("13aa"),r=e("ecc5"),o={name:"Referencias",components:{BannerInterno:s["default"]},mixins:[r["a"]],computed:{referenciasData(){return this.$config.referencias},orderedData(){const n=[...this.referenciasData].sort((n,t)=>{const e=this.quitarAcentos(n.referencia.split(" ")[0].toLowerCase()),a=this.quitarAcentos(t.referencia.split(" ")[0].toLowerCase());return e<a?-1:e>a?1:0});return n}}},c=o,l=(e("dfd8"),e("2877")),f=Object(l["a"])(c,a,i,!1,null,null,null);t["default"]=f.exports},dfd8:function(n,t,e){"use strict";e("fb4f")},fb4f:function(n,t,e){}}]);
//# sourceMappingURL=referencias.7abbaede.js.map