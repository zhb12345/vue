(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Home-Column-Follow"],{"00c8":function(t,n,e){"use strict";e.r(n);var o,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"Follow"},t._l(t.$store.state.follow.list,function(t,n){return e("Cell",{key:t._id,attrs:{data:t,index:n,apiName:"follow"}})}),1)},c=[],l=e("bd86"),u=e("f032"),i=e("2f62"),s=(e("6e87"),o={name:"Follow",props:{},data:function(){return{list:[]}},components:{Cell:u["a"]},updated:function(){},activated:function(){}},Object(l["a"])(o,"activated",function(){}),Object(l["a"])(o,"mounted",function(){this[this.$types.FOLLOW]()}),Object(l["a"])(o,"methods",Object(i["b"])("follow",["FOLLOW"])),o),d=s,r=(e("7d8f"),e("2877")),f=Object(r["a"])(d,a,c,!1,null,null,null);n["default"]=f.exports},"125d":function(t,n,e){},"19bc":function(t,n,e){},5879:function(t,n,e){"use strict";var o=e("125d"),a=e.n(o);a.a},"7d8f":function(t,n,e){"use strict";var o=e("19bc"),a=e.n(o);a.a},aa00:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"Column"},t._l(t.$store.state.column.list,function(n){return e("Cell",{key:n._id,attrs:{data:n,"api-name":"column",isAdd:!0},on:{"add-item":function(e){return t.addItem(n)}}})}),1)},a=[],c=e("f032"),l=e("2f62"),u={name:"Column",props:{},data:function(){return{column:[]}},components:{Cell:c["a"]},activated:function(){},mounted:function(){this.$store.dispatch("column/"+this.$types.COLUMN)},updated:function(){},methods:Object(l["b"])("buycar",["addItem"])},i=u,s=(e("5879"),e("2877")),d=Object(s["a"])(i,o,a,!1,null,null,null);n["default"]=d.exports}}]);
//# sourceMappingURL=Home-Column-Follow.d7a23cce.js.map