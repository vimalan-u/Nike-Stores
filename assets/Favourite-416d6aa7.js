import{u as S,a as l,j as e,A as u,n as F,B as C,C as j,s as h,D as E,d as b}from"./index-1cd1003c.js";import{u as k}from"./chunk-BFUVSDI7-10168ca0.js";import{u as g}from"./useDispatch-195cc708.js";import{F as f}from"./chunk-KRPLQIP4-baf2f9df.js";import{B as t,T as s}from"./chunk-PULVB27S-47fa9406.js";import{I as z}from"./chunk-QINAG4RG-a8daf8df.js";import{B}from"./chunk-UVUR7MCU-7735e366.js";import{L as D,E as R}from"./Error-570266ac.js";import{C as T}from"./chunk-FAWTVNS3-eb044d8b.js";import"./index-f6e10ae1.js";import"./chunk-5MKCW436-a4b4bdf3.js";const I=({id:n,title:o,description:p,price:c,img:a,data:x})=>{const r=k(),i=g(),v=S(),m=l(d=>d.auth.token),y=async()=>{try{await i(C([n,m])).unwrap(),await i(j(m)).unwrap(),h(r,"Product removed from favourites","success")}catch{h(r,"Something went wrong","error")}},w=()=>{E("singleProduct",x),v("/description")};return e.jsx(e.Fragment,{children:e.jsxs(f,{flexDirection:"column",mb:"30px",children:[e.jsx(t,{overflow:"hidden",children:e.jsx(z,{onClick:w,className:"imgAnimation",cursor:"pointer",src:a[0]})}),e.jsxs(t,{mt:"15px",children:[e.jsxs(f,{fontSize:["14px","14px","16px","16px","18px"],justifyContent:"space-between",children:[e.jsx(s,{children:u(o)}),e.jsxs(s,{children:["₹",F(c)]})]}),e.jsx(s,{fontSize:["12px","12px","15px","15px","17px"],color:"gray",my:"2px",children:u(p,20)}),e.jsx(B,{variant:"ghost",borderRadius:"20px",border:"1px solid #cecdce",mt:"20px",onClick:y,children:"Remove"})]})]})})};function J(){const n=g(),o=l(r=>r.auth.token),{isLoading:p,isError:c,favourite:a}=l(r=>r.favourite),x=async r=>{try{await n(j(r)).unwrap()}catch(i){console.log(i)}};return b.useEffect(()=>{x(o)},[o]),p?e.jsx(D,{}):c?e.jsx(R,{}):e.jsx(e.Fragment,{children:e.jsxs(t,{maxW:"1450px",minHeight:"60vh",mx:"auto",my:"20px",p:"15px",children:[e.jsx(s,{fontSize:"20px",fontWeight:500,children:"Favourites"}),a.length?e.jsx(t,{display:"grid",gap:["20px","20px","20px","40px","40px"],mt:"40px",gridTemplateColumns:["repeat(2, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)","repeat(3, 1fr)"],children:a.map(r=>e.jsx(I,{...r,data:r},r.id))}):e.jsx(t,{children:e.jsx(T,{h:"30vh",children:e.jsx(s,{fontSize:"20px",children:"Your favourite items will be displayed here."})})})]})})}export{J as default};
