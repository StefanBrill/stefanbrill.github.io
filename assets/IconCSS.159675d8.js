import{d as l,as as _,x as d,L as o,b as m,c as f,$ as x,l as S}from"./entry.ddad1708.js";const g=l({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(r){const n=r;_(e=>({"79fcb49d":u.value}));const s=d(),p=o(()=>{var e;return((((e=s.nuxtIcon)==null?void 0:e.aliases)||{})[n.name]||n.name).replace(/^i-/,"")}),u=o(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),a=o(()=>{var t,c,i;if(!n.size&&typeof((t=s.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((c=s.nuxtIcon)!=null&&c.size))return;const e=n.size||((i=s.nuxtIcon)==null?void 0:i.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,t)=>(m(),f("span",{style:x({width:a.value,height:a.value})},null,4))}});const z=S(g,[["__scopeId","data-v-82bb2a93"]]);export{z as default};
