import{j as t,c as b,T as S,F as k,h as P,s as f,i as v,k as N,b as O,f as z,u as C,a as E}from"./index-b883cab5.js";import{O as F}from"./OrderSummaryDataSection-8f4bf20d.js";import{I as i}from"./chunk-6CVSDS6C-8a921893.js";import{u as w}from"./chunk-BFUVSDI7-3827c69f.js";import"./chunk-XRMX4GAI-13a39d21.js";function L(e,a){return e===a?e!==0||a!==0||1/e===1/a:e!==e&&a!==a}function _(e,a){if(L(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;const r=Object.keys(e),c=Object.keys(a);if(r.length!==c.length)return!1;for(let s=0;s<r.length;s++)if(!Object.prototype.hasOwnProperty.call(a,r[s])||!L(e[r[s]],a[r[s]]))return!1;return!0}const T="/ecom-client/assets/nikeLogoPayment-a71c0662.png",I=e=>/\S+@\S+\.\S+/.test(e)?{status:!0}:{status:!1,message:"Please provide a valid email id"},R=e=>{const{firstName:a,lastName:r,addressLine1:c,locality:s,pinCode:u,state:o,country:d,email:p,mobile:y}=e;return!a||!r||!c||!s||!u||!o||!d||!p||!y?{status:!1,message:"Please fill the mandatory details"}:{status:!0}},W=e=>e.length!==6?{status:!1,message:"Please provide 6 digit valid pincode"}:{status:!0},D=e=>e.length!==10?{status:!1,message:"Please provide 10 digit valid mobile number"}:{status:!0},M=({onClick:e})=>t.jsx(t.Fragment,{children:t.jsx(i,{onClick:e,as:"button",type:"submit",h:"60px",bg:"#edf2f7",color:"black",border:"1px solid #cecdce",borderRadius:"50px",w:"100%",fontSize:"17px",mt:"20px",_hover:{borderColor:"black"},children:"Place Order"})}),$=({onClick:e,orderSummary:a})=>t.jsxs(b,{children:[t.jsx(F,{...a}),t.jsx(M,{onClick:e})]}),q=({onChange:e})=>t.jsx(t.Fragment,{children:t.jsxs(b,{children:[t.jsx(S,{fontSize:"20px",fontWeight:600,mb:"20px",children:"Enter your name and address:"}),t.jsxs(k,{flexDirection:"column",gap:"20px",children:[t.jsx(i,{onChange:e,type:"text",name:"firstName",placeholder:"First Name*"}),t.jsx(i,{onChange:e,type:"text",name:"lastName",placeholder:"Last Name*"}),t.jsx(i,{onChange:e,type:"text",name:"addressLine1",placeholder:"Address Line 1*"}),t.jsx(i,{onChange:e,type:"text",name:"addressLine2",placeholder:"Address Line 2"}),t.jsxs(k,{gap:"20px",children:[t.jsx(i,{onChange:e,type:"text",name:"locality",placeholder:"City/Locality*"}),t.jsx(i,{onChange:e,type:"number",name:"pinCode",placeholder:"Pin Code*"})]}),t.jsxs(k,{gap:"20px",children:[t.jsx(i,{onChange:e,type:"text",name:"state",placeholder:"State/Territory*"}),t.jsx(i,{onChange:e,type:"text",name:"country",placeholder:"Country*"})]}),t.jsx(S,{fontSize:"20px",fontWeight:600,mt:"30px",children:"What's your contact information?"}),t.jsx(i,{onChange:e,type:"email",name:"email",placeholder:"Email*"}),t.jsx(i,{onChange:e,type:"number",name:"mobile",placeholder:"Mobile*"})]})]})}),K=async(e,a,r,c,s,u,o,d,p)=>{const y={orderSummary:c,cartProducts:s,shippingDetails:e,paymentDetails:{orderId:a,razorpayOrderId:r.razorpay_order_id,razorpayPaymentId:r.razorpay_payment_id}};try{await P.post("/order/createorder",y,{headers:{Authorization:`Bearer ${u}`}}),f(o,"Order placed successfully","success"),v("cartProducts"),v("orderSummary"),d(N()),p("/")}catch(h){console.log(h)}},U=(e,a,r,c,s,u,o,d)=>{const{firstname:p,lastName:y,mobile:h,email:g}=e,n={key:"rzp_test_EpEUZjh3akkK9N",order_id:a.id,amount:a.amount,currency:a.currency,image:T,name:"Nike Clone",description:"Thanks for purchasing",prefill:{name:`${p} ${y}`,email:g,contact:h},handler:async function(m){try{const{data:x}=await P.post("/api/payment/verify",m);f(u,x.message,"success"),K(e,a.id,m,r,c,s,u,o,d)}catch(x){return console.log(x),{status:!1}}},theme:{color:"#3399cc"}},l=new window.Razorpay(n);l.on("payment.failed",m=>(console.log(m.error),alert("Payment failed, please try again"),{status:!1})),l.open()};function J(){const{orderSummary:e,cartProducts:a}=O(n=>n.cart,_),r=O(n=>n.auth.token),c={firstName:"",lastName:"",addressLine1:"",addressLine2:"",locality:"",pinCode:"",state:"",country:"",email:"",mobile:""},[s,u]=z.useState(c),o=w(),d=C(),p=E(),y=({target:{name:n,value:l}})=>{u({...s,[n]:l})},h=n=>{const l=R(n);if(!l.status)return f(o,l.message,"error"),l.status;const m=I(n.email);if(!m.status)return f(o,m.message,"error"),m.status;const x=W(n.pinCode);if(!x.status)return f(o,x.message,"error"),x.status;const j=D(n.mobile);return j.status?!0:(f(o,j.message,"error"),j.status)},g=async n=>{if(n.preventDefault(),!h(s))return;const{data:l}=await P.post("/api/payment/order",{amount:e.total});U(s,l,e,a,r,o,d,p)};return t.jsx(t.Fragment,{children:t.jsxs(b,{p:"20px",my:"30px",mx:"auto",maxW:"1200px",display:"grid",gap:["40px","40px","40px","10%","10%"],gridTemplateColumns:["100%","100%","100%","55% 35%","60% 30%"],children:[t.jsx(q,{onChange:y}),t.jsx($,{onClick:g,orderSummary:e})]})})}export{J as default};
