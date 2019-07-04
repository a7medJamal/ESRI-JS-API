// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["require","exports","./utils"],function(q,g,e){function k(a,b,d){b=e.splitPath(b);if(Array.isArray(b)){for(var f=[],c=0;c<b.length;c++)f.push((new h(b[c],d)).install(a));return new l(f)}a=(new h(b,d)).install(a);return new m(a)}Object.defineProperty(g,"__esModule",{value:!0});var h=function(){function a(b,a){this.path=b;this.callback=a;this.chain=null;this.path=b;-1<b.indexOf(".")&&(this.chain=e.pathToArray(b));this.callback=a;return this}a.prototype.install=function(b){b=this.chain?new n(this,
b):new p(this,b);return b};a.prototype.notify=function(b){this.callback(b,this.path)};return a}(),p=function(){function a(b,a){this.binding=b;this.target=a;e.getProperties(a).addCursor(this.binding.path,this)}a.prototype.destroy=function(){this.target&&(e.getProperties(this.target).removeCursor(this.binding.path,this),this.target=this.binding=null)};a.prototype.propertyDestroyed=function(b,a){e.getProperties(this.target).removeCursor(a,this)};a.prototype.propertyInvalidated=function(b,a){this.binding&&
this.binding.notify(this.target)};a.prototype.propertyCommitted=function(b,a){this.binding&&this.binding.notify(this.target)};return a}(),n=function(){function a(b,a){this.binding=b;this.target=a;this.stack=[];this.properties=e.getProperties(a);this.stack.push({properties:this.properties,propertyName:b.chain[0]});this.properties.addCursor(b.chain[0],this);this.moveForward();return this}a.prototype.destroy=function(){for(;;){var b=this.stack.pop();if(null==b)break;b.properties.removeCursor(b.propertyName,
this)}this.target=this.binding=null};a.prototype.propertyDestroyed=function(b,a){this.moveBackward(b,a)};a.prototype.propertyInvalidated=function(b,a){this.binding&&this.binding.notify(this.target)};a.prototype.propertyCommitted=function(b,a){this.binding&&(this.moveBackward(b,a),this.moveForward(),this.binding.notify(this.target))};a.prototype.moveBackward=function(b,a){for(var d=this.stack,c=d[d.length-1];c.properties!==b&&c.propertyName!==a;)c.properties.removeCursor(c.propertyName,this),d.pop(),
c=d[d.length-1]};a.prototype.moveForward=function(){var b=this.stack,a=b[b.length-1],a=a.properties.internalGet(a.propertyName);(a=e.getProperties(a))&&b.length<this.binding.chain.length&&(b=this.binding.chain[b.length],this.stack.push({properties:a,propertyName:b}),a.addCursor(b,this),this.moveForward())};return a}(),l=function(){function a(a){this.cursors=a}a.prototype.remove=function(){for(var a=this.cursors;0<a.length;)a.pop().destroy();this.cursors=null};return a}(),m=function(){function a(a){this.cursor=
a}a.prototype.remove=function(){this.cursor.destroy();this.cursor=null};return a}();g.create=function(a,b){a=e.splitPath(a);if(Array.isArray(a)){for(var d=[],f=0;f<a.length;f++)d.push(new h(a[f],b));return function(a){for(var b=[],c=0;c<d.length;c++)b[c]=d[c].install(a);return new l(b)}}var c=new h(a,b);return function(a){return new m(c.install(a))}};g.wire=k;g.default=k});