import{d as q,j as e,G as $,H as J,t as T,k as K,J as Q,p as Z,l as X,y as Y,L as j,I as E,a as w,u as F,K as L,M as z}from"./index-1cd1003c.js";import{G as f}from"./iconBase-2c83cde5.js";import{C as M}from"./chunk-FAWTVNS3-eb044d8b.js";import{T as d,B as u}from"./chunk-PULVB27S-47fa9406.js";import{M as e0,e as t0,f as n0,g as s0,u as o0,a as i0,c as r0,b as a0,d as l0}from"./chunk-JQL44AUU-76752f0a.js";import{g as D,w as I,T as c0}from"./chunk-ROURZMX4-aceee6dc.js";import{V as B}from"./chunk-NTCQBYKE-88dbd8e8.js";import{D as x}from"./chunk-W7WUSNWJ-4e6de22a.js";import{u as A}from"./useDispatch-195cc708.js";import{B as k}from"./chunk-UVUR7MCU-7735e366.js";import{b as x0}from"./index.esm-3493a697.js";import{B as d0,a as p0}from"./index.esm-6a74b6ab.js";import{a as u0}from"./index.esm-75d607a6.js";import{S as O,M as h0,a as m0,b as g0,c as h}from"./chunk-J5XKU7PD-f3d52801.js";import{F as m}from"./chunk-KRPLQIP4-baf2f9df.js";import{u as j0}from"./chunk-57I6FYPZ-c6c8e24f.js";import{I as f0}from"./chunk-QINAG4RG-a8daf8df.js";import"./index-f6e10ae1.js";import"./chunk-ZHMYA64R-4e34b124.js";import"./index-41c32337.js";import"./chunk-OCNORRQU-52aed4ce.js";var P={exit:{duration:.15,ease:c0.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},C0={exit:({direction:t,transition:s,transitionEnd:n,delay:o})=>{var i;const{exit:r}=D({direction:t});return{...r,transition:(i=s==null?void 0:s.exit)!=null?i:I.exit(P.exit,o),transitionEnd:n==null?void 0:n.exit}},enter:({direction:t,transitionEnd:s,transition:n,delay:o})=>{var i;const{enter:r}=D({direction:t});return{...r,transition:(i=n==null?void 0:n.enter)!=null?i:I.enter(P.enter,o),transitionEnd:s==null?void 0:s.enter}}},G=q.forwardRef(function(s,n){const{direction:o="right",style:i,unmountOnExit:r,in:l,className:a,transition:c,transitionEnd:p,delay:S,motionProps:y,...b}=s,C=D({direction:o}),H=Object.assign({position:"fixed"},C.position,i),V=r?l&&r:!0,N=l||r?"enter":"exit",_={transitionEnd:p,transition:c,direction:o,delay:S};return e.jsx($,{custom:_,children:V&&e.jsx(J.div,{...b,ref:n,initial:"exit",className:T("chakra-slide",a),animate:N,exit:"exit",custom:_,variants:C0,style:H,...y})})});G.displayName="Slide";var[v0,w0]=K(),M0={start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}};function k0(t,s){var n,o;if(t)return(o=(n=M0[t])==null?void 0:n[s])!=null?o:t}function L0(t){var s;const{isOpen:n,onClose:o,placement:i="right",children:r,...l}=t,a=Q(),c=(s=a.components)==null?void 0:s.Drawer,p=k0(i,a.direction);return e.jsx(v0,{value:{placement:p},children:e.jsx(e0,{isOpen:n,onClose:o,styleConfig:c,...l,children:r})})}var S0=Z(G),U=X((t,s)=>{const{className:n,children:o,motionProps:i,containerProps:r,...l}=t,{getDialogProps:a,getDialogContainerProps:c,isOpen:p}=t0(),S=a(l,s),y=c(r),b=T("chakra-modal__content",n),C=n0(),H={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...C.dialog},V={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...C.dialogContainer},{placement:N}=w0();return e.jsx(s0,{children:e.jsx(Z.div,{...y,className:"chakra-modal__content-container",__css:V,children:e.jsx(S0,{motionProps:i,direction:N,in:p,className:b,...S,__css:H,children:o})})})});U.displayName="DrawerContent";function y0(t){return f({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7.00488 7.99951V5.99951C7.00488 3.23809 9.24346 0.999512 12.0049 0.999512C14.7663 0.999512 17.0049 3.23809 17.0049 5.99951V7.99951H20.0049C20.5572 7.99951 21.0049 8.44723 21.0049 8.99951V20.9995C21.0049 21.5518 20.5572 21.9995 20.0049 21.9995H4.00488C3.4526 21.9995 3.00488 21.5518 3.00488 20.9995V8.99951C3.00488 8.44723 3.4526 7.99951 4.00488 7.99951H7.00488ZM7.00488 9.99951H5.00488V19.9995H19.0049V9.99951H17.0049V11.9995H15.0049V9.99951H9.00488V11.9995H7.00488V9.99951ZM9.00488 7.99951H15.0049V5.99951C15.0049 4.34266 13.6617 2.99951 12.0049 2.99951C10.348 2.99951 9.00488 4.34266 9.00488 5.99951V7.99951Z"}}]})(t)}function b0(t){return f({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"}}]})(t)}function H0(t){return f({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5.50045 20.0005C6.32888 20.0005 7.00045 20.672 7.00045 21.5005C7.00045 22.3289 6.32888 23.0005 5.50045 23.0005C4.67203 23.0005 4.00045 22.3289 4.00045 21.5005C4.00045 20.672 4.67203 20.0005 5.50045 20.0005ZM18.5005 20.0005C19.3289 20.0005 20.0005 20.672 20.0005 21.5005C20.0005 22.3289 19.3289 23.0005 18.5005 23.0005C17.672 23.0005 17.0005 22.3289 17.0005 21.5005C17.0005 20.672 17.672 20.0005 18.5005 20.0005ZM2.17203 1.75781L5.99981 5.58581V16.9998L20.0005 17.0005V19.0005H5.00045C4.44817 19.0005 4.00045 18.5527 4.00045 18.0005L3.99981 6.41381L0.757812 3.17203L2.17203 1.75781ZM16.0005 3.00045C16.5527 3.00045 17.0005 3.44817 17.0005 4.00045L16.9998 5.99981L19.9936 6.00045C20.5497 6.00045 21.0005 6.45612 21.0005 6.99585V15.0051C21.0005 15.5548 20.5505 16.0005 19.9936 16.0005H8.0073C7.45123 16.0005 7.00045 15.5448 7.00045 15.0051V6.99585C7.00045 6.44611 7.4504 6.00045 8.0073 6.00045L10.9998 5.99981L11.0005 4.00045C11.0005 3.44817 11.4482 3.00045 12.0005 3.00045H16.0005ZM9.99981 7.99981L9.00045 8.00045V14.0005L9.99981 13.9998V7.99981ZM15.9998 7.99981H11.9998V13.9998H15.9998V7.99981ZM19.0005 8.00045L17.9998 7.99981V13.9998L19.0005 14.0005V8.00045ZM15.0005 5.00045H13.0005V6.00045H15.0005V5.00045Z"}}]})(t)}const V0="/ecom-client/assets/Nike-logo-868b342b.png",v=({text:t,link:s,handlePath:n,name:o})=>{const{colorMode:i}=Y();return e.jsx(M,{h:"60px",cursor:"pointer",paddingX:"15px",_hover:{borderBottom:`2px solid ${i==="light"?"black":"white"}`},children:e.jsx(j,{onClick:n,to:s,name:o,children:t})})},g=({text:t,link:s,handlePath:n,name:o})=>e.jsx(d,{fontSize:"20px",fontWeight:500,children:e.jsx(j,{onClick:n,to:s,name:o,children:t})}),R=({iconName:t})=>e.jsx(E,{as:t,w:"28px",h:"28px",mr:"10px"});function N0(t){return f({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"}}]})(t)}function W(t){return f({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}},{tag:"polyline",attr:{points:"16 17 21 12 16 7"}},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"}}]})(t)}const D0=({handlePath:t})=>{const{isOpen:s,onOpen:n,onClose:o}=o0(),i=w(c=>c.auth.user)||"Admin",r=A(),l=F(),a=()=>{L("token"),L("user"),r(z()),o(),l("/")};return e.jsxs(e.Fragment,{children:[e.jsx(E,{w:"28px",h:"28px",mr:"10px",onClick:n,as:N0}),e.jsxs(L0,{isOpen:s,placement:"right",onClose:o,children:[e.jsx(i0,{}),e.jsxs(U,{children:[e.jsx(r0,{}),e.jsxs(a0,{children:["Hi ",i.firstName]}),e.jsx(x,{}),e.jsx(l0,{children:e.jsxs(B,{justify:"space-between",height:"100%",children:[e.jsxs(B,{gap:"18px",mt:"40px",onClick:o,align:"flex-start",children:[e.jsx(g,{handlePath:t,name:"/",text:"SALE",link:"/"}),e.jsx(x,{}),e.jsx(g,{handlePath:t,name:"newin",text:"NEW IN",link:"/newin"}),e.jsx(x,{}),e.jsx(g,{handlePath:t,name:"newin",text:"SUMMER SHOP",link:"/newin"}),e.jsx(x,{}),e.jsx(g,{handlePath:t,name:"summershop",text:"SUMMER SHOP",link:"/summershop"}),e.jsx(x,{}),e.jsx(g,{handlePath:t,name:"goingout",text:"GOING OUT",link:"/goingout"}),e.jsx(x,{})]}),e.jsx(k,{size:"lg",bg:"blue.400",color:"white",bgColor:"rgb(0,0,0)",_hover:{boxShadow:"xl"},width:"100%",mb:5,onClick:a,leftIcon:e.jsx(W,{}),children:"Logout"})]})})]})]})]})};function _0(){return e.jsx(e.Fragment,{})}const ee=()=>{const t=F(),{token:s}=w(a=>a.auth),{orderSummary:n}=w(a=>a.cart)||0,o=w(a=>a.auth.user)||"Test",i=A(),[r]=j0("(min-width: 720px)"),l=()=>{L("token"),L("user"),i(z()),t("/")};return e.jsxs(e.Fragment,{children:[e.jsxs(m,{h:"60px",py:"1",flexDirection:"row",px:"20px",children:[e.jsx(u,{w:"80px",children:e.jsx(j,{to:"/",children:e.jsx(f0,{src:V0})})}),e.jsx(O,{}),e.jsxs(u,{display:["none","none","flex","flex","flex"],children:[e.jsx(v,{name:"sale",text:"SALE",link:"/sale"}),e.jsx(v,{name:"newin",text:"NEW IN",link:"/newin"}),e.jsx(v,{name:"summershop",text:"SUMMER SHOP",link:"/summershop"}),e.jsx(v,{name:"goingout",text:"GOING OUT",link:"/goingout"})]}),e.jsx(O,{}),e.jsx(M,{position:"relative",mr:"10px",children:e.jsx(j,{to:"/favourite",children:e.jsx(R,{iconName:b0})})}),e.jsx(M,{position:"relative",mr:"10px",children:e.jsxs(j,{to:"/cart",children:[e.jsx(R,{iconName:y0}),e.jsx(u,{position:"absolute",top:0,right:-.4,borderRadius:"50%",width:"25px",height:"25px",textAlign:"center",zIndex:-1,bgGradient:"linear(to-l, #7928CA, #FF0080)",display:"flex",flexDirection:"column",alignContent:"center",justifyContent:"center",color:"white",opacity:.89,children:e.jsx(d,{children:n!=null&&n.quantity?n.quantity:"0"})})]})}),!r&&e.jsx(u,{display:["flex","flex","none","none","none"],children:e.jsx(M,{mr:"10px",children:s?e.jsx(D0,{handlePath:"handlePath"}):e.jsx(k,{size:"sm",bg:"transparent",_hover:{bg:"transparent"},transition:"all 0.3s",_focus:{boxShadow:"none"},borderRadius:10,children:e.jsxs(m,{flexDirection:"row",gap:"5px",children:[e.jsx(d,{onClick:()=>t("/login"),children:"Login"}),"|",e.jsx(d,{onClick:()=>t("/signup"),children:"Sign Up"})]})})})}),r&&e.jsx(m,{alignItems:"center",marginTop:"-10px",children:e.jsxs(h0,{children:[s?e.jsx(m0,{as:k,transition:"all 0.3s",_hover:{bg:"transparent"},_focus:{boxShadow:"none"},size:"sm",bg:"transparent",rightIcon:e.jsx(d0,{}),children:o.firstName}):e.jsx(k,{size:"sm",bg:"transparent",_hover:{bg:"transparent"},transition:"all 0.3s",_focus:{boxShadow:"none"},borderRadius:10,children:e.jsxs(m,{flexDirection:"row",gap:"5px",children:[e.jsx(d,{onClick:()=>t("/login"),children:"Login"}),"|",e.jsx(d,{onClick:()=>t("/signup"),children:"Sign Up"})]})}),e.jsx(g0,{zIndex:2,children:e.jsxs(m,{flexDirection:"column",gap:"5px",fontSize:"17px",children:[e.jsx(h,{onClick:()=>{t("/favourite")},icon:e.jsx(x0,{}),children:"Wishlist"}),e.jsx(h,{onClick:()=>{t("/orders")},icon:e.jsx(H0,{}),children:"Orders"}),e.jsx(_0,{}),e.jsx(h,{onClick:()=>{t("/cart")},icon:e.jsx(p0,{}),children:"Cart"}),e.jsx(h,{onClick:()=>{t("/userprofile")},icon:e.jsx(u0,{}),children:"User Profile"}),e.jsx(x,{}),e.jsx(h,{onClick:l,icon:e.jsx(W,{}),children:"Logout"})]})})]})})]}),e.jsx(u,{h:["10px","20px","30px","40px","40px"]})]})};export{ee as Navbar,ee as default};
