(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[94],{73344:function(t){function r(t){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}r.keys=function(){return[]},r.resolve=r,r.id=73344,t.exports=r},24019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},90260:function(t,r,n){"use strict";var e,_,o,i=n(24019),a=n(19781),u=n(17854),c=n(60614),f=n(70111),s=n(92597),d=n(70648),g=n(66330),b=n(68880),w=n(98052),l=n(3070).f,y=n(47976),p=n(79518),h=n(27674),v=n(5112),m=n(69711),A=u.Int8Array,T=A&&A.prototype,x=u.Uint8ClampedArray,R=x&&x.prototype,E=A&&p(A),I=T&&p(T),Y=Object.prototype,U=u.TypeError,j=v("toStringTag"),C=m("TYPED_ARRAY_TAG"),F=m("TYPED_ARRAY_CONSTRUCTOR"),O=i&&!!h&&"Opera"!==d(u.opera),S=!1,z={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},k={BigInt64Array:8,BigUint64Array:8},D=function(t){if(!f(t))return!1;var r=d(t);return"DataView"===r||s(z,r)||s(k,r)},P=function(t){if(!f(t))return!1;var r=d(t);return s(z,r)||s(k,r)},V=function(t){if(P(t))return t;throw U("Target is not a typed array")},M=function(t){if(c(t)&&(!h||y(E,t)))return t;throw U(g(t)+" is not a typed array constructor")},N=function(t,r,n,e){if(a){if(n)for(var _ in z){var o=u[_];if(o&&s(o.prototype,t))try{delete o.prototype[t]}catch(i){try{o.prototype[t]=r}catch(c){}}}I[t]&&!n||w(I,t,n?r:O&&T[t]||r,e)}},B=function(t,r,n){var e,_;if(a){if(h){if(n)for(e in z)if(_=u[e],_&&s(_,t))try{delete _[t]}catch(o){}if(E[t]&&!n)return;try{return w(E,t,n?r:O&&E[t]||r)}catch(o){}}for(e in z)_=u[e],!_||_[t]&&!n||w(_,t,r)}};for(e in z)_=u[e],o=_&&_.prototype,o?b(o,F,_):O=!1;for(e in k)_=u[e],o=_&&_.prototype,o&&b(o,F,_);if((!O||!c(E)||E===Function.prototype)&&(E=function(){throw U("Incorrect invocation")},O))for(e in z)u[e]&&h(u[e],E);if((!O||!I||I===Y)&&(I=E.prototype,O))for(e in z)u[e]&&h(u[e].prototype,I);if(O&&p(R)!==I&&h(R,I),a&&!s(I,j))for(e in S=!0,l(I,j,{get:function(){return f(this)?this[C]:void 0}}),z)u[e]&&b(u[e],C,e);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:O,TYPED_ARRAY_CONSTRUCTOR:F,TYPED_ARRAY_TAG:S&&C,aTypedArray:V,aTypedArrayConstructor:M,exportTypedArrayMethod:N,exportTypedArrayStaticMethod:B,isView:D,isTypedArray:P,TypedArray:E,TypedArrayPrototype:I}},9671:function(t,r,n){var e=n(49974),_=n(68361),o=n(47908),i=n(26244),a=function(t){var r=1==t;return function(n,a,u){var c,f,s=o(n),d=_(s),g=e(a,u),b=i(d);while(b-- >0)if(c=d[b],f=g(c,b,s),f)switch(t){case 0:return c;case 1:return b}return r?-1:void 0}};t.exports={findLast:a(0),findLastIndex:a(1)}},84590:function(t,r,n){var e=n(73002),_=RangeError;t.exports=function(t,r){var n=e(t);if(n%r)throw _("Wrong offset");return n}},73002:function(t,r,n){var e=n(19303),_=RangeError;t.exports=function(t){var r=e(t);if(r<0)throw _("The argument can't be less than 0");return r}},35837:function(t,r,n){var e=n(82109),_=n(17854);e({global:!0},{globalThis:_})},48675:function(t,r,n){"use strict";var e=n(90260),_=n(26244),o=n(19303),i=e.aTypedArray,a=e.exportTypedArrayMethod;a("at",(function(t){var r=i(this),n=_(r),e=o(t),a=e>=0?e:n+e;return a<0||a>=n?void 0:r[a]}))},14590:function(t,r,n){"use strict";var e=n(90260),_=n(9671).findLastIndex,o=e.aTypedArray,i=e.exportTypedArrayMethod;i("findLastIndex",(function(t){return _(o(this),t,arguments.length>1?arguments[1]:void 0)}))},63408:function(t,r,n){"use strict";var e=n(90260),_=n(9671).findLast,o=e.aTypedArray,i=e.exportTypedArrayMethod;i("findLast",(function(t){return _(o(this),t,arguments.length>1?arguments[1]:void 0)}))},3462:function(t,r,n){"use strict";var e=n(17854),_=n(46916),o=n(90260),i=n(26244),a=n(84590),u=n(47908),c=n(47293),f=e.RangeError,s=e.Int8Array,d=s&&s.prototype,g=d&&d.set,b=o.aTypedArray,w=o.exportTypedArrayMethod,l=!c((function(){var t=new Uint8ClampedArray(2);return _(g,t,{length:1,0:3},1),3!==t[1]})),y=l&&o.NATIVE_ARRAY_BUFFER_VIEWS&&c((function(){var t=new s(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));w("set",(function(t){b(this);var r=a(arguments.length>1?arguments[1]:void 0,1),n=u(t);if(l)return _(g,this,n,r);var e=this.length,o=i(n),c=0;if(o+r>e)throw f("Wrong length");while(c<o)this[r+c]=n[c++]}),!l||y)},33824:function(t,r,n){"use strict";var e=n(17854),_=n(1702),o=n(47293),i=n(19662),a=n(94362),u=n(90260),c=n(68886),f=n(30256),s=n(7392),d=n(98008),g=u.aTypedArray,b=u.exportTypedArrayMethod,w=e.Uint16Array,l=w&&_(w.prototype.sort),y=!!l&&!(o((function(){l(new w(2),null)}))&&o((function(){l(new w(2),{})}))),p=!!l&&!o((function(){if(s)return s<74;if(c)return c<67;if(f)return!0;if(d)return d<602;var t,r,n=new w(516),e=Array(516);for(t=0;t<516;t++)r=t%4,n[t]=515-t,e[t]=t-2*r+3;for(l(n,(function(t,r){return(t/4|0)-(r/4|0)})),t=0;t<516;t++)if(n[t]!==e[t])return!0})),h=function(t){return function(r,n){return void 0!==t?+t(r,n)||0:n!==n?-1:r!==r?1:0===r&&0===n?1/r>0&&1/n<0?1:-1:r>n}};b("sort",(function(t){return void 0!==t&&i(t),p?l(this,t):a(g(this),h(t))}),!p||y)},1118:function(t,r,n){n(14590)},37380:function(t,r,n){n(63408)},69103:function(t,r,n){"use strict";n.a(t,(async function(t,e){try{n.r(r),n.d(r,{BonusPerStat:function(){return _.uy},CalcArtifactBestSet:function(){return _.yU},CalculatorInterface:function(){return _.Eq},CommonInterface:function(){return _.sw},DSLInterface:function(){return _.H},OptimizeSingleWasm:function(){return _.ZN},PotentialInterface:function(){return _.NY},TeamOptimizationWasm:function(){return _.fn},TransformativeDamage:function(){return _.Tw},__wbg_buffer_397eaa4d72ee94dd:function(){return _.jp},__wbg_call_888d259a5fefc347:function(){return _.BT},__wbg_crypto_9e3521ed42436d35:function(){return _.cF},__wbg_error_09919627ac0992f5:function(){return _.gk},__wbg_getRandomValues_3e46aa268da0fed1:function(){return _.cR},__wbg_globalThis_3f735a5746d41fbd:function(){return _.ud},__wbg_global_1bc0b39582740e95:function(){return _.PT},__wbg_length_1eb8fc608a0d4cdb:function(){return _.A7},__wbg_log_3445347661d4505e:function(){return _.JV},__wbg_modulerequire_0a83c0c31d12d2c7:function(){return _.GX},__wbg_msCrypto_c429c3f8f7a70bb5:function(){return _.vG},__wbg_new_693216e109162396:function(){return _.Ih},__wbg_new_a7ce447f15ff496f:function(){return _.y4},__wbg_newnoargs_be86524d73f67598:function(){return _.wg},__wbg_newwithlength_929232475839a482:function(){return _.b0},__wbg_node_ee3f6da4130bd35f:function(){return _.GS},__wbg_process_f2b73829dbd321da:function(){return _.MF},__wbg_randomFillSync_59fcc2add91fe7b3:function(){return _._8},__wbg_self_c6fbdfc2918d5e58:function(){return _.JX},__wbg_set_969ad0a60e51d320:function(){return _.YQ},__wbg_stack_0ddaca5d1abfb52f:function(){return _.yq},__wbg_subarray_8b658422a224f479:function(){return _.uf},__wbg_versions_cd82f79c98672a9f:function(){return _.Y8},__wbg_window_baec038b5ab35c54:function(){return _.xd},__wbindgen_is_object:function(){return _.Wl},__wbindgen_is_string:function(){return _.eY},__wbindgen_is_undefined:function(){return _.XP},__wbindgen_json_parse:function(){return _.t$},__wbindgen_json_serialize:function(){return _.r1},__wbindgen_memory:function(){return _.oH},__wbindgen_object_clone_ref:function(){return _.m_},__wbindgen_object_drop_ref:function(){return _.ug},__wbindgen_string_new:function(){return _.h4},__wbindgen_throw:function(){return _.Or}});var _=n(82518),o=t([_]);_=(o.then?(await o)():o)[0],e()}catch(i){e(i)}}))},82518:function(t,r,n){"use strict";n.a(t,(async function(e,_){try{n.d(r,{A7:function(){return bt},BT:function(){return _t},Eq:function(){return F},GS:function(){return H},GX:function(){return K},H:function(){return S},Ih:function(){return G},JV:function(){return nt},JX:function(){return it},MF:function(){return X},NY:function(){return k},Or:function(){return yt},PT:function(){return ct},Tw:function(){return P},Wl:function(){return J},XP:function(){return ft},Y8:function(){return L},YQ:function(){return gt},ZN:function(){return z},_8:function(){return tt},b0:function(){return wt},cF:function(){return $},cR:function(){return rt},eY:function(){return Q},fn:function(){return D},gk:function(){return W},h4:function(){return N},jp:function(){return st},m_:function(){return ot},oH:function(){return pt},r1:function(){return V},sw:function(){return O},t$:function(){return M},ud:function(){return ut},uf:function(){return lt},ug:function(){return B},uy:function(){return j},vG:function(){return Z},wg:function(){return et},xd:function(){return at},y4:function(){return dt},yU:function(){return C},yq:function(){return q}});n(48675),n(3462),n(33824),n(37380),n(1118),n(21703),n(38862),n(35837);var o=n(6858);t=n.hmd(t);var i=e([o]);o=(i.then?(await i)():i)[0];const u=new Array(32).fill(void 0);function c(t){return u[t]}u.push(void 0,null,!0,!1);let f=0,s=null;function d(){return null!==s&&s.buffer===o.memory.buffer||(s=new Uint8Array(o.memory.buffer)),s}const g="undefined"===typeof TextEncoder?(0,t.require)("util").TextEncoder:TextEncoder;let b=new g("utf-8");const w="function"===typeof b.encodeInto?function(t,r){return b.encodeInto(t,r)}:function(t,r){const n=b.encode(t);return r.set(n),{read:t.length,written:n.length}};function l(t,r,n){if(void 0===n){const n=b.encode(t),e=r(n.length);return d().subarray(e,e+n.length).set(n),f=n.length,e}let e=t.length,_=r(e);const o=d();let i=0;for(;i<e;i++){const r=t.charCodeAt(i);if(r>127)break;o[_+i]=r}if(i!==e){0!==i&&(t=t.slice(i)),_=n(_,e,e=i+3*t.length);const r=d().subarray(_+i,_+e),o=w(t,r);i+=o.written}return f=i,_}let y=null;function p(){return null!==y&&y.buffer===o.memory.buffer||(y=new Int32Array(o.memory.buffer)),y}const h="undefined"===typeof TextDecoder?(0,t.require)("util").TextDecoder:TextDecoder;let v=new h("utf-8",{ignoreBOM:!0,fatal:!0});function m(t,r){return v.decode(d().subarray(t,t+r))}v.decode();let A=u.length;function T(t){A===u.length&&u.push(u.length+1);const r=A;return A=u[r],u[r]=t,r}function x(t){t<36||(u[t]=A,A=t)}function R(t){const r=c(t);return x(t),r}let E=32;function I(t){if(1==E)throw new Error("out of js stack");return u[--E]=t,E}function Y(t,r){try{return t.apply(this,r)}catch(n){o.__wbindgen_export_3(T(n))}}function U(t,r){return d().subarray(t/1,t/1+r)}class j{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();o.__wbg_bonusperstat_free(t)}static bonus_per_stat(t){try{var r=o.bonusperstat_bonus_per_stat(I(t));return R(r)}finally{u[E++]=void 0}}}class C{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();o.__wbg_calcartifactbestset_free(t)}static calc_artifact_best_set(t){try{var r=o.calcartifactbestset_calc_artifact_best_set(I(t));return R(r)}finally{u[E++]=void 0}}}class F{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();o.__wbg_calculatorinterface_free(t)}static get_damage_analysis(t,r){try{var n=o.calculatorinterface_get_damage_analysis(I(t),I(r));return R(n)}finally{u[E++]=void 0,u[E++]=void 0}}static get_transformative_damage(t){try{var r=o.calculatorinterface_get_transformative_damage(I(t));return P.__wrap(r)}finally{u[E++]=void 0}}}class O{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();o.__wbg_commoninterface_free(t)}static get_attribute(t){try{var r=o.commoninterface_get_attribute(I(t));return R(r)}finally{u[E++]=void 0}}static get_artifacts_rank_by_character(t,r,n,e){try{var _=o.commoninterface_get_artifacts_rank_by_character(I(t),I(r),I(n),I(e));return R(_)}finally{u[E++]=void 0,u[E++]=void 0,u[E++]=void 0,u[E++]=void 0}}}class S{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();o.__wbg_dslinterface_free(t)}static run(t,r,n){try{var e=l(t,o.__wbindgen_export_0,o.__wbindgen_export_1),_=f,i=o.dslinterface_run(e,_,I(r),I(n));return R(i)}finally{u[E++]=void 0,u[E++]=void 0}}}class z{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();o.__wbg_optimizesinglewasm_free(t)}static optimize(t,r){try{var n=o.optimizesinglewasm_optimize(I(t),I(r));return R(n)}finally{u[E++]=void 0,u[E++]=void 0}}}class k{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();o.__wbg_potentialinterface_free(t)}static get_potential(t,r){try{var n=o.potentialinterface_get_potential(I(t),I(r));return R(n)}finally{u[E++]=void 0,u[E++]=void 0}}}class D{__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();o.__wbg_teamoptimizationwasm_free(t)}static optimize_team2(t,r){try{var n=o.teamoptimizationwasm_optimize_team2(I(t),I(r));return R(n)}finally{u[E++]=void 0,u[E++]=void 0}}}class P{static __wrap(t){const r=Object.create(P.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();o.__wbg_transformativedamage_free(t)}get swirl_cryo(){var t=o.__wbg_get_transformativedamage_swirl_cryo(this.ptr);return t}set swirl_cryo(t){o.__wbg_set_transformativedamage_swirl_cryo(this.ptr,t)}get swirl_hydro(){var t=o.__wbg_get_transformativedamage_swirl_hydro(this.ptr);return t}set swirl_hydro(t){o.__wbg_set_transformativedamage_swirl_hydro(this.ptr,t)}get swirl_pyro(){var t=o.__wbg_get_transformativedamage_swirl_pyro(this.ptr);return t}set swirl_pyro(t){o.__wbg_set_transformativedamage_swirl_pyro(this.ptr,t)}get swirl_electro(){var t=o.__wbg_get_transformativedamage_swirl_electro(this.ptr);return t}set swirl_electro(t){o.__wbg_set_transformativedamage_swirl_electro(this.ptr,t)}get overload(){var t=o.__wbg_get_transformativedamage_overload(this.ptr);return t}set overload(t){o.__wbg_set_transformativedamage_overload(this.ptr,t)}get electro_charged(){var t=o.__wbg_get_transformativedamage_electro_charged(this.ptr);return t}set electro_charged(t){o.__wbg_set_transformativedamage_electro_charged(this.ptr,t)}get shatter(){var t=o.__wbg_get_transformativedamage_shatter(this.ptr);return t}set shatter(t){o.__wbg_set_transformativedamage_shatter(this.ptr,t)}get superconduct(){var t=o.__wbg_get_transformativedamage_superconduct(this.ptr);return t}set superconduct(t){o.__wbg_set_transformativedamage_superconduct(this.ptr,t)}get bloom(){var t=o.__wbg_get_transformativedamage_bloom(this.ptr);return t}set bloom(t){o.__wbg_set_transformativedamage_bloom(this.ptr,t)}get hyperbloom(){var t=o.__wbg_get_transformativedamage_hyperbloom(this.ptr);return t}set hyperbloom(t){o.__wbg_set_transformativedamage_hyperbloom(this.ptr,t)}get burgeon(){var t=o.__wbg_get_transformativedamage_burgeon(this.ptr);return t}set burgeon(t){o.__wbg_set_transformativedamage_burgeon(this.ptr,t)}get burning(){var t=o.__wbg_get_transformativedamage_burning(this.ptr);return t}set burning(t){o.__wbg_set_transformativedamage_burning(this.ptr,t)}get crystallize(){var t=o.__wbg_get_transformativedamage_crystallize(this.ptr);return t}set crystallize(t){o.__wbg_set_transformativedamage_crystallize(this.ptr,t)}}function V(t,r){const n=c(r);var e=JSON.stringify(void 0===n?null:n),_=l(e,o.__wbindgen_export_0,o.__wbindgen_export_1),i=f;p()[t/4+1]=i,p()[t/4+0]=_}function M(t,r){var n=JSON.parse(m(t,r));return T(n)}function N(t,r){var n=m(t,r);return T(n)}function B(t){R(t)}function G(){var t=new Error;return T(t)}function q(t,r){var n=c(r).stack,e=l(n,o.__wbindgen_export_0,o.__wbindgen_export_1),_=f;p()[t/4+1]=_,p()[t/4+0]=e}function W(t,r){try{console.error(m(t,r))}finally{o.__wbindgen_export_2(t,r)}}function X(t){var r=c(t).process;return T(r)}function J(t){const r=c(t);var n="object"===typeof r&&null!==r;return n}function L(t){var r=c(t).versions;return T(r)}function H(t){var r=c(t).node;return T(r)}function Q(t){var r="string"===typeof c(t);return r}function $(t){var r=c(t).crypto;return T(r)}function Z(t){var r=c(t).msCrypto;return T(r)}function K(){return Y((function(t,r){var e=n(73344)(m(t,r));return T(e)}),arguments)}function tt(){return Y((function(t,r,n){c(t).randomFillSync(U(r,n))}),arguments)}function rt(){return Y((function(t,r){c(t).getRandomValues(c(r))}),arguments)}function nt(t){console.log(c(t))}function et(t,r){var n=new Function(m(t,r));return T(n)}function _t(){return Y((function(t,r){var n=c(t).call(c(r));return T(n)}),arguments)}function ot(t){var r=c(t);return T(r)}function it(){return Y((function(){var t=self.self;return T(t)}),arguments)}function at(){return Y((function(){var t=window.window;return T(t)}),arguments)}function ut(){return Y((function(){var t=globalThis.globalThis;return T(t)}),arguments)}function ct(){return Y((function(){var t=n.g.global;return T(t)}),arguments)}function ft(t){var r=void 0===c(t);return r}function st(t){var r=c(t).buffer;return T(r)}function dt(t){var r=new Uint8Array(c(t));return T(r)}function gt(t,r,n){c(t).set(c(r),n>>>0)}function bt(t){var r=c(t).length;return r}function wt(t){var r=new Uint8Array(t>>>0);return T(r)}function lt(t,r,n){var e=c(t).subarray(r>>>0,n>>>0);return T(e)}function yt(t,r){throw new Error(m(t,r))}function pt(){var t=o.memory;return T(t)}_()}catch(a){_(a)}}))},6858:function(t,r,n){"use strict";n.a(t,(async function(e,_){try{var o=n(82518),i=e([o]),[o]=i.then?(await i)():i;await n.v(r,t.id,"57fb769db148fc57",{"./mona_wasm_bg.js":{__wbindgen_json_serialize:o.r1,__wbindgen_json_parse:o.t$,__wbindgen_string_new:o.h4,__wbindgen_object_drop_ref:o.ug,__wbg_new_693216e109162396:o.Ih,__wbg_stack_0ddaca5d1abfb52f:o.yq,__wbg_error_09919627ac0992f5:o.gk,__wbg_process_f2b73829dbd321da:o.MF,__wbindgen_is_object:o.Wl,__wbg_versions_cd82f79c98672a9f:o.Y8,__wbg_node_ee3f6da4130bd35f:o.GS,__wbindgen_is_string:o.eY,__wbg_crypto_9e3521ed42436d35:o.cF,__wbg_msCrypto_c429c3f8f7a70bb5:o.vG,__wbg_modulerequire_0a83c0c31d12d2c7:o.GX,__wbg_randomFillSync_59fcc2add91fe7b3:o._8,__wbg_getRandomValues_3e46aa268da0fed1:o.cR,__wbg_log_3445347661d4505e:o.JV,__wbg_newnoargs_be86524d73f67598:o.wg,__wbg_call_888d259a5fefc347:o.BT,__wbindgen_object_clone_ref:o.m_,__wbg_self_c6fbdfc2918d5e58:o.JX,__wbg_window_baec038b5ab35c54:o.xd,__wbg_globalThis_3f735a5746d41fbd:o.ud,__wbg_global_1bc0b39582740e95:o.PT,__wbindgen_is_undefined:o.XP,__wbg_buffer_397eaa4d72ee94dd:o.jp,__wbg_new_a7ce447f15ff496f:o.y4,__wbg_set_969ad0a60e51d320:o.YQ,__wbg_length_1eb8fc608a0d4cdb:o.A7,__wbg_newwithlength_929232475839a482:o.b0,__wbg_subarray_8b658422a224f479:o.uf,__wbindgen_throw:o.Or,__wbindgen_memory:o.oH}}),_()}catch(a){_(a)}}),1)}}]);