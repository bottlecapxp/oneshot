(this.webpackJsonponeshot=this.webpackJsonponeshot||[]).push([[0],{147:function(e,t){},148:function(e,t){},155:function(e,t){},157:function(e,t){},189:function(e,t,c){},190:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),o=c(75),l=c.n(o),s=(c(86),c(2)),i=c(15),r=c(3),A=(c(87),Object(a.createContext)(null)),j=(c(31),c(88),c(0)),d=(Object(r.g)((function(e){var t=Object(a.useState)({chooseAccountStyles:"account_card"}),c=Object(s.a)(t,2),n=c[0],o=c[1];Object(a.useEffect)((function(){o({chooseAccountStyles:"account_card_dark"}),o({chooseAccountStyles:"account_card"})}),[]);var l=Object(a.useState)({title:e.title,url:e.url,id:e.id}),i=Object(s.a)(l,2),r=i[0];i[1];return Object(j.jsx)("div",{className:"box-shadow",id:n.chooseAccountStyles,onClick:function(){"0"===r.id?e.history.push("/".concat(r.url,"/")):r.id},children:Object(j.jsx)("p",{id:"title",children:e.title})})})),c(43)),u=Object(r.g)((function(e){var t=Object(r.f)(),c=Object(a.useContext)(A),n=c.setUserInfo,o=c.darkMode,l=Object(a.useState)({globalContainer:"global_container",buttonStyle:"submitBtn",color:"#585858"}),i=Object(s.a)(l,2),u=i[0],b=i[1],m=Object(a.useState)({lp:""}),g=Object(s.a)(m,2),x=g[0],O=g[1];console.log(x),Object(a.useEffect)((function(){(o>=1800||o<=600)&&b({globalContainer:"global_container_dark",buttonStyle:"submitBtn_dark",color:"white"})}),[]);var h=localStorage.getItem("lot");return Object(j.jsx)("div",{className:"".concat(u.globalContainer," choose_lot"),children:Object(j.jsxs)("div",{className:"content_holder",children:[Object(j.jsxs)("h1",{className:"WelcomeHeadder",style:{textAlign:"center",color:u.color},children:["Welcome to Lot #",Object(j.jsx)("br",{})," ",Object(j.jsx)("strong",{children:h})]}),Object(j.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),localStorage.setItem("fullname",e.target.name.value),localStorage.setItem("phone",e.target.phone.value),localStorage.setItem("license",e.target.license.value),n({name:e.target.name.value,phone:e.target.phone.value,license:e.target.license.value}),t.push("/select-payment/")},children:[Object(j.jsx)("label",{style:{color:u.color},className:"labels",children:"Full Name"}),Object(j.jsx)("input",{name:"name",required:!0}),Object(j.jsx)("label",{style:{color:u.color},className:"labels",children:"Phone Number"}),Object(j.jsx)("input",{name:"phone",required:!0}),Object(j.jsx)("div",{className:"licensePlateHolder",children:Object(j.jsxs)("div",{className:"licensePlate",children:[Object(j.jsxs)("div",{className:"threeSeparations",children:[Object(j.jsx)("div",{className:"lPlateDot"}),Object(j.jsx)("div",{className:"lPlateDot"})]}),Object(j.jsx)("div",{className:"line"}),Object(j.jsx)("div",{className:"plateInput",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"center",children:Object(j.jsx)("label",{style:{color:u.color},className:"labels",children:"Enter License Plate"})}),Object(j.jsx)("div",{className:"center",children:Object(j.jsx)("input",{required:!0,name:"license",className:"licensePlateInput",pattern:"[A-Z0-9-]",maxlength:"7",onChange:function(e){!function(e){O(Object(d.a)(Object(d.a)({},x),{},{lp:e.target.value.split(" ").join("")}))}(e)},value:x.lp,style:{textTransform:"uppercase"}})})]})}),Object(j.jsx)("div",{className:"line"}),Object(j.jsxs)("div",{className:"threeSeparations",children:[Object(j.jsx)("div",{className:"lPlateDot"}),Object(j.jsx)("div",{className:"lPlateDot"})]})]})}),Object(j.jsx)("input",{className:u.buttonStyle,type:"submit"})]})]})})})),b=(c(94),function(e){var t=e.title,c=e.time,n=e.addTime,o=Object(a.useState)({buttonStyles:"global_circle_btns",title:"title"}),l=Object(s.a)(o,2),i=l[0],r=l[1];Object(a.useEffect)((function(){r({buttonStyles:"global_circle_btns_dark",title:"title_dark"}),r({buttonStyles:"global_circle_btns",title:"title"})}),[]);var A=Object(a.useState)({title:t,setTime:parseFloat(c)}),d=Object(s.a)(A,2),u=d[0];d[1];return Object(j.jsx)("div",{className:"".concat(i.buttonStyles," content-align"),onClick:function(){n(u.setTime)},children:Object(j.jsx)("span",{className:i.title,children:u.title})})}),m=(c(95),function(e){var t=Object(r.f)(),c=Object(a.useState)({buttonStyles:"btn-confirm"}),n=Object(s.a)(c,2),o=n[0],l=n[1];Object(a.useEffect)((function(){l({buttonStyles:"btn-confirm-dark"}),l({buttonStyles:"btn-confirm"})}),[]);var i=Object(a.useState)({title:e.title,img:e.img,extra:e.class}),d=Object(s.a)(i,1)[0],u=Object(a.useContext)(A).time,b=new Date,m=parseInt("".concat(b.getHours()).concat(b.getMinutes()))+u,g=function(e){localStorage.setItem("timeStore",e)};return Object(j.jsx)("span",{onClick:function(){null===localStorage.getItem("timeStore")?(localStorage.setItem("timeStore","".concat(u)),console.log(m),t.push("/guest/")):null!=localStorage.getItem("timeStore")&&(localStorage.removeItem("timeStore"),g(u),t.push("/guest/"))},className:"".concat(o.buttonStyles," content-align ").concat(d.extra),children:Object(j.jsx)("span",{className:"confirm_title",children:d.title})})}),g=(c(96),c(40)),x=c.p+"static/media/tick.a830ac2f.mp3",O=(c.p,c(12)),h=c(77),p=c(81),f=c(80),v=function(e,t){var c,n,o,l,s,i,r,j,d,u,b,m,g,x,O,h,p,f,v,S,y,C,B=Object(a.useContext)(A),I=B.setNightTime,k=B.setNightTimeBilling,w=B.setDayTime,N=B.setDayTimeBilling,T=B.setBilling,F=(B.setTime,new Date),P=1.75,Q=parseInt("".concat(F.getHours()).concat(F.getMinutes())),D=parseInt("".concat(e).concat(t)),E=Q+D,X=E%100,M=Math.floor(E/100),z=Math.round((E-Q)/100);M>23&&(M-=24),X>=60?(g=X-60,x=Math.floor(M+1),E=parseInt("".concat(x).concat(g)),g<10&&(E=parseInt("".concat(x,"0").concat(g))),0===g&&(E=parseInt("".concat(x,"00")))):E=Q+D,Object(a.useEffect)((function(){Q>600&&E<1800&&(v=parseInt("".concat(e).concat(t)),n=0,S=(O=1.75*e)+(h=0),w(v),N(O),I(n),k(h),5==z?(console.log("".concat(z)),T(5)):T(S)),Q<=1800&&E>1800&&((n=E-1800)<60?(console.log(n),o=1.75):o=n*P,console.log(o),p=Math.floor((1800-Q)/100),60===(c=Math.floor(60-Q%100))&&(c="".concat(0,0)),f=c,v=parseInt("".concat(p).concat(f)),O=1.75*p,n>99?(b=Math.floor(n/100),m=Math.floor(n%100),h=b*P,n=parseInt("".concat(b).concat(m))):h=Math.round(100*(o+Number.EPSILON))/100,n<99&&n>60&&(b=Math.floor(n/60),m=Math.floor(n%60),h=b*P,n=parseInt("".concat(b))),w(v),N(O),I(n),k(h),S=O+h,5==z?(console.log("".concat(z)),T(5)):T(S)),(Q>1800&&E<2359||Q<600&&E<=600)&&(v=0,n=0,h=0,O=0,y=parseInt("".concat(e)),C=e*P,w(v),N(O),I(n),k(C),T(C)),Q<=600&&E>600&&(l=E-600,console.log(),s=Math.floor(.07*l),i=Math.floor((600-Q)/100),r=Math.floor(60-Q%100),y=parseInt("".concat(i).concat(r)),j=i*P,l>99?(d=Math.floor(l/100),u=Math.floor(l%100),h=Math.round(100*(4*d+.07*u+Number.EPSILON))/100,l=parseInt("".concat(d).concat(u))):h=Math.round(100*(s+Number.EPSILON))/100)})),5==z?(console.log("".concat(z)),T(5)):T(S),w(l),N(h),I(y),k(j),S=Math.round(100*(j+h+Number.EPSILON))/100},S=function(e){Object(p.a)(c,e);var t=Object(f.a)(c);function c(e){var a;return Object(h.a)(this,c),(a=t.call(this,e)).setValue=function(e){a.value=e},a.stepValue=function(e){return e>1?1:Math.round(5*e)/5},a.scrollTime=function(e){new g.Howl({src:[x],volume:.7}).play();var t=Math.round(100*e),c=Math.round(300*t/100);return a.hours=c>=60?Math.floor(c/60):0,c/60==a.hours?a.stagedMinutes="00":a.stagedMinutes=c%60%100,v(a.hours,a.stagedMinutes),parseInt("".concat(a.hours).concat(a.stagedMinutes))},a.state={hours:0,stagedMinutes:0,value:0},a}return c}(a.Component),y=function(e){var t,c,n=new S,o=Object(a.useContext)(A),l=o.totalbilling,i=o.dayTime,r=(o.dayTimeBilling,o.nightTime),d=(o.nightTimeBilling,o.setExpiredTime),u=o.setStartTime,b=o.darkMode,m=Object(a.useState)(null),g=Object(s.a)(m,2),x=g[0],h=g[1],p=Object(a.useState)(),f=Object(s.a)(p,2),v=(f[0],f[1]),y=Object(a.useState)(),C=Object(s.a)(y,2),B=(C[0],C[1]),I=Object(a.useState)({circleContainer:"timeInfo",costAmount:"cost_amount",circularTrack:"#eee"}),k=Object(s.a)(I,2),w=k[0],N=k[1],T=Math.floor(n.scrollTime(n.stepValue(x))/100),F=n.scrollTime(n.stepValue(x))%100,P=["am","pm"],Q=new Date,D=parseInt(Q.getMinutes()+F),E=Q.getHours()+T,X=Q.getHours()+T;!function e(){E>12&&(E-=12,e())}();!function(){var e=Q.getHours()+T,a=Q.getHours();switch(a){case a>12?a:null:c=P[1];break;case a<12?a:null:c=P[0]}switch(e){case e>=12&&e<=24?e:null:t=P[1];break;case e>24||e<12?e:null:t=P[0]}D<10&&(D="".concat(0,D))}();var M="".concat(E,":").concat(D).concat(t),z=3600*X+60*D,K="".concat(Q.getHours(),":").concat(Q.getMinutes()).concat(c);return localStorage.setItem("expTimeInSecs",z),localStorage.setItem("expTime",M),localStorage.setItem("total",l),Object(a.useEffect)((function(){(b>=1800||b<=600)&&N({circleContainer:"timeInfo_dark",costAmount:"cost_amount_dark",circularTrack:"#1B242F"}),h(x+e.addTime),v(0==i),0==r&&B(!0),localStorage.setItem("startTime",K),u(K)}),[e.addTime]),d(M),Object(j.jsxs)("div",{className:"timer_container",children:[Object(j.jsxs)("div",{className:"timer_holder",children:[Object(j.jsx)("div",{id:w.circleContainer,children:Object(j.jsxs)("div",{id:"time_holder",children:[Object(j.jsx)("p",{className:"set_time",style:{marginTop:"10px"},children:"Set Duration"}),Object(j.jsx)("p",{id:"time",children:"".concat(T,"h:").concat(F,"m")}),Object(j.jsx)("p",{className:"set_time",style:{marginTop:"10px"},children:"Expires at"}),Object(j.jsx)("p",{className:"rate_",style:{textAlign:"center"},children:M})]})}),Object(j.jsxs)(O.CircularInput,{radius:115,value:n.stepValue(x),onChange:function(e){h(n.stepValue(e))},children:[Object(j.jsx)(O.CircularTrack,{strokeWidth:10,stroke:w.circularTrack}),Object(j.jsx)(O.CircularProgress,{className:"bar",stroke:"#ff4f4f",strokeWidth:12}),Object(j.jsx)(O.CircularThumb,{r:15,fill:"#F0F0F3",stroke:"#ff4f4f"})]})]}),Object(j.jsxs)("div",{className:"cost_holder",children:[Object(j.jsx)("div",{id:w.costAmount,children:"Total Cost: "}),Object(j.jsxs)("div",{className:"price",children:["$","".concat(l)]})]})]})},C=function(e){var t=Object(a.useContext)(A).darkMode,c=Object(a.useState)({globalContainer:"global_container"}),n=Object(s.a)(c,2),o=n[0],l=n[1],i=Object(a.useState)(0),r=Object(s.a)(i,2),d=r[0],u=r[1],g=Object(a.useState)(0),x=Object(s.a)(g,2),O=x[0],h=x[1],p=Object(a.useState)(0),f=Object(s.a)(p,2),v=f[0],S=f[1],C=function(e){var t=parseFloat(e);S(t),e===O?B():h(t)};Object(a.useEffect)((function(){null===localStorage.getItem("lot")?localStorage.setItem("lot",e.match.params.lot):null!=localStorage.getItem("lot")&&(localStorage.removeItem("lot"),setTimeout((function(){}),10)),u(localStorage.getItem("lot")),(t>=1800||t<=600)&&l({globalContainer:"global_container_dark"}),0===O&&h(v)}),[O]);var B=function(){h(0)};return Object(j.jsx)("div",{className:"".concat(o.globalContainer," choose_lot"),children:Object(j.jsxs)("div",{id:"content_holder",children:[Object(j.jsxs)("div",{className:"timer_holder",children:[Object(j.jsx)("div",{className:"lot-info",children:Object(j.jsxs)("h5",{children:[Object(j.jsx)("strong",{children:"LOT NUMBER:"})," ",d]})}),Object(j.jsx)(y,{addTime:O})]}),Object(j.jsxs)("div",{className:"align_timer_btns",children:[Object(j.jsx)(b,{addTime:C,title:"-1 Min",time:"-0.20",commit:"false"}),Object(j.jsx)(b,{addTime:C,title:"All Day",time:"1",commit:"true"}),Object(j.jsx)(b,{addTime:C,title:"+1 Hr",time:"0.20",commit:"true"})]}),Object(j.jsx)("div",{className:"align_timer_btns btns_img_container",children:Object(j.jsx)(m,{title:"Confirm",img:"",class:"plateCapture"})})]})})},B=(c(98),function(e){var t=Object(r.f)(),c=Object(a.useState)({title:e.title,image:e.image}),n=Object(s.a)(c,2),o=n[0];n[1];console.log(e.image);return Object(j.jsx)("div",{className:e.classStyle,onClick:function(){"Pay by Card"===e.title&&t.push("/checkout/")},children:Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{className:"paymentSelectionIcons",src:o.image,alt:o.title}),Object(j.jsx)("span",{style:{color:e.color},children:o.title})]})})}),I=c.p+"static/media/Google.fde133a6.svg",k=c.p+"static/media/ccIcon.3d2f6b6e.svg",w=c.p+"static/media/Apple.87c58277.png",N=c.p+"static/media/Apple_logo_white.47258099.png",T=function(){var e=Object(a.useContext)(A).darkMode,t=Object(a.useState)({globalContainer:"global_container",color:"#585858",class:"paymentButton",apple:w}),c=Object(s.a)(t,2),n=c[0],o=c[1];return Object(a.useEffect)((function(){(e>=1800||e<=600)&&o({globalContainer:"global_container_dark",color:"white",class:"paymentButton_dark",apple:N})}),[]),Object(j.jsx)("div",{className:"".concat(n.globalContainer," choose_lot"),children:Object(j.jsxs)("div",{className:"stacked_container",children:[Object(j.jsx)("h1",{style:{color:n.color},className:"global_content_title slim",children:"Choose a payment method"}),Object(j.jsx)("div",{className:"position-center",children:Object(j.jsxs)("div",{className:"stacked",children:[Object(j.jsx)(B,{title:"Google",image:I,color:n.color,classStyle:n.class}),Object(j.jsx)(B,{title:"Apple",image:n.apple,color:n.color,classStyle:n.class}),Object(j.jsx)(B,{title:"Pay by Card",image:k,color:n.color,classStyle:n.class})]})})]})})},F=c(29),P=function(e){var t=Object(a.useContext)(A),c=(t.userInfo,t.totalbilling,t.expiredTime,t.startTime,localStorage.getItem("lot")),n=localStorage.getItem("fullname"),o=localStorage.getItem("license"),l=localStorage.getItem("startTime"),i=localStorage.getItem("expTime"),r=localStorage.getItem("total"),d=Object(a.useState)({wrapperStyling:Object(F.a)({width:"60%",height:"auto",backgroundColor:"#EEEEF1",position:"absolute",color:"#848484",padding:"20px",borderRadius:"20px",zIndex:"20",marginTop:"-30%",boxShadow:"0px 1px 6px rgba(0, 0, 0, 0.2)"},"borderRadius","21px")}),u=Object(s.a)(d,2),b=u[0];u[1];return Object(j.jsxs)("div",{style:b.wrapperStyling,children:[Object(j.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(j.jsx)("h4",{style:{marginBottom:"0px"},children:"Name:"}),Object(j.jsx)("p",{style:{marginLeft:"20px",marginBottom:"0px"},children:n})]}),Object(j.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(j.jsx)("h4",{style:{marginBottom:"0px"},children:"License Plate:"}),Object(j.jsx)("p",{style:{marginLeft:"20px",marginBottom:"0px"},children:o})]}),Object(j.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(j.jsx)("h4",{style:{marginBottom:"0px"},children:"Start Time:"}),Object(j.jsx)("p",{style:{marginLeft:"20px",marginBottom:"0px"},children:l})]}),Object(j.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(j.jsx)("h4",{style:{marginBottom:"0px"},children:"Expired Time:"}),Object(j.jsx)("p",{style:{marginLeft:"20px",marginBottom:"0px"},children:i})]}),Object(j.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(j.jsx)("h4",{style:{marginBottom:"0px"},children:"Price:"}),Object(j.jsxs)("p",{style:{marginLeft:"20px",marginBottom:"0px"},children:["$",r]})]}),Object(j.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(j.jsx)("h4",{style:{marginBottom:"0px"},children:"Total:"}),Object(j.jsxs)("p",{style:{marginLeft:"20px",marginBottom:"0px"},children:["$",r]})]}),Object(j.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(j.jsx)("h4",{style:{marginBottom:"0px"},children:"Location:"}),Object(j.jsx)("p",{style:{marginLeft:"20px",marginBottom:"0px"},children:"OneShot Parking"})]}),Object(j.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(j.jsx)("h4",{style:{marginBottom:"0px"},children:"Lot #:"}),Object(j.jsx)("p",{style:{marginLeft:"20px",marginBottom:"0px"},children:c})]})]})},Q=function(){var e=Object(a.useContext)(A).darkMode,t=localStorage.getItem("timeStore"),c=Object(a.useState)(!1),n=Object(s.a)(c,2),o=n[0],l=n[1],i=localStorage.getItem("expTime"),r=Object(a.useState)({globalContainer:"global_container",color:"#585858",circleAnimation:"circleAnimation",countDownAdj:"countdown_adjustment"}),d=Object(s.a)(r,2),u=d[0],b=d[1],m=Object(a.useState)({divStyle:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},buttonStyle:{marginTop:"30px",border:"1px solid #848484",fontSize:"13px",padding:"10px",borderRadius:"10px",margin:"0px 5px 0px 5px",boxShadow:"10px 10px 30px rgba(174, 174, 192, 0.4), -10px -10px 30px #FFFFFF"},buttonDiv:{width:"100%",display:"flex",justifyContent:"space-around"}}),g=Object(s.a)(m,2),x=g[0],O=g[1],h=localStorage.getItem("expTimeInSecs"),p=new Date,f=60*p.getMinutes(),v=3600*p.getHours(),S=p.getSeconds(),y=0,C=(Math.floor(t/100),Math.round(t%100),i-y),B=Object(a.useState)({hours:Math.floor(t/100),mins:Math.round(t%100),secs:60}),I=Object(s.a)(B,2),k=I[0],w=I[1],N=null,T=function(e){return localStorage?localStorage.getItem(e):""},F=function(){var e,t,c=new Date;if((c.getMinutes()>f||c.getHours()>v||c.getSeconds()>S)&&(f=c.getMinutes(),v=c.getHours(),S=c.getSeconds(),y=3600*v+60*f),e="count",t=h-y,localStorage&&localStorage.setItem(e,t),(C=t)<=0)return w({hours:"00",mins:"00",secs:"00"}),void clearInterval(N);var a=Math.floor(C/60),n=Math.floor(a/60);w({hours:n%=60,mins:a%=60,secs:60-S})};return Object(a.useEffect)((function(){(e>=1800||e<=600)&&(b({globalContainer:"global_container_dark",color:"white",submitBtn:"submitBtn_dark",circleAnimation:"circleAnimation_dark",countDownAdj:"countdown_adjustment_dark"}),O({divStyle:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},buttonStyle:{marginTop:"30px",border:"1px solid #EA4335",fontSize:"13px",padding:"10px",borderRadius:"10px",margin:"0px 5px 0px 5px",color:"#EA4335",background:"#1E2834",boxSizing:"border-box",boxShadow:"10px 10px 30px rgba(0, 0, 0, 0.6), -10px -10px 30px rgba(255, 255, 255, 0.12)"},buttonDiv:{width:"100%",display:"flex",justifyContent:"space-around"}})),null!=localStorage.getItem("count")&&0!=localStorage.getItem("count")||localStorage.setItem("count",C),C=T("count"),N=setInterval(F,1e3)}),[]),Object(j.jsx)("div",{className:"".concat(u.globalContainer," choose_lot"),children:Object(j.jsxs)("div",{style:x.divStyle,children:[Object(j.jsx)("div",{className:u.circleAnimation}),Object(j.jsx)("div",{className:"countdown_digits_holder",children:Object(j.jsxs)("div",{className:u.countDownAdj,children:[Object(j.jsx)("h3",{style:{marginBottom:"0px"},children:"Active Session"}),Object(j.jsxs)("div",{className:"countdown_digits",children:[Object(j.jsx)("span",{className:"digits",children:"".concat(k.hours,"h")}),Object(j.jsx)("span",{className:"digits",children:"".concat(k.mins,"m")}),Object(j.jsxs)("span",{className:"digits",children:[60==k.secs?"00":"".concat(k.secs),"s"]})]})]})}),o?Object(j.jsx)(P,{}):"",Object(j.jsxs)("h4",{style:{marginTop:"30%",color:u.color},children:["Your Time Expires at: ",i]}),Object(j.jsxs)("div",{style:x.buttonDiv,children:[Object(j.jsx)("span",{style:x.buttonStyle,children:"Extend My Time"}),Object(j.jsx)("span",{onClick:function(){l(!o)},style:x.buttonStyle,children:"View My Receipt"})]})]})})},D=c(78),E=c(10),X=c(44),M=c.n(X),z=c(79),K=(c(100),c.p+"static/media/loading.d57bfd24.gif"),H=function(e){var t=Object(a.useState)({divStyle:{width:"100%",height:"auto",display:"flex",flexDirection:"column",alignItems:"center"},imageStyle:{width:"55%"}}),c=Object(s.a)(t,2),n=c[0];c[1];return Object(j.jsxs)("div",{style:n.divStyle,className:"loadingGif",children:[Object(j.jsx)("img",{style:n.imageStyle,src:K,alt:"loading"}),Object(j.jsx)("h4",{children:"Loading..."})]})},L=(c(118),function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1],o=Object(a.useState)({status:"Enter your card's information below"}),l=Object(s.a)(o,2),i=l[0],d=l[1],u=Object(a.useState)(""),b=Object(s.a)(u,2),m=(b[0],b[1],Object(a.useState)(!0)),g=Object(s.a)(m,2),x=(g[0],g[1],Object(a.useState)("")),O=Object(s.a)(x,2),h=(O[0],O[1],Object(a.useContext)(A)),p=(h.userInfo,h.totalbilling,h.darkMode),f=Object(a.useState)({globalContainer:"global_container",color:"#585858",submitBtn:"submitBtn",card:"card_"}),v=Object(s.a)(f,2),S=v[0],y=v[1],C={fullname:localStorage.getItem("fullname"),license_plate:localStorage.getItem("license"),set_time:localStorage.getItem("startTime"),exp_time:localStorage.getItem("expTime"),location_id:localStorage.getItem("lot"),paid:localStorage.getItem("total")},B=Object(E.useStripe)(),I=Object(E.useElements)(),w=Object(r.f)(),N={style:{base:{color:"black"}}},T=function(){var e=Object(z.a)(M.a.mark((function e(t){var c,a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,B.createPaymentMethod({type:"card",card:I.getElement(E.CardNumberElement,E.CardExpiryElement,E.CardCvcElement)});case 3:if(c=e.sent,a=c.error,c.paymentMethod,!a)try{setTimeout((function(){w.push("/remaining-time/")}),2e3),n(!0),fetch("https://osparking.pythonanywhere.com/visitor",{method:"POST",mode:"cors",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},body:JSON.stringify(C)}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}))}catch(a){d({status:a})}case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){(p>=1800||p<=600)&&y({globalContainer:"global_container_dark",color:"white",submitBtn:"submitBtn_dark",card:"card_dark"})}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"".concat(S.globalContainer," choose_lot"),children:B?Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"global_content_title slim",style:{textAlign:"center",marginTop:"-50%",color:S.color},children:i.status}),Object(j.jsxs)("form",{onSubmit:T,className:S.card,children:[" ",Object(j.jsxs)("div",{className:"stacked_",children:[Object(j.jsx)("label",{style:{color:"black"},id:"CCnumberLabel",children:"Enter Your Card Number"}),Object(j.jsx)("div",{id:"CCnumber",children:Object(j.jsx)(E.CardNumberElement,{options:N})})]}),Object(j.jsxs)("div",{className:"auth_holder",children:[Object(j.jsxs)("div",{className:"stacked_",children:[Object(j.jsx)("label",{style:{color:S.color},children:"Expiration"}),Object(j.jsx)("div",{id:"expiration",children:Object(j.jsx)(E.CardExpiryElement,{options:N})})]}),Object(j.jsxs)("div",{className:"stacked_",children:[Object(j.jsx)("label",{style:{color:S.color},children:"CVC"}),Object(j.jsx)("div",{id:"cvc",children:Object(j.jsx)(E.CardCvcElement,{options:N})})]}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"ccIcon",src:k,alt:"creditCard_logo"})})]}),Object(j.jsx)("div",{className:"securePaymentHolder",children:Object(j.jsxs)("div",{className:"securePayment_",children:["  ",Object(j.jsx)("img",{className:"lock",src:"data:image/png;base64,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"}),Object(j.jsx)("p",{style:{color:S.color},children:"Secure Payment"})]})}),Object(j.jsx)("div",{className:"ccCardSubmissionHolder",children:Object(j.jsx)("input",{style:c?{color:"green",border:"1px solid green !important"}:{color:"#FF5759",border:"1px solid #FF5759 !important"},className:"".concat(S.submitBtn," ccCardSubmission"),type:"submit",value:c?"Approved!":"Pay Now"})})]})]}):Object(j.jsx)(H,{})})})}),U=Object(D.a)("pk_test_51J3hpXGLCAc2YCrX4xp7zf6QGq4pzhjjIfsjyqYxJmmsJDPZF7Tu7lVC7Uh0IxC4lO14wBpa26vXxfMhmPrRVLJn00XtTPcVSN");var V=function(){var e=Object(a.useState)(),t=Object(s.a)(e,2),c=t[0],n=t[1],o=Object(a.useState)(),l=Object(s.a)(o,2),d=l[0],b=l[1],m=Object(a.useState)(),g=Object(s.a)(m,2),x=g[0],O=g[1],h=Object(a.useState)(),p=Object(s.a)(h,2),f=p[0],v=p[1],S=Object(a.useState)(),y=Object(s.a)(S,2),B=y[0],I=y[1],k=Object(a.useState)(),w=Object(s.a)(k,2),N=w[0],F=w[1],P=Object(a.useState)(),D=Object(s.a)(P,2),X=D[0],M=D[1],z=Object(a.useState)(),K=Object(s.a)(z,2),H=K[0],V=K[1],J=Object(a.useState)(),W=Object(s.a)(J,2),q=W[0],G=W[1],_=Object(a.useState)(1200),R=Object(s.a)(_,2),Y=R[0],Z=R[1],$=Object(a.useMemo)((function(){return{time:d,setTime:b,nightTime:B,setNightTime:I,nightTimeBilling:N,setNightTimeBilling:F,dayTime:X,setDayTime:M,dayTimeBilling:H,setDayTimeBilling:V,totalbilling:c,setBilling:n,userInfo:q,setUserInfo:G,expiredTime:f,setExpiredTime:v,startTime:x,setStartTime:O,darkMode:Y,setDarkMode:Z}}),[d,B,N,X,H,c,q,f,x,Y]);return Object(j.jsx)(i.a,{basename:"/oneshot",children:Object(j.jsx)(r.c,{children:Object(j.jsx)(E.Elements,{stripe:U,children:Object(j.jsxs)(A.Provider,{value:$,children:[Object(j.jsx)(r.a,{path:"/guest/",exact:!0,strict:!0,component:u}),Object(j.jsx)(r.a,{path:"/:lot",exact:!0,strict:!0,component:C}),Object(j.jsx)(r.a,{path:"/select-payment/",exact:!0,strict:!0,component:T}),Object(j.jsx)(r.a,{path:"/remaining-time/",exact:!0,strict:!0,component:Q}),Object(j.jsx)(r.a,{path:"/checkout/",exact:!0,strict:!0,component:L})]})})})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,191)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,o=t.getLCP,l=t.getTTFB;c(e),a(e),n(e),o(e),l(e)}))},W=c.p+"static/media/logo.40fca5a8.svg",q=c.p+"static/media/darkModeLogo.e4dbe049.svg",G=(c(189),function(){var e=Object(a.useState)({headerStyles:"hamburger_menu",logo:W}),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){n({headerStyles:"hamburger_menu_dark",logo:q}),n({headerStyles:"hamburger_menu",logo:W})}),[]),Object(j.jsxs)("div",{id:"header",children:[Object(j.jsx)("div",{className:"header_containers"}),Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("img",{id:"logo_img",src:c.logo,alt:"logo"})}),Object(j.jsx)("div",{className:"header_containers"})]})});l.a.render(Object(j.jsxs)(n.a.StrictMode,{children:[Object(j.jsx)(G,{}),Object(j.jsx)(V,{})]}),document.getElementById("root")),J()},31:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},98:function(e,t,c){}},[[190,1,2]]]);
//# sourceMappingURL=main.427fbcea.chunk.js.map