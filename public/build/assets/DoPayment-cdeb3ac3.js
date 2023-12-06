import{k as Ue,i as Se,s as ce,w as Le,r as o,o as _e,b as we,j as g,c as j,p as ye,q as Pe,a6 as en,n as Ye,a7 as Nt,aj as Mt,x as Xa,ak as Da,F as Rt,h as Ja,l as At,m as Ka,al as Dt,E as Bt,v as Lt,R as N,H as Qa,Q as En,am as It,M as jt,I as Ya,S as na,u as Ut,f as _t,N as Pt,U as Tt}from"./700-2286912f.js";import{P as Ot}from"./PageTitle-327b543a.js";import{C as Sn,a as Nn,G as Qn}from"./Grid-163510bf.js";import{b as Ht,f as Vt,c as et,d as $t,u as Gt,T as qt}from"./TextField-de3cac66.js";import{L as Wt,u as Zt,p as Ba}from"./main-37fe8776.js";import{S as Xt}from"./StepPay-eec2764c.js";import{S as Jt,u as Kt,F as Qt,a as Yt,b as er}from"./FormControlLabel-6d82e077.js";import{A as nr}from"./Grow-efdaed09.js";import{u as ar}from"./useMutation-5c286b11.js";import{h as tr}from"./makeRequest-91bdc274.js";import{S as La}from"./sweetalert2.all-3551c891.js";import"./_commonjsHelpers-59ed3296.js";import"./axios-5779fc5d.js";import"./LoadingButton-edb25967.js";function rr(e){return Ue("MuiAlertTitle",e)}Se("MuiAlertTitle",["root"]);const ir=["className"],or=e=>{const{classes:n}=e;return Pe({root:["root"]},rr,n)},lr=ce(Le,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,n)=>n.root})(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})),sr=o.forwardRef(function(n,a){const t=_e({props:n,name:"MuiAlertTitle"}),{className:i}=t,r=we(t,ir),l=t,s=or(l);return g.jsx(lr,j({gutterBottom:!0,component:"div",ownerState:l,ref:a,className:ye(s.root,i)},r))}),cr=sr;function ur(e){return Ue("MuiFormGroup",e)}Se("MuiFormGroup",["root","row","error"]);const dr=["className","row"],fr=e=>{const{classes:n,row:a,error:t}=e;return Pe({root:["root",a&&"row",t&&"error"]},ur,n)},mr=ce("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:a}=e;return[n.root,a.row&&n.row]}})(({ownerState:e})=>j({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),pr=o.forwardRef(function(n,a){const t=_e({props:n,name:"MuiFormGroup"}),{className:i,row:r=!1}=t,l=we(t,dr),s=Ht(),c=Vt({props:t,muiFormControl:s,states:["error"]}),u=j({},t,{row:r,error:c.error}),d=fr(u);return g.jsx(mr,j({className:ye(d.root,i),ownerState:u,ref:a},l))}),gr=pr;function vr(e){return Ue("MuiListItem",e)}const br=Se("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),Be=br,hr=Se("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),xr=hr;function yr(e){return Ue("MuiListItemSecondaryAction",e)}Se("MuiListItemSecondaryAction",["root","disableGutters"]);const wr=["className"],Er=e=>{const{disableGutters:n,classes:a}=e;return Pe({root:["root",n&&"disableGutters"]},yr,a)},Fr=ce("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:a}=e;return[n.root,a.disableGutters&&n.disableGutters]}})(({ownerState:e})=>j({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),nt=o.forwardRef(function(n,a){const t=_e({props:n,name:"MuiListItemSecondaryAction"}),{className:i}=t,r=we(t,wr),l=o.useContext(en),s=j({},t,{disableGutters:l.disableGutters}),c=Er(s);return g.jsx(Fr,j({className:ye(c.root,i),ownerState:s,ref:a},r))});nt.muiName="ListItemSecondaryAction";const kr=nt,Cr=["className"],zr=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Sr=(e,n)=>{const{ownerState:a}=e;return[n.root,a.dense&&n.dense,a.alignItems==="flex-start"&&n.alignItemsFlexStart,a.divider&&n.divider,!a.disableGutters&&n.gutters,!a.disablePadding&&n.padding,a.button&&n.button,a.hasSecondaryAction&&n.secondaryAction]},Nr=e=>{const{alignItems:n,button:a,classes:t,dense:i,disabled:r,disableGutters:l,disablePadding:s,divider:c,hasSecondaryAction:u,selected:d}=e;return Pe({root:["root",i&&"dense",!l&&"gutters",!s&&"padding",c&&"divider",r&&"disabled",a&&"button",n==="flex-start"&&"alignItemsFlexStart",u&&"secondaryAction",d&&"selected"],container:["container"]},vr,t)},Mr=ce("div",{name:"MuiListItem",slot:"Root",overridesResolver:Sr})(({theme:e,ownerState:n})=>j({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!n.disablePadding&&j({paddingTop:8,paddingBottom:8},n.dense&&{paddingTop:4,paddingBottom:4},!n.disableGutters&&{paddingLeft:16,paddingRight:16},!!n.secondaryAction&&{paddingRight:48}),!!n.secondaryAction&&{[`& > .${xr.root}`]:{paddingRight:48}},{[`&.${Be.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Be.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Ye(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Be.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:Ye(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${Be.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},n.alignItems==="flex-start"&&{alignItems:"flex-start"},n.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},n.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Be.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:Ye(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Ye(e.palette.primary.main,e.palette.action.selectedOpacity)}}},n.hasSecondaryAction&&{paddingRight:48})),Rr=ce("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,n)=>n.container})({position:"relative"}),Ar=o.forwardRef(function(n,a){const t=_e({props:n,name:"MuiListItem"}),{alignItems:i="center",autoFocus:r=!1,button:l=!1,children:s,className:c,component:u,components:d={},componentsProps:f={},ContainerComponent:m="li",ContainerProps:{className:p}={},dense:b=!1,disabled:h=!1,disableGutters:v=!1,disablePadding:x=!1,divider:E=!1,focusVisibleClassName:w,secondaryAction:z,selected:F=!1,slotProps:S={},slots:k={}}=t,D=we(t.ContainerProps,Cr),C=we(t,zr),B=o.useContext(en),T=o.useMemo(()=>({dense:b||B.dense||!1,alignItems:i,disableGutters:v}),[i,B.dense,b,v]),U=o.useRef(null);Nt(()=>{r&&U.current&&U.current.focus()},[r]);const O=o.Children.toArray(s),H=O.length&&Mt(O[O.length-1],["ListItemSecondaryAction"]),L=j({},t,{alignItems:i,autoFocus:r,button:l,dense:T.dense,disabled:h,disableGutters:v,disablePadding:x,divider:E,hasSecondaryAction:H,selected:F}),G=Nr(L),V=Xa(U,a),P=k.root||d.Root||Mr,Z=S.root||f.root||{},J=j({className:ye(G.root,Z.className,c),disabled:h},C);let ne=u||"li";return l&&(J.component=u||"div",J.focusVisibleClassName=ye(Be.focusVisible,w),ne=Rt),H?(ne=!J.component&&!u?"div":ne,m==="li"&&(ne==="li"?ne="div":J.component==="li"&&(J.component="div")),g.jsx(en.Provider,{value:T,children:g.jsxs(Rr,j({as:m,className:ye(G.container,p),ref:V,ownerState:L},D,{children:[g.jsx(P,j({},Z,!Da(P)&&{as:ne,ownerState:j({},L,Z.ownerState)},J,{children:O})),O.pop()]}))})):g.jsx(en.Provider,{value:T,children:g.jsxs(P,j({},Z,{as:ne,ref:V},!Da(P)&&{ownerState:j({},L,Z.ownerState)},J,{children:[O,z&&g.jsx(kr,{children:z})]}))})}),Dr=Ar;function Br(e){return Ue("MuiListItemAvatar",e)}Se("MuiListItemAvatar",["root","alignItemsFlexStart"]);const Lr=["className"],Ir=e=>{const{alignItems:n,classes:a}=e;return Pe({root:["root",n==="flex-start"&&"alignItemsFlexStart"]},Br,a)},jr=ce("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:a}=e;return[n.root,a.alignItems==="flex-start"&&n.alignItemsFlexStart]}})(({ownerState:e})=>j({minWidth:56,flexShrink:0},e.alignItems==="flex-start"&&{marginTop:8})),Ur=o.forwardRef(function(n,a){const t=_e({props:n,name:"MuiListItemAvatar"}),{className:i}=t,r=we(t,Lr),l=o.useContext(en),s=j({},t,{alignItems:l.alignItems}),c=Ir(s);return g.jsx(jr,j({className:ye(c.root,i),ownerState:s,ref:a},r))}),_r=Ur,Pr=Ja(g.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),Tr=Ja(g.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),Or=ce("span")({position:"relative",display:"flex"}),Hr=ce(Pr)({transform:"scale(1)"}),Vr=ce(Tr)(({theme:e,ownerState:n})=>j({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},n.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}));function at(e){const{checked:n=!1,classes:a={},fontSize:t}=e,i=j({},e,{checked:n});return g.jsxs(Or,{className:a.root,ownerState:i,children:[g.jsx(Hr,{fontSize:t,className:a.background,ownerState:i}),g.jsx(Vr,{fontSize:t,className:a.dot,ownerState:i})]})}const $r=o.createContext(void 0),tt=$r;function Gr(){return o.useContext(tt)}function qr(e){return Ue("MuiRadio",e)}const Wr=Se("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),Ia=Wr,Zr=["checked","checkedIcon","color","icon","name","onChange","size","className"],Xr=e=>{const{classes:n,color:a}=e,t={root:["root",`color${Ka(a)}`]};return j({},n,Pe(t,qr,n))},Jr=ce(Jt,{shouldForwardProp:e=>At(e)||e==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:a}=e;return[n.root,n[`color${Ka(a.color)}`]]}})(({theme:e,ownerState:n})=>j({color:(e.vars||e).palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${n.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[n.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Ye(n.color==="default"?e.palette.action.active:e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},n.color!=="default"&&{[`&.${Ia.checked}`]:{color:(e.vars||e).palette[n.color].main}},{[`&.${Ia.disabled}`]:{color:(e.vars||e).palette.action.disabled}}));function Kr(e,n){return typeof n=="object"&&n!==null?e===n:String(e)===String(n)}const ja=g.jsx(at,{checked:!0}),Ua=g.jsx(at,{}),Qr=o.forwardRef(function(n,a){var t,i;const r=_e({props:n,name:"MuiRadio"}),{checked:l,checkedIcon:s=ja,color:c="primary",icon:u=Ua,name:d,onChange:f,size:m="medium",className:p}=r,b=we(r,Zr),h=j({},r,{color:c,size:m}),v=Xr(h),x=Gr();let E=l;const w=Dt(f,x&&x.onChange);let z=d;return x&&(typeof E>"u"&&(E=Kr(x.value,r.value)),typeof z>"u"&&(z=x.name)),g.jsx(Jr,j({type:"radio",icon:o.cloneElement(u,{fontSize:(t=Ua.props.fontSize)!=null?t:m}),checkedIcon:o.cloneElement(s,{fontSize:(i=ja.props.fontSize)!=null?i:m}),ownerState:h,classes:v,name:z,checked:E,onChange:w,ref:a,className:ye(v.root,p)},b))}),Yr=Qr,ei=["actions","children","defaultValue","name","onChange","value"],ni=o.forwardRef(function(n,a){const{actions:t,children:i,defaultValue:r,name:l,onChange:s,value:c}=n,u=we(n,ei),d=o.useRef(null),[f,m]=Bt({controlled:c,default:r,name:"RadioGroup"});o.useImperativeHandle(t,()=>({focus:()=>{let v=d.current.querySelector("input:not(:disabled):checked");v||(v=d.current.querySelector("input:not(:disabled)")),v&&v.focus()}}),[]);const p=Xa(a,d),b=Lt(l),h=o.useMemo(()=>({name:b,onChange(v){m(v.target.value),s&&s(v,v.target.value)},value:f}),[b,s,m,f]);return g.jsx(tt.Provider,{value:h,children:g.jsx(gr,j({role:"radiogroup",ref:p},u,{children:i}))})}),ai=ni;function _(e){if(!e||typeof window>"u")return;const n=document.createElement("style");return n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n),e}var y=function(){return y=Object.assign||function(n){for(var a,t=1,i=arguments.length;t<i;t++){a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r])}return n},y.apply(this,arguments)};function sa(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a}function Ie(e,n,a,t){function i(r){return r instanceof a?r:new a(function(l){l(r)})}return new(a||(a=Promise))(function(r,l){function s(d){try{u(t.next(d))}catch(f){l(f)}}function c(d){try{u(t.throw(d))}catch(f){l(f)}}function u(d){d.done?r(d.value):i(d.value).then(s,c)}u((t=t.apply(e,n||[])).next())})}function je(e,n){var a={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},t,i,r,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(u){return function(d){return c([u,d])}}function c(u){if(t)throw new TypeError("Generator is already executing.");for(;l&&(l=0,u[0]&&(a=0)),a;)try{if(t=1,i&&(r=u[0]&2?i.return:u[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,u[1])).done)return r;switch(i=0,r&&(u=[u[0]&2,r.value]),u[0]){case 0:case 1:r=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,i=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(r=a.trys,!(r=r.length>0&&r[r.length-1])&&(u[0]===6||u[0]===2)){a=0;continue}if(u[0]===3&&(!r||u[1]>r[0]&&u[1]<r[3])){a.label=u[1];break}if(u[0]===6&&a.label<r[1]){a.label=r[1],r=u;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(u);break}r[2]&&a.ops.pop(),a.trys.pop();continue}u=n.call(e,a)}catch(d){u=[6,d],i=0}finally{t=r=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function xe(e,n,a){if(a||arguments.length===2)for(var t=0,i=n.length,r;t<i;t++)(r||!(t in n))&&(r||(r=Array.prototype.slice.call(n,0,t)),r[t]=n[t]);return e.concat(r||Array.prototype.slice.call(n))}var ue=function(e){var n="";if(e)return e<1024?n=e+" Bytes":e<1024*1024?n=(e/1024).toFixed(2)+" KB":e<1024*1024*1024?n=(e/1024/1024).toFixed(2)+" MB":e<1024*1024*1024*1024?n=(e/1024/1024/1024).toFixed(2)+" GB":n=(e/1024/1024/1024/1024).toFixed(2)+" TB",n},ti={defaultLabel:"Trascina qui i tuoi file",uploadingMessage:function(e){return"Caricamento di ".concat(e," file")},uploadFinished:function(e,n){return"File caricati: ".concat(e,", File rifiutati: ").concat(n)},noFilesMessage:"Nessun file valido in attesa di essere caricato",footer:{acceptAll:"Tutti i tipi di file sono accettati",acceptCustom:function(e){return"Tipi di file consentiti: ".concat(e)}},header:{uploadFilesMessage:"Caricamento",maxSizeMessage:function(e){return"Dimensione massima ".concat(e)},validFilesMessage:function(e,n){return"File  ".concat(e,"/").concat(n)}},fakeuploadsuccess:"Il file è stato caricato con successo ",fakeUploadError:"Errore di caricamento del file"},ri={fullInfoLayer:{name:"Nome: ",size:"Dimensione: ",type:"Tipo: "},status:{preparing:"preparazione",uploading:"In corso",success:"Successo",valid:"Valido",denied:"Non válido",error:"Errore",aborted:"Interrotto"}},ii={maxSizeError:function(e){return"Il file è molto grande. Il tam. il massimo è ".concat(ue(e))},acceptError:"Tipo di file illegale",maxFileCount:function(e){return"Numero massimo di file (".concat(e,") raggiunto")}},oi={defaultLabel:"Déposez vos fichiers ici",uploadingMessage:function(e){return"Envoi de ".concat(e," fichiers")},uploadFinished:function(e,n){return"Fichiers téléchargés : ".concat(e,", Fichiers rejetés: ").concat(n)},noFilesMessage:"Aucun fichier valide ne manque",footer:{acceptAll:"Tous types de fichiers acceptés ",acceptCustom:function(e){return"Types de fichier: ".concat(e)}},header:{uploadFilesMessage:"Envoyer",maxSizeMessage:function(e){return"Taille maximale ".concat(e)},validFilesMessage:function(e,n){return"Fichiers  ".concat(e,"/").concat(n)}},fakeuploadsuccess:"Le fichier a été téléchargé avec succès",fakeUploadError:"Erreur lors du téléchargement "},li={fullInfoLayer:{name:"Le nom: ",size:"Le taille: ",type:"Le type: "},status:{preparing:"préparer",uploading:"En cours",success:"Succès",valid:"Valide",denied:"Refusé",error:"Erreur",aborted:"Interrompu"}},si={maxSizeError:function(e){return"Le fichier est très volumineux. Le tam. le maximum est de ".concat(ue(e))},acceptError:"Type de fichier illégal ",maxFileCount:function(e){return"Limite de fichiers atteinte (".concat(e,")")}},ci={defaultLabel:"Drop your files here",uploadingMessage:function(e){return"Uploading ".concat(e," files")},uploadFinished:function(e,n){return"Uploaded files: ".concat(e,", Rejected files: ").concat(n)},noFilesMessage:"There is no missing valid file to upload",footer:{acceptAll:"All file types accepted",acceptCustom:function(e){return"Allowed types: ".concat(e)}},header:{uploadFilesMessage:"Upload files",maxSizeMessage:function(e){return"Max file size: ".concat(e)},validFilesMessage:function(e,n){return"Files ".concat(e,"/").concat(n)}},fakeuploadsuccess:"File was successfuly uploaded",fakeUploadError:"Error on uploading. Please try again later."},ui={fullInfoLayer:{name:"Name: ",size:"Size: ",type:"Type: "},status:{preparing:"Preparing",uploading:"Uploading",success:"Success",valid:"Valid",denied:"Not valid",error:"Error",aborted:"Aborted"}},di={maxSizeError:function(e){return"File is too big. Max file size allowed is ".concat(ue(e))},acceptError:"File type is not allowed",maxFileCount:function(e){return"Max amount of files (".concat(e,") has been reached")}},fi={defaultLabel:"Suelta tus archivos aquí",uploadingMessage:function(e){return"Subiendo ".concat(e," archivos")},uploadFinished:function(e,n){return"Archivos subidos: ".concat(e,", Archivos rechazados: ").concat(n)},noFilesMessage:"No hay archivos válidos pendientes por subir",footer:{acceptAll:"Todos los tipos de archivo aceptados",acceptCustom:function(e){return"Tipo(s) de archivo permitidos: ".concat(e)}},header:{uploadFilesMessage:"Subir",maxSizeMessage:function(e){return"Tam. máximo ".concat(e)},validFilesMessage:function(e,n){return"Archivos ".concat(e,"/").concat(n)}},fakeuploadsuccess:"El archivo se subió correctamente",fakeUploadError:"Error al subir el archivo"},mi={fullInfoLayer:{name:"Nombre: ",size:"Tamaño: ",type:"Tipo: "},status:{preparing:"Preparando",uploading:"Subiendo",success:"Éxito",valid:"Válido",denied:"No válido",error:"Error",aborted:"Anulado"}},pi={maxSizeError:function(e){return"El archivo es muy grande. El tam. máximo es ".concat(ue(e))},acceptError:"Tipo de archivo no permitido",maxFileCount:function(e){return"Cantidad máxima de archivos (".concat(e,") alcanzada")}},gi={defaultLabel:"Перетащите сюда свои файлы.",uploadingMessage:function(e){return"Выгрузка ".concat(e," файлов")},uploadFinished:function(e,n){return"Загружено файлов: ".concat(e,", отклоненных файлов: ").concat(n)},noFilesMessage:"Действительный файл не отсутствует для загрузки",footer:{acceptAll:"Принимаются все типы файлов ",acceptCustom:function(e){return"Допустимые типы: ".concat(e)}},header:{uploadFilesMessage:"Отправить",maxSizeMessage:function(e){return"макс размер: ".concat(e)},validFilesMessage:function(e,n){return"Файлы ".concat(e,"/").concat(n)}},fakeuploadsuccess:"Файл был успешно загружен",fakeUploadError:"Ошибка при загрузке"},vi={fullInfoLayer:{name:"Имя: ",size:"Размер: ",type:"Tип: "},status:{preparing:"подготовка",uploading:"Загрузка",success:"успех",valid:"годный",denied:"выкинутый",error:"ошибка",aborted:"прерванный"}},bi={maxSizeError:function(e){return"Файл слишком большой. Максимально допустимый размер файла - ".concat(ue(e))},acceptError:"Тип файла не разрешен",maxFileCount:function(e){return"Достигнуто максимальное количество файлов (".concat(e,")")}},hi={defaultLabel:"Solte seus arquivos aqui ",uploadingMessage:function(e){return"Enviando ".concat(e," arquivos")},uploadFinished:function(e,n){return"Arquivos enviados: ".concat(e,", Arquivos rejeitados: ").concat(n)},noFilesMessage:"Nenhum arquivo válido está faltando para enviar",footer:{acceptAll:"Todos os tipos de arquivo são aceitos",acceptCustom:function(e){return"Tipos permitidos: ".concat(e)}},header:{uploadFilesMessage:"Enviar",maxSizeMessage:function(e){return"Tamanho máximo: ".concat(e)},validFilesMessage:function(e,n){return"Arquivos ".concat(e,"/").concat(n)}},fakeuploadsuccess:"O arquivo foi enviado com sucesso",fakeUploadError:"Erro ao enviar"},xi={fullInfoLayer:{name:"Nome: ",size:"Tamanho: ",type:"Tipo: "},status:{preparing:"Preparando",uploading:"Enviando",success:"Êxito",valid:"válido",denied:"Negado",error:"Erro",aborted:"Abortado"}},yi={maxSizeError:function(e){return"O arquivo é muito grande. O tamanho máximo de arquivo permitido é ".concat(ue(e))},acceptError:"O tipo de arquivo não é permitido ",maxFileCount:function(e){return"Quantidade máxima de arquivos (".concat(e,") alcançada")}},wi={defaultLabel:"将您的文件放在这里",uploadingMessage:function(e){return"上传 ".concat(e," 个文件")},uploadFinished:function(e,n){return"上传文件：".concat(e,"，拒绝文件：").concat(n)},noFilesMessage:"没有缺少要加载的有效文件",footer:{acceptAll:"接受所有文件类型",acceptCustom:function(e){return"允许的类型: ".concat(e)}},header:{uploadFilesMessage:"上传文件",maxSizeMessage:function(e){return"最大文件大小：".concat(e)},validFilesMessage:function(e,n){return"文档 ".concat(e,"/").concat(n)}},fakeuploadsuccess:"文件已成功上传",fakeUploadError:"上传时出错"},Ei={fullInfoLayer:{name:"文档名称: ",size:"尺寸: ",type:"文件类型: "},status:{preparing:"预加载",uploading:"上传",success:"成功",valid:"接受的文件",denied:"被拒绝的文件",error:"错误",aborted:"中止"}},Fi={maxSizeError:function(e){return"文件太大。 允许的最大文件大小为 ".concat(ue(e))},acceptError:"文件类型不允许",maxFileCount:function(e){return"已达到最大文件数 (".concat(e,")")}},ki={defaultLabel:"把你的文件放在這裡 ",uploadingMessage:function(e){return"上傳".concat(e,"個文件")},uploadFinished:function(e,n){return"上傳文件: ".concat(e,", 拒絕的文件：").concat(n)},noFilesMessage:"沒有缺少要上傳的有效文件",footer:{acceptAll:"接受所有文件類型",acceptCustom:function(e){return"允許的類型：".concat(e)}},header:{uploadFilesMessage:"上傳文件",maxSizeMessage:function(e){return"最大文件大小：".concat(e)},validFilesMessage:function(e,n){return" 文件 ".concat(e,"/").concat(n)}},fakeuploadsuccess:"文件已成功上傳",fakeUploadError:"上傳時出錯"},Ci={fullInfoLayer:{name:"文檔名稱: ",size:"文件大小: ",type:"文件類型: "},status:{preparing:"預加載",uploading:"上傳",success:"成功",valid:"有效文件",denied:"無效文件",error:"錯誤",aborted:"中止"}},zi={maxSizeError:function(e){return"文件太大。 允許的最大文件大小為 ".concat(ue(e))},acceptError:"文件類型不允許",maxFileCount:function(e){return"已達到最大文件數 (".concat(e,")")}},me={"ES-es":mi,"EN-en":ui,"FR-fr":li,"IT-it":ri,"PT-pt":xi,"RU-ru":vi,"ZH-cn":Ei,"ZH-hk":Ci},Ne=function(e){switch(e){case"ES-es":return me["ES-es"];case"EN-en":return me["EN-en"];case"FR-fr":return me["FR-fr"];case"IT-it":return me["IT-it"];case"PT-pt":return me["PT-pt"];case"RU-ru":return me["RU-ru"];case"ZH-cn":return me["ZH-cn"];case"ZH-hk":return me["ZH-hk"];default:return me["EN-en"]}},pe={"ES-es":fi,"EN-en":ci,"FR-fr":oi,"IT-it":ti,"PT-pt":hi,"RU-ru":gi,"ZH-cn":wi,"ZH-hk":ki},nn=function(e){switch(e){case"ES-es":return pe["ES-es"];case"EN-en":return pe["EN-en"];case"FR-fr":return pe["FR-fr"];case"IT-it":return pe["IT-it"];case"PT-pt":return pe["PT-pt"];case"RU-ru":return pe["RU-ru"];case"ZH-cn":return pe["ZH-cn"];case"ZH-hk":return pe["ZH-hk"];default:return pe["EN-en"]}},_a={"ES-es":pi,"EN-en":di,"FR-fr":si,"IT-it":ii,"PT-pt":yi,"RU-ru":bi,"ZH-cn":Fi,"ZH-hk":zi},Si=function(e){return!e||!["ES-es","EN-en","FR-fr","IT-it","PT-pt","RU-ru","ZH-cn","ZH-hk"].includes(e)?_a["EN-en"]:_a[e]},rt=function(e,n,a){return new Promise(function(t,i){try{var r=new FileReader;r.onprogress=function(){n==null||n()},r.onerror=function(){a==null||a()},r.onload=function(){t(r.result)},r.readAsDataURL(e)}catch{i(void 0)}})};function Ni(e){return new Promise(function(n,a){if(!e||e.length===0){a("landscape");return}try{var t=new Image;t.src=e,t.onerror=function(i){a("landscape")},t.onload=function(){var i=t.width,r=t.height;i>r?n("landscape"):n("portrait")}}catch{a("landscape")}})}var Mi="https://user-images.githubusercontent.com/43678736/132086517-72a51a12-e403-4675-bfd7-22c23affa730.png",Ri="https://user-images.githubusercontent.com/43678736/132086518-7026d4f1-ea16-4ed0-89fd-37c1aa8ac3ed.png",Ai="https://user-images.githubusercontent.com/43678736/132086519-863c63b4-917e-4471-94ff-7e15651cc14b.png",Di="https://user-images.githubusercontent.com/43678736/132086520-9bc6aa3b-51c9-4da2-9ef7-349162b86d0b.png",Bi="https://user-images.githubusercontent.com/43678736/132086521-dbd6cf0d-d4d7-4b92-bb26-17e8a51a9383.png",Li="https://user-images.githubusercontent.com/43678736/132086522-070f48e8-78a8-4294-8dbb-aab81525e164.png",Ii="https://user-images.githubusercontent.com/43678736/132086595-90ab7f90-f87e-4900-94d9-d0b26745df48.png",ji="https://user-images.githubusercontent.com/43678736/132086597-e285ad5c-613a-4679-a270-493e5be4ffd9.png",Ui="https://user-images.githubusercontent.com/43678736/132086598-623c410a-084a-4395-a448-211b2ff61cfe.png",_i="https://user-images.githubusercontent.com/43678736/132086600-8b70a007-512d-4252-9c66-eabd3ddd6573.png",Pi="https://user-images.githubusercontent.com/43678736/132086601-e62e5d1a-d8a2-4475-a14f-85922cec9272.png",Ti="https://user-images.githubusercontent.com/43678736/132086602-4c772934-f608-4f01-8459-c4622cee8ad5.png",Oi="https://user-images.githubusercontent.com/43678736/132086604-b5b019fe-572e-477e-92c2-3769a48a1304.png",Hi="https://user-images.githubusercontent.com/43678736/132086606-715ccb66-4702-4f7d-9b09-ac93ba17b643.png",Vi="https://user-images.githubusercontent.com/43678736/132086608-bcae9d57-8e54-488c-90c4-4952ae530b5e.png",$i="https://user-images.githubusercontent.com/43678736/132086618-397d6bd2-9fda-43ed-a135-cb40388c35af.png",Gi="https://user-images.githubusercontent.com/43678736/132086620-2586ba40-c583-4589-b1a4-8bb5b258b44d.png",qi="https://user-images.githubusercontent.com/43678736/132086621-3b95fb64-2533-4ccc-abcd-bd2beba572e9.png",Wi="https://user-images.githubusercontent.com/43678736/132086622-af705a0c-2b25-4ba7-8ab6-bd69ec97f7e2.png",Zi="https://user-images.githubusercontent.com/43678736/132086624-89141a46-64e4-4fa0-bf69-54a0eb4d48c9.png",Pa="https://user-images.githubusercontent.com/43678736/132086625-1b8f2652-1de0-4475-8c12-7da4a9973ffb.png",Xi="https://user-images.githubusercontent.com/43678736/132086626-38699705-1e6f-4bca-984b-03167b236faa.png",Ji="https://user-images.githubusercontent.com/43678736/132086650-f1166246-b361-4c30-a04e-9781c555d14a.png",Ki="https://user-images.githubusercontent.com/43678736/132086650-f1166246-b361-4c30-a04e-9781c555d14a.png",Qi="https://user-images.githubusercontent.com/43678736/132086652-4562942e-aaea-466c-968f-380fffabf3f9.png",Yi="https://user-images.githubusercontent.com/43678736/132086653-0487e7e2-1ee3-49e2-8cfe-3e20f1f7490a.png",eo="https://user-images.githubusercontent.com/43678736/132086656-6e96c815-e4e2-4ffd-9d71-57e9cc2450bc.png",no="https://user-images.githubusercontent.com/43678736/132086658-5d27d3c2-394f-43fb-b512-9b414a257875.png",ao="https://user-images.githubusercontent.com/43678736/132086659-98f3ef6e-b9f3-4b6d-b18f-469b5334ba27.png",to="https://user-images.githubusercontent.com/43678736/132086661-a5484553-06c7-4ffa-a8f9-96b57b1b0344.png",ro="https://user-images.githubusercontent.com/43678736/132086662-05ad1597-d5e5-4efa-833e-2876e966a745.png",io="https://user-images.githubusercontent.com/43678736/132086663-90c58955-f7fb-4bdb-ac53-92667d16d4a3.png",oo="https://user-images.githubusercontent.com/43678736/132086664-9a7530e7-6d78-4ef3-a176-20cf7f57b555.png",Yn="https://user-images.githubusercontent.com/43678736/132086666-ab3c505d-b2c0-4177-9a06-aed5d9c39ee4.png",lo="https://user-images.githubusercontent.com/43678736/132086667-6c7dcbcc-8d83-41a2-8e0a-85b09e2791ae.png",so="https://user-images.githubusercontent.com/43678736/132086668-9f246e91-cf2e-49cf-9617-e1fbb71abbbb.png",co="https://user-images.githubusercontent.com/43678736/132086669-46113762-84d1-4b32-9441-b0138ce17a5d.png",uo="https://user-images.githubusercontent.com/43678736/145835364-2054509d-3448-4d34-921f-73dd6e297fc7.png",fo="https://user-images.githubusercontent.com/43678736/145835367-19172bf8-cd5a-4cbe-b512-d0de1d91f269.png",mo="https://user-images.githubusercontent.com/43678736/145835373-a57ef0f5-3968-483b-9f55-6d67e7f1dcea.png",po="https://user-images.githubusercontent.com/43678736/132086670-0f96e770-cedc-4635-a5f9-cf97894c1d7a.png",go="https://user-images.githubusercontent.com/43678736/132086671-02ad35ef-ec3a-4a65-abd5-5bf794dfcf7b.png",vo="https://user-images.githubusercontent.com/43678736/132086672-3a856fda-823d-4997-b802-c7c640e6ef44.png",bo="https://user-images.githubusercontent.com/43678736/132086673-0c4409ab-754e-4619-8cfa-179d0ccf1bd9.png",ho="https://user-images.githubusercontent.com/43678736/132086674-fdb56d02-5845-49b7-8462-6357bc963464.png",xo="https://user-images.githubusercontent.com/43678736/132086675-c879645d-acb4-41a6-ab3c-4e6c2048badb.png",yo="https://user-images.githubusercontent.com/43678736/132086685-4e327c4c-a409-4b83-b36a-8d88936b314b.png",wo="https://user-images.githubusercontent.com/43678736/132086688-8e82fae4-3a9b-49c0-bf99-77189525514c.png",Eo="https://user-images.githubusercontent.com/43678736/132086689-fe1fef9f-d2db-455b-8f4b-09acd095f571.png",Fo="https://user-images.githubusercontent.com/43678736/132086689-fe1fef9f-d2db-455b-8f4b-09acd095f571.png",ko="https://user-images.githubusercontent.com/43678736/132086691-d472576b-ec6a-4332-acd2-dd6a00b72952.png",Co="https://user-images.githubusercontent.com/43678736/132086693-9d43571e-0c86-438f-b247-e2cb42e19e06.png",zo="https://user-images.githubusercontent.com/43678736/132086694-4e661d6a-1118-441e-8bc3-c52fcb2133b6.png",So="https://user-images.githubusercontent.com/43678736/132086697-1d82d724-35b6-4f06-847a-3c59a5deda6e.png",No="https://user-images.githubusercontent.com/43678736/132086698-19384230-dbd7-4e05-bc69-ef4537b6aae3.png",Mo="https://user-images.githubusercontent.com/43678736/132086699-5993a482-04f4-4915-b105-9037f527cf61.png",Ro="https://user-images.githubusercontent.com/43678736/132086700-c23461c8-6819-46e1-aecd-0a1f8d3507bb.png",Ao="https://user-images.githubusercontent.com/43678736/132086701-c8044c09-8d95-4af1-9410-66761001d7da.png",Do="https://user-images.githubusercontent.com/43678736/132086702-59294337-ed99-4302-badd-316b2c1ff62f.png",Bo="https://user-images.githubusercontent.com/43678736/132086704-8fd51e7c-afa2-47a3-ab2f-d0bcd0ecae9f.png",Lo="https://user-images.githubusercontent.com/43678736/132086705-33294da1-5c0f-49f7-b890-e4857cec0a6d.png",Io="https://user-images.githubusercontent.com/43678736/132086706-22f805d0-39d4-494b-824e-47dc75d05eb7.png",jo="https://user-images.githubusercontent.com/43678736/132086707-e61a84de-d396-4dbf-8d1b-1d6ee19e1ac8.png",Uo="https://user-images.githubusercontent.com/43678736/132086707-e61a84de-d396-4dbf-8d1b-1d6ee19e1ac8.png",_o="https://user-images.githubusercontent.com/43678736/132086708-21d096dd-7148-40aa-97f1-cbb099339740.png",Po="https://user-images.githubusercontent.com/43678736/132086709-811d4e90-3cfa-4044-a956-aeda9c67fc92.png",To="https://user-images.githubusercontent.com/43678736/132086710-c5479c6c-0249-4542-adad-48b0ef40b775.png",Oo="https://user-images.githubusercontent.com/43678736/132086711-1524a3e7-3e33-4822-a34f-ff3235404045.png",Ho="https://user-images.githubusercontent.com/43678736/132086712-17e2c491-f6e4-4586-aef6-06bcc5f4b0e5.png",Vo="https://user-images.githubusercontent.com/43678736/132086715-204b5a8b-9c5a-4bac-8294-9237ebc16089.png",$o="https://user-images.githubusercontent.com/43678736/132086716-64511d20-58cb-45a8-85df-f4d9408b469d.png",Go="https://user-images.githubusercontent.com/43678736/132086718-a8499333-6282-4820-aa1f-4d133eb54648.png",ca=function(e){var n=/(?:\.([^.]+))?$/,a=n.exec(e);return a?a[1]:""},te="octet",qo=function(e){switch(e){case"aac":return"aac";case"midi":return"midi";case"x-midi":return"midi";case"mpeg":return"mpeg";case"ogg":return"oga";case"opus":return"opus";case"wav":return"wav";case"webm":return"webm";case"wma":return"wma";default:return te}},Wo=function(e){switch(e){case"css":return"css";case"csv":return"csv";case"html":return"html";case"calendar":return"icalendar";case"javascript":return"javascript";case"x-javascript":return"javascript";case"plain":return"text";case"xml":return"xml";default:return te}},Zo=function(e){switch(e){case"bmp":return"bmp";case"gif":return"gif";case"jpg":return"jpeg";case"jpeg":return"jpeg";case"png":return"png";case"tiff":return"tiff";case"webp":return"webp";default:return te}},Xo=function(e){switch(e){case"otf":return"otf";case"ttf":return"ttf";case"woff":return"woff";case"woff2":return"woff";default:return te}},Jo=function(e){switch(e){case"x-msvideo":return"avi";case"msvideo":return"avi";case"avi":return"avi";case"mp4":return"mp4";case"mpeg":return"mpeg";case"ogg":return"ogv";case"mp2t":return"mp2t";case"wmv":return"wmv";case"webm":return"webm";default:return te}},Ko=function(e){switch(e){case"x-abiword":return"abw";case"abiword":return"abw";case"x-freearc":return"arc";case"freearc":return"arc";case"vnd.amazon.ebook":return"azw";case"octet-stream":return"octet";case"x-bzip":return"bz";case"x-bzip2":return"bz2";case"bzip":return"bz";case"bzip2":return"bz2";case"x-cdf":return"cda";case"msaccess":return"accdb";case"csh":return"csh";case"x-csh":return"csh";case"vnd.ms-fontobject":return"eot";case"epub+zip":return"epub";case"gzip":return"gzip";case"java-archive":return"jar";case"x-javascript":return"javascript";case"json":return"json";case"ld+json":return"jsonld";case"vnd.apple.installer+xml":return"mpkg";case"ogg":return"ogx";case"vnd.rar":return"rar";case"rtf":return"rtf";case"x-sh":return"sh";case"sh":return"sh";case"x-shockwave-flash":return"swf";case"x-tar":return"tar";case"x-httpd-php":return"php";case"vnd.visio":return"vsd";case"xhtml+xml":return"xhtml";case"xml":return"xml";case"vnd.mozilla.xul+xml":return"xul";case"vnd.openxmlformats-officedocument.wordprocessingml.document":return"docx";case"msword":return"docx";case"vnd.openxmlformats-officedocument.spreadsheetml.sheet":return"xlsx";case"vnd.openxmlformats-officedocument.presentationml.presentation":return"pptx";case"vnd.ms-powerpoint":return"pptx";case"vnd.oasis.opendocument.presentation":return"odp";case"vnd.oasis.opendocument.text":return"odt";case"vnd.oasis.opendocument.spreadsheet":return"ods";case"zip":return"zip";case"x-zip-compressed":return"zip";case"pdf":return"pdf";default:return te}},it=function(e){if(!e||!e.includes("/"))return te;var n=e.split("/")[0],a=e.split("/")[1];switch(n){case"application":return Ko(a);case"audio":return qo(a);case"video":return Jo(a);case"text":return Wo(a);case"image":return Zo(a);case"font":return Xo(a);default:return te}},ot=function(e){var n="octet";return e&&e!==""&&(e.includes("zip")||e.includes("rar")?n="zip":e.includes("doc")?n="docx":e.includes("xls")?n="xlsx":e.includes("drawio")?n="drawio":e.includes("psd")?n="psd":e.includes("csv")?n="csv":e==="jsx"?n="react":e==="py"?n="python":e==="vue"?n="vue":e==="java"?n="java":e==="ts"?n="typescript":(e==="sass"||e==="scss")&&(n="sass")),n},lt=function(e){var n="text";return e&&e!==""&&(e==="jsx"?n="react":e==="py"?n="python":e==="vue"?n="vue":e==="java"?n="java":e==="ts"||e==="tsx"?n="typescript":e==="js"?n="javascript":e==="xml"?n="xml":e==="php"&&(n="php")),n},Qo=function(e,n){var a="fallBack";if(e)a=it(e.type);else return a=te,n!=null&&n.fallBack?{url:n==null?void 0:n.fallBack,mimeResume:a}:{url:Fn[a],mimeResume:a};var t=ca(e.name);a==="text"&&(a=lt(t)),a===te&&(a=ot(t));var i=n==null?void 0:n[a];return i!==void 0?{url:i,mimeResume:a}:{url:Fn[a],mimeResume:a}},Yo=function(e,n,a){var t="octet";if(e)t=it(n);else return t=te,a!=null&&a.fallBack?{url:a==null?void 0:a.fallBack,mimeResume:t}:{url:Fn[t],mimeResume:t};var i=ca(e);t==="text"&&(t=lt(i)),t===te&&(t=ot(i));var r=a==null?void 0:a[t];return r!==void 0?{url:r,mimeResume:t}:{url:Fn[t],mimeResume:t}},Fn={aac:Ri,accdb:Di,abw:Ai,arc:qi,avi:Bi,azw:Li,octet:Yn,bmp:Ii,bz:ji,bz2:Ui,cda:_i,csh:Pi,css:Ti,csv:Oi,docx:Hi,drawio:Vi,eot:$i,epub:Gi,gzip:Zi,gif:Wi,html:Pa,icalendar:Xi,jar:Ki,jpeg:Yi,javascript:Qi,json:eo,jsonld:no,midi:ao,mp3:to,mp4:ro,mpeg:io,mpkg:oo,mp2t:Yn,odp:lo,ods:so,odt:co,oga:uo,ogv:fo,ogx:mo,opus:po,otf:go,png:ho,pdf:vo,php:bo,pptx:xo,psd:yo,rar:Fo,rtf:Co,sass:zo,sh:So,swf:No,tar:Eo,tiff:Ro,ttf:Ao,typescript:Do,text:Mo,vsd:Bo,wav:Io,weba:Uo,webm:jo,webp:_o,woff:Oo,wma:Po,wmv:To,xhtml:Pa,xlsx:Ho,xml:Vo,xul:$o,zip:Go,sevenzip:Mi,python:wo,java:Ji,react:ko,vue:Lo,fallBack:Yn},aa=function(){function e(n){var a=n.id,t=n.file,i=n.name,r=n.size,l=n.type,s=n.imageUrl,c=n.valid,u=n.errors,d=n.uploadMessage,f=n.uploadStatus,m=n.progress,p=n.xhr,b=n.extraData,h=n.extraUploadData,v=n.serverResponse,x=n.downloadUrl,E=n.videoUrl;this.id=a,this.file=t,this.name=i,this.size=r,this.type=l,this.imageUrl=s,this.valid=c,this.errors=u,this.uploadStatus=f,this.uploadMessage=d,this.progress=m,this.xhr=p,this.extraData=b,this.extraUploadData=h,this.serverResponse=v,this.downloadUrl=x,this.videoUrl=E}return e.toExtFile=function(n){for(var a={},t=Object.keys(n),i=Object.values(n),r=0;r<i.length;r++){var l=i[r],s=t[r];l!==void 0&&(a[s]=l)}return a},e.prototype.toExtFile=function(){return e.toExtFile(this)},e}(),M=function(){return M=Object.assign||function(n){for(var a,t=1,i=arguments.length;t<i;t++){a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r])}return n},M.apply(this,arguments)};function kn(e,n,a,t){function i(r){return r instanceof a?r:new a(function(l){l(r)})}return new(a||(a=Promise))(function(r,l){function s(d){try{u(t.next(d))}catch(f){l(f)}}function c(d){try{u(t.throw(d))}catch(f){l(f)}}function u(d){d.done?r(d.value):i(d.value).then(s,c)}u((t=t.apply(e,n||[])).next())})}function Cn(e,n){var a={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},t,i,r,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(u){return function(d){return c([u,d])}}function c(u){if(t)throw new TypeError("Generator is already executing.");for(;l&&(l=0,u[0]&&(a=0)),a;)try{if(t=1,i&&(r=u[0]&2?i.return:u[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,u[1])).done)return r;switch(i=0,r&&(u=[u[0]&2,r.value]),u[0]){case 0:case 1:r=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,i=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(r=a.trys,!(r=r.length>0&&r[r.length-1])&&(u[0]===6||u[0]===2)){a=0;continue}if(u[0]===3&&(!r||u[1]>r[0]&&u[1]<r[3])){a.label=u[1];break}if(u[0]===6&&a.label<r[1]){a.label=r[1],r=u;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(u);break}r[2]&&a.ops.pop(),a.trys.pop();continue}u=n.call(e,a)}catch(d){u=[6,d],i=0}finally{t=r=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function zn(e,n,a){if(a||arguments.length===2)for(var t=0,i=n.length,r;t<i;t++)(r||!(t in n))&&(r||(r=Array.prototype.slice.call(n,0,t)),r[t]=n[t]);return e.concat(r||Array.prototype.slice.call(n))}var ta=function(){function e(){}return e.getNextId=function(){return e.nextId++,e.nextId},e.setFileList=function(n,a){return n?(e.fileLists[n]=zn([],a,!0),n):0},e.createFileListMap=function(){var n=e.getNextId();return e.fileLists[n]=[],n},e.removeFileListMap=function(n){if(n)try{return e.fileLists[n]=void 0,n}catch{return 0}else return 0},e.getExtFileInstanceList=function(n){try{return n?e.fileLists[n]:void 0}catch{return}},e.setFileListMapPreparing=function(n,a,t,i){if(typeof n=="number"||typeof n=="string")try{var r=[],l=zn([],a,!0);i&&t&&(l=l.filter(function(c){return c.valid})),t?l=l.map(function(c){return c.uploadStatus!=="success"&&c.valid?M(M({},c),{uploadStatus:"preparing"}):M({},c)}):l=l.map(function(c){return c.uploadStatus!=="success"?M(M({},c),{uploadStatus:"preparing"}):M({},c)}),r=l.map(function(c){return new aa(c)});var s=e.setFileList(n,r);return r}catch{return}},e.setFileListMapPreparing2=function(n,a,t,i){return e.setFileList(n,a.map(function(r){return new aa(M(M({},r),{uploadStatus:"preparing"}))})),e.getExtFileInstanceList(n)},e.nextId=0,e.fileLists={},e}(),ua=function(){function e(){}return e.getNextId=function(){return e.nextId++,e.nextId},e.nextId=0,e}(),Ta=function(e){for(var n=[],a=0,t=void 0;t=e[a];a++)n.push({id:ua.getNextId(),file:t,name:t.name,size:t.size,type:t.type});return n},el=function(e,n,a,t){return e!=null||n!=null||a!=null||t!=null},nl=function(e){return e===void 0&&(e=5e3),new Promise(function(n,a){setTimeout(function(){n()},e)})},al=function(e,n){n===void 0&&(n=nn("EN-en"));var a=e.toExtFile();return new Promise(function(t,i){setTimeout(function(){var r=Math.floor(Math.random()*10);if(r%2===0){var l=!0,s=n.fakeuploadsuccess,c={url:""};t(M(M({},a),{serverResponse:{success:l,message:s,payload:c},uploadStatus:"success",uploadMessage:s}))}else{var l=!1,s=n.fakeUploadError,c={};t(M(M({},a),{serverResponse:{success:l,message:s,payload:c},uploadStatus:"error",uploadMessage:s}))}},1700)})};function tl(e,n){return e===void 0&&(e=0),n===void 0&&(n=0),Math.floor(Math.random()*(n-e))+e}var rl=function(e){e&&(e.value="")},oe=function(e,n){return n?"".concat(e," ").concat(n):e},il=function(e,n){return(!n||n&&e.valid)&&e.uploadStatus!=="success"},ol=function(e,n,a,t){var i="",r=void 0,l=void 0;return e&&typeof e.name=="string"?(i=e.name,r=e.type,l=e.size):n&&typeof n=="string"&&(i=n,r=a,l=t),[i,r,l]},ll=function(e){if(!e||e.length===0)return[];var n=e.split(",").map(function(a){return a.trim()});return n},sl=function(e,n){for(var a=!1,t=n.name,i=n.type,r=0;r<e.length;r++){var l=e[r];if(l.length!==0){if(l.charAt(0)==="."&&l.includes(ca(t)))return!0;if(i&&i.length>0&&l.includes("/")&&i.includes("/")){var s=l.split("/")[0],c=l.split("/")[1],u=i.split("/")[0],d=i.split("/")[1];if(s===u){if(c==="*")return!0;if(c===d)return!0}}}}return a},ra=function(e,n,a,t,i,r){var l=[];if(!n)return l;for(var s=n,c=Si(r),u=c.maxFileCount,d=0;d<e.length;d++){var f=e[d];if(f=cl(f,t,a,c),f.valid){var m=s>0;f.valid=m,m||(f.errors=f.errors?zn(zn([],f.errors,!0),[u(i||1/0)],!1):[u(i||1/0)]),s--}l.push(f)}return l},cl=function(e,n,a,t){var i=M({},e),r=[];if(!e.file)return M({},i);if(n){var l=n(i.file),s=l.errors;s&&r.push.apply(r,s)}var c=a.maxFileSize,u=a.accept,d=e.file;if(c&&d.size>c){var f=t.maxSizeError;r.push(f(c))}u&&!sl(ll(u),d)&&r.push(t.acceptError);var m=r.length===0;return i=M(M({},i),{valid:m,errors:m?void 0:r}),i};function ul(e,n){for(var a=Object.keys(n||{}),t=0;t<a.length&&n;t++)e.append(a[t],n[a[t]])}function dl(e,n){for(var a=Object.keys(n||{}),t=0;t<a.length&&n;t++)e.setRequestHeader(a[t],n[a[t]])}var fl={success:!1,message:"Timeout error",payload:{}},Oa={success:!1,message:"Upload aborted",payload:{}},ml={success:!1,message:"Error when parsing JSON response",payload:{}},pl={success:!1,message:"Unexpected error",payload:{}},gl=function(e){return M(M({},e),{uploadMessage:"Unable to upload. xhr object was not provided",uploadStatus:"error",serverResponse:{success:!1}})},vl=function(e){try{var n=JSON.parse(e.response),a=n.success,t=n.message,i=n.payload,r={success:typeof a=="boolean"?a:!1,message:typeof t=="string"?t:"Error on message response",payload:i||{}};return r}catch{return ml}},bl=function(e,n){return M(M({},e),{serverResponse:n,uploadMessage:n.message,uploadStatus:"success"})},Ha=function(e,n){return M(M({},e),{uploadMessage:n.message,uploadStatus:"error",serverResponse:n})},hl=function(e,n,a,t,i){return n===void 0&&(n="POST"),new Promise(function(r,l){var s=["POST","PUT","PATCH"].includes(n.toUpperCase())?n:"POST";e.upload.onload=function(){},e.upload.ontimeout=function(){return r(fl)},e.upload.onabort=function(){r(Oa)},e.onloadend=function(c){return kn(void 0,void 0,void 0,function(){return Cn(this,function(u){return[2]})})},e.onreadystatechange=function(c){return kn(void 0,void 0,void 0,function(){return Cn(this,function(u){return e.readyState===4&&(e.response!==""?r(vl(e)):r(Oa)),[2]})})},e.open(s,a,!0),dl(e,i),e.send(t)})},xl=function(e,n,a,t,i){return kn(void 0,void 0,void 0,function(){return Cn(this,function(r){return[2,new Promise(function(l,s){return kn(void 0,void 0,void 0,function(){var c,u,d,f,m,p;return Cn(this,function(b){switch(b.label){case 0:return b.trys.push([0,2,,3]),c=e.xhr,c?(u=a||"POST",d=e.file,f=new FormData,f.append(i||"file",d),m=M({},e.extraUploadData),ul(f,m),p=void 0,[4,hl(c,u,n,f,t||{})]):(l(gl(e)),[2]);case 1:return p=b.sent(),p.success?l(bl(e,p)):l(Ha(e,p)),[3,3];case 2:return b.sent(),l(Ha(e,pl)),[3,3];case 3:return[2]}})})})]})})},yl=function(e){return M(M({},e),{uploadMessage:"Unexpected error",uploadStatus:"error",serverResponse:{success:!1,message:"Error on upload: unexpected error ",payload:{}}})},Va=function(e){return e?e.map(function(n){return M(M({},n),{xhr:new XMLHttpRequest})}):[]},wl=function(e){return e.uploadStatus==="preparing"?(e.uploadStatus="uploading",M(M({},e),{uploadStatus:"uploading"})):e},ea=function(e){return e===void 0&&(e=1500),new Promise(function(n,a){setTimeout(function(){n(!0)},e)})},Ke=function(e){return e.filter(function(n){var a;return!(!((a=n.extraData)===null||a===void 0)&&a.deleted)}).map(function(n){return n.uploadStatus==="aborted"&&!n.uploadMessage&&(n.uploadMessage="Upload aborted by user"),aa.toExtFile(n)})},El=function(e,n){var a=e.uploadStatus,t=n.uploadStatus;a==="preparing"&&["aborted",void 0].includes(t)?(e.uploadStatus=void 0,e.uploadMessage=n.uploadMessage):a==="uploading"&&["aborted",void 0].includes(t)&&(e.uploadStatus="aborted",e.uploadMessage=n.uploadMessage)},$a={indianred:"#CD5C5C",lightcoral:"#F08080",salmon:"#FA8072",darksalmon:"#E9967A",lightsalmon:"#FFA07A",crimson:"#DC143C",red:"#FF0000",firebrick:"#B22222",darkred:"#8B0000",pink:"#FFC0CB",lightpink:"#FFB6C1",hotpink:"#FF69B4",deeppink:"#FF1493",mediumvioletred:"#C71585",palevioletred:"#DB7093",coral:"#FF7F50",tomato:"#FF6347",orangered:"#FF4500",darkorange:"#FF8C00",orange:"#FFA500",gold:"#FFD700",yellow:"#FFFF00",lightyellow:"#FFFFE0",lemonchiffon:"#FFFACD",lightgoldenrodyellow:"#FAFAD2",papayawhip:"#FFEFD5",moccasin:"#FFE4B5",peachpuff:"#FFDAB9",palegoldenrod:"#EEE8AA",khaki:"#F0E68C",darkkhaki:"#BDB76B",lavender:"#E6E6FA",thistle:"#D8BFD8",plum:"#DDA0DD",violet:"#EE82EE",orchid:"#DA70D6",fuchsia:"#FF00FF",magenta:"#FF00FF",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",rebeccapurple:"#663399",blueviolet:"#8A2BE2",darkviolet:"#9400D3",darkorchid:"#9932CC",darkmagenta:"#8B008B",purple:"#800080",indigo:"#4B0082",slateblue:"#6A5ACD",darkslateblue:"#483D8B",mediumslateblue:"#7B68EE",greenyellow:"#ADFF2F",chartreuse:"#7FFF00",lawngreen:"#7CFC00",lime:"#00FF00",limegreen:"#32CD32",palegreen:"#98FB98",lightgreen:"#90EE90",mediumspringgreen:"#00FA9A",springgreen:"#00FF7F",mediumseagreen:"#3CB371",seagreen:"#2E8B57",forestgreen:"#228B22",green:"#008000",darkgreen:"#006400",yellowgreen:"#9ACD32",olivedrab:"#6B8E23",olive:"#808000",darkolivegreen:"#556B2F",mediumaquamarine:"#66CDAA",darkseagreen:"#8FBC8B",lightseagreen:"#20B2AA",darkcyan:"#008B8B",teal:"#008080",aqua:"#00FFFF",cyan:"#00FFFF",lightcyan:"#E0FFFF",paleturquoise:"#AFEEEE",aquamarine:"#7FFFD4",turquoise:"#40E0D0",mediumturquoise:"#48D1CC",darkturquoise:"#00CED1",cadetblue:"#5F9EA0",steelblue:"#4682B4",lightsteelblue:"#B0C4DE",powderblue:"#B0E0E6",lightblue:"#ADD8E6",skyblue:"#87CEEB",lightskyblue:"#87CEFA",deepskyblue:"#00BFFF",dodgerblue:"#1E90FF",cornflowerblue:"#6495ED",royalblue:"#4169E1",blue:"#0000FF",mediumblue:"#0000CD",darkblue:"#00008B",navy:"#000080",midnightblue:"#191970",cornsilk:"#FFF8DC",blanchedalmond:"#FFEBCD",bisque:"#FFE4C4",navajowhite:"#FFDEAD",wheat:"#F5DEB3",burlywood:"#DEB887",tan:"#D2B48C",rosybrown:"#BC8F8F",sandybrown:"#F4A460",goldenrod:"#DAA520",darkgoldenrod:"#B8860B",peru:"#CD853F",chocolate:"#D2691E",saddlebrown:"#8B4513",sienna:"#A0522D",brown:"#A52A2A",maroon:"#800000",white:"#FFFFFF",snow:"#FFFAFA",honeydew:"#F0FFF0",mintcream:"#F5FFFA",azure:"#F0FFFF",aliceblue:"#F0F8FF",ghostwhite:"#F8F8FF",whitesmoke:"#F5F5F5",seashell:"#FFF5EE",beige:"#F5F5DC",oldlace:"#FDF5E6",floralwhite:"#FFFAF0",ivory:"#FFFFF0",antiquewhite:"#FAEBD7",linen:"#FAF0E6",lavenderblush:"#FFF0F5",mistyrose:"#FFE4E1",gainsboro:"#DCDCDC",lightgray:"#D3D3D3",silver:"#C0C0C0",darkgray:"#A9A9A9",gray:"#808080",dimgray:"#696969",lightslategray:"#778899",slategray:"#708090",darkslategray:"#2F4F4F",black:"#000000"},Fl=function(e,n){n===void 0&&(n=25);var a="",t=(100-n)/100,i=0,r=0,l=0;if(ct(Mn(e)))i=ae(e.charAt(1))*16+ae(e.charAt(2)),r=ae(e.charAt(3))*16+ae(e.charAt(4)),l=ae(e.charAt(5))*16+ae(e.charAt(6)),a="rgb(".concat(i*t,", ").concat(r*t,",").concat(l*t,")");else if(e.includes("rgba")){var s=e.replace("rgba(",""),c=s.split(",");a="rgb(".concat(parseInt(c[0],10)*t,", ").concat(parseInt(c[1],10)*t,",").concat(parseInt(c[2],10)*t,")")}else if(e.includes("rgb")){var s=e.replace("rgb(",""),c=s.split(",");a="rgb(".concat(parseInt(c[0],10)*t,", ").concat(parseInt(c[1],10)*t,",").concat(parseInt(c[2],10)*t,")")}return a},st=function(e,n,a){n===void 0&&(n=0);var t=a||"rgba(255, 255, 255, 0.6)";if(!e)return t;var i=e.toUpperCase();if(i.includes("RGBA"))return i;if(i.includes("RGB"))return i.replace("RGB","rgba").replace(")",", ".concat(n,")"));if(!ct(Mn(i)))return t;var r="",l=0,s=0,c=0;return l=ae(i.charAt(1))*16+ae(i.charAt(2)),s=ae(i.charAt(3))*16+ae(i.charAt(4)),c=ae(i.charAt(5))*16+ae(i.charAt(6)),r="rgba(".concat(l,", ").concat(s,",").concat(c," , ").concat(n,")"),r},ct=function(e){if(e.charAt(0)!=="#"||e.length!==7)return!1;for(var n=1;n<e.length;n++)if(!ia.includes(e.charAt(n)))return!1;return!0};function Mn(e){return e?$a[e.toLocaleLowerCase()]!==void 0?$a[e.toLocaleLowerCase()]:e:""}var ia=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],kl=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],ae=function(e){return ia.includes(e)?kl[ia.indexOf(e)]:0},ut=function(e){return e!==void 0&&e!==""?e:Cl},$=function(e,n){return n===void 0&&(n=1),st(ut(Mn(e)),n)},Cl="#646c7f";function dt(e,n){return e?y(y({},n),e):n}var zl=function(e){var n=e.onChange,a=e.inputRef,t=e.accept,i=e.multiple;return o.createElement(o.Fragment,null,o.createElement("input",{"aria-label":"fui-hidden-input",style:{display:"none"},ref:a,onChange:n,type:"file",accept:t,multiple:i}))},Sl={clickable:!0,behaviour:"add",disabled:!1,dropOnLayer:!0,uploadConfig:{},actionButtons:{},header:!0,footer:!0,value:[]},ze="8px";_(`.files-ui-dropzone-children-container {
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  padding: 5px 0;
}`);var Nl=function(e){var n=e.children,a=e.label,t=e.localization,i=Array.isArray(n)&&n.length===0,r=nn(t);return n&&!i?o.createElement("div",{className:"files-ui-dropzone-children-container"},n):o.createElement("div",{className:"files-ui-dropzone-children-container"},o.createElement("label",null," ",a||r.defaultLabel))},da=function(e){e.stopPropagation(),e.preventDefault()},oa=function(e){e.dataTransfer.dropEffect="link",da(e)};function le(e){e.preventDefault(),e.stopPropagation()}var Ml=function(e){e&&e.click()},ft=function(e){return $(e,.4)};function Rl(e,n,a){if(!(!n||!e)){e.style.display="block";var t=document.createElement("span");t.id="filesui-ripple",t.className="ripple";var i=Math.max(n.clientWidth,n.clientHeight);t.style.width=t.style.height="".concat(i,"px"),t.style.backgroundColor=ft(a),n.appendChild(t),setTimeout(function(){e.style.display="none",t==null||t.remove()},501)}}function Al(e,n,a){var t=e.currentTarget,i=document.createElement("span"),r=Math.max(t.clientWidth,t.clientHeight);i.style.width=i.style.height="".concat(r,"px"),i.classList.add("ripple"),n!=="contained"?i.style.backgroundColor=ft(a):i.style.backgroundColor=st("#ffffff",.4),t.appendChild(i),setTimeout(function(){i==null||i.remove()},501)}_(`.filesui-disabled-root {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.38);
}`);var Dl=function(e){var n=e.open,a=e.className,t=e.style;function i(c){le(c)}var r=function(c){oa(c)},l=function(c){return Ie(void 0,void 0,void 0,function(){return je(this,function(u){return da(c),[2]})})},s=oe("filesui-disabled-root",a);return n?o.createElement("div",{style:t,className:s,onDrop:l,onDragOver:r,onClick:i}):o.createElement(o.Fragment,null)};_(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
.fui-dropzone-root {
  width: 100%;
  min-width: 150px;
  min-height: 180px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0 8px;
  text-rendering: optimizeLegibility;
  font-size: 1.5em;
  font-family: "Poppins", sans-serif;
  text-align: center;
  font-weight: 400;
  letter-spacing: 0.02857em;
  box-sizing: border-box;
  word-break: normal;
  /*  &.fui-dropzone-border {
    box-sizing: border-box;

    border: 1px dashed #0c2358;
    border-radius: 10px;
    &.fui-hide-border {
      border: none;
    }
  } */
}
@media (max-width: 600px) {
  .fui-dropzone-root {
    font-size: 1.3em;
  }
}
.fui-dropzone-root.clickable {
  cursor: pointer;
}

.files-ui-header {
  min-height: 23px;
  /*  height: 22px;
  position: absolute; 
  top: 0;
  */
  cursor: text;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-family: inherit;
  font-size: 1rem;
}
@media (max-width: 960px) {
  .files-ui-header {
    font-size: 0.8rem;
  }
}

.files-ui-footer {
  /*   border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px; */
  box-sizing: border-box;
  cursor: text;
  /* height: 23px;
  position: absolute;
  bottom: 0;
  left: 0; */
  width: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center; */
  font-family: inherit;
  padding-left: 10px;
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
  text-align: left;
}
@media (max-width: 960px) {
  .files-ui-footer {
    padding-left: 1px;
    font-size: 0.9rem;
  }
}`);_(`.filesui-base-ripple-absolute {
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
}
.filesui-base-ripple-absolute .filesui-base-ripple-relative {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.filesui-base-ripple-absolute .filesui-base-ripple-relative span.ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 500ms linear;
  background-color: rgba(255, 255, 255, 0.7);
}
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}`);var W=function(e){if(typeof e=="number")return e;switch(e){case"micro":return 8;case"small":return 15;case"semi-medium":return 18;case"medium":return 25;case"large":return 28;case"extra-large":return 32;default:return 24}},mt=function(e){var n=e.size,a=e.color,t=e.colorFill,i=e.onClick,r=e.style,l=e.className,s=W(n),c=r||{};return o.createElement("svg",{style:i?y({},y({cursor:"pointer"},c)):c,onClick:function(u){le(u),i==null||i(u)},xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",className:l||""},o.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none",opacity:".87"}),o.createElement("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm5 11.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",fill:t||"none",opacity:".5"}),o.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"}))},pt=function(e){var n=e.size,a=e.color,t=e.colorFill,i=e.onClick,r=e.style,l=e.className,s=W(n),c=r||{};return N.createElement("svg",{className:l||"",style:i?y({},y({cursor:"pointer"},c)):c,onClick:function(){return i==null?void 0:i()},xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000"},N.createElement("path",{d:"M0 0h24v24H0z",fill:t||"none"}),N.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}))},Bl=function(e){var n=e.size,a=e.color,t=e.onClick,i=e.style,r=e.className,l=W(n),s=i||{};return N.createElement("svg",{className:r||"",style:t?y({},y({cursor:"pointer"},s)):s,onClick:function(){return t==null?void 0:t()},xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:l?"".concat(l,"px"):"24px",viewBox:"0 0 24 24",width:l?"".concat(l,"px"):"24px",fill:a||"#000000"},N.createElement("g",null,N.createElement("rect",{fill:"none",height:l||"24",width:l||"24"})),N.createElement("g",null,N.createElement("g",null,N.createElement("path",{d:"M16,11h-1V3c0-1.1-0.9-2-2-2h-2C9.9,1,9,1.9,9,3v8H8c-2.76,0-5,2.24-5,5v7h18v-7C21,13.24,18.76,11,16,11z M11,3h2v8h-2V3 z M19,21h-2v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3h-2v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3H9v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3H5 v-5c0-1.65,1.35-3,3-3h8c1.65,0,3,1.35,3,3V21z"}))))},an=function(e){var n=e.size,a=e.color,t=e.colorFill,i=e.onClick,r=e.style,l=e.className,s=W(n),c=r||{};return o.createElement("svg",{className:l||"",style:i?y({cursor:"pointer"},c):c,xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",onClick:function(u){le(u),i==null||i(u)}},o.createElement("path",{d:"M0 0h24v24H0V0z",fill:t||"none"}),o.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}))},Ll=function(e){var n=e.size,a=e.color,t=e.colorFill,i=e.onClick,r=e.style,l=e.className,s=W(n),c=r||{};return o.createElement("svg",{className:l||"",style:i?y({cursor:"pointer"},c):c,enableBackground:"new 0 0 24 24",xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",onClick:function(u){le(u),i==null||i(u)}},o.createElement("path",{d:"M0 0h24v24H0V0z",fill:t||"none"}),o.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zm-9-3.82l-2.09-2.09L6.5 13.5 10 17l6.01-6.01-1.41-1.41z"}))},gt=function(e){var n=e.size,a=e.color,t=e.onClick,i=e.style,r=e.className,l=W(n),s=i||{};return N.createElement("svg",{className:r||"",style:t?y({},y({cursor:"pointer"},s)):s,onClick:function(){return t==null?void 0:t()},xmlns:"http://www.w3.org/2000/svg",height:l?"".concat(l,"px"):"24px",viewBox:"0 0 24 24",width:l?"".concat(l,"px"):"24px",fill:a||"#000000"},N.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),N.createElement("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z",opacity:".4"}),N.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"}))},Il=function(e){var n=e.size,a=e.color,t=e.colorFill,i=e.onClick,r=e.style,l=e.className,s=W(n),c=r||{};return o.createElement("svg",{className:l||"",style:i?y({cursor:"pointer"},c):c,enableBackground:"new 0 0 24 24",xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",onClick:function(u){le(u),i==null||i(u)}},o.createElement("g",null,o.createElement("rect",{fill:t||"none",height:s,width:s})),o.createElement("g",null,o.createElement("path",{d:"M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"})))},jl=function(e){var n=e.size,a=e.color,t=e.onClick,i=e.style,r=e.className,l=W(n)-2,s=i||{};return o.createElement("svg",{className:r||"",style:t?y({cursor:"pointer"},s):s,"aria-hidden":"true","aria-label":"info",fill:a||"#000000",role:"img",transform:"",version:"1.1",viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",height:"".concat(l,"px"),width:"".concat(l,"px"),onClick:function(c){le(c),t==null||t(c)}},o.createElement("path",{d:"M22.378 0c2.412 0 3.618 1.642 3.618 3.523 0 2.349-2.095 4.522-4.822 4.522-2.284 0-3.616-1.35-3.553-3.582 0-1.877 1.586-4.462 4.757-4.462zM14.956 36c-1.904 0-3.299-1.174-1.967-6.343l2.185-9.166c0.38-1.465 0.443-2.054 0-2.054-0.571 0-3.040 1.012-4.504 2.011l-0.95-1.584c4.63-3.935 9.956-6.241 12.242-6.241 1.903 0 2.219 2.291 1.269 5.814l-2.504 9.634c-0.443 1.701-0.254 2.288 0.191 2.288 0.571 0 2.443-0.706 4.282-2.173l1.080 1.465c-4.504 4.585-9.423 6.349-11.324 6.349z"}))},Ul=function(e){var n=e.size,a=e.color,t=e.colorFill,i=e.onClick,r=e.style,l=e.className,s=W(n),c=r||{};return N.createElement("svg",{className:l||"",style:i?y({cursor:"pointer"},c):c,xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",onClick:function(u){le(u),i==null||i(u)}},N.createElement("path",{d:"M0 0h24v24H0V0z",opacity:".9",fill:t||"none"}),N.createElement("path",{d:"M8 5v14l11-7L8 5z"}))},_l=function(e){var n=e.size,a=e.color,t=e.colorFill,i=e.onClick,r=e.style,l=e.className,s=W(n),c=r||{};return N.createElement("svg",{style:i?y({},y({cursor:"pointer"},c)):c,onClick:function(){return i==null?void 0:i()},xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",className:l||""},N.createElement("g",null,N.createElement("rect",{fill:t||"none",height:n||"24",width:n||"24"})),N.createElement("g",null,N.createElement("path",{d:"M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z"})))},Pl=function(e){var n=e.size,a=e.color,t=e.colorFill,i=e.onClick,r=e.style,l=e.className,s=W(n),c=r||{};return N.createElement("svg",{className:l||"",style:i?y({},y({cursor:"pointer"},c)):c,onClick:function(){return i==null?void 0:i()},xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000"},N.createElement("rect",{fill:t||"none",height:s,width:s}),N.createElement("path",{d:"M18,15.17V15h2v2.17L18,15.17z M15.41,12.59L17,11l-1.41-1.41L14,11.17L15.41,12.59z M13,10.17V4h-2v4.17L13,10.17z M21.19,21.19l-1.78-1.78L2.81,2.81L1.39,4.22l6.19,6.19L7,11l5,5l0.59-0.59L15.17,18H6v-3H4v3c0,1.1,0.9,2,2,2h11.17l2.61,2.61 L21.19,21.19z"}))};_(`@keyframes filesui-rotate-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.filesui-rotate {
  cursor: default;
}

@media (prefers-reduced-motion: no-preference) {
  .filesui-rotate {
    animation: filesui-rotate-spin infinite 2s linear;
  }
}`);var Tl=function(e){var n=e.size,a=e.color,t=e.onClick,i=e.style,r=e.className,l=e.spin,s=W(n),c=i||{},u=r||"";return u+=l?"filesui-rotate":"",N.createElement("svg",{className:u,style:t?y({},y({cursor:"pointer"},c)):c,onClick:function(){return t==null?void 0:t()},xmlns:"http://www.w3.org/2000/svg",height:s?"".concat(s,"px"):"24px",viewBox:"0 0 24 24",width:s?"".concat(s,"px"):"24px",fill:a||"#000000"},N.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),N.createElement("path",{d:"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"}))},Ol=function(e){var n=e.size,a=e.color,t=e.colorFill,i=e.onClick,r=e.style,l=e.className,s=W(n),c=r||{};return N.createElement("svg",{className:l||"",style:i?y({cursor:"pointer"},c):c,xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",onClick:function(u){le(u),i==null||i(u)}},N.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),N.createElement("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z",fill:t||"none"}),N.createElement("path",{d:"M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}))},Hl=function(e){var n=e.maxFileSize,a=e.numberOfValidFiles,t=e.onReset,i=e.onClean,r=e.maxFiles,l=e.onUploadStart,s=e.isUploading,c=e.urlPresent,u=e.localization,d=e.borderRadius,f=e.style,m=e.className,p=m===void 0?"":m,b=e.resetStyles,h=e.color,v=e.firstClassName,x=v===void 0?"":v,E=nn(u).header,w=function(){i==null||i()},z=function(){l==null||l()},F=function(){var C=[];l&&c&&a&&(s?C.push(o.createElement(Tl,{spin:!0,color:h})):C.push(o.createElement(o.Fragment,null,o.createElement(o.Fragment,null,E.uploadFilesMessage),o.createElement(_l,{color:h,onClick:z}))),C.push(o.createElement(o.Fragment,null,","," ")));var B=E.maxSizeMessage,T=ue(n);T&&(C.push(B(T)),C.push(o.createElement(o.Fragment,null,","," ")));var U=E.validFilesMessage;return r&&(C.push(U(a,r)),C.push(o.createElement(o.Fragment,null,","," "))),i&&C.push(o.createElement(Bl,{color:h,onClick:w,size:"semi-medium"})),t&&C.push(o.createElement(mt,{color:h,onClick:function(){return t==null?void 0:t()}})),C};function S(C){C.stopPropagation()}var k=b?p:oe("files-ui-header "+x,p),D=b?f:y(y({},f),{borderTopLeftRadius:d,borderTopRightRadius:d});return o.createElement("div",{className:k,onClick:S,style:D},F().map(function(C,B){return o.createElement("span",{key:B,style:{display:"flex"}},C)}))},Vl=function(e){var n=e.accept,a=e.message,t=e.localization,i=e.borderRadius,r=e.style,l=e.className,s=l===void 0?"":l,c=e.resetStyles,u=c===void 0?!1:c,d=e.allowedTypesLabel,f=d===void 0?!0:d,m=e.customMessage,p=m===void 0?void 0:m,b=e.firstClassName,h=b===void 0?"":b,v=nn(t).footer,x=v.acceptCustom;function E(F){le(F)}var w=u?s:oe("files-ui-footer ".concat(h),s),z=u?r:y(y({},r),{borderBotomLeftRadius:i,borderBotomRightRadius:i});return o.createElement("div",{className:w,onClick:E,style:z},p?o.createElement(o.Fragment,null,p):o.createElement(o.Fragment,null,a||(n?x(n):f?v.acceptAll:void 0)))},ie;(function(e){function n(l){var s="";if(typeof window>"u"||typeof l>"u"||l===null)return"";if(document.getElementById(l.id))return l.id;s=l.id;var c=document.createElement("style");c.id=s,c.setAttribute("type","text/css");var u=qa(l.sheetRules||[])+l.raw||"";c.textContent=u;var d=document.head.appendChild(c);return d?s:""}e.insertStyleSheet=n;function a(l,s){var c="";if(typeof window>"u"||typeof l>"u"||l===null||s===null)return"";var u=document.getElementById(l);return u?(u.textContent=qa(s),c):""}e.editStyleSheet=a;function t(l){var s="";if(!l)return"";var c=document.getElementById(l);return c&&(document.head.removeChild(c),s=l),s}e.removeStyleSheet=t;function i(l){if(typeof l>"u"||l===null)return!1;var s=document.getElementById(l);return!!s}e.existStyleSheet=i;function r(l){return typeof l>"u"||l===null?null:l}e.makeStyleSheet=r})(ie||(ie={}));function $l(e){return e?!/[a-z]/.test(e)&&/[A-Z]/.test(e):!1}function Ga(e){for(var n="",a=" ",t=!1,i=0;i<e.length;i++){var r=e[i];if($l(r)){a=r,t=!0;break}}if(t){var l=e.split(a);n="".concat(l[0],"-").concat(a.toLowerCase()).concat(l[1])}else n=e;return n}function Gl(e){return e?e.includes(":"):!1}function ql(e){var n="",a=e.trim().split(" ");if(a.length>1){for(var t=0;t<a.length;t++)n+=".".concat(a[t]);n+=`{
`}else n+=".".concat(e,`{
`);return n}function qa(e){if(typeof e>"u"||e===null)return"";for(var n="",a=[],t=0;t<e.length;t++){var i=e[t],r="";r+=ql(i.className);for(var l=Object.keys(i.rules),s=0;s<l.length;s++){var c=l[s],u=Ga(c);if(Gl(u)){var d=i.className+u;a.push({className:d,rules:i.rules[u]})}else{var f=i.rules[c];r+="	".concat(u," : ").concat(f,`;
`)}}r+=`}
`,n+=r}for(var m=0;m<a.length;m++){var r="",i=a[m],l=Object.keys(i.rules);r+=".".concat(i.className,`{
`);for(var s=0;s<l.length;s++){var c=l[s],u=Ga(c),f=i.rules[c];r+="	".concat(u," : ").concat(f,`;
`)}r+=`}
`,n+=r}return n}var Wl=function(){function e(){}return e.getNextId=function(){return e.nextButtonClassNameNumber++,e.nextButtonClassNameNumber},e.nextButtonClassNameNumber=0,e.makeDynamicStyle=function(n,a,t,i,r,l){var s={id:"material-button-styles-".concat(n),sheetRules:[{className:"material-button.".concat(a,"-").concat(n),rules:{}},{className:"material-button-root.".concat(a,"-").concat(n),rules:{}}]},c=s.sheetRules;if(!t)switch(a){case"contained":c[0].rules={color:ut(Mn(r)),backgroundColor:$(i),textDecoration:l},c[1].rules={":hover":{backgroundColor:Fl($(i))}};break;case"outlined":c[0].rules={border:"1px solid ".concat($(i,.5)),color:$(i),backgroundColor:"transparent",textDecoration:l},c[1].rules={":hover":{border:"1px solid ".concat($(i,1)),backgroundColor:$(i,.085)}};break;case"text":c[0].rules={color:$(i),backgroundColor:"transparent",textDecoration:l},c[1].rules={":hover":{backgroundColor:$(i,.085)}};break}return s.sheetRules=c,s},e}(),Zl=function(e,n,a,t,i,r,l,s){var c="material-button-root material-button",u=o.useState(""),d=u[0],f=u[1],m=o.useState(!1),p=m[0],b=m[1],h=o.useState(void 0),v=h[0],x=h[1],E=function(z,F,S,k,D,C){var B=c,T=Wl.makeDynamicStyle(z,F,S,k,C,D),U="";if(p?ie.editStyleSheet(d,T.sheetRules||[]):(U=ie.insertStyleSheet(T),f(U),U!==""&&b(!0)),S?B+=" disabled":B+=" ".concat(F," ").concat(F,"-").concat(z),r&&r.length>0&&(B+=" ".concat(r)),D){var O=D&&["uppercase","capitalize","lowercase","none"].includes(D==null?void 0:D.toLowerCase())?D.toLowerCase():"uppercase";B+=" ".concat(O)}x(B)};o.useEffect(function(){s||E(l,e,n,a,i,t)},[e,n,a,i,t,r,l,s]);var w=function(z,F){z&&(ie.removeStyleSheet(F),b(!1),f(""))};return o.useEffect(function(){return function(){return w(p,d)}},[p,d]),v};_(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
.material-button-root {
  border: 0;
  cursor: pointer;
  display: inline-flex;
  outline: 0;
  position: relative;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  text-transform: none;
  color: white;
}

.material-button {
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow: hidden;
  min-width: 64px;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: "Poppins", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.75;
  letter-spacing: 0.02857em;
}

.material-button.uppercase {
  text-transform: uppercase;
}

.material-button.lowercase {
  text-transform: lowercase;
}

.material-button.capitalize {
  text-transform: capitalize;
}

.material-button.contained {
  padding: 6px 16px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.material-button.outlined {
  padding: 5px 15px;
}

.material-button.text {
  padding: 5px 15px;
}

.material-button-root.contained:hover {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

.material-button span.material-button-label {
  width: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
}

span.ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 500ms linear;
  background-color: rgba(255, 255, 255, 0.7);
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
.material-button-root.disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.26);
  padding: 6px 16px;
}
.material-button-root.disabled.darkmode {
  background-color: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.3);
}

/* @media screen and (max-width: 600px) {
  .material-button {
    min-width: 30px;
    font-size: 0.78rem;
    line-height: 1.5;
    letter-spacing: 0.025em;
  }
  .material-button.contained {
    padding: 4px 13px;
  }
  .material-button.outlined {
    padding: 4px 12px;
  }
}
 */`);var fa=N.createContext({}),Xl=function(e){var n=e.disabled,a=e.href,t=e.textTransform,i=e.variant,r=i===void 0?"contained":i,l=e.color,s=l===void 0?"#1976d2":l,c=e.textColor,u=c===void 0?"white":c,d=e.children,f=e.className,m=e.style,p=e.onClick,b=e.resetStyles,h=e.disableRipple,v=e.darkMode,x=e.id,E=sa(e,["disabled","href","textTransform","variant","color","textColor","children","className","style","onClick","resetStyles","disableRipple","darkMode","id"]),w=o.useContext(fa).darkMode,z=v!==void 0?v:w,F=o.useMemo(function(){return x||ua.getNextId()+""},[x]),S=Zl(r,n,s,u,t,f,F.replace(":","").replace(":",""),b),k=S&&z?oe(S,"darkmode"):S;function D(C){C.preventDefault(),h||Al(C,r,s),p==null||p(C)}return k!==void 0||b?o.createElement(a?"a":"button",y({className:b&&f?f:k,"data-testid":a?"dui-anchor":"dui-button",onClick:D,href:a,style:m,children:o.createElement("span",{className:"material-button-label"},d),disabled:n},E)):o.createElement(o.Fragment,null,"loading styes")};_(`.files-ui-buttons-container {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  gap: 10px;
}
.files-ui-buttons-container.top {
  padding-bottom: 10px;
}
.files-ui-buttons-container.bottom {
  padding-top: 10px;
}`);var Wa=function(e){var n=e.cleanButton,a=e.abortButton,t=e.className,i=e.style,r=e.deleteButton,l=e.uploadButton,s=e.onAbort,c=e.onClean,u=e.onDelete,d=e.onUpload,f=e.top,m=e.disabled,p=[n?y(y({},n),{label:"Clean",onClick:n.onClick||c}):void 0,r?y(y({},r),{label:"Delete",onClick:r.onClick||u}):void 0,l?y(y({},l),{label:"Upload",onClick:l.onClick||d}):void 0,a?y(y({},a),{label:"Abort",onClick:a.onClick||s}):void 0].filter(function(v){return v!==void 0}),b="".concat(f?" top":" bottom"),h=oe("files-ui-buttons-container"+b,t);return o.createElement("div",{className:h,style:i},p.map(function(v,x){var E=v.children,w=v.label,z=v.resetStyles,F=v.className,S=v.style,k=v.onClick;return o.createElement(Xl,{key:x,className:F,style:S,resetStyles:z,onClick:function(D){return k==null?void 0:k(D)},disabled:m},E||w)}))},Jl=function(e){var n=e.onDrop,a=e.onDragLeave,t=e.className,i=e.open,r=e.style;return o.createElement("div",{className:t,onDragLeave:a,onDrop:n,style:r||{display:i?void 0:"none"}})};function Kl(e,n,a,t,i){var r=a===void 0&&t===void 0&&i===void 0?"default":e.replace(":","_").replace(":","_"),l="fui-dropzone-root fui-dropzone-border",s=o.useState(""),c=s[0],u=s[1],d=o.useState(!1),f=d[0],m=d[1],p=o.useState(void 0),b=p[0],h=p[1],v=o.useState(void 0),x=v[0],E=v[1],w=o.useState(void 0),z=w[0],F=w[1],S=o.useState(void 0),k=S[0],D=S[1],C=function(B,T,U,O){var H=l,L=Ql(r,T,U,O),G="";f?ie.editStyleSheet(c,L.sheetRules||[]):(G=ie.insertStyleSheet(L),u(G),G!==""&&m(!0)),H+=" files-ui-dropzone-extra-".concat(r),B&&(H="".concat(H," ").concat(B)),h(H),E("files-ui-header-border-rd-".concat(r)),F("files-ui-footer-border-rd-top-bg-color-".concat(r)),D("files-ui-disabled-layer-color-".concat(r))};return o.useEffect(function(){C(n,a,t,i)},[n,a,t,i]),[b,x,z,k]}var Ql=function(e,n,a,t){var i={className:"files-ui-dropzone-extra-".concat(e),rules:{color:$(n),border:"1px dashed ".concat($(n)),borderRadius:ze,background:a,minHeight:typeof t=="number"?"".concat(t,"px"):t}},r={className:"files-ui-root-border-hide",rules:{borderColor:"transparent"}},l={className:"files-ui-header-border-rd-".concat(e),rules:{"border-top-left-radius":ze,"border-top-right-radius":ze}},s={className:"files-ui-footer-border-rd-top-bg-color-".concat(e),rules:{"border-bottom-left-radius":ze,"border-bottom-right-radius":ze,background:$(n,.129),borderTop:"1px dotted ".concat($(n))}},c={className:"files-ui-disabled-layer-color-".concat(e),rules:{borderRadius:ze,background:$(n,.38)}},u=[i,r,l,s,c];return{id:"files-dropzone-ui-style-id-"+e,sheetRules:u}},Yl=function(e,n,a,t,i,r,l,s,c){var u=o.useState([]),d=u[0],f=u[1],m=o.useState(0),p=m[0],b=m[1];return o.useEffect(function(){var h=ta.getExtFileInstanceList(e);a?h&&h.forEach(function(v){var x=n.findIndex(function(w){return w.id===v.id});if(x===-1)v.extraData={deleted:!0};else{var E=n[x];El(v,E)}}):f(n)},[e,n]),o.useEffect(function(){if(!c){f(d.map(function(x){return y(y({},x),{valid:void 0})}));return}var h={maxFileSize:t,accept:i},v=ra(d,r?r-p:1/0,h,l,r,s);f(v)},[c,t,i,r,s]),o.useEffect(function(){b(c?d.filter(function(h){return h.valid}).length:d.length)},[d,c]),[d,p,f]},es=function(e,n){return{id:"files-ui-drop-layer-style-id-"+e,sheetRules:[{className:"dropzone-layer-".concat(e),rules:{backgroundColor:$(n,.4),borderRadius:ze,position:"absolute",left:0,top:0,width:"0%",height:"0%",zIndex:20,border:"0px dashed ".concat($(n))}},{className:"dropzone-layer-drag",rules:{width:"100%",height:"100%",borderWidth:"2px"}}]}},ns=function(e,n,a){var t=o.useState(""),i=t[0],r=t[1],l=o.useState(!1),s=l[0],c=l[1],u=o.useState(""),d=u[0],f=u[1],m=n===void 0?"default":e.replace(":","_").replace(":","_");return o.useEffect(function(){var p=function(b){var h="",v=es(m,b),x="";m==="default"&&!s?ie.existStyleSheet("files-ui-drop-layer-style-id-"+m)?(c(!0),r("files-ui-drop-layer-style-id-"+m)):(x=ie.insertStyleSheet(v),r(x),x!==""&&c(!0)):s?ie.editStyleSheet(i,v.sheetRules||[]):(x=ie.insertStyleSheet(v),r(x),x!==""&&c(!0)),h+="dropzone-layer-".concat(m),f(h)};a&&p(n)},[n,a]),d},as=function(e,n,a,t,i,r,l,s,c){var u=o.useState(!1),d=u[0],f=u[1],m=o.useState(!1),p=m[0],b=m[1],h=o.useState(""),v=h[0],x=h[1],E=o.useState(void 0),w=E[0],z=E[1],F=o.useState(void 0),S=F[0],k=F[1],D=o.useState(!1),C=D[0],B=D[1],T=function(U,O,H,L,G,V,P,Z,J,ne){return Ie(void 0,void 0,void 0,function(){var ge,de,X;return je(this,function(Q){switch(Q.label){case 0:return!U&&!O&&!H?[2]:(ge=(U?Qo(U,Z):Yo(O,H,Z)).url,x(ge),V&&P?(b(!0),z(V),k(P),B(!0),[2]):[3,1]);case 1:return V?(f(!0),z(V),B(!0),[2]):[3,2];case 2:return P?(b(!0),k(P),B(!0),[3,5]):[3,3];case 3:return de=ts(U,H),f(de[0]==="image"),["mp4","ogg","webm"].includes(de[1])&&b(de[0]==="video"),G&&(L||typeof L>"u"||L===null)&&de[0]==="image"?(X=void 0,U?[4,rt(U)]:[3,5]):[3,5];case 4:X=Q.sent(),X&&z(X),Q.label=5;case 5:return B(!0),[2]}})})};return o.useEffect(function(){return T(e,n,a,t,i||!1,r,l,s),function(){z(void 0),f(!1),b(!1),B(!1)}},[e,n,a,t,i,r,l,s]),[C,d,p,v,w,S]},ts=function(e,n){if(e)if(e.type){var a=e.type.split("/");return[a[0],a[1]]}else return["octet","octet"];else{var a=n==null?void 0:n.split("/");return a&&a.length>1?[a[0],a[1]]:["octet","octet"]}},rs=function(e){var n=o.useState(!1),a=n[0],t=n[1],i=o.useState(e),r=i[0],l=i[1];return o.useEffect(function(){if(l(e),["uploading","preparing"].includes(r||"")&&["success","error","aborted"].includes(e||"")){setTimeout(function(){t(!1)},3500);return}else t(e==="preparing"||e==="uploading")},[e]),a},is=function(e,n){var a=o.useState(void 0),t=a[0],i=a[1];return e!==void 0?t!==e&&i(e):n!=null&&n.upload.onprogress===null&&(n.upload.onprogress=function(r){i(r.loaded/r.total*100)},i(0)),t},os=function(e){var n=dt(e,Sl),a=n.onChange,t=n.value,i=t===void 0?[]:t,r=n.accept,l=n.maxFileSize,s=n.maxFiles,c=n.validator,u=n.cleanFiles,d=n.onClean,f=n.autoClean,m=n.uploadConfig,p=n.fakeUpload,b=n.onUploadStart,h=n.onUploadFinish,v=n.background,x=n.color,E=n.minHeight,w=n.style,z=n.className,F=n.label,S=n.localization,k=n.disableRipple,D=n.onDragEnter,C=n.onDragLeave,B=n.actionButtons,T=n.dropOnLayer,U=n.header,O=n.footer,H=n.headerConfig,L=H===void 0?{}:H,G=n.footerConfig,V=G===void 0?{}:G,P=n.disabled,Z=n.clickable,J=n.behaviour,ne=n.children,ge=sa(n,["onChange","value","accept","maxFileSize","maxFiles","validator","cleanFiles","onClean","autoClean","uploadConfig","fakeUpload","onUploadStart","onUploadFinish","background","color","minHeight","style","className","label","localization","disableRipple","onDragEnter","onDragLeave","actionButtons","dropOnLayer","header","footer","headerConfig","footerConfig","disabled","clickable","behaviour","children"]),de=o.useContext(fa).localization,X=S!==void 0?S:de,Q=m,fe=Q.url,tn=Q.method,rn=Q.headers,Rn=Q.uploadLabel,on=Q.cleanOnUpload,Te=on===void 0?!0:on,ve=Q.preparingTime,An=ve===void 0?1500:ve,ln=Q.autoUpload,be=ln===void 0?!1:ln,K=B,sn=K.position,cn=K.abortButton,un=K.deleteButton,Me=K.uploadButton,Ee=K.cleanButton,dn=K.style,Oe=K.className,He=w==null?void 0:w.borderRadius,Re=L.cleanFiles,fn=Re===void 0?!0:Re,Ve=L.deleteFiles,Dn=Ve===void 0?!0:Ve,$e=L.maxFileSize,Bn=$e===void 0?!0:$e,mn=L.uploadFiles,Ln=mn===void 0?!0:mn,pn=L.uploadingIcon,gn=pn===void 0?!0:pn,Fe=L.validFilesCount,In=Fe===void 0?!0:Fe,vn=L.customHeader,jn=L.className,bn=L.resetStyles,Un=bn===void 0?!1:bn,_n=L.style,Y=V.customFooter,ma=V.noMissingFilesLabel,xt=ma===void 0?!0:ma,pa=V.uploadProgressMessage,ga=pa===void 0?!0:pa,va=V.uploadResultMessage,yt=va===void 0?!0:va,Ge=nn(X),ba=o.useRef(null),ha=o.useRef(null),Pn=o.useRef(null),xa=o.useState(!1),Tn=xa[0],On=xa[1],ya=o.useState(!1),q=ya[0],qe=ya[1],wa=o.useState(""),wt=wa[0],We=wa[1],Ze=o.useMemo(function(){return ua.getNextId()+""},[]),he=el(r,l,s,c),Hn=Yl(Ze,i||[],q,l,r,s,c,X,he),ke=Hn[0],Vn=Hn[1],Xe=Hn[2],hn=function(A){return Ie(void 0,void 0,void 0,function(){var R,I,se,Ae,Ma,Zn,Ra,Xn,yn,re,De,Je,wn,Aa,Jn;return je(this,function(ee){switch(ee.label){case 0:return qe(!0),q||A.length===0||!fe?(qe(!1),[2]):A.length===0?(We(Ge.noFilesMessage),setTimeout(function(){qe(!1)},1500),[2]):(R=[],I=A.length,se=A.filter(function(Kn){return il(Kn,he)}).length,Ae=0,Ma=0,Zn=Ge.uploadingMessage,se>0?(ga&&We(Zn("".concat(se,"/").concat(I))),b==null||b(A),R=ta.setFileListMapPreparing(Ze,A,he,Te)||[],Ra=xe([],R,!0).map(function(Kn){return Kn.toExtFile()}),Ce(Ra,!0),[4,nl(An)]):(setTimeout(function(){xt&&We(Ge.noFilesMessage),qe(!1)},1500),[2]));case 1:ee.sent(),Xn=[],yn=0,ee.label=2;case 2:return yn<R.length?(re=R[yn],re.uploadStatus==="preparing"&&!(!((Jn=re.extraData)===null||Jn===void 0)&&Jn.deleted)?[4,ea()]:[3,14]):[3,16];case 3:return ee.sent(),wl(re),ga&&We(Zn("".concat(++Ma,"/").concat(se))),Ce(Ke(R),!0),De=void 0,p?[4,al(re,Ge)]:[3,8];case 4:De=ee.sent(),Je=0,ee.label=5;case 5:return Je<100?(Je+=tl(21,35),re.progress=Je>100?100:Je,[4,ea(1e3)]):[3,7];case 6:return ee.sent(),Ce(Ke(R),!0),[3,5];case 7:return[3,11];case 8:return ee.trys.push([8,10,,11]),[4,xl(re,fe,tn,rn,Rn)];case 9:return De=ee.sent(),[3,11];case 10:return ee.sent(),De=yl(re.toExtFile()),[3,11];case 11:return wn=De,re.uploadStatus=wn.uploadStatus,re.uploadMessage=wn.uploadMessage,re.uploadStatus==="aborted"?[3,13]:[4,ea()];case 12:ee.sent(),ee.label=13;case 13:return Ce(Ke(R),!0),wn.uploadStatus==="error"&&Ae++,Xn.push(De),[3,15];case 14:Ce(Ke(R),!0),ee.label=15;case 15:return yn++,[3,2];case 16:return Xe(Ke(R)),h==null||h(Xn),Aa=Ge.uploadFinished,yt&&We(Aa(se-Ae,Ae)),setTimeout(function(){qe(!1)},2e3),[2]}})})},Ea=function(){var A=ta.getExtFileInstanceList(Ze);A&&A.forEach(function(R){(R.uploadStatus==="uploading"||R.uploadStatus==="preparing")&&(R.xhr!==null&&R.xhr!==void 0&&R.xhr.abort(),R.uploadStatus="aborted",R.uploadMessage="Upload was aborted by user")})},xn=Kl(Ze,z,x,v,E),$n=xn[0],Et=xn[1],Ft=xn[2],kt=xn[3],Fa=ns(Ze,x,!D&&!C);o.useEffect(function(){var A={maxFileSize:l,accept:r},R=ra(ke,s?s-Vn:1/0,A,c,s,X);Xe(R)},[l,r,s,X]);var Ce=function(A,R){var I=xe(J==="add"&&!R?xe([],ke,!0):[],A,!0);a?a(I):Xe(I),be&&!R&&hn(I)},Ct=function(A){var R=A.target.files,I=Ta(R);he&&(I=ka(I),f&&(I=I.filter(function(se){return se.valid}))),fe&&(I=Va(I)),rl(Pn.current),Ce(I)},ka=function(A){var R={maxFileSize:l,accept:r},I=Vn;J==="replace"&&(I=0);var se=ra(A,s?s-I:1/0,R,c,s,X);return se};function zt(){!Z||P||q||(za(),Ml(Pn.current))}var St=function(A){oa(A),!P&&On(!0)},Ca=function(A){P||(oa(A),On(!1))},za=function(){Rl(ba.current,ha.current,x)},Sa=function(A){return Ie(void 0,void 0,void 0,function(){var R,I;return je(this,function(se){return da(A),P?[2]:q?[2]:(k||za(),On(!1),R=A.dataTransfer.files,I=Ta(R),he&&(I=ka(I),f&&(I=I.filter(function(Ae){return Ae.valid}))),fe&&(I=Va(I)),Ce(I),[2])})})},Gn=function(){a?a([]):Xe([])},qn=function(){d?d():a?a(ke.filter(function(A){return A.valid})):Xe(ke.filter(function(A){return A.valid}))},Wn=$n?Tn&&T||P?oe($n,"files-ui-root-border-hide"):$n:void 0,Na=Wn?Z&&!P?oe(Wn,"clickable"):Wn:void 0;return Na?o.createElement(o.Fragment,null,sn==="before"&&o.createElement(Wa,{disabled:P,abortButton:q?cn:void 0,onAbort:Ea,deleteButton:un,onDelete:q?void 0:Gn,uploadButton:!q&&!be?Me:void 0,onUpload:be?void 0:function(){return hn(ke)},cleanButton:he&&!q&&!f?Ee:void 0,onClean:qn,style:dn,className:Oe,top:!0}),o.createElement("div",y({style:w,className:Na},ge,{onClick:zt,onDragOver:St,onDragLeave:T?void 0:Ca,onDrop:T?void 0:Sa}),!k&&o.createElement("div",{ref:ba,className:"filesui-base-ripple-absolute",style:{borderRadius:w==null?void 0:w.borderRadius}},o.createElement("div",{ref:ha,className:"filesui-base-ripple-relative"})),o.createElement(o.Fragment,null,U?o.createElement(o.Fragment,null,vn?o.createElement(o.Fragment,null,vn):o.createElement(Hl,{firstClassName:Et,color:$(x),style:_n,className:jn,resetStyles:Un,borderRadius:He,isUploading:q&&gn,onReset:!q&&Dn?Gn:void 0,maxFileSize:l&&Bn?l:void 0,maxFiles:s&&In?s:void 0,localization:X,urlPresent:fe!==void 0&&Ln,onUploadStart:!be&&!Me?function(){return hn(ke)}:void 0,numberOfValidFiles:Vn,onClean:!fn||q||Ee||f?void 0:(u||d)&&he?qn:void 0})):o.createElement(o.Fragment,null)),o.createElement(Nl,{label:F,localization:X},ne),o.createElement(o.Fragment,null,Y?o.createElement(o.Fragment,null,Y):o.createElement(o.Fragment,null,O&&o.createElement(Vl,y({firstClassName:Ft,borderRadius:He,accept:r,message:q?wt:void 0,localization:X},V)))),T&&o.createElement(Jl,{open:Tn,className:Tn?"".concat(Fa," dropzone-layer-drag"):Fa,onDragLeave:Ca,onDrop:Sa,style:{borderRadius:w==null?void 0:w.borderRadius}}),o.createElement(zl,{multiple:s?s>1:!0,accept:r||"",inputRef:Pn,onChange:Ct}),o.createElement(Dl,{open:P,className:kt})),sn==="after"&&o.createElement(Wa,{disabled:P,abortButton:q?cn:void 0,onAbort:Ea,deleteButton:un,onDelete:q?void 0:Gn,uploadButton:!q&&!be?Me:void 0,onUpload:be?void 0:function(){return hn(ke)},cleanButton:he&&!q&&!f?Ee:void 0,onClean:qn,style:dn,className:Oe,top:!1})):o.createElement(o.Fragment,null)};_(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
.fui-avatar-main-container {
  width: 200px;
  height: 200px;
  position: relative;
  background-color: transparent;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(128, 128, 128, 0.486);
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
}
.fui-avatar-main-container.square {
  border-radius: 0px;
}
.fui-avatar-main-container.circle {
  border-radius: 50%;
}
.fui-avatar-main-container .fui-avatar-image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.fui-avatar-main-container:hover .fui-avatar-label.hide {
  display: flex;
}
.fui-avatar-main-container .fui-avatar-label {
  margin: 0;
  overflow: hidden;
  background-color: rgba(128, 128, 128, 0.486);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}
.fui-avatar-main-container .fui-avatar-label.hide {
  display: none;
}
.fui-avatar-main-container .fui-avatar-label:hover {
  background-color: rgba(71, 71, 71, 0.74);
  display: flex;
  cursor: pointer;
}`);var ls=function(e){var n=e.size,a=e.color,t=e.style,i=e.radius,r=e.x,l=e.y,s=e.width,c=i||46,u=r||50,d=l||50,f=W(n),m=t||{};return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"".concat(f,"px"),height:"".concat(f,"px"),style:m,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},o.createElement("circle",{cx:"".concat(u),cy:"".concat(d),r:"".concat(c),fill:"none",stroke:a||"#14ff00",strokeWidth:"".concat(s||8,"px"),strokeDasharray:"164.93361431346415 100.97787143782138"},o.createElement("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 ".concat(u," ").concat(u,";360 ").concat(u," ").concat(u),keyTimes:"0;1"})))};_(`.files-ui-loader-container {
  background-color: rgba(0, 0, 0, 0.41);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}
.files-ui-loader-container.clickable {
  cursor: pointer;
}
.files-ui-loader-container:hover {
  background-color: rgba(0, 0, 0, 0.61);
}`);var vt=function(e){var n=e.children,a=e.className,t=e.style,i=e.size,r=e.onClick,l=i?W(i):void 0,s=r?"files-ui-loader-container clickable":"files-ui-loader-container",c=function(){r==null||r()};return o.createElement("div",{onClick:c,className:a?"".concat(s," ").concat(a):s,style:y(y({},t),{height:l,width:l})},n)},bt=function(e){var n=e.onClick,a=e.size;return o.createElement(vt,{onClick:n,size:a},o.createElement(o.Fragment,null,o.createElement(ls,{size:a}),o.createElement("div",{style:{position:"absolute",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},n&&o.createElement(an,{color:"rgba(255,255,255,0.75)",size:45,onClick:n}))))};_(`.files-ui-layer {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}`);var Qe=function(e){var n=e.style,a=e.className,t=e.children,i=e.visible,r=sa(e,["style","className","children","visible"]),l=oe(a||"","files-ui-layer");return i?o.createElement("div",y({className:l,style:n},r),t):o.createElement(o.Fragment,null)},ss={alt:"image-preview",smartImgFit:"orientation"};_(`.fui-image-preview {
  position: relative;
  border-radius: 10px;
}`);var la=function(e){var n=dt(e,ss),a=n.src,t=n.alt,i=n.width,r=n.height,l=n.onError,s=n.smartImgFit,c=n.style,u=n.className,d=o.useState([void 0,void 0]),f=d[0],m=f[0],p=f[1],b=d[1],h=o.useState(void 0),v=h[0],x=h[1],E=function(F){return Ie(void 0,void 0,void 0,function(){var S;return je(this,function(k){switch(k.label){case 0:return[4,rt(F)];case 1:return S=k.sent(),w(S),[2]}})})},w=function(F){return Ie(void 0,void 0,void 0,function(){var S,k,D;return je(this,function(C){switch(C.label){case 0:return F===""||!F?[2]:(S=void 0,k=void 0,s?[3,1]:(k="100%",[3,4]));case 1:return C.trys.push([1,3,,4]),[4,Ni(F)];case 2:return D=C.sent(),D==="landscape"?s==="orientation"?(S=void 0,k="100%"):(S="100%",k=void 0):s==="center"?(S=void 0,k="100%"):(S="100%",k=void 0),[3,4];case 3:return C.sent(),l==null||l(),[3,4];case 4:return r&&(S=r),i&&(k=i),b([S,k]),x(F),[2]}})})};o.useEffect(function(){if(a)if(typeof a=="string")w(a);else{var F=a.type?a.type.split("/")[0]:"octet";F==="image"?E(a):l==null||l()}},[a]);var z=function(F){l==null||l()};return o.createElement(o.Fragment,null,a&&v&&(m||p)&&o.createElement("img",{style:c||{},onClick:function(F){F.preventDefault()},width:p,height:m,src:v,alt:t,className:u,onError:z}))};_(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
.files-ui-file-card-main-container {
  border-radius: 8px;
  color: rgba(0, 0, 0, 0.858);
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 100px;
  box-sizing: border-box;
  position: relative;
  font-size: 15px;
  font-weight: 400;
  width: 320px;
  font-family: "Poppins", sans-serif;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container {
  border-radius: 8px;
  overflow: hidden;
  width: 320px;
  box-sizing: border-box;
  height: 100px;
  box-sizing: border-box;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-icon-container {
  width: 100px;
  height: 100px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-icon-container .file-card-icon-layer {
  box-sizing: border-box;
  position: absolute;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-icon-container .file-card-icon-layer img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-icon-container .file-card-icon-layer.blur img {
  filter: blur(4px);
  width: 200%;
  height: 200%;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-icon-container .file-card-status-layer {
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 5px;
  box-sizing: border-box;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-data {
  padding-right: 10px;
  box-sizing: border-box;
  line-height: 19px;
  font-weight: 500;
  width: calc(100% - 100px);
  word-break: break-all;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-data.dark-mode {
  color: rgba(255, 255, 255, 0.7);
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-data .file-card-size {
  font-weight: 400;
  font-size: 0.9rem;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-data .file-card-name {
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-data .file-card-name.not-allowed {
  background-color: rgba(180, 16, 16, 0.7);
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-upload-layer-container {
  cursor: default;
  display: flex;
  box-sizing: border-box;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.625), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 1em;
  position: relative;
  overflow: hidden;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container {
  cursor: default;
  display: flex;
  box-sizing: border-box;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 1em;
  overflow: hidden;
  align-items: center;
  justify-content: flex-end;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info {
  width: calc(100% - 100px);
  height: 100px;
  text-align: left;
  scrollbar-width: thin;
  overflow: auto;
  scrollbar-color: rgba(100, 108, 127, 0.662745098) transparent;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info::-webkit-scrollbar {
  width: 9px;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info::-webkit-scrollbar-track {
  background: transparent;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info::-webkit-scrollbar-thumb {
  background-color: rgba(100, 108, 127, 0.662745098);
  border-radius: 20px;
  border: transparent;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info .files-ui-file-card-info-layer-header {
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  /*  position: absolute;
  top: 5;
  right: 5; */
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info .heading {
  font-weight: 600;
  padding: 0 5px;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info .label {
  padding: 0 5px;
  font-weight: 399;
}
.files-ui-file-card-main-container.clickable {
  cursor: pointer;
}

/* .files-ui-file-icon {
  font-size: 0.7rem;
  min-width: 19px;
  min-height: 19px;
  margin: 0;
  padding: 2px 2px;
  border-radius: 50%;
  background-color: rgba(32, 33, 36, 0.65);
  word-break: break-word;
  box-sizing: content-box;
  &:hover {
    background-color: rgba(32, 33, 36, 0.85);
  }
  &.dark-mode {
    background-color: rgba(154, 160, 166, 0.65);
    &:hover {
      background-color: rgba(154, 160, 166, 0.85);
    }
  }
} */`);_(`.files-ui-file-icon {
  font-size: 0.7rem;
  min-width: 19px;
  min-height: 19px;
  margin: 0;
  padding: 2px 2px;
  border-radius: 50%;
  background-color: rgba(32, 33, 36, 0.65);
  word-break: break-word;
  box-sizing: content-box;
}
.files-ui-file-icon:hover {
  background-color: rgba(32, 33, 36, 0.85);
}
.files-ui-file-icon.dark-mode {
  background-color: rgba(154, 160, 166, 0.65);
}
.files-ui-file-icon.dark-mode:hover {
  background-color: rgba(154, 160, 166, 0.85);
}`);_(`.files-ui-file-card-main-container.dark-mode {
  color: rgba(255, 255, 255, 0.7);
  background-color: #121212;
}
.files-ui-file-card-main-container.dark-mode.elevation-0 {
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0));
}
.files-ui-file-card-main-container.dark-mode.elevation-1 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05));
}
.files-ui-file-card-main-container.dark-mode.elevation-2 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.07));
}
.files-ui-file-card-main-container.dark-mode.elevation-3 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08));
}
.files-ui-file-card-main-container.dark-mode.elevation-4 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09));
}
.files-ui-file-card-main-container.dark-mode.elevation-5 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
}
.files-ui-file-card-main-container.dark-mode.elevation-6 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11));
}
.files-ui-file-card-main-container.dark-mode.elevation-7 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11));
}
.files-ui-file-card-main-container.dark-mode.elevation-8 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12));
}
.files-ui-file-card-main-container.dark-mode.elevation-9 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12));
}
.files-ui-file-card-main-container.dark-mode.elevation-10 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.13));
}
.files-ui-file-card-main-container.dark-mode.elevation-11 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.13));
}
.files-ui-file-card-main-container.dark-mode.elevation-12 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14));
}
.files-ui-file-card-main-container.dark-mode.elevation-13 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14));
}
.files-ui-file-card-main-container.dark-mode.elevation-14 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14));
}
.files-ui-file-card-main-container.dark-mode.elevation-15 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14));
}
.files-ui-file-card-main-container.dark-mode.elevation-16 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.15));
}
.files-ui-file-card-main-container.dark-mode.elevation-17 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.15));
}
.files-ui-file-card-main-container.dark-mode.elevation-18 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.15));
}
.files-ui-file-card-main-container.dark-mode.elevation-19 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15));
}
.files-ui-file-card-main-container.dark-mode.elevation-20 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));
}
.files-ui-file-card-main-container.dark-mode.elevation-21 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));
}
.files-ui-file-card-main-container.dark-mode.elevation-22 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));
}
.files-ui-file-card-main-container.dark-mode.elevation-23 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));
}
.files-ui-file-card-main-container.dark-mode.elevation-24 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));
}
.files-ui-file-card-main-container.elevation-0 {
  box-shadow: none;
}
.files-ui-file-card-main-container.elevation-1 {
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-2 {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-3 {
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-4 {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-5 {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-6 {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-7 {
  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-8 {
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-9 {
  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-10 {
  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-11 {
  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-12 {
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-13 {
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-14 {
  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-15 {
  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-16 {
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-17 {
  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-18 {
  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-19 {
  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-20 {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-21 {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-22 {
  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-23 {
  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-24 {
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
}`);_(`.file-card-right-layer-header {
  margin-top: 3px;
  margin-right: 3px;
  position: absolute;
  top: 0;
  right: 0;
  left: unset;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2px;
}

.file-card-right-layer-footer {
  margin-bottom: 3px;
  margin-right: 3px;
  left: unset;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2px;
  bottom: 0;
  right: 0;
}`);var cs=function(e){var n=e.localization,a=e.size,t=Ne(n).status;return o.createElement(o.Fragment,null,o.createElement(gt,{color:"#f44336",size:a||65}),o.createElement("span",null," ",t.aborted))},us=function(e){var n=e.height,a=n?typeof n=="number"?"".concat(n,"px"):n:"132px";return o.createElement(o.Fragment,null,o.createElement("div",{style:{width:"100%",height:a}}))},ds=function(e){var n=e.localization,a=e.size,t=Ne(n).status;return o.createElement(o.Fragment,null,o.createElement(an,{color:"rgba(255,255,255,0.4)",style:{backgroundColor:"rgba(244, 67, 54, 0.8)",borderRadius:"50%"},size:a||65}),o.createElement("span",null," ",t.error))},fs=function(e){var n=e.onCancel,a=e.localization,t=e.size,i=Ne(a).status;return o.createElement(o.Fragment,null,o.createElement(bt,{onClick:n,size:t||65}),o.createElement("span",null,i.preparing))},ms=function(e){var n=e.localization,a=e.size,t=Ne(n).status;return o.createElement(o.Fragment,null,o.createElement(pt,{color:"#4caf50",size:a||65}),o.createElement("span",null," ",t.success))};_(`text.files-ui-text-dynamic-loader {
  text-anchor: middle;
  font-size: 1em;
  fill: aliceblue;
}`);var ps=function(e){var n=e.size,a=e.color,t=e.style,i=e.percentage,r=e.hidePerncentage,l=e.radius,s=e.x,c=e.y,u=e.width,d=e.onClick,f=l||28,m=s||30,p=c||30,b=W(n),h=t||{},v=o.useRef(null);function x(E,w,z){w.style.strokeDashoffset="".concat(z*(1-E/100))}return o.useEffect(function(){var E=v.current;if(E!=null&&i!==void 0){var w=2*Math.PI*E.r.baseVal.value;E.style.strokeDasharray="".concat(w," 1000"),x(i>=100?100:i,E,w)}},[i]),i!==void 0?o.createElement(vt,{size:n},o.createElement(o.Fragment,null,o.createElement("svg",{className:"dui_svg_circle_loader",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"".concat(b,"px"),height:"".concat(b,"px"),style:h},o.createElement("circle",{style:{transform:"rotate(-90deg)",transformOrigin:"center"},stroke:a||"#14ff00",cx:"".concat(m),cy:"".concat(p),r:"".concat(f),strokeWidth:"".concat(u||8,"px"),id:"circle",ref:v,fill:"none"}),!r&&i!==void 0&&o.createElement("text",{className:"files-ui-text-dynamic-loader",x:"".concat(m),y:"".concat(m*7/6)},"".concat(i.toFixed(0)," %"))),d&&o.createElement("div",{style:{position:"absolute",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},o.createElement(an,{color:"rgba(255,255,255,0.75)",size:45,onClick:d})))):o.createElement(o.Fragment,null)};_(`.lds-colorbar {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
}
.lds-colorbar .files-ui-text-default-loader {
  font-size: 1.5rem;
  font-weight: 400;
  text-anchor: middle;
}`);var gs=function(e){var n=e.localization,a=e.size,t=e.onAbort,i=e.progress,r=Ne(n).status;return o.createElement(o.Fragment,null,i!==void 0?o.createElement(ps,{size:70,x:35,y:35,radius:32,percentage:i,width:6,hidePerncentage:i===void 0||t!==void 0,onClick:t}):o.createElement(bt,{onClick:t,size:a||70}),o.createElement("span",null," ",r.uploading))};_(`.files-ui-file-card-upload-layer {
  width: 100px;
  height: 100%;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 1em;
  position: relative;
  overflow: hidden;
}
.files-ui-file-card-upload-layer .elevation-list-card {
  transition: all 1.5s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.files-ui-file-card-upload-layer .elevation-list-card .elevation-item-card {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 10px;
  box-sizing: border-box;
}
.files-ui-file-card-upload-layer .elevation-list-card .elevation-item-card span {
  text-align: center;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}`);_(`.files-ui-tooltip {
  cursor: default;
  position: relative;
}
.files-ui-tooltip:hover {
  z-index: 2;
}
.files-ui-tooltip:hover .files-ui-tooltiptext {
  visibility: visible;
  opacity: 1;
  z-index: 2;
}
.files-ui-tooltip.card:hover {
  z-index: 2;
}
.files-ui-tooltip.card:hover .files-ui-tooltiptext {
  visibility: visible;
  opacity: 1;
  z-index: 2;
}
.files-ui-tooltip.card .files-ui-tooltiptext {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  visibility: hidden;
  width: 200px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 2px 2px;
  position: absolute;
  z-index: 2;
  left: calc(50% - 100px);
  left: 0;
  margin-top: 5px;
  top: 100%;
  opacity: 0;
  transition: opacity 1s;
}
.files-ui-tooltip.card .files-ui-tooltiptext.not-valid-error {
  background: linear-gradient(to top, #c62828, #d32f2f);
}
.files-ui-tooltip.card .files-ui-tooltiptext.not-valid-error::after {
  border-color: transparent transparent #d32f2f transparent;
}
.files-ui-tooltip.card .files-ui-tooltiptext.success {
  background: linear-gradient(to top, #1b5e20, #2e7d32);
}
.files-ui-tooltip.card .files-ui-tooltiptext.success::after {
  border-color: transparent transparent #2e7d32 transparent;
}
.files-ui-tooltip.card .files-ui-tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
}
.files-ui-tooltip .files-ui-tooltiptext {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  visibility: hidden;
  width: 132px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 2px 2px;
  position: absolute;
  z-index: 2;
  left: 0;
  opacity: 0;
  transition: opacity 1s;
}
.files-ui-tooltip .files-ui-tooltiptext.not-valid-error {
  background: linear-gradient(to top, #c62828, #d32f2f);
}
.files-ui-tooltip .files-ui-tooltiptext.not-valid-error::after {
  border-color: transparent transparent #d32f2f transparent;
}
.files-ui-tooltip .files-ui-tooltiptext.success {
  background: linear-gradient(to top, #1b5e20, #2e7d32);
}
.files-ui-tooltip .files-ui-tooltiptext.success::after {
  border-color: transparent transparent #2e7d32 transparent;
}
.files-ui-tooltip .files-ui-tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
}`);var vs=function(e){var n=e.uploadStatus,a=e.valid,t=e.errors,i=e.uploadMessage,r=e.open,l=o.useState(void 0),s=l[0],c=l[1],u=o.useState(void 0),d=u[0],f=u[1],m=function(p,b){p!==void 0?(f(i),c(p==="success"?"success":"not-valid-error")):b!==void 0&&(b||(c("not-valid-error"),f(t?t.reduce(function(h,v){return h+="".concat(v,". "),h},""):"")))};return o.useEffect(function(){m(n,a)},[n,a]),o.createElement(o.Fragment,null,r&&d&&s&&o.createElement("span",{className:"files-ui-tooltiptext ".concat(s)},d))},bs=function(e){var n=e.downloadUrl,a=e.anchorRef,t=e.fileName;function i(r){r.stopPropagation()}return n?o.createElement("a",{ref:a,target:"_blank",href:n,download:t,hidden:!0,rel:"noopener noreferrer",onClick:i},"download_file"):o.createElement(o.Fragment,null)};_(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
.files-ui-file-mosaic-main-container {
  width: 132px;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 400;
  word-break: break-word;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container {
  width: 132px;
  height: 132px;
  border-radius: 8px;
  box-sizing: border-box;
  overflow: hidden;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-image-layer {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-image-layer img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-image-layer.blur img {
  filter: blur(4px);
  width: 200%;
  height: 200%;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-main-layer {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-main-layer .file-mosaic-main-layer-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-main-layer .file-mosaic-main-layer-footer {
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-main-layer .file-mosaic-main-layer-footer .file-mosaic-footer-right {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
  align-items: flex-end;
  justify-content: flex-end;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-main-layer .file-mosaic-main-layer-footer .file-mosaic-footer-left {
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  align-items: flex-start;
  justify-content: center;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer {
  position: absolute;
  left: 0;
  right: 0;
  text-align: left;
  scrollbar-width: thin;
  line-height: 1.5;
  letter-spacing: 0.02857em;
  font-family: "Poppins", sans-serif;
  width: inherit;
  background-color: rgba(0, 0, 0, 0.85);
  word-break: break-word;
  height: 100%;
  width: 100%;
  font-size: 0.8rem;
  transition: all 0.5s ease 0s;
  overflow: auto;
  color: white;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer::-webkit-scrollbar {
  width: 9px;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer::-webkit-scrollbar-track {
  background: transparent;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer::-webkit-scrollbar-thumb {
  background-color: rgba(100, 108, 127, 0.662745098);
  border-radius: 20px;
  border: transparent;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer .files-ui-file-mosaic-info-layer-header {
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer .heading {
  font-weight: 600;
  padding: 0 5px;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer .label {
  padding: 0 5px;
  font-weight: 399;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-file-name {
  margin-top: 1px;
  height: 31px;
  text-align: center;
  width: 100%;
  color: black;
  font-size: 0.95em;
  box-sizing: border-box;
  line-height: 15px;
  font-weight: 400;
  letter-spacing: 0.07rem;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
  /*  display: flex;
   align-items: center;
   justify-content: center; */
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-file-name.dark-mode {
  color: rgba(255, 255, 255, 0.7);
}
.files-ui-file-mosaic-main-container.clickable {
  cursor: pointer;
}

/* .files-ui-file-icon {
  font-size: 0.7rem;
  min-width: 19px;
  min-height: 19px;
  margin: 0;
  padding: 2px 2px;
  border-radius: 50%;
  background-color: rgba(32, 33, 36, 0.65);
  word-break: break-word;
  box-sizing: content-box;
  &:hover {
    background-color: rgba(32, 33, 36, 0.85);
  }
  &.dark-mode {
    background-color: rgba(154, 160, 166, 0.65);
    &:hover {
      background-color: rgba(154, 160, 166, 0.85);
    }
  }
}
 */`);_(`.files-ui-layer-container {
  position: relative;
}`);var hs=function(e){var n=e.style,a=e.className,t=e.children,i=oe(a||"","files-ui-layer-container");return o.createElement("div",{className:i,style:n},t)},xs=function(e){var n=e.fileName;return n?o.createElement("span",null,n):o.createElement(o.Fragment,null)};_(`.files-ui-file-mosaic-upload-layer {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 1em;
  position: relative;
  overflow: hidden;
}
.files-ui-file-mosaic-upload-layer .elevation-list {
  transition: all 1.5s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.files-ui-file-mosaic-upload-layer .elevation-list .elevation-item {
  width: 100%;
  height: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 10px;
  box-sizing: border-box;
}
.files-ui-file-mosaic-upload-layer .elevation-list .elevation-item span {
  text-align: center;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}`);var ys=function(e){var n=e.uploadStatus,a=e.onCancel,t=e.onAbort,i=e.progress,r=e.localization,l=o.useRef(null),s=o.useRef(null),c=o.useState([void 0]),u=c[0],d=c[1];o.useEffect(function(){d(function(m){if(m[m.length-1]==="preparing"&&n==="uploading"){var p=xe([],m,!0);return p[m.length-1]=n,xe([],p,!0)}return xe(xe([],m,!0),[n],!1)})},[n]);var f=function(){var m=l.current,p=s.current;m===null||p===null||(p.style.top=0-(u.length-1)*132+"px")};return o.useEffect(function(){u.length>1&&f()},[u.length]),o.createElement("div",{className:"elevation-layer-container",ref:l},o.createElement("div",{className:"elevation-list",ref:s},u.map(function(m,p){switch(m){case"preparing":return o.createElement("div",{className:"elevation-item",key:p+1},o.createElement(fs,{onCancel:a,localization:r}));case"uploading":return o.createElement("div",{className:"elevation-item",key:p+1},o.createElement(gs,{onAbort:t,progress:i,localization:r}));case"error":return o.createElement("div",{className:"elevation-item",key:p+1},o.createElement(ds,{localization:r}));case"success":return o.createElement("div",{className:"elevation-item",key:p+1},o.createElement(ms,{localization:r}));case"aborted":return o.createElement("div",{className:"elevation-item",key:p+1},o.createElement(cs,{localization:r}));default:return o.createElement("div",{className:"elevation-item",key:p+1},o.createElement(us,null))}})))},Za=function(e){var n=e.imageSource,a=e.url,t=e.fileName,i=e.card,r=e.isBlur,l=e.smartImgFit,s=o.useState(void 0),c=s[0],u=s[1],d=o.useState(!1),f=d[0],m=d[1];o.useEffect(function(){u(n||a)},[n,a]);var p=function(){m(!0),u(a)};return r?o.createElement(o.Fragment,null,!i&&!f&&n&&o.createElement(la,{src:c,alt:"blur ".concat(t),smartImgFit:!1})):o.createElement(o.Fragment,null,o.createElement(la,{onError:p,src:c,style:{borderRadius:"0px"},alt:"preview ".concat(t),smartImgFit:l}))};_(`.files-ui-file-item-status-container {
  text-align: center;
  font-size: 0.8rem;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 4px;
  padding: 0.5px;
  font-weight: 400;
}
.files-ui-file-item-status-container.file-status-error {
  color: #f44336;
}
.files-ui-file-item-status-container.file-status-ok {
  color: #5c7a1f;
}
.files-ui-file-item-status-container.file-status-loading {
  position: relative;
  display: flex;
  color: #8b6b10;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.7);
}
.files-ui-file-item-status-container.file-status-loading.percentage {
  padding: 7px 4px 2px 5px;
}
.files-ui-file-item-status-container.file-status-loading .abort-button {
  position: absolute;
  right: -2px;
  top: -2px;
}
.files-ui-file-item-status-container.file-status-loading .uploading-text.up {
  margin-bottom: -22px;
}
.files-ui-file-item-status-container.file-status-loading .uploading-text.down {
  margin-top: -20px;
}
.files-ui-file-item-status-container.file-status-loading .uploading-text p.percentage {
  font-weight: 500;
}`);var ht=function(e){var n=e.valid,a=e.uploadStatus,t=e.localization,i=e.style,r=Ne(t).status;return a==="success"?o.createElement("div",{className:"files-ui-file-item-status-container file-status-ok",style:i},o.createElement(Ll,{color:"#4caf50",size:"small",className:"status-icon"}),r.success):a==="error"||a==="aborted"?o.createElement("div",{className:"files-ui-file-item-status-container file-status-error",style:i},o.createElement(Pl,{color:"#f44336",size:"semi-medium",className:"status-icon"}),r.error):n!=null?n?o.createElement("div",{className:"files-ui-file-item-status-container file-status-ok",style:i},o.createElement(pt,{color:"#4caf50",size:"small",className:"status-icon"}),r.valid):o.createElement("div",{className:"files-ui-file-item-status-container file-status-error",style:i},o.createElement(gt,{color:"#f44336",size:"small",className:"status-icon"}),r.denied):o.createElement(o.Fragment,null)},ws=function(e){var n=e.valid,a=e.localization,t=e.onCloseInfo,i=e.uploadStatus,r=e.localName,l=e.sizeFormatted,s=e.localType,c=Ne(a),u=c.fullInfoLayer,d=u.name,f=u.size,m=u.type;return o.createElement(o.Fragment,null,o.createElement("div",{className:"files-ui-file-mosaic-info-layer-header"},o.createElement(mt,{color:"rgba(255,255,255,0.8)",onClick:t,colorFill:"black"}),o.createElement(ht,{valid:n,uploadStatus:i,localization:a})),o.createElement("div",{className:"heading"},d),o.createElement("div",{className:"label"},r),o.createElement("div",{className:"heading"},f),o.createElement("div",{className:"label"},l),o.createElement("div",{className:"heading"},m),o.createElement("div",{className:"label"},s))};_(`.filesui-file-item-size {
  box-sizing: border-box;
  font-size: 0.7rem;
  border: 0.5px solid wheat;
  text-align: center;
  color: rgba(255, 255, 255, 0.89);
  padding: 2px 1.5px;
  border-radius: 7px;
  background-color: rgba(32, 33, 36, 0.75);
  min-width: 45px;
  word-break: break-word;
  font-family: inherit;
}
.filesui-file-item-size:hover {
  background-color: rgba(32, 33, 36, 0.85);
  color: rgba(255, 255, 255, 0.97);
}`);var Es=function(e){var n=e.sizeFormatted;return o.createElement(o.Fragment,null,n&&o.createElement("div",{className:"filesui-file-item-size"},n))},Fs=function(e){var n=e.darkMode,a=e.deleteIcon,t=e.downloadIcon,i=e.imageIcon,r=e.infoIcon,l=e.onDelete,s=e.onDownload,c=e.onOpenInfo,u=e.onSee,d=e.onWatch,f=e.sizeFormatted,m=e.valid,p=e.videoIcon,b=e.localization,h=e.uploadStatus,v=e.isActive;return o.createElement(o.Fragment,null,o.createElement("div",{className:"file-mosaic-main-layer-header"},v&&a&&o.createElement(an,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",color:n?"#121212":"rgba(255,255,255,0.851)",onClick:l,size:"small",colorFill:"transparent"})),o.createElement("div",{className:"file-mosaic-main-layer-footer"},o.createElement("div",{className:"file-mosaic-footer-left"},o.createElement(ht,{valid:m,uploadStatus:h,localization:b}),v&&f&&o.createElement(Es,{sizeFormatted:f})),o.createElement("div",{className:"file-mosaic-footer-right"},v&&o.createElement(o.Fragment,null,i&&o.createElement(Ol,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",color:n?"#121212":"rgba(255,255,255,0.851)",onClick:u,size:"small"}),p&&o.createElement(Ul,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",color:n?"#121212":"rgba(255,255,255,0.851)",onClick:d,size:"small"}),t&&o.createElement(Il,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",color:n?"#121212":"rgba(255,255,255,0.851)",onClick:s,size:"small"}),r&&o.createElement(jl,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",onClick:c,color:n?"#121212":"rgba(255,255,255,0.851)",size:"micro"})))))},ks=function(e){var n=e.style,a=e.className,t=e.file,i=e.name,r=e.size,l=e.type,s=e.id,c=e.valid,u=e.errors,d=e.uploadStatus,f=e.uploadMessage,m=e.progress,p=e.xhr,b=e.localization,h=e.preview,v=e.imageUrl,x=e.videoUrl,E=e.info,w=e.backgroundBlurImage,z=w===void 0?!0:w,F=e.darkMode,S=e.alwaysActive,k=S===void 0?!0:S,D=e.resultOnTooltip,C=D===void 0?!0:D,B=e.downloadUrl,T=e.onDelete,U=e.onCancel,O=e.onAbort,H=e.onDownload,L=e.onSee,G=e.onWatch,V=e.onDoubleClick,P=e.onClick,Z=e.onRightClick,J=e.smartImgFit,ne=J===void 0?"orientation":J,ge=o.useContext(fa),de=ge.darkMode,X=ge.icons,Q=ge.localization,fe=b!==void 0?b:Q,tn=F!==void 0?F:de,rn=o.useRef(null),Rn=oe(oe("files-ui-file-mosaic-main-container files-ui-tooltip",a),P?"clickable":void 0),on=tn?"files-ui-file-mosaic-file-name dark-mode":"files-ui-file-mosaic-file-name",Te=ol(t,i,l,r),ve=Te[0],An=Te[1],ln=Te[2],be=is(m,p),K=as(t,i,l,c,h,v,x,X),sn=K[0],cn=K[1],un=K[2],Me=K[3],Ee=K[4],dn=K[5],Oe=ue(ln),He=o.useState(!1),Re=He[0],fn=He[1],Ve=o.useState(!1),Dn=Ve[0],$e=Ve[1],Bn=function(){k||$e(!0)},mn=function(){k||$e(!1)},Ln=function(){return T==null?void 0:T(s)},pn=function(){return fn(!0)},gn=function(){return fn(!1)},Fe=rs(d);o.useEffect(function(){Fe&&Re&&gn()},[Fe]);function In(Y){Y.stopPropagation(),P==null||P(Y)}var vn=function(Y){Y.preventDefault(),V==null||V(Y)};function jn(Y){Z==null||Z(Y)}var bn=function(){var Y=rn.current;Y&&Y.click()},Un=function(){H?H==null||H(s,B):typeof B=="string"&&bn()},_n=function(){p==null||p.abort(),O==null||O(s)};return sn?o.createElement("div",{className:Rn,style:n,onClick:In,onMouseEnter:Bn,onMouseLeave:mn,onDoubleClick:vn,onContextMenu:jn},o.createElement(hs,{className:"files-ui-file-mosaic-icon-layer-container",style:n},o.createElement(Qe,{className:"files-ui-file-mosaic-image-layer blur",visible:z},o.createElement(Za,{imageSource:Ee,url:Me,fileName:ve,isBlur:!0,smartImgFit:!1})),o.createElement(Qe,{className:"files-ui-file-mosaic-image-layer",visible:!0},o.createElement(Za,{imageSource:Ee,url:Me,fileName:ve,isBlur:!1,smartImgFit:ne})),o.createElement(Qe,{className:"files-ui-file-mosaic-main-layer",visible:!Fe&&!Re},o.createElement(Fs,{deleteIcon:T!==void 0,onDelete:Ln,darkMode:tn,valid:c,uploadStatus:d,localization:fe,sizeFormatted:Oe,imageIcon:cn&&L!==void 0,onSee:function(){return L==null?void 0:L(Ee)},videoIcon:un&&G!==void 0,onWatch:function(){return G==null?void 0:G(dn)},downloadIcon:H!==void 0||B!==void 0,onDownload:Un,infoIcon:E!==void 0,onOpenInfo:pn,isActive:k||Dn})),o.createElement(Qe,{className:"files-ui-file-mosaic-info-layer",visible:Re,onClick:le},o.createElement(ws,{onCloseInfo:gn,valid:c,localization:fe,localName:ve,sizeFormatted:Oe,localType:An})),o.createElement(Qe,{className:"files-ui-file-mosaic-upload-layer",visible:Fe,onClick:le},o.createElement(ys,{uploadStatus:d,progress:be,onCancel:U?function(){return U==null?void 0:U(s)}:void 0,onAbort:O?_n:void 0,localization:fe}))),o.createElement("div",{className:on},o.createElement(xs,{fileName:ve})),o.createElement(vs,{open:C,uploadStatus:d,valid:c,errors:u,uploadMessage:f}),o.createElement(bs,{fileName:ve,anchorRef:rn,downloadUrl:B})):o.createElement(o.Fragment,null)};_(`.fui-fullscreen-container {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.734);
  transform: translate(100%);
  transition: transform 0.2s ease-in-out;
  margin: 0 !important;
  z-index: 4000;
  box-sizing: border-box;
}
.fui-fullscreen-container.show-fs {
  transform: translate(0);
}

.fui-fullscreen-relative-container {
  position: relative;
  width: 90%;
  height: 90%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  /*   @media (max-width: 600px) {
    width: 80%;
    height: auto;
  }*/
}
.fui-fullscreen-relative-container img {
  height: 100%;
  width: auto;
}
.fui-fullscreen-relative-container video {
  height: 100%;
  width: auto;
}
@media (max-width: 960px) {
  .fui-fullscreen-relative-container {
    height: 90%;
    width: 100%;
  }
  .fui-fullscreen-relative-container video {
    height: auto;
    width: 100%;
  }
  .fui-fullscreen-relative-container img {
    height: auto;
    width: 100%;
  }
}

.button-full-screen {
  position: absolute;
  top: 0;
  right: 0;
}`);var Cs=function(e){var n=e.open,a=e.onClose,t=e.children;function i(r){r.stopPropagation(),a==null||a()}return o.useEffect(function(){var r=function(l){l.key==="Escape"&&(a==null||a())};return document.addEventListener("keydown",r),function(){document.removeEventListener("keydown",r)}},[]),o.createElement("div",{className:n?"fui-fullscreen-container show-fs":"fui-fullscreen-container",onClick:i},n&&o.createElement("div",{className:"fui-fullscreen-relative-container",onClick:i},t),a&&o.createElement(an,{color:"rgba(255,255,255,0.8)",onClick:i,colorFill:"transparent",className:"button-full-screen",size:"extra-large"}))};function zs({errors:e,setValue:n}){var s;const[a,t]=o.useState([]),[i,r]=o.useState(void 0),l=c=>{t(a.filter(u=>u.id!==c))};return o.useEffect(()=>{var c;n("files",((c=a[0])==null?void 0:c.file)??null,{shouldValidate:!0})},[a]),g.jsx(Sn,{children:g.jsxs(Nn,{children:[g.jsx(Le,{variant:"h5",mb:1,children:"Facture"}),g.jsx(os,{behaviour:"replace",localization:"FR-fr",maxFileSize:10*1024*1024,maxFiles:1,label:"Déposez ici votre facture",headerConfig:{customHeader:g.jsx(Le,{textAlign:"left",p:1,variant:"h5",children:"Maximum 10 MB"})},footerConfig:{style:{padding:"10px"},customFooter:g.jsx(et,{sx:{p:1},children:(s=e.files)==null?void 0:s.message})},cleanFiles:!0,accept:"image/*",onChange:c=>t(c),value:a,children:a.map((c,u)=>g.jsxs(N.Fragment,{children:[g.jsx(ks,{onSee:d=>r(d),preview:!0,...c,onDelete:l,info:!0},c.id),g.jsx(Cs,{open:i!==void 0,onClose:()=>r(void 0),children:g.jsx(la,{src:i})})]},u))})]})})}function Ss({basketData:e}){const{data:n,isLoading:a,isError:t,error:i}=e;return t?g.jsx(Qa,{error:i}):a?g.jsx(En,{}):g.jsx(Sn,{children:g.jsx(Nn,{sx:{p:0},children:g.jsx(It,{sx:{width:"100%",bgcolor:"background.paper"},children:n.baskets.map(r=>g.jsxs(Dr,{children:[g.jsx(_r,{children:g.jsx(jt,{src:r.product.image_url})}),g.jsx(Wt,{primary:r.product.name,secondary:r.formatted_sub_amount})]},r.id))})})})}function Ns({register:e,errors:n}){var r;const{paymentMethods:a,isError:t,isLoading:i}=Kt();return i?g.jsx(En,{}):t?g.jsx(Qa,{error:"Erreur survenue"}):g.jsx(Sn,{children:g.jsxs(Nn,{children:[g.jsx(Le,{variant:"h5",mb:1,children:"Options De Paiement"}),g.jsxs(Ya,{display:"flex",flexWrap:"wrap",gap:2,children:[g.jsxs($t,{error:!!n.paymentMethod,children:[g.jsx(ai,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"",children:i?g.jsx(En,{}):a.mobile.map(l=>g.jsx(Qt,{value:l.key,...e("paymentMethod",{required:"veuillez entrer le mode de paiement"}),control:g.jsx(Yr,{sx:{height:"30px"}}),label:l.name},l.key))}),g.jsx(et,{children:(r=n.paymentMethod)==null?void 0:r.message})]}),i?g.jsx(En,{}):g.jsxs(nr,{sx:{flexGrow:1},severity:"info",children:[g.jsx(cr,{children:"vous pouvez envoyer l'argent à :"}),g.jsx(na,{children:a.mobile.map(l=>g.jsx(Le,{variant:"paragraph",component:"p",children:l.number},l.key))})]})]})]})})}function Vs(){var m,p;const e=Ut(),n=_t(),a=Zt(),t=(m=a.data)==null?void 0:m.baskets,i=(t==null?void 0:t.filter(({product:b})=>b.category.name.toLowerCase()=="epin").length)>0,{register:r,handleSubmit:l,setValue:s,formState:{errors:c,isValid:u}}=Gt({defaultValues:{pubg_id:"",paymentMethod:"",files:null}});o.useEffect(()=>{r("files",{required:"veuillez entrer l'image de la facture"})},[]);const d=ar({mutationKey:"payMutation",mutationFn:async b=>await tr.post("/sales",b).then(h=>h.data).catch(Tt.catch)}),f=b=>{d.mutate(b,{onSuccess(h){h.code==422&&La.fire({icon:"error",title:"Erreur",titleText:Yt(h.errors).join(" "),...er}),h.code==200&&(n.invalidateQueries("front.baskets"),e(Ba.orders,{state:{...h}}))},error(h){La.fire({icon:"error",title:"Erreur",titleText:JSON.stringify(h)})}})};return(t==null?void 0:t.length)==0?g.jsx(Pt,{to:Ba.popular}):g.jsxs(Ya,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:l(f),children:[g.jsx(Ot,{title:"Payment"}),g.jsxs(Qn,{container:!0,spacing:2,children:[g.jsx(Qn,{item:!0,xs:12,md:7,children:g.jsxs(na,{spacing:2,children:[i&&g.jsx(Sn,{children:g.jsxs(Nn,{children:[g.jsx(Le,{variant:"h5",mb:1,children:"Veuillez saisir votre ID de PubG Mobile"}),g.jsx(qt,{fullWidth:!0,error:!!c.pubg_id,helperText:(p=c==null?void 0:c.pubg_id)==null?void 0:p.message,...r("pubg_id",{required:" ID de PubG Mobile ne peut pas être vide"}),placeholder:"Écris...",label:"ID de PubG Mobile",onChange:b=>s("pubg_id",b.target.value.toUpperCase())})]})}),g.jsx(Ns,{register:r,errors:c}),g.jsx(zs,{errors:c,register:r,setValue:s})]})}),g.jsx(Qn,{item:!0,xs:12,md:5,children:g.jsxs(na,{spacing:2,children:[g.jsx(Ss,{basketData:a}),g.jsx(Xt,{loading:d.isLoading,isValid:u,amount:a.data.sum_sub_amount,buttonType:"submit",label:"Confirmer Et Payer"})]})})]})]})}export{Vs as default};
