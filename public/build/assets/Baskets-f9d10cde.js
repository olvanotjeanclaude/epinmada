import{J as j,K as v,j as e,r as l,f as S,S as m,O as u,w as n,U as q,a8 as h,I as c,s as M,H as R,Q as w}from"./700-2286912f.js";import{u as E}from"./useMutation-5c286b11.js";import{h as P}from"./makeRequest-91bdc274.js";import{d as $}from"./Delete-769a0361.js";import{u as z}from"./useProduct-3cfca385.js";import{C as I,a as k,G as d}from"./Grid-163510bf.js";import{S as B}from"./StepPay-eec2764c.js";import{P as D}from"./PageTitle-327b543a.js";import{u as F}from"./main-37fe8776.js";import"./_commonjsHelpers-59ed3296.js";import"./axios-5779fc5d.js";import"./LoadingButton-edb25967.js";var x={},H=v;Object.defineProperty(x,"__esModule",{value:!0});var y=x.default=void 0,Q=H(j()),A=e,G=(0,Q.default)((0,A.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}),"AddCircle");y=x.default=G;var p={},O=v;Object.defineProperty(p,"__esModule",{value:!0});var g=p.default=void 0,K=O(j()),L=e,T=(0,K.default)((0,L.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"}),"RemoveCircle");g=p.default=T;function J({basket:t}){const[r,a]=l.useState(0),s=t.product;l.useEffect(()=>{a(t.quantity)},[s]);const o=S(),f=E({mutationKey:["countBasket"],mutationFn:async i=>await P.post(`/update-quantity/${t.id}`,{quantity:i}).then(b=>b.data).catch(q.catch)}),C=()=>{a(i=>i+1)},_=()=>{a(i=>i-1)};return l.useEffect(()=>{r>0&&f.mutate(r,{onSuccess(){o.invalidateQueries("front.baskets")}})},[r]),e.jsxs(m,{direction:"row",alignItems:"center",justifyContent:"center",borderRadius:10,children:[e.jsx(u,{color:"primary",size:"small",disabled:r<=1,onClick:_,children:e.jsx(g,{})}),e.jsx(n,{variant:"h6",color:"primary",children:r}),e.jsx(u,{color:"primary",size:"small",onClick:C,children:e.jsx(y,{})})]})}const N=M(k)(`
&:last-child {
  padding-bottom: 0;
}
`);function U({basket:t}){const r=z(),a=t.product,s=()=>r.mutate(t.id);return e.jsx(I,{sx:{border:`1px solid ${h[300]}`,pb:1.5},elevation:0,children:e.jsx(N,{sx:{opacity:r.isLoading?.3:1},children:e.jsx(c,{children:e.jsxs(c,{display:"flex",gap:2,children:[e.jsx("img",{width:83,style:{objectFit:"cover"},height:83,src:a.image_url}),e.jsxs(m,{flexGrow:1,children:[e.jsx(n,{variant:"h6",children:a.name}),e.jsx(n,{variant:"body2",color:h[700],children:a.category.name}),e.jsxs(c,{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",children:[e.jsx(J,{basket:t}),e.jsx(u,{onClick:s,size:"small","aria-label":"delete",children:e.jsx($,{})}),e.jsx(n,{variant:"h5",children:t.formatted_sub_amount})]})]})]})})})})}function oe(){const{data:t,isError:r,error:a,isLoading:s}=F();return r?e.jsx(R,{error:a}):s?e.jsx(w,{}):e.jsxs(e.Fragment,{children:[e.jsx(D,{title:"Mon Panier"}),e.jsxs(d,{container:!0,mb:2,spacing:1,children:[e.jsx(d,{item:!0,xs:12,md:8,xl:9,children:e.jsxs(m,{spacing:1,children:[t.baskets.map((o,f)=>e.jsx(U,{basket:o},o.id)),t.baskets.length==0&&e.jsx(n,{variant:"h4",color:"warning",children:"Aucune data"})]})}),e.jsx(d,{item:!0,xs:12,md:4,xl:3,children:t.baskets.length>0?e.jsx(B,{amount:t.sum_sub_amount}):e.jsx(e.Fragment,{})})]})]})}export{oe as default};