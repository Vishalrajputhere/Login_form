(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(39)},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n,s,l=a(0),i=a.n(l),r=a(26),o=a.n(r),c=a(17),m=a(6),u=a(7),h=a(13),d=a(9),p=a(10),g=a(20),b=a(19),w=b.a.h1(n||(n=Object(c.a)(["\n    font-size:4rem;\n    color:white;\n    text-align:center;\n    \n    "]))),v=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),console.log("Submitted Username:",n.state.username),console.log("Submitted Password:",n.state.password),n.setState({password:"",username:""})},n.handleUsernameChange=function(e){n.setState({username:e.target.value})},n.handlePasswordChange=function(e){n.setState({password:e.target.value})},n.state={username:"",password:"",passvisibility:!1},n.handleview=n.handleview.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"handleview",value:function(){this.setState(function(e){return{passvisibility:!e.passvisibility}})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(w,null,"Login Page"),i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.handleSubmit,className:"mdiv"},i.a.createElement("input",{type:"text",value:this.state.username,onChange:this.handleUsernameChange,placeholder:"Username"}),i.a.createElement("input",{type:this.state.passvisibility?"text":"password",value:this.state.password,onChange:this.handlePasswordChange,placeholder:"Password"}),i.a.createElement("button",{className:"hbtn",type:"button",onClick:this.handleview},this.state.passvisibility?i.a.createElement("img",{className:"hideimg",src:"/Login_form/hide1.png",alt:"hide"}):i.a.createElement("img",{className:"hideimg",src:"/Login_form/view.png",alt:"Show"})),i.a.createElement("button",{type:"submit",className:"btn"},"LOGIN"),i.a.createElement(g.b,{to:"/signup",className:"l"},i.a.createElement("button",{type:"button",className:"btn2"},"SIGN UP")))))}}]),a}(l.Component),E=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleName=function(e){n.setState({name:e.target.value})},n.handleNewEmail=function(e){n.setState({email:e.target.value})},n.handleNewUser=function(e){n.setState({newUser:e.target.value})},n.handlePass=function(e){n.setState({newPass:e.target.value})},n.handleNum=function(e){n.setState({num:e.target.value})},n.handleSignup=function(e){e.preventDefault(),console.log("Name :",n.state.name),console.log("Email :",n.state.email),console.log("Contact Number :",n.state.num),console.log("Username :",n.state.newUser),console.log("Password :",n.state.newPass),n.setState({name:"",email:"",num:"",newUser:"",newPass:""})},n.state={name:"",email:"",newUser:"",newPass:"",num:"",showPass:!1},n.passbtn=n.passbtn.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"passbtn",value:function(){!1===this.state.showPass?this.setState({showPass:!0}):this.setState({showPass:!1})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("img",{id:"simg",src:"/Login_form/user.png",alt:"",height:"100px",width:"100px"}),i.a.createElement("form",{onSubmit:this.handleSignup,className:"sdiv"},i.a.createElement("input",{type:"text",onChange:this.handleName,value:this.state.name,placeholder:"Your Name"}),i.a.createElement("input",{type:"email",onChange:this.handleNewEmail,value:this.state.email,placeholder:"Email Address"}),i.a.createElement("input",{type:"tel",onChange:this.handleNum,value:this.state.num,placeholder:"Contact No."}),i.a.createElement("input",{type:"text",onChange:this.handleNewUser,value:this.state.newUser,placeholder:"Pick a Username"}),i.a.createElement("input",{type:this.state.showPass?"text":"password",onChange:this.handlePass,value:this.state.newPass,placeholder:"Password"}),i.a.createElement("button",{className:"hbtn",type:"button",onClick:this.passbtn},this.state.showPass?i.a.createElement("img",{className:"hideimg",src:"/Login_form/hide1.png",alt:"hide"}):i.a.createElement("img",{className:"hideimg",src:"/Login_form/view.png",alt:"show"})),i.a.createElement("button",{className:"btn",type:"submit"},"Sign Up")))}}]),a}(l.Component),f=a(1),N=(a(38),b.a.div(s||(s=Object(c.a)(["\n  background: url('./background.jpg') no-repeat center center fixed;\n  background-size: cover;\n  height: 100vh;\n  margin: 0;\n  overflow: hidden;\n"]))));var S=function(){return i.a.createElement(g.a,null,i.a.createElement(N,null,i.a.createElement("div",{className:"content"},i.a.createElement(f.c,null,i.a.createElement(f.a,{path:"/",element:i.a.createElement(v,null)}),i.a.createElement(f.a,{path:"/signup",element:i.a.createElement(E,null)})))))};o.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(S,null)))}},[[30,1,2]]]);
//# sourceMappingURL=main.11f5ef70.chunk.js.map