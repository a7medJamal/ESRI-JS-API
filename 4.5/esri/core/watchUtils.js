// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/Deferred","dojo/promise/Promise"],function(z,e,x,y){function l(a,b,d,c,e){e=a.watch(b,function(b,e,g,f){c&&!c(b)||d.call(a,b,e,g,f)},e);var h=a.get(b);c&&c(h)&&d.call(a,h,h,b,a);return e}function m(a,b,d,c,e){function h(){k&&(k.remove(),k=null)}var n=!1,k,g=new x(h),f=new y;f.cancel=g.cancel;f.isCanceled=g.isCanceled;f.isFulfilled=g.isFulfilled;f.isRejected=g.isRejected;f.isResolved=g.isResolved;f.then=g.then;f.remove=h;Object.freeze(f);k=l(a,b,function(b,c,e,f){n=
!0;h();d&&d.call(a,b,c,e,f);g.resolve({value:b,oldValue:c,propertyName:e,target:f})},c,e);n&&k.remove();return f}function p(a){return!!a}function q(a){return!a}function r(a){return!0===a}function t(a){return!1===a}function u(a){return void 0!==a}function v(a){return void 0===a}function w(a,b,d,c){(Array.isArray(b)?b:-1<b.indexOf(",")?b.split(","):[b]).forEach(function(b){b=b.trim();var c=a.get(b);d.call(a,c,c,b,a)});return a.watch(b,d,c)}Object.defineProperty(e,"__esModule",{value:!0});e.init=w;e.watch=
function(a,b,d,c){return a.watch(b,d,c)};e.once=function(a,b,d,c){return m(a,b,d,null,c)};e.when=function(a,b,d,c){return l(a,b,d,p,c)};e.whenOnce=function(a,b,d,c){return m(a,b,d,p,c)};e.whenNot=function(a,b,d,c){return l(a,b,d,q,c)};e.whenNotOnce=function(a,b,d,c){return m(a,b,d,q,c)};e.whenTrue=function(a,b,d,c){return l(a,b,d,r,c)};e.whenTrueOnce=function(a,b,d,c){return m(a,b,d,r,c)};e.whenFalse=function(a,b,d,c){return l(a,b,d,t,c)};e.whenFalseOnce=function(a,b,d,c){return m(a,b,d,t,c)};e.whenDefined=
function(a,b,d,c){return l(a,b,d,u,c)};e.whenDefinedOnce=function(a,b,d,c){return m(a,b,d,u,c)};e.whenUndefined=function(a,b,d,c){return l(a,b,d,v,c)};e.whenUndefinedOnce=function(a,b,d,c){return m(a,b,d,v,c)};e.pausable=function(a,b,d,c){var e=!1;return{remove:a.watch(b,function(b,c,k,g){e||d.call(a,b,c,k,g)},c).remove,pause:function(){e=!0},resume:function(){e=!1}}};e.on=function(a,b,d,c,e,h,l){function k(){f&&(h&&h(g,b,a,d),f.remove(),g=f=null)}var g=null,f=null,m=w(a,b,function(h){k();h&&h.on&&
(g=h,f=h.on(d,c),e&&e(g,b,a,d))},l);return{remove:function(){m.remove();k()}}}});