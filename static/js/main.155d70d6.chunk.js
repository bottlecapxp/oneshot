(this.webpackJsonponeshot=this.webpackJsonponeshot||[]).push([[0],{15:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(23),l=c.n(s),a=(c(30),c.p,c(25)),r=c(2),o=(c(31),c(15),c(8)),j=(c(32),c(0)),b=function(e){var t=Object(r.f)(),c=Object(n.useState)({title:e.title,url:e.url,id:e.id}),i=Object(o.a)(c,2),s=i[0];i[1];return Object(j.jsx)("div",{className:"box-shadow",id:"account_card",onClick:function(e){"0"===s.id?t.push("/guest"):s.id},children:Object(j.jsx)("p",{id:"title",children:e.title})})},d=function(){return Object(j.jsx)("div",{className:"global_container choose_lot",children:Object(j.jsxs)("div",{id:"choose_account_holder",children:[Object(j.jsx)(b,{title:"Guest",id:"0",url:"guest"}),Object(j.jsx)(b,{title:"Sign In",id:"1",url:"#"}),Object(j.jsx)("p",{id:"new_member_link",children:"Create New Account"})]})})},u=function(){return Object(j.jsx)("div",{className:"global_container choose_lot",children:Object(j.jsxs)("div",{className:"content_holder",children:[Object(j.jsx)("span",{className:"global_content_title",children:"Tell Us About Yourself"}),Object(j.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),window.location.replace("".concat(window.location.origin,"/set-time"))},children:[Object(j.jsx)("label",{className:"labels",children:"Full Name"}),Object(j.jsx)("input",{}),Object(j.jsx)("label",{className:"labels",children:"Phone Number"}),Object(j.jsx)("input",{}),Object(j.jsx)("label",{className:"labels",children:"License Plate #"}),Object(j.jsx)("input",{}),Object(j.jsx)("input",{className:"submitBtn box-shadow",type:"submit"})]})]})})},m=(c(39),function(e){var t=Object(n.useState)({title:e.title,setTime:parseInt(e.time)}),c=Object(o.a)(t,2),i=c[0];c[1];return Object(j.jsx)("div",{className:"global_circle_btns box-shadow content-align",onClick:function(){var e=i.setTime;console.log(e++)},children:Object(j.jsx)("span",{className:"title",children:i.title})})}),h=(c(40),function(e){var t=Object(n.useState)({title:e.title,img:e.img,extra:e.class}),c=Object(o.a)(t,2),i=c[0];c[1];return Object(j.jsx)("div",{className:"global_circle_btns box-shadow content-align ".concat(i.extra),children:Object(j.jsx)("img",{src:"#",alt:""})})}),O=(c(41),c(7)),x=function(){var e=Object(n.useState)(.25),t=Object(o.a)(e,2),c=t[0],i=t[1],s=function(e){return Math.round(32*e)/32};return Object(j.jsxs)("div",{className:"timer_holder",children:[Object(j.jsx)("div",{id:"timeInfo",children:Object(j.jsxs)("div",{id:"time_holder",children:[Object(j.jsx)("p",{children:"Time Remaining"}),Object(j.jsxs)("p",{id:"time",children:[Math.round(100*s(c)),"%"]})]})}),Object(j.jsxs)(O.CircularInput,{value:s(c),onChange:function(e){return i(s(e))},children:[Object(j.jsx)(O.CircularTrack,{stroke:"#eee"}),Object(j.jsx)(O.CircularProgress,{stroke:"#ff4f4f",strokeWidth:12}),Object(j.jsx)(O.CircularThumb,{r:15,fill:"#F0F0F3",stroke:"#ff4f4f"})]})]})},g=function(){return Object(j.jsx)("div",{className:"global_container choose_lot",children:Object(j.jsxs)("div",{id:"content_holder",children:[Object(j.jsx)("div",{className:"timer_holder",children:Object(j.jsx)(x,{})}),Object(j.jsxs)("div",{className:"align_timer_btns",children:[Object(j.jsx)(m,{title:"+30 Min",time:"30"}),Object(j.jsx)(m,{title:"+1 Hr",time:"1"}),Object(j.jsx)(m,{title:"All Day",time:"8"})]}),Object(j.jsxs)("div",{className:"align_timer_btns btns_img_container",children:[Object(j.jsx)(h,{title:"",img:""}),Object(j.jsx)(h,{title:"",img:"",class:"plateCapture"}),Object(j.jsx)(h,{title:"",img:""})]})]})})};var f=function(){return Object(j.jsx)(a.a,{basename:"/oneshot",children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{path:"/oneshot",component:d}),Object(j.jsx)(r.a,{path:"/guest",component:u}),Object(j.jsx)(r.a,{path:"/set-time",component:g})]})})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,45)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),n(e),i(e),s(e),l(e)}))},v=c.p+"static/media/logo.f5be8333.svg",p=(c(43),function(){return Object(j.jsxs)("div",{id:"header",children:[Object(j.jsx)("div",{className:"header_containers"}),Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("img",{id:"logo_img",src:v,alt:"logo"})}),Object(j.jsx)("div",{className:"header_containers",children:Object(j.jsxs)("div",{id:"hamburger_container",children:[Object(j.jsx)("div",{className:"hamburger_menu"}),Object(j.jsx)("div",{className:"hamburger_menu"}),Object(j.jsx)("div",{className:"hamburger_menu"})]})})]})});l.a.render(Object(j.jsxs)(i.a.StrictMode,{children:[Object(j.jsx)(p,{}),Object(j.jsx)(f,{})]}),document.getElementById("root")),_()}},[[44,1,2]]]);
//# sourceMappingURL=main.155d70d6.chunk.js.map