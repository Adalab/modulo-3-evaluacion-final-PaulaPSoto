(this["webpackJsonpmodulo-3-leccion-02-organizar-ficheros-y-carpetas"]=this["webpackJsonpmodulo-3-leccion-02-organizar-ficheros-y-carpetas"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(16),s=c.n(a),r=c(7),i=c(10),o=c.p+"static/media/logo.de13d484.png",l=c(0);var j=function(){return Object(l.jsx)("header",{children:Object(l.jsx)("div",{className:"bigheader",children:Object(l.jsx)("img",{className:"logo",src:o,alt:"logo",title:"logo de la serie"})})})},d=c(2),m=function(e){return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(l.jsx)("label",{className:"form",htmlFor:"name",children:"Filtrar por nombre:"}),Object(l.jsx)("input",{className:"input",value:e.filterByName,type:"text",name:"name",id:"name",onChange:function(t){e.handleFilter({key:"name",value:t.target.value})}})]})},u=function(e){return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(l.jsx)("label",{className:"form",htmlFor:"species",children:"Filtrar por especie:"}),Object(l.jsx)("input",{className:"input",type:"text",name:"species",id:"species",onChange:function(t){e.handleFilter({key:"species",value:t.target.value})}})]})},b=function(e){return Object(l.jsxs)("section",{className:"sectionLook",children:[Object(l.jsx)(m,{handleFilter:e.handleFilter,filterByName:e.filterByName}),Object(l.jsx)(u,{handleFilter:e.handleFilter})]})},h=function(e){var t=e.cartoon.status;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{className:"photo",src:e.cartoon.image,alt:"Foto de ".concat(e.cartoon.name),title:"Foto de ".concat(e.cartoon.name)}),Object(l.jsxs)("article",{children:[Object(l.jsx)("h4",{className:"name",children:e.cartoon.name}),Object(l.jsx)("p",{className:"species",children:e.cartoon.species}),"Dead"===t?Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("p",{className:"species",children:[e.cartoon.status," ",Object(l.jsx)("i",{className:"fas fa-skull myicon"})]})}):Object(l.jsx)("p",{className:"species",children:e.cartoon.status})]})]})},p=function(e){var t=e.cartoons.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{className:"link",to:"/cartoon/".concat(e.id),children:Object(l.jsx)(h,{cartoon:e})})},e.id)}));return""!==e.filterByName&&0===e.cartoons.length?Object(l.jsx)("section",{children:Object(l.jsxs)("p",{className:"textnot",children:["No hay ning\xfan personaje que coincida con la palabra"," ",e.filterByName]})}):Object(l.jsx)("section",{children:Object(l.jsx)("ul",{className:"list",children:t})})},O=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"return",children:Object(l.jsxs)(r.b,{className:"link",to:"/",children:[" ","<"," Volver"," "]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("article",{className:"cardDetail",children:[Object(l.jsx)("img",{className:"cartoonImg",src:e.cartoon.image,alt:"Foto de ".concat(e.cartoon.name),title:"Foto de ".concat(e.cartoon.name)}),Object(l.jsxs)("div",{className:"cartoonDetailText",children:[Object(l.jsx)("h4",{children:e.cartoon.name}),Object(l.jsxs)("p",{className:"nameD",children:["Status: ",e.cartoon.status]}),Object(l.jsxs)("p",{className:"nameD",children:["Origin: ",e.cartoon.origin]}),Object(l.jsxs)("p",{className:"nameD",children:["Episodes: ",e.cartoon.episode]})]}),Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)("span",{})})]})})]})},x=function(){return fetch("//rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,species:e.species,image:e.image,origin:e.origin.name,episode:e.episode.length,status:e.status}}))}))},f=(c(28),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),o=r[0],m=r[1],u=Object(n.useState)(""),h=Object(i.a)(u,2),f=h[0],N=h[1];Object(n.useEffect)((function(){x().then((function(e){return a(e)}))}),[]);var g=c.filter((function(e){return e.name.toUpperCase().includes(o.toUpperCase())})).filter((function(e){return e.species.toUpperCase().includes(f.toUpperCase())}));return Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{}),Object(l.jsxs)(d.c,{children:[Object(l.jsxs)(d.a,{path:"/",exact:!0,children:[Object(l.jsx)(b,{handleFilter:function(e){"name"===e.key?m(e.value):"species"===e.key&&N(e.value)},filterByName:o}),Object(l.jsx)(p,{cartoons:g,filterByName:o})]}),Object(l.jsx)(d.a,{path:"/cartoon/:id",render:function(e){var t=parseInt(e.match.params.id),n=c.find((function(e){return e.id===t}));if(n)return Object(l.jsx)(O,{cartoon:n})}})]})]})});s.a.render(Object(l.jsx)(r.a,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.84bc2429.chunk.js.map