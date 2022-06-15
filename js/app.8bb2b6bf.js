(function(){"use strict";var t={4505:function(t,e,i){var s=i(9242),r=i(3396);const n={class:"app-container"},a={key:0,class:"buttons"},o=(0,r.Uk)(" Previous "),l=(0,r.Uk)(" Next "),c={key:1,class:"buttons"},d=(0,r.Uk)(" Reset "),p=(0,r.Uk)(" Send ");function u(t,e,i,s,u,h){const v=(0,r.up)("ProgressBar"),m=(0,r.up)("StepCount"),f=(0,r.up)("Backdrop"),y=(0,r.up)("Form"),k=(0,r.up)("Button");return(0,r.wg)(),(0,r.iD)("div",n,[(0,r.Wm)(v),(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(m)])),_:1}),(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(y)])),_:1}),t.$store.state.activeStep<=2?((0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(k,{variant:"previous",onHandleClick:e[0]||(e[0]=t=>h.handleButtonClick("previous"))},{default:(0,r.w5)((()=>[o])),_:1}),(0,r.Wm)(k,{variant:"next",onHandleClick:e[1]||(e[1]=t=>h.handleButtonClick("next"))},{default:(0,r.w5)((()=>[l])),_:1})])):(0,r.kq)("",!0),3===t.$store.state.activeStep?((0,r.wg)(),(0,r.iD)("div",c,[(0,r.Wm)(k,{variant:"reset",onHandleClick:e[2]||(e[2]=t=>h.handleButtonClick("reset"))},{default:(0,r.w5)((()=>[d])),_:1}),(0,r.Wm)(k,{variant:"previous",onHandleClick:e[3]||(e[3]=t=>h.handleButtonClick("send"))},{default:(0,r.w5)((()=>[p])),_:1})])):(0,r.kq)("",!0)])}const h={class:"backdrop-container"};function v(t,e,i,s,n,a){return(0,r.wg)(),(0,r.iD)("div",h,[(0,r.WI)(t.$slots,"default",{},void 0,!0)])}var m={name:"Backdrop"},f=i(89);const y=(0,f.Z)(m,[["render",v],["__scopeId","data-v-97dd265c"]]);var k=y,g=i(7139);const S={class:"progress-bar"};function _(t,e,i,s,n,a){return(0,r.wg)(),(0,r.iD)("div",S,[(0,r._)("div",{class:"progress-bar__progress",style:(0,g.j5)({width:a.progress+"%"})},null,4)])}var w={name:"ProgressBar",computed:{progress(){return this.$store.state.activeStep/3*100}}};const b=(0,f.Z)(w,[["render",_],["__scopeId","data-v-30cd8b8f"]]);var C=b;const $={class:"step-count"},V={class:"count"},I={class:"content"};function F(t,e,i,s,n,a){return(0,r.wg)(),(0,r.iD)("div",$,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.steps,((t,e)=>((0,r.wg)(),(0,r.iD)("div",{key:e,class:(0,g.C_)(["step-count__item",{active:e+1===a.activeStep,completed:e+1<a.activeStep}])},[(0,r._)("div",V,(0,g.zw)(e+1),1),(0,r._)("div",I,(0,g.zw)(t),1)],2)))),128))])}var D={name:"StepCount",data(){return{steps:["About You","About your Company","Finishing Up"]}},computed:{activeStep(){return this.$store.state.activeStep}}};const W=(0,f.Z)(D,[["render",F],["__scopeId","data-v-7a298dcc"]]);var x=W;const E={class:"form-container"},A={class:"form-group"},B={key:0},O={key:1},Z={key:2};function z(t,e,i,s,n,a){const o=(0,r.up)("FormInput"),l=(0,r.up)("FormSelect"),c=(0,r.up)("FormCheck");return(0,r.wg)(),(0,r.iD)("div",E,[(0,r._)("div",A,[1===this.$store.state.activeStep?((0,r.wg)(),(0,r.iD)("div",B,[(0,r.Wm)(o,{title:"Full Name",id:"name",type:"text"}),(0,r.Wm)(o,{title:"Your Email",id:"email",type:"email"})])):(0,r.kq)("",!0),2===this.$store.state.activeStep?((0,r.wg)(),(0,r.iD)("div",O,[(0,r.Wm)(o,{title:"Your Company Name",id:"company",type:"text"}),(0,r.Wm)(o,{title:"Number of Employees",id:"employees",type:"number"})])):(0,r.kq)("",!0),3===this.$store.state.activeStep?((0,r.wg)(),(0,r.iD)("div",Z,[(0,r.Wm)(l,{title:"From Where did you hear about us",options:n.options},null,8,["options"]),(0,r.Wm)(c,{title:"I accept terms & conditions",id:"acceptTerms"})])):(0,r.kq)("",!0)])])}const q={class:"form-input"},T=["for"],j=["type","id"],U={key:0,class:"error-message"};function H(t,e,i,n,a,o){return(0,r.wg)(),(0,r.iD)("div",q,[(0,r._)("label",{for:i.id},[(0,r.Uk)((0,g.zw)(i.title)+" ",1),(0,r.wy)((0,r._)("input",{type:i.type,id:i.id,class:(0,g.C_)({error:a.isError}),"onUpdate:modelValue":e[0]||(e[0]=t=>o.inputValue=t),onInput:e[1]||(e[1]=(...t)=>o.handleInputChange&&o.handleInputChange(...t)),onFocus:e[2]||(e[2]=(...t)=>o.handleInputChange&&o.handleInputChange(...t))},null,42,j),[[s.YZ,o.inputValue]]),a.isError?((0,r.wg)(),(0,r.iD)("p",U,(0,g.zw)(`This field must be ${i.type}!`),1)):(0,r.kq)("",!0)],8,T)])}var P={name:"FormInput",data(){return{isError:!1}},computed:{inputValue:{get(){return this.$store.state.inputs[this.id]},set(t){this.$store.dispatch("setInputState",{type:this.id,newValue:t})}}},props:{title:String,type:String,id:String},methods:{handleInputChange(t){const{value:e}=t.target;let i;switch(this.type){case"text":i=/^(?!\s*$).+/;break;case"email":i=/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;break;case"number":i=/^[0-9]*$/;break;default:break}const s=i.test(e)&&e.length>0;this.isError=!s,this.$store.dispatch("setValidityState",{type:this.id,validity:s})}}};const Y=(0,f.Z)(P,[["render",H],["__scopeId","data-v-b56fd5ea"]]);var K=Y;const N={class:"select"},M={class:"select__title"},R=["onClick"],G={key:0,class:"error-message"};function J(t,e,i,s,n,a){return(0,r.wg)(),(0,r.iD)("div",N,[(0,r._)("p",M,(0,g.zw)(i.title),1),(0,r._)("div",{class:(0,g.C_)(["select__field",{error:n.isError}])},[(0,r._)("span",{class:"select__field__content",onClick:e[0]||(e[0]=(...t)=>a.handleSelectClick&&a.handleSelectClick(...t)),onKeypress:e[1]||(e[1]=(...e)=>t.foo&&t.foo(...e))},(0,g.zw)(a.selected?a.selected:"-- Choose answer --"),33)],2),(0,r._)("div",{class:(0,g.C_)(["select__items",{expanded:n.expanded}])},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.options,(i=>((0,r.wg)(),(0,r.iD)("div",{class:"select__items__item",key:i,onClick:t=>a.handleOptionClick(i),onKeypress:e[2]||(e[2]=(...e)=>t.foo&&t.foo(...e))},(0,g.zw)(i),41,R)))),128))],2),n.isError?((0,r.wg)(),(0,r.iD)("p",G,"This field is required!")):(0,r.kq)("",!0)])}var L={name:"FormSelect",data(){return{isError:!1,expanded:!1}},computed:{selected(){return this.$store.state.inputs.referee}},props:{title:String,id:String,options:Array},methods:{handleSelectClick(){this.expanded=!this.expanded,this.handleValidation()},handleOptionClick(t){this.$store.dispatch("setValidityState",{type:"referee",validity:!0}),this.$store.dispatch("setInputState",{type:"referee",newValue:t}),this.expanded=!1,this.handleValidation()},handleValidation(){this.isError=null===this.selected||""===this.selected}}};const Q=(0,f.Z)(L,[["render",J],["__scopeId","data-v-7c1da2b6"]]);var X=Q;const tt={class:"form-check"},et={for:"check"},it=["id"],st={key:0,class:"error-message"};function rt(t,e,i,n,a,o){return(0,r.wg)(),(0,r.iD)("div",tt,[(0,r._)("label",et,[(0,r.wy)((0,r._)("input",{type:"checkbox",id:i.id,"onUpdate:modelValue":e[0]||(e[0]=t=>o.checked=t),onInput:e[1]||(e[1]=(...t)=>o.handleInputValidation&&o.handleInputValidation(...t))},null,40,it),[[s.e8,o.checked]]),(0,r.Uk)(" "+(0,g.zw)(i.title),1)]),a.isError?((0,r.wg)(),(0,r.iD)("p",st,"This field is required!")):(0,r.kq)("",!0)])}var nt={name:"FormCheck",data(){return{isError:Boolean}},props:{id:String,title:String},computed:{checked:{get(){return this.$store.state.inputs[this.id]},set(){this.$store.dispatch("setInputState",{type:this.id,newValue:!this.checked})}}},methods:{handleInputValidation(){this.isError=this.checked,this.$store.dispatch("setValidityState",{type:this.id,validity:!this.isError})}}};const at=(0,f.Z)(nt,[["render",rt]]);var ot=at,lt={name:"Form",data(){return{options:["Friend","Facebook","Website"]}},components:{FormInput:K,FormSelect:X,FormCheck:ot}};const ct=(0,f.Z)(lt,[["render",z]]);var dt=ct;function pt(t,e,i,s,n,a){return(0,r.wg)(),(0,r.iD)("button",{class:(0,g.C_)(["button",`button__${i.variant}`]),onClick:e[0]||(e[0]=e=>t.$emit("handle-click"))},[(0,r.WI)(t.$slots,"default",{},void 0,!0)],2)}var ut={name:"Button",props:{variant:{type:String,default:"reset"}}};const ht=(0,f.Z)(ut,[["render",pt],["__scopeId","data-v-7e6499d9"]]);var vt=ht,mt={name:"App",components:{Backdrop:k,ProgressBar:C,StepCount:x,Form:dt,Button:vt},computed:{currentStepValid(){return this.$store.getters.getStepValidation(this.$store.state.activeStep)},allStepsValidated(){return this.$store.getters.getAllStepValidation}},methods:{handleButtonClick(t){if("reset"===t)return this.$store.dispatch("resetForm"),void this.$store.dispatch("setActiveStep",1);if("send"===t&&this.allStepsValidated)this.$store.dispatch("sendForm");else if(this.currentStepValid)switch(t){case"next":this.$store.dispatch("setActiveStep",this.$store.state.activeStep+1);break;case"previous":this.$store.dispatch("setActiveStep",this.$store.state.activeStep+-1);break;default:break}else"previous"===t&&this.$store.dispatch("setActiveStep",this.$store.state.activeStep+-1)}}};const ft=(0,f.Z)(mt,[["render",u],["__scopeId","data-v-23bc0e9e"]]);var yt=ft,kt=i(65);const gt={name:null,email:null,company:null,employees:null,referee:null,acceptTerms:!1},St=t=>{const e={};return Object.keys(t).forEach((t=>{e[t]=!1})),e};var _t=(0,kt.MT)({state:{inputs:{...gt},validity:St(gt),activeStep:1},mutations:{setInputState(t,{type:e,newValue:i}){t.inputs[e]=i},setValidityState(t,{type:e,validity:i}){t.validity[e]=i},setActiveStep(t,e){t.activeStep=e}},actions:{setInputState({commit:t},{type:e,newValue:i}){t("setInputState",{type:e,newValue:i})},setValidityState({commit:t},{type:e,validity:i}){t("setValidityState",{type:e,validity:i})},setActiveStep({commit:t},e){e<=3&&e>=1&&t("setActiveStep",e)},resetForm({commit:t}){Object.entries(gt).forEach((([e,i])=>{t("setInputState",{type:e,newValue:i}),t("setValidityState",{type:e,validity:!1})}))},sendForm({state:t}){console.log({...t.inputs})}},getters:{getStepValidation:t=>e=>{switch(e){case 1:return t.validity.name&&t.validity.email;case 2:return t.validity.company&&t.validity.employees;case 3:return t.validity.referee&&t.validity.acceptTerms;default:break}return!1},getAllStepValidation:t=>t.validity.name&&t.validity.email&&t.validity.company&&t.validity.employees&&t.validity.referee&&t.validity.acceptTerms},modules:{}});(0,s.ri)(yt).use(_t).mount("#app")}},e={};function i(s){var r=e[s];if(void 0!==r)return r.exports;var n=e[s]={exports:{}};return t[s](n,n.exports,i),n.exports}i.m=t,function(){var t=[];i.O=function(e,s,r,n){if(!s){var a=1/0;for(d=0;d<t.length;d++){s=t[d][0],r=t[d][1],n=t[d][2];for(var o=!0,l=0;l<s.length;l++)(!1&n||a>=n)&&Object.keys(i.O).every((function(t){return i.O[t](s[l])}))?s.splice(l--,1):(o=!1,n<a&&(a=n));if(o){t.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[s,r,n]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,n,a=s[0],o=s[1],l=s[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(r in o)i.o(o,r)&&(i.m[r]=o[r]);if(l)var d=l(i)}for(e&&e(s);c<a.length;c++)n=a[c],i.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return i.O(d)},s=self["webpackChunkstep_form"]=self["webpackChunkstep_form"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(4505)}));s=i.O(s)})();
//# sourceMappingURL=app.8bb2b6bf.js.map