import{k as M,l as _,j as m,p as D,t as w,d,w as E,ai as P,I as G,G as U,H as Y,m as z,o as L}from"./index-1cd1003c.js";import{w as R,T as k}from"./chunk-ROURZMX4-aceee6dc.js";import{c as V}from"./chunk-OCNORRQU-52aed4ce.js";import{u as q}from"./index-4f9b76a9.js";import{m as J}from"./index-f6e10ae1.js";var[Q,S]=M({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[X,j]=M({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[Z,be,ee,ne]=V(),oe=_(function(n,t){const{getButtonProps:o}=j(),c=o(n,t),i={display:"flex",alignItems:"center",width:"100%",outline:0,...S().button};return m.jsx(D.button,{...c,className:w("chakra-accordion__button",n.className),__css:i})});oe.displayName="AccordionButton";function te(e){const{onChange:n,defaultIndex:t,index:o,allowMultiple:c,allowToggle:s,...i}=e;ie(e),ce(e);const A=ee(),[p,r]=d.useState(-1);d.useEffect(()=>()=>{r(-1)},[]);const[a,u]=q({value:o,defaultValue(){return c?t??[]:t??-1},onChange:n});return{index:a,setIndex:u,htmlProps:i,getAccordionItemProps:l=>{let g=!1;return l!==null&&(g=Array.isArray(a)?a.includes(l):a===l),{isOpen:g,onChange:x=>{if(l!==null)if(c&&Array.isArray(a)){const I=x?a.concat(l):a.filter(N=>N!==l);u(I)}else x?u(l):s&&u(-1)}}},focusedIndex:p,setFocusedIndex:r,descendants:A}}var[se,O]=M({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function ae(e){const{isDisabled:n,isFocusable:t,id:o,...c}=e,{getAccordionItemProps:s,setFocusedIndex:i}=O(),A=d.useRef(null),p=d.useId(),r=o??p,a=`accordion-button-${r}`,u=`accordion-panel-${r}`;le(e);const{register:v,index:l,descendants:g}=ne({disabled:n&&!t}),{isOpen:f,onChange:x}=s(l===-1?null:l);re({isOpen:f,isDisabled:n});const I=()=>{x==null||x(!0)},N=()=>{x==null||x(!1)},T=d.useCallback(()=>{x==null||x(!f),i(l)},[l,i,f,x]),F=d.useCallback(C=>{const b={ArrowDown:()=>{const h=g.nextEnabled(l);h==null||h.node.focus()},ArrowUp:()=>{const h=g.prevEnabled(l);h==null||h.node.focus()},Home:()=>{const h=g.firstEnabled();h==null||h.node.focus()},End:()=>{const h=g.lastEnabled();h==null||h.node.focus()}}[C.key];b&&(C.preventDefault(),b(C))},[g,l]),B=d.useCallback(()=>{i(l)},[i,l]),W=d.useCallback(function(y={},b=null){return{...y,type:"button",ref:J(v,A,b),id:a,disabled:!!n,"aria-expanded":!!f,"aria-controls":u,onClick:E(y.onClick,T),onFocus:E(y.onFocus,B),onKeyDown:E(y.onKeyDown,F)}},[a,n,f,T,B,F,u,v]),$=d.useCallback(function(y={},b=null){return{...y,ref:b,role:"region",id:u,"aria-labelledby":a,hidden:!f}},[a,f,u]);return{isOpen:f,isDisabled:n,isFocusable:t,onOpen:I,onClose:N,getButtonProps:W,getPanelProps:$,htmlProps:c}}function ie(e){const n=e.index||e.defaultIndex,t=n!=null&&!Array.isArray(n)&&e.allowMultiple;P({condition:!!t,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof n},`})}function ce(e){P({condition:!!(e.allowMultiple&&e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}function le(e){P({condition:!!(e.isFocusable&&!e.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `})}function re(e){P({condition:e.isOpen&&!!e.isDisabled,message:"Cannot open a disabled accordion item"})}function de(e){const{isOpen:n,isDisabled:t}=j(),{reduceMotion:o}=O(),c=w("chakra-accordion__icon",e.className),s=S(),i={opacity:t?.4:1,transform:n?"rotate(-180deg)":void 0,transition:o?void 0:"transform 0.2s",transformOrigin:"center",...s.icon};return m.jsx(G,{viewBox:"0 0 24 24","aria-hidden":!0,className:c,__css:i,...e,children:m.jsx("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})}de.displayName="AccordionIcon";var ue=_(function(n,t){const{children:o,className:c}=n,{htmlProps:s,...i}=ae(n),p={...S().container,overflowAnchor:"none"},r=d.useMemo(()=>i,[i]);return m.jsx(X,{value:r,children:m.jsx(D.div,{ref:t,...s,className:w("chakra-accordion__item",c),__css:p,children:typeof o=="function"?o({isExpanded:!!i.isOpen,isDisabled:!!i.isDisabled}):o})})});ue.displayName="AccordionItem";var me=e=>e!=null&&parseInt(e.toString(),10)>0,H={exit:{height:{duration:.2,ease:k.ease},opacity:{duration:.3,ease:k.ease}},enter:{height:{duration:.3,ease:k.ease},opacity:{duration:.4,ease:k.ease}}},fe={exit:({animateOpacity:e,startingHeight:n,transition:t,transitionEnd:o,delay:c})=>{var s;return{...e&&{opacity:me(n)?1:0},height:n,transitionEnd:o==null?void 0:o.exit,transition:(s=t==null?void 0:t.exit)!=null?s:R.exit(H.exit,c)}},enter:({animateOpacity:e,endingHeight:n,transition:t,transitionEnd:o,delay:c})=>{var s;return{...e&&{opacity:1},height:n,transitionEnd:o==null?void 0:o.enter,transition:(s=t==null?void 0:t.enter)!=null?s:R.enter(H.enter,c)}}},K=d.forwardRef((e,n)=>{const{in:t,unmountOnExit:o,animateOpacity:c=!0,startingHeight:s=0,endingHeight:i="auto",style:A,className:p,transition:r,transitionEnd:a,...u}=e,[v,l]=d.useState(!1);d.useEffect(()=>{const N=setTimeout(()=>{l(!0)});return()=>clearTimeout(N)},[]),P({condition:Number(s)>0&&!!o,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const g=parseFloat(s.toString())>0,f={startingHeight:s,endingHeight:i,animateOpacity:c,transition:v?r:{enter:{duration:0}},transitionEnd:{enter:a==null?void 0:a.enter,exit:o?a==null?void 0:a.exit:{...a==null?void 0:a.exit,display:g?"block":"none"}}},x=o?t:!0,I=t||o?"enter":"exit";return m.jsx(U,{initial:!1,custom:f,children:x&&m.jsx(Y.div,{ref:n,...u,className:w("chakra-collapse",p),style:{overflow:"hidden",display:"block",...A},custom:f,variants:fe,initial:o?"exit":!1,animate:I,exit:"exit"})})});K.displayName="Collapse";var xe=_(function(n,t){const{className:o,motionProps:c,...s}=n,{reduceMotion:i}=O(),{getPanelProps:A,isOpen:p}=j(),r=A(s,t),a=w("chakra-accordion__panel",o),u=S();i||delete r.hidden;const v=m.jsx(D.div,{...r,__css:u.panel,className:a});return i?v:m.jsx(K,{in:p,...c,children:v})});xe.displayName="AccordionPanel";var pe=_(function({children:n,reduceMotion:t,...o},c){const s=z("Accordion",o),i=L(o),{htmlProps:A,descendants:p,...r}=te(i),a=d.useMemo(()=>({...r,reduceMotion:!!t}),[r,t]);return m.jsx(Z,{value:p,children:m.jsx(se,{value:a,children:m.jsx(Q,{value:s,children:m.jsx(D.div,{ref:c,...A,className:w("chakra-accordion",o.className),__css:s.root,children:n})})})})});pe.displayName="Accordion";export{ue as A,oe as a,de as b,xe as c,pe as d};
