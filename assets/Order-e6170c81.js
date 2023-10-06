import{j as e,F as u,T as t,d as o,D as d,n as h,I as b,a7 as y,a3 as D,c as O,h as f,k as I}from"./index-b97bc1d8.js";import{L as w}from"./Loading-ce1fa89e.js";import{E as z}from"./Error-34d8d2d4.js";import{d as S}from"./dateFormatorFunction-b8d8a4b9.js";import{G as A}from"./chunk-JARCRF6W-ca02a314.js";import{A as E,a as C,b as W,c as P,d as $}from"./chunk-UIZMWHSN-ce6a92cd.js";import"./chunk-5MKCW436-b1c3a239.js";import"./index-f6e197ee.js";const s=({name:a,value:x})=>e.jsxs(u,{justifyContent:"space-between",children:[e.jsx(t,{children:a}),e.jsx(t,{children:x})]}),F=({firstName:a,lastName:x,email:i,mobile:c,addressLine1:j,addressLine2:l,locality:p,state:m,pinCode:r,country:n})=>e.jsxs(o,{px:"25px",children:[e.jsx(t,{fontSize:"20px",fontWeight:600,children:"Shipping Address"}),e.jsx(d,{mb:"20px"}),e.jsxs(u,{flexDirection:"column",gap:"5px",my:"20px",fontSize:"18px",children:[e.jsx(s,{name:"Full Name",value:`${a} ${x}`}),e.jsx(s,{name:"Mobile",value:`+91 ${c}`}),e.jsx(s,{name:"Email",value:i}),e.jsx(d,{my:"10px"}),e.jsx(s,{name:"Address",value:j}),l&&e.jsx(s,{name:"Address(2)",value:l}),e.jsx(s,{name:"City",value:p}),e.jsx(s,{name:"State",value:m}),e.jsx(s,{name:"Pincode",value:r}),e.jsx(s,{name:"Country",value:n}),e.jsx(d,{my:"10px"})]})]}),T=({subTotal:a,discount:x,quantity:i,total:c,shipping:j,createdAt:l,orderId:p,razorpayPaymentId:m})=>{const{date:r,time:n}=S(l);return e.jsx(e.Fragment,{children:e.jsxs(o,{py:"15px",px:"25px",children:[e.jsx(t,{fontSize:"20px",fontWeight:600,children:"Summary"}),e.jsx(d,{}),e.jsxs(u,{flexDirection:"column",gap:"5px",my:"20px",fontSize:"18px",children:[e.jsx(s,{name:"Order Date",value:r}),e.jsx(s,{name:"Order Time",value:n}),e.jsx(d,{my:"10px"}),e.jsx(s,{name:"Order ID",value:p}),e.jsx(s,{name:"Payment ID",value:m}),e.jsx(d,{my:"10px"}),e.jsx(s,{name:"Subtotal",value:`₹${h(a)}.00`}),e.jsx(s,{name:"Quantity",value:i}),e.jsxs(u,{justifyContent:"space-between",children:[e.jsx(t,{children:"Estimated Delivery"}),e.jsxs(t,{title:"Free delivery applies to orders of ₹14,000 or more",cursor:"pointer",children:["₹",h(j),".00"]})]}),e.jsx(s,{name:"Discount",value:`₹${h(x)}.00`}),e.jsx(d,{my:"10px"}),e.jsx(s,{name:"Total",value:`₹${h(c)}.00`})]})]})})},B=({img:a,title:x,price:i,quantity:c})=>e.jsxs(A,{templateColumns:"100px 60%",p:"5px",children:[e.jsx(o,{w:"100px",overflow:"hidden",children:e.jsx(b,{src:a[0]})}),e.jsx(y,{children:e.jsxs(o,{px:"20px",w:"100%",children:[e.jsx(t,{fontWeight:600,children:D(x)}),e.jsxs(t,{children:["Price: ₹ ",h(i)]}),e.jsxs(t,{children:["Quantity: ",c]})]})})]}),k=({date:a,time:x,children:i})=>e.jsxs(E,{children:[e.jsx("h2",{children:e.jsxs(C,{children:[e.jsxs(o,{flex:"1",textAlign:"left",children:["Order on ",a," at ",x]}),e.jsx(W,{})]})}),e.jsx(P,{pb:4,children:i})]});function H(){const a=O(r=>r.auth.token),[x,i]=f.useState(!1),[c,j]=f.useState(!1),[l,p]=f.useState([]),m=async r=>{i(!0);try{let{data:n}=await I.get("/order/getorders",{headers:{Authorization:`Bearer ${r}`}});n=n.reverse(),p(n),i(!1)}catch(n){console.log(n),i(!1),j(!0)}};return f.useEffect(()=>{m(a)},[]),l.length===0?e.jsx(o,{children:e.jsx(y,{h:"40vh",children:e.jsx(t,{fontSize:"20px",children:"Your orders will be displayed here."})})}):x?e.jsx(w,{}):c?e.jsx(z,{}):e.jsx(o,{children:e.jsxs(o,{px:"20px",mb:["250px","150px","150px","150px","150px"],children:[e.jsx(u,{justify:"space-between",maxW:1200,m:"20px auto",children:e.jsxs(y,{children:[e.jsx(t,{fontWeight:600,fontSize:["20px","25px"],children:"Orders  "}),e.jsxs(t,{fontSize:["16px","20px"],children:[" (",l.length,")"]})]})}),e.jsx($,{defaultIndex:[0],allowMultiple:!0,children:e.jsx(o,{maxW:1200,m:"40px auto",children:l.map(r=>{const{date:n,time:g}=S(r.createdAt);return e.jsx(k,{date:n,time:g,children:e.jsx(o,{children:e.jsxs(A,{templateColumns:["100%","100%","48% 48%","32% 31% 33%","31% 30% 31%"],gap:["20px","20px","4%","2%","4%"],children:[e.jsxs(o,{py:"15px",px:"25px",children:[e.jsx(t,{fontSize:"20px",fontWeight:600,children:"Ordered Items"}),e.jsx(d,{mb:"20px"}),r.cartProducts.map(v=>e.jsx(B,{...v},v.id))]}),e.jsx(F,{...r.ShippingDetails[0]}),e.jsx(T,{createdAt:r.createdAt,...r.PaymentDetails[0],...r})]})},r.id)},n+g+r.id)})})})]})})}export{H as default};