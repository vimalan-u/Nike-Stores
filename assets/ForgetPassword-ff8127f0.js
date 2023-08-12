import{e as M,r as c,n as te,H as ne,p as k,u as se,o as oe,j as e,f as ae,c as re,a as le,b as ie,d as ue,y as X,L as ce,J as q,D as de,K as pe,B as N}from"./index-22dedc4c.js";import{c as fe}from"./chunk-OCNORRQU-cf63a011.js";import{a as xe,g as ge,S as R,B as me}from"./chunk-ZHMYA64R-5d7361b6.js";import{u as he,F as Ce,a as Pe,I as ve}from"./chunk-6CVSDS6C-1e241d46.js";import{u as Ie}from"./useDispatch-5aade2e2.js";import{B as D,T as z}from"./chunk-PULVB27S-7e598229.js";import{F as je}from"./chunk-KRPLQIP4-22723e3a.js";import{H as ye}from"./chunk-7OLJDQMT-14b232cf.js";function be(n){const{value:a,defaultValue:d,onChange:r,shouldUpdate:p=(f,y)=>f!==y}=n,u=M(r),g=M(p),[x,I]=c.useState(d),m=a!==void 0,s=m?a:x,h=M(f=>{const b=typeof f=="function"?f(s):f;g(s,b)&&(m||I(b),u(b))},[m,u,s,g]);return[s,h]}var[we,Ge,Fe,Ee]=fe(),[Se,Ae]=te({name:"PinInputContext",errorMessage:"usePinInputContext: `context` is undefined. Seems you forgot to all pin input fields within `<PinInput />`"}),O=n=>n==null?void 0:n.split("");function J(n,a){return(a==="alphanumeric"?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(n)}function ke(n={}){const{autoFocus:a,value:d,defaultValue:r,onChange:p,onComplete:u,placeholder:g="○",manageFocus:x=!0,otp:I=!1,id:m,isDisabled:s,isInvalid:h,type:f="number",mask:y}=n,b=c.useId(),_=m??`pin-input-${b}`,l=Fe(),[H,T]=c.useState(!0),[U,L]=c.useState(-1),[j,C]=be({defaultValue:O(r)||[],value:O(d),onChange:o=>p==null?void 0:p(o.join(""))});c.useEffect(()=>{if(a){const o=l.first();o&&requestAnimationFrame(()=>{o.node.focus()})}},[l]);const $=c.useCallback(o=>{if(!H||!x)return;const t=l.next(o,!1);t&&requestAnimationFrame(()=>{t.node.focus()})},[l,H,x]),w=c.useCallback((o,t,i=!0)=>{const P=[...j];P[t]=o,C(P),o!==""&&P.length===l.count()&&P.every(E=>E!=null&&E!=="")?u==null||u(P.join("")):i&&$(t)},[j,C,$,u,l]),Z=c.useCallback(()=>{var o;const t=Array(l.count()).fill("");C(t);const i=l.first();(o=i==null?void 0:i.node)==null||o.focus()},[l,C]),G=c.useCallback((o,t)=>{let i=t;return(o==null?void 0:o.length)>0&&(o[0]===t.charAt(0)?i=t.charAt(1):o[0]===t.charAt(1)&&(i=t.charAt(0))),i},[]);return{getInputProps:c.useCallback(o=>{const{index:t,...i}=o,P=S=>{const v=S.target.value,A=j[t],V=G(A,v);if(V===""){w("",t);return}if(v.length>2){if(J(v,f)){const B=v.split("").filter((_e,ee)=>ee<l.count());C(B),B.length===l.count()&&(u==null||u(B.join("")))}}else J(V,f)&&w(V,t),T(!0)},K=S=>{var v;if(S.key==="Backspace"&&x)if(S.target.value===""){const A=l.prev(t,!1);A&&(w("",t-1,!1),(v=A.node)==null||v.focus(),T(!0))}else T(!1)},E=()=>{L(t)},Q=()=>{L(-1)},Y=U===t;return{"aria-label":"Please enter your pin code",inputMode:f==="number"?"numeric":"text",type:y?"password":f==="number"?"tel":"text",...i,id:`${_}-${t}`,disabled:s,"aria-invalid":ne(h),onChange:k(i.onChange,P),onKeyDown:k(i.onKeyDown,K),onFocus:k(i.onFocus,E),onBlur:k(i.onBlur,Q),value:j[t]||"",autoComplete:I?"one-time-code":"off",placeholder:Y?"":g}},[l,U,G,_,s,y,h,x,u,I,g,w,C,f,j]),id:_,descendants:l,values:j,setValue:w,setValues:C,clear:Z}}function Ne(n={},a=null){const{getInputProps:d}=Ae(),{index:r,register:p}=Ee();return d({...n,ref:xe(p,a),index:r})}function W(n){const a=se("PinInput",n),{children:d,...r}=oe(n),{descendants:p,...u}=ke(r),g=ge(d).map(x=>c.cloneElement(x,{__css:a}));return e.jsx(we,{value:p,children:e.jsx(Se,{value:u,children:g})})}W.displayName="PinInput";var F=ae(function(a,d){const r=Ne(a,d);return e.jsx(re.input,{...r,className:le("chakra-pin-input",a.className)})});F.displayName="PinInputField";function Ke(){const n=he(),a=Ie(),d=ie(),[r,p]=c.useState(""),[u,g]=c.useState(null),x=ue(s=>s.auth.resetemail),I=s=>{console.log(s),g(s)},m=async()=>{let s=q.get("otp");if(console.log(s),s===u)try{let h=await de.post("/user/resetpassword",{data:{email:x,password:r}});a(pe()),N(n,h.data,"success"),q.remove("otp"),d("/login")}catch(h){N(n,h.response.data,"error")}else r===""?N(n,"Enter New Password","error"):N(n,"OTP Is Incorrect","error")};return e.jsxs(e.Fragment,{children:[e.jsx(D,{marginTop:["-10px","-20px","-30px","-40px","-40px"]}),e.jsx(je,{minH:"92.5vh",align:"center",justify:"center",bg:X("gray.50","gray.800"),children:e.jsxs(R,{spacing:8,mx:"auto",maxW:"lg",py:12,px:6,children:[e.jsxs(R,{align:"center",children:[e.jsx(ye,{fontSize:"4xl",children:"Enter New Password"}),e.jsx(z,{fontSize:"lg",color:"gray.600",children:"Please enter the OTP that was sent to your email."})]}),e.jsx(D,{rounded:"lg",bg:X("white","gray.700"),boxShadow:"lg",p:8,children:e.jsxs(R,{spacing:4,children:[e.jsxs(Ce,{id:"password",isRequired:!0,children:[e.jsx(Pe,{children:"Enter New Password"}),e.jsx(ve,{value:r,onChange:s=>p(s.target.value),type:"text"})]}),e.jsxs(R,{direction:"row",spacing:10,children:[e.jsxs(W,{otp:!0,onChange:s=>I(s),children:[e.jsx(F,{}),e.jsx(F,{}),e.jsx(F,{}),e.jsx(F,{})]}),e.jsx(me,{bg:"blue.400",color:"white",bgColor:"rgb(0,0,0)",_hover:{boxShadow:"xl"},onClick:m,children:"Submit"})]}),e.jsxs(D,{justifyContent:"center",alignItems:"center",display:"flex",mt:2,children:["Return to"," ",e.jsx(ce,{to:"/login",children:e.jsx(z,{ml:1,textDecorationLine:"underline",color:"blue.400",children:"login"})})]})]})})]})}),e.jsx(D,{marginTop:["-10px","-20px","-30px","-40px","-40px"]})]})}export{Ke as default};
