// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../../../geometry/SpatialReference ../../../../geometry/Point ../../../../geometry/support/webMercatorUtils ../../lib/glMatrix".split(" "),function(z,f,p,x,r,t){function u(a,d){var b=a.spatialReference;b.equals(d)||(b.isWebMercator&&d.wkid===p.WGS84.wkid?r.webMercatorToGeographic(a,!1,a):d.isWebMercator&&b.wkid===p.WGS84.wkid&&r.geographicToWebMercator(a,!1,a))}function v(a){if(Array.isArray(a)){for(var d=0;d<a.length;d++)if(!v(a[d]))return!1;return!0}return null==a||0<=
a}Object.defineProperty(f,"__esModule",{value:!0});var w=t.vec4d,k=t.mat4d,y=[1,1,1];f.computeCentroid=function(a,d){if("extent"===a.type)return a.center;if("polygon"===a.type)return a.centroid;for(var b=0,c=0,e=0,h=a.hasZ,f=0,g=0,l=a.paths;g<l.length;g++){for(var m=l[g],q=0,k=m;q<k.length;q++){var n=k[q],b=b+n[0],c=c+n[1];h&&(e+=n[2])}f+=m.length}a=new x({x:b/f,y:c/f,z:h?e/f:void 0,spatialReference:a.spatialReference});d&&u(a,d);return a};f.convertToSR=u;f.enlargeExtent=function(a,d,b){if(a){d||
(d=w.create());var c=.5*a.width*(b-1);b=.5*a.height*(b-1);a.width<1E-7*a.height?c+=b/20:a.height<1E-7*a.width&&(b+=c/20);w.set4(a.xmin-c,a.ymin-b,a.xmax+c,a.ymax+b,d);return d}return null};f.updateVertexAttributeAuxpos1w=function(a,d){for(var b=0;b<a.geometries.length;++b){var c=a.geometries[b].data.vertexAttributes.auxpos1;c&&c.data[3]!==d&&(c.data[3]=d,a.geometryVertexAttrsUpdated(b))}};f.mixinColorAndOpacity=function(a,d){var b=[1,1,1,1];null!=a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2]);null!==d&&void 0!==
d?b[3]=d:null!=a&&3<a.length&&(b[3]=a[3]);return b};f.overrideColor=function(a,d,b,c,e){e=e.slice();for(var h=0;3>h;++h)a&&null!=a[h]?e[h]=a[h]:b&&null!=b[h]&&(e[h]=b[h]);null!=d?e[3]=d:null!=c&&(e[3]=c);return e};f.computeObjectScale=function(a,d,b,c){void 0===a&&(a=y);void 0===c&&(c=1);var e=Array(3);if(null==d||null==b)e[0]=1,e[1]=1,e[2]=1;else{for(var h=void 0,f=0,g=2;0<=g;g--){var l=a[g],m=void 0,k=null!=l,p=0===g&&!h&&!k,n=b[g];"symbolValue"===l||p?m=0!==n?d[g]/n:1:k&&"proportional"!==l&&isFinite(l)&&
(m=0!==n?l/n:1);null!=m&&(h=e[g]=m,f=Math.max(f,Math.abs(m)))}for(g=2;0<=g;g--)null==e[g]?e[g]=h:0===e[g]&&(e[g]=.001*f)}for(g=2;0<=g;g--)e[g]/=c;return e};f.computeSizeWithResourceSize=function(a,d){var b=d.width,c=d.depth,e=d.height;d=d.isPrimitive?10:1;if(null==b&&null==e&&null==c)return[d*a[0],d*a[1],d*a[2]];for(var b=[b,c,e],f,c=0;3>c;c++)if(e=b[c],null!=e){f=e/a[c];break}for(c=0;3>c;c++)null==b[c]&&(b[c]=a[c]*f);return b};f.validateSymbolLayerSize=function(a){null!=a.isPrimitive&&(a=[a.width,
a.depth,a.height]);return v(a)?null:"Symbol sizes may not be negative values"};f.computeObjectRotation=function(a,d,b,c){void 0===c&&(c=k.identity());a=a||0;d=d||0;b=b||0;0!==a&&k.rotateZ(c,-a/180*Math.PI,c);0!==d&&k.rotateX(c,d/180*Math.PI,c);0!==b&&k.rotateY(c,b/180*Math.PI,c);return c}});