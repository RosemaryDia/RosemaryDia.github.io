(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{79622:function(t,e,i){"use strict";var n=i(78997);e.Z=void 0;var r=n(i(76906)),a=i(9268),l=(0,r.default)((0,a.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");e.Z=l},43370:function(t,e,i){"use strict";var n=i(78997);e.Z=void 0;var r=n(i(76906)),a=i(9268),l=(0,r.default)((0,a.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");e.Z=l},87008:function(t,e,i){"use strict";var n=i(78997);e.Z=void 0,function(t,e){if((e||!t||!t.__esModule)&&null!==t&&("object"==typeof t||"function"==typeof t)){var i=l(e);if(i&&i.has(t))return i.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if("default"!==a&&Object.prototype.hasOwnProperty.call(t,a)){var o=r?Object.getOwnPropertyDescriptor(t,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=t[a]}n.default=t,i&&i.set(t,n)}}(i(86006));var r=n(i(76906)),a=i(9268);function l(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,i=new WeakMap;return(l=function(t){return t?i:e})(t)}var o=(0,r.default)((0,a.jsx)("path",{d:"M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"}),"WhatsApp");e.Z=o},93581:function(t,e,i){"use strict";var n=i(46750),r=i(40431),a=i(86006),l=i(89791),o=i(47562),s=i(23343),c=i(95457),d=i(18006),u=i(33155),p=i(78473),h=i(96655),m=i(9268);let g=["edge","children","className","color","disabled","disableFocusRipple","size"],x=t=>{let{classes:e,disabled:i,color:n,edge:r,size:a}=t,l={root:["root",i&&"disabled","default"!==n&&`color${(0,p.Z)(n)}`,r&&`edge${(0,p.Z)(r)}`,`size${(0,p.Z)(a)}`]};return(0,o.Z)(l,h.r,e)},f=(0,c.ZP)(u.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:i}=t;return[e.root,"default"!==i.color&&e[`color${(0,p.Z)(i.color)}`],i.edge&&e[`edge${(0,p.Z)(i.edge)}`],e[`size${(0,p.Z)(i.size)}`]]}})(({theme:t,ownerState:e})=>(0,r.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!e.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,s.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12}),({theme:t,ownerState:e})=>{var i;let n=null==(i=(t.vars||t).palette)?void 0:i[e.color];return(0,r.Z)({},"inherit"===e.color&&{color:"inherit"},"inherit"!==e.color&&"default"!==e.color&&(0,r.Z)({color:null==n?void 0:n.main},!e.disableRipple&&{"&:hover":(0,r.Z)({},n&&{backgroundColor:t.vars?`rgba(${n.mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,s.Fq)(n.main,t.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===e.size&&{padding:5,fontSize:t.typography.pxToRem(18)},"large"===e.size&&{padding:12,fontSize:t.typography.pxToRem(28)},{[`&.${h.Z.disabled}`]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}})}),b=a.forwardRef(function(t,e){let i=(0,d.Z)({props:t,name:"MuiIconButton"}),{edge:a=!1,children:o,className:s,color:c="default",disabled:u=!1,disableFocusRipple:p=!1,size:h="medium"}=i,b=(0,n.Z)(i,g),y=(0,r.Z)({},i,{edge:a,color:c,disabled:u,disableFocusRipple:p,size:h}),Z=x(y);return(0,m.jsx)(f,(0,r.Z)({className:(0,l.Z)(Z.root,s),centerRipple:!0,focusRipple:!p,disabled:u,ref:e,ownerState:y},b,{children:o}))});e.Z=b},96655:function(t,e,i){"use strict";i.d(e,{r:function(){return a}});var n=i(88539),r=i(13809);function a(t){return(0,r.Z)("MuiIconButton",t)}let l=(0,n.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);e.Z=l},25638:function(t,e,i){"use strict";i.d(e,{f:function(){return a}});var n=i(88539),r=i(13809);function a(t){return(0,r.Z)("MuiListItemIcon",t)}let l=(0,n.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);e.Z=l},8929:function(t,e,i){"use strict";var n=i(46750),r=i(40431),a=i(86006),l=i(89791),o=i(47562),s=i(23343),c=i(95457),d=i(18006),u=i(22879),p=i(33155),h=i(76837),m=i(84414),g=i(69515),x=i(25638),f=i(89042),b=i(67490),y=i(9268);let Z=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],v=t=>{let{disabled:e,dense:i,divider:n,disableGutters:a,selected:l,classes:s}=t,c=(0,o.Z)({root:["root",i&&"dense",e&&"disabled",!a&&"gutters",n&&"divider",l&&"selected"]},b.K,s);return(0,r.Z)({},s,c)},j=(0,c.ZP)(p.Z,{shouldForwardProp:t=>(0,c.FO)(t)||"classes"===t,name:"MuiMenuItem",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:i}=t;return[e.root,i.dense&&e.dense,i.divider&&e.divider,!i.disableGutters&&e.gutters]}})(({theme:t,ownerState:e})=>(0,r.Z)({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!e.disableGutters&&{paddingLeft:16,paddingRight:16},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${b.Z.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:(0,s.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${b.Z.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:(0,s.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${b.Z.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:(0,s.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:(0,s.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${b.Z.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${b.Z.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`& + .${g.Z.root}`]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},[`& + .${g.Z.inset}`]:{marginLeft:52},[`& .${f.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${f.Z.inset}`]:{paddingLeft:36},[`& .${x.Z.root}`]:{minWidth:36}},!e.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},e.dense&&(0,r.Z)({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{[`& .${x.Z.root} svg`]:{fontSize:"1.25rem"}}))),k=a.forwardRef(function(t,e){let i;let o=(0,d.Z)({props:t,name:"MuiMenuItem"}),{autoFocus:s=!1,component:c="li",dense:p=!1,divider:g=!1,disableGutters:x=!1,focusVisibleClassName:f,role:b="menuitem",tabIndex:k,className:w}=o,C=(0,n.Z)(o,Z),B=a.useContext(u.Z),F=a.useMemo(()=>({dense:p||B.dense||!1,disableGutters:x}),[B.dense,p,x]),S=a.useRef(null);(0,h.Z)(()=>{s&&S.current&&S.current.focus()},[s]);let z=(0,r.Z)({},o,{dense:F.dense,divider:g,disableGutters:x}),_=v(o),O=(0,m.Z)(S,e);return o.disabled||(i=void 0!==k?k:-1),(0,y.jsx)(u.Z.Provider,{value:F,children:(0,y.jsx)(j,(0,r.Z)({ref:O,role:b,tabIndex:i,component:c,focusVisibleClassName:(0,l.Z)(_.focusVisible,f),className:(0,l.Z)(_.root,w)},C,{ownerState:z,classes:_}))})});e.Z=k},67490:function(t,e,i){"use strict";i.d(e,{K:function(){return a}});var n=i(88539),r=i(13809);function a(t){return(0,r.Z)("MuiMenuItem",t)}let l=(0,n.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);e.Z=l},5615:function(t,e,i){Promise.resolve().then(i.bind(i,33134))},50966:function(t,e,i){"use strict";var n=i(9268),r=i(76394),a=i.n(r),l=i(65507),o=i(78072),s=i(83708),c=i(43366),d=i(52956),u=i(18100),p=i(13120),h=i(46866);let m=[{title:"21800000",path:"https://mui.com/material-ui/react-link/",icon:s.Z},{title:"cs@rosemary.hk",path:"2180000",icon:c.Z},{title:"www.rosemary.hk",path:"2180000",icon:d.Z},{title:"_rosemaryhk_",path:"2180000",icon:u.Z},{title:"_rosemaryhk_",path:"2180000",icon:p.Z}];e.Z=function(){return(0,n.jsx)(l.Z,{children:m.map((t,e)=>(0,n.jsxs)("span",{children:[(0,n.jsx)(a(),{style:{verticalAlign:"middle",display:"inline-block"},width:25,height:25,src:t.icon,alt:t.title}),(0,n.jsx)(o.Z,{sx:{verticalAlign:"middle",display:"inline-block",paddingLeft:1,paddingTop:.5},color:"black",target:"_blank",rel:"noreferrer",href:t.path,underline:"none",children:(0,n.jsx)(h.Z,{type:"desktopBody",children:t.title})})]},"".concat(t.title,"_").concat(e)))})}},46866:function(t,e,i){"use strict";var n=i(9268),r=i(90409);i(86006);var a=i(84835),l=i.n(a);e.Z=function(t){let{type:e,children:i,...a}=t,o="div";return l().isUndefined(t.component)||(o=t.component),(0,n.jsx)(r.Z,{variant:e,component:o,...a,children:i})}},33134:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return ts}});var n=i(9268),r=i(86006),a=i(17284),l=i(75626),o=i(23779),s=i(56008),c=i(17464);function d(t){let{options:e,CacheProvider:i=c.C,children:a}=t,[{cache:l,flush:d}]=r.useState(()=>{let t=(0,o.Z)(e);t.compat=!0;let i=t.insert,n=[];return t.insert=function(){for(var e=arguments.length,r=Array(e),a=0;a<e;a++)r[a]=arguments[a];let l=r[1];return void 0===t.inserted[l.name]&&n.push(l.name),i(...r)},{cache:t,flush:()=>{let t=n;return n=[],t}}});return(0,s.useServerInsertedHTML)(()=>{let t=d();if(0===t.length)return null;let e="";for(let i of t)e+=l.inserted[i];return(0,n.jsx)("style",{"data-emotion":"".concat(l.key," ").concat(t.join(" ")),dangerouslySetInnerHTML:{__html:e}},l.key)}),(0,n.jsx)(i,{value:l,children:a})}var u=i(60017),p=i(81771),h=i(90409),m=i(89843),g=i(40248),x=i(64020),f=i(27052),b=i(79622),y=i(43370),Z=i(88939),v=i(60847),j=i(14200),k=i(65507),w=i(78072),C=i(76394),B=i.n(C),F=i(83708),S=i(43366),z=i(52956),_=i(18100),O=i(13120),$=i(84835),M=i.n($),I=i(46866),R=i(50966);let W=[{title:"About Us",sublist:[{title:"FAQ",path:"faq"},{title:"Our Brand",path:"faq"},{title:"Education",path:"faq"}]},{title:"Product",sublist:[{title:"Necklace",path:"find-your-jewellery?type=diamond-necklaces"},{title:"Earring",path:"find-your-jewellery?type=diamond-earrings"},{title:"Diamond Ring",path:"find-your-jewellery?type=diamond-rings"},{title:"Custom Ring",path:"custom-ring"}]},{title:"Support",sublist:[{title:"Return Policy",path:"faq"},{title:"Privacy Policy",path:"faq"},{title:"Shipping Policy",path:"faq"},{title:"Cancellation Policy",path:"faq"},{title:"Terms and Condition",path:"faq"}]},{title:"Contact Us",sublist:[{title:"21800000",path:"https://mui.com/material-ui/react-link/",icon:F.Z},{title:"cs@rosemary.hk",path:"2180000",icon:S.Z},{title:"www.rosemary.hk",path:"2180000",icon:z.Z},{title:"_rosemaryhk_",path:"2180000",icon:_.Z},{title:"_rosemaryhk_",path:"2180000",icon:O.Z}]}];function P(){return(0,n.jsx)(h.Z,{display:"block",mt:3,align:"center",variant:"desktopHeadline2",color:"#000000",children:"\xa9 ".concat(new Date().getFullYear()," Rosemary")})}function H(){let[t,e]=(0,r.useState)(!1),[i,a]=(0,r.useState)(!1),[l,o]=(0,r.useState)(!1),s=n=>{"About Us"===n.title?e(!t):"Product"===n.title?a(!i):"Support"===n.title&&o(!l)},c=e=>"About Us"===e.title?t:"Product"===e.title?i:"Support"===e.title?l:void 0,d=t=>"Contact Us"===t;return(0,n.jsx)(p.Z,{component:"footer",sx:{bottom:0,width:"100%",backgroundColor:"#F9F9F9",borderTopStyle:"solid",borderColor:"#8B8B8B"},pb:2,children:(0,n.jsxs)(m.Z,{maxWidth:"xl",disableGutters:!0,sx:{pl:{xs:3,md:8},pr:{xs:3,md:8}},children:[(0,n.jsx)(g.Z,{container:!0,spacing:2,pt:5,sx:{display:{xs:"none",md:"flex"}},children:W.map(t=>(0,n.jsxs)(g.Z,{xs:12,sm:3,children:[(0,n.jsx)(I.Z,{type:"desktopHeadline2",gutterBottom:!0,children:t.title}),t.sublist.length>0&&(0,n.jsxs)(k.Z,{pt:1,children:[!d(t.title)&&t.sublist.map(t=>(0,n.jsx)(w.Z,{color:"black",href:"/".concat(t.path),variant:"desktopBody",underline:"none",gutterBottom:!0,children:t.title},t.title)),d(t.title)&&(0,n.jsx)(R.Z,{})]})]},t.title))}),(0,n.jsxs)(x.Z,{component:"nav",sx:{display:{xs:"inline",md:"none"}},children:[W.filter(t=>"Contact Us"!==t.title).map(t=>(0,n.jsxs)("div",{children:[(0,n.jsxs)(f.Z,{onClick:()=>s(t),children:[(0,n.jsx)(Z.Z,{sx:{pl:2},primary:t.title}),c(t)?(0,n.jsx)(b.Z,{}):(0,n.jsx)(y.Z,{})]}),(0,n.jsx)(j.Z,{sx:{borderBottomWidth:1,background:"#8B8B8B"}}),(0,n.jsx)(v.Z,{in:c(t),timeout:"auto",unmountOnExit:!0,children:t.sublist.length>0&&(0,n.jsx)(x.Z,{component:"div",children:t.sublist.map((t,e)=>(0,n.jsx)(f.Z,{sx:{pl:4},children:(0,n.jsx)(Z.Z,{primary:t.title})},"".concat(t.title,"_").concat(e)))})})]},t.title)),(0,n.jsxs)(g.Z,{container:!0,mt:2,ml:3,spacing:2,children:[(0,n.jsx)(g.Z,{xs:12,children:(0,n.jsx)(I.Z,{variant:"mobileHeadline2",gutterBottom:!0,children:"Contact Us"})}),M().find(W,{title:"Contact Us"}).sublist.map((t,e)=>(0,n.jsx)(g.Z,{xs:4,children:(0,n.jsx)(B(),{width:29,height:29,src:t.icon,alt:t.title})},"".concat(t.title,"_").concat(e)))]}),(0,n.jsx)(j.Z,{sx:{borderBottomWidth:1,background:"#8B8B8B"}})]}),(0,n.jsx)(P,{})]})})}var A=i(95824),L=i(46115),E=i(93581),T=i(16476),U={src:"/_next/static/media/Rosemary-logo-name.5315b3ac.svg",height:200,width:278,blurWidth:0,blurHeight:0},q={src:"/_next/static/media/Rosemary-logo-only.53242fd5.svg",height:73,width:121,blurWidth:0,blurHeight:0},N={src:"/_next/static/media/User.38e236f5.svg",height:32,width:32,blurWidth:0,blurHeight:0},D={src:"/_next/static/media/Wishlist.8986b86e.svg",height:32,width:32,blurWidth:0,blurHeight:0},V={src:"/_next/static/media/Shopping-bag.ddf191dd.svg",height:32,width:32,blurWidth:0,blurHeight:0},G={src:"/_next/static/media/Calendar.a5c6c661.svg",height:32,width:32,blurWidth:0,blurHeight:0},J={src:"/_next/static/media/Menu.8b6978c7.svg",height:32,width:32,blurWidth:0,blurHeight:0},K=i(35846),Q=i.n(K),X=i(39),Y=i(8929),tt=i(52161);let te=[{title:"About Us",sublist:[]},{title:"Best Sellers",sublist:[]},{title:"Find Jewellery",sublist:[]},{title:"Custom Ring",sublist:[]},{title:"Contact Us",sublist:[]}];var ti=function(){let[t,e]=r.useState(null),[i,a]=r.useState(null),l=()=>{e(null)};return(0,n.jsx)(A.Z,{position:"static",sx:{boxShadow:"none",bgcolor:"#F9F9F9"},children:(0,n.jsx)(m.Z,{maxWidth:"lg",children:(0,n.jsxs)(L.Z,{children:[(0,n.jsx)(p.Z,{sx:{flexGrow:1,display:{xs:"none",md:"block"}},children:(0,n.jsxs)(g.Z,{container:!0,spacing:0,children:[(0,n.jsxs)(g.Z,{xs:!0,display:"flex",justifyContent:"start",alignItems:"center",children:[(0,n.jsx)(X.Z,{variant:"standard",children:(0,n.jsxs)(tt.Z,{defaultValue:"en",inputProps:{name:"lang",id:"uncontrolled-native"},children:[(0,n.jsx)(Y.Z,{value:"en",children:"Eng"}),(0,n.jsx)(Y.Z,{value:"ch",children:"中文"})]})}),(0,n.jsxs)(Q(),{href:"/appointment",style:{marginLeft:"32px"},children:[(0,n.jsx)(B(),{style:{verticalAlign:"middle",display:"inline-block"},widht:25,height:25,src:G,alt:"appointment"}),(0,n.jsx)(I.Z,{style:{verticalAlign:"middle",display:"inline-block",paddingLeft:"8px"},type:"desktopButton",children:"Book An Appointment"})]})]}),(0,n.jsx)(g.Z,{xs:6,display:"flex",justifyContent:"center",alignItems:"center",children:(0,n.jsx)(Q(),{href:"/",children:(0,n.jsx)(B(),{width:100,height:90,src:U,alt:"Logo"})})}),(0,n.jsx)(g.Z,{xs:!0,display:"flex",justifyContent:"end",alignItems:"center",children:(0,n.jsxs)(k.Z,{direction:"row",children:[(0,n.jsx)(Q(),{href:"/account",style:{marginLeft:"32px"},children:(0,n.jsx)(E.Z,{size:"large",sx:{display:{xs:"none",md:"inline-flex"}},children:(0,n.jsx)(B(),{width:25,height:25,src:N,alt:"User"})})}),(0,n.jsx)(E.Z,{size:"large",children:(0,n.jsx)(B(),{width:25,height:25,src:D,alt:"Wishlist"})}),(0,n.jsx)(E.Z,{size:"large",children:(0,n.jsx)(B(),{width:25,height:25,src:V,alt:"Shopping Bag"})})]})})]})}),(0,n.jsx)(p.Z,{sx:{flexGrow:1,display:{xs:"block",md:"none"}},children:(0,n.jsxs)(g.Z,{container:!0,spacing:0,children:[(0,n.jsxs)(g.Z,{xs:!0,display:"flex",justifyContent:"start",alignItems:"center",children:[(0,n.jsx)(E.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:t=>{e(t.currentTarget)},color:"inherit",children:(0,n.jsx)(B(),{width:25,height:25,src:J,alt:"Menu"})}),(0,n.jsx)(T.Z,{id:"menu-appbar",anchorEl:t,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:!!t,onClose:l,sx:{display:{xs:"block",md:"none"}},children:te.map(t=>(0,n.jsx)(Y.Z,{onClick:l,children:(0,n.jsx)(h.Z,{textAlign:"center",children:t.title})},t.title))}),(0,n.jsx)(X.Z,{variant:"standard",children:(0,n.jsxs)(tt.Z,{defaultValue:"en",inputProps:{name:"lang",id:"uncontrolled-native"},children:[(0,n.jsx)(Y.Z,{value:"en",children:"Eng"}),(0,n.jsx)(Y.Z,{value:"ch",children:"中文"})]})})]}),(0,n.jsx)(g.Z,{xs:6,display:"flex",justifyContent:"center",alignItems:"center",children:(0,n.jsx)(B(),{width:50,height:50,src:q,alt:"Mobile Logo"})}),(0,n.jsx)(g.Z,{xs:!0,display:"flex",justifyContent:"end",alignItems:"center",children:(0,n.jsxs)(k.Z,{direction:"row",children:[(0,n.jsx)(E.Z,{size:"large",children:(0,n.jsx)(B(),{width:25,height:25,src:D,alt:"Wishlist"})}),(0,n.jsx)(E.Z,{size:"large",children:(0,n.jsx)(B(),{width:25,height:25,src:V,alt:"Shopping Bag"})})]})})]})})]})})})};let tn=[{title:"About Us",path:"about-us",sublist:[]},{title:"Best Sellers",path:"best-sellers",sublist:[]},{title:"Find Jewellery",path:"find-your-jewellery",sublist:[{title:"Shop All",path:"all"},{title:"Diamond Earrings",path:"diamond-earrings"},{title:"Diamond Necklaces",path:"diamond-necklaces"},{title:"Diamond Rings",path:"diamond-rings"}]},{title:"Custom Ring",path:"custom-ring",sublist:[]},{title:"Contact Us",path:"contact-us",sublist:[]}];var tr=function(){let t=(0,s.useRouter)(),[e,i]=r.useState(null),a=!!e,l=t=>{i(t.currentTarget),t.preventDefault()},o=()=>{i(null)};return(0,n.jsx)(k.Z,{direction:"row",justifyContent:"space-evenly",alignItems:"center",spacing:0,sx:{paddingBottom:2,borderBottomStyle:"solid",borderBottomColor:"#8B8B8B",backgroundColor:"#F9F9F9",display:{xs:"none",md:"flex"}},children:tn.map(i=>(0,n.jsxs)("div",{children:[(0,n.jsx)(w.Z,{color:"black",href:"/".concat(i.path)||0,variant:"desktopBody",underline:"none",gutterBottom:!0,onMouseOver:i.sublist.length>0?l:void 0,children:i.title}),i.sublist.length>0&&(0,n.jsx)(T.Z,{id:"basic-menu",anchorEl:e,open:a,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},children:i.sublist.map(e=>(0,n.jsx)(Y.Z,{onClick:()=>{o(),t.push("/".concat(i.path,"?type=").concat(e.path))},children:e.title},e.title))})]},i.title))})},ta=i(27747),tl=i(87008);function to(){return(0,n.jsx)(ta.Z,{size:"medium",color:"primary","aria-label":"whatsapp",sx:{position:"fixed",bottom:30,right:30},children:(0,n.jsx)(tl.Z,{})})}function ts(t){let{children:e}=t;return(0,n.jsx)(d,{options:{key:"mui"},children:(0,n.jsxs)(a.Z,{theme:u.ZP,children:[(0,n.jsx)(l.ZP,{}),(0,n.jsx)(ti,{}),(0,n.jsx)(tr,{}),e,(0,n.jsx)(H,{}),(0,n.jsx)(to,{})]})})}},60017:function(t,e,i){"use strict";i.d(e,{QX:function(){return s.a}});var n=i(2621),r=i.n(n),a=i(3057),l=i.n(a),o=i(22008),s=i.n(o),c=i(32645),d=i(31460);let u=(0,c.Z)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:d.Z.A400}},typography:{fontFamily:l().style.fontFamily,title:{fontSize:"45px",fontFamily:"Glemor Typeface",color:"#212121"},desktopHeadline1:{fontSize:"32px",fontFamily:r().style.fontFamily,color:"#212121"},desktopHeadline2:{fontSize:"25px",fontFamily:r().style.fontFamily,weight:600,color:"#212121"},desktopBody:{fontSize:"20px",fontFamily:s().style.fontFamily,fontWeight:400,color:"#212121"},desktopButton:{fontSize:"15px",fontFamily:s().style.fontFamily,color:"#212121"},mobileHeadline1:{fontSize:"32px",fontFamily:r().style.fontFamily,color:"#212121"},mobileHeadline2:{fontSize:"25px",fontFamily:r().style.fontFamily,color:"#212121"},mobileBody:{fontSize:"15px",fontFamily:s().style.fontFamily,color:"#212121"},mobileButton:{fontSize:"12px",fontFamily:s().style.fontFamily,color:"#212121"}},palette:{primary:{light:"#4F5B2E",main:"#273617",dark:"#273617"},secondary:{light:"#FBB162",main:"#A16126",dark:"#A16126"}}});e.ZP=u},43366:function(t,e){"use strict";e.Z={src:"/_next/static/media/Email.a373a2e4.svg",height:29,width:29,blurWidth:0,blurHeight:0}},13120:function(t,e){"use strict";e.Z={src:"/_next/static/media/Facebook.e9b6b566.svg",height:29,width:29,blurWidth:0,blurHeight:0}},18100:function(t,e){"use strict";e.Z={src:"/_next/static/media/Instagram.d0f0120d.svg",height:29,width:29,blurWidth:0,blurHeight:0}},52956:function(t,e){"use strict";e.Z={src:"/_next/static/media/Internet.f3943347.svg",height:29,width:29,blurWidth:0,blurHeight:0}},83708:function(t,e){"use strict";e.Z={src:"/_next/static/media/phone.b228b188.svg",height:29,width:29,blurWidth:0,blurHeight:0}}},function(t){t.O(0,[180,790,582,846,370,543,253,698,744],function(){return t(t.s=5615)}),_N_E=t.O()}]);