import{e as u,r as l,k as c,a as m,o as i,C as f,D as p,R as d,u as s}from"./vue-vendor-CZZTqpDj.js";import{f as _}from"./SlideWrapper-D1wgKRkH.js";import{u as v}from"./context-DTVAQnuy.js";import"../index-BTRffk5C.js";const B=u({__name:"DrawingLayer",setup(g){const{drauu:e,drawingEnabled:n,loadCanvas:t}=_(),r=v().$scale,a=l();return c(()=>{e.mount(a.value,a.value.parentElement),m(r,o=>e.options.coordinateScale=1/o,{immediate:!0}),t()}),i(()=>{e.unmount()}),(o,w)=>(f(),p("svg",{ref_key:"svg",ref:a,class:d(["w-full h-full absolute top-0",{"pointer-events-none":!s(n),"touch-none":s(n)}])},null,2))}});export{B as default};
