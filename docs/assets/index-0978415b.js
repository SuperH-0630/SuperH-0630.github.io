import{g as a,i as t,h as s,j as d,u as i,k as e,l as r,w as l,d as o,o as n,m as v,n as g,p,q as h,s as b,t as c,v as m,x as u,y as f,z as _,A as k}from"./vue-dadf2646.js";const w="el",x=(a,t,s,d,i)=>{let e=`${a}-${t}`;return s&&(e+=`-${s}`),d&&(e+=`__${d}`),i&&(e+=`--${i}`),e},y=Symbol("namespaceContextKey"),S=(e,r)=>{const l=(e=>{const r=e||(a()?t(y,s(w)):s(w));return d((()=>i(r)||w))})(r);return{namespace:l,b:(a="")=>x(l.value,e,a,"",""),e:a=>a?x(l.value,e,"",a,""):"",m:a=>a?x(l.value,e,"","",a):"",be:(a,t)=>a&&t?x(l.value,e,a,t,""):"",em:(a,t)=>a&&t?x(l.value,e,"",a,t):"",bm:(a,t)=>a&&t?x(l.value,e,a,"",t):"",bem:(a,t,s)=>a&&t&&s?x(l.value,e,a,t,s):"",is:(a,...t)=>{const s=!(t.length>=1)||t[0];return a&&s?`is-${a}`:""},cssVar:a=>{const t={};for(const s in a)a[s]&&(t[`--${l.value}-${s}`]=a[s]);return t},cssVarName:a=>`--${l.value}-${a}`,cssVarBlock:a=>{const t={};for(const s in a)a[s]&&(t[`--${l.value}-${e}-${s}`]=a[s]);return t},cssVarBlockName:a=>`--${l.value}-${e}-${a}`}};const $="__epPropKey",j=(a,t)=>{if(!e(a)||e(s=a)&&s[$])return a;var s;const{values:d,required:i,default:o,type:n,validator:v}=a,g=d||v?s=>{let i=!1,e=[];if(d&&(e=Array.from(d),r(a,"default")&&e.push(o),i||(i=e.includes(s))),v&&(i||(i=v(s))),!i&&e.length>0){const a=[...new Set(e)].map((a=>JSON.stringify(a))).join(", ");l(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${a}], got value ${JSON.stringify(s)}.`)}return i}:void 0,p={type:n,required:!!i,validator:g,[$]:!0};return r(a,"default")&&(p.default=o),p};var z=(a,t)=>{const s=a.__vccOpts||a;for(const[d,i]of t)s[d]=i;return s};const H=(L={direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:String,default:"solid"}},function(a){for(var t=-1,s=null==a?0:a.length,d={};++t<s;){var i=a[t];d[i[0]]=i[1]}return d}(Object.entries(L).map((([a,t])=>[a,j(t,a)]))));var L;const M=o({name:"ElDivider"}),C=o({...M,props:H,setup(a){const t=a,s=S("divider"),e=d((()=>s.cssVar({"border-style":t.borderStyle})));return(a,t)=>(n(),v("div",{class:g([i(s).b(),i(s).m(a.direction)]),style:b(i(e)),role:"separator"},[a.$slots.default&&"vertical"!==a.direction?(n(),v("div",{key:0,class:g([i(s).e("text"),i(s).is(a.contentPosition)])},[p(a.$slots,"default")],2)):h("v-if",!0)],6))}});const N=((a,t)=>{if(a.install=s=>{for(const d of[a,...Object.values(null!=t?t:{})])s.component(d.name,d)},t)for(const[s,d]of Object.entries(t))a[s]=d;return a})(z(C,[["__file","divider.vue"]])),O=1734615898090;const D={class:"outside_box"},q={class:"inner_box"},B=(a=>(_("data-v-49bdd979"),a=a(),k(),a))((()=>c("div",{class:"title_a"},"Hello, 我是宋子桓（Song Zihuan）🔥",-1))),E=f('<div data-v-49bdd979><p class="text more_line_text" data-v-49bdd979><span class="bold_span" data-v-49bdd979>我是一名出生于2004年6月的码农。</span><br data-v-49bdd979> 我主要活跃于<span class="bold_span" data-v-49bdd979>中国广州地区</span>，但我通常以互联网身份参与活动。 <br data-v-49bdd979> 我立志成为一名优秀的全栈工程师。 我的开发梦想是完成自己的操作系统（OS）、编程语言（Programming Language）以及维系系统正常运行的组件工具（Tool）。 <br data-v-49bdd979> 你可以通过我主页的个人公开邮箱<a href="mailto:songzihuan@song-zh.com" target="_blank" data-v-49bdd979>songzihuan@song-zh.com</a>联系我。 <br data-v-49bdd979> 同时，你可以浏览<a href="http://song-zh.com" target="_blank" data-v-49bdd979>我的个人网站</a>。尽管有些时候他可能还未准备好提供服务。 <br data-v-49bdd979> 我的个人标志性域名是<span class="bold_span" data-v-49bdd979>song-zh.com</span>，请认准该域名，谨防冒充等行为。 <br data-v-49bdd979> 感谢所有人对我的支持，谢谢。 </p></div>',1),I=f('<div data-v-49bdd979><ul class="text more_line_text" data-v-49bdd979><li class="more_line_ul" data-v-49bdd979> ✈️ 我是个自由职业者。 </li><li class="more_line_ul" data-v-49bdd979> 🤖 我喜欢开发各种代码，例如互联网项目。 </li><li class="more_line_ul" data-v-49bdd979> ❓ 你可以和我讨论任何关于代码的问题，我很乐意为你提供帮助。 </li></ul></div><div class="title_b" data-v-49bdd979>许可（License）</div><div class="license_box" data-v-49bdd979><p class="text more_line_text" data-v-49bdd979> 本人的项目在默认情况下使用<a href="https://raw.githubusercontent.com/SuperH-0630/SuperH-0630/refs/heads/main/LICENSE" target="_blank" data-v-49bdd979>MIT LICENSE</a>许可证发布。 <br data-v-49bdd979> MIT License: <a href="https://mit-license.org/" target="_blank" data-v-49bdd979>mit-license.org</a></p></div><div class="title_b" data-v-49bdd979>我的技术栈</div><div class="skill_list" data-v-49bdd979><div class="skill_box" data-v-49bdd979><div class="title_c" data-v-49bdd979>前端</div><div data-v-49bdd979><a href="https://getbootstrap.com/docs/3.4/javascript/" target="_blank" data-v-49bdd979><img style="margin:10px;" src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg" alt="Bootstrap" height="50" data-v-49bdd979></a><a href="https://www.w3schools.com/css/" target="_blank" data-v-49bdd979><img style="margin:10px;" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" data-v-49bdd979></a><a href="https://en.wikipedia.org/wiki/HTML5" target="_blank" data-v-49bdd979><img style="margin:10px;" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" data-v-49bdd979></a><a href="https://www.javascript.com/" target="_blank" data-v-49bdd979><img style="margin:10px;" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" data-v-49bdd979></a><a href="https://www.typescriptlang.org/" target="_blank" data-v-49bdd979><img style="margin:10px;" src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" alt="TypeScript" height="50" data-v-49bdd979></a><a href="https://vuejs.org/" target="_blank" data-v-49bdd979><img style="margin:10px;" src="https://profilinator.rishav.dev/skills-assets/vuejs-original-wordmark.svg" alt="Vue.js" height="50" data-v-49bdd979></a><a href="https://nextjs.org/" target="_blank" data-v-49bdd979><img style="margin:10px;" src="https://profilinator.rishav.dev/skills-assets/nextjs.png" alt="NextJS" height="50" data-v-49bdd979></a></div></div><div class="skill_box" data-v-49bdd979><div class="title_c" data-v-49bdd979>后端</div><div data-v-49bdd979><a href="https://www.cplusplus.com/" target="_blank" data-v-49bdd979><img style="margin:10px;" src="https://profilinator.rishav.dev/skills-assets/cplusplus-original.svg" alt="C++" height="50" data-v-49bdd979></a><a href="https://www.python.org/" target="_blank" data-v-49bdd979><img style="margin:10px;" src="https://profilinator.rishav.dev/skills-assets/python-original.svg" alt="Python" height="50" data-v-49bdd979></a><a href="https://go.dev/" target="_blank" data-v-49bdd979><img style="margin:10px;" src="https://profilinator.rishav.dev/skills-assets/go-original.svg" alt="Go" height="50" data-v-49bdd979></a><a href="https://www.cprogramming.com/" target="_blank" data-v-49bdd979><img style="margin:10px;" src="https://profilinator.rishav.dev/skills-assets/c-original.svg" alt="C" height="50" data-v-49bdd979></a></div></div><div class="skill_box" data-v-49bdd979><div class="title_c" data-v-49bdd979>运维</div><div data-v-49bdd979><a href="https://kubernetes.io/" target="_blank" data-v-49bdd979><img style="margin:10px;" src="https://profilinator.rishav.dev/skills-assets/kubernetes-icon.svg" alt="Kubernetes" height="50" data-v-49bdd979></a><a href="https://www.linux.org/" target="_blank" data-v-49bdd979><img style="margin:10px;" src="https://profilinator.rishav.dev/skills-assets/linux-original.svg" alt="Linux" height="50" data-v-49bdd979></a><a href="https://github.com/" target="_blank" data-v-49bdd979><img style="margin:10px;" src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" height="50" data-v-49bdd979></a><a href="https://www.gnu.org/software/bash/" target="_blank" data-v-49bdd979><img style="margin:10px;" src="https://profilinator.rishav.dev/skills-assets/gnu_bash-icon.svg" alt="Bash" height="50" data-v-49bdd979></a><a href="https://www.docker.com/" target="_blank" data-v-49bdd979><img style="margin:10px;" src="https://profilinator.rishav.dev/skills-assets/docker-original-wordmark.svg" alt="Docker" height="50" data-v-49bdd979></a><a href="https://redis.io/" target="_blank" data-v-49bdd979><img style="margin:10px;" src="https://profilinator.rishav.dev/skills-assets/redis-original-wordmark.svg" alt="Redis" height="50" data-v-49bdd979></a><a href="https://www.mysql.com/" target="_blank" data-v-49bdd979><img style="margin:10px;" src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" alt="MySQL" height="50" data-v-49bdd979></a><a href="https://www.mongodb.com/" target="_blank" data-v-49bdd979><img style="margin:10px;" src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="MongoDB" height="50" data-v-49bdd979></a><a href="https://www.nginx.com/" target="_blank" data-v-49bdd979><img style="margin:10px;" src="https://profilinator.rishav.dev/skills-assets/nginx-original.svg" alt="Nginx" height="50" data-v-49bdd979></a><a href="https://mariadb.org/" target="_blank" data-v-49bdd979><img style="margin:10px;" src="https://profilinator.rishav.dev/skills-assets/mariadb.png" alt="Maria DB" height="50" data-v-49bdd979></a></div></div></div><div class="title_b" data-v-49bdd979>我的Github动态</div><div class="stats" data-v-49bdd979><div data-v-49bdd979><img src="https://github-readme-stats.vercel.app/api?username=SuperH-0630&amp;show_icons=true&amp;count_private=true&amp;hide_border=true" data-v-49bdd979></div><div data-v-49bdd979><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=SuperH-0630&amp;hide_border=true&amp;layout=compact" data-v-49bdd979></div></div><div class="title_b" data-v-49bdd979>鸣谢</div><div data-v-49bdd979><p class="text more_line_text" data-v-49bdd979> 感谢<a href="https://profilinator.rishav.dev/" target="_blank" data-v-49bdd979>profilinator.rishav.dev</a>在我编辑profile时的支持。 <br data-v-49bdd979> 感谢<a href="https://github.com/" target="_blank" data-v-49bdd979>Github</a>等代码托管平台，以及众多的开源项目。他们的出现让我的工作变得轻松和简单。 <br data-v-49bdd979><span class="bold_span" data-v-49bdd979>特别鸣谢所有对我和我的团队的项目付出贡献的贡献人和贡献团体，本人由衷的感谢。</span></p></div>',9),T=f('<div class="contact_box" data-v-49bdd979><a href="https://github.com/SuperH-0630" target="_blank" data-v-49bdd979><img src="https://img.shields.io/badge/github-%2324292e.svg?&amp;style=for-the-badge&amp;logo=github&amp;logoColor=white" alt="github" style="margin-bottom:5px;" data-v-49bdd979></a><a href="https://twitter.com/Huan6363630" target="_blank" data-v-49bdd979><img src="https://img.shields.io/badge/twitter-%2300acee.svg?&amp;style=for-the-badge&amp;logo=twitter&amp;logoColor=white" alt="twitter" style="margin-bottom:5px;" data-v-49bdd979></a></div><div class="total" data-v-49bdd979><img src="https://komarev.com/ghpvc/?username=SuperH-0630&amp;&amp;style=flat-square" data-v-49bdd979></div>',2),V={class:"bottom"},P={class:"text more_line_text"},G=(a,t)=>{const s=a.__vccOpts||a;for(const[d,i]of t)s[d]=i;return s},J=G(o({__name:"index",setup(a){const t=s(function(a,t){if(!a)return"--";const s="number"==typeof a?new Date(1e3*a):a,d=s.getFullYear(),i=(s.getMonth()+1).toString().padStart(2,"0"),e=s.getDate().toString().padStart(2,"0"),r=s.getHours().toString().padStart(2,"0"),l=s.getMinutes().toString().padStart(2,"0"),o=s.getSeconds().toString().padStart(2,"0");return 1==t?[d,i].join("-"):2==t?[d,i,e].join("-"):3==t?d+"年"+i+"月":4==t?[d,i,e].join(".")+" "+[r,l,o].join(":"):5==t?[d,i,e].join("."):[d,i,e].join("-")+" "+[r,l,o].join(":")}(new Date(O)));return(a,s)=>(n(),v("div",D,[c("div",q,[B,m(i(N),{direction:"horizontal",class:"divider_horizontal"}),E,m(i(N),{direction:"horizontal",class:"divider_horizontal_small"}),I,m(i(N),{direction:"horizontal",class:"divider_horizontal"}),T,c("div",V,[c("p",P," 本页面最后更新于："+u(i(t))+"。 ",1)])])]))}}),[["__scopeId","data-v-49bdd979"]]);export{J as default};