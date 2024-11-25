import{p as n,K as v,o as t,e as o,f as i,ar as p,g as u,a as Z,c as P,w as y,ae as d,aa as W,b as w,k as j,l as x,B as A,aA as G}from"./modules/vue-H4SylcjB.js";import{u as m,f as z}from"./slidev/context-DaQlvZZo.js";import{_ as R}from"./prozbory1-DA8GigTO.js";import{_ as b}from"./index-DMNPsdFc.js";import"./modules/shiki-vAJ4vxrb.js";const S={class:"relative group cursor-pointer"},M=["src"],h={__name:"VideoPlayer",props:{videoSrc:{type:String,required:!0}},emits:["videoPlayed"],setup(a,{emit:l}){m();const r=l,e=n(null),I=n(!1),s=n(!1),g=()=>{e.value&&(e.value.play(),I.value=!0,s.value||(s.value=!0,r("videoPlayed")))},C=()=>{I.value=!1};return v(()=>{e.value&&e.value.addEventListener("pause",()=>{I.value=!1})}),(L,c)=>(t(),o("div",S,[i("video",{ref_key:"video",ref:e,class:"w-full rounded-xl",playsinline:"",onEnded:C},[i("source",{src:a.videoSrc,type:"video/mp4"},null,8,M)],544),I.value?u("",!0):(t(),o("div",{key:0,onClick:p(g,["stop"]),class:"absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center group-hover:bg-black/30 transition-all"},c[0]||(c[0]=[i("div",{class:"w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform"},[i("div",{class:"w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"})],-1)])))]))}},D="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMjEwIDQ1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJhaUdyYWRpZW50IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM2MzY2RjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjM0I4MkY2IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwNkI2RDQiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPHJhZGlhbEdyYWRpZW50IGlkPSJkb3RHcmFkaWVudCIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzYzNjZGMSI+CiAgICAgICAgPGFuaW1hdGUgCiAgICAgICAgICBhdHRyaWJ1dGVOYW1lPSJzdG9wLWNvbG9yIiAKICAgICAgICAgIHZhbHVlcz0iIzYzNjZGMTsjNEY0NkU1OyM2MzY2RjEiCiAgICAgICAgICBkdXI9IjJzIgogICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiCiAgICAgICAgLz4KICAgICAgPC9zdG9wPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM0RjQ2RTUiPgogICAgICAgIDxhbmltYXRlIAogICAgICAgICAgYXR0cmlidXRlTmFtZT0ic3RvcC1jb2xvciIgCiAgICAgICAgICB2YWx1ZXM9IiM0RjQ2RTU7IzYzNjZGMTsjNEY0NkU1IgogICAgICAgICAgZHVyPSIycyIKICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIgogICAgICAgIC8+CiAgICAgIDwvc3RvcD4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgPC9kZWZzPgogIAogIDwhLS0gRG90IC0tPgo8c3ZnIHdpZHRoPSI0NyIgaGVpZ2h0PSIzMyIgdmlld0JveD0iMCAwIDMwIDMwIj4KICA8ZGVmcz4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iYWlHcmFkaWVudCI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmOWYwNmIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZTg4MTBjIi8+CiAgICA8L3JhZGlhbEdyYWRpZW50Pgo8bWFzayBpZD0iY3V0b3V0Ij4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPgogIDxjaXJjbGUgY3g9IjE4IiBjeT0iMTgiIHI9IjMiIGZpbGw9ImJsYWNrIi8+CjwvbWFzaz4KICA8L2RlZnM+CiAgPGNpcmNsZSBjeD0iMTgiIGN5PSIxOCIgcj0iNiIgZmlsbD0idXJsKCNhaUdyYWRpZW50KSIgbWFzaz0idXJsKCNjdXRvdXQpIi8+Cjwvc3ZnPiAgCiAgPCEtLSBkb3BvbW9nYSAtLT4KICA8dGV4dCB4PSIzNiIgeT0iMjYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiPgogICAgZG9wb21vZwogIDwvdGV4dD4KICAKICA8IS0tIGFpIC0tPgogIDx0ZXh0IHg9IjE0NSIgeT0iMjYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIyNCIgZmlsbD0idXJsKCNhaUdyYWRpZW50KSI+CiAgICBhaQogIDwvdGV4dD4KPC9zdmc+Cg==",N="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMjEwIDQ1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJodWJHcmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjN0MzQUVEIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM5MzMzRUEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPHJhZGlhbEdyYWRpZW50IGlkPSJodWJEb3RHcmFkaWVudCIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdDM0FFRCI+CiAgICAgICAgPGFuaW1hdGUgCiAgICAgICAgICBhdHRyaWJ1dGVOYW1lPSJzdG9wLWNvbG9yIiAKICAgICAgICAgIHZhbHVlcz0iIzdDM0FFRDsjNkQyOEQ5OyM3QzNBRUQiCiAgICAgICAgICBkdXI9IjJzIgogICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiCiAgICAgICAgLz4KICAgICAgPC9zdG9wPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM2RDI4RDkiPgogICAgICAgIDxhbmltYXRlIAogICAgICAgICAgYXR0cmlidXRlTmFtZT0ic3RvcC1jb2xvciIgCiAgICAgICAgICB2YWx1ZXM9IiM2RDI4RDk7IzdDM0FFRDsjNkQyOEQ5IgogICAgICAgICAgZHVyPSIycyIKICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIgogICAgICAgIC8+CiAgICAgIDwvc3RvcD4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgPC9kZWZzPgogIAogIDwhLS0gRG90IC0tPgogIDxjaXJjbGUgY3g9IjI3IiBjeT0iMTkiIHI9IjciIGZpbGw9InVybCgjaHViR3JhZGllbnQpIi8+CiAgCiAgPCEtLSBkb3BvbW9nYSAtLT4KICA8dGV4dCB4PSIzNiIgeT0iMjYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiPgogICAgZG9wb21vZ2EKICA8L3RleHQ+CiAgCiAgPCEtLSBodWIgLS0+CiAgPHRleHQgeD0iMTU5IiB5PSIyNiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjI0IiBmaWxsPSJ1cmwoI2h1YkdyYWRpZW50KSI+CiAgICBodWIKICA8L3RleHQ+Cjwvc3ZnPgo=",k={},B={class:"slidev-layout cover"};function f(a,l){return t(),o("div",B,[Z(a.$slots,"default")])}const V=b(k,[["render",f]]),Y={class:"w-1/2"},_={class:"text-left space-y-6"},H={class:"mt-12 relative w-[300px]",initial:{x:-60,opacity:0},enter:{x:0,opacity:1,transition:{delay:300}}},J={class:"text-xl font-medium tracking-wide bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent",initial:{x:-60,opacity:0},enter:{x:0,opacity:1,transition:{delay:500}}},Q={class:"space-y-3 pt-3",initial:{y:40,opacity:0},enter:{y:0,opacity:1,transition:{delay:700}}},E={class:"w-1/2 ml-12",initial:{scale:.9,opacity:0},enter:{y:21,scale:1,opacity:1,transition:{delay:900}}},U={class:"relative"},F={class:"relative"},T={__name:"slides.md__slidev_1",setup(a){const{$clicksContext:l,$frontmatter:r}=m();return l.setup(),(e,I)=>{const s=h,g=G("motion");return t(),P(V,j(x(A(z)(A(r),0))),{default:y(()=>[i("div",{class:"flex w-full h-full items-center justify-between px-16",onClick:I[0]||(I[0]=C=>!e.hasPlayedVideo&&C.target.tagName!=="VIDEO"&&e.playVideo())},[i("div",Y,[i("div",_,[d((t(),o("div",H,I[1]||(I[1]=[i("div",{class:"absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-lg blur opacity-25 animate-pulse"},null,-1),i("img",{src:D,alt:"DopomogAI",class:"relative w-full"},null,-1)]))),[[g]]),d((t(),o("p",J,I[2]||(I[2]=[W(" A DEDICATED AI INFLUENCER FOR SOCIAL IMPACT ")]))),[[g]]),d((t(),o("div",Q,I[3]||(I[3]=[i("div",{class:"group relative"},[i("div",{class:"absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-[24px] blur opacity-0 group-hover:opacity-30 transition duration-700"}),i("div",{class:"relative bg-black/40 backdrop-blur-sm p-6 rounded-[24px] border border-zinc-800 hover:border-purple-500/40 hover:bg-zinc-950/40 transition-all duration-500"},[i("img",{src:N,alt:"DopomogaHub",class:"h-11 mb-3 group-hover:scale-105 transition-transform"}),i("p",{class:"text-zinc-400 text-xl font-light group-hover:text-zinc-200 transition-colors"},"Impact-First Social Network")])],-1),i("div",{class:"group relative"},[i("div",{class:"absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-[24px] blur opacity-0 group-hover:opacity-30 transition duration-700"}),i("div",{class:"relative bg-black/40 backdrop-blur-sm p-6 rounded-[24px] border border-zinc-800 hover:border-orange-500/40 hover:bg-zinc-950/40 transition-all duration-500"},[i("img",{src:R,alt:"Prozbory",class:"h-11 mb-3 group-hover:scale-105 transition-transform"}),i("p",{class:"text-zinc-400 text-xl font-light group-hover:text-zinc-200 transition-colors"},"Smart Giving Platform")])],-1)]))),[[g]])])]),d((t(),o("div",E,[i("div",U,[I[4]||(I[4]=i("div",{class:"absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-transparent rounded-[2rem] blur-xl"},null,-1)),i("div",F,[w(s,{ref:"videoPlayer","video-src":"/images/greetings.mp4",onVideoPlayed:e.handleVideoPlayed,class:"rounded-2xl overflow-hidden border border-zinc-800/50"},null,8,["onVideoPlayed"])])])])),[[g]])])]),_:1},16)}}},ii=b(T,[["__scopeId","data-v-6024be2d"]]);export{ii as default};
