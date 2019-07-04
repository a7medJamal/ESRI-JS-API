// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/promiseUtils ../../../../core/promiseUtils ../../../../core/MapPool ./Utils ./WGLDisplayObject ./TileData ./displayObjectUtils ./enums ./MaterialInfo ./MaterialKeyInfo ./MaterialInfoUtils ./MeshUtils ./WGLDisplayRecord".split(" "),function(O,r,p,G,f,l,H,B,I,g,J,K,C,L,M){function q(a,d,c){d.has(a)||(c=c.rasterizeItem(a),d.set(a,c))}function D(a,d,c){l.isMarkerSymbol(a)||l.isLineSymbol(a)?q(a,d,c):l.isFillSymbol(a)&&(q(a,d,c),a.outline&&"none"!==a.outline.style&&
q(a.outline,d,c))}function N(a,d,c){c.has(a)||c.set(a,new Set);a=c.get(a);c=d.length;for(var e=0;e<c;e++){var f=d.charCodeAt(e);a.add(f)}}Object.defineProperty(r,"__esModule",{value:!0});var t=new Set;r.getTileData=function(a,d,c,e,q,r,u){if(0===d.features.length)return p.resolve(null);var v=[],w={};a=null!=e.heatmapInfo;var y=d.features.length,k;t.clear();if(a){w.icon=l.getStrides(g.WGLGeometryType.MARKER,null!==e.vvFields,!0);var b=K.pool.acquire();b.geometryType=g.WGLGeometryType.MARKER;b.sdf=
!1;b.pattern=!1;b.heatmap=!0;b.visibility=!1;e.vvFields?(b.vvOpacity=null!=e.vvFields.opacity,b.vvSizeMinMaxValue=null!=e.vvFields.size,b.vvColor=null!=e.vvFields.color,b.vvRotation=null!=e.vvFields.rotation):b.vvOpacity=b.vvSizeMinMaxValue=b.vvColor=b.vvRotation=!1;var z=J.pool.acquire();z.materialKey=C.getMaterialKey(b);z.materialKeyInfo=b;for(a=0;a<y;a++){k=d.features[a];var h=k.attributes[c];if(!t.has(h)){var E=H.pool.acquire(h),A=L.createMesh(h,e,b,null,g.WGLGeometryType.MARKER,q,r,k,null),A=
M.pool.acquire(h,g.WGLGeometryType.MARKER,A,z,0,0);t.add(h);E.displayRecords.push(A);v.push(E)}}return p.resolve(B.create(v,w))}var m=f.acquire(),x=f.acquire(),n;e.renderer.backgroundFillSymbol&&D(e.renderer.backgroundFillSymbol,m,u);for(a=0;a<y;a++)k=d.features[a],(b=e.getSymbol(k))&&(l.isTextSymbol(b)?N(b,b.text,x):D(b,m,u));0<x.size&&x.forEach(function(a,b){var c=[];a.forEach(function(a){return c.push(a)});a=u.rasterizeItem(b,c);m.set(b,a)});if(0===m.size)return p.resolve(null);var F=[];m.forEach(function(a){return F.push(a)});
return G.all(F).then(function(a){var b=f.acquire(),l=0,h;m.forEach(function(c,d){h=a[l++];if(h.glyphMosaicItems){n||(n=f.acquire());var g=f.acquire();h.glyphMosaicItems.forEach(function(a,b){var c=C.createTextMaterialInfo(e,a);g.set(b,{mosaicItem:a,materialInfo:c})});n.set(d,g)}else b.set(d,h)});for(var g=0;g<y;g++){k=d.features[g];var p=k.attributes[c];if(!t.has(p)){var u=I.getDisplayObject(k,c,e,d.geometryType,q,r,b,n,w);v.push(u);t.add(p)}}n&&(n.forEach(function(a){f.release(a)}),f.release(n));
f.release(b);f.release(x);f.release(m);return B.create(v,w)})}});