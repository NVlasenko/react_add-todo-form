(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var i=a(3),n=a.n(i),s=a(1),r=(a(9),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),l=a(4),c=a.n(l),d=a(0);const o=e=>{let{user:t}=e;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},m=e=>{let{todo:t}=e;return Object(d.jsx)("div",{children:Object(d.jsxs)("article",{"data-id":t.id,className:"TodoInfo ".concat(c()({"TodoInfo--completed":t.completed})),children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:t.title}),t.user&&Object(d.jsx)(o,{user:t.user})]},t.id)})},u=e=>{let{todos:t}=e;return Object(d.jsx)("section",{className:"TodoList",children:t.map((e=>Object(d.jsx)(m,{todo:e},e.id)))})};function j(e){return r.find((t=>t.id===e))||null}const h=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((e=>({...e,user:j(e.userId)}))),b=()=>{const[e,t]=Object(s.useState)(""),[a,i]=Object(s.useState)(!1),[n,l]=Object(s.useState)(0),[c,o]=Object(s.useState)(!1),[m,b]=Object(s.useState)(h);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:a=>{var s;(a.preventDefault(),e.trim())?0!==n?(i(!e),o(!n),e&&n&&(t(""),l(0)),e&&n&&(s={id:Math.max(...m.map((e=>e.id)))+1,title:e,completed:!1,userId:n,user:j(n)},b((e=>[...e,s])))):o(!0):i(!0)},children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{htmlFor:"title",children:"Title: \xa0\xa0"}),Object(d.jsx)("input",{id:"title",type:"text",placeholder:"Enter a title","data-cy":"titleInput",value:e,onChange:e=>{t(e.target.value),i(!1)}}),Object(d.jsx)("div",{children:a&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{htmlFor:"user",children:"User: \xa0"}),Object(d.jsxs)("select",{id:"user","data-cy":"userSelect",value:n,onChange:e=>{l(+e.target.value),o(!1)},children:[Object(d.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),r.map((e=>Object(d.jsx)("option",{value:e.id,children:e.name},e.id)))]}),Object(d.jsx)("div",{children:c&&Object(d.jsx)("span",{className:"error",children:"Please choose a user"})})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(d.jsx)(u,{todos:m})]})};n.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.89085d26.chunk.js.map