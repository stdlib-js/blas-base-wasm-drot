"use strict";var p=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var E=p(function(Q,m){
var L=require("path").resolve,P=require('@stdlib/fs-read-wasm/dist').sync,V=P(L(__dirname,"..","src","main.wasm"));m.exports=V
});var f=p(function(U,R){
var g=require('@stdlib/assert-is-wasm-memory/dist'),M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=require('@stdlib/utils-inherit/dist'),_=require('@stdlib/wasm-module-wrapper/dist'),z=require('@stdlib/error-tools-fmtprodmsg/dist'),D=E();function d(e){if(!(this instanceof d))return new d(e);if(!g(e))throw new TypeError(z('26fH0',e));return _.call(this,D,e,{env:{memory:e}}),this}j(d,_);M(d.prototype,"main",function(r,n,i,a,t,s,u){return this._instance.exports.c_drot(r,n,i,a,t,s,u),a});M(d.prototype,"ndarray",function(r,n,i,a,t,s,u,l,q){return this._instance.exports.c_drot_ndarray(r,n,i,a,t,s,u,l,q),t});R.exports=d
});var A=p(function(Z,W){
var S=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=require('@stdlib/utils-inherit/dist'),b=require('@stdlib/strided-base-stride2offset/dist'),x=require('@stdlib/strided-base-read-dataview/dist').ndarray,C=require('@stdlib/wasm-memory/dist'),F=require('@stdlib/wasm-base-arrays2ptrs/dist'),T=require('@stdlib/wasm-base-strided2object/dist'),h=f();function c(){return this instanceof c?(h.call(this,new C({initial:0})),this):new c}k(c,h);S(c.prototype,"main",function(r,n,i,a,t,s,u){return this.ndarray(r,n,i,b(r,i),a,t,b(r,t),s,u)});S(c.prototype,"ndarray",function(r,n,i,a,t,s,u,l,q){var y,o,v;return y=F(this,[T(r,n,i,a),T(r,t,s,u)]),o=y[0],v=y[1],h.prototype.ndarray.call(this,r,o.ptr,o.stride,o.offset,v.ptr,v.stride,v.offset,l,q),o.copy&&x(r,this.view,o.stride*o.BYTES_PER_ELEMENT,o.ptr,n,i,a,!0),v.copy&&x(r,this.view,v.stride*v.BYTES_PER_ELEMENT,v.ptr,t,s,u,!0),t});W.exports=c
});var O=p(function($,B){
var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),H=A(),I=f(),w=new H;w.initializeSync();G(w,"Module",I.bind(null));B.exports=w
});var J=O();module.exports=J;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
