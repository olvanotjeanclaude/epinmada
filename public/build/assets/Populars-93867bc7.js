import{J as f,K as v,j as a,r as g,I as o,S as p,w as c,a8 as C,H as S,Q as b}from"./700-2286912f.js";import{P as _}from"./PageTitle-327b543a.js";import{a as y,b as P}from"./useProduct-3cfca385.js";import{S as k}from"./Snackbar-931d7124.js";import{A as L}from"./Grow-efdaed09.js";import{C as T,a as A,G as u}from"./Grid-163510bf.js";import{L as H}from"./LoadingButton-edb25967.js";import{C as h}from"./Chip-000a6ca8.js";import"./_commonjsHelpers-59ed3296.js";import"./makeRequest-91bdc274.js";import"./axios-5779fc5d.js";import"./useMutation-5c286b11.js";var m={},w=v;Object.defineProperty(m,"__esModule",{value:!0});var x=m.default=void 0,z=w(f()),E=a,q=(0,z.default)((0,E.jsx)("path",{d:"M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"}),"AddShoppingCart");x=m.default=q;function F({product:r}){const t=y(),[s,i]=g.useState(!1),n=()=>{i(!1)},l=()=>{t.mutate(r.unique_id,{onSuccess(d){i(!0)}})};return a.jsxs(a.Fragment,{children:[a.jsx(k,{open:s,autoHideDuration:6e3,onClose:n,children:a.jsxs(L,{onClose:n,variant:"filled",severity:"success",children:[r.name," a été  ajouté au panier avec succès"]})}),a.jsx(T,{children:a.jsx(A,{children:a.jsxs(o,{gap:1,display:"flex",justifyContent:{md:"center"},children:[a.jsx(o,{component:"img",width:110,sx:{objectFit:"cover"},height:110,alt:r.name,src:r.image_url}),a.jsxs(o,{flexGrow:1,children:[a.jsxs(p,{children:[a.jsx(c,{variant:"h6",noWrap:!0,children:r.name}),a.jsx(c,{variant:"body2",color:C[700],children:r.category.name})]}),a.jsx(c,{variant:"h5",fontWeight:"bold",mt:1,children:r.formatted_price}),a.jsx(H,{sx:{mt:1},loading:t.isLoading,disabled:t.isLoading,onClick:l,variant:"contained",size:"small",startIcon:a.jsx(x,{}),children:"Ajouter"})]})]})})})]})}function N(){const{data:r,isLoading:t,tag:s,setTag:i,isError:n,error:l}=P();if(n)return a.jsx(S,{error:l});if(t)return a.jsx(b,{});const d=e=>{i(e.name)};return a.jsxs(a.Fragment,{children:[a.jsx(_,{title:"Populaire Produits"}),a.jsxs(o,{children:[a.jsxs(p,{direction:"row",gap:1,mb:1,children:[a.jsx(h,{variant:"contained",label:"Tout",color:s=="all"?"primary":"default",onClick:()=>d({name:"all"})}),r.categories.map(e=>a.jsx(h,{label:e.name,color:e.name==s?"primary":"default",variant:"contained",onClick:()=>d(e)},e.id))]}),a.jsx(u,{container:!0,spacing:1,children:r.products.data.map((e,j)=>a.jsx(u,{sx:{width:"100%"},item:!0,md:6,children:a.jsx(F,{product:e})},j))})]})]})}export{N as default};