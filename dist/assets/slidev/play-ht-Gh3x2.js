const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-oZIAHxXU.js","assets/DrawingControls.vue_vue_type_style_index_0_lang-mVNY7z3l.js","assets/vendor-Db8_RCGK.js","assets/slidev/SlideWrapper-282d78W8.js","assets/index-DNCNrcXa.js","assets/index-B9GMouLT.css","assets/SlideWrapper-D-ORDv98.css","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-CpuhRaqC.js","assets/slidev/shortcuts-CIz2Q3vA.js","assets/minimize-oq2ZXxF0.js","assets/presentation-file-Be1g4CC6.js","assets/user-speaker-CHR6Y1MK.js","assets/slidev/context-CTuoBn8-.js","assets/shortcuts-BAPqYAhK.css","assets/DrawingControls-Cxk9a9ub.css"])))=>i.map(i=>d[i]);
import{f as v,a8 as z,m as o,I as u,u as e,q as _,t as l,M as B,O as C,x as n,ag as R,c as E,Q as h,a7 as M,ah as $,s as k,R as p,F as N,N as W,W as D,j as I,r as A}from"../vendor-Db8_RCGK.js";import{f as H,c as L}from"./SlideWrapper-282d78W8.js";import{q as x,a as P,v as O,w as b,x as w,d as V,y as T,z as U,A as j,k as S,B as q,D as F}from"../index-DNCNrcXa.js";import{b as G,G as K,c as Q,d as X,u as Y,r as J,a as Z,S as ee,_ as te,o as oe}from"./shortcuts-CIz2Q3vA.js";import"../minimize-oq2ZXxF0.js";import"../presentation-file-Be1g4CC6.js";import"../user-speaker-CHR6Y1MK.js";import"./context-CTuoBn8-.js";import"./IconButton.vue_vue_type_script_setup_true_lang-CpuhRaqC.js";const se="/dopomogai-slides/assets/logo-BYkHSa_O.png",ae={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},le=v({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(m,{emit:i}){const r=m,a=z(r,"modelValue",i);function d(){a.value=!1}return(f,s)=>(o(),u(R,null,[e(a)?(o(),_("div",ae,[l("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:s[0]||(s[0]=c=>d())}),l("div",{class:C(["m-auto rounded-md bg-main shadow",r.class]),"dark:border":"~ main"},[B(f.$slots,"default")],2)])):n("v-if",!0)],1024))}}),ne={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ie=["innerHTML"],re=v({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(m,{emit:i}){const a=z(m,"modelValue",i),d=E(()=>typeof x.info=="string");return(f,s)=>(o(),u(le,{modelValue:e(a),"onUpdate:modelValue":s[0]||(s[0]=c=>$(a)?a.value=c:null),class:"px-6 py-4"},{default:h(()=>[l("div",ne,[d.value?(o(),_("div",{key:0,class:"mb-4",innerHTML:e(x).info},null,8,ie)):n("v-if",!0),s[1]||(s[1]=l("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[l("div",{class:"flex gap-1 children:my-auto"},[l("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),l("img",{class:"w-5 h-5",src:se,alt:"Slidev logo"}),l("div",{style:{color:"#2082A6"}},[l("b",null,"Sli"),M("dev ")])])],-1))])]),_:1},8,["modelValue"]))}}),ue=v({__name:"Controls",setup(m){const{isEmbedded:i}=P(),r=!x.drawings.presenterOnly&&!i.value,t=k();r&&O(()=>import("./DrawingControls-oZIAHxXU.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then(f=>t.value=f.default);const a=k(),d=k();return(f,s)=>(o(),_(N,null,[t.value?(o(),u(e(t),{key:0})):n("v-if",!0),p(G),p(K),a.value?(o(),u(e(a),{key:1})):n("v-if",!0),d.value?(o(),u(e(d),{key:2,modelValue:e(b),"onUpdate:modelValue":s[0]||(s[0]=c=>$(b)?b.value=c:null)},null,8,["modelValue"])):n("v-if",!0),e(x).info?(o(),u(re,{key:3,modelValue:e(w),"onUpdate:modelValue":s[1]||(s[1]=c=>$(w)?w.value=c:null)},null,8,["modelValue"])):n("v-if",!0),p(Q)],64))}}),de={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},ce=v({__name:"PresenterMouse",setup(m){return(i,r)=>{const t=X;return e(V).cursor?(o(),_("div",de,[p(t,{class:"absolute stroke-white dark:stroke-black",style:W({left:`${e(V).cursor.x}%`,top:`${e(V).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):n("v-if",!0)}}}),pe=v({__name:"PrintStyle",setup(m){function i(r,{slots:t}){if(t.default)return I("style",t.default())}return(r,t)=>(o(),u(i,null,{default:h(()=>[M(" @page { size: "+D(e(T))+"px "+D(e(U))+"px; margin: 0px; } ",1)]),_:1}))}}),be=v({__name:"play",setup(m){const{next:i,prev:r,isPrintMode:t}=P(),{isDrawing:a}=H(),d=A();function f(y){var g;S.value||y.button===0&&((g=y.target)==null?void 0:g.id)==="slide-container"&&(y.pageX/window.innerWidth>.5?i():r())}Y(d),J(),Z();const s=E(()=>j.value||S.value),c=k();return(y,g)=>(o(),_(N,null,[e(t)?(o(),u(pe,{key:0})):n("v-if",!0),l("div",{id:"page-root",ref_key:"root",ref:d,class:C(["grid",e(F)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[p(L,{style:{background:"var(--slidev-slide-container-background, black)"},width:e(t)?e(q).width.value:void 0,"is-main":"",onPointerdown:f,onContextmenu:e(oe)},{default:h(()=>[p(ee,{"render-context":"slide"}),p(ce)]),controls:h(()=>[e(t)?n("v-if",!0):(o(),_("div",{key:0,class:C(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100 focus-within:opacity-100 focus-visible:opacity-100",[s.value?"!opacity-100 right-0":"opacity-0 p-2",e(a)?"pointer-events-none":""]])},[p(te,{persist:s.value},null,8,["persist"])],2))]),_:1},8,["width","onContextmenu"]),c.value&&e(S)?(o(),u(e(c),{key:0,resize:!0})):n("v-if",!0)],2),e(t)?n("v-if",!0):(o(),u(ue,{key:1})),g[0]||(g[0]=l("div",{id:"twoslash-container"},null,-1))],64))}});export{be as default};
