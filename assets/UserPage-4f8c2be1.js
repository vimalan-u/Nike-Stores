import{w as k,j as e,x as v,y as T,aH as ie,h,aA as J,aa as G,aC as ce,v as H,E as O,aI as de,q as ue,aD as xe,aJ as he,aK as D,B as U,P as pe,O as q,T as x,d as m,U as P,c as I,H as me,M as fe,J as be,K as je,L as ye,N as ge,a as $,m as X,k as Q,aL as Z,s as _,$ as S,i as M,a4 as V,D as A,I as Ce,F as C,aM as ve}from"./index-a3eae79a.js";import{C as Se}from"./chunk-5MKCW436-a3464558.js";import{u as we,A as ke}from"./chunk-V7PAE35Z-eb47ae35.js";import{M as Te,B as L,a as Pe,S as K}from"./chunk-3RSXBRAN-7986e1da.js";import{H as Ne}from"./chunk-7OLJDQMT-e0eb063e.js";import{G as W}from"./chunk-JARCRF6W-2344a86c.js";import{F as w}from"./chunk-7COXQURZ-d7a2833b.js";import{u as Ae}from"./chunk-7D6N5TE5-72e63081.js";import{E as De}from"./Error-84ce5764.js";import{L as _e}from"./Loading-e15d69a9.js";import{A as Ie,a as Ee,b as Me,c as Be,d as Re}from"./chunk-UIZMWHSN-4f48f2e3.js";import{d as Fe}from"./dateFormatorFunction-b8d8a4b9.js";import{u as ze}from"./index-54a464c0.js";import"./index-8d968404.js";var Le={"top-start":{top:"0",insetStart:"0",transform:"translate(-25%, -25%)"},"top-end":{top:"0",insetEnd:"0",transform:"translate(25%, -25%)"},"bottom-start":{bottom:"0",insetStart:"0",transform:"translate(-25%, 25%)"},"bottom-end":{bottom:"0",insetEnd:"0",transform:"translate(25%, 25%)"}},ee=k(function(t,a){const{placement:r="bottom-end",className:n,...i}=t,c=we(),l={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",...Le[r],...c.badge};return e.jsx(v.div,{ref:a,...i,className:T("chakra-avatar__badge",n),__css:l})});ee.displayName="AvatarBadge";var Oe=function(){var s=document.getSelection();if(!s.rangeCount)return function(){};for(var t=document.activeElement,a=[],r=0;r<s.rangeCount;r++)a.push(s.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return s.removeAllRanges(),function(){s.type==="Caret"&&s.removeAllRanges(),s.rangeCount||a.forEach(function(n){s.addRange(n)}),t&&t.focus()}},We=Oe,Y={"text/plain":"Text","text/html":"Url",default:"Text"},He="Copy to clipboard: #{key}, Enter";function Ue(s){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return s.replace(/#{\s*key\s*}/g,t)}function $e(s,t){var a,r,n,i,c,o,l=!1;t||(t={}),a=t.debug||!1;try{n=We(),i=document.createRange(),c=document.getSelection(),o=document.createElement("span"),o.textContent=s,o.ariaHidden="true",o.style.all="unset",o.style.position="fixed",o.style.top=0,o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",o.style.webkitUserSelect="text",o.style.MozUserSelect="text",o.style.msUserSelect="text",o.style.userSelect="text",o.addEventListener("copy",function(p){if(p.stopPropagation(),t.format)if(p.preventDefault(),typeof p.clipboardData>"u"){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var d=Y[t.format]||Y.default;window.clipboardData.setData(d,s)}else p.clipboardData.clearData(),p.clipboardData.setData(t.format,s);t.onCopy&&(p.preventDefault(),t.onCopy(p.clipboardData))}),document.body.appendChild(o),i.selectNodeContents(o),c.addRange(i);var u=document.execCommand("copy");if(!u)throw new Error("copy command was unsuccessful");l=!0}catch(p){a&&console.error("unable to copy using execCommand: ",p),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",s),t.onCopy&&t.onCopy(window.clipboardData),l=!0}catch(d){a&&console.error("unable to copy using clipboardData: ",d),a&&console.error("falling back to prompt"),r=Ue("message"in t?t.message:He),window.prompt(r,s)}}finally{c&&(typeof c.removeRange=="function"?c.removeRange(i):c.removeAllRanges()),o&&document.body.removeChild(o),n()}return l}var Xe=$e;const Ve=ie(Xe);function Ke(s,t={}){const[a,r]=h.useState(!1),[n,i]=h.useState(s);h.useEffect(()=>i(s),[s]);const{timeout:c=1500,...o}=typeof t=="number"?{timeout:t}:t,l=h.useCallback(()=>{const u=Ve(n,o);r(u)},[n,o]);return h.useEffect(()=>{let u=null;return a&&(u=window.setTimeout(()=>{r(!1)},c)),()=>{u&&window.clearTimeout(u)}},[c,a]),{value:n,setValue:i,onCopy:l,hasCopied:a}}var te=k(function(t,a){const r=J("Switch",t),{spacing:n="0.5rem",children:i,...c}=G(t),{getIndicatorProps:o,getInputProps:l,getCheckboxProps:u,getRootProps:p,getLabelProps:d}=Ae(c),f=h.useMemo(()=>({display:"inline-block",position:"relative",verticalAlign:"middle",lineHeight:0,...r.container}),[r.container]),b=h.useMemo(()=>({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer",...r.track}),[r.track]),y=h.useMemo(()=>({userSelect:"none",marginStart:n,...r.label}),[n,r.label]);return e.jsxs(v.label,{...p(),className:T("chakra-switch",t.className),__css:f,children:[e.jsx("input",{className:"chakra-switch__input",...l({},a)}),e.jsx(v.span,{...u(),className:"chakra-switch__track",__css:b,children:e.jsx(v.span,{__css:r.thumb,className:"chakra-switch__thumb",...o()})}),i&&e.jsx(v.span,{className:"chakra-switch__label",...d(),__css:y,children:i})]})});te.displayName="Switch";var[Ye,Je,Ge,qe]=ce();function Qe(s){var t;const{defaultIndex:a,onChange:r,index:n,isManual:i,isLazy:c,lazyBehavior:o="unmount",orientation:l="horizontal",direction:u="ltr",...p}=s,[d,f]=h.useState(a??0),[b,y]=ze({defaultValue:a??0,value:n,onChange:r});h.useEffect(()=>{n!=null&&f(n)},[n]);const N=Ge(),z=h.useId();return{id:`tabs-${(t=s.id)!=null?t:z}`,selectedIndex:b,focusedIndex:d,setSelectedIndex:y,setFocusedIndex:f,isManual:i,isLazy:c,lazyBehavior:o,orientation:l,descendants:N,direction:u,htmlProps:p}}var[Ze,R]=H({name:"TabsContext",errorMessage:"useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"});function et(s){const{focusedIndex:t,orientation:a,direction:r}=R(),n=Je(),i=h.useCallback(c=>{const o=()=>{var j;const g=n.nextEnabled(t);g&&((j=g.node)==null||j.focus())},l=()=>{var j;const g=n.prevEnabled(t);g&&((j=g.node)==null||j.focus())},u=()=>{var j;const g=n.firstEnabled();g&&((j=g.node)==null||j.focus())},p=()=>{var j;const g=n.lastEnabled();g&&((j=g.node)==null||j.focus())},d=a==="horizontal",f=a==="vertical",b=c.key,y=r==="ltr"?"ArrowLeft":"ArrowRight",N=r==="ltr"?"ArrowRight":"ArrowLeft",E={[y]:()=>d&&l(),[N]:()=>d&&o(),ArrowDown:()=>f&&o(),ArrowUp:()=>f&&l(),Home:u,End:p}[b];E&&(c.preventDefault(),E(c))},[n,t,a,r]);return{...s,role:"tablist","aria-orientation":a,onKeyDown:O(s.onKeyDown,i)}}function tt(s){const{isDisabled:t=!1,isFocusable:a=!1,...r}=s,{setSelectedIndex:n,isManual:i,id:c,setFocusedIndex:o,selectedIndex:l}=R(),{index:u,register:p}=qe({disabled:t&&!a}),d=u===l,f=()=>{n(u)},b=()=>{o(u),!i&&!(t&&a)&&n(u)},y=de({...r,ref:ue(p,s.ref),isDisabled:t,isFocusable:a,onClick:O(s.onClick,f)}),N="button";return{...y,id:se(c,u),role:"tab",tabIndex:d?0:-1,type:N,"aria-selected":d,"aria-controls":ae(c,u),onFocus:t?void 0:O(s.onFocus,b)}}var[st,at]=H({});function nt(s){const t=R(),{id:a,selectedIndex:r}=t,i=xe(s.children).map((c,o)=>h.createElement(st,{key:o,value:{isSelected:o===r,id:ae(a,o),tabId:se(a,o),selectedIndex:r}},c));return{...s,children:i}}function rt(s){const{children:t,...a}=s,{isLazy:r,lazyBehavior:n}=R(),{isSelected:i,id:c,tabId:o}=at(),l=h.useRef(!1);i&&(l.current=!0);const u=he({wasSelected:l.current,isSelected:i,enabled:r,mode:n});return{tabIndex:0,...a,children:u?t:null,role:"tabpanel","aria-labelledby":o,hidden:!i,id:c}}function se(s,t){return`${s}--tab-${t}`}function ae(s,t){return`${s}--tabpanel-${t}`}var[ot,F]=H({name:"TabsStylesContext",errorMessage:`useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />" `}),ne=k(function(t,a){const r=J("Tabs",t),{children:n,className:i,...c}=G(t),{htmlProps:o,descendants:l,...u}=Qe(c),p=h.useMemo(()=>u,[u]),{isFitted:d,...f}=o;return e.jsx(Ye,{value:l,children:e.jsx(Ze,{value:p,children:e.jsx(ot,{value:r,children:e.jsx(v.div,{className:T("chakra-tabs",i),ref:a,...f,__css:r.root,children:n})})})})});ne.displayName="Tabs";var re=k(function(t,a){const r=et({...t,ref:a}),i={display:"flex",...F().tablist};return e.jsx(v.div,{...r,className:T("chakra-tabs__tablist",t.className),__css:i})});re.displayName="TabList";var B=k(function(t,a){const r=rt({...t,ref:a}),n=F();return e.jsx(v.div,{outline:"0",...r,className:T("chakra-tabs__tab-panel",t.className),__css:n.tabpanel})});B.displayName="TabPanel";var oe=k(function(t,a){const r=nt(t),n=F();return e.jsx(v.div,{...r,width:"100%",ref:a,className:T("chakra-tabs__tab-panels",t.className),__css:n.tabpanels})});oe.displayName="TabPanels";var le=k(function(t,a){const r=F(),n=tt({...t,ref:a}),i={outline:"0",display:"flex",alignItems:"center",justifyContent:"center",...r.tab};return e.jsx(v.button,{...n,className:T("chakra-tabs__tab",t.className),__css:i})});le.displayName="Tab";function lt({onProfilePicSubmit:s}){const t="https://apple.com/cook",{hasCopied:a,onCopy:r}=Ke(t),n=h.useRef(null);return h.useEffect(()=>{a&&(n.current.focus(),n.current.select())}),e.jsx(D,{py:8,px:5,spacing:3,children:e.jsx(U,{w:"full",variant:"outline",onClick:s,children:"Update Profile"})})}const it=[{id:1,name:"Total Orders Placed",value:32,color:"yellow"},{id:2,name:"Ongoing Deliveries",value:6,color:"green"},{id:3,name:"Products Favorited",value:10,color:"cadet"}];function ct(){const{colorMode:s,toggleColorMode:t}=pe();return e.jsxs(D,{as:"ul",spacing:0,listStyleType:"none",children:[e.jsxs(q,{w:"full",py:3,px:5,d:"flex",alignItems:"center",justifyContent:"space-between",borderBottomWidth:1,borderColor:"brand.light",children:[e.jsx(x,{fontWeight:"bold",children:s==="dark"?"Dark Mode":"Light Mode"}),e.jsx("div",{className:"checkbox-wrapper-25",children:e.jsx("input",{type:"checkbox",checked:s==="dark",onChange:t})})]}),it.map(a=>e.jsxs(m,{as:"li",w:"full",py:3,px:5,d:"flex",alignItems:"center",justifyContent:"space-between",borderBottomWidth:1,borderColor:"brand.light",children:[e.jsx(x,{color:P("brand.dark","brand.light"),children:a.name}),e.jsx(x,{color:`brand.${a.color}`,fontWeight:"bold",children:a.value})]},a.id))]})}function dt({userProfile:s,setUserProfile:t,selectedProfile:a,setSelectedProfile:r}){const n=I(d=>d.auth.user)||"Test",i=h.useRef(null),{isOpen:c,onOpen:o,onClose:l}=me(),u=()=>{i.current.click()},p=d=>{const f=["image/png","image/jpeg","image/jpg"],b=d.target.files[0];if(b&&f.includes(b.type)){let y=new FileReader;return y.onloadend=()=>t(y.result),r(b),y.readAsDataURL(b)}o()};return e.jsxs(D,{spacing:3,py:5,borderBottomWidth:1,borderColor:"brand.light",children:[e.jsx(ke,{size:"2xl",name:n.firstName,cursor:"pointer",onClick:u,src:s||n.profilePic,children:e.jsx(ee,{bg:"brand.blue",boxSize:"1em",children:e.jsx("svg",{width:"0.4em",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"})})})}),e.jsx("input",{hidden:!0,type:"file",ref:i,onChange:p}),e.jsxs(fe,{isOpen:c,onClose:l,children:[e.jsx(be,{}),e.jsxs(Te,{children:[e.jsx(je,{children:"Something went wrong"}),e.jsx(ye,{}),e.jsxs(ge,{children:[e.jsx(x,{children:"File not supported!"}),e.jsxs(q,{mt:1,children:[e.jsx(x,{color:"brand.cadet",fontSize:"sm",children:"Supported types:"}),e.jsx(L,{colorScheme:"green",children:"PNG"}),e.jsx(L,{colorScheme:"green",children:"JPG"}),e.jsx(L,{colorScheme:"green",children:"JPEG"})]})]}),e.jsx(Pe,{children:e.jsx(U,{onClick:l,children:"Close"})})]})]}),e.jsxs(D,{spacing:1,children:[e.jsx(Ne,{as:"h3",fontSize:"xl",color:P("brand.dark","brand.light"),children:"Venketesh Rushi"}),e.jsx(x,{color:P("brand.gray","brand.light"),fontSize:"sm",children:"Pune, India"})]})]})}function ut(){const[s,t]=h.useState(null),[a,r]=h.useState(null),n=I(o=>o.auth.token),i=$(),c=async()=>{const o=new FormData;o.append("imgCollection",s);try{const l=await X.post("/user/adduserimage",o,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${n}`}});console.log(l.data.user);let u=JSON.stringify(l.data.user);Q("user"),Z("user",u),_(i,"Profile Piture Upload Succsfully.","success"),r(null)}catch(l){console.log(l),_(i,"Something Went Wrong!","error")}};return e.jsxs(m,{as:"aside",flex:1,mr:{base:0,md:5},mb:{base:5,md:0},rounded:"md",borderWidth:1,borderColor:"brand.light",style:{transform:"translateY(-100px)"},bg:P("gray.50","gray.800"),children:[e.jsx(dt,{userProfile:a,setUserProfile:r,selectedProfile:s,setSelectedProfile:t}),e.jsx(ct,{}),e.jsx(lt,{onProfilePicSubmit:c})]})}function xt(){const s=$(),t=()=>{_(s,"This functionality is under development","success")};return e.jsx(m,{mt:5,py:8,px:0,borderTopWidth:1,borderColor:"brand.light",children:e.jsx(U,{color:"white",bgColor:"rgb(0,0,0)",_hover:{boxShadow:"xl"},onClick:t,children:"Update"})})}function ht(){const s=I(t=>t.auth.user);return e.jsxs(m,{as:"main",children:[e.jsxs(W,{templateColumns:{base:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},gap:6,children:[e.jsxs(S,{id:"firstName",children:[e.jsx(w,{children:"First Name"}),e.jsx(M,{focusBorderColor:"brand.blue",type:"text",placeholder:s.firstName?s.firstName:"Enter Your First Name",readOnly:!0})]}),e.jsxs(S,{id:"lastName",children:[e.jsx(w,{children:"Last Name"}),e.jsx(M,{focusBorderColor:"brand.blue",type:"text",placeholder:s.lastName?s.lastName:"Enter Your Last Name",readOnly:!0})]}),e.jsxs(S,{id:"phoneNumber",children:[e.jsx(w,{children:"Phone Number"}),e.jsx(M,{focusBorderColor:"brand.blue",type:"tel",placeholder:"+91 XXXXXXXXXX",readOnly:!0})]}),e.jsxs(S,{id:"emailAddress",children:[e.jsx(w,{children:"Email Address"}),e.jsx(M,{focusBorderColor:"brand.blue",type:"email",placeholder:s.email?s.email:"Enter Your Email",readOnly:!0})]}),e.jsxs(S,{id:"city",children:[e.jsx(w,{children:"City"}),e.jsxs(K,{focusBorderColor:"brand.blue",placeholder:"Select city",isReadOnly:!0,children:[e.jsx("option",{value:"pune",selected:!0,children:"Pune"}),e.jsx("option",{value:"mumbai",children:"Mumbai"}),e.jsx("option",{value:"hyderabad",children:"Hyderabad"}),e.jsx("option",{value:"bangalore",children:"Bangalore"}),e.jsx("option",{value:"delhi",children:"New Delhi"}),e.jsx("option",{value:"chennai",children:"Chennai"}),e.jsx("option",{value:"kolkata",children:"Kolkata"})]})]}),e.jsxs(S,{id:"country",children:[e.jsx(w,{children:"Country"}),e.jsx(K,{focusBorderColor:"brand.blue",placeholder:"Select country",isReadOnly:!0,children:e.jsx("option",{value:"india",selected:!0,children:"India"})})]})]}),e.jsx(xt,{})]})}function pt(){const s=$(),{token:t,user:a}=I(n=>n.auth);console.log(a.notification);const r=async()=>{var n,i;try{const c=await X.post("/user/updateusernotificationdetails",{id:a.id},{headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`}});let o=JSON.stringify(c.data.user);Q("user"),Z("user",o),_(s,c.data.user.notification===!0?"Notification Service started":"Notification Service Stopped","success")}catch(c){console.error(c),_(s,((i=(n=c.response)==null?void 0:n.data)==null?void 0:i.message)||"Something went wrong!","error")}};return e.jsxs(S,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[e.jsx(w,{htmlFor:"notificationEmails",mb:0,cursor:"pointer",userSelect:"none",children:"Receive notification emails"}),e.jsx(te,{id:"notificationEmails",isChecked:a.notification,onChange:r})]})}const mt=({date:s,time:t,children:a})=>e.jsxs(Ie,{width:"100%",children:[e.jsx("h2",{children:e.jsxs(Ee,{children:[e.jsxs(m,{flex:"1",textAlign:"left",children:["Order on ",s," at ",t]}),e.jsx(Me,{})]})}),e.jsx(Be,{pb:4,children:a})]});function ft(){const[s,t]=h.useState(!1),[a,r]=h.useState(!1),[n,i]=h.useState([]),c=I(l=>l.auth.token);h.useEffect(()=>{o()},[]);async function o(){try{t(!0);let{data:l}=await X.get("/order/getorders",{headers:{Authorization:`Bearer ${c}`}});i(l),t(!1)}catch(l){console.log(l),t(!1),r(!0)}}return n.length===0?e.jsx(m,{children:e.jsx(V,{h:"40vh",children:e.jsx(x,{fontSize:"20px",children:"Your orders will be displayed here."})})}):s?e.jsx(_e,{}):a?e.jsx(De,{}):e.jsx(Re,{allowMultiple:!0,width:"100%",children:n==null?void 0:n.map(l=>{const{date:u,time:p}=Fe(l.createdAt);return e.jsxs(mt,{date:u,time:p,children:[" ",e.jsx(m,{children:e.jsxs(W,{templateColumns:["100%","100%","100%","50% 50%","50% 50%"],gap:["20px","20px","4%","2%","4%"],children:[" ",e.jsxs(m,{py:"15px",px:"25px",children:[e.jsx(x,{textAlign:"left",fontSize:"20px",fontWeight:600,children:"Ordered Items"}),e.jsx(A,{mb:"20px"}),l.cartProducts.map(d=>e.jsxs(W,{templateColumns:"100px 60%",p:"5px",children:[e.jsx(m,{w:"100px",overflow:"hidden",children:e.jsx(Ce,{src:d.img[0]})}),e.jsx(V,{children:e.jsxs(m,{textAlign:"left",px:"20px",w:"100%",children:[e.jsx(x,{fontWeight:600,children:d.title}),e.jsxs(x,{children:["Price: ₹ ",d.price]}),e.jsxs(x,{children:["Quantity: ",d.quantity]})]})})]},d.id))]}),l.ShippingDetails.map((d,f)=>e.jsxs(m,{py:"15px",px:"25px",children:[e.jsx(x,{textAlign:"left",fontSize:"20px",fontWeight:600,children:"Shipping Address"}),e.jsx(A,{mb:"20px"}),e.jsxs(C,{flexDirection:"column",gap:"5px",my:"20px",fontSize:"18px",children:[e.jsxs(C,{justifyContent:"space-between",children:[e.jsx(x,{children:"Full Name"}),e.jsx(x,{children:d.name})]}),e.jsxs(C,{justifyContent:"space-between",children:[e.jsx(x,{children:"Email"}),e.jsx(x,{children:d.email})]}),e.jsx(A,{my:"10px"}),e.jsxs(C,{justifyContent:"space-between",children:[e.jsx(x,{children:"Address"}),e.jsx(x,{children:d.addressLine})]}),e.jsxs(C,{justifyContent:"space-between",children:[e.jsx(x,{children:"City"}),e.jsx(x,{children:d.locality})]}),e.jsxs(C,{justifyContent:"space-between",children:[e.jsx(x,{children:"State"}),e.jsx(x,{children:d.state})]}),e.jsxs(C,{justifyContent:"space-between",children:[e.jsx(x,{children:"Country"}),e.jsx(x,{children:d.country})]}),e.jsx(A,{my:"10px"})]})]},d.name)),e.jsxs(m,{py:"15px",px:"25px",children:[e.jsx(x,{textAlign:"left",fontSize:"20px",fontWeight:600,children:"Summary"}),e.jsx(A,{}),e.jsxs(C,{flexDirection:"column",gap:"5px",my:"20px",fontSize:"18px",children:[e.jsxs(C,{justifyContent:"space-between",children:[e.jsx(x,{children:"Quantity"}),e.jsx(x,{children:l.quantity})]}),e.jsxs(C,{justifyContent:"space-between",children:[e.jsx(x,{children:"Total"}),e.jsx(x,{children:l.total})]})]})]})]})},l.id)]},l.id)})})}const bt=()=>e.jsx(D,{overflowY:"auto",minH:"355px",maxH:"455px",children:e.jsx(ft,{})}),jt=ve.memo(bt);function yt(){const s=["Account Settings","Orders Placed","Notifications"];let t=P("brand.dark","white");return e.jsx(m,{as:"main",flex:3,d:"flex",flexDir:"column",justifyContent:"space-between",pt:5,rounded:"md",borderWidth:1,borderColor:"gray.200",style:{transform:"translateY(-100px)"},bg:P("gray.50","gray.800"),children:e.jsxs(ne,{children:[e.jsx(re,{px:5,children:s.map(a=>e.jsx(le,{mx:3,px:0,py:3,fontWeight:"semibold",color:"brand.cadet",borderBottomWidth:1,_active:{bg:"transparent"},_selected:{color:t,borderColor:"brand.blue"},children:a},a))}),e.jsxs(oe,{px:3,mt:5,children:[e.jsx(B,{children:e.jsx(ht,{})}),e.jsx(B,{children:e.jsx(jt,{})}),e.jsx(B,{children:e.jsx(pt,{})})]})]})})}function Mt(){return e.jsxs(e.Fragment,{children:[e.jsx(m,{marginTop:["70px","70px","70px","70px","70px"]}),e.jsxs(Se,{display:{base:"block",md:"flex"},maxW:"container.xl",py:10,children:[e.jsx(ut,{}),e.jsx(yt,{})]}),e.jsx(m,{marginTop:["-90px","-90px","-70px","-70px","-70px"]})]})}export{Mt as default};