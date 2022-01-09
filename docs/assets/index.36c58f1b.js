import{j as g,n as c,r as d,R as S,a as E}from"./vendor.9163baf9.js";const w=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerpolicy&&(t.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?t.credentials="include":s.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(s){if(s.ep)return;s.ep=!0;const t=n(s);fetch(s.href,t)}};w();var C="/assets/imagen-criptos.c0430b0f.png";const e=g.exports.jsx,o=g.exports.jsxs,y=g.exports.Fragment,N=c.label`
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
        
    `,I=c.select`
    width:100%;
    font-size: 18px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    padding: 14px;
    border-radius: 10px;
       
    `,v=(r,a)=>{const[n,i]=d.exports.useState("");return[n,()=>o(y,{children:[e(N,{children:r}),o(I,{value:n,onChange:t=>i(t.target.value),children:[e("option",{value:"",children:"Seleccionar"}),a.map(t=>e("option",{value:t.id,children:t.name},t.id))]})]})]},L=[{id:"USD",name:"Dolar de Estados Unidos"},{id:"MXN",name:"Peso de M\xE9xico"},{id:"EUR",name:"Euro"},{id:"GBP",name:"Libra Esterlina"}],F=c.h1`
    color:#fff;
    text-align: center;
    background-color: #8f0000;
    padding: 15px;
    font-size: 22px;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    
`,j=({msjErr:r})=>e("div",{children:e(F,{children:r})}),A=c.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`,P=({setMonedas:r})=>{const[a,n]=d.exports.useState([]),[i,s]=d.exports.useState(!1),[t,l]=v("Elige la moneda",L),[p,m]=v("Elige tu criptomoneda",a);return d.exports.useEffect(()=>{(async()=>{const h=await"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD",b=(await(await fetch(h)).json()).Data.map(k=>({id:k.CoinInfo.Name,name:k.CoinInfo.FullName}));n(b)})()},[]),o("div",{children:[i&&e(j,{msjErr:"Todos los campos son obligatorios"}),o("form",{onSubmit:f=>{if(f.preventDefault(),[t,p].includes("")){s(!0);return}s(!1),r({moneda:t,criptomoneda:p})},children:[e(l,{}),e(m,{}),e(A,{type:"submit",value:"Cotizar"})]})]})},D=c.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;

`,z=c.img`
    display: block;
    width: 120px;
`,u=c.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }  
`,M=c.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`,R=({resultado:r})=>{const{PRICE:a,HIGHDAY:n,LOWDAY:i,CHANGEPCT24HOUR:s,IMAGEURL:t,LASTUPDATE:l}=r;return o(D,{children:[e(z,{src:`https://cryptocompare.com/${t}`,alt:"imagen cripto"}),o("div",{children:[o(M,{children:["El precio es de: ",e("span",{children:a})]}),o(u,{children:["Precio m\xE1s alto del d\xEDa ",e("span",{children:n})]}),o(u,{children:["Precio m\xE1s bajo del d\xEDa ",e("span",{children:i})]}),o(u,{children:["Variaci\xF3n \xFAltimas 24 horas: ",e("span",{children:s})]}),o(u,{children:["\xDAltima actualizaci\xF3n: ",e("span",{children:l})]})]})]})};const O=()=>e(y,{children:o("div",{className:"sk-circle",children:[e("div",{className:"sk-circle1 sk-child"}),e("div",{className:"sk-circle2 sk-child"}),e("div",{className:"sk-circle3 sk-child"}),e("div",{className:"sk-circle4 sk-child"}),e("div",{className:"sk-circle5 sk-child"}),e("div",{className:"sk-circle6 sk-child"}),e("div",{className:"sk-circle7 sk-child"}),e("div",{className:"sk-circle8 sk-child"}),e("div",{className:"sk-circle9 sk-child"}),e("div",{className:"sk-circle10 sk-child"}),e("div",{className:"sk-circle11 sk-child"}),e("div",{className:"sk-circle12 sk-child"})]})}),U=c.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media(min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`,T=c.img`
  margin: 100px auto 0 auto;
  max-width: 400px;
  width: 80%;
  display: block;


`,$=c.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`,H=()=>{const[r,a]=d.exports.useState({}),[n,i]=d.exports.useState({}),[s,t]=d.exports.useState(!1);return d.exports.useEffect(()=>{Object.keys(r).length>0&&(async()=>{t(!0),i({});const{moneda:p,criptomoneda:m}=r,x=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${m}&tsyms=${p}`,h=await(await fetch(x)).json();i(h.DISPLAY[m][p]),t(!1)})()},[r]),o(U,{children:[e(T,{src:C,alt:"ImagenCriptos"}),o("div",{children:[e($,{children:"Cotiza Criptomonedas al Instante"}),e(P,{setMonedas:a}),s&&e(O,{}),n&&n.PRICE&&e(R,{resultado:n})]})]})};S.render(e(E.StrictMode,{children:e(H,{})}),document.getElementById("root"));
