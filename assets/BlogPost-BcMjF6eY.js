const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-v_5TeqyH.js","assets/index-BAFLTnUW.css"])))=>i.map(i=>d[i]);
import{f as m,e as f,g,j as r,B as x,r as i,at as P,ap as v,au as _,W as h}from"./index-v_5TeqyH.js";import{S as j}from"./Stack-AAE95I_O.js";var c={root:"m_d6493fad"};const S={},n=m((s,e)=>{const o=f("TypographyStylesProvider",S,s),{classNames:t,className:l,style:a,styles:p,unstyled:u,...y}=o,d=g({name:"TypographyStylesProvider",classes:c,props:o,className:l,style:a,classNames:t,styles:p,unstyled:u});return r.jsx(x,{ref:e,...d("root"),...y})});n.classes=c;n.displayName="@mantine/core/TypographyStylesProvider";const b=(s,e,o)=>{const t=s[e];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((l,a)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+e+(e.split("/").length!==o?". Note that variables only represent file names one level deep.":""))))})};function T(s){return i.lazy(()=>b(Object.assign({"../../blogs/first.mdx":()=>P(()=>import("./index-v_5TeqyH.js").then(e=>e.aw),__vite__mapDeps([0,1]))}),`../../blogs/${s}.mdx`,4))}function E(){const{blogPageId:s}=v(),e=_(s),o=T((e==null?void 0:e.slug)||"");return r.jsx(j,{children:r.jsx(i.Suspense,{fallback:r.jsx(h,{type:"dots"}),children:r.jsx(n,{children:r.jsx(o,{})})})})}export{E as default};