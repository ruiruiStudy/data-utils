import{aF as x,aH as v,aM as c,az as p,q as _,z as e,bs as a,y as d,r as C,a_ as y,p as k,bC as h}from"./index-5cbf8bab.js";const N={class:"app-container"},g={key:0},B={__name:"Random",setup(U){const l=x({min:0,max:100,numbers:20,precision:2}),u=v([]),f=()=>{const{min:t,max:o,numbers:r,precision:n}=l,s=[];for(let i=0;i<r;i++)s.push(Number((Math.random()*(o-t+1)+t).toFixed(n)));u.value=s},b=()=>{u.value=[]};function V(){const t=document.createElement("textarea");document.body.appendChild(t),t.value=u.value,t.select(),document.execCommand("copy"),t.remove(),h({message:"复制成功",type:"success",showClose:!0})}return(t,o)=>{const r=c("el-input-number"),n=c("el-form-item"),s=c("el-button"),i=c("el-form");return p(),_("div",N,[e(i,{model:l,"label-width":"120px"},{default:a(()=>[e(n,{label:"最小值"},{default:a(()=>[e(r,{modelValue:l.min,"onUpdate:modelValue":o[0]||(o[0]=m=>l.min=m),placeholder:"最小值"},null,8,["modelValue"])]),_:1}),e(n,{label:"最大值"},{default:a(()=>[e(r,{modelValue:l.max,"onUpdate:modelValue":o[1]||(o[1]=m=>l.max=m),placeholder:"最大值"},null,8,["modelValue"])]),_:1}),e(n,{label:"生成个数"},{default:a(()=>[e(r,{modelValue:l.numbers,"onUpdate:modelValue":o[2]||(o[2]=m=>l.numbers=m),placeholder:"生成个数"},null,8,["modelValue"])]),_:1}),e(n,{label:"精确度"},{default:a(()=>[e(r,{modelValue:l.precision,"onUpdate:modelValue":o[3]||(o[3]=m=>l.precision=m),placeholder:"精确度"},null,8,["modelValue"]),d("位小数 ")]),_:1}),e(n,null,{default:a(()=>[e(s,{type:"primary",onClick:f},{default:a(()=>[d("开始生成")]),_:1}),e(s,{onClick:b},{default:a(()=>[d("清除结果")]),_:1})]),_:1})]),_:1},8,["model"]),u.value.length>0?(p(),_("div",g,[d(" 生成结果： "),e(s,{link:"",type:"primary",onClick:V},{default:a(()=>[d("复制文本")]),_:1}),C("div",null,y(u.value),1)])):k("",!0)])}}};export{B as default};
