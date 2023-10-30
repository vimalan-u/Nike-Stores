import{w as T,a6 as z,j as r,x as E,a7 as O,h as y,a8 as H,a9 as A,aa as B,ab as V,ac as L,y as U,I as Y,T as l,b as G,d as n,u as J,c as M,Y as Q,ad as q,P as _,B as C}from"./index-95f00c64.js";import{G as v}from"./chunk-JARCRF6W-a356518e.js";import{E as K}from"./Error-1220ff58.js";import{H as X}from"./chunk-7OLJDQMT-9fed2ffd.js";function W(e){return O(e,i=>i==="auto"?"auto":`span ${i}/span ${i}`)}var a=T(function(i,d){const{area:t,colSpan:x,colStart:p,colEnd:s,rowEnd:c,rowSpan:u,rowStart:m,...f}=i,g=z({gridArea:t,gridColumn:W(x),gridRow:W(u),gridColumnStart:p,gridColumnEnd:s,gridRowStart:m,gridRowEnd:c});return r.jsx(E.div,{ref:d,__css:g,...f})});a.displayName="GridItem";function Z(){const e=y.useRef(!0);return y.useEffect(()=>{e.current=!1},[]),e.current}function D(e){const i=y.useRef();return y.useEffect(()=>{i.current=e},[e]),i.current}var ee=E("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),R=H("skeleton-start-color"),$=H("skeleton-end-color"),re=A({from:{opacity:0},to:{opacity:1}}),ie=A({from:{borderColor:R.reference,background:R.reference},to:{borderColor:$.reference,background:$.reference}}),w=T((e,i)=>{const d={...e,fadeDuration:typeof e.fadeDuration=="number"?e.fadeDuration:.4,speed:typeof e.speed=="number"?e.speed:.8},t=B("Skeleton",d),x=Z(),{startColor:p="",endColor:s="",isLoaded:c,fadeDuration:u,speed:m,className:f,fitContent:g,...b}=V(d),[j,k]=L("colors",[p,s]),N=D(c),I=U("chakra-skeleton",f),F={...j&&{[R.variable]:j},...k&&{[$.variable]:k}};if(c){const P=x||N?"none":`${re} ${u}s`;return r.jsx(E.div,{ref:i,className:I,__css:{animation:P},...b})}return r.jsx(ee,{ref:i,className:I,...b,__css:{width:g?"fit-content":void 0,...t,...F,_dark:{...t._dark,...F},animation:`${m}s linear infinite alternate ${ie}`}})});w.displayName="Skeleton";const o=({source:e,onClick:i})=>r.jsx(a,{cursor:"pointer",borderRadius:"15px",overflow:"hidden",onClick:i,children:r.jsx(Y,{className:"imgAnimation",src:e})}),S=({children:e})=>r.jsx(l,{fontWeight:600,letterSpacing:2,fontFamily:"'Anton', sans-serif",fontSize:["25px","30px","40px","45px","50px"],mb:3,children:e}),ne=({clothData:e})=>{var d,t,x,p,s,c,u,m,f,g,b,j;const i=G();return r.jsx(r.Fragment,{children:[...Object.keys(e)].length>0&&r.jsxs(r.Fragment,{children:[r.jsxs(n,{m:"60px auto 60px",w:["94%","94%","94%","94%","80%"],textAlign:"center",fontWeight:"bolder",children:[r.jsx(S,{children:"Nike Unleash Your Potential"}),r.jsxs(v,{gap:["10px","10px","10px","10px","20px"],templateColumns:["repeat(2, 1fr)","repeat(2, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)"],children:[r.jsx(o,{source:(d=e==null?void 0:e.a[0])==null?void 0:d.image,onClick:()=>{i(`/description/${e==null?void 0:e.a[0].id}`)}}),r.jsx(o,{source:(t=e==null?void 0:e.a[1])==null?void 0:t.image,onClick:()=>{i(`/description/${e==null?void 0:e.a[1].id}`)}}),r.jsx(o,{source:(x=e==null?void 0:e.a[2])==null?void 0:x.image,onClick:()=>{i(`/description/${e==null?void 0:e.a[2].id}`)}}),r.jsx(o,{source:(p=e==null?void 0:e.a[3])==null?void 0:p.image,onClick:()=>{i(`/description/${e==null?void 0:e.a[3].id}`)}})]})]}),r.jsxs(n,{m:"60px auto 60px",w:["94%","94%","94%","94%","80%"],textAlign:"center",fontWeight:"bolder",children:[r.jsx(S,{children:"Elevate Your Workout"}),r.jsxs(v,{gap:["10px","10px","10px","10px","20px"],templateColumns:["repeat(2, 1fr)","repeat(2, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)"],children:[r.jsx(o,{source:(s=e==null?void 0:e.b[0])==null?void 0:s.image,onClick:()=>{i(`/description/${e.b[0].id}`)}}),r.jsx(o,{source:(c=e==null?void 0:e.b[1])==null?void 0:c.image,onClick:()=>{i(`/description/${e==null?void 0:e.b[1].id}`)}}),r.jsx(o,{source:(u=e==null?void 0:e.b[2])==null?void 0:u.image,onClick:()=>{i(`/description/${e==null?void 0:e.b[2].id}`)}}),r.jsx(o,{source:(m=e==null?void 0:e.b[3])==null?void 0:m.image,onClick:()=>{i(`/description/${e==null?void 0:e.b[3].id}`)}})]})]}),r.jsxs(n,{m:"60px auto 60px",w:["94%","94%","94%","94%","80%"],textAlign:"center",fontWeight:"bolder",children:[r.jsx(S,{children:"Gear Up and Just Do It!"}),r.jsxs(v,{gap:["10px","10px","10px","10px","20px"],templateColumns:["repeat(2, 1fr)","repeat(2, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)"],children:[r.jsx(o,{source:(f=e==null?void 0:e.c[0])==null?void 0:f.image,onClick:()=>{i(`/description/${e==null?void 0:e.c[0].id}`)}}),r.jsx(o,{source:(g=e==null?void 0:e.c[1])==null?void 0:g.image,onClick:()=>{i(`/description/${e==null?void 0:e.c[1].id}`)}}),r.jsx(o,{source:(b=e==null?void 0:e.c[2])==null?void 0:b.image,onClick:()=>{var k;i(`/description/${(k=e==null?void 0:e.c[2])==null?void 0:k.id}`)}}),r.jsx(o,{source:(j=e==null?void 0:e.c[3])==null?void 0:j.image,onClick:()=>{i(`/description/${e==null?void 0:e.c[3].id}`)}})]})]})]})})};function h(){return r.jsx(n,{m:"60px auto 60px",w:["94%","94%","94%","94%","80%"],children:r.jsxs(v,{mt:3,gap:["10px","10px","10px","10px","20px"],templateColumns:["repeat(2, 1fr)","repeat(2, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)"],children:[r.jsx(a,{cursor:"pointer",borderRadius:"15px",overflow:"hidden",aspectRatio:4/5,children:r.jsx(w,{height:"100%",width:"100%"})}),r.jsx(a,{cursor:"pointer",borderRadius:"15px",overflow:"hidden",aspectRatio:4/5,children:r.jsx(w,{height:"100%",width:"100%"})}),r.jsx(a,{cursor:"pointer",borderRadius:"15px",overflow:"hidden",aspectRatio:4/5,children:r.jsx(w,{height:"100%",width:"100%"})}),r.jsx(a,{cursor:"pointer",borderRadius:"15px",overflow:"hidden",aspectRatio:4/5,children:r.jsx(w,{height:"100%",width:"100%"})})]})})}function xe(){const e=G(),i=J(),{loading:d,error:t,clothDataHomepage:x}=M(s=>s.home);Q("(min-width: 420px)"),y.useEffect(()=>{p()},[]);async function p(){try{const s=await i(q()).unwrap();console.log(s)}catch(s){console.log(s)}}return r.jsxs(n,{width:"100%",children:[r.jsxs(n,{width:"89%",m:"auto",display:"flex",flexDirection:"column",alignItems:["left","left","left","center"],justifyContent:"center",mt:5,mb:[4,5,7,8,9],textAlign:["left","left","left","center"],children:[r.jsxs(n,{children:[r.jsx(X,{fontSize:["40px","45px","50px","60px","65px"],fontFamily:"heading",children:"FEEL IT TO GET IT"}),r.jsx(l,{children:"UP TO 70% OFF EVERYTHING!"})]}),r.jsxs(_,{width:["100%","100%","80%","80%","70%"],align:"center",justifyContent:["flex-start","flex-start","flex-start","space-around","space-around"],mt:[3,3,5,10,10],gap:10,children:[r.jsx(C,{width:["100%","50%","35%"],sx:{background:"rgba(0, 0, 0, 0.78)",borderRadius:"16px",boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)",border:"1px solid rgba(0, 0, 0, 0.71)",backdropFilter:"blur(4.4px)",WebkitBackdropFilter:"blur(4.4px)"},color:"white",p:"6px 20px",borderRadius:30,alignItems:"center",_hover:{bgColor:"black"},fontWeight:"bolder",onClick:()=>e("/sale"),children:"SHOP NOW"}),r.jsx(C,{width:["100%","50%","35%"],sx:{background:"rgba(0, 0, 0, 0.78)",borderRadius:"16px",boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)",border:"1px solid rgba(0, 0, 0, 0.71)",backdropFilter:"blur(4.4px)",WebkitBackdropFilter:"blur(4.4px)"},color:"white",p:"6px 20px",borderRadius:30,alignItems:"center",fontWeight:"bolder",_hover:{bgColor:"black"},onClick:()=>e("/contactus"),children:"CONTACT US!"})]})]}),r.jsx(l,{m:"auto",width:"89%",fontSize:"24px",textAlign:"left",marginBottom:2,fontWeight:"bolder",children:"Featuerd"}),r.jsxs(n,{display:"flex",flexDirection:["column","column","row","row"],alignItems:"flex-start",justifyContent:"space-between",width:"90%",m:"auto",maxHeight:"max-content",children:[r.jsx(n,{background:"url(https://i1.adis.ws/i/boohooamplience/bmm40185_bright%20pink_xl/bright-pink-oversized-cord-shirt?$product_image_main_tablet$) center/cover no-repeat",width:["100%","100%","50%","50%"],height:["280px","380px","400px","650px"],minHeight:"300px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer",onClick:()=>e("/sale"),children:r.jsxs(n,{color:"white",width:["100%","80%","90%","90%"],height:["80%","70%","50%","64%","85%"],textAlign:"left",display:"flex",flexDirection:"column",justifyContent:"flex-end",children:[r.jsx(l,{_hover:{color:"rgba(0, 0, 0, 1.1)",transition:"color 0.5s ease-out"},fontWeight:"bold",children:"Valentine's Day Looks"}),r.jsx(l,{_hover:{color:"rgba(0, 0, 0, 1.1)",transition:"color 0.5s ease-out"},fontWeight:"bold",fontSize:"24px",children:"Partner Up and Reach those Goals"}),r.jsxs(_,{mt:5,children:[r.jsx(C,{fontWeight:"bold",bgColor:"white",p:"6px 20px",borderRadius:20,color:"black",alignItems:"center",onClick:()=>e("/sale"),children:"Explore"}),r.jsx(C,{fontWeight:"bold",bgColor:"white",p:"6px 20px",borderRadius:20,color:"black",alignItems:"center",onClick:()=>e("/men"),children:"Top 10 Gifts"})]})]})}),r.jsx(n,{background:"url(https://media.boohooman.com/i/boohooman/bmm28815_sage_xl/mens-sage-faux-layer-jersey-sleeve-overshirt?$product_page_main_magic_zoom$&fmt=webp%201x,%20//media.boohooman.com/i/boohooman/bmm28815_sage_xl/mens-sage-faux-layer-jersey-sleeve-overshirt?$product_page_main_magic_zoom_2x$&fmt=webp%202x) center/cover no-repeat",width:["100%","100%","50%","50%"],height:["280px","380px","400px","650px"],minHeight:"300px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer",onClick:()=>e("/sale"),children:r.jsxs(n,{color:"white",width:["100%","80%","90%","90%"],height:["80%","70%","50%","64%","85%"],textAlign:"left",display:"flex",flexDirection:"column",justifyContent:"flex-end",children:[r.jsx(l,{_hover:{color:"rgba(0, 0, 0, 1.1)",transition:"color 0.5s ease-out"},fontWeight:"bold",onClick:()=>e("/sale"),children:"Early Access"}),r.jsx(l,{_hover:{color:"rgba(0, 0, 0, 1.1)",transition:"color 0.5s ease-out"},fontWeight:"bold",fontSize:"24px",onClick:()=>e("/men"),children:"Top Selling"}),r.jsx(_,{mt:5,children:r.jsx(C,{fontWeight:"bold",bgColor:"white",p:"6px 20px",borderRadius:20,color:"black",alignItems:"center",onClick:()=>e("/sale"),children:"Get It First"})})]})})]}),r.jsx(n,{children:d?r.jsxs(r.Fragment,{children:[r.jsx(h,{}),r.jsx(h,{}),r.jsx(h,{})]}):t?r.jsx(K,{}):r.jsx(ne,{clothData:x})})]})}export{xe as default};
