(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(t,e,n){t.exports=n(55)},52:function(t,e,n){},55:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(21),c=n.n(r),l=n(14),i=n(6),d=n(7),s=n(9),u=n(8),p=n(10),m=n(58),h=n(57),f=n(56);function b(){return a.a.createElement("header",{style:y},a.a.createElement("h1",null,"TodoList"),a.a.createElement(f.a,{style:g,to:"/"},"Home")," | ",a.a.createElement(f.a,{style:g,to:"/about"},"About"))}var y={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},g={color:"#fff",textDecoration:"none"},v=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getCompStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:n.props.todo.completed?"line-through":"none"}},n.getBtnStyle=function(){return{background:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"}},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return a.a.createElement("div",{style:this.getCompStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," "," ",n,a.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:this.getBtnStyle()},"x")))}}]),e}(o.Component),j=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map(function(e){return a.a.createElement(v,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})})}}]),e}(o.Component),E=n(22),O=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},n.onSubmit=function(t){t.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n.onChange=function(t){return n.setState(Object(E.a)({},t.target.name,t.target.value))},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),e}(o.Component);function k(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"Lorem ipsum."))}var x=n(12),C=n.n(x),w=(n(52),function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},n.markComplete=function(t){n.setState({todos:n.state.todos.map(function(e){return e.id===t&&(e.completed=!e.completed),e})})},n.delTodo=function(t){C.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then(function(e){return n.setState({todos:Object(l.a)(n.state.todos.filter(function(e){return e.id!==t}))})})},n.addTodo=function(t){C.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then(function(t){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t.data])})})},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){var t=this;C.a.get("https://jsonplaceholder.typicode.com/todos?_limit=7").then(function(e){return t.setState({todos:e.data})})}},{key:"render",value:function(){var t=this;return a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(b,null),a.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(O,{addTodo:t.addTodo}),a.a.createElement(j,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),a.a.createElement(h.a,{path:"/about",component:k}))))}}]),e}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.e96da095.chunk.js.map