import{b4 as z,j as e,v as A,w as B,ai as f,K as I,c as x,u as S,b as _,d as i,W as t,b5 as M,b6 as F,F as l,aB as u,I as y,b7 as C,b8 as D,a9 as P,b9 as L,Q as h,ba as N,ak as H,al as O,aN as R,T as b,bb as U,an as W,ao as r,bc as G,bd as g,be as T,bf as V,bg as Q,bh as E,bi as K}from"./index-9156bbe0.js";import{I as p}from"./chunk-6QYXN73V-21f4386c.js";import{A as q}from"./chunk-V7PAE35Z-ce9fec6f.js";var v=s=>{const{className:n,...o}=s,a=z();return e.jsx(A.hr,{"aria-orientation":"horizontal",className:B("chakra-menu__divider",n),...o,__css:a.divider})};v.displayName="MenuDivider";function J(s){return f({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M404.7 79.78h-2.8c-7.5.26-15.8 1.73-24.8 4.3-18 5.16-38.4 14.56-59.3 25.78-41.9 22.4-85.8 52-121.5 68.6-26.4 12.4-59.3 20.4-89.8 27.5-30.5 7.1-58.95 13.4-74.36 20.6-7.13 3.4-10.9 6.9-12.71 9.9-1.8 2.9-2.1 5.2-1.44 8.4 1.32 6.4 8.57 15.4 18.49 21.9l3.29 2.1c162.63-2.3 289.43-13.7 387.73-52.6 2.1-17.6 6.7-34.7 16.5-48.5v-.1l.1-.1c24.5-32.2 8.9-72.58-22.4-84.89-5-1.95-10.7-2.91-17-2.93zm21.9 185.12c-44.2 25.1-103.8 37-169.2 41.2-68.7 4.4-143.7.1-213.52-7.8l1.89 14c31.19 3.2 98.53 11.8 172.83 11.5 77.2-.3 159.6-11.3 208.6-46.2-.2-4.1-.4-8.3-.6-12.7zm7.1 30.2c-46.9 31.5-113.8 42.9-179.9 45.8 44.7 39 89.3 55.1 127.3 59.1 45.2 4.8 81.5-8.7 94.8-19.8 13-10.8 17.5-19.5 18.3-26.2.7-6.8-2-13.3-8.2-20.5-11.3-13.4-33.5-26.4-52.3-38.4z"}}]})(s)}function X(s){return f({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 29.816l-231 154v106.368l231-154 231 154V183.816zm0 128.043L105 259.783v90.283l151-101.925 151 101.925v-90.283zm0 112l-87 58.725v67.6l87-58 87 58v-67.6zm0 89.957l-87 58v64.368l87-58 87 58v-64.368z"}}]})(s)}const Y=[{name:"Dashboard",icon:V,to:"/admindashboard"},{name:"Profile",icon:J,to:"/adminprofile"},{name:"All Products",icon:Q,to:"/adminallproducts"},{name:"Add Products",icon:E,to:"/adminaddproducts"},{name:"Update Product",icon:X,to:"/adminaupdateproduct"},{name:"All Users",icon:K,to:"/adminallusers"}],j=({onClose:s,...n})=>e.jsxs(i,{transition:"3s ease",bg:t("white","gray.900"),borderRight:"1px",borderRightColor:t("gray.200","gray.700"),w:{base:"full",md:60},pos:"fixed",h:"full",...n,children:[e.jsxs(l,{h:"20",alignItems:"center",mx:"8",justifyContent:"space-between",children:[e.jsx(i,{w:"80px",fontSize:"2xl",fontFamily:"monospace",fontWeight:"bold",children:e.jsx(u,{to:"/admindashboard",children:e.jsx(y,{src:C})})}),e.jsx(D,{display:{base:"flex",md:"none"},onClick:s})]}),Y.map(o=>e.jsx(u,{to:o.to,children:e.jsx(Z,{icon:o.icon,children:o.name})},o.name))]}),Z=({icon:s,children:n,...o})=>e.jsx(i,{style:{textDecoration:"none"},_focus:{boxShadow:"none"},children:e.jsxs(l,{align:"center",p:"4",mx:"4",borderRadius:"lg",role:"group",cursor:"pointer",_hover:{bg:"cyan.400",color:"white"},...o,children:[s&&e.jsx(P,{mr:"4",fontSize:"16",_groupHover:{color:"white"},as:s}),n]})}),$=({onOpen:s,user:n,handleLogoutBtn:o,navigate:a,...d})=>e.jsxs(l,{ml:{base:0,md:60},px:{base:4,md:4},height:"20",alignItems:"center",bg:t("white","gray.900"),borderBottomWidth:"1px",borderBottomColor:t("gray.200","gray.700"),justifyContent:{base:"space-between",md:"flex-end"},...d,children:[e.jsx(p,{display:{base:"flex",md:"none"},onClick:s,variant:"outline","aria-label":"open menu",icon:e.jsx(L,{})}),e.jsx(i,{w:"80px",display:{base:"flex",md:"none"},fontSize:"2xl",fontFamily:"monospace",fontWeight:"bold",children:e.jsx(u,{to:"/",children:e.jsx(y,{src:C})})}),e.jsxs(h,{spacing:{base:"0",md:"6"},children:[e.jsx(p,{size:"lg",variant:"ghost","aria-label":"open menu",icon:e.jsx(N,{})}),e.jsx(l,{alignItems:"center",children:e.jsxs(H,{children:[e.jsx(O,{py:2,transition:"all 0.3s",_focus:{boxShadow:"none"},children:e.jsxs(h,{children:[e.jsx(q,{size:"sm"}),e.jsxs(R,{display:{base:"none",md:"flex"},alignItems:"flex-start",spacing:"1px",ml:"2",children:[e.jsxs(b,{fontSize:"sm",children:[" ",n.firstName]}),e.jsx(b,{fontSize:"xs",color:"gray.600",children:"Admin"})]}),e.jsx(i,{display:{base:"none",md:"flex"},children:e.jsx(U,{})})]})}),e.jsxs(W,{bg:t("white","gray.900"),borderColor:t("gray.200","gray.700"),children:[e.jsx(r,{bgColor:"transparent",_hover:{bgColor:"gray.700",transition:"background 0.5s ease-out"},onClick:()=>{a("/admindashboard")},children:"Dashboard"}),e.jsx(r,{bgColor:"transparent",_hover:{bgColor:"gray.700",transition:"background 0.5s ease-out"},onClick:()=>{a("/adminprofile")},children:"Profile"}),e.jsx(r,{bgColor:"transparent",_hover:{bgColor:"gray.700",transition:"background 0.5s ease-out"},onClick:()=>{a("/adminallproducts")},children:"All Products"}),e.jsx(r,{bgColor:"transparent",_hover:{bgColor:"gray.700",transition:"background 0.5s ease-out"},onClick:()=>{a("/adminaddproducts")},children:"Add Products"}),e.jsx(r,{bgColor:"transparent",_hover:{bgColor:"gray.700",transition:"background 0.5s ease-out"},onClick:()=>{a("/adminaupdateproduct")},children:"Update Product"}),e.jsx(r,{bgColor:"transparent",_hover:{bgColor:"gray.700",transition:"background 0.5s ease-out"},onClick:()=>{a("/adminallusers")},children:"All Users"}),e.jsx(v,{}),e.jsx(r,{onClick:o,icon:e.jsx(G,{}),children:"Sign out"})]})]})})]})]}),oe=({children:s})=>{const{isOpen:n,onOpen:o,onClose:a}=I();x(c=>c.auth);const d=x(c=>c.auth.user)||"Admin",k=S(),m=_(),w=()=>{g("token"),g("user"),k(T()),m("/")};return e.jsxs(i,{minH:"100vh",bg:t("gray.100","gray.900"),children:[e.jsx(j,{onClose:a,display:{base:"none",md:"block"}}),e.jsx(M,{isOpen:n,placement:"left",onClose:a,returnFocusOnClose:!1,onOverlayClick:a,size:"full",children:e.jsx(F,{children:e.jsx(j,{onClose:a})})}),e.jsx($,{onOpen:o,user:d,handleLogoutBtn:w,navigate:m}),e.jsx(i,{ml:{base:0,md:60},p:"4",children:s})]})};export{oe as default};