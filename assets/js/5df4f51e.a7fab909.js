(self.webpackChunkeva_website=self.webpackChunkeva_website||[]).push([[695],{1199:(e,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>t});var i=s(2155),l=s(972),r=s.n(l),d=s(5723);function t(){const[e,n]=(0,i.useState)(""),[s,l]=(0,i.useState)(null),[t,h]=(0,i.useState)("");return(0,d.jsxs)("div",{style:{padding:"20px",fontFamily:"Arial"},children:[(0,d.jsx)("h1",{children:"Cron\u8868\u8fbe\u5f0f\u89e3\u6790\u4e0e\u751f\u6210\u5de5\u5177"}),(0,d.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,d.jsx)("h3",{children:"\u89e3\u6790Cron\u8868\u8fbe\u5f0f"}),(0,d.jsx)("input",{type:"text",value:e,onChange:e=>n(e.target.value),placeholder:"\u8bf7\u8f93\u5165Cron\u8868\u8fbe\u5f0f",style:{width:"300px",padding:"8px"}}),(0,d.jsx)("button",{onClick:()=>{try{const n=r().parseExpression(e);l({minute:n.fields.minute,hour:n.fields.hour,dayOfMonth:n.fields.dayOfMonth,month:n.fields.month,dayOfWeek:n.fields.dayOfWeek,year:n.fields.year})}catch(n){l(null),alert("\u65e0\u6548\u7684Cron\u8868\u8fbe\u5f0f")}},style:{padding:"8px",marginLeft:"10px"},children:"\u89e3\u6790"})]}),s&&(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"\u89e3\u6790\u7ed3\u679c\uff1a"}),(0,d.jsxs)("ul",{children:[(0,d.jsxs)("li",{children:[(0,d.jsx)("strong",{children:"\u5206\u949f\uff1a"})," ",s.minute]}),(0,d.jsxs)("li",{children:[(0,d.jsx)("strong",{children:"\u5c0f\u65f6\uff1a"})," ",s.hour]}),(0,d.jsxs)("li",{children:[(0,d.jsx)("strong",{children:"\u65e5\u671f\uff1a"})," ",s.dayOfMonth]}),(0,d.jsxs)("li",{children:[(0,d.jsx)("strong",{children:"\u6708\u4efd\uff1a"})," ",s.month]}),(0,d.jsxs)("li",{children:[(0,d.jsx)("strong",{children:"\u661f\u671f\u51e0\uff1a"})," ",s.dayOfWeek]}),(0,d.jsxs)("li",{children:[(0,d.jsx)("strong",{children:"\u5e74\u4efd\uff1a"})," ",s.year]})]})]}),(0,d.jsxs)("div",{style:{marginTop:"40px"},children:[(0,d.jsx)("h3",{children:"\u751f\u6210Cron\u8868\u8fbe\u5f0f"}),(0,d.jsx)("button",{onClick:()=>{h("*/5 0 * * *")},style:{padding:"8px"},children:"\u751f\u6210Cron"}),t&&(0,d.jsxs)("div",{style:{marginTop:"10px"},children:[(0,d.jsx)("h4",{children:"\u751f\u6210\u7684Cron\u8868\u8fbe\u5f0f\uff1a"}),(0,d.jsx)("p",{children:t})]})]})]})}},3668:()=>{}}]);