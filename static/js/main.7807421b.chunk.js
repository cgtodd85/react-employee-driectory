(this["webpackJsonpreact-employee-driectory"]=this["webpackJsonpreact-employee-driectory"]||[]).push([[0],{44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(14),a=n.n(c),i=n(15),o=n(16),l=n(20),m=n(19),u=n(17),j=n.n(u),d={randomEmployees:function(){return j.a.get("https://randomuser.me/api/?results=8")}},p=n(5),f=(n(44),n(0));var h=function(e){return Object(f.jsxs)("div",{className:"card",children:[Object(f.jsx)("div",{className:"img-container",children:Object(f.jsx)("img",{alt:e.name,src:e.picture})}),Object(f.jsx)("div",{className:"content",children:Object(f.jsxs)("ul",{children:[Object(f.jsxs)("li",{children:[Object(f.jsx)("strong",{children:"Name:"})," ",e.name]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("strong",{children:"Age:"})," ",e.age]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("strong",{children:"Email:"})," ",e.email]})]})})]})};n(46);var b=function(e){return Object(f.jsx)("div",{className:"wrapper",children:e.children})};n(47);var y=function(e){return Object(f.jsx)("h1",{className:"title",children:e.children})},O=(n(48),function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={employees:[],filteredEmployees:[],sortedEmployees:[]},e.filterByMale=function(){var t=e.state.employees.filter((function(e){return"male"===e.gender}));e.setState({employees:t})},e.sortByName=function(){var t=e.state.employees.sort((function(e,t){return e.name.first.toLowerCase()<t.name.first.toLowerCase()?-1:e.name.first.toLowerCase()>t.name.first.toLowerCase()?1:0}));e.setState({employees:t})},e.mapEmployees=function(){e.state.employees.map((function(e){return Object(f.jsx)(h,{name:e.name.first,picture:e.picture.medium,age:e.dob.age,email:e.email})}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;d.randomEmployees().then((function(t){console.log(t.data.results),e.setState({employees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsxs)(y,{children:["Employee List, Cool!",Object(f.jsx)("i",{class:"fas fa-users"})]}),Object(f.jsxs)("header",{children:["   "," Sort options: ","   ",Object(f.jsx)(p.a,{onClick:this.sortByName,children:"Sort by name"})," ",Object(f.jsx)(p.a,{onClick:this.filterByMale,children:"Men Only"})]}),Object(f.jsx)(b,{children:this.state.employees.map((function(e){return Object(f.jsx)(h,{name:e.name.first,picture:e.picture.medium,age:e.dob.age,email:e.email})}))})]})}}]),n}(s.a.Component));var x=function(){return Object(f.jsx)(O,{})};n(49);a.a.render(Object(f.jsx)(x,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.7807421b.chunk.js.map