import{d as X,j as e,F as Y,G as e0,q as R,i as t0,H as n0,m as F,k as i0,x as o0,L as C,I as T,a as v,u as Z,J as b,K as A}from"./index-5de797ab.js";import{G as g}from"./iconBase-865f2762.js";import{C as M}from"./chunk-FAWTVNS3-9e953cf8.js";import{T as S,B as m}from"./chunk-PULVB27S-de5442b3.js";import{a as s0,b as E}from"./index.esm-304a8df3.js";import{b as U}from"./index.esm-e279ee11.js";import{B as G,a as r0}from"./index.esm-487a3f35.js";import{M as a0,e as l0,f as c0,g as x0,u as d0,a as h0,c as p0,b as u0,d as g0}from"./chunk-JQL44AUU-b0a2336c.js";import{g as D,w as _,T as m0}from"./chunk-6NHXDBFO-987cde81.js";import{V as k}from"./chunk-NTCQBYKE-26758253.js";import{D as c}from"./chunk-W7WUSNWJ-772d8832.js";import{F as f}from"./chunk-KRPLQIP4-532aff67.js";import{u as W}from"./useDispatch-18a1f73c.js";import{B as x}from"./chunk-UVUR7MCU-c0a8bc7f.js";import{S as O,M as j0,a as f0,b as C0,c as u}from"./chunk-J5XKU7PD-c633ac0c.js";import{u as v0}from"./chunk-57I6FYPZ-33c9e7ce.js";import{I as w0}from"./chunk-QINAG4RG-d1de6e2e.js";import"./chunk-ROURZMX4-c7157920.js";import"./index-30506c69.js";import"./chunk-ZHMYA64R-9693e6ca.js";import"./index-68668712.js";import"./chunk-OCNORRQU-bbdd0473.js";var P={exit:{duration:.15,ease:m0.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},k0={exit:({direction:t,transition:i,transitionEnd:n,delay:o})=>{var a;const{exit:s}=D({direction:t});return{...s,transition:(a=i==null?void 0:i.exit)!=null?a:_.exit(P.exit,o),transitionEnd:n==null?void 0:n.exit}},enter:({direction:t,transitionEnd:i,transition:n,delay:o})=>{var a;const{enter:s}=D({direction:t});return{...s,transition:(a=n==null?void 0:n.enter)!=null?a:_.enter(P.enter,o),transitionEnd:i==null?void 0:i.enter}}},q=X.forwardRef(function(i,n){const{direction:o="right",style:a,unmountOnExit:s,in:r,className:l,transition:d,transitionEnd:h,delay:p,motionProps:y,...V}=i,w=D({direction:o}),H=Object.assign({position:"fixed"},w.position,a),I=s?r&&s:!0,N=r||s?"enter":"exit",B={transitionEnd:h,transition:d,direction:o,delay:p};return e.jsx(Y,{custom:B,children:I&&e.jsx(e0.div,{...V,ref:n,initial:"exit",className:R("chakra-slide",l),animate:N,exit:"exit",custom:B,variants:k0,style:H,...y})})});q.displayName="Slide";var[L0,M0]=t0(),S0={start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}};function b0(t,i){var n,o;if(t)return(o=(n=S0[t])==null?void 0:n[i])!=null?o:t}function y0(t){var i;const{isOpen:n,onClose:o,placement:a="right",children:s,...r}=t,l=n0(),d=(i=l.components)==null?void 0:i.Drawer,h=b0(a,l.direction);return e.jsx(L0,{value:{placement:h},children:e.jsx(a0,{isOpen:n,onClose:o,styleConfig:d,...r,children:s})})}var V0=F(q),$=i0((t,i)=>{const{className:n,children:o,motionProps:a,containerProps:s,...r}=t,{getDialogProps:l,getDialogContainerProps:d,isOpen:h}=l0(),p=l(r,i),y=d(s),V=R("chakra-modal__content",n),w=c0(),H={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...w.dialog},I={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...w.dialogContainer},{placement:N}=M0();return e.jsx(x0,{children:e.jsx(F.div,{...y,className:"chakra-modal__content-container",__css:I,children:e.jsx(V0,{motionProps:a,direction:N,in:h,className:V,...p,__css:H,children:o})})})});$.displayName="DrawerContent";function H0(t){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7.00488 7.99951V5.99951C7.00488 3.23809 9.24346 0.999512 12.0049 0.999512C14.7663 0.999512 17.0049 3.23809 17.0049 5.99951V7.99951H20.0049C20.5572 7.99951 21.0049 8.44723 21.0049 8.99951V20.9995C21.0049 21.5518 20.5572 21.9995 20.0049 21.9995H4.00488C3.4526 21.9995 3.00488 21.5518 3.00488 20.9995V8.99951C3.00488 8.44723 3.4526 7.99951 4.00488 7.99951H7.00488ZM7.00488 9.99951H5.00488V19.9995H19.0049V9.99951H17.0049V11.9995H15.0049V9.99951H9.00488V11.9995H7.00488V9.99951ZM9.00488 7.99951H15.0049V5.99951C15.0049 4.34266 13.6617 2.99951 12.0049 2.99951C10.348 2.99951 9.00488 4.34266 9.00488 5.99951V7.99951Z"}}]})(t)}function I0(t){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"}}]})(t)}function J(t){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5.50045 20.0005C6.32888 20.0005 7.00045 20.672 7.00045 21.5005C7.00045 22.3289 6.32888 23.0005 5.50045 23.0005C4.67203 23.0005 4.00045 22.3289 4.00045 21.5005C4.00045 20.672 4.67203 20.0005 5.50045 20.0005ZM18.5005 20.0005C19.3289 20.0005 20.0005 20.672 20.0005 21.5005C20.0005 22.3289 19.3289 23.0005 18.5005 23.0005C17.672 23.0005 17.0005 22.3289 17.0005 21.5005C17.0005 20.672 17.672 20.0005 18.5005 20.0005ZM2.17203 1.75781L5.99981 5.58581V16.9998L20.0005 17.0005V19.0005H5.00045C4.44817 19.0005 4.00045 18.5527 4.00045 18.0005L3.99981 6.41381L0.757812 3.17203L2.17203 1.75781ZM16.0005 3.00045C16.5527 3.00045 17.0005 3.44817 17.0005 4.00045L16.9998 5.99981L19.9936 6.00045C20.5497 6.00045 21.0005 6.45612 21.0005 6.99585V15.0051C21.0005 15.5548 20.5505 16.0005 19.9936 16.0005H8.0073C7.45123 16.0005 7.00045 15.5448 7.00045 15.0051V6.99585C7.00045 6.44611 7.4504 6.00045 8.0073 6.00045L10.9998 5.99981L11.0005 4.00045C11.0005 3.44817 11.4482 3.00045 12.0005 3.00045H16.0005ZM9.99981 7.99981L9.00045 8.00045V14.0005L9.99981 13.9998V7.99981ZM15.9998 7.99981H11.9998V13.9998H15.9998V7.99981ZM19.0005 8.00045L17.9998 7.99981V13.9998L19.0005 14.0005V8.00045ZM15.0005 5.00045H13.0005V6.00045H15.0005V5.00045Z"}}]})(t)}const N0="/ecom-client/assets/Nike-logo-868b342b.png",L=({text:t,link:i,name:n})=>{const{colorMode:o}=o0();return e.jsx(M,{h:"60px",cursor:"pointer",paddingX:"15px",_hover:{borderBottom:`2px solid ${o==="light"?"black":"white"}`},children:e.jsx(C,{to:i,name:n,children:t})})},j=({text:t,link:i,name:n})=>e.jsx(S,{fontSize:"20px",fontWeight:500,children:e.jsx(C,{to:i,name:n,children:t})}),z=({iconName:t})=>e.jsx(T,{as:t,w:"28px",h:"28px",mr:"10px"});function D0(t){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"}}]})(t)}function K(t){return g({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}},{tag:"polyline",attr:{points:"16 17 21 12 16 7"}},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"}}]})(t)}function B0(t){return g({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.02 3.77l.01-.01.99.99V2.5l-.5-.5h-9l-.51.5v.493L2 3v10.29l.36.46 5 1.72L8 15v-1h3.52l.5-.5v-2.25l-1 1V13H8V4.71l-.33-.46L4.036 3h6.984v.77zM7 14.28l-4-1.34V3.72l4 1.34v9.22zm3.09-6.75h4.97v1h-4.93l1.59 1.6-.71.7-2.47-2.46v-.71l2.49-2.48.7.7-1.64 1.65z"}}]})(t)}function Q(){return e.jsx(e.Fragment,{})}const _0=()=>{const{isOpen:t,onOpen:i,onClose:n}=d0(),o=v(p=>p.auth.user)||"Admin",{token:a}=v(p=>p.auth),s=W(),r=Z(),l=()=>{b("token"),b("user"),s(A()),n(),r("/")},d=()=>{n(),r("/login")},h=()=>{n(),r("signup")};return e.jsxs(e.Fragment,{children:[e.jsx(T,{w:"28px",h:"28px",mr:"10px",onClick:i,as:D0}),e.jsxs(y0,{isOpen:t,placement:"right",onClose:n,children:[e.jsx(h0,{}),e.jsxs($,{children:[e.jsx(p0,{}),e.jsxs(u0,{children:["Hi ",o==null?void 0:o.firstName]}),e.jsx(c,{}),e.jsx(g0,{children:e.jsxs(k,{justify:"space-between",height:"100%",children:[e.jsxs(k,{gap:"18px",mt:"40px",onClick:n,align:"flex-start",children:[e.jsx(j,{name:"/",text:"SALE",link:"/sale"}),e.jsx(c,{}),e.jsx(j,{name:"newin",text:"NEW IN",link:"/newin"}),e.jsx(c,{}),e.jsx(j,{name:"newin",text:"SUMMER SHOP",link:"/newin"}),e.jsx(c,{}),e.jsx(j,{name:"summershop",text:"SUMMER SHOP",link:"/summershop"}),e.jsx(c,{}),e.jsx(j,{name:"goingout",text:"GOING OUT",link:"/goingout"}),e.jsx(c,{})]}),a?e.jsxs(k,{width:"100%",children:[e.jsxs(f,{width:"100%",flexDirection:"column",gap:"5px",fontSize:"17px",mb:3,children:[e.jsx(c,{}),e.jsx(x,{onClick:()=>{r("/favourite")},leftIcon:e.jsx(U,{}),children:"Wishlist"}),e.jsx(x,{onClick:()=>{r("/orders")},leftIcon:e.jsx(J,{}),children:"Orders"}),e.jsx(Q,{}),e.jsx(x,{onClick:()=>{r("/cart")},leftIcon:e.jsx(G,{}),children:"Cart"}),e.jsx(x,{onClick:()=>{r("/userprofile")},leftIcon:e.jsx(E,{}),children:"User Profile"}),e.jsx(c,{})]}),e.jsx(x,{size:"lg",bg:"blue.400",color:"white",bgColor:"rgb(0,0,0)",_hover:{boxShadow:"xl"},width:"100%",mb:5,onClick:l,leftIcon:e.jsx(K,{}),children:"Logout"}),e.jsx(c,{})]}):e.jsxs(k,{width:"100%",children:[e.jsx(x,{size:"lg",bg:"blue.400",color:"white",bgColor:"rgb(0,0,0)",_hover:{boxShadow:"xl"},width:"100%",onClick:d,leftIcon:e.jsx(s0,{}),children:"Login"}),e.jsx(x,{size:"lg",bg:"blue.400",color:"white",bgColor:"rgb(0,0,0)",_hover:{boxShadow:"xl"},width:"100%",mb:5,onClick:h,leftIcon:e.jsx(B0,{}),children:"Sign Up"})]})]})})]})]})]})},ie=()=>{const t=Z(),{token:i}=v(l=>l.auth),{orderSummary:n}=v(l=>l.cart)||0,o=v(l=>l.auth.user)||"Test",a=W(),[s]=v0("(min-width: 720px)"),r=()=>{b("token"),b("user"),a(A()),t("/")};return e.jsxs(e.Fragment,{children:[e.jsxs(f,{h:"60px",py:"1",flexDirection:"row",px:"20px",children:[e.jsx(m,{w:"80px",children:e.jsx(C,{to:"/",children:e.jsx(w0,{src:N0})})}),e.jsx(O,{}),e.jsxs(m,{display:["none","none","flex","flex","flex"],children:[e.jsx(L,{name:"sale",text:"SALE",link:"/sale"}),e.jsx(L,{name:"newin",text:"NEW IN",link:"/newin"}),e.jsx(L,{name:"summershop",text:"SUMMER SHOP",link:"/summershop"}),e.jsx(L,{name:"goingout",text:"GOING OUT",link:"/goingout"})]}),e.jsx(O,{}),e.jsx(M,{position:"relative",mr:"10px",children:e.jsx(C,{to:"/favourite",children:e.jsx(z,{iconName:I0})})}),e.jsx(M,{position:"relative",mr:"10px",children:e.jsxs(C,{to:"/cart",children:[e.jsx(z,{iconName:H0}),e.jsx(m,{position:"absolute",top:0,right:-.4,borderRadius:"50%",width:"25px",height:"25px",textAlign:"center",zIndex:-1,bgGradient:"linear(to-l, #7928CA, #FF0080)",display:"flex",flexDirection:"column",alignContent:"center",justifyContent:"center",color:"white",opacity:.89,children:e.jsx(S,{children:n!=null&&n.quantity?n.quantity:"0"})})]})}),!s&&e.jsx(m,{display:["flex","flex","none","none","none"],children:e.jsx(M,{mr:"10px",children:e.jsx(_0,{})})}),s&&e.jsx(f,{alignItems:"center",marginTop:"-10px",children:e.jsxs(j0,{children:[i?e.jsx(f0,{as:x,transition:"all 0.3s",_hover:{bg:"transparent"},_focus:{boxShadow:"none"},size:"sm",bg:"transparent",rightIcon:e.jsx(r0,{}),children:o.firstName}):e.jsx(x,{size:"sm",bg:"transparent",_hover:{bg:"transparent"},transition:"all 0.3s",_focus:{boxShadow:"none"},borderRadius:10,children:e.jsxs(f,{flexDirection:"row",gap:"5px",children:[e.jsx(S,{onClick:()=>t("/login"),children:"Login"}),"|",e.jsx(S,{onClick:()=>t("/signup"),children:"Sign Up"})]})}),e.jsx(C0,{zIndex:2,children:e.jsxs(f,{flexDirection:"column",gap:"5px",fontSize:"17px",children:[e.jsx(u,{onClick:()=>{t("/favourite")},icon:e.jsx(U,{}),children:"Wishlist"}),e.jsx(u,{onClick:()=>{t("/orders")},icon:e.jsx(J,{}),children:"Orders"}),e.jsx(Q,{}),e.jsx(u,{onClick:()=>{t("/cart")},icon:e.jsx(G,{}),children:"Cart"}),e.jsx(u,{onClick:()=>{t("/userprofile")},icon:e.jsx(E,{}),children:"User Profile"}),e.jsx(c,{}),i?e.jsx(u,{onClick:r,icon:e.jsx(K,{}),children:"Logout"}):e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>t("/login"),children:"Login"}),e.jsx(u,{onClick:()=>t("/signup"),children:"Sign Up"})]})]})})]})})]}),e.jsx(m,{h:["10px","20px","30px","40px","40px"]})]})};export{ie as Navbar,ie as default};
