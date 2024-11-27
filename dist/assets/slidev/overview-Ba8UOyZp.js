import{u as te,_ as le,a as ne,S as oe,b as ie,c as ae,d as se}from"./SlideWrapper-CICnyvfG.js";import{a6 as ce,m as o,q as _,t as i,f as J,a8 as re,a9 as ue,r as B,aa as de,a as q,w as me,a2 as pe,n as Y,u as c,I as k,O as S,N as L,ab as fe,ac as ve,P as he,h as ge,c as K,s as ke,k as _e,F as j,ad as Q,Q as V,W as C,x as I,R as $}from"../vendor-Db8_RCGK.js";import{_ as be}from"../presentation-file-Be1g4CC6.js";import{u as xe,a as ye,s as we,c as Ce,C as X,i as $e,b as A,t as De,g as G,p as Fe}from"../index-B8Epca3a.js";import{_ as Se,C as Me}from"./NoteDisplay.vue_vue_type_style_index_0_lang-DisLvGWj.js";import{_ as W}from"./IconButton.vue_vue_type_script_setup_true_lang-CpuhRaqC.js";const Ee={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"};function He(y,M){return o(),_("svg",Ee,M[0]||(M[0]=[i("path",{fill:"currentColor",d:"m20.17 19l-2.59 2.59L19 23l4-4l-4-4l-1.42 1.41zm-8.34 0l2.59-2.59L13 15l-4 4l4 4l1.42-1.41z"},null,-1),i("circle",{cx:"9",cy:"8",r:"1",fill:"currentColor"},null,-1),i("circle",{cx:"6",cy:"8",r:"1",fill:"currentColor"},null,-1),i("path",{fill:"currentColor",d:"M28 4H4c-1.103 0-2 .898-2 2v20c0 1.103.897 2 2 2h24c1.103 0 2-.897 2-2V6c0-1.102-.897-2-2-2m0 2v4H4V6zM4 26V12h24v14z"},null,-1)]))}ce({name:"carbon-cics-program",render:He});const Ne=["placeholder"],Ve=J({__name:"NoteEditable",props:{no:{type:Number,required:!0},class:{default:""},editing:{default:!1},style:{default:()=>({})},placeholder:{default:"No notes for this slide"},clicksContext:{type:Object},highlight:{default:!0},autoHeight:{default:!1}},emits:["update:editing","markerDblclick","markerClick"],setup(y,{emit:M}){const a=y,w=M,r=re(a,"editing",w,{passive:!0}),{info:h,update:D}=te(ue(a,"no")),p=B("");let E;const{ignoreUpdates:b}=de(p,s=>{if(!r.value)return;const m=a.no;clearTimeout(E),E=setTimeout(()=>{D({note:s},m)},500)});q(()=>{var s;return(s=h.value)==null?void 0:s.note},(s="")=>{r.value||(clearTimeout(E),b(()=>{p.value=s}))},{immediate:!0,flush:"sync"});const d=B(),x=B();me(()=>{var s;r.value&&((s=d.value)==null||s.focus())}),pe(d,()=>{r.value=!1});function T(){!a.autoHeight||!d.value||!r.value||d.value.scrollHeight>d.value.clientHeight&&(d.value.style.height=`${d.value.scrollHeight}px`)}function R(s){r.value&&s.metaKey&&s.key==="s"&&(s.preventDefault(),D({note:p.value},a.no))}return q([p,r],()=>{Y(()=>{T()})},{flush:"post",immediate:!0}),(s,m)=>{var H;return c(r)?fe((o(),_("textarea",{key:1,ref_key:"inputEl",ref:d,"onUpdate:modelValue":m[2]||(m[2]=g=>p.value=g),class:S(["prose resize-none overflow-auto outline-none bg-transparent block border-primary border-2",a.class]),style:L([{"line-height":"1.75"},[a.style,x.value!=null?{height:`${x.value}px`}:{}]]),placeholder:y.placeholder,onKeydown:[m[3]||(m[3]=he(g=>r.value=!1,["esc"])),R]},null,46,Ne)),[[ve,p.value]]):(o(),k(Se,{key:0,class:S(["border-transparent border-2",[a.class,p.value?"":"opacity-25 italic select-none"]]),style:L(a.style),note:p.value||y.placeholder,"note-html":(H=c(h))==null?void 0:H.noteHTML,"clicks-context":y.clicksContext,"auto-scroll":!y.autoHeight,highlight:a.highlight,onMarkerClick:m[0]||(m[0]=(g,N)=>w("markerClick",g,N)),onMarkerDblclick:m[1]||(m[1]=(g,N)=>w("markerDblclick",g,N))},null,8,["class","style","note","note-html","clicks-context","auto-scroll","highlight"]))}}}),Be={class:"h-screen w-screen of-hidden flex"},Te={class:"grid grid-rows-[auto_max-content] border-r border-main select-none max-h-full h-full"},ze={class:"relative"},Ie={class:"absolute left-0 top-0 bottom-0 w-200 flex flex-col flex-auto items-end group p2 gap-1 max-h-full of-x-visible of-y-auto",style:{direction:"rtl"}},Ae=["onClick"],We={p2:"",border:"t main"},Le={class:"select-none w-13 text-right my4 flex flex-col gap-1 items-end"},Re={class:"text-3xl op20 mb2"},Ke=["onDblclick"],Oe={class:"py3 mt-0.5 mr--8 ml--4 op0 transition group-hover:op100"},Pe={key:0,class:"select-none absolute bottom-0 right-0 bg-main rounded-tl p2 op35 text-xs"},Ue={class:"absolute top-0 right-0 px3 py1.5 border-b border-l rounded-lb bg-main border-main select-none"},qe={class:"text-xs op50"},O=450,et=J({__name:"overview",setup(y){xe({title:`Overview - ${we}`});const{openInEditor:M,slides:a}=ye(),w=ge(new Map),r=B([]),h=B(null),D=K(()=>a.value.map(t=>{var e,n;return s(((n=(e=t.meta)==null?void 0:e.slide)==null?void 0:n.note)||"")})),p=K(()=>D.value.reduce((t,e)=>t+e,0)),E=K(()=>a.value.map(t=>T(t)).reduce((t,e)=>t+e,0)),b=ke(),d=new WeakMap;function x(t){return d.has(t)||d.set(t,Ce(t,X)),d.get(t)}function T(t){var e,n;return((e=t.meta)==null?void 0:e.clicks)||((n=x(t))==null?void 0:n.total)}function R(t){b.value===t?b.value=void 0:b.value=t}function s(t){const e=/[\w`'\-\u0392-\u03C9\u00C0-\u00FF\u0600-\u06FF\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3040-\u309F\uAC00-\uD7AF]+/g,n=t.match(e);let f=0;if(!n)return 0;for(let F=0;F<n.length;F++)n[F].charCodeAt(0)>=19968?f+=n[F].length:f+=1;return f}function m(t){const e=t.getBoundingClientRect(),n=20;return e.top>=0-n&&e.left>=0-n&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)+n&&e.right<=(window.innerWidth||document.documentElement.clientWidth)+n}function H(){const t=[];Array.from(w.entries()).forEach(([e,n])=>{m(n)&&t.push(e)}),r.value=t}function g(t){const e=document.createElement("a");e.target="_blank",e.href=Fe+t.slice(1),e.click()}function N(t){const e=w.get(t);e&&e.scrollIntoView({behavior:"smooth",block:"start"})}function Z(t,e,n){const f=x(n);f.current===e?f.current=X:f.current=e,t.preventDefault()}return _e(()=>{Y(()=>{H()})}),(t,e)=>{const n=le,f=ne,F=be,ee=se;return o(),_("div",Be,[i("nav",Te,[i("div",ze,[i("div",Ie,[(o(!0),_(j,null,Q(c(a),(l,v)=>{var u,z,P,U;return o(),_("div",{key:l.no,class:"relative",style:{direction:"ltr"}},[i("button",{class:S(["relative transition duration-300 w-8 h-8 rounded hover:bg-active hover:op100",r.value.includes(v)?"op100 text-primary bg-gray:5":"op20"]),onClick:je=>N(v)},[i("div",null,C(v+1),1)],10,Ae),(z=(u=l.meta)==null?void 0:u.slide)!=null&&z.title?(o(),_("div",{key:0,class:S(["pointer-events-none select-none absolute left-110% backdrop-blur-8 top-50% translate-y--50% ws-nowrap z-10 px2 shadow-xl rounded border border-main transition duration-400 op0 group-hover:op100",r.value.includes(v)?"text-primary":"text-main important-text-op-50"])},C((U=(P=l.meta)==null?void 0:P.slide)==null?void 0:U.title),3)):I("v-if",!0)])}),128))])]),i("div",We,[c($e)?(o(),k(W,{key:1,title:c(A)?"Dark mode":"Light mode","pointer-events-none":"",op50:""},{default:V(()=>[c(A)?(o(),k(n,{key:0})):(o(),k(f,{key:1}))]),_:1},8,["title"])):(o(),k(W,{key:0,title:c(A)?"Switch to light mode theme":"Switch to dark mode theme",onClick:e[0]||(e[0]=l=>c(De)())},{default:V(()=>[c(A)?(o(),k(n,{key:0})):(o(),k(f,{key:1}))]),_:1},8,["title"]))])]),i("main",{class:"flex-1 h-full of-auto",style:L(`grid-template-columns: repeat(auto-fit,minmax(${O}px,1fr))`),onScroll:H},[(o(!0),_(j,null,Q(c(a),(l,v)=>(o(),_("div",{key:l.no,ref_for:!0,ref:u=>w.set(v,u),class:S(["relative border-t border-main of-hidden flex gap-4 min-h-50 group",v===0?"pt5":""])},[i("div",Le,[i("div",Re,C(v+1),1),$(W,{class:"mr--3 op0 group-hover:op80",title:"Play in new tab",onClick:u=>g(c(G)(l,!1))},{default:V(()=>[$(F)]),_:2},1032,["onClick"]),I("v-if",!0)]),i("div",{class:"flex flex-col gap-2 my5",style:L({width:`${O}px`})},[i("div",{class:"border rounded border-main overflow-hidden bg-main select-none h-max",onDblclick:u=>g(c(G)(l,!1))},[(o(),k(ae,{key:l.no,width:O,class:"pointer-events-none important:[&_*]:select-none"},{default:V(()=>[$(oe,{"clicks-context":x(l),route:l,"render-context":"overview"},null,8,["clicks-context","route"]),$(ie,{page:l.no},null,8,["page"])]),_:2},1024))],40,Ke),T(l)?(o(),k(Me,{key:0,active:b.value===l,"clicks-context":x(l),class:"w-full mt-2",onDblclick:u=>R(l),onClick:u=>b.value=l},null,8,["active","clicks-context","onDblclick","onClick"])):I("v-if",!0)],4),i("div",Oe,[$(W,{title:"Edit Note",class:S(["rounded-full w-9 h-9 text-sm",h.value===l.no?"important:op0":""]),onClick:u=>h.value=l.no},{default:V(()=>[$(ee)]),_:2},1032,["class","onClick"])]),$(Ve,{no:l.no,class:"max-w-250 w-250 text-lg rounded p3","auto-height":!0,highlight:b.value===l,editing:h.value===l.no,"clicks-context":x(l),onDblclick:u=>h.value!==l.no?h.value=l.no:null,"onUpdate:editing":e[1]||(e[1]=u=>h.value=null),onMarkerClick:(u,z)=>Z(u,z,l)},null,8,["no","highlight","editing","clicks-context","onDblclick","onMarkerClick"]),D.value[v]>0?(o(),_("div",Pe,C(D.value[v])+" words ",1)):I("v-if",!0)],2))),128))],36),i("div",Ue,[i("div",qe,C(c(a).length)+" slides · "+C(E.value+c(a).length-1)+" clicks · "+C(p.value)+" words ",1)])])}}});export{et as default};
