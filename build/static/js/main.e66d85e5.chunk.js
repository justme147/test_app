(this.webpackJsonptest_app=this.webpackJsonptest_app||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/close_icon.17486a4d.svg"},12:function(e,t,a){e.exports=a.p+"static/media/delete_icon.9adcbde2.svg"},14:function(e,t,a){e.exports=a(22)},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a.n(l),c=a(3),i=a(2),s=a(5),u=a(6),m=a(13),d={flex:1,display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",padding:"20px",marginTop:"10px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fafafa",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out",cursor:"pointer"},p={borderColor:"#2dc0c5"},f={borderColor:"#00e676"},g={borderColor:"#ff1744"},b=function(e){var t=e.filesHandler,a=e.filesCount,l=Object(m.a)({accept:"image/*, application/json",onDrop:function(e){return t(e)}}),o=l.getRootProps,c=l.getInputProps,i=l.isDragActive,s=l.isDragAccept,b=l.isDragReject,v=Object(n.useMemo)((function(){return Object(u.a)(Object(u.a)(Object(u.a)(Object(u.a)({},d),i?p:{}),s?f:{}),b?g:{})}),[i,b,s]);return r.a.createElement("div",{className:"form-loading__inner"},r.a.createElement("p",null,"\u0418\u043b\u0438 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0430 \u0441\u0432\u043e\u0435\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435"),r.a.createElement("div",o({style:v}),r.a.createElement("input",c()),r.a.createElement("p",null,"\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043d\u0443\u0436\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u0438\u043b\u0438 \u043a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u0434\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u0430"),r.a.createElement("p",null,"\u0424\u0430\u0439\u043b\u043e\u0432 \u0432\u044b\u0431\u0440\u0430\u043d\u043e: ",a)))},v=function(e){var t,a=e.submitForm,l=Object(n.useState)(""),o=Object(i.a)(l,2),u=o[0],m=o[1],d=Object(n.useState)([]),p=Object(i.a)(d,2),f=p[0],g=p[1],v=Object(n.useState)(0),h=Object(i.a)(v,2),E=h[0],y=h[1];return r.a.createElement("form",{className:"form-loading"},r.a.createElement("div",{className:"form-loading__inner"},r.a.createElement("label",{htmlFor:"input-path"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0443\u0442\u044c \u0434\u043e \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438"),r.a.createElement("input",(t={type:"text",id:"input-path",className:"form-loading__input",value:u,onChange:function(e){return m(e.target.value)}},Object(s.a)(t,"className","form-loading__input"),Object(s.a)(t,"placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 URL \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438"),t))),r.a.createElement(b,{filesHandler:function(e){var t=[];y(e.length);for(var a=function(a){var n=new FileReader;/image.*/.test(e[a].type)?n.readAsDataURL(e[a]):/application.json/.test(e[a].type)&&n.readAsText(e[a]),n.onload=function(){var r=n.result;if(/image.*/.test(e[a].type)){var l={url:r,width:"auto",height:"auto"};t.push(l)}else if(/application.json/.test(e[a].type)){var o=[];Object.values(JSON.parse(r)).map((function(e){return o.push.apply(o,Object(c.a)(e))})),console.log(o),t.push.apply(t,o)}}},n=0;n<e.length;n++)a(n);g(t)},filesCount:E}),r.a.createElement("button",{onClick:function(e){return function(e){if(""!==u)return a([{url:u,width:"auto",height:"auto"}].concat(Object(c.a)(f)),e),g([]),m(""),void y(0);a(f,e),g([]),y(0)}(e)},className:"form-loading__btn"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"))},h=function(e){var t=e.photo,a=e.itemClick,n=e.itemDelete;return r.a.createElement("div",{className:"gallary__item",onClick:function(){return a(t.url)}},r.a.createElement("img",{src:t.url,alt:t.url,className:"gallary__image",onError:function(){n(t.url)}}),r.a.createElement("span",{className:"gallary__descr"},"Description"))},E=function(e){var t=e.photos,a=e.itemClick,n=e.deleteItem;return t.length?r.a.createElement("section",{className:"gallary"},t.map((function(e,t){return r.a.createElement(h,{photo:e,key:e.url+t,itemClick:a,itemDelete:n})}))):r.a.createElement("p",{className:"gallary__empty"},"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442.")},y=a(11),_=a.n(y),j=a(12),O=a.n(j),w=function(e){var t=e.closeItem,a=e.deleteItem,l=e.url;return Object(n.useEffect)((function(){var e=function(e){"Escape"===e.key&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[]),r.a.createElement("div",{className:"gallary__full"},r.a.createElement("div",{className:"gallary__inner"},r.a.createElement("img",{src:O.a,alt:"close_icon",className:"gallary__delete",onClick:function(){return a(l)},title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),r.a.createElement("img",{src:_.a,alt:"close_icon",className:"gallary__close",onClick:function(){return t()},title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})),r.a.createElement("img",{src:l,alt:l,className:"gallary__image--width"}))};var N=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)({url:"",isFull:!1}),s=Object(i.a)(o,2),u=s[0],m=s[1];function d(e){var t=a.filter((function(t){return t.url!==e}));document.body.removeAttribute("style"),l(t),m({url:"",isFull:!1})}return r.a.createElement("div",{className:"container"},r.a.createElement(v,{submitForm:function(e,t){t.preventDefault(),e.length&&l([].concat(Object(c.a)(e),Object(c.a)(a)))}}),r.a.createElement(E,{photos:a,itemClick:function(e){document.body.style.overflow="hidden",m({url:e,isFull:!0})},deleteItem:d}),u.isFull&&r.a.createElement(w,{closeItem:function(){document.body.removeAttribute("style"),m({url:"",isFull:!1})},deleteItem:d,url:u.url}))};a(21),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.e66d85e5.chunk.js.map