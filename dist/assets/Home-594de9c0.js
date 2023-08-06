import{j as e,r as k,S as A,u as E,a as m,B as u,b as o,c as p,d as j,M as a}from"./index-19901543.js";const w=({pickingBet:r,betPoints:t,betOptionName:s,textColor:x,bgColor:i,borderColor:c})=>e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>r("+"),className:`h-32 w-44 border-solid border-2 ${c} rounded-md flex flex-col items-center justify-center ${i} ml-6 enabled:hover:opacity-50 active:opacity-70 focus:outline-none focus:ring`,children:[!!t&&e.jsx("div",{className:`rounded-full bg-white p-1 border-4 ${c}`,children:t}),e.jsx("div",{className:`${x} p-3`,children:s})]}),e.jsx("div",{className:"flex items-center justify-center pt-2 font-bold text-xl text-white ml-6 mb-2",children:e.jsxs("div",{className:"inline-flex",children:[e.jsx("button",{onClick:()=>r("+"),className:"bg-gray-300 enabled:hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 md:py-2 md:px-4 lg:py-2 lg:px-4  rounded-l disabled:opacity-80",children:"+"}),e.jsx("button",{onClick:()=>r("-"),className:"bg-gray-300 enabled:hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 md:py-2 md:px-4 lg:py-2 lg:px-4 rounded-r disabled:opacity-80",disabled:t<=0,children:"-"})]})})]}),z=()=>e.jsxs("svg",{"aria-hidden":"true",className:"w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]});function O(){return k.useContext(A)}const D=()=>{const{computerBet:r,winner:t,stage:s,playerBet:x}=O(),{playerBetPoints:i}=E();return s?e.jsxs("div",{className:"flex items-center justify-around mb-1 md:mb-15 lg:mb-20",children:[s===m.START&&e.jsx(e.Fragment,{children:e.jsx("h1",{className:"font-bold text-3xl md:text-4xl lg:text-6xl text-white",children:"PICK YOUR BETS"})}),s===m.PENDING&&e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"font-bold text-3xl md:text-4xl lg:text-6xl text-white",children:x}),e.jsx("div",{className:"font-bold text-xl md:text-3xl lg:text-4xl text-yellow-400",children:"vs"}),e.jsx("h1",{className:"font-bold text-3xl md:text-4xl lg:text-6xl text-white",children:r})]}),s===m.END&&e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsxs("h1",{className:`font-bold text-2xl md:text-4xl lg:text-6xl ${t!=null&&t.winningBet?`${u[t==null?void 0:t.winningBet]}`:"text-white"}`,children:[t.winningBet," WON"]}),e.jsxs("h1",{className:"font-bold lg:text-3xl text-xl text-white mt-1 lg:mt-2",children:["You",t.name==="PLAYER"?` Win ${t.points}`:` Lost ${i}`]})]})]}):e.jsx("div",{})},U=({type:r,message:t,callBack:s})=>r==="success"?e.jsxs("div",{"data-testid":"toast-success",className:"flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 m-auto",role:"alert",children:[e.jsxs("div",{className:"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200",children:[e.jsx("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),e.jsx("span",{className:"sr-only",children:"Check icon"})]}),e.jsx("div",{className:"ml-3 text-sm font-normal",children:t}),e.jsxs("button",{type:"button",className:"ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700","data-dismiss-target":"#toast-success","aria-label":"Close",onClick:s,children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]})]}):r==="error"?e.jsxs("div",{"data-testid":"toast-danger",className:"flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 m-auto",role:"alert",children:[e.jsxs("div",{className:"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200",children:[e.jsx("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}),e.jsx("span",{className:"sr-only",children:"Error icon"})]}),e.jsx("div",{className:"ml-3 text-sm font-normal",children:t}),e.jsxs("button",{type:"button",className:"ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700","data-dismiss-target":"#toast-danger","aria-label":"Close",onClick:s,children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]})]}):e.jsx("div",{}),G=()=>{const[r,t]=k.useState(""),{rockBet:s,setRockBet:x,paperBet:i,playerBetPoints:c,setPaperBet:v,scissorsBet:b,setScissorsBet:C,clearBet:T,setPlayerBetPoints:y,mapBet:P}=E(),{playerBalance:h,playerBet:d,play:L,setPlayerBalance:N,setPlayerBet:B,stage:S,clearScore:I,winner:M,loading:R,setLoading:$}=O(),_=()=>{T(),I()},f=(l,g)=>{const n=d==null?void 0:d.split(",");if(h<=0&&g==="+")return t("No Balance!");if((n==null?void 0:n.length)>1&&(n==null?void 0:n.indexOf(l))===-1)return t("You can not select all three options!");switch(g==="+"?(N(h-a),y(c+a),(n==null?void 0:n.indexOf(l))===-1&&B(d?`${d},${l}`:l)):(N(h+a),y(c-a),P[l]-a===0&&B(d.replace(l,"").replace(",",""))),l){case o.ROCK:return x(g==="+"?s+a:s-a);case o.PAPER:return v(g==="+"?i+a:i-a);case o.SCISSORS:return C(g==="+"?b+a:b-a);default:return}},K=()=>{try{L()}catch{t("Some Error has come, please try again!"),$(!1)}};return e.jsx("div",{className:"flex h-screen",children:e.jsxs("div",{className:"m-auto",children:[e.jsx("header",{className:"bg-black absolute inset-x-0 top-0 z-50",children:e.jsxs("div",{className:"w-full md:w-1/2 lg:w-1/2 text-white mx-auto flex items-center justify-between p-3 lg:px-8","aria-label":"Global",children:[e.jsxs("div",{children:["Balance: ",h]}),e.jsxs("div",{children:["Bet: ",c]}),e.jsxs("div",{children:["Win: ",M.points]})]})}),e.jsxs("div",{children:[r&&e.jsx(U,{message:r,type:"error",callBack:()=>t("")}),e.jsx(D,{}),e.jsxs("div",{className:"flex md:flex-row lg:flex-row flex-col items-center justify-around p-5 md:p-7 lg:p-10",children:[e.jsx(w,{pickingBet:l=>f(o.ROCK,l),betPoints:s,betOptionName:o.ROCK,textColor:u.ROCK,bgColor:p.ROCK,borderColor:j.ROCK}),e.jsx(w,{pickingBet:l=>f(o.PAPER,l),betPoints:i,betOptionName:o.PAPER,textColor:u.PAPER,bgColor:p.PAPER,borderColor:j.PAPER}),e.jsx(w,{pickingBet:l=>f(o.SCISSORS,l),betPoints:b,betOptionName:o.SCISSORS,textColor:u.SCISSORS,bgColor:p.SCISSORS,borderColor:j.SCISSORS})]}),e.jsxs("div",{className:"flex flex items-center justify-center",children:[e.jsx("button",{onClick:K,className:"border-solid border-2 border-slate-200 rounded-full bg-slate-950 text-slate-500 px-10 py-4 enabled:hover:bg-slate-700 disabled:opacity-25",disabled:!d||S===m.END||R,children:R?e.jsx(z,{}):e.jsx("span",{children:"PLAY"})}),S===m.END&&e.jsx("button",{onClick:_,className:"border-solid border-2 border-slate-200 rounded-full bg-slate-950 text-slate-500 px-10 py-4 ml-3 enabled:hover:bg-slate-700 disabled:opacity-25",name:"btn-clear",children:"CLEAR"})]})]})]})})};export{G as default};
