(self.webpackChunkeva_website=self.webpackChunkeva_website||[]).push([[3526],{4972:(e,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>h});var n=t(89748),r=t(19562),s=t(81518),a=t(93022),i=t(78391),o=t(31296),c=t(22155),d=t(27594),u=t.n(d),x=t(24827),A=t(65723);const h=()=>{const[e,l]=(0,c.useState)(null),d=(0,c.useRef)(null),h=(0,c.useRef)(null),[y,f]=(0,c.useState)(null);(0,c.useEffect)((()=>{h?.current?.focus(),t.e(5525).then(t.t.bind(t,55525,23)).then((e=>{f((()=>e.default))}))}),[]);const g=e=>{try{const l=new URL(e),t={};return l.searchParams.forEach(((e,l)=>{t[l]=e})),JSON.stringify(t,null,2)}catch(l){console.error("Invalid URL:",l)}},S=2097152,b=e=>{const t=Math.ceil(e.size/S);let r=0;const s=u().algo.MD5.create(),a=u().algo.SHA256.create(),i=new FileReader;i.onload=i=>{const c=i.target.result;if(s.update(u().lib.WordArray.create(c)),a.update(u().lib.WordArray.create(c)),r++,r<t)o();else{const t=s.finalize().toString(u().enc.Hex),r=a.finalize().toString(u().enc.Hex);l((0,A.jsx)(n.A.TextArea,{value:JSON.stringify({name:e?.name,size:e?.size,md5:t,sha256:r},null,2),autoSize:{...p},style:{...j}}))}},i.onerror=e=>{console.error("Error reading file:",e)};const o=()=>{const l=r*S,t=Math.min(l+S,e.size);i.readAsArrayBuffer(e.slice(l,t))};o()},j={border:"none",boxShadow:"none",fontSize:"16px",fontFamily:"monospace"},p={minRows:30},m={width:"100%"},k=()=>(console.log(h?.current?.textContent),console.log(h?.current?.innerText?.trim()),h?.current?.innerText?.trim()),C=[{label:"\u53bb\u9664\u8f6c\u4e49",onClick:()=>{h&&h.current&&(h.current.innerText=k()?.replace(/\\"/g,'"'))}},{label:"\u89e3\u6790JSON",onClick:()=>{l((0,A.jsx)(y,{src:JSON.parse(k()),displayDataTypes:!1,onAdd:!1,onDelete:!1,onEdit:!1,collapsed:!1}))}},{label:"\u683c\u5f0f\u5316JSON",onClick:()=>{l((0,A.jsx)(n.A.TextArea,{value:JSON.stringify(JSON.parse(k()),null,2),autoSize:{...p},style:{...j}}))}},{label:"\u89e3\u6790URL",onClick:()=>{l((0,A.jsx)(n.A.TextArea,{value:g(k()),autoSize:{...p},style:{...j}}))}},{label:"Encode URL",onClick:()=>{l((0,A.jsx)(n.A.TextArea,{value:encodeURI(k()),autoSize:{...p},style:{...j}}))}},{label:"Decode URL",onClick:()=>{l((0,A.jsx)(n.A.TextArea,{value:decodeURI(k()),autoSize:{...p},style:{...j}}))}},{label:"MD5\u52a0\u5bc6",onClick:()=>{l((0,A.jsx)(n.A.TextArea,{value:u().MD5(k()).toString(u().enc.Hex),autoSize:{...p},style:{...j}}))}},{label:"SHA256\u52a0\u5bc6",onClick:()=>{l((0,A.jsx)(n.A.TextArea,{value:u().SHA256(k()).toString(u().enc.Hex),autoSize:{...p},style:{...j}}))}},{label:"Base64\u8f6c\u56fe\u7247",onClick:()=>{l((0,A.jsx)("img",{src:`data:image/png;base64,${k()}`}))}},{label:" \u6587\u4ef6HASH",onClick:()=>{d.current.click()}},{label:" \u4e8c\u7ef4\u7801",onClick:()=>{l((0,A.jsx)(r.A,{value:k(),bordered:!1}))}}];return(0,A.jsx)(x.A,{children:(0,A.jsxs)(s.A,{gutter:16,style:{display:"flex",justifyContent:"center"},children:[(0,A.jsx)(a.A,{span:11,children:(0,A.jsx)("div",{contenteditable:"true",ref:h,style:{...j,minHeight:"60%"},placeholder:"\u8bf7\u8f93\u5165"})}),(0,A.jsxs)(a.A,{children:[(0,A.jsx)(i.A,{direction:"vertical",size:"middle",style:{display:"flex"},children:C.map(((e,l)=>(0,A.jsx)(o.Ay,{style:m,onClick:e.onClick,children:e.label},l)))}),(0,A.jsx)("input",{type:"file",ref:d,style:{display:"none"},onChange:e=>{const l=e.target.files[0];console.log(l),b(l)}})]}),(0,A.jsx)(a.A,{span:11,children:e})]})})}},24827:(e,l,t)=>{"use strict";t.d(l,{A:()=>c});t(22155);var n=t(39600),r=t(71977),s=t(87810),a=t(79012),i=t(65723);const o=e=>{const{colorMode:l,setColorMode:t}=(0,a.G)();return(0,i.jsx)("main",{style:{marginTop:40},children:(0,i.jsx)(r.Ay,{theme:{algorithm:"light"==l?s.A.defaultAlgorithm:s.A.darkAlgorithm},children:e.children})})},c=e=>(0,i.jsx)(n.A,{children:(0,i.jsx)(o,{children:e.children})})},57167:()=>{}}]);