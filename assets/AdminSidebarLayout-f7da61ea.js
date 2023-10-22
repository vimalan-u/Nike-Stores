import{b1 as D,j as e,v as S,w as M,ab as F,E as L,c as u,u as H,b as z,d as t,R as n,b2 as A,b3 as N,F as d,av as h,I as v,b4 as w,b5 as O,as as R,b6 as U,L as x,ad as g,ae as b,B as V,b7 as W,ag as p,ah as i,aJ as T,T as j,b8 as E,D as P,b9 as $,ba as y,bb as G,bc as J,bd as Q,be as q,bf as K}from"./index-0742fb5f.js";import X from"./Footer-cd943020.js";import{H as Y}from"./chunk-7OLJDQMT-c0c31518.js";import{I as C}from"./chunk-6QYXN73V-88fa7b53.js";import{A as Z}from"./chunk-V7PAE35Z-117942ed.js";import"./index.esm-fa2a5dcd.js";import"./chunk-JARCRF6W-8ebd8477.js";var k=o=>{const{className:a,...r}=o,s=D();return e.jsx(S.hr,{"aria-orientation":"horizontal",className:M("chakra-menu__divider",a),...r,__css:s.divider})};k.displayName="MenuDivider";function B(o){return F({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"}}]})(o)}const ee=[{name:"Dashboard",icon:J,to:"/admindashboard"},{name:"Products",icon:Q,to:"/adminallproducts"},{name:"Customers",icon:q,to:"/adminallusers"},{name:"View Users On Map",icon:K,to:"/adminviewmap"},{name:"User Dashboard",icon:B,to:"/"}],f=({onClose:o,...a})=>e.jsxs(t,{transition:"3s ease",bg:n("white","gray.900"),borderRight:"1px",borderRightColor:n("gray.900","gray.700"),w:{base:"full",md:60},pos:"fixed",h:"full",...a,children:[e.jsxs(d,{h:"20",alignItems:"center",mx:"8",justifyContent:"space-between",children:[e.jsx(t,{w:"80px",fontSize:"2xl",fontFamily:"monospace",fontWeight:"bold",children:e.jsx(h,{to:"/admindashboard",children:e.jsx(v,{src:w})})}),e.jsx(O,{display:{base:"flex",md:"none"},onClick:o})]}),ee.map(r=>e.jsx(h,{to:r.to,onClick:()=>o(),children:e.jsx(se,{icon:r.icon,name:r.to,children:r.name})},r.name))]}),se=({icon:o,name:a,children:r,...s})=>{let l=window.location.pathname.split("/")[2];return e.jsx(t,{style:{textDecoration:"none"},_focus:{boxShadow:"none"},children:e.jsxs(d,{align:"center",p:"4",mx:"4",borderRadius:"lg",role:"group",cursor:"pointer",_hover:{bg:"gray.700",color:"white"},bg:`/${l}`===a&&"gray.800",color:`/${l}`===a?"white":n("gray.900","white"),...s,children:[o&&e.jsx(R,{mr:"4",fontSize:"16",_groupHover:{color:"white"},as:o}),r]})})},oe=({onOpen:o,user:a,handleLogoutBtn:r,navigate:s,...l})=>e.jsxs(d,{children:[e.jsx(Y,{as:"h4",size:"md",pl:5,pt:8,borderBottom:"1px solid",borderBottomColor:n("gray.900","gray.700"),children:window.location.href.split("//")[1].split("/")[1].split("admin")[1].toUpperCase()}),e.jsxs(d,{ml:{base:0,lg:0},px:{base:4,lg:4},width:"100%",height:"20",alignItems:"center",bg:n("white","gray.900"),borderBottomWidth:"1px",borderBottomColor:n("gray.900","gray.700"),justifyContent:{base:"space-between",md:"flex-end"},...l,children:[e.jsx(C,{display:{base:"flex",md:"none"},onClick:o,variant:"outline","aria-label":"open menu",icon:e.jsx(U,{})}),e.jsx(t,{w:"80px",display:{base:"flex",md:"none"},fontSize:"2xl",fontFamily:"monospace",fontWeight:"bold",children:e.jsx(h,{to:"/",children:e.jsx(v,{src:w})})}),e.jsxs(x,{spacing:{base:"0",md:"6"},children:[e.jsxs(g,{children:[e.jsx(b,{as:V,rounded:"full",variant:"link",cursor:"pointer",minW:0,children:e.jsx(C,{size:"lg",variant:"ghost","aria-label":"open menu",icon:e.jsx(W,{})})}),e.jsxs(p,{bg:n("white","gray.900"),borderColor:n("gray.200","gray.700"),children:[e.jsx(i,{bgColor:"transparent",_hover:{bgColor:"gray.700",transition:"background 0.5s ease-out"},children:"New Orders : 29"}),e.jsx(i,{bgColor:"transparent",_hover:{bgColor:"gray.700",transition:"background 0.5s ease-out"},children:"Logged In Customers : 130"})]})]}),e.jsx(d,{alignItems:"center",children:e.jsxs(g,{children:[e.jsx(b,{py:2,transition:"all 0.3s",_focus:{boxShadow:"none"},children:e.jsxs(x,{children:[e.jsx(Z,{size:"sm"}),e.jsxs(T,{display:{base:"none",md:"flex"},alignItems:"flex-start",spacing:"1px",ml:"2",children:[e.jsx(j,{fontSize:"sm",children:a.firstName.charAt(0).toUpperCase()+a.firstName.slice(1)}),e.jsx(j,{fontSize:"xs",color:"gray.600",children:"Admin"})]}),e.jsx(t,{display:{base:"none",md:"flex"},children:e.jsx(E,{})})]})}),e.jsxs(p,{bg:n("white","gray.900"),borderColor:n("gray.200","gray.700"),children:[e.jsx(i,{bgColor:"transparent",_hover:{bgColor:"gray.700",transition:"background 0.5s ease-out"},onClick:()=>{s("/admindashboard")},children:"Dashboard"}),e.jsx(i,{bgColor:"transparent",_hover:{bgColor:"gray.700",transition:"background 0.5s ease-out"},onClick:()=>{s("/adminallproducts")},children:"Products"}),e.jsx(i,{bgColor:"transparent",_hover:{bgColor:"gray.700",transition:"background 0.5s ease-out"},onClick:()=>{s("/adminallusers")},children:"Customers"}),e.jsx(i,{bgColor:"transparent",_hover:{bgColor:"gray.700",transition:"background 0.5s ease-out"},onClick:()=>{s("/adminviewmap")},children:"View Users On Map"}),e.jsx(P,{}),e.jsx(i,{bgColor:"transparent",_hover:{bgColor:"gray.700",transition:"background 0.5s ease-out"},onClick:()=>{s("/")},icon:e.jsx(B,{}),children:"User Dashboard"}),e.jsx(k,{}),e.jsx(i,{onClick:r,icon:e.jsx($,{}),children:"Sign out"})]})]})})]})]})]}),ce=({children:o})=>{const{isOpen:a,onOpen:r,onClose:s}=L();u(c=>c.auth);const l=u(c=>c.auth.user)||"Admin",I=H(),m=z(),_=()=>{y("token"),y("user"),I(G()),m("/")};return e.jsxs(t,{minH:"100vh",bg:n("gray.100","gray.900"),children:[e.jsx(f,{onClose:s,display:{base:"none",lg:"block"}}),e.jsx(A,{isOpen:a,placement:"left",onClose:s,returnFocusOnClose:!1,onOverlayClick:s,size:"full",children:e.jsx(N,{children:e.jsx(f,{onClose:s})})}),e.jsx(oe,{onOpen:r,user:l,handleLogoutBtn:_,navigate:m}),e.jsxs(t,{ml:{base:0,lg:60},p:"4",minH:"100%",borderRadius:"13px",children:[e.jsx(t,{minH:"70vh",children:o}),e.jsx(t,{minH:"100%",children:e.jsx(X,{})})]})]})};export{ce as default};
