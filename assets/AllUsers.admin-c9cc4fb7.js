import{q as _,t as l,az as p,a8 as g,j as e,v as n,w as b,h as u,c as T,k as N,R as j}from"./index-2da8025d.js";import{E as w}from"./Error-ca7c5364.js";import{L as S}from"./Loading-6d56e416.js";import"./chunk-5MKCW436-6db5b3ac.js";var[k,x]=_({name:"TableStylesContext",errorMessage:`useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `}),f=l((a,t)=>{const s=p("Table",a),{className:o,layout:i,...c}=g(a);return e.jsx(k,{value:s,children:e.jsx(n.table,{ref:t,__css:{tableLayout:i,...s.table},className:b("chakra-table",o),...c})})});f.displayName="Table";var E=l((a,t)=>{const s=x();return e.jsx(n.thead,{...a,ref:t,__css:s.thead})}),y=l((a,t)=>{const s=x();return e.jsx(n.tr,{...a,ref:t,__css:s.tr})}),A=l((a,t)=>{var s;const{overflow:o,overflowX:i,className:c,...m}=a;return e.jsx(n.div,{ref:t,className:b("chakra-table__container",c),...m,__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:(s=o??i)!=null?s:"auto",overflowY:"hidden",maxWidth:"100%"}})}),C=l((a,t)=>{const s=x();return e.jsx(n.tbody,{...a,ref:t,__css:s.tbody})}),d=l(({isNumeric:a,...t},s)=>{const o=x();return e.jsx(n.td,{...t,ref:s,__css:o.td,"data-is-numeric":a})}),h=l(({isNumeric:a,...t},s)=>{const o=x();return e.jsx(n.th,{...t,ref:s,__css:o.th,"data-is-numeric":a})});function U(){const[a,t]=u.useState([]),[s,o]=u.useState(!0),[i,c]=u.useState(null),m=T(r=>r.auth.token);u.useEffect(()=>{v()},[]);async function v(){try{let r=await N("/admin/getusers",{headers:{Authorization:`Bearer ${m}`}});console.log(r),t(r.data),o(!1)}catch(r){console.error(r),c(r),o(!1)}}return e.jsxs(A,{children:[s&&e.jsx(S,{})," ",i&&e.jsx(w,{}),!s&&!i&&e.jsxs(f,{variant:"striped",bg:j("white","gray.900"),borderColor:j("gray.200","gray.700"),children:[e.jsx(E,{children:e.jsxs(y,{children:[e.jsx(h,{children:"ID"}),e.jsx(h,{children:"Email"}),e.jsx(h,{children:"First Name"}),e.jsx(h,{children:"Last Name"}),e.jsx(h,{children:"Is Admin"})]})}),e.jsx(C,{children:a.map(r=>e.jsxs(y,{children:[e.jsx(d,{children:r.id}),e.jsx(d,{children:r.email}),e.jsx(d,{children:r.firstName?r.firstName:"NA"}),e.jsx(d,{children:r.lastName?r.lastName:"NA"}),e.jsx(d,{children:r.isAdmin?"Yes":"No"})]},r.id))})]})]})}export{U as default};