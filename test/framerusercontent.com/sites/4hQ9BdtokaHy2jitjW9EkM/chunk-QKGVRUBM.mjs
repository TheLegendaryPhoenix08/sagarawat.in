import{h as G,o as B,p as oe,q as me,r as de,s as le,t as ce,u as pe,v as x,w as D}from"./chunk-7LGIFUNK.mjs";import{B as k,E as O,H as j,I as Z,K as $,L as h,O as ee,Q as re,T as w,W as P,a as H,c as a,ca as ae,d as _,e as A,fa as te,ia as ie,la as fe,ma as I,pa as ne,qa as F,ra as X,t as Q,u as W}from"./chunk-K4NCUN6G.mjs";import{d as b,j as z,n as N,p as Y,s as q,t as C,w as L,x as e,y as g}from"./chunk-KQLRTPKK.mjs";var Xe=F(x),Ge=Z(a.div),Be=F(D),De=F(G),Ee=F(B),Ue=["C17IuN2jy","fSp4EkG_s","Lf0xygJCY","EMFeuccqi","TSHy4Kvyw","C0jR6P1le","EGvrWHcJr","Uu3jCqBvk","iXfRsXa1j","zvYIFPhU7"],se="framer-PMFd3",Ve={C0jR6P1le:"framer-v-xx6l7f",C17IuN2jy:"framer-v-1513tae",EGvrWHcJr:"framer-v-6fexuc",EMFeuccqi:"framer-v-h7olhg",fSp4EkG_s:"framer-v-q9peon",iXfRsXa1j:"framer-v-eb9t9k",Lf0xygJCY:"framer-v-m72i2f",TSHy4Kvyw:"framer-v-1ef9h38",Uu3jCqBvk:"framer-v-10pco2e",zvYIFPhU7:"framer-v-c3wbjo"};function l(i,...f){let c={};return f?.forEach(m=>m&&Object.assign(c,i[m])),c}var Se={damping:60,delay:0,mass:1.2,stiffness:400,type:"spring"},he={damping:30,delay:0,mass:1,stiffness:400,type:"spring"},Je={opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:he,x:0,y:0},Te={opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:he,x:0,y:0},Ke={opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:0},ze=({children:i,blockDocumentScrolling:f,enabled:c=!0})=>{let[m,o]=te({blockDocumentScrolling:f});return i({hide:()=>o(!1),show:()=>o(!0),toggle:()=>o(!m),visible:c&&m})},Ne=({value:i,children:f})=>{let c=N(H),m=i??c.transition,o=q(()=>({...c,transition:m}),[JSON.stringify(m)]);return e(H.Provider,{value:o,children:f})},Ye=a(b),qe={"Desktop 02":"zvYIFPhU7","Large Desktop - 02":"iXfRsXa1j","Large Desktop":"C17IuN2jy","Phone - Close":"C0jR6P1le","Phone - Menu - Open":"Uu3jCqBvk","Phone - Open":"EGvrWHcJr","Tablet - Close":"Lf0xygJCY","Tablet - Menu - Open":"TSHy4Kvyw","Tablet - Open":"EMFeuccqi",Desktop:"fSp4EkG_s"},Le=({buttonVisible:i,height:f,id:c,width:m,...o})=>{var v,p,y;return{...o,LNlpERDuR:(v=i??o.LNlpERDuR)!==null&&v!==void 0?v:!0,variant:(y=(p=qe[o.variant])!==null&&p!==void 0?p:o.variant)!==null&&y!==void 0?y:"C17IuN2jy"}},_e=(i,f)=>i.layoutDependency?f.join("-")+i.layoutDependency:f.join("-"),Ae=z(function(i,f){let{activeLocale:c,setLocale:m}=W(),{style:o,className:v,layoutId:p,variant:y,LNlpERDuR:ue,...ge}=Le(i),{baseVariant:n,classNames:E,gestureHandlers:xe,gestureVariant:d,setGestureState:We,setVariant:u,variants:U}=ie({cycleOrder:Ue,defaultVariant:"C17IuN2jy",variant:y,variantClassNames:Ve}),t=_e(i,U),{activeVariantCallback:s,delay:Oe}=ae(n),ve=({overlay:r,paginationInfo:$e})=>s(async(...er)=>{r.show()}),ye=s(async(...r)=>{u("TSHy4Kvyw")}),be=s(async(...r)=>{u("EMFeuccqi")}),we=s(async(...r)=>{u("Uu3jCqBvk")}),Pe=s(async(...r)=>{u("EGvrWHcJr")}),Fe=s(async(...r)=>{u("EMFeuccqi")}),V=s(async(...r)=>{u("Lf0xygJCY")}),Me=s(async(...r)=>{u("EGvrWHcJr")}),S=s(async(...r)=>{u("C0jR6P1le")}),Ce=C(null),Ie=()=>!["Lf0xygJCY","EMFeuccqi","TSHy4Kvyw","C0jR6P1le","EGvrWHcJr","Uu3jCqBvk"].includes(n),J=C(null),Re=C(null),T=()=>!!["Lf0xygJCY","EMFeuccqi","TSHy4Kvyw","C0jR6P1le","EGvrWHcJr","Uu3jCqBvk"].includes(n),He=()=>!["Lf0xygJCY","EMFeuccqi","C0jR6P1le","EGvrWHcJr"].includes(n),Ze=Q(),ke=r=>["C0jR6P1le","EGvrWHcJr","Uu3jCqBvk"].includes(n)?!1:r,je=Y(),K=[de,pe],R=$();return e(A,{id:p??je,children:e(Ye,{animate:U,initial:!1,children:e(Ne,{value:Se,children:e(a.nav,{...ge,...xe,className:j(se,...K,"framer-1513tae",v,E),"data-framer-name":"Large Desktop",layoutDependency:t,layoutId:"C17IuN2jy",ref:f??Ce,style:{backgroundColor:"var(--token-d8720bd8-1d04-4edc-b312-5f0f1d887f62, rgb(231, 246, 234))",boxShadow:"none",...o},variants:{iXfRsXa1j:{boxShadow:"0px 4px 30px 0px rgba(0, 0, 0, 0.12)"},zvYIFPhU7:{boxShadow:"0px 4px 32px 0px rgba(0, 0, 0, 0.12)"}},...l({C0jR6P1le:{"data-framer-name":"Phone - Close"},EGvrWHcJr:{"data-framer-name":"Phone - Open"},EMFeuccqi:{"data-framer-name":"Tablet - Open"},fSp4EkG_s:{"data-framer-name":"Desktop"},iXfRsXa1j:{"data-framer-name":"Large Desktop - 02"},Lf0xygJCY:{"data-framer-name":"Tablet - Close"},TSHy4Kvyw:{"data-framer-name":"Tablet - Menu - Open"},Uu3jCqBvk:{"data-framer-name":"Phone - Menu - Open"},zvYIFPhU7:{"data-framer-name":"Desktop 02"}},n,d),children:e(a.div,{className:"framer-3zv16s","data-framer-name":"Container",layoutDependency:t,layoutId:"vtsfLRAG3",children:g(a.header,{className:"framer-1iqcmym","data-border":!0,"data-framer-name":"Stack",layoutDependency:t,layoutId:"dkNtol7lN",style:{"--border-bottom-width":"1px","--border-color":"rgba(0, 0, 0, 0.1)","--border-left-width":"0px","--border-right-width":"0px","--border-style":"solid","--border-top-width":"0px"},variants:{iXfRsXa1j:{"--border-bottom-width":"0px","--border-left-width":"0px","--border-right-width":"0px","--border-top-width":"0px"}},children:[e(w,{href:{webPageId:"augiA20Il"},children:e(a.a,{className:"framer-1uhrev1 framer-1aut9t6",layoutDependency:t,layoutId:"VLO2iDQa4",children:e(fe,{background:{alt:"",fit:"fill",pixelHeight:200,pixelWidth:652,sizes:"142px",src:"https://framerusercontent.com/images/mWElnlhNNlK0Ie2gJ5uBkK7L4.webp",srcSet:"https://framerusercontent.com/images/mWElnlhNNlK0Ie2gJ5uBkK7L4.webp?scale-down-to=512 512w,https://framerusercontent.com/images/mWElnlhNNlK0Ie2gJ5uBkK7L4.webp 652w"},className:"framer-1b4ipxe",layoutDependency:t,layoutId:"ximVC9JUY"})})}),g(a.nav,{className:"framer-1efvf6o","data-framer-name":"Link Wrapper",layoutDependency:t,layoutId:"Gcj1pArhI",style:{backgroundColor:"rgba(0, 0, 0, 0)",borderBottomLeftRadius:0,borderBottomRightRadius:0,borderTopLeftRadius:0,borderTopRightRadius:0,boxShadow:"none",opacity:1},variants:{C0jR6P1le:{backgroundColor:"rgb(255, 255, 255)",borderBottomLeftRadius:20,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20,boxShadow:"0px 4px 30px 0px rgba(0, 0, 0, 0.12)",opacity:0},EGvrWHcJr:{backgroundColor:"rgb(255, 255, 255)",borderBottomLeftRadius:20,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20,boxShadow:"0px 4px 30px 0px rgba(0, 0, 0, 0.12)"},EMFeuccqi:{backgroundColor:"rgb(255, 255, 255)",borderBottomLeftRadius:20,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20,boxShadow:"0px 4px 30px 0px rgba(0, 0, 0, 0.12)"},Lf0xygJCY:{backgroundColor:"rgb(255, 255, 255)",borderBottomLeftRadius:20,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20,boxShadow:"0px 4px 30px 0px rgba(0, 0, 0, 0.12)",opacity:0},TSHy4Kvyw:{backgroundColor:"rgb(255, 255, 255)",borderBottomLeftRadius:20,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20,boxShadow:"0px 4px 30px 0px rgba(0, 0, 0, 0.12)"},Uu3jCqBvk:{backgroundColor:"rgb(255, 255, 255)",borderBottomLeftRadius:20,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20,boxShadow:"0px 4px 30px 0px rgba(0, 0, 0, 0.12)"}},children:[Ie()&&e(ze,{blockDocumentScrolling:!1,children:r=>e(L,{children:e(h,{children:g(a.div,{className:"framer-8onbrz-container",id:`${p}-8onbrz`,layoutDependency:t,layoutId:"yDrYuJZnh-container",ref:J,children:[e(x,{height:"100%",id:"yDrYuJZnh",JyEsynpnm:"Home",K6AyUVBnR:!0,layoutId:"yDrYuJZnh",MMOyl3j1c:ve({overlay:r}),variant:"Hrf8putbE",width:"100%"}),e(_,{children:r.visible&&e(re,{alignment:"center",anchorRef:J,className:j(se,E,...K),collisionDetection:!1,"data-framer-portal-id":`${p}-8onbrz`,offsetX:0,offsetY:10,onDismiss:r.hide,placement:"bottom",portalSelector:"#overlay",safeArea:!0,zIndex:11,children:g(Ge,{__perspectiveFX:!1,__smartComponentFX:!0,__targetOpacity:1,animate:Te,className:"framer-atjrai","data-border":!0,"data-framer-name":"Menu",exit:Je,initial:Ke,layoutDependency:t,layoutId:"WIh4bjHcA",ref:Re,role:"dialog",style:{"--border-bottom-width":"1px","--border-color":"rgb(238, 238, 238)","--border-left-width":"1px","--border-right-width":"1px","--border-style":"solid","--border-top-width":"1px",backgroundColor:"rgb(255, 255, 255)",borderBottomLeftRadius:15,borderBottomRightRadius:15,borderTopLeftRadius:15,borderTopRightRadius:15},children:[e(I,{__fromCanvasComponent:!0,children:e(b,{children:e(a.p,{className:"framer-styles-preset-1d49fa6","data-styles-preset":"uoQg6zJIl",children:e(w,{href:{webPageId:"ZsDaimnhS"},openInNewTab:!1,smoothScroll:!1,children:e(a.a,{className:"framer-styles-preset-ynrzh6","data-styles-preset":"VQVy0_yiX",children:"Homepage 01"})})})}),className:"framer-lec2nz",fonts:["Inter"],layoutDependency:t,layoutId:"Py5LknADL",style:{"--framer-paragraph-spacing":"0px"},verticalAlignment:"top",withExternalLayout:!0}),e(I,{__fromCanvasComponent:!0,children:e(b,{children:e(a.p,{className:"framer-styles-preset-1d49fa6","data-styles-preset":"uoQg6zJIl",children:e(w,{href:{webPageId:"augiA20Il"},openInNewTab:!1,smoothScroll:!1,children:e(a.a,{className:"framer-styles-preset-ynrzh6","data-styles-preset":"VQVy0_yiX",children:"Homepage 02"})})})}),className:"framer-1o0ny9l",fonts:["Inter"],layoutDependency:t,layoutId:"DeRK6iWsX",style:{"--framer-paragraph-spacing":"0px"},verticalAlignment:"top",withExternalLayout:!0}),e(I,{__fromCanvasComponent:!0,children:e(b,{children:e(a.p,{className:"framer-styles-preset-1d49fa6","data-styles-preset":"uoQg6zJIl",children:e(w,{href:{webPageId:"X4L69jBmk"},openInNewTab:!1,smoothScroll:!1,children:e(a.a,{className:"framer-styles-preset-ynrzh6","data-styles-preset":"VQVy0_yiX",children:"Homepage 03"})})})}),className:"framer-1nj9fjz","data-framer-name":"Homapage 03",fonts:["Inter"],layoutDependency:t,layoutId:"Ew0g77mv9",style:{"--framer-paragraph-spacing":"0px"},verticalAlignment:"top",withExternalLayout:!0})]})})})]})})})}),T()&&g(a.div,{className:"framer-1f2p91b",layoutDependency:t,layoutId:"jcLJDh9Te",children:[e(a.div,{className:"framer-1w8ibze",layoutDependency:t,layoutId:"LLzIHhVL_",...l({EGvrWHcJr:{"data-highlight":!0,onTap:we},EMFeuccqi:{"data-highlight":!0,onTap:ye},TSHy4Kvyw:{"data-highlight":!0,onTap:be},Uu3jCqBvk:{"data-highlight":!0,onTap:Pe}},n,d),children:e(h,{children:e(a.div,{className:"framer-19mzgpv-container",layoutDependency:t,layoutId:"Ae35zYCfZ-container",children:e(x,{height:"100%",id:"Ae35zYCfZ",JyEsynpnm:"Home",K6AyUVBnR:!0,layoutId:"Ae35zYCfZ",variant:"Hrf8putbE",width:"100%",...l({C0jR6P1le:{variant:"X6dCaaGaJ"},EGvrWHcJr:{variant:"X6dCaaGaJ"},EMFeuccqi:{variant:"X6dCaaGaJ"},Lf0xygJCY:{variant:"X6dCaaGaJ"},TSHy4Kvyw:{variant:"X6dCaaGaJ"},Uu3jCqBvk:{variant:"X6dCaaGaJ"}},n,d)})})})}),He()&&e(h,{...l({TSHy4Kvyw:{width:"632px"},Uu3jCqBvk:{width:`calc(max(min(max(${R?.width||"100vw"}, 1px), 390px) - 24px, 1px) - 40px)`}},n,d),children:e(a.div,{className:"framer-1cb3vay-container",layoutDependency:t,layoutId:"jrLzjKwmM-container",children:e(D,{height:"100%",id:"jrLzjKwmM",layoutId:"jrLzjKwmM",variant:"YsJK1xILS",width:"100%",...l({TSHy4Kvyw:{style:{width:"100%"}},Uu3jCqBvk:{style:{width:"100%"}}},n,d)})})})]}),e(P,{links:[{href:{webPageId:"ZoGs5V4DB"},implicitPathVariables:void 0},{href:{webPageId:"ZoGs5V4DB"},implicitPathVariables:void 0},{href:{webPageId:"ZoGs5V4DB"},implicitPathVariables:void 0},{href:{webPageId:"ZoGs5V4DB"},implicitPathVariables:void 0},{href:{webPageId:"ZoGs5V4DB"},implicitPathVariables:void 0},{href:{webPageId:"ZoGs5V4DB"},implicitPathVariables:void 0},{href:{webPageId:"ZoGs5V4DB"},implicitPathVariables:void 0},{href:{webPageId:"ZoGs5V4DB"},implicitPathVariables:void 0},{href:{webPageId:"ZoGs5V4DB"},implicitPathVariables:void 0},{href:{webPageId:"ZoGs5V4DB"},implicitPathVariables:void 0}],children:r=>e(h,{children:e(a.div,{className:"framer-ikl1os-container",layoutDependency:t,layoutId:"RlApfFrwB-container",children:e(x,{height:"100%",id:"RlApfFrwB",JyEsynpnm:"About Us",K6AyUVBnR:!1,layoutId:"RlApfFrwB",variant:"Hrf8putbE",width:"100%",XQkHGhemH:r[0],...l({C0jR6P1le:{variant:"X6dCaaGaJ",XQkHGhemH:r[5]},EGvrWHcJr:{variant:"X6dCaaGaJ",XQkHGhemH:r[6]},EMFeuccqi:{variant:"X6dCaaGaJ",XQkHGhemH:r[3]},fSp4EkG_s:{XQkHGhemH:r[1]},iXfRsXa1j:{XQkHGhemH:r[8]},Lf0xygJCY:{variant:"X6dCaaGaJ",XQkHGhemH:r[2]},TSHy4Kvyw:{variant:"X6dCaaGaJ",XQkHGhemH:r[4]},Uu3jCqBvk:{variant:"X6dCaaGaJ",XQkHGhemH:r[7]},zvYIFPhU7:{XQkHGhemH:r[9]}},n,d)})})})}),e(P,{links:[{href:{webPageId:"Mcg0TYK5j"},implicitPathVariables:void 0},{href:{webPageId:"Mcg0TYK5j"},implicitPathVariables:void 0},{href:{webPageId:"Mcg0TYK5j"},implicitPathVariables:void 0},{href:{webPageId:"Mcg0TYK5j"},implicitPathVariables:void 0},{href:{webPageId:"Mcg0TYK5j"},implicitPathVariables:void 0},{href:{webPageId:"Mcg0TYK5j"},implicitPathVariables:void 0},{href:{webPageId:"Mcg0TYK5j"},implicitPathVariables:void 0},{href:{webPageId:"Mcg0TYK5j"},implicitPathVariables:void 0},{href:{webPageId:"Mcg0TYK5j"},implicitPathVariables:void 0},{href:{webPageId:"Mcg0TYK5j"},implicitPathVariables:void 0}],children:r=>e(h,{children:e(a.div,{className:"framer-1o3md96-container",layoutDependency:t,layoutId:"g5SNWhpGK-container",children:e(x,{height:"100%",id:"g5SNWhpGK",JyEsynpnm:"Case Studies",K6AyUVBnR:!1,layoutId:"g5SNWhpGK",variant:"Hrf8putbE",width:"100%",XQkHGhemH:r[0],...l({C0jR6P1le:{variant:"X6dCaaGaJ",XQkHGhemH:r[5]},EGvrWHcJr:{variant:"X6dCaaGaJ",XQkHGhemH:r[6]},EMFeuccqi:{variant:"X6dCaaGaJ",XQkHGhemH:r[3]},fSp4EkG_s:{XQkHGhemH:r[1]},iXfRsXa1j:{XQkHGhemH:r[8]},Lf0xygJCY:{variant:"X6dCaaGaJ",XQkHGhemH:r[2]},TSHy4Kvyw:{variant:"X6dCaaGaJ",XQkHGhemH:r[4]},Uu3jCqBvk:{variant:"X6dCaaGaJ",XQkHGhemH:r[7]},zvYIFPhU7:{XQkHGhemH:r[9]}},n,d)})})})}),e(P,{links:[{href:{webPageId:"kaxYeK31j"},implicitPathVariables:void 0},{href:{webPageId:"kaxYeK31j"},implicitPathVariables:void 0},{href:{webPageId:"kaxYeK31j"},implicitPathVariables:void 0},{href:{webPageId:"kaxYeK31j"},implicitPathVariables:void 0},{href:{webPageId:"kaxYeK31j"},implicitPathVariables:void 0},{href:{webPageId:"kaxYeK31j"},implicitPathVariables:void 0},{href:{webPageId:"kaxYeK31j"},implicitPathVariables:void 0},{href:{webPageId:"kaxYeK31j"},implicitPathVariables:void 0},{href:{webPageId:"kaxYeK31j"},implicitPathVariables:void 0},{href:{webPageId:"kaxYeK31j"},implicitPathVariables:void 0}],children:r=>e(h,{children:e(a.div,{className:"framer-1hg66vq-container",layoutDependency:t,layoutId:"HH37pljXt-container",children:e(x,{height:"100%",id:"HH37pljXt",JyEsynpnm:"Blog",K6AyUVBnR:!1,layoutId:"HH37pljXt",variant:"Hrf8putbE",width:"100%",XQkHGhemH:r[0],...l({C0jR6P1le:{variant:"X6dCaaGaJ",XQkHGhemH:r[5]},EGvrWHcJr:{variant:"X6dCaaGaJ",XQkHGhemH:r[6]},EMFeuccqi:{variant:"X6dCaaGaJ",XQkHGhemH:r[3]},fSp4EkG_s:{XQkHGhemH:r[1]},iXfRsXa1j:{XQkHGhemH:r[8]},Lf0xygJCY:{variant:"X6dCaaGaJ",XQkHGhemH:r[2]},TSHy4Kvyw:{variant:"X6dCaaGaJ",XQkHGhemH:r[4]},Uu3jCqBvk:{variant:"X6dCaaGaJ",XQkHGhemH:r[7]},zvYIFPhU7:{XQkHGhemH:r[9]}},n,d)})})})})]}),g(a.div,{className:"framer-hwv0uf","data-framer-name":"Stack",layoutDependency:t,layoutId:"FEiF3CYQs",children:[e(a.div,{className:"framer-132x9ae",layoutDependency:t,layoutId:"g1nluBSUd",children:ke(ue)&&e(P,{links:[{href:{webPageId:"BCvD3AXuw"},implicitPathVariables:void 0},{href:{webPageId:"BCvD3AXuw"},implicitPathVariables:void 0},{href:{webPageId:"BCvD3AXuw"},implicitPathVariables:void 0},{href:{webPageId:"BCvD3AXuw"},implicitPathVariables:void 0},{href:{webPageId:"BCvD3AXuw"},implicitPathVariables:void 0},{href:{webPageId:"BCvD3AXuw"},implicitPathVariables:void 0},{href:{webPageId:"BCvD3AXuw"},implicitPathVariables:void 0}],children:r=>e(h,{children:e(a.div,{className:"framer-1c8x63q-container",layoutDependency:t,layoutId:"jB7T4pKMh-container",children:e(G,{CFN8Haose:-45,height:"100%",id:"jB7T4pKMh",L5SNXGIRI:"Let\u2019s Talk",layoutId:"jB7T4pKMh",p5cbxyhHf:r[0],sasr8E_19:!1,variant:"DiLyqE8pe",width:"100%",wXbmBwaEn:!1,...l({EMFeuccqi:{p5cbxyhHf:r[3],variant:"u_I1aBPyq"},fSp4EkG_s:{p5cbxyhHf:r[1]},iXfRsXa1j:{p5cbxyhHf:r[5]},Lf0xygJCY:{p5cbxyhHf:r[2],variant:"u_I1aBPyq"},TSHy4Kvyw:{p5cbxyhHf:r[4],variant:"u_I1aBPyq"},zvYIFPhU7:{p5cbxyhHf:r[6]}},n,d)})})})})}),T()&&e(h,{children:e(a.div,{className:"framer-4wes74-container",layoutDependency:t,layoutId:"WD7KMmFLm-container",children:e(B,{color:"var(--token-a001cbcf-ef8b-44c3-b2e5-5a846a06d188, rgb(0, 0, 0))",height:"100%",iconSearch:"Home",iconSelection:"Menu",iconStyle15:"Filled",iconStyle2:"Filled",iconStyle7:"Filled",id:"WD7KMmFLm",layoutId:"WD7KMmFLm",mirrored:!1,selectByList:!0,style:{height:"100%",width:"100%"},width:"100%",...l({C0jR6P1le:{onClick:Me},EGvrWHcJr:{iconSelection:"Close",onClick:S},EMFeuccqi:{iconSelection:"Close",onClick:V},Lf0xygJCY:{onClick:Fe},TSHy4Kvyw:{iconSelection:"Close",onClick:V},Uu3jCqBvk:{iconSelection:"Close",onClick:S}},n,d)})})})]})]})})})})})})}),Qe=["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-PMFd3.framer-1aut9t6, .framer-PMFd3 .framer-1aut9t6 { display: block; }",".framer-PMFd3.framer-1513tae { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1400px; }",".framer-PMFd3 .framer-3zv16s { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1380px; overflow: hidden; padding: 0px 30px 0px 30px; position: relative; width: 1px; }",".framer-PMFd3 .framer-1iqcmym { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 20px 0px 24px 0px; position: relative; width: 1px; }",".framer-PMFd3 .framer-1uhrev1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }",".framer-PMFd3 .framer-1b4ipxe { aspect-ratio: 3.5 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 41px); overflow: visible; position: relative; width: 142px; }",".framer-PMFd3 .framer-1efvf6o { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",".framer-PMFd3 .framer-8onbrz-container, .framer-PMFd3 .framer-19mzgpv-container, .framer-PMFd3 .framer-1cb3vay-container, .framer-PMFd3 .framer-ikl1os-container, .framer-PMFd3 .framer-1o3md96-container, .framer-PMFd3 .framer-1hg66vq-container, .framer-PMFd3 .framer-1c8x63q-container { flex: none; height: auto; position: relative; width: auto; }",".framer-PMFd3 .framer-atjrai { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 15px; position: relative; width: 150px; will-change: var(--framer-will-change-override, transform); }",".framer-PMFd3 .framer-lec2nz, .framer-PMFd3 .framer-1o0ny9l, .framer-PMFd3 .framer-1nj9fjz { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",".framer-PMFd3 .framer-1f2p91b, .framer-PMFd3 .framer-132x9ae { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",".framer-PMFd3 .framer-1w8ibze { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",".framer-PMFd3 .framer-hwv0uf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",".framer-PMFd3 .framer-4wes74-container { cursor: pointer; flex: none; height: 37px; position: relative; width: 36px; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-PMFd3.framer-1513tae, .framer-PMFd3 .framer-3zv16s, .framer-PMFd3 .framer-1uhrev1, .framer-PMFd3 .framer-1efvf6o, .framer-PMFd3 .framer-atjrai, .framer-PMFd3 .framer-1f2p91b, .framer-PMFd3 .framer-1w8ibze, .framer-PMFd3 .framer-hwv0uf, .framer-PMFd3 .framer-132x9ae { gap: 0px; } .framer-PMFd3.framer-1513tae > *, .framer-PMFd3 .framer-3zv16s > *, .framer-PMFd3 .framer-1uhrev1 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-PMFd3.framer-1513tae > :first-child, .framer-PMFd3 .framer-3zv16s > :first-child, .framer-PMFd3 .framer-1uhrev1 > :first-child, .framer-PMFd3 .framer-1efvf6o > :first-child, .framer-PMFd3 .framer-hwv0uf > :first-child { margin-left: 0px; } .framer-PMFd3.framer-1513tae > :last-child, .framer-PMFd3 .framer-3zv16s > :last-child, .framer-PMFd3 .framer-1uhrev1 > :last-child, .framer-PMFd3 .framer-1efvf6o > :last-child, .framer-PMFd3 .framer-hwv0uf > :last-child { margin-right: 0px; } .framer-PMFd3 .framer-1efvf6o > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-PMFd3 .framer-atjrai > * { margin: 0px; margin-bottom: calc(5px / 2); margin-top: calc(5px / 2); } .framer-PMFd3 .framer-atjrai > :first-child, .framer-PMFd3 .framer-1f2p91b > :first-child, .framer-PMFd3 .framer-1w8ibze > :first-child, .framer-PMFd3 .framer-132x9ae > :first-child { margin-top: 0px; } .framer-PMFd3 .framer-atjrai > :last-child, .framer-PMFd3 .framer-1f2p91b > :last-child, .framer-PMFd3 .framer-1w8ibze > :last-child, .framer-PMFd3 .framer-132x9ae > :last-child { margin-bottom: 0px; } .framer-PMFd3 .framer-1f2p91b > *, .framer-PMFd3 .framer-1w8ibze > *, .framer-PMFd3 .framer-132x9ae > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-PMFd3 .framer-hwv0uf > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } }",".framer-PMFd3.framer-v-q9peon.framer-1513tae, .framer-PMFd3.framer-v-c3wbjo.framer-1513tae { width: 992px; }",".framer-PMFd3.framer-v-q9peon .framer-3zv16s, .framer-PMFd3.framer-v-c3wbjo .framer-3zv16s { max-width: 1000px; }",".framer-PMFd3.framer-v-m72i2f.framer-1513tae, .framer-PMFd3.framer-v-h7olhg.framer-1513tae, .framer-PMFd3.framer-v-1ef9h38.framer-1513tae { overflow: visible; width: 720px; }",".framer-PMFd3.framer-v-m72i2f .framer-3zv16s, .framer-PMFd3.framer-v-h7olhg .framer-3zv16s, .framer-PMFd3.framer-v-1ef9h38 .framer-3zv16s { max-width: 760px; overflow: visible; padding: 0px 24px 0px 24px; }",".framer-PMFd3.framer-v-m72i2f .framer-1iqcmym, .framer-PMFd3.framer-v-h7olhg .framer-1iqcmym, .framer-PMFd3.framer-v-1ef9h38 .framer-1iqcmym, .framer-PMFd3.framer-v-xx6l7f .framer-1iqcmym, .framer-PMFd3.framer-v-6fexuc .framer-1iqcmym, .framer-PMFd3.framer-v-10pco2e .framer-1iqcmym { padding: 24px 0px 18px 0px; }",".framer-PMFd3.framer-v-m72i2f .framer-1efvf6o, .framer-PMFd3.framer-v-xx6l7f .framer-1efvf6o { flex-direction: column; gap: 14px; justify-content: flex-start; left: 0px; padding: 0px 20px 0px 20px; position: absolute; top: 80px; width: 100%; z-index: 1; }",".framer-PMFd3.framer-v-m72i2f .framer-hwv0uf, .framer-PMFd3.framer-v-h7olhg .framer-hwv0uf, .framer-PMFd3.framer-v-1ef9h38 .framer-hwv0uf, .framer-PMFd3.framer-v-xx6l7f .framer-hwv0uf, .framer-PMFd3.framer-v-6fexuc .framer-hwv0uf, .framer-PMFd3.framer-v-10pco2e .framer-hwv0uf { gap: 16px; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-PMFd3.framer-v-m72i2f .framer-1efvf6o, .framer-PMFd3.framer-v-m72i2f .framer-hwv0uf { gap: 0px; } .framer-PMFd3.framer-v-m72i2f .framer-1efvf6o > * { margin: 0px; margin-bottom: calc(14px / 2); margin-top: calc(14px / 2); } .framer-PMFd3.framer-v-m72i2f .framer-1efvf6o > :first-child { margin-top: 0px; } .framer-PMFd3.framer-v-m72i2f .framer-1efvf6o > :last-child { margin-bottom: 0px; } .framer-PMFd3.framer-v-m72i2f .framer-hwv0uf > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-PMFd3.framer-v-m72i2f .framer-hwv0uf > :first-child { margin-left: 0px; } .framer-PMFd3.framer-v-m72i2f .framer-hwv0uf > :last-child { margin-right: 0px; } }",".framer-PMFd3.framer-v-h7olhg .framer-1efvf6o, .framer-PMFd3.framer-v-1ef9h38 .framer-1efvf6o { flex-direction: column; gap: 14px; justify-content: flex-start; left: 0px; overflow: hidden; padding: 20px; position: absolute; top: 105px; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 1; }",".framer-PMFd3.framer-v-h7olhg .framer-1f2p91b, .framer-PMFd3.framer-v-1ef9h38 .framer-1f2p91b { overflow: hidden; }",".framer-PMFd3.framer-v-h7olhg .framer-1w8ibze, .framer-PMFd3.framer-v-1ef9h38 .framer-1w8ibze, .framer-PMFd3.framer-v-6fexuc .framer-1w8ibze, .framer-PMFd3.framer-v-10pco2e .framer-1w8ibze { cursor: pointer; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-PMFd3.framer-v-h7olhg .framer-1efvf6o, .framer-PMFd3.framer-v-h7olhg .framer-hwv0uf { gap: 0px; } .framer-PMFd3.framer-v-h7olhg .framer-1efvf6o > * { margin: 0px; margin-bottom: calc(14px / 2); margin-top: calc(14px / 2); } .framer-PMFd3.framer-v-h7olhg .framer-1efvf6o > :first-child { margin-top: 0px; } .framer-PMFd3.framer-v-h7olhg .framer-1efvf6o > :last-child { margin-bottom: 0px; } .framer-PMFd3.framer-v-h7olhg .framer-hwv0uf > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-PMFd3.framer-v-h7olhg .framer-hwv0uf > :first-child { margin-left: 0px; } .framer-PMFd3.framer-v-h7olhg .framer-hwv0uf > :last-child { margin-right: 0px; } }",".framer-PMFd3.framer-v-1ef9h38 .framer-1cb3vay-container { width: 632px; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-PMFd3.framer-v-1ef9h38 .framer-1efvf6o, .framer-PMFd3.framer-v-1ef9h38 .framer-hwv0uf { gap: 0px; } .framer-PMFd3.framer-v-1ef9h38 .framer-1efvf6o > * { margin: 0px; margin-bottom: calc(14px / 2); margin-top: calc(14px / 2); } .framer-PMFd3.framer-v-1ef9h38 .framer-1efvf6o > :first-child { margin-top: 0px; } .framer-PMFd3.framer-v-1ef9h38 .framer-1efvf6o > :last-child { margin-bottom: 0px; } .framer-PMFd3.framer-v-1ef9h38 .framer-hwv0uf > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-PMFd3.framer-v-1ef9h38 .framer-hwv0uf > :first-child { margin-left: 0px; } .framer-PMFd3.framer-v-1ef9h38 .framer-hwv0uf > :last-child { margin-right: 0px; } }",".framer-PMFd3.framer-v-xx6l7f.framer-1513tae, .framer-PMFd3.framer-v-6fexuc.framer-1513tae, .framer-PMFd3.framer-v-10pco2e.framer-1513tae { overflow: visible; width: 400px; }",".framer-PMFd3.framer-v-xx6l7f .framer-3zv16s, .framer-PMFd3.framer-v-6fexuc .framer-3zv16s, .framer-PMFd3.framer-v-10pco2e .framer-3zv16s { max-width: 390px; overflow: visible; padding: 0px 12px 0px 12px; }",".framer-PMFd3.framer-v-xx6l7f .framer-132x9ae, .framer-PMFd3.framer-v-6fexuc .framer-132x9ae, .framer-PMFd3.framer-v-10pco2e .framer-132x9ae { min-height: 48px; min-width: 150px; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-PMFd3.framer-v-xx6l7f .framer-1efvf6o, .framer-PMFd3.framer-v-xx6l7f .framer-hwv0uf { gap: 0px; } .framer-PMFd3.framer-v-xx6l7f .framer-1efvf6o > * { margin: 0px; margin-bottom: calc(14px / 2); margin-top: calc(14px / 2); } .framer-PMFd3.framer-v-xx6l7f .framer-1efvf6o > :first-child { margin-top: 0px; } .framer-PMFd3.framer-v-xx6l7f .framer-1efvf6o > :last-child { margin-bottom: 0px; } .framer-PMFd3.framer-v-xx6l7f .framer-hwv0uf > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-PMFd3.framer-v-xx6l7f .framer-hwv0uf > :first-child { margin-left: 0px; } .framer-PMFd3.framer-v-xx6l7f .framer-hwv0uf > :last-child { margin-right: 0px; } }",".framer-PMFd3.framer-v-6fexuc .framer-1efvf6o, .framer-PMFd3.framer-v-10pco2e .framer-1efvf6o { flex-direction: column; gap: 14px; justify-content: flex-start; left: 0px; overflow: hidden; padding: 20px; position: absolute; top: 100px; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 1; }",".framer-PMFd3.framer-v-6fexuc .framer-1f2p91b, .framer-PMFd3.framer-v-10pco2e .framer-1f2p91b { overflow: hidden; width: 100%; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-PMFd3.framer-v-6fexuc .framer-1efvf6o, .framer-PMFd3.framer-v-6fexuc .framer-hwv0uf { gap: 0px; } .framer-PMFd3.framer-v-6fexuc .framer-1efvf6o > * { margin: 0px; margin-bottom: calc(14px / 2); margin-top: calc(14px / 2); } .framer-PMFd3.framer-v-6fexuc .framer-1efvf6o > :first-child { margin-top: 0px; } .framer-PMFd3.framer-v-6fexuc .framer-1efvf6o > :last-child { margin-bottom: 0px; } .framer-PMFd3.framer-v-6fexuc .framer-hwv0uf > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-PMFd3.framer-v-6fexuc .framer-hwv0uf > :first-child { margin-left: 0px; } .framer-PMFd3.framer-v-6fexuc .framer-hwv0uf > :last-child { margin-right: 0px; } }",".framer-PMFd3.framer-v-10pco2e .framer-1cb3vay-container { width: 100%; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-PMFd3.framer-v-10pco2e .framer-1efvf6o, .framer-PMFd3.framer-v-10pco2e .framer-hwv0uf { gap: 0px; } .framer-PMFd3.framer-v-10pco2e .framer-1efvf6o > * { margin: 0px; margin-bottom: calc(14px / 2); margin-top: calc(14px / 2); } .framer-PMFd3.framer-v-10pco2e .framer-1efvf6o > :first-child { margin-top: 0px; } .framer-PMFd3.framer-v-10pco2e .framer-1efvf6o > :last-child { margin-bottom: 0px; } .framer-PMFd3.framer-v-10pco2e .framer-hwv0uf > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-PMFd3.framer-v-10pco2e .framer-hwv0uf > :first-child { margin-left: 0px; } .framer-PMFd3.framer-v-10pco2e .framer-hwv0uf > :last-child { margin-right: 0px; } }",...me,...ce,'.framer-PMFd3[data-border="true"]::after, .framer-PMFd3 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'],M=ee(Ae,Qe,"framer-PMFd3"),hr=M;M.displayName="Header";M.defaultProps={height:89,width:1400};O(M,{variant:{options:["C17IuN2jy","fSp4EkG_s","Lf0xygJCY","EMFeuccqi","TSHy4Kvyw","C0jR6P1le","EGvrWHcJr","Uu3jCqBvk","iXfRsXa1j","zvYIFPhU7"],optionTitles:["Large Desktop","Desktop","Tablet - Close","Tablet - Open","Tablet - Menu - Open","Phone - Close","Phone - Open","Phone - Menu - Open","Large Desktop - 02","Desktop 02"],title:"Variant",type:k.Enum},LNlpERDuR:{defaultValue:!0,title:"Button Visible",type:k.Boolean}});ne(M,[{explicitInter:!0,fonts:[{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",url:"https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",weight:"400"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",url:"https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",weight:"400"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+1F00-1FFF",url:"https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",weight:"400"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0370-03FF",url:"https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",weight:"400"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",url:"https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",weight:"400"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",url:"https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",weight:"400"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",url:"https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",weight:"400"}]},...Xe,...Be,...De,...Ee,...X(oe),...X(le)],{supportsExplicitInterCodegen:!0});export{hr as a};
//# sourceMappingURL=chunk-QKGVRUBM.mjs.map
