import{r as v,j as h}from"./700-2286912f.js";import{g as W}from"./_commonjsHelpers-59ed3296.js";import{C as O}from"./Chip-000a6ca8.js";var A={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var n={}.hasOwnProperty;function a(){for(var o=[],s=0;s<arguments.length;s++){var r=arguments[s];if(r){var u=typeof r;if(u==="string"||u==="number")o.push(r);else if(Array.isArray(r)){if(r.length){var f=a.apply(null,r);f&&o.push(f)}}else if(u==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){o.push(r.toString());continue}for(var i in r)n.call(r,i)&&r[i]&&o.push(i)}}}return o.join(" ")}t.exports?(a.default=a,t.exports=a):window.classNames=a})()})(A);var j=A.exports;const B=W(j),L=["xxl","xl","lg","md","sm","xs"],z="xs",b=v.createContext({prefixes:{},breakpoints:L,minBreakpoint:z});function E(t,n){const{prefixes:a}=v.useContext(b);return t||a[n]||n}function Q(){const{breakpoints:t}=v.useContext(b);return t}function V(){const{minBreakpoint:t}=v.useContext(b);return t}const H=v.forwardRef(({bsPrefix:t,bg:n="primary",pill:a=!1,text:o,className:s,as:r="span",...u},f)=>{const i=E(t,"badge");return h.jsx(r,{ref:f,...u,className:B(s,i,a&&"rounded-pill",o&&`text-${o}`,n&&`bg-${n}`)})});H.displayName="Badge";const U=H;var Z=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,k=/\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g,P=/[^-+\dA-Z]/g;function Y(t,n,a,o){if(arguments.length===1&&typeof t=="string"&&!/\d/.test(t)&&(n=t,t=void 0),t=t||t===0?t:new Date,t instanceof Date||(t=new Date(t)),isNaN(t))throw TypeError("Invalid date");n=String(w[n]||n||w.default);var s=n.slice(0,4);(s==="UTC:"||s==="GMT:")&&(n=n.slice(4),a=!0,s==="GMT:"&&(o=!0));var r=function(){return a?"getUTC":"get"},u=function(){return t[r()+"Date"]()},f=function(){return t[r()+"Day"]()},i=function(){return t[r()+"Month"]()},d=function(){return t[r()+"FullYear"]()},m=function(){return t[r()+"Hours"]()},l=function(){return t[r()+"Minutes"]()},M=function(){return t[r()+"Seconds"]()},g=function(){return t[r()+"Milliseconds"]()},p=function(){return a?0:t.getTimezoneOffset()},T=function(){return J(t)},_=function(){return $(t)},N={d:function(){return u()},dd:function(){return y(u())},ddd:function(){return c.dayNames[f()]},DDD:function(){return S({y:d(),m:i(),d:u(),_:r(),dayName:c.dayNames[f()],short:!0})},dddd:function(){return c.dayNames[f()+7]},DDDD:function(){return S({y:d(),m:i(),d:u(),_:r(),dayName:c.dayNames[f()+7]})},m:function(){return i()+1},mm:function(){return y(i()+1)},mmm:function(){return c.monthNames[i()]},mmmm:function(){return c.monthNames[i()+12]},yy:function(){return String(d()).slice(2)},yyyy:function(){return y(d(),4)},h:function(){return m()%12||12},hh:function(){return y(m()%12||12)},H:function(){return m()},HH:function(){return y(m())},M:function(){return l()},MM:function(){return y(l())},s:function(){return M()},ss:function(){return y(M())},l:function(){return y(g(),3)},L:function(){return y(Math.floor(g()/10))},t:function(){return m()<12?c.timeNames[0]:c.timeNames[1]},tt:function(){return m()<12?c.timeNames[2]:c.timeNames[3]},T:function(){return m()<12?c.timeNames[4]:c.timeNames[5]},TT:function(){return m()<12?c.timeNames[6]:c.timeNames[7]},Z:function(){return o?"GMT":a?"UTC":R(t)},o:function(){return(p()>0?"-":"+")+y(Math.floor(Math.abs(p())/60)*100+Math.abs(p())%60,4)},p:function(){return(p()>0?"-":"+")+y(Math.floor(Math.abs(p())/60),2)+":"+y(Math.floor(Math.abs(p())%60),2)},S:function(){return["th","st","nd","rd"][u()%10>3?0:(u()%100-u()%10!=10)*u()%10]},W:function(){return T()},WW:function(){return y(T())},N:function(){return _()}};return n.replace(Z,function(e){return e in N?N[e]():e.slice(1,e.length-1)})}var w={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},c={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},y=function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;return String(n).padStart(a,"0")},S=function(n){var a=n.y,o=n.m,s=n.d,r=n._,u=n.dayName,f=n.short,i=f===void 0?!1:f,d=new Date,m=new Date;m.setDate(m[r+"Date"]()-1);var l=new Date;l.setDate(l[r+"Date"]()+1);var M=function(){return d[r+"Date"]()},g=function(){return d[r+"Month"]()},p=function(){return d[r+"FullYear"]()},T=function(){return m[r+"Date"]()},_=function(){return m[r+"Month"]()},N=function(){return m[r+"FullYear"]()},e=function(){return l[r+"Date"]()},C=function(){return l[r+"Month"]()},F=function(){return l[r+"FullYear"]()};return p()===a&&g()===o&&M()===s?i?"Tdy":"Today":N()===a&&_()===o&&T()===s?i?"Ysd":"Yesterday":F()===a&&C()===o&&e()===s?i?"Tmw":"Tomorrow":u},J=function(n){var a=new Date(n.getFullYear(),n.getMonth(),n.getDate());a.setDate(a.getDate()-(a.getDay()+6)%7+3);var o=new Date(a.getFullYear(),0,4);o.setDate(o.getDate()-(o.getDay()+6)%7+3);var s=a.getTimezoneOffset()-o.getTimezoneOffset();a.setHours(a.getHours()-s);var r=(a-o)/(864e5*7);return 1+Math.floor(r)},$=function(n){var a=n.getDay();return a===0&&(a=7),a},R=function(n){return(String(n).match(k)||[""]).pop().replace(P,"").replace(/GMT\+0000/g,"UTC")};const X=t=>{try{return Y(t,"d/mm/yyyy")}catch{return t}},x=t=>t==null?void 0:t.toLowerCase().split(" ").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(" "),tt=t=>t.replace(/([a-z])([A-Z])/g,"$1 $2").split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()).join(" "),et=(t,n=!0)=>{const a=t.reduce((o,s)=>s.price*s.quantity+o,0);return n?G(a):a},G=(t,n="Ariary")=>parseFloat(t).toLocaleString("fr-FR")+" "+n;function rt({namespace:t,status:n,text:a}){let o=h.jsx(h.Fragment,{}),s,r;switch(x(n)){case"Paid":s=r="success";break;case"Cancelled":s="danger",r="error";break;case"Pending":s=r="primary";break;default:s=r="primary";break}return t=="admin"?o=h.jsx(U,{bg:s,children:x(a)}):o=h.jsx(O,{label:x(a),color:r}),h.jsx("div",{children:o})}export{L as D,rt as O,Q as a,V as b,B as c,z as d,x as e,X as f,et as g,tt as h,E as u};