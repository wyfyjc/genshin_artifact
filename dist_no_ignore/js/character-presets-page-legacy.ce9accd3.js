"use strict";(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[726],{67659:function(e,t,a){a.r(t),a.d(t,{default:function(){return $}});var n=a(79509),l=(a(3905),a(28785)),o=(a(9638),a(77049)),c=(a(7739),a(8350)),r=(a(12573),a(75915),a(33948),a(38862),a(74916),a(15306),a(10311)),i=a(48243),s=a(65579),u=a(59e3),d=a(83549),m=a(62641),p=a(98505),f=a(53355),v=a(85081),N=a(90871),k=a(9012);const V={class:"header"},g={class:"fs-12"},y={key:0,class:"buttons flex-row"},C={class:"body"},h={class:"detail-div fs-12"},w=["src"],x={class:"detail-div fs-12"},E=["src"],B={class:"detail-div fs-12"},_=["src"];var b=(0,r.defineComponent)({__name:"PresetItem",props:{item:null,name:{default:"name"},toolbar:{type:Boolean,default:!0},calculateIcon:{type:Boolean,default:!0}},setup(e){const t=e,{t:a,ta:n}=(0,k.QT)(),l=(0,r.computed)((()=>t.item.character.name)),c=(0,r.computed)((()=>m.O[l.value].nameLocale)),i=(0,r.computed)((()=>{const e=m.O[l.value];return e.avatar})),s=((0,r.computed)((()=>{const e=m.O[l.value];return e.chs})),(0,r.computed)((()=>p.G[t.item.weapon.name]))),u=(0,r.computed)((()=>s.value.nameLocale)),d=(0,r.computed)((()=>f.F[t.item.targetFunction.name])),b=(0,r.computed)((()=>d.value.nameLocale));return(l,m)=>{const p=o.mi;return(0,r.openBlock)(),(0,r.createElementBlock)("div",{class:"item br-3",onClick:m[2]||(m[2]=e=>l.$emit("click"))},[(0,r.createElementVNode)("div",V,[(0,r.createElementVNode)("span",g,(0,r.toDisplayString)(t.name),1),e.toolbar?((0,r.openBlock)(),(0,r.createElementBlock)("div",y,[(0,r.createVNode)(p,{icon:(0,r.unref)(N.Z),text:"",size:"small",circle:"",onClick:m[0]||(m[0]=(0,r.withModifiers)((e=>l.$emit("delete")),["stop"])),class:"button",title:(0,r.unref)(a)("misc.del")},null,8,["icon","title"]),(0,r.createVNode)(p,{icon:(0,r.unref)(v.Z),text:"",size:"small",circle:"",onClick:m[1]||(m[1]=(0,r.withModifiers)((e=>l.$emit("download")),["stop"])),class:"button",title:(0,r.unref)(a)("misc.export")},null,8,["icon","title"])])):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("div",C,[(0,r.createElementVNode)("div",h,[(0,r.createElementVNode)("img",{src:(0,r.unref)(i),class:"c-avatar br-50p"},null,8,w),(0,r.createElementVNode)("span",null,(0,r.toDisplayString)((0,r.unref)(n)((0,r.unref)(c))),1)]),(0,r.createElementVNode)("div",x,[(0,r.createElementVNode)("img",{src:(0,r.unref)(s).url,class:"w-avatar br-50p"},null,8,E),(0,r.createElementVNode)("span",null,(0,r.toDisplayString)((0,r.unref)(n)((0,r.unref)(u))),1)]),(0,r.createElementVNode)("div",B,[(0,r.createElementVNode)("img",{src:(0,r.unref)(d).badge,class:"tf-avatar br-50p"},null,8,_),(0,r.createElementVNode)("span",null,(0,r.toDisplayString)((0,r.unref)(n)((0,r.unref)(b))),1)])])])}}}),D=a(83744);const S=(0,D.Z)(b,[["__scopeId","data-v-20745768"]]);var O=S,P=a(90726),T=a(64055),Z=a(24988);const z={class:"toolbar"},F={key:0,class:"body"},I={style:{"font-size":"0.9em",color:"#606266"}};var L=(0,r.defineComponent)({__name:"CharacterPresetsPage",setup(e){const{t:t}=(0,k.QT)(),a=(0,T.B)(),m=(0,i.useRouter)(),p=(0,r.ref)(!1),f=(0,r.ref)(null);function N(){p.value=!0}async function V(){if(!f.value)return;const e=await f.value.getReadPromise();let l=null;try{l=JSON.parse(e)}catch(c){l=null}const o=(0,s.mf)(l);if(o){for(let e of l)a.addOrOverwrite(e.name,e.item);p.value=!1}else(0,n.z8)({message:t("presetPage.wrongFormat"),type:"error"})}function g(e){const t=a.presets.value[e],n=[t],l=JSON.stringify(n);(0,u.Qz)(l,"application/json",e)}function y(){const e=JSON.stringify(a.allFlat.value);(0,u.Qz)(e,"application/json",t("misc.preset"))}const C=a.allFlat,h=(0,r.computed)((()=>C.value.length));function w(e){a.deletePreset(e)}function x(e){m.push({name:"calculate",params:{presetName:e}})}return(e,a)=>{const n=o.mi,i=c.d0,s=o.MO,u=l.GT;return(0,r.openBlock)(),(0,r.createElementBlock)("div",null,[(0,r.createVNode)(i,{modelValue:p.value,"onUpdate:modelValue":a[1]||(a[1]=e=>p.value=e),title:(0,r.unref)(t)("misc.import"),width:(0,r.unref)(d.B)?"60%":"90%"},{footer:(0,r.withCtx)((()=>[(0,r.createVNode)(n,{onClick:a[0]||(a[0]=e=>p.value=!1)},{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)((0,r.toDisplayString)((0,r.unref)(t)("misc.cancel")),1)])),_:1}),(0,r.createVNode)(n,{type:"primary",onClick:V},{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)((0,r.toDisplayString)((0,r.unref)(t)("misc.confirm")),1)])),_:1})])),default:(0,r.withCtx)((()=>[(0,r.createVNode)((0,r.unref)(P.Z),{ref_key:"fileImportBlock",ref:f,accept:"application/json,text/plain"},null,512)])),_:1},8,["modelValue","title","width"]),(0,r.createElementVNode)("div",z,[(0,r.createVNode)(s,null,{default:(0,r.withCtx)((()=>[(0,r.createVNode)(n,{icon:(0,r.unref)(v.Z),onClick:y},{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)((0,r.toDisplayString)((0,r.unref)(t)("presetPage.exportAll")),1)])),_:1},8,["icon"]),(0,r.createVNode)(n,{icon:(0,r.unref)(Z.Z),onClick:N},{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)((0,r.toDisplayString)((0,r.unref)(t)("misc.import")),1)])),_:1},8,["icon"])])),_:1})]),(0,r.unref)(h)>0?((0,r.openBlock)(),(0,r.createElementBlock)("div",F,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)((0,r.unref)(C),(e=>((0,r.openBlock)(),(0,r.createBlock)(O,{item:e.item,name:e.name,"calculate-icon":!1,onDelete:t=>w(e.name),onDownload:t=>g(e.name),class:"item",onClick:t=>x(e.name)},null,8,["item","name","onDelete","onDownload","onClick"])))),256))])):((0,r.openBlock)(),(0,r.createBlock)(u,{key:1},{default:(0,r.withCtx)((()=>[(0,r.createElementVNode)("p",I,[(0,r.createTextVNode)((0,r.toDisplayString)((0,r.unref)(t)("presetPage.go")),1),(0,r.createElementVNode)("span",{class:"route-item",onClick:a[2]||(a[2]=t=>e.$router.replace("/calculate"))},(0,r.toDisplayString)((0,r.unref)(t)("misc.calculator")),1),(0,r.createTextVNode)((0,r.toDisplayString)((0,r.unref)(t)("presetPage.toCalc")),1)])])),_:1}))])}}});const Q=(0,D.Z)(L,[["__scopeId","data-v-60ac4552"]]);var $=Q}}]);