import{aF as y,aH as v,aM as d,az as i,q as _,z as e,bs as t,y as c,r as C,a_ as k,p as h,bC as g}from"./index-7a0dfed4.js";const N={class:"app-container"},U={key:0},E={__name:"Random",setup(w){const l=y({min:0,max:100,numbers:20,precision:2}),u=v([]),f=()=>{const{min:a,max:o,numbers:p,precision:s}=l,n=[];for(let r=0;r<p;r++)n.push(Number((Math.random()*(o-a+1)+a).toFixed(s)));u.value=n},b=()=>{u.value=[]};function V(){const a=document.createElement("textarea");document.body.appendChild(a),a.value=u.value,a.select(),document.execCommand("copy"),a.remove(),g({message:"复制成功",type:"success",showClose:!0})}return(a,o)=>{const p=d("el-alert"),s=d("el-input-number"),n=d("el-form-item"),r=d("el-button"),x=d("el-form");return i(),_("div",N,[e(p,{title:"用于mock数据：生成从几到几的随机数，支持配置生成的个数，支持配置生成的精度，结果可复制",type:"success"}),e(x,{model:l,"label-width":"120px",style:{"margin-top":"20px"}},{default:t(()=>[e(n,{label:"最小值"},{default:t(()=>[e(s,{modelValue:l.min,"onUpdate:modelValue":o[0]||(o[0]=m=>l.min=m),placeholder:"最小值"},null,8,["modelValue"])]),_:1}),e(n,{label:"最大值"},{default:t(()=>[e(s,{modelValue:l.max,"onUpdate:modelValue":o[1]||(o[1]=m=>l.max=m),placeholder:"最大值"},null,8,["modelValue"])]),_:1}),e(n,{label:"生成个数"},{default:t(()=>[e(s,{modelValue:l.numbers,"onUpdate:modelValue":o[2]||(o[2]=m=>l.numbers=m),placeholder:"生成个数"},null,8,["modelValue"])]),_:1}),e(n,{label:"精确度"},{default:t(()=>[e(s,{modelValue:l.precision,"onUpdate:modelValue":o[3]||(o[3]=m=>l.precision=m),placeholder:"精确度"},null,8,["modelValue"]),c("位小数 ")]),_:1}),e(n,null,{default:t(()=>[e(r,{type:"primary",onClick:f},{default:t(()=>[c("开始生成")]),_:1}),e(r,{onClick:b},{default:t(()=>[c("清除结果")]),_:1})]),_:1})]),_:1},8,["model"]),u.value.length>0?(i(),_("div",U,[c(" 生成结果： "),e(r,{link:"",type:"primary",onClick:V},{default:t(()=>[c("复制文本")]),_:1}),C("div",null,k(u.value),1)])):h("",!0)])}}};export{E as default};