// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../lib/glMatrix ../../util ./PinchNavigationBase ./MomentumNavigationGlobal".split(" "),function(r,n,u,a,t,v,w){Object.defineProperty(n,"__esModule",{value:!0});var m;(function(a){a[a.Horizontal=0]="Horizontal";a[a.Vertical=1]="Vertical"})(m=n.PanMode||(n.PanMode={}));var q=a.vec3d.create(),x=16/180*Math.PI;r=function(n){function p(c,e){var b=n.call(this,c,e)||this;b.view=c;b._rotation={axis:a.vec3d.create(),valueSmooth:new t.ExponentialFalloff(.05)};
b._panning={axis:a.vec3d.create(),plane:{distance:0,normal:a.vec3d.create()},planarCenterScene:a.vec3d.create()};b._scaling={valueSmooth:new t.ExponentialFalloff(.05),centerScreen:a.vec2.create()};b._beginScenePoints={points:[],center:a.vec3d.create()};b._panMode=m.Horizontal;b._navigationSphereRadius=0;b._tmpN=a.vec3d.create();b._tmp2d=a.vec2.create();b._tmpPickPointScreen=a.vec2.create();b._tmpPickPointScene=a.vec3d.create();b._tmpCurrentPoints=[];b._tmpCurrentCenter=a.vec3d.create();b._tmpD=a.vec3d.create();
b._horizonPointScreen=a.vec3d.create();b._horizonPointScene=a.vec3d.create();b._momentumNavigation=new w.MomentumNavigationGlobal(b,e);return b}u(p,n);Object.defineProperty(p.prototype,"momentum",{get:function(){return this._momentumNavigation},enumerable:!0,configurable:!0});p.prototype.onNavigationBegin=function(c){var e=this._tmpPickPointScreen,b=this._tmpPickPointScene,d=this._helper;this._rotation.valueSmooth.reset();this._scaling.valueSmooth.reset();a.vec2.set2(c.data.currentState.center.x,
this.view.height-c.data.currentState.center.y,e);d.picker.pickPointInScreen(e,b)?this._navigationSphereRadius=a.vec3d.length(b):(this._navigationSphereRadius=Math.max(a.vec3d.length(this.beginCamera.center),.9*d.earthUtils.earthRadius),this._helper.spherical.makeRenderCoordSpherePoint(this._navigationSphereRadius,this.beginCamera,e,b));this._panMode=m.Horizontal;3E4>this.view.renderCoordsHelper.getAltitude(this.beginCamera.eye)&&(this._navigationSphereRadius>a.vec3d.length(this.beginCamera.eye)?this._panMode=
m.Vertical:(a.vec3d.normalize(b,this._tmpN),Math.abs(.5*Math.PI-Math.acos(a.vec3d.dot(this.beginCamera.viewForward,this._tmpN)))<x&&(this._panMode=m.Vertical)));if(this._panMode===m.Horizontal)this._computeSpherePoints(c,"startEvent",this._navigationSphereRadius,this.beginCamera,this._beginScenePoints.points),d.spherical.computePointCenter(this._beginScenePoints.points,this._navigationSphereRadius,this._beginScenePoints.center);else{a.vec3d.set(this.beginCamera.viewForward,this._panning.plane.normal);
a.vec3d.normalize(this._panning.plane.normal);a.vec3d.negate(this._panning.plane.normal);var k=a.vec3d.dot(b,this._panning.plane.normal),g=this._horizonPointScreen;a.vec3d.set3(e[0],this.view.height,0,g);var h=this._horizonPointScene,f=a.vec3d.length(this.beginCamera.eye),l=this._navigationSphereRadius;this._helper.spherical.makeRenderCoordSpherePoint(f<l?f-100:l,this.beginCamera,g,h);this.beginCamera.projectPoint(h,g);e[1]=Math.min(e[1],.9*g[1]);d.picker.pickPointInScreen(e,b)&&(k=a.vec3d.dot(b,
this._panning.plane.normal));this._panning.plane.distance=k;a.vec2.set2(c.data.currentState.center.x,this.view.height-c.data.currentState.center.y,this._tmp2d);this._helper.planar.intersectPlaneFromScreenPoint(this._panning.plane,this.beginCamera,this._tmp2d,this._panning.planarCenterScene)}};p.prototype.onNavigationUpdate=function(c,e){var b=this._helper,d=c.data.pointers.length,k=1<d;if(this._panMode===m.Horizontal){var g=this._navigationSphereRadius;if(k){var h=c.data.startState.radius/c.data.currentState.radius,
f=.001875*Math.min(Math.max(c.data.currentState.radius,40),120);this._scaling.valueSmooth.gain=f;this._scaling.valueSmooth.update(h);b.spherical.applyZoom(g,this.view,e,this._scaling.valueSmooth.value);a.vec2.set2(c.data.currentState.center.x,this.view.height-c.data.currentState.center.y,this._scaling.centerScreen);this.momentum.addScaleValue(c.timestamp,this._scaling.valueSmooth.value)}h=this._tmpCurrentPoints;f=this._tmpCurrentCenter;this._computeSpherePoints(c,"currentEvent",g,e,h);b.spherical.computePointCenter(h,
g,f);var h=this._panning.axis,l=b.spherical.rotationFromPoints(g,this._beginScenePoints.center,f,h);b.applyRotation(e,q,h,l);l=this._tmp2d;a.vec2.set2(c.data.currentState.center.x,this.view.height-c.data.currentState.center.y,l);this.momentum.addPanValue(c.timestamp,l,f,h);if(k){k=this._rotation.axis;h=this._tmpCurrentPoints;a.vec3d.normalize(this._beginScenePoints.center,k);this._computeSpherePoints(c,"currentEvent",g,e,h);g=0;if(2===d)g=b.rotationFromPointsAroundAxis(h[0],this._beginScenePoints.points[0],
k);else{for(f=0;f<d;f++)g+=b.rotationFromPointsAroundAxis(h[f],this._beginScenePoints.points[f],k);g/=d}d=this._rotation.valueSmooth.value;g=b.normalizeRotationDelta(g-d);f=.00125*Math.min(Math.max(c.data.currentState.radius,40),120);this._rotation.valueSmooth.gain=f;this._rotation.valueSmooth.update(d+g);d=this._rotation.valueSmooth.value;this.momentum.addRotationValue(c.timestamp,d);b.applyRotation(e,q,k,d)}}else d=this._panning.plane,k&&(h=c.data.startState.radius/c.data.currentState.radius,f=
.001875*Math.min(Math.max(c.data.currentState.radius,40),120),this._scaling.valueSmooth.gain=f,this._scaling.valueSmooth.update(h),this.momentum.addScaleValue(c.timestamp,this._scaling.valueSmooth.value),this.momentum.setVerticalParameters(d,this._panning.planarCenterScene),b.planar.applyZoom(d,this.view,e,this._panning.planarCenterScene,this._scaling.valueSmooth.value)),f=this._tmpCurrentCenter,a.vec2.set2(c.data.currentState.center.x,this.view.height-c.data.currentState.center.y,this._tmp2d),this._helper.planar.intersectPlaneFromScreenPoint(d,
e,this._tmp2d,f),d=this._tmpD,a.vec3d.subtract(f,this._panning.planarCenterScene,d),a.vec3d.subtract(e.eye,d),a.vec3d.subtract(e.center,d),e.markViewDirty(),l=this._tmp2d,a.vec2.set2(c.data.currentState.center.x,this.view.height-c.data.currentState.center.y,l),this.momentum.addPanValue(c.timestamp,l,f,d),k&&(k=this._rotation.axis,a.vec3d.set(this._panning.planarCenterScene,k),g=c.data.currentState.angle,d=this._rotation.valueSmooth.value,g=b.normalizeRotationDelta(g-d),f=.00125*Math.min(Math.max(c.data.currentState.radius,
40),120),this._rotation.valueSmooth.gain=f,this._rotation.valueSmooth.update(d+g),d=this._rotation.valueSmooth.value,this.momentum.addRotationValue(c.timestamp,d),b.applyRotation(e,q,k,d));e.markViewDirty()};p.prototype.onNavigationEnd=function(a){this._panMode===m.Horizontal?this.momentum.setParameters(this._navigationSphereRadius,this._scaling.centerScreen,this._beginScenePoints.center,this._panMode):this.momentum.setParameters(this._navigationSphereRadius,this._scaling.centerScreen,this._panning.planarCenterScene,
this._panMode)};p.prototype._computeSpherePoints=function(c,e,b,d,k){k.length=c.data.pointers.length;for(var g=this._tmp2d,h=0;h<k.length;h++){var f=c.data.pointers[h];g[0]=f[e].x;g[1]=this.view.height-f[e].y;void 0===k[h]&&(k[h]=a.vec3d.create());this._helper.spherical.makeRenderCoordSpherePoint(b,d,g,k[h])}return k};return p}(v.PinchNavigationBase);n.PinchNavigationGlobal=r});