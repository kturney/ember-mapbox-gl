(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[3],{20:function(t,e,r){t.exports=function(){"use strict"
var t,e,r
function i(i,n){if(t)if(e){var o="var sharedChunk = {}; ("+t+")(sharedChunk); ("+e+")(sharedChunk);",a={}
t(a),(r=n(a)).workerUrl=window.URL.createObjectURL(new Blob([o],{type:"text/javascript"}))}else e=n
else t=n}return i(0,function(t){function e(t,e){return t(e={exports:{}},e.exports),e.exports}var r=i
function i(t,e,r,i){this.cx=3*t,this.bx=3*(r-t)-this.cx,this.ax=1-this.cx-this.bx,this.cy=3*e,this.by=3*(i-e)-this.cy,this.ay=1-this.cy-this.by,this.p1x=t,this.p1y=i,this.p2x=r,this.p2y=i}i.prototype.sampleCurveX=function(t){return((this.ax*t+this.bx)*t+this.cx)*t},i.prototype.sampleCurveY=function(t){return((this.ay*t+this.by)*t+this.cy)*t},i.prototype.sampleCurveDerivativeX=function(t){return(3*this.ax*t+2*this.bx)*t+this.cx},i.prototype.solveCurveX=function(t,e){var r,i,n,o,a
for(void 0===e&&(e=1e-6),n=t,a=0;a<8;a++){if(o=this.sampleCurveX(n)-t,Math.abs(o)<e)return n
var s=this.sampleCurveDerivativeX(n)
if(Math.abs(s)<1e-6)break
n-=o/s}if((n=t)<(r=0))return r
if(n>(i=1))return i
for(;r<i;){if(o=this.sampleCurveX(n),Math.abs(o-t)<e)return n
t>o?r=n:i=n,n=.5*(i-r)+r}return n},i.prototype.solve=function(t,e){return this.sampleCurveY(this.solveCurveX(t,e))}
var n=o
function o(t,e){this.x=t,this.y=e}function a(t,e){if(Array.isArray(t)){if(!Array.isArray(e)||t.length!==e.length)return!1
for(var r=0;r<t.length;r++)if(!a(t[r],e[r]))return!1
return!0}if("object"==typeof t&&null!==t&&null!==e){if("object"!=typeof e)return!1
if(Object.keys(t).length!==Object.keys(e).length)return!1
for(var i in t)if(!a(t[i],e[i]))return!1
return!0}return t===e}function s(t,e,i,n){var o=new r(t,e,i,n)
return function(t){return o.solve(t)}}o.prototype={clone:function(){return new o(this.x,this.y)},add:function(t){return this.clone()._add(t)},sub:function(t){return this.clone()._sub(t)},multByPoint:function(t){return this.clone()._multByPoint(t)},divByPoint:function(t){return this.clone()._divByPoint(t)},mult:function(t){return this.clone()._mult(t)},div:function(t){return this.clone()._div(t)},rotate:function(t){return this.clone()._rotate(t)},rotateAround:function(t,e){return this.clone()._rotateAround(t,e)},matMult:function(t){return this.clone()._matMult(t)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(t){return this.x===t.x&&this.y===t.y},dist:function(t){return Math.sqrt(this.distSqr(t))},distSqr:function(t){var e=t.x-this.x,r=t.y-this.y
return e*e+r*r},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith:function(t){return this.angleWithSep(t.x,t.y)},angleWithSep:function(t,e){return Math.atan2(this.x*e-this.y*t,this.x*t+this.y*e)},_matMult:function(t){var e=t[0]*this.x+t[1]*this.y,r=t[2]*this.x+t[3]*this.y
return this.x=e,this.y=r,this},_add:function(t){return this.x+=t.x,this.y+=t.y,this},_sub:function(t){return this.x-=t.x,this.y-=t.y,this},_mult:function(t){return this.x*=t,this.y*=t,this},_div:function(t){return this.x/=t,this.y/=t,this},_multByPoint:function(t){return this.x*=t.x,this.y*=t.y,this},_divByPoint:function(t){return this.x/=t.x,this.y/=t.y,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var t=this.y
return this.y=this.x,this.x=-t,this},_rotate:function(t){var e=Math.cos(t),r=Math.sin(t),i=e*this.x-r*this.y,n=r*this.x+e*this.y
return this.x=i,this.y=n,this},_rotateAround:function(t,e){var r=Math.cos(t),i=Math.sin(t),n=e.x+r*(this.x-e.x)-i*(this.y-e.y),o=e.y+i*(this.x-e.x)+r*(this.y-e.y)
return this.x=n,this.y=o,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}},o.convert=function(t){return t instanceof o?t:Array.isArray(t)?new o(t[0],t[1]):t}
var l=s(.25,.1,.25,1)
function u(t,e,r){return Math.min(r,Math.max(e,t))}function c(t,e,r){var i=r-e,n=((t-e)%i+i)%i+e
return n===e?r:n}function p(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1]
for(var i=0,n=e;i<n.length;i+=1){var o=n[i]
for(var a in o)t[a]=o[a]}return t}var h=1
function f(){return h++}function d(){return function t(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-[1e3]+-4e3+-8e3+-1e11).replace(/[018]/g,t)}()}function m(t){return!!t&&/^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(t)}function y(t,e){t.forEach(function(t){e[t]&&(e[t]=e[t].bind(e))})}function v(t,e){return-1!==t.indexOf(e,t.length-e.length)}function _(t,e,r){var i={}
for(var n in t)i[n]=e.call(r||this,t[n],n,t)
return i}function g(t,e,r){var i={}
for(var n in t)e.call(r||this,t[n],n,t)&&(i[n]=t[n])
return i}function x(t){return Array.isArray(t)?t.map(x):"object"==typeof t&&t?_(t,x):t}var b={}
function w(t){b[t]||("undefined"!=typeof console&&console.warn(t),b[t]=!0)}function S(t,e,r){return(r.y-t.y)*(e.x-t.x)>(e.y-t.y)*(r.x-t.x)}function E(t){for(var e=0,r=0,i=t.length,n=i-1,o=void 0,a=void 0;r<i;n=r++)o=t[r],e+=((a=t[n]).x-o.x)*(o.y+a.y)
return e}function T(t){var e={}
if(t.replace(/(?:^|(?:\s*\,\s*))([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)(?:\=(?:([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)|(?:\"((?:[^"\\]|\\.)*)\")))?/g,function(t,r,i,n){var o=i||n
return e[r]=!o||o.toLowerCase(),""}),e["max-age"]){var r=parseInt(e["max-age"],10)
isNaN(r)?delete e["max-age"]:e["max-age"]=r}return e}function A(t){try{var e=self[t]
return e.setItem("_mapbox_test_",1),e.removeItem("_mapbox_test_"),!0}catch(t){return!1}}var I,k,z,C,P=self.performance&&self.performance.now?self.performance.now.bind(self.performance):Date.now.bind(Date),M=self.requestAnimationFrame||self.mozRequestAnimationFrame||self.webkitRequestAnimationFrame||self.msRequestAnimationFrame,L=self.cancelAnimationFrame||self.mozCancelAnimationFrame||self.webkitCancelAnimationFrame||self.msCancelAnimationFrame,D={now:P,frame:function(t){var e=M(t)
return{cancel:function(){return L(e)}}},getImageData:function(t,e){void 0===e&&(e=0)
var r=self.document.createElement("canvas"),i=r.getContext("2d")
if(!i)throw new Error("failed to create canvas 2d context")
return r.width=t.width,r.height=t.height,i.drawImage(t,0,0,t.width,t.height),i.getImageData(-e,-e,t.width+2*e,t.height+2*e)},resolveURL:function(t){return I||(I=self.document.createElement("a")),I.href=t,I.href},hardwareConcurrency:self.navigator.hardwareConcurrency||4,get devicePixelRatio(){return self.devicePixelRatio},get prefersReducedMotion(){return!!self.matchMedia&&(null==k&&(k=self.matchMedia("(prefers-reduced-motion: reduce)")),k.matches)}},B={API_URL:"https://api.mapbox.com",get EVENTS_URL(){return this.API_URL?0===this.API_URL.indexOf("https://api.mapbox.cn")?"https://events.mapbox.cn/events/v2":0===this.API_URL.indexOf("https://api.mapbox.com")?"https://events.mapbox.com/events/v2":null:null},FEEDBACK_URL:"https://apps.mapbox.com/feedback",REQUIRE_ACCESS_TOKEN:!0,ACCESS_TOKEN:null,MAX_PARALLEL_IMAGE_REQUESTS:16},R={supported:!1,testSupport:function(t){!F&&C&&(O?U(t):z=t)}},F=!1,O=!1
function U(t){var e=t.createTexture()
t.bindTexture(t.TEXTURE_2D,e)
try{if(t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,C),t.isContextLost())return
R.supported=!0}catch(t){}t.deleteTexture(e),F=!0}self.document&&((C=self.document.createElement("img")).onload=function(){z&&U(z),z=null,O=!0},C.onerror=function(){F=!0,z=null},C.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA=")
var V="01",N=function(t,e){this._transformRequestFn=t,this._customAccessToken=e,this._createSkuToken()}
function j(t){return 0===t.indexOf("mapbox:")}N.prototype._createSkuToken=function(){var t=function(){for(var t="",e=0;e<10;e++)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(62*Math.random())]
return{token:["1",V,t].join(""),tokenExpiresAt:Date.now()+432e5}}()
this._skuToken=t.token,this._skuTokenExpiresAt=t.tokenExpiresAt},N.prototype._isSkuTokenExpired=function(){return Date.now()>this._skuTokenExpiresAt},N.prototype.transformRequest=function(t,e){return this._transformRequestFn&&this._transformRequestFn(t,e)||{url:t}},N.prototype.normalizeStyleURL=function(t,e){if(!j(t))return t
var r=X(t)
return r.path="/styles/v1"+r.path,this._makeAPIURL(r,this._customAccessToken||e)},N.prototype.normalizeGlyphsURL=function(t,e){if(!j(t))return t
var r=X(t)
return r.path="/fonts/v1"+r.path,this._makeAPIURL(r,this._customAccessToken||e)},N.prototype.normalizeSourceURL=function(t,e){if(!j(t))return t
var r=X(t)
return r.path="/v4/"+r.authority+".json",r.params.push("secure"),this._makeAPIURL(r,this._customAccessToken||e)},N.prototype.normalizeSpriteURL=function(t,e,r,i){var n=X(t)
return j(t)?(n.path="/styles/v1"+n.path+"/sprite"+e+r,this._makeAPIURL(n,this._customAccessToken||i)):(n.path+=""+e+r,W(n))},N.prototype.normalizeTileURL=function(t,e,r){if(this._isSkuTokenExpired()&&this._createSkuToken(),!e||!j(e))return t
var i=X(t),n=D.devicePixelRatio>=2||512===r?"@2x":"",o=R.supported?".webp":"$1"
return i.path=i.path.replace(/(\.(png|jpg)\d*)(?=$)/,""+n+o),i.path=i.path.replace(/^.+\/v4\//,"/"),i.path="/v4"+i.path,B.REQUIRE_ACCESS_TOKEN&&(B.ACCESS_TOKEN||this._customAccessToken)&&this._skuToken&&i.params.push("sku="+this._skuToken),this._makeAPIURL(i,this._customAccessToken)},N.prototype.canonicalizeTileURL=function(t){var e=X(t)
if(!e.path.match(/(^\/v4\/)/)||!e.path.match(/\.[\w]+$/))return t
var r="mapbox://tiles/"
r+=e.path.replace("/v4/","")
var i=e.params.filter(function(t){return!t.match(/^access_token=/)})
return i.length&&(r+="?"+i.join("&")),r},N.prototype.canonicalizeTileset=function(t,e){if(!j(e))return t.tiles||[]
for(var r=[],i=0,n=t.tiles;i<n.length;i+=1){var o=n[i],a=this.canonicalizeTileURL(o)
r.push(a)}return r},N.prototype._makeAPIURL=function(t,e){var r="See https://www.mapbox.com/api-documentation/#access-tokens-and-token-scopes",i=X(B.API_URL)
if(t.protocol=i.protocol,t.authority=i.authority,"/"!==i.path&&(t.path=""+i.path+t.path),!B.REQUIRE_ACCESS_TOKEN)return W(t)
if(!(e=e||B.ACCESS_TOKEN))throw new Error("An API access token is required to use Mapbox GL. "+r)
if("s"===e[0])throw new Error("Use a public access token (pk.*) with Mapbox GL, not a secret access token (sk.*). "+r)
return t.params=t.params.filter(function(t){return-1===t.indexOf("access_token")}),t.params.push("access_token="+e),W(t)}
var q=/^((https?:)?\/\/)?([^\/]+\.)?mapbox\.c(n|om)(\/|\?|$)/i
function Z(t){return q.test(t)}var G=/^(\w+):\/\/([^\/?]*)(\/[^?]+)?\??(.+)?/
function X(t){var e=t.match(G)
if(!e)throw new Error("Unable to parse URL object")
return{protocol:e[1],authority:e[2],path:e[3]||"/",params:e[4]?e[4].split("&"):[]}}function W(t){var e=t.params.length?"?"+t.params.join("&"):""
return t.protocol+"://"+t.authority+t.path+e}function K(t){if(!t)return null
var e,r=t.split(".")
if(!r||3!==r.length)return null
try{return JSON.parse((e=r[1],decodeURIComponent(self.atob(e).split("").map(function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)}).join(""))))}catch(t){return null}}var H=function(t){this.type=t,this.anonId=null,this.eventData={},this.queue=[],this.pendingRequest=null}
H.prototype.getStorageKey=function(t){var e,r=K(B.ACCESS_TOKEN),i=""
return r&&r.u?(e=r.u,i=self.btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function(t,e){return String.fromCharCode(Number("0x"+e))}))):i=B.ACCESS_TOKEN||"",t?"mapbox.eventData."+t+":"+i:"mapbox.eventData:"+i},H.prototype.fetchEventData=function(){var t=A("localStorage"),e=this.getStorageKey(),r=this.getStorageKey("uuid")
if(t)try{var i=self.localStorage.getItem(e)
i&&(this.eventData=JSON.parse(i))
var n=self.localStorage.getItem(r)
n&&(this.anonId=n)}catch(t){w("Unable to read from LocalStorage")}},H.prototype.saveEventData=function(){var t=A("localStorage"),e=this.getStorageKey(),r=this.getStorageKey("uuid")
if(t)try{self.localStorage.setItem(r,this.anonId),Object.keys(this.eventData).length>=1&&self.localStorage.setItem(e,JSON.stringify(this.eventData))}catch(t){w("Unable to write to LocalStorage")}},H.prototype.processRequests=function(t){},H.prototype.postEvent=function(t,e,r,i){var n=this
if(B.EVENTS_URL){var o=X(B.EVENTS_URL)
o.params.push("access_token="+(i||B.ACCESS_TOKEN||""))
var a={event:this.type,created:new Date(t).toISOString(),sdkIdentifier:"mapbox-gl-js",sdkVersion:"1.4.0",skuId:V,userId:this.anonId},s=e?p(a,e):a,l={url:W(o),headers:{"Content-Type":"text/plain"},body:JSON.stringify([s])}
this.pendingRequest=yt(l,function(t){n.pendingRequest=null,r(t),n.saveEventData(),n.processRequests(i)})}},H.prototype.queueRequest=function(t,e){this.queue.push(t),this.processRequests(e)}
var J,Y=function(t){function e(){t.call(this,"map.load"),this.success={},this.skuToken=""}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.postMapLoadEvent=function(t,e,r,i){this.skuToken=r,(B.EVENTS_URL&&i||B.ACCESS_TOKEN&&Array.isArray(t)&&t.some(function(t){return j(t)||Z(t)}))&&this.queueRequest({id:e,timestamp:Date.now()},i)},e.prototype.processRequests=function(t){var e=this
if(!this.pendingRequest&&0!==this.queue.length){var r=this.queue.shift(),i=r.id,n=r.timestamp
i&&this.success[i]||(this.anonId||this.fetchEventData(),m(this.anonId)||(this.anonId=d()),this.postEvent(n,{skuToken:this.skuToken},function(t){t||i&&(e.success[i]=!0)},t))}},e}(H),$=new(function(t){function e(e){t.call(this,"appUserTurnstile"),this._customAccessToken=e}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.postTurnstileEvent=function(t,e){B.EVENTS_URL&&B.ACCESS_TOKEN&&Array.isArray(t)&&t.some(function(t){return j(t)||Z(t)})&&this.queueRequest(Date.now(),e)},e.prototype.processRequests=function(t){var e=this
if(!this.pendingRequest&&0!==this.queue.length){this.anonId&&this.eventData.lastSuccess&&this.eventData.tokenU||this.fetchEventData()
var r=K(B.ACCESS_TOKEN),i=r?r.u:B.ACCESS_TOKEN,n=i!==this.eventData.tokenU
m(this.anonId)||(this.anonId=d(),n=!0)
var o=this.queue.shift()
if(this.eventData.lastSuccess){var a=new Date(this.eventData.lastSuccess),s=new Date(o),l=(o-this.eventData.lastSuccess)/864e5
n=n||l>=1||l<-1||a.getDate()!==s.getDate()}else n=!0
if(!n)return this.processRequests()
this.postEvent(o,{"enabled.telemetry":!1},function(t){t||(e.eventData.lastSuccess=o,e.eventData.tokenU=i)},t)}},e}(H)),Q=$.postTurnstileEvent.bind($),tt=new Y,et=tt.postMapLoadEvent.bind(tt),rt="mapbox-tiles",it=500,nt=50,ot=42e4
function at(t){var e=t.indexOf("?")
return e<0?t:t.slice(0,e)}var st=1/0,lt={Unknown:"Unknown",Style:"Style",Source:"Source",Tile:"Tile",Glyphs:"Glyphs",SpriteImage:"SpriteImage",SpriteJSON:"SpriteJSON",Image:"Image"}
"function"==typeof Object.freeze&&Object.freeze(lt)
var ut=function(t){function e(e,r,i){401===r&&Z(i)&&(e+=": you may have provided an invalid Mapbox access token. See https://www.mapbox.com/api-documentation/#access-tokens-and-token-scopes"),t.call(this,e),this.status=r,this.url=i,this.name=this.constructor.name,this.message=e}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return this.name+": "+this.message+" ("+this.status+"): "+this.url},e}(Error)
function ct(){return"undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}var pt=ct()?function(){return self.worker&&self.worker.referrer}:function(){return("blob:"===self.location.protocol?self.parent:self).location.href}
var ht,ft,dt=function(t,e){if(r=t.url,!(/^file:/.test(r)||/^file:/.test(pt())&&!/^\w+:/.test(r))){if(self.fetch&&self.Request&&self.AbortController&&self.Request.prototype.hasOwnProperty("signal"))return function(t,e){var r,i=new self.AbortController,n=new self.Request(t.url,{method:t.method||"GET",body:t.body,credentials:t.credentials,headers:t.headers,referrer:pt(),signal:i.signal}),o=!1,a=!1,s=(r=n.url).indexOf("sku=")>0&&Z(r)
"json"===t.type&&n.headers.set("Accept","application/json")
var l=function(r,i,o){if(!a){if(r&&"SecurityError"!==r.message&&w(r),i&&o)return u(i)
var l=Date.now()
self.fetch(n).then(function(r){if(r.ok){var i=s?r.clone():null
return u(r,i,l)}return e(new ut(r.statusText,r.status,t.url))}).catch(function(t){20!==t.code&&e(new Error(t.message))})}},u=function(r,i,s){("arrayBuffer"===t.type?r.arrayBuffer():"json"===t.type?r.json():r.text()).then(function(t){a||(i&&s&&function(t,e,r){if(self.caches){var i={status:e.status,statusText:e.statusText,headers:new self.Headers}
e.headers.forEach(function(t,e){return i.headers.set(e,t)})
var n=T(e.headers.get("Cache-Control")||"")
n["no-store"]||(n["max-age"]&&i.headers.set("Expires",new Date(r+1e3*n["max-age"]).toUTCString()),new Date(i.headers.get("Expires")).getTime()-r<ot||function(t,e){if(void 0===J)try{new Response(new ReadableStream),J=!0}catch(t){J=!1}J?e(t.body):t.blob().then(e)}(e,function(e){var r=new self.Response(e,i)
self.caches.open(rt).then(function(e){return e.put(at(t.url),r)}).catch(function(t){return w(t.message)})}))}}(n,i,s),o=!0,e(null,t,r.headers.get("Cache-Control"),r.headers.get("Expires")))}).catch(function(t){return e(new Error(t.message))})}
return s?function(t,e){if(!self.caches)return e(null)
var r=at(t.url)
self.caches.open(rt).then(function(t){t.match(r).catch(e).then(function(i){var n=function(t){if(!t)return!1
var e=new Date(t.headers.get("Expires")),r=T(t.headers.get("Cache-Control")||"")
return e>Date.now()&&!r["no-cache"]}(i)
t.delete(r),n&&t.put(r,i.clone()),e(null,i,n)})}).catch(e)}(n,l):l(null,null),{cancel:function(){a=!0,o||i.abort()}}}(t,e)
if(ct()&&self.worker&&self.worker.actor)return self.worker.actor.send("getResource",t,e)}var r
return function(t,e){var r=new self.XMLHttpRequest
for(var i in r.open(t.method||"GET",t.url,!0),"arrayBuffer"===t.type&&(r.responseType="arraybuffer"),t.headers)r.setRequestHeader(i,t.headers[i])
return"json"===t.type&&(r.responseType="text",r.setRequestHeader("Accept","application/json")),r.withCredentials="include"===t.credentials,r.onerror=function(){e(new Error(r.statusText))},r.onload=function(){if((r.status>=200&&r.status<300||0===r.status)&&null!==r.response){var i=r.response
if("json"===t.type)try{i=JSON.parse(r.response)}catch(t){return e(t)}e(null,i,r.getResponseHeader("Cache-Control"),r.getResponseHeader("Expires"))}else e(new ut(r.statusText,r.status,t.url))},r.send(t.body),{cancel:function(){return r.abort()}}}(t,e)},mt=function(t,e){return dt(p(t,{type:"arrayBuffer"}),e)},yt=function(t,e){return dt(p(t,{method:"POST"}),e)}
ht=[],ft=0
var vt=function(t,e){if(ft>=B.MAX_PARALLEL_IMAGE_REQUESTS){var r={requestParameters:t,callback:e,cancelled:!1,cancel:function(){this.cancelled=!0}}
return ht.push(r),r}ft++
var i=!1,n=function(){if(!i)for(i=!0,ft--;ht.length&&ft<B.MAX_PARALLEL_IMAGE_REQUESTS;){var t=ht.shift(),e=t.requestParameters,r=t.callback
t.cancelled||(t.cancel=vt(e,r).cancel)}},o=mt(t,function(t,r,i,o){if(n(),t)e(t)
else if(r){var a=new self.Image,s=self.URL||self.webkitURL
a.onload=function(){e(null,a),s.revokeObjectURL(a.src)},a.onerror=function(){return e(new Error("Could not load image. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported."))}
var l=new self.Blob([new Uint8Array(r)],{type:"image/png"})
a.cacheControl=i,a.expires=o,a.src=r.byteLength?s.createObjectURL(l):"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII="}})
return{cancel:function(){o.cancel(),n()}}}
function _t(t,e,r){r[t]&&-1!==r[t].indexOf(e)||(r[t]=r[t]||[],r[t].push(e))}function gt(t,e,r){if(r&&r[t]){var i=r[t].indexOf(e);-1!==i&&r[t].splice(i,1)}}var xt=function(t,e){void 0===e&&(e={}),p(this,e),this.type=t},bt=function(t){function e(e,r){void 0===r&&(r={}),t.call(this,"error",p({error:e},r))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(xt),wt=function(){}
wt.prototype.on=function(t,e){return this._listeners=this._listeners||{},_t(t,e,this._listeners),this},wt.prototype.off=function(t,e){return gt(t,e,this._listeners),gt(t,e,this._oneTimeListeners),this},wt.prototype.once=function(t,e){return this._oneTimeListeners=this._oneTimeListeners||{},_t(t,e,this._oneTimeListeners),this},wt.prototype.fire=function(t,e){"string"==typeof t&&(t=new xt(t,e||{}))
var r=t.type
if(this.listens(r)){t.target=this
for(var i=0,n=this._listeners&&this._listeners[r]?this._listeners[r].slice():[];i<n.length;i+=1)n[i].call(this,t)
for(var o=0,a=this._oneTimeListeners&&this._oneTimeListeners[r]?this._oneTimeListeners[r].slice():[];o<a.length;o+=1){var s=a[o]
gt(r,s,this._oneTimeListeners),s.call(this,t)}var l=this._eventedParent
l&&(p(t,"function"==typeof this._eventedParentData?this._eventedParentData():this._eventedParentData),l.fire(t))}else t instanceof bt&&console.error(t.error)
return this},wt.prototype.listens=function(t){return this._listeners&&this._listeners[t]&&this._listeners[t].length>0||this._oneTimeListeners&&this._oneTimeListeners[t]&&this._oneTimeListeners[t].length>0||this._eventedParent&&this._eventedParent.listens(t)},wt.prototype.setEventedParent=function(t,e){return this._eventedParent=t,this._eventedParentData=e,this}
var St={$version:8,$root:{version:{required:!0,type:"enum",values:[8]},name:{type:"string"},metadata:{type:"*"},center:{type:"array",value:"number"},zoom:{type:"number"},bearing:{type:"number",default:0,period:360,units:"degrees"},pitch:{type:"number",default:0,units:"degrees"},light:{type:"light"},sources:{required:!0,type:"sources"},sprite:{type:"string"},glyphs:{type:"string"},transition:{type:"transition"},layers:{required:!0,type:"array",value:"layer"}},sources:{"*":{type:"source"}},source:["source_vector","source_raster","source_raster_dem","source_geojson","source_video","source_image"],source_vector:{type:{required:!0,type:"enum",values:{vector:{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},scheme:{type:"enum",values:{xyz:{},tms:{}},default:"xyz"},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},attribution:{type:"string"},"*":{type:"*"}},source_raster:{type:{required:!0,type:"enum",values:{raster:{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},tileSize:{type:"number",default:512,units:"pixels"},scheme:{type:"enum",values:{xyz:{},tms:{}},default:"xyz"},attribution:{type:"string"},"*":{type:"*"}},source_raster_dem:{type:{required:!0,type:"enum",values:{"raster-dem":{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},tileSize:{type:"number",default:512,units:"pixels"},attribution:{type:"string"},encoding:{type:"enum",values:{terrarium:{},mapbox:{}},default:"mapbox"},"*":{type:"*"}},source_geojson:{type:{required:!0,type:"enum",values:{geojson:{}}},data:{type:"*"},maxzoom:{type:"number",default:18},attribution:{type:"string"},buffer:{type:"number",default:128,maximum:512,minimum:0},tolerance:{type:"number",default:.375},cluster:{type:"boolean",default:!1},clusterRadius:{type:"number",default:50,minimum:0},clusterMaxZoom:{type:"number"},clusterProperties:{type:"*"},lineMetrics:{type:"boolean",default:!1},generateId:{type:"boolean",default:!1}},source_video:{type:{required:!0,type:"enum",values:{video:{}}},urls:{required:!0,type:"array",value:"string"},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}}},source_image:{type:{required:!0,type:"enum",values:{image:{}}},url:{required:!0,type:"string"},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}}},layer:{id:{type:"string",required:!0},type:{type:"enum",values:{fill:{},line:{},symbol:{},circle:{},heatmap:{},"fill-extrusion":{},raster:{},hillshade:{},background:{}},required:!0},metadata:{type:"*"},source:{type:"string"},"source-layer":{type:"string"},minzoom:{type:"number",minimum:0,maximum:24},maxzoom:{type:"number",minimum:0,maximum:24},filter:{type:"filter"},layout:{type:"layout"},paint:{type:"paint"}},layout:["layout_fill","layout_line","layout_circle","layout_heatmap","layout_fill-extrusion","layout_symbol","layout_raster","layout_hillshade","layout_background"],layout_background:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_fill:{"fill-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_circle:{"circle-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_heatmap:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},"layout_fill-extrusion":{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_line:{"line-cap":{type:"enum",values:{butt:{},round:{},square:{}},default:"butt",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"line-join":{type:"enum",values:{bevel:{},round:{},miter:{}},default:"miter",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"line-miter-limit":{type:"number",default:2,requires:[{"line-join":"miter"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-round-limit":{type:"number",default:1.05,requires:[{"line-join":"round"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_symbol:{"symbol-placement":{type:"enum",values:{point:{},line:{},"line-center":{}},default:"point",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"symbol-spacing":{type:"number",default:250,minimum:1,units:"pixels",requires:[{"symbol-placement":"line"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"symbol-avoid-edges":{type:"boolean",default:!1,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"symbol-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"symbol-z-order":{type:"enum",values:{auto:{},"viewport-y":{},source:{}},default:"auto",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-allow-overlap":{type:"boolean",default:!1,requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-ignore-placement":{type:"boolean",default:!1,requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-optional":{type:"boolean",default:!1,requires:["icon-image","text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-rotation-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-size":{type:"number",default:1,minimum:0,units:"factor of the original icon size",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-text-fit":{type:"enum",values:{none:{},width:{},height:{},both:{}},default:"none",requires:["icon-image","text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-text-fit-padding":{type:"array",value:"number",length:4,default:[0,0,0,0],units:"pixels",requires:["icon-image","text-field",{"icon-text-fit":["both","width","height"]}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-image":{type:"image",tokens:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-rotate":{type:"number",default:0,period:360,units:"degrees",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-padding":{type:"number",default:2,minimum:0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-keep-upright":{type:"boolean",default:!1,requires:["icon-image",{"icon-rotation-alignment":"map"},{"symbol-placement":["line","line-center"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-offset":{type:"array",value:"number",length:2,default:[0,0],requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-anchor":{type:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},default:"center",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-pitch-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-pitch-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-rotation-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-field":{type:"formatted",default:"",tokens:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-font":{type:"array",value:"string",default:["Open Sans Regular","Arial Unicode MS Regular"],requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-size":{type:"number",default:16,minimum:0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-max-width":{type:"number",default:10,minimum:0,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-line-height":{type:"number",default:1.2,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-letter-spacing":{type:"number",default:0,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-justify":{type:"enum",values:{auto:{},left:{},center:{},right:{}},default:"center",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-radial-offset":{type:"number",units:"ems",default:0,requires:["text-field"],"property-type":"data-driven",expression:{interpolated:!0,parameters:["zoom","feature"]}},"text-variable-anchor":{type:"array",value:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},requires:["text-field",{"symbol-placement":["point"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-anchor":{type:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},default:"center",requires:["text-field",{"!":"text-variable-anchor"}],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-max-angle":{type:"number",default:45,units:"degrees",requires:["text-field",{"symbol-placement":["line","line-center"]}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-writing-mode":{type:"array",value:"enum",values:{horizontal:{},vertical:{}},requires:["text-field",{"symbol-placement":["point"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-rotate":{type:"number",default:0,period:360,units:"degrees",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-padding":{type:"number",default:2,minimum:0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-keep-upright":{type:"boolean",default:!0,requires:["text-field",{"text-rotation-alignment":"map"},{"symbol-placement":["line","line-center"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-transform":{type:"enum",values:{none:{},uppercase:{},lowercase:{}},default:"none",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-offset":{type:"array",value:"number",units:"ems",length:2,default:[0,0],requires:["text-field",{"!":"text-radial-offset"}],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-allow-overlap":{type:"boolean",default:!1,requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-ignore-placement":{type:"boolean",default:!1,requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-optional":{type:"boolean",default:!1,requires:["text-field","icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_raster:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_hillshade:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},filter:{type:"array",value:"*"},filter_operator:{type:"enum",values:{"==":{},"!=":{},">":{},">=":{},"<":{},"<=":{},in:{},"!in":{},all:{},any:{},none:{},has:{},"!has":{}}},geometry_type:{type:"enum",values:{Point:{},LineString:{},Polygon:{}}},function:{expression:{type:"expression"},stops:{type:"array",value:"function_stop"},base:{type:"number",default:1,minimum:0},property:{type:"string",default:"$zoom"},type:{type:"enum",values:{identity:{},exponential:{},interval:{},categorical:{}},default:"exponential"},colorSpace:{type:"enum",values:{rgb:{},lab:{},hcl:{}},default:"rgb"},default:{type:"*",required:!1}},function_stop:{type:"array",minimum:0,maximum:22,value:["number","color"],length:2},expression:{type:"array",value:"*",minimum:1},expression_name:{type:"enum",values:{let:{group:"Variable binding"},var:{group:"Variable binding"},literal:{group:"Types"},array:{group:"Types"},at:{group:"Lookup"},case:{group:"Decision"},match:{group:"Decision"},coalesce:{group:"Decision"},step:{group:"Ramps, scales, curves"},interpolate:{group:"Ramps, scales, curves"},"interpolate-hcl":{group:"Ramps, scales, curves"},"interpolate-lab":{group:"Ramps, scales, curves"},ln2:{group:"Math"},pi:{group:"Math"},e:{group:"Math"},typeof:{group:"Types"},string:{group:"Types"},number:{group:"Types"},boolean:{group:"Types"},object:{group:"Types"},collator:{group:"Types"},format:{group:"Types"},image:{group:"Types"},"number-format":{group:"Types"},"to-string":{group:"Types"},"to-number":{group:"Types"},"to-boolean":{group:"Types"},"to-rgba":{group:"Color"},"to-color":{group:"Types"},rgb:{group:"Color"},rgba:{group:"Color"},get:{group:"Lookup"},has:{group:"Lookup"},length:{group:"Lookup"},properties:{group:"Feature data"},"feature-state":{group:"Feature data"},"geometry-type":{group:"Feature data"},id:{group:"Feature data"},zoom:{group:"Zoom"},"heatmap-density":{group:"Heatmap"},"line-progress":{group:"Feature data"},accumulated:{group:"Feature data"},"+":{group:"Math"},"*":{group:"Math"},"-":{group:"Math"},"/":{group:"Math"},"%":{group:"Math"},"^":{group:"Math"},sqrt:{group:"Math"},log10:{group:"Math"},ln:{group:"Math"},log2:{group:"Math"},sin:{group:"Math"},cos:{group:"Math"},tan:{group:"Math"},asin:{group:"Math"},acos:{group:"Math"},atan:{group:"Math"},min:{group:"Math"},max:{group:"Math"},round:{group:"Math"},abs:{group:"Math"},ceil:{group:"Math"},floor:{group:"Math"},"==":{group:"Decision"},"!=":{group:"Decision"},">":{group:"Decision"},"<":{group:"Decision"},">=":{group:"Decision"},"<=":{group:"Decision"},all:{group:"Decision"},any:{group:"Decision"},"!":{group:"Decision"},"is-supported-script":{group:"String"},upcase:{group:"String"},downcase:{group:"String"},concat:{group:"String"},"resolved-locale":{group:"String"}}},light:{anchor:{type:"enum",default:"viewport",values:{map:{},viewport:{}},"property-type":"data-constant",transition:!1,expression:{interpolated:!1,parameters:["zoom"]}},position:{type:"array",default:[1.15,210,30],length:3,value:"number","property-type":"data-constant",transition:!0,expression:{interpolated:!0,parameters:["zoom"]}},color:{type:"color","property-type":"data-constant",default:"#ffffff",expression:{interpolated:!0,parameters:["zoom"]},transition:!0},intensity:{type:"number","property-type":"data-constant",default:.5,minimum:0,maximum:1,expression:{interpolated:!0,parameters:["zoom"]},transition:!0}},paint:["paint_fill","paint_line","paint_circle","paint_heatmap","paint_fill-extrusion","paint_symbol","paint_raster","paint_hillshade","paint_background"],paint_fill:{"fill-antialias":{type:"boolean",default:!0,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"fill-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-outline-color":{type:"color",transition:!0,requires:[{"!":"fill-pattern"},{"fill-antialias":!0}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["fill-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-pattern":{type:"image",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"}},"paint_fill-extrusion":{"fill-extrusion-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"fill-extrusion-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["fill-extrusion-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-pattern":{type:"image",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"},"fill-extrusion-height":{type:"number",default:0,minimum:0,units:"meters",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-base":{type:"number",default:0,minimum:0,units:"meters",transition:!0,requires:["fill-extrusion-height"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-vertical-gradient":{type:"boolean",default:!0,transition:!1,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"}},paint_line:{"line-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"line-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["line-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"line-width":{type:"number",default:1,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-gap-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-offset":{type:"number",default:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-dasharray":{type:"array",value:"number",minimum:0,transition:!0,units:"line widths",requires:[{"!":"line-pattern"}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"cross-faded"},"line-pattern":{type:"image",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"},"line-gradient":{type:"color",transition:!1,requires:[{"!":"line-dasharray"},{"!":"line-pattern"},{source:"geojson",has:{lineMetrics:!0}}],expression:{interpolated:!0,parameters:["line-progress"]},"property-type":"color-ramp"}},paint_circle:{"circle-radius":{type:"number",default:5,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-blur":{type:"number",default:0,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"circle-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["circle-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-pitch-scale":{type:"enum",values:{map:{},viewport:{}},default:"map",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-pitch-alignment":{type:"enum",values:{map:{},viewport:{}},default:"viewport",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-stroke-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-stroke-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-stroke-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"}},paint_heatmap:{"heatmap-radius":{type:"number",default:30,minimum:1,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"heatmap-weight":{type:"number",default:1,minimum:0,transition:!1,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"heatmap-intensity":{type:"number",default:1,minimum:0,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"heatmap-color":{type:"color",default:["interpolate",["linear"],["heatmap-density"],0,"rgba(0, 0, 255, 0)",.1,"royalblue",.3,"cyan",.5,"lime",.7,"yellow",1,"red"],transition:!1,expression:{interpolated:!0,parameters:["heatmap-density"]},"property-type":"color-ramp"},"heatmap-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_symbol:{"icon-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-color":{type:"color",default:"#000000",transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-color":{type:"color",default:"rgba(0, 0, 0, 0)",transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["icon-image","icon-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-color":{type:"color",default:"#000000",transition:!0,overridable:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-color":{type:"color",default:"rgba(0, 0, 0, 0)",transition:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["text-field","text-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"}},paint_raster:{"raster-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-hue-rotate":{type:"number",default:0,period:360,transition:!0,units:"degrees",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-brightness-min":{type:"number",default:0,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-brightness-max":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-saturation":{type:"number",default:0,minimum:-1,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-contrast":{type:"number",default:0,minimum:-1,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-resampling":{type:"enum",values:{linear:{},nearest:{}},default:"linear",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"raster-fade-duration":{type:"number",default:300,minimum:0,transition:!1,units:"milliseconds",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_hillshade:{"hillshade-illumination-direction":{type:"number",default:335,minimum:0,maximum:359,transition:!1,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-illumination-anchor":{type:"enum",values:{map:{},viewport:{}},default:"viewport",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-exaggeration":{type:"number",default:.5,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-shadow-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-highlight-color":{type:"color",default:"#FFFFFF",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-accent-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_background:{"background-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"background-pattern"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"background-pattern":{type:"image",transition:!0,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"cross-faded"},"background-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},transition:{duration:{type:"number",default:300,minimum:0,units:"milliseconds"},delay:{type:"number",default:0,minimum:0,units:"milliseconds"}},"property-type":{"data-driven":{type:"property-type"},"cross-faded":{type:"property-type"},"cross-faded-data-driven":{type:"property-type"},"color-ramp":{type:"property-type"},"data-constant":{type:"property-type"},constant:{type:"property-type"}}},Et=function(t,e,r,i){this.message=(t?t+": ":"")+r,i&&(this.identifier=i),null!=e&&e.__line__&&(this.line=e.__line__)}
function Tt(t){var e=t.key,r=t.value
return r?[new Et(e,r,"constants have been deprecated as of v8")]:[]}function At(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1]
for(var i=0,n=e;i<n.length;i+=1){var o=n[i]
for(var a in o)t[a]=o[a]}return t}function It(t){return t instanceof Number||t instanceof String||t instanceof Boolean}function kt(t){return It(t)?t.valueOf():t}function zt(t){if(Array.isArray(t))return t.map(zt)
if(t instanceof Object&&!It(t)){var e={}
for(var r in t)e[r]=zt(t[r])
return e}return kt(t)}var Ct=function(t){function e(e,r){t.call(this,r),this.message=r,this.key=e}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Error),Pt=function(t,e){void 0===e&&(e=[]),this.parent=t,this.bindings={}
for(var r=0,i=e;r<i.length;r+=1){var n=i[r],o=n[0],a=n[1]
this.bindings[o]=a}}
Pt.prototype.concat=function(t){return new Pt(this,t)},Pt.prototype.get=function(t){if(this.bindings[t])return this.bindings[t]
if(this.parent)return this.parent.get(t)
throw new Error(t+" not found in scope.")},Pt.prototype.has=function(t){return!!this.bindings[t]||!!this.parent&&this.parent.has(t)}
var Mt={kind:"null"},Lt={kind:"number"},Dt={kind:"string"},Bt={kind:"boolean"},Rt={kind:"color"},Ft={kind:"object"},Ot={kind:"value"},Ut={kind:"collator"},Vt={kind:"formatted"},Nt={kind:"image"}
function jt(t,e){return{kind:"array",itemType:t,N:e}}function qt(t){if("array"===t.kind){var e=qt(t.itemType)
return"number"==typeof t.N?"array<"+e+", "+t.N+">":"value"===t.itemType.kind?"array":"array<"+e+">"}return t.kind}var Zt=[Mt,Lt,Dt,Bt,Rt,Vt,Ft,jt(Ot),Nt]
function Gt(t,e){if("error"===e.kind)return null
if("array"===t.kind){if("array"===e.kind&&(0===e.N&&"value"===e.itemType.kind||!Gt(t.itemType,e.itemType))&&("number"!=typeof t.N||t.N===e.N))return null}else{if(t.kind===e.kind)return null
if("value"===t.kind)for(var r=0,i=Zt;r<i.length;r+=1)if(!Gt(i[r],e))return null}return"Expected "+qt(t)+" but found "+qt(e)+" instead."}var Xt=e(function(t,e){var r={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],rebeccapurple:[102,51,153,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]}
function i(t){return(t=Math.round(t))<0?0:t>255?255:t}function n(t){return t<0?0:t>1?1:t}function o(t){return"%"===t[t.length-1]?i(parseFloat(t)/100*255):i(parseInt(t))}function a(t){return"%"===t[t.length-1]?n(parseFloat(t)/100):n(parseFloat(t))}function s(t,e,r){return r<0?r+=1:r>1&&(r-=1),6*r<1?t+(e-t)*r*6:2*r<1?e:3*r<2?t+(e-t)*(2/3-r)*6:t}try{e.parseCSSColor=function(t){var e,n=t.replace(/ /g,"").toLowerCase()
if(n in r)return r[n].slice()
if("#"===n[0])return 4===n.length?(e=parseInt(n.substr(1),16))>=0&&e<=4095?[(3840&e)>>4|(3840&e)>>8,240&e|(240&e)>>4,15&e|(15&e)<<4,1]:null:7===n.length&&(e=parseInt(n.substr(1),16))>=0&&e<=16777215?[(16711680&e)>>16,(65280&e)>>8,255&e,1]:null
var l=n.indexOf("("),u=n.indexOf(")")
if(-1!==l&&u+1===n.length){var c=n.substr(0,l),p=n.substr(l+1,u-(l+1)).split(","),h=1
switch(c){case"rgba":if(4!==p.length)return null
h=a(p.pop())
case"rgb":return 3!==p.length?null:[o(p[0]),o(p[1]),o(p[2]),h]
case"hsla":if(4!==p.length)return null
h=a(p.pop())
case"hsl":if(3!==p.length)return null
var f=(parseFloat(p[0])%360+360)%360/360,d=a(p[1]),m=a(p[2]),y=m<=.5?m*(d+1):m+d-m*d,v=2*m-y
return[i(255*s(v,y,f+1/3)),i(255*s(v,y,f)),i(255*s(v,y,f-1/3)),h]
default:return null}}return null}}catch(t){}}).parseCSSColor,Wt=function(t,e,r,i){void 0===i&&(i=1),this.r=t,this.g=e,this.b=r,this.a=i}
Wt.parse=function(t){if(t){if(t instanceof Wt)return t
if("string"==typeof t){var e=Xt(t)
if(e)return new Wt(e[0]/255*e[3],e[1]/255*e[3],e[2]/255*e[3],e[3])}}},Wt.prototype.toString=function(){var t=this.toArray(),e=t[0],r=t[1],i=t[2],n=t[3]
return"rgba("+Math.round(e)+","+Math.round(r)+","+Math.round(i)+","+n+")"},Wt.prototype.toArray=function(){var t=this.r,e=this.g,r=this.b,i=this.a
return 0===i?[0,0,0,0]:[255*t/i,255*e/i,255*r/i,i]},Wt.black=new Wt(0,0,0,1),Wt.white=new Wt(1,1,1,1),Wt.transparent=new Wt(0,0,0,0),Wt.red=new Wt(1,0,0,1)
var Kt=function(t,e,r){this.sensitivity=t?e?"variant":"case":e?"accent":"base",this.locale=r,this.collator=new Intl.Collator(this.locale?this.locale:[],{sensitivity:this.sensitivity,usage:"search"})}
Kt.prototype.compare=function(t,e){return this.collator.compare(t,e)},Kt.prototype.resolvedLocale=function(){return new Intl.Collator(this.locale?this.locale:[]).resolvedOptions().locale}
var Ht=function(t,e,r,i){this.text=t,this.scale=e,this.fontStack=r,this.textColor=i},Jt=function(t){this.sections=t}
Jt.fromString=function(t){return new Jt([new Ht(t,null,null,null)])},Jt.prototype.toString=function(){return this.sections.map(function(t){return t.text}).join("")},Jt.prototype.serialize=function(){for(var t=["format"],e=0,r=this.sections;e<r.length;e+=1){var i=r[e]
t.push(i.text)
var n={}
i.fontStack&&(n["text-font"]=["literal",i.fontStack.split(",")]),i.scale&&(n["font-scale"]=i.scale),i.textColor&&(n["text-color"]=["rgba"].concat(i.textColor.toArray())),t.push(n)}return t}
var Yt=function(t){this.name=t.name,this.available=t.available}
function $t(t,e,r,i){return"number"==typeof t&&t>=0&&t<=255&&"number"==typeof e&&e>=0&&e<=255&&"number"==typeof r&&r>=0&&r<=255?void 0===i||"number"==typeof i&&i>=0&&i<=1?null:"Invalid rgba value ["+[t,e,r,i].join(", ")+"]: 'a' must be between 0 and 1.":"Invalid rgba value ["+("number"==typeof i?[t,e,r,i]:[t,e,r]).join(", ")+"]: 'r', 'g', and 'b' must be between 0 and 255."}function Qt(t){if(null===t)return Mt
if("string"==typeof t)return Dt
if("boolean"==typeof t)return Bt
if("number"==typeof t)return Lt
if(t instanceof Wt)return Rt
if(t instanceof Kt)return Ut
if(t instanceof Jt)return Vt
if(t instanceof Yt)return Nt
if(Array.isArray(t)){for(var e,r=t.length,i=0,n=t;i<n.length;i+=1){var o=Qt(n[i])
if(e){if(e===o)continue
e=Ot
break}e=o}return jt(e||Ot,r)}return Ft}function te(t){var e=typeof t
return null===t?"":"string"===e||"number"===e||"boolean"===e?String(t):t instanceof Wt||t instanceof Jt||t instanceof Yt?t.toString():JSON.stringify(t)}Yt.prototype.toString=function(){return this.name},Yt.fromString=function(t){return new Yt(t)},Yt.prototype.serialize=function(){return["image",this.name]}
var ee=function(t,e){this.type=t,this.value=e}
ee.parse=function(t,e){if(2!==t.length)return e.error("'literal' expression requires exactly one argument, but found "+(t.length-1)+" instead.")
if(!function t(e){if(null===e)return!0
if("string"==typeof e)return!0
if("boolean"==typeof e)return!0
if("number"==typeof e)return!0
if(e instanceof Wt)return!0
if(e instanceof Kt)return!0
if(e instanceof Jt)return!0
if(e instanceof Yt)return!0
if(Array.isArray(e)){for(var r=0,i=e;r<i.length;r+=1)if(!t(i[r]))return!1
return!0}if("object"==typeof e){for(var n in e)if(!t(e[n]))return!1
return!0}return!1}(t[1]))return e.error("invalid value")
var r=t[1],i=Qt(r),n=e.expectedType
return"array"!==i.kind||0!==i.N||!n||"array"!==n.kind||"number"==typeof n.N&&0!==n.N||(i=n),new ee(i,r)},ee.prototype.evaluate=function(){return this.value},ee.prototype.eachChild=function(){},ee.prototype.possibleOutputs=function(){return[this.value]},ee.prototype.serialize=function(){return"array"===this.type.kind||"object"===this.type.kind?["literal",this.value]:this.value instanceof Wt?["rgba"].concat(this.value.toArray()):this.value instanceof Jt?this.value.serialize():this.value}
var re=function(t){this.name="ExpressionEvaluationError",this.message=t}
re.prototype.toJSON=function(){return this.message}
var ie={string:Dt,number:Lt,boolean:Bt,object:Ft},ne=function(t,e){this.type=t,this.args=e}
ne.parse=function(t,e){if(t.length<2)return e.error("Expected at least one argument.")
var r,i=1,n=t[0]
if("array"===n){var o,a
if(t.length>2){var s=t[1]
if("string"!=typeof s||!(s in ie)||"object"===s)return e.error('The item type argument of "array" must be one of string, number, boolean',1)
o=ie[s],i++}else o=Ot
if(t.length>3){if(null!==t[2]&&("number"!=typeof t[2]||t[2]<0||t[2]!==Math.floor(t[2])))return e.error('The length argument to "array" must be a positive integer literal',2)
a=t[2],i++}r=jt(o,a)}else r=ie[n]
for(var l=[];i<t.length;i++){var u=e.parse(t[i],i,Ot)
if(!u)return null
l.push(u)}return new ne(r,l)},ne.prototype.evaluate=function(t){for(var e=0;e<this.args.length;e++){var r=this.args[e].evaluate(t)
if(!Gt(this.type,Qt(r)))return r
if(e===this.args.length-1)throw new re("Expected value to be of type "+qt(this.type)+", but found "+qt(Qt(r))+" instead.")}return null},ne.prototype.eachChild=function(t){this.args.forEach(t)},ne.prototype.possibleOutputs=function(){var t
return(t=[]).concat.apply(t,this.args.map(function(t){return t.possibleOutputs()}))},ne.prototype.serialize=function(){var t=this.type,e=[t.kind]
if("array"===t.kind){var r=t.itemType
if("string"===r.kind||"number"===r.kind||"boolean"===r.kind){e.push(r.kind)
var i=t.N;("number"==typeof i||this.args.length>1)&&e.push(i)}}return e.concat(this.args.map(function(t){return t.serialize()}))}
var oe=function(t){this.type=Vt,this.sections=t}
oe.parse=function(t,e){if(t.length<3)return e.error("Expected at least two arguments.")
if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.")
for(var r=[],i=1;i<t.length-1;i+=2){var n=e.parse(t[i],1,Ot)
if(!n)return null
var o=n.type.kind
if("string"!==o&&"value"!==o&&"null"!==o)return e.error("Formatted text type must be 'string', 'value', or 'null'.")
var a=t[i+1]
if("object"!=typeof a||Array.isArray(a))return e.error("Format options argument must be an object.")
var s=null
if(a["font-scale"]&&!(s=e.parse(a["font-scale"],1,Lt)))return null
var l=null
if(a["text-font"]&&!(l=e.parse(a["text-font"],1,jt(Dt))))return null
var u=null
if(a["text-color"]&&!(u=e.parse(a["text-color"],1,Rt)))return null
r.push({text:n,scale:s,font:l,textColor:u})}return new oe(r)},oe.prototype.evaluate=function(t){return new Jt(this.sections.map(function(e){return new Ht(te(e.text.evaluate(t)),e.scale?e.scale.evaluate(t):null,e.font?e.font.evaluate(t).join(","):null,e.textColor?e.textColor.evaluate(t):null)}))},oe.prototype.eachChild=function(t){for(var e=0,r=this.sections;e<r.length;e+=1){var i=r[e]
t(i.text),i.scale&&t(i.scale),i.font&&t(i.font),i.textColor&&t(i.textColor)}},oe.prototype.possibleOutputs=function(){return[void 0]},oe.prototype.serialize=function(){for(var t=["format"],e=0,r=this.sections;e<r.length;e+=1){var i=r[e]
t.push(i.text.serialize())
var n={}
i.scale&&(n["font-scale"]=i.scale.serialize()),i.font&&(n["text-font"]=i.font.serialize()),i.textColor&&(n["text-color"]=i.textColor.serialize()),t.push(n)}return t}
var ae=function(t){this.type=Nt,this.input=t}
ae.parse=function(t,e){if(2!==t.length)return e.error("Expected two arguments.")
var r=e.parse(t[1],1,Dt)
return r?new ae(r):e.error("No image name provided.")},ae.prototype.evaluate=function(t){var e=this.input.evaluate(t),r=!1
return t.availableImages&&t.availableImages.indexOf(e)>-1&&(r=!0),{name:e,available:r}},ae.prototype.eachChild=function(t){t(this.input)},ae.prototype.possibleOutputs=function(){return[void 0]},ae.prototype.serialize=function(){return["image",this.input.serialize()]}
var se={"to-boolean":Bt,"to-color":Rt,"to-number":Lt,"to-string":Dt},le=function(t,e){this.type=t,this.args=e}
le.parse=function(t,e){if(t.length<2)return e.error("Expected at least one argument.")
var r=t[0]
if(("to-boolean"===r||"to-string"===r)&&2!==t.length)return e.error("Expected one argument.")
for(var i=se[r],n=[],o=1;o<t.length;o++){var a=e.parse(t[o],o,Ot)
if(!a)return null
n.push(a)}return new le(i,n)},le.prototype.evaluate=function(t){if("boolean"===this.type.kind)return Boolean(this.args[0].evaluate(t))
if("color"===this.type.kind){for(var e,r,i=0,n=this.args;i<n.length;i+=1){if(r=null,(e=n[i].evaluate(t))instanceof Wt)return e
if("string"==typeof e){var o=t.parseColor(e)
if(o)return o}else if(Array.isArray(e)&&!(r=e.length<3||e.length>4?"Invalid rbga value "+JSON.stringify(e)+": expected an array containing either three or four numeric values.":$t(e[0],e[1],e[2],e[3])))return new Wt(e[0]/255,e[1]/255,e[2]/255,e[3])}throw new re(r||"Could not parse color from value '"+("string"==typeof e?e:String(JSON.stringify(e)))+"'")}if("number"===this.type.kind){for(var a=null,s=0,l=this.args;s<l.length;s+=1){if(null===(a=l[s].evaluate(t)))return 0
var u=Number(a)
if(!isNaN(u))return u}throw new re("Could not convert "+JSON.stringify(a)+" to number.")}if("formatted"===this.type.kind)return Jt.fromString(te(this.args[0].evaluate(t)))
if("image"===this.type.kind){var c=te(this.args[0].evaluate(t))
return Yt.fromString({name:c,available:!1})}return te(this.args[0].evaluate(t))},le.prototype.eachChild=function(t){this.args.forEach(t)},le.prototype.possibleOutputs=function(){var t
return(t=[]).concat.apply(t,this.args.map(function(t){return t.possibleOutputs()}))},le.prototype.serialize=function(){if("formatted"===this.type.kind)return new oe([{text:this.args[0],scale:null,font:null,textColor:null}]).serialize()
if("image"===this.type.kind)return new ae(this.args[0]).serialize()
var t=["to-"+this.type.kind]
return this.eachChild(function(e){t.push(e.serialize())}),t}
var ue=["Unknown","Point","LineString","Polygon"],ce=function(){this.globals=null,this.feature=null,this.featureState=null,this.formattedSection=null,this._parseColorCache={},this.availableImages=null}
ce.prototype.id=function(){return this.feature&&"id"in this.feature?this.feature.id:null},ce.prototype.geometryType=function(){return this.feature?"number"==typeof this.feature.type?ue[this.feature.type]:this.feature.type:null},ce.prototype.properties=function(){return this.feature&&this.feature.properties||{}},ce.prototype.parseColor=function(t){var e=this._parseColorCache[t]
return e||(e=this._parseColorCache[t]=Wt.parse(t)),e}
var pe=function(t,e,r,i){this.name=t,this.type=e,this._evaluate=r,this.args=i}
pe.prototype.evaluate=function(t){return this._evaluate(t,this.args)},pe.prototype.eachChild=function(t){this.args.forEach(t)},pe.prototype.possibleOutputs=function(){return[void 0]},pe.prototype.serialize=function(){return[this.name].concat(this.args.map(function(t){return t.serialize()}))},pe.parse=function(t,e){var r,i=t[0],n=pe.definitions[i]
if(!n)return e.error('Unknown expression "'+i+'". If you wanted a literal array, use ["literal", [...]].',0)
for(var o=Array.isArray(n)?n[0]:n.type,a=Array.isArray(n)?[[n[1],n[2]]]:n.overloads,s=a.filter(function(e){var r=e[0]
return!Array.isArray(r)||r.length===t.length-1}),l=null,u=0,c=s;u<c.length;u+=1){var p=c[u],h=p[0],f=p[1]
l=new ve(e.registry,e.path,null,e.scope)
for(var d=[],m=!1,y=1;y<t.length;y++){var v=t[y],_=Array.isArray(h)?h[y-1]:h.type,g=l.parse(v,1+d.length,_)
if(!g){m=!0
break}d.push(g)}if(!m)if(Array.isArray(h)&&h.length!==d.length)l.error("Expected "+h.length+" arguments, but found "+d.length+" instead.")
else{for(var x=0;x<d.length;x++){var b=Array.isArray(h)?h[x]:h.type,w=d[x]
l.concat(x+1).checkSubtype(b,w.type)}if(0===l.errors.length)return new pe(i,o,f,d)}}if(1===s.length)(r=e.errors).push.apply(r,l.errors)
else{for(var S=(s.length?s:a).map(function(t){var e
return e=t[0],Array.isArray(e)?"("+e.map(qt).join(", ")+")":"("+qt(e.type)+"...)"}).join(" | "),E=[],T=1;T<t.length;T++){var A=e.parse(t[T],1+E.length)
if(!A)return null
E.push(qt(A.type))}e.error("Expected arguments of type "+S+", but found ("+E.join(", ")+") instead.")}return null},pe.register=function(t,e){for(var r in pe.definitions=e,e)t[r]=pe}
var he=function(t,e,r){this.type=Ut,this.locale=r,this.caseSensitive=t,this.diacriticSensitive=e}
function fe(t){if(t instanceof pe){if("get"===t.name&&1===t.args.length)return!1
if("feature-state"===t.name)return!1
if("has"===t.name&&1===t.args.length)return!1
if("properties"===t.name||"geometry-type"===t.name||"id"===t.name)return!1
if(/^filter-/.test(t.name))return!1}var e=!0
return t.eachChild(function(t){e&&!fe(t)&&(e=!1)}),e}function de(t){if(t instanceof pe&&"feature-state"===t.name)return!1
var e=!0
return t.eachChild(function(t){e&&!de(t)&&(e=!1)}),e}function me(t,e){if(t instanceof pe&&e.indexOf(t.name)>=0)return!1
var r=!0
return t.eachChild(function(t){r&&!me(t,e)&&(r=!1)}),r}he.parse=function(t,e){if(2!==t.length)return e.error("Expected one argument.")
var r=t[1]
if("object"!=typeof r||Array.isArray(r))return e.error("Collator options argument must be an object.")
var i=e.parse(void 0!==r["case-sensitive"]&&r["case-sensitive"],1,Bt)
if(!i)return null
var n=e.parse(void 0!==r["diacritic-sensitive"]&&r["diacritic-sensitive"],1,Bt)
if(!n)return null
var o=null
return r.locale&&!(o=e.parse(r.locale,1,Dt))?null:new he(i,n,o)},he.prototype.evaluate=function(t){return new Kt(this.caseSensitive.evaluate(t),this.diacriticSensitive.evaluate(t),this.locale?this.locale.evaluate(t):null)},he.prototype.eachChild=function(t){t(this.caseSensitive),t(this.diacriticSensitive),this.locale&&t(this.locale)},he.prototype.possibleOutputs=function(){return[void 0]},he.prototype.serialize=function(){var t={}
return t["case-sensitive"]=this.caseSensitive.serialize(),t["diacritic-sensitive"]=this.diacriticSensitive.serialize(),this.locale&&(t.locale=this.locale.serialize()),["collator",t]}
var ye=function(t,e){this.type=e.type,this.name=t,this.boundExpression=e}
ye.parse=function(t,e){if(2!==t.length||"string"!=typeof t[1])return e.error("'var' expression requires exactly one string literal argument.")
var r=t[1]
return e.scope.has(r)?new ye(r,e.scope.get(r)):e.error('Unknown variable "'+r+'". Make sure "'+r+'" has been bound in an enclosing "let" expression before using it.',1)},ye.prototype.evaluate=function(t){return this.boundExpression.evaluate(t)},ye.prototype.eachChild=function(){},ye.prototype.possibleOutputs=function(){return[void 0]},ye.prototype.serialize=function(){return["var",this.name]}
var ve=function(t,e,r,i,n){void 0===e&&(e=[]),void 0===i&&(i=new Pt),void 0===n&&(n=[]),this.registry=t,this.path=e,this.key=e.map(function(t){return"["+t+"]"}).join(""),this.scope=i,this.errors=n,this.expectedType=r}
function _e(t,e){for(var r,i,n=t.length-1,o=0,a=n,s=0;o<=a;)if(r=t[s=Math.floor((o+a)/2)],i=t[s+1],r<=e){if(s===n||e<i)return s
o=s+1}else{if(!(r>e))throw new re("Input is not a number.")
a=s-1}return 0}ve.prototype.parse=function(t,e,r,i,n){return void 0===n&&(n={}),e?this.concat(e,r,i)._parse(t,n):this._parse(t,n)},ve.prototype._parse=function(t,e){function r(t,e,r){return"assert"===r?new ne(e,[t]):"coerce"===r?new le(e,[t]):t}if(null!==t&&"string"!=typeof t&&"boolean"!=typeof t&&"number"!=typeof t||(t=["literal",t]),Array.isArray(t)){if(0===t.length)return this.error('Expected an array with at least one element. If you wanted a literal array, use ["literal", []].')
var i=t[0]
if("string"!=typeof i)return this.error("Expression name must be a string, but found "+typeof i+' instead. If you wanted a literal array, use ["literal", [...]].',0),null
var n=this.registry[i]
if(n){var o=n.parse(t,this)
if(!o)return null
if(this.expectedType){var a=this.expectedType,s=o.type
if("string"!==a.kind&&"number"!==a.kind&&"boolean"!==a.kind&&"object"!==a.kind&&"array"!==a.kind||"value"!==s.kind)if("color"!==a.kind&&"formatted"!==a.kind&&"image"!==a.kind||"value"!==s.kind&&"string"!==s.kind){if(this.checkSubtype(a,s))return null}else o=r(o,a,e.typeAnnotation||"coerce")
else o=r(o,a,e.typeAnnotation||"assert")}if(!(o instanceof ee)&&"image"!==o.type.kind&&function t(e){if(e instanceof ye)return t(e.boundExpression)
if(e instanceof pe&&"error"===e.name)return!1
if(e instanceof he)return!1
var r=e instanceof le||e instanceof ne,i=!0
return e.eachChild(function(e){i=r?i&&t(e):i&&e instanceof ee}),!!i&&fe(e)&&me(e,["zoom","heatmap-density","line-progress","accumulated","is-supported-script"])}(o)){var l=new ce
try{o=new ee(o.type,o.evaluate(l))}catch(t){return this.error(t.message),null}}return o}return this.error('Unknown expression "'+i+'". If you wanted a literal array, use ["literal", [...]].',0)}return void 0===t?this.error("'undefined' value invalid. Use null instead."):"object"==typeof t?this.error('Bare objects invalid. Use ["literal", {...}] instead.'):this.error("Expected an array, but found "+typeof t+" instead.")},ve.prototype.concat=function(t,e,r){var i="number"==typeof t?this.path.concat(t):this.path,n=r?this.scope.concat(r):this.scope
return new ve(this.registry,i,e||null,n,this.errors)},ve.prototype.error=function(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1]
var i=""+this.key+e.map(function(t){return"["+t+"]"}).join("")
this.errors.push(new Ct(i,t))},ve.prototype.checkSubtype=function(t,e){var r=Gt(t,e)
return r&&this.error(r),r}
var ge=function(t,e,r){this.type=t,this.input=e,this.labels=[],this.outputs=[]
for(var i=0,n=r;i<n.length;i+=1){var o=n[i],a=o[0],s=o[1]
this.labels.push(a),this.outputs.push(s)}}
function xe(t,e,r){return t*(1-r)+e*r}ge.parse=function(t,e){if(t.length-1<4)return e.error("Expected at least 4 arguments, but found only "+(t.length-1)+".")
if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.")
var r=e.parse(t[1],1,Lt)
if(!r)return null
var i=[],n=null
e.expectedType&&"value"!==e.expectedType.kind&&(n=e.expectedType)
for(var o=1;o<t.length;o+=2){var a=1===o?-1/0:t[o],s=t[o+1],l=o,u=o+1
if("number"!=typeof a)return e.error('Input/output pairs for "step" expressions must be defined using literal numeric values (not computed expressions) for the input values.',l)
if(i.length&&i[i.length-1][0]>=a)return e.error('Input/output pairs for "step" expressions must be arranged with input values in strictly ascending order.',l)
var c=e.parse(s,u,n)
if(!c)return null
n=n||c.type,i.push([a,c])}return new ge(n,r,i)},ge.prototype.evaluate=function(t){var e=this.labels,r=this.outputs
if(1===e.length)return r[0].evaluate(t)
var i=this.input.evaluate(t)
if(i<=e[0])return r[0].evaluate(t)
var n=e.length
return i>=e[n-1]?r[n-1].evaluate(t):r[_e(e,i)].evaluate(t)},ge.prototype.eachChild=function(t){t(this.input)
for(var e=0,r=this.outputs;e<r.length;e+=1)t(r[e])},ge.prototype.possibleOutputs=function(){var t
return(t=[]).concat.apply(t,this.outputs.map(function(t){return t.possibleOutputs()}))},ge.prototype.serialize=function(){for(var t=["step",this.input.serialize()],e=0;e<this.labels.length;e++)e>0&&t.push(this.labels[e]),t.push(this.outputs[e].serialize())
return t}
var be=Object.freeze({number:xe,color:function(t,e,r){return new Wt(xe(t.r,e.r,r),xe(t.g,e.g,r),xe(t.b,e.b,r),xe(t.a,e.a,r))},array:function(t,e,r){return t.map(function(t,i){return xe(t,e[i],r)})}}),we=.95047,Se=1,Ee=1.08883,Te=4/29,Ae=6/29,Ie=3*Ae*Ae,ke=Ae*Ae*Ae,ze=Math.PI/180,Ce=180/Math.PI
function Pe(t){return t>ke?Math.pow(t,1/3):t/Ie+Te}function Me(t){return t>Ae?t*t*t:Ie*(t-Te)}function Le(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function De(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Be(t){var e=De(t.r),r=De(t.g),i=De(t.b),n=Pe((.4124564*e+.3575761*r+.1804375*i)/we),o=Pe((.2126729*e+.7151522*r+.072175*i)/Se)
return{l:116*o-16,a:500*(n-o),b:200*(o-Pe((.0193339*e+.119192*r+.9503041*i)/Ee)),alpha:t.a}}function Re(t){var e=(t.l+16)/116,r=isNaN(t.a)?e:e+t.a/500,i=isNaN(t.b)?e:e-t.b/200
return e=Se*Me(e),r=we*Me(r),i=Ee*Me(i),new Wt(Le(3.2404542*r-1.5371385*e-.4985314*i),Le(-.969266*r+1.8760108*e+.041556*i),Le(.0556434*r-.2040259*e+1.0572252*i),t.alpha)}function Fe(t,e,r){var i=e-t
return t+r*(i>180||i<-180?i-360*Math.round(i/360):i)}var Oe={forward:Be,reverse:Re,interpolate:function(t,e,r){return{l:xe(t.l,e.l,r),a:xe(t.a,e.a,r),b:xe(t.b,e.b,r),alpha:xe(t.alpha,e.alpha,r)}}},Ue={forward:function(t){var e=Be(t),r=e.l,i=e.a,n=e.b,o=Math.atan2(n,i)*Ce
return{h:o<0?o+360:o,c:Math.sqrt(i*i+n*n),l:r,alpha:t.a}},reverse:function(t){var e=t.h*ze,r=t.c
return Re({l:t.l,a:Math.cos(e)*r,b:Math.sin(e)*r,alpha:t.alpha})},interpolate:function(t,e,r){return{h:Fe(t.h,e.h,r),c:xe(t.c,e.c,r),l:xe(t.l,e.l,r),alpha:xe(t.alpha,e.alpha,r)}}},Ve=Object.freeze({lab:Oe,hcl:Ue}),Ne=function(t,e,r,i,n){this.type=t,this.operator=e,this.interpolation=r,this.input=i,this.labels=[],this.outputs=[]
for(var o=0,a=n;o<a.length;o+=1){var s=a[o],l=s[0],u=s[1]
this.labels.push(l),this.outputs.push(u)}}
function je(t,e,r,i){var n=i-r,o=t-r
return 0===n?0:1===e?o/n:(Math.pow(e,o)-1)/(Math.pow(e,n)-1)}Ne.interpolationFactor=function(t,e,i,n){var o=0
if("exponential"===t.name)o=je(e,t.base,i,n)
else if("linear"===t.name)o=je(e,1,i,n)
else if("cubic-bezier"===t.name){var a=t.controlPoints
o=new r(a[0],a[1],a[2],a[3]).solve(je(e,1,i,n))}return o},Ne.parse=function(t,e){var r=t[0],i=t[1],n=t[2],o=t.slice(3)
if(!Array.isArray(i)||0===i.length)return e.error("Expected an interpolation type expression.",1)
if("linear"===i[0])i={name:"linear"}
else if("exponential"===i[0]){var a=i[1]
if("number"!=typeof a)return e.error("Exponential interpolation requires a numeric base.",1,1)
i={name:"exponential",base:a}}else{if("cubic-bezier"!==i[0])return e.error("Unknown interpolation type "+String(i[0]),1,0)
var s=i.slice(1)
if(4!==s.length||s.some(function(t){return"number"!=typeof t||t<0||t>1}))return e.error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.",1)
i={name:"cubic-bezier",controlPoints:s}}if(t.length-1<4)return e.error("Expected at least 4 arguments, but found only "+(t.length-1)+".")
if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.")
if(!(n=e.parse(n,2,Lt)))return null
var l=[],u=null
"interpolate-hcl"===r||"interpolate-lab"===r?u=Rt:e.expectedType&&"value"!==e.expectedType.kind&&(u=e.expectedType)
for(var c=0;c<o.length;c+=2){var p=o[c],h=o[c+1],f=c+3,d=c+4
if("number"!=typeof p)return e.error('Input/output pairs for "interpolate" expressions must be defined using literal numeric values (not computed expressions) for the input values.',f)
if(l.length&&l[l.length-1][0]>=p)return e.error('Input/output pairs for "interpolate" expressions must be arranged with input values in strictly ascending order.',f)
var m=e.parse(h,d,u)
if(!m)return null
u=u||m.type,l.push([p,m])}return"number"===u.kind||"color"===u.kind||"array"===u.kind&&"number"===u.itemType.kind&&"number"==typeof u.N?new Ne(u,r,i,n,l):e.error("Type "+qt(u)+" is not interpolatable.")},Ne.prototype.evaluate=function(t){var e=this.labels,r=this.outputs
if(1===e.length)return r[0].evaluate(t)
var i=this.input.evaluate(t)
if(i<=e[0])return r[0].evaluate(t)
var n=e.length
if(i>=e[n-1])return r[n-1].evaluate(t)
var o=_e(e,i),a=e[o],s=e[o+1],l=Ne.interpolationFactor(this.interpolation,i,a,s),u=r[o].evaluate(t),c=r[o+1].evaluate(t)
return"interpolate"===this.operator?be[this.type.kind.toLowerCase()](u,c,l):"interpolate-hcl"===this.operator?Ue.reverse(Ue.interpolate(Ue.forward(u),Ue.forward(c),l)):Oe.reverse(Oe.interpolate(Oe.forward(u),Oe.forward(c),l))},Ne.prototype.eachChild=function(t){t(this.input)
for(var e=0,r=this.outputs;e<r.length;e+=1)t(r[e])},Ne.prototype.possibleOutputs=function(){var t
return(t=[]).concat.apply(t,this.outputs.map(function(t){return t.possibleOutputs()}))},Ne.prototype.serialize=function(){var t
t="linear"===this.interpolation.name?["linear"]:"exponential"===this.interpolation.name?1===this.interpolation.base?["linear"]:["exponential",this.interpolation.base]:["cubic-bezier"].concat(this.interpolation.controlPoints)
for(var e=[this.operator,t,this.input.serialize()],r=0;r<this.labels.length;r++)e.push(this.labels[r],this.outputs[r].serialize())
return e}
var qe=function(t,e){this.type=t,this.args=e}
qe.parse=function(t,e){if(t.length<2)return e.error("Expectected at least one argument.")
var r=null,i=e.expectedType
i&&"value"!==i.kind&&(r=i)
for(var n=[],o=0,a=t.slice(1);o<a.length;o+=1){var s=a[o],l=e.parse(s,1+n.length,r,void 0,{typeAnnotation:"omit"})
if(!l)return null
r=r||l.type,n.push(l)}var u=i&&n.some(function(t){return Gt(i,t.type)})
return new qe(u?Ot:r,n)},qe.prototype.evaluate=function(t){for(var e,r=null,i=0,n=0,o=this.args;n<o.length;n+=1){var a=o[n]
if(i++,r=a.evaluate(t),"image"!==a.type.kind||r.available||(e||(e=a.evaluate(t).name),r=null,i===this.args.length&&(r=e)),null!==r)break}return r},qe.prototype.eachChild=function(t){this.args.forEach(t)},qe.prototype.possibleOutputs=function(){var t
return(t=[]).concat.apply(t,this.args.map(function(t){return t.possibleOutputs()}))},qe.prototype.serialize=function(){var t=["coalesce"]
return this.eachChild(function(e){t.push(e.serialize())}),t}
var Ze=function(t,e){this.type=e.type,this.bindings=[].concat(t),this.result=e}
Ze.prototype.evaluate=function(t){return this.result.evaluate(t)},Ze.prototype.eachChild=function(t){for(var e=0,r=this.bindings;e<r.length;e+=1)t(r[e][1])
t(this.result)},Ze.parse=function(t,e){if(t.length<4)return e.error("Expected at least 3 arguments, but found "+(t.length-1)+" instead.")
for(var r=[],i=1;i<t.length-1;i+=2){var n=t[i]
if("string"!=typeof n)return e.error("Expected string, but found "+typeof n+" instead.",i)
if(/[^a-zA-Z0-9_]/.test(n))return e.error("Variable names must contain only alphanumeric characters or '_'.",i)
var o=e.parse(t[i+1],i+1)
if(!o)return null
r.push([n,o])}var a=e.parse(t[t.length-1],t.length-1,e.expectedType,r)
return a?new Ze(r,a):null},Ze.prototype.possibleOutputs=function(){return this.result.possibleOutputs()},Ze.prototype.serialize=function(){for(var t=["let"],e=0,r=this.bindings;e<r.length;e+=1){var i=r[e],n=i[0],o=i[1]
t.push(n,o.serialize())}return t.push(this.result.serialize()),t}
var Ge=function(t,e,r){this.type=t,this.index=e,this.input=r}
Ge.parse=function(t,e){if(3!==t.length)return e.error("Expected 2 arguments, but found "+(t.length-1)+" instead.")
var r=e.parse(t[1],1,Lt),i=e.parse(t[2],2,jt(e.expectedType||Ot))
if(!r||!i)return null
var n=i.type
return new Ge(n.itemType,r,i)},Ge.prototype.evaluate=function(t){var e=this.index.evaluate(t),r=this.input.evaluate(t)
if(e<0)throw new re("Array index out of bounds: "+e+" < 0.")
if(e>=r.length)throw new re("Array index out of bounds: "+e+" > "+(r.length-1)+".")
if(e!==Math.floor(e))throw new re("Array index must be an integer, but found "+e+" instead.")
return r[e]},Ge.prototype.eachChild=function(t){t(this.index),t(this.input)},Ge.prototype.possibleOutputs=function(){return[void 0]},Ge.prototype.serialize=function(){return["at",this.index.serialize(),this.input.serialize()]}
var Xe=function(t,e,r,i,n,o){this.inputType=t,this.type=e,this.input=r,this.cases=i,this.outputs=n,this.otherwise=o}
Xe.parse=function(t,e){if(t.length<5)return e.error("Expected at least 4 arguments, but found only "+(t.length-1)+".")
if(t.length%2!=1)return e.error("Expected an even number of arguments.")
var r,i
e.expectedType&&"value"!==e.expectedType.kind&&(i=e.expectedType)
for(var n={},o=[],a=2;a<t.length-1;a+=2){var s=t[a],l=t[a+1]
Array.isArray(s)||(s=[s])
var u=e.concat(a)
if(0===s.length)return u.error("Expected at least one branch label.")
for(var c=0,p=s;c<p.length;c+=1){var h=p[c]
if("number"!=typeof h&&"string"!=typeof h)return u.error("Branch labels must be numbers or strings.")
if("number"==typeof h&&Math.abs(h)>Number.MAX_SAFE_INTEGER)return u.error("Branch labels must be integers no larger than "+Number.MAX_SAFE_INTEGER+".")
if("number"==typeof h&&Math.floor(h)!==h)return u.error("Numeric branch labels must be integer values.")
if(r){if(u.checkSubtype(r,Qt(h)))return null}else r=Qt(h)
if(void 0!==n[String(h)])return u.error("Branch labels must be unique.")
n[String(h)]=o.length}var f=e.parse(l,a,i)
if(!f)return null
i=i||f.type,o.push(f)}var d=e.parse(t[1],1,Ot)
if(!d)return null
var m=e.parse(t[t.length-1],t.length-1,i)
return m?"value"!==d.type.kind&&e.concat(1).checkSubtype(r,d.type)?null:new Xe(r,i,d,n,o,m):null},Xe.prototype.evaluate=function(t){var e=this.input.evaluate(t)
return(Qt(e)===this.inputType&&this.outputs[this.cases[e]]||this.otherwise).evaluate(t)},Xe.prototype.eachChild=function(t){t(this.input),this.outputs.forEach(t),t(this.otherwise)},Xe.prototype.possibleOutputs=function(){var t
return(t=[]).concat.apply(t,this.outputs.map(function(t){return t.possibleOutputs()})).concat(this.otherwise.possibleOutputs())},Xe.prototype.serialize=function(){for(var t=this,e=["match",this.input.serialize()],r=[],i={},n=0,o=Object.keys(this.cases).sort();n<o.length;n+=1){var a=o[n]
void 0===(p=i[this.cases[a]])?(i[this.cases[a]]=r.length,r.push([this.cases[a],[a]])):r[p][1].push(a)}for(var s=function(e){return"number"===t.inputType.kind?Number(e):e},l=0,u=r;l<u.length;l+=1){var c=u[l],p=c[0],h=c[1]
1===h.length?e.push(s(h[0])):e.push(h.map(s)),e.push(this.outputs[outputIndex$1].serialize())}return e.push(this.otherwise.serialize()),e}
var We=function(t,e,r){this.type=t,this.branches=e,this.otherwise=r}
function Ke(t,e){return"=="===t||"!="===t?"boolean"===e.kind||"string"===e.kind||"number"===e.kind||"null"===e.kind||"value"===e.kind:"string"===e.kind||"number"===e.kind||"value"===e.kind}function He(t,e,r,i){return 0===i.compare(e,r)}function Je(t,e,r){var i="=="!==t&&"!="!==t
return function(){function n(t,e,r){this.type=Bt,this.lhs=t,this.rhs=e,this.collator=r,this.hasUntypedArgument="value"===t.type.kind||"value"===e.type.kind}return n.parse=function(t,e){if(3!==t.length&&4!==t.length)return e.error("Expected two or three arguments.")
var r=t[0],o=e.parse(t[1],1,Ot)
if(!o)return null
if(!Ke(r,o.type))return e.concat(1).error('"'+r+"\" comparisons are not supported for type '"+qt(o.type)+"'.")
var a=e.parse(t[2],2,Ot)
if(!a)return null
if(!Ke(r,a.type))return e.concat(2).error('"'+r+"\" comparisons are not supported for type '"+qt(a.type)+"'.")
if(o.type.kind!==a.type.kind&&"value"!==o.type.kind&&"value"!==a.type.kind)return e.error("Cannot compare types '"+qt(o.type)+"' and '"+qt(a.type)+"'.")
i&&("value"===o.type.kind&&"value"!==a.type.kind?o=new ne(a.type,[o]):"value"!==o.type.kind&&"value"===a.type.kind&&(a=new ne(o.type,[a])))
var s=null
if(4===t.length){if("string"!==o.type.kind&&"string"!==a.type.kind&&"value"!==o.type.kind&&"value"!==a.type.kind)return e.error("Cannot use collator to compare non-string types.")
if(!(s=e.parse(t[3],3,Ut)))return null}return new n(o,a,s)},n.prototype.evaluate=function(n){var o=this.lhs.evaluate(n),a=this.rhs.evaluate(n)
if(i&&this.hasUntypedArgument){var s=Qt(o),l=Qt(a)
if(s.kind!==l.kind||"string"!==s.kind&&"number"!==s.kind)throw new re('Expected arguments for "'+t+'" to be (string, string) or (number, number), but found ('+s.kind+", "+l.kind+") instead.")}if(this.collator&&!i&&this.hasUntypedArgument){var u=Qt(o),c=Qt(a)
if("string"!==u.kind||"string"!==c.kind)return e(n,o,a)}return this.collator?r(n,o,a,this.collator.evaluate(n)):e(n,o,a)},n.prototype.eachChild=function(t){t(this.lhs),t(this.rhs),this.collator&&t(this.collator)},n.prototype.possibleOutputs=function(){return[!0,!1]},n.prototype.serialize=function(){var e=[t]
return this.eachChild(function(t){e.push(t.serialize())}),e},n}()}We.parse=function(t,e){if(t.length<4)return e.error("Expected at least 3 arguments, but found only "+(t.length-1)+".")
if(t.length%2!=0)return e.error("Expected an odd number of arguments.")
var r
e.expectedType&&"value"!==e.expectedType.kind&&(r=e.expectedType)
for(var i=[],n=1;n<t.length-1;n+=2){var o=e.parse(t[n],n,Bt)
if(!o)return null
var a=e.parse(t[n+1],n+1,r)
if(!a)return null
i.push([o,a]),r=r||a.type}var s=e.parse(t[t.length-1],t.length-1,r)
return s?new We(r,i,s):null},We.prototype.evaluate=function(t){for(var e=0,r=this.branches;e<r.length;e+=1){var i=r[e],n=i[0],o=i[1]
if(n.evaluate(t))return o.evaluate(t)}return this.otherwise.evaluate(t)},We.prototype.eachChild=function(t){for(var e=0,r=this.branches;e<r.length;e+=1){var i=r[e],n=i[0],o=i[1]
t(n),t(o)}t(this.otherwise)},We.prototype.possibleOutputs=function(){var t
return(t=[]).concat.apply(t,this.branches.map(function(t){return t[0],t[1].possibleOutputs()})).concat(this.otherwise.possibleOutputs())},We.prototype.serialize=function(){var t=["case"]
return this.eachChild(function(e){t.push(e.serialize())}),t}
var Ye=Je("==",function(t,e,r){return e===r},He),$e=Je("!=",function(t,e,r){return e!==r},function(t,e,r,i){return!He(0,e,r,i)}),Qe=Je("<",function(t,e,r){return e<r},function(t,e,r,i){return i.compare(e,r)<0}),tr=Je(">",function(t,e,r){return e>r},function(t,e,r,i){return i.compare(e,r)>0}),er=Je("<=",function(t,e,r){return e<=r},function(t,e,r,i){return i.compare(e,r)<=0}),rr=Je(">=",function(t,e,r){return e>=r},function(t,e,r,i){return i.compare(e,r)>=0}),ir=function(t,e,r,i,n){this.type=Dt,this.number=t,this.locale=e,this.currency=r,this.minFractionDigits=i,this.maxFractionDigits=n}
ir.parse=function(t,e){if(3!==t.length)return e.error("Expected two arguments.")
var r=e.parse(t[1],1,Lt)
if(!r)return null
var i=t[2]
if("object"!=typeof i||Array.isArray(i))return e.error("NumberFormat options argument must be an object.")
var n=null
if(i.locale&&!(n=e.parse(i.locale,1,Dt)))return null
var o=null
if(i.currency&&!(o=e.parse(i.currency,1,Dt)))return null
var a=null
if(i["min-fraction-digits"]&&!(a=e.parse(i["min-fraction-digits"],1,Lt)))return null
var s=null
return i["max-fraction-digits"]&&!(s=e.parse(i["max-fraction-digits"],1,Lt))?null:new ir(r,n,o,a,s)},ir.prototype.evaluate=function(t){return new Intl.NumberFormat(this.locale?this.locale.evaluate(t):[],{style:this.currency?"currency":"decimal",currency:this.currency?this.currency.evaluate(t):void 0,minimumFractionDigits:this.minFractionDigits?this.minFractionDigits.evaluate(t):void 0,maximumFractionDigits:this.maxFractionDigits?this.maxFractionDigits.evaluate(t):void 0}).format(this.number.evaluate(t))},ir.prototype.eachChild=function(t){t(this.number),this.locale&&t(this.locale),this.currency&&t(this.currency),this.minFractionDigits&&t(this.minFractionDigits),this.maxFractionDigits&&t(this.maxFractionDigits)},ir.prototype.possibleOutputs=function(){return[void 0]},ir.prototype.serialize=function(){var t={}
return this.locale&&(t.locale=this.locale.serialize()),this.currency&&(t.currency=this.currency.serialize()),this.minFractionDigits&&(t["min-fraction-digits"]=this.minFractionDigits.serialize()),this.maxFractionDigits&&(t["max-fraction-digits"]=this.maxFractionDigits.serialize()),["number-format",this.number.serialize(),t]}
var nr=function(t){this.type=Lt,this.input=t}
nr.parse=function(t,e){if(2!==t.length)return e.error("Expected 1 argument, but found "+(t.length-1)+" instead.")
var r=e.parse(t[1],1)
return r?"array"!==r.type.kind&&"string"!==r.type.kind&&"value"!==r.type.kind?e.error("Expected argument of type string or array, but found "+qt(r.type)+" instead."):new nr(r):null},nr.prototype.evaluate=function(t){var e=this.input.evaluate(t)
if("string"==typeof e)return e.length
if(Array.isArray(e))return e.length
throw new re("Expected value to be of type string or array, but found "+qt(Qt(e))+" instead.")},nr.prototype.eachChild=function(t){t(this.input)},nr.prototype.possibleOutputs=function(){return[void 0]},nr.prototype.serialize=function(){var t=["length"]
return this.eachChild(function(e){t.push(e.serialize())}),t}
var or={"==":Ye,"!=":$e,">":tr,"<":Qe,">=":rr,"<=":er,array:ne,at:Ge,boolean:ne,case:We,coalesce:qe,collator:he,format:oe,image:ae,interpolate:Ne,"interpolate-hcl":Ne,"interpolate-lab":Ne,length:nr,let:Ze,literal:ee,match:Xe,number:ne,"number-format":ir,object:ne,step:ge,string:ne,"to-boolean":le,"to-color":le,"to-number":le,"to-string":le,var:ye}
function ar(t,e){var r=e[0],i=e[1],n=e[2],o=e[3]
r=r.evaluate(t),i=i.evaluate(t),n=n.evaluate(t)
var a=o?o.evaluate(t):1,s=$t(r,i,n,a)
if(s)throw new re(s)
return new Wt(r/255*a,i/255*a,n/255*a,a)}function sr(t,e){return t in e}function lr(t,e){var r=e[t]
return void 0===r?null:r}function ur(t){return{type:t}}function cr(t){return{result:"success",value:t}}function pr(t){return{result:"error",value:t}}function hr(t){return"data-driven"===t["property-type"]||"cross-faded-data-driven"===t["property-type"]}function fr(t){return!!t.expression&&t.expression.parameters.indexOf("zoom")>-1}function dr(t){return!!t.expression&&t.expression.interpolated}function mr(t){return t instanceof Number?"number":t instanceof String?"string":t instanceof Boolean?"boolean":Array.isArray(t)?"array":null===t?"null":typeof t}function yr(t){return"object"==typeof t&&null!==t&&!Array.isArray(t)}function vr(t){return t}function _r(t,e,r){return void 0!==t?t:void 0!==e?e:void 0!==r?r:void 0}function gr(t,e,r,i,n){return _r(typeof r===n?i[r]:void 0,t.default,e.default)}function xr(t,e,r){if("number"!==mr(r))return _r(t.default,e.default)
var i=t.stops.length
if(1===i)return t.stops[0][1]
if(r<=t.stops[0][0])return t.stops[0][1]
if(r>=t.stops[i-1][0])return t.stops[i-1][1]
var n=_e(t.stops.map(function(t){return t[0]}),r)
return t.stops[n][1]}function br(t,e,r){var i=void 0!==t.base?t.base:1
if("number"!==mr(r))return _r(t.default,e.default)
var n=t.stops.length
if(1===n)return t.stops[0][1]
if(r<=t.stops[0][0])return t.stops[0][1]
if(r>=t.stops[n-1][0])return t.stops[n-1][1]
var o=_e(t.stops.map(function(t){return t[0]}),r),a=function(t,e,r,i){var n=i-r,o=t-r
return 0===n?0:1===e?o/n:(Math.pow(e,o)-1)/(Math.pow(e,n)-1)}(r,i,t.stops[o][0],t.stops[o+1][0]),s=t.stops[o][1],l=t.stops[o+1][1],u=be[e.type]||vr
if(t.colorSpace&&"rgb"!==t.colorSpace){var c=Ve[t.colorSpace]
u=function(t,e){return c.reverse(c.interpolate(c.forward(t),c.forward(e),a))}}return"function"==typeof s.evaluate?{evaluate:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e]
var r=s.evaluate.apply(void 0,t),i=l.evaluate.apply(void 0,t)
if(void 0!==r&&void 0!==i)return u(r,i,a)}}:u(s,l,a)}function wr(t,e,r){return"color"===e.type?r=Wt.parse(r):"formatted"===e.type?r=Jt.fromString(r.toString()):"image"===e.type?r=Yt.fromString({name:r.toString(),available:!1}):mr(r)===e.type||"enum"===e.type&&e.values[r]||(r=void 0),_r(r,t.default,e.default)}pe.register(or,{error:[{kind:"error"},[Dt],function(t,e){var r=e[0]
throw new re(r.evaluate(t))}],typeof:[Dt,[Ot],function(t,e){return qt(Qt(e[0].evaluate(t)))}],"to-rgba":[jt(Lt,4),[Rt],function(t,e){return e[0].evaluate(t).toArray()}],rgb:[Rt,[Lt,Lt,Lt],ar],rgba:[Rt,[Lt,Lt,Lt,Lt],ar],has:{type:Bt,overloads:[[[Dt],function(t,e){return sr(e[0].evaluate(t),t.properties())}],[[Dt,Ft],function(t,e){var r=e[0],i=e[1]
return sr(r.evaluate(t),i.evaluate(t))}]]},get:{type:Ot,overloads:[[[Dt],function(t,e){return lr(e[0].evaluate(t),t.properties())}],[[Dt,Ft],function(t,e){var r=e[0],i=e[1]
return lr(r.evaluate(t),i.evaluate(t))}]]},"feature-state":[Ot,[Dt],function(t,e){return lr(e[0].evaluate(t),t.featureState||{})}],properties:[Ft,[],function(t){return t.properties()}],"geometry-type":[Dt,[],function(t){return t.geometryType()}],id:[Ot,[],function(t){return t.id()}],zoom:[Lt,[],function(t){return t.globals.zoom}],"heatmap-density":[Lt,[],function(t){return t.globals.heatmapDensity||0}],"line-progress":[Lt,[],function(t){return t.globals.lineProgress||0}],accumulated:[Ot,[],function(t){return void 0===t.globals.accumulated?null:t.globals.accumulated}],"+":[Lt,ur(Lt),function(t,e){for(var r=0,i=0,n=e;i<n.length;i+=1)r+=n[i].evaluate(t)
return r}],"*":[Lt,ur(Lt),function(t,e){for(var r=1,i=0,n=e;i<n.length;i+=1)r*=n[i].evaluate(t)
return r}],"-":{type:Lt,overloads:[[[Lt,Lt],function(t,e){var r=e[0],i=e[1]
return r.evaluate(t)-i.evaluate(t)}],[[Lt],function(t,e){return-e[0].evaluate(t)}]]},"/":[Lt,[Lt,Lt],function(t,e){var r=e[0],i=e[1]
return r.evaluate(t)/i.evaluate(t)}],"%":[Lt,[Lt,Lt],function(t,e){var r=e[0],i=e[1]
return r.evaluate(t)%i.evaluate(t)}],ln2:[Lt,[],function(){return Math.LN2}],pi:[Lt,[],function(){return Math.PI}],e:[Lt,[],function(){return Math.E}],"^":[Lt,[Lt,Lt],function(t,e){var r=e[0],i=e[1]
return Math.pow(r.evaluate(t),i.evaluate(t))}],sqrt:[Lt,[Lt],function(t,e){var r=e[0]
return Math.sqrt(r.evaluate(t))}],log10:[Lt,[Lt],function(t,e){var r=e[0]
return Math.log(r.evaluate(t))/Math.LN10}],ln:[Lt,[Lt],function(t,e){var r=e[0]
return Math.log(r.evaluate(t))}],log2:[Lt,[Lt],function(t,e){var r=e[0]
return Math.log(r.evaluate(t))/Math.LN2}],sin:[Lt,[Lt],function(t,e){var r=e[0]
return Math.sin(r.evaluate(t))}],cos:[Lt,[Lt],function(t,e){var r=e[0]
return Math.cos(r.evaluate(t))}],tan:[Lt,[Lt],function(t,e){var r=e[0]
return Math.tan(r.evaluate(t))}],asin:[Lt,[Lt],function(t,e){var r=e[0]
return Math.asin(r.evaluate(t))}],acos:[Lt,[Lt],function(t,e){var r=e[0]
return Math.acos(r.evaluate(t))}],atan:[Lt,[Lt],function(t,e){var r=e[0]
return Math.atan(r.evaluate(t))}],min:[Lt,ur(Lt),function(t,e){return Math.min.apply(Math,e.map(function(e){return e.evaluate(t)}))}],max:[Lt,ur(Lt),function(t,e){return Math.max.apply(Math,e.map(function(e){return e.evaluate(t)}))}],abs:[Lt,[Lt],function(t,e){var r=e[0]
return Math.abs(r.evaluate(t))}],round:[Lt,[Lt],function(t,e){var r=e[0].evaluate(t)
return r<0?-Math.round(-r):Math.round(r)}],floor:[Lt,[Lt],function(t,e){var r=e[0]
return Math.floor(r.evaluate(t))}],ceil:[Lt,[Lt],function(t,e){var r=e[0]
return Math.ceil(r.evaluate(t))}],"filter-==":[Bt,[Dt,Ot],function(t,e){var r=e[0],i=e[1]
return t.properties()[r.value]===i.value}],"filter-id-==":[Bt,[Ot],function(t,e){var r=e[0]
return t.id()===r.value}],"filter-type-==":[Bt,[Dt],function(t,e){var r=e[0]
return t.geometryType()===r.value}],"filter-<":[Bt,[Dt,Ot],function(t,e){var r=e[0],i=e[1],n=t.properties()[r.value],o=i.value
return typeof n==typeof o&&n<o}],"filter-id-<":[Bt,[Ot],function(t,e){var r=e[0],i=t.id(),n=r.value
return typeof i==typeof n&&i<n}],"filter->":[Bt,[Dt,Ot],function(t,e){var r=e[0],i=e[1],n=t.properties()[r.value],o=i.value
return typeof n==typeof o&&n>o}],"filter-id->":[Bt,[Ot],function(t,e){var r=e[0],i=t.id(),n=r.value
return typeof i==typeof n&&i>n}],"filter-<=":[Bt,[Dt,Ot],function(t,e){var r=e[0],i=e[1],n=t.properties()[r.value],o=i.value
return typeof n==typeof o&&n<=o}],"filter-id-<=":[Bt,[Ot],function(t,e){var r=e[0],i=t.id(),n=r.value
return typeof i==typeof n&&i<=n}],"filter->=":[Bt,[Dt,Ot],function(t,e){var r=e[0],i=e[1],n=t.properties()[r.value],o=i.value
return typeof n==typeof o&&n>=o}],"filter-id->=":[Bt,[Ot],function(t,e){var r=e[0],i=t.id(),n=r.value
return typeof i==typeof n&&i>=n}],"filter-has":[Bt,[Ot],function(t,e){return e[0].value in t.properties()}],"filter-has-id":[Bt,[],function(t){return null!==t.id()}],"filter-type-in":[Bt,[jt(Dt)],function(t,e){return e[0].value.indexOf(t.geometryType())>=0}],"filter-id-in":[Bt,[jt(Ot)],function(t,e){return e[0].value.indexOf(t.id())>=0}],"filter-in-small":[Bt,[Dt,jt(Ot)],function(t,e){var r=e[0]
return e[1].value.indexOf(t.properties()[r.value])>=0}],"filter-in-large":[Bt,[Dt,jt(Ot)],function(t,e){var r=e[0],i=e[1]
return function(t,e,r,i){for(;r<=i;){var n=r+i>>1
if(e[n]===t)return!0
e[n]>t?i=n-1:r=n+1}return!1}(t.properties()[r.value],i.value,0,i.value.length-1)}],all:{type:Bt,overloads:[[[Bt,Bt],function(t,e){var r=e[0],i=e[1]
return r.evaluate(t)&&i.evaluate(t)}],[ur(Bt),function(t,e){for(var r=0,i=e;r<i.length;r+=1)if(!i[r].evaluate(t))return!1
return!0}]]},any:{type:Bt,overloads:[[[Bt,Bt],function(t,e){var r=e[0],i=e[1]
return r.evaluate(t)||i.evaluate(t)}],[ur(Bt),function(t,e){for(var r=0,i=e;r<i.length;r+=1)if(i[r].evaluate(t))return!0
return!1}]]},"!":[Bt,[Bt],function(t,e){return!e[0].evaluate(t)}],"is-supported-script":[Bt,[Dt],function(t,e){var r=e[0],i=t.globals&&t.globals.isSupportedScript
return!i||i(r.evaluate(t))}],upcase:[Dt,[Dt],function(t,e){return e[0].evaluate(t).toUpperCase()}],downcase:[Dt,[Dt],function(t,e){return e[0].evaluate(t).toLowerCase()}],concat:[Dt,ur(Ot),function(t,e){return e.map(function(e){return te(e.evaluate(t))}).join("")}],"resolved-locale":[Dt,[Ut],function(t,e){return e[0].evaluate(t).resolvedLocale()}]})
var Sr=function(t,e){this.expression=t,this._warningHistory={},this._evaluator=new ce,this._defaultValue=e?function(t){return"color"===t.type&&yr(t.default)?new Wt(0,0,0,0):"color"===t.type?Wt.parse(t.default)||null:void 0===t.default?null:t.default}(e):null,this._enumValues=e&&"enum"===e.type?e.values:null}
function Er(t){return Array.isArray(t)&&t.length>0&&"string"==typeof t[0]&&t[0]in or}function Tr(t,e){var r=new ve(or,[],e?function(t){var e={color:Rt,string:Dt,number:Lt,enum:Dt,boolean:Bt,formatted:Vt,image:Nt}
return"array"===t.type?jt(e[t.value]||Ot,t.length):e[t.type]}(e):void 0),i=r.parse(t,void 0,void 0,void 0,e&&"string"===e.type?{typeAnnotation:"coerce"}:void 0)
return i?cr(new Sr(i,e)):pr(r.errors)}Sr.prototype.evaluateWithoutErrorHandling=function(t,e,r,i,n){return this._evaluator.globals=t,this._evaluator.feature=e,this._evaluator.featureState=r,this._evaluator.availableImages=i||null,this._evaluator.formattedSection=n,this.expression.evaluate(this._evaluator)},Sr.prototype.evaluate=function(t,e,r,i,n){this._evaluator.globals=t,this._evaluator.feature=e||null,this._evaluator.featureState=r||null,this._evaluator.availableImages=i||null,this._evaluator.formattedSection=n||null
try{var o=this.expression.evaluate(this._evaluator)
if(null==o)return this._defaultValue
if(this._enumValues&&!(o in this._enumValues))throw new re("Expected value to be one of "+Object.keys(this._enumValues).map(function(t){return JSON.stringify(t)}).join(", ")+", but found "+JSON.stringify(o)+" instead.")
return o}catch(t){return this._warningHistory[t.message]||(this._warningHistory[t.message]=!0,"undefined"!=typeof console&&console.warn(t.message)),this._defaultValue}}
var Ar=function(t,e){this.kind=t,this._styleExpression=e,this.isStateDependent="constant"!==t&&!de(e.expression)}
Ar.prototype.evaluateWithoutErrorHandling=function(t,e,r,i,n){return this._styleExpression.evaluateWithoutErrorHandling(t,e,r,i,n)},Ar.prototype.evaluate=function(t,e,r,i,n){return this._styleExpression.evaluate(t,e,r,i,n)}
var Ir=function(t,e,r,i){this.kind=t,this.zoomStops=r,this._styleExpression=e,this.isStateDependent="camera"!==t&&!de(e.expression),this.interpolationType=i}
function kr(t,e){if("error"===(t=Tr(t,e)).result)return t
var r=t.value.expression,i=fe(r)
if(!i&&!hr(e))return pr([new Ct("","data expressions not supported")])
var n=me(r,["zoom"])
if(!n&&!fr(e))return pr([new Ct("","zoom expressions not supported")])
var o=function t(e){var r=null
if(e instanceof Ze)r=t(e.result)
else if(e instanceof qe)for(var i=0,n=e.args;i<n.length;i+=1){var o=n[i]
if(r=t(o))break}else(e instanceof ge||e instanceof Ne)&&e.input instanceof pe&&"zoom"===e.input.name&&(r=e)
return r instanceof Ct?r:(e.eachChild(function(e){var i=t(e)
i instanceof Ct?r=i:!r&&i?r=new Ct("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.'):r&&i&&r!==i&&(r=new Ct("",'Only one zoom-based "step" or "interpolate" subexpression may be used in an expression.'))}),r)}(r)
if(!o&&!n)return pr([new Ct("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.')])
if(o instanceof Ct)return pr([o])
if(o instanceof Ne&&!dr(e))return pr([new Ct("",'"interpolate" expressions cannot be used with this property')])
if(!o)return cr(new Ar(i?"constant":"source",t.value))
var a=o instanceof Ne?o.interpolation:void 0
return cr(new Ir(i?"camera":"composite",t.value,o.labels,a))}Ir.prototype.evaluateWithoutErrorHandling=function(t,e,r,i,n){return this._styleExpression.evaluateWithoutErrorHandling(t,e,r,i,n)},Ir.prototype.evaluate=function(t,e,r,i,n){return this._styleExpression.evaluate(t,e,r,i,n)},Ir.prototype.interpolationFactor=function(t,e,r){return this.interpolationType?Ne.interpolationFactor(this.interpolationType,t,e,r):0}
var zr=function(t,e){this._parameters=t,this._specification=e,At(this,function t(e,r){var i,n,o,a="color"===r.type,s=e.stops&&"object"==typeof e.stops[0][0],l=s||void 0!==e.property,u=s||!l,c=e.type||(dr(r)?"exponential":"interval")
if(a&&((e=At({},e)).stops&&(e.stops=e.stops.map(function(t){return[t[0],Wt.parse(t[1])]})),e.default?e.default=Wt.parse(e.default):e.default=Wt.parse(r.default)),e.colorSpace&&"rgb"!==e.colorSpace&&!Ve[e.colorSpace])throw new Error("Unknown color space: "+e.colorSpace)
if("exponential"===c)i=br
else if("interval"===c)i=xr
else if("categorical"===c){i=gr,n=Object.create(null)
for(var p=0,h=e.stops;p<h.length;p+=1){var f=h[p]
n[f[0]]=f[1]}o=typeof e.stops[0][0]}else{if("identity"!==c)throw new Error('Unknown function type "'+c+'"')
i=wr}if(s){for(var d={},m=[],y=0;y<e.stops.length;y++){var v=e.stops[y],_=v[0].zoom
void 0===d[_]&&(d[_]={zoom:_,type:e.type,property:e.property,default:e.default,stops:[]},m.push(_)),d[_].stops.push([v[0].value,v[1]])}for(var g=[],x=0,b=m;x<b.length;x+=1){var w=b[x]
g.push([d[w].zoom,t(d[w],r)])}var S={name:"linear"}
return{kind:"composite",interpolationType:S,interpolationFactor:Ne.interpolationFactor.bind(void 0,S),zoomStops:g.map(function(t){return t[0]}),evaluate:function(t,i){var n=t.zoom
return br({stops:g,base:e.base},r,n).evaluate(n,i)}}}if(u){var E="exponential"===c?{name:"exponential",base:void 0!==e.base?e.base:1}:null
return{kind:"camera",interpolationType:E,interpolationFactor:Ne.interpolationFactor.bind(void 0,E),zoomStops:e.stops.map(function(t){return t[0]}),evaluate:function(t){var a=t.zoom
return i(e,r,a,n,o)}}}return{kind:"source",evaluate:function(t,a){var s=a&&a.properties?a.properties[e.property]:void 0
return void 0===s?_r(e.default,r.default):i(e,r,s,n,o)}}}(this._parameters,this._specification))}
function Cr(t){var e=t.key,r=t.value,i=t.valueSpec||{},n=t.objectElementValidators||{},o=t.style,a=t.styleSpec,s=[],l=mr(r)
if("object"!==l)return[new Et(e,r,"object expected, "+l+" found")]
for(var u in r){var c=u.split(".")[0],p=i[c]||i["*"],h=void 0
if(n[c])h=n[c]
else if(i[c])h=ti
else if(n["*"])h=n["*"]
else{if(!i["*"]){s.push(new Et(e,r[u],'unknown property "'+u+'"'))
continue}h=ti}s=s.concat(h({key:(e?e+".":e)+u,value:r[u],valueSpec:p,style:o,styleSpec:a,object:r,objectKey:u},r))}for(var f in i)n[f]||i[f].required&&void 0===i[f].default&&void 0===r[f]&&s.push(new Et(e,r,'missing required property "'+f+'"'))
return s}function Pr(t){var e=t.value,r=t.valueSpec,i=t.style,n=t.styleSpec,o=t.key,a=t.arrayElementValidator||ti
if("array"!==mr(e))return[new Et(o,e,"array expected, "+mr(e)+" found")]
if(r.length&&e.length!==r.length)return[new Et(o,e,"array length "+r.length+" expected, length "+e.length+" found")]
if(r["min-length"]&&e.length<r["min-length"])return[new Et(o,e,"array length at least "+r["min-length"]+" expected, length "+e.length+" found")]
var s={type:r.value,values:r.values}
n.$version<7&&(s.function=r.function),"object"===mr(r.value)&&(s=r.value)
for(var l=[],u=0;u<e.length;u++)l=l.concat(a({array:e,arrayIndex:u,value:e[u],valueSpec:s,style:i,styleSpec:n,key:o+"["+u+"]"}))
return l}function Mr(t){var e=t.key,r=t.value,i=t.valueSpec,n=mr(r)
return"number"!==n?[new Et(e,r,"number expected, "+n+" found")]:"minimum"in i&&r<i.minimum?[new Et(e,r,r+" is less than the minimum value "+i.minimum)]:"maximum"in i&&r>i.maximum?[new Et(e,r,r+" is greater than the maximum value "+i.maximum)]:[]}function Lr(t){var e,r,i,n=t.valueSpec,o=kt(t.value.type),a={},s="categorical"!==o&&void 0===t.value.property,l=!s,u="array"===mr(t.value.stops)&&"array"===mr(t.value.stops[0])&&"object"===mr(t.value.stops[0][0]),c=Cr({key:t.key,value:t.value,valueSpec:t.styleSpec.function,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{stops:function(t){if("identity"===o)return[new Et(t.key,t.value,'identity function may not have a "stops" property')]
var e=[],r=t.value
return e=e.concat(Pr({key:t.key,value:r,valueSpec:t.valueSpec,style:t.style,styleSpec:t.styleSpec,arrayElementValidator:p})),"array"===mr(r)&&0===r.length&&e.push(new Et(t.key,r,"array must have at least one stop")),e},default:function(t){return ti({key:t.key,value:t.value,valueSpec:n,style:t.style,styleSpec:t.styleSpec})}}})
return"identity"===o&&s&&c.push(new Et(t.key,t.value,'missing required property "property"')),"identity"===o||t.value.stops||c.push(new Et(t.key,t.value,'missing required property "stops"')),"exponential"===o&&t.valueSpec.expression&&!dr(t.valueSpec)&&c.push(new Et(t.key,t.value,"exponential functions not supported")),t.styleSpec.$version>=8&&(l&&!hr(t.valueSpec)?c.push(new Et(t.key,t.value,"property functions not supported")):s&&!fr(t.valueSpec)&&c.push(new Et(t.key,t.value,"zoom functions not supported"))),"categorical"!==o&&!u||void 0!==t.value.property||c.push(new Et(t.key,t.value,'"property" property is required')),c
function p(t){var e=[],o=t.value,s=t.key
if("array"!==mr(o))return[new Et(s,o,"array expected, "+mr(o)+" found")]
if(2!==o.length)return[new Et(s,o,"array length 2 expected, length "+o.length+" found")]
if(u){if("object"!==mr(o[0]))return[new Et(s,o,"object expected, "+mr(o[0])+" found")]
if(void 0===o[0].zoom)return[new Et(s,o,"object stop key must have zoom")]
if(void 0===o[0].value)return[new Et(s,o,"object stop key must have value")]
if(i&&i>kt(o[0].zoom))return[new Et(s,o[0].zoom,"stop zoom values must appear in ascending order")]
kt(o[0].zoom)!==i&&(i=kt(o[0].zoom),r=void 0,a={}),e=e.concat(Cr({key:s+"[0]",value:o[0],valueSpec:{zoom:{}},style:t.style,styleSpec:t.styleSpec,objectElementValidators:{zoom:Mr,value:h}}))}else e=e.concat(h({key:s+"[0]",value:o[0],valueSpec:{},style:t.style,styleSpec:t.styleSpec},o))
return Er(zt(o[1]))?e.concat([new Et(s+"[1]",o[1],"expressions are not allowed in function stops.")]):e.concat(ti({key:s+"[1]",value:o[1],valueSpec:n,style:t.style,styleSpec:t.styleSpec}))}function h(t,i){var s=mr(t.value),l=kt(t.value),u=null!==t.value?t.value:i
if(e){if(s!==e)return[new Et(t.key,u,s+" stop domain type must match previous stop domain type "+e)]}else e=s
if("number"!==s&&"string"!==s&&"boolean"!==s)return[new Et(t.key,u,"stop domain value must be a number, string, or boolean")]
if("number"!==s&&"categorical"!==o){var c="number expected, "+s+" found"
return hr(n)&&void 0===o&&(c+='\nIf you intended to use a categorical function, specify `"type": "categorical"`.'),[new Et(t.key,u,c)]}return"categorical"!==o||"number"!==s||isFinite(l)&&Math.floor(l)===l?"categorical"!==o&&"number"===s&&void 0!==r&&l<r?[new Et(t.key,u,"stop domain values must appear in ascending order")]:(r=l,"categorical"===o&&l in a?[new Et(t.key,u,"stop domain values must be unique")]:(a[l]=!0,[])):[new Et(t.key,u,"integer expected, found "+l)]}}function Dr(t){var e=("property"===t.expressionContext?kr:Tr)(zt(t.value),t.valueSpec)
if("error"===e.result)return e.value.map(function(e){return new Et(""+t.key+e.key,t.value,e.message)})
var r=e.value.expression||e.value._styleExpression.expression
if("property"===t.expressionContext&&"text-font"===t.propertyKey&&-1!==r.possibleOutputs().indexOf(void 0))return[new Et(t.key,t.value,'Invalid data expression for "'+t.propertyKey+'". Output values must be contained as literals within the expression.')]
if("property"===t.expressionContext&&"layout"===t.propertyType&&!de(r))return[new Et(t.key,t.value,'"feature-state" data expressions are not supported with layout properties.')]
if("filter"===t.expressionContext&&!de(r))return[new Et(t.key,t.value,'"feature-state" data expressions are not supported with filters.')]
if(t.expressionContext&&0===t.expressionContext.indexOf("cluster")){if(!me(r,["zoom","feature-state"]))return[new Et(t.key,t.value,'"zoom" and "feature-state" expressions are not supported with cluster properties.')]
if("cluster-initial"===t.expressionContext&&!fe(r))return[new Et(t.key,t.value,"Feature data expressions are not supported with initial expression part of cluster properties.")]}return[]}function Br(t){var e=t.key,r=t.value,i=t.valueSpec,n=[]
return Array.isArray(i.values)?-1===i.values.indexOf(kt(r))&&n.push(new Et(e,r,"expected one of ["+i.values.join(", ")+"], "+JSON.stringify(r)+" found")):-1===Object.keys(i.values).indexOf(kt(r))&&n.push(new Et(e,r,"expected one of ["+Object.keys(i.values).join(", ")+"], "+JSON.stringify(r)+" found")),n}function Rr(t){if(!0===t||!1===t)return!0
if(!Array.isArray(t)||0===t.length)return!1
switch(t[0]){case"has":return t.length>=2&&"$id"!==t[1]&&"$type"!==t[1]
case"in":case"!in":case"!has":case"none":return!1
case"==":case"!=":case">":case">=":case"<":case"<=":return 3!==t.length||Array.isArray(t[1])||Array.isArray(t[2])
case"any":case"all":for(var e=0,r=t.slice(1);e<r.length;e+=1){var i=r[e]
if(!Rr(i)&&"boolean"!=typeof i)return!1}return!0
default:return!0}}zr.deserialize=function(t){return new zr(t._parameters,t._specification)},zr.serialize=function(t){return{_parameters:t._parameters,_specification:t._specification}}
var Fr={type:"boolean",default:!1,transition:!1,"property-type":"data-driven",expression:{interpolated:!1,parameters:["zoom","feature"]}}
function Or(t){if(null==t)return function(){return!0}
Rr(t)||(t=Vr(t))
var e=Tr(t,Fr)
if("error"===e.result)throw new Error(e.value.map(function(t){return t.key+": "+t.message}).join(", "))
return function(t,r){return e.value.evaluate(t,r)}}function Ur(t,e){return t<e?-1:t>e?1:0}function Vr(t){if(!t)return!0
var e,r=t[0]
return t.length<=1?"any"!==r:"=="===r?Nr(t[1],t[2],"=="):"!="===r?Zr(Nr(t[1],t[2],"==")):"<"===r||">"===r||"<="===r||">="===r?Nr(t[1],t[2],r):"any"===r?(e=t.slice(1),["any"].concat(e.map(Vr))):"all"===r?["all"].concat(t.slice(1).map(Vr)):"none"===r?["all"].concat(t.slice(1).map(Vr).map(Zr)):"in"===r?jr(t[1],t.slice(2)):"!in"===r?Zr(jr(t[1],t.slice(2))):"has"===r?qr(t[1]):"!has"!==r||Zr(qr(t[1]))}function Nr(t,e,r){switch(t){case"$type":return["filter-type-"+r,e]
case"$id":return["filter-id-"+r,e]
default:return["filter-"+r,t,e]}}function jr(t,e){if(0===e.length)return!1
switch(t){case"$type":return["filter-type-in",["literal",e]]
case"$id":return["filter-id-in",["literal",e]]
default:return e.length>200&&!e.some(function(t){return typeof t!=typeof e[0]})?["filter-in-large",t,["literal",e.sort(Ur)]]:["filter-in-small",t,["literal",e]]}}function qr(t){switch(t){case"$type":return!0
case"$id":return["filter-has-id"]
default:return["filter-has",t]}}function Zr(t){return["!",t]}function Gr(t){return Rr(zt(t.value))?Dr(At({},t,{expressionContext:"filter",valueSpec:{value:"boolean"}})):function t(e){var r=e.value,i=e.key
if("array"!==mr(r))return[new Et(i,r,"array expected, "+mr(r)+" found")]
var n,o=e.styleSpec,a=[]
if(r.length<1)return[new Et(i,r,"filter array must have at least 1 element")]
switch(a=a.concat(Br({key:i+"[0]",value:r[0],valueSpec:o.filter_operator,style:e.style,styleSpec:e.styleSpec})),kt(r[0])){case"<":case"<=":case">":case">=":r.length>=2&&"$type"===kt(r[1])&&a.push(new Et(i,r,'"$type" cannot be use with operator "'+r[0]+'"'))
case"==":case"!=":3!==r.length&&a.push(new Et(i,r,'filter array for operator "'+r[0]+'" must have 3 elements'))
case"in":case"!in":r.length>=2&&"string"!==(n=mr(r[1]))&&a.push(new Et(i+"[1]",r[1],"string expected, "+n+" found"))
for(var s=2;s<r.length;s++)n=mr(r[s]),"$type"===kt(r[1])?a=a.concat(Br({key:i+"["+s+"]",value:r[s],valueSpec:o.geometry_type,style:e.style,styleSpec:e.styleSpec})):"string"!==n&&"number"!==n&&"boolean"!==n&&a.push(new Et(i+"["+s+"]",r[s],"string, number, or boolean expected, "+n+" found"))
break
case"any":case"all":case"none":for(var l=1;l<r.length;l++)a=a.concat(t({key:i+"["+l+"]",value:r[l],style:e.style,styleSpec:e.styleSpec}))
break
case"has":case"!has":n=mr(r[1]),2!==r.length?a.push(new Et(i,r,'filter array for "'+r[0]+'" operator must have 2 elements')):"string"!==n&&a.push(new Et(i+"[1]",r[1],"string expected, "+n+" found"))}return a}(t)}function Xr(t,e){var r=t.key,i=t.style,n=t.styleSpec,o=t.value,a=t.objectKey,s=n[e+"_"+t.layerType]
if(!s)return[]
var l=a.match(/^(.*)-transition$/)
if("paint"===e&&l&&s[l[1]]&&s[l[1]].transition)return ti({key:r,value:o,valueSpec:n.transition,style:i,styleSpec:n})
var u,c=t.valueSpec||s[a]
if(!c)return[new Et(r,o,'unknown property "'+a+'"')]
if("string"===mr(o)&&hr(c)&&!c.tokens&&(u=/^{([^}]+)}$/.exec(o)))return[new Et(r,o,'"'+a+'" does not support interpolation syntax\nUse an identity property function instead: `{ "type": "identity", "property": '+JSON.stringify(u[1])+" }`.")]
var p=[]
return"symbol"===t.layerType&&("text-field"===a&&i&&!i.glyphs&&p.push(new Et(r,o,'use of "text-field" requires a style "glyphs" property')),"text-font"===a&&yr(zt(o))&&"identity"===kt(o.type)&&p.push(new Et(r,o,'"text-font" does not support identity functions'))),p.concat(ti({key:t.key,value:o,valueSpec:c,style:i,styleSpec:n,expressionContext:"property",propertyType:e,propertyKey:a}))}function Wr(t){return Xr(t,"paint")}function Kr(t){return Xr(t,"layout")}function Hr(t){var e=[],r=t.value,i=t.key,n=t.style,o=t.styleSpec
r.type||r.ref||e.push(new Et(i,r,'either "type" or "ref" is required'))
var a,s=kt(r.type),l=kt(r.ref)
if(r.id)for(var u=kt(r.id),c=0;c<t.arrayIndex;c++){var p=n.layers[c]
kt(p.id)===u&&e.push(new Et(i,r.id,'duplicate layer id "'+r.id+'", previously used at line '+p.id.__line__))}if("ref"in r)["type","source","source-layer","filter","layout"].forEach(function(t){t in r&&e.push(new Et(i,r[t],'"'+t+'" is prohibited for ref layers'))}),n.layers.forEach(function(t){kt(t.id)===l&&(a=t)}),a?a.ref?e.push(new Et(i,r.ref,"ref cannot reference another ref layer")):s=kt(a.type):e.push(new Et(i,r.ref,'ref layer "'+l+'" not found'))
else if("background"!==s)if(r.source){var h=n.sources&&n.sources[r.source],f=h&&kt(h.type)
h?"vector"===f&&"raster"===s?e.push(new Et(i,r.source,'layer "'+r.id+'" requires a raster source')):"raster"===f&&"raster"!==s?e.push(new Et(i,r.source,'layer "'+r.id+'" requires a vector source')):"vector"!==f||r["source-layer"]?"raster-dem"===f&&"hillshade"!==s?e.push(new Et(i,r.source,"raster-dem source can only be used with layer type 'hillshade'.")):"line"!==s||!r.paint||!r.paint["line-gradient"]||"geojson"===f&&h.lineMetrics||e.push(new Et(i,r,'layer "'+r.id+'" specifies a line-gradient, which requires a GeoJSON source with `lineMetrics` enabled.')):e.push(new Et(i,r,'layer "'+r.id+'" must specify a "source-layer"')):e.push(new Et(i,r.source,'source "'+r.source+'" not found'))}else e.push(new Et(i,r,'missing required property "source"'))
return e=e.concat(Cr({key:i,value:r,valueSpec:o.layer,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":function(){return[]},type:function(){return ti({key:i+".type",value:r.type,valueSpec:o.layer.type,style:t.style,styleSpec:t.styleSpec,object:r,objectKey:"type"})},filter:Gr,layout:function(t){return Cr({layer:r,key:t.key,value:t.value,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":function(t){return Kr(At({layerType:s},t))}}})},paint:function(t){return Cr({layer:r,key:t.key,value:t.value,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":function(t){return Wr(At({layerType:s},t))}}})}}}))}function Jr(t){var e=t.value,r=t.key,i=t.styleSpec,n=t.style
if(!e.type)return[new Et(r,e,'"type" is required')]
var o,a=kt(e.type)
switch(a){case"vector":case"raster":case"raster-dem":return Cr({key:r,value:e,valueSpec:i["source_"+a.replace("-","_")],style:t.style,styleSpec:i})
case"geojson":if(o=Cr({key:r,value:e,valueSpec:i.source_geojson,style:n,styleSpec:i}),e.cluster)for(var s in e.clusterProperties){var l=e.clusterProperties[s],u=l[0],c=l[1],p="string"==typeof u?[u,["accumulated"],["get",s]]:u
o.push.apply(o,Dr({key:r+"."+s+".map",value:c,expressionContext:"cluster-map"})),o.push.apply(o,Dr({key:r+"."+s+".reduce",value:p,expressionContext:"cluster-reduce"}))}return o
case"video":return Cr({key:r,value:e,valueSpec:i.source_video,style:n,styleSpec:i})
case"image":return Cr({key:r,value:e,valueSpec:i.source_image,style:n,styleSpec:i})
case"canvas":return[new Et(r,null,"Please use runtime APIs to add canvas sources, rather than including them in stylesheets.","source.canvas")]
default:return Br({key:r+".type",value:e.type,valueSpec:{values:["vector","raster","raster-dem","geojson","video","image"]},style:n,styleSpec:i})}}function Yr(t){var e=t.value,r=t.styleSpec,i=r.light,n=t.style,o=[],a=mr(e)
if(void 0===e)return o
if("object"!==a)return o.concat([new Et("light",e,"object expected, "+a+" found")])
for(var s in e){var l=s.match(/^(.*)-transition$/)
o=l&&i[l[1]]&&i[l[1]].transition?o.concat(ti({key:s,value:e[s],valueSpec:r.transition,style:n,styleSpec:r})):i[s]?o.concat(ti({key:s,value:e[s],valueSpec:i[s],style:n,styleSpec:r})):o.concat([new Et(s,e[s],'unknown property "'+s+'"')])}return o}function $r(t){var e=t.value,r=t.key,i=mr(e)
return"string"!==i?[new Et(r,e,"string expected, "+i+" found")]:[]}var Qr={"*":function(){return[]},array:Pr,boolean:function(t){var e=t.value,r=t.key,i=mr(e)
return"boolean"!==i?[new Et(r,e,"boolean expected, "+i+" found")]:[]},number:Mr,color:function(t){var e=t.key,r=t.value,i=mr(r)
return"string"!==i?[new Et(e,r,"color expected, "+i+" found")]:null===Xt(r)?[new Et(e,r,'color expected, "'+r+'" found')]:[]},constants:Tt,enum:Br,filter:Gr,function:Lr,layer:Hr,object:Cr,source:Jr,light:Yr,string:$r,formatted:function(t){return 0===$r(t).length?[]:Dr(t)},image:function(t){return 0===$r(t).length?[]:Dr(t)}}
function ti(t){var e=t.value,r=t.valueSpec,i=t.styleSpec
return r.expression&&yr(kt(e))?Lr(t):r.expression&&Er(zt(e))?Dr(t):r.type&&Qr[r.type]?Qr[r.type](t):Cr(At({},t,{valueSpec:r.type?i[r.type]:r}))}function ei(t){var e=t.value,r=t.key,i=$r(t)
return i.length?i:(-1===e.indexOf("{fontstack}")&&i.push(new Et(r,e,'"glyphs" url must include a "{fontstack}" token')),-1===e.indexOf("{range}")&&i.push(new Et(r,e,'"glyphs" url must include a "{range}" token')),i)}function ri(t,e){void 0===e&&(e=St)
var r=[]
return r=r.concat(ti({key:"",value:t,valueSpec:e.$root,styleSpec:e,style:t,objectElementValidators:{glyphs:ei,"*":function(){return[]}}})),t.constants&&(r=r.concat(Tt({key:"constants",value:t.constants,style:t,styleSpec:e}))),ii(r)}function ii(t){return[].concat(t).sort(function(t,e){return t.line-e.line})}function ni(t){return function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r]
return ii(t.apply(this,e))}}ri.source=ni(Jr),ri.light=ni(Yr),ri.layer=ni(Hr),ri.filter=ni(Gr),ri.paintProperty=ni(Wr),ri.layoutProperty=ni(Kr)
var oi=ri,ai=oi.light,si=oi.paintProperty,li=oi.layoutProperty
function ui(t,e){var r=!1
if(e&&e.length)for(var i=0,n=e;i<n.length;i+=1){var o=n[i]
t.fire(new bt(new Error(o.message))),r=!0}return r}var ci=hi,pi=3
function hi(t,e,r){var i=this.cells=[]
if(t instanceof ArrayBuffer){this.arrayBuffer=t
var n=new Int32Array(this.arrayBuffer)
t=n[0],e=n[1],r=n[2],this.d=e+2*r
for(var o=0;o<this.d*this.d;o++){var a=n[pi+o],s=n[pi+o+1]
i.push(a===s?null:n.subarray(a,s))}var l=n[pi+i.length],u=n[pi+i.length+1]
this.keys=n.subarray(l,u),this.bboxes=n.subarray(u),this.insert=this._insertReadonly}else{this.d=e+2*r
for(var c=0;c<this.d*this.d;c++)i.push([])
this.keys=[],this.bboxes=[]}this.n=e,this.extent=t,this.padding=r,this.scale=e/t,this.uid=0
var p=r/e*t
this.min=-p,this.max=t+p}hi.prototype.insert=function(t,e,r,i,n){this._forEachCell(e,r,i,n,this._insertCell,this.uid++),this.keys.push(t),this.bboxes.push(e),this.bboxes.push(r),this.bboxes.push(i),this.bboxes.push(n)},hi.prototype._insertReadonly=function(){throw"Cannot insert into a GridIndex created from an ArrayBuffer."},hi.prototype._insertCell=function(t,e,r,i,n,o){this.cells[n].push(o)},hi.prototype.query=function(t,e,r,i,n){var o=this.min,a=this.max
if(t<=o&&e<=o&&a<=r&&a<=i&&!n)return Array.prototype.slice.call(this.keys)
var s=[]
return this._forEachCell(t,e,r,i,this._queryCell,s,{},n),s},hi.prototype._queryCell=function(t,e,r,i,n,o,a,s){var l=this.cells[n]
if(null!==l)for(var u=this.keys,c=this.bboxes,p=0;p<l.length;p++){var h=l[p]
if(void 0===a[h]){var f=4*h;(s?s(c[f+0],c[f+1],c[f+2],c[f+3]):t<=c[f+2]&&e<=c[f+3]&&r>=c[f+0]&&i>=c[f+1])?(a[h]=!0,o.push(u[h])):a[h]=!1}}},hi.prototype._forEachCell=function(t,e,r,i,n,o,a,s){for(var l=this._convertToCellCoord(t),u=this._convertToCellCoord(e),c=this._convertToCellCoord(r),p=this._convertToCellCoord(i),h=l;h<=c;h++)for(var f=u;f<=p;f++){var d=this.d*f+h
if((!s||s(this._convertFromCellCoord(h),this._convertFromCellCoord(f),this._convertFromCellCoord(h+1),this._convertFromCellCoord(f+1)))&&n.call(this,t,e,r,i,d,o,a,s))return}},hi.prototype._convertFromCellCoord=function(t){return(t-this.padding)/this.scale},hi.prototype._convertToCellCoord=function(t){return Math.max(0,Math.min(this.d-1,Math.floor(t*this.scale)+this.padding))},hi.prototype.toArrayBuffer=function(){if(this.arrayBuffer)return this.arrayBuffer
for(var t=this.cells,e=pi+this.cells.length+1+1,r=0,i=0;i<this.cells.length;i++)r+=this.cells[i].length
var n=new Int32Array(e+r+this.keys.length+this.bboxes.length)
n[0]=this.extent,n[1]=this.n,n[2]=this.padding
for(var o=e,a=0;a<t.length;a++){var s=t[a]
n[pi+a]=o,n.set(s,o),o+=s.length}return n[pi+t.length]=o,n.set(this.keys,o),o+=this.keys.length,n[pi+t.length+1]=o,n.set(this.bboxes,o),o+=this.bboxes.length,n.buffer}
var fi=self.ImageData,di={}
function mi(t,e,r){void 0===r&&(r={}),Object.defineProperty(e,"_classRegistryKey",{value:t,writeable:!1}),di[t]={klass:e,omit:r.omit||[],shallow:r.shallow||[]}}for(var yi in mi("Object",Object),ci.serialize=function(t,e){var r=t.toArrayBuffer()
return e&&e.push(r),{buffer:r}},ci.deserialize=function(t){return new ci(t.buffer)},mi("Grid",ci),mi("Color",Wt),mi("Error",Error),mi("StylePropertyFunction",zr),mi("StyleExpression",Sr,{omit:["_evaluator"]}),mi("ZoomDependentExpression",Ir),mi("ZoomConstantExpression",Ar),mi("CompoundExpression",pe,{omit:["_evaluate"]}),or)or[yi]._classRegistryKey||mi("Expression_"+yi,or[yi])
function vi(t,e){if(null==t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||t instanceof Boolean||t instanceof Number||t instanceof String||t instanceof Date||t instanceof RegExp)return t
if(t instanceof ArrayBuffer)return e&&e.push(t),t
if(ArrayBuffer.isView(t)){var r=t
return e&&e.push(r.buffer),r}if(t instanceof fi)return e&&e.push(t.data.buffer),t
if(Array.isArray(t)){for(var i=[],n=0,o=t;n<o.length;n+=1){var a=o[n]
i.push(vi(a,e))}return i}if("object"==typeof t){var s=t.constructor,l=s._classRegistryKey
if(!l)throw new Error("can't serialize object of unregistered class")
var u=s.serialize?s.serialize(t,e):{}
if(!s.serialize){for(var c in t)if(t.hasOwnProperty(c)&&!(di[l].omit.indexOf(c)>=0)){var p=t[c]
u[c]=di[l].shallow.indexOf(c)>=0?p:vi(p,e)}t instanceof Error&&(u.message=t.message)}if(u.$name)throw new Error("$name property is reserved for worker serialization logic.")
return"Object"!==l&&(u.$name=l),u}throw new Error("can't serialize object of type "+typeof t)}function _i(t){if(null==t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||t instanceof Boolean||t instanceof Number||t instanceof String||t instanceof Date||t instanceof RegExp||t instanceof ArrayBuffer||ArrayBuffer.isView(t)||t instanceof fi)return t
if(Array.isArray(t))return t.map(_i)
if("object"==typeof t){var e=t.$name||"Object",r=di[e].klass
if(!r)throw new Error("can't deserialize unregistered class "+e)
if(r.deserialize)return r.deserialize(t)
for(var i=Object.create(r.prototype),n=0,o=Object.keys(t);n<o.length;n+=1){var a=o[n]
if("$name"!==a){var s=t[a]
i[a]=di[e].shallow.indexOf(a)>=0?s:_i(s)}}return i}throw new Error("can't deserialize object of type "+typeof t)}var gi=function(){this.first=!0}
gi.prototype.update=function(t,e){var r=Math.floor(t)
return this.first?(this.first=!1,this.lastIntegerZoom=r,this.lastIntegerZoomTime=0,this.lastZoom=t,this.lastFloorZoom=r,!0):(this.lastFloorZoom>r?(this.lastIntegerZoom=r+1,this.lastIntegerZoomTime=e):this.lastFloorZoom<r&&(this.lastIntegerZoom=r,this.lastIntegerZoomTime=e),t!==this.lastZoom&&(this.lastZoom=t,this.lastFloorZoom=r,!0))}
var xi={"Latin-1 Supplement":function(t){return t>=128&&t<=255},Arabic:function(t){return t>=1536&&t<=1791},"Arabic Supplement":function(t){return t>=1872&&t<=1919},"Arabic Extended-A":function(t){return t>=2208&&t<=2303},"Hangul Jamo":function(t){return t>=4352&&t<=4607},"Unified Canadian Aboriginal Syllabics":function(t){return t>=5120&&t<=5759},Khmer:function(t){return t>=6016&&t<=6143},"Unified Canadian Aboriginal Syllabics Extended":function(t){return t>=6320&&t<=6399},"General Punctuation":function(t){return t>=8192&&t<=8303},"Letterlike Symbols":function(t){return t>=8448&&t<=8527},"Number Forms":function(t){return t>=8528&&t<=8591},"Miscellaneous Technical":function(t){return t>=8960&&t<=9215},"Control Pictures":function(t){return t>=9216&&t<=9279},"Optical Character Recognition":function(t){return t>=9280&&t<=9311},"Enclosed Alphanumerics":function(t){return t>=9312&&t<=9471},"Geometric Shapes":function(t){return t>=9632&&t<=9727},"Miscellaneous Symbols":function(t){return t>=9728&&t<=9983},"Miscellaneous Symbols and Arrows":function(t){return t>=11008&&t<=11263},"CJK Radicals Supplement":function(t){return t>=11904&&t<=12031},"Kangxi Radicals":function(t){return t>=12032&&t<=12255},"Ideographic Description Characters":function(t){return t>=12272&&t<=12287},"CJK Symbols and Punctuation":function(t){return t>=12288&&t<=12351},Hiragana:function(t){return t>=12352&&t<=12447},Katakana:function(t){return t>=12448&&t<=12543},Bopomofo:function(t){return t>=12544&&t<=12591},"Hangul Compatibility Jamo":function(t){return t>=12592&&t<=12687},Kanbun:function(t){return t>=12688&&t<=12703},"Bopomofo Extended":function(t){return t>=12704&&t<=12735},"CJK Strokes":function(t){return t>=12736&&t<=12783},"Katakana Phonetic Extensions":function(t){return t>=12784&&t<=12799},"Enclosed CJK Letters and Months":function(t){return t>=12800&&t<=13055},"CJK Compatibility":function(t){return t>=13056&&t<=13311},"CJK Unified Ideographs Extension A":function(t){return t>=13312&&t<=19903},"Yijing Hexagram Symbols":function(t){return t>=19904&&t<=19967},"CJK Unified Ideographs":function(t){return t>=19968&&t<=40959},"Yi Syllables":function(t){return t>=40960&&t<=42127},"Yi Radicals":function(t){return t>=42128&&t<=42191},"Hangul Jamo Extended-A":function(t){return t>=43360&&t<=43391},"Hangul Syllables":function(t){return t>=44032&&t<=55215},"Hangul Jamo Extended-B":function(t){return t>=55216&&t<=55295},"Private Use Area":function(t){return t>=57344&&t<=63743},"CJK Compatibility Ideographs":function(t){return t>=63744&&t<=64255},"Arabic Presentation Forms-A":function(t){return t>=64336&&t<=65023},"Vertical Forms":function(t){return t>=65040&&t<=65055},"CJK Compatibility Forms":function(t){return t>=65072&&t<=65103},"Small Form Variants":function(t){return t>=65104&&t<=65135},"Arabic Presentation Forms-B":function(t){return t>=65136&&t<=65279},"Halfwidth and Fullwidth Forms":function(t){return t>=65280&&t<=65519}}
function bi(t){for(var e=0,r=t;e<r.length;e+=1)if(Si(r[e].charCodeAt(0)))return!0
return!1}function wi(t){return!(xi.Arabic(t)||xi["Arabic Supplement"](t)||xi["Arabic Extended-A"](t)||xi["Arabic Presentation Forms-A"](t)||xi["Arabic Presentation Forms-B"](t))}function Si(t){return!(746!==t&&747!==t&&(t<4352||!(xi["Bopomofo Extended"](t)||xi.Bopomofo(t)||xi["CJK Compatibility Forms"](t)&&!(t>=65097&&t<=65103)||xi["CJK Compatibility Ideographs"](t)||xi["CJK Compatibility"](t)||xi["CJK Radicals Supplement"](t)||xi["CJK Strokes"](t)||!(!xi["CJK Symbols and Punctuation"](t)||t>=12296&&t<=12305||t>=12308&&t<=12319||12336===t)||xi["CJK Unified Ideographs Extension A"](t)||xi["CJK Unified Ideographs"](t)||xi["Enclosed CJK Letters and Months"](t)||xi["Hangul Compatibility Jamo"](t)||xi["Hangul Jamo Extended-A"](t)||xi["Hangul Jamo Extended-B"](t)||xi["Hangul Jamo"](t)||xi["Hangul Syllables"](t)||xi.Hiragana(t)||xi["Ideographic Description Characters"](t)||xi.Kanbun(t)||xi["Kangxi Radicals"](t)||xi["Katakana Phonetic Extensions"](t)||xi.Katakana(t)&&12540!==t||!(!xi["Halfwidth and Fullwidth Forms"](t)||65288===t||65289===t||65293===t||t>=65306&&t<=65310||65339===t||65341===t||65343===t||t>=65371&&t<=65503||65507===t||t>=65512&&t<=65519)||!(!xi["Small Form Variants"](t)||t>=65112&&t<=65118||t>=65123&&t<=65126)||xi["Unified Canadian Aboriginal Syllabics"](t)||xi["Unified Canadian Aboriginal Syllabics Extended"](t)||xi["Vertical Forms"](t)||xi["Yijing Hexagram Symbols"](t)||xi["Yi Syllables"](t)||xi["Yi Radicals"](t))))}function Ei(t){return!(Si(t)||function(t){return!!(xi["Latin-1 Supplement"](t)&&(167===t||169===t||174===t||177===t||188===t||189===t||190===t||215===t||247===t)||xi["General Punctuation"](t)&&(8214===t||8224===t||8225===t||8240===t||8241===t||8251===t||8252===t||8258===t||8263===t||8264===t||8265===t||8273===t)||xi["Letterlike Symbols"](t)||xi["Number Forms"](t)||xi["Miscellaneous Technical"](t)&&(t>=8960&&t<=8967||t>=8972&&t<=8991||t>=8996&&t<=9e3||9003===t||t>=9085&&t<=9114||t>=9150&&t<=9165||9167===t||t>=9169&&t<=9179||t>=9186&&t<=9215)||xi["Control Pictures"](t)&&9251!==t||xi["Optical Character Recognition"](t)||xi["Enclosed Alphanumerics"](t)||xi["Geometric Shapes"](t)||xi["Miscellaneous Symbols"](t)&&!(t>=9754&&t<=9759)||xi["Miscellaneous Symbols and Arrows"](t)&&(t>=11026&&t<=11055||t>=11088&&t<=11097||t>=11192&&t<=11243)||xi["CJK Symbols and Punctuation"](t)||xi.Katakana(t)||xi["Private Use Area"](t)||xi["CJK Compatibility Forms"](t)||xi["Small Form Variants"](t)||xi["Halfwidth and Fullwidth Forms"](t)||8734===t||8756===t||8757===t||t>=9984&&t<=10087||t>=10102&&t<=10131||65532===t||65533===t)}(t))}function Ti(t,e){return!(!e&&(t>=1424&&t<=2303||xi["Arabic Presentation Forms-A"](t)||xi["Arabic Presentation Forms-B"](t))||t>=2304&&t<=3583||t>=3840&&t<=4255||xi.Khmer(t))}var Ai,Ii=!1,ki=null,zi=!1,Ci=new wt,Pi={applyArabicShaping:null,processBidirectionalText:null,processStyledBidirectionalText:null,isLoaded:function(){return zi||null!=Pi.applyArabicShaping}},Mi=function(t,e){this.zoom=t,e?(this.now=e.now,this.fadeDuration=e.fadeDuration,this.zoomHistory=e.zoomHistory,this.transition=e.transition):(this.now=0,this.fadeDuration=0,this.zoomHistory=new gi,this.transition={})}
Mi.prototype.isSupportedScript=function(t){return function(t,e){for(var r=0,i=t;r<i.length;r+=1)if(!Ti(i[r].charCodeAt(0),e))return!1
return!0}(t,Pi.isLoaded())},Mi.prototype.crossFadingFactor=function(){return 0===this.fadeDuration?1:Math.min((this.now-this.zoomHistory.lastIntegerZoomTime)/this.fadeDuration,1)},Mi.prototype.getCrossfadeParameters=function(){var t=this.zoom,e=t-Math.floor(t),r=this.crossFadingFactor()
return t>this.zoomHistory.lastIntegerZoom?{fromScale:2,toScale:1,t:e+(1-e)*r}:{fromScale:.5,toScale:1,t:1-(1-r)*e}}
var Li=function(t,e){this.property=t,this.value=e,this.expression=function(t,e){if(yr(t))return new zr(t,e)
if(Er(t)){var r=kr(t,e)
if("error"===r.result)throw new Error(r.value.map(function(t){return t.key+": "+t.message}).join(", "))
return r.value}var i=t
return"string"==typeof t&&"color"===e.type&&(i=Wt.parse(t)),{kind:"constant",evaluate:function(){return i}}}(void 0===e?t.specification.default:e,t.specification)}
Li.prototype.isDataDriven=function(){return"source"===this.expression.kind||"composite"===this.expression.kind},Li.prototype.possiblyEvaluate=function(t,e){return this.property.possiblyEvaluate(this,t,e)}
var Di=function(t){this.property=t,this.value=new Li(t,void 0)}
Di.prototype.transitioned=function(t,e){return new Ri(this.property,this.value,e,p({},t.transition,this.transition),t.now)},Di.prototype.untransitioned=function(){return new Ri(this.property,this.value,null,{},0)}
var Bi=function(t){this._properties=t,this._values=Object.create(t.defaultTransitionablePropertyValues)}
Bi.prototype.getValue=function(t){return x(this._values[t].value.value)},Bi.prototype.setValue=function(t,e){this._values.hasOwnProperty(t)||(this._values[t]=new Di(this._values[t].property)),this._values[t].value=new Li(this._values[t].property,null===e?void 0:x(e))},Bi.prototype.getTransition=function(t){return x(this._values[t].transition)},Bi.prototype.setTransition=function(t,e){this._values.hasOwnProperty(t)||(this._values[t]=new Di(this._values[t].property)),this._values[t].transition=x(e)||void 0},Bi.prototype.serialize=function(){for(var t={},e=0,r=Object.keys(this._values);e<r.length;e+=1){var i=r[e],n=this.getValue(i)
void 0!==n&&(t[i]=n)
var o=this.getTransition(i)
void 0!==o&&(t[i+"-transition"]=o)}return t},Bi.prototype.transitioned=function(t,e){for(var r=new Fi(this._properties),i=0,n=Object.keys(this._values);i<n.length;i+=1){var o=n[i]
r._values[o]=this._values[o].transitioned(t,e._values[o])}return r},Bi.prototype.untransitioned=function(){for(var t=new Fi(this._properties),e=0,r=Object.keys(this._values);e<r.length;e+=1){var i=r[e]
t._values[i]=this._values[i].untransitioned()}return t}
var Ri=function(t,e,r,i,n){this.property=t,this.value=e,this.begin=n+i.delay||0,this.end=this.begin+i.duration||0,t.specification.transition&&(i.delay||i.duration)&&(this.prior=r)}
Ri.prototype.possiblyEvaluate=function(t,e){var r=t.now||0,i=this.value.possiblyEvaluate(t,e),n=this.prior
if(n){if(r>this.end)return this.prior=null,i
if(this.value.isDataDriven())return this.prior=null,i
if(r<this.begin)return n.possiblyEvaluate(t,e)
var o=(r-this.begin)/(this.end-this.begin)
return this.property.interpolate(n.possiblyEvaluate(t,e),i,function(t){if(o<=0)return 0
if(o>=1)return 1
var e=o*o,r=e*o
return 4*(o<.5?r:3*(o-e)+r-.75)}())}return i}
var Fi=function(t){this._properties=t,this._values=Object.create(t.defaultTransitioningPropertyValues)}
Fi.prototype.possiblyEvaluate=function(t,e){for(var r=new Vi(this._properties),i=0,n=Object.keys(this._values);i<n.length;i+=1){var o=n[i]
r._values[o]=this._values[o].possiblyEvaluate(t,e)}return r},Fi.prototype.hasTransition=function(){for(var t=0,e=Object.keys(this._values);t<e.length;t+=1){var r=e[t]
if(this._values[r].prior)return!0}return!1}
var Oi=function(t){this._properties=t,this._values=Object.create(t.defaultPropertyValues)}
Oi.prototype.getValue=function(t){return x(this._values[t].value)},Oi.prototype.setValue=function(t,e){this._values[t]=new Li(this._values[t].property,null===e?void 0:x(e))},Oi.prototype.serialize=function(){for(var t={},e=0,r=Object.keys(this._values);e<r.length;e+=1){var i=r[e],n=this.getValue(i)
void 0!==n&&(t[i]=n)}return t},Oi.prototype.possiblyEvaluate=function(t,e){for(var r=new Vi(this._properties),i=0,n=Object.keys(this._values);i<n.length;i+=1){var o=n[i]
r._values[o]=this._values[o].possiblyEvaluate(t,e)}return r}
var Ui=function(t,e,r){this.property=t,this.value=e,this.parameters=r}
Ui.prototype.isConstant=function(){return"constant"===this.value.kind},Ui.prototype.constantOr=function(t){return"constant"===this.value.kind?this.value.value:t},Ui.prototype.evaluate=function(t,e,r){return this.property.evaluate(this.value,this.parameters,t,e,r)}
var Vi=function(t){this._properties=t,this._values=Object.create(t.defaultPossiblyEvaluatedValues)}
Vi.prototype.get=function(t){return this._values[t]}
var Ni=function(t){this.specification=t}
Ni.prototype.possiblyEvaluate=function(t,e){return t.expression.evaluate(e)},Ni.prototype.interpolate=function(t,e,r){var i=be[this.specification.type]
return i?i(t,e,r):t}
var ji=function(t,e){this.specification=t,this.overrides=e}
ji.prototype.possiblyEvaluate=function(t,e,r){return"constant"===t.expression.kind||"camera"===t.expression.kind?new Ui(this,{kind:"constant",value:t.expression.evaluate(e,null,{},r)},e):new Ui(this,t.expression,e)},ji.prototype.interpolate=function(t,e,r){if("constant"!==t.value.kind||"constant"!==e.value.kind)return t
if(void 0===t.value.value||void 0===e.value.value)return new Ui(this,{kind:"constant",value:void 0},t.parameters)
var i=be[this.specification.type]
return i?new Ui(this,{kind:"constant",value:i(t.value.value,e.value.value,r)},t.parameters):t},ji.prototype.evaluate=function(t,e,r,i,n){return"constant"===t.kind?t.value:t.evaluate(e,r,i,n)}
var qi=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.possiblyEvaluate=function(t,e,r){if(void 0===t.value)return new Ui(this,{kind:"constant",value:void 0},e)
if("constant"===t.expression.kind){var i=t.expression.evaluate(e,null,{},r),n="image"===t.property.specification.type&&"string"!=typeof i?i.name:i,o=this._calculate(n,n,n,e)
return new Ui(this,{kind:"constant",value:o},e)}if("camera"===t.expression.kind){var a=this._calculate(t.expression.evaluate({zoom:e.zoom-1}),t.expression.evaluate({zoom:e.zoom}),t.expression.evaluate({zoom:e.zoom+1}),e)
return new Ui(this,{kind:"constant",value:a},e)}return new Ui(this,t.expression,e)},e.prototype.evaluate=function(t,e,r,i,n){if("source"===t.kind){var o=t.evaluate(e,r,i,n)
return this._calculate(o,o,o,e)}return"composite"===t.kind?this._calculate(t.evaluate({zoom:Math.floor(e.zoom)-1},r,i),t.evaluate({zoom:Math.floor(e.zoom)},r,i),t.evaluate({zoom:Math.floor(e.zoom)+1},r,i),e):t.value},e.prototype._calculate=function(t,e,r,i){return i.zoom>i.zoomHistory.lastIntegerZoom?{from:t,to:e}:{from:r,to:e}},e.prototype.interpolate=function(t){return t},e}(ji),Zi=function(t){this.specification=t}
Zi.prototype.possiblyEvaluate=function(t,e,r){if(void 0!==t.value){if("constant"===t.expression.kind){var i=t.expression.evaluate(e,null,{},r)
return this._calculate(i,i,i,e)}return this._calculate(t.expression.evaluate(new Mi(Math.floor(e.zoom-1),e)),t.expression.evaluate(new Mi(Math.floor(e.zoom),e)),t.expression.evaluate(new Mi(Math.floor(e.zoom+1),e)),e)}},Zi.prototype._calculate=function(t,e,r,i){return i.zoom>i.zoomHistory.lastIntegerZoom?{from:t,to:e}:{from:r,to:e}},Zi.prototype.interpolate=function(t){return t}
var Gi=function(t){this.specification=t}
Gi.prototype.possiblyEvaluate=function(t,e,r){return!!t.expression.evaluate(e,null,{},r)},Gi.prototype.interpolate=function(){return!1}
var Xi=function(t){for(var e in this.properties=t,this.defaultPropertyValues={},this.defaultTransitionablePropertyValues={},this.defaultTransitioningPropertyValues={},this.defaultPossiblyEvaluatedValues={},this.overridableProperties=[],t){var r=t[e]
r.specification.overridable&&this.overridableProperties.push(e)
var i=this.defaultPropertyValues[e]=new Li(r,void 0),n=this.defaultTransitionablePropertyValues[e]=new Di(r)
this.defaultTransitioningPropertyValues[e]=n.untransitioned(),this.defaultPossiblyEvaluatedValues[e]=i.possiblyEvaluate({})}}
mi("DataDrivenProperty",ji),mi("DataConstantProperty",Ni),mi("CrossFadedDataDrivenProperty",qi),mi("CrossFadedProperty",Zi),mi("ColorRampProperty",Gi)
var Wi=function(t){function e(e,r){if(t.call(this),this.id=e.id,this.type=e.type,this._featureFilter=function(){return!0},"custom"!==e.type&&(e=e,this.metadata=e.metadata,this.minzoom=e.minzoom,this.maxzoom=e.maxzoom,"background"!==e.type&&(this.source=e.source,this.sourceLayer=e["source-layer"],this.filter=e.filter),r.layout&&(this._unevaluatedLayout=new Oi(r.layout)),r.paint)){for(var i in this._transitionablePaint=new Bi(r.paint),e.paint)this.setPaintProperty(i,e.paint[i],{validate:!1})
for(var n in e.layout)this.setLayoutProperty(n,e.layout[n],{validate:!1})
this._transitioningPaint=this._transitionablePaint.untransitioned()}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getCrossfadeParameters=function(){return this._crossfadeParameters},e.prototype.getLayoutProperty=function(t){return"visibility"===t?this.visibility:this._unevaluatedLayout.getValue(t)},e.prototype.setLayoutProperty=function(t,e,r){if(void 0===r&&(r={}),null!=e){var i="layers."+this.id+".layout."+t
if(this._validate(li,i,t,e,r))return}"visibility"!==t?this._unevaluatedLayout.setValue(t,e):this.visibility=e},e.prototype.getPaintProperty=function(t){return v(t,"-transition")?this._transitionablePaint.getTransition(t.slice(0,-"-transition".length)):this._transitionablePaint.getValue(t)},e.prototype.setPaintProperty=function(t,e,r){if(void 0===r&&(r={}),null!=e){var i="layers."+this.id+".paint."+t
if(this._validate(si,i,t,e,r))return!1}if(v(t,"-transition"))return this._transitionablePaint.setTransition(t.slice(0,-"-transition".length),e||void 0),!1
var n=this._transitionablePaint._values[t],o="cross-faded-data-driven"===n.property.specification["property-type"],a=n.value.isDataDriven(),s=n.value
this._transitionablePaint.setValue(t,e),this._handleSpecialPaintPropertyUpdate(t)
var l=this._transitionablePaint._values[t].value
return l.isDataDriven()||a||o||this._handleOverridablePaintPropertyUpdate(t,s,l)},e.prototype._handleSpecialPaintPropertyUpdate=function(t){},e.prototype._handleOverridablePaintPropertyUpdate=function(t,e,r){return!1},e.prototype.isHidden=function(t){return!!(this.minzoom&&t<this.minzoom)||!!(this.maxzoom&&t>=this.maxzoom)||"none"===this.visibility},e.prototype.updateTransitions=function(t){this._transitioningPaint=this._transitionablePaint.transitioned(t,this._transitioningPaint)},e.prototype.hasTransition=function(){return this._transitioningPaint.hasTransition()},e.prototype.recalculate=function(t,e){t.getCrossfadeParameters&&(this._crossfadeParameters=t.getCrossfadeParameters()),this._unevaluatedLayout&&(this.layout=this._unevaluatedLayout.possiblyEvaluate(t,e)),this.paint=this._transitioningPaint.possiblyEvaluate(t,e)},e.prototype.serialize=function(){var t={id:this.id,type:this.type,source:this.source,"source-layer":this.sourceLayer,metadata:this.metadata,minzoom:this.minzoom,maxzoom:this.maxzoom,filter:this.filter,layout:this._unevaluatedLayout&&this._unevaluatedLayout.serialize(),paint:this._transitionablePaint&&this._transitionablePaint.serialize()}
return this.visibility&&(t.layout=t.layout||{},t.layout.visibility=this.visibility),g(t,function(t,e){return!(void 0===t||"layout"===e&&!Object.keys(t).length||"paint"===e&&!Object.keys(t).length)})},e.prototype._validate=function(t,e,r,i,n){return void 0===n&&(n={}),(!n||!1!==n.validate)&&ui(this,t.call(oi,{key:e,layerType:this.type,objectKey:r,value:i,styleSpec:St,style:{glyphs:!0,sprite:!0}}))},e.prototype.is3D=function(){return!1},e.prototype.isTileClipped=function(){return!1},e.prototype.hasOffscreenPass=function(){return!1},e.prototype.resize=function(){},e.prototype.isStateDependent=function(){for(var t in this.paint._values){var e=this.paint.get(t)
if(e instanceof Ui&&hr(e.property.specification)&&("source"===e.value.kind||"composite"===e.value.kind)&&e.value.isStateDependent)return!0}return!1},e}(wt),Ki={Int8:Int8Array,Uint8:Uint8Array,Int16:Int16Array,Uint16:Uint16Array,Int32:Int32Array,Uint32:Uint32Array,Float32:Float32Array},Hi=function(t,e){this._structArray=t,this._pos1=e*this.size,this._pos2=this._pos1/2,this._pos4=this._pos1/4,this._pos8=this._pos1/8},Ji=function(){this.isTransferred=!1,this.capacity=-1,this.resize(0)}
function Yi(t,e){void 0===e&&(e=1)
var r=0,i=0
return{members:t.map(function(t){var n,o=(n=t.type,Ki[n].BYTES_PER_ELEMENT),a=r=$i(r,Math.max(e,o)),s=t.components||1
return i=Math.max(i,o),r+=o*s,{name:t.name,type:t.type,components:s,offset:a}}),size:$i(r,Math.max(i,e)),alignment:e}}function $i(t,e){return Math.ceil(t/e)*e}Ji.serialize=function(t,e){return t._trim(),e&&(t.isTransferred=!0,e.push(t.arrayBuffer)),{length:t.length,arrayBuffer:t.arrayBuffer}},Ji.deserialize=function(t){var e=Object.create(this.prototype)
return e.arrayBuffer=t.arrayBuffer,e.length=t.length,e.capacity=t.arrayBuffer.byteLength/e.bytesPerElement,e._refreshViews(),e},Ji.prototype._trim=function(){this.length!==this.capacity&&(this.capacity=this.length,this.arrayBuffer=this.arrayBuffer.slice(0,this.length*this.bytesPerElement),this._refreshViews())},Ji.prototype.clear=function(){this.length=0},Ji.prototype.resize=function(t){this.reserve(t),this.length=t},Ji.prototype.reserve=function(t){if(t>this.capacity){this.capacity=Math.max(t,Math.floor(5*this.capacity),128),this.arrayBuffer=new ArrayBuffer(this.capacity*this.bytesPerElement)
var e=this.uint8
this._refreshViews(),e&&this.uint8.set(e)}},Ji.prototype._refreshViews=function(){throw new Error("_refreshViews() must be implemented by each concrete StructArray layout")}
var Qi=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e){var r=this.length
return this.resize(r+1),this.emplace(r,t,e)},e.prototype.emplace=function(t,e,r){var i=2*t
return this.int16[i+0]=e,this.int16[i+1]=r,t},e}(Ji)
Qi.prototype.bytesPerElement=4,mi("StructArrayLayout2i4",Qi)
var tn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r,i){var n=this.length
return this.resize(n+1),this.emplace(n,t,e,r,i)},e.prototype.emplace=function(t,e,r,i,n){var o=4*t
return this.int16[o+0]=e,this.int16[o+1]=r,this.int16[o+2]=i,this.int16[o+3]=n,t},e}(Ji)
tn.prototype.bytesPerElement=8,mi("StructArrayLayout4i8",tn)
var en=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r,i,n,o){var a=this.length
return this.resize(a+1),this.emplace(a,t,e,r,i,n,o)},e.prototype.emplace=function(t,e,r,i,n,o,a){var s=6*t
return this.int16[s+0]=e,this.int16[s+1]=r,this.int16[s+2]=i,this.int16[s+3]=n,this.int16[s+4]=o,this.int16[s+5]=a,t},e}(Ji)
en.prototype.bytesPerElement=12,mi("StructArrayLayout2i4i12",en)
var rn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r,i,n,o){var a=this.length
return this.resize(a+1),this.emplace(a,t,e,r,i,n,o)},e.prototype.emplace=function(t,e,r,i,n,o,a){var s=4*t,l=8*t
return this.int16[s+0]=e,this.int16[s+1]=r,this.uint8[l+4]=i,this.uint8[l+5]=n,this.uint8[l+6]=o,this.uint8[l+7]=a,t},e}(Ji)
rn.prototype.bytesPerElement=8,mi("StructArrayLayout2i4ub8",rn)
var nn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r,i,n,o,a,s){var l=this.length
return this.resize(l+1),this.emplace(l,t,e,r,i,n,o,a,s)},e.prototype.emplace=function(t,e,r,i,n,o,a,s,l){var u=8*t
return this.uint16[u+0]=e,this.uint16[u+1]=r,this.uint16[u+2]=i,this.uint16[u+3]=n,this.uint16[u+4]=o,this.uint16[u+5]=a,this.uint16[u+6]=s,this.uint16[u+7]=l,t},e}(Ji)
nn.prototype.bytesPerElement=16,mi("StructArrayLayout8ui16",nn)
var on=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r,i,n,o,a,s){var l=this.length
return this.resize(l+1),this.emplace(l,t,e,r,i,n,o,a,s)},e.prototype.emplace=function(t,e,r,i,n,o,a,s,l){var u=8*t
return this.int16[u+0]=e,this.int16[u+1]=r,this.int16[u+2]=i,this.int16[u+3]=n,this.uint16[u+4]=o,this.uint16[u+5]=a,this.uint16[u+6]=s,this.uint16[u+7]=l,t},e}(Ji)
on.prototype.bytesPerElement=16,mi("StructArrayLayout4i4ui16",on)
var an=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r){var i=this.length
return this.resize(i+1),this.emplace(i,t,e,r)},e.prototype.emplace=function(t,e,r,i){var n=3*t
return this.float32[n+0]=e,this.float32[n+1]=r,this.float32[n+2]=i,t},e}(Ji)
an.prototype.bytesPerElement=12,mi("StructArrayLayout3f12",an)
var sn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t){var e=this.length
return this.resize(e+1),this.emplace(e,t)},e.prototype.emplace=function(t,e){var r=1*t
return this.uint32[r+0]=e,t},e}(Ji)
sn.prototype.bytesPerElement=4,mi("StructArrayLayout1ul4",sn)
var ln=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r,i,n,o,a,s,l,u,c){var p=this.length
return this.resize(p+1),this.emplace(p,t,e,r,i,n,o,a,s,l,u,c)},e.prototype.emplace=function(t,e,r,i,n,o,a,s,l,u,c,p){var h=12*t,f=6*t
return this.int16[h+0]=e,this.int16[h+1]=r,this.int16[h+2]=i,this.int16[h+3]=n,this.int16[h+4]=o,this.int16[h+5]=a,this.uint32[f+3]=s,this.uint16[h+8]=l,this.uint16[h+9]=u,this.int16[h+10]=c,this.int16[h+11]=p,t},e}(Ji)
ln.prototype.bytesPerElement=24,mi("StructArrayLayout6i1ul2ui2i24",ln)
var un=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r,i,n,o){var a=this.length
return this.resize(a+1),this.emplace(a,t,e,r,i,n,o)},e.prototype.emplace=function(t,e,r,i,n,o,a){var s=6*t
return this.int16[s+0]=e,this.int16[s+1]=r,this.int16[s+2]=i,this.int16[s+3]=n,this.int16[s+4]=o,this.int16[s+5]=a,t},e}(Ji)
un.prototype.bytesPerElement=12,mi("StructArrayLayout2i2i2i12",un)
var cn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r,i){var n=this.length
return this.resize(n+1),this.emplace(n,t,e,r,i)},e.prototype.emplace=function(t,e,r,i,n){var o=12*t,a=3*t
return this.uint8[o+0]=e,this.uint8[o+1]=r,this.float32[a+1]=i,this.float32[a+2]=n,t},e}(Ji)
cn.prototype.bytesPerElement=12,mi("StructArrayLayout2ub2f12",cn)
var pn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r,i,n,o,a,s,l,u,c,p,h,f,d,m,y){var v=this.length
return this.resize(v+1),this.emplace(v,t,e,r,i,n,o,a,s,l,u,c,p,h,f,d,m,y)},e.prototype.emplace=function(t,e,r,i,n,o,a,s,l,u,c,p,h,f,d,m,y,v){var _=24*t,g=12*t,x=48*t
return this.int16[_+0]=e,this.int16[_+1]=r,this.uint16[_+2]=i,this.uint16[_+3]=n,this.uint32[g+2]=o,this.uint32[g+3]=a,this.uint32[g+4]=s,this.uint16[_+10]=l,this.uint16[_+11]=u,this.uint16[_+12]=c,this.float32[g+7]=p,this.float32[g+8]=h,this.uint8[x+36]=f,this.uint8[x+37]=d,this.uint8[x+38]=m,this.uint32[g+10]=y,this.int16[_+22]=v,t},e}(Ji)
pn.prototype.bytesPerElement=48,mi("StructArrayLayout2i2ui3ul3ui2f3ub1ul1i48",pn)
var hn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r,i,n,o,a,s,l,u,c,p,h,f,d,m,y,v,_,g,x,b){var w=this.length
return this.resize(w+1),this.emplace(w,t,e,r,i,n,o,a,s,l,u,c,p,h,f,d,m,y,v,_,g,x,b)},e.prototype.emplace=function(t,e,r,i,n,o,a,s,l,u,c,p,h,f,d,m,y,v,_,g,x,b,w){var S=26*t,E=13*t
return this.int16[S+0]=e,this.int16[S+1]=r,this.int16[S+2]=i,this.int16[S+3]=n,this.int16[S+4]=o,this.int16[S+5]=a,this.int16[S+6]=s,this.uint16[S+7]=l,this.uint16[S+8]=u,this.uint16[S+9]=c,this.uint16[S+10]=p,this.uint16[S+11]=h,this.uint16[S+12]=f,this.uint16[S+13]=d,this.uint16[S+14]=m,this.uint16[S+15]=y,this.uint16[S+16]=v,this.uint16[S+17]=_,this.uint32[E+9]=g,this.float32[E+10]=x,this.float32[E+11]=b,this.float32[E+12]=w,t},e}(Ji)
hn.prototype.bytesPerElement=52,mi("StructArrayLayout7i11ui1ul3f52",hn)
var fn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t){var e=this.length
return this.resize(e+1),this.emplace(e,t)},e.prototype.emplace=function(t,e){var r=1*t
return this.float32[r+0]=e,t},e}(Ji)
fn.prototype.bytesPerElement=4,mi("StructArrayLayout1f4",fn)
var dn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r){var i=this.length
return this.resize(i+1),this.emplace(i,t,e,r)},e.prototype.emplace=function(t,e,r,i){var n=3*t
return this.int16[n+0]=e,this.int16[n+1]=r,this.int16[n+2]=i,t},e}(Ji)
dn.prototype.bytesPerElement=6,mi("StructArrayLayout3i6",dn)
var mn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r){var i=this.length
return this.resize(i+1),this.emplace(i,t,e,r)},e.prototype.emplace=function(t,e,r,i){var n=2*t,o=4*t
return this.uint32[n+0]=e,this.uint16[o+2]=r,this.uint16[o+3]=i,t},e}(Ji)
mn.prototype.bytesPerElement=8,mi("StructArrayLayout1ul2ui8",mn)
var yn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r){var i=this.length
return this.resize(i+1),this.emplace(i,t,e,r)},e.prototype.emplace=function(t,e,r,i){var n=3*t
return this.uint16[n+0]=e,this.uint16[n+1]=r,this.uint16[n+2]=i,t},e}(Ji)
yn.prototype.bytesPerElement=6,mi("StructArrayLayout3ui6",yn)
var vn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e){var r=this.length
return this.resize(r+1),this.emplace(r,t,e)},e.prototype.emplace=function(t,e,r){var i=2*t
return this.uint16[i+0]=e,this.uint16[i+1]=r,t},e}(Ji)
vn.prototype.bytesPerElement=4,mi("StructArrayLayout2ui4",vn)
var _n=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t){var e=this.length
return this.resize(e+1),this.emplace(e,t)},e.prototype.emplace=function(t,e){var r=1*t
return this.uint16[r+0]=e,t},e}(Ji)
_n.prototype.bytesPerElement=2,mi("StructArrayLayout1ui2",_n)
var gn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e){var r=this.length
return this.resize(r+1),this.emplace(r,t,e)},e.prototype.emplace=function(t,e,r){var i=2*t
return this.float32[i+0]=e,this.float32[i+1]=r,t},e}(Ji)
gn.prototype.bytesPerElement=8,mi("StructArrayLayout2f8",gn)
var xn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)},e.prototype.emplaceBack=function(t,e,r,i){var n=this.length
return this.resize(n+1),this.emplace(n,t,e,r,i)},e.prototype.emplace=function(t,e,r,i,n){var o=4*t
return this.float32[o+0]=e,this.float32[o+1]=r,this.float32[o+2]=i,this.float32[o+3]=n,t},e}(Ji)
xn.prototype.bytesPerElement=16,mi("StructArrayLayout4f16",xn)
var bn=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e
var r={anchorPointX:{configurable:!0},anchorPointY:{configurable:!0},x1:{configurable:!0},y1:{configurable:!0},x2:{configurable:!0},y2:{configurable:!0},featureIndex:{configurable:!0},sourceLayerIndex:{configurable:!0},bucketIndex:{configurable:!0},radius:{configurable:!0},signedDistanceFromAnchor:{configurable:!0},anchorPoint:{configurable:!0}}
return r.anchorPointX.get=function(){return this._structArray.int16[this._pos2+0]},r.anchorPointX.set=function(t){this._structArray.int16[this._pos2+0]=t},r.anchorPointY.get=function(){return this._structArray.int16[this._pos2+1]},r.anchorPointY.set=function(t){this._structArray.int16[this._pos2+1]=t},r.x1.get=function(){return this._structArray.int16[this._pos2+2]},r.x1.set=function(t){this._structArray.int16[this._pos2+2]=t},r.y1.get=function(){return this._structArray.int16[this._pos2+3]},r.y1.set=function(t){this._structArray.int16[this._pos2+3]=t},r.x2.get=function(){return this._structArray.int16[this._pos2+4]},r.x2.set=function(t){this._structArray.int16[this._pos2+4]=t},r.y2.get=function(){return this._structArray.int16[this._pos2+5]},r.y2.set=function(t){this._structArray.int16[this._pos2+5]=t},r.featureIndex.get=function(){return this._structArray.uint32[this._pos4+3]},r.featureIndex.set=function(t){this._structArray.uint32[this._pos4+3]=t},r.sourceLayerIndex.get=function(){return this._structArray.uint16[this._pos2+8]},r.sourceLayerIndex.set=function(t){this._structArray.uint16[this._pos2+8]=t},r.bucketIndex.get=function(){return this._structArray.uint16[this._pos2+9]},r.bucketIndex.set=function(t){this._structArray.uint16[this._pos2+9]=t},r.radius.get=function(){return this._structArray.int16[this._pos2+10]},r.radius.set=function(t){this._structArray.int16[this._pos2+10]=t},r.signedDistanceFromAnchor.get=function(){return this._structArray.int16[this._pos2+11]},r.signedDistanceFromAnchor.set=function(t){this._structArray.int16[this._pos2+11]=t},r.anchorPoint.get=function(){return new n(this.anchorPointX,this.anchorPointY)},Object.defineProperties(e.prototype,r),e}(Hi)
bn.prototype.size=24
var wn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(t){return new bn(this,t)},e}(ln)
mi("CollisionBoxArray",wn)
var Sn=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e
var r={anchorX:{configurable:!0},anchorY:{configurable:!0},glyphStartIndex:{configurable:!0},numGlyphs:{configurable:!0},vertexStartIndex:{configurable:!0},lineStartIndex:{configurable:!0},lineLength:{configurable:!0},segment:{configurable:!0},lowerSize:{configurable:!0},upperSize:{configurable:!0},lineOffsetX:{configurable:!0},lineOffsetY:{configurable:!0},writingMode:{configurable:!0},placedOrientation:{configurable:!0},hidden:{configurable:!0},crossTileID:{configurable:!0},associatedIconIndex:{configurable:!0}}
return r.anchorX.get=function(){return this._structArray.int16[this._pos2+0]},r.anchorX.set=function(t){this._structArray.int16[this._pos2+0]=t},r.anchorY.get=function(){return this._structArray.int16[this._pos2+1]},r.anchorY.set=function(t){this._structArray.int16[this._pos2+1]=t},r.glyphStartIndex.get=function(){return this._structArray.uint16[this._pos2+2]},r.glyphStartIndex.set=function(t){this._structArray.uint16[this._pos2+2]=t},r.numGlyphs.get=function(){return this._structArray.uint16[this._pos2+3]},r.numGlyphs.set=function(t){this._structArray.uint16[this._pos2+3]=t},r.vertexStartIndex.get=function(){return this._structArray.uint32[this._pos4+2]},r.vertexStartIndex.set=function(t){this._structArray.uint32[this._pos4+2]=t},r.lineStartIndex.get=function(){return this._structArray.uint32[this._pos4+3]},r.lineStartIndex.set=function(t){this._structArray.uint32[this._pos4+3]=t},r.lineLength.get=function(){return this._structArray.uint32[this._pos4+4]},r.lineLength.set=function(t){this._structArray.uint32[this._pos4+4]=t},r.segment.get=function(){return this._structArray.uint16[this._pos2+10]},r.segment.set=function(t){this._structArray.uint16[this._pos2+10]=t},r.lowerSize.get=function(){return this._structArray.uint16[this._pos2+11]},r.lowerSize.set=function(t){this._structArray.uint16[this._pos2+11]=t},r.upperSize.get=function(){return this._structArray.uint16[this._pos2+12]},r.upperSize.set=function(t){this._structArray.uint16[this._pos2+12]=t},r.lineOffsetX.get=function(){return this._structArray.float32[this._pos4+7]},r.lineOffsetX.set=function(t){this._structArray.float32[this._pos4+7]=t},r.lineOffsetY.get=function(){return this._structArray.float32[this._pos4+8]},r.lineOffsetY.set=function(t){this._structArray.float32[this._pos4+8]=t},r.writingMode.get=function(){return this._structArray.uint8[this._pos1+36]},r.writingMode.set=function(t){this._structArray.uint8[this._pos1+36]=t},r.placedOrientation.get=function(){return this._structArray.uint8[this._pos1+37]},r.placedOrientation.set=function(t){this._structArray.uint8[this._pos1+37]=t},r.hidden.get=function(){return this._structArray.uint8[this._pos1+38]},r.hidden.set=function(t){this._structArray.uint8[this._pos1+38]=t},r.crossTileID.get=function(){return this._structArray.uint32[this._pos4+10]},r.crossTileID.set=function(t){this._structArray.uint32[this._pos4+10]=t},r.associatedIconIndex.get=function(){return this._structArray.int16[this._pos2+22]},r.associatedIconIndex.set=function(t){this._structArray.int16[this._pos2+22]=t},Object.defineProperties(e.prototype,r),e}(Hi)
Sn.prototype.size=48
var En=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(t){return new Sn(this,t)},e}(pn)
mi("PlacedSymbolArray",En)
var Tn=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e
var r={anchorX:{configurable:!0},anchorY:{configurable:!0},rightJustifiedTextSymbolIndex:{configurable:!0},centerJustifiedTextSymbolIndex:{configurable:!0},leftJustifiedTextSymbolIndex:{configurable:!0},verticalPlacedTextSymbolIndex:{configurable:!0},placedIconSymbolIndex:{configurable:!0},key:{configurable:!0},textBoxStartIndex:{configurable:!0},textBoxEndIndex:{configurable:!0},verticalTextBoxStartIndex:{configurable:!0},verticalTextBoxEndIndex:{configurable:!0},iconBoxStartIndex:{configurable:!0},iconBoxEndIndex:{configurable:!0},featureIndex:{configurable:!0},numHorizontalGlyphVertices:{configurable:!0},numVerticalGlyphVertices:{configurable:!0},numIconVertices:{configurable:!0},crossTileID:{configurable:!0},textBoxScale:{configurable:!0},textOffset0:{configurable:!0},textOffset1:{configurable:!0}}
return r.anchorX.get=function(){return this._structArray.int16[this._pos2+0]},r.anchorX.set=function(t){this._structArray.int16[this._pos2+0]=t},r.anchorY.get=function(){return this._structArray.int16[this._pos2+1]},r.anchorY.set=function(t){this._structArray.int16[this._pos2+1]=t},r.rightJustifiedTextSymbolIndex.get=function(){return this._structArray.int16[this._pos2+2]},r.rightJustifiedTextSymbolIndex.set=function(t){this._structArray.int16[this._pos2+2]=t},r.centerJustifiedTextSymbolIndex.get=function(){return this._structArray.int16[this._pos2+3]},r.centerJustifiedTextSymbolIndex.set=function(t){this._structArray.int16[this._pos2+3]=t},r.leftJustifiedTextSymbolIndex.get=function(){return this._structArray.int16[this._pos2+4]},r.leftJustifiedTextSymbolIndex.set=function(t){this._structArray.int16[this._pos2+4]=t},r.verticalPlacedTextSymbolIndex.get=function(){return this._structArray.int16[this._pos2+5]},r.verticalPlacedTextSymbolIndex.set=function(t){this._structArray.int16[this._pos2+5]=t},r.placedIconSymbolIndex.get=function(){return this._structArray.int16[this._pos2+6]},r.placedIconSymbolIndex.set=function(t){this._structArray.int16[this._pos2+6]=t},r.key.get=function(){return this._structArray.uint16[this._pos2+7]},r.key.set=function(t){this._structArray.uint16[this._pos2+7]=t},r.textBoxStartIndex.get=function(){return this._structArray.uint16[this._pos2+8]},r.textBoxStartIndex.set=function(t){this._structArray.uint16[this._pos2+8]=t},r.textBoxEndIndex.get=function(){return this._structArray.uint16[this._pos2+9]},r.textBoxEndIndex.set=function(t){this._structArray.uint16[this._pos2+9]=t},r.verticalTextBoxStartIndex.get=function(){return this._structArray.uint16[this._pos2+10]},r.verticalTextBoxStartIndex.set=function(t){this._structArray.uint16[this._pos2+10]=t},r.verticalTextBoxEndIndex.get=function(){return this._structArray.uint16[this._pos2+11]},r.verticalTextBoxEndIndex.set=function(t){this._structArray.uint16[this._pos2+11]=t},r.iconBoxStartIndex.get=function(){return this._structArray.uint16[this._pos2+12]},r.iconBoxStartIndex.set=function(t){this._structArray.uint16[this._pos2+12]=t},r.iconBoxEndIndex.get=function(){return this._structArray.uint16[this._pos2+13]},r.iconBoxEndIndex.set=function(t){this._structArray.uint16[this._pos2+13]=t},r.featureIndex.get=function(){return this._structArray.uint16[this._pos2+14]},r.featureIndex.set=function(t){this._structArray.uint16[this._pos2+14]=t},r.numHorizontalGlyphVertices.get=function(){return this._structArray.uint16[this._pos2+15]},r.numHorizontalGlyphVertices.set=function(t){this._structArray.uint16[this._pos2+15]=t},r.numVerticalGlyphVertices.get=function(){return this._structArray.uint16[this._pos2+16]},r.numVerticalGlyphVertices.set=function(t){this._structArray.uint16[this._pos2+16]=t},r.numIconVertices.get=function(){return this._structArray.uint16[this._pos2+17]},r.numIconVertices.set=function(t){this._structArray.uint16[this._pos2+17]=t},r.crossTileID.get=function(){return this._structArray.uint32[this._pos4+9]},r.crossTileID.set=function(t){this._structArray.uint32[this._pos4+9]=t},r.textBoxScale.get=function(){return this._structArray.float32[this._pos4+10]},r.textBoxScale.set=function(t){this._structArray.float32[this._pos4+10]=t},r.textOffset0.get=function(){return this._structArray.float32[this._pos4+11]},r.textOffset0.set=function(t){this._structArray.float32[this._pos4+11]=t},r.textOffset1.get=function(){return this._structArray.float32[this._pos4+12]},r.textOffset1.set=function(t){this._structArray.float32[this._pos4+12]=t},Object.defineProperties(e.prototype,r),e}(Hi)
Tn.prototype.size=52
var An=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(t){return new Tn(this,t)},e}(hn)
mi("SymbolInstanceArray",An)
var In=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e
var r={offsetX:{configurable:!0}}
return r.offsetX.get=function(){return this._structArray.float32[this._pos4+0]},r.offsetX.set=function(t){this._structArray.float32[this._pos4+0]=t},Object.defineProperties(e.prototype,r),e}(Hi)
In.prototype.size=4
var kn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getoffsetX=function(t){return this.float32[1*t+0]},e.prototype.get=function(t){return new In(this,t)},e}(fn)
mi("GlyphOffsetArray",kn)
var zn=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e
var r={x:{configurable:!0},y:{configurable:!0},tileUnitDistanceFromAnchor:{configurable:!0}}
return r.x.get=function(){return this._structArray.int16[this._pos2+0]},r.x.set=function(t){this._structArray.int16[this._pos2+0]=t},r.y.get=function(){return this._structArray.int16[this._pos2+1]},r.y.set=function(t){this._structArray.int16[this._pos2+1]=t},r.tileUnitDistanceFromAnchor.get=function(){return this._structArray.int16[this._pos2+2]},r.tileUnitDistanceFromAnchor.set=function(t){this._structArray.int16[this._pos2+2]=t},Object.defineProperties(e.prototype,r),e}(Hi)
zn.prototype.size=6
var Cn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getx=function(t){return this.int16[3*t+0]},e.prototype.gety=function(t){return this.int16[3*t+1]},e.prototype.gettileUnitDistanceFromAnchor=function(t){return this.int16[3*t+2]},e.prototype.get=function(t){return new zn(this,t)},e}(dn)
mi("SymbolLineVertexArray",Cn)
var Pn=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e
var r={featureIndex:{configurable:!0},sourceLayerIndex:{configurable:!0},bucketIndex:{configurable:!0}}
return r.featureIndex.get=function(){return this._structArray.uint32[this._pos4+0]},r.featureIndex.set=function(t){this._structArray.uint32[this._pos4+0]=t},r.sourceLayerIndex.get=function(){return this._structArray.uint16[this._pos2+2]},r.sourceLayerIndex.set=function(t){this._structArray.uint16[this._pos2+2]=t},r.bucketIndex.get=function(){return this._structArray.uint16[this._pos2+3]},r.bucketIndex.set=function(t){this._structArray.uint16[this._pos2+3]=t},Object.defineProperties(e.prototype,r),e}(Hi)
Pn.prototype.size=8
var Mn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(t){return new Pn(this,t)},e}(mn)
mi("FeatureIndexArray",Mn)
var Ln=Yi([{name:"a_pos",components:2,type:"Int16"}],4).members,Dn=function(t){void 0===t&&(t=[]),this.segments=t}
function Bn(t,e){return 256*(t=u(Math.floor(t),0,255))+u(Math.floor(e),0,255)}Dn.prototype.prepareSegment=function(t,e,r,i){var n=this.segments[this.segments.length-1]
return t>Dn.MAX_VERTEX_ARRAY_LENGTH&&w("Max vertices per segment is "+Dn.MAX_VERTEX_ARRAY_LENGTH+": bucket requested "+t),(!n||n.vertexLength+t>Dn.MAX_VERTEX_ARRAY_LENGTH||n.sortKey!==i)&&(n={vertexOffset:e.length,primitiveOffset:r.length,vertexLength:0,primitiveLength:0},void 0!==i&&(n.sortKey=i),this.segments.push(n)),n},Dn.prototype.get=function(){return this.segments},Dn.prototype.destroy=function(){for(var t=0,e=this.segments;t<e.length;t+=1){var r=e[t]
for(var i in r.vaos)r.vaos[i].destroy()}},Dn.simpleSegment=function(t,e,r,i){return new Dn([{vertexOffset:t,primitiveOffset:e,vertexLength:r,primitiveLength:i,vaos:{},sortKey:0}])},Dn.MAX_VERTEX_ARRAY_LENGTH=Math.pow(2,16)-1,mi("SegmentVector",Dn)
var Rn=function(){this.ids=[],this.positions=[],this.indexed=!1}
function Fn(t,e,r){var i=t[e]
t[e]=t[r],t[r]=i}Rn.prototype.add=function(t,e,r,i){this.ids.push(t),this.positions.push(e,r,i)},Rn.prototype.getPositions=function(t){for(var e=0,r=this.ids.length-1;e<r;){var i=e+r>>1
this.ids[i]>=t?r=i:e=i+1}for(var n=[];this.ids[e]===t;){var o=this.positions[3*e],a=this.positions[3*e+1],s=this.positions[3*e+2]
n.push({index:o,start:a,end:s}),e++}return n},Rn.serialize=function(t,e){var r=new Float64Array(t.ids),i=new Uint32Array(t.positions)
return function t(e,r,i,n){if(!(i>=n)){for(var o=e[i+n>>1],a=i-1,s=n+1;;){do{a++}while(e[a]<o)
do{s--}while(e[s]>o)
if(a>=s)break
Fn(e,a,s),Fn(r,3*a,3*s),Fn(r,3*a+1,3*s+1),Fn(r,3*a+2,3*s+2)}t(e,r,i,s),t(e,r,s+1,n)}}(r,i,0,r.length-1),e.push(r.buffer,i.buffer),{ids:r,positions:i}},Rn.deserialize=function(t){var e=new Rn
return e.ids=t.ids,e.positions=t.positions,e.indexed=!0,e},mi("FeaturePositionMap",Rn)
var On=function(t,e){this.gl=t.gl,this.location=e},Un=function(t){function e(e,r){t.call(this,e,r),this.current=0}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){this.current!==t&&(this.current=t,this.gl.uniform1i(this.location,t))},e}(On),Vn=function(t){function e(e,r){t.call(this,e,r),this.current=0}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){this.current!==t&&(this.current=t,this.gl.uniform1f(this.location,t))},e}(On),Nn=function(t){function e(e,r){t.call(this,e,r),this.current=[0,0]}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){t[0]===this.current[0]&&t[1]===this.current[1]||(this.current=t,this.gl.uniform2f(this.location,t[0],t[1]))},e}(On),jn=function(t){function e(e,r){t.call(this,e,r),this.current=[0,0,0]}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){t[0]===this.current[0]&&t[1]===this.current[1]&&t[2]===this.current[2]||(this.current=t,this.gl.uniform3f(this.location,t[0],t[1],t[2]))},e}(On),qn=function(t){function e(e,r){t.call(this,e,r),this.current=[0,0,0,0]}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){t[0]===this.current[0]&&t[1]===this.current[1]&&t[2]===this.current[2]&&t[3]===this.current[3]||(this.current=t,this.gl.uniform4f(this.location,t[0],t[1],t[2],t[3]))},e}(On),Zn=function(t){function e(e,r){t.call(this,e,r),this.current=Wt.transparent}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){t.r===this.current.r&&t.g===this.current.g&&t.b===this.current.b&&t.a===this.current.a||(this.current=t,this.gl.uniform4f(this.location,t.r,t.g,t.b,t.a))},e}(On),Gn=new Float32Array(16),Xn=function(t){function e(e,r){t.call(this,e,r),this.current=Gn}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){if(t[12]!==this.current[12]||t[0]!==this.current[0])return this.current=t,void this.gl.uniformMatrix4fv(this.location,!1,t)
for(var e=1;e<16;e++)if(t[e]!==this.current[e]){this.current=t,this.gl.uniformMatrix4fv(this.location,!1,t)
break}},e}(On)
function Wn(t){return[Bn(255*t.r,255*t.g),Bn(255*t.b,255*t.a)]}var Kn=function(t,e,r){this.value=t,this.names=e,this.uniformNames=this.names.map(function(t){return"u_"+t}),this.type=r,this.maxValue=-1/0}
Kn.prototype.defines=function(){return this.names.map(function(t){return"#define HAS_UNIFORM_u_"+t})},Kn.prototype.setConstantPatternPositions=function(){},Kn.prototype.populatePaintArray=function(){},Kn.prototype.updatePaintArray=function(){},Kn.prototype.upload=function(){},Kn.prototype.destroy=function(){},Kn.prototype.setUniforms=function(t,e,r,i){e.set(i.constantOr(this.value))},Kn.prototype.getBinding=function(t,e){return"color"===this.type?new Zn(t,e):new Vn(t,e)},Kn.serialize=function(t){var e=t.value,r=t.names,i=t.type
return{value:vi(e),names:r,type:i}},Kn.deserialize=function(t){var e=t.value,r=t.names,i=t.type
return new Kn(_i(e),r,i)}
var Hn=function(t,e,r){this.value=t,this.names=e,this.uniformNames=this.names.map(function(t){return"u_"+t}),this.type=r,this.maxValue=-1/0,this.patternPositions={patternTo:null,patternFrom:null}}
Hn.prototype.defines=function(){return this.names.map(function(t){return"#define HAS_UNIFORM_u_"+t})},Hn.prototype.populatePaintArray=function(){},Hn.prototype.updatePaintArray=function(){},Hn.prototype.upload=function(){},Hn.prototype.destroy=function(){},Hn.prototype.setConstantPatternPositions=function(t,e){this.patternPositions.patternTo=t.tlbr,this.patternPositions.patternFrom=e.tlbr},Hn.prototype.setUniforms=function(t,e,r,i,n){var o=this.patternPositions
"u_pattern_to"===n&&o.patternTo&&e.set(o.patternTo),"u_pattern_from"===n&&o.patternFrom&&e.set(o.patternFrom)},Hn.prototype.getBinding=function(t,e){return new qn(t,e)}
var Jn=function(t,e,r,i){this.expression=t,this.names=e,this.type=r,this.uniformNames=this.names.map(function(t){return"a_"+t}),this.maxValue=-1/0,this.paintVertexAttributes=e.map(function(t){return{name:"a_"+t,type:"Float32",components:"color"===r?2:1,offset:0}}),this.paintVertexArray=new i}
Jn.prototype.defines=function(){return[]},Jn.prototype.setConstantPatternPositions=function(){},Jn.prototype.populatePaintArray=function(t,e,r,i){var n=this.paintVertexArray,o=n.length
n.reserve(t)
var a=this.expression.evaluate(new Mi(0),e,{},[],i)
if("color"===this.type)for(var s=Wn(a),l=o;l<t;l++)n.emplaceBack(s[0],s[1])
else{for(var u=o;u<t;u++)n.emplaceBack(a)
this.maxValue=Math.max(this.maxValue,a)}},Jn.prototype.updatePaintArray=function(t,e,r,i){var n=this.paintVertexArray,o=this.expression.evaluate({zoom:0},r,i)
if("color"===this.type)for(var a=Wn(o),s=t;s<e;s++)n.emplace(s,a[0],a[1])
else{for(var l=t;l<e;l++)n.emplace(l,o)
this.maxValue=Math.max(this.maxValue,o)}},Jn.prototype.upload=function(t){this.paintVertexArray&&this.paintVertexArray.arrayBuffer&&(this.paintVertexBuffer&&this.paintVertexBuffer.buffer?this.paintVertexBuffer.updateData(this.paintVertexArray):this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent))},Jn.prototype.destroy=function(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy()},Jn.prototype.setUniforms=function(t,e){e.set(0)},Jn.prototype.getBinding=function(t,e){return new Vn(t,e)}
var Yn=function(t,e,r,i,n,o){this.expression=t,this.names=e,this.uniformNames=this.names.map(function(t){return"u_"+t+"_t"}),this.type=r,this.useIntegerZoom=i,this.zoom=n,this.maxValue=-1/0
var a=o
this.paintVertexAttributes=e.map(function(t){return{name:"a_"+t,type:"Float32",components:"color"===r?4:2,offset:0}}),this.paintVertexArray=new a}
Yn.prototype.defines=function(){return[]},Yn.prototype.setConstantPatternPositions=function(){},Yn.prototype.populatePaintArray=function(t,e,r,i){var n=this.paintVertexArray,o=n.length
n.reserve(t)
var a=this.expression.evaluate(new Mi(this.zoom),e,{},[],i),s=this.expression.evaluate(new Mi(this.zoom+1),e,{},[],i)
if("color"===this.type)for(var l=Wn(a),u=Wn(s),c=o;c<t;c++)n.emplaceBack(l[0],l[1],u[0],u[1])
else{for(var p=o;p<t;p++)n.emplaceBack(a,s)
this.maxValue=Math.max(this.maxValue,a,s)}},Yn.prototype.updatePaintArray=function(t,e,r,i){var n=this.paintVertexArray,o=this.expression.evaluate({zoom:this.zoom},r,i),a=this.expression.evaluate({zoom:this.zoom+1},r,i)
if("color"===this.type)for(var s=Wn(o),l=Wn(a),u=t;u<e;u++)n.emplace(u,s[0],s[1],l[0],l[1])
else{for(var c=t;c<e;c++)n.emplace(c,o,a)
this.maxValue=Math.max(this.maxValue,o,a)}},Yn.prototype.upload=function(t){this.paintVertexArray&&this.paintVertexArray.arrayBuffer&&(this.paintVertexBuffer&&this.paintVertexBuffer.buffer?this.paintVertexBuffer.updateData(this.paintVertexArray):this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent))},Yn.prototype.destroy=function(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy()},Yn.prototype.interpolationFactor=function(t){return this.useIntegerZoom?this.expression.interpolationFactor(Math.floor(t),this.zoom,this.zoom+1):this.expression.interpolationFactor(t,this.zoom,this.zoom+1)},Yn.prototype.setUniforms=function(t,e,r){e.set(this.interpolationFactor(r.zoom))},Yn.prototype.getBinding=function(t,e){return new Vn(t,e)}
var $n=function(t,e,r,i,n,o,a){this.expression=t,this.names=e,this.type=r,this.uniformNames=this.names.map(function(t){return"u_"+t+"_t"}),this.useIntegerZoom=i,this.zoom=n,this.maxValue=-1/0,this.layerId=a,this.paintVertexAttributes=e.map(function(t){return{name:"a_"+t,type:"Uint16",components:4,offset:0}}),this.zoomInPaintVertexArray=new o,this.zoomOutPaintVertexArray=new o}
$n.prototype.defines=function(){return[]},$n.prototype.setConstantPatternPositions=function(){},$n.prototype.populatePaintArray=function(t,e,r){var i=this.zoomInPaintVertexArray,n=this.zoomOutPaintVertexArray,o=this.layerId,a=i.length
if(i.reserve(t),n.reserve(t),r&&e.patterns&&e.patterns[o]){var s=e.patterns[o],l=s.min,u=s.mid,c=s.max,p=r[l],h=r[u],f=r[c]
if(!p||!h||!f)return
for(var d=a;d<t;d++)i.emplaceBack(h.tl[0],h.tl[1],h.br[0],h.br[1],p.tl[0],p.tl[1],p.br[0],p.br[1]),n.emplaceBack(h.tl[0],h.tl[1],h.br[0],h.br[1],f.tl[0],f.tl[1],f.br[0],f.br[1])}},$n.prototype.updatePaintArray=function(t,e,r,i,n){var o=this.zoomInPaintVertexArray,a=this.zoomOutPaintVertexArray,s=this.layerId
if(n&&r.patterns&&r.patterns[s]){var l=r.patterns[s],u=l.min,c=l.mid,p=l.max,h=n[u],f=n[c],d=n[p]
if(!h||!f||!d)return
for(var m=t;m<e;m++)o.emplace(m,f.tl[0],f.tl[1],f.br[0],f.br[1],h.tl[0],h.tl[1],h.br[0],h.br[1]),a.emplace(m,f.tl[0],f.tl[1],f.br[0],f.br[1],d.tl[0],d.tl[1],d.br[0],d.br[1])}},$n.prototype.upload=function(t){this.zoomInPaintVertexArray&&this.zoomInPaintVertexArray.arrayBuffer&&this.zoomOutPaintVertexArray&&this.zoomOutPaintVertexArray.arrayBuffer&&(this.zoomInPaintVertexBuffer=t.createVertexBuffer(this.zoomInPaintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent),this.zoomOutPaintVertexBuffer=t.createVertexBuffer(this.zoomOutPaintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent))},$n.prototype.destroy=function(){this.zoomOutPaintVertexBuffer&&this.zoomOutPaintVertexBuffer.destroy(),this.zoomInPaintVertexBuffer&&this.zoomInPaintVertexBuffer.destroy()},$n.prototype.setUniforms=function(t,e){e.set(0)},$n.prototype.getBinding=function(t,e){return new Vn(t,e)}
var Qn=function(){this.binders={},this.cacheKey="",this._buffers=[],this._featureMap=new Rn,this._bufferOffset=0}
Qn.createDynamic=function(t,e,r){var i=new Qn,n=[]
for(var o in t.paint._values)if(r(o)){var a=t.paint.get(o)
if(a instanceof Ui&&hr(a.property.specification)){var s=eo(o,t.type),l=a.property.specification.type,u=a.property.useIntegerZoom
if("cross-faded"===a.property.specification["property-type"]||"cross-faded-data-driven"===a.property.specification["property-type"])if("constant"===a.value.kind)i.binders[o]=new Hn(a.value.value,s,l),n.push("/u_"+o)
else{var c=ro(o,l,"source")
i.binders[o]=new $n(a.value,s,l,u,e,c,t.id),n.push("/a_"+o)}else if("constant"===a.value.kind)i.binders[o]=new Kn(a.value.value,s,l),n.push("/u_"+o)
else if("source"===a.value.kind){var p=ro(o,l,"source")
i.binders[o]=new Jn(a.value,s,l,p),n.push("/a_"+o)}else{var h=ro(o,l,"composite")
i.binders[o]=new Yn(a.value,s,l,u,e,h),n.push("/z_"+o)}}}return i.cacheKey=n.sort().join(""),i},Qn.prototype.populatePaintArrays=function(t,e,r,i,n){for(var o in this.binders)this.binders[o].populatePaintArray(t,e,i,n)
void 0!==e.id&&this._featureMap.add(+e.id,r,this._bufferOffset,t),this._bufferOffset=t},Qn.prototype.setConstantPatternPositions=function(t,e){for(var r in this.binders)this.binders[r].setConstantPatternPositions(t,e)},Qn.prototype.updatePaintArrays=function(t,e,r,i){var n=!1
for(var o in t)for(var a=0,s=this._featureMap.getPositions(+o);a<s.length;a+=1){var l=s[a],u=e.feature(l.index)
for(var c in this.binders){var p=this.binders[c]
if(!(p instanceof Kn||p instanceof Hn)&&!0===p.expression.isStateDependent){var h=r.paint.get(c)
p.expression=h.value,p.updatePaintArray(l.start,l.end,u,t[o],i),n=!0}}}return n},Qn.prototype.defines=function(){var t=[]
for(var e in this.binders)t.push.apply(t,this.binders[e].defines())
return t},Qn.prototype.getPaintVertexBuffers=function(){return this._buffers},Qn.prototype.getUniforms=function(t,e){var r=[]
for(var i in this.binders)for(var n=this.binders[i],o=0,a=n.uniformNames;o<a.length;o+=1){var s=a[o]
if(e[s]){var l=n.getBinding(t,e[s])
r.push({name:s,property:i,binding:l})}}return r},Qn.prototype.setUniforms=function(t,e,r,i){for(var n=0,o=e;n<o.length;n+=1){var a=o[n],s=a.name,l=a.property,u=a.binding
this.binders[l].setUniforms(t,u,i,r.get(l),s)}},Qn.prototype.updatePatternPaintBuffers=function(t){var e=[]
for(var r in this.binders){var i=this.binders[r]
if(i instanceof $n){var n=2===t.fromScale?i.zoomInPaintVertexBuffer:i.zoomOutPaintVertexBuffer
n&&e.push(n)}else(i instanceof Jn||i instanceof Yn)&&i.paintVertexBuffer&&e.push(i.paintVertexBuffer)}this._buffers=e},Qn.prototype.upload=function(t){for(var e in this.binders)this.binders[e].upload(t)
var r=[]
for(var i in this.binders){var n=this.binders[i];(n instanceof Jn||n instanceof Yn)&&n.paintVertexBuffer&&r.push(n.paintVertexBuffer)}this._buffers=r},Qn.prototype.destroy=function(){for(var t in this.binders)this.binders[t].destroy()}
var to=function(t,e,r,i){void 0===i&&(i=function(){return!0}),this.programConfigurations={}
for(var n=0,o=e;n<o.length;n+=1){var a=o[n]
this.programConfigurations[a.id]=Qn.createDynamic(a,r,i),this.programConfigurations[a.id].layoutAttributes=t}this.needsUpload=!1}
function eo(t,e){return{"text-opacity":["opacity"],"icon-opacity":["opacity"],"text-color":["fill_color"],"icon-color":["fill_color"],"text-halo-color":["halo_color"],"icon-halo-color":["halo_color"],"text-halo-blur":["halo_blur"],"icon-halo-blur":["halo_blur"],"text-halo-width":["halo_width"],"icon-halo-width":["halo_width"],"line-gap-width":["gapwidth"],"line-pattern":["pattern_to","pattern_from"],"fill-pattern":["pattern_to","pattern_from"],"fill-extrusion-pattern":["pattern_to","pattern_from"]}[t]||[t.replace(e+"-","").replace(/-/g,"_")]}function ro(t,e,r){var i={color:{source:gn,composite:xn},number:{source:fn,composite:gn}},n=function(t){return{"line-pattern":{source:nn,composite:nn},"fill-pattern":{source:nn,composite:nn},"fill-extrusion-pattern":{source:nn,composite:nn}}[t]}(t)
return n&&n[r]||i[e][r]}to.prototype.populatePaintArrays=function(t,e,r,i,n){for(var o in this.programConfigurations)this.programConfigurations[o].populatePaintArrays(t,e,r,i,n)
this.needsUpload=!0},to.prototype.updatePaintArrays=function(t,e,r,i){for(var n=0,o=r;n<o.length;n+=1){var a=o[n]
this.needsUpload=this.programConfigurations[a.id].updatePaintArrays(t,e,a,i)||this.needsUpload}},to.prototype.get=function(t){return this.programConfigurations[t]},to.prototype.upload=function(t){if(this.needsUpload){for(var e in this.programConfigurations)this.programConfigurations[e].upload(t)
this.needsUpload=!1}},to.prototype.destroy=function(){for(var t in this.programConfigurations)this.programConfigurations[t].destroy()},mi("ConstantBinder",Kn),mi("CrossFadedConstantBinder",Hn),mi("SourceExpressionBinder",Jn),mi("CrossFadedCompositeBinder",$n),mi("CompositeExpressionBinder",Yn),mi("ProgramConfiguration",Qn,{omit:["_buffers"]}),mi("ProgramConfigurationSet",to)
var io=8192,no={min:-1*Math.pow(2,14),max:Math.pow(2,14)-1}
function oo(t){for(var e=io/t.extent,r=t.loadGeometry(),i=0;i<r.length;i++)for(var n=r[i],o=0;o<n.length;o++){var a=n[o]
a.x=Math.round(a.x*e),a.y=Math.round(a.y*e),(a.x<no.min||a.x>no.max||a.y<no.min||a.y>no.max)&&(w("Geometry exceeds allowed extent, reduce your vector tile buffer size"),a.x=u(a.x,no.min,no.max),a.y=u(a.y,no.min,no.max))}return r}function ao(t,e,r,i,n){t.emplaceBack(2*e+(i+1)/2,2*r+(n+1)/2)}var so=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map(function(t){return t.id}),this.index=t.index,this.hasPattern=!1,this.layoutVertexArray=new Qi,this.indexArray=new yn,this.segments=new Dn,this.programConfigurations=new to(Ln,t.layers,t.zoom),this.stateDependentLayerIds=this.layers.filter(function(t){return t.isStateDependent()}).map(function(t){return t.id})}
function lo(t,e){for(var r=0;r<t.length;r++)if(_o(e,t[r]))return!0
for(var i=0;i<e.length;i++)if(_o(t,e[i]))return!0
return!!ho(t,e)}function uo(t,e,r){return!!_o(t,e)||!!mo(e,t,r)}function co(t,e){if(1===t.length)return vo(e,t[0])
for(var r=0;r<e.length;r++)for(var i=e[r],n=0;n<i.length;n++)if(_o(t,i[n]))return!0
for(var o=0;o<t.length;o++)if(vo(e,t[o]))return!0
for(var a=0;a<e.length;a++)if(ho(t,e[a]))return!0
return!1}function po(t,e,r){if(t.length>1){if(ho(t,e))return!0
for(var i=0;i<e.length;i++)if(mo(e[i],t,r))return!0}for(var n=0;n<t.length;n++)if(mo(t[n],e,r))return!0
return!1}function ho(t,e){if(0===t.length||0===e.length)return!1
for(var r=0;r<t.length-1;r++)for(var i=t[r],n=t[r+1],o=0;o<e.length-1;o++)if(fo(i,n,e[o],e[o+1]))return!0
return!1}function fo(t,e,r,i){return S(t,r,i)!==S(e,r,i)&&S(t,e,r)!==S(t,e,i)}function mo(t,e,r){var i=r*r
if(1===e.length)return t.distSqr(e[0])<i
for(var n=1;n<e.length;n++)if(yo(t,e[n-1],e[n])<i)return!0
return!1}function yo(t,e,r){var i=e.distSqr(r)
if(0===i)return t.distSqr(e)
var n=((t.x-e.x)*(r.x-e.x)+(t.y-e.y)*(r.y-e.y))/i
return n<0?t.distSqr(e):n>1?t.distSqr(r):t.distSqr(r.sub(e)._mult(n)._add(e))}function vo(t,e){for(var r,i,n,o=!1,a=0;a<t.length;a++)for(var s=0,l=(r=t[a]).length-1;s<r.length;l=s++)i=r[s],n=r[l],i.y>e.y!=n.y>e.y&&e.x<(n.x-i.x)*(e.y-i.y)/(n.y-i.y)+i.x&&(o=!o)
return o}function _o(t,e){for(var r=!1,i=0,n=t.length-1;i<t.length;n=i++){var o=t[i],a=t[n]
o.y>e.y!=a.y>e.y&&e.x<(a.x-o.x)*(e.y-o.y)/(a.y-o.y)+o.x&&(r=!r)}return r}function go(t,e,r){var i=r[0],n=r[2]
if(t.x<i.x&&e.x<i.x||t.x>n.x&&e.x>n.x||t.y<i.y&&e.y<i.y||t.y>n.y&&e.y>n.y)return!1
var o=S(t,e,r[0])
return o!==S(t,e,r[1])||o!==S(t,e,r[2])||o!==S(t,e,r[3])}function xo(t,e,r){var i=e.paint.get(t).value
return"constant"===i.kind?i.value:r.programConfigurations.get(e.id).binders[t].maxValue}function bo(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function wo(t,e,r,i,o){if(!e[0]&&!e[1])return t
var a=n.convert(e)._mult(o)
"viewport"===r&&a._rotate(-i)
for(var s=[],l=0;l<t.length;l++){var u=t[l]
s.push(u.sub(a))}return s}so.prototype.populate=function(t,e){var r=this.layers[0],i=[],n=null
"circle"===r.type&&(n=r.layout.get("circle-sort-key"))
for(var o=0,a=t;o<a.length;o+=1){var s=a[o],l=s.feature,u=s.index,c=s.sourceLayerIndex
if(this.layers[0]._featureFilter(new Mi(this.zoom),l)){var p=oo(l),h=n?n.evaluate(l,{}):void 0,f={id:l.id,properties:l.properties,type:l.type,sourceLayerIndex:c,index:u,geometry:p,patterns:{},sortKey:h}
i.push(f)}}n&&i.sort(function(t,e){return t.sortKey-e.sortKey})
for(var d=0,m=i;d<m.length;d+=1){var y=m[d],v=y,_=v.geometry,g=v.index,x=v.sourceLayerIndex,b=t[g].feature
this.addFeature(y,_,g),e.featureIndex.insert(b,_,g,x,this.index)}},so.prototype.update=function(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r)},so.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},so.prototype.uploadPending=function(){return!this.uploaded||this.programConfigurations.needsUpload},so.prototype.upload=function(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Ln),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0},so.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy())},so.prototype.addFeature=function(t,e,r){for(var i=0,n=e;i<n.length;i+=1)for(var o=0,a=n[i];o<a.length;o+=1){var s=a[o],l=s.x,u=s.y
if(!(l<0||l>=io||u<0||u>=io)){var c=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray,t.sortKey),p=c.vertexLength
ao(this.layoutVertexArray,l,u,-1,-1),ao(this.layoutVertexArray,l,u,1,-1),ao(this.layoutVertexArray,l,u,1,1),ao(this.layoutVertexArray,l,u,-1,1),this.indexArray.emplaceBack(p,p+1,p+2),this.indexArray.emplaceBack(p,p+3,p+2),c.vertexLength+=4,c.primitiveLength+=2}}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,{})},mi("CircleBucket",so,{omit:["layers"]})
var So,Eo=new Xi({"circle-sort-key":new ji(St.layout_circle["circle-sort-key"])}),To={paint:new Xi({"circle-radius":new ji(St.paint_circle["circle-radius"]),"circle-color":new ji(St.paint_circle["circle-color"]),"circle-blur":new ji(St.paint_circle["circle-blur"]),"circle-opacity":new ji(St.paint_circle["circle-opacity"]),"circle-translate":new Ni(St.paint_circle["circle-translate"]),"circle-translate-anchor":new Ni(St.paint_circle["circle-translate-anchor"]),"circle-pitch-scale":new Ni(St.paint_circle["circle-pitch-scale"]),"circle-pitch-alignment":new Ni(St.paint_circle["circle-pitch-alignment"]),"circle-stroke-width":new ji(St.paint_circle["circle-stroke-width"]),"circle-stroke-color":new ji(St.paint_circle["circle-stroke-color"]),"circle-stroke-opacity":new ji(St.paint_circle["circle-stroke-opacity"])}),layout:Eo},Ao="undefined"!=typeof Float32Array?Float32Array:Array
function Io(t,e,r){var i=e[0],n=e[1],o=e[2],a=e[3]
return t[0]=r[0]*i+r[4]*n+r[8]*o+r[12]*a,t[1]=r[1]*i+r[5]*n+r[9]*o+r[13]*a,t[2]=r[2]*i+r[6]*n+r[10]*o+r[14]*a,t[3]=r[3]*i+r[7]*n+r[11]*o+r[15]*a,t}Math.hypot||(Math.hypot=function(){for(var t=arguments,e=0,r=arguments.length;r--;)e+=t[r]*t[r]
return Math.sqrt(e)}),So=new Ao(3),Ao!=Float32Array&&(So[0]=0,So[1]=0,So[2]=0),function(){var t=new Ao(4)
Ao!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0)}()
var ko=function(t){function e(e){t.call(this,e,To)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.createBucket=function(t){return new so(t)},e.prototype.queryRadius=function(t){var e=t
return xo("circle-radius",this,e)+xo("circle-stroke-width",this,e)+bo(this.paint.get("circle-translate"))},e.prototype.queryIntersectsFeature=function(t,e,r,i,n,o,a,s){for(var l=wo(t,this.paint.get("circle-translate"),this.paint.get("circle-translate-anchor"),o.angle,a),u=this.paint.get("circle-radius").evaluate(e,r)+this.paint.get("circle-stroke-width").evaluate(e,r),c="map"===this.paint.get("circle-pitch-alignment"),p=c?l:function(t,e){return l.map(function(t){return zo(t,e)})}(0,s),h=c?u*a:u,f=0,d=i;f<d.length;f+=1)for(var m=0,y=d[f];m<y.length;m+=1){var v=y[m],_=c?v:zo(v,s),g=h,x=Io([],[v.x,v.y,0,1],s)
if("viewport"===this.paint.get("circle-pitch-scale")&&"map"===this.paint.get("circle-pitch-alignment")?g*=x[3]/o.cameraToCenterDistance:"map"===this.paint.get("circle-pitch-scale")&&"viewport"===this.paint.get("circle-pitch-alignment")&&(g*=o.cameraToCenterDistance/x[3]),uo(p,_,g))return!0}return!1},e}(Wi)
function zo(t,e){var r=Io([],[t.x,t.y,0,1],e)
return new n(r[0]/r[3],r[1]/r[3])}var Co=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(so)
function Po(t,e,r,i){var n=e.width,o=e.height
if(i){if(i instanceof Uint8ClampedArray)i=new Uint8Array(i.buffer)
else if(i.length!==n*o*r)throw new RangeError("mismatched image size")}else i=new Uint8Array(n*o*r)
return t.width=n,t.height=o,t.data=i,t}function Mo(t,e,r){var i=e.width,n=e.height
if(i!==t.width||n!==t.height){var o=Po({},{width:i,height:n},r)
Lo(t,o,{x:0,y:0},{x:0,y:0},{width:Math.min(t.width,i),height:Math.min(t.height,n)},r),t.width=i,t.height=n,t.data=o.data}}function Lo(t,e,r,i,n,o){if(0===n.width||0===n.height)return e
if(n.width>t.width||n.height>t.height||r.x>t.width-n.width||r.y>t.height-n.height)throw new RangeError("out of range source coordinates for image copy")
if(n.width>e.width||n.height>e.height||i.x>e.width-n.width||i.y>e.height-n.height)throw new RangeError("out of range destination coordinates for image copy")
for(var a=t.data,s=e.data,l=0;l<n.height;l++)for(var u=((r.y+l)*t.width+r.x)*o,c=((i.y+l)*e.width+i.x)*o,p=0;p<n.width*o;p++)s[c+p]=a[u+p]
return e}mi("HeatmapBucket",Co,{omit:["layers"]})
var Do=function(t,e){Po(this,t,1,e)}
Do.prototype.resize=function(t){Mo(this,t,1)},Do.prototype.clone=function(){return new Do({width:this.width,height:this.height},new Uint8Array(this.data))},Do.copy=function(t,e,r,i,n){Lo(t,e,r,i,n,1)}
var Bo=function(t,e){Po(this,t,4,e)}
Bo.prototype.resize=function(t){Mo(this,t,4)},Bo.prototype.replace=function(t,e){e?this.data.set(t):t instanceof Uint8ClampedArray?this.data=new Uint8Array(t.buffer):this.data=t},Bo.prototype.clone=function(){return new Bo({width:this.width,height:this.height},new Uint8Array(this.data))},Bo.copy=function(t,e,r,i,n){Lo(t,e,r,i,n,4)},mi("AlphaImage",Do),mi("RGBAImage",Bo)
var Ro={paint:new Xi({"heatmap-radius":new ji(St.paint_heatmap["heatmap-radius"]),"heatmap-weight":new ji(St.paint_heatmap["heatmap-weight"]),"heatmap-intensity":new Ni(St.paint_heatmap["heatmap-intensity"]),"heatmap-color":new Gi(St.paint_heatmap["heatmap-color"]),"heatmap-opacity":new Ni(St.paint_heatmap["heatmap-opacity"])})}
function Fo(t,e){for(var r=new Uint8Array(1024),i={},n=0,o=0;n<256;n++,o+=4){i[e]=n/255
var a=t.evaluate(i)
r[o+0]=Math.floor(255*a.r/a.a),r[o+1]=Math.floor(255*a.g/a.a),r[o+2]=Math.floor(255*a.b/a.a),r[o+3]=Math.floor(255*a.a)}return new Bo({width:256,height:1},r)}var Oo=function(t){function e(e){t.call(this,e,Ro),this._updateColorRamp()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.createBucket=function(t){return new Co(t)},e.prototype._handleSpecialPaintPropertyUpdate=function(t){"heatmap-color"===t&&this._updateColorRamp()},e.prototype._updateColorRamp=function(){var t=this._transitionablePaint._values["heatmap-color"].value.expression
this.colorRamp=Fo(t,"heatmapDensity"),this.colorRampTexture=null},e.prototype.resize=function(){this.heatmapFbo&&(this.heatmapFbo.destroy(),this.heatmapFbo=null)},e.prototype.queryRadius=function(){return 0},e.prototype.queryIntersectsFeature=function(){return!1},e.prototype.hasOffscreenPass=function(){return 0!==this.paint.get("heatmap-opacity")&&"none"!==this.visibility},e}(Wi),Uo={paint:new Xi({"hillshade-illumination-direction":new Ni(St.paint_hillshade["hillshade-illumination-direction"]),"hillshade-illumination-anchor":new Ni(St.paint_hillshade["hillshade-illumination-anchor"]),"hillshade-exaggeration":new Ni(St.paint_hillshade["hillshade-exaggeration"]),"hillshade-shadow-color":new Ni(St.paint_hillshade["hillshade-shadow-color"]),"hillshade-highlight-color":new Ni(St.paint_hillshade["hillshade-highlight-color"]),"hillshade-accent-color":new Ni(St.paint_hillshade["hillshade-accent-color"])})},Vo=function(t){function e(e){t.call(this,e,Uo)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.hasOffscreenPass=function(){return 0!==this.paint.get("hillshade-exaggeration")&&"none"!==this.visibility},e}(Wi),No=Yi([{name:"a_pos",components:2,type:"Int16"}],4).members,jo=Zo,qo=Zo
function Zo(t,e,r){r=r||2
var i,n,o,a,s,l,u,c=e&&e.length,p=c?e[0]*r:t.length,h=Go(t,0,p,r,!0),f=[]
if(!h||h.next===h.prev)return f
if(c&&(h=function(t,e,r,i){var n,o,a,s=[]
for(n=0,o=e.length;n<o;n++)(a=Go(t,e[n]*i,n<o-1?e[n+1]*i:t.length,i,!1))===a.next&&(a.steiner=!0),s.push(ra(a))
for(s.sort($o),n=0;n<s.length;n++)Qo(s[n],r),r=Xo(r,r.next)
return r}(t,e,h,r)),t.length>80*r){i=o=t[0],n=a=t[1]
for(var d=r;d<p;d+=r)(s=t[d])<i&&(i=s),(l=t[d+1])<n&&(n=l),s>o&&(o=s),l>a&&(a=l)
u=0!==(u=Math.max(o-i,a-n))?1/u:0}return Wo(h,f,r,i,n,u),f}function Go(t,e,r,i,n){var o,a
if(n===ma(t,e,r,i)>0)for(o=e;o<r;o+=i)a=ha(o,t[o],t[o+1],a)
else for(o=r-i;o>=e;o-=i)a=ha(o,t[o],t[o+1],a)
return a&&aa(a,a.next)&&(fa(a),a=a.next),a}function Xo(t,e){if(!t)return t
e||(e=t)
var r,i=t
do{if(r=!1,i.steiner||!aa(i,i.next)&&0!==oa(i.prev,i,i.next))i=i.next
else{if(fa(i),(i=e=i.prev)===i.next)break
r=!0}}while(r||i!==e)
return e}function Wo(t,e,r,i,n,o,a){if(t){!a&&o&&function(t,e,r,i){var n=t
do{null===n.z&&(n.z=ea(n.x,n.y,e,r,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next}while(n!==t)
n.prevZ.nextZ=null,n.prevZ=null,function(t){var e,r,i,n,o,a,s,l,u=1
do{for(r=t,t=null,o=null,a=0;r;){for(a++,i=r,s=0,e=0;e<u&&(s++,i=i.nextZ);e++);for(l=u;s>0||l>0&&i;)0!==s&&(0===l||!i||r.z<=i.z)?(n=r,r=r.nextZ,s--):(n=i,i=i.nextZ,l--),o?o.nextZ=n:t=n,n.prevZ=o,o=n
r=i}o.nextZ=null,u*=2}while(a>1)}(n)}(t,i,n,o)
for(var s,l,u=t;t.prev!==t.next;)if(s=t.prev,l=t.next,o?Ho(t,i,n,o):Ko(t))e.push(s.i/r),e.push(t.i/r),e.push(l.i/r),fa(t),t=l.next,u=l.next
else if((t=l)===u){a?1===a?Wo(t=Jo(Xo(t),e,r),e,r,i,n,o,2):2===a&&Yo(t,e,r,i,n,o):Wo(Xo(t),e,r,i,n,o,1)
break}}}function Ko(t){var e=t.prev,r=t,i=t.next
if(oa(e,r,i)>=0)return!1
for(var n=t.next.next;n!==t.prev;){if(ia(e.x,e.y,r.x,r.y,i.x,i.y,n.x,n.y)&&oa(n.prev,n,n.next)>=0)return!1
n=n.next}return!0}function Ho(t,e,r,i){var n=t.prev,o=t,a=t.next
if(oa(n,o,a)>=0)return!1
for(var s=n.x<o.x?n.x<a.x?n.x:a.x:o.x<a.x?o.x:a.x,l=n.y<o.y?n.y<a.y?n.y:a.y:o.y<a.y?o.y:a.y,u=n.x>o.x?n.x>a.x?n.x:a.x:o.x>a.x?o.x:a.x,c=n.y>o.y?n.y>a.y?n.y:a.y:o.y>a.y?o.y:a.y,p=ea(s,l,e,r,i),h=ea(u,c,e,r,i),f=t.prevZ,d=t.nextZ;f&&f.z>=p&&d&&d.z<=h;){if(f!==t.prev&&f!==t.next&&ia(n.x,n.y,o.x,o.y,a.x,a.y,f.x,f.y)&&oa(f.prev,f,f.next)>=0)return!1
if(f=f.prevZ,d!==t.prev&&d!==t.next&&ia(n.x,n.y,o.x,o.y,a.x,a.y,d.x,d.y)&&oa(d.prev,d,d.next)>=0)return!1
d=d.nextZ}for(;f&&f.z>=p;){if(f!==t.prev&&f!==t.next&&ia(n.x,n.y,o.x,o.y,a.x,a.y,f.x,f.y)&&oa(f.prev,f,f.next)>=0)return!1
f=f.prevZ}for(;d&&d.z<=h;){if(d!==t.prev&&d!==t.next&&ia(n.x,n.y,o.x,o.y,a.x,a.y,d.x,d.y)&&oa(d.prev,d,d.next)>=0)return!1
d=d.nextZ}return!0}function Jo(t,e,r){var i=t
do{var n=i.prev,o=i.next.next
!aa(n,o)&&sa(n,i,i.next,o)&&ca(n,o)&&ca(o,n)&&(e.push(n.i/r),e.push(i.i/r),e.push(o.i/r),fa(i),fa(i.next),i=t=o),i=i.next}while(i!==t)
return Xo(i)}function Yo(t,e,r,i,n,o){var a=t
do{for(var s=a.next.next;s!==a.prev;){if(a.i!==s.i&&na(a,s)){var l=pa(a,s)
return a=Xo(a,a.next),l=Xo(l,l.next),Wo(a,e,r,i,n,o),void Wo(l,e,r,i,n,o)}s=s.next}a=a.next}while(a!==t)}function $o(t,e){return t.x-e.x}function Qo(t,e){if(e=function(t,e){var r,i=e,n=t.x,o=t.y,a=-1/0
do{if(o<=i.y&&o>=i.next.y&&i.next.y!==i.y){var s=i.x+(o-i.y)*(i.next.x-i.x)/(i.next.y-i.y)
if(s<=n&&s>a){if(a=s,s===n){if(o===i.y)return i
if(o===i.next.y)return i.next}r=i.x<i.next.x?i:i.next}}i=i.next}while(i!==e)
if(!r)return null
if(n===a)return r
var l,u=r,c=r.x,p=r.y,h=1/0
i=r
do{n>=i.x&&i.x>=c&&n!==i.x&&ia(o<p?n:a,o,c,p,o<p?a:n,o,i.x,i.y)&&(l=Math.abs(o-i.y)/(n-i.x),ca(i,t)&&(l<h||l===h&&(i.x>r.x||i.x===r.x&&ta(r,i)))&&(r=i,h=l)),i=i.next}while(i!==u)
return r}(t,e)){var r=pa(e,t)
Xo(r,r.next)}}function ta(t,e){return oa(t.prev,t,e.prev)<0&&oa(e.next,t,t.next)<0}function ea(t,e,r,i,n){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)*n)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-i)*n)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function ra(t){var e=t,r=t
do{(e.x<r.x||e.x===r.x&&e.y<r.y)&&(r=e),e=e.next}while(e!==t)
return r}function ia(t,e,r,i,n,o,a,s){return(n-a)*(e-s)-(t-a)*(o-s)>=0&&(t-a)*(i-s)-(r-a)*(e-s)>=0&&(r-a)*(o-s)-(n-a)*(i-s)>=0}function na(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var r=t
do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&sa(r,r.next,t,e))return!0
r=r.next}while(r!==t)
return!1}(t,e)&&(ca(t,e)&&ca(e,t)&&function(t,e){var r=t,i=!1,n=(t.x+e.x)/2,o=(t.y+e.y)/2
do{r.y>o!=r.next.y>o&&r.next.y!==r.y&&n<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next}while(r!==t)
return i}(t,e)&&(oa(t.prev,t,e.prev)||oa(t,e.prev,e))||aa(t,e)&&oa(t.prev,t,t.next)>0&&oa(e.prev,e,e.next)>0)}function oa(t,e,r){return(e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function aa(t,e){return t.x===e.x&&t.y===e.y}function sa(t,e,r,i){var n=ua(oa(t,e,r)),o=ua(oa(t,e,i)),a=ua(oa(r,i,t)),s=ua(oa(r,i,e))
return n!==o&&a!==s||!(0!==n||!la(t,r,e))||!(0!==o||!la(t,i,e))||!(0!==a||!la(r,t,i))||!(0!==s||!la(r,e,i))}function la(t,e,r){return e.x<=Math.max(t.x,r.x)&&e.x>=Math.min(t.x,r.x)&&e.y<=Math.max(t.y,r.y)&&e.y>=Math.min(t.y,r.y)}function ua(t){return t>0?1:t<0?-1:0}function ca(t,e){return oa(t.prev,t,t.next)<0?oa(t,e,t.next)>=0&&oa(t,t.prev,e)>=0:oa(t,e,t.prev)<0||oa(t,t.next,e)<0}function pa(t,e){var r=new da(t.i,t.x,t.y),i=new da(e.i,e.x,e.y),n=t.next,o=e.prev
return t.next=e,e.prev=t,r.next=n,n.prev=r,i.next=r,r.prev=i,o.next=i,i.prev=o,i}function ha(t,e,r,i){var n=new da(t,e,r)
return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function fa(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function da(t,e,r){this.i=t,this.x=e,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ma(t,e,r,i){for(var n=0,o=e,a=r-i;o<r;o+=i)n+=(t[a]-t[o])*(t[o+1]+t[a+1]),a=o
return n}function ya(t,e,r,i,n){!function t(e,r,i,n,o){for(;n>i;){if(n-i>600){var a=n-i+1,s=r-i+1,l=Math.log(a),u=.5*Math.exp(2*l/3),c=.5*Math.sqrt(l*u*(a-u)/a)*(s-a/2<0?-1:1)
t(e,r,Math.max(i,Math.floor(r-s*u/a+c)),Math.min(n,Math.floor(r+(a-s)*u/a+c)),o)}var p=e[r],h=i,f=n
for(va(e,i,r),o(e[n],p)>0&&va(e,i,n);h<f;){for(va(e,h,f),h++,f--;o(e[h],p)<0;)h++
for(;o(e[f],p)>0;)f--}0===o(e[i],p)?va(e,i,f):va(e,++f,n),f<=r&&(i=f+1),r<=f&&(n=f-1)}}(t,e,r||0,i||t.length-1,n||_a)}function va(t,e,r){var i=t[e]
t[e]=t[r],t[r]=i}function _a(t,e){return t<e?-1:t>e?1:0}function ga(t,e){var r=t.length
if(r<=1)return[t]
for(var i,n,o=[],a=0;a<r;a++){var s=E(t[a])
0!==s&&(t[a].area=Math.abs(s),void 0===n&&(n=s<0),n===s<0?(i&&o.push(i),i=[t[a]]):i.push(t[a]))}if(i&&o.push(i),e>1)for(var l=0;l<o.length;l++)o[l].length<=e||(ya(o[l],e,1,o[l].length-1,xa),o[l]=o[l].slice(0,e))
return o}function xa(t,e){return e.area-t.area}function ba(t,e,r){for(var i=r.patternDependencies,n=!1,o=0,a=e;o<a.length;o+=1){var s=a[o].paint.get(t+"-pattern")
s.isConstant()||(n=!0)
var l=s.constantOr(null)
l&&(n=!0,i[l.to]=!0,i[l.from]=!0)}return n}function wa(t,e,r,i,n){for(var o=n.patternDependencies,a=0,s=e;a<s.length;a+=1){var l=s[a],u=l.paint.get(t+"-pattern").value
if("constant"!==u.kind){var c=u.evaluate({zoom:i-1},r,{},n.availableImages),p=u.evaluate({zoom:i},r,{},n.availableImages),h=u.evaluate({zoom:i+1},r,{},n.availableImages)
c=c&&c.name?c.name:c,p=p&&p.name?p.name:p,h=h&&h.name?h.name:h,o[c]=!0,o[p]=!0,o[h]=!0,r.patterns[l.id]={min:c,mid:p,max:h}}}return r}Zo.deviation=function(t,e,r,i){var n=e&&e.length,o=n?e[0]*r:t.length,a=Math.abs(ma(t,0,o,r))
if(n)for(var s=0,l=e.length;s<l;s++){var u=e[s]*r,c=s<l-1?e[s+1]*r:t.length
a-=Math.abs(ma(t,u,c,r))}var p=0
for(s=0;s<i.length;s+=3){var h=i[s]*r,f=i[s+1]*r,d=i[s+2]*r
p+=Math.abs((t[h]-t[d])*(t[f+1]-t[h+1])-(t[h]-t[f])*(t[d+1]-t[h+1]))}return 0===a&&0===p?0:Math.abs((p-a)/a)},Zo.flatten=function(t){for(var e=t[0][0].length,r={vertices:[],holes:[],dimensions:e},i=0,n=0;n<t.length;n++){for(var o=0;o<t[n].length;o++)for(var a=0;a<e;a++)r.vertices.push(t[n][o][a])
n>0&&(i+=t[n-1].length,r.holes.push(i))}return r},jo.default=qo
var Sa=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map(function(t){return t.id}),this.index=t.index,this.hasPattern=!1,this.patternFeatures=[],this.layoutVertexArray=new Qi,this.indexArray=new yn,this.indexArray2=new vn,this.programConfigurations=new to(No,t.layers,t.zoom),this.segments=new Dn,this.segments2=new Dn,this.stateDependentLayerIds=this.layers.filter(function(t){return t.isStateDependent()}).map(function(t){return t.id})}
Sa.prototype.populate=function(t,e){this.hasPattern=ba("fill",this.layers,e)
for(var r=this.layers[0].layout.get("fill-sort-key"),i=[],n=0,o=t;n<o.length;n+=1){var a=o[n],s=a.feature,l=a.index,u=a.sourceLayerIndex
if(this.layers[0]._featureFilter(new Mi(this.zoom),s)){var c=oo(s),p=r?r.evaluate(s,{},e.availableImages):void 0,h={id:s.id,properties:s.properties,type:s.type,sourceLayerIndex:u,index:l,geometry:c,patterns:{},sortKey:p}
i.push(h)}}r&&i.sort(function(t,e){return t.sortKey-e.sortKey})
for(var f=0,d=i;f<d.length;f+=1){var m=d[f],y=m,v=y.geometry,_=y.index,g=y.sourceLayerIndex
if(this.hasPattern){var x=wa("fill",this.layers,m,this.zoom,e)
this.patternFeatures.push(x)}else this.addFeature(m,v,_,{})
var b=t[_].feature
e.featureIndex.insert(b,v,_,g,this.index)}},Sa.prototype.update=function(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r)},Sa.prototype.addFeatures=function(t,e){for(var r=0,i=this.patternFeatures;r<i.length;r+=1){var n=i[r]
this.addFeature(n,n.geometry,n.index,e)}},Sa.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},Sa.prototype.uploadPending=function(){return!this.uploaded||this.programConfigurations.needsUpload},Sa.prototype.upload=function(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,No),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.indexBuffer2=t.createIndexBuffer(this.indexArray2)),this.programConfigurations.upload(t),this.uploaded=!0},Sa.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.indexBuffer2.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.segments2.destroy())},Sa.prototype.addFeature=function(t,e,r,i){for(var n=0,o=ga(e,500);n<o.length;n+=1){for(var a=o[n],s=0,l=0,u=a;l<u.length;l+=1)s+=u[l].length
for(var c=this.segments.prepareSegment(s,this.layoutVertexArray,this.indexArray),p=c.vertexLength,h=[],f=[],d=0,m=a;d<m.length;d+=1){var y=m[d]
if(0!==y.length){y!==a[0]&&f.push(h.length/2)
var v=this.segments2.prepareSegment(y.length,this.layoutVertexArray,this.indexArray2),_=v.vertexLength
this.layoutVertexArray.emplaceBack(y[0].x,y[0].y),this.indexArray2.emplaceBack(_+y.length-1,_),h.push(y[0].x),h.push(y[0].y)
for(var g=1;g<y.length;g++)this.layoutVertexArray.emplaceBack(y[g].x,y[g].y),this.indexArray2.emplaceBack(_+g-1,_+g),h.push(y[g].x),h.push(y[g].y)
v.vertexLength+=y.length,v.primitiveLength+=y.length}}for(var x=jo(h,f),b=0;b<x.length;b+=3)this.indexArray.emplaceBack(p+x[b],p+x[b+1],p+x[b+2])
c.vertexLength+=s,c.primitiveLength+=x.length/3}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,i)},mi("FillBucket",Sa,{omit:["layers","patternFeatures"]})
var Ea=new Xi({"fill-sort-key":new ji(St.layout_fill["fill-sort-key"])}),Ta={paint:new Xi({"fill-antialias":new Ni(St.paint_fill["fill-antialias"]),"fill-opacity":new ji(St.paint_fill["fill-opacity"]),"fill-color":new ji(St.paint_fill["fill-color"]),"fill-outline-color":new ji(St.paint_fill["fill-outline-color"]),"fill-translate":new Ni(St.paint_fill["fill-translate"]),"fill-translate-anchor":new Ni(St.paint_fill["fill-translate-anchor"]),"fill-pattern":new qi(St.paint_fill["fill-pattern"])}),layout:Ea},Aa=function(t){function e(e){t.call(this,e,Ta)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.recalculate=function(e,r){t.prototype.recalculate.call(this,e,r)
var i=this.paint._values["fill-outline-color"]
"constant"===i.value.kind&&void 0===i.value.value&&(this.paint._values["fill-outline-color"]=this.paint._values["fill-color"])},e.prototype.createBucket=function(t){return new Sa(t)},e.prototype.queryRadius=function(){return bo(this.paint.get("fill-translate"))},e.prototype.queryIntersectsFeature=function(t,e,r,i,n,o,a){return co(wo(t,this.paint.get("fill-translate"),this.paint.get("fill-translate-anchor"),o.angle,a),i)},e.prototype.isTileClipped=function(){return!0},e}(Wi),Ia=Yi([{name:"a_pos",components:2,type:"Int16"},{name:"a_normal_ed",components:4,type:"Int16"}],4).members,ka=za
function za(t,e,r,i,n){this.properties={},this.extent=r,this.type=0,this._pbf=t,this._geometry=-1,this._keys=i,this._values=n,t.readFields(Ca,this,e)}function Ca(t,e,r){1==t?e.id=r.readVarint():2==t?function(t,e){for(var r=t.readVarint()+t.pos;t.pos<r;){var i=e._keys[t.readVarint()],n=e._values[t.readVarint()]
e.properties[i]=n}}(r,e):3==t?e.type=r.readVarint():4==t&&(e._geometry=r.pos)}function Pa(t){for(var e,r,i=0,n=0,o=t.length,a=o-1;n<o;a=n++)e=t[n],i+=((r=t[a]).x-e.x)*(e.y+r.y)
return i}za.types=["Unknown","Point","LineString","Polygon"],za.prototype.loadGeometry=function(){var t=this._pbf
t.pos=this._geometry
for(var e,r=t.readVarint()+t.pos,i=1,o=0,a=0,s=0,l=[];t.pos<r;){if(o<=0){var u=t.readVarint()
i=7&u,o=u>>3}if(o--,1===i||2===i)a+=t.readSVarint(),s+=t.readSVarint(),1===i&&(e&&l.push(e),e=[]),e.push(new n(a,s))
else{if(7!==i)throw new Error("unknown command "+i)
e&&e.push(e[0].clone())}}return e&&l.push(e),l},za.prototype.bbox=function(){var t=this._pbf
t.pos=this._geometry
for(var e=t.readVarint()+t.pos,r=1,i=0,n=0,o=0,a=1/0,s=-1/0,l=1/0,u=-1/0;t.pos<e;){if(i<=0){var c=t.readVarint()
r=7&c,i=c>>3}if(i--,1===r||2===r)(n+=t.readSVarint())<a&&(a=n),n>s&&(s=n),(o+=t.readSVarint())<l&&(l=o),o>u&&(u=o)
else if(7!==r)throw new Error("unknown command "+r)}return[a,l,s,u]},za.prototype.toGeoJSON=function(t,e,r){var i,n,o=this.extent*Math.pow(2,r),a=this.extent*t,s=this.extent*e,l=this.loadGeometry(),u=za.types[this.type]
function c(t){for(var e=0;e<t.length;e++){var r=t[e],i=180-360*(r.y+s)/o
t[e]=[360*(r.x+a)/o-180,360/Math.PI*Math.atan(Math.exp(i*Math.PI/180))-90]}}switch(this.type){case 1:var p=[]
for(i=0;i<l.length;i++)p[i]=l[i][0]
c(l=p)
break
case 2:for(i=0;i<l.length;i++)c(l[i])
break
case 3:for(l=function(t){var e=t.length
if(e<=1)return[t]
for(var r,i,n=[],o=0;o<e;o++){var a=Pa(t[o])
0!==a&&(void 0===i&&(i=a<0),i===a<0?(r&&n.push(r),r=[t[o]]):r.push(t[o]))}return r&&n.push(r),n}(l),i=0;i<l.length;i++)for(n=0;n<l[i].length;n++)c(l[i][n])}1===l.length?l=l[0]:u="Multi"+u
var h={type:"Feature",geometry:{type:u,coordinates:l},properties:this.properties}
return"id"in this&&(h.id=this.id),h}
var Ma=La
function La(t,e){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=t,this._keys=[],this._values=[],this._features=[],t.readFields(Da,this,e),this.length=this._features.length}function Da(t,e,r){15===t?e.version=r.readVarint():1===t?e.name=r.readString():5===t?e.extent=r.readVarint():2===t?e._features.push(r.pos):3===t?e._keys.push(r.readString()):4===t&&e._values.push(function(t){for(var e=null,r=t.readVarint()+t.pos;t.pos<r;){var i=t.readVarint()>>3
e=1===i?t.readString():2===i?t.readFloat():3===i?t.readDouble():4===i?t.readVarint64():5===i?t.readVarint():6===i?t.readSVarint():7===i?t.readBoolean():null}return e}(r))}function Ba(t,e,r){if(3===t){var i=new Ma(r,r.readVarint()+r.pos)
i.length&&(e[i.name]=i)}}La.prototype.feature=function(t){if(t<0||t>=this._features.length)throw new Error("feature index out of bounds")
this._pbf.pos=this._features[t]
var e=this._pbf.readVarint()+this._pbf.pos
return new ka(this._pbf,e,this.extent,this._keys,this._values)}
var Ra={VectorTile:function(t,e){this.layers=t.readFields(Ba,{},e)},VectorTileFeature:ka,VectorTileLayer:Ma},Fa=Ra.VectorTileFeature.types,Oa=Math.pow(2,13)
function Ua(t,e,r,i,n,o,a,s){t.emplaceBack(e,r,2*Math.floor(i*Oa)+a,n*Oa*2,o*Oa*2,Math.round(s))}var Va=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map(function(t){return t.id}),this.index=t.index,this.hasPattern=!1,this.layoutVertexArray=new en,this.indexArray=new yn,this.programConfigurations=new to(Ia,t.layers,t.zoom),this.segments=new Dn,this.stateDependentLayerIds=this.layers.filter(function(t){return t.isStateDependent()}).map(function(t){return t.id})}
function Na(t,e){return t.x===e.x&&(t.x<0||t.x>io)||t.y===e.y&&(t.y<0||t.y>io)}function ja(t){return t.every(function(t){return t.x<0})||t.every(function(t){return t.x>io})||t.every(function(t){return t.y<0})||t.every(function(t){return t.y>io})}Va.prototype.populate=function(t,e){this.features=[],this.hasPattern=ba("fill-extrusion",this.layers,e)
for(var r=0,i=t;r<i.length;r+=1){var n=i[r],o=n.feature,a=n.index,s=n.sourceLayerIndex
if(this.layers[0]._featureFilter(new Mi(this.zoom),o)){var l=oo(o),u={sourceLayerIndex:s,index:a,geometry:l,properties:o.properties,type:o.type,patterns:{}}
void 0!==o.id&&(u.id=o.id),this.hasPattern?this.features.push(wa("fill-extrusion",this.layers,u,this.zoom,e)):this.addFeature(u,l,a,{}),e.featureIndex.insert(o,l,a,s,this.index,!0)}}},Va.prototype.addFeatures=function(t,e){for(var r=0,i=this.features;r<i.length;r+=1){var n=i[r],o=n.geometry
this.addFeature(n,o,n.index,e)}},Va.prototype.update=function(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r)},Va.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},Va.prototype.uploadPending=function(){return!this.uploaded||this.programConfigurations.needsUpload},Va.prototype.upload=function(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Ia),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0},Va.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy())},Va.prototype.addFeature=function(t,e,r,i){for(var n=0,o=ga(e,500);n<o.length;n+=1){for(var a=o[n],s=0,l=0,u=a;l<u.length;l+=1)s+=u[l].length
for(var c=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray),p=0,h=a;p<h.length;p+=1){var f=h[p]
if(0!==f.length&&!ja(f))for(var d=0,m=0;m<f.length;m++){var y=f[m]
if(m>=1){var v=f[m-1]
if(!Na(y,v)){c.vertexLength+4>Dn.MAX_VERTEX_ARRAY_LENGTH&&(c=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray))
var _=y.sub(v)._perp()._unit(),g=v.dist(y)
d+g>32768&&(d=0),Ua(this.layoutVertexArray,y.x,y.y,_.x,_.y,0,0,d),Ua(this.layoutVertexArray,y.x,y.y,_.x,_.y,0,1,d),d+=g,Ua(this.layoutVertexArray,v.x,v.y,_.x,_.y,0,0,d),Ua(this.layoutVertexArray,v.x,v.y,_.x,_.y,0,1,d)
var x=c.vertexLength
this.indexArray.emplaceBack(x,x+2,x+1),this.indexArray.emplaceBack(x+1,x+2,x+3),c.vertexLength+=4,c.primitiveLength+=2}}}}if(c.vertexLength+s>Dn.MAX_VERTEX_ARRAY_LENGTH&&(c=this.segments.prepareSegment(s,this.layoutVertexArray,this.indexArray)),"Polygon"===Fa[t.type]){for(var b=[],w=[],S=c.vertexLength,E=0,T=a;E<T.length;E+=1){var A=T[E]
if(0!==A.length){A!==a[0]&&w.push(b.length/2)
for(var I=0;I<A.length;I++){var k=A[I]
Ua(this.layoutVertexArray,k.x,k.y,0,0,1,1,0),b.push(k.x),b.push(k.y)}}}for(var z=jo(b,w),C=0;C<z.length;C+=3)this.indexArray.emplaceBack(S+z[C],S+z[C+2],S+z[C+1])
c.primitiveLength+=z.length/3,c.vertexLength+=s}}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,i)},mi("FillExtrusionBucket",Va,{omit:["layers","features"]})
var qa={paint:new Xi({"fill-extrusion-opacity":new Ni(St["paint_fill-extrusion"]["fill-extrusion-opacity"]),"fill-extrusion-color":new ji(St["paint_fill-extrusion"]["fill-extrusion-color"]),"fill-extrusion-translate":new Ni(St["paint_fill-extrusion"]["fill-extrusion-translate"]),"fill-extrusion-translate-anchor":new Ni(St["paint_fill-extrusion"]["fill-extrusion-translate-anchor"]),"fill-extrusion-pattern":new qi(St["paint_fill-extrusion"]["fill-extrusion-pattern"]),"fill-extrusion-height":new ji(St["paint_fill-extrusion"]["fill-extrusion-height"]),"fill-extrusion-base":new ji(St["paint_fill-extrusion"]["fill-extrusion-base"]),"fill-extrusion-vertical-gradient":new Ni(St["paint_fill-extrusion"]["fill-extrusion-vertical-gradient"])})},Za=function(t){function e(e){t.call(this,e,qa)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.createBucket=function(t){return new Va(t)},e.prototype.queryRadius=function(){return bo(this.paint.get("fill-extrusion-translate"))},e.prototype.is3D=function(){return!0},e.prototype.queryIntersectsFeature=function(t,e,r,i,o,a,s,l){var u=wo(t,this.paint.get("fill-extrusion-translate"),this.paint.get("fill-extrusion-translate-anchor"),a.angle,s),c=this.paint.get("fill-extrusion-height").evaluate(e,r),p=this.paint.get("fill-extrusion-base").evaluate(e,r),h=function(t,e,r,i){for(var o=[],a=0,s=t;a<s.length;a+=1){var l=s[a],u=[l.x,l.y,0,1]
Io(u,u,e),o.push(new n(u[0]/u[3],u[1]/u[3]))}return o}(u,l),f=function(t,e,r,i){for(var o=[],a=[],s=i[8]*e,l=i[9]*e,u=i[10]*e,c=i[11]*e,p=i[8]*r,h=i[9]*r,f=i[10]*r,d=i[11]*r,m=0,y=t;m<y.length;m+=1){for(var v=[],_=[],g=0,x=y[m];g<x.length;g+=1){var b=x[g],w=b.x,S=b.y,E=i[0]*w+i[4]*S+i[12],T=i[1]*w+i[5]*S+i[13],A=i[2]*w+i[6]*S+i[14],I=i[3]*w+i[7]*S+i[15],k=A+u,z=I+c,C=E+p,P=T+h,M=A+f,L=I+d,D=new n((E+s)/z,(T+l)/z)
D.z=k/z,v.push(D)
var B=new n(C/L,P/L)
B.z=M/L,_.push(B)}o.push(v),a.push(_)}return[o,a]}(i,p,c,l)
return function(t,e,r){var i=1/0
co(r,e)&&(i=Xa(r,e[0]))
for(var n=0;n<e.length;n++)for(var o=e[n],a=t[n],s=0;s<o.length-1;s++){var l=o[s],u=o[s+1],c=a[s],p=[l,u,a[s+1],c,l]
lo(r,p)&&(i=Math.min(i,Xa(r,p)))}return i!==1/0&&i}(f[0],f[1],h)},e}(Wi)
function Ga(t,e){return t.x*e.x+t.y*e.y}function Xa(t,e){if(1===t.length){var r=e[0],i=e[1],n=e[3],o=t[0],a=i.sub(r),s=n.sub(r),l=o.sub(r),u=Ga(a,a),c=Ga(a,s),p=Ga(s,s),h=Ga(l,a),f=Ga(l,s),d=u*p-c*c,m=(p*h-c*f)/d,y=(u*f-c*h)/d,v=1-m-y
return r.z*v+i.z*m+n.z*y}for(var _=1/0,g=0,x=e;g<x.length;g+=1){var b=x[g]
_=Math.min(_,b.z)}return _}var Wa=Yi([{name:"a_pos_normal",components:2,type:"Int16"},{name:"a_data",components:4,type:"Uint8"}],4).members,Ka=Ra.VectorTileFeature.types,Ha=Math.cos(Math.PI/180*37.5),Ja=Math.pow(2,14)/.5,Ya=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map(function(t){return t.id}),this.index=t.index,this.hasPattern=!1,this.patternFeatures=[],this.layoutVertexArray=new rn,this.indexArray=new yn,this.programConfigurations=new to(Wa,t.layers,t.zoom),this.segments=new Dn,this.stateDependentLayerIds=this.layers.filter(function(t){return t.isStateDependent()}).map(function(t){return t.id})}
Ya.prototype.populate=function(t,e){this.hasPattern=ba("line",this.layers,e)
for(var r=this.layers[0].layout.get("line-sort-key"),i=[],n=0,o=t;n<o.length;n+=1){var a=o[n],s=a.feature,l=a.index,u=a.sourceLayerIndex
if(this.layers[0]._featureFilter(new Mi(this.zoom),s)){var c=oo(s),p=r?r.evaluate(s,{}):void 0,h={id:s.id,properties:s.properties,type:s.type,sourceLayerIndex:u,index:l,geometry:c,patterns:{},sortKey:p}
i.push(h)}}r&&i.sort(function(t,e){return t.sortKey-e.sortKey})
for(var f=0,d=i;f<d.length;f+=1){var m=d[f],y=m,v=y.geometry,_=y.index,g=y.sourceLayerIndex
if(this.hasPattern){var x=wa("line",this.layers,m,this.zoom,e)
this.patternFeatures.push(x)}else this.addFeature(m,v,_,{})
var b=t[_].feature
e.featureIndex.insert(b,v,_,g,this.index)}},Ya.prototype.update=function(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r)},Ya.prototype.addFeatures=function(t,e){for(var r=0,i=this.patternFeatures;r<i.length;r+=1){var n=i[r]
this.addFeature(n,n.geometry,n.index,e)}},Ya.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},Ya.prototype.uploadPending=function(){return!this.uploaded||this.programConfigurations.needsUpload},Ya.prototype.upload=function(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Wa),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0},Ya.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy())},Ya.prototype.addFeature=function(t,e,r,i){for(var n=this.layers[0].layout,o=n.get("line-join").evaluate(t,{}),a=n.get("line-cap"),s=n.get("line-miter-limit"),l=n.get("line-round-limit"),u=0,c=e;u<c.length;u+=1){var p=c[u]
this.addLine(p,t,o,a,s,l,r,i)}},Ya.prototype.addLine=function(t,e,r,i,n,o,a,s){if(this.distance=0,this.scaledDistance=0,this.totalDistance=0,e.properties&&e.properties.hasOwnProperty("mapbox_clip_start")&&e.properties.hasOwnProperty("mapbox_clip_end")){this.clipStart=+e.properties.mapbox_clip_start,this.clipEnd=+e.properties.mapbox_clip_end
for(var l=0;l<t.length-1;l++)this.totalDistance+=t[l].dist(t[l+1])}for(var u="Polygon"===Ka[e.type],c=t.length;c>=2&&t[c-1].equals(t[c-2]);)c--
for(var p=0;p<c-1&&t[p].equals(t[p+1]);)p++
if(!(c<(u?3:2))){"bevel"===r&&(n=1.05)
var h,f=io/(512*this.overscaling)*15,d=this.segments.prepareSegment(10*c,this.layoutVertexArray,this.indexArray),m=void 0,y=void 0,v=void 0,_=void 0
this.e1=this.e2=-1,u&&(h=t[c-2],_=t[p].sub(h)._unit()._perp())
for(var g=p;g<c;g++)if(!(y=u&&g===c-1?t[p+1]:t[g+1])||!t[g].equals(y)){_&&(v=_),h&&(m=h),h=t[g],_=y?y.sub(h)._unit()._perp():v
var x=(v=v||_).add(_)
0===x.x&&0===x.y||x._unit()
var b=v.x*_.x+v.y*_.y,w=x.x*_.x+x.y*_.y,S=0!==w?1/w:1/0,E=2*Math.sqrt(2-2*w),T=w<Ha&&m&&y,A=v.x*_.y-v.y*_.x>0
if(T&&g>p){var I=h.dist(m)
if(I>2*f){var k=h.sub(h.sub(m)._mult(f/I)._round())
this.updateDistance(m,k),this.addCurrentVertex(k,v,0,0,d),m=k}}var z=m&&y,C=z?r:u?"butt":i
if(z&&"round"===C&&(S<o?C="miter":S<=2&&(C="fakeround")),"miter"===C&&S>n&&(C="bevel"),"bevel"===C&&(S>2&&(C="flipbevel"),S<n&&(C="miter")),m&&this.updateDistance(m,h),"miter"===C)x._mult(S),this.addCurrentVertex(h,x,0,0,d)
else if("flipbevel"===C){if(S>100)x=_.mult(-1)
else{var P=S*v.add(_).mag()/v.sub(_).mag()
x._perp()._mult(P*(A?-1:1))}this.addCurrentVertex(h,x,0,0,d),this.addCurrentVertex(h,x.mult(-1),0,0,d)}else if("bevel"===C||"fakeround"===C){var M=-Math.sqrt(S*S-1),L=A?M:0,D=A?0:M
if(m&&this.addCurrentVertex(h,v,L,D,d),"fakeround"===C)for(var B=Math.round(180*E/Math.PI/20),R=1;R<B;R++){var F=R/B
if(.5!==F){var O=F-.5
F+=F*O*(F-1)*((1.0904+b*(b*(3.55645-1.43519*b)-3.2452))*O*O+(.848013+b*(.215638*b-1.06021)))}var U=_.sub(v)._mult(F)._add(v)._unit()._mult(A?-1:1)
this.addHalfVertex(h,U.x,U.y,!1,A,0,d)}y&&this.addCurrentVertex(h,_,-L,-D,d)}else if("butt"===C)this.addCurrentVertex(h,x,0,0,d)
else if("square"===C){var V=m?1:-1
this.addCurrentVertex(h,x,V,V,d)}else"round"===C&&(m&&(this.addCurrentVertex(h,v,0,0,d),this.addCurrentVertex(h,v,1,1,d,!0)),y&&(this.addCurrentVertex(h,_,-1,-1,d,!0),this.addCurrentVertex(h,_,0,0,d)))
if(T&&g<c-1){var N=h.dist(y)
if(N>2*f){var j=h.add(y.sub(h)._mult(f/N)._round())
this.updateDistance(h,j),this.addCurrentVertex(j,_,0,0,d),h=j}}}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,e,a,s)}},Ya.prototype.addCurrentVertex=function(t,e,r,i,n,o){void 0===o&&(o=!1)
var a=e.x+e.y*r,s=e.y-e.x*r,l=-e.x+e.y*i,u=-e.y-e.x*i
this.addHalfVertex(t,a,s,o,!1,r,n),this.addHalfVertex(t,l,u,o,!0,-i,n),this.distance>Ja/2&&0===this.totalDistance&&(this.distance=0,this.addCurrentVertex(t,e,r,i,n,o))},Ya.prototype.addHalfVertex=function(t,e,r,i,n,o,a){var s=t.x,l=t.y,u=.5*this.scaledDistance
this.layoutVertexArray.emplaceBack((s<<1)+(i?1:0),(l<<1)+(n?1:0),Math.round(63*e)+128,Math.round(63*r)+128,1+(0===o?0:o<0?-1:1)|(63&u)<<2,u>>6)
var c=a.vertexLength++
this.e1>=0&&this.e2>=0&&(this.indexArray.emplaceBack(this.e1,this.e2,c),a.primitiveLength++),n?this.e2=c:this.e1=c},Ya.prototype.updateDistance=function(t,e){this.distance+=t.dist(e),this.scaledDistance=this.totalDistance>0?(this.clipStart+(this.clipEnd-this.clipStart)*this.distance/this.totalDistance)*(Ja-1):this.distance},mi("LineBucket",Ya,{omit:["layers","patternFeatures"]})
var $a=new Xi({"line-cap":new Ni(St.layout_line["line-cap"]),"line-join":new ji(St.layout_line["line-join"]),"line-miter-limit":new Ni(St.layout_line["line-miter-limit"]),"line-round-limit":new Ni(St.layout_line["line-round-limit"]),"line-sort-key":new ji(St.layout_line["line-sort-key"])}),Qa={paint:new Xi({"line-opacity":new ji(St.paint_line["line-opacity"]),"line-color":new ji(St.paint_line["line-color"]),"line-translate":new Ni(St.paint_line["line-translate"]),"line-translate-anchor":new Ni(St.paint_line["line-translate-anchor"]),"line-width":new ji(St.paint_line["line-width"]),"line-gap-width":new ji(St.paint_line["line-gap-width"]),"line-offset":new ji(St.paint_line["line-offset"]),"line-blur":new ji(St.paint_line["line-blur"]),"line-dasharray":new Zi(St.paint_line["line-dasharray"]),"line-pattern":new qi(St.paint_line["line-pattern"]),"line-gradient":new Gi(St.paint_line["line-gradient"])}),layout:$a},ts=new(function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.possiblyEvaluate=function(e,r){return r=new Mi(Math.floor(r.zoom),{now:r.now,fadeDuration:r.fadeDuration,zoomHistory:r.zoomHistory,transition:r.transition}),t.prototype.possiblyEvaluate.call(this,e,r)},e.prototype.evaluate=function(e,r,i,n){return r=p({},r,{zoom:Math.floor(r.zoom)}),t.prototype.evaluate.call(this,e,r,i,n)},e}(ji))(Qa.paint.properties["line-width"].specification)
ts.useIntegerZoom=!0
var es=function(t){function e(e){t.call(this,e,Qa)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._handleSpecialPaintPropertyUpdate=function(t){"line-gradient"===t&&this._updateGradient()},e.prototype._updateGradient=function(){var t=this._transitionablePaint._values["line-gradient"].value.expression
this.gradient=Fo(t,"lineProgress"),this.gradientTexture=null},e.prototype.recalculate=function(e,r){t.prototype.recalculate.call(this,e,r),this.paint._values["line-floorwidth"]=ts.possiblyEvaluate(this._transitioningPaint._values["line-width"].value,e)},e.prototype.createBucket=function(t){return new Ya(t)},e.prototype.queryRadius=function(t){var e=t,r=rs(xo("line-width",this,e),xo("line-gap-width",this,e)),i=xo("line-offset",this,e)
return r/2+Math.abs(i)+bo(this.paint.get("line-translate"))},e.prototype.queryIntersectsFeature=function(t,e,r,i,o,a,s){var l=wo(t,this.paint.get("line-translate"),this.paint.get("line-translate-anchor"),a.angle,s),u=s/2*rs(this.paint.get("line-width").evaluate(e,r),this.paint.get("line-gap-width").evaluate(e,r)),c=this.paint.get("line-offset").evaluate(e,r)
return c&&(i=function(t,e){for(var r=[],i=new n(0,0),o=0;o<t.length;o++){for(var a=t[o],s=[],l=0;l<a.length;l++){var u=a[l-1],c=a[l],p=a[l+1],h=0===l?i:c.sub(u)._unit()._perp(),f=l===a.length-1?i:p.sub(c)._unit()._perp(),d=h._add(f)._unit(),m=d.x*f.x+d.y*f.y
d._mult(1/m),s.push(d._mult(e)._add(c))}r.push(s)}return r}(i,c*s)),function(t,e,r){for(var i=0;i<e.length;i++){var n=e[i]
if(t.length>=3)for(var o=0;o<n.length;o++)if(_o(t,n[o]))return!0
if(po(t,n,r))return!0}return!1}(l,i,u)},e.prototype.isTileClipped=function(){return!0},e}(Wi)
function rs(t,e){return e>0?e+2*t:t}var is=Yi([{name:"a_pos_offset",components:4,type:"Int16"},{name:"a_data",components:4,type:"Uint16"}]),ns=Yi([{name:"a_projected_pos",components:3,type:"Float32"}],4),os=(Yi([{name:"a_fade_opacity",components:1,type:"Uint32"}],4),Yi([{name:"a_placed",components:2,type:"Uint8"},{name:"a_shift",components:2,type:"Float32"}])),as=(Yi([{type:"Int16",name:"anchorPointX"},{type:"Int16",name:"anchorPointY"},{type:"Int16",name:"x1"},{type:"Int16",name:"y1"},{type:"Int16",name:"x2"},{type:"Int16",name:"y2"},{type:"Uint32",name:"featureIndex"},{type:"Uint16",name:"sourceLayerIndex"},{type:"Uint16",name:"bucketIndex"},{type:"Int16",name:"radius"},{type:"Int16",name:"signedDistanceFromAnchor"}]),Yi([{name:"a_pos",components:2,type:"Int16"},{name:"a_anchor_pos",components:2,type:"Int16"},{name:"a_extrude",components:2,type:"Int16"}],4)),ss=Yi([{name:"a_pos",components:2,type:"Int16"},{name:"a_anchor_pos",components:2,type:"Int16"},{name:"a_extrude",components:2,type:"Int16"}],4)
function ls(t,e,r){return t.sections.forEach(function(t){t.text=function(t,e,r){var i=e.layout.get("text-transform").evaluate(r,{})
return"uppercase"===i?t=t.toLocaleUpperCase():"lowercase"===i&&(t=t.toLocaleLowerCase()),Pi.applyArabicShaping&&(t=Pi.applyArabicShaping(t)),t}(t.text,e,r)}),t}Yi([{type:"Int16",name:"anchorX"},{type:"Int16",name:"anchorY"},{type:"Uint16",name:"glyphStartIndex"},{type:"Uint16",name:"numGlyphs"},{type:"Uint32",name:"vertexStartIndex"},{type:"Uint32",name:"lineStartIndex"},{type:"Uint32",name:"lineLength"},{type:"Uint16",name:"segment"},{type:"Uint16",name:"lowerSize"},{type:"Uint16",name:"upperSize"},{type:"Float32",name:"lineOffsetX"},{type:"Float32",name:"lineOffsetY"},{type:"Uint8",name:"writingMode"},{type:"Uint8",name:"placedOrientation"},{type:"Uint8",name:"hidden"},{type:"Uint32",name:"crossTileID"},{type:"Int16",name:"associatedIconIndex"}]),Yi([{type:"Int16",name:"anchorX"},{type:"Int16",name:"anchorY"},{type:"Int16",name:"rightJustifiedTextSymbolIndex"},{type:"Int16",name:"centerJustifiedTextSymbolIndex"},{type:"Int16",name:"leftJustifiedTextSymbolIndex"},{type:"Int16",name:"verticalPlacedTextSymbolIndex"},{type:"Int16",name:"placedIconSymbolIndex"},{type:"Uint16",name:"key"},{type:"Uint16",name:"textBoxStartIndex"},{type:"Uint16",name:"textBoxEndIndex"},{type:"Uint16",name:"verticalTextBoxStartIndex"},{type:"Uint16",name:"verticalTextBoxEndIndex"},{type:"Uint16",name:"iconBoxStartIndex"},{type:"Uint16",name:"iconBoxEndIndex"},{type:"Uint16",name:"featureIndex"},{type:"Uint16",name:"numHorizontalGlyphVertices"},{type:"Uint16",name:"numVerticalGlyphVertices"},{type:"Uint16",name:"numIconVertices"},{type:"Uint32",name:"crossTileID"},{type:"Float32",name:"textBoxScale"},{type:"Float32",components:2,name:"textOffset"}]),Yi([{type:"Float32",name:"offsetX"}]),Yi([{type:"Int16",name:"x"},{type:"Int16",name:"y"},{type:"Int16",name:"tileUnitDistanceFromAnchor"}])
var us={"!":"︕","#":"＃",$:"＄","%":"％","&":"＆","(":"︵",")":"︶","*":"＊","+":"＋",",":"︐","-":"︲",".":"・","/":"／",":":"︓",";":"︔","<":"︿","=":"＝",">":"﹀","?":"︖","@":"＠","[":"﹇","\\":"＼","]":"﹈","^":"＾",_:"︳","`":"｀","{":"︷","|":"―","}":"︸","~":"～","¢":"￠","£":"￡","¥":"￥","¦":"￤","¬":"￢","¯":"￣","–":"︲","—":"︱","‘":"﹃","’":"﹄","“":"﹁","”":"﹂","…":"︙","‧":"・","₩":"￦","、":"︑","。":"︒","〈":"︿","〉":"﹀","《":"︽","》":"︾","「":"﹁","」":"﹂","『":"﹃","』":"﹄","【":"︻","】":"︼","〔":"︹","〕":"︺","〖":"︗","〗":"︘","！":"︕","（":"︵","）":"︶","，":"︐","－":"︲","．":"・","：":"︓","；":"︔","＜":"︿","＞":"﹀","？":"︖","［":"﹇","］":"﹈","＿":"︳","｛":"︷","｜":"―","｝":"︸","｟":"︵","｠":"︶","｡":"︒","｢":"﹁","｣":"﹂"},cs=24,ps={horizontal:1,vertical:2,horizontalOnly:3},hs=function(){this.text="",this.sectionIndex=[],this.sections=[]}
function fs(t,e,r,i,n,o,a,s,l,u,c,p){var h,f=hs.fromFeature(t,r)
u===ps.vertical&&f.verticalizePunctuation()
var d=Pi.processBidirectionalText,m=Pi.processStyledBidirectionalText
if(d&&1===f.sections.length){h=[]
for(var y=0,v=d(f.toString(),gs(f,s,i,e,p));y<v.length;y+=1){var _=v[y],g=new hs
g.text=_,g.sections=f.sections
for(var x=0;x<_.length;x++)g.sectionIndex.push(0)
h.push(g)}}else if(m){h=[]
for(var b=0,w=m(f.text,f.sectionIndex,gs(f,s,i,e,p));b<w.length;b+=1){var S=w[b],E=new hs
E.text=S[0],E.sectionIndex=S[1],E.sections=f.sections,h.push(E)}}else h=function(t,e){for(var r=[],i=t.text,n=0,o=0,a=e;o<a.length;o+=1){var s=a[o]
r.push(t.substring(n,s)),n=s}return n<i.length&&r.push(t.substring(n,i.length)),r}(f,gs(f,s,i,e,p))
var T=[],A={positionedGlyphs:T,text:f.toString(),top:l[1],bottom:l[1],left:l[0],right:l[0],writingMode:u,lineCount:h.length,yOffset:-17}
return function(t,e,r,i,n,o,a,s,l){for(var u=0,c=t.yOffset,p=0,h=t.positionedGlyphs,f="right"===o?1:"left"===o?0:.5,d=0,m=r;d<m.length;d+=1){var y=m[d]
y.trim()
var v=y.getMaxScale()
if(y.length()){for(var _=h.length,g=0;g<y.length();g++){var x=y.getSection(g),b=y.getSectionIndex(g),w=y.getCharCode(g),S=24*(v-x.scale),E=e[x.fontStack],T=E&&E[w]
T&&(a===ps.horizontal||!l&&!Si(w)||l&&(ds[w]||(I=w,xi.Arabic(I)||xi["Arabic Supplement"](I)||xi["Arabic Extended-A"](I)||xi["Arabic Presentation Forms-A"](I)||xi["Arabic Presentation Forms-B"](I)))?(h.push({glyph:w,x:u,y:c+S,vertical:!1,scale:x.scale,fontStack:x.fontStack,sectionIndex:b}),u+=T.metrics.advance*x.scale+s):(h.push({glyph:w,x:u,y:c+S,vertical:!0,scale:x.scale,fontStack:x.fontStack,sectionIndex:b}),u+=cs*x.scale+s))}if(h.length!==_){var A=u-s
p=Math.max(A,p),bs(h,e,_,h.length-1,f)}u=0,c+=i*v}else c+=i}var I,k=xs(n),z=k.horizontalAlign,C=k.verticalAlign
!function(t,e,r,i,n,o,a){for(var s=(e-r)*n,l=(-i*a+.5)*o,u=0;u<t.length;u++)t[u].x+=s,t[u].y+=l}(h,f,z,C,p,i,r.length)
var P=c-t.yOffset
t.top+=-C*P,t.bottom=t.top+P,t.left+=-z*p,t.right=t.left+p}(A,e,h,n,o,a,u,s,c),!!T.length&&A}hs.fromFeature=function(t,e){for(var r=new hs,i=0;i<t.sections.length;i++){var n=t.sections[i]
r.sections.push({scale:n.scale||1,fontStack:n.fontStack||e}),r.text+=n.text
for(var o=0;o<n.text.length;o++)r.sectionIndex.push(i)}return r},hs.prototype.length=function(){return this.text.length},hs.prototype.getSection=function(t){return this.sections[this.sectionIndex[t]]},hs.prototype.getSectionIndex=function(t){return this.sectionIndex[t]},hs.prototype.getCharCode=function(t){return this.text.charCodeAt(t)},hs.prototype.verticalizePunctuation=function(){this.text=function(t){for(var e="",r=0;r<t.length;r++){var i=t.charCodeAt(r+1)||null,n=t.charCodeAt(r-1)||null
i&&Ei(i)&&!us[t[r+1]]||n&&Ei(n)&&!us[t[r-1]]||!us[t[r]]?e+=t[r]:e+=us[t[r]]}return e}(this.text)},hs.prototype.trim=function(){for(var t=0,e=0;e<this.text.length&&ds[this.text.charCodeAt(e)];e++)t++
for(var r=this.text.length,i=this.text.length-1;i>=0&&i>=t&&ds[this.text.charCodeAt(i)];i--)r--
this.text=this.text.substring(t,r),this.sectionIndex=this.sectionIndex.slice(t,r)},hs.prototype.substring=function(t,e){var r=new hs
return r.text=this.text.substring(t,e),r.sectionIndex=this.sectionIndex.slice(t,e),r.sections=this.sections,r},hs.prototype.toString=function(){return this.text},hs.prototype.getMaxScale=function(){var t=this
return this.sectionIndex.reduce(function(e,r){return Math.max(e,t.sections[r].scale)},0)}
var ds={9:!0,10:!0,11:!0,12:!0,13:!0,32:!0},ms={}
function ys(t,e,r,i){var n=Math.pow(t-e,2)
return i?t<e?n/2:2*n:n+Math.abs(r)*r}function vs(t,e,r){var i=0
return 10===t&&(i-=1e4),r&&(i+=150),40!==t&&65288!==t||(i+=50),41!==e&&65289!==e||(i+=50),i}function _s(t,e,r,i,n,o){for(var a=null,s=ys(e,r,n,o),l=0,u=i;l<u.length;l+=1){var c=u[l],p=ys(e-c.x,r,n,o)+c.badness
p<=s&&(a=c,s=p)}return{index:t,x:e,priorBreak:a,badness:s}}function gs(t,e,r,i,n){if("point"!==n)return[]
if(!t)return[]
for(var o,a=[],s=function(t,e,r,i){for(var n=0,o=0;o<t.length();o++){var a=t.getSection(o),s=i[a.fontStack],l=s&&s[t.getCharCode(o)]
l&&(n+=l.metrics.advance*a.scale+e)}return n/Math.max(1,Math.ceil(n/r))}(t,e,r,i),l=t.text.indexOf("​")>=0,u=0,c=0;c<t.length();c++){var p=t.getSection(c),h=t.getCharCode(c),f=i[p.fontStack],d=f&&f[h]
if(d&&!ds[h]&&(u+=d.metrics.advance*p.scale+e),c<t.length()-1){var m=!((o=h)<11904||!(xi["Bopomofo Extended"](o)||xi.Bopomofo(o)||xi["CJK Compatibility Forms"](o)||xi["CJK Compatibility Ideographs"](o)||xi["CJK Compatibility"](o)||xi["CJK Radicals Supplement"](o)||xi["CJK Strokes"](o)||xi["CJK Symbols and Punctuation"](o)||xi["CJK Unified Ideographs Extension A"](o)||xi["CJK Unified Ideographs"](o)||xi["Enclosed CJK Letters and Months"](o)||xi["Halfwidth and Fullwidth Forms"](o)||xi.Hiragana(o)||xi["Ideographic Description Characters"](o)||xi["Kangxi Radicals"](o)||xi["Katakana Phonetic Extensions"](o)||xi.Katakana(o)||xi["Vertical Forms"](o)||xi["Yi Radicals"](o)||xi["Yi Syllables"](o)));(ms[h]||m)&&a.push(_s(c+1,u,s,a,vs(h,t.getCharCode(c+1),m&&l),!1))}}return function t(e){return e?t(e.priorBreak).concat(e.index):[]}(_s(t.length(),u,s,a,0,!0))}function xs(t){var e=.5,r=.5
switch(t){case"right":case"top-right":case"bottom-right":e=1
break
case"left":case"top-left":case"bottom-left":e=0}switch(t){case"bottom":case"bottom-right":case"bottom-left":r=1
break
case"top":case"top-right":case"top-left":r=0}return{horizontalAlign:e,verticalAlign:r}}function bs(t,e,r,i,n){if(n){var o=t[i],a=e[o.fontStack],s=a&&a[o.glyph]
if(s)for(var l=s.metrics.advance*o.scale,u=(t[i].x+l)*n,c=r;c<=i;c++)t[c].x-=u}}ms[10]=!0,ms[32]=!0,ms[38]=!0,ms[40]=!0,ms[41]=!0,ms[43]=!0,ms[45]=!0,ms[47]=!0,ms[173]=!0,ms[183]=!0,ms[8203]=!0,ms[8208]=!0,ms[8211]=!0,ms[8231]=!0
var ws=function(t){function e(e,r,i,n){t.call(this,e,r),this.angle=i,void 0!==n&&(this.segment=n)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.clone=function(){return new e(this.x,this.y,this.angle,this.segment)},e}(n)
mi("Anchor",ws)
var Ss=256
function Es(t,e){var r=e.expression
if("constant"===r.kind)return{kind:"constant",layoutSize:r.evaluate(new Mi(t+1))}
if("source"===r.kind)return{kind:"source"}
for(var i=r.zoomStops,n=r.interpolationType,o=0;o<i.length&&i[o]<=t;)o++
for(var a=o=Math.max(0,o-1);a<i.length&&i[a]<t+1;)a++
a=Math.min(i.length-1,a)
var s=i[o],l=i[a]
return"composite"===r.kind?{kind:"composite",minZoom:s,maxZoom:l,interpolationType:n}:{kind:"camera",minZoom:s,maxZoom:l,minSize:r.evaluate(new Mi(s)),maxSize:r.evaluate(new Mi(l)),interpolationType:n}}function Ts(t,e,r){var i=e.uSize,n=e.uSizeT,o=r.lowerSize,a=r.upperSize
return"source"===t.kind?o/Ss:"composite"===t.kind?xe(o/Ss,a/Ss,n):i}function As(t,e){var r=0,i=0
if("constant"===t.kind)i=t.layoutSize
else if("source"!==t.kind){var n=t.interpolationType,o=t.minZoom,a=t.maxZoom,s=n?u(Ne.interpolationFactor(n,e,o,a),0,1):0
"camera"===t.kind?i=xe(t.minSize,t.maxSize,s):r=s}return{uSizeT:r,uSize:i}}var Is=Object.freeze({getSizeData:Es,evaluateSizeForFeature:Ts,evaluateSizeForZoom:As,SIZE_PACK_FACTOR:Ss}),ks=Ra.VectorTileFeature.types,zs=[{name:"a_fade_opacity",components:1,type:"Uint8",offset:0}]
function Cs(t,e,r,i,n,o,a,s){t.emplaceBack(e,r,Math.round(32*i),Math.round(32*n),o,a,s?s[0]:0,s?s[1]:0)}function Ps(t,e,r){t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r)}var Ms=function(t){this.layoutVertexArray=new on,this.indexArray=new yn,this.programConfigurations=t,this.segments=new Dn,this.dynamicLayoutVertexArray=new an,this.opacityVertexArray=new sn,this.placedSymbolArray=new En}
Ms.prototype.upload=function(t,e,r,i){r&&(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,is.members),this.indexBuffer=t.createIndexBuffer(this.indexArray,e),this.dynamicLayoutVertexBuffer=t.createVertexBuffer(this.dynamicLayoutVertexArray,ns.members,!0),this.opacityVertexBuffer=t.createVertexBuffer(this.opacityVertexArray,zs,!0),this.opacityVertexBuffer.itemSize=1),(r||i)&&this.programConfigurations.upload(t)},Ms.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.dynamicLayoutVertexBuffer.destroy(),this.opacityVertexBuffer.destroy())},mi("SymbolBuffers",Ms)
var Ls=function(t,e,r){this.layoutVertexArray=new t,this.layoutAttributes=e,this.indexArray=new r,this.segments=new Dn,this.collisionVertexArray=new cn}
Ls.prototype.upload=function(t){this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,this.layoutAttributes),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.collisionVertexBuffer=t.createVertexBuffer(this.collisionVertexArray,os.members,!0)},Ls.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.segments.destroy(),this.collisionVertexBuffer.destroy())},mi("CollisionBuffers",Ls)
var Ds=function(t){this.collisionBoxArray=t.collisionBoxArray,this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map(function(t){return t.id}),this.index=t.index,this.pixelRatio=t.pixelRatio,this.sourceLayerIndex=t.sourceLayerIndex,this.hasPattern=!1,this.hasPaintOverrides=!1
var e=this.layers[0]._unevaluatedLayout._values
this.textSizeData=Es(this.zoom,e["text-size"]),this.iconSizeData=Es(this.zoom,e["icon-size"])
var r=this.layers[0].layout,i=r.get("symbol-sort-key"),n=r.get("symbol-z-order")
this.sortFeaturesByKey="viewport-y"!==n&&void 0!==i.constantOr(1)
var o="viewport-y"===n||"auto"===n&&!this.sortFeaturesByKey
this.sortFeaturesByY=o&&(r.get("text-allow-overlap")||r.get("icon-allow-overlap")||r.get("text-ignore-placement")||r.get("icon-ignore-placement")),"point"===r.get("symbol-placement")&&(this.writingModes=r.get("text-writing-mode").map(function(t){return ps[t]})),this.stateDependentLayerIds=this.layers.filter(function(t){return t.isStateDependent()}).map(function(t){return t.id}),this.sourceID=t.sourceID}
Ds.prototype.createArrays=function(){var t=this.layers[0].layout
this.hasPaintOverrides=Os.hasPaintOverrides(t),this.text=new Ms(new to(is.members,this.layers,this.zoom,function(t){return/^text/.test(t)})),this.icon=new Ms(new to(is.members,this.layers,this.zoom,function(t){return/^icon/.test(t)})),this.textCollisionBox=new Ls(un,as.members,vn),this.iconCollisionBox=new Ls(un,as.members,vn),this.textCollisionCircle=new Ls(un,ss.members,yn),this.iconCollisionCircle=new Ls(un,ss.members,yn),this.glyphOffsetArray=new kn,this.lineVertexArray=new Cn,this.symbolInstances=new An},Ds.prototype.calculateGlyphDependencies=function(t,e,r,i,n){for(var o=0;o<t.length;o++)if(e[t.charCodeAt(o)]=!0,(r||i)&&n){var a=us[t.charAt(o)]
a&&(e[a.charCodeAt(0)]=!0)}},Ds.prototype.populate=function(t,e){var r=this.layers[0],i=r.layout,n=i.get("text-font"),o=i.get("text-field"),a=i.get("icon-image"),s=("constant"!==o.value.kind||o.value.value.toString().length>0)&&("constant"!==n.value.kind||n.value.value.length>0),l="constant"!==a.value.kind||!!a.value.value||Object.keys(a.parameters).length>0,u=i.get("symbol-sort-key")
if(this.features=[],s||l){for(var c=e.iconDependencies,p=e.glyphDependencies,h=e.availableImages,f=new Mi(this.zoom),d=0,m=t;d<m.length;d+=1){var y=m[d],v=y.feature,_=y.index,g=y.sourceLayerIndex
if(r._featureFilter(f,v)){var x=void 0
if(s){var b=r.getValueAndResolveTokens("text-field",v,h)
x=ls(b instanceof Jt?b:Jt.fromString(b),r,v)}var w=void 0
if(l){var S=r.getValueAndResolveTokens("icon-image",v,h)
w=S instanceof Yt?S:S&&"string"!=typeof S?Yt.fromString(S):Yt.fromString({name:S,available:!1})}if(x||w){var E=this.sortFeaturesByKey?u.evaluate(v,{}):void 0,T={text:x,icon:w,index:_,sourceLayerIndex:g,geometry:oo(v),properties:v.properties,type:ks[v.type],sortKey:E}
if(void 0!==v.id&&(T.id=v.id),this.features.push(T),w&&(c[w.name]=!0),x){var A=n.evaluate(v,{}).join(","),I="map"===i.get("text-rotation-alignment")&&"point"!==i.get("symbol-placement")
this.allowVerticalPlacement=this.writingModes&&this.writingModes.indexOf(ps.vertical)>=0
for(var k=0,z=x.sections;k<z.length;k+=1){var C=z[k],P=bi(x.toString()),M=C.fontStack||A,L=p[M]=p[M]||{}
this.calculateGlyphDependencies(C.text,L,I,this.allowVerticalPlacement,P)}}}}}"line"===i.get("symbol-placement")&&(this.features=function(t){var e={},r={},i=[],n=0
function o(e){i.push(t[e]),n++}function a(t,e,n){var o=r[t]
return delete r[t],r[e]=o,i[o].geometry[0].pop(),i[o].geometry[0]=i[o].geometry[0].concat(n[0]),o}function s(t,r,n){var o=e[r]
return delete e[r],e[t]=o,i[o].geometry[0].shift(),i[o].geometry[0]=n[0].concat(i[o].geometry[0]),o}function l(t,e,r){var i=r?e[0][e[0].length-1]:e[0][0]
return t+":"+i.x+":"+i.y}for(var u=0;u<t.length;u++){var c=t[u],p=c.geometry,h=c.text?c.text.toString():null
if(h){var f=l(h,p),d=l(h,p,!0)
if(f in r&&d in e&&r[f]!==e[d]){var m=s(f,d,p),y=a(f,d,i[m].geometry)
delete e[f],delete r[d],r[l(h,i[y].geometry,!0)]=y,i[m].geometry=null}else f in r?a(f,d,p):d in e?s(f,d,p):(o(u),e[f]=n-1,r[d]=n-1)}else o(u)}return i.filter(function(t){return t.geometry})}(this.features)),this.sortFeaturesByKey&&this.features.sort(function(t,e){return t.sortKey-e.sortKey})}},Ds.prototype.update=function(t,e,r){this.stateDependentLayers.length&&(this.text.programConfigurations.updatePaintArrays(t,e,this.layers,r),this.icon.programConfigurations.updatePaintArrays(t,e,this.layers,r))},Ds.prototype.isEmpty=function(){return 0===this.symbolInstances.length},Ds.prototype.uploadPending=function(){return!this.uploaded||this.text.programConfigurations.needsUpload||this.icon.programConfigurations.needsUpload},Ds.prototype.upload=function(t){this.uploaded||(this.textCollisionBox.upload(t),this.iconCollisionBox.upload(t),this.textCollisionCircle.upload(t),this.iconCollisionCircle.upload(t)),this.text.upload(t,this.sortFeaturesByY,!this.uploaded,this.text.programConfigurations.needsUpload),this.icon.upload(t,this.sortFeaturesByY,!this.uploaded,this.icon.programConfigurations.needsUpload),this.uploaded=!0},Ds.prototype.destroy=function(){this.text.destroy(),this.icon.destroy(),this.textCollisionBox.destroy(),this.iconCollisionBox.destroy(),this.textCollisionCircle.destroy(),this.iconCollisionCircle.destroy()},Ds.prototype.addToLineVertexArray=function(t,e){var r=this.lineVertexArray.length
if(void 0!==t.segment){for(var i=t.dist(e[t.segment+1]),n=t.dist(e[t.segment]),o={},a=t.segment+1;a<e.length;a++)o[a]={x:e[a].x,y:e[a].y,tileUnitDistanceFromAnchor:i},a<e.length-1&&(i+=e[a+1].dist(e[a]))
for(var s=t.segment||0;s>=0;s--)o[s]={x:e[s].x,y:e[s].y,tileUnitDistanceFromAnchor:n},s>0&&(n+=e[s-1].dist(e[s]))
for(var l=0;l<e.length;l++){var u=o[l]
this.lineVertexArray.emplaceBack(u.x,u.y,u.tileUnitDistanceFromAnchor)}}return{lineStartIndex:r,lineLength:this.lineVertexArray.length-r}},Ds.prototype.addSymbols=function(t,e,r,i,n,o,a,s,l,u,c){var p=this,h=t.indexArray,f=t.layoutVertexArray,d=t.dynamicLayoutVertexArray,m=t.segments.prepareSegment(4*e.length,t.layoutVertexArray,t.indexArray,o.sortKey),y=this.glyphOffsetArray.length,v=m.vertexLength,_=this.allowVerticalPlacement&&a===ps.vertical?Math.PI/2:0,g=function(t){var e=t.tl,i=t.tr,n=t.bl,o=t.br,a=t.tex,l=m.vertexLength,u=t.glyphOffset[1]
Cs(f,s.x,s.y,e.x,u+e.y,a.x,a.y,r),Cs(f,s.x,s.y,i.x,u+i.y,a.x+a.w,a.y,r),Cs(f,s.x,s.y,n.x,u+n.y,a.x,a.y+a.h,r),Cs(f,s.x,s.y,o.x,u+o.y,a.x+a.w,a.y+a.h,r),Ps(d,s,_),h.emplaceBack(l,l+1,l+2),h.emplaceBack(l+1,l+2,l+3),m.vertexLength+=4,m.primitiveLength+=2,p.glyphOffsetArray.emplaceBack(t.glyphOffset[0])}
if(o.text&&o.text.sections){var x=o.text.sections
if(this.hasPaintOverrides){for(var b,w=function(e,r){void 0===b||b===e&&!r||t.programConfigurations.populatePaintArrays(t.layoutVertexArray.length,o,o.index,{},x[b]),b=e},S=0,E=e;S<E.length;S+=1){var T=E[S]
w(T.sectionIndex,!1),g(T)}w(b,!0)}else{for(var A=0,I=e;A<I.length;A+=1)g(I[A])
t.programConfigurations.populatePaintArrays(t.layoutVertexArray.length,o,o.index,{},x[0])}}else{for(var k=0,z=e;k<z.length;k+=1)g(z[k])
t.programConfigurations.populatePaintArrays(t.layoutVertexArray.length,o,o.index,{})}t.placedSymbolArray.emplaceBack(s.x,s.y,y,this.glyphOffsetArray.length-y,v,l,u,s.segment,r?r[0]:0,r?r[1]:0,i[0],i[1],a,0,!1,0,c)},Ds.prototype._addCollisionDebugVertex=function(t,e,r,i,n,o){return e.emplaceBack(0,0),t.emplaceBack(r.x,r.y,i,n,Math.round(o.x),Math.round(o.y))},Ds.prototype.addCollisionDebugVertices=function(t,e,r,i,o,a,s,l){var u=o.segments.prepareSegment(4,o.layoutVertexArray,o.indexArray),c=u.vertexLength,p=o.layoutVertexArray,h=o.collisionVertexArray,f=s.anchorX,d=s.anchorY
if(this._addCollisionDebugVertex(p,h,a,f,d,new n(t,e)),this._addCollisionDebugVertex(p,h,a,f,d,new n(r,e)),this._addCollisionDebugVertex(p,h,a,f,d,new n(r,i)),this._addCollisionDebugVertex(p,h,a,f,d,new n(t,i)),u.vertexLength+=4,l){var m=o.indexArray
m.emplaceBack(c,c+1,c+2),m.emplaceBack(c,c+2,c+3),u.primitiveLength+=2}else{var y=o.indexArray
y.emplaceBack(c,c+1),y.emplaceBack(c+1,c+2),y.emplaceBack(c+2,c+3),y.emplaceBack(c+3,c),u.primitiveLength+=4}},Ds.prototype.addDebugCollisionBoxes=function(t,e,r,i){for(var n=t;n<e;n++){var o=this.collisionBoxArray.get(n),a=o.x1,s=o.y1,l=o.x2,u=o.y2,c=o.radius>0
this.addCollisionDebugVertices(a,s,l,u,c?i?this.textCollisionCircle:this.iconCollisionCircle:i?this.textCollisionBox:this.iconCollisionBox,o.anchorPoint,r,c)}},Ds.prototype.generateCollisionDebugBuffers=function(){for(var t=0;t<this.symbolInstances.length;t++){var e=this.symbolInstances.get(t)
this.addDebugCollisionBoxes(e.textBoxStartIndex,e.textBoxEndIndex,e,!0),this.addDebugCollisionBoxes(e.verticalTextBoxStartIndex,e.verticalTextBoxEndIndex,e,!0),this.addDebugCollisionBoxes(e.iconBoxStartIndex,e.iconBoxEndIndex,e,!1)}},Ds.prototype._deserializeCollisionBoxesForSymbol=function(t,e,r,i,n,o,a){for(var s={},l=e;l<r;l++){var u=t.get(l)
if(0===u.radius){s.textBox={x1:u.x1,y1:u.y1,x2:u.x2,y2:u.y2,anchorPointX:u.anchorPointX,anchorPointY:u.anchorPointY},s.textFeatureIndex=u.featureIndex
break}s.textCircles||(s.textCircles=[],s.textFeatureIndex=u.featureIndex),s.textCircles.push(u.anchorPointX,u.anchorPointY,u.radius,u.signedDistanceFromAnchor,1)}for(var c=i;c<n;c++){var p=t.get(c)
if(0===p.radius){s.verticalTextBox={x1:p.x1,y1:p.y1,x2:p.x2,y2:p.y2,anchorPointX:p.anchorPointX,anchorPointY:p.anchorPointY},s.verticalTextFeatureIndex=p.featureIndex
break}}for(var h=o;h<a;h++){var f=t.get(h)
if(0===f.radius){s.iconBox={x1:f.x1,y1:f.y1,x2:f.x2,y2:f.y2,anchorPointX:f.anchorPointX,anchorPointY:f.anchorPointY},s.iconFeatureIndex=f.featureIndex
break}}return s},Ds.prototype.deserializeCollisionBoxes=function(t){this.collisionArrays=[]
for(var e=0;e<this.symbolInstances.length;e++){var r=this.symbolInstances.get(e)
this.collisionArrays.push(this._deserializeCollisionBoxesForSymbol(t,r.textBoxStartIndex,r.textBoxEndIndex,r.verticalTextBoxStartIndex,r.verticalTextBoxEndIndex,r.iconBoxStartIndex,r.iconBoxEndIndex))}},Ds.prototype.hasTextData=function(){return this.text.segments.get().length>0},Ds.prototype.hasIconData=function(){return this.icon.segments.get().length>0},Ds.prototype.hasTextCollisionBoxData=function(){return this.textCollisionBox.segments.get().length>0},Ds.prototype.hasIconCollisionBoxData=function(){return this.iconCollisionBox.segments.get().length>0},Ds.prototype.hasTextCollisionCircleData=function(){return this.textCollisionCircle.segments.get().length>0},Ds.prototype.hasIconCollisionCircleData=function(){return this.iconCollisionCircle.segments.get().length>0},Ds.prototype.addIndicesForPlacedTextSymbol=function(t){for(var e=this.text.placedSymbolArray.get(t),r=e.vertexStartIndex+4*e.numGlyphs,i=e.vertexStartIndex;i<r;i+=4)this.text.indexArray.emplaceBack(i,i+1,i+2),this.text.indexArray.emplaceBack(i+1,i+2,i+3)},Ds.prototype.getSortedSymbolIndexes=function(t){if(this.sortedAngle===t&&void 0!==this.symbolInstanceIndexes)return this.symbolInstanceIndexes
for(var e=Math.sin(t),r=Math.cos(t),i=[],n=[],o=[],a=0;a<this.symbolInstances.length;++a){o.push(a)
var s=this.symbolInstances.get(a)
i.push(0|Math.round(e*s.anchorX+r*s.anchorY)),n.push(s.featureIndex)}return o.sort(function(t,e){return i[t]-i[e]||n[e]-n[t]}),o},Ds.prototype.sortFeatures=function(t){var e=this
if(this.sortFeaturesByY&&this.sortedAngle!==t&&!(this.text.segments.get().length>1||this.icon.segments.get().length>1)){this.symbolInstanceIndexes=this.getSortedSymbolIndexes(t),this.sortedAngle=t,this.text.indexArray.clear(),this.icon.indexArray.clear(),this.featureSortOrder=[]
for(var r=0,i=this.symbolInstanceIndexes;r<i.length;r+=1){var n=i[r],o=this.symbolInstances.get(n)
this.featureSortOrder.push(o.featureIndex),[o.rightJustifiedTextSymbolIndex,o.centerJustifiedTextSymbolIndex,o.leftJustifiedTextSymbolIndex].forEach(function(t,r,i){t>=0&&i.indexOf(t)===r&&e.addIndicesForPlacedTextSymbol(t)}),o.verticalPlacedTextSymbolIndex>=0&&this.addIndicesForPlacedTextSymbol(o.verticalPlacedTextSymbolIndex)
var a=this.icon.placedSymbolArray.get(n)
if(a.numGlyphs){var s=a.vertexStartIndex
this.icon.indexArray.emplaceBack(s,s+1,s+2),this.icon.indexArray.emplaceBack(s+1,s+2,s+3)}}this.text.indexBuffer&&this.text.indexBuffer.updateData(this.text.indexArray),this.icon.indexBuffer&&this.icon.indexBuffer.updateData(this.icon.indexArray)}},mi("SymbolBucket",Ds,{omit:["layers","collisionBoxArray","features","compareText"]}),Ds.MAX_GLYPHS=65535,Ds.addDynamicAttributes=Ps
var Bs=new Xi({"symbol-placement":new Ni(St.layout_symbol["symbol-placement"]),"symbol-spacing":new Ni(St.layout_symbol["symbol-spacing"]),"symbol-avoid-edges":new Ni(St.layout_symbol["symbol-avoid-edges"]),"symbol-sort-key":new ji(St.layout_symbol["symbol-sort-key"]),"symbol-z-order":new Ni(St.layout_symbol["symbol-z-order"]),"icon-allow-overlap":new Ni(St.layout_symbol["icon-allow-overlap"]),"icon-ignore-placement":new Ni(St.layout_symbol["icon-ignore-placement"]),"icon-optional":new Ni(St.layout_symbol["icon-optional"]),"icon-rotation-alignment":new Ni(St.layout_symbol["icon-rotation-alignment"]),"icon-size":new ji(St.layout_symbol["icon-size"]),"icon-text-fit":new Ni(St.layout_symbol["icon-text-fit"]),"icon-text-fit-padding":new Ni(St.layout_symbol["icon-text-fit-padding"]),"icon-image":new ji(St.layout_symbol["icon-image"]),"icon-rotate":new ji(St.layout_symbol["icon-rotate"]),"icon-padding":new Ni(St.layout_symbol["icon-padding"]),"icon-keep-upright":new Ni(St.layout_symbol["icon-keep-upright"]),"icon-offset":new ji(St.layout_symbol["icon-offset"]),"icon-anchor":new ji(St.layout_symbol["icon-anchor"]),"icon-pitch-alignment":new Ni(St.layout_symbol["icon-pitch-alignment"]),"text-pitch-alignment":new Ni(St.layout_symbol["text-pitch-alignment"]),"text-rotation-alignment":new Ni(St.layout_symbol["text-rotation-alignment"]),"text-field":new ji(St.layout_symbol["text-field"]),"text-font":new ji(St.layout_symbol["text-font"]),"text-size":new ji(St.layout_symbol["text-size"]),"text-max-width":new ji(St.layout_symbol["text-max-width"]),"text-line-height":new Ni(St.layout_symbol["text-line-height"]),"text-letter-spacing":new ji(St.layout_symbol["text-letter-spacing"]),"text-justify":new ji(St.layout_symbol["text-justify"]),"text-radial-offset":new ji(St.layout_symbol["text-radial-offset"]),"text-variable-anchor":new Ni(St.layout_symbol["text-variable-anchor"]),"text-anchor":new ji(St.layout_symbol["text-anchor"]),"text-max-angle":new Ni(St.layout_symbol["text-max-angle"]),"text-writing-mode":new Ni(St.layout_symbol["text-writing-mode"]),"text-rotate":new ji(St.layout_symbol["text-rotate"]),"text-padding":new Ni(St.layout_symbol["text-padding"]),"text-keep-upright":new Ni(St.layout_symbol["text-keep-upright"]),"text-transform":new ji(St.layout_symbol["text-transform"]),"text-offset":new ji(St.layout_symbol["text-offset"]),"text-allow-overlap":new Ni(St.layout_symbol["text-allow-overlap"]),"text-ignore-placement":new Ni(St.layout_symbol["text-ignore-placement"]),"text-optional":new Ni(St.layout_symbol["text-optional"])}),Rs={paint:new Xi({"icon-opacity":new ji(St.paint_symbol["icon-opacity"]),"icon-color":new ji(St.paint_symbol["icon-color"]),"icon-halo-color":new ji(St.paint_symbol["icon-halo-color"]),"icon-halo-width":new ji(St.paint_symbol["icon-halo-width"]),"icon-halo-blur":new ji(St.paint_symbol["icon-halo-blur"]),"icon-translate":new Ni(St.paint_symbol["icon-translate"]),"icon-translate-anchor":new Ni(St.paint_symbol["icon-translate-anchor"]),"text-opacity":new ji(St.paint_symbol["text-opacity"]),"text-color":new ji(St.paint_symbol["text-color"],{runtimeType:Rt,getOverride:function(t){return t.textColor},hasOverride:function(t){return!!t.textColor}}),"text-halo-color":new ji(St.paint_symbol["text-halo-color"]),"text-halo-width":new ji(St.paint_symbol["text-halo-width"]),"text-halo-blur":new ji(St.paint_symbol["text-halo-blur"]),"text-translate":new Ni(St.paint_symbol["text-translate"]),"text-translate-anchor":new Ni(St.paint_symbol["text-translate-anchor"])}),layout:Bs},Fs=function(t){this.type=t.property.overrides?t.property.overrides.runtimeType:Mt,this.defaultValue=t}
Fs.prototype.evaluate=function(t){if(t.formattedSection){var e=this.defaultValue.property.overrides
if(e&&e.hasOverride(t.formattedSection))return e.getOverride(t.formattedSection)}return t.feature&&t.featureState?this.defaultValue.evaluate(t.feature,t.featureState):this.defaultValue.property.specification.default},Fs.prototype.eachChild=function(t){this.defaultValue.isConstant()||t(this.defaultValue.value._styleExpression.expression)},Fs.prototype.possibleOutputs=function(){return[void 0]},Fs.prototype.serialize=function(){return null},mi("FormatSectionOverride",Fs,{omit:["defaultValue"]})
var Os=function(t){function e(e){t.call(this,e,Rs)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.recalculate=function(e,r){if(t.prototype.recalculate.call(this,e,r),"auto"===this.layout.get("icon-rotation-alignment")&&("point"!==this.layout.get("symbol-placement")?this.layout._values["icon-rotation-alignment"]="map":this.layout._values["icon-rotation-alignment"]="viewport"),"auto"===this.layout.get("text-rotation-alignment")&&("point"!==this.layout.get("symbol-placement")?this.layout._values["text-rotation-alignment"]="map":this.layout._values["text-rotation-alignment"]="viewport"),"auto"===this.layout.get("text-pitch-alignment")&&(this.layout._values["text-pitch-alignment"]=this.layout.get("text-rotation-alignment")),"auto"===this.layout.get("icon-pitch-alignment")&&(this.layout._values["icon-pitch-alignment"]=this.layout.get("icon-rotation-alignment")),"point"===this.layout.get("symbol-placement")){var i=this.layout.get("text-writing-mode")
if(i){for(var n=[],o=0,a=i;o<a.length;o+=1){var s=a[o]
n.indexOf(s)<0&&n.push(s)}this.layout._values["text-writing-mode"]=n}else this.layout._values["text-writing-mode"]=["horizontal"]}this._setPaintOverrides()},e.prototype.getValueAndResolveTokens=function(t,e,r){var i=this.layout.get(t).evaluate(e,{},r),n=this._unevaluatedLayout._values[t]
return n.isDataDriven()||Er(n.value)||!i?i:function(t,e){return i.replace(/{([^{}]+)}/g,function(e,r){return r in t?String(t[r]):""})}(e.properties)},e.prototype.createBucket=function(t){return new Ds(t)},e.prototype.queryRadius=function(){return 0},e.prototype.queryIntersectsFeature=function(){return!1},e.prototype._setPaintOverrides=function(){for(var t=0,r=Rs.paint.overridableProperties;t<r.length;t+=1){var i=r[t]
if(e.hasPaintOverride(this.layout,i)){var n,o=this.paint.get(i),a=new Fs(o),s=new Sr(a,o.property.specification)
n="constant"===o.value.kind||"source"===o.value.kind?new Ar("source",s):new Ir("composite",s,o.value.zoomStops,o.value._interpolationType),this.paint._values[i]=new Ui(o.property,n,o.parameters)}}},e.prototype._handleOverridablePaintPropertyUpdate=function(t,r,i){return!(!this.layout||r.isDataDriven()||i.isDataDriven())&&e.hasPaintOverride(this.layout,t)},e.hasPaintOverride=function(t,e){var r=t.get("text-field"),i=Rs.paint.properties[e],n=!1,o=function(t){for(var e=0,r=t;e<r.length;e+=1){var o=r[e]
if(i.overrides&&i.overrides.hasOverride(o))return void(n=!0)}}
if("constant"===r.value.kind&&r.value.value instanceof Jt)o(r.value.value.sections)
else if("source"===r.value.kind){var a=function(t){if(!n)if(t instanceof ee&&Qt(t.value)===Vt){var e=t.value
o(e.sections)}else t instanceof oe?o(t.sections):t.eachChild(a)},s=r.value
s._styleExpression&&a(s._styleExpression.expression)}return n},e.hasPaintOverrides=function(t){for(var r=0,i=Rs.paint.overridableProperties;r<i.length;r+=1){var n=i[r]
if(e.hasPaintOverride(t,n))return!0}return!1},e}(Wi),Us={paint:new Xi({"background-color":new Ni(St.paint_background["background-color"]),"background-pattern":new Zi(St.paint_background["background-pattern"]),"background-opacity":new Ni(St.paint_background["background-opacity"])})},Vs=function(t){function e(e){t.call(this,e,Us)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Wi),Ns={paint:new Xi({"raster-opacity":new Ni(St.paint_raster["raster-opacity"]),"raster-hue-rotate":new Ni(St.paint_raster["raster-hue-rotate"]),"raster-brightness-min":new Ni(St.paint_raster["raster-brightness-min"]),"raster-brightness-max":new Ni(St.paint_raster["raster-brightness-max"]),"raster-saturation":new Ni(St.paint_raster["raster-saturation"]),"raster-contrast":new Ni(St.paint_raster["raster-contrast"]),"raster-resampling":new Ni(St.paint_raster["raster-resampling"]),"raster-fade-duration":new Ni(St.paint_raster["raster-fade-duration"])})},js=function(t){function e(e){t.call(this,e,Ns)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Wi),qs=function(t){function e(e){t.call(this,e,{}),this.implementation=e}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.is3D=function(){return"3d"===this.implementation.renderingMode},e.prototype.hasOffscreenPass=function(){return void 0!==this.implementation.prerender},e.prototype.recalculate=function(){},e.prototype.updateTransitions=function(){},e.prototype.hasTransition=function(){},e.prototype.serialize=function(){},e.prototype.onAdd=function(t){this.implementation.onAdd&&this.implementation.onAdd(t,t.painter.context.gl)},e.prototype.onRemove=function(t){this.implementation.onRemove&&this.implementation.onRemove(t,t.painter.context.gl)},e}(Wi),Zs={circle:ko,heatmap:Oo,hillshade:Vo,fill:Aa,"fill-extrusion":Za,line:es,symbol:Os,background:Vs,raster:js}
function Gs(t){for(var e=0,r=0,i=0,n=t;i<n.length;i+=1){var o=n[i]
e+=o.w*o.h,r=Math.max(r,o.w)}t.sort(function(t,e){return e.h-t.h})
for(var a=[{x:0,y:0,w:Math.max(Math.ceil(Math.sqrt(e/.95)),r),h:1/0}],s=0,l=0,u=0,c=t;u<c.length;u+=1)for(var p=c[u],h=a.length-1;h>=0;h--){var f=a[h]
if(!(p.w>f.w||p.h>f.h)){if(p.x=f.x,p.y=f.y,l=Math.max(l,p.y+p.h),s=Math.max(s,p.x+p.w),p.w===f.w&&p.h===f.h){var d=a.pop()
h<a.length&&(a[h]=d)}else p.h===f.h?(f.x+=p.w,f.w-=p.w):p.w===f.w?(f.y+=p.h,f.h-=p.h):(a.push({x:f.x+p.w,y:f.y,w:f.w-p.w,h:p.h}),f.y+=p.h,f.h-=p.h)
break}}return{w:s,h:l,fill:e/(s*l)||0}}var Xs=function(t,e){var r=e.pixelRatio,i=e.version
this.paddedRect=t,this.pixelRatio=r,this.version=i},Ws={tl:{configurable:!0},br:{configurable:!0},tlbr:{configurable:!0},displaySize:{configurable:!0}}
Ws.tl.get=function(){return[this.paddedRect.x+1,this.paddedRect.y+1]},Ws.br.get=function(){return[this.paddedRect.x+this.paddedRect.w-1,this.paddedRect.y+this.paddedRect.h-1]},Ws.tlbr.get=function(){return this.tl.concat(this.br)},Ws.displaySize.get=function(){return[(this.paddedRect.w-2)/this.pixelRatio,(this.paddedRect.h-2)/this.pixelRatio]},Object.defineProperties(Xs.prototype,Ws)
var Ks=function(t,e){var r={},i={}
this.haveRenderCallbacks=[]
var n=[]
this.addImages(t,r,n),this.addImages(e,i,n)
var o=Gs(n),a=o.w,s=o.h,l=new Bo({width:a||1,height:s||1})
for(var u in t){var c=t[u],p=r[u].paddedRect
Bo.copy(c.data,l,{x:0,y:0},{x:p.x+1,y:p.y+1},c.data)}for(var h in e){var f=e[h],d=i[h].paddedRect,m=d.x+1,y=d.y+1,v=f.data.width,_=f.data.height
Bo.copy(f.data,l,{x:0,y:0},{x:m,y:y},f.data),Bo.copy(f.data,l,{x:0,y:_-1},{x:m,y:y-1},{width:v,height:1}),Bo.copy(f.data,l,{x:0,y:0},{x:m,y:y+_},{width:v,height:1}),Bo.copy(f.data,l,{x:v-1,y:0},{x:m-1,y:y},{width:1,height:_}),Bo.copy(f.data,l,{x:0,y:0},{x:m+v,y:y},{width:1,height:_})}this.image=l,this.iconPositions=r,this.patternPositions=i}
Ks.prototype.addImages=function(t,e,r){for(var i in t){var n=t[i],o={x:0,y:0,w:n.data.width+2,h:n.data.height+2}
r.push(o),e[i]=new Xs(o,n),n.hasRenderCallback&&this.haveRenderCallbacks.push(i)}},Ks.prototype.patchUpdatedImages=function(t,e){for(var r in t.dispatchRenderCallbacks(this.haveRenderCallbacks),t.updatedImages)this.patchUpdatedImage(this.iconPositions[r],t.getImage(r),e),this.patchUpdatedImage(this.patternPositions[r],t.getImage(r),e)},Ks.prototype.patchUpdatedImage=function(t,e,r){if(t&&e&&t.version!==e.version){t.version=e.version
var i=t.tl,n=i[0],o=i[1]
r.update(e.data,void 0,{x:n,y:o})}},mi("ImagePosition",Xs),mi("ImageAtlas",Ks)
var Hs=self.HTMLImageElement,Js=self.HTMLCanvasElement,Ys=self.HTMLVideoElement,$s=self.ImageData,Qs=function(t,e,r,i){this.context=t,this.format=r,this.texture=t.gl.createTexture(),this.update(e,i)}
Qs.prototype.update=function(t,e,r){var i=t.width,n=t.height,o=!(this.size&&this.size[0]===i&&this.size[1]===n||r),a=this.context,s=a.gl
if(this.useMipmap=Boolean(e&&e.useMipmap),s.bindTexture(s.TEXTURE_2D,this.texture),a.pixelStoreUnpackFlipY.set(!1),a.pixelStoreUnpack.set(1),a.pixelStoreUnpackPremultiplyAlpha.set(this.format===s.RGBA&&(!e||!1!==e.premultiply)),o)this.size=[i,n],t instanceof Hs||t instanceof Js||t instanceof Ys||t instanceof $s?s.texImage2D(s.TEXTURE_2D,0,this.format,this.format,s.UNSIGNED_BYTE,t):s.texImage2D(s.TEXTURE_2D,0,this.format,i,n,0,this.format,s.UNSIGNED_BYTE,t.data)
else{var l=r||{x:0,y:0},u=l.x,c=l.y
t instanceof Hs||t instanceof Js||t instanceof Ys||t instanceof $s?s.texSubImage2D(s.TEXTURE_2D,0,u,c,s.RGBA,s.UNSIGNED_BYTE,t):s.texSubImage2D(s.TEXTURE_2D,0,u,c,i,n,s.RGBA,s.UNSIGNED_BYTE,t.data)}this.useMipmap&&this.isSizePowerOfTwo()&&s.generateMipmap(s.TEXTURE_2D)},Qs.prototype.bind=function(t,e,r){var i=this.context.gl
i.bindTexture(i.TEXTURE_2D,this.texture),r!==i.LINEAR_MIPMAP_NEAREST||this.isSizePowerOfTwo()||(r=i.LINEAR),t!==this.filter&&(i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,t),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,r||t),this.filter=t),e!==this.wrap&&(i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,e),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,e),this.wrap=e)},Qs.prototype.isSizePowerOfTwo=function(){return this.size[0]===this.size[1]&&Math.log(this.size[0])/Math.LN2%1==0},Qs.prototype.destroy=function(){this.context.gl.deleteTexture(this.texture),this.texture=null}
var tl=function(t,e,r,i,n){var o,a,s=8*n-i-1,l=(1<<s)-1,u=l>>1,c=-7,p=r?n-1:0,h=r?-1:1,f=t[e+p]
for(p+=h,o=f&(1<<-c)-1,f>>=-c,c+=s;c>0;o=256*o+t[e+p],p+=h,c-=8);for(a=o&(1<<-c)-1,o>>=-c,c+=i;c>0;a=256*a+t[e+p],p+=h,c-=8);if(0===o)o=1-u
else{if(o===l)return a?NaN:1/0*(f?-1:1)
a+=Math.pow(2,i),o-=u}return(f?-1:1)*a*Math.pow(2,o-i)},el=function(t,e,r,i,n,o){var a,s,l,u=8*o-n-1,c=(1<<u)-1,p=c>>1,h=23===n?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:o-1,d=i?1:-1,m=e<0||0===e&&1/e<0?1:0
for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,a=c):(a=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-a))<1&&(a--,l*=2),(e+=a+p>=1?h/l:h*Math.pow(2,1-p))*l>=2&&(a++,l/=2),a+p>=c?(s=0,a=c):a+p>=1?(s=(e*l-1)*Math.pow(2,n),a+=p):(s=e*Math.pow(2,p-1)*Math.pow(2,n),a=0));n>=8;t[r+f]=255&s,f+=d,s/=256,n-=8);for(a=a<<n|s,u+=n;u>0;t[r+f]=255&a,f+=d,a/=256,u-=8);t[r+f-d]|=128*m},rl=il
function il(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length}function nl(t){return t.type===il.Bytes?t.readVarint()+t.pos:t.pos+1}function ol(t,e,r){return r?4294967296*e+(t>>>0):4294967296*(e>>>0)+(t>>>0)}function al(t,e,r){var i=e<=16383?1:e<=2097151?2:e<=268435455?3:Math.floor(Math.log(e)/(7*Math.LN2))
r.realloc(i)
for(var n=r.pos-1;n>=t;n--)r.buf[n+i]=r.buf[n]}function sl(t,e){for(var r=0;r<t.length;r++)e.writeVarint(t[r])}function ll(t,e){for(var r=0;r<t.length;r++)e.writeSVarint(t[r])}function ul(t,e){for(var r=0;r<t.length;r++)e.writeFloat(t[r])}function cl(t,e){for(var r=0;r<t.length;r++)e.writeDouble(t[r])}function pl(t,e){for(var r=0;r<t.length;r++)e.writeBoolean(t[r])}function hl(t,e){for(var r=0;r<t.length;r++)e.writeFixed32(t[r])}function fl(t,e){for(var r=0;r<t.length;r++)e.writeSFixed32(t[r])}function dl(t,e){for(var r=0;r<t.length;r++)e.writeFixed64(t[r])}function ml(t,e){for(var r=0;r<t.length;r++)e.writeSFixed64(t[r])}function yl(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+16777216*t[e+3]}function vl(t,e,r){t[r]=e,t[r+1]=e>>>8,t[r+2]=e>>>16,t[r+3]=e>>>24}function _l(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+(t[e+3]<<24)}il.Varint=0,il.Fixed64=1,il.Bytes=2,il.Fixed32=5,il.prototype={destroy:function(){this.buf=null},readFields:function(t,e,r){for(r=r||this.length;this.pos<r;){var i=this.readVarint(),n=i>>3,o=this.pos
this.type=7&i,t(n,e,this),this.pos===o&&this.skip(i)}return e},readMessage:function(t,e){return this.readFields(t,e,this.readVarint()+this.pos)},readFixed32:function(){var t=yl(this.buf,this.pos)
return this.pos+=4,t},readSFixed32:function(){var t=_l(this.buf,this.pos)
return this.pos+=4,t},readFixed64:function(){var t=yl(this.buf,this.pos)+4294967296*yl(this.buf,this.pos+4)
return this.pos+=8,t},readSFixed64:function(){var t=yl(this.buf,this.pos)+4294967296*_l(this.buf,this.pos+4)
return this.pos+=8,t},readFloat:function(){var t=tl(this.buf,this.pos,!0,23,4)
return this.pos+=4,t},readDouble:function(){var t=tl(this.buf,this.pos,!0,52,8)
return this.pos+=8,t},readVarint:function(t){var e,r,i=this.buf
return e=127&(r=i[this.pos++]),r<128?e:(e|=(127&(r=i[this.pos++]))<<7,r<128?e:(e|=(127&(r=i[this.pos++]))<<14,r<128?e:(e|=(127&(r=i[this.pos++]))<<21,r<128?e:function(t,e,r){var i,n,o=r.buf
if(i=(112&(n=o[r.pos++]))>>4,n<128)return ol(t,i,e)
if(i|=(127&(n=o[r.pos++]))<<3,n<128)return ol(t,i,e)
if(i|=(127&(n=o[r.pos++]))<<10,n<128)return ol(t,i,e)
if(i|=(127&(n=o[r.pos++]))<<17,n<128)return ol(t,i,e)
if(i|=(127&(n=o[r.pos++]))<<24,n<128)return ol(t,i,e)
if(i|=(1&(n=o[r.pos++]))<<31,n<128)return ol(t,i,e)
throw new Error("Expected varint not more than 10 bytes")}(e|=(15&(r=i[this.pos]))<<28,t,this))))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint()
return t%2==1?(t+1)/-2:t/2},readBoolean:function(){return Boolean(this.readVarint())},readString:function(){var t=this.readVarint()+this.pos,e=function(t,e,r){for(var i="",n=e;n<r;){var o,a,s,l=t[n],u=null,c=l>239?4:l>223?3:l>191?2:1
if(n+c>r)break
1===c?l<128&&(u=l):2===c?128==(192&(o=t[n+1]))&&(u=(31&l)<<6|63&o)<=127&&(u=null):3===c?(o=t[n+1],a=t[n+2],128==(192&o)&&128==(192&a)&&((u=(15&l)<<12|(63&o)<<6|63&a)<=2047||u>=55296&&u<=57343)&&(u=null)):4===c&&(o=t[n+1],a=t[n+2],s=t[n+3],128==(192&o)&&128==(192&a)&&128==(192&s)&&((u=(15&l)<<18|(63&o)<<12|(63&a)<<6|63&s)<=65535||u>=1114112)&&(u=null)),null===u?(u=65533,c=1):u>65535&&(u-=65536,i+=String.fromCharCode(u>>>10&1023|55296),u=56320|1023&u),i+=String.fromCharCode(u),n+=c}return i}(this.buf,this.pos,t)
return this.pos=t,e},readBytes:function(){var t=this.readVarint()+this.pos,e=this.buf.subarray(this.pos,t)
return this.pos=t,e},readPackedVarint:function(t,e){if(this.type!==il.Bytes)return t.push(this.readVarint(e))
var r=nl(this)
for(t=t||[];this.pos<r;)t.push(this.readVarint(e))
return t},readPackedSVarint:function(t){if(this.type!==il.Bytes)return t.push(this.readSVarint())
var e=nl(this)
for(t=t||[];this.pos<e;)t.push(this.readSVarint())
return t},readPackedBoolean:function(t){if(this.type!==il.Bytes)return t.push(this.readBoolean())
var e=nl(this)
for(t=t||[];this.pos<e;)t.push(this.readBoolean())
return t},readPackedFloat:function(t){if(this.type!==il.Bytes)return t.push(this.readFloat())
var e=nl(this)
for(t=t||[];this.pos<e;)t.push(this.readFloat())
return t},readPackedDouble:function(t){if(this.type!==il.Bytes)return t.push(this.readDouble())
var e=nl(this)
for(t=t||[];this.pos<e;)t.push(this.readDouble())
return t},readPackedFixed32:function(t){if(this.type!==il.Bytes)return t.push(this.readFixed32())
var e=nl(this)
for(t=t||[];this.pos<e;)t.push(this.readFixed32())
return t},readPackedSFixed32:function(t){if(this.type!==il.Bytes)return t.push(this.readSFixed32())
var e=nl(this)
for(t=t||[];this.pos<e;)t.push(this.readSFixed32())
return t},readPackedFixed64:function(t){if(this.type!==il.Bytes)return t.push(this.readFixed64())
var e=nl(this)
for(t=t||[];this.pos<e;)t.push(this.readFixed64())
return t},readPackedSFixed64:function(t){if(this.type!==il.Bytes)return t.push(this.readSFixed64())
var e=nl(this)
for(t=t||[];this.pos<e;)t.push(this.readSFixed64())
return t},skip:function(t){var e=7&t
if(e===il.Varint)for(;this.buf[this.pos++]>127;);else if(e===il.Bytes)this.pos=this.readVarint()+this.pos
else if(e===il.Fixed32)this.pos+=4
else{if(e!==il.Fixed64)throw new Error("Unimplemented type: "+e)
this.pos+=8}},writeTag:function(t,e){this.writeVarint(t<<3|e)},realloc:function(t){for(var e=this.length||16;e<this.pos+t;)e*=2
if(e!==this.length){var r=new Uint8Array(e)
r.set(this.buf),this.buf=r,this.length=e}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),vl(this.buf,t,this.pos),this.pos+=4},writeSFixed32:function(t){this.realloc(4),vl(this.buf,t,this.pos),this.pos+=4},writeFixed64:function(t){this.realloc(8),vl(this.buf,-1&t,this.pos),vl(this.buf,Math.floor(t*(1/4294967296)),this.pos+4),this.pos+=8},writeSFixed64:function(t){this.realloc(8),vl(this.buf,-1&t,this.pos),vl(this.buf,Math.floor(t*(1/4294967296)),this.pos+4),this.pos+=8},writeVarint:function(t){(t=+t||0)>268435455||t<0?function(t,e){var r,i
if(t>=0?(r=t%4294967296|0,i=t/4294967296|0):(i=~(-t/4294967296),4294967295^(r=~(-t%4294967296))?r=r+1|0:(r=0,i=i+1|0)),t>=0x10000000000000000||t<-0x10000000000000000)throw new Error("Given varint doesn't fit into 10 bytes")
e.realloc(10),function(t,e,r){r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos]=127&t}(r,0,e),function(t,e){var r=(7&t)<<4
e.buf[e.pos++]|=r|((t>>>=3)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t)))))}(i,e)}(t,this):(this.realloc(4),this.buf[this.pos++]=127&t|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=t>>>7&127))))},writeSVarint:function(t){this.writeVarint(t<0?2*-t-1:2*t)},writeBoolean:function(t){this.writeVarint(Boolean(t))},writeString:function(t){t=String(t),this.realloc(4*t.length),this.pos++
var e=this.pos
this.pos=function(t,e,r){for(var i,n,o=0;o<e.length;o++){if((i=e.charCodeAt(o))>55295&&i<57344){if(!n){i>56319||o+1===e.length?(t[r++]=239,t[r++]=191,t[r++]=189):n=i
continue}if(i<56320){t[r++]=239,t[r++]=191,t[r++]=189,n=i
continue}i=n-55296<<10|i-56320|65536,n=null}else n&&(t[r++]=239,t[r++]=191,t[r++]=189,n=null)
i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:(i<65536?t[r++]=i>>12|224:(t[r++]=i>>18|240,t[r++]=i>>12&63|128),t[r++]=i>>6&63|128),t[r++]=63&i|128)}return r}(this.buf,t,this.pos)
var r=this.pos-e
r>=128&&al(e,r,this),this.pos=e-1,this.writeVarint(r),this.pos+=r},writeFloat:function(t){this.realloc(4),el(this.buf,t,this.pos,!0,23,4),this.pos+=4},writeDouble:function(t){this.realloc(8),el(this.buf,t,this.pos,!0,52,8),this.pos+=8},writeBytes:function(t){var e=t.length
this.writeVarint(e),this.realloc(e)
for(var r=0;r<e;r++)this.buf[this.pos++]=t[r]},writeRawMessage:function(t,e){this.pos++
var r=this.pos
t(e,this)
var i=this.pos-r
i>=128&&al(r,i,this),this.pos=r-1,this.writeVarint(i),this.pos+=i},writeMessage:function(t,e,r){this.writeTag(t,il.Bytes),this.writeRawMessage(e,r)},writePackedVarint:function(t,e){e.length&&this.writeMessage(t,sl,e)},writePackedSVarint:function(t,e){e.length&&this.writeMessage(t,ll,e)},writePackedBoolean:function(t,e){e.length&&this.writeMessage(t,pl,e)},writePackedFloat:function(t,e){e.length&&this.writeMessage(t,ul,e)},writePackedDouble:function(t,e){e.length&&this.writeMessage(t,cl,e)},writePackedFixed32:function(t,e){e.length&&this.writeMessage(t,hl,e)},writePackedSFixed32:function(t,e){e.length&&this.writeMessage(t,fl,e)},writePackedFixed64:function(t,e){e.length&&this.writeMessage(t,dl,e)},writePackedSFixed64:function(t,e){e.length&&this.writeMessage(t,ml,e)},writeBytesField:function(t,e){this.writeTag(t,il.Bytes),this.writeBytes(e)},writeFixed32Field:function(t,e){this.writeTag(t,il.Fixed32),this.writeFixed32(e)},writeSFixed32Field:function(t,e){this.writeTag(t,il.Fixed32),this.writeSFixed32(e)},writeFixed64Field:function(t,e){this.writeTag(t,il.Fixed64),this.writeFixed64(e)},writeSFixed64Field:function(t,e){this.writeTag(t,il.Fixed64),this.writeSFixed64(e)},writeVarintField:function(t,e){this.writeTag(t,il.Varint),this.writeVarint(e)},writeSVarintField:function(t,e){this.writeTag(t,il.Varint),this.writeSVarint(e)},writeStringField:function(t,e){this.writeTag(t,il.Bytes),this.writeString(e)},writeFloatField:function(t,e){this.writeTag(t,il.Fixed32),this.writeFloat(e)},writeDoubleField:function(t,e){this.writeTag(t,il.Fixed64),this.writeDouble(e)},writeBooleanField:function(t,e){this.writeVarintField(t,Boolean(e))}}
var gl=3
function xl(t,e,r){1===t&&r.readMessage(bl,e)}function bl(t,e,r){if(3===t){var i=r.readMessage(wl,{}),n=i.id,o=i.bitmap,a=i.width,s=i.height,l=i.left,u=i.top,c=i.advance
e.push({id:n,bitmap:new Do({width:a+2*gl,height:s+2*gl},o),metrics:{width:a,height:s,left:l,top:u,advance:c}})}}function wl(t,e,r){1===t?e.id=r.readVarint():2===t?e.bitmap=r.readBytes():3===t?e.width=r.readVarint():4===t?e.height=r.readVarint():5===t?e.left=r.readSVarint():6===t?e.top=r.readSVarint():7===t&&(e.advance=r.readVarint())}var Sl=gl,El=function(t){var e=this
this._callback=t,this._triggered=!1,"undefined"!=typeof MessageChannel&&(this._channel=new MessageChannel,this._channel.port2.onmessage=function(){e._triggered=!1,e._callback()})}
El.prototype.trigger=function(){var t=this
this._triggered||(this._triggered=!0,this._channel?this._channel.port1.postMessage(!0):setTimeout(function(){t._triggered=!1,t._callback()},0))}
var Tl=function(t,e,r){this.target=t,this.parent=e,this.mapId=r,this.callbacks={},this.tasks={},this.taskQueue=[],this.cancelCallbacks={},y(["receive","process"],this),this.invoker=new El(this.process),this.target.addEventListener("message",this.receive,!1)}
function Al(t,e,r){var i=2*Math.PI*6378137/256/Math.pow(2,r)
return[t*i-2*Math.PI*6378137/2,e*i-2*Math.PI*6378137/2]}Tl.prototype.send=function(t,e,r,i){var n=this,o=Math.round(1e18*Math.random()).toString(36).substring(0,10)
r&&(this.callbacks[o]=r)
var a=[]
return this.target.postMessage({id:o,type:t,hasCallback:!!r,targetMapId:i,sourceMapId:this.mapId,data:vi(e,a)},a),{cancel:function(){r&&delete n.callbacks[o],n.target.postMessage({id:o,type:"<cancel>",targetMapId:i,sourceMapId:n.mapId})}}},Tl.prototype.receive=function(t){var e=t.data,r=e.id
if(r&&(!e.targetMapId||this.mapId===e.targetMapId))if("<cancel>"===e.type){delete this.tasks[r]
var i=this.cancelCallbacks[r]
delete this.cancelCallbacks[r],i&&i()}else this.tasks[r]=e,this.taskQueue.push(r),this.invoker.trigger()},Tl.prototype.process=function(){var t=this
if(this.taskQueue.length){var e=this.taskQueue.shift(),r=this.tasks[e]
if(delete this.tasks[e],this.taskQueue.length&&this.invoker.trigger(),r)if("<response>"===r.type){var i=this.callbacks[e]
delete this.callbacks[e],i&&(r.error?i(_i(r.error)):i(null,_i(r.data)))}else{var n=!1,o=r.hasCallback?function(r,i){n=!0,delete t.cancelCallbacks[e]
var o=[]
t.target.postMessage({id:e,type:"<response>",sourceMapId:t.mapId,error:r?vi(r):null,data:vi(i,o)},o)}:function(t){n=!0},a=null,s=_i(r.data)
if(this.parent[r.type])a=this.parent[r.type](r.sourceMapId,s,o)
else if(this.parent.getWorkerSource){var l=r.type.split(".")
a=this.parent.getWorkerSource(r.sourceMapId,l[0],s.source)[l[1]](s,o)}else o(new Error("Could not find function "+r.type))
!n&&a&&a.cancel&&(this.cancelCallbacks[e]=a.cancel)}}},Tl.prototype.remove=function(){this.target.removeEventListener("message",this.receive,!1)}
var Il=function(t,e){t&&(e?this.setSouthWest(t).setNorthEast(e):4===t.length?this.setSouthWest([t[0],t[1]]).setNorthEast([t[2],t[3]]):this.setSouthWest(t[0]).setNorthEast(t[1]))}
Il.prototype.setNorthEast=function(t){return this._ne=t instanceof kl?new kl(t.lng,t.lat):kl.convert(t),this},Il.prototype.setSouthWest=function(t){return this._sw=t instanceof kl?new kl(t.lng,t.lat):kl.convert(t),this},Il.prototype.extend=function(t){var e,r,i=this._sw,n=this._ne
if(t instanceof kl)e=t,r=t
else{if(!(t instanceof Il))return Array.isArray(t)?t.every(Array.isArray)?this.extend(Il.convert(t)):this.extend(kl.convert(t)):this
if(e=t._sw,r=t._ne,!e||!r)return this}return i||n?(i.lng=Math.min(e.lng,i.lng),i.lat=Math.min(e.lat,i.lat),n.lng=Math.max(r.lng,n.lng),n.lat=Math.max(r.lat,n.lat)):(this._sw=new kl(e.lng,e.lat),this._ne=new kl(r.lng,r.lat)),this},Il.prototype.getCenter=function(){return new kl((this._sw.lng+this._ne.lng)/2,(this._sw.lat+this._ne.lat)/2)},Il.prototype.getSouthWest=function(){return this._sw},Il.prototype.getNorthEast=function(){return this._ne},Il.prototype.getNorthWest=function(){return new kl(this.getWest(),this.getNorth())},Il.prototype.getSouthEast=function(){return new kl(this.getEast(),this.getSouth())},Il.prototype.getWest=function(){return this._sw.lng},Il.prototype.getSouth=function(){return this._sw.lat},Il.prototype.getEast=function(){return this._ne.lng},Il.prototype.getNorth=function(){return this._ne.lat},Il.prototype.toArray=function(){return[this._sw.toArray(),this._ne.toArray()]},Il.prototype.toString=function(){return"LngLatBounds("+this._sw.toString()+", "+this._ne.toString()+")"},Il.prototype.isEmpty=function(){return!(this._sw&&this._ne)},Il.convert=function(t){return!t||t instanceof Il?t:new Il(t)}
var kl=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid LngLat object: ("+t+", "+e+")")
if(this.lng=+t,this.lat=+e,this.lat>90||this.lat<-90)throw new Error("Invalid LngLat latitude value: must be between -90 and 90")}
kl.prototype.wrap=function(){return new kl(c(this.lng,-180,180),this.lat)},kl.prototype.toArray=function(){return[this.lng,this.lat]},kl.prototype.toString=function(){return"LngLat("+this.lng+", "+this.lat+")"},kl.prototype.toBounds=function(t){void 0===t&&(t=0)
var e=360*t/40075017,r=e/Math.cos(Math.PI/180*this.lat)
return new Il(new kl(this.lng-r,this.lat-e),new kl(this.lng+r,this.lat+e))},kl.convert=function(t){if(t instanceof kl)return t
if(Array.isArray(t)&&(2===t.length||3===t.length))return new kl(Number(t[0]),Number(t[1]))
if(!Array.isArray(t)&&"object"==typeof t&&null!==t)return new kl(Number("lng"in t?t.lng:t.lon),Number(t.lat))
throw new Error("`LngLatLike` argument must be specified as a LngLat instance, an object {lng: <lng>, lat: <lat>}, an object {lon: <lng>, lat: <lat>}, or an array of [<lng>, <lat>]")}
var zl=2*Math.PI*6378137
function Cl(t){return zl*Math.cos(t*Math.PI/180)}function Pl(t){return(180+t)/360}function Ml(t){return(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+t*Math.PI/360)))/360}function Ll(t,e){return t/Cl(e)}function Dl(t){var e=180-360*t
return 360/Math.PI*Math.atan(Math.exp(e*Math.PI/180))-90}var Bl=function(t,e,r){void 0===r&&(r=0),this.x=+t,this.y=+e,this.z=+r}
Bl.fromLngLat=function(t,e){void 0===e&&(e=0)
var r=kl.convert(t)
return new Bl(Pl(r.lng),Ml(r.lat),Ll(e,r.lat))},Bl.prototype.toLngLat=function(){return new kl(360*this.x-180,Dl(this.y))},Bl.prototype.toAltitude=function(){return this.z*Cl(Dl(this.y))},Bl.prototype.meterInMercatorCoordinateUnits=function(){return 1/zl*(t=Dl(this.y),1/Math.cos(t*Math.PI/180))
var t}
var Rl=function(t,e,r){this.z=t,this.x=e,this.y=r,this.key=Ul(0,t,e,r)}
Rl.prototype.equals=function(t){return this.z===t.z&&this.x===t.x&&this.y===t.y},Rl.prototype.url=function(t,e){var r,i,n,o,a,s=(r=this.x,i=this.y,n=this.z,o=Al(256*r,256*(i=Math.pow(2,n)-i-1),n),a=Al(256*(r+1),256*(i+1),n),o[0]+","+o[1]+","+a[0]+","+a[1]),l=function(t,e,r){for(var i,n="",o=t;o>0;o--)n+=(e&(i=1<<o-1)?1:0)+(r&i?2:0)
return n}(this.z,this.x,this.y)
return t[(this.x+this.y)%t.length].replace("{prefix}",(this.x%16).toString(16)+(this.y%16).toString(16)).replace("{z}",String(this.z)).replace("{x}",String(this.x)).replace("{y}",String("tms"===e?Math.pow(2,this.z)-this.y-1:this.y)).replace("{quadkey}",l).replace("{bbox-epsg-3857}",s)},Rl.prototype.getTilePoint=function(t){var e=Math.pow(2,this.z)
return new n((t.x*e-this.x)*io,(t.y*e-this.y)*io)}
var Fl=function(t,e){this.wrap=t,this.canonical=e,this.key=Ul(t,e.z,e.x,e.y)},Ol=function(t,e,r,i,n){this.overscaledZ=t,this.wrap=e,this.canonical=new Rl(r,+i,+n),this.key=Ul(e,t,i,n)}
function Ul(t,e,r,i){(t*=2)<0&&(t=-1*t-1)
var n=1<<e
return 32*(n*n*t+n*i+r)+e}Ol.prototype.equals=function(t){return this.overscaledZ===t.overscaledZ&&this.wrap===t.wrap&&this.canonical.equals(t.canonical)},Ol.prototype.scaledTo=function(t){var e=this.canonical.z-t
return t>this.canonical.z?new Ol(t,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y):new Ol(t,this.wrap,t,this.canonical.x>>e,this.canonical.y>>e)},Ol.prototype.isChildOf=function(t){if(t.wrap!==this.wrap)return!1
var e=this.canonical.z-t.canonical.z
return 0===t.overscaledZ||t.overscaledZ<this.overscaledZ&&t.canonical.x===this.canonical.x>>e&&t.canonical.y===this.canonical.y>>e},Ol.prototype.children=function(t){if(this.overscaledZ>=t)return[new Ol(this.overscaledZ+1,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y)]
var e=this.canonical.z+1,r=2*this.canonical.x,i=2*this.canonical.y
return[new Ol(e,this.wrap,e,r,i),new Ol(e,this.wrap,e,r+1,i),new Ol(e,this.wrap,e,r,i+1),new Ol(e,this.wrap,e,r+1,i+1)]},Ol.prototype.isLessThan=function(t){return this.wrap<t.wrap||!(this.wrap>t.wrap)&&(this.overscaledZ<t.overscaledZ||!(this.overscaledZ>t.overscaledZ)&&(this.canonical.x<t.canonical.x||!(this.canonical.x>t.canonical.x)&&this.canonical.y<t.canonical.y))},Ol.prototype.wrapped=function(){return new Ol(this.overscaledZ,0,this.canonical.z,this.canonical.x,this.canonical.y)},Ol.prototype.unwrapTo=function(t){return new Ol(this.overscaledZ,t,this.canonical.z,this.canonical.x,this.canonical.y)},Ol.prototype.overscaleFactor=function(){return Math.pow(2,this.overscaledZ-this.canonical.z)},Ol.prototype.toUnwrapped=function(){return new Fl(this.wrap,this.canonical)},Ol.prototype.toString=function(){return this.overscaledZ+"/"+this.canonical.x+"/"+this.canonical.y},Ol.prototype.getTilePoint=function(t){return this.canonical.getTilePoint(new Bl(t.x-this.wrap,t.y))},mi("CanonicalTileID",Rl),mi("OverscaledTileID",Ol,{omit:["posMatrix"]})
var Vl=function(t,e,r){if(this.uid=t,e.height!==e.width)throw new RangeError("DEM tiles must be square")
if(r&&"mapbox"!==r&&"terrarium"!==r)return w('"'+r+'" is not a valid encoding type. Valid types include "mapbox" and "terrarium".')
this.stride=e.height
var i=this.dim=e.height-2
this.data=new Uint32Array(e.data.buffer),this.encoding=r||"mapbox"
for(var n=0;n<i;n++)this.data[this._idx(-1,n)]=this.data[this._idx(0,n)],this.data[this._idx(i,n)]=this.data[this._idx(i-1,n)],this.data[this._idx(n,-1)]=this.data[this._idx(n,0)],this.data[this._idx(n,i)]=this.data[this._idx(n,i-1)]
this.data[this._idx(-1,-1)]=this.data[this._idx(0,0)],this.data[this._idx(i,-1)]=this.data[this._idx(i-1,0)],this.data[this._idx(-1,i)]=this.data[this._idx(0,i-1)],this.data[this._idx(i,i)]=this.data[this._idx(i-1,i-1)]}
Vl.prototype.get=function(t,e){var r=new Uint8Array(this.data.buffer),i=4*this._idx(t,e)
return("terrarium"===this.encoding?this._unpackTerrarium:this._unpackMapbox)(r[i],r[i+1],r[i+2])},Vl.prototype.getUnpackVector=function(){return"terrarium"===this.encoding?[256,1,1/256,32768]:[6553.6,25.6,.1,1e4]},Vl.prototype._idx=function(t,e){if(t<-1||t>=this.dim+1||e<-1||e>=this.dim+1)throw new RangeError("out of range source coordinates for DEM data")
return(e+1)*this.stride+(t+1)},Vl.prototype._unpackMapbox=function(t,e,r){return(256*t*256+256*e+r)/10-1e4},Vl.prototype._unpackTerrarium=function(t,e,r){return 256*t+e+r/256-32768},Vl.prototype.getPixels=function(){return new Bo({width:this.stride,height:this.stride},new Uint8Array(this.data.buffer))},Vl.prototype.backfillBorder=function(t,e,r){if(this.dim!==t.dim)throw new Error("dem dimension mismatch")
var i=e*this.dim,n=e*this.dim+this.dim,o=r*this.dim,a=r*this.dim+this.dim
switch(e){case-1:i=n-1
break
case 1:n=i+1}switch(r){case-1:o=a-1
break
case 1:a=o+1}for(var s=-e*this.dim,l=-r*this.dim,u=o;u<a;u++)for(var c=i;c<n;c++)this.data[this._idx(c,u)]=t.data[this._idx(c+s,u+l)]},mi("DEMData",Vl)
var Nl=Yi([{name:"a_pos",type:"Int16",components:2},{name:"a_texture_pos",type:"Int16",components:2}]),jl=function(t){this._stringToNumber={},this._numberToString=[]
for(var e=0;e<t.length;e++){var r=t[e]
this._stringToNumber[r]=e,this._numberToString[e]=r}}
jl.prototype.encode=function(t){return this._stringToNumber[t]},jl.prototype.decode=function(t){return this._numberToString[t]}
var ql=function(t,e,r,i){this.type="Feature",this._vectorTileFeature=t,t._z=e,t._x=r,t._y=i,this.properties=t.properties,null!=t.id&&(this.id=t.id)},Zl={geometry:{configurable:!0}}
Zl.geometry.get=function(){return void 0===this._geometry&&(this._geometry=this._vectorTileFeature.toGeoJSON(this._vectorTileFeature._x,this._vectorTileFeature._y,this._vectorTileFeature._z).geometry),this._geometry},Zl.geometry.set=function(t){this._geometry=t},ql.prototype.toJSON=function(){var t={geometry:this.geometry}
for(var e in this)"_geometry"!==e&&"_vectorTileFeature"!==e&&(t[e]=this[e])
return t},Object.defineProperties(ql.prototype,Zl)
var Gl=function(){this.state={},this.stateChanges={},this.deletedStates={}}
Gl.prototype.updateState=function(t,e,r){var i=String(e)
if(this.stateChanges[t]=this.stateChanges[t]||{},this.stateChanges[t][i]=this.stateChanges[t][i]||{},p(this.stateChanges[t][i],r),null===this.deletedStates[t])for(var n in this.deletedStates[t]={},this.state[t])n!==i&&(this.deletedStates[t][n]=null)
else if(this.deletedStates[t]&&null===this.deletedStates[t][i])for(var o in this.deletedStates[t][i]={},this.state[t][i])r[o]||(this.deletedStates[t][i][o]=null)
else for(var a in r)this.deletedStates[t]&&this.deletedStates[t][i]&&null===this.deletedStates[t][i][a]&&delete this.deletedStates[t][i][a]},Gl.prototype.removeFeatureState=function(t,e,r){if(null!==this.deletedStates[t]){var i=String(e)
if(this.deletedStates[t]=this.deletedStates[t]||{},r&&void 0!==e&&e>=0)null!==this.deletedStates[t][i]&&(this.deletedStates[t][i]=this.deletedStates[t][i]||{},this.deletedStates[t][i][r]=null)
else if(void 0!==e&&e>=0)if(this.stateChanges[t]&&this.stateChanges[t][i])for(r in this.deletedStates[t][i]={},this.stateChanges[t][i])this.deletedStates[t][i][r]=null
else this.deletedStates[t][i]=null
else this.deletedStates[t]=null}},Gl.prototype.getState=function(t,e){var r=String(e),i=this.state[t]||{},n=this.stateChanges[t]||{},o=p({},i[r],n[r])
if(null===this.deletedStates[t])return{}
if(this.deletedStates[t]){var a=this.deletedStates[t][e]
if(null===a)return{}
for(var s in a)delete o[s]}return o},Gl.prototype.initializeTileState=function(t,e){t.setFeatureState(this.state,e)},Gl.prototype.coalesceChanges=function(t,e){var r={}
for(var i in this.stateChanges){this.state[i]=this.state[i]||{}
var n={}
for(var o in this.stateChanges[i])this.state[i][o]||(this.state[i][o]={}),p(this.state[i][o],this.stateChanges[i][o]),n[o]=this.state[i][o]
r[i]=n}for(var a in this.deletedStates){this.state[a]=this.state[a]||{}
var s={}
if(null===this.deletedStates[a])for(var l in this.state[a])s[l]={},this.state[a][l]={}
else for(var u in this.deletedStates[a]){if(null===this.deletedStates[a][u])this.state[a][u]={}
else for(var c=0,h=Object.keys(this.deletedStates[a][u]);c<h.length;c+=1){var f=h[c]
delete this.state[a][u][f]}s[u]=this.state[a][u]}r[a]=r[a]||{},p(r[a],s)}if(this.stateChanges={},this.deletedStates={},0!==Object.keys(r).length)for(var d in t)t[d].setFeatureState(r,e)}
var Xl=function(t,e,r){this.tileID=t,this.x=t.canonical.x,this.y=t.canonical.y,this.z=t.canonical.z,this.grid=e||new ci(io,16,0),this.grid3D=new ci(io,16,0),this.featureIndexArray=r||new Mn}
function Wl(t){for(var e=1/0,r=1/0,i=-1/0,n=-1/0,o=0,a=t;o<a.length;o+=1){var s=a[o]
e=Math.min(e,s.x),r=Math.min(r,s.y),i=Math.max(i,s.x),n=Math.max(n,s.y)}return{minX:e,minY:r,maxX:i,maxY:n}}function Kl(t,e){return e-t}Xl.prototype.insert=function(t,e,r,i,n,o){var a=this.featureIndexArray.length
this.featureIndexArray.emplaceBack(r,i,n)
for(var s=o?this.grid3D:this.grid,l=0;l<e.length;l++){for(var u=e[l],c=[1/0,1/0,-1/0,-1/0],p=0;p<u.length;p++){var h=u[p]
c[0]=Math.min(c[0],h.x),c[1]=Math.min(c[1],h.y),c[2]=Math.max(c[2],h.x),c[3]=Math.max(c[3],h.y)}c[0]<io&&c[1]<io&&c[2]>=0&&c[3]>=0&&s.insert(a,c[0],c[1],c[2],c[3])}},Xl.prototype.loadVTLayers=function(){return this.vtLayers||(this.vtLayers=new Ra.VectorTile(new rl(this.rawTileData)).layers,this.sourceLayerCoder=new jl(this.vtLayers?Object.keys(this.vtLayers).sort():["_geojsonTileLayer"])),this.vtLayers},Xl.prototype.query=function(t,e,r){var i=this
this.loadVTLayers()
for(var o=t.params||{},a=io/t.tileSize/t.scale,s=Or(o.filter),l=t.queryGeometry,u=t.queryPadding*a,c=Wl(l),p=this.grid.query(c.minX-u,c.minY-u,c.maxX+u,c.maxY+u),h=Wl(t.cameraQueryGeometry),f=0,d=this.grid3D.query(h.minX-u,h.minY-u,h.maxX+u,h.maxY+u,function(e,r,i,o){return function(t,e,r,i,o){for(var a=0,s=t;a<s.length;a+=1){var l=s[a]
if(e<=l.x&&r<=l.y&&i>=l.x&&o>=l.y)return!0}var u=[new n(e,r),new n(e,o),new n(i,o),new n(i,r)]
if(t.length>2)for(var c=0,p=u;c<p.length;c+=1)if(_o(t,p[c]))return!0
for(var h=0;h<t.length-1;h++)if(go(t[h],t[h+1],u))return!0
return!1}(t.cameraQueryGeometry,e-u,r-u,i+u,o+u)});f<d.length;f+=1){var m=d[f]
p.push(m)}p.sort(Kl)
for(var y,v={},_=function(n){var u=p[n]
if(u!==y){y=u
var c=i.featureIndexArray.get(u),h=null
i.loadMatchingFeature(v,c.bucketIndex,c.sourceLayerIndex,c.featureIndex,s,o.layers,e,function(e,n){h||(h=oo(e))
var o={}
return e.id&&(o=r.getState(n.sourceLayer||"_geojsonTileLayer",e.id)),n.queryIntersectsFeature(l,e,o,h,i.z,t.transform,a,t.pixelPosMatrix)})}},g=0;g<p.length;g++)_(g)
return v},Xl.prototype.loadMatchingFeature=function(t,e,r,i,n,o,a,s){var l=this.bucketLayerIDs[e]
if(!o||function(t,e){for(var r=0;r<t.length;r++)if(e.indexOf(t[r])>=0)return!0
return!1}(o,l)){var u=this.sourceLayerCoder.decode(r),c=this.vtLayers[u].feature(i)
if(n(new Mi(this.tileID.overscaledZ),c))for(var p=0;p<l.length;p++){var h=l[p]
if(!(o&&o.indexOf(h)<0)){var f=a[h]
if(f){var d=!s||s(c,f)
if(d){var m=new ql(c,this.z,this.x,this.y)
m.layer=f.serialize()
var y=t[h]
void 0===y&&(y=t[h]=[]),y.push({featureIndex:i,feature:m,intersectionZ:d})}}}}}},Xl.prototype.lookupSymbolFeatures=function(t,e,r,i,n,o){var a={}
this.loadVTLayers()
for(var s=Or(i),l=0,u=t;l<u.length;l+=1){var c=u[l]
this.loadMatchingFeature(a,e,r,c,s,n,o)}return a},Xl.prototype.hasLayer=function(t){for(var e=0,r=this.bucketLayerIDs;e<r.length;e+=1)for(var i=0,n=r[e];i<n.length;i+=1)if(t===n[i])return!0
return!1},mi("FeatureIndex",Xl,{omit:["rawTileData","sourceLayerCoder"]})
var Hl=function(t,e){this.tileID=t,this.uid=f(),this.uses=0,this.tileSize=e,this.buckets={},this.expirationTime=null,this.queryPadding=0,this.hasSymbolBuckets=!1,this.expiredRequestCount=0,this.state="loading"}
function Jl(t,e,r,i,n){if(void 0===e.segment)return!0
for(var o=e,a=e.segment+1,s=0;s>-r/2;){if(--a<0)return!1
s-=t[a].dist(o),o=t[a]}s+=t[a].dist(t[a+1]),a++
for(var l=[],u=0;s<r/2;){var c=t[a-1],p=t[a],h=t[a+1]
if(!h)return!1
var f=c.angleTo(p)-p.angleTo(h)
for(f=Math.abs((f+3*Math.PI)%(2*Math.PI)-Math.PI),l.push({distance:s,angleDelta:f}),u+=f;s-l[0].distance>i;)u-=l.shift().angleDelta
if(u>n)return!1
a++,s+=p.dist(h)}return!0}function Yl(t){for(var e=0,r=0;r<t.length-1;r++)e+=t[r].dist(t[r+1])
return e}function $l(t,e,r){return t?.6*e*r:0}function Ql(t,e){return Math.max(t?t.right-t.left:0,e?e.right-e.left:0)}function tu(t,e,r,i,n,o){for(var a=$l(r,n,o),s=Ql(r,i)*o,l=0,u=Yl(t)/2,c=0;c<t.length-1;c++){var p=t[c],h=t[c+1],f=p.dist(h)
if(l+f>u){var d=(u-l)/f,m=xe(p.x,h.x,d),y=xe(p.y,h.y,d),v=new ws(m,y,h.angleTo(p),c)
return v._round(),!a||Jl(t,v,s,a,e)?v:void 0}l+=f}}function eu(t,e,r,i,n,o,a,s,l){var u=$l(i,o,a),c=Ql(i,n),p=c*a,h=0===t[0].x||t[0].x===l||0===t[0].y||t[0].y===l
return e-p<e/4&&(e=p+e/4),function t(e,r,i,n,o,a,s,l,u){for(var c=a/2,p=Yl(e),h=0,f=r-i,d=[],m=0;m<e.length-1;m++){for(var y=e[m],v=e[m+1],_=y.dist(v),g=v.angleTo(y);f+i<h+_;){var x=((f+=i)-h)/_,b=xe(y.x,v.x,x),w=xe(y.y,v.y,x)
if(b>=0&&b<u&&w>=0&&w<u&&f-c>=0&&f+c<=p){var S=new ws(b,w,g,m)
S._round(),n&&!Jl(e,S,a,n,o)||d.push(S)}}h+=_}return l||d.length||s||(d=t(e,h/2,i,n,o,a,s,!0,u)),d}(t,h?e/2*s%e:(c/2+2*o)*a*s%e,e,u,r,p,h,!1,l)}Hl.prototype.registerFadeDuration=function(t){var e=t+this.timeAdded
e<D.now()||this.fadeEndTime&&e<this.fadeEndTime||(this.fadeEndTime=e)},Hl.prototype.wasRequested=function(){return"errored"===this.state||"loaded"===this.state||"reloading"===this.state},Hl.prototype.loadVectorData=function(t,e,r){if(this.hasData()&&this.unloadVectorData(),this.state="loaded",t){for(var i in t.featureIndex&&(this.latestFeatureIndex=t.featureIndex,t.rawTileData?(this.latestRawTileData=t.rawTileData,this.latestFeatureIndex.rawTileData=t.rawTileData):this.latestRawTileData&&(this.latestFeatureIndex.rawTileData=this.latestRawTileData)),this.collisionBoxArray=t.collisionBoxArray,this.buckets=function(t,e){var r={}
if(!e)return r
for(var i=function(){var t=o[n],i=t.layerIds.map(function(t){return e.getLayer(t)}).filter(Boolean)
if(0!==i.length){t.layers=i,t.stateDependentLayerIds&&(t.stateDependentLayers=t.stateDependentLayerIds.map(function(t){return i.filter(function(e){return e.id===t})[0]}))
for(var a=0,s=i;a<s.length;a+=1){var l=s[a]
r[l.id]=t}}},n=0,o=t;n<o.length;n+=1)i()
return r}(t.buckets,e.style),this.hasSymbolBuckets=!1,this.buckets){var n=this.buckets[i]
if(n instanceof Ds){if(this.hasSymbolBuckets=!0,!r)break
n.justReloaded=!0}}for(var o in this.queryPadding=0,this.buckets){var a=this.buckets[o]
this.queryPadding=Math.max(this.queryPadding,e.style.getLayer(o).queryRadius(a))}t.imageAtlas&&(this.imageAtlas=t.imageAtlas),t.glyphAtlasImage&&(this.glyphAtlasImage=t.glyphAtlasImage)}else this.collisionBoxArray=new wn},Hl.prototype.unloadVectorData=function(){for(var t in this.buckets)this.buckets[t].destroy()
this.buckets={},this.imageAtlasTexture&&this.imageAtlasTexture.destroy(),this.imageAtlas&&(this.imageAtlas=null),this.glyphAtlasTexture&&this.glyphAtlasTexture.destroy(),this.latestFeatureIndex=null,this.state="unloaded"},Hl.prototype.unloadDEMData=function(){this.dem=null,this.neighboringTiles=null,this.state="unloaded"},Hl.prototype.getBucket=function(t){return this.buckets[t.id]},Hl.prototype.upload=function(t){for(var e in this.buckets){var r=this.buckets[e]
r.uploadPending()&&r.upload(t)}var i=t.gl
this.imageAtlas&&!this.imageAtlas.uploaded&&(this.imageAtlasTexture=new Qs(t,this.imageAtlas.image,i.RGBA),this.imageAtlas.uploaded=!0),this.glyphAtlasImage&&(this.glyphAtlasTexture=new Qs(t,this.glyphAtlasImage,i.ALPHA),this.glyphAtlasImage=null)},Hl.prototype.prepare=function(t){this.imageAtlas&&this.imageAtlas.patchUpdatedImages(t,this.imageAtlasTexture)},Hl.prototype.queryRenderedFeatures=function(t,e,r,i,n,o,a,s,l){return this.latestFeatureIndex&&this.latestFeatureIndex.rawTileData?this.latestFeatureIndex.query({queryGeometry:r,cameraQueryGeometry:i,scale:n,tileSize:this.tileSize,pixelPosMatrix:l,transform:a,params:o,queryPadding:this.queryPadding*s},t,e):{}},Hl.prototype.querySourceFeatures=function(t,e){if(this.latestFeatureIndex&&this.latestFeatureIndex.rawTileData){var r=this.latestFeatureIndex.loadVTLayers(),i=e?e.sourceLayer:"",n=r._geojsonTileLayer||r[i]
if(n)for(var o=Or(e&&e.filter),a=this.tileID.canonical,s=a.z,l=a.x,u=a.y,c={z:s,x:l,y:u},p=0;p<n.length;p++){var h=n.feature(p)
if(o(new Mi(this.tileID.overscaledZ),h)){var f=new ql(h,s,l,u)
f.tile=c,t.push(f)}}}},Hl.prototype.clearMask=function(){this.segments&&(this.segments.destroy(),delete this.segments),this.maskedBoundsBuffer&&(this.maskedBoundsBuffer.destroy(),delete this.maskedBoundsBuffer),this.maskedIndexBuffer&&(this.maskedIndexBuffer.destroy(),delete this.maskedIndexBuffer)},Hl.prototype.setMask=function(t,e){if(!a(this.mask,t)&&(this.mask=t,this.clearMask(),!a(t,{0:!0}))){var r=new tn,i=new yn
this.segments=new Dn,this.segments.prepareSegment(0,r,i)
for(var o=Object.keys(t),s=0;s<o.length;s++){var l=t[+o[s]],u=io>>l.z,c=new n(l.x*u,l.y*u),p=new n(c.x+u,c.y+u),h=this.segments.prepareSegment(4,r,i)
r.emplaceBack(c.x,c.y,c.x,c.y),r.emplaceBack(p.x,c.y,p.x,c.y),r.emplaceBack(c.x,p.y,c.x,p.y),r.emplaceBack(p.x,p.y,p.x,p.y)
var f=h.vertexLength
i.emplaceBack(f,f+1,f+2),i.emplaceBack(f+1,f+2,f+3),h.vertexLength+=4,h.primitiveLength+=2}this.maskedBoundsBuffer=e.createVertexBuffer(r,Nl.members),this.maskedIndexBuffer=e.createIndexBuffer(i)}},Hl.prototype.hasData=function(){return"loaded"===this.state||"reloading"===this.state||"expired"===this.state},Hl.prototype.patternsLoaded=function(){return this.imageAtlas&&!!Object.keys(this.imageAtlas.patternPositions).length},Hl.prototype.setExpiryData=function(t){var e=this.expirationTime
if(t.cacheControl){var r=T(t.cacheControl)
r["max-age"]&&(this.expirationTime=Date.now()+1e3*r["max-age"])}else t.expires&&(this.expirationTime=new Date(t.expires).getTime())
if(this.expirationTime){var i=Date.now(),n=!1
if(this.expirationTime>i)n=!1
else if(e)if(this.expirationTime<e)n=!0
else{var o=this.expirationTime-e
o?this.expirationTime=i+Math.max(o,3e4):n=!0}else n=!0
n?(this.expiredRequestCount++,this.state="expired"):this.expiredRequestCount=0}},Hl.prototype.getExpiryTimeout=function(){if(this.expirationTime)return this.expiredRequestCount?1e3*(1<<Math.min(this.expiredRequestCount-1,31)):Math.min(this.expirationTime-(new Date).getTime(),Math.pow(2,31)-1)},Hl.prototype.setFeatureState=function(t,e){if(this.latestFeatureIndex&&this.latestFeatureIndex.rawTileData&&0!==Object.keys(t).length){var r=this.latestFeatureIndex.loadVTLayers()
for(var i in this.buckets){var n=this.buckets[i],o=n.layers[0].sourceLayer||"_geojsonTileLayer",a=r[o],s=t[o]
a&&s&&0!==Object.keys(s).length&&(n.update(s,a,this.imageAtlas&&this.imageAtlas.patternPositions||{}),e&&e.style&&(this.queryPadding=Math.max(this.queryPadding,e.style.getLayer(i).queryRadius(n))))}}},Hl.prototype.holdingForFade=function(){return void 0!==this.symbolFadeHoldUntil},Hl.prototype.symbolFadeFinished=function(){return!this.symbolFadeHoldUntil||this.symbolFadeHoldUntil<D.now()},Hl.prototype.clearFadeHold=function(){this.symbolFadeHoldUntil=void 0},Hl.prototype.setHoldDuration=function(t){this.symbolFadeHoldUntil=D.now()+t}
var ru=function(t,e,r,i,o,a,s,l,u,c,p,h){var f=s.top*l-u,d=s.bottom*l+u,m=s.left*l-u,y=s.right*l+u
if(this.boxStartIndex=t.length,c){var v=d-f,_=y-m
v>0&&(v=Math.max(10*l,v),this._addLineCollisionCircles(t,e,r,r.segment,_,v,i,o,a,p))}else{if(h){var g=new n(m,f),x=new n(y,f),b=new n(m,d),w=new n(y,d),S=h*Math.PI/180
g._rotate(S),x._rotate(S),b._rotate(S),w._rotate(S),m=Math.min(g.x,x.x,b.x,w.x),y=Math.max(g.x,x.x,b.x,w.x),f=Math.min(g.y,x.y,b.y,w.y),d=Math.max(g.y,x.y,b.y,w.y)}t.emplaceBack(r.x,r.y,m,f,y,d,i,o,a,0,0)}this.boxEndIndex=t.length}
ru.prototype._addLineCollisionCircles=function(t,e,r,i,n,o,a,s,l,u){var c=o/2,p=Math.floor(n/c)||1,h=1+.4*Math.log(u)/Math.LN2,f=Math.floor(p*h/2),d=-o/2,m=r,y=i+1,v=d,_=-n/2,g=_-n/4
do{if(--y<0){if(v>_)return
y=0
break}v-=e[y].dist(m),m=e[y]}while(v>g)
for(var x=e[y].dist(e[y+1]),b=-f;b<p+f;b++){var w=b*c,S=_+w
if(w<0&&(S+=w),w>n&&(S+=w-n),!(S<v)){for(;v+x<S;){if(v+=x,++y+1>=e.length)return
x=e[y].dist(e[y+1])}var E=S-v,T=e[y],A=e[y+1].sub(T)._unit()._mult(E)._add(T)._round(),I=Math.abs(S-d)<c?0:.8*(S-d)
t.emplaceBack(A.x,A.y,-o/2,-o/2,o/2,o/2,a,s,l,o/2,I)}}}
var iu=function(t,e){if(void 0===t&&(t=[]),void 0===e&&(e=nu),this.data=t,this.length=this.data.length,this.compare=e,this.length>0)for(var r=(this.length>>1)-1;r>=0;r--)this._down(r)}
function nu(t,e){return t<e?-1:t>e?1:0}function ou(t,e,r){void 0===e&&(e=1),void 0===r&&(r=!1)
for(var i=1/0,o=1/0,a=-1/0,s=-1/0,l=t[0],u=0;u<l.length;u++){var c=l[u];(!u||c.x<i)&&(i=c.x),(!u||c.y<o)&&(o=c.y),(!u||c.x>a)&&(a=c.x),(!u||c.y>s)&&(s=c.y)}var p=a-i,h=s-o,f=Math.min(p,h),d=f/2,m=new iu([],au)
if(0===f)return new n(i,o)
for(var y=i;y<a;y+=f)for(var v=o;v<s;v+=f)m.push(new su(y+d,v+d,d,t))
for(var _=function(t){for(var e=0,r=0,i=0,n=t[0],o=0,a=n.length,s=a-1;o<a;s=o++){var l=n[o],u=n[s],c=l.x*u.y-u.x*l.y
r+=(l.x+u.x)*c,i+=(l.y+u.y)*c,e+=3*c}return new su(r/e,i/e,0,t)}(t),g=m.length;m.length;){var x=m.pop();(x.d>_.d||!_.d)&&(_=x,r&&console.log("found best %d after %d probes",Math.round(1e4*x.d)/1e4,g)),x.max-_.d<=e||(d=x.h/2,m.push(new su(x.p.x-d,x.p.y-d,d,t)),m.push(new su(x.p.x+d,x.p.y-d,d,t)),m.push(new su(x.p.x-d,x.p.y+d,d,t)),m.push(new su(x.p.x+d,x.p.y+d,d,t)),g+=4)}return r&&(console.log("num probes: "+g),console.log("best distance: "+_.d)),_.p}function au(t,e){return e.max-t.max}function su(t,e,r,i){this.p=new n(t,e),this.h=r,this.d=function(t,e){for(var r=!1,i=1/0,n=0;n<e.length;n++)for(var o=e[n],a=0,s=o.length,l=s-1;a<s;l=a++){var u=o[a],c=o[l]
u.y>t.y!=c.y>t.y&&t.x<(c.x-u.x)*(t.y-u.y)/(c.y-u.y)+u.x&&(r=!r),i=Math.min(i,yo(t,u,c))}return(r?1:-1)*Math.sqrt(i)}(this.p,i),this.max=this.d+this.h*Math.SQRT2}iu.prototype.push=function(t){this.data.push(t),this.length++,this._up(this.length-1)},iu.prototype.pop=function(){if(0!==this.length){var t=this.data[0],e=this.data.pop()
return this.length--,this.length>0&&(this.data[0]=e,this._down(0)),t}},iu.prototype.peek=function(){return this.data[0]},iu.prototype._up=function(t){for(var e=this.data,r=this.compare,i=e[t];t>0;){var n=t-1>>1,o=e[n]
if(r(i,o)>=0)break
e[t]=o,t=n}e[t]=i},iu.prototype._down=function(t){for(var e=this.data,r=this.compare,i=this.length>>1,n=e[t];t<i;){var o=1+(t<<1),a=e[o],s=o+1
if(s<this.length&&r(e[s],a)<0&&(o=s,a=e[s]),r(a,n)>=0)break
e[t]=a,t=o}e[t]=n}
var lu=e(function(t){t.exports=function(t,e){var r,i,n,o,a,s,l,u
for(r=3&t.length,i=t.length-r,n=e,a=3432918353,s=461845907,u=0;u<i;)l=255&t.charCodeAt(u)|(255&t.charCodeAt(++u))<<8|(255&t.charCodeAt(++u))<<16|(255&t.charCodeAt(++u))<<24,++u,n=27492+(65535&(o=5*(65535&(n=(n^=l=(65535&(l=(l=(65535&l)*a+(((l>>>16)*a&65535)<<16)&4294967295)<<15|l>>>17))*s+(((l>>>16)*s&65535)<<16)&4294967295)<<13|n>>>19))+((5*(n>>>16)&65535)<<16)&4294967295))+((58964+(o>>>16)&65535)<<16)
switch(l=0,r){case 3:l^=(255&t.charCodeAt(u+2))<<16
case 2:l^=(255&t.charCodeAt(u+1))<<8
case 1:n^=l=(65535&(l=(l=(65535&(l^=255&t.charCodeAt(u)))*a+(((l>>>16)*a&65535)<<16)&4294967295)<<15|l>>>17))*s+(((l>>>16)*s&65535)<<16)&4294967295}return n^=t.length,n=2246822507*(65535&(n^=n>>>16))+((2246822507*(n>>>16)&65535)<<16)&4294967295,n=3266489909*(65535&(n^=n>>>13))+((3266489909*(n>>>16)&65535)<<16)&4294967295,(n^=n>>>16)>>>0}}),uu=e(function(t){t.exports=function(t,e){for(var r,i=t.length,n=e^i,o=0;i>=4;)r=1540483477*(65535&(r=255&t.charCodeAt(o)|(255&t.charCodeAt(++o))<<8|(255&t.charCodeAt(++o))<<16|(255&t.charCodeAt(++o))<<24))+((1540483477*(r>>>16)&65535)<<16),n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16)^(r=1540483477*(65535&(r^=r>>>24))+((1540483477*(r>>>16)&65535)<<16)),i-=4,++o
switch(i){case 3:n^=(255&t.charCodeAt(o+2))<<16
case 2:n^=(255&t.charCodeAt(o+1))<<8
case 1:n=1540483477*(65535&(n^=255&t.charCodeAt(o)))+((1540483477*(n>>>16)&65535)<<16)}return n=1540483477*(65535&(n^=n>>>13))+((1540483477*(n>>>16)&65535)<<16),(n^=n>>>15)>>>0}}),cu=lu,pu=lu,hu=uu
cu.murmur3=pu,cu.murmur2=hu
var fu=7,du=Number.POSITIVE_INFINITY
function mu(t,e){return e[1]!==du?function(t,e,r){var i=0,n=0
switch(e=Math.abs(e),r=Math.abs(r),t){case"top-right":case"top-left":case"top":n=r-fu
break
case"bottom-right":case"bottom-left":case"bottom":n=-r+fu}switch(t){case"top-right":case"bottom-right":case"right":i=-e
break
case"top-left":case"bottom-left":case"left":i=e}return[i,n]}(t,e[0],e[1]):function(t,e){var r=0,i=0
e<0&&(e=0)
var n=e/Math.sqrt(2)
switch(t){case"top-right":case"top-left":i=n-fu
break
case"bottom-right":case"bottom-left":i=-n+fu
break
case"bottom":i=-e+fu
break
case"top":i=e-fu}switch(t){case"top-right":case"bottom-right":r=-n
break
case"top-left":case"bottom-left":r=n
break
case"left":r=e
break
case"right":r=-e}return[r,i]}(t,e[0])}function yu(t){switch(t){case"right":case"top-right":case"bottom-right":return"right"
case"left":case"top-left":case"bottom-left":return"left"}return"center"}var vu=65535
function _u(t,e,r,i,o,a,s,l,u,c,p,h,f,d){var m=function(t,e,r,i,o,a,s,l){for(var u=i.layout.get("text-rotate").evaluate(a,{})*Math.PI/180,c=e.positionedGlyphs,p=[],h=0;h<c.length;h++){var f=c[h],d=s[f.fontStack],m=d&&d[f.glyph]
if(m){var y=m.rect
if(y){var v=Sl+1,_=m.metrics.advance*f.scale/2,g=o?[f.x+_,f.y]:[0,0],x=o?[0,0]:[f.x+_+r[0],f.y+r[1]],b=(o||l)&&f.vertical,w=[0,0]
b&&(w=x,x=[0,0])
var S=(m.metrics.left-v)*f.scale-_+x[0],E=(-m.metrics.top-v)*f.scale+x[1],T=S+y.w*f.scale,A=E+y.h*f.scale,I=new n(S,E),k=new n(T,E),z=new n(S,A),C=new n(T,A)
if(b){var P=new n(-_,_-e.yOffset),M=-Math.PI/2,L=cs/2-_,D=new n(5-e.yOffset-L,0),B=new(Function.prototype.bind.apply(n,[null].concat(w)))
I._rotateAround(M,P)._add(D)._add(B),k._rotateAround(M,P)._add(D)._add(B),z._rotateAround(M,P)._add(D)._add(B),C._rotateAround(M,P)._add(D)._add(B)}if(u){var R=Math.sin(u),F=Math.cos(u),O=[F,-R,R,F]
I._matMult(O),k._matMult(O),z._matMult(O),C._matMult(O)}p.push({tl:I,tr:k,bl:z,br:C,tex:y,writingMode:e.writingMode,glyphOffset:g,sectionIndex:f.sectionIndex})}}}return p}(0,r,s,i,o,a,h,t.allowVerticalPlacement),y=t.textSizeData,v=null
"source"===y.kind?(v=[Ss*i.layout.get("text-size").evaluate(a,{})])[0]>vu&&w(t.layerIds[0]+': Value for "text-size" is >= 256. Reduce your "text-size".'):"composite"===y.kind&&((v=[Ss*d.compositeTextSizes[0].evaluate(a,{}),Ss*d.compositeTextSizes[1].evaluate(a,{})])[0]>vu||v[1]>vu)&&w(t.layerIds[0]+': Value for "text-size" is >= 256. Reduce your "text-size".'),t.addSymbols(t.text,m,v,s,o,a,u,e,l.lineStartIndex,l.lineLength,f)
for(var _=0,g=c;_<g.length;_+=1)p[g[_]]=t.text.placedSymbolArray.length-1
return 4*m.length}function gu(t,e,r,i){var n=t.compareText
if(e in n){for(var o=n[e],a=o.length-1;a>=0;a--)if(i.dist(o[a])<r)return!0}else n[e]=[]
return n[e].push(i),!1}t.Actor=Tl,t.AlphaImage=Do,t.CanonicalTileID=Rl,t.CollisionBoxArray=wn,t.Color=Wt,t.DEMData=Vl,t.DataConstantProperty=Ni,t.DictionaryCoder=jl,t.EXTENT=io,t.ErrorEvent=bt,t.EvaluationParameters=Mi,t.Event=xt,t.Evented=wt,t.FeatureIndex=Xl,t.FillBucket=Sa,t.FillExtrusionBucket=Va,t.ImageAtlas=Ks,t.ImagePosition=Xs,t.LineBucket=Ya,t.LngLat=kl,t.LngLatBounds=Il,t.MercatorCoordinate=Bl,t.ONE_EM=cs,t.OverscaledTileID=Ol,t.Point=n,t.Point$1=n,t.ProgramConfiguration=Qn,t.Properties=Xi,t.Protobuf=rl,t.RGBAImage=Bo,t.RequestManager=N,t.ResourceType=lt,t.SegmentVector=Dn,t.SourceFeatureState=Gl,t.StructArrayLayout1ui2=_n,t.StructArrayLayout2i4=Qi,t.StructArrayLayout2ui4=vn,t.StructArrayLayout3ui6=yn,t.StructArrayLayout4i8=tn,t.SymbolBucket=Ds,t.Texture=Qs,t.Tile=Hl,t.Transitionable=Bi,t.Uniform1f=Vn,t.Uniform1i=Un,t.Uniform2f=Nn,t.Uniform3f=jn,t.Uniform4f=qn,t.UniformColor=Zn,t.UniformMatrix4f=Xn,t.UnwrappedTileID=Fl,t.ValidationError=Et,t.WritingMode=ps,t.ZoomHistory=gi,t.addDynamicAttributes=Ps,t.asyncAll=function(t,e,r){if(!t.length)return r(null,[])
var i=t.length,n=new Array(t.length),o=null
t.forEach(function(t,a){e(t,function(t,e){t&&(o=t),n[a]=e,0==--i&&r(o,n)})})},t.bezier=s,t.bindAll=y,t.browser=D,t.cacheEntryPossiblyAdded=function(t){++st>nt&&(t.getActor().send("enforceCacheSizeLimit",it),st=0)},t.clamp=u,t.clearTileCache=function(t){var e=self.caches.delete(rt)
t&&e.catch(t).then(function(){return t()})},t.clone=function(t){var e=new Ao(16)
return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},t.clone$1=x,t.config=B,t.create=function(){var t=new Ao(16)
return Ao!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t},t.create$1=function(){var t=new Ao(9)
return Ao!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t},t.create$2=function(){var t=new Ao(4)
return Ao!=Float32Array&&(t[1]=0,t[2]=0),t[0]=1,t[3]=1,t},t.createCommonjsModule=e,t.createExpression=Tr,t.createLayout=Yi,t.createStyleLayer=function(t){return"custom"===t.type?new qs(t):new Zs[t.type](t)},t.deepEqual=a,t.ease=l,t.emitValidationErrors=ui,t.endsWith=v,t.enforceCacheSizeLimit=function(t){self.caches&&self.caches.open(rt).then(function(e){e.keys().then(function(r){for(var i=0;i<r.length-t;i++)e.delete(r[i])})})},t.evaluateSizeForFeature=Ts,t.evaluateSizeForZoom=As,t.evaluateVariableOffset=mu,t.evented=Ci,t.extend=p,t.featureFilter=Or,t.filterObject=g,t.fromRotation=function(t,e){var r=Math.sin(e),i=Math.cos(e)
return t[0]=i,t[1]=r,t[2]=0,t[3]=-r,t[4]=i,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},t.getAnchorAlignment=xs,t.getAnchorJustification=yu,t.getArrayBuffer=mt,t.getImage=vt,t.getJSON=function(t,e){return dt(p(t,{type:"json"}),e)},t.getReferrer=pt,t.getVideo=function(t,e){var r,i,n=self.document.createElement("video")
n.muted=!0,n.onloadstart=function(){e(null,n)}
for(var o=0;o<t.length;o++){var a=self.document.createElement("source")
r=t[o],i=void 0,(i=self.document.createElement("a")).href=r,(i.protocol!==self.document.location.protocol||i.host!==self.document.location.host)&&(n.crossOrigin="Anonymous"),a.src=t[o],n.appendChild(a)}return{cancel:function(){}}},t.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},t.invert=function(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8],p=e[9],h=e[10],f=e[11],d=e[12],m=e[13],y=e[14],v=e[15],_=r*s-i*a,g=r*l-n*a,x=r*u-o*a,b=i*l-n*s,w=i*u-o*s,S=n*u-o*l,E=c*m-p*d,T=c*y-h*d,A=c*v-f*d,I=p*y-h*m,k=p*v-f*m,z=h*v-f*y,C=_*z-g*k+x*I+b*A-w*T+S*E
return C?(C=1/C,t[0]=(s*z-l*k+u*I)*C,t[1]=(n*k-i*z-o*I)*C,t[2]=(m*S-y*w+v*b)*C,t[3]=(h*w-p*S-f*b)*C,t[4]=(l*A-a*z-u*T)*C,t[5]=(r*z-n*A+o*T)*C,t[6]=(y*x-d*S-v*g)*C,t[7]=(c*S-h*x+f*g)*C,t[8]=(a*k-s*A+u*E)*C,t[9]=(i*A-r*k-o*E)*C,t[10]=(d*w-m*x+v*_)*C,t[11]=(p*x-c*w-f*_)*C,t[12]=(s*T-a*I-l*E)*C,t[13]=(r*I-i*T+n*E)*C,t[14]=(m*g-d*b-y*_)*C,t[15]=(c*b-p*g+h*_)*C,t):null},t.isChar=xi,t.isMapboxURL=j,t.keysDifference=function(t,e){var r=[]
for(var i in t)i in e||r.push(i)
return r},t.makeRequest=dt,t.mapObject=_,t.mercatorXfromLng=Pl,t.mercatorYfromLat=Ml,t.mercatorZfromAltitude=Ll,t.multiply=function(t,e,r){var i=e[0],n=e[1],o=e[2],a=e[3],s=e[4],l=e[5],u=e[6],c=e[7],p=e[8],h=e[9],f=e[10],d=e[11],m=e[12],y=e[13],v=e[14],_=e[15],g=r[0],x=r[1],b=r[2],w=r[3]
return t[0]=g*i+x*s+b*p+w*m,t[1]=g*n+x*l+b*h+w*y,t[2]=g*o+x*u+b*f+w*v,t[3]=g*a+x*c+b*d+w*_,g=r[4],x=r[5],b=r[6],w=r[7],t[4]=g*i+x*s+b*p+w*m,t[5]=g*n+x*l+b*h+w*y,t[6]=g*o+x*u+b*f+w*v,t[7]=g*a+x*c+b*d+w*_,g=r[8],x=r[9],b=r[10],w=r[11],t[8]=g*i+x*s+b*p+w*m,t[9]=g*n+x*l+b*h+w*y,t[10]=g*o+x*u+b*f+w*v,t[11]=g*a+x*c+b*d+w*_,g=r[12],x=r[13],b=r[14],w=r[15],t[12]=g*i+x*s+b*p+w*m,t[13]=g*n+x*l+b*h+w*y,t[14]=g*o+x*u+b*f+w*v,t[15]=g*a+x*c+b*d+w*_,t},t.mvt=Ra,t.number=xe,t.ortho=function(t,e,r,i,n,o,a){var s=1/(e-r),l=1/(i-n),u=1/(o-a)
return t[0]=-2*s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*u,t[11]=0,t[12]=(e+r)*s,t[13]=(n+i)*l,t[14]=(a+o)*u,t[15]=1,t},t.parseGlyphPBF=function(t){return new rl(t).readFields(xl,[])},t.pbf=rl,t.performSymbolLayout=function(t,e,r,i,o,a){t.createArrays()
var s=512*t.overscaling
t.tilePixelRatio=io/s,t.compareText={},t.iconsNeedLinear=!1
var l=t.layers[0].layout,u=t.layers[0]._unevaluatedLayout._values,c={}
if("composite"===t.textSizeData.kind){var p=t.textSizeData,h=p.minZoom,f=p.maxZoom
c.compositeTextSizes=[u["text-size"].possiblyEvaluate(new Mi(h)),u["text-size"].possiblyEvaluate(new Mi(f))]}if("composite"===t.iconSizeData.kind){var d=t.iconSizeData,m=d.minZoom,y=d.maxZoom
c.compositeIconSizes=[u["icon-size"].possiblyEvaluate(new Mi(m)),u["icon-size"].possiblyEvaluate(new Mi(y))]}c.layoutTextSize=u["text-size"].possiblyEvaluate(new Mi(t.zoom+1)),c.layoutIconSize=u["icon-size"].possiblyEvaluate(new Mi(t.zoom+1)),c.textMaxSize=u["text-size"].possiblyEvaluate(new Mi(18))
for(var v=l.get("text-line-height")*cs,_="map"===l.get("text-rotation-alignment")&&"point"!==l.get("symbol-placement"),g=l.get("text-keep-upright"),x=function(){var a=S[b],s=l.get("text-font").evaluate(a,{}).join(","),u=r,p={horizontal:{},vertical:void 0},h=a.text,f=[0,0]
if(h){var d=h.toString(),m=l.get("text-letter-spacing").evaluate(a,{})*cs,y=function(t){for(var e=0,r=d;e<r.length;e+=1)if(!wi(r[e].charCodeAt(0)))return!1
return!0}()?m:0,x=l.get("text-anchor").evaluate(a,{}),E=l.get("text-variable-anchor")
if(!E){var T=l.get("text-radial-offset").evaluate(a,{})
f=T?mu(x,[T*cs,du]):l.get("text-offset").evaluate(a,{}).map(function(t){return t*cs})}var A=_?"center":l.get("text-justify").evaluate(a,{}),I=l.get("symbol-placement"),k="point"===I?l.get("text-max-width").evaluate(a,{})*cs:0,z=function(){t.allowVerticalPlacement&&bi(d)&&(p.vertical=fs(h,e,s,k,v,x,"left",y,f,ps.vertical,!0,I))}
if(!_&&E){for(var C="auto"===A?E.map(function(t){return yu(t)}):[A],P=!1,M=0;M<C.length;M++){var L=C[M]
if(!p.horizontal[L])if(P)p.horizontal[L]=p.horizontal[0]
else{var D=fs(h,e,s,k,v,"center",L,y,f,ps.horizontal,!1,I)
D&&(p.horizontal[L]=D,P=1===D.lineCount)}}z()}else{"auto"===A&&(A=yu(x))
var B=fs(h,e,s,k,v,x,A,y,f,ps.horizontal,!1,I)
B&&(p.horizontal[A]=B),z(),bi(d)&&_&&g&&(p.vertical=fs(h,e,s,k,v,x,A,y,f,ps.vertical,!1,I))}}var R=void 0
if(a.icon&&a.icon.name){var F=i[a.icon.name]
F&&(R=function(t,e,r){var i=xs(r),n=i.horizontalAlign,o=i.verticalAlign,a=e[0],s=e[1],l=a-t.displaySize[0]*n,u=l+t.displaySize[0],c=s-t.displaySize[1]*o
return{image:t,top:c,bottom:c+t.displaySize[1],left:l,right:u}}(o[a.icon.name],l.get("icon-offset").evaluate(a,{}),l.get("icon-anchor").evaluate(a,{})),void 0===t.sdfIcons?t.sdfIcons=F.sdf:t.sdfIcons!==F.sdf&&w("Style sheet warning: Cannot mix SDF and non-SDF icons in one buffer"),F.pixelRatio!==t.pixelRatio?t.iconsNeedLinear=!0:0!==l.get("icon-rotate").constantOr(1)&&(t.iconsNeedLinear=!0))}(Object.keys(p.horizontal).length||R)&&function(t,e,r,i,o,a,s){var l=a.layoutTextSize.evaluate(e,{}),u=a.layoutIconSize.evaluate(e,{}),c=a.textMaxSize.evaluate(e,{})
void 0===c&&(c=l)
var p=t.layers[0].layout,h=p.get("icon-offset").evaluate(e,{}),f=function(t){for(var e in t)return t[e]
return null}(r.horizontal),d=l/24,m=t.tilePixelRatio*d,y=t.tilePixelRatio*c/24,v=t.tilePixelRatio*u,_=t.tilePixelRatio*p.get("symbol-spacing"),g=p.get("text-padding")*t.tilePixelRatio,x=p.get("icon-padding")*t.tilePixelRatio,b=p.get("text-max-angle")/180*Math.PI,S="map"===p.get("text-rotation-alignment")&&"point"!==p.get("symbol-placement"),E="map"===p.get("icon-rotation-alignment")&&"point"!==p.get("symbol-placement"),T=p.get("symbol-placement"),A=_/2,I=p.get("icon-text-fit")
i&&"none"!==I&&f&&(i=function(t,e,r,i,n,o){var a,s,l,u,c=t.image,p=e.left*o,h=e.right*o
"width"===r||"both"===r?(u=n[0]+p-i[3],s=n[0]+h+i[1]):s=(u=n[0]+(p+h-c.displaySize[0])/2)+c.displaySize[0]
var f=e.top*o,d=e.bottom*o
return"height"===r||"both"===r?(a=n[1]+f-i[0],l=n[1]+d+i[2]):l=(a=n[1]+(f+d-c.displaySize[1])/2)+c.displaySize[1],{image:c,top:a,right:s,bottom:l,left:u}}(i,f,I,p.get("icon-text-fit-padding"),h,d))
var k=function(l,u){u.x<0||u.x>=io||u.y<0||u.y>=io||function(t,e,r,i,o,a,s,l,u,c,p,h,f,d,m,y,v,_,g,x,b){var S,E,T,A,I=t.addToLineVertexArray(e,r),k=0,z=0,C=0,P=-1,M={},L=cu(""),D=0,B=0
if(void 0===a._unevaluatedLayout.getValue("text-radial-offset")?(D=(S=a.layout.get("text-offset").evaluate(g,{}).map(function(t){return t*cs}))[0],B=S[1]):(D=a.layout.get("text-radial-offset").evaluate(g,{})*cs,B=du),t.allowVerticalPlacement&&i.vertical){var R=a.layout.get("text-rotate").evaluate(g,{})+90,F=i.vertical
A=new ru(s,r,e,l,u,c,F,p,h,f,t.overscaling,R)}if(o){var O=a.layout.get("icon-rotate").evaluate(g,{}),U=function(t,e){var r=t.image,i=t.right-t.left,o=(i*r.paddedRect.w/(r.paddedRect.w-2)-i)/2,a=t.left-o,s=t.right+o,l=t.bottom-t.top,u=(l*r.paddedRect.h/(r.paddedRect.h-2)-l)/2,c=t.top-u,p=t.bottom+u,h=new n(a,c),f=new n(s,c),d=new n(s,p),m=new n(a,p),y=e*Math.PI/180
if(y){var v=Math.sin(y),_=Math.cos(y),g=[_,-v,v,_]
h._matMult(g),f._matMult(g),m._matMult(g),d._matMult(g)}return[{tl:h,tr:f,bl:m,br:d,tex:r.paddedRect,writingMode:void 0,glyphOffset:[0,0],sectionIndex:0}]}(o,O)
T=new ru(s,r,e,l,u,c,o,m,y,!1,t.overscaling,O),k=4*U.length
var V=t.iconSizeData,N=null
"source"===V.kind?(N=[Ss*a.layout.get("icon-size").evaluate(g,{})])[0]>vu&&w(t.layerIds[0]+': Value for "icon-size" is >= 256. Reduce your "icon-size".'):"composite"===V.kind&&((N=[Ss*b.compositeIconSizes[0].evaluate(g,{}),Ss*b.compositeIconSizes[1].evaluate(g,{})])[0]>vu||N[1]>vu)&&w(t.layerIds[0]+': Value for "icon-size" is >= 256. Reduce your "icon-size".'),t.addSymbols(t.icon,U,N,_,v,g,!1,e,I.lineStartIndex,I.lineLength,-1),P=t.icon.placedSymbolArray.length-1}for(var j in i.horizontal){var q=i.horizontal[j]
if(!E){L=cu(q.text)
var Z=a.layout.get("text-rotate").evaluate(g,{})
E=new ru(s,r,e,l,u,c,q,p,h,f,t.overscaling,Z)}var G=1===q.lineCount
if(z+=_u(t,e,q,a,f,g,d,I,i.vertical?ps.horizontal:ps.horizontalOnly,G?Object.keys(i.horizontal):[j],M,x,P,b),G)break}i.vertical&&(C+=_u(t,e,i.vertical,a,f,g,d,I,ps.vertical,["vertical"],M,x,P,b))
var X=E?E.boxStartIndex:t.collisionBoxArray.length,W=E?E.boxEndIndex:t.collisionBoxArray.length,K=A?A.boxStartIndex:t.collisionBoxArray.length,H=A?A.boxEndIndex:t.collisionBoxArray.length,J=T?T.boxStartIndex:t.collisionBoxArray.length,Y=T?T.boxEndIndex:t.collisionBoxArray.length
t.glyphOffsetArray.length>=Ds.MAX_GLYPHS&&w("Too many glyphs being rendered in a tile. See https://github.com/mapbox/mapbox-gl-js/issues/2907"),t.symbolInstances.emplaceBack(e.x,e.y,M.right>=0?M.right:-1,M.center>=0?M.center:-1,M.left>=0?M.left:-1,M.vertical||-1,P,L,X,W,K,H,J,Y,l,z,C,k,0,p,D,B)}(t,u,l,r,i,t.layers[0],t.collisionBoxArray,e.index,e.sourceLayerIndex,t.index,m,g,S,s,v,x,E,h,e,o,a)}
if("line"===T)for(var z=0,C=function(t,e,r,i,o){for(var a=[],s=0;s<t.length;s++)for(var l=t[s],u=void 0,c=0;c<l.length-1;c++){var p=l[c],h=l[c+1]
p.x<0&&h.x<0||(p.x<0?p=new n(0,p.y+(h.y-p.y)*((0-p.x)/(h.x-p.x)))._round():h.x<0&&(h=new n(0,p.y+(h.y-p.y)*((0-p.x)/(h.x-p.x)))._round()),p.y<0&&h.y<0||(p.y<0?p=new n(p.x+(h.x-p.x)*((0-p.y)/(h.y-p.y)),0)._round():h.y<0&&(h=new n(p.x+(h.x-p.x)*((0-p.y)/(h.y-p.y)),0)._round()),p.x>=i&&h.x>=i||(p.x>=i?p=new n(i,p.y+(h.y-p.y)*((i-p.x)/(h.x-p.x)))._round():h.x>=i&&(h=new n(i,p.y+(h.y-p.y)*((i-p.x)/(h.x-p.x)))._round()),p.y>=o&&h.y>=o||(p.y>=o?p=new n(p.x+(h.x-p.x)*((o-p.y)/(h.y-p.y)),o)._round():h.y>=o&&(h=new n(p.x+(h.x-p.x)*((o-p.y)/(h.y-p.y)),o)._round()),u&&p.equals(u[u.length-1])||(u=[p],a.push(u)),u.push(h)))))}return a}(e.geometry,0,0,io,io);z<C.length;z+=1)for(var P=C[z],M=0,L=eu(P,_,b,r.vertical||f,i,24,y,t.overscaling,io);M<L.length;M+=1){var D=L[M]
f&&gu(t,f.text,A,D)||k(P,D)}else if("line-center"===T)for(var B=0,R=e.geometry;B<R.length;B+=1){var F=R[B]
if(F.length>1){var O=tu(F,b,r.vertical||f,i,24,y)
O&&k(F,O)}}else if("Polygon"===e.type)for(var U=0,V=ga(e.geometry,0);U<V.length;U+=1){var N=V[U],j=ou(N,16)
k(N[0],new ws(j.x,j.y,0))}else if("LineString"===e.type)for(var q=0,Z=e.geometry;q<Z.length;q+=1){var G=Z[q]
k(G,new ws(G[0].x,G[0].y,0))}else if("Point"===e.type)for(var X=0,W=e.geometry;X<W.length;X+=1)for(var K=0,H=W[X];K<H.length;K+=1){var J=H[K]
k([J],new ws(J.x,J.y,0))}}(t,a,p,R,u,c,f)},b=0,S=t.features;b<S.length;b+=1)x()
a&&t.generateCollisionDebugBuffers()},t.perspective=function(t,e,r,i,n){var o,a=1/Math.tan(e/2)
return t[0]=a/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=n&&n!==1/0?(o=1/(i-n),t[10]=(n+i)*o,t[14]=2*n*i*o):(t[10]=-1,t[14]=-2*i),t},t.pick=function(t,e){for(var r={},i=0;i<e.length;i++){var n=e[i]
n in t&&(r[n]=t[n])}return r},t.plugin=Pi,t.polygonIntersectsPolygon=lo,t.postMapLoadEvent=et,t.postTurnstileEvent=Q,t.potpack=Gs,t.rasterBoundsAttributes=Nl,t.refProperties=["type","source","source-layer","minzoom","maxzoom","filter","layout"],t.register=mi,t.registerForPluginAvailability=function(t){return ki?t({pluginURL:ki,completionCallback:Ai}):Ci.once("pluginAvailable",t),t},t.rotate=function(t,e,r){var i=e[0],n=e[1],o=e[2],a=e[3],s=Math.sin(r),l=Math.cos(r)
return t[0]=i*l+o*s,t[1]=n*l+a*s,t[2]=i*-s+o*l,t[3]=n*-s+a*l,t},t.rotateX=function(t,e,r){var i=Math.sin(r),n=Math.cos(r),o=e[4],a=e[5],s=e[6],l=e[7],u=e[8],c=e[9],p=e[10],h=e[11]
return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=o*n+u*i,t[5]=a*n+c*i,t[6]=s*n+p*i,t[7]=l*n+h*i,t[8]=u*n-o*i,t[9]=c*n-a*i,t[10]=p*n-s*i,t[11]=h*n-l*i,t},t.rotateZ=function(t,e,r){var i=Math.sin(r),n=Math.cos(r),o=e[0],a=e[1],s=e[2],l=e[3],u=e[4],c=e[5],p=e[6],h=e[7]
return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=o*n+u*i,t[1]=a*n+c*i,t[2]=s*n+p*i,t[3]=l*n+h*i,t[4]=u*n-o*i,t[5]=c*n-a*i,t[6]=p*n-s*i,t[7]=h*n-l*i,t},t.scale=function(t,e,r){var i=r[0],n=r[1],o=r[2]
return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*o,t[9]=e[9]*o,t[10]=e[10]*o,t[11]=e[11]*o,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},t.setCacheLimits=function(t,e){it=t,nt=e},t.setRTLTextPlugin=function(t,e){if(Ii)throw new Error("setRTLTextPlugin cannot be called multiple times.")
Ii=!0,ki=D.resolveURL(t),Ai=function(t){t?(Ii=!1,ki=null,e&&e(t)):zi=!0},Ci.fire(new xt("pluginAvailable",{pluginURL:ki,completionCallback:Ai}))},t.sphericalToCartesian=function(t){var e=t[0],r=t[1],i=t[2]
return r+=90,r*=Math.PI/180,i*=Math.PI/180,{x:e*Math.cos(r)*Math.sin(i),y:e*Math.sin(r)*Math.sin(i),z:e*Math.cos(i)}},t.styleSpec=St,t.symbolSize=Is,t.transformMat3=function(t,e,r){var i=e[0],n=e[1],o=e[2]
return t[0]=i*r[0]+n*r[3]+o*r[6],t[1]=i*r[1]+n*r[4]+o*r[7],t[2]=i*r[2]+n*r[5]+o*r[8],t},t.transformMat4=Io,t.translate=function(t,e,r){var i,n,o,a,s,l,u,c,p,h,f,d,m=r[0],y=r[1],v=r[2]
return e===t?(t[12]=e[0]*m+e[4]*y+e[8]*v+e[12],t[13]=e[1]*m+e[5]*y+e[9]*v+e[13],t[14]=e[2]*m+e[6]*y+e[10]*v+e[14],t[15]=e[3]*m+e[7]*y+e[11]*v+e[15]):(i=e[0],n=e[1],o=e[2],a=e[3],s=e[4],l=e[5],u=e[6],c=e[7],p=e[8],h=e[9],f=e[10],d=e[11],t[0]=i,t[1]=n,t[2]=o,t[3]=a,t[4]=s,t[5]=l,t[6]=u,t[7]=c,t[8]=p,t[9]=h,t[10]=f,t[11]=d,t[12]=i*m+s*y+p*v+e[12],t[13]=n*m+l*y+h*v+e[13],t[14]=o*m+u*y+f*v+e[14],t[15]=a*m+c*y+d*v+e[15]),t},t.uniqueId=f,t.validateCustomStyleLayer=function(t){var e=[],r=t.id
return void 0===r&&e.push({message:"layers."+r+': missing required property "id"'}),void 0===t.render&&e.push({message:"layers."+r+': missing required method "render"'}),t.renderingMode&&"2d"!==t.renderingMode&&"3d"!==t.renderingMode&&e.push({message:"layers."+r+': property "renderingMode" must be either "2d" or "3d"'}),e},t.validateLight=ai,t.validateStyle=oi,t.values=function(t){var e=[]
for(var r in t)e.push(t[r])
return e},t.vectorTile=Ra,t.version="1.4.0",t.warnOnce=w,t.webpSupported=R,t.window=self,t.wrap=c}),i(0,function(t){function e(t){var r=typeof t
if("number"===r||"boolean"===r||"string"===r||null==t)return JSON.stringify(t)
if(Array.isArray(t)){for(var i="[",n=0,o=t;n<o.length;n+=1)i+=e(o[n])+","
return i+"]"}for(var a=Object.keys(t).sort(),s="{",l=0;l<a.length;l++)s+=JSON.stringify(a[l])+":"+e(t[a[l]])+","
return s+"}"}function r(r){for(var i="",n=0,o=t.refProperties;n<o.length;n+=1)i+="/"+e(r[o[n]])
return i}var i=function(t){this.keyCache={},t&&this.replace(t)}
i.prototype.replace=function(t){this._layerConfigs={},this._layers={},this.update(t,[])},i.prototype.update=function(e,i){for(var n=this,o=0,a=e;o<a.length;o+=1){var s=a[o]
this._layerConfigs[s.id]=s
var l=this._layers[s.id]=t.createStyleLayer(s)
l._featureFilter=t.featureFilter(l.filter),this.keyCache[s.id]&&delete this.keyCache[s.id]}for(var u=0,c=i;u<c.length;u+=1){var p=c[u]
delete this.keyCache[p],delete this._layerConfigs[p],delete this._layers[p]}this.familiesBySource={}
for(var h=0,f=function(t,e){for(var i={},n=0;n<t.length;n++){var o=e&&e[t[n].id]||r(t[n])
e&&(e[t[n].id]=o)
var a=i[o]
a||(a=i[o]=[]),a.push(t[n])}var s=[]
for(var l in i)s.push(i[l])
return s}(t.values(this._layerConfigs),this.keyCache);h<f.length;h+=1){var d=f[h].map(function(t){return n._layers[t.id]}),m=d[0]
if("none"!==m.visibility){var y=m.source||"",v=this.familiesBySource[y]
v||(v=this.familiesBySource[y]={})
var _=m.sourceLayer||"_geojsonTileLayer",g=v[_]
g||(g=v[_]=[]),g.push(d)}}}
var n=function(e){var r={},i=[]
for(var n in e){var o=e[n],a=r[n]={}
for(var s in o){var l=o[+s]
if(l&&0!==l.bitmap.width&&0!==l.bitmap.height){var u={x:0,y:0,w:l.bitmap.width+2,h:l.bitmap.height+2}
i.push(u),a[s]={rect:u,metrics:l.metrics}}}}var c=t.potpack(i),p=c.w,h=c.h,f=new t.AlphaImage({width:p||1,height:h||1})
for(var d in e){var m=e[d]
for(var y in m){var v=m[+y]
if(v&&0!==v.bitmap.width&&0!==v.bitmap.height){var _=r[d][y].rect
t.AlphaImage.copy(v.bitmap,f,{x:0,y:0},{x:_.x+1,y:_.y+1},v.bitmap)}}}this.image=f,this.positions=r}
t.register("GlyphAtlas",n)
var o=function(e){this.tileID=new t.OverscaledTileID(e.tileID.overscaledZ,e.tileID.wrap,e.tileID.canonical.z,e.tileID.canonical.x,e.tileID.canonical.y),this.uid=e.uid,this.zoom=e.zoom,this.pixelRatio=e.pixelRatio,this.tileSize=e.tileSize,this.source=e.source,this.overscaling=this.tileID.overscaleFactor(),this.showCollisionBoxes=e.showCollisionBoxes,this.collectResourceTiming=!!e.collectResourceTiming,this.returnDependencies=!!e.returnDependencies}
function a(e,r,i){for(var n=new t.EvaluationParameters(r),o=0,a=e;o<a.length;o+=1)a[o].recalculate(n,i)}o.prototype.parse=function(e,r,i,o,s){var l=this
this.status="parsing",this.data=e,this.collisionBoxArray=new t.CollisionBoxArray
var u=new t.DictionaryCoder(Object.keys(e.layers).sort()),c=new t.FeatureIndex(this.tileID)
c.bucketLayerIDs=[]
var p,h,f,d,m={},y={featureIndex:c,iconDependencies:{},patternDependencies:{},glyphDependencies:{},availableImages:i},v=r.familiesBySource[this.source]
for(var _ in v){var g=e.layers[_]
if(g){1===g.version&&t.warnOnce('Vector tile source "'+this.source+'" layer "'+_+'" does not use vector tile spec v2 and therefore may have some rendering errors.')
for(var x=u.encode(_),b=[],w=0;w<g.length;w++){var S=g.feature(w)
b.push({feature:S,index:w,sourceLayerIndex:x})}for(var E=0,T=v[_];E<T.length;E+=1){var A=T[E],I=A[0]
I.minzoom&&this.zoom<Math.floor(I.minzoom)||I.maxzoom&&this.zoom>=I.maxzoom||"none"!==I.visibility&&(a(A,this.zoom,i),(m[I.id]=I.createBucket({index:c.bucketLayerIDs.length,layers:A,zoom:this.zoom,pixelRatio:this.pixelRatio,overscaling:this.overscaling,collisionBoxArray:this.collisionBoxArray,sourceLayerIndex:x,sourceID:this.source})).populate(b,y),c.bucketLayerIDs.push(A.map(function(t){return t.id})))}}}var k=t.mapObject(y.glyphDependencies,function(t){return Object.keys(t).map(Number)})
Object.keys(k).length?o.send("getGlyphs",{uid:this.uid,stacks:k},function(t,e){p||(p=t,h=e,P.call(l))}):h={}
var z=Object.keys(y.iconDependencies)
z.length?o.send("getImages",{icons:z},function(t,e){p||(p=t,f=e,P.call(l))}):f={}
var C=Object.keys(y.patternDependencies)
function P(){if(p)return s(p)
if(h&&f&&d){var e=new n(h),r=new t.ImageAtlas(f,d)
for(var o in m){var l=m[o]
l instanceof t.SymbolBucket?(a(l.layers,this.zoom,i),t.performSymbolLayout(l,h,e.positions,f,r.iconPositions,this.showCollisionBoxes)):l.hasPattern&&(l instanceof t.LineBucket||l instanceof t.FillBucket||l instanceof t.FillExtrusionBucket)&&(a(l.layers,this.zoom,i),l.addFeatures(y,r.patternPositions))}this.status="done",s(null,{buckets:t.values(m).filter(function(t){return!t.isEmpty()}),featureIndex:c,collisionBoxArray:this.collisionBoxArray,glyphAtlasImage:e.image,imageAtlas:r,glyphMap:this.returnDependencies?h:null,iconMap:this.returnDependencies?f:null,glyphPositions:this.returnDependencies?e.positions:null})}}C.length?o.send("getImages",{icons:C},function(t,e){p||(p=t,d=e,P.call(l))}):d={},P.call(this)}
var s="undefined"!=typeof performance,l={getEntriesByName:function(t){return!!(s&&performance&&performance.getEntriesByName)&&performance.getEntriesByName(t)},mark:function(t){return!!(s&&performance&&performance.mark)&&performance.mark(t)},measure:function(t,e,r){return!!(s&&performance&&performance.measure)&&performance.measure(t,e,r)},clearMarks:function(t){return!!(s&&performance&&performance.clearMarks)&&performance.clearMarks(t)},clearMeasures:function(t){return!!(s&&performance&&performance.clearMeasures)&&performance.clearMeasures(t)}},u=function(t){this._marks={start:[t.url,"start"].join("#"),end:[t.url,"end"].join("#"),measure:t.url.toString()},l.mark(this._marks.start)}
function c(e,r){var i=t.getArrayBuffer(e.request,function(e,i,n,o){e?r(e):i&&r(null,{vectorTile:new t.vectorTile.VectorTile(new t.pbf(i)),rawData:i,cacheControl:n,expires:o})})
return function(){i.cancel(),r()}}u.prototype.finish=function(){l.mark(this._marks.end)
var t=l.getEntriesByName(this._marks.measure)
return 0===t.length&&(l.measure(this._marks.measure,this._marks.start,this._marks.end),t=l.getEntriesByName(this._marks.measure),l.clearMarks(this._marks.start),l.clearMarks(this._marks.end),l.clearMeasures(this._marks.measure)),t},l.Performance=u
var p=function(t,e,r,i){this.actor=t,this.layerIndex=e,this.availableImages=r,this.loadVectorData=i||c,this.loading={},this.loaded={}}
p.prototype.loadTile=function(e,r){var i=this,n=e.uid
this.loading||(this.loading={})
var a=!!(e&&e.request&&e.request.collectResourceTiming)&&new l.Performance(e.request),s=this.loading[n]=new o(e)
s.abort=this.loadVectorData(e,function(e,o){if(delete i.loading[n],e||!o)return s.status="done",i.loaded[n]=s,r(e)
var l=o.rawData,u={}
o.expires&&(u.expires=o.expires),o.cacheControl&&(u.cacheControl=o.cacheControl)
var c={}
if(a){var p=a.finish()
p&&(c.resourceTiming=JSON.parse(JSON.stringify(p)))}s.vectorTile=o.vectorTile,s.parse(o.vectorTile,i.layerIndex,i.availableImages,i.actor,function(e,i){if(e||!i)return r(e)
r(null,t.extend({rawTileData:l.slice(0)},i,u,c))}),i.loaded=i.loaded||{},i.loaded[n]=s})},p.prototype.reloadTile=function(t,e){var r=this,i=this.loaded,n=t.uid,o=this
if(i&&i[n]){var a=i[n]
a.showCollisionBoxes=t.showCollisionBoxes
var s=function(t,i){var n=a.reloadCallback
n&&(delete a.reloadCallback,a.parse(a.vectorTile,o.layerIndex,r.availableImages,o.actor,n)),e(t,i)}
"parsing"===a.status?a.reloadCallback=s:"done"===a.status&&(a.vectorTile?a.parse(a.vectorTile,this.layerIndex,this.availableImages,this.actor,s):s())}},p.prototype.abortTile=function(t,e){var r=this.loading,i=t.uid
r&&r[i]&&r[i].abort&&(r[i].abort(),delete r[i]),e()},p.prototype.removeTile=function(t,e){var r=this.loaded,i=t.uid
r&&r[i]&&delete r[i],e()}
var h=function(){this.loaded={}}
h.prototype.loadTile=function(e,r){var i=e.uid,n=e.encoding,o=e.rawImageData,a=new t.DEMData(i,o,n)
this.loaded=this.loaded||{},this.loaded[i]=a,r(null,a)},h.prototype.removeTile=function(t){var e=this.loaded,r=t.uid
e&&e[r]&&delete e[r]}
var f={RADIUS:6378137,FLATTENING:1/298.257223563,POLAR_RADIUS:6356752.3142}
function d(t){var e=0
if(t&&t.length>0){e+=Math.abs(m(t[0]))
for(var r=1;r<t.length;r++)e-=Math.abs(m(t[r]))}return e}function m(t){var e,r,i,n,o,a,s=0,l=t.length
if(l>2){for(a=0;a<l;a++)a===l-2?(i=l-2,n=l-1,o=0):a===l-1?(i=l-1,n=0,o=1):(i=a,n=a+1,o=a+2),e=t[i],r=t[n],s+=(y(t[o][0])-y(e[0]))*Math.sin(y(r[1]))
s=s*f.RADIUS*f.RADIUS/2}return s}function y(t){return t*Math.PI/180}var v={geometry:function t(e){var r,i=0
switch(e.type){case"Polygon":return d(e.coordinates)
case"MultiPolygon":for(r=0;r<e.coordinates.length;r++)i+=d(e.coordinates[r])
return i
case"Point":case"MultiPoint":case"LineString":case"MultiLineString":return 0
case"GeometryCollection":for(r=0;r<e.geometries.length;r++)i+=t(e.geometries[r])
return i}},ring:m}
function _(t,e){return function(r){return t(r,e)}}function g(t,e){e=!!e,t[0]=x(t[0],e)
for(var r=1;r<t.length;r++)t[r]=x(t[r],!e)
return t}function x(t,e){return function(t){return v.ring(t)>=0}(t)===e?t:t.reverse()}var b=t.vectorTile.VectorTileFeature.prototype.toGeoJSON,w=function(e){this._feature=e,this.extent=t.EXTENT,this.type=e.type,this.properties=e.tags,"id"in e&&!isNaN(e.id)&&(this.id=parseInt(e.id,10))}
w.prototype.loadGeometry=function(){if(1===this._feature.type){for(var e=[],r=0,i=this._feature.geometry;r<i.length;r+=1){var n=i[r]
e.push([new t.Point$1(n[0],n[1])])}return e}for(var o=[],a=0,s=this._feature.geometry;a<s.length;a+=1){for(var l=[],u=0,c=s[a];u<c.length;u+=1){var p=c[u]
l.push(new t.Point$1(p[0],p[1]))}o.push(l)}return o},w.prototype.toGeoJSON=function(t,e,r){return b.call(this,t,e,r)}
var S=function(e){this.layers={_geojsonTileLayer:this},this.name="_geojsonTileLayer",this.extent=t.EXTENT,this.length=e.length,this._features=e}
S.prototype.feature=function(t){return new w(this._features[t])}
var E=t.vectorTile.VectorTileFeature,T=A
function A(t,e){this.options=e||{},this.features=t,this.length=t.length}function I(t,e){this.id="number"==typeof t.id?t.id:void 0,this.type=t.type,this.rawGeometry=1===t.type?[t.geometry]:t.geometry,this.properties=t.tags,this.extent=e||4096}A.prototype.feature=function(t){return new I(this.features[t],this.options.extent)},I.prototype.loadGeometry=function(){var e=this.rawGeometry
this.geometry=[]
for(var r=0;r<e.length;r++){for(var i=e[r],n=[],o=0;o<i.length;o++)n.push(new t.Point$1(i[o][0],i[o][1]))
this.geometry.push(n)}return this.geometry},I.prototype.bbox=function(){this.geometry||this.loadGeometry()
for(var t=this.geometry,e=1/0,r=-1/0,i=1/0,n=-1/0,o=0;o<t.length;o++)for(var a=t[o],s=0;s<a.length;s++){var l=a[s]
e=Math.min(e,l.x),r=Math.max(r,l.x),i=Math.min(i,l.y),n=Math.max(n,l.y)}return[e,i,r,n]},I.prototype.toGeoJSON=E.prototype.toGeoJSON
var k=P,z=P,C=T
function P(e){var r=new t.pbf
return function(t,e){for(var r in t.layers)e.writeMessage(3,M,t.layers[r])}(e,r),r.finish()}function M(t,e){var r
e.writeVarintField(15,t.version||1),e.writeStringField(1,t.name||""),e.writeVarintField(5,t.extent||4096)
var i={keys:[],values:[],keycache:{},valuecache:{}}
for(r=0;r<t.length;r++)i.feature=t.feature(r),e.writeMessage(2,L,i)
var n=i.keys
for(r=0;r<n.length;r++)e.writeStringField(3,n[r])
var o=i.values
for(r=0;r<o.length;r++)e.writeMessage(4,O,o[r])}function L(t,e){var r=t.feature
void 0!==r.id&&e.writeVarintField(1,r.id),e.writeMessage(2,D,t),e.writeVarintField(3,r.type),e.writeMessage(4,F,r)}function D(t,e){var r=t.feature,i=t.keys,n=t.values,o=t.keycache,a=t.valuecache
for(var s in r.properties){var l=o[s]
void 0===l&&(i.push(s),l=i.length-1,o[s]=l),e.writeVarint(l)
var u=r.properties[s],c=typeof u
"string"!==c&&"boolean"!==c&&"number"!==c&&(u=JSON.stringify(u))
var p=c+":"+u,h=a[p]
void 0===h&&(n.push(u),h=n.length-1,a[p]=h),e.writeVarint(h)}}function B(t,e){return(e<<3)+(7&t)}function R(t){return t<<1^t>>31}function F(t,e){for(var r=t.loadGeometry(),i=t.type,n=0,o=0,a=r.length,s=0;s<a;s++){var l=r[s],u=1
1===i&&(u=l.length),e.writeVarint(B(1,u))
for(var c=3===i?l.length-1:l.length,p=0;p<c;p++){1===p&&1!==i&&e.writeVarint(B(2,c-1))
var h=l[p].x-n,f=l[p].y-o
e.writeVarint(R(h)),e.writeVarint(R(f)),n+=h,o+=f}3===i&&e.writeVarint(B(7,1))}}function O(t,e){var r=typeof t
"string"===r?e.writeStringField(1,t):"boolean"===r?e.writeBooleanField(7,t):"number"===r&&(t%1!=0?e.writeDoubleField(3,t):t<0?e.writeSVarintField(6,t):e.writeVarintField(5,t))}function U(t,e,r,i){V(t,r,i),V(e,2*r,2*i),V(e,2*r+1,2*i+1)}function V(t,e,r){var i=t[e]
t[e]=t[r],t[r]=i}function N(t,e,r,i){var n=t-r,o=e-i
return n*n+o*o}k.fromVectorTileJs=z,k.fromGeojsonVt=function(t,e){e=e||{}
var r={}
for(var i in t)r[i]=new T(t[i].features,e),r[i].name=i,r[i].version=e.version,r[i].extent=e.extent
return P({layers:r})},k.GeoJSONWrapper=C
var j=function(t){return t[0]},q=function(t){return t[1]},Z=function(t,e,r,i,n){void 0===e&&(e=j),void 0===r&&(r=q),void 0===i&&(i=64),void 0===n&&(n=Float64Array),this.nodeSize=i,this.points=t
for(var o=t.length<65536?Uint16Array:Uint32Array,a=this.ids=new o(t.length),s=this.coords=new n(2*t.length),l=0;l<t.length;l++)a[l]=l,s[2*l]=e(t[l]),s[2*l+1]=r(t[l])
!function t(e,r,i,n,o,a){if(!(o-n<=i)){var s=n+o>>1
!function t(e,r,i,n,o,a){for(;o>n;){if(o-n>600){var s=o-n+1,l=i-n+1,u=Math.log(s),c=.5*Math.exp(2*u/3),p=.5*Math.sqrt(u*c*(s-c)/s)*(l-s/2<0?-1:1)
t(e,r,i,Math.max(n,Math.floor(i-l*c/s+p)),Math.min(o,Math.floor(i+(s-l)*c/s+p)),a)}var h=r[2*i+a],f=n,d=o
for(U(e,r,n,i),r[2*o+a]>h&&U(e,r,n,o);f<d;){for(U(e,r,f,d),f++,d--;r[2*f+a]<h;)f++
for(;r[2*d+a]>h;)d--}r[2*n+a]===h?U(e,r,n,d):U(e,r,++d,o),d<=i&&(n=d+1),i<=d&&(o=d-1)}}(e,r,s,n,o,a%2),t(e,r,i,n,s-1,a+1),t(e,r,i,s+1,o,a+1)}}(a,s,i,0,a.length-1,0)}
Z.prototype.range=function(t,e,r,i){return function(t,e,r,i,n,o,a){for(var s,l,u=[0,t.length-1,0],c=[];u.length;){var p=u.pop(),h=u.pop(),f=u.pop()
if(h-f<=a)for(var d=f;d<=h;d++)s=e[2*d],l=e[2*d+1],s>=r&&s<=n&&l>=i&&l<=o&&c.push(t[d])
else{var m=Math.floor((f+h)/2)
s=e[2*m],l=e[2*m+1],s>=r&&s<=n&&l>=i&&l<=o&&c.push(t[m])
var y=(p+1)%2;(0===p?r<=s:i<=l)&&(u.push(f),u.push(m-1),u.push(y)),(0===p?n>=s:o>=l)&&(u.push(m+1),u.push(h),u.push(y))}}return c}(this.ids,this.coords,t,e,r,i,this.nodeSize)},Z.prototype.within=function(t,e,r){return function(t,e,r,i,n,o){for(var a=[0,t.length-1,0],s=[],l=n*n;a.length;){var u=a.pop(),c=a.pop(),p=a.pop()
if(c-p<=o)for(var h=p;h<=c;h++)N(e[2*h],e[2*h+1],r,i)<=l&&s.push(t[h])
else{var f=Math.floor((p+c)/2),d=e[2*f],m=e[2*f+1]
N(d,m,r,i)<=l&&s.push(t[f])
var y=(u+1)%2;(0===u?r-n<=d:i-n<=m)&&(a.push(p),a.push(f-1),a.push(y)),(0===u?r+n>=d:i+n>=m)&&(a.push(f+1),a.push(c),a.push(y))}}return s}(this.ids,this.coords,t,e,r,this.nodeSize)}
var G={minZoom:0,maxZoom:16,radius:40,extent:512,nodeSize:64,log:!1,reduce:null,map:function(t){return t}},X=function(t){this.options=Q(Object.create(G),t),this.trees=new Array(this.options.maxZoom+1)}
function W(t,e,r,i,n){return{x:t,y:e,zoom:1/0,id:r,parentId:-1,numPoints:i,properties:n}}function K(t,e){var r=t.geometry.coordinates,i=r[0],n=r[1]
return{x:Y(i),y:$(n),zoom:1/0,index:e,parentId:-1}}function H(t){return{type:"Feature",id:t.id,properties:J(t),geometry:{type:"Point",coordinates:[(i=t.x,360*(i-.5)),(e=t.y,r=(180-360*e)*Math.PI/180,360*Math.atan(Math.exp(r))/Math.PI-90)]}}
var e,r,i}function J(t){var e=t.numPoints,r=e>=1e4?Math.round(e/1e3)+"k":e>=1e3?Math.round(e/100)/10+"k":e
return Q(Q({},t.properties),{cluster:!0,cluster_id:t.id,point_count:e,point_count_abbreviated:r})}function Y(t){return t/360+.5}function $(t){var e=Math.sin(t*Math.PI/180),r=.5-.25*Math.log((1+e)/(1-e))/Math.PI
return r<0?0:r>1?1:r}function Q(t,e){for(var r in e)t[r]=e[r]
return t}function tt(t){return t.x}function et(t){return t.y}function rt(t,e,r,i,n,o){var a=n-r,s=o-i
if(0!==a||0!==s){var l=((t-r)*a+(e-i)*s)/(a*a+s*s)
l>1?(r=n,i=o):l>0&&(r+=a*l,i+=s*l)}return(a=t-r)*a+(s=e-i)*s}function it(t,e,r,i){var n={id:void 0===t?null:t,type:e,geometry:r,tags:i,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}
return function(t){var e=t.geometry,r=t.type
if("Point"===r||"MultiPoint"===r||"LineString"===r)nt(t,e)
else if("Polygon"===r||"MultiLineString"===r)for(var i=0;i<e.length;i++)nt(t,e[i])
else if("MultiPolygon"===r)for(i=0;i<e.length;i++)for(var n=0;n<e[i].length;n++)nt(t,e[i][n])}(n),n}function nt(t,e){for(var r=0;r<e.length;r+=3)t.minX=Math.min(t.minX,e[r]),t.minY=Math.min(t.minY,e[r+1]),t.maxX=Math.max(t.maxX,e[r]),t.maxY=Math.max(t.maxY,e[r+1])}function ot(t,e,r,i){if(e.geometry){var n=e.geometry.coordinates,o=e.geometry.type,a=Math.pow(r.tolerance/((1<<r.maxZoom)*r.extent),2),s=[],l=e.id
if(r.promoteId?l=e.properties[r.promoteId]:r.generateId&&(l=i||0),"Point"===o)at(n,s)
else if("MultiPoint"===o)for(var u=0;u<n.length;u++)at(n[u],s)
else if("LineString"===o)st(n,s,a,!1)
else if("MultiLineString"===o){if(r.lineMetrics){for(u=0;u<n.length;u++)s=[],st(n[u],s,a,!1),t.push(it(l,"LineString",s,e.properties))
return}lt(n,s,a,!1)}else if("Polygon"===o)lt(n,s,a,!0)
else{if("MultiPolygon"!==o){if("GeometryCollection"===o){for(u=0;u<e.geometry.geometries.length;u++)ot(t,{id:l,geometry:e.geometry.geometries[u],properties:e.properties},r,i)
return}throw new Error("Input data is not a valid GeoJSON object.")}for(u=0;u<n.length;u++){var c=[]
lt(n[u],c,a,!0),s.push(c)}}t.push(it(l,o,s,e.properties))}}function at(t,e){e.push(ut(t[0])),e.push(ct(t[1])),e.push(0)}function st(t,e,r,i){for(var n,o,a=0,s=0;s<t.length;s++){var l=ut(t[s][0]),u=ct(t[s][1])
e.push(l),e.push(u),e.push(0),s>0&&(a+=i?(n*u-l*o)/2:Math.sqrt(Math.pow(l-n,2)+Math.pow(u-o,2))),n=l,o=u}var c=e.length-3
e[2]=1,function t(e,r,i,n){for(var o,a=n,s=i-r>>1,l=i-r,u=e[r],c=e[r+1],p=e[i],h=e[i+1],f=r+3;f<i;f+=3){var d=rt(e[f],e[f+1],u,c,p,h)
if(d>a)o=f,a=d
else if(d===a){var m=Math.abs(f-s)
m<l&&(o=f,l=m)}}a>n&&(o-r>3&&t(e,r,o,n),e[o+2]=a,i-o>3&&t(e,o,i,n))}(e,0,c,r),e[c+2]=1,e.size=Math.abs(a),e.start=0,e.end=e.size}function lt(t,e,r,i){for(var n=0;n<t.length;n++){var o=[]
st(t[n],o,r,i),e.push(o)}}function ut(t){return t/360+.5}function ct(t){var e=Math.sin(t*Math.PI/180),r=.5-.25*Math.log((1+e)/(1-e))/Math.PI
return r<0?0:r>1?1:r}function pt(t,e,r,i,n,o,a,s){if(i/=e,o>=(r/=e)&&a<i)return t
if(a<r||o>=i)return null
for(var l=[],u=0;u<t.length;u++){var c=t[u],p=c.geometry,h=c.type,f=0===n?c.minX:c.minY,d=0===n?c.maxX:c.maxY
if(f>=r&&d<i)l.push(c)
else if(!(d<r||f>=i)){var m=[]
if("Point"===h||"MultiPoint"===h)ht(p,m,r,i,n)
else if("LineString"===h)ft(p,m,r,i,n,!1,s.lineMetrics)
else if("MultiLineString"===h)mt(p,m,r,i,n,!1)
else if("Polygon"===h)mt(p,m,r,i,n,!0)
else if("MultiPolygon"===h)for(var y=0;y<p.length;y++){var v=[]
mt(p[y],v,r,i,n,!0),v.length&&m.push(v)}if(m.length){if(s.lineMetrics&&"LineString"===h){for(y=0;y<m.length;y++)l.push(it(c.id,h,m[y],c.tags))
continue}"LineString"!==h&&"MultiLineString"!==h||(1===m.length?(h="LineString",m=m[0]):h="MultiLineString"),"Point"!==h&&"MultiPoint"!==h||(h=3===m.length?"Point":"MultiPoint"),l.push(it(c.id,h,m,c.tags))}}}return l.length?l:null}function ht(t,e,r,i,n){for(var o=0;o<t.length;o+=3){var a=t[o+n]
a>=r&&a<=i&&(e.push(t[o]),e.push(t[o+1]),e.push(t[o+2]))}}function ft(t,e,r,i,n,o,a){for(var s,l,u=dt(t),c=0===n?vt:_t,p=t.start,h=0;h<t.length-3;h+=3){var f=t[h],d=t[h+1],m=t[h+2],y=t[h+3],v=t[h+4],_=0===n?f:d,g=0===n?y:v,x=!1
a&&(s=Math.sqrt(Math.pow(f-y,2)+Math.pow(d-v,2))),_<r?g>r&&(l=c(u,f,d,y,v,r),a&&(u.start=p+s*l)):_>i?g<i&&(l=c(u,f,d,y,v,i),a&&(u.start=p+s*l)):yt(u,f,d,m),g<r&&_>=r&&(l=c(u,f,d,y,v,r),x=!0),g>i&&_<=i&&(l=c(u,f,d,y,v,i),x=!0),!o&&x&&(a&&(u.end=p+s*l),e.push(u),u=dt(t)),a&&(p+=s)}var b=t.length-3
f=t[b],d=t[b+1],m=t[b+2],(_=0===n?f:d)>=r&&_<=i&&yt(u,f,d,m),b=u.length-3,o&&b>=3&&(u[b]!==u[0]||u[b+1]!==u[1])&&yt(u,u[0],u[1],u[2]),u.length&&e.push(u)}function dt(t){var e=[]
return e.size=t.size,e.start=t.start,e.end=t.end,e}function mt(t,e,r,i,n,o){for(var a=0;a<t.length;a++)ft(t[a],e,r,i,n,o,!1)}function yt(t,e,r,i){t.push(e),t.push(r),t.push(i)}function vt(t,e,r,i,n,o){var a=(o-e)/(i-e)
return t.push(o),t.push(r+(n-r)*a),t.push(1),a}function _t(t,e,r,i,n,o){var a=(o-r)/(n-r)
return t.push(e+(i-e)*a),t.push(o),t.push(1),a}function gt(t,e){for(var r=[],i=0;i<t.length;i++){var n,o=t[i],a=o.type
if("Point"===a||"MultiPoint"===a||"LineString"===a)n=xt(o.geometry,e)
else if("MultiLineString"===a||"Polygon"===a){n=[]
for(var s=0;s<o.geometry.length;s++)n.push(xt(o.geometry[s],e))}else if("MultiPolygon"===a)for(n=[],s=0;s<o.geometry.length;s++){for(var l=[],u=0;u<o.geometry[s].length;u++)l.push(xt(o.geometry[s][u],e))
n.push(l)}r.push(it(o.id,a,n,o.tags))}return r}function xt(t,e){var r=[]
r.size=t.size,void 0!==t.start&&(r.start=t.start,r.end=t.end)
for(var i=0;i<t.length;i+=3)r.push(t[i]+e,t[i+1],t[i+2])
return r}function bt(t,e){if(t.transformed)return t
var r,i,n,o=1<<t.z,a=t.x,s=t.y
for(r=0;r<t.features.length;r++){var l=t.features[r],u=l.geometry,c=l.type
if(l.geometry=[],1===c)for(i=0;i<u.length;i+=2)l.geometry.push(wt(u[i],u[i+1],e,o,a,s))
else for(i=0;i<u.length;i++){var p=[]
for(n=0;n<u[i].length;n+=2)p.push(wt(u[i][n],u[i][n+1],e,o,a,s))
l.geometry.push(p)}}return t.transformed=!0,t}function wt(t,e,r,i,n,o){return[Math.round(r*(t*i-n)),Math.round(r*(e*i-o))]}function St(t,e,r,i,n){for(var o=e===n.maxZoom?0:n.tolerance/((1<<e)*n.extent),a={features:[],numPoints:0,numSimplified:0,numFeatures:0,source:null,x:r,y:i,z:e,transformed:!1,minX:2,minY:1,maxX:-1,maxY:0},s=0;s<t.length;s++){a.numFeatures++,Et(a,t[s],o,n)
var l=t[s].minX,u=t[s].minY,c=t[s].maxX,p=t[s].maxY
l<a.minX&&(a.minX=l),u<a.minY&&(a.minY=u),c>a.maxX&&(a.maxX=c),p>a.maxY&&(a.maxY=p)}return a}function Et(t,e,r,i){var n=e.geometry,o=e.type,a=[]
if("Point"===o||"MultiPoint"===o)for(var s=0;s<n.length;s+=3)a.push(n[s]),a.push(n[s+1]),t.numPoints++,t.numSimplified++
else if("LineString"===o)Tt(a,n,t,r,!1,!1)
else if("MultiLineString"===o||"Polygon"===o)for(s=0;s<n.length;s++)Tt(a,n[s],t,r,"Polygon"===o,0===s)
else if("MultiPolygon"===o)for(var l=0;l<n.length;l++){var u=n[l]
for(s=0;s<u.length;s++)Tt(a,u[s],t,r,!0,0===s)}if(a.length){var c=e.tags||null
if("LineString"===o&&i.lineMetrics){for(var p in c={},e.tags)c[p]=e.tags[p]
c.mapbox_clip_start=n.start/n.size,c.mapbox_clip_end=n.end/n.size}var h={geometry:a,type:"Polygon"===o||"MultiPolygon"===o?3:"LineString"===o||"MultiLineString"===o?2:1,tags:c}
null!==e.id&&(h.id=e.id),t.features.push(h)}}function Tt(t,e,r,i,n,o){var a=i*i
if(i>0&&e.size<(n?a:i))r.numPoints+=e.length/3
else{for(var s=[],l=0;l<e.length;l+=3)(0===i||e[l+2]>a)&&(r.numSimplified++,s.push(e[l]),s.push(e[l+1])),r.numPoints++
n&&function(t,e){for(var r=0,i=0,n=t.length,o=n-2;i<n;o=i,i+=2)r+=(t[i]-t[o])*(t[i+1]+t[o+1])
if(r>0===e)for(i=0,n=t.length;i<n/2;i+=2){var a=t[i],s=t[i+1]
t[i]=t[n-2-i],t[i+1]=t[n-1-i],t[n-2-i]=a,t[n-1-i]=s}}(s,o),t.push(s)}}function At(t,e){var r=(e=this.options=function(t,e){for(var r in e)t[r]=e[r]
return t}(Object.create(this.options),e)).debug
if(r&&console.time("preprocess data"),e.maxZoom<0||e.maxZoom>24)throw new Error("maxZoom should be in the 0-24 range")
if(e.promoteId&&e.generateId)throw new Error("promoteId and generateId cannot be used together.")
var i=function(t,e){var r=[]
if("FeatureCollection"===t.type)for(var i=0;i<t.features.length;i++)ot(r,t.features[i],e,i)
else"Feature"===t.type?ot(r,t,e):ot(r,{geometry:t},e)
return r}(t,e)
this.tiles={},this.tileCoords=[],r&&(console.timeEnd("preprocess data"),console.log("index: maxZoom: %d, maxPoints: %d",e.indexMaxZoom,e.indexMaxPoints),console.time("generate tiles"),this.stats={},this.total=0),(i=function(t,e){var r=e.buffer/e.extent,i=t,n=pt(t,1,-1-r,r,0,-1,2,e),o=pt(t,1,1-r,2+r,0,-1,2,e)
return(n||o)&&(i=pt(t,1,-r,1+r,0,-1,2,e)||[],n&&(i=gt(n,1).concat(i)),o&&(i=i.concat(gt(o,-1)))),i}(i,e)).length&&this.splitTile(i,0,0,0),r&&(i.length&&console.log("features: %d, points: %d",this.tiles[0].numFeatures,this.tiles[0].numPoints),console.timeEnd("generate tiles"),console.log("tiles generated:",this.total,JSON.stringify(this.stats)))}function It(t,e,r){return 32*((1<<t)*r+e)+t}function kt(t,e){var r=t.tileID.canonical
if(!this._geoJSONIndex)return e(null,null)
var i=this._geoJSONIndex.getTile(r.z,r.x,r.y)
if(!i)return e(null,null)
var n=new S(i.features),o=k(n)
0===o.byteOffset&&o.byteLength===o.buffer.byteLength||(o=new Uint8Array(o)),e(null,{vectorTile:n,rawData:o.buffer})}X.prototype.load=function(t){var e=this.options,r=e.log,i=e.minZoom,n=e.maxZoom,o=e.nodeSize
r&&console.time("total time")
var a="prepare "+t.length+" points"
r&&console.time(a),this.points=t
for(var s=[],l=0;l<t.length;l++)t[l].geometry&&s.push(K(t[l],l))
this.trees[n+1]=new Z(s,tt,et,o,Float32Array),r&&console.timeEnd(a)
for(var u=n;u>=i;u--){var c=+Date.now()
s=this._cluster(s,u),this.trees[u]=new Z(s,tt,et,o,Float32Array),r&&console.log("z%d: %d clusters in %dms",u,s.length,+Date.now()-c)}return r&&console.timeEnd("total time"),this},X.prototype.getClusters=function(t,e){var r=((t[0]+180)%360+360)%360-180,i=Math.max(-90,Math.min(90,t[1])),n=180===t[2]?180:((t[2]+180)%360+360)%360-180,o=Math.max(-90,Math.min(90,t[3]))
if(t[2]-t[0]>=360)r=-180,n=180
else if(r>n){var a=this.getClusters([r,i,180,o],e),s=this.getClusters([-180,i,n,o],e)
return a.concat(s)}for(var l=this.trees[this._limitZoom(e)],u=[],c=0,p=l.range(Y(r),$(o),Y(n),$(i));c<p.length;c+=1){var h=p[c],f=l.points[h]
u.push(f.numPoints?H(f):this.points[f.index])}return u},X.prototype.getChildren=function(t){var e=t>>5,r=t%32,i="No cluster with the specified id.",n=this.trees[r]
if(!n)throw new Error(i)
var o=n.points[e]
if(!o)throw new Error(i)
for(var a=this.options.radius/(this.options.extent*Math.pow(2,r-1)),s=[],l=0,u=n.within(o.x,o.y,a);l<u.length;l+=1){var c=u[l],p=n.points[c]
p.parentId===t&&s.push(p.numPoints?H(p):this.points[p.index])}if(0===s.length)throw new Error(i)
return s},X.prototype.getLeaves=function(t,e,r){e=e||10,r=r||0
var i=[]
return this._appendLeaves(i,t,e,r,0),i},X.prototype.getTile=function(t,e,r){var i=this.trees[this._limitZoom(t)],n=Math.pow(2,t),o=this.options,a=o.extent,s=o.radius/a,l=(r-s)/n,u=(r+1+s)/n,c={features:[]}
return this._addTileFeatures(i.range((e-s)/n,l,(e+1+s)/n,u),i.points,e,r,n,c),0===e&&this._addTileFeatures(i.range(1-s/n,l,1,u),i.points,n,r,n,c),e===n-1&&this._addTileFeatures(i.range(0,l,s/n,u),i.points,-1,r,n,c),c.features.length?c:null},X.prototype.getClusterExpansionZoom=function(t){for(var e=t%32-1;e<=this.options.maxZoom;){var r=this.getChildren(t)
if(e++,1!==r.length)break
t=r[0].properties.cluster_id}return e},X.prototype._appendLeaves=function(t,e,r,i,n){for(var o=0,a=this.getChildren(e);o<a.length;o+=1){var s=a[o],l=s.properties
if(l&&l.cluster?n+l.point_count<=i?n+=l.point_count:n=this._appendLeaves(t,l.cluster_id,r,i,n):n<i?n++:t.push(s),t.length===r)break}return n},X.prototype._addTileFeatures=function(t,e,r,i,n,o){for(var a=0,s=t;a<s.length;a+=1){var l=e[s[a]],u={type:1,geometry:[[Math.round(this.options.extent*(l.x*n-r)),Math.round(this.options.extent*(l.y*n-i))]],tags:l.numPoints?J(l):this.points[l.index].properties},c=l.numPoints?l.id:this.points[l.index].id
void 0!==c&&(u.id=c),o.features.push(u)}},X.prototype._limitZoom=function(t){return Math.max(this.options.minZoom,Math.min(t,this.options.maxZoom+1))},X.prototype._cluster=function(t,e){for(var r=[],i=this.options,n=i.radius,o=i.extent,a=i.reduce,s=n/(o*Math.pow(2,e)),l=0;l<t.length;l++){var u=t[l]
if(!(u.zoom<=e)){u.zoom=e
for(var c=this.trees[e+1],p=c.within(u.x,u.y,s),h=u.numPoints||1,f=u.x*h,d=u.y*h,m=a&&h>1?this._map(u,!0):null,y=(l<<5)+(e+1),v=0,_=p;v<_.length;v+=1){var g=_[v],x=c.points[g]
if(!(x.zoom<=e)){x.zoom=e
var b=x.numPoints||1
f+=x.x*b,d+=x.y*b,h+=b,x.parentId=y,a&&(m||(m=this._map(u,!0)),a(m,this._map(x)))}}1===h?r.push(u):(u.parentId=y,r.push(W(f/h,d/h,y,h,m)))}}return r},X.prototype._map=function(t,e){if(t.numPoints)return e?Q({},t.properties):t.properties
var r=this.points[t.index].properties,i=this.options.map(r)
return e&&i===r?Q({},i):i},At.prototype.options={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,lineMetrics:!1,promoteId:null,generateId:!1,debug:0},At.prototype.splitTile=function(t,e,r,i,n,o,a){for(var s=[t,e,r,i],l=this.options,u=l.debug;s.length;){i=s.pop(),r=s.pop(),e=s.pop(),t=s.pop()
var c=1<<e,p=It(e,r,i),h=this.tiles[p]
if(!h&&(u>1&&console.time("creation"),h=this.tiles[p]=St(t,e,r,i,l),this.tileCoords.push({z:e,x:r,y:i}),u)){u>1&&(console.log("tile z%d-%d-%d (features: %d, points: %d, simplified: %d)",e,r,i,h.numFeatures,h.numPoints,h.numSimplified),console.timeEnd("creation"))
var f="z"+e
this.stats[f]=(this.stats[f]||0)+1,this.total++}if(h.source=t,n){if(e===l.maxZoom||e===n)continue
var d=1<<n-e
if(r!==Math.floor(o/d)||i!==Math.floor(a/d))continue}else if(e===l.indexMaxZoom||h.numPoints<=l.indexMaxPoints)continue
if(h.source=null,0!==t.length){u>1&&console.time("clipping")
var m,y,v,_,g,x,b=.5*l.buffer/l.extent,w=.5-b,S=.5+b,E=1+b
m=y=v=_=null,g=pt(t,c,r-b,r+S,0,h.minX,h.maxX,l),x=pt(t,c,r+w,r+E,0,h.minX,h.maxX,l),t=null,g&&(m=pt(g,c,i-b,i+S,1,h.minY,h.maxY,l),y=pt(g,c,i+w,i+E,1,h.minY,h.maxY,l),g=null),x&&(v=pt(x,c,i-b,i+S,1,h.minY,h.maxY,l),_=pt(x,c,i+w,i+E,1,h.minY,h.maxY,l),x=null),u>1&&console.timeEnd("clipping"),s.push(m||[],e+1,2*r,2*i),s.push(y||[],e+1,2*r,2*i+1),s.push(v||[],e+1,2*r+1,2*i),s.push(_||[],e+1,2*r+1,2*i+1)}}},At.prototype.getTile=function(t,e,r){var i=this.options,n=i.extent,o=i.debug
if(t<0||t>24)return null
var a=1<<t,s=It(t,e=(e%a+a)%a,r)
if(this.tiles[s])return bt(this.tiles[s],n)
o>1&&console.log("drilling down to z%d-%d-%d",t,e,r)
for(var l,u=t,c=e,p=r;!l&&u>0;)u--,c=Math.floor(c/2),p=Math.floor(p/2),l=this.tiles[It(u,c,p)]
return l&&l.source?(o>1&&console.log("found parent tile z%d-%d-%d",u,c,p),o>1&&console.time("drilling down"),this.splitTile(l.source,u,c,p,t,e,r),o>1&&console.timeEnd("drilling down"),this.tiles[s]?bt(this.tiles[s],n):null):null}
var zt=function(e){function r(t,r,i,n){e.call(this,t,r,i,kt),n&&(this.loadGeoJSON=n)}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r.prototype.loadData=function(t,e){this._pendingCallback&&this._pendingCallback(null,{abandoned:!0}),this._pendingCallback=e,this._pendingLoadDataParams=t,this._state&&"Idle"!==this._state?this._state="NeedsLoadData":(this._state="Coalescing",this._loadData())},r.prototype._loadData=function(){var e=this
if(this._pendingCallback&&this._pendingLoadDataParams){var r=this._pendingCallback,i=this._pendingLoadDataParams
delete this._pendingCallback,delete this._pendingLoadDataParams
var n=!!(i&&i.request&&i.request.collectResourceTiming)&&new l.Performance(i.request)
this.loadGeoJSON(i,function(o,a){if(o||!a)return r(o)
if("object"!=typeof a)return r(new Error("Input data given to '"+i.source+"' is not a valid GeoJSON object."))
!function t(e,r){switch(e&&e.type||null){case"FeatureCollection":return e.features=e.features.map(_(t,r)),e
case"GeometryCollection":return e.geometries=e.geometries.map(_(t,r)),e
case"Feature":return e.geometry=t(e.geometry,r),e
case"Polygon":case"MultiPolygon":return function(t,e){return"Polygon"===t.type?t.coordinates=g(t.coordinates,e):"MultiPolygon"===t.type&&(t.coordinates=t.coordinates.map(_(g,e))),t}(e,r)
default:return e}}(a,!0)
try{e._geoJSONIndex=i.cluster?new X(function(e){var r=e.superclusterOptions,i=e.clusterProperties
if(!i||!r)return r
for(var n={},o={},a={accumulated:null,zoom:0},s={properties:null},l=Object.keys(i),u=0,c=l;u<c.length;u+=1){var p=c[u],h=i[p],f=h[0],d=h[1],m=t.createExpression(d),y=t.createExpression("string"==typeof f?[f,["accumulated"],["get",p]]:f)
n[p]=m.value,o[p]=y.value}return r.map=function(t){s.properties=t
for(var e={},r=0,i=l;r<i.length;r+=1){var o=i[r]
e[o]=n[o].evaluate(a,s)}return e},r.reduce=function(t,e){s.properties=e
for(var r=0,i=l;r<i.length;r+=1){var n=i[r]
a.accumulated=t[n],t[n]=o[n].evaluate(a,s)}},r}(i)).load(a.features):new At(a,i.geojsonVtOptions)}catch(o){return r(o)}e.loaded={}
var s={}
if(n){var l=n.finish()
l&&(s.resourceTiming={},s.resourceTiming[i.source]=JSON.parse(JSON.stringify(l)))}r(null,s)})}},r.prototype.coalesce=function(){"Coalescing"===this._state?this._state="Idle":"NeedsLoadData"===this._state&&(this._state="Coalescing",this._loadData())},r.prototype.reloadTile=function(t,r){var i=this.loaded,n=t.uid
return i&&i[n]?e.prototype.reloadTile.call(this,t,r):this.loadTile(t,r)},r.prototype.loadGeoJSON=function(e,r){if(e.request)t.getJSON(e.request,r)
else{if("string"!=typeof e.data)return r(new Error("Input data given to '"+e.source+"' is not a valid GeoJSON object."))
try{return r(null,JSON.parse(e.data))}catch(t){return r(new Error("Input data given to '"+e.source+"' is not a valid GeoJSON object."))}}},r.prototype.removeSource=function(t,e){this._pendingCallback&&this._pendingCallback(null,{abandoned:!0}),e()},r.prototype.getClusterExpansionZoom=function(t,e){e(null,this._geoJSONIndex.getClusterExpansionZoom(t.clusterId))},r.prototype.getClusterChildren=function(t,e){e(null,this._geoJSONIndex.getChildren(t.clusterId))},r.prototype.getClusterLeaves=function(t,e){e(null,this._geoJSONIndex.getLeaves(t.clusterId,t.limit,t.offset))},r}(p),Ct=function(e){var r=this
this.self=e,this.actor=new t.Actor(e,this),this.layerIndexes={},this.availableImages={},this.workerSourceTypes={vector:p,geojson:zt},this.workerSources={},this.demWorkerSources={},this.self.registerWorkerSource=function(t,e){if(r.workerSourceTypes[t])throw new Error('Worker source with name "'+t+'" already registered.')
r.workerSourceTypes[t]=e},this.self.registerRTLTextPlugin=function(e){if(t.plugin.isLoaded())throw new Error("RTL text plugin already registered.")
t.plugin.applyArabicShaping=e.applyArabicShaping,t.plugin.processBidirectionalText=e.processBidirectionalText,t.plugin.processStyledBidirectionalText=e.processStyledBidirectionalText}}
return Ct.prototype.setReferrer=function(t,e){this.referrer=e},Ct.prototype.setImages=function(t,e,r){this.availableImages[t]=e,r()},Ct.prototype.setLayers=function(t,e,r){this.getLayerIndex(t).replace(e),r()},Ct.prototype.updateLayers=function(t,e,r){this.getLayerIndex(t).update(e.layers,e.removedIds),r()},Ct.prototype.loadTile=function(t,e,r){this.getWorkerSource(t,e.type,e.source).loadTile(e,r)},Ct.prototype.loadDEMTile=function(t,e,r){this.getDEMWorkerSource(t,e.source).loadTile(e,r)},Ct.prototype.reloadTile=function(t,e,r){this.getWorkerSource(t,e.type,e.source).reloadTile(e,r)},Ct.prototype.abortTile=function(t,e,r){this.getWorkerSource(t,e.type,e.source).abortTile(e,r)},Ct.prototype.removeTile=function(t,e,r){this.getWorkerSource(t,e.type,e.source).removeTile(e,r)},Ct.prototype.removeDEMTile=function(t,e){this.getDEMWorkerSource(t,e.source).removeTile(e)},Ct.prototype.removeSource=function(t,e,r){if(this.workerSources[t]&&this.workerSources[t][e.type]&&this.workerSources[t][e.type][e.source]){var i=this.workerSources[t][e.type][e.source]
delete this.workerSources[t][e.type][e.source],void 0!==i.removeSource?i.removeSource(e,r):r()}},Ct.prototype.loadWorkerSource=function(t,e,r){try{this.self.importScripts(e.url),r()}catch(t){r(t.toString())}},Ct.prototype.loadRTLTextPlugin=function(e,r,i){try{t.plugin.isLoaded()||(this.self.importScripts(r),i(t.plugin.isLoaded()?null:new Error("RTL Text Plugin failed to import scripts from "+r)))}catch(t){i(t.toString())}},Ct.prototype.getAvailableImages=function(t){var e=this.availableImages[t]
return e||(e=[]),e},Ct.prototype.getLayerIndex=function(t){var e=this.layerIndexes[t]
return e||(e=this.layerIndexes[t]=new i),e},Ct.prototype.getWorkerSource=function(t,e,r){var i=this
if(this.workerSources[t]||(this.workerSources[t]={}),this.workerSources[t][e]||(this.workerSources[t][e]={}),!this.workerSources[t][e][r]){var n={send:function(e,r,n){i.actor.send(e,r,n,t)}}
this.workerSources[t][e][r]=new this.workerSourceTypes[e](n,this.getLayerIndex(t),this.getAvailableImages(t))}return this.workerSources[t][e][r]},Ct.prototype.getDEMWorkerSource=function(t,e){return this.demWorkerSources[t]||(this.demWorkerSources[t]={}),this.demWorkerSources[t][e]||(this.demWorkerSources[t][e]=new h),this.demWorkerSources[t][e]},Ct.prototype.enforceCacheSizeLimit=function(e,r){t.enforceCacheSizeLimit(r)},"undefined"!=typeof WorkerGlobalScope&&void 0!==t.window&&t.window instanceof WorkerGlobalScope&&(t.window.worker=new Ct(t.window)),Ct}),i(0,function(t){var e=t.createCommonjsModule(function(t){function e(t){return!!("undefined"!=typeof window&&"undefined"!=typeof document&&Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray&&Function.prototype&&Function.prototype.bind&&Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions&&"JSON"in window&&"parse"in JSON&&"stringify"in JSON&&function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1
var t,e,r=new Blob([""],{type:"text/javascript"}),i=URL.createObjectURL(r)
try{e=new Worker(i),t=!0}catch(e){t=!1}return e&&e.terminate(),URL.revokeObjectURL(i),t}()&&"Uint8ClampedArray"in window&&ArrayBuffer.isView&&function(t){return void 0===r[t]&&(r[t]=function(t){var r=document.createElement("canvas"),i=Object.create(e.webGLContextAttributes)
return i.failIfMajorPerformanceCaveat=t,r.probablySupportsContext?r.probablySupportsContext("webgl",i)||r.probablySupportsContext("experimental-webgl",i):r.supportsContext?r.supportsContext("webgl",i)||r.supportsContext("experimental-webgl",i):r.getContext("webgl",i)||r.getContext("experimental-webgl",i)}(t)),r[t]}(t&&t.failIfMajorPerformanceCaveat))}t.exports?t.exports=e:window&&(window.mapboxgl=window.mapboxgl||{},window.mapboxgl.supported=e)
var r={}
e.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}}),r={create:function(e,r,i){var n=t.window.document.createElement(e)
return void 0!==r&&(n.className=r),i&&i.appendChild(n),n},createNS:function(e,r){return t.window.document.createElementNS(e,r)}},i=t.window.document.documentElement.style
function n(t){if(!i)return t[0]
for(var e=0;e<t.length;e++)if(t[e]in i)return t[e]
return t[0]}var o,a=n(["userSelect","MozUserSelect","WebkitUserSelect","msUserSelect"])
r.disableDrag=function(){i&&a&&(o=i[a],i[a]="none")},r.enableDrag=function(){i&&a&&(i[a]=o)}
var s=n(["transform","WebkitTransform"])
r.setTransform=function(t,e){t.style[s]=e}
var l=!1
try{var u=Object.defineProperty({},"passive",{get:function(){l=!0}})
t.window.addEventListener("test",u,u),t.window.removeEventListener("test",u,u)}catch(t){l=!1}r.addEventListener=function(t,e,r,i){void 0===i&&(i={}),"passive"in i&&l?t.addEventListener(e,r,i):t.addEventListener(e,r,i.capture)},r.removeEventListener=function(t,e,r,i){void 0===i&&(i={}),"passive"in i&&l?t.removeEventListener(e,r,i):t.removeEventListener(e,r,i.capture)}
var c=function(e){e.preventDefault(),e.stopPropagation(),t.window.removeEventListener("click",c,!0)}
function p(t){var e=t.userImage
return!!(e&&e.render&&e.render())&&(t.data.replace(new Uint8Array(e.data.buffer)),!0)}r.suppressClick=function(){t.window.addEventListener("click",c,!0),t.window.setTimeout(function(){t.window.removeEventListener("click",c,!0)},0)},r.mousePos=function(e,r){var i=e.getBoundingClientRect(),n=t.window.TouchEvent&&r instanceof t.window.TouchEvent?r.touches[0]:r
return new t.Point(n.clientX-i.left-e.clientLeft,n.clientY-i.top-e.clientTop)},r.touchPos=function(e,r){for(var i=e.getBoundingClientRect(),n=[],o="touchend"===r.type?r.changedTouches:r.touches,a=0;a<o.length;a++)n.push(new t.Point(o[a].clientX-i.left-e.clientLeft,o[a].clientY-i.top-e.clientTop))
return n},r.mouseButton=function(e){return void 0!==t.window.InstallTrigger&&2===e.button&&e.ctrlKey&&t.window.navigator.platform.toUpperCase().indexOf("MAC")>=0?0:e.button},r.remove=function(t){t.parentNode&&t.parentNode.removeChild(t)}
var h=function(e){function r(){e.call(this),this.images={},this.updatedImages={},this.callbackDispatchedThisFrame={},this.loaded=!1,this.requestors=[],this.patterns={},this.atlasImage=new t.RGBAImage({width:1,height:1}),this.dirty=!0}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r.prototype.isLoaded=function(){return this.loaded},r.prototype.setLoaded=function(t){if(this.loaded!==t&&(this.loaded=t,t)){for(var e=0,r=this.requestors;e<r.length;e+=1){var i=r[e],n=i.ids,o=i.callback
this._notify(n,o)}this.requestors=[]}},r.prototype.getImage=function(t){return this.images[t]},r.prototype.addImage=function(t,e){this.images[t]=e},r.prototype.updateImage=function(t,e){var r=this.images[t]
e.version=r.version+1,this.images[t]=e,this.updatedImages[t]=!0},r.prototype.removeImage=function(t){var e=this.images[t]
delete this.images[t],delete this.patterns[t],e.userImage&&e.userImage.onRemove&&e.userImage.onRemove()},r.prototype.listImages=function(){return Object.keys(this.images)},r.prototype.getImages=function(t,e){var r=!0
if(!this.isLoaded())for(var i=0,n=t;i<n.length;i+=1){var o=n[i]
this.images[o]||(r=!1)}this.isLoaded()||r?this._notify(t,e):this.requestors.push({ids:t,callback:e})},r.prototype._notify=function(e,r){for(var i={},n=0,o=e;n<o.length;n+=1){var a=o[n]
this.images[a]||this.fire(new t.Event("styleimagemissing",{id:a}))
var s=this.images[a]
s?i[a]={data:s.data.clone(),pixelRatio:s.pixelRatio,sdf:s.sdf,version:s.version,hasRenderCallback:Boolean(s.userImage&&s.userImage.render)}:t.warnOnce('Image "'+a+'" could not be loaded. Please make sure you have added the image with map.addImage() or a "sprite" property in your style. You can provide missing images by listening for the "styleimagemissing" map event.')}r(null,i)},r.prototype.getPixelSize=function(){var t=this.atlasImage
return{width:t.width,height:t.height}},r.prototype.getPattern=function(e){var r=this.patterns[e],i=this.getImage(e)
if(!i)return null
if(r&&r.position.version===i.version)return r.position
if(r)r.position.version=i.version
else{var n={w:i.data.width+2,h:i.data.height+2,x:0,y:0},o=new t.ImagePosition(n,i)
this.patterns[e]={bin:n,position:o}}return this._updatePatternAtlas(),this.patterns[e].position},r.prototype.bind=function(e){var r=e.gl
this.atlasTexture?this.dirty&&(this.atlasTexture.update(this.atlasImage),this.dirty=!1):this.atlasTexture=new t.Texture(e,this.atlasImage,r.RGBA),this.atlasTexture.bind(r.LINEAR,r.CLAMP_TO_EDGE)},r.prototype._updatePatternAtlas=function(){var e=[]
for(var r in this.patterns)e.push(this.patterns[r].bin)
var i=t.potpack(e),n=i.w,o=i.h,a=this.atlasImage
for(var s in a.resize({width:n||1,height:o||1}),this.patterns){var l=this.patterns[s].bin,u=l.x+1,c=l.y+1,p=this.images[s].data,h=p.width,f=p.height
t.RGBAImage.copy(p,a,{x:0,y:0},{x:u,y:c},{width:h,height:f}),t.RGBAImage.copy(p,a,{x:0,y:f-1},{x:u,y:c-1},{width:h,height:1}),t.RGBAImage.copy(p,a,{x:0,y:0},{x:u,y:c+f},{width:h,height:1}),t.RGBAImage.copy(p,a,{x:h-1,y:0},{x:u-1,y:c},{width:1,height:f}),t.RGBAImage.copy(p,a,{x:0,y:0},{x:u+h,y:c},{width:1,height:f})}this.dirty=!0},r.prototype.beginFrame=function(){this.callbackDispatchedThisFrame={}},r.prototype.dispatchRenderCallbacks=function(t){for(var e=0,r=t;e<r.length;e+=1){var i=r[e]
if(!this.callbackDispatchedThisFrame[i]){this.callbackDispatchedThisFrame[i]=!0
var n=this.images[i]
p(n)&&this.updateImage(i,n)}}},r}(t.Evented),f=y,d=y,m=1e20
function y(t,e,r,i,n,o){this.fontSize=t||24,this.buffer=void 0===e?3:e,this.cutoff=i||.25,this.fontFamily=n||"sans-serif",this.fontWeight=o||"normal",this.radius=r||8
var a=this.size=this.fontSize+2*this.buffer
this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=a,this.ctx=this.canvas.getContext("2d"),this.ctx.font=this.fontWeight+" "+this.fontSize+"px "+this.fontFamily,this.ctx.textBaseline="middle",this.ctx.fillStyle="black",this.gridOuter=new Float64Array(a*a),this.gridInner=new Float64Array(a*a),this.f=new Float64Array(a),this.d=new Float64Array(a),this.z=new Float64Array(a+1),this.v=new Int16Array(a),this.middle=Math.round(a/2*(navigator.userAgent.indexOf("Gecko/")>=0?1.2:1))}function v(t,e,r,i,n,o,a){for(var s=0;s<e;s++){for(var l=0;l<r;l++)i[l]=t[l*e+s]
for(_(i,n,o,a,r),l=0;l<r;l++)t[l*e+s]=n[l]}for(l=0;l<r;l++){for(s=0;s<e;s++)i[s]=t[l*e+s]
for(_(i,n,o,a,e),s=0;s<e;s++)t[l*e+s]=Math.sqrt(n[s])}}function _(t,e,r,i,n){r[0]=0,i[0]=-m,i[1]=+m
for(var o=1,a=0;o<n;o++){for(var s=(t[o]+o*o-(t[r[a]]+r[a]*r[a]))/(2*o-2*r[a]);s<=i[a];)a--,s=(t[o]+o*o-(t[r[a]]+r[a]*r[a]))/(2*o-2*r[a])
r[++a]=o,i[a]=s,i[a+1]=+m}for(o=0,a=0;o<n;o++){for(;i[a+1]<o;)a++
e[o]=(o-r[a])*(o-r[a])+t[r[a]]}}y.prototype.draw=function(t){this.ctx.clearRect(0,0,this.size,this.size),this.ctx.fillText(t,this.buffer,this.middle)
for(var e=this.ctx.getImageData(0,0,this.size,this.size),r=new Uint8ClampedArray(this.size*this.size),i=0;i<this.size*this.size;i++){var n=e.data[4*i+3]/255
this.gridOuter[i]=1===n?0:0===n?m:Math.pow(Math.max(0,.5-n),2),this.gridInner[i]=1===n?m:0===n?0:Math.pow(Math.max(0,n-.5),2)}for(v(this.gridOuter,this.size,this.size,this.f,this.d,this.v,this.z),v(this.gridInner,this.size,this.size,this.f,this.d,this.v,this.z),i=0;i<this.size*this.size;i++){var o=this.gridOuter[i]-this.gridInner[i]
r[i]=Math.max(0,Math.min(255,Math.round(255-255*(o/this.radius+this.cutoff))))}return r},f.default=d
var g=function(t,e){this.requestManager=t,this.localIdeographFontFamily=e,this.entries={}}
g.prototype.setURL=function(t){this.url=t},g.prototype.getGlyphs=function(e,r){var i=this,n=[]
for(var o in e)for(var a=0,s=e[o];a<s.length;a+=1){var l=s[a]
n.push({stack:o,id:l})}t.asyncAll(n,function(t,e){var r=t.stack,n=t.id,o=i.entries[r]
o||(o=i.entries[r]={glyphs:{},requests:{}})
var a=o.glyphs[n]
if(void 0===a){if(a=i._tinySDF(o,r,n))return o.glyphs[n]=a,void e(null,{stack:r,id:n,glyph:a})
var s=Math.floor(n/256)
if(256*s>65535)e(new Error("glyphs > 65535 not supported"))
else{var l=o.requests[s]
l||(l=o.requests[s]=[],g.loadGlyphRange(r,s,i.url,i.requestManager,function(t,e){if(e)for(var r in e)i._doesCharSupportLocalGlyph(+r)||(o.glyphs[+r]=e[+r])
for(var n=0,a=l;n<a.length;n+=1)(0,a[n])(t,e)
delete o.requests[s]})),l.push(function(t,i){t?e(t):i&&e(null,{stack:r,id:n,glyph:i[n]||null})})}}else e(null,{stack:r,id:n,glyph:a})},function(t,e){if(t)r(t)
else if(e){for(var i={},n=0,o=e;n<o.length;n+=1){var a=o[n],s=a.stack,l=a.id,u=a.glyph;(i[s]||(i[s]={}))[l]=u&&{id:u.id,bitmap:u.bitmap.clone(),metrics:u.metrics}}r(null,i)}})},g.prototype._doesCharSupportLocalGlyph=function(e){return!!this.localIdeographFontFamily&&(t.isChar["CJK Unified Ideographs"](e)||t.isChar["Hangul Syllables"](e)||t.isChar.Hiragana(e)||t.isChar.Katakana(e))},g.prototype._tinySDF=function(e,r,i){var n=this.localIdeographFontFamily
if(n&&this._doesCharSupportLocalGlyph(i)){var o=e.tinySDF
if(!o){var a="400";/bold/i.test(r)?a="900":/medium/i.test(r)?a="500":/light/i.test(r)&&(a="200"),o=e.tinySDF=new g.TinySDF(24,3,8,.25,n,a)}return{id:i,bitmap:new t.AlphaImage({width:30,height:30},o.draw(String.fromCharCode(i))),metrics:{width:24,height:24,left:0,top:-8,advance:24}}}},g.loadGlyphRange=function(e,r,i,n,o){var a=256*r,s=a+255,l=n.transformRequest(n.normalizeGlyphsURL(i).replace("{fontstack}",e).replace("{range}",a+"-"+s),t.ResourceType.Glyphs)
t.getArrayBuffer(l,function(e,r){if(e)o(e)
else if(r){for(var i={},n=0,a=t.parseGlyphPBF(r);n<a.length;n+=1){var s=a[n]
i[s.id]=s}o(null,i)}})},g.TinySDF=f
var x=function(){this.specification=t.styleSpec.light.position}
x.prototype.possiblyEvaluate=function(e,r){return t.sphericalToCartesian(e.expression.evaluate(r))},x.prototype.interpolate=function(e,r,i){return{x:t.number(e.x,r.x,i),y:t.number(e.y,r.y,i),z:t.number(e.z,r.z,i)}}
var b=new t.Properties({anchor:new t.DataConstantProperty(t.styleSpec.light.anchor),position:new x,color:new t.DataConstantProperty(t.styleSpec.light.color),intensity:new t.DataConstantProperty(t.styleSpec.light.intensity)}),w=function(e){function r(r){e.call(this),this._transitionable=new t.Transitionable(b),this.setLight(r),this._transitioning=this._transitionable.untransitioned()}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r.prototype.getLight=function(){return this._transitionable.serialize()},r.prototype.setLight=function(e,r){if(void 0===r&&(r={}),!this._validate(t.validateLight,e,r))for(var i in e){var n=e[i]
t.endsWith(i,"-transition")?this._transitionable.setTransition(i.slice(0,-"-transition".length),n):this._transitionable.setValue(i,n)}},r.prototype.updateTransitions=function(t){this._transitioning=this._transitionable.transitioned(t,this._transitioning)},r.prototype.hasTransition=function(){return this._transitioning.hasTransition()},r.prototype.recalculate=function(t){this.properties=this._transitioning.possiblyEvaluate(t)},r.prototype._validate=function(e,r,i){return(!i||!1!==i.validate)&&t.emitValidationErrors(this,e.call(t.validateStyle,t.extend({value:r,style:{glyphs:!0,sprite:!0},styleSpec:t.styleSpec})))},r}(t.Evented),S=function(t,e){this.width=t,this.height=e,this.nextRow=0,this.bytes=4,this.data=new Uint8Array(this.width*this.height*this.bytes),this.positions={}}
S.prototype.getDash=function(t,e){var r=t.join(",")+String(e)
return this.positions[r]||(this.positions[r]=this.addDash(t,e)),this.positions[r]},S.prototype.addDash=function(e,r){var i=r?7:0,n=2*i+1
if(this.nextRow+n>this.height)return t.warnOnce("LineAtlas out of space"),null
for(var o=0,a=0;a<e.length;a++)o+=e[a]
for(var s=this.width/o,l=s/2,u=e.length%2==1,c=-i;c<=i;c++)for(var p=this.nextRow+i+c,h=this.width*p,f=u?-e[e.length-1]:0,d=e[0],m=1,y=0;y<this.width;y++){for(;d<y/s;)f=d,d+=e[m],u&&m===e.length-1&&(d+=e[0]),m++
var v=Math.abs(y-f*s),_=Math.abs(y-d*s),g=Math.min(v,_),x=m%2==1,b=void 0
if(r){var w=i?c/i*(l+1):0
if(x){var S=l-Math.abs(w)
b=Math.sqrt(g*g+S*S)}else b=l-Math.sqrt(g*g+w*w)}else b=(x?1:-1)*g
this.data[3+4*(h+y)]=Math.max(0,Math.min(255,b+128))}var E={y:(this.nextRow+i+.5)/this.height,height:2*i/this.height,width:o}
return this.nextRow+=n,this.dirty=!0,E},S.prototype.bind=function(t){var e=t.gl
this.texture?(e.bindTexture(e.TEXTURE_2D,this.texture),this.dirty&&(this.dirty=!1,e.texSubImage2D(e.TEXTURE_2D,0,0,0,this.width,this.height,e.RGBA,e.UNSIGNED_BYTE,this.data))):(this.texture=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.texture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,this.width,this.height,0,e.RGBA,e.UNSIGNED_BYTE,this.data))}
var E=function e(r,i){this.workerPool=r,this.actors=[],this.currentActor=0,this.id=t.uniqueId()
for(var n=this.workerPool.acquire(this.id),o=0;o<n.length;o++){var a=n[o],s=new e.Actor(a,i,this.id)
s.name="Worker "+o,this.actors.push(s)}}
function T(e,r,i){var n=function(n,o){if(n)return i(n)
if(o){var a=t.pick(t.extend(o,e),["tiles","minzoom","maxzoom","attribution","mapbox_logo","bounds","scheme","tileSize","encoding"])
o.vector_layers&&(a.vectorLayers=o.vector_layers,a.vectorLayerIds=a.vectorLayers.map(function(t){return t.id})),e.url&&(a.tiles=r.canonicalizeTileset(a,e.url)),i(null,a)}}
return e.url?t.getJSON(r.transformRequest(r.normalizeSourceURL(e.url),t.ResourceType.Source),n):t.browser.frame(function(){return n(null,e)})}E.prototype.broadcast=function(e,r,i){i=i||function(){},t.asyncAll(this.actors,function(t,i){t.send(e,r,i)},i)},E.prototype.getActor=function(){return this.currentActor=(this.currentActor+1)%this.actors.length,this.actors[this.currentActor]},E.prototype.remove=function(){this.actors.forEach(function(t){t.remove()}),this.actors=[],this.workerPool.release(this.id)},E.Actor=t.Actor
var A=function(e,r,i){this.bounds=t.LngLatBounds.convert(this.validateBounds(e)),this.minzoom=r||0,this.maxzoom=i||24}
A.prototype.validateBounds=function(t){return Array.isArray(t)&&4===t.length?[Math.max(-180,t[0]),Math.max(-90,t[1]),Math.min(180,t[2]),Math.min(90,t[3])]:[-180,-90,180,90]},A.prototype.contains=function(e){var r=Math.pow(2,e.z),i=Math.floor(t.mercatorXfromLng(this.bounds.getWest())*r),n=Math.floor(t.mercatorYfromLat(this.bounds.getNorth())*r),o=Math.ceil(t.mercatorXfromLng(this.bounds.getEast())*r),a=Math.ceil(t.mercatorYfromLat(this.bounds.getSouth())*r)
return e.x>=i&&e.x<o&&e.y>=n&&e.y<a}
var I=function(e){function r(r,i,n,o){if(e.call(this),this.id=r,this.dispatcher=n,this.type="vector",this.minzoom=0,this.maxzoom=22,this.scheme="xyz",this.tileSize=512,this.reparseOverscaled=!0,this.isTileClipped=!0,this._loaded=!1,t.extend(this,t.pick(i,["url","scheme","tileSize"])),this._options=t.extend({type:"vector"},i),this._collectResourceTiming=i.collectResourceTiming,512!==this.tileSize)throw new Error("vector tile sources must have a tileSize of 512")
this.setEventedParent(o)}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r.prototype.load=function(){var e=this
this._loaded=!1,this.fire(new t.Event("dataloading",{dataType:"source"})),this._tileJSONRequest=T(this._options,this.map._requestManager,function(r,i){e._tileJSONRequest=null,e._loaded=!0,r?e.fire(new t.ErrorEvent(r)):i&&(t.extend(e,i),i.bounds&&(e.tileBounds=new A(i.bounds,e.minzoom,e.maxzoom)),t.postTurnstileEvent(i.tiles,e.map._requestManager._customAccessToken),t.postMapLoadEvent(i.tiles,e.map._getMapId(),e.map._requestManager._skuToken,e.map._requestManager._customAccessToken),e.fire(new t.Event("data",{dataType:"source",sourceDataType:"metadata"})),e.fire(new t.Event("data",{dataType:"source",sourceDataType:"content"})))})},r.prototype.loaded=function(){return this._loaded},r.prototype.hasTile=function(t){return!this.tileBounds||this.tileBounds.contains(t.canonical)},r.prototype.onAdd=function(t){this.map=t,this.load()},r.prototype.onRemove=function(){this._tileJSONRequest&&(this._tileJSONRequest.cancel(),this._tileJSONRequest=null)},r.prototype.serialize=function(){return t.extend({},this._options)},r.prototype.loadTile=function(e,r){var i=this.map._requestManager.normalizeTileURL(e.tileID.canonical.url(this.tiles,this.scheme),this.url,null),n={request:this.map._requestManager.transformRequest(i,t.ResourceType.Tile),uid:e.uid,tileID:e.tileID,zoom:e.tileID.overscaledZ,tileSize:this.tileSize*e.tileID.overscaleFactor(),type:this.type,source:this.id,pixelRatio:t.browser.devicePixelRatio,showCollisionBoxes:this.map.showCollisionBoxes}
function o(i,n){return delete e.request,e.aborted?r(null):i&&404!==i.status?r(i):(n&&n.resourceTiming&&(e.resourceTiming=n.resourceTiming),this.map._refreshExpiredTiles&&n&&e.setExpiryData(n),e.loadVectorData(n,this.map.painter),t.cacheEntryPossiblyAdded(this.dispatcher),r(null),void(e.reloadCallback&&(this.loadTile(e,e.reloadCallback),e.reloadCallback=null)))}n.request.collectResourceTiming=this._collectResourceTiming,e.actor&&"expired"!==e.state?"loading"===e.state?e.reloadCallback=r:e.request=e.actor.send("reloadTile",n,o.bind(this)):(e.actor=this.dispatcher.getActor(),e.request=e.actor.send("loadTile",n,o.bind(this)))},r.prototype.abortTile=function(t){t.request&&(t.request.cancel(),delete t.request),t.actor&&t.actor.send("abortTile",{uid:t.uid,type:this.type,source:this.id},void 0)},r.prototype.unloadTile=function(t){t.unloadVectorData(),t.actor&&t.actor.send("removeTile",{uid:t.uid,type:this.type,source:this.id},void 0)},r.prototype.hasTransition=function(){return!1},r}(t.Evented),k=function(e){function r(r,i,n,o){e.call(this),this.id=r,this.dispatcher=n,this.setEventedParent(o),this.type="raster",this.minzoom=0,this.maxzoom=22,this.roundZoom=!0,this.scheme="xyz",this.tileSize=512,this._loaded=!1,this._options=t.extend({type:"raster"},i),t.extend(this,t.pick(i,["url","scheme","tileSize"]))}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r.prototype.load=function(){var e=this
this._loaded=!1,this.fire(new t.Event("dataloading",{dataType:"source"})),this._tileJSONRequest=T(this._options,this.map._requestManager,function(r,i){e._tileJSONRequest=null,e._loaded=!0,r?e.fire(new t.ErrorEvent(r)):i&&(t.extend(e,i),i.bounds&&(e.tileBounds=new A(i.bounds,e.minzoom,e.maxzoom)),t.postTurnstileEvent(i.tiles),t.postMapLoadEvent(i.tiles,e.map._getMapId(),e.map._requestManager._skuToken),e.fire(new t.Event("data",{dataType:"source",sourceDataType:"metadata"})),e.fire(new t.Event("data",{dataType:"source",sourceDataType:"content"})))})},r.prototype.loaded=function(){return this._loaded},r.prototype.onAdd=function(t){this.map=t,this.load()},r.prototype.onRemove=function(){this._tileJSONRequest&&(this._tileJSONRequest.cancel(),this._tileJSONRequest=null)},r.prototype.serialize=function(){return t.extend({},this._options)},r.prototype.hasTile=function(t){return!this.tileBounds||this.tileBounds.contains(t.canonical)},r.prototype.loadTile=function(e,r){var i=this,n=this.map._requestManager.normalizeTileURL(e.tileID.canonical.url(this.tiles,this.scheme),this.url,this.tileSize)
e.request=t.getImage(this.map._requestManager.transformRequest(n,t.ResourceType.Tile),function(n,o){if(delete e.request,e.aborted)e.state="unloaded",r(null)
else if(n)e.state="errored",r(n)
else if(o){i.map._refreshExpiredTiles&&e.setExpiryData(o),delete o.cacheControl,delete o.expires
var a=i.map.painter.context,s=a.gl
e.texture=i.map.painter.getTileTexture(o.width),e.texture?e.texture.update(o,{useMipmap:!0}):(e.texture=new t.Texture(a,o,s.RGBA,{useMipmap:!0}),e.texture.bind(s.LINEAR,s.CLAMP_TO_EDGE,s.LINEAR_MIPMAP_NEAREST),a.extTextureFilterAnisotropic&&s.texParameterf(s.TEXTURE_2D,a.extTextureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT,a.extTextureFilterAnisotropicMax)),e.state="loaded",t.cacheEntryPossiblyAdded(i.dispatcher),r(null)}})},r.prototype.abortTile=function(t,e){t.request&&(t.request.cancel(),delete t.request),e()},r.prototype.unloadTile=function(t,e){t.texture&&this.map.painter.saveTileTexture(t.texture),e()},r.prototype.hasTransition=function(){return!1},r}(t.Evented),z=function(e){function r(r,i,n,o){e.call(this,r,i,n,o),this.type="raster-dem",this.maxzoom=22,this._options=t.extend({type:"raster-dem"},i),this.encoding=i.encoding||"mapbox"}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r.prototype.serialize=function(){return{type:"raster-dem",url:this.url,tileSize:this.tileSize,tiles:this.tiles,bounds:this.bounds,encoding:this.encoding}},r.prototype.loadTile=function(e,r){var i=this.map._requestManager.normalizeTileURL(e.tileID.canonical.url(this.tiles,this.scheme),this.url,this.tileSize)
e.request=t.getImage(this.map._requestManager.transformRequest(i,t.ResourceType.Tile),function(i,n){if(delete e.request,e.aborted)e.state="unloaded",r(null)
else if(i)e.state="errored",r(i)
else if(n){this.map._refreshExpiredTiles&&e.setExpiryData(n),delete n.cacheControl,delete n.expires
var o=t.browser.getImageData(n,1),a={uid:e.uid,coord:e.tileID,source:this.id,rawImageData:o,encoding:this.encoding}
e.actor&&"expired"!==e.state||(e.actor=this.dispatcher.getActor(),e.actor.send("loadDEMTile",a,function(t,i){t&&(e.state="errored",r(t)),i&&(e.dem=i,e.needsHillshadePrepare=!0,e.state="loaded",r(null))}.bind(this)))}}.bind(this)),e.neighboringTiles=this._getNeighboringTiles(e.tileID)},r.prototype._getNeighboringTiles=function(e){var r=e.canonical,i=Math.pow(2,r.z),n=(r.x-1+i)%i,o=0===r.x?e.wrap-1:e.wrap,a=(r.x+1+i)%i,s=r.x+1===i?e.wrap+1:e.wrap,l={}
return l[new t.OverscaledTileID(e.overscaledZ,o,r.z,n,r.y).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,s,r.z,a,r.y).key]={backfilled:!1},r.y>0&&(l[new t.OverscaledTileID(e.overscaledZ,o,r.z,n,r.y-1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,e.wrap,r.z,r.x,r.y-1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,s,r.z,a,r.y-1).key]={backfilled:!1}),r.y+1<i&&(l[new t.OverscaledTileID(e.overscaledZ,o,r.z,n,r.y+1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,e.wrap,r.z,r.x,r.y+1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,s,r.z,a,r.y+1).key]={backfilled:!1}),l},r.prototype.unloadTile=function(t){t.demTexture&&this.map.painter.saveTileTexture(t.demTexture),t.fbo&&(t.fbo.destroy(),delete t.fbo),t.dem&&delete t.dem,delete t.neighboringTiles,t.state="unloaded",t.actor&&t.actor.send("removeDEMTile",{uid:t.uid,source:this.id})},r}(k),C=function(e){function r(r,i,n,o){e.call(this),this.id=r,this.type="geojson",this.minzoom=0,this.maxzoom=18,this.tileSize=512,this.isTileClipped=!0,this.reparseOverscaled=!0,this._removed=!1,this._loaded=!1,this.actor=n.getActor(),this.setEventedParent(o),this._data=i.data,this._options=t.extend({},i),this._collectResourceTiming=i.collectResourceTiming,this._resourceTiming=[],void 0!==i.maxzoom&&(this.maxzoom=i.maxzoom),i.type&&(this.type=i.type),i.attribution&&(this.attribution=i.attribution)
var a=t.EXTENT/this.tileSize
this.workerOptions=t.extend({source:this.id,cluster:i.cluster||!1,geojsonVtOptions:{buffer:(void 0!==i.buffer?i.buffer:128)*a,tolerance:(void 0!==i.tolerance?i.tolerance:.375)*a,extent:t.EXTENT,maxZoom:this.maxzoom,lineMetrics:i.lineMetrics||!1,generateId:i.generateId||!1},superclusterOptions:{maxZoom:void 0!==i.clusterMaxZoom?Math.min(i.clusterMaxZoom,this.maxzoom-1):this.maxzoom-1,extent:t.EXTENT,radius:(i.clusterRadius||50)*a,log:!1},clusterProperties:i.clusterProperties},i.workerOptions)}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r.prototype.load=function(){var e=this
this.fire(new t.Event("dataloading",{dataType:"source"})),this._updateWorkerData(function(r){if(r)e.fire(new t.ErrorEvent(r))
else{var i={dataType:"source",sourceDataType:"metadata"}
e._collectResourceTiming&&e._resourceTiming&&e._resourceTiming.length>0&&(i.resourceTiming=e._resourceTiming,e._resourceTiming=[]),e.fire(new t.Event("data",i))}})},r.prototype.onAdd=function(t){this.map=t,this.load()},r.prototype.setData=function(e){var r=this
return this._data=e,this.fire(new t.Event("dataloading",{dataType:"source"})),this._updateWorkerData(function(e){if(e)r.fire(new t.ErrorEvent(e))
else{var i={dataType:"source",sourceDataType:"content"}
r._collectResourceTiming&&r._resourceTiming&&r._resourceTiming.length>0&&(i.resourceTiming=r._resourceTiming,r._resourceTiming=[]),r.fire(new t.Event("data",i))}}),this},r.prototype.getClusterExpansionZoom=function(t,e){return this.actor.send("geojson.getClusterExpansionZoom",{clusterId:t,source:this.id},e),this},r.prototype.getClusterChildren=function(t,e){return this.actor.send("geojson.getClusterChildren",{clusterId:t,source:this.id},e),this},r.prototype.getClusterLeaves=function(t,e,r,i){return this.actor.send("geojson.getClusterLeaves",{source:this.id,clusterId:t,limit:e,offset:r},i),this},r.prototype._updateWorkerData=function(e){var r=this
this._loaded=!1
var i=t.extend({},this.workerOptions),n=this._data
"string"==typeof n?(i.request=this.map._requestManager.transformRequest(t.browser.resolveURL(n),t.ResourceType.Source),i.request.collectResourceTiming=this._collectResourceTiming):i.data=JSON.stringify(n),this.actor.send(this.type+".loadData",i,function(t,n){r._removed||n&&n.abandoned||(r._loaded=!0,n&&n.resourceTiming&&n.resourceTiming[r.id]&&(r._resourceTiming=n.resourceTiming[r.id].slice(0)),r.actor.send(r.type+".coalesce",{source:i.source},null),e(t))})},r.prototype.loaded=function(){return this._loaded},r.prototype.loadTile=function(e,r){var i=this,n=e.actor?"reloadTile":"loadTile"
e.actor=this.actor
var o={type:this.type,uid:e.uid,tileID:e.tileID,zoom:e.tileID.overscaledZ,maxZoom:this.maxzoom,tileSize:this.tileSize,source:this.id,pixelRatio:t.browser.devicePixelRatio,showCollisionBoxes:this.map.showCollisionBoxes}
e.request=this.actor.send(n,o,function(t,o){return delete e.request,e.unloadVectorData(),e.aborted?r(null):t?r(t):(e.loadVectorData(o,i.map.painter,"reloadTile"===n),r(null))})},r.prototype.abortTile=function(t){t.request&&(t.request.cancel(),delete t.request),t.aborted=!0},r.prototype.unloadTile=function(t){t.unloadVectorData(),this.actor.send("removeTile",{uid:t.uid,type:this.type,source:this.id})},r.prototype.onRemove=function(){this._removed=!0,this.actor.send("removeSource",{type:this.type,source:this.id})},r.prototype.serialize=function(){return t.extend({},this._options,{type:this.type,data:this._data})},r.prototype.hasTransition=function(){return!1},r}(t.Evented),P=function(e){function r(t,r,i,n){e.call(this),this.id=t,this.dispatcher=i,this.coordinates=r.coordinates,this.type="image",this.minzoom=0,this.maxzoom=22,this.tileSize=512,this.tiles={},this._loaded=!1,this.setEventedParent(n),this.options=r}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r.prototype.load=function(e,r){var i=this
this._loaded=!1,this.fire(new t.Event("dataloading",{dataType:"source"})),this.url=this.options.url,t.getImage(this.map._requestManager.transformRequest(this.url,t.ResourceType.Image),function(n,o){i._loaded=!0,n?i.fire(new t.ErrorEvent(n)):o&&(i.image=o,e&&(i.coordinates=e),r&&r(),i._finishLoading())})},r.prototype.loaded=function(){return this._loaded},r.prototype.updateImage=function(t){var e=this
return this.image&&t.url?(this.options.url=t.url,this.load(t.coordinates,function(){e.texture=null}),this):this},r.prototype._finishLoading=function(){this.map&&(this.setCoordinates(this.coordinates),this.fire(new t.Event("data",{dataType:"source",sourceDataType:"metadata"})))},r.prototype.onAdd=function(t){this.map=t,this.load()},r.prototype.setCoordinates=function(e){var r=this
this.coordinates=e
var i=e.map(t.MercatorCoordinate.fromLngLat)
this.tileID=function(e){for(var r=1/0,i=1/0,n=-1/0,o=-1/0,a=0,s=e;a<s.length;a+=1){var l=s[a]
r=Math.min(r,l.x),i=Math.min(i,l.y),n=Math.max(n,l.x),o=Math.max(o,l.y)}var u=n-r,c=o-i,p=Math.max(u,c),h=Math.max(0,Math.floor(-Math.log(p)/Math.LN2)),f=Math.pow(2,h)
return new t.CanonicalTileID(h,Math.floor((r+n)/2*f),Math.floor((i+o)/2*f))}(i),this.minzoom=this.maxzoom=this.tileID.z
var n=i.map(function(t){return r.tileID.getTilePoint(t)._round()})
return this._boundsArray=new t.StructArrayLayout4i8,this._boundsArray.emplaceBack(n[0].x,n[0].y,0,0),this._boundsArray.emplaceBack(n[1].x,n[1].y,t.EXTENT,0),this._boundsArray.emplaceBack(n[3].x,n[3].y,0,t.EXTENT),this._boundsArray.emplaceBack(n[2].x,n[2].y,t.EXTENT,t.EXTENT),this.boundsBuffer&&(this.boundsBuffer.destroy(),delete this.boundsBuffer),this.fire(new t.Event("data",{dataType:"source",sourceDataType:"content"})),this},r.prototype.prepare=function(){if(0!==Object.keys(this.tiles).length&&this.image){var e=this.map.painter.context,r=e.gl
for(var i in this.boundsBuffer||(this.boundsBuffer=e.createVertexBuffer(this._boundsArray,t.rasterBoundsAttributes.members)),this.boundsSegments||(this.boundsSegments=t.SegmentVector.simpleSegment(0,0,4,2)),this.texture||(this.texture=new t.Texture(e,this.image,r.RGBA),this.texture.bind(r.LINEAR,r.CLAMP_TO_EDGE)),this.tiles){var n=this.tiles[i]
"loaded"!==n.state&&(n.state="loaded",n.texture=this.texture)}}},r.prototype.loadTile=function(t,e){this.tileID&&this.tileID.equals(t.tileID.canonical)?(this.tiles[String(t.tileID.wrap)]=t,t.buckets={},e(null)):(t.state="errored",e(null))},r.prototype.serialize=function(){return{type:"image",url:this.options.url,coordinates:this.coordinates}},r.prototype.hasTransition=function(){return!1},r}(t.Evented),M=function(e){function r(t,r,i,n){e.call(this,t,r,i,n),this.roundZoom=!0,this.type="video",this.options=r}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r.prototype.load=function(){var e=this
this._loaded=!1
var r=this.options
this.urls=[]
for(var i=0,n=r.urls;i<n.length;i+=1){var o=n[i]
this.urls.push(this.map._requestManager.transformRequest(o,t.ResourceType.Source).url)}t.getVideo(this.urls,function(r,i){e._loaded=!0,r?e.fire(new t.ErrorEvent(r)):i&&(e.video=i,e.video.loop=!0,e.video.addEventListener("playing",function(){e.map.triggerRepaint()}),e.map&&e.video.play(),e._finishLoading())})},r.prototype.pause=function(){this.video&&this.video.pause()},r.prototype.play=function(){this.video&&this.video.play()},r.prototype.seek=function(e){if(this.video){var r=this.video.seekable
e<r.start(0)||e>r.end(0)?this.fire(new t.ErrorEvent(new t.ValidationError("Playback for this video can be set only between the "+r.start(0)+" and "+r.end(0)+"-second mark."))):this.video.currentTime=e}},r.prototype.getVideo=function(){return this.video},r.prototype.onAdd=function(t){this.map||(this.map=t,this.load(),this.video&&(this.video.play(),this.setCoordinates(this.coordinates)))},r.prototype.prepare=function(){if(!(0===Object.keys(this.tiles).length||this.video.readyState<2)){var e=this.map.painter.context,r=e.gl
for(var i in this.boundsBuffer||(this.boundsBuffer=e.createVertexBuffer(this._boundsArray,t.rasterBoundsAttributes.members)),this.boundsSegments||(this.boundsSegments=t.SegmentVector.simpleSegment(0,0,4,2)),this.texture?this.video.paused||(this.texture.bind(r.LINEAR,r.CLAMP_TO_EDGE),r.texSubImage2D(r.TEXTURE_2D,0,0,0,r.RGBA,r.UNSIGNED_BYTE,this.video)):(this.texture=new t.Texture(e,this.video,r.RGBA),this.texture.bind(r.LINEAR,r.CLAMP_TO_EDGE)),this.tiles){var n=this.tiles[i]
"loaded"!==n.state&&(n.state="loaded",n.texture=this.texture)}}},r.prototype.serialize=function(){return{type:"video",urls:this.urls,coordinates:this.coordinates}},r.prototype.hasTransition=function(){return this.video&&!this.video.paused},r}(P),L=function(e){function r(r,i,n,o){e.call(this,r,i,n,o),i.coordinates?Array.isArray(i.coordinates)&&4===i.coordinates.length&&!i.coordinates.some(function(t){return!Array.isArray(t)||2!==t.length||t.some(function(t){return"number"!=typeof t})})||this.fire(new t.ErrorEvent(new t.ValidationError("sources."+r,null,'"coordinates" property must be an array of 4 longitude/latitude array pairs'))):this.fire(new t.ErrorEvent(new t.ValidationError("sources."+r,null,'missing required property "coordinates"'))),i.animate&&"boolean"!=typeof i.animate&&this.fire(new t.ErrorEvent(new t.ValidationError("sources."+r,null,'optional "animate" property must be a boolean value'))),i.canvas?"string"==typeof i.canvas||i.canvas instanceof t.window.HTMLCanvasElement||this.fire(new t.ErrorEvent(new t.ValidationError("sources."+r,null,'"canvas" must be either a string representing the ID of the canvas element from which to read, or an HTMLCanvasElement instance'))):this.fire(new t.ErrorEvent(new t.ValidationError("sources."+r,null,'missing required property "canvas"'))),this.options=i,this.animate=void 0===i.animate||i.animate}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r.prototype.load=function(){this._loaded=!0,this.canvas||(this.canvas=this.options.canvas instanceof t.window.HTMLCanvasElement?this.options.canvas:t.window.document.getElementById(this.options.canvas)),this.width=this.canvas.width,this.height=this.canvas.height,this._hasInvalidDimensions()?this.fire(new t.ErrorEvent(new Error("Canvas dimensions cannot be less than or equal to zero."))):(this.play=function(){this._playing=!0,this.map.triggerRepaint()},this.pause=function(){this._playing&&(this.prepare(),this._playing=!1)},this._finishLoading())},r.prototype.getCanvas=function(){return this.canvas},r.prototype.onAdd=function(t){this.map=t,this.load(),this.canvas&&this.animate&&this.play()},r.prototype.onRemove=function(){this.pause()},r.prototype.prepare=function(){var e=!1
if(this.canvas.width!==this.width&&(this.width=this.canvas.width,e=!0),this.canvas.height!==this.height&&(this.height=this.canvas.height,e=!0),!this._hasInvalidDimensions()&&0!==Object.keys(this.tiles).length){var r=this.map.painter.context,i=r.gl
for(var n in this.boundsBuffer||(this.boundsBuffer=r.createVertexBuffer(this._boundsArray,t.rasterBoundsAttributes.members)),this.boundsSegments||(this.boundsSegments=t.SegmentVector.simpleSegment(0,0,4,2)),this.texture?(e||this._playing)&&this.texture.update(this.canvas,{premultiply:!0}):this.texture=new t.Texture(r,this.canvas,i.RGBA,{premultiply:!0}),this.tiles){var o=this.tiles[n]
"loaded"!==o.state&&(o.state="loaded",o.texture=this.texture)}}},r.prototype.serialize=function(){return{type:"canvas",coordinates:this.coordinates}},r.prototype.hasTransition=function(){return this._playing},r.prototype._hasInvalidDimensions=function(){for(var t=0,e=[this.canvas.width,this.canvas.height];t<e.length;t+=1){var r=e[t]
if(isNaN(r)||r<=0)return!0}return!1},r}(P),D={vector:I,raster:k,"raster-dem":z,geojson:C,video:M,image:P,canvas:L},B=function(e,r,i,n){var o=new D[r.type](e,r,i,n)
if(o.id!==e)throw new Error("Expected Source id to be "+e+" instead of "+o.id)
return t.bindAll(["load","abort","unload","serialize","prepare"],o),o}
function R(e,r){var i=t.identity([])
return t.translate(i,i,[1,1,0]),t.scale(i,i,[.5*e.width,.5*e.height,1]),t.multiply(i,i,e.calculatePosMatrix(r.toUnwrapped()))}function F(t,e,r,i,n){var o=function(t,e,r){if(t)for(var i=0,n=t;i<n.length;i+=1){var o=e[n[i]]
if(o&&o.source===r&&"fill-extrusion"===o.type)return!0}else for(var a in e){var s=e[a]
if(s.source===r&&"fill-extrusion"===s.type)return!0}return!1}(i&&i.layers,e,t.id),a=n.maxPitchScaleFactor(),s=t.tilesIn(r,a,o)
s.sort(O)
for(var l=[],u=0,c=s;u<c.length;u+=1){var p=c[u]
l.push({wrappedTileID:p.tileID.wrapped().key,queryResults:p.tile.queryRenderedFeatures(e,t._state,p.queryGeometry,p.cameraQueryGeometry,p.scale,i,n,a,R(t.transform,p.tileID))})}var h=function(t){for(var e={},r={},i=0,n=t;i<n.length;i+=1){var o=n[i],a=o.queryResults,s=o.wrappedTileID,l=r[s]=r[s]||{}
for(var u in a)for(var c=a[u],p=l[u]=l[u]||{},h=e[u]=e[u]||[],f=0,d=c;f<d.length;f+=1){var m=d[f]
p[m.featureIndex]||(p[m.featureIndex]=!0,h.push(m))}}return e}(l)
for(var f in h)h[f].forEach(function(e){var r=e.feature,i=t.getFeatureState(r.layer["source-layer"],r.id)
r.source=r.layer.source,r.layer["source-layer"]&&(r.sourceLayer=r.layer["source-layer"]),r.state=i})
return h}function O(t,e){var r=t.tileID,i=e.tileID
return r.overscaledZ-i.overscaledZ||r.canonical.y-i.canonical.y||r.wrap-i.wrap||r.canonical.x-i.canonical.x}var U=function(t,e){this.max=t,this.onRemove=e,this.reset()}
U.prototype.reset=function(){for(var t in this.data)for(var e=0,r=this.data[t];e<r.length;e+=1){var i=r[e]
i.timeout&&clearTimeout(i.timeout),this.onRemove(i.value)}return this.data={},this.order=[],this},U.prototype.add=function(t,e,r){var i=this,n=t.wrapped().key
void 0===this.data[n]&&(this.data[n]=[])
var o={value:e,timeout:void 0}
if(void 0!==r&&(o.timeout=setTimeout(function(){i.remove(t,o)},r)),this.data[n].push(o),this.order.push(n),this.order.length>this.max){var a=this._getAndRemoveByKey(this.order[0])
a&&this.onRemove(a)}return this},U.prototype.has=function(t){return t.wrapped().key in this.data},U.prototype.getAndRemove=function(t){return this.has(t)?this._getAndRemoveByKey(t.wrapped().key):null},U.prototype._getAndRemoveByKey=function(t){var e=this.data[t].shift()
return e.timeout&&clearTimeout(e.timeout),0===this.data[t].length&&delete this.data[t],this.order.splice(this.order.indexOf(t),1),e.value},U.prototype.get=function(t){return this.has(t)?this.data[t.wrapped().key][0].value:null},U.prototype.remove=function(t,e){if(!this.has(t))return this
var r=t.wrapped().key,i=void 0===e?0:this.data[r].indexOf(e),n=this.data[r][i]
return this.data[r].splice(i,1),n.timeout&&clearTimeout(n.timeout),0===this.data[r].length&&delete this.data[r],this.onRemove(n.value),this.order.splice(this.order.indexOf(r),1),this},U.prototype.setMaxSize=function(t){for(this.max=t;this.order.length>this.max;){var e=this._getAndRemoveByKey(this.order[0])
e&&this.onRemove(e)}return this}
var V=function(t,e,r){this.context=t
var i=t.gl
this.buffer=i.createBuffer(),this.dynamicDraw=Boolean(r),this.context.unbindVAO(),t.bindElementBuffer.set(this.buffer),i.bufferData(i.ELEMENT_ARRAY_BUFFER,e.arrayBuffer,this.dynamicDraw?i.DYNAMIC_DRAW:i.STATIC_DRAW),this.dynamicDraw||delete e.arrayBuffer}
V.prototype.bind=function(){this.context.bindElementBuffer.set(this.buffer)},V.prototype.updateData=function(t){var e=this.context.gl
this.context.unbindVAO(),this.bind(),e.bufferSubData(e.ELEMENT_ARRAY_BUFFER,0,t.arrayBuffer)},V.prototype.destroy=function(){var t=this.context.gl
this.buffer&&(t.deleteBuffer(this.buffer),delete this.buffer)}
var N={Int8:"BYTE",Uint8:"UNSIGNED_BYTE",Int16:"SHORT",Uint16:"UNSIGNED_SHORT",Int32:"INT",Uint32:"UNSIGNED_INT",Float32:"FLOAT"},j=function(t,e,r,i){this.length=e.length,this.attributes=r,this.itemSize=e.bytesPerElement,this.dynamicDraw=i,this.context=t
var n=t.gl
this.buffer=n.createBuffer(),t.bindVertexBuffer.set(this.buffer),n.bufferData(n.ARRAY_BUFFER,e.arrayBuffer,this.dynamicDraw?n.DYNAMIC_DRAW:n.STATIC_DRAW),this.dynamicDraw||delete e.arrayBuffer}
j.prototype.bind=function(){this.context.bindVertexBuffer.set(this.buffer)},j.prototype.updateData=function(t){var e=this.context.gl
this.bind(),e.bufferSubData(e.ARRAY_BUFFER,0,t.arrayBuffer)},j.prototype.enableAttributes=function(t,e){for(var r=0;r<this.attributes.length;r++){var i=this.attributes[r],n=e.attributes[i.name]
void 0!==n&&t.enableVertexAttribArray(n)}},j.prototype.setVertexAttribPointers=function(t,e,r){for(var i=0;i<this.attributes.length;i++){var n=this.attributes[i],o=e.attributes[n.name]
void 0!==o&&t.vertexAttribPointer(o,n.components,t[N[n.type]],!1,this.itemSize,n.offset+this.itemSize*(r||0))}},j.prototype.destroy=function(){var t=this.context.gl
this.buffer&&(t.deleteBuffer(this.buffer),delete this.buffer)}
var q=function(t){this.gl=t.gl,this.default=this.getDefault(),this.current=this.default,this.dirty=!1}
q.prototype.get=function(){return this.current},q.prototype.set=function(t){},q.prototype.getDefault=function(){return this.default},q.prototype.setDefault=function(){this.set(this.default)}
var Z=function(e){function r(){e.apply(this,arguments)}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r.prototype.getDefault=function(){return t.Color.transparent},r.prototype.set=function(t){var e=this.current;(t.r!==e.r||t.g!==e.g||t.b!==e.b||t.a!==e.a||this.dirty)&&(this.gl.clearColor(t.r,t.g,t.b,t.a),this.current=t,this.dirty=!1)},r}(q),G=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return 1},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.clearDepth(t),this.current=t,this.dirty=!1)},e}(q),X=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return 0},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.clearStencil(t),this.current=t,this.dirty=!1)},e}(q),W=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return[!0,!0,!0,!0]},e.prototype.set=function(t){var e=this.current;(t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||this.dirty)&&(this.gl.colorMask(t[0],t[1],t[2],t[3]),this.current=t,this.dirty=!1)},e}(q),K=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return!0},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.depthMask(t),this.current=t,this.dirty=!1)},e}(q),H=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return 255},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.stencilMask(t),this.current=t,this.dirty=!1)},e}(q),J=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return{func:this.gl.ALWAYS,ref:0,mask:255}},e.prototype.set=function(t){var e=this.current;(t.func!==e.func||t.ref!==e.ref||t.mask!==e.mask||this.dirty)&&(this.gl.stencilFunc(t.func,t.ref,t.mask),this.current=t,this.dirty=!1)},e}(q),Y=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){var t=this.gl
return[t.KEEP,t.KEEP,t.KEEP]},e.prototype.set=function(t){var e=this.current;(t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||this.dirty)&&(this.gl.stencilOp(t[0],t[1],t[2]),this.current=t,this.dirty=!1)},e}(q),$=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return!1},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl
t?e.enable(e.STENCIL_TEST):e.disable(e.STENCIL_TEST),this.current=t,this.dirty=!1}},e}(q),Q=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return[0,1]},e.prototype.set=function(t){var e=this.current;(t[0]!==e[0]||t[1]!==e[1]||this.dirty)&&(this.gl.depthRange(t[0],t[1]),this.current=t,this.dirty=!1)},e}(q),tt=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return!1},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl
t?e.enable(e.DEPTH_TEST):e.disable(e.DEPTH_TEST),this.current=t,this.dirty=!1}},e}(q),et=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return this.gl.LESS},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.depthFunc(t),this.current=t,this.dirty=!1)},e}(q),rt=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return!1},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl
t?e.enable(e.BLEND):e.disable(e.BLEND),this.current=t,this.dirty=!1}},e}(q),it=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){var t=this.gl
return[t.ONE,t.ZERO]},e.prototype.set=function(t){var e=this.current;(t[0]!==e[0]||t[1]!==e[1]||this.dirty)&&(this.gl.blendFunc(t[0],t[1]),this.current=t,this.dirty=!1)},e}(q),nt=function(e){function r(){e.apply(this,arguments)}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r.prototype.getDefault=function(){return t.Color.transparent},r.prototype.set=function(t){var e=this.current;(t.r!==e.r||t.g!==e.g||t.b!==e.b||t.a!==e.a||this.dirty)&&(this.gl.blendColor(t.r,t.g,t.b,t.a),this.current=t,this.dirty=!1)},r}(q),ot=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return this.gl.FUNC_ADD},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.blendEquation(t),this.current=t,this.dirty=!1)},e}(q),at=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return!1},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl
t?e.enable(e.CULL_FACE):e.disable(e.CULL_FACE),this.current=t,this.dirty=!1}},e}(q),st=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return this.gl.BACK},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.cullFace(t),this.current=t,this.dirty=!1)},e}(q),lt=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return this.gl.CCW},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.frontFace(t),this.current=t,this.dirty=!1)},e}(q),ut=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return null},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.useProgram(t),this.current=t,this.dirty=!1)},e}(q),ct=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return this.gl.TEXTURE0},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.activeTexture(t),this.current=t,this.dirty=!1)},e}(q),pt=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){var t=this.gl
return[0,0,t.drawingBufferWidth,t.drawingBufferHeight]},e.prototype.set=function(t){var e=this.current;(t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||this.dirty)&&(this.gl.viewport(t[0],t[1],t[2],t[3]),this.current=t,this.dirty=!1)},e}(q),ht=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return null},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl
e.bindFramebuffer(e.FRAMEBUFFER,t),this.current=t,this.dirty=!1}},e}(q),ft=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return null},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl
e.bindRenderbuffer(e.RENDERBUFFER,t),this.current=t,this.dirty=!1}},e}(q),dt=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return null},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl
e.bindTexture(e.TEXTURE_2D,t),this.current=t,this.dirty=!1}},e}(q),mt=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return null},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl
e.bindBuffer(e.ARRAY_BUFFER,t),this.current=t,this.dirty=!1}},e}(q),yt=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return null},e.prototype.set=function(t){var e=this.gl
e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t),this.current=t,this.dirty=!1},e}(q),vt=function(t){function e(e){t.call(this,e),this.vao=e.extVertexArrayObject}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return null},e.prototype.set=function(t){this.vao&&(t!==this.current||this.dirty)&&(this.vao.bindVertexArrayOES(t),this.current=t,this.dirty=!1)},e}(q),_t=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return 4},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl
e.pixelStorei(e.UNPACK_ALIGNMENT,t),this.current=t,this.dirty=!1}},e}(q),gt=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return!1},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl
e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t),this.current=t,this.dirty=!1}},e}(q),xt=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return!1},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl
e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,t),this.current=t,this.dirty=!1}},e}(q),bt=function(t){function e(e,r){t.call(this,e),this.context=e,this.parent=r}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return null},e}(q),wt=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setDirty=function(){this.dirty=!0},e.prototype.set=function(t){if(t!==this.current||this.dirty){this.context.bindFramebuffer.set(this.parent)
var e=this.gl
e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),this.current=t,this.dirty=!1}},e}(bt),St=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){if(t!==this.current||this.dirty){this.context.bindFramebuffer.set(this.parent)
var e=this.gl
e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,t),this.current=t,this.dirty=!1}},e}(bt),Et=function(t,e,r){this.context=t,this.width=e,this.height=r
var i=t.gl,n=this.framebuffer=i.createFramebuffer()
this.colorAttachment=new wt(t,n),this.depthAttachment=new St(t,n)}
Et.prototype.destroy=function(){var t=this.context.gl,e=this.colorAttachment.get()
e&&t.deleteTexture(e)
var r=this.depthAttachment.get()
r&&t.deleteRenderbuffer(r),t.deleteFramebuffer(this.framebuffer)}
var Tt=function(t,e,r){this.func=t,this.mask=e,this.range=r}
Tt.ReadOnly=!1,Tt.ReadWrite=!0,Tt.disabled=new Tt(519,Tt.ReadOnly,[0,1])
var At=function(t,e,r,i,n,o){this.test=t,this.ref=e,this.mask=r,this.fail=i,this.depthFail=n,this.pass=o}
At.disabled=new At({func:519,mask:0},0,0,7680,7680,7680)
var It=function(t,e,r){this.blendFunction=t,this.blendColor=e,this.mask=r}
It.disabled=new It(It.Replace=[1,0],t.Color.transparent,[!1,!1,!1,!1]),It.unblended=new It(It.Replace,t.Color.transparent,[!0,!0,!0,!0]),It.alphaBlended=new It([1,771],t.Color.transparent,[!0,!0,!0,!0])
var kt=function(t,e,r){this.enable=t,this.mode=e,this.frontFace=r}
kt.disabled=new kt(!1,1029,2305),kt.backCCW=new kt(!0,1029,2305)
var zt=function(t){this.gl=t,this.extVertexArrayObject=this.gl.getExtension("OES_vertex_array_object"),this.clearColor=new Z(this),this.clearDepth=new G(this),this.clearStencil=new X(this),this.colorMask=new W(this),this.depthMask=new K(this),this.stencilMask=new H(this),this.stencilFunc=new J(this),this.stencilOp=new Y(this),this.stencilTest=new $(this),this.depthRange=new Q(this),this.depthTest=new tt(this),this.depthFunc=new et(this),this.blend=new rt(this),this.blendFunc=new it(this),this.blendColor=new nt(this),this.blendEquation=new ot(this),this.cullFace=new at(this),this.cullFaceSide=new st(this),this.frontFace=new lt(this),this.program=new ut(this),this.activeTexture=new ct(this),this.viewport=new pt(this),this.bindFramebuffer=new ht(this),this.bindRenderbuffer=new ft(this),this.bindTexture=new dt(this),this.bindVertexBuffer=new mt(this),this.bindElementBuffer=new yt(this),this.bindVertexArrayOES=this.extVertexArrayObject&&new vt(this),this.pixelStoreUnpack=new _t(this),this.pixelStoreUnpackPremultiplyAlpha=new gt(this),this.pixelStoreUnpackFlipY=new xt(this),this.extTextureFilterAnisotropic=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic"),this.extTextureFilterAnisotropic&&(this.extTextureFilterAnisotropicMax=t.getParameter(this.extTextureFilterAnisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT)),this.extTextureHalfFloat=t.getExtension("OES_texture_half_float"),this.extTextureHalfFloat&&t.getExtension("OES_texture_half_float_linear")}
zt.prototype.setDefault=function(){this.unbindVAO(),this.clearColor.setDefault(),this.clearDepth.setDefault(),this.clearStencil.setDefault(),this.colorMask.setDefault(),this.depthMask.setDefault(),this.stencilMask.setDefault(),this.stencilFunc.setDefault(),this.stencilOp.setDefault(),this.stencilTest.setDefault(),this.depthRange.setDefault(),this.depthTest.setDefault(),this.depthFunc.setDefault(),this.blend.setDefault(),this.blendFunc.setDefault(),this.blendColor.setDefault(),this.blendEquation.setDefault(),this.cullFace.setDefault(),this.cullFaceSide.setDefault(),this.frontFace.setDefault(),this.program.setDefault(),this.activeTexture.setDefault(),this.bindFramebuffer.setDefault(),this.pixelStoreUnpack.setDefault(),this.pixelStoreUnpackPremultiplyAlpha.setDefault(),this.pixelStoreUnpackFlipY.setDefault()},zt.prototype.setDirty=function(){this.clearColor.dirty=!0,this.clearDepth.dirty=!0,this.clearStencil.dirty=!0,this.colorMask.dirty=!0,this.depthMask.dirty=!0,this.stencilMask.dirty=!0,this.stencilFunc.dirty=!0,this.stencilOp.dirty=!0,this.stencilTest.dirty=!0,this.depthRange.dirty=!0,this.depthTest.dirty=!0,this.depthFunc.dirty=!0,this.blend.dirty=!0,this.blendFunc.dirty=!0,this.blendColor.dirty=!0,this.blendEquation.dirty=!0,this.cullFace.dirty=!0,this.cullFaceSide.dirty=!0,this.frontFace.dirty=!0,this.program.dirty=!0,this.activeTexture.dirty=!0,this.viewport.dirty=!0,this.bindFramebuffer.dirty=!0,this.bindRenderbuffer.dirty=!0,this.bindTexture.dirty=!0,this.bindVertexBuffer.dirty=!0,this.bindElementBuffer.dirty=!0,this.extVertexArrayObject&&(this.bindVertexArrayOES.dirty=!0),this.pixelStoreUnpack.dirty=!0,this.pixelStoreUnpackPremultiplyAlpha.dirty=!0,this.pixelStoreUnpackFlipY.dirty=!0},zt.prototype.createIndexBuffer=function(t,e){return new V(this,t,e)},zt.prototype.createVertexBuffer=function(t,e,r){return new j(this,t,e,r)},zt.prototype.createRenderbuffer=function(t,e,r){var i=this.gl,n=i.createRenderbuffer()
return this.bindRenderbuffer.set(n),i.renderbufferStorage(i.RENDERBUFFER,t,e,r),this.bindRenderbuffer.set(null),n},zt.prototype.createFramebuffer=function(t,e){return new Et(this,t,e)},zt.prototype.clear=function(t){var e=t.color,r=t.depth,i=this.gl,n=0
e&&(n|=i.COLOR_BUFFER_BIT,this.clearColor.set(e),this.colorMask.set([!0,!0,!0,!0])),void 0!==r&&(n|=i.DEPTH_BUFFER_BIT,this.depthRange.set([0,1]),this.clearDepth.set(r),this.depthMask.set(!0)),i.clear(n)},zt.prototype.setCullFace=function(t){!1===t.enable?this.cullFace.set(!1):(this.cullFace.set(!0),this.cullFaceSide.set(t.mode),this.frontFace.set(t.frontFace))},zt.prototype.setDepthMode=function(t){t.func!==this.gl.ALWAYS||t.mask?(this.depthTest.set(!0),this.depthFunc.set(t.func),this.depthMask.set(t.mask),this.depthRange.set(t.range)):this.depthTest.set(!1)},zt.prototype.setStencilMode=function(t){t.test.func!==this.gl.ALWAYS||t.mask?(this.stencilTest.set(!0),this.stencilMask.set(t.mask),this.stencilOp.set([t.fail,t.depthFail,t.pass]),this.stencilFunc.set({func:t.test.func,ref:t.ref,mask:t.test.mask})):this.stencilTest.set(!1)},zt.prototype.setColorMode=function(e){t.deepEqual(e.blendFunction,It.Replace)?this.blend.set(!1):(this.blend.set(!0),this.blendFunc.set(e.blendFunction),this.blendColor.set(e.blendColor)),this.colorMask.set(e.mask)},zt.prototype.unbindVAO=function(){this.extVertexArrayObject&&this.bindVertexArrayOES.set(null)}
var Ct=function(e){function r(r,i,n){var o=this
e.call(this),this.id=r,this.dispatcher=n,this.on("data",function(t){"source"===t.dataType&&"metadata"===t.sourceDataType&&(o._sourceLoaded=!0),o._sourceLoaded&&!o._paused&&"source"===t.dataType&&"content"===t.sourceDataType&&(o.reload(),o.transform&&o.update(o.transform))}),this.on("error",function(){o._sourceErrored=!0}),this._source=B(r,i,n,this),this._tiles={},this._cache=new U(0,this._unloadTile.bind(this)),this._timers={},this._cacheTimers={},this._maxTileCacheSize=null,this._coveredTiles={},this._state=new t.SourceFeatureState}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r.prototype.onAdd=function(t){this.map=t,this._maxTileCacheSize=t?t._maxTileCacheSize:null,this._source&&this._source.onAdd&&this._source.onAdd(t)},r.prototype.onRemove=function(t){this._source&&this._source.onRemove&&this._source.onRemove(t)},r.prototype.loaded=function(){if(this._sourceErrored)return!0
if(!this._sourceLoaded)return!1
if(!this._source.loaded())return!1
for(var t in this._tiles){var e=this._tiles[t]
if("loaded"!==e.state&&"errored"!==e.state)return!1}return!0},r.prototype.getSource=function(){return this._source},r.prototype.pause=function(){this._paused=!0},r.prototype.resume=function(){if(this._paused){var t=this._shouldReloadOnResume
this._paused=!1,this._shouldReloadOnResume=!1,t&&this.reload(),this.transform&&this.update(this.transform)}},r.prototype._loadTile=function(t,e){return this._source.loadTile(t,e)},r.prototype._unloadTile=function(t){if(this._source.unloadTile)return this._source.unloadTile(t,function(){})},r.prototype._abortTile=function(t){if(this._source.abortTile)return this._source.abortTile(t,function(){})},r.prototype.serialize=function(){return this._source.serialize()},r.prototype.prepare=function(t){for(var e in this._source.prepare&&this._source.prepare(),this._state.coalesceChanges(this._tiles,this.map?this.map.painter:null),this._tiles){var r=this._tiles[e]
r.upload(t),r.prepare(this.map.style.imageManager)}},r.prototype.getIds=function(){return Object.keys(this._tiles).map(Number).sort(Pt)},r.prototype.getRenderableIds=function(e){var r=this,i=[]
for(var n in this._tiles)this._isIdRenderable(+n,e)&&i.push(+n)
return e?i.sort(function(e,i){var n=r._tiles[e].tileID,o=r._tiles[i].tileID,a=new t.Point(n.canonical.x,n.canonical.y)._rotate(r.transform.angle),s=new t.Point(o.canonical.x,o.canonical.y)._rotate(r.transform.angle)
return n.overscaledZ-o.overscaledZ||s.y-a.y||s.x-a.x}):i.sort(Pt)},r.prototype.hasRenderableParent=function(t){var e=this.findLoadedParent(t,0)
return!!e&&this._isIdRenderable(e.tileID.key)},r.prototype._isIdRenderable=function(t,e){return this._tiles[t]&&this._tiles[t].hasData()&&!this._coveredTiles[t]&&(e||!this._tiles[t].holdingForFade())},r.prototype.reload=function(){if(this._paused)this._shouldReloadOnResume=!0
else for(var t in this._cache.reset(),this._tiles)"errored"!==this._tiles[t].state&&this._reloadTile(t,"reloading")},r.prototype._reloadTile=function(t,e){var r=this._tiles[t]
r&&("loading"!==r.state&&(r.state=e),this._loadTile(r,this._tileLoaded.bind(this,r,t,e)))},r.prototype._tileLoaded=function(e,r,i,n){if(n)return e.state="errored",void(404!==n.status?this._source.fire(new t.ErrorEvent(n,{tile:e})):this.update(this.transform))
e.timeAdded=t.browser.now(),"expired"===i&&(e.refreshedUponExpiration=!0),this._setTileReloadTimer(r,e),"raster-dem"===this.getSource().type&&e.dem&&this._backfillDEM(e),this._state.initializeTileState(e,this.map?this.map.painter:null),this._source.fire(new t.Event("data",{dataType:"source",tile:e,coord:e.tileID}))},r.prototype._backfillDEM=function(t){for(var e=this.getRenderableIds(),r=0;r<e.length;r++){var i=e[r]
if(t.neighboringTiles&&t.neighboringTiles[i]){var n=this.getTileByID(i)
o(t,n),o(n,t)}}function o(t,e){t.needsHillshadePrepare=!0
var r=e.tileID.canonical.x-t.tileID.canonical.x,i=e.tileID.canonical.y-t.tileID.canonical.y,n=Math.pow(2,t.tileID.canonical.z),o=e.tileID.key
0===r&&0===i||Math.abs(i)>1||(Math.abs(r)>1&&(1===Math.abs(r+n)?r+=n:1===Math.abs(r-n)&&(r-=n)),e.dem&&t.dem&&(t.dem.backfillBorder(e.dem,r,i),t.neighboringTiles&&t.neighboringTiles[o]&&(t.neighboringTiles[o].backfilled=!0)))}},r.prototype.getTile=function(t){return this.getTileByID(t.key)},r.prototype.getTileByID=function(t){return this._tiles[t]},r.prototype.getZoom=function(t){return t.zoom+t.scaleZoom(t.tileSize/this._source.tileSize)},r.prototype._retainLoadedChildren=function(t,e,r,i){for(var n in this._tiles){var o=this._tiles[n]
if(!(i[n]||!o.hasData()||o.tileID.overscaledZ<=e||o.tileID.overscaledZ>r)){for(var a=o.tileID;o&&o.tileID.overscaledZ>e+1;){var s=o.tileID.scaledTo(o.tileID.overscaledZ-1);(o=this._tiles[s.key])&&o.hasData()&&(a=s)}for(var l=a;l.overscaledZ>e;)if(t[(l=l.scaledTo(l.overscaledZ-1)).key]){i[a.key]=a
break}}}},r.prototype.findLoadedParent=function(t,e){for(var r=t.overscaledZ-1;r>=e;r--){var i=t.scaledTo(r)
if(!i)return
var n=String(i.key),o=this._tiles[n]
if(o&&o.hasData())return o
if(this._cache.has(i))return this._cache.get(i)}},r.prototype.updateCacheSize=function(t){var e=(Math.ceil(t.width/this._source.tileSize)+1)*(Math.ceil(t.height/this._source.tileSize)+1),r=Math.floor(5*e),i="number"==typeof this._maxTileCacheSize?Math.min(this._maxTileCacheSize,r):r
this._cache.setMaxSize(i)},r.prototype.handleWrapJump=function(t){var e=(t-(void 0===this._prevLng?t:this._prevLng))/360,r=Math.round(e)
if(this._prevLng=t,r){var i={}
for(var n in this._tiles){var o=this._tiles[n]
o.tileID=o.tileID.unwrapTo(o.tileID.wrap+r),i[o.tileID.key]=o}for(var a in this._tiles=i,this._timers)clearTimeout(this._timers[a]),delete this._timers[a]
for(var s in this._tiles){var l=this._tiles[s]
this._setTileReloadTimer(s,l)}}},r.prototype.update=function(e){var i=this
if(this.transform=e,this._sourceLoaded&&!this._paused){var n
this.updateCacheSize(e),this.handleWrapJump(this.transform.center.lng),this._coveredTiles={},this.used?this._source.tileID?n=e.getVisibleUnwrappedCoordinates(this._source.tileID).map(function(e){return new t.OverscaledTileID(e.canonical.z,e.wrap,e.canonical.z,e.canonical.x,e.canonical.y)}):(n=e.coveringTiles({tileSize:this._source.tileSize,minzoom:this._source.minzoom,maxzoom:this._source.maxzoom,roundZoom:this._source.roundZoom,reparseOverscaled:this._source.reparseOverscaled}),this._source.hasTile&&(n=n.filter(function(t){return i._source.hasTile(t)}))):n=[]
var o=(this._source.roundZoom?Math.round:Math.floor)(this.getZoom(e)),a=Math.max(o-r.maxOverzooming,this._source.minzoom),s=Math.max(o+r.maxUnderzooming,this._source.minzoom),l=this._updateRetainedTiles(n,o)
if(Mt(this._source.type)){for(var u={},c={},p=0,h=Object.keys(l);p<h.length;p+=1){var f=h[p],d=l[f],m=this._tiles[f]
if(m&&!(m.fadeEndTime&&m.fadeEndTime<=t.browser.now())){var y=this.findLoadedParent(d,a)
y&&(this._addTile(y.tileID),u[y.tileID.key]=y.tileID),c[f]=d}}for(var v in this._retainLoadedChildren(c,o,s,l),u)l[v]||(this._coveredTiles[v]=!0,l[v]=u[v])}for(var _ in l)this._tiles[_].clearFadeHold()
for(var g=0,x=t.keysDifference(this._tiles,l);g<x.length;g+=1){var b=x[g],w=this._tiles[b]
w.hasSymbolBuckets&&!w.holdingForFade()?w.setHoldDuration(this.map._fadeDuration):w.hasSymbolBuckets&&!w.symbolFadeFinished()||this._removeTile(b)}}},r.prototype.releaseSymbolFadeTiles=function(){for(var t in this._tiles)this._tiles[t].holdingForFade()&&this._removeTile(t)},r.prototype._updateRetainedTiles=function(t,e){for(var i={},n={},o=Math.max(e-r.maxOverzooming,this._source.minzoom),a=Math.max(e+r.maxUnderzooming,this._source.minzoom),s={},l=0,u=t;l<u.length;l+=1){var c=u[l],p=this._addTile(c)
i[c.key]=c,p.hasData()||e<this._source.maxzoom&&(s[c.key]=c)}this._retainLoadedChildren(s,e,a,i)
for(var h=0,f=t;h<f.length;h+=1){var d=f[h],m=this._tiles[d.key]
if(!m.hasData()){if(e+1>this._source.maxzoom){var y=d.children(this._source.maxzoom)[0],v=this.getTile(y)
if(v&&v.hasData()){i[y.key]=y
continue}}else{var _=d.children(this._source.maxzoom)
if(i[_[0].key]&&i[_[1].key]&&i[_[2].key]&&i[_[3].key])continue}for(var g=m.wasRequested(),x=d.overscaledZ-1;x>=o;--x){var b=d.scaledTo(x)
if(n[b.key])break
if(n[b.key]=!0,!(m=this.getTile(b))&&g&&(m=this._addTile(b)),m&&(i[b.key]=b,g=m.wasRequested(),m.hasData()))break}}}return i},r.prototype._addTile=function(e){var r=this._tiles[e.key]
if(r)return r;(r=this._cache.getAndRemove(e))&&(this._setTileReloadTimer(e.key,r),r.tileID=e,this._state.initializeTileState(r,this.map?this.map.painter:null),this._cacheTimers[e.key]&&(clearTimeout(this._cacheTimers[e.key]),delete this._cacheTimers[e.key],this._setTileReloadTimer(e.key,r)))
var i=Boolean(r)
return i||(r=new t.Tile(e,this._source.tileSize*e.overscaleFactor()),this._loadTile(r,this._tileLoaded.bind(this,r,e.key,r.state))),r?(r.uses++,this._tiles[e.key]=r,i||this._source.fire(new t.Event("dataloading",{tile:r,coord:r.tileID,dataType:"source"})),r):null},r.prototype._setTileReloadTimer=function(t,e){var r=this
t in this._timers&&(clearTimeout(this._timers[t]),delete this._timers[t])
var i=e.getExpiryTimeout()
i&&(this._timers[t]=setTimeout(function(){r._reloadTile(t,"expired"),delete r._timers[t]},i))},r.prototype._removeTile=function(t){var e=this._tiles[t]
e&&(e.uses--,delete this._tiles[t],this._timers[t]&&(clearTimeout(this._timers[t]),delete this._timers[t]),e.uses>0||(e.hasData()&&"reloading"!==e.state?this._cache.add(e.tileID,e,e.getExpiryTimeout()):(e.aborted=!0,this._abortTile(e),this._unloadTile(e))))},r.prototype.clearTiles=function(){for(var t in this._shouldReloadOnResume=!1,this._paused=!1,this._tiles)this._removeTile(t)
this._cache.reset()},r.prototype.tilesIn=function(e,r,i){var n=this,o=[],a=this.transform
if(!a)return o
for(var s=i?a.getCameraQueryGeometry(e):e,l=e.map(function(t){return a.pointCoordinate(t)}),u=s.map(function(t){return a.pointCoordinate(t)}),c=this.getIds(),p=1/0,h=1/0,f=-1/0,d=-1/0,m=0,y=u;m<y.length;m+=1){var v=y[m]
p=Math.min(p,v.x),h=Math.min(h,v.y),f=Math.max(f,v.x),d=Math.max(d,v.y)}for(var _=function(e){var i=n._tiles[c[e]]
if(!i.holdingForFade()){var s=i.tileID,m=Math.pow(2,a.zoom-i.tileID.overscaledZ),y=r*i.queryPadding*t.EXTENT/i.tileSize/m,v=[s.getTilePoint(new t.MercatorCoordinate(p,h)),s.getTilePoint(new t.MercatorCoordinate(f,d))]
if(v[0].x-y<t.EXTENT&&v[0].y-y<t.EXTENT&&v[1].x+y>=0&&v[1].y+y>=0){var _=l.map(function(t){return s.getTilePoint(t)}),g=u.map(function(t){return s.getTilePoint(t)})
o.push({tile:i,tileID:s,queryGeometry:_,cameraQueryGeometry:g,scale:m})}}},g=0;g<c.length;g++)_(g)
return o},r.prototype.getVisibleCoordinates=function(t){for(var e=this,r=this.getRenderableIds(t).map(function(t){return e._tiles[t].tileID}),i=0,n=r;i<n.length;i+=1){var o=n[i]
o.posMatrix=this.transform.calculatePosMatrix(o.toUnwrapped())}return r},r.prototype.hasTransition=function(){if(this._source.hasTransition())return!0
if(Mt(this._source.type))for(var e in this._tiles){var r=this._tiles[e]
if(void 0!==r.fadeEndTime&&r.fadeEndTime>=t.browser.now())return!0}return!1},r.prototype.setFeatureState=function(t,e,r){t=t||"_geojsonTileLayer",this._state.updateState(t,e,r)},r.prototype.removeFeatureState=function(t,e,r){t=t||"_geojsonTileLayer",this._state.removeFeatureState(t,e,r)},r.prototype.getFeatureState=function(t,e){return t=t||"_geojsonTileLayer",this._state.getState(t,e)},r}(t.Evented)
function Pt(t,e){return t%32-e%32||e-t}function Mt(t){return"raster"===t||"image"===t||"video"===t}function Lt(){return new t.window.Worker(tn.workerUrl)}Ct.maxOverzooming=10,Ct.maxUnderzooming=3
var Dt=function(){this.active={}}
Dt.prototype.acquire=function(t){if(!this.workers)for(this.workers=[];this.workers.length<Dt.workerCount;)this.workers.push(new Lt)
return this.active[t]=!0,this.workers.slice()},Dt.prototype.release=function(t){delete this.active[t],0===Object.keys(this.active).length&&(this.workers.forEach(function(t){t.terminate()}),this.workers=null)}
var Bt,Rt=Math.floor(t.browser.hardwareConcurrency/2)
function Ft(e,r){var i={}
for(var n in e)"ref"!==n&&(i[n]=e[n])
return t.refProperties.forEach(function(t){t in r&&(i[t]=r[t])}),i}function Ot(t){t=t.slice()
for(var e=Object.create(null),r=0;r<t.length;r++)e[t[r].id]=t[r]
for(var i=0;i<t.length;i++)"ref"in t[i]&&(t[i]=Ft(t[i],e[t[i].ref]))
return t}Dt.workerCount=Math.max(Math.min(Rt,6),1)
var Ut={setStyle:"setStyle",addLayer:"addLayer",removeLayer:"removeLayer",setPaintProperty:"setPaintProperty",setLayoutProperty:"setLayoutProperty",setFilter:"setFilter",addSource:"addSource",removeSource:"removeSource",setGeoJSONSourceData:"setGeoJSONSourceData",setLayerZoomRange:"setLayerZoomRange",setLayerProperty:"setLayerProperty",setCenter:"setCenter",setZoom:"setZoom",setBearing:"setBearing",setPitch:"setPitch",setSprite:"setSprite",setGlyphs:"setGlyphs",setTransition:"setTransition",setLight:"setLight"}
function Vt(t,e,r){r.push({command:Ut.addSource,args:[t,e[t]]})}function Nt(t,e,r){e.push({command:Ut.removeSource,args:[t]}),r[t]=!0}function jt(t,e,r,i){Nt(t,r,i),Vt(t,e,r)}function qt(e,r,i){var n
for(n in e[i])if(e[i].hasOwnProperty(n)&&"data"!==n&&!t.deepEqual(e[i][n],r[i][n]))return!1
for(n in r[i])if(r[i].hasOwnProperty(n)&&"data"!==n&&!t.deepEqual(e[i][n],r[i][n]))return!1
return!0}function Zt(e,r,i,n,o,a){var s
for(s in r=r||{},e=e||{})e.hasOwnProperty(s)&&(t.deepEqual(e[s],r[s])||i.push({command:a,args:[n,s,r[s],o]}))
for(s in r)r.hasOwnProperty(s)&&!e.hasOwnProperty(s)&&(t.deepEqual(e[s],r[s])||i.push({command:a,args:[n,s,r[s],o]}))}function Gt(t){return t.id}function Xt(t,e){return t[e.id]=e,t}var Wt=function(t,e,r){var i=this.boxCells=[],n=this.circleCells=[]
this.xCellCount=Math.ceil(t/r),this.yCellCount=Math.ceil(e/r)
for(var o=0;o<this.xCellCount*this.yCellCount;o++)i.push([]),n.push([])
this.circleKeys=[],this.boxKeys=[],this.bboxes=[],this.circles=[],this.width=t,this.height=e,this.xScale=this.xCellCount/t,this.yScale=this.yCellCount/e,this.boxUid=0,this.circleUid=0}
function Kt(e,r,i,n,o){var a=t.create()
return r?(t.scale(a,a,[1/o,1/o,1]),i||t.rotateZ(a,a,n.angle)):t.multiply(a,n.labelPlaneMatrix,e),a}function Ht(e,r,i,n,o){if(r){var a=t.clone(e)
return t.scale(a,a,[o,o,1]),i||t.rotateZ(a,a,-n.angle),a}return n.glCoordMatrix}function Jt(e,r){var i=[e.x,e.y,0,1]
ae(i,i,r)
var n=i[3]
return{point:new t.Point(i[0]/n,i[1]/n),signedDistanceFromCamera:n}}function Yt(t,e){var r=t[0]/t[3],i=t[1]/t[3]
return r>=-e[0]&&r<=e[0]&&i>=-e[1]&&i<=e[1]}function $t(e,r,i,n,o,a,s,l){var u=n?e.textSizeData:e.iconSizeData,c=t.evaluateSizeForZoom(u,i.transform.zoom),p=[256/i.width*2+1,256/i.height*2+1],h=n?e.text.dynamicLayoutVertexArray:e.icon.dynamicLayoutVertexArray
h.clear()
for(var f=e.lineVertexArray,d=n?e.text.placedSymbolArray:e.icon.placedSymbolArray,m=i.transform.width/i.transform.height,y=!1,v=0;v<d.length;v++){var _=d.get(v)
if(_.hidden||_.writingMode===t.WritingMode.vertical&&!y)oe(_.numGlyphs,h)
else{y=!1
var g=[_.anchorX,_.anchorY,0,1]
if(t.transformMat4(g,g,r),Yt(g,p)){var x=.5+g[3]/i.transform.cameraToCenterDistance*.5,b=t.evaluateSizeForFeature(u,c,_),w=s?b*x:b/x,S=new t.Point(_.anchorX,_.anchorY),E=Jt(S,o).point,T={},A=ee(_,w,!1,l,r,o,a,e.glyphOffsetArray,f,h,E,S,T,m)
y=A.useVertical,(A.notEnoughRoom||y||A.needsFlipping&&ee(_,w,!0,l,r,o,a,e.glyphOffsetArray,f,h,E,S,T,m).notEnoughRoom)&&oe(_.numGlyphs,h)}else oe(_.numGlyphs,h)}}n?e.text.dynamicLayoutVertexBuffer.updateData(h):e.icon.dynamicLayoutVertexBuffer.updateData(h)}function Qt(t,e,r,i,n,o,a,s,l,u,c,p){var h=s.glyphStartIndex+s.numGlyphs,f=s.lineStartIndex,d=s.lineStartIndex+s.lineLength,m=e.getoffsetX(s.glyphStartIndex),y=e.getoffsetX(h-1),v=ie(t*m,r,i,n,o,a,s.segment,f,d,l,u,c,p)
if(!v)return null
var _=ie(t*y,r,i,n,o,a,s.segment,f,d,l,u,c,p)
return _?{first:v,last:_}:null}function te(e,r,i,n){return e===t.WritingMode.horizontal&&Math.abs(i.y-r.y)>Math.abs(i.x-r.x)*n?{useVertical:!0}:(e===t.WritingMode.vertical?r.y<i.y:r.x>i.x)?{needsFlipping:!0}:null}function ee(e,r,i,n,o,a,s,l,u,c,p,h,f,d){var m,y=r/24,v=e.lineOffsetX*y,_=e.lineOffsetY*y
if(e.numGlyphs>1){var g=e.glyphStartIndex+e.numGlyphs,x=e.lineStartIndex,b=e.lineStartIndex+e.lineLength,w=Qt(y,l,v,_,i,p,h,e,u,a,f,!1)
if(!w)return{notEnoughRoom:!0}
var S=Jt(w.first.point,s).point,E=Jt(w.last.point,s).point
if(n&&!i){var T=te(e.writingMode,S,E,d)
if(T)return T}m=[w.first]
for(var A=e.glyphStartIndex+1;A<g-1;A++)m.push(ie(y*l.getoffsetX(A),v,_,i,p,h,e.segment,x,b,u,a,f,!1))
m.push(w.last)}else{if(n&&!i){var I=Jt(h,o).point,k=e.lineStartIndex+e.segment+1,z=new t.Point(u.getx(k),u.gety(k)),C=Jt(z,o),P=C.signedDistanceFromCamera>0?C.point:re(h,z,I,1,o),M=te(e.writingMode,I,P,d)
if(M)return M}var L=ie(y*l.getoffsetX(e.glyphStartIndex),v,_,i,p,h,e.segment,e.lineStartIndex,e.lineStartIndex+e.lineLength,u,a,f,!1)
if(!L)return{notEnoughRoom:!0}
m=[L]}for(var D=0,B=m;D<B.length;D+=1){var R=B[D]
t.addDynamicAttributes(c,R.point,R.angle)}return{}}function re(t,e,r,i,n){var o=Jt(t.add(t.sub(e)._unit()),n).point,a=r.sub(o)
return r.add(a._mult(i/a.mag()))}function ie(e,r,i,n,o,a,s,l,u,c,p,h,f){var d=n?e-r:e+r,m=d>0?1:-1,y=0
n&&(m*=-1,y=Math.PI),m<0&&(y+=Math.PI)
for(var v=m>0?l+s:l+s+1,_=v,g=o,x=o,b=0,w=0,S=Math.abs(d);b+w<=S;){if((v+=m)<l||v>=u)return null
if(x=g,void 0===(g=h[v])){var E=new t.Point(c.getx(v),c.gety(v)),T=Jt(E,p)
if(T.signedDistanceFromCamera>0)g=h[v]=T.point
else{var A=v-m
g=re(0===b?a:new t.Point(c.getx(A),c.gety(A)),E,x,S-b+1,p)}}b+=w,w=x.dist(g)}var I=(S-b)/w,k=g.sub(x),z=k.mult(I)._add(x)
return z._add(k._unit()._perp()._mult(i*m)),{point:z,angle:y+Math.atan2(g.y-x.y,g.x-x.x),tileDistance:f?{prevTileDistance:v-m===_?0:c.gettileUnitDistanceFromAnchor(v-m),lastSegmentViewportDistance:S-b}:null}}Wt.prototype.keysLength=function(){return this.boxKeys.length+this.circleKeys.length},Wt.prototype.insert=function(t,e,r,i,n){this._forEachCell(e,r,i,n,this._insertBoxCell,this.boxUid++),this.boxKeys.push(t),this.bboxes.push(e),this.bboxes.push(r),this.bboxes.push(i),this.bboxes.push(n)},Wt.prototype.insertCircle=function(t,e,r,i){this._forEachCell(e-i,r-i,e+i,r+i,this._insertCircleCell,this.circleUid++),this.circleKeys.push(t),this.circles.push(e),this.circles.push(r),this.circles.push(i)},Wt.prototype._insertBoxCell=function(t,e,r,i,n,o){this.boxCells[n].push(o)},Wt.prototype._insertCircleCell=function(t,e,r,i,n,o){this.circleCells[n].push(o)},Wt.prototype._query=function(t,e,r,i,n,o){if(r<0||t>this.width||i<0||e>this.height)return!n&&[]
var a=[]
if(t<=0&&e<=0&&this.width<=r&&this.height<=i){if(n)return!0
for(var s=0;s<this.boxKeys.length;s++)a.push({key:this.boxKeys[s],x1:this.bboxes[4*s],y1:this.bboxes[4*s+1],x2:this.bboxes[4*s+2],y2:this.bboxes[4*s+3]})
for(var l=0;l<this.circleKeys.length;l++){var u=this.circles[3*l],c=this.circles[3*l+1],p=this.circles[3*l+2]
a.push({key:this.circleKeys[l],x1:u-p,y1:c-p,x2:u+p,y2:c+p})}return o?a.filter(o):a}var h={hitTest:n,seenUids:{box:{},circle:{}}}
return this._forEachCell(t,e,r,i,this._queryCell,a,h,o),n?a.length>0:a},Wt.prototype._queryCircle=function(t,e,r,i,n){var o=t-r,a=t+r,s=e-r,l=e+r
if(a<0||o>this.width||l<0||s>this.height)return!i&&[]
var u=[],c={hitTest:i,circle:{x:t,y:e,radius:r},seenUids:{box:{},circle:{}}}
return this._forEachCell(o,s,a,l,this._queryCellCircle,u,c,n),i?u.length>0:u},Wt.prototype.query=function(t,e,r,i,n){return this._query(t,e,r,i,!1,n)},Wt.prototype.hitTest=function(t,e,r,i,n){return this._query(t,e,r,i,!0,n)},Wt.prototype.hitTestCircle=function(t,e,r,i){return this._queryCircle(t,e,r,!0,i)},Wt.prototype._queryCell=function(t,e,r,i,n,o,a,s){var l=a.seenUids,u=this.boxCells[n]
if(null!==u)for(var c=this.bboxes,p=0,h=u;p<h.length;p+=1){var f=h[p]
if(!l.box[f]){l.box[f]=!0
var d=4*f
if(t<=c[d+2]&&e<=c[d+3]&&r>=c[d+0]&&i>=c[d+1]&&(!s||s(this.boxKeys[f]))){if(a.hitTest)return o.push(!0),!0
o.push({key:this.boxKeys[f],x1:c[d],y1:c[d+1],x2:c[d+2],y2:c[d+3]})}}}var m=this.circleCells[n]
if(null!==m)for(var y=this.circles,v=0,_=m;v<_.length;v+=1){var g=_[v]
if(!l.circle[g]){l.circle[g]=!0
var x=3*g
if(this._circleAndRectCollide(y[x],y[x+1],y[x+2],t,e,r,i)&&(!s||s(this.circleKeys[g]))){if(a.hitTest)return o.push(!0),!0
var b=y[x],w=y[x+1],S=y[x+2]
o.push({key:this.circleKeys[g],x1:b-S,y1:w-S,x2:b+S,y2:w+S})}}}},Wt.prototype._queryCellCircle=function(t,e,r,i,n,o,a,s){var l=a.circle,u=a.seenUids,c=this.boxCells[n]
if(null!==c)for(var p=this.bboxes,h=0,f=c;h<f.length;h+=1){var d=f[h]
if(!u.box[d]){u.box[d]=!0
var m=4*d
if(this._circleAndRectCollide(l.x,l.y,l.radius,p[m+0],p[m+1],p[m+2],p[m+3])&&(!s||s(this.boxKeys[d])))return o.push(!0),!0}}var y=this.circleCells[n]
if(null!==y)for(var v=this.circles,_=0,g=y;_<g.length;_+=1){var x=g[_]
if(!u.circle[x]){u.circle[x]=!0
var b=3*x
if(this._circlesCollide(v[b],v[b+1],v[b+2],l.x,l.y,l.radius)&&(!s||s(this.circleKeys[x])))return o.push(!0),!0}}},Wt.prototype._forEachCell=function(t,e,r,i,n,o,a,s){for(var l=this._convertToXCellCoord(t),u=this._convertToYCellCoord(e),c=this._convertToXCellCoord(r),p=this._convertToYCellCoord(i),h=l;h<=c;h++)for(var f=u;f<=p;f++){var d=this.xCellCount*f+h
if(n.call(this,t,e,r,i,d,o,a,s))return}},Wt.prototype._convertToXCellCoord=function(t){return Math.max(0,Math.min(this.xCellCount-1,Math.floor(t*this.xScale)))},Wt.prototype._convertToYCellCoord=function(t){return Math.max(0,Math.min(this.yCellCount-1,Math.floor(t*this.yScale)))},Wt.prototype._circlesCollide=function(t,e,r,i,n,o){var a=i-t,s=n-e,l=r+o
return l*l>a*a+s*s},Wt.prototype._circleAndRectCollide=function(t,e,r,i,n,o,a){var s=(o-i)/2,l=Math.abs(t-(i+s))
if(l>s+r)return!1
var u=(a-n)/2,c=Math.abs(e-(n+u))
if(c>u+r)return!1
if(l<=s||c<=u)return!0
var p=l-s,h=c-u
return p*p+h*h<=r*r}
var ne=new Float32Array([-1/0,-1/0,0,-1/0,-1/0,0,-1/0,-1/0,0,-1/0,-1/0,0])
function oe(t,e){for(var r=0;r<t;r++){var i=e.length
e.resize(i+4),e.float32.set(ne,3*i)}}function ae(t,e,r){var i=e[0],n=e[1]
return t[0]=r[0]*i+r[4]*n+r[12],t[1]=r[1]*i+r[5]*n+r[13],t[3]=r[3]*i+r[7]*n+r[15],t}var se=function(t,e,r){void 0===e&&(e=new Wt(t.width+200,t.height+200,25)),void 0===r&&(r=new Wt(t.width+200,t.height+200,25)),this.transform=t,this.grid=e,this.ignoredGrid=r,this.pitchfactor=Math.cos(t._pitch)*t.cameraToCenterDistance,this.screenRightBoundary=t.width+100,this.screenBottomBoundary=t.height+100,this.gridRightBoundary=t.width+200,this.gridBottomBoundary=t.height+200}
function le(t,e,r){t[e+4]=r?1:0}function ue(e,r,i){return r*(t.EXTENT/(e.tileSize*Math.pow(2,i-e.tileID.overscaledZ)))}se.prototype.placeCollisionBox=function(t,e,r,i,n){var o=this.projectAndGetPerspectiveRatio(i,t.anchorPointX,t.anchorPointY),a=r*o.perspectiveRatio,s=t.x1*a+o.point.x,l=t.y1*a+o.point.y,u=t.x2*a+o.point.x,c=t.y2*a+o.point.y
return!this.isInsideGrid(s,l,u,c)||!e&&this.grid.hitTest(s,l,u,c,n)?{box:[],offscreen:!1}:{box:[s,l,u,c],offscreen:this.isOffscreen(s,l,u,c)}},se.prototype.approximateTileDistance=function(t,e,r,i,n){var o=n?1:i/this.pitchfactor,a=t.lastSegmentViewportDistance*r
return t.prevTileDistance+a+(o-1)*a*Math.abs(Math.sin(e))},se.prototype.placeCollisionCircles=function(e,r,i,n,o,a,s,l,u,c,p,h,f){var d=[],m=this.projectAnchor(u,o.anchorX,o.anchorY),y=l/24,v=o.lineOffsetX*l,_=o.lineOffsetY*l,g=new t.Point(o.anchorX,o.anchorY),x=Qt(y,s,v,_,!1,Jt(g,c).point,g,o,a,c,{},!0),b=!1,w=!1,S=!0,E=m.perspectiveRatio*n,T=1/(n*i),A=0,I=0
x&&(A=this.approximateTileDistance(x.first.tileDistance,x.first.angle,T,m.cameraDistance,h),I=this.approximateTileDistance(x.last.tileDistance,x.last.angle,T,m.cameraDistance,h))
for(var k=0;k<e.length;k+=5){var z=e[k],C=e[k+1],P=e[k+2],M=e[k+3]
if(!x||M<-A||M>I)le(e,k,!1)
else{var L=this.projectPoint(u,z,C),D=P*E
if(d.length>0){var B=L.x-d[d.length-4],R=L.y-d[d.length-3]
if(D*D*2>B*B+R*R&&k+8<e.length){var F=e[k+8]
if(F>-A&&F<I){le(e,k,!1)
continue}}}var O=k/5
d.push(L.x,L.y,D,O),le(e,k,!0)
var U=L.x-D,V=L.y-D,N=L.x+D,j=L.y+D
if(S=S&&this.isOffscreen(U,V,N,j),w=w||this.isInsideGrid(U,V,N,j),!r&&this.grid.hitTestCircle(L.x,L.y,D,f)){if(!p)return{circles:[],offscreen:!1}
b=!0}}}return{circles:b||!w?[]:d,offscreen:S}},se.prototype.queryRenderedSymbols=function(e){if(0===e.length||0===this.grid.keysLength()&&0===this.ignoredGrid.keysLength())return{}
for(var r=[],i=1/0,n=1/0,o=-1/0,a=-1/0,s=0,l=e;s<l.length;s+=1){var u=l[s],c=new t.Point(u.x+100,u.y+100)
i=Math.min(i,c.x),n=Math.min(n,c.y),o=Math.max(o,c.x),a=Math.max(a,c.y),r.push(c)}for(var p={},h={},f=0,d=this.grid.query(i,n,o,a).concat(this.ignoredGrid.query(i,n,o,a));f<d.length;f+=1){var m=d[f],y=m.key
if(void 0===p[y.bucketInstanceId]&&(p[y.bucketInstanceId]={}),!p[y.bucketInstanceId][y.featureIndex]){var v=[new t.Point(m.x1,m.y1),new t.Point(m.x2,m.y1),new t.Point(m.x2,m.y2),new t.Point(m.x1,m.y2)]
t.polygonIntersectsPolygon(r,v)&&(p[y.bucketInstanceId][y.featureIndex]=!0,void 0===h[y.bucketInstanceId]&&(h[y.bucketInstanceId]=[]),h[y.bucketInstanceId].push(y.featureIndex))}}return h},se.prototype.insertCollisionBox=function(t,e,r,i,n){var o={bucketInstanceId:r,featureIndex:i,collisionGroupID:n};(e?this.ignoredGrid:this.grid).insert(o,t[0],t[1],t[2],t[3])},se.prototype.insertCollisionCircles=function(t,e,r,i,n){for(var o=e?this.ignoredGrid:this.grid,a={bucketInstanceId:r,featureIndex:i,collisionGroupID:n},s=0;s<t.length;s+=4)o.insertCircle(a,t[s],t[s+1],t[s+2])},se.prototype.projectAnchor=function(t,e,r){var i=[e,r,0,1]
return ae(i,i,t),{perspectiveRatio:.5+this.transform.cameraToCenterDistance/i[3]*.5,cameraDistance:i[3]}},se.prototype.projectPoint=function(e,r,i){var n=[r,i,0,1]
return ae(n,n,e),new t.Point((n[0]/n[3]+1)/2*this.transform.width+100,(-n[1]/n[3]+1)/2*this.transform.height+100)},se.prototype.projectAndGetPerspectiveRatio=function(e,r,i){var n=[r,i,0,1]
return ae(n,n,e),{point:new t.Point((n[0]/n[3]+1)/2*this.transform.width+100,(-n[1]/n[3]+1)/2*this.transform.height+100),perspectiveRatio:.5+this.transform.cameraToCenterDistance/n[3]*.5}},se.prototype.isOffscreen=function(t,e,r,i){return r<100||t>=this.screenRightBoundary||i<100||e>this.screenBottomBoundary},se.prototype.isInsideGrid=function(t,e,r,i){return r>=0&&t<this.gridRightBoundary&&i>=0&&e<this.gridBottomBoundary}
var ce=function(t,e,r,i){this.opacity=t?Math.max(0,Math.min(1,t.opacity+(t.placed?e:-e))):i&&r?1:0,this.placed=r}
ce.prototype.isHidden=function(){return 0===this.opacity&&!this.placed}
var pe=function(t,e,r,i,n){this.text=new ce(t?t.text:null,e,r,n),this.icon=new ce(t?t.icon:null,e,i,n)}
pe.prototype.isHidden=function(){return this.text.isHidden()&&this.icon.isHidden()}
var he=function(t,e,r){this.text=t,this.icon=e,this.skipFade=r},fe=function(t,e,r,i,n){this.bucketInstanceId=t,this.featureIndex=e,this.sourceLayerIndex=r,this.bucketIndex=i,this.tileID=n},de=function(t){this.crossSourceCollisions=t,this.maxGroupID=0,this.collisionGroups={}}
function me(e,r,i,n,o){var a=t.getAnchorAlignment(e),s=-(a.horizontalAlign-.5)*r,l=-(a.verticalAlign-.5)*i,u=t.evaluateVariableOffset(e,n)
return new t.Point(s+u[0]*o,l+u[1]*o)}function ye(e,r,i,n,o,a){var s=e.x1,l=e.x2,u=e.y1,c=e.y2,p=e.anchorPointX,h=e.anchorPointY,f=new t.Point(r,i)
return n&&f._rotate(o?a:-a),{x1:s+f.x,y1:u+f.y,x2:l+f.x,y2:c+f.y,anchorPointX:p,anchorPointY:h}}de.prototype.get=function(t){if(this.crossSourceCollisions)return{ID:0,predicate:null}
if(!this.collisionGroups[t]){var e=++this.maxGroupID
this.collisionGroups[t]={ID:e,predicate:function(t){return t.collisionGroupID===e}}}return this.collisionGroups[t]}
var ve=function(t,e,r,i){this.transform=t.clone(),this.collisionIndex=new se(this.transform),this.placements={},this.opacities={},this.variableOffsets={},this.stale=!1,this.commitTime=0,this.fadeDuration=e,this.retainedQueryData={},this.collisionGroups=new de(r),this.prevPlacement=i,i&&(i.prevPlacement=void 0),this.placedOrientations={}}
function _e(t,e,r,i,n){t.emplaceBack(e?1:0,r?1:0,i||0,n||0),t.emplaceBack(e?1:0,r?1:0,i||0,n||0),t.emplaceBack(e?1:0,r?1:0,i||0,n||0),t.emplaceBack(e?1:0,r?1:0,i||0,n||0)}ve.prototype.placeLayerTile=function(e,r,i,n){var o=r.getBucket(e),a=r.latestFeatureIndex
if(o&&a&&e.id===o.layerIds[0]){var s=r.collisionBoxArray,l=o.layers[0].layout,u=Math.pow(2,this.transform.zoom-r.tileID.overscaledZ),c=r.tileSize/t.EXTENT,p=this.transform.calculatePosMatrix(r.tileID.toUnwrapped()),h=Kt(p,"map"===l.get("text-pitch-alignment"),"map"===l.get("text-rotation-alignment"),this.transform,ue(r,1,this.transform.zoom)),f=Kt(p,"map"===l.get("icon-pitch-alignment"),"map"===l.get("icon-rotation-alignment"),this.transform,ue(r,1,this.transform.zoom))
this.retainedQueryData[o.bucketInstanceId]=new fe(o.bucketInstanceId,a,o.sourceLayerIndex,o.index,r.tileID),this.placeLayerBucket(o,p,h,f,u,c,i,r.holdingForFade(),n,s)}},ve.prototype.attemptAnchorPlacement=function(t,e,r,i,n,o,a,s,l,u,c,p,h,f){var d,m=[p.textOffset0,p.textOffset1],y=me(t,r,i,m,n),v=this.collisionIndex.placeCollisionBox(ye(e,y.x,y.y,o,a,this.transform.angle),c,s,l,u.predicate)
if(v.box.length>0)return this.prevPlacement&&this.prevPlacement.variableOffsets[p.crossTileID]&&this.prevPlacement.placements[p.crossTileID]&&this.prevPlacement.placements[p.crossTileID].text&&(d=this.prevPlacement.variableOffsets[p.crossTileID].anchor),this.variableOffsets[p.crossTileID]={textOffset:m,width:r,height:i,anchor:t,textBoxScale:n,prevAnchor:d},this.markUsedJustification(h,t,p,f),h.allowVerticalPlacement&&(this.markUsedOrientation(h,f,p),this.placedOrientations[p.crossTileID]=f),{shift:y,placedGlyphBoxes:v}},ve.prototype.placeLayerBucket=function(e,r,i,n,o,a,s,l,u,c){var p=this,h=e.layers[0].layout,f=t.evaluateSizeForZoom(e.textSizeData,this.transform.zoom),d=h.get("text-optional"),m=h.get("icon-optional"),y=h.get("text-allow-overlap"),v=h.get("icon-allow-overlap"),_=y&&(v||!e.hasIconData()||m),g=v&&(y||!e.hasTextData()||d),x=this.collisionGroups.get(e.sourceID),b="map"===h.get("text-rotation-alignment"),w="map"===h.get("text-pitch-alignment"),S="none"!==h.get("icon-text-fit"),E="viewport-y"===h.get("symbol-z-order")
!e.collisionArrays&&c&&e.deserializeCollisionBoxes(c)
var T=function(n,c){if(!u[n.crossTileID])if(l)p.placements[n.crossTileID]=new he(!1,!1,!1)
else{var v,E=!1,T=!1,A=!0,I=null,k={box:null,offscreen:null},z={box:null,offscreen:null},C=null,P=null,M=0,L=0,D=0
c.textFeatureIndex&&(M=c.textFeatureIndex),c.verticalTextFeatureIndex&&(L=c.verticalTextFeatureIndex)
var B=c.textBox
if(B){var R=function(r){var i=t.WritingMode.horizontal
if(e.allowVerticalPlacement&&!r&&p.prevPlacement){var o=p.prevPlacement.placedOrientations[n.crossTileID]
o&&(p.placedOrientations[n.crossTileID]=o,i=o,p.markUsedOrientation(e,i,n))}return i},F=function(r,i){if(e.allowVerticalPlacement&&n.numVerticalGlyphVertices>0&&c.verticalTextBox)for(var o=0,a=e.writingModes;o<a.length&&(a[o]===t.WritingMode.vertical?(k=i(),z=k):k=r(),!(k&&k.box&&k.box.length));o+=1);else k=r()}
if(h.get("text-variable-anchor")){var O=h.get("text-variable-anchor")
if(p.prevPlacement&&p.prevPlacement.variableOffsets[n.crossTileID]){var U=p.prevPlacement.variableOffsets[n.crossTileID]
O.indexOf(U.anchor)>0&&(O=O.filter(function(t){return t!==U.anchor})).unshift(U.anchor)}var V=function(t,i){for(var o=t.x2-t.x1,s=t.y2-t.y1,l=n.textBoxScale,u={box:[],offscreen:!1},c=y?2*O.length:O.length,h=0;h<c;++h){var f=O[h%O.length],d=h>=O.length,m=p.attemptAnchorPlacement(f,t,o,s,l,b,w,a,r,x,d,n,e,i)
if(m&&(u=m.placedGlyphBoxes)&&u.box&&u.box.length){E=!0,I=m.shift
break}}return u}
F(function(){return V(B,t.WritingMode.horizontal)},function(){var r=c.verticalTextBox,i=k&&k.box&&k.box.length
return e.allowVerticalPlacement&&!i&&n.numVerticalGlyphVertices>0&&r?V(r,t.WritingMode.vertical):{box:null,offscreen:null}}),k&&(E=k.box,A=k.offscreen)
var N=R(k&&k.box)
if(!E&&p.prevPlacement){var j=p.prevPlacement.variableOffsets[n.crossTileID]
j&&(p.variableOffsets[n.crossTileID]=j,p.markUsedJustification(e,j.anchor,n,N))}}else{var q=function(t,i){var o=p.collisionIndex.placeCollisionBox(t,h.get("text-allow-overlap"),a,r,x.predicate)
return o&&o.box&&o.box.length&&(p.markUsedOrientation(e,i,n),p.placedOrientations[n.crossTileID]=i),o}
F(function(){return q(B,t.WritingMode.horizontal)},function(){var r=c.verticalTextBox
return e.allowVerticalPlacement&&n.numVerticalGlyphVertices>0&&r?q(r,t.WritingMode.vertical):{box:null,offscreen:null}}),R(k&&k.box&&k.box.length)}}E=(v=k)&&v.box&&v.box.length>0,A=v&&v.offscreen
var Z=c.textCircles
if(Z){var G=e.text.placedSymbolArray.get(n.centerJustifiedTextSymbolIndex),X=t.evaluateSizeForFeature(e.textSizeData,f,G)
C=p.collisionIndex.placeCollisionCircles(Z,h.get("text-allow-overlap"),o,a,G,e.lineVertexArray,e.glyphOffsetArray,X,r,i,s,w,x.predicate),E=h.get("text-allow-overlap")||C.circles.length>0,A=A&&C.offscreen}if(c.iconFeatureIndex&&(D=c.iconFeatureIndex),c.iconBox){var W=S&&I?ye(c.iconBox,I.x,I.y,b,w,p.transform.angle):c.iconBox
T=(P=p.collisionIndex.placeCollisionBox(W,h.get("icon-allow-overlap"),a,r,x.predicate)).box.length>0,A=A&&P.offscreen}var K=d||0===n.numHorizontalGlyphVertices&&0===n.numVerticalGlyphVertices,H=m||0===n.numIconVertices
K||H?H?K||(T=T&&E):E=T&&E:T=E=T&&E,E&&v&&v.box&&(z&&z.box&&L?p.collisionIndex.insertCollisionBox(v.box,h.get("text-ignore-placement"),e.bucketInstanceId,L,x.ID):p.collisionIndex.insertCollisionBox(v.box,h.get("text-ignore-placement"),e.bucketInstanceId,M,x.ID)),T&&P&&p.collisionIndex.insertCollisionBox(P.box,h.get("icon-ignore-placement"),e.bucketInstanceId,D,x.ID),E&&C&&p.collisionIndex.insertCollisionCircles(C.circles,h.get("text-ignore-placement"),e.bucketInstanceId,M,x.ID),p.placements[n.crossTileID]=new he(E||_,T||g,A||e.justReloaded),u[n.crossTileID]=!0}}
if(E)for(var A=e.getSortedSymbolIndexes(this.transform.angle),I=A.length-1;I>=0;--I){var k=A[I]
T(e.symbolInstances.get(k),e.collisionArrays[k])}else for(var z=0;z<e.symbolInstances.length;++z)T(e.symbolInstances.get(z),e.collisionArrays[z])
e.justReloaded=!1},ve.prototype.markUsedJustification=function(e,r,i,n){var o,a={left:i.leftJustifiedTextSymbolIndex,center:i.centerJustifiedTextSymbolIndex,right:i.rightJustifiedTextSymbolIndex}
o=n===t.WritingMode.vertical?i.verticalPlacedTextSymbolIndex:a[t.getAnchorJustification(r)]
for(var s=0,l=[i.leftJustifiedTextSymbolIndex,i.centerJustifiedTextSymbolIndex,i.rightJustifiedTextSymbolIndex,i.verticalPlacedTextSymbolIndex];s<l.length;s+=1){var u=l[s]
u>=0&&(e.text.placedSymbolArray.get(u).crossTileID=o>=0&&u!==o?0:i.crossTileID)}},ve.prototype.markUsedOrientation=function(e,r,i){for(var n=r===t.WritingMode.horizontal||r===t.WritingMode.horizontalOnly?r:0,o=r===t.WritingMode.vertical?r:0,a=0,s=[i.leftJustifiedTextSymbolIndex,i.centerJustifiedTextSymbolIndex,i.rightJustifiedTextSymbolIndex];a<s.length;a+=1){var l=s[a]
e.text.placedSymbolArray.get(l).placedOrientation=n}i.verticalPlacedTextSymbolIndex&&(e.text.placedSymbolArray.get(i.verticalPlacedTextSymbolIndex).placedOrientation=o)},ve.prototype.commit=function(t){this.commitTime=t
var e=this.prevPlacement,r=!1,i=e&&0!==this.fadeDuration?(this.commitTime-e.commitTime)/this.fadeDuration:1,n=e?e.opacities:{},o=e?e.variableOffsets:{},a=e?e.placedOrientations:{}
for(var s in this.placements){var l=this.placements[s],u=n[s]
u?(this.opacities[s]=new pe(u,i,l.text,l.icon),r=r||l.text!==u.text.placed||l.icon!==u.icon.placed):(this.opacities[s]=new pe(null,i,l.text,l.icon,l.skipFade),r=r||l.text||l.icon)}for(var c in n){var p=n[c]
if(!this.opacities[c]){var h=new pe(p,i,!1,!1)
h.isHidden()||(this.opacities[c]=h,r=r||p.text.placed||p.icon.placed)}}for(var f in o)this.variableOffsets[f]||!this.opacities[f]||this.opacities[f].isHidden()||(this.variableOffsets[f]=o[f])
for(var d in a)this.placedOrientations[d]||!this.opacities[d]||this.opacities[d].isHidden()||(this.placedOrientations[d]=a[d])
r?this.lastPlacementChangeTime=t:"number"!=typeof this.lastPlacementChangeTime&&(this.lastPlacementChangeTime=e?e.lastPlacementChangeTime:t)},ve.prototype.updateLayerOpacities=function(t,e){for(var r={},i=0,n=e;i<n.length;i+=1){var o=n[i],a=o.getBucket(t)
a&&o.latestFeatureIndex&&t.id===a.layerIds[0]&&this.updateBucketOpacities(a,r,o.collisionBoxArray)}},ve.prototype.updateBucketOpacities=function(e,r,i){e.hasTextData()&&e.text.opacityVertexArray.clear(),e.hasIconData()&&e.icon.opacityVertexArray.clear(),e.hasIconCollisionBoxData()&&e.iconCollisionBox.collisionVertexArray.clear(),e.hasTextCollisionBoxData()&&e.textCollisionBox.collisionVertexArray.clear(),e.hasIconCollisionCircleData()&&e.iconCollisionCircle.collisionVertexArray.clear(),e.hasTextCollisionCircleData()&&e.textCollisionCircle.collisionVertexArray.clear()
var n=e.layers[0].layout,o=new pe(null,0,!1,!1,!0),a=n.get("text-allow-overlap"),s=n.get("icon-allow-overlap"),l=n.get("text-variable-anchor"),u="map"===n.get("text-rotation-alignment"),c="map"===n.get("text-pitch-alignment"),p="none"!==n.get("icon-text-fit"),h=new pe(null,0,a&&(s||!e.hasIconData()||n.get("icon-optional")),s&&(a||!e.hasTextData()||n.get("text-optional")),!0)
!e.collisionArrays&&i&&(e.hasIconCollisionBoxData()||e.hasIconCollisionCircleData()||e.hasTextCollisionBoxData()||e.hasTextCollisionCircleData())&&e.deserializeCollisionBoxes(i)
for(var f=0;f<e.symbolInstances.length;f++){var d=e.symbolInstances.get(f),m=d.numHorizontalGlyphVertices,y=d.numVerticalGlyphVertices,v=d.crossTileID,_=r[v],g=this.opacities[v]
_?g=o:g||(g=h,this.opacities[v]=g),r[v]=!0
var x=m>0||y>0,b=d.numIconVertices>0
if(x){for(var w=Ae(g.text),S=(m+y)/4,E=0;E<S;E++)e.text.opacityVertexArray.emplaceBack(w)
var T=g.text.isHidden()?1:0,A=this.placedOrientations[d.crossTileID],I=A===t.WritingMode.horizontal||A===t.WritingMode.horizontalOnly?1:0,k=A===t.WritingMode.vertical?1:0;[d.rightJustifiedTextSymbolIndex,d.centerJustifiedTextSymbolIndex,d.leftJustifiedTextSymbolIndex].forEach(function(t){t>=0&&(e.text.placedSymbolArray.get(t).hidden=T||k)}),d.verticalPlacedTextSymbolIndex>=0&&(e.text.placedSymbolArray.get(d.verticalPlacedTextSymbolIndex).hidden=T||I)
var z=this.variableOffsets[d.crossTileID]
z&&this.markUsedJustification(e,z.anchor,d,A)
var C=this.placedOrientations[d.crossTileID]
C&&(this.markUsedJustification(e,"left",d,C),this.markUsedOrientation(e,C,d))}if(b){for(var P=Ae(g.icon),M=0;M<d.numIconVertices/4;M++)e.icon.opacityVertexArray.emplaceBack(P)
e.icon.placedSymbolArray.get(f).hidden=g.icon.isHidden()}if(e.hasIconCollisionBoxData()||e.hasIconCollisionCircleData()||e.hasTextCollisionBoxData()||e.hasTextCollisionCircleData()){var L=e.collisionArrays[f]
if(L){var D=new t.Point(0,0)
if(L.textBox){var B=!0
if(l){var R=this.variableOffsets[v]
R?(D=me(R.anchor,R.width,R.height,R.textOffset,R.textBoxScale),u&&D._rotate(c?this.transform.angle:-this.transform.angle)):B=!1}_e(e.textCollisionBox.collisionVertexArray,g.text.placed,!B,D.x,D.y)}L.iconBox&&_e(e.iconCollisionBox.collisionVertexArray,g.icon.placed,!1,p?D.x:0,p?D.y:0)
var F=L.textCircles
if(F&&e.hasTextCollisionCircleData())for(var O=0;O<F.length;O+=5){var U=_||0===F[O+4]
_e(e.textCollisionCircle.collisionVertexArray,g.text.placed,U)}}}}e.sortFeatures(this.transform.angle),this.retainedQueryData[e.bucketInstanceId]&&(this.retainedQueryData[e.bucketInstanceId].featureSortOrder=e.featureSortOrder),e.hasTextData()&&e.text.opacityVertexBuffer&&e.text.opacityVertexBuffer.updateData(e.text.opacityVertexArray),e.hasIconData()&&e.icon.opacityVertexBuffer&&e.icon.opacityVertexBuffer.updateData(e.icon.opacityVertexArray),e.hasIconCollisionBoxData()&&e.iconCollisionBox.collisionVertexBuffer&&e.iconCollisionBox.collisionVertexBuffer.updateData(e.iconCollisionBox.collisionVertexArray),e.hasTextCollisionBoxData()&&e.textCollisionBox.collisionVertexBuffer&&e.textCollisionBox.collisionVertexBuffer.updateData(e.textCollisionBox.collisionVertexArray),e.hasIconCollisionCircleData()&&e.iconCollisionCircle.collisionVertexBuffer&&e.iconCollisionCircle.collisionVertexBuffer.updateData(e.iconCollisionCircle.collisionVertexArray),e.hasTextCollisionCircleData()&&e.textCollisionCircle.collisionVertexBuffer&&e.textCollisionCircle.collisionVertexBuffer.updateData(e.textCollisionCircle.collisionVertexArray)},ve.prototype.symbolFadeChange=function(t){return 0===this.fadeDuration?1:(t-this.commitTime)/this.fadeDuration},ve.prototype.hasTransitions=function(t){return this.stale||t-this.lastPlacementChangeTime<this.fadeDuration},ve.prototype.stillRecent=function(t){return this.commitTime+this.fadeDuration>t},ve.prototype.setStale=function(){this.stale=!0}
var ge=Math.pow(2,25),xe=Math.pow(2,24),be=Math.pow(2,17),we=Math.pow(2,16),Se=Math.pow(2,9),Ee=Math.pow(2,8),Te=Math.pow(2,1)
function Ae(t){if(0===t.opacity&&!t.placed)return 0
if(1===t.opacity&&t.placed)return 4294967295
var e=t.placed?1:0,r=Math.floor(127*t.opacity)
return r*ge+e*xe+r*be+e*we+r*Se+e*Ee+r*Te+e}var Ie=function(){this._currentTileIndex=0,this._seenCrossTileIDs={}}
Ie.prototype.continuePlacement=function(t,e,r,i,n){for(;this._currentTileIndex<t.length;){var o=t[this._currentTileIndex]
if(e.placeLayerTile(i,o,r,this._seenCrossTileIDs),this._currentTileIndex++,n())return!0}}
var ke=function(t,e,r,i,n,o,a){this.placement=new ve(t,n,o,a),this._currentPlacementIndex=e.length-1,this._forceFullPlacement=r,this._showCollisionBoxes=i,this._done=!1}
ke.prototype.isDone=function(){return this._done},ke.prototype.continuePlacement=function(e,r,i){for(var n=this,o=t.browser.now(),a=function(){var e=t.browser.now()-o
return!n._forceFullPlacement&&e>2};this._currentPlacementIndex>=0;){var s=r[e[this._currentPlacementIndex]],l=this.placement.collisionIndex.transform.zoom
if("symbol"===s.type&&(!s.minzoom||s.minzoom<=l)&&(!s.maxzoom||s.maxzoom>l)){if(this._inProgressLayer||(this._inProgressLayer=new Ie),this._inProgressLayer.continuePlacement(i[s.source],this.placement,this._showCollisionBoxes,s,a))return
delete this._inProgressLayer}this._currentPlacementIndex--}this._done=!0},ke.prototype.commit=function(t){return this.placement.commit(t),this.placement}
var ze=512/t.EXTENT/2,Ce=function(t,e,r){this.tileID=t,this.indexedSymbolInstances={},this.bucketInstanceId=r
for(var i=0;i<e.length;i++){var n=e.get(i),o=n.key
this.indexedSymbolInstances[o]||(this.indexedSymbolInstances[o]=[]),this.indexedSymbolInstances[o].push({crossTileID:n.crossTileID,coord:this.getScaledCoordinates(n,t)})}}
Ce.prototype.getScaledCoordinates=function(e,r){var i=r.canonical.z-this.tileID.canonical.z,n=ze/Math.pow(2,i)
return{x:Math.floor((r.canonical.x*t.EXTENT+e.anchorX)*n),y:Math.floor((r.canonical.y*t.EXTENT+e.anchorY)*n)}},Ce.prototype.findMatches=function(t,e,r){for(var i=this.tileID.canonical.z<e.canonical.z?1:Math.pow(2,this.tileID.canonical.z-e.canonical.z),n=0;n<t.length;n++){var o=t.get(n)
if(!o.crossTileID){var a=this.indexedSymbolInstances[o.key]
if(a)for(var s=this.getScaledCoordinates(o,e),l=0,u=a;l<u.length;l+=1){var c=u[l]
if(Math.abs(c.coord.x-s.x)<=i&&Math.abs(c.coord.y-s.y)<=i&&!r[c.crossTileID]){r[c.crossTileID]=!0,o.crossTileID=c.crossTileID
break}}}}}
var Pe=function(){this.maxCrossTileID=0}
Pe.prototype.generate=function(){return++this.maxCrossTileID}
var Me=function(){this.indexes={},this.usedCrossTileIDs={},this.lng=0}
Me.prototype.handleWrapJump=function(t){var e=Math.round((t-this.lng)/360)
if(0!==e)for(var r in this.indexes){var i=this.indexes[r],n={}
for(var o in i){var a=i[o]
a.tileID=a.tileID.unwrapTo(a.tileID.wrap+e),n[a.tileID.key]=a}this.indexes[r]=n}this.lng=t},Me.prototype.addBucket=function(t,e,r){if(this.indexes[t.overscaledZ]&&this.indexes[t.overscaledZ][t.key]){if(this.indexes[t.overscaledZ][t.key].bucketInstanceId===e.bucketInstanceId)return!1
this.removeBucketCrossTileIDs(t.overscaledZ,this.indexes[t.overscaledZ][t.key])}for(var i=0;i<e.symbolInstances.length;i++)e.symbolInstances.get(i).crossTileID=0
this.usedCrossTileIDs[t.overscaledZ]||(this.usedCrossTileIDs[t.overscaledZ]={})
var n=this.usedCrossTileIDs[t.overscaledZ]
for(var o in this.indexes){var a=this.indexes[o]
if(Number(o)>t.overscaledZ)for(var s in a){var l=a[s]
l.tileID.isChildOf(t)&&l.findMatches(e.symbolInstances,t,n)}else{var u=a[t.scaledTo(Number(o)).key]
u&&u.findMatches(e.symbolInstances,t,n)}}for(var c=0;c<e.symbolInstances.length;c++){var p=e.symbolInstances.get(c)
p.crossTileID||(p.crossTileID=r.generate(),n[p.crossTileID]=!0)}return void 0===this.indexes[t.overscaledZ]&&(this.indexes[t.overscaledZ]={}),this.indexes[t.overscaledZ][t.key]=new Ce(t,e.symbolInstances,e.bucketInstanceId),!0},Me.prototype.removeBucketCrossTileIDs=function(t,e){for(var r in e.indexedSymbolInstances)for(var i=0,n=e.indexedSymbolInstances[r];i<n.length;i+=1){var o=n[i]
delete this.usedCrossTileIDs[t][o.crossTileID]}},Me.prototype.removeStaleBuckets=function(t){var e=!1
for(var r in this.indexes){var i=this.indexes[r]
for(var n in i)t[i[n].bucketInstanceId]||(this.removeBucketCrossTileIDs(r,i[n]),delete i[n],e=!0)}return e}
var Le=function(){this.layerIndexes={},this.crossTileIDs=new Pe,this.maxBucketInstanceId=0,this.bucketsInCurrentPlacement={}}
Le.prototype.addLayer=function(t,e,r){var i=this.layerIndexes[t.id]
void 0===i&&(i=this.layerIndexes[t.id]=new Me)
var n=!1,o={}
i.handleWrapJump(r)
for(var a=0,s=e;a<s.length;a+=1){var l=s[a],u=l.getBucket(t)
u&&t.id===u.layerIds[0]&&(u.bucketInstanceId||(u.bucketInstanceId=++this.maxBucketInstanceId),i.addBucket(l.tileID,u,this.crossTileIDs)&&(n=!0),o[u.bucketInstanceId]=!0)}return i.removeStaleBuckets(o)&&(n=!0),n},Le.prototype.pruneUnusedLayers=function(t){var e={}
for(var r in t.forEach(function(t){e[t]=!0}),this.layerIndexes)e[r]||delete this.layerIndexes[r]}
var De=function(e,r){return t.emitValidationErrors(e,r&&r.filter(function(t){return"source.canvas"!==t.identifier}))},Be=t.pick(Ut,["addLayer","removeLayer","setPaintProperty","setLayoutProperty","setFilter","addSource","removeSource","setLayerZoomRange","setLight","setTransition","setGeoJSONSourceData"]),Re=t.pick(Ut,["setCenter","setZoom","setBearing","setPitch"]),Fe=function(e){function r(i,n){var o=this
void 0===n&&(n={}),e.call(this),this.map=i,this.dispatcher=new E((Bt||(Bt=new Dt),Bt),this),this.imageManager=new h,this.imageManager.setEventedParent(this),this.glyphManager=new g(i._requestManager,n.localIdeographFontFamily),this.lineAtlas=new S(256,512),this.crossTileSymbolIndex=new Le,this._layers={},this._order=[],this.sourceCaches={},this.zoomHistory=new t.ZoomHistory,this._loaded=!1,this._resetUpdates(),this.dispatcher.broadcast("setReferrer",t.getReferrer())
var a=this
this._rtlTextPluginCallback=r.registerForPluginAvailability(function(t){for(var e in a.dispatcher.broadcast("loadRTLTextPlugin",t.pluginURL,t.completionCallback),a.sourceCaches)a.sourceCaches[e].reload()}),this.on("data",function(t){if("source"===t.dataType&&"metadata"===t.sourceDataType){var e=o.sourceCaches[t.sourceId]
if(e){var r=e.getSource()
if(r&&r.vectorLayerIds)for(var i in o._layers){var n=o._layers[i]
n.source===r.id&&o._validateLayer(n)}}}})}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r.prototype.loadURL=function(e,r){var i=this
void 0===r&&(r={}),this.fire(new t.Event("dataloading",{dataType:"style"}))
var n="boolean"==typeof r.validate?r.validate:!t.isMapboxURL(e)
e=this.map._requestManager.normalizeStyleURL(e,r.accessToken)
var o=this.map._requestManager.transformRequest(e,t.ResourceType.Style)
this._request=t.getJSON(o,function(e,r){i._request=null,e?i.fire(new t.ErrorEvent(e)):r&&i._load(r,n)})},r.prototype.loadJSON=function(e,r){var i=this
void 0===r&&(r={}),this.fire(new t.Event("dataloading",{dataType:"style"})),this._request=t.browser.frame(function(){i._request=null,i._load(e,!1!==r.validate)})},r.prototype._load=function(e,r){var i=this
if(!r||!De(this,t.validateStyle(e))){for(var n in this._loaded=!0,this.stylesheet=e,e.sources)this.addSource(n,e.sources[n],{validate:!1})
e.sprite?this._spriteRequest=function(e,r,i){var n,o,a,s=t.browser.devicePixelRatio>1?"@2x":"",l=t.getJSON(r.transformRequest(r.normalizeSpriteURL(e,s,".json"),t.ResourceType.SpriteJSON),function(t,e){l=null,a||(a=t,n=e,c())}),u=t.getImage(r.transformRequest(r.normalizeSpriteURL(e,s,".png"),t.ResourceType.SpriteImage),function(t,e){u=null,a||(a=t,o=e,c())})
function c(){if(a)i(a)
else if(n&&o){var e=t.browser.getImageData(o),r={}
for(var s in n){var l=n[s],u=l.width,c=l.height,p=l.x,h=l.y,f=l.sdf,d=l.pixelRatio,m=new t.RGBAImage({width:u,height:c})
t.RGBAImage.copy(e,m,{x:p,y:h},{x:0,y:0},{width:u,height:c}),r[s]={data:m,pixelRatio:d,sdf:f}}i(null,r)}}return{cancel:function(){l&&(l.cancel(),l=null),u&&(u.cancel(),u=null)}}}(e.sprite,this.map._requestManager,function(e,r){if(i._spriteRequest=null,e)i.fire(new t.ErrorEvent(e))
else if(r)for(var n in r)i.imageManager.addImage(n,r[n])
i.imageManager.setLoaded(!0),i.dispatcher.broadcast("setImages",i.imageManager.listImages()),i.fire(new t.Event("data",{dataType:"style"}))}):this.imageManager.setLoaded(!0),this.glyphManager.setURL(e.glyphs)
var o=Ot(this.stylesheet.layers)
this._order=o.map(function(t){return t.id}),this._layers={}
for(var a=0,s=o;a<s.length;a+=1){var l=s[a];(l=t.createStyleLayer(l)).setEventedParent(this,{layer:{id:l.id}}),this._layers[l.id]=l}this.dispatcher.broadcast("setLayers",this._serializeLayers(this._order)),this.light=new w(this.stylesheet.light),this.fire(new t.Event("data",{dataType:"style"})),this.fire(new t.Event("style.load"))}},r.prototype._validateLayer=function(e){var r=this.sourceCaches[e.source]
if(r){var i=e.sourceLayer
if(i){var n=r.getSource();("geojson"===n.type||n.vectorLayerIds&&-1===n.vectorLayerIds.indexOf(i))&&this.fire(new t.ErrorEvent(new Error('Source layer "'+i+'" does not exist on source "'+n.id+'" as specified by style layer "'+e.id+'"')))}}},r.prototype.loaded=function(){if(!this._loaded)return!1
if(Object.keys(this._updatedSources).length)return!1
for(var t in this.sourceCaches)if(!this.sourceCaches[t].loaded())return!1
return!!this.imageManager.isLoaded()},r.prototype._serializeLayers=function(t){for(var e=[],r=0,i=t;r<i.length;r+=1){var n=i[r],o=this._layers[n]
"custom"!==o.type&&e.push(o.serialize())}return e},r.prototype.hasTransitions=function(){if(this.light&&this.light.hasTransition())return!0
for(var t in this.sourceCaches)if(this.sourceCaches[t].hasTransition())return!0
for(var e in this._layers)if(this._layers[e].hasTransition())return!0
return!1},r.prototype._checkLoaded=function(){if(!this._loaded)throw new Error("Style is not done loading")},r.prototype.update=function(e){if(this._loaded){var r=this._changed
if(this._changed){var i=Object.keys(this._updatedLayers),n=Object.keys(this._removedLayers)
for(var o in(i.length||n.length)&&this._updateWorkerLayers(i,n),this._updatedSources){var a=this._updatedSources[o]
"reload"===a?this._reloadSource(o):"clear"===a&&this._clearSource(o)}for(var s in this._updatedPaintProps)this._layers[s].updateTransitions(e)
this.light.updateTransitions(e),this._resetUpdates()}for(var l in this.sourceCaches)this.sourceCaches[l].used=!1
for(var u=0,c=this._order;u<c.length;u+=1){var p=c[u],h=this._layers[p]
h.recalculate(e,this.imageManager.listImages()),!h.isHidden(e.zoom)&&h.source&&(this.sourceCaches[h.source].used=!0)}this.light.recalculate(e),this.z=e.zoom,r&&this.fire(new t.Event("data",{dataType:"style"}))}},r.prototype._updateWorkerLayers=function(t,e){this.dispatcher.broadcast("updateLayers",{layers:this._serializeLayers(t),removedIds:e})},r.prototype._resetUpdates=function(){this._changed=!1,this._updatedLayers={},this._removedLayers={},this._updatedSources={},this._updatedPaintProps={}},r.prototype.setState=function(e){var r=this
if(this._checkLoaded(),De(this,t.validateStyle(e)))return!1;(e=t.clone$1(e)).layers=Ot(e.layers)
var i=function(e,r){if(!e)return[{command:Ut.setStyle,args:[r]}]
var i=[]
try{if(!t.deepEqual(e.version,r.version))return[{command:Ut.setStyle,args:[r]}]
t.deepEqual(e.center,r.center)||i.push({command:Ut.setCenter,args:[r.center]}),t.deepEqual(e.zoom,r.zoom)||i.push({command:Ut.setZoom,args:[r.zoom]}),t.deepEqual(e.bearing,r.bearing)||i.push({command:Ut.setBearing,args:[r.bearing]}),t.deepEqual(e.pitch,r.pitch)||i.push({command:Ut.setPitch,args:[r.pitch]}),t.deepEqual(e.sprite,r.sprite)||i.push({command:Ut.setSprite,args:[r.sprite]}),t.deepEqual(e.glyphs,r.glyphs)||i.push({command:Ut.setGlyphs,args:[r.glyphs]}),t.deepEqual(e.transition,r.transition)||i.push({command:Ut.setTransition,args:[r.transition]}),t.deepEqual(e.light,r.light)||i.push({command:Ut.setLight,args:[r.light]})
var n={},o=[]
!function(e,r,i,n){var o
for(o in r=r||{},e=e||{})e.hasOwnProperty(o)&&(r.hasOwnProperty(o)||Nt(o,i,n))
for(o in r)r.hasOwnProperty(o)&&(e.hasOwnProperty(o)?t.deepEqual(e[o],r[o])||("geojson"===e[o].type&&"geojson"===r[o].type&&qt(e,r,o)?i.push({command:Ut.setGeoJSONSourceData,args:[o,r[o].data]}):jt(o,r,i,n)):Vt(o,r,i))}(e.sources,r.sources,o,n)
var a=[]
e.layers&&e.layers.forEach(function(t){n[t.source]?i.push({command:Ut.removeLayer,args:[t.id]}):a.push(t)}),i=i.concat(o),function(e,r,i){r=r||[]
var n,o,a,s,l,u,c,p=(e=e||[]).map(Gt),h=r.map(Gt),f=e.reduce(Xt,{}),d=r.reduce(Xt,{}),m=p.slice(),y=Object.create(null)
for(n=0,o=0;n<p.length;n++)a=p[n],d.hasOwnProperty(a)?o++:(i.push({command:Ut.removeLayer,args:[a]}),m.splice(m.indexOf(a,o),1))
for(n=0,o=0;n<h.length;n++)a=h[h.length-1-n],m[m.length-1-n]!==a&&(f.hasOwnProperty(a)?(i.push({command:Ut.removeLayer,args:[a]}),m.splice(m.lastIndexOf(a,m.length-o),1)):o++,u=m[m.length-n],i.push({command:Ut.addLayer,args:[d[a],u]}),m.splice(m.length-n,0,a),y[a]=!0)
for(n=0;n<h.length;n++)if(s=f[a=h[n]],l=d[a],!y[a]&&!t.deepEqual(s,l))if(t.deepEqual(s.source,l.source)&&t.deepEqual(s["source-layer"],l["source-layer"])&&t.deepEqual(s.type,l.type)){for(c in Zt(s.layout,l.layout,i,a,null,Ut.setLayoutProperty),Zt(s.paint,l.paint,i,a,null,Ut.setPaintProperty),t.deepEqual(s.filter,l.filter)||i.push({command:Ut.setFilter,args:[a,l.filter]}),t.deepEqual(s.minzoom,l.minzoom)&&t.deepEqual(s.maxzoom,l.maxzoom)||i.push({command:Ut.setLayerZoomRange,args:[a,l.minzoom,l.maxzoom]}),s)s.hasOwnProperty(c)&&"layout"!==c&&"paint"!==c&&"filter"!==c&&"metadata"!==c&&"minzoom"!==c&&"maxzoom"!==c&&(0===c.indexOf("paint.")?Zt(s[c],l[c],i,a,c.slice(6),Ut.setPaintProperty):t.deepEqual(s[c],l[c])||i.push({command:Ut.setLayerProperty,args:[a,c,l[c]]}))
for(c in l)l.hasOwnProperty(c)&&!s.hasOwnProperty(c)&&"layout"!==c&&"paint"!==c&&"filter"!==c&&"metadata"!==c&&"minzoom"!==c&&"maxzoom"!==c&&(0===c.indexOf("paint.")?Zt(s[c],l[c],i,a,c.slice(6),Ut.setPaintProperty):t.deepEqual(s[c],l[c])||i.push({command:Ut.setLayerProperty,args:[a,c,l[c]]}))}else i.push({command:Ut.removeLayer,args:[a]}),u=m[m.lastIndexOf(a)+1],i.push({command:Ut.addLayer,args:[l,u]})}(a,r.layers,i)}catch(t){console.warn("Unable to compute style diff:",t),i=[{command:Ut.setStyle,args:[r]}]}return i}(this.serialize(),e).filter(function(t){return!(t.command in Re)})
if(0===i.length)return!1
var n=i.filter(function(t){return!(t.command in Be)})
if(n.length>0)throw new Error("Unimplemented: "+n.map(function(t){return t.command}).join(", ")+".")
return i.forEach(function(t){"setTransition"!==t.command&&r[t.command].apply(r,t.args)}),this.stylesheet=e,!0},r.prototype.addImage=function(e,r){if(this.getImage(e))return this.fire(new t.ErrorEvent(new Error("An image with this name already exists.")))
this.imageManager.addImage(e,r),this.fire(new t.Event("data",{dataType:"style"}))},r.prototype.updateImage=function(t,e){this.imageManager.updateImage(t,e)},r.prototype.getImage=function(t){return this.imageManager.getImage(t)},r.prototype.removeImage=function(e){if(!this.getImage(e))return this.fire(new t.ErrorEvent(new Error("No image with this name exists.")))
this.imageManager.removeImage(e),this.fire(new t.Event("data",{dataType:"style"}))},r.prototype.listImages=function(){return this._checkLoaded(),this.imageManager.listImages()},r.prototype.addSource=function(e,r,i){var n=this
if(void 0===i&&(i={}),this._checkLoaded(),void 0!==this.sourceCaches[e])throw new Error("There is already a source with this ID")
if(!r.type)throw new Error("The type property must be defined, but the only the following properties were given: "+Object.keys(r).join(", ")+".")
if(!(["vector","raster","geojson","video","image"].indexOf(r.type)>=0&&this._validate(t.validateStyle.source,"sources."+e,r,null,i))){this.map&&this.map._collectResourceTiming&&(r.collectResourceTiming=!0)
var o=this.sourceCaches[e]=new Ct(e,r,this.dispatcher)
o.style=this,o.setEventedParent(this,function(){return{isSourceLoaded:n.loaded(),source:o.serialize(),sourceId:e}}),o.onAdd(this.map),this._changed=!0}},r.prototype.removeSource=function(e){if(this._checkLoaded(),void 0===this.sourceCaches[e])throw new Error("There is no source with this ID")
for(var r in this._layers)if(this._layers[r].source===e)return this.fire(new t.ErrorEvent(new Error('Source "'+e+'" cannot be removed while layer "'+r+'" is using it.')))
var i=this.sourceCaches[e]
delete this.sourceCaches[e],delete this._updatedSources[e],i.fire(new t.Event("data",{sourceDataType:"metadata",dataType:"source",sourceId:e})),i.setEventedParent(null),i.clearTiles(),i.onRemove&&i.onRemove(this.map),this._changed=!0},r.prototype.setGeoJSONSourceData=function(t,e){this._checkLoaded(),this.sourceCaches[t].getSource().setData(e),this._changed=!0},r.prototype.getSource=function(t){return this.sourceCaches[t]&&this.sourceCaches[t].getSource()},r.prototype.addLayer=function(e,r,i){void 0===i&&(i={}),this._checkLoaded()
var n=e.id
if(this.getLayer(n))this.fire(new t.ErrorEvent(new Error('Layer with id "'+n+'" already exists on this map')))
else{var o
if("custom"===e.type){if(De(this,t.validateCustomStyleLayer(e)))return
o=t.createStyleLayer(e)}else{if("object"==typeof e.source&&(this.addSource(n,e.source),e=t.clone$1(e),e=t.extend(e,{source:n})),this._validate(t.validateStyle.layer,"layers."+n,e,{arrayIndex:-1},i))return
o=t.createStyleLayer(e),this._validateLayer(o),o.setEventedParent(this,{layer:{id:n}})}var a=r?this._order.indexOf(r):this._order.length
if(r&&-1===a)this.fire(new t.ErrorEvent(new Error('Layer with id "'+r+'" does not exist on this map.')))
else{if(this._order.splice(a,0,n),this._layerOrderChanged=!0,this._layers[n]=o,this._removedLayers[n]&&o.source&&"custom"!==o.type){var s=this._removedLayers[n]
delete this._removedLayers[n],s.type!==o.type?this._updatedSources[o.source]="clear":(this._updatedSources[o.source]="reload",this.sourceCaches[o.source].pause())}this._updateLayer(o),o.onAdd&&o.onAdd(this.map)}}},r.prototype.moveLayer=function(e,r){if(this._checkLoaded(),this._changed=!0,this._layers[e]){if(e!==r){var i=this._order.indexOf(e)
this._order.splice(i,1)
var n=r?this._order.indexOf(r):this._order.length
r&&-1===n?this.fire(new t.ErrorEvent(new Error('Layer with id "'+r+'" does not exist on this map.'))):(this._order.splice(n,0,e),this._layerOrderChanged=!0)}}else this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style and cannot be moved.")))},r.prototype.removeLayer=function(e){this._checkLoaded()
var r=this._layers[e]
if(r){r.setEventedParent(null)
var i=this._order.indexOf(e)
this._order.splice(i,1),this._layerOrderChanged=!0,this._changed=!0,this._removedLayers[e]=r,delete this._layers[e],delete this._updatedLayers[e],delete this._updatedPaintProps[e],r.onRemove&&r.onRemove(this.map)}else this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style and cannot be removed.")))},r.prototype.getLayer=function(t){return this._layers[t]},r.prototype.setLayerZoomRange=function(e,r,i){this._checkLoaded()
var n=this.getLayer(e)
n?n.minzoom===r&&n.maxzoom===i||(null!=r&&(n.minzoom=r),null!=i&&(n.maxzoom=i),this._updateLayer(n)):this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style and cannot have zoom extent.")))},r.prototype.setFilter=function(e,r,i){void 0===i&&(i={}),this._checkLoaded()
var n=this.getLayer(e)
if(n){if(!t.deepEqual(n.filter,r))return null==r?(n.filter=void 0,void this._updateLayer(n)):void(this._validate(t.validateStyle.filter,"layers."+n.id+".filter",r,null,i)||(n.filter=t.clone$1(r),this._updateLayer(n)))}else this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style and cannot be filtered.")))},r.prototype.getFilter=function(e){return t.clone$1(this.getLayer(e).filter)},r.prototype.setLayoutProperty=function(e,r,i,n){void 0===n&&(n={}),this._checkLoaded()
var o=this.getLayer(e)
o?t.deepEqual(o.getLayoutProperty(r),i)||(o.setLayoutProperty(r,i,n),this._updateLayer(o)):this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style and cannot be styled.")))},r.prototype.getLayoutProperty=function(e,r){var i=this.getLayer(e)
if(i)return i.getLayoutProperty(r)
this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style.")))},r.prototype.setPaintProperty=function(e,r,i,n){void 0===n&&(n={}),this._checkLoaded()
var o=this.getLayer(e)
o?t.deepEqual(o.getPaintProperty(r),i)||(o.setPaintProperty(r,i,n)&&this._updateLayer(o),this._changed=!0,this._updatedPaintProps[e]=!0):this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style and cannot be styled.")))},r.prototype.getPaintProperty=function(t,e){return this.getLayer(t).getPaintProperty(e)},r.prototype.setFeatureState=function(e,r){this._checkLoaded()
var i=e.source,n=e.sourceLayer,o=this.sourceCaches[i],a=parseInt(e.id,10)
if(void 0!==o){var s=o.getSource().type
"geojson"===s&&n?this.fire(new t.ErrorEvent(new Error("GeoJSON sources cannot have a sourceLayer parameter."))):"vector"!==s||n?isNaN(a)||a<0?this.fire(new t.ErrorEvent(new Error("The feature id parameter must be provided and non-negative."))):o.setFeatureState(n,a,r):this.fire(new t.ErrorEvent(new Error("The sourceLayer parameter must be provided for vector source types.")))}else this.fire(new t.ErrorEvent(new Error("The source '"+i+"' does not exist in the map's style.")))},r.prototype.removeFeatureState=function(e,r){this._checkLoaded()
var i=e.source,n=this.sourceCaches[i]
if(void 0!==n){var o=n.getSource().type,a="vector"===o?e.sourceLayer:void 0,s=parseInt(e.id,10)
"vector"!==o||a?void 0!==e.id&&isNaN(s)||s<0?this.fire(new t.ErrorEvent(new Error("The feature id parameter must be non-negative."))):r&&"string"!=typeof e.id&&"number"!=typeof e.id?this.fire(new t.ErrorEvent(new Error("A feature id is requred to remove its specific state property."))):n.removeFeatureState(a,s,r):this.fire(new t.ErrorEvent(new Error("The sourceLayer parameter must be provided for vector source types.")))}else this.fire(new t.ErrorEvent(new Error("The source '"+i+"' does not exist in the map's style.")))},r.prototype.getFeatureState=function(e){this._checkLoaded()
var r=e.source,i=e.sourceLayer,n=this.sourceCaches[r],o=parseInt(e.id,10)
if(void 0!==n)if("vector"!==n.getSource().type||i){if(!(isNaN(o)||o<0))return n.getFeatureState(i,o)
this.fire(new t.ErrorEvent(new Error("The feature id parameter must be provided and non-negative.")))}else this.fire(new t.ErrorEvent(new Error("The sourceLayer parameter must be provided for vector source types.")))
else this.fire(new t.ErrorEvent(new Error("The source '"+r+"' does not exist in the map's style.")))},r.prototype.getTransition=function(){return t.extend({duration:300,delay:0},this.stylesheet&&this.stylesheet.transition)},r.prototype.serialize=function(){return t.filterObject({version:this.stylesheet.version,name:this.stylesheet.name,metadata:this.stylesheet.metadata,light:this.stylesheet.light,center:this.stylesheet.center,zoom:this.stylesheet.zoom,bearing:this.stylesheet.bearing,pitch:this.stylesheet.pitch,sprite:this.stylesheet.sprite,glyphs:this.stylesheet.glyphs,transition:this.stylesheet.transition,sources:t.mapObject(this.sourceCaches,function(t){return t.serialize()}),layers:this._serializeLayers(this._order)},function(t){return void 0!==t})},r.prototype._updateLayer=function(t){this._updatedLayers[t.id]=!0,t.source&&!this._updatedSources[t.source]&&(this._updatedSources[t.source]="reload",this.sourceCaches[t.source].pause()),this._changed=!0},r.prototype._flattenAndSortRenderedFeatures=function(t){for(var e=this,r=function(t){return"fill-extrusion"===e._layers[t].type},i={},n=[],o=this._order.length-1;o>=0;o--){var a=this._order[o]
if(r(a)){i[a]=o
for(var s=0,l=t;s<l.length;s+=1){var u=l[s][a]
if(u)for(var c=0,p=u;c<p.length;c+=1){var h=p[c]
n.push(h)}}}}n.sort(function(t,e){return e.intersectionZ-t.intersectionZ})
for(var f=[],d=this._order.length-1;d>=0;d--){var m=this._order[d]
if(r(m))for(var y=n.length-1;y>=0;y--){var v=n[y].feature
if(i[v.layer.id]<d)break
f.push(v),n.pop()}else for(var _=0,g=t;_<g.length;_+=1){var x=g[_][m]
if(x)for(var b=0,w=x;b<w.length;b+=1){var S=w[b]
f.push(S.feature)}}}return f},r.prototype.queryRenderedFeatures=function(e,r,i){r&&r.filter&&this._validate(t.validateStyle.filter,"queryRenderedFeatures.filter",r.filter,null,r)
var n={}
if(r&&r.layers){if(!Array.isArray(r.layers))return this.fire(new t.ErrorEvent(new Error("parameters.layers must be an Array."))),[]
for(var o=0,a=r.layers;o<a.length;o+=1){var s=a[o],l=this._layers[s]
if(!l)return this.fire(new t.ErrorEvent(new Error("The layer '"+s+"' does not exist in the map's style and cannot be queried for features."))),[]
n[l.source]=!0}}var u=[]
for(var c in this.sourceCaches)r.layers&&!n[c]||u.push(F(this.sourceCaches[c],this._layers,e,r,i))
return this.placement&&u.push(function(t,e,r,i,n,o){for(var a={},s=n.queryRenderedSymbols(r),l=[],u=0,c=Object.keys(s).map(Number);u<c.length;u+=1){var p=c[u]
l.push(o[p])}l.sort(O)
for(var h=function(){var e=d[f],r=e.featureIndex.lookupSymbolFeatures(s[e.bucketInstanceId],e.bucketIndex,e.sourceLayerIndex,i.filter,i.layers,t)
for(var n in r){var o=a[n]=a[n]||[],l=r[n]
l.sort(function(t,r){var i=e.featureSortOrder
if(i){var n=i.indexOf(t.featureIndex)
return i.indexOf(r.featureIndex)-n}return r.featureIndex-t.featureIndex})
for(var u=0,c=l;u<c.length;u+=1){var p=c[u]
o.push(p)}}},f=0,d=l;f<d.length;f+=1)h()
var m=function(r){a[r].forEach(function(i){var n=i.feature,o=t[r],a=e[o.source].getFeatureState(n.layer["source-layer"],n.id)
n.source=n.layer.source,n.layer["source-layer"]&&(n.sourceLayer=n.layer["source-layer"]),n.state=a})}
for(var y in a)m(y)
return a}(this._layers,this.sourceCaches,e,r,this.placement.collisionIndex,this.placement.retainedQueryData)),this._flattenAndSortRenderedFeatures(u)},r.prototype.querySourceFeatures=function(e,r){r&&r.filter&&this._validate(t.validateStyle.filter,"querySourceFeatures.filter",r.filter,null,r)
var i=this.sourceCaches[e]
return i?function(t,e){for(var r=t.getRenderableIds().map(function(e){return t.getTileByID(e)}),i=[],n={},o=0;o<r.length;o++){var a=r[o],s=a.tileID.canonical.key
n[s]||(n[s]=!0,a.querySourceFeatures(i,e))}return i}(i,r):[]},r.prototype.addSourceType=function(t,e,i){return r.getSourceType(t)?i(new Error('A source type called "'+t+'" already exists.')):(r.setSourceType(t,e),e.workerSourceURL?void this.dispatcher.broadcast("loadWorkerSource",{name:t,url:e.workerSourceURL},i):i(null,null))},r.prototype.getLight=function(){return this.light.getLight()},r.prototype.setLight=function(e,r){void 0===r&&(r={}),this._checkLoaded()
var i=this.light.getLight(),n=!1
for(var o in e)if(!t.deepEqual(e[o],i[o])){n=!0
break}if(n){var a={now:t.browser.now(),transition:t.extend({duration:300,delay:0},this.stylesheet.transition)}
this.light.setLight(e,r),this.light.updateTransitions(a)}},r.prototype._validate=function(e,r,i,n,o){return void 0===o&&(o={}),(!o||!1!==o.validate)&&De(this,e.call(t.validateStyle,t.extend({key:r,style:this.serialize(),value:i,styleSpec:t.styleSpec},n)))},r.prototype._remove=function(){for(var e in this._request&&(this._request.cancel(),this._request=null),this._spriteRequest&&(this._spriteRequest.cancel(),this._spriteRequest=null),t.evented.off("pluginAvailable",this._rtlTextPluginCallback),this.sourceCaches)this.sourceCaches[e].clearTiles()
this.dispatcher.remove()},r.prototype._clearSource=function(t){this.sourceCaches[t].clearTiles()},r.prototype._reloadSource=function(t){this.sourceCaches[t].resume(),this.sourceCaches[t].reload()},r.prototype._updateSources=function(t){for(var e in this.sourceCaches)this.sourceCaches[e].update(t)},r.prototype._generateCollisionBoxes=function(){for(var t in this.sourceCaches)this._reloadSource(t)},r.prototype._updatePlacement=function(e,r,i,n){for(var o=!1,a=!1,s={},l=0,u=this._order;l<u.length;l+=1){var c=u[l],p=this._layers[c]
if("symbol"===p.type){if(!s[p.source]){var h=this.sourceCaches[p.source]
s[p.source]=h.getRenderableIds(!0).map(function(t){return h.getTileByID(t)}).sort(function(t,e){return e.tileID.overscaledZ-t.tileID.overscaledZ||(t.tileID.isLessThan(e.tileID)?-1:1)})}var f=this.crossTileSymbolIndex.addLayer(p,s[p.source],e.center.lng)
o=o||f}}this.crossTileSymbolIndex.pruneUnusedLayers(this._order)
var d=this._layerOrderChanged||0===i
if((d||!this.pauseablePlacement||this.pauseablePlacement.isDone()&&!this.placement.stillRecent(t.browser.now()))&&(this.pauseablePlacement=new ke(e,this._order,d,r,i,n,this.placement),this._layerOrderChanged=!1),this.pauseablePlacement.isDone()?this.placement.setStale():(this.pauseablePlacement.continuePlacement(this._order,this._layers,s),this.pauseablePlacement.isDone()&&(this.placement=this.pauseablePlacement.commit(t.browser.now()),a=!0),o&&this.pauseablePlacement.placement.setStale()),a||o)for(var m=0,y=this._order;m<y.length;m+=1){var v=y[m],_=this._layers[v]
"symbol"===_.type&&this.placement.updateLayerOpacities(_,s[_.source])}return!this.pauseablePlacement.isDone()||this.placement.hasTransitions(t.browser.now())},r.prototype._releaseSymbolFadeTiles=function(){for(var t in this.sourceCaches)this.sourceCaches[t].releaseSymbolFadeTiles()},r.prototype.getImages=function(t,e,r){this.imageManager.getImages(e.icons,r)},r.prototype.getGlyphs=function(t,e,r){this.glyphManager.getGlyphs(e.stacks,r)},r.prototype.getResource=function(e,r,i){return t.makeRequest(r,i)},r}(t.Evented)
Fe.getSourceType=function(t){return D[t]},Fe.setSourceType=function(t,e){D[t]=e},Fe.registerForPluginAvailability=t.registerForPluginAvailability
var Oe=t.createLayout([{name:"a_pos",type:"Int16",components:2}]),Ue=cr("#ifdef GL_ES\nprecision mediump float;\n#else\n#if !defined(lowp)\n#define lowp\n#endif\n#if !defined(mediump)\n#define mediump\n#endif\n#if !defined(highp)\n#define highp\n#endif\n#endif","#ifdef GL_ES\nprecision highp float;\n#else\n#if !defined(lowp)\n#define lowp\n#endif\n#if !defined(mediump)\n#define mediump\n#endif\n#if !defined(highp)\n#define highp\n#endif\n#endif\nvec2 unpack_float(const float packedValue) {int packedIntValue=int(packedValue);int v0=packedIntValue/256;return vec2(v0,packedIntValue-v0*256);}vec2 unpack_opacity(const float packedOpacity) {int intOpacity=int(packedOpacity)/2;return vec2(float(intOpacity)/127.0,mod(packedOpacity,2.0));}vec4 decode_color(const vec2 encodedColor) {return vec4(unpack_float(encodedColor[0])/255.0,unpack_float(encodedColor[1])/255.0\n);}float unpack_mix_vec2(const vec2 packedValue,const float t) {return mix(packedValue[0],packedValue[1],t);}vec4 unpack_mix_color(const vec4 packedColors,const float t) {vec4 minColor=decode_color(vec2(packedColors[0],packedColors[1]));vec4 maxColor=decode_color(vec2(packedColors[2],packedColors[3]));return mix(minColor,maxColor,t);}vec2 get_pattern_pos(const vec2 pixel_coord_upper,const vec2 pixel_coord_lower,const vec2 pattern_size,const float tile_units_to_pixels,const vec2 pos) {vec2 offset=mod(mod(mod(pixel_coord_upper,pattern_size)*256.0,pattern_size)*256.0+pixel_coord_lower,pattern_size);return (tile_units_to_pixels*pos+offset)/pattern_size;}"),Ve=cr("uniform vec4 u_color;uniform float u_opacity;void main() {gl_FragColor=u_color*u_opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","attribute vec2 a_pos;uniform mat4 u_matrix;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);}"),Ne=cr("uniform vec2 u_pattern_tl_a;uniform vec2 u_pattern_br_a;uniform vec2 u_pattern_tl_b;uniform vec2 u_pattern_br_b;uniform vec2 u_texsize;uniform float u_mix;uniform float u_opacity;uniform sampler2D u_image;varying vec2 v_pos_a;varying vec2 v_pos_b;void main() {vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(u_pattern_tl_a/u_texsize,u_pattern_br_a/u_texsize,imagecoord);vec4 color1=texture2D(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(u_pattern_tl_b/u_texsize,u_pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture2D(u_image,pos2);gl_FragColor=mix(color1,color2,u_mix)*u_opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_pattern_size_a;uniform vec2 u_pattern_size_b;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform float u_scale_a;uniform float u_scale_b;uniform float u_tile_units_to_pixels;attribute vec2 a_pos;varying vec2 v_pos_a;varying vec2 v_pos_b;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,u_scale_a*u_pattern_size_a,u_tile_units_to_pixels,a_pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,u_scale_b*u_pattern_size_b,u_tile_units_to_pixels,a_pos);}"),je=cr("varying vec3 v_data;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize mediump float radius\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize highp vec4 stroke_color\n#pragma mapbox: initialize mediump float stroke_width\n#pragma mapbox: initialize lowp float stroke_opacity\nvec2 extrude=v_data.xy;float extrude_length=length(extrude);lowp float antialiasblur=v_data.z;float antialiased_blur=-max(blur,antialiasblur);float opacity_t=smoothstep(0.0,antialiased_blur,extrude_length-1.0);float color_t=stroke_width < 0.01 ? 0.0 : smoothstep(antialiased_blur,0.0,extrude_length-radius/(radius+stroke_width));gl_FragColor=opacity_t*mix(color*opacity,stroke_color*stroke_opacity,color_t);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform bool u_scale_with_map;uniform bool u_pitch_with_map;uniform vec2 u_extrude_scale;uniform lowp float u_device_pixel_ratio;uniform highp float u_camera_to_center_distance;attribute vec2 a_pos;varying vec3 v_data;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\nvoid main(void) {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize mediump float radius\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize highp vec4 stroke_color\n#pragma mapbox: initialize mediump float stroke_width\n#pragma mapbox: initialize lowp float stroke_opacity\nvec2 extrude=vec2(mod(a_pos,2.0)*2.0-1.0);vec2 circle_center=floor(a_pos*0.5);if (u_pitch_with_map) {vec2 corner_position=circle_center;if (u_scale_with_map) {corner_position+=extrude*(radius+stroke_width)*u_extrude_scale;} else {vec4 projected_center=u_matrix*vec4(circle_center,0,1);corner_position+=extrude*(radius+stroke_width)*u_extrude_scale*(projected_center.w/u_camera_to_center_distance);}gl_Position=u_matrix*vec4(corner_position,0,1);} else {gl_Position=u_matrix*vec4(circle_center,0,1);if (u_scale_with_map) {gl_Position.xy+=extrude*(radius+stroke_width)*u_extrude_scale*u_camera_to_center_distance;} else {gl_Position.xy+=extrude*(radius+stroke_width)*u_extrude_scale*gl_Position.w;}}lowp float antialiasblur=1.0/u_device_pixel_ratio/(radius+stroke_width);v_data=vec3(extrude.x,extrude.y,antialiasblur);}"),qe=cr("void main() {gl_FragColor=vec4(1.0);}","attribute vec2 a_pos;uniform mat4 u_matrix;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);}"),Ze=cr("uniform highp float u_intensity;varying vec2 v_extrude;\n#pragma mapbox: define highp float weight\n#define GAUSS_COEF 0.3989422804014327\nvoid main() {\n#pragma mapbox: initialize highp float weight\nfloat d=-0.5*3.0*3.0*dot(v_extrude,v_extrude);float val=weight*u_intensity*GAUSS_COEF*exp(d);gl_FragColor=vec4(val,1.0,1.0,1.0);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform float u_extrude_scale;uniform float u_opacity;uniform float u_intensity;attribute vec2 a_pos;varying vec2 v_extrude;\n#pragma mapbox: define highp float weight\n#pragma mapbox: define mediump float radius\nconst highp float ZERO=1.0/255.0/16.0;\n#define GAUSS_COEF 0.3989422804014327\nvoid main(void) {\n#pragma mapbox: initialize highp float weight\n#pragma mapbox: initialize mediump float radius\nvec2 unscaled_extrude=vec2(mod(a_pos,2.0)*2.0-1.0);float S=sqrt(-2.0*log(ZERO/weight/u_intensity/GAUSS_COEF))/3.0;v_extrude=S*unscaled_extrude;vec2 extrude=v_extrude*radius*u_extrude_scale;vec4 pos=vec4(floor(a_pos*0.5)+extrude,0,1);gl_Position=u_matrix*pos;}"),Ge=cr("uniform sampler2D u_image;uniform sampler2D u_color_ramp;uniform float u_opacity;varying vec2 v_pos;void main() {float t=texture2D(u_image,v_pos).r;vec4 color=texture2D(u_color_ramp,vec2(t,0.5));gl_FragColor=color*u_opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(0.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_world;attribute vec2 a_pos;varying vec2 v_pos;void main() {gl_Position=u_matrix*vec4(a_pos*u_world,0,1);v_pos.x=a_pos.x;v_pos.y=1.0-a_pos.y;}"),Xe=cr("varying float v_placed;varying float v_notUsed;void main() {float alpha=0.5;gl_FragColor=vec4(1.0,0.0,0.0,1.0)*alpha;if (v_placed > 0.5) {gl_FragColor=vec4(0.0,0.0,1.0,0.5)*alpha;}if (v_notUsed > 0.5) {gl_FragColor*=.1;}}","attribute vec2 a_pos;attribute vec2 a_anchor_pos;attribute vec2 a_extrude;attribute vec2 a_placed;attribute vec2 a_shift;uniform mat4 u_matrix;uniform vec2 u_extrude_scale;uniform float u_camera_to_center_distance;varying float v_placed;varying float v_notUsed;void main() {vec4 projectedPoint=u_matrix*vec4(a_anchor_pos,0,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float collision_perspective_ratio=clamp(0.5+0.5*(u_camera_to_center_distance/camera_to_anchor_distance),0.0,4.0);gl_Position=u_matrix*vec4(a_pos,0.0,1.0);gl_Position.xy+=(a_extrude+a_shift)*u_extrude_scale*gl_Position.w*collision_perspective_ratio;v_placed=a_placed.x;v_notUsed=a_placed.y;}"),We=cr("uniform float u_overscale_factor;varying float v_placed;varying float v_notUsed;varying float v_radius;varying vec2 v_extrude;varying vec2 v_extrude_scale;void main() {float alpha=0.5;vec4 color=vec4(1.0,0.0,0.0,1.0)*alpha;if (v_placed > 0.5) {color=vec4(0.0,0.0,1.0,0.5)*alpha;}if (v_notUsed > 0.5) {color*=.2;}float extrude_scale_length=length(v_extrude_scale);float extrude_length=length(v_extrude)*extrude_scale_length;float stroke_width=15.0*extrude_scale_length/u_overscale_factor;float radius=v_radius*extrude_scale_length;float distance_to_edge=abs(extrude_length-radius);float opacity_t=smoothstep(-stroke_width,0.0,-distance_to_edge);gl_FragColor=opacity_t*color;}","attribute vec2 a_pos;attribute vec2 a_anchor_pos;attribute vec2 a_extrude;attribute vec2 a_placed;uniform mat4 u_matrix;uniform vec2 u_extrude_scale;uniform float u_camera_to_center_distance;varying float v_placed;varying float v_notUsed;varying float v_radius;varying vec2 v_extrude;varying vec2 v_extrude_scale;void main() {vec4 projectedPoint=u_matrix*vec4(a_anchor_pos,0,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float collision_perspective_ratio=clamp(0.5+0.5*(u_camera_to_center_distance/camera_to_anchor_distance),0.0,4.0);gl_Position=u_matrix*vec4(a_pos,0.0,1.0);highp float padding_factor=1.2;gl_Position.xy+=a_extrude*u_extrude_scale*padding_factor*gl_Position.w*collision_perspective_ratio;v_placed=a_placed.x;v_notUsed=a_placed.y;v_radius=abs(a_extrude.y);v_extrude=a_extrude*padding_factor;v_extrude_scale=u_extrude_scale*u_camera_to_center_distance*collision_perspective_ratio;}"),Ke=cr("uniform highp vec4 u_color;void main() {gl_FragColor=u_color;}","attribute vec2 a_pos;uniform mat4 u_matrix;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);}"),He=cr("#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float opacity\ngl_FragColor=color*opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","attribute vec2 a_pos;uniform mat4 u_matrix;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float opacity\ngl_Position=u_matrix*vec4(a_pos,0,1);}"),Je=cr("varying vec2 v_pos;\n#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 outline_color\n#pragma mapbox: initialize lowp float opacity\nfloat dist=length(v_pos-gl_FragCoord.xy);float alpha=1.0-smoothstep(0.0,1.0,dist);gl_FragColor=outline_color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","attribute vec2 a_pos;uniform mat4 u_matrix;uniform vec2 u_world;varying vec2 v_pos;\n#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 outline_color\n#pragma mapbox: initialize lowp float opacity\ngl_Position=u_matrix*vec4(a_pos,0,1);v_pos=(gl_Position.xy/gl_Position.w+1.0)/2.0*u_world;}"),Ye=cr("uniform vec2 u_texsize;uniform sampler2D u_image;uniform float u_fade;varying vec2 v_pos_a;varying vec2 v_pos_b;varying vec2 v_pos;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(pattern_tl_a/u_texsize,pattern_br_a/u_texsize,imagecoord);vec4 color1=texture2D(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(pattern_tl_b/u_texsize,pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture2D(u_image,pos2);float dist=length(v_pos-gl_FragCoord.xy);float alpha=1.0-smoothstep(0.0,1.0,dist);gl_FragColor=mix(color1,color2,u_fade)*alpha*opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_world;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform vec4 u_scale;attribute vec2 a_pos;varying vec2 v_pos_a;varying vec2 v_pos_b;varying vec2 v_pos;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float pixelRatio=u_scale.x;float tileRatio=u_scale.y;float fromScale=u_scale.z;float toScale=u_scale.w;gl_Position=u_matrix*vec4(a_pos,0,1);vec2 display_size_a=vec2((pattern_br_a.x-pattern_tl_a.x)/pixelRatio,(pattern_br_a.y-pattern_tl_a.y)/pixelRatio);vec2 display_size_b=vec2((pattern_br_b.x-pattern_tl_b.x)/pixelRatio,(pattern_br_b.y-pattern_tl_b.y)/pixelRatio);v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,fromScale*display_size_a,tileRatio,a_pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,toScale*display_size_b,tileRatio,a_pos);v_pos=(gl_Position.xy/gl_Position.w+1.0)/2.0*u_world;}"),$e=cr("uniform vec2 u_texsize;uniform float u_fade;uniform sampler2D u_image;varying vec2 v_pos_a;varying vec2 v_pos_b;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(pattern_tl_a/u_texsize,pattern_br_a/u_texsize,imagecoord);vec4 color1=texture2D(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(pattern_tl_b/u_texsize,pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture2D(u_image,pos2);gl_FragColor=mix(color1,color2,u_fade)*opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform vec4 u_scale;attribute vec2 a_pos;varying vec2 v_pos_a;varying vec2 v_pos_b;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float pixelRatio=u_scale.x;float tileZoomRatio=u_scale.y;float fromScale=u_scale.z;float toScale=u_scale.w;vec2 display_size_a=vec2((pattern_br_a.x-pattern_tl_a.x)/pixelRatio,(pattern_br_a.y-pattern_tl_a.y)/pixelRatio);vec2 display_size_b=vec2((pattern_br_b.x-pattern_tl_b.x)/pixelRatio,(pattern_br_b.y-pattern_tl_b.y)/pixelRatio);gl_Position=u_matrix*vec4(a_pos,0,1);v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,fromScale*display_size_a,tileZoomRatio,a_pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,toScale*display_size_b,tileZoomRatio,a_pos);}"),Qe=cr("varying vec4 v_color;void main() {gl_FragColor=v_color;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec3 u_lightcolor;uniform lowp vec3 u_lightpos;uniform lowp float u_lightintensity;uniform float u_vertical_gradient;uniform lowp float u_opacity;attribute vec2 a_pos;attribute vec4 a_normal_ed;varying vec4 v_color;\n#pragma mapbox: define highp float base\n#pragma mapbox: define highp float height\n#pragma mapbox: define highp vec4 color\nvoid main() {\n#pragma mapbox: initialize highp float base\n#pragma mapbox: initialize highp float height\n#pragma mapbox: initialize highp vec4 color\nvec3 normal=a_normal_ed.xyz;base=max(0.0,base);height=max(0.0,height);float t=mod(normal.x,2.0);gl_Position=u_matrix*vec4(a_pos,t > 0.0 ? height : base,1);float colorvalue=color.r*0.2126+color.g*0.7152+color.b*0.0722;v_color=vec4(0.0,0.0,0.0,1.0);vec4 ambientlight=vec4(0.03,0.03,0.03,1.0);color+=ambientlight;float directional=clamp(dot(normal/16384.0,u_lightpos),0.0,1.0);directional=mix((1.0-u_lightintensity),max((1.0-colorvalue+u_lightintensity),1.0),directional);if (normal.y !=0.0) {directional*=((1.0-u_vertical_gradient)+(u_vertical_gradient*clamp((t+base)*pow(height/150.0,0.5),mix(0.7,0.98,1.0-u_lightintensity),1.0)));}v_color.r+=clamp(color.r*directional*u_lightcolor.r,mix(0.0,0.3,1.0-u_lightcolor.r),1.0);v_color.g+=clamp(color.g*directional*u_lightcolor.g,mix(0.0,0.3,1.0-u_lightcolor.g),1.0);v_color.b+=clamp(color.b*directional*u_lightcolor.b,mix(0.0,0.3,1.0-u_lightcolor.b),1.0);v_color*=u_opacity;}"),tr=cr("uniform vec2 u_texsize;uniform float u_fade;uniform sampler2D u_image;varying vec2 v_pos_a;varying vec2 v_pos_b;varying vec4 v_lighting;\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\nvoid main() {\n#pragma mapbox: initialize lowp float base\n#pragma mapbox: initialize lowp float height\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(pattern_tl_a/u_texsize,pattern_br_a/u_texsize,imagecoord);vec4 color1=texture2D(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(pattern_tl_b/u_texsize,pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture2D(u_image,pos2);vec4 mixedColor=mix(color1,color2,u_fade);gl_FragColor=mixedColor*v_lighting;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform float u_height_factor;uniform vec4 u_scale;uniform float u_vertical_gradient;uniform lowp float u_opacity;uniform vec3 u_lightcolor;uniform lowp vec3 u_lightpos;uniform lowp float u_lightintensity;attribute vec2 a_pos;attribute vec4 a_normal_ed;varying vec2 v_pos_a;varying vec2 v_pos_b;varying vec4 v_lighting;\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\nvoid main() {\n#pragma mapbox: initialize lowp float base\n#pragma mapbox: initialize lowp float height\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float pixelRatio=u_scale.x;float tileRatio=u_scale.y;float fromScale=u_scale.z;float toScale=u_scale.w;vec3 normal=a_normal_ed.xyz;float edgedistance=a_normal_ed.w;vec2 display_size_a=vec2((pattern_br_a.x-pattern_tl_a.x)/pixelRatio,(pattern_br_a.y-pattern_tl_a.y)/pixelRatio);vec2 display_size_b=vec2((pattern_br_b.x-pattern_tl_b.x)/pixelRatio,(pattern_br_b.y-pattern_tl_b.y)/pixelRatio);base=max(0.0,base);height=max(0.0,height);float t=mod(normal.x,2.0);float z=t > 0.0 ? height : base;gl_Position=u_matrix*vec4(a_pos,z,1);vec2 pos=normal.x==1.0 && normal.y==0.0 && normal.z==16384.0\n? a_pos\n: vec2(edgedistance,z*u_height_factor);v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,fromScale*display_size_a,tileRatio,pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,toScale*display_size_b,tileRatio,pos);v_lighting=vec4(0.0,0.0,0.0,1.0);float directional=clamp(dot(normal/16383.0,u_lightpos),0.0,1.0);directional=mix((1.0-u_lightintensity),max((0.5+u_lightintensity),1.0),directional);if (normal.y !=0.0) {directional*=((1.0-u_vertical_gradient)+(u_vertical_gradient*clamp((t+base)*pow(height/150.0,0.5),mix(0.7,0.98,1.0-u_lightintensity),1.0)));}v_lighting.rgb+=clamp(directional*u_lightcolor,mix(vec3(0.0),vec3(0.3),1.0-u_lightcolor),vec3(1.0));v_lighting*=u_opacity;}"),er=cr("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D u_image;varying vec2 v_pos;uniform vec2 u_dimension;uniform float u_zoom;uniform float u_maxzoom;uniform vec4 u_unpack;float getElevation(vec2 coord,float bias) {vec4 data=texture2D(u_image,coord)*255.0;data.a=-1.0;return dot(data,u_unpack)/4.0;}void main() {vec2 epsilon=1.0/u_dimension;float a=getElevation(v_pos+vec2(-epsilon.x,-epsilon.y),0.0);float b=getElevation(v_pos+vec2(0,-epsilon.y),0.0);float c=getElevation(v_pos+vec2(epsilon.x,-epsilon.y),0.0);float d=getElevation(v_pos+vec2(-epsilon.x,0),0.0);float e=getElevation(v_pos,0.0);float f=getElevation(v_pos+vec2(epsilon.x,0),0.0);float g=getElevation(v_pos+vec2(-epsilon.x,epsilon.y),0.0);float h=getElevation(v_pos+vec2(0,epsilon.y),0.0);float i=getElevation(v_pos+vec2(epsilon.x,epsilon.y),0.0);float exaggeration=u_zoom < 2.0 ? 0.4 : u_zoom < 4.5 ? 0.35 : 0.3;vec2 deriv=vec2((c+f+f+i)-(a+d+d+g),(g+h+h+i)-(a+b+b+c))/ pow(2.0,(u_zoom-u_maxzoom)*exaggeration+19.2562-u_zoom);gl_FragColor=clamp(vec4(deriv.x/2.0+0.5,deriv.y/2.0+0.5,1.0,1.0),0.0,1.0);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_dimension;attribute vec2 a_pos;attribute vec2 a_texture_pos;varying vec2 v_pos;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);highp vec2 epsilon=1.0/u_dimension;float scale=(u_dimension.x-2.0)/u_dimension.x;v_pos=(a_texture_pos/8192.0)*scale+epsilon;}"),rr=cr("uniform sampler2D u_image;varying vec2 v_pos;uniform vec2 u_latrange;uniform vec2 u_light;uniform vec4 u_shadow;uniform vec4 u_highlight;uniform vec4 u_accent;\n#define PI 3.141592653589793\nvoid main() {vec4 pixel=texture2D(u_image,v_pos);vec2 deriv=((pixel.rg*2.0)-1.0);float scaleFactor=cos(radians((u_latrange[0]-u_latrange[1])*(1.0-v_pos.y)+u_latrange[1]));float slope=atan(1.25*length(deriv)/scaleFactor);float aspect=deriv.x !=0.0 ? atan(deriv.y,-deriv.x) : PI/2.0*(deriv.y > 0.0 ? 1.0 :-1.0);float intensity=u_light.x;float azimuth=u_light.y+PI;float base=1.875-intensity*1.75;float maxValue=0.5*PI;float scaledSlope=intensity !=0.5 ? ((pow(base,slope)-1.0)/(pow(base,maxValue)-1.0))*maxValue : slope;float accent=cos(scaledSlope);vec4 accent_color=(1.0-accent)*u_accent*clamp(intensity*2.0,0.0,1.0);float shade=abs(mod((aspect+azimuth)/PI+0.5,2.0)-1.0);vec4 shade_color=mix(u_shadow,u_highlight,shade)*sin(scaledSlope)*clamp(intensity*2.0,0.0,1.0);gl_FragColor=accent_color*(1.0-shade_color.a)+shade_color;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;attribute vec2 a_pos;attribute vec2 a_texture_pos;varying vec2 v_pos;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);v_pos=a_texture_pos/8192.0;}"),ir=cr("uniform lowp float u_device_pixel_ratio;varying vec2 v_width2;varying vec2 v_normal;varying float v_gamma_scale;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\nfloat dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);gl_FragColor=color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","\n#define scale 0.015873016\nattribute vec2 a_pos_normal;attribute vec4 a_data;uniform mat4 u_matrix;uniform mediump float u_ratio;uniform vec2 u_units_to_pixels;uniform lowp float u_device_pixel_ratio;varying vec2 v_normal;varying vec2 v_width2;varying float v_gamma_scale;varying highp float v_linesofar;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float width\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;v_linesofar=(floor(a_data.z/4.0)+a_data.w*64.0)*2.0;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;float extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;v_width2=vec2(outset,inset);}"),nr=cr("uniform lowp float u_device_pixel_ratio;uniform sampler2D u_image;varying vec2 v_width2;varying vec2 v_normal;varying float v_gamma_scale;varying highp float v_lineprogress;\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\nfloat dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);vec4 color=texture2D(u_image,vec2(v_lineprogress,0.5));gl_FragColor=color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","\n#define MAX_LINE_DISTANCE 32767.0\n#define scale 0.015873016\nattribute vec2 a_pos_normal;attribute vec4 a_data;uniform mat4 u_matrix;uniform mediump float u_ratio;uniform lowp float u_device_pixel_ratio;uniform vec2 u_units_to_pixels;varying vec2 v_normal;varying vec2 v_width2;varying float v_gamma_scale;varying highp float v_lineprogress;\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\nvoid main() {\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float width\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;v_lineprogress=(floor(a_data.z/4.0)+a_data.w*64.0)*2.0/MAX_LINE_DISTANCE;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;float extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;v_width2=vec2(outset,inset);}"),or=cr("uniform lowp float u_device_pixel_ratio;uniform vec2 u_texsize;uniform float u_fade;uniform mediump vec4 u_scale;uniform sampler2D u_image;varying vec2 v_normal;varying vec2 v_width2;varying float v_linesofar;varying float v_gamma_scale;\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float pixelRatio=u_scale.x;float tileZoomRatio=u_scale.y;float fromScale=u_scale.z;float toScale=u_scale.w;vec2 display_size_a=vec2((pattern_br_a.x-pattern_tl_a.x)/pixelRatio,(pattern_br_a.y-pattern_tl_a.y)/pixelRatio);vec2 display_size_b=vec2((pattern_br_b.x-pattern_tl_b.x)/pixelRatio,(pattern_br_b.y-pattern_tl_b.y)/pixelRatio);vec2 pattern_size_a=vec2(display_size_a.x*fromScale/tileZoomRatio,display_size_a.y);vec2 pattern_size_b=vec2(display_size_b.x*toScale/tileZoomRatio,display_size_b.y);float dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);float x_a=mod(v_linesofar/pattern_size_a.x,1.0);float x_b=mod(v_linesofar/pattern_size_b.x,1.0);float y_a=0.5+(v_normal.y*clamp(v_width2.s,0.0,(pattern_size_a.y+2.0)/2.0)/pattern_size_a.y);float y_b=0.5+(v_normal.y*clamp(v_width2.s,0.0,(pattern_size_b.y+2.0)/2.0)/pattern_size_b.y);vec2 pos_a=mix(pattern_tl_a/u_texsize,pattern_br_a/u_texsize,vec2(x_a,y_a));vec2 pos_b=mix(pattern_tl_b/u_texsize,pattern_br_b/u_texsize,vec2(x_b,y_b));vec4 color=mix(texture2D(u_image,pos_a),texture2D(u_image,pos_b),u_fade);gl_FragColor=color*alpha*opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","\n#define scale 0.015873016\n#define LINE_DISTANCE_SCALE 2.0\nattribute vec2 a_pos_normal;attribute vec4 a_data;uniform mat4 u_matrix;uniform vec2 u_units_to_pixels;uniform mediump float u_ratio;uniform lowp float u_device_pixel_ratio;varying vec2 v_normal;varying vec2 v_width2;varying float v_linesofar;varying float v_gamma_scale;\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\nvoid main() {\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize mediump float width\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;float a_linesofar=(floor(a_data.z/4.0)+a_data.w*64.0)*LINE_DISTANCE_SCALE;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;float extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;v_linesofar=a_linesofar;v_width2=vec2(outset,inset);}"),ar=cr("uniform lowp float u_device_pixel_ratio;uniform sampler2D u_image;uniform float u_sdfgamma;uniform float u_mix;varying vec2 v_normal;varying vec2 v_width2;varying vec2 v_tex_a;varying vec2 v_tex_b;varying float v_gamma_scale;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float width\n#pragma mapbox: initialize lowp float floorwidth\nfloat dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);float sdfdist_a=texture2D(u_image,v_tex_a).a;float sdfdist_b=texture2D(u_image,v_tex_b).a;float sdfdist=mix(sdfdist_a,sdfdist_b,u_mix);alpha*=smoothstep(0.5-u_sdfgamma/floorwidth,0.5+u_sdfgamma/floorwidth,sdfdist);gl_FragColor=color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","\n#define scale 0.015873016\n#define LINE_DISTANCE_SCALE 2.0\nattribute vec2 a_pos_normal;attribute vec4 a_data;uniform mat4 u_matrix;uniform mediump float u_ratio;uniform lowp float u_device_pixel_ratio;uniform vec2 u_patternscale_a;uniform float u_tex_y_a;uniform vec2 u_patternscale_b;uniform float u_tex_y_b;uniform vec2 u_units_to_pixels;varying vec2 v_normal;varying vec2 v_width2;varying vec2 v_tex_a;varying vec2 v_tex_b;varying float v_gamma_scale;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float width\n#pragma mapbox: initialize lowp float floorwidth\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;float a_linesofar=(floor(a_data.z/4.0)+a_data.w*64.0)*LINE_DISTANCE_SCALE;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;float extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;v_tex_a=vec2(a_linesofar*u_patternscale_a.x/floorwidth,normal.y*u_patternscale_a.y+u_tex_y_a);v_tex_b=vec2(a_linesofar*u_patternscale_b.x/floorwidth,normal.y*u_patternscale_b.y+u_tex_y_b);v_width2=vec2(outset,inset);}"),sr=cr("uniform float u_fade_t;uniform float u_opacity;uniform sampler2D u_image0;uniform sampler2D u_image1;varying vec2 v_pos0;varying vec2 v_pos1;uniform float u_brightness_low;uniform float u_brightness_high;uniform float u_saturation_factor;uniform float u_contrast_factor;uniform vec3 u_spin_weights;void main() {vec4 color0=texture2D(u_image0,v_pos0);vec4 color1=texture2D(u_image1,v_pos1);if (color0.a > 0.0) {color0.rgb=color0.rgb/color0.a;}if (color1.a > 0.0) {color1.rgb=color1.rgb/color1.a;}vec4 color=mix(color0,color1,u_fade_t);color.a*=u_opacity;vec3 rgb=color.rgb;rgb=vec3(dot(rgb,u_spin_weights.xyz),dot(rgb,u_spin_weights.zxy),dot(rgb,u_spin_weights.yzx));float average=(color.r+color.g+color.b)/3.0;rgb+=(average-rgb)*u_saturation_factor;rgb=(rgb-0.5)*u_contrast_factor+0.5;vec3 u_high_vec=vec3(u_brightness_low,u_brightness_low,u_brightness_low);vec3 u_low_vec=vec3(u_brightness_high,u_brightness_high,u_brightness_high);gl_FragColor=vec4(mix(u_high_vec,u_low_vec,rgb)*color.a,color.a);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_tl_parent;uniform float u_scale_parent;uniform float u_buffer_scale;attribute vec2 a_pos;attribute vec2 a_texture_pos;varying vec2 v_pos0;varying vec2 v_pos1;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);v_pos0=(((a_texture_pos/8192.0)-0.5)/u_buffer_scale )+0.5;v_pos1=(v_pos0*u_scale_parent)+u_tl_parent;}"),lr=cr("uniform sampler2D u_texture;varying vec2 v_tex;varying float v_fade_opacity;\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\nlowp float alpha=opacity*v_fade_opacity;gl_FragColor=texture2D(u_texture,v_tex)*alpha;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","const float PI=3.141592653589793;attribute vec4 a_pos_offset;attribute vec4 a_data;attribute vec3 a_projected_pos;attribute float a_fade_opacity;uniform bool u_is_size_zoom_constant;uniform bool u_is_size_feature_constant;uniform highp float u_size_t;uniform highp float u_size;uniform highp float u_camera_to_center_distance;uniform highp float u_pitch;uniform bool u_rotate_symbol;uniform highp float u_aspect_ratio;uniform float u_fade_change;uniform mat4 u_matrix;uniform mat4 u_label_plane_matrix;uniform mat4 u_coord_matrix;uniform bool u_is_text;uniform bool u_pitch_with_map;uniform vec2 u_texsize;varying vec2 v_tex;varying float v_fade_opacity;\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\nvec2 a_pos=a_pos_offset.xy;vec2 a_offset=a_pos_offset.zw;vec2 a_tex=a_data.xy;vec2 a_size=a_data.zw;highp float segment_angle=-a_projected_pos[2];float size;if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {size=mix(a_size[0],a_size[1],u_size_t)/256.0;} else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {size=a_size[0]/256.0;} else if (!u_is_size_zoom_constant && u_is_size_feature_constant) {size=u_size;} else {size=u_size;}vec4 projectedPoint=u_matrix*vec4(a_pos,0,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float distance_ratio=u_pitch_with_map ?\ncamera_to_anchor_distance/u_camera_to_center_distance :\nu_camera_to_center_distance/camera_to_anchor_distance;highp float perspective_ratio=clamp(0.5+0.5*distance_ratio,0.0,4.0);size*=perspective_ratio;float fontScale=u_is_text ? size/24.0 : size;highp float symbol_rotation=0.0;if (u_rotate_symbol) {vec4 offsetProjectedPoint=u_matrix*vec4(a_pos+vec2(1,0),0,1);vec2 a=projectedPoint.xy/projectedPoint.w;vec2 b=offsetProjectedPoint.xy/offsetProjectedPoint.w;symbol_rotation=atan((b.y-a.y)/u_aspect_ratio,b.x-a.x);}highp float angle_sin=sin(segment_angle+symbol_rotation);highp float angle_cos=cos(segment_angle+symbol_rotation);mat2 rotation_matrix=mat2(angle_cos,-1.0*angle_sin,angle_sin,angle_cos);vec4 projected_pos=u_label_plane_matrix*vec4(a_projected_pos.xy,0.0,1.0);gl_Position=u_coord_matrix*vec4(projected_pos.xy/projected_pos.w+rotation_matrix*(a_offset/32.0*fontScale),0.0,1.0);v_tex=a_tex/u_texsize;vec2 fade_opacity=unpack_opacity(a_fade_opacity);float fade_change=fade_opacity[1] > 0.5 ? u_fade_change :-u_fade_change;v_fade_opacity=max(0.0,min(1.0,fade_opacity[0]+fade_change));}"),ur=cr("#define SDF_PX 8.0\nuniform bool u_is_halo;uniform sampler2D u_texture;uniform highp float u_gamma_scale;uniform lowp float u_device_pixel_ratio;uniform bool u_is_text;varying vec2 v_data0;varying vec3 v_data1;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\nvoid main() {\n#pragma mapbox: initialize highp vec4 fill_color\n#pragma mapbox: initialize highp vec4 halo_color\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float halo_width\n#pragma mapbox: initialize lowp float halo_blur\nfloat EDGE_GAMMA=0.105/u_device_pixel_ratio;vec2 tex=v_data0.xy;float gamma_scale=v_data1.x;float size=v_data1.y;float fade_opacity=v_data1[2];float fontScale=u_is_text ? size/24.0 : size;lowp vec4 color=fill_color;highp float gamma=EDGE_GAMMA/(fontScale*u_gamma_scale);lowp float buff=(256.0-64.0)/256.0;if (u_is_halo) {color=halo_color;gamma=(halo_blur*1.19/SDF_PX+EDGE_GAMMA)/(fontScale*u_gamma_scale);buff=(6.0-halo_width/fontScale)/SDF_PX;}lowp float dist=texture2D(u_texture,tex).a;highp float gamma_scaled=gamma*gamma_scale;highp float alpha=smoothstep(buff-gamma_scaled,buff+gamma_scaled,dist);gl_FragColor=color*(alpha*opacity*fade_opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","const float PI=3.141592653589793;attribute vec4 a_pos_offset;attribute vec4 a_data;attribute vec3 a_projected_pos;attribute float a_fade_opacity;uniform bool u_is_size_zoom_constant;uniform bool u_is_size_feature_constant;uniform highp float u_size_t;uniform highp float u_size;uniform mat4 u_matrix;uniform mat4 u_label_plane_matrix;uniform mat4 u_coord_matrix;uniform bool u_is_text;uniform bool u_pitch_with_map;uniform highp float u_pitch;uniform bool u_rotate_symbol;uniform highp float u_aspect_ratio;uniform highp float u_camera_to_center_distance;uniform float u_fade_change;uniform vec2 u_texsize;varying vec2 v_data0;varying vec3 v_data1;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\nvoid main() {\n#pragma mapbox: initialize highp vec4 fill_color\n#pragma mapbox: initialize highp vec4 halo_color\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float halo_width\n#pragma mapbox: initialize lowp float halo_blur\nvec2 a_pos=a_pos_offset.xy;vec2 a_offset=a_pos_offset.zw;vec2 a_tex=a_data.xy;vec2 a_size=a_data.zw;highp float segment_angle=-a_projected_pos[2];float size;if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {size=mix(a_size[0],a_size[1],u_size_t)/256.0;} else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {size=a_size[0]/256.0;} else if (!u_is_size_zoom_constant && u_is_size_feature_constant) {size=u_size;} else {size=u_size;}vec4 projectedPoint=u_matrix*vec4(a_pos,0,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float distance_ratio=u_pitch_with_map ?\ncamera_to_anchor_distance/u_camera_to_center_distance :\nu_camera_to_center_distance/camera_to_anchor_distance;highp float perspective_ratio=clamp(0.5+0.5*distance_ratio,0.0,4.0);size*=perspective_ratio;float fontScale=u_is_text ? size/24.0 : size;highp float symbol_rotation=0.0;if (u_rotate_symbol) {vec4 offsetProjectedPoint=u_matrix*vec4(a_pos+vec2(1,0),0,1);vec2 a=projectedPoint.xy/projectedPoint.w;vec2 b=offsetProjectedPoint.xy/offsetProjectedPoint.w;symbol_rotation=atan((b.y-a.y)/u_aspect_ratio,b.x-a.x);}highp float angle_sin=sin(segment_angle+symbol_rotation);highp float angle_cos=cos(segment_angle+symbol_rotation);mat2 rotation_matrix=mat2(angle_cos,-1.0*angle_sin,angle_sin,angle_cos);vec4 projected_pos=u_label_plane_matrix*vec4(a_projected_pos.xy,0.0,1.0);gl_Position=u_coord_matrix*vec4(projected_pos.xy/projected_pos.w+rotation_matrix*(a_offset/32.0*fontScale),0.0,1.0);float gamma_scale=gl_Position.w;vec2 tex=a_tex/u_texsize;vec2 fade_opacity=unpack_opacity(a_fade_opacity);float fade_change=fade_opacity[1] > 0.5 ? u_fade_change :-u_fade_change;float interpolated_fade_opacity=max(0.0,min(1.0,fade_opacity[0]+fade_change));v_data0=vec2(tex.x,tex.y);v_data1=vec3(gamma_scale,size,interpolated_fade_opacity);}")
function cr(t,e){var r=/#pragma mapbox: ([\w]+) ([\w]+) ([\w]+) ([\w]+)/g,i={}
return{fragmentSource:t=t.replace(r,function(t,e,r,n,o){return i[o]=!0,"define"===e?"\n#ifndef HAS_UNIFORM_u_"+o+"\nvarying "+r+" "+n+" "+o+";\n#else\nuniform "+r+" "+n+" u_"+o+";\n#endif\n":"\n#ifdef HAS_UNIFORM_u_"+o+"\n    "+r+" "+n+" "+o+" = u_"+o+";\n#endif\n"}),vertexSource:e=e.replace(r,function(t,e,r,n,o){var a="float"===n?"vec2":"vec4",s=o.match(/color/)?"color":a
return i[o]?"define"===e?"\n#ifndef HAS_UNIFORM_u_"+o+"\nuniform lowp float u_"+o+"_t;\nattribute "+r+" "+a+" a_"+o+";\nvarying "+r+" "+n+" "+o+";\n#else\nuniform "+r+" "+n+" u_"+o+";\n#endif\n":"vec4"===s?"\n#ifndef HAS_UNIFORM_u_"+o+"\n    "+o+" = a_"+o+";\n#else\n    "+r+" "+n+" "+o+" = u_"+o+";\n#endif\n":"\n#ifndef HAS_UNIFORM_u_"+o+"\n    "+o+" = unpack_mix_"+s+"(a_"+o+", u_"+o+"_t);\n#else\n    "+r+" "+n+" "+o+" = u_"+o+";\n#endif\n":"define"===e?"\n#ifndef HAS_UNIFORM_u_"+o+"\nuniform lowp float u_"+o+"_t;\nattribute "+r+" "+a+" a_"+o+";\n#else\nuniform "+r+" "+n+" u_"+o+";\n#endif\n":"vec4"===s?"\n#ifndef HAS_UNIFORM_u_"+o+"\n    "+r+" "+n+" "+o+" = a_"+o+";\n#else\n    "+r+" "+n+" "+o+" = u_"+o+";\n#endif\n":"\n#ifndef HAS_UNIFORM_u_"+o+"\n    "+r+" "+n+" "+o+" = unpack_mix_"+s+"(a_"+o+", u_"+o+"_t);\n#else\n    "+r+" "+n+" "+o+" = u_"+o+";\n#endif\n"})}}var pr=Object.freeze({prelude:Ue,background:Ve,backgroundPattern:Ne,circle:je,clippingMask:qe,heatmap:Ze,heatmapTexture:Ge,collisionBox:Xe,collisionCircle:We,debug:Ke,fill:He,fillOutline:Je,fillOutlinePattern:Ye,fillPattern:$e,fillExtrusion:Qe,fillExtrusionPattern:tr,hillshadePrepare:er,hillshade:rr,line:ir,lineGradient:nr,linePattern:or,lineSDF:ar,raster:sr,symbolIcon:lr,symbolSDF:ur}),hr=function(){this.boundProgram=null,this.boundLayoutVertexBuffer=null,this.boundPaintVertexBuffers=[],this.boundIndexBuffer=null,this.boundVertexOffset=null,this.boundDynamicVertexBuffer=null,this.vao=null}
hr.prototype.bind=function(t,e,r,i,n,o,a,s){this.context=t
for(var l=this.boundPaintVertexBuffers.length!==i.length,u=0;!l&&u<i.length;u++)this.boundPaintVertexBuffers[u]!==i[u]&&(l=!0)
var c=!this.vao||this.boundProgram!==e||this.boundLayoutVertexBuffer!==r||l||this.boundIndexBuffer!==n||this.boundVertexOffset!==o||this.boundDynamicVertexBuffer!==a||this.boundDynamicVertexBuffer2!==s
!t.extVertexArrayObject||c?this.freshBind(e,r,i,n,o,a,s):(t.bindVertexArrayOES.set(this.vao),a&&a.bind(),n&&n.dynamicDraw&&n.bind(),s&&s.bind())},hr.prototype.freshBind=function(t,e,r,i,n,o,a){var s,l=t.numAttributes,u=this.context,c=u.gl
if(u.extVertexArrayObject)this.vao&&this.destroy(),this.vao=u.extVertexArrayObject.createVertexArrayOES(),u.bindVertexArrayOES.set(this.vao),s=0,this.boundProgram=t,this.boundLayoutVertexBuffer=e,this.boundPaintVertexBuffers=r,this.boundIndexBuffer=i,this.boundVertexOffset=n,this.boundDynamicVertexBuffer=o,this.boundDynamicVertexBuffer2=a
else{s=u.currentNumAttributes||0
for(var p=l;p<s;p++)c.disableVertexAttribArray(p)}e.enableAttributes(c,t)
for(var h=0,f=r;h<f.length;h+=1)f[h].enableAttributes(c,t)
o&&o.enableAttributes(c,t),a&&a.enableAttributes(c,t),e.bind(),e.setVertexAttribPointers(c,t,n)
for(var d=0,m=r;d<m.length;d+=1){var y=m[d]
y.bind(),y.setVertexAttribPointers(c,t,n)}o&&(o.bind(),o.setVertexAttribPointers(c,t,n)),i&&i.bind(),a&&(a.bind(),a.setVertexAttribPointers(c,t,n)),u.currentNumAttributes=l},hr.prototype.destroy=function(){this.vao&&(this.context.extVertexArrayObject.deleteVertexArrayOES(this.vao),this.vao=null)}
var fr=function(t,e,r,i,n){var o=t.gl
this.program=o.createProgram()
var a=r.defines()
n&&a.push("#define OVERDRAW_INSPECTOR;")
var s=a.concat(Ue.fragmentSource,e.fragmentSource).join("\n"),l=a.concat(Ue.vertexSource,e.vertexSource).join("\n"),u=o.createShader(o.FRAGMENT_SHADER)
o.shaderSource(u,s),o.compileShader(u),o.attachShader(this.program,u)
var c=o.createShader(o.VERTEX_SHADER)
o.shaderSource(c,l),o.compileShader(c),o.attachShader(this.program,c)
for(var p=r.layoutAttributes||[],h=0;h<p.length;h++)o.bindAttribLocation(this.program,h,p[h].name)
o.linkProgram(this.program),this.numAttributes=o.getProgramParameter(this.program,o.ACTIVE_ATTRIBUTES),this.attributes={}
for(var f={},d=0;d<this.numAttributes;d++){var m=o.getActiveAttrib(this.program,d)
m&&(this.attributes[m.name]=o.getAttribLocation(this.program,m.name))}for(var y=o.getProgramParameter(this.program,o.ACTIVE_UNIFORMS),v=0;v<y;v++){var _=o.getActiveUniform(this.program,v)
_&&(f[_.name]=o.getUniformLocation(this.program,_.name))}this.fixedUniforms=i(t,f),this.binderUniforms=r.getUniforms(t,f)}
function dr(e,r,i){var n=1/ue(i,1,r.transform.tileZoom),o=Math.pow(2,i.tileID.overscaledZ),a=i.tileSize*Math.pow(2,r.transform.tileZoom)/o,s=a*(i.tileID.canonical.x+i.tileID.wrap*o),l=a*i.tileID.canonical.y
return{u_image:0,u_texsize:i.imageAtlasTexture.size,u_scale:[t.browser.devicePixelRatio,n,e.fromScale,e.toScale],u_fade:e.t,u_pixel_coord_upper:[s>>16,l>>16],u_pixel_coord_lower:[65535&s,65535&l]}}fr.prototype.draw=function(t,e,r,i,n,o,a,s,l,u,c,p,h,f,d,m){var y,v=t.gl
for(var _ in t.program.set(this.program),t.setDepthMode(r),t.setStencilMode(i),t.setColorMode(n),t.setCullFace(o),this.fixedUniforms)this.fixedUniforms[_].set(a[_])
f&&f.setUniforms(t,this.binderUniforms,p,{zoom:h})
for(var g=(y={},y[v.LINES]=2,y[v.TRIANGLES]=3,y[v.LINE_STRIP]=1,y)[e],x=0,b=c.get();x<b.length;x+=1){var w=b[x],S=w.vaos||(w.vaos={});(S[s]||(S[s]=new hr)).bind(t,this,l,f?f.getPaintVertexBuffers():[],u,w.vertexOffset,d,m),v.drawElements(e,w.primitiveLength*g,v.UNSIGNED_SHORT,w.primitiveOffset*g*2)}}
var mr=function(e,r,i,n){var o=r.style.light,a=o.properties.get("position"),s=[a.x,a.y,a.z],l=t.create$1()
"viewport"===o.properties.get("anchor")&&t.fromRotation(l,-r.transform.angle),t.transformMat3(s,s,l)
var u=o.properties.get("color")
return{u_matrix:e,u_lightpos:s,u_lightintensity:o.properties.get("intensity"),u_lightcolor:[u.r,u.g,u.b],u_vertical_gradient:+i,u_opacity:n}},yr=function(e,r,i,n,o,a,s){return t.extend(mr(e,r,i,n),dr(a,r,s),{u_height_factor:-Math.pow(2,o.overscaledZ)/s.tileSize/8})},vr=function(t){return{u_matrix:t}},_r=function(e,r,i,n){return t.extend(vr(e),dr(i,r,n))},gr=function(t,e){return{u_matrix:t,u_world:e}},xr=function(e,r,i,n,o){return t.extend(_r(e,r,i,n),{u_world:o})},br=function(e,r,i,n){var o,a,s=e.transform
if("map"===n.paint.get("circle-pitch-alignment")){var l=ue(i,1,s.zoom)
o=!0,a=[l,l]}else o=!1,a=s.pixelsToGLUnits
return{u_camera_to_center_distance:s.cameraToCenterDistance,u_scale_with_map:+("map"===n.paint.get("circle-pitch-scale")),u_matrix:e.translatePosMatrix(r.posMatrix,i,n.paint.get("circle-translate"),n.paint.get("circle-translate-anchor")),u_pitch_with_map:+o,u_device_pixel_ratio:t.browser.devicePixelRatio,u_extrude_scale:a}},wr=function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_camera_to_center_distance:new t.Uniform1f(e,r.u_camera_to_center_distance),u_pixels_to_tile_units:new t.Uniform1f(e,r.u_pixels_to_tile_units),u_extrude_scale:new t.Uniform2f(e,r.u_extrude_scale),u_overscale_factor:new t.Uniform1f(e,r.u_overscale_factor)}},Sr=function(t,e,r){var i=ue(r,1,e.zoom),n=Math.pow(2,e.zoom-r.tileID.overscaledZ),o=r.tileID.overscaleFactor()
return{u_matrix:t,u_camera_to_center_distance:e.cameraToCenterDistance,u_pixels_to_tile_units:i,u_extrude_scale:[e.pixelsToGLUnits[0]/(i*n),e.pixelsToGLUnits[1]/(i*n)],u_overscale_factor:o}},Er=function(t,e){return{u_matrix:t,u_color:e}},Tr=function(t){return{u_matrix:t}},Ar=function(t,e,r,i){return{u_matrix:t,u_extrude_scale:ue(e,1,r),u_intensity:i}},Ir=function(t,e,r){var i=r.paint.get("hillshade-shadow-color"),n=r.paint.get("hillshade-highlight-color"),o=r.paint.get("hillshade-accent-color"),a=r.paint.get("hillshade-illumination-direction")*(Math.PI/180)
"viewport"===r.paint.get("hillshade-illumination-anchor")&&(a-=t.transform.angle)
var s=!t.options.moving
return{u_matrix:t.transform.calculatePosMatrix(e.tileID.toUnwrapped(),s),u_image:0,u_latrange:zr(0,e.tileID),u_light:[r.paint.get("hillshade-exaggeration"),a],u_shadow:i,u_highlight:n,u_accent:o}},kr=function(e,r,i){var n=r.stride,o=t.create()
return t.ortho(o,0,t.EXTENT,-t.EXTENT,0,0,1),t.translate(o,o,[0,-t.EXTENT,0]),{u_matrix:o,u_image:1,u_dimension:[n,n],u_zoom:e.overscaledZ,u_maxzoom:i,u_unpack:r.getUnpackVector()}}
function zr(e,r){var i=Math.pow(2,r.canonical.z),n=r.canonical.y
return[new t.MercatorCoordinate(0,n/i).toLngLat().lat,new t.MercatorCoordinate(0,(n+1)/i).toLngLat().lat]}var Cr=function(e,r,i){var n=e.transform
return{u_matrix:Br(e,r,i),u_ratio:1/ue(r,1,n.zoom),u_device_pixel_ratio:t.browser.devicePixelRatio,u_units_to_pixels:[1/n.pixelsToGLUnits[0],1/n.pixelsToGLUnits[1]]}},Pr=function(e,r,i){return t.extend(Cr(e,r,i),{u_image:0})},Mr=function(e,r,i,n){var o=e.transform,a=Dr(r,o)
return{u_matrix:Br(e,r,i),u_texsize:r.imageAtlasTexture.size,u_ratio:1/ue(r,1,o.zoom),u_device_pixel_ratio:t.browser.devicePixelRatio,u_image:0,u_scale:[t.browser.devicePixelRatio,a,n.fromScale,n.toScale],u_fade:n.t,u_units_to_pixels:[1/o.pixelsToGLUnits[0],1/o.pixelsToGLUnits[1]]}},Lr=function(e,r,i,n,o){var a=e.transform,s=e.lineAtlas,l=Dr(r,a),u="round"===i.layout.get("line-cap"),c=s.getDash(n.from,u),p=s.getDash(n.to,u),h=c.width*o.fromScale,f=p.width*o.toScale
return t.extend(Cr(e,r,i),{u_patternscale_a:[l/h,-c.height/2],u_patternscale_b:[l/f,-p.height/2],u_sdfgamma:s.width/(256*Math.min(h,f)*t.browser.devicePixelRatio)/2,u_image:0,u_tex_y_a:c.y,u_tex_y_b:p.y,u_mix:o.t})}
function Dr(t,e){return 1/ue(t,1,e.tileZoom)}function Br(t,e,r){return t.translatePosMatrix(e.tileID.posMatrix,e,r.paint.get("line-translate"),r.paint.get("line-translate-anchor"))}var Rr=function(t,e,r,i,n){return{u_matrix:t,u_tl_parent:e,u_scale_parent:r,u_buffer_scale:1,u_fade_t:i.mix,u_opacity:i.opacity*n.paint.get("raster-opacity"),u_image0:0,u_image1:1,u_brightness_low:n.paint.get("raster-brightness-min"),u_brightness_high:n.paint.get("raster-brightness-max"),u_saturation_factor:(a=n.paint.get("raster-saturation"),a>0?1-1/(1.001-a):-a),u_contrast_factor:(o=n.paint.get("raster-contrast"),o>0?1/(1-o):1+o),u_spin_weights:Fr(n.paint.get("raster-hue-rotate"))}
var o,a}
function Fr(t){t*=Math.PI/180
var e=Math.sin(t),r=Math.cos(t)
return[(2*r+1)/3,(-Math.sqrt(3)*e-r+1)/3,(Math.sqrt(3)*e-r+1)/3]}var Or=function(t,e,r,i,n,o,a,s,l,u){var c=n.transform
return{u_is_size_zoom_constant:+("constant"===t||"source"===t),u_is_size_feature_constant:+("constant"===t||"camera"===t),u_size_t:e?e.uSizeT:0,u_size:e?e.uSize:0,u_camera_to_center_distance:c.cameraToCenterDistance,u_pitch:c.pitch/360*2*Math.PI,u_rotate_symbol:+r,u_aspect_ratio:c.width/c.height,u_fade_change:n.options.fadeDuration?n.symbolFadeChange:1,u_matrix:o,u_label_plane_matrix:a,u_coord_matrix:s,u_is_text:+l,u_pitch_with_map:+i,u_texsize:u,u_texture:0}},Ur=function(e,r,i,n,o,a,s,l,u,c,p){var h=o.transform
return t.extend(Or(e,r,i,n,o,a,s,l,u,c),{u_gamma_scale:n?Math.cos(h._pitch)*h.cameraToCenterDistance:1,u_device_pixel_ratio:t.browser.devicePixelRatio,u_is_halo:+p})},Vr=function(t,e,r){return{u_matrix:t,u_opacity:e,u_color:r}},Nr=function(e,r,i,n,o,a){return t.extend(function(t,e,r,i){var n=r.imageManager.getPattern(t.from.toString()),o=r.imageManager.getPattern(t.to.toString()),a=r.imageManager.getPixelSize(),s=a.width,l=a.height,u=Math.pow(2,i.tileID.overscaledZ),c=i.tileSize*Math.pow(2,r.transform.tileZoom)/u,p=c*(i.tileID.canonical.x+i.tileID.wrap*u),h=c*i.tileID.canonical.y
return{u_image:0,u_pattern_tl_a:n.tl,u_pattern_br_a:n.br,u_pattern_tl_b:o.tl,u_pattern_br_b:o.br,u_texsize:[s,l],u_mix:e.t,u_pattern_size_a:n.displaySize,u_pattern_size_b:o.displaySize,u_scale_a:e.fromScale,u_scale_b:e.toScale,u_tile_units_to_pixels:1/ue(i,1,r.transform.tileZoom),u_pixel_coord_upper:[p>>16,h>>16],u_pixel_coord_lower:[65535&p,65535&h]}}(n,a,i,o),{u_matrix:e,u_opacity:r})},jr={fillExtrusion:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_lightpos:new t.Uniform3f(e,r.u_lightpos),u_lightintensity:new t.Uniform1f(e,r.u_lightintensity),u_lightcolor:new t.Uniform3f(e,r.u_lightcolor),u_vertical_gradient:new t.Uniform1f(e,r.u_vertical_gradient),u_opacity:new t.Uniform1f(e,r.u_opacity)}},fillExtrusionPattern:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_lightpos:new t.Uniform3f(e,r.u_lightpos),u_lightintensity:new t.Uniform1f(e,r.u_lightintensity),u_lightcolor:new t.Uniform3f(e,r.u_lightcolor),u_vertical_gradient:new t.Uniform1f(e,r.u_vertical_gradient),u_height_factor:new t.Uniform1f(e,r.u_height_factor),u_image:new t.Uniform1i(e,r.u_image),u_texsize:new t.Uniform2f(e,r.u_texsize),u_pixel_coord_upper:new t.Uniform2f(e,r.u_pixel_coord_upper),u_pixel_coord_lower:new t.Uniform2f(e,r.u_pixel_coord_lower),u_scale:new t.Uniform4f(e,r.u_scale),u_fade:new t.Uniform1f(e,r.u_fade),u_opacity:new t.Uniform1f(e,r.u_opacity)}},fill:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix)}},fillPattern:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_image:new t.Uniform1i(e,r.u_image),u_texsize:new t.Uniform2f(e,r.u_texsize),u_pixel_coord_upper:new t.Uniform2f(e,r.u_pixel_coord_upper),u_pixel_coord_lower:new t.Uniform2f(e,r.u_pixel_coord_lower),u_scale:new t.Uniform4f(e,r.u_scale),u_fade:new t.Uniform1f(e,r.u_fade)}},fillOutline:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_world:new t.Uniform2f(e,r.u_world)}},fillOutlinePattern:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_world:new t.Uniform2f(e,r.u_world),u_image:new t.Uniform1i(e,r.u_image),u_texsize:new t.Uniform2f(e,r.u_texsize),u_pixel_coord_upper:new t.Uniform2f(e,r.u_pixel_coord_upper),u_pixel_coord_lower:new t.Uniform2f(e,r.u_pixel_coord_lower),u_scale:new t.Uniform4f(e,r.u_scale),u_fade:new t.Uniform1f(e,r.u_fade)}},circle:function(e,r){return{u_camera_to_center_distance:new t.Uniform1f(e,r.u_camera_to_center_distance),u_scale_with_map:new t.Uniform1i(e,r.u_scale_with_map),u_pitch_with_map:new t.Uniform1i(e,r.u_pitch_with_map),u_extrude_scale:new t.Uniform2f(e,r.u_extrude_scale),u_device_pixel_ratio:new t.Uniform1f(e,r.u_device_pixel_ratio),u_matrix:new t.UniformMatrix4f(e,r.u_matrix)}},collisionBox:wr,collisionCircle:wr,debug:function(e,r){return{u_color:new t.UniformColor(e,r.u_color),u_matrix:new t.UniformMatrix4f(e,r.u_matrix)}},clippingMask:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix)}},heatmap:function(e,r){return{u_extrude_scale:new t.Uniform1f(e,r.u_extrude_scale),u_intensity:new t.Uniform1f(e,r.u_intensity),u_matrix:new t.UniformMatrix4f(e,r.u_matrix)}},heatmapTexture:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_world:new t.Uniform2f(e,r.u_world),u_image:new t.Uniform1i(e,r.u_image),u_color_ramp:new t.Uniform1i(e,r.u_color_ramp),u_opacity:new t.Uniform1f(e,r.u_opacity)}},hillshade:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_image:new t.Uniform1i(e,r.u_image),u_latrange:new t.Uniform2f(e,r.u_latrange),u_light:new t.Uniform2f(e,r.u_light),u_shadow:new t.UniformColor(e,r.u_shadow),u_highlight:new t.UniformColor(e,r.u_highlight),u_accent:new t.UniformColor(e,r.u_accent)}},hillshadePrepare:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_image:new t.Uniform1i(e,r.u_image),u_dimension:new t.Uniform2f(e,r.u_dimension),u_zoom:new t.Uniform1f(e,r.u_zoom),u_maxzoom:new t.Uniform1f(e,r.u_maxzoom),u_unpack:new t.Uniform4f(e,r.u_unpack)}},line:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_ratio:new t.Uniform1f(e,r.u_ratio),u_device_pixel_ratio:new t.Uniform1f(e,r.u_device_pixel_ratio),u_units_to_pixels:new t.Uniform2f(e,r.u_units_to_pixels)}},lineGradient:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_ratio:new t.Uniform1f(e,r.u_ratio),u_device_pixel_ratio:new t.Uniform1f(e,r.u_device_pixel_ratio),u_units_to_pixels:new t.Uniform2f(e,r.u_units_to_pixels),u_image:new t.Uniform1i(e,r.u_image)}},linePattern:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_texsize:new t.Uniform2f(e,r.u_texsize),u_ratio:new t.Uniform1f(e,r.u_ratio),u_device_pixel_ratio:new t.Uniform1f(e,r.u_device_pixel_ratio),u_image:new t.Uniform1i(e,r.u_image),u_units_to_pixels:new t.Uniform2f(e,r.u_units_to_pixels),u_scale:new t.Uniform4f(e,r.u_scale),u_fade:new t.Uniform1f(e,r.u_fade)}},lineSDF:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_ratio:new t.Uniform1f(e,r.u_ratio),u_device_pixel_ratio:new t.Uniform1f(e,r.u_device_pixel_ratio),u_units_to_pixels:new t.Uniform2f(e,r.u_units_to_pixels),u_patternscale_a:new t.Uniform2f(e,r.u_patternscale_a),u_patternscale_b:new t.Uniform2f(e,r.u_patternscale_b),u_sdfgamma:new t.Uniform1f(e,r.u_sdfgamma),u_image:new t.Uniform1i(e,r.u_image),u_tex_y_a:new t.Uniform1f(e,r.u_tex_y_a),u_tex_y_b:new t.Uniform1f(e,r.u_tex_y_b),u_mix:new t.Uniform1f(e,r.u_mix)}},raster:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_tl_parent:new t.Uniform2f(e,r.u_tl_parent),u_scale_parent:new t.Uniform1f(e,r.u_scale_parent),u_buffer_scale:new t.Uniform1f(e,r.u_buffer_scale),u_fade_t:new t.Uniform1f(e,r.u_fade_t),u_opacity:new t.Uniform1f(e,r.u_opacity),u_image0:new t.Uniform1i(e,r.u_image0),u_image1:new t.Uniform1i(e,r.u_image1),u_brightness_low:new t.Uniform1f(e,r.u_brightness_low),u_brightness_high:new t.Uniform1f(e,r.u_brightness_high),u_saturation_factor:new t.Uniform1f(e,r.u_saturation_factor),u_contrast_factor:new t.Uniform1f(e,r.u_contrast_factor),u_spin_weights:new t.Uniform3f(e,r.u_spin_weights)}},symbolIcon:function(e,r){return{u_is_size_zoom_constant:new t.Uniform1i(e,r.u_is_size_zoom_constant),u_is_size_feature_constant:new t.Uniform1i(e,r.u_is_size_feature_constant),u_size_t:new t.Uniform1f(e,r.u_size_t),u_size:new t.Uniform1f(e,r.u_size),u_camera_to_center_distance:new t.Uniform1f(e,r.u_camera_to_center_distance),u_pitch:new t.Uniform1f(e,r.u_pitch),u_rotate_symbol:new t.Uniform1i(e,r.u_rotate_symbol),u_aspect_ratio:new t.Uniform1f(e,r.u_aspect_ratio),u_fade_change:new t.Uniform1f(e,r.u_fade_change),u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_label_plane_matrix:new t.UniformMatrix4f(e,r.u_label_plane_matrix),u_coord_matrix:new t.UniformMatrix4f(e,r.u_coord_matrix),u_is_text:new t.Uniform1f(e,r.u_is_text),u_pitch_with_map:new t.Uniform1i(e,r.u_pitch_with_map),u_texsize:new t.Uniform2f(e,r.u_texsize),u_texture:new t.Uniform1i(e,r.u_texture)}},symbolSDF:function(e,r){return{u_is_size_zoom_constant:new t.Uniform1i(e,r.u_is_size_zoom_constant),u_is_size_feature_constant:new t.Uniform1i(e,r.u_is_size_feature_constant),u_size_t:new t.Uniform1f(e,r.u_size_t),u_size:new t.Uniform1f(e,r.u_size),u_camera_to_center_distance:new t.Uniform1f(e,r.u_camera_to_center_distance),u_pitch:new t.Uniform1f(e,r.u_pitch),u_rotate_symbol:new t.Uniform1i(e,r.u_rotate_symbol),u_aspect_ratio:new t.Uniform1f(e,r.u_aspect_ratio),u_fade_change:new t.Uniform1f(e,r.u_fade_change),u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_label_plane_matrix:new t.UniformMatrix4f(e,r.u_label_plane_matrix),u_coord_matrix:new t.UniformMatrix4f(e,r.u_coord_matrix),u_is_text:new t.Uniform1f(e,r.u_is_text),u_pitch_with_map:new t.Uniform1i(e,r.u_pitch_with_map),u_texsize:new t.Uniform2f(e,r.u_texsize),u_texture:new t.Uniform1i(e,r.u_texture),u_gamma_scale:new t.Uniform1f(e,r.u_gamma_scale),u_device_pixel_ratio:new t.Uniform1f(e,r.u_device_pixel_ratio),u_is_halo:new t.Uniform1f(e,r.u_is_halo)}},background:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_opacity:new t.Uniform1f(e,r.u_opacity),u_color:new t.UniformColor(e,r.u_color)}},backgroundPattern:function(e,r){return{u_matrix:new t.UniformMatrix4f(e,r.u_matrix),u_opacity:new t.Uniform1f(e,r.u_opacity),u_image:new t.Uniform1i(e,r.u_image),u_pattern_tl_a:new t.Uniform2f(e,r.u_pattern_tl_a),u_pattern_br_a:new t.Uniform2f(e,r.u_pattern_br_a),u_pattern_tl_b:new t.Uniform2f(e,r.u_pattern_tl_b),u_pattern_br_b:new t.Uniform2f(e,r.u_pattern_br_b),u_texsize:new t.Uniform2f(e,r.u_texsize),u_mix:new t.Uniform1f(e,r.u_mix),u_pattern_size_a:new t.Uniform2f(e,r.u_pattern_size_a),u_pattern_size_b:new t.Uniform2f(e,r.u_pattern_size_b),u_scale_a:new t.Uniform1f(e,r.u_scale_a),u_scale_b:new t.Uniform1f(e,r.u_scale_b),u_pixel_coord_upper:new t.Uniform2f(e,r.u_pixel_coord_upper),u_pixel_coord_lower:new t.Uniform2f(e,r.u_pixel_coord_lower),u_tile_units_to_pixels:new t.Uniform1f(e,r.u_tile_units_to_pixels)}}}
function qr(e,r){for(var i=e.sort(function(t,e){return t.tileID.isLessThan(e.tileID)?-1:e.tileID.isLessThan(t.tileID)?1:0}),n=0;n<i.length;n++){var o={},a=i[n],s=i.slice(n+1)
Zr(a.tileID.wrapped(),a.tileID,s,new t.OverscaledTileID(0,a.tileID.wrap+1,0,0,0),o),a.setMask(o,r)}}function Zr(e,r,i,n,o){for(var a=0;a<i.length;a++){var s=i[a]
if(n.isLessThan(s.tileID))break
if(r.key===s.tileID.key)return
if(s.tileID.isChildOf(r)){for(var l=r.children(1/0),u=0;u<l.length;u++)Zr(e,l[u],i.slice(a),n,o)
return}}var c=r.overscaledZ-e.overscaledZ,p=new t.CanonicalTileID(c,r.canonical.x-(e.canonical.x<<c),r.canonical.y-(e.canonical.y<<c))
o[p.key]=o[p.key]||p}function Gr(t,e,r,i,n,o,a,s){for(var l=t.context,u=l.gl,c=n?t.useProgram("collisionCircle"):t.useProgram("collisionBox"),p=0;p<i.length;p++){var h=i[p],f=e.getTile(h),d=f.getBucket(r)
if(d){var m=n?s?d.textCollisionCircle:d.iconCollisionCircle:s?d.textCollisionBox:d.iconCollisionBox
if(m){var y=h.posMatrix
0===o[0]&&0===o[1]||(y=t.translatePosMatrix(h.posMatrix,f,o,a)),c.draw(l,n?u.TRIANGLES:u.LINES,Tt.disabled,At.disabled,t.colorModeForRenderPass(),kt.disabled,Sr(y,t.transform,f),r.id,m.layoutVertexBuffer,m.indexBuffer,m.segments,null,t.transform.zoom,null,null,m.collisionVertexBuffer)}}}}function Xr(t,e,r,i,n,o,a){Gr(t,e,r,i,!1,n,o,a),Gr(t,e,r,i,!0,n,o,a)}var Wr=t.identity(new Float32Array(16))
function Kr(e,r,i,n,o,a){var s=t.getAnchorAlignment(e),l=-(s.horizontalAlign-.5)*r,u=-(s.verticalAlign-.5)*i,c=t.evaluateVariableOffset(e,n)
return new t.Point((l/o+c[0])*a,(u/o+c[1])*a)}function Hr(e,r,i,n,o,a,s,l,u,c,p){var h=e.text.placedSymbolArray,f=e.text.dynamicLayoutVertexArray,d=e.icon.dynamicLayoutVertexArray,m={}
f.clear()
for(var y=0;y<h.length;y++){var v=h.get(y),_=e.allowVerticalPlacement&&!v.placedOrientation,g=v.hidden||!v.crossTileID||_?null:n[v.crossTileID]
if(g){var x=new t.Point(v.anchorX,v.anchorY),b=Jt(x,i?l:s),w=.5+a.cameraToCenterDistance/b.signedDistanceFromCamera*.5,S=o.evaluateSizeForFeature(e.textSizeData,c,v)*w/t.ONE_EM
i&&(S*=e.tilePixelRatio/u)
for(var E=g.width,T=g.height,A=Kr(g.anchor,E,T,g.textOffset,g.textBoxScale,S),I=i?Jt(x.add(A),s).point:b.point.add(r?A.rotate(-a.angle):A),k=e.allowVerticalPlacement&&v.placedOrientation===t.WritingMode.vertical?Math.PI/2:0,z=0;z<v.numGlyphs;z++)t.addDynamicAttributes(f,I,k)
p&&v.associatedIconIndex>=0&&(m[v.associatedIconIndex]={shiftedAnchor:I,angle:k})}else oe(v.numGlyphs,f)}if(p){d.clear()
for(var C=e.icon.placedSymbolArray,P=0;P<C.length;P++){var M=C.get(P)
if(M.hidden)oe(M.numGlyphs,d)
else{var L=m[P]
if(L)for(var D=0;D<M.numGlyphs;D++)t.addDynamicAttributes(d,L.shiftedAnchor,L.angle)
else oe(M.numGlyphs,d)}}e.icon.dynamicLayoutVertexBuffer.updateData(d)}e.text.dynamicLayoutVertexBuffer.updateData(f)}function Jr(e){var r=e.text.placedSymbolArray,i=e.text.dynamicLayoutVertexArray
i.clear()
for(var n=0;n<r.length;n++){var o=r.get(n)
if(o.hidden||!o.placedOrientation)oe(o.numGlyphs,i)
else for(var a=new t.Point(o.anchorX,o.anchorY),s=e.allowVerticalPlacement&&o.placedOrientation===t.WritingMode.vertical?Math.PI/2:0,l=0;l<o.numGlyphs;l++)t.addDynamicAttributes(i,a,s)}e.text.dynamicLayoutVertexBuffer.updateData(i)}function Yr(e,r,i,n,o,a,s,l,u,c,p,h){for(var f,d,m=e.context,y=m.gl,v=e.transform,_="map"===l,g="map"===u,x=_&&"point"!==i.layout.get("symbol-placement"),b=_&&!g&&!x,w=void 0!==i.layout.get("symbol-sort-key").constantOr(1),S=e.depthModeForSublayer(0,Tt.ReadOnly),E=i.layout.get("text-variable-anchor"),T=[],A=0,I=n;A<I.length;A+=1){var k=I[A],z=r.getTile(k),C=z.getBucket(i)
if(C){var P=o?C.text:C.icon
if(P&&P.segments.get().length){var M=P.programConfigurations.get(i.id),L=o||C.sdfIcons,D=o?C.textSizeData:C.iconSizeData
f||(f=e.useProgram(L?"symbolSDF":"symbolIcon",M),d=t.evaluateSizeForZoom(D,v.zoom)),m.activeTexture.set(y.TEXTURE0)
var B=void 0,R=void 0,F=void 0
if(o)R=z.glyphAtlasTexture,F=y.LINEAR,B=z.glyphAtlasTexture.size
else{var O=1!==i.layout.get("icon-size").constantOr(0)||C.iconsNeedLinear,U=g||0!==v.pitch
R=z.imageAtlasTexture,F=L||e.options.rotating||e.options.zooming||O||U?y.LINEAR:y.NEAREST,B=z.imageAtlasTexture.size}var V=ue(z,1,e.transform.zoom),N=Kt(k.posMatrix,g,_,e.transform,V),j=Ht(k.posMatrix,g,_,e.transform,V),q=E&&C.hasTextData(),Z="none"!==i.layout.get("icon-text-fit")&&q&&C.hasIconData()
x?$t(C,k.posMatrix,e,o,N,j,g,c):o&&d&&C.allowVerticalPlacement&&!E&&Jr(C)
var G=e.translatePosMatrix(k.posMatrix,z,a,s),X=x||o&&E||Z?Wr:N,W=e.translatePosMatrix(j,z,a,s,!0),K=L&&0!==i.paint.get(o?"text-halo-width":"icon-halo-width").constantOr(1),H={program:f,buffers:P,uniformValues:L?Ur(D.kind,d,b,g,e,G,X,W,o,B,!0):Or(D.kind,d,b,g,e,G,X,W,o,B),atlasTexture:R,atlasInterpolation:F,isSDF:L,hasHalo:K}
if(w)for(var J=0,Y=P.segments.get();J<Y.length;J+=1){var $=Y[J]
T.push({segments:new t.SegmentVector([$]),sortKey:$.sortKey,state:H})}else T.push({segments:P.segments,sortKey:0,state:H})}}}w&&T.sort(function(t,e){return t.sortKey-e.sortKey})
for(var Q=0,tt=T;Q<tt.length;Q+=1){var et=tt[Q],rt=et.state
if(rt.atlasTexture.bind(rt.atlasInterpolation,y.CLAMP_TO_EDGE),rt.isSDF){var it=rt.uniformValues
rt.hasHalo&&(it.u_is_halo=1,$r(rt.buffers,et.segments,i,e,rt.program,S,p,h,it)),it.u_is_halo=0}$r(rt.buffers,et.segments,i,e,rt.program,S,p,h,rt.uniformValues)}}function $r(t,e,r,i,n,o,a,s,l){var u=i.context,c=u.gl
n.draw(u,c.TRIANGLES,o,a,s,kt.disabled,l,r.id,t.layoutVertexBuffer,t.indexBuffer,e,r.paint,i.transform.zoom,t.programConfigurations.get(r.id),t.dynamicLayoutVertexBuffer,t.opacityVertexBuffer)}function Qr(t,e,r,i,n,o,a){var s,l,u,c,p,h=t.context.gl,f=r.paint.get("fill-pattern"),d=f&&f.constantOr(1),m=r.getCrossfadeParameters()
a?(l=d&&!r.getPaintProperty("fill-outline-color")?"fillOutlinePattern":"fillOutline",s=h.LINES):(l=d?"fillPattern":"fill",s=h.TRIANGLES)
for(var y=0,v=i;y<v.length;y+=1){var _=v[y],g=e.getTile(_)
if(!d||g.patternsLoaded()){var x=g.getBucket(r)
if(x){var b=x.programConfigurations.get(r.id),w=t.useProgram(l,b)
d&&(t.context.activeTexture.set(h.TEXTURE0),g.imageAtlasTexture.bind(h.LINEAR,h.CLAMP_TO_EDGE),b.updatePatternPaintBuffers(m))
var S=f.constantOr(null)
if(S&&g.imageAtlas){var E=g.imageAtlas,T=E.patternPositions[S.to.toString()],A=E.patternPositions[S.from.toString()]
T&&A&&b.setConstantPatternPositions(T,A)}var I=t.translatePosMatrix(_.posMatrix,g,r.paint.get("fill-translate"),r.paint.get("fill-translate-anchor"))
if(a){c=x.indexBuffer2,p=x.segments2
var k=[h.drawingBufferWidth,h.drawingBufferHeight]
u="fillOutlinePattern"===l&&d?xr(I,t,m,g,k):gr(I,k)}else c=x.indexBuffer,p=x.segments,u=d?_r(I,t,m,g):vr(I)
w.draw(t.context,s,n,t.stencilModeForClipping(_),o,kt.disabled,u,r.id,x.layoutVertexBuffer,c,p,r.paint,t.transform.zoom,b)}}}}function ti(t,e,r,i,n,o,a){for(var s=t.context,l=s.gl,u=r.paint.get("fill-extrusion-pattern"),c=u.constantOr(1),p=r.getCrossfadeParameters(),h=r.paint.get("fill-extrusion-opacity"),f=0,d=i;f<d.length;f+=1){var m=d[f],y=e.getTile(m),v=y.getBucket(r)
if(v){var _=v.programConfigurations.get(r.id),g=t.useProgram(c?"fillExtrusionPattern":"fillExtrusion",_)
c&&(t.context.activeTexture.set(l.TEXTURE0),y.imageAtlasTexture.bind(l.LINEAR,l.CLAMP_TO_EDGE),_.updatePatternPaintBuffers(p))
var x=u.constantOr(null)
if(x&&y.imageAtlas){var b=y.imageAtlas,w=b.patternPositions[x.to.toString()],S=b.patternPositions[x.from.toString()]
w&&S&&_.setConstantPatternPositions(w,S)}var E=t.translatePosMatrix(m.posMatrix,y,r.paint.get("fill-extrusion-translate"),r.paint.get("fill-extrusion-translate-anchor")),T=r.paint.get("fill-extrusion-vertical-gradient"),A=c?yr(E,t,T,h,m,p,y):mr(E,t,T,h)
g.draw(s,s.gl.TRIANGLES,n,o,a,kt.backCCW,A,r.id,v.layoutVertexBuffer,v.indexBuffer,v.segments,r.paint,t.transform.zoom,_)}}}function ei(t,e,r,i,n,o){var a=t.context,s=a.gl,l=e.fbo
if(l){var u=t.useProgram("hillshade")
a.activeTexture.set(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,l.colorAttachment.get())
var c=Ir(t,e,r)
e.maskedBoundsBuffer&&e.maskedIndexBuffer&&e.segments?u.draw(a,s.TRIANGLES,i,n,o,kt.disabled,c,r.id,e.maskedBoundsBuffer,e.maskedIndexBuffer,e.segments):u.draw(a,s.TRIANGLES,i,n,o,kt.disabled,c,r.id,t.rasterBoundsBuffer,t.quadTriangleIndexBuffer,t.rasterBoundsSegments)}}function ri(e,r,i,n,o,a,s){var l=e.context,u=l.gl,c=r.dem
if(c&&c.data){var p=c.dim,h=c.stride,f=c.getPixels()
if(l.activeTexture.set(u.TEXTURE1),l.pixelStoreUnpackPremultiplyAlpha.set(!1),r.demTexture=r.demTexture||e.getTileTexture(h),r.demTexture){var d=r.demTexture
d.update(f,{premultiply:!1}),d.bind(u.NEAREST,u.CLAMP_TO_EDGE)}else r.demTexture=new t.Texture(l,f,u.RGBA,{premultiply:!1}),r.demTexture.bind(u.NEAREST,u.CLAMP_TO_EDGE)
l.activeTexture.set(u.TEXTURE0)
var m=r.fbo
if(!m){var y=new t.Texture(l,{width:p,height:p,data:null},u.RGBA)
y.bind(u.LINEAR,u.CLAMP_TO_EDGE),(m=r.fbo=l.createFramebuffer(p,p)).colorAttachment.set(y.texture)}l.bindFramebuffer.set(m.framebuffer),l.viewport.set([0,0,p,p]),e.useProgram("hillshadePrepare").draw(l,u.TRIANGLES,o,a,s,kt.disabled,kr(r.tileID,c,n),i.id,e.rasterBoundsBuffer,e.quadTriangleIndexBuffer,e.rasterBoundsSegments),r.needsHillshadePrepare=!1}}function ii(e,r,i,n,o){var a=n.paint.get("raster-fade-duration")
if(a>0){var s=t.browser.now(),l=(s-e.timeAdded)/a,u=r?(s-r.timeAdded)/a:-1,c=i.getSource(),p=o.coveringZoomLevel({tileSize:c.tileSize,roundZoom:c.roundZoom}),h=!r||Math.abs(r.tileID.overscaledZ-p)>Math.abs(e.tileID.overscaledZ-p),f=h&&e.refreshedUponExpiration?1:t.clamp(h?l:1-u,0,1)
return e.refreshedUponExpiration&&l>=1&&(e.refreshedUponExpiration=!1),r?{opacity:1,mix:1-f}:{opacity:f,mix:0}}return{opacity:1,mix:0}}function ni(e,r,i){var n=e.context,o=n.gl,a=i.posMatrix,s=e.useProgram("debug"),l=Tt.disabled,u=At.disabled,c=e.colorModeForRenderPass(),p="$debug"
s.draw(n,o.LINE_STRIP,l,u,c,kt.disabled,Er(a,t.Color.red),p,e.debugBuffer,e.tileBorderIndexBuffer,e.debugSegments)
for(var h=r.getTileByID(i.key).latestRawTileData,f=h&&h.byteLength||0,d=Math.floor(f/1024),m=r.getTile(i).tileSize,y=512/Math.min(m,512),v=function(t,e,r,i){i=i||1
var n,o,a,s,l,u,c,p,h=[]
for(n=0,o=t.length;n<o;n++)if(l=oi[t[n]]){for(p=null,a=0,s=l[1].length;a<s;a+=2)-1===l[1][a]&&-1===l[1][a+1]?p=null:(u=e+l[1][a]*i,c=r-l[1][a+1]*i,p&&h.push(p.x,p.y,u,c),p={x:u,y:c})
e+=l[0]*i}return h}(i.toString()+" "+d+"kb",50,200*y,5*y),_=new t.StructArrayLayout2i4,g=new t.StructArrayLayout2ui4,x=0;x<v.length;x+=2)_.emplaceBack(v[x],v[x+1]),g.emplaceBack(x,x+1)
for(var b=n.createVertexBuffer(_,Oe.members),w=n.createIndexBuffer(g),S=t.SegmentVector.simpleSegment(0,0,_.length/2,_.length/2),E=t.EXTENT/(Math.pow(2,e.transform.zoom-i.overscaledZ)*m*y),T=[],A=-1;A<=1;A++)for(var I=-1;I<=1&&(0!==A||0!==I);I++)T.push([A,I])
for(var k=0;k<T.length;k++){var z=T[k]
s.draw(n,o.LINES,l,u,c,kt.disabled,Er(t.translate([],a,[E*z[0],E*z[1],0]),t.Color.white),p,b,w,S)}s.draw(n,o.LINES,l,u,c,kt.disabled,Er(a,t.Color.black),p,b,w,S)}var oi={" ":[16,[]],"!":[10,[5,21,5,7,-1,-1,5,2,4,1,5,0,6,1,5,2]],'"':[16,[4,21,4,14,-1,-1,12,21,12,14]],"#":[21,[11,25,4,-7,-1,-1,17,25,10,-7,-1,-1,4,12,18,12,-1,-1,3,6,17,6]],$:[20,[8,25,8,-4,-1,-1,12,25,12,-4,-1,-1,17,18,15,20,12,21,8,21,5,20,3,18,3,16,4,14,5,13,7,12,13,10,15,9,16,8,17,6,17,3,15,1,12,0,8,0,5,1,3,3]],"%":[24,[21,21,3,0,-1,-1,8,21,10,19,10,17,9,15,7,14,5,14,3,16,3,18,4,20,6,21,8,21,10,20,13,19,16,19,19,20,21,21,-1,-1,17,7,15,6,14,4,14,2,16,0,18,0,20,1,21,3,21,5,19,7,17,7]],"&":[26,[23,12,23,13,22,14,21,14,20,13,19,11,17,6,15,3,13,1,11,0,7,0,5,1,4,2,3,4,3,6,4,8,5,9,12,13,13,14,14,16,14,18,13,20,11,21,9,20,8,18,8,16,9,13,11,10,16,3,18,1,20,0,22,0,23,1,23,2]],"'":[10,[5,19,4,20,5,21,6,20,6,18,5,16,4,15]],"(":[14,[11,25,9,23,7,20,5,16,4,11,4,7,5,2,7,-2,9,-5,11,-7]],")":[14,[3,25,5,23,7,20,9,16,10,11,10,7,9,2,7,-2,5,-5,3,-7]],"*":[16,[8,21,8,9,-1,-1,3,18,13,12,-1,-1,13,18,3,12]],"+":[26,[13,18,13,0,-1,-1,4,9,22,9]],",":[10,[6,1,5,0,4,1,5,2,6,1,6,-1,5,-3,4,-4]],"-":[26,[4,9,22,9]],".":[10,[5,2,4,1,5,0,6,1,5,2]],"/":[22,[20,25,2,-7]],0:[20,[9,21,6,20,4,17,3,12,3,9,4,4,6,1,9,0,11,0,14,1,16,4,17,9,17,12,16,17,14,20,11,21,9,21]],1:[20,[6,17,8,18,11,21,11,0]],2:[20,[4,16,4,17,5,19,6,20,8,21,12,21,14,20,15,19,16,17,16,15,15,13,13,10,3,0,17,0]],3:[20,[5,21,16,21,10,13,13,13,15,12,16,11,17,8,17,6,16,3,14,1,11,0,8,0,5,1,4,2,3,4]],4:[20,[13,21,3,7,18,7,-1,-1,13,21,13,0]],5:[20,[15,21,5,21,4,12,5,13,8,14,11,14,14,13,16,11,17,8,17,6,16,3,14,1,11,0,8,0,5,1,4,2,3,4]],6:[20,[16,18,15,20,12,21,10,21,7,20,5,17,4,12,4,7,5,3,7,1,10,0,11,0,14,1,16,3,17,6,17,7,16,10,14,12,11,13,10,13,7,12,5,10,4,7]],7:[20,[17,21,7,0,-1,-1,3,21,17,21]],8:[20,[8,21,5,20,4,18,4,16,5,14,7,13,11,12,14,11,16,9,17,7,17,4,16,2,15,1,12,0,8,0,5,1,4,2,3,4,3,7,4,9,6,11,9,12,13,13,15,14,16,16,16,18,15,20,12,21,8,21]],9:[20,[16,14,15,11,13,9,10,8,9,8,6,9,4,11,3,14,3,15,4,18,6,20,9,21,10,21,13,20,15,18,16,14,16,9,15,4,13,1,10,0,8,0,5,1,4,3]],":":[10,[5,14,4,13,5,12,6,13,5,14,-1,-1,5,2,4,1,5,0,6,1,5,2]],";":[10,[5,14,4,13,5,12,6,13,5,14,-1,-1,6,1,5,0,4,1,5,2,6,1,6,-1,5,-3,4,-4]],"<":[24,[20,18,4,9,20,0]],"=":[26,[4,12,22,12,-1,-1,4,6,22,6]],">":[24,[4,18,20,9,4,0]],"?":[18,[3,16,3,17,4,19,5,20,7,21,11,21,13,20,14,19,15,17,15,15,14,13,13,12,9,10,9,7,-1,-1,9,2,8,1,9,0,10,1,9,2]],"@":[27,[18,13,17,15,15,16,12,16,10,15,9,14,8,11,8,8,9,6,11,5,14,5,16,6,17,8,-1,-1,12,16,10,14,9,11,9,8,10,6,11,5,-1,-1,18,16,17,8,17,6,19,5,21,5,23,7,24,10,24,12,23,15,22,17,20,19,18,20,15,21,12,21,9,20,7,19,5,17,4,15,3,12,3,9,4,6,5,4,7,2,9,1,12,0,15,0,18,1,20,2,21,3,-1,-1,19,16,18,8,18,6,19,5]],A:[18,[9,21,1,0,-1,-1,9,21,17,0,-1,-1,4,7,14,7]],B:[21,[4,21,4,0,-1,-1,4,21,13,21,16,20,17,19,18,17,18,15,17,13,16,12,13,11,-1,-1,4,11,13,11,16,10,17,9,18,7,18,4,17,2,16,1,13,0,4,0]],C:[21,[18,16,17,18,15,20,13,21,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5]],D:[21,[4,21,4,0,-1,-1,4,21,11,21,14,20,16,18,17,16,18,13,18,8,17,5,16,3,14,1,11,0,4,0]],E:[19,[4,21,4,0,-1,-1,4,21,17,21,-1,-1,4,11,12,11,-1,-1,4,0,17,0]],F:[18,[4,21,4,0,-1,-1,4,21,17,21,-1,-1,4,11,12,11]],G:[21,[18,16,17,18,15,20,13,21,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,18,8,-1,-1,13,8,18,8]],H:[22,[4,21,4,0,-1,-1,18,21,18,0,-1,-1,4,11,18,11]],I:[8,[4,21,4,0]],J:[16,[12,21,12,5,11,2,10,1,8,0,6,0,4,1,3,2,2,5,2,7]],K:[21,[4,21,4,0,-1,-1,18,21,4,7,-1,-1,9,12,18,0]],L:[17,[4,21,4,0,-1,-1,4,0,16,0]],M:[24,[4,21,4,0,-1,-1,4,21,12,0,-1,-1,20,21,12,0,-1,-1,20,21,20,0]],N:[22,[4,21,4,0,-1,-1,4,21,18,0,-1,-1,18,21,18,0]],O:[22,[9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,19,8,19,13,18,16,17,18,15,20,13,21,9,21]],P:[21,[4,21,4,0,-1,-1,4,21,13,21,16,20,17,19,18,17,18,14,17,12,16,11,13,10,4,10]],Q:[22,[9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,19,8,19,13,18,16,17,18,15,20,13,21,9,21,-1,-1,12,4,18,-2]],R:[21,[4,21,4,0,-1,-1,4,21,13,21,16,20,17,19,18,17,18,15,17,13,16,12,13,11,4,11,-1,-1,11,11,18,0]],S:[20,[17,18,15,20,12,21,8,21,5,20,3,18,3,16,4,14,5,13,7,12,13,10,15,9,16,8,17,6,17,3,15,1,12,0,8,0,5,1,3,3]],T:[16,[8,21,8,0,-1,-1,1,21,15,21]],U:[22,[4,21,4,6,5,3,7,1,10,0,12,0,15,1,17,3,18,6,18,21]],V:[18,[1,21,9,0,-1,-1,17,21,9,0]],W:[24,[2,21,7,0,-1,-1,12,21,7,0,-1,-1,12,21,17,0,-1,-1,22,21,17,0]],X:[20,[3,21,17,0,-1,-1,17,21,3,0]],Y:[18,[1,21,9,11,9,0,-1,-1,17,21,9,11]],Z:[20,[17,21,3,0,-1,-1,3,21,17,21,-1,-1,3,0,17,0]],"[":[14,[4,25,4,-7,-1,-1,5,25,5,-7,-1,-1,4,25,11,25,-1,-1,4,-7,11,-7]],"\\":[14,[0,21,14,-3]],"]":[14,[9,25,9,-7,-1,-1,10,25,10,-7,-1,-1,3,25,10,25,-1,-1,3,-7,10,-7]],"^":[16,[6,15,8,18,10,15,-1,-1,3,12,8,17,13,12,-1,-1,8,17,8,0]],_:[16,[0,-2,16,-2]],"`":[10,[6,21,5,20,4,18,4,16,5,15,6,16,5,17]],a:[19,[15,14,15,0,-1,-1,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],b:[19,[4,21,4,0,-1,-1,4,11,6,13,8,14,11,14,13,13,15,11,16,8,16,6,15,3,13,1,11,0,8,0,6,1,4,3]],c:[18,[15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],d:[19,[15,21,15,0,-1,-1,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],e:[18,[3,8,15,8,15,10,14,12,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],f:[12,[10,21,8,21,6,20,5,17,5,0,-1,-1,2,14,9,14]],g:[19,[15,14,15,-2,14,-5,13,-6,11,-7,8,-7,6,-6,-1,-1,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],h:[19,[4,21,4,0,-1,-1,4,10,7,13,9,14,12,14,14,13,15,10,15,0]],i:[8,[3,21,4,20,5,21,4,22,3,21,-1,-1,4,14,4,0]],j:[10,[5,21,6,20,7,21,6,22,5,21,-1,-1,6,14,6,-3,5,-6,3,-7,1,-7]],k:[17,[4,21,4,0,-1,-1,14,14,4,4,-1,-1,8,8,15,0]],l:[8,[4,21,4,0]],m:[30,[4,14,4,0,-1,-1,4,10,7,13,9,14,12,14,14,13,15,10,15,0,-1,-1,15,10,18,13,20,14,23,14,25,13,26,10,26,0]],n:[19,[4,14,4,0,-1,-1,4,10,7,13,9,14,12,14,14,13,15,10,15,0]],o:[19,[8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3,16,6,16,8,15,11,13,13,11,14,8,14]],p:[19,[4,14,4,-7,-1,-1,4,11,6,13,8,14,11,14,13,13,15,11,16,8,16,6,15,3,13,1,11,0,8,0,6,1,4,3]],q:[19,[15,14,15,-7,-1,-1,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],r:[13,[4,14,4,0,-1,-1,4,8,5,11,7,13,9,14,12,14]],s:[17,[14,11,13,13,10,14,7,14,4,13,3,11,4,9,6,8,11,7,13,6,14,4,14,3,13,1,10,0,7,0,4,1,3,3]],t:[12,[5,21,5,4,6,1,8,0,10,0,-1,-1,2,14,9,14]],u:[19,[4,14,4,4,5,1,7,0,10,0,12,1,15,4,-1,-1,15,14,15,0]],v:[16,[2,14,8,0,-1,-1,14,14,8,0]],w:[22,[3,14,7,0,-1,-1,11,14,7,0,-1,-1,11,14,15,0,-1,-1,19,14,15,0]],x:[17,[3,14,14,0,-1,-1,14,14,3,0]],y:[16,[2,14,8,0,-1,-1,14,14,8,0,6,-4,4,-6,2,-7,1,-7]],z:[17,[14,14,3,0,-1,-1,3,14,14,14,-1,-1,3,0,14,0]],"{":[14,[9,25,7,24,6,23,5,21,5,19,6,17,7,16,8,14,8,12,6,10,-1,-1,7,24,6,22,6,20,7,18,8,17,9,15,9,13,8,11,4,9,8,7,9,5,9,3,8,1,7,0,6,-2,6,-4,7,-6,-1,-1,6,8,8,6,8,4,7,2,6,1,5,-1,5,-3,6,-5,7,-6,9,-7]],"|":[8,[4,25,4,-7]],"}":[14,[5,25,7,24,8,23,9,21,9,19,8,17,7,16,6,14,6,12,8,10,-1,-1,7,24,8,22,8,20,7,18,6,17,5,15,5,13,6,11,10,9,6,7,5,5,5,3,6,1,7,0,8,-2,8,-4,7,-6,-1,-1,8,8,6,6,6,4,7,2,8,1,9,-1,9,-3,8,-5,7,-6,5,-7]],"~":[24,[3,6,3,8,4,11,6,12,8,12,10,11,14,8,16,7,18,7,20,8,21,10,-1,-1,3,8,4,10,6,11,8,11,10,10,14,7,16,6,18,6,20,7,21,10,21,12]]},ai={symbol:function(e,r,i,n,o){if("translucent"===e.renderPass){var a=At.disabled,s=e.colorModeForRenderPass()
i.layout.get("text-variable-anchor")&&function(e,r,i,n,o,a,s){for(var l=r.transform,u="map"===o,c="map"===a,p=0,h=e;p<h.length;p+=1){var f=h[p],d=n.getTile(f),m=d.getBucket(i)
if(m&&m.text&&m.text.segments.get().length){var y=m.textSizeData,v=t.evaluateSizeForZoom(y,l.zoom),_=ue(d,1,r.transform.zoom),g=Kt(f.posMatrix,c,u,r.transform,_),x="none"!==i.layout.get("icon-text-fit")&&m.hasIconData()
if(v){var b=Math.pow(2,l.zoom-d.tileID.overscaledZ)
Hr(m,u,c,s,t.symbolSize,l,g,f.posMatrix,b,v,x)}}}}(n,e,i,r,i.layout.get("text-rotation-alignment"),i.layout.get("text-pitch-alignment"),o),0!==i.paint.get("icon-opacity").constantOr(1)&&Yr(e,r,i,n,!1,i.paint.get("icon-translate"),i.paint.get("icon-translate-anchor"),i.layout.get("icon-rotation-alignment"),i.layout.get("icon-pitch-alignment"),i.layout.get("icon-keep-upright"),a,s),0!==i.paint.get("text-opacity").constantOr(1)&&Yr(e,r,i,n,!0,i.paint.get("text-translate"),i.paint.get("text-translate-anchor"),i.layout.get("text-rotation-alignment"),i.layout.get("text-pitch-alignment"),i.layout.get("text-keep-upright"),a,s),r.map.showCollisionBoxes&&(Xr(e,r,i,n,i.paint.get("text-translate"),i.paint.get("text-translate-anchor"),!0),Xr(e,r,i,n,i.paint.get("icon-translate"),i.paint.get("icon-translate-anchor"),!1))}},circle:function(e,r,i,n){if("translucent"===e.renderPass){var o=i.paint.get("circle-opacity"),a=i.paint.get("circle-stroke-width"),s=i.paint.get("circle-stroke-opacity"),l=void 0!==i.layout.get("circle-sort-key").constantOr(1)
if(0!==o.constantOr(1)||0!==a.constantOr(1)&&0!==s.constantOr(1)){for(var u=e.context,c=u.gl,p=e.depthModeForSublayer(0,Tt.ReadOnly),h=At.disabled,f=e.colorModeForRenderPass(),d=[],m=0;m<n.length;m++){var y=n[m],v=r.getTile(y),_=v.getBucket(i)
if(_){var g=_.programConfigurations.get(i.id),x={programConfiguration:g,program:e.useProgram("circle",g),layoutVertexBuffer:_.layoutVertexBuffer,indexBuffer:_.indexBuffer,uniformValues:br(e,y,v,i)}
if(l)for(var b=0,w=_.segments.get();b<w.length;b+=1){var S=w[b]
d.push({segments:new t.SegmentVector([S]),sortKey:S.sortKey,state:x})}else d.push({segments:_.segments,sortKey:0,state:x})}}l&&d.sort(function(t,e){return t.sortKey-e.sortKey})
for(var E=0,T=d;E<T.length;E+=1){var A=T[E],I=A.state,k=I.programConfiguration,z=I.program,C=I.layoutVertexBuffer,P=I.indexBuffer,M=I.uniformValues,L=A.segments
z.draw(u,c.TRIANGLES,p,h,f,kt.disabled,M,i.id,C,P,L,i.paint,e.transform.zoom,k)}}}},heatmap:function(e,r,i,n){if(0!==i.paint.get("heatmap-opacity"))if("offscreen"===e.renderPass){var o=e.context,a=o.gl,s=e.depthModeForSublayer(0,Tt.ReadOnly),l=At.disabled,u=new It([a.ONE,a.ONE],t.Color.transparent,[!0,!0,!0,!0])
!function(t,e,r){var i=t.gl
t.activeTexture.set(i.TEXTURE1),t.viewport.set([0,0,e.width/4,e.height/4])
var n=r.heatmapFbo
if(n)i.bindTexture(i.TEXTURE_2D,n.colorAttachment.get()),t.bindFramebuffer.set(n.framebuffer)
else{var o=i.createTexture()
i.bindTexture(i.TEXTURE_2D,o),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),n=r.heatmapFbo=t.createFramebuffer(e.width/4,e.height/4),function t(e,r,i,n){var o=e.gl
o.texImage2D(o.TEXTURE_2D,0,o.RGBA,r.width/4,r.height/4,0,o.RGBA,e.extTextureHalfFloat?e.extTextureHalfFloat.HALF_FLOAT_OES:o.UNSIGNED_BYTE,null),n.colorAttachment.set(i),e.extTextureHalfFloat&&o.checkFramebufferStatus(o.FRAMEBUFFER)!==o.FRAMEBUFFER_COMPLETE&&(e.extTextureHalfFloat=null,n.colorAttachment.setDirty(),t(e,r,i,n))}(t,e,o,n)}}(o,e,i),o.clear({color:t.Color.transparent})
for(var c=0;c<n.length;c++){var p=n[c]
if(!r.hasRenderableParent(p)){var h=r.getTile(p),f=h.getBucket(i)
if(f){var d=f.programConfigurations.get(i.id),m=e.useProgram("heatmap",d),y=e.transform.zoom
m.draw(o,a.TRIANGLES,s,l,u,kt.disabled,Ar(p.posMatrix,h,y,i.paint.get("heatmap-intensity")),i.id,f.layoutVertexBuffer,f.indexBuffer,f.segments,i.paint,e.transform.zoom,d)}}}o.viewport.set([0,0,e.width,e.height])}else"translucent"===e.renderPass&&(e.context.setColorMode(e.colorModeForRenderPass()),function(e,r){var i=e.context,n=i.gl,o=r.heatmapFbo
if(o){i.activeTexture.set(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,o.colorAttachment.get()),i.activeTexture.set(n.TEXTURE1)
var a=r.colorRampTexture
a||(a=r.colorRampTexture=new t.Texture(i,r.colorRamp,n.RGBA)),a.bind(n.LINEAR,n.CLAMP_TO_EDGE),e.useProgram("heatmapTexture").draw(i,n.TRIANGLES,Tt.disabled,At.disabled,e.colorModeForRenderPass(),kt.disabled,function(e,r,i,n){var o=t.create()
t.ortho(o,0,e.width,e.height,0,0,1)
var a=e.context.gl
return{u_matrix:o,u_world:[a.drawingBufferWidth,a.drawingBufferHeight],u_image:0,u_color_ramp:1,u_opacity:r.paint.get("heatmap-opacity")}}(e,r),r.id,e.viewportBuffer,e.quadTriangleIndexBuffer,e.viewportSegments,r.paint,e.transform.zoom)}}(e,i))},line:function(e,r,i,n){if("translucent"===e.renderPass){var o=i.paint.get("line-opacity"),a=i.paint.get("line-width")
if(0!==o.constantOr(1)&&0!==a.constantOr(1)){var s=e.depthModeForSublayer(0,Tt.ReadOnly),l=e.colorModeForRenderPass(),u=i.paint.get("line-dasharray"),c=i.paint.get("line-pattern"),p=c.constantOr(1),h=i.paint.get("line-gradient"),f=i.getCrossfadeParameters(),d=u?"lineSDF":p?"linePattern":h?"lineGradient":"line",m=e.context,y=m.gl,v=!0
if(h){m.activeTexture.set(y.TEXTURE0)
var _=i.gradientTexture
if(!i.gradient)return
_||(_=i.gradientTexture=new t.Texture(m,i.gradient,y.RGBA)),_.bind(y.LINEAR,y.CLAMP_TO_EDGE)}for(var g=0,x=n;g<x.length;g+=1){var b=x[g],w=r.getTile(b)
if(!p||w.patternsLoaded()){var S=w.getBucket(i)
if(S){var E=S.programConfigurations.get(i.id),T=e.context.program.get(),A=e.useProgram(d,E),I=v||A.program!==T,k=c.constantOr(null)
if(k&&w.imageAtlas){var z=w.imageAtlas,C=z.patternPositions[k.to.toString()],P=z.patternPositions[k.from.toString()]
C&&P&&E.setConstantPatternPositions(C,P)}var M=u?Lr(e,w,i,u,f):p?Mr(e,w,i,f):h?Pr(e,w,i):Cr(e,w,i)
u&&(I||e.lineAtlas.dirty)?(m.activeTexture.set(y.TEXTURE0),e.lineAtlas.bind(m)):p&&(m.activeTexture.set(y.TEXTURE0),w.imageAtlasTexture.bind(y.LINEAR,y.CLAMP_TO_EDGE),E.updatePatternPaintBuffers(f)),A.draw(m,y.TRIANGLES,s,e.stencilModeForClipping(b),l,kt.disabled,M,i.id,S.layoutVertexBuffer,S.indexBuffer,S.segments,i.paint,e.transform.zoom,E),v=!1}}}}}},fill:function(e,r,i,n){var o=i.paint.get("fill-color"),a=i.paint.get("fill-opacity")
if(0!==a.constantOr(1)){var s=e.colorModeForRenderPass(),l=i.paint.get("fill-pattern"),u=e.opaquePassEnabledForLayer()&&!l.constantOr(1)&&1===o.constantOr(t.Color.transparent).a&&1===a.constantOr(0)?"opaque":"translucent"
if(e.renderPass===u){var c=e.depthModeForSublayer(1,"opaque"===e.renderPass?Tt.ReadWrite:Tt.ReadOnly)
Qr(e,r,i,n,c,s,!1)}if("translucent"===e.renderPass&&i.paint.get("fill-antialias")){var p=e.depthModeForSublayer(i.getPaintProperty("fill-outline-color")?2:0,Tt.ReadOnly)
Qr(e,r,i,n,p,s,!0)}}},"fill-extrusion":function(t,e,r,i){var n=r.paint.get("fill-extrusion-opacity")
if(0!==n&&"translucent"===t.renderPass){var o=new Tt(t.context.gl.LEQUAL,Tt.ReadWrite,t.depthRangeFor3D)
if(1!==n||r.paint.get("fill-extrusion-pattern").constantOr(1))ti(t,e,r,i,o,At.disabled,It.disabled),ti(t,e,r,i,o,t.stencilModeFor3D(),t.colorModeForRenderPass())
else{var a=t.colorModeForRenderPass()
ti(t,e,r,i,o,At.disabled,a)}}},hillshade:function(t,e,r,i){if("offscreen"===t.renderPass||"translucent"===t.renderPass){for(var n=t.context,o=e.getSource().maxzoom,a=t.depthModeForSublayer(0,Tt.ReadOnly),s=At.disabled,l=t.colorModeForRenderPass(),u=0,c=i;u<c.length;u+=1){var p=c[u],h=e.getTile(p)
h.needsHillshadePrepare&&"offscreen"===t.renderPass?ri(t,h,r,o,a,s,l):"translucent"===t.renderPass&&ei(t,h,r,a,s,l)}n.viewport.set([0,0,t.width,t.height])}},raster:function(t,e,r,i){if("translucent"===t.renderPass&&0!==r.paint.get("raster-opacity"))for(var n=t.context,o=n.gl,a=e.getSource(),s=t.useProgram("raster"),l=At.disabled,u=t.colorModeForRenderPass(),c=i.length&&i[0].overscaledZ,p=!t.options.moving,h=0,f=i;h<f.length;h+=1){var d=f[h],m=t.depthModeForSublayer(d.overscaledZ-c,1===r.paint.get("raster-opacity")?Tt.ReadWrite:Tt.ReadOnly,o.LESS),y=e.getTile(d),v=t.transform.calculatePosMatrix(d.toUnwrapped(),p)
y.registerFadeDuration(r.paint.get("raster-fade-duration"))
var _=e.findLoadedParent(d,0),g=ii(y,_,e,r,t.transform),x=void 0,b=void 0,w="nearest"===r.paint.get("raster-resampling")?o.NEAREST:o.LINEAR
n.activeTexture.set(o.TEXTURE0),y.texture.bind(w,o.CLAMP_TO_EDGE,o.LINEAR_MIPMAP_NEAREST),n.activeTexture.set(o.TEXTURE1),_?(_.texture.bind(w,o.CLAMP_TO_EDGE,o.LINEAR_MIPMAP_NEAREST),x=Math.pow(2,_.tileID.overscaledZ-y.tileID.overscaledZ),b=[y.tileID.canonical.x*x%1,y.tileID.canonical.y*x%1]):y.texture.bind(w,o.CLAMP_TO_EDGE,o.LINEAR_MIPMAP_NEAREST)
var S=Rr(v,b||[0,0],x||1,g,r)
a instanceof P?s.draw(n,o.TRIANGLES,m,l,u,kt.disabled,S,r.id,a.boundsBuffer,t.quadTriangleIndexBuffer,a.boundsSegments):y.maskedBoundsBuffer&&y.maskedIndexBuffer&&y.segments?s.draw(n,o.TRIANGLES,m,l,u,kt.disabled,S,r.id,y.maskedBoundsBuffer,y.maskedIndexBuffer,y.segments,r.paint,t.transform.zoom):s.draw(n,o.TRIANGLES,m,l,u,kt.disabled,S,r.id,t.rasterBoundsBuffer,t.quadTriangleIndexBuffer,t.rasterBoundsSegments)}},background:function(t,e,r){var i=r.paint.get("background-color"),n=r.paint.get("background-opacity")
if(0!==n){var o=t.context,a=o.gl,s=t.transform,l=s.tileSize,u=r.paint.get("background-pattern")
if(!t.isPatternMissing(u)){var c=!u&&1===i.a&&1===n&&t.opaquePassEnabledForLayer()?"opaque":"translucent"
if(t.renderPass===c){var p=At.disabled,h=t.depthModeForSublayer(0,"opaque"===c?Tt.ReadWrite:Tt.ReadOnly),f=t.colorModeForRenderPass(),d=t.useProgram(u?"backgroundPattern":"background"),m=s.coveringTiles({tileSize:l})
u&&(o.activeTexture.set(a.TEXTURE0),t.imageManager.bind(t.context))
for(var y=r.getCrossfadeParameters(),v=0,_=m;v<_.length;v+=1){var g=_[v],x=t.transform.calculatePosMatrix(g.toUnwrapped()),b=u?Nr(x,n,t,u,{tileID:g,tileSize:l},y):Vr(x,n,i)
d.draw(o,a.TRIANGLES,h,p,f,kt.disabled,b,r.id,t.tileExtentBuffer,t.quadTriangleIndexBuffer,t.tileExtentSegments)}}}}},debug:function(t,e,r){for(var i=0;i<r.length;i++)ni(t,e,r[i])},custom:function(t,e,r){var i=t.context,n=r.implementation
if("offscreen"===t.renderPass){var o=n.prerender
o&&(t.setCustomLayerDefaults(),i.setColorMode(t.colorModeForRenderPass()),o.call(n,i.gl,t.transform.customLayerMatrix()),i.setDirty(),t.setBaseState())}else if("translucent"===t.renderPass){t.setCustomLayerDefaults(),i.setColorMode(t.colorModeForRenderPass()),i.setStencilMode(At.disabled)
var a="3d"===n.renderingMode?new Tt(t.context.gl.LEQUAL,Tt.ReadWrite,t.depthRangeFor3D):t.depthModeForSublayer(0,Tt.ReadOnly)
i.setDepthMode(a),n.render(i.gl,t.transform.customLayerMatrix()),i.setDirty(),t.setBaseState(),i.bindFramebuffer.set(null)}}},si=function(e,r){this.context=new zt(e),this.transform=r,this._tileTextures={},this.setup(),this.numSublayers=Ct.maxUnderzooming+Ct.maxOverzooming+1,this.depthEpsilon=1/Math.pow(2,16),this.depthRboNeedsClear=!0,this.emptyProgramConfiguration=new t.ProgramConfiguration,this.crossTileSymbolIndex=new Le}
function li(t,e){if(t.y>e.y){var r=t
t=e,e=r}return{x0:t.x,y0:t.y,x1:e.x,y1:e.y,dx:e.x-t.x,dy:e.y-t.y}}function ui(t,e,r,i,n){var o=Math.max(r,Math.floor(e.y0)),a=Math.min(i,Math.ceil(e.y1))
if(t.x0===e.x0&&t.y0===e.y0?t.x0+e.dy/t.dy*t.dx<e.x1:t.x1-e.dy/t.dy*t.dx<e.x0){var s=t
t=e,e=s}for(var l=t.dx/t.dy,u=e.dx/e.dy,c=t.dx>0,p=e.dx<0,h=o;h<a;h++){var f=l*Math.max(0,Math.min(t.dy,h+c-t.y0))+t.x0,d=u*Math.max(0,Math.min(e.dy,h+p-e.y0))+e.x0
n(Math.floor(d),Math.ceil(f),h)}}function ci(t,e,r,i,n,o){var a,s=li(t,e),l=li(e,r),u=li(r,t)
s.dy>l.dy&&(a=s,s=l,l=a),s.dy>u.dy&&(a=s,s=u,u=a),l.dy>u.dy&&(a=l,l=u,u=a),s.dy&&ui(u,s,i,n,o),l.dy&&ui(u,l,i,n,o)}si.prototype.resize=function(e,r){var i=this.context.gl
if(this.width=e*t.browser.devicePixelRatio,this.height=r*t.browser.devicePixelRatio,this.context.viewport.set([0,0,this.width,this.height]),this.style)for(var n=0,o=this.style._order;n<o.length;n+=1){var a=o[n]
this.style._layers[a].resize()}this.depthRbo&&(i.deleteRenderbuffer(this.depthRbo),this.depthRbo=null)},si.prototype.setup=function(){var e=this.context,r=new t.StructArrayLayout2i4
r.emplaceBack(0,0),r.emplaceBack(t.EXTENT,0),r.emplaceBack(0,t.EXTENT),r.emplaceBack(t.EXTENT,t.EXTENT),this.tileExtentBuffer=e.createVertexBuffer(r,Oe.members),this.tileExtentSegments=t.SegmentVector.simpleSegment(0,0,4,2)
var i=new t.StructArrayLayout2i4
i.emplaceBack(0,0),i.emplaceBack(t.EXTENT,0),i.emplaceBack(0,t.EXTENT),i.emplaceBack(t.EXTENT,t.EXTENT),this.debugBuffer=e.createVertexBuffer(i,Oe.members),this.debugSegments=t.SegmentVector.simpleSegment(0,0,4,5)
var n=new t.StructArrayLayout4i8
n.emplaceBack(0,0,0,0),n.emplaceBack(t.EXTENT,0,t.EXTENT,0),n.emplaceBack(0,t.EXTENT,0,t.EXTENT),n.emplaceBack(t.EXTENT,t.EXTENT,t.EXTENT,t.EXTENT),this.rasterBoundsBuffer=e.createVertexBuffer(n,t.rasterBoundsAttributes.members),this.rasterBoundsSegments=t.SegmentVector.simpleSegment(0,0,4,2)
var o=new t.StructArrayLayout2i4
o.emplaceBack(0,0),o.emplaceBack(1,0),o.emplaceBack(0,1),o.emplaceBack(1,1),this.viewportBuffer=e.createVertexBuffer(o,Oe.members),this.viewportSegments=t.SegmentVector.simpleSegment(0,0,4,2)
var a=new t.StructArrayLayout1ui2
a.emplaceBack(0),a.emplaceBack(1),a.emplaceBack(3),a.emplaceBack(2),a.emplaceBack(0),this.tileBorderIndexBuffer=e.createIndexBuffer(a)
var s=new t.StructArrayLayout3ui6
s.emplaceBack(0,1,2),s.emplaceBack(2,1,3),this.quadTriangleIndexBuffer=e.createIndexBuffer(s)
var l=this.context.gl
this.stencilClearMode=new At({func:l.ALWAYS,mask:0},0,255,l.ZERO,l.ZERO,l.ZERO)},si.prototype.clearStencil=function(){var e=this.context,r=e.gl
this.nextStencilID=1,this.currentStencilSource=void 0
var i=t.create()
t.ortho(i,0,this.width,this.height,0,0,1),t.scale(i,i,[r.drawingBufferWidth,r.drawingBufferHeight,0]),this.useProgram("clippingMask").draw(e,r.TRIANGLES,Tt.disabled,this.stencilClearMode,It.disabled,kt.disabled,Tr(i),"$clipping",this.viewportBuffer,this.quadTriangleIndexBuffer,this.viewportSegments)},si.prototype._renderTileClippingMasks=function(t,e){if(this.currentStencilSource!==t.source&&t.isTileClipped()&&e&&e.length){this.currentStencilSource=t.source
var r=this.context,i=r.gl
this.nextStencilID+e.length>256&&this.clearStencil(),r.setColorMode(It.disabled),r.setDepthMode(Tt.disabled)
var n=this.useProgram("clippingMask")
this._tileClippingMaskIDs={}
for(var o=0,a=e;o<a.length;o+=1){var s=a[o],l=this._tileClippingMaskIDs[s.key]=this.nextStencilID++
n.draw(r,i.TRIANGLES,Tt.disabled,new At({func:i.ALWAYS,mask:0},l,255,i.KEEP,i.KEEP,i.REPLACE),It.disabled,kt.disabled,Tr(s.posMatrix),"$clipping",this.tileExtentBuffer,this.quadTriangleIndexBuffer,this.tileExtentSegments)}}},si.prototype.stencilModeFor3D=function(){this.currentStencilSource=void 0,this.nextStencilID+1>256&&this.clearStencil()
var t=this.nextStencilID++,e=this.context.gl
return new At({func:e.NOTEQUAL,mask:255},t,255,e.KEEP,e.KEEP,e.REPLACE)},si.prototype.stencilModeForClipping=function(t){var e=this.context.gl
return new At({func:e.EQUAL,mask:255},this._tileClippingMaskIDs[t.key],0,e.KEEP,e.KEEP,e.REPLACE)},si.prototype.colorModeForRenderPass=function(){var e=this.context.gl
return this._showOverdrawInspector?new It([e.CONSTANT_COLOR,e.ONE],new t.Color(1/8,1/8,1/8,0),[!0,!0,!0,!0]):"opaque"===this.renderPass?It.unblended:It.alphaBlended},si.prototype.depthModeForSublayer=function(t,e,r){if(!this.opaquePassEnabledForLayer())return Tt.disabled
var i=1-((1+this.currentLayer)*this.numSublayers+t)*this.depthEpsilon
return new Tt(r||this.context.gl.LEQUAL,e,[i,i])},si.prototype.opaquePassEnabledForLayer=function(){return this.currentLayer<this.opaquePassCutoff},si.prototype.render=function(e,r){this.style=e,this.options=r,this.lineAtlas=e.lineAtlas,this.imageManager=e.imageManager,this.glyphManager=e.glyphManager,this.symbolFadeChange=e.placement.symbolFadeChange(t.browser.now()),this.imageManager.beginFrame()
var i=this.style._order,n=this.style.sourceCaches
for(var o in n){var a=n[o]
a.used&&a.prepare(this.context)}var s={},l={},u={}
for(var c in n){var p=n[c]
s[c]=p.getVisibleCoordinates(),l[c]=s[c].slice().reverse(),u[c]=p.getVisibleCoordinates(!0).reverse()}for(var h in n){var f=n[h],d=f.getSource()
if("raster"===d.type||"raster-dem"===d.type){for(var m=[],y=0,v=s[h];y<v.length;y+=1){var _=v[y]
m.push(f.getTile(_))}qr(m,this.context)}}this.opaquePassCutoff=1/0
for(var g=0;g<i.length;g++){var x=i[g]
if(this.style._layers[x].is3D()){this.opaquePassCutoff=g
break}}this.renderPass="offscreen",this.depthRboNeedsClear=!0
for(var b=0,w=i;b<w.length;b+=1){var S=w[b],E=this.style._layers[S]
if(E.hasOffscreenPass()&&!E.isHidden(this.transform.zoom)){var T=l[E.source];("custom"===E.type||T.length)&&this.renderLayer(this,n[E.source],E,T)}}for(this.context.bindFramebuffer.set(null),this.context.clear({color:r.showOverdrawInspector?t.Color.black:t.Color.transparent,depth:1}),this.clearStencil(),this._showOverdrawInspector=r.showOverdrawInspector,this.depthRangeFor3D=[0,1-(e._order.length+2)*this.numSublayers*this.depthEpsilon],this.renderPass="opaque",this.currentLayer=i.length-1;this.currentLayer>=0;this.currentLayer--){var A=this.style._layers[i[this.currentLayer]],I=n[A.source],k=s[A.source]
this._renderTileClippingMasks(A,k),this.renderLayer(this,I,A,k)}for(this.renderPass="translucent",this.currentLayer=0;this.currentLayer<i.length;this.currentLayer++){var z=this.style._layers[i[this.currentLayer]],C=n[z.source],P=("symbol"===z.type?u:l)[z.source]
this._renderTileClippingMasks(z,s[z.source]),this.renderLayer(this,C,z,P)}if(this.options.showTileBoundaries)for(var M in n){ai.debug(this,n[M],s[M])
break}this.context.setDefault()},si.prototype.setupOffscreenDepthRenderbuffer=function(){var t=this.context
this.depthRbo||(this.depthRbo=t.createRenderbuffer(t.gl.DEPTH_COMPONENT16,this.width,this.height))},si.prototype.renderLayer=function(t,e,r,i){r.isHidden(this.transform.zoom)||("background"===r.type||"custom"===r.type||i.length)&&(this.id=r.id,ai[r.type](t,e,r,i,this.style.placement.variableOffsets))},si.prototype.translatePosMatrix=function(e,r,i,n,o){if(!i[0]&&!i[1])return e
var a=o?"map"===n?this.transform.angle:0:"viewport"===n?-this.transform.angle:0
if(a){var s=Math.sin(a),l=Math.cos(a)
i=[i[0]*l-i[1]*s,i[0]*s+i[1]*l]}var u=[o?i[0]:ue(r,i[0],this.transform.zoom),o?i[1]:ue(r,i[1],this.transform.zoom),0],c=new Float32Array(16)
return t.translate(c,e,u),c},si.prototype.saveTileTexture=function(t){var e=this._tileTextures[t.size[0]]
e?e.push(t):this._tileTextures[t.size[0]]=[t]},si.prototype.getTileTexture=function(t){var e=this._tileTextures[t]
return e&&e.length>0?e.pop():null},si.prototype.isPatternMissing=function(t){if(!t)return!1
var e=this.imageManager.getPattern(t.from.toString()),r=this.imageManager.getPattern(t.to.toString())
return!e||!r},si.prototype.useProgram=function(t,e){void 0===e&&(e=this.emptyProgramConfiguration),this.cache=this.cache||{}
var r=""+t+(e.cacheKey||"")+(this._showOverdrawInspector?"/overdraw":"")
return this.cache[r]||(this.cache[r]=new fr(this.context,pr[t],e,jr[t],this._showOverdrawInspector)),this.cache[r]},si.prototype.setCustomLayerDefaults=function(){this.context.unbindVAO(),this.context.cullFace.setDefault(),this.context.activeTexture.setDefault(),this.context.pixelStoreUnpack.setDefault(),this.context.pixelStoreUnpackPremultiplyAlpha.setDefault(),this.context.pixelStoreUnpackFlipY.setDefault()},si.prototype.setBaseState=function(){var t=this.context.gl
this.context.cullFace.set(!1),this.context.viewport.set([0,0,this.width,this.height]),this.context.blendEquation.set(t.FUNC_ADD)}
var pi=function(e,r,i){this.tileSize=512,this.maxValidLatitude=85.051129,this._renderWorldCopies=void 0===i||i,this._minZoom=e||0,this._maxZoom=r||22,this.setMaxBounds(),this.width=0,this.height=0,this._center=new t.LngLat(0,0),this.zoom=0,this.angle=0,this._fov=.6435011087932844,this._pitch=0,this._unmodified=!0,this._posMatrixCache={},this._alignedPosMatrixCache={}},hi={minZoom:{configurable:!0},maxZoom:{configurable:!0},renderWorldCopies:{configurable:!0},worldSize:{configurable:!0},centerPoint:{configurable:!0},size:{configurable:!0},bearing:{configurable:!0},pitch:{configurable:!0},fov:{configurable:!0},zoom:{configurable:!0},center:{configurable:!0},unmodified:{configurable:!0},point:{configurable:!0}}
pi.prototype.clone=function(){var t=new pi(this._minZoom,this._maxZoom,this._renderWorldCopies)
return t.tileSize=this.tileSize,t.latRange=this.latRange,t.width=this.width,t.height=this.height,t._center=this._center,t.zoom=this.zoom,t.angle=this.angle,t._fov=this._fov,t._pitch=this._pitch,t._unmodified=this._unmodified,t._calcMatrices(),t},hi.minZoom.get=function(){return this._minZoom},hi.minZoom.set=function(t){this._minZoom!==t&&(this._minZoom=t,this.zoom=Math.max(this.zoom,t))},hi.maxZoom.get=function(){return this._maxZoom},hi.maxZoom.set=function(t){this._maxZoom!==t&&(this._maxZoom=t,this.zoom=Math.min(this.zoom,t))},hi.renderWorldCopies.get=function(){return this._renderWorldCopies},hi.renderWorldCopies.set=function(t){void 0===t?t=!0:null===t&&(t=!1),this._renderWorldCopies=t},hi.worldSize.get=function(){return this.tileSize*this.scale},hi.centerPoint.get=function(){return this.size._div(2)},hi.size.get=function(){return new t.Point(this.width,this.height)},hi.bearing.get=function(){return-this.angle/Math.PI*180},hi.bearing.set=function(e){var r=-t.wrap(e,-180,180)*Math.PI/180
this.angle!==r&&(this._unmodified=!1,this.angle=r,this._calcMatrices(),this.rotationMatrix=t.create$2(),t.rotate(this.rotationMatrix,this.rotationMatrix,this.angle))},hi.pitch.get=function(){return this._pitch/Math.PI*180},hi.pitch.set=function(e){var r=t.clamp(e,0,60)/180*Math.PI
this._pitch!==r&&(this._unmodified=!1,this._pitch=r,this._calcMatrices())},hi.fov.get=function(){return this._fov/Math.PI*180},hi.fov.set=function(t){t=Math.max(.01,Math.min(60,t)),this._fov!==t&&(this._unmodified=!1,this._fov=t/180*Math.PI,this._calcMatrices())},hi.zoom.get=function(){return this._zoom},hi.zoom.set=function(t){var e=Math.min(Math.max(t,this.minZoom),this.maxZoom)
this._zoom!==e&&(this._unmodified=!1,this._zoom=e,this.scale=this.zoomScale(e),this.tileZoom=Math.floor(e),this.zoomFraction=e-this.tileZoom,this._constrain(),this._calcMatrices())},hi.center.get=function(){return this._center},hi.center.set=function(t){t.lat===this._center.lat&&t.lng===this._center.lng||(this._unmodified=!1,this._center=t,this._constrain(),this._calcMatrices())},pi.prototype.coveringZoomLevel=function(t){return(t.roundZoom?Math.round:Math.floor)(this.zoom+this.scaleZoom(this.tileSize/t.tileSize))},pi.prototype.getVisibleUnwrappedCoordinates=function(e){var r=[new t.UnwrappedTileID(0,e)]
if(this._renderWorldCopies)for(var i=this.pointCoordinate(new t.Point(0,0)),n=this.pointCoordinate(new t.Point(this.width,0)),o=this.pointCoordinate(new t.Point(this.width,this.height)),a=this.pointCoordinate(new t.Point(0,this.height)),s=Math.floor(Math.min(i.x,n.x,o.x,a.x)),l=Math.floor(Math.max(i.x,n.x,o.x,a.x)),u=s-1;u<=l+1;u++)0!==u&&r.push(new t.UnwrappedTileID(u,e))
return r},pi.prototype.coveringTiles=function(e){var r=this.coveringZoomLevel(e),i=r
if(void 0!==e.minzoom&&r<e.minzoom)return[]
void 0!==e.maxzoom&&r>e.maxzoom&&(r=e.maxzoom)
var n=t.MercatorCoordinate.fromLngLat(this.center),o=Math.pow(2,r),a=new t.Point(o*n.x-.5,o*n.y-.5)
return function(e,r,i,n){void 0===n&&(n=!0)
var o=1<<e,a={}
function s(r,s,l){var u,c,p,h
if(l>=0&&l<=o)for(u=r;u<s;u++)c=Math.floor(u/o),p=(u%o+o)%o,0!==c&&!0!==n||(h=new t.OverscaledTileID(i,c,e,p,l),a[h.key]=h)}var l=r.map(function(e){return new t.Point(e.x,e.y)._mult(o)})
return ci(l[0],l[1],l[2],0,o,s),ci(l[2],l[3],l[0],0,o,s),Object.keys(a).map(function(t){return a[t]})}(r,[this.pointCoordinate(new t.Point(0,0)),this.pointCoordinate(new t.Point(this.width,0)),this.pointCoordinate(new t.Point(this.width,this.height)),this.pointCoordinate(new t.Point(0,this.height))],e.reparseOverscaled?i:r,this._renderWorldCopies).sort(function(t,e){return a.dist(t.canonical)-a.dist(e.canonical)})},pi.prototype.resize=function(t,e){this.width=t,this.height=e,this.pixelsToGLUnits=[2/t,-2/e],this._constrain(),this._calcMatrices()},hi.unmodified.get=function(){return this._unmodified},pi.prototype.zoomScale=function(t){return Math.pow(2,t)},pi.prototype.scaleZoom=function(t){return Math.log(t)/Math.LN2},pi.prototype.project=function(e){var r=t.clamp(e.lat,-this.maxValidLatitude,this.maxValidLatitude)
return new t.Point(t.mercatorXfromLng(e.lng)*this.worldSize,t.mercatorYfromLat(r)*this.worldSize)},pi.prototype.unproject=function(e){return new t.MercatorCoordinate(e.x/this.worldSize,e.y/this.worldSize).toLngLat()},hi.point.get=function(){return this.project(this.center)},pi.prototype.setLocationAtPoint=function(e,r){var i=this.pointCoordinate(r),n=this.pointCoordinate(this.centerPoint),o=this.locationCoordinate(e),a=new t.MercatorCoordinate(o.x-(i.x-n.x),o.y-(i.y-n.y))
this.center=this.coordinateLocation(a),this._renderWorldCopies&&(this.center=this.center.wrap())},pi.prototype.locationPoint=function(t){return this.coordinatePoint(this.locationCoordinate(t))},pi.prototype.pointLocation=function(t){return this.coordinateLocation(this.pointCoordinate(t))},pi.prototype.locationCoordinate=function(e){return t.MercatorCoordinate.fromLngLat(e)},pi.prototype.coordinateLocation=function(t){return t.toLngLat()},pi.prototype.pointCoordinate=function(e){var r=[e.x,e.y,0,1],i=[e.x,e.y,1,1]
t.transformMat4(r,r,this.pixelMatrixInverse),t.transformMat4(i,i,this.pixelMatrixInverse)
var n=r[3],o=i[3],a=r[0]/n,s=i[0]/o,l=r[1]/n,u=i[1]/o,c=r[2]/n,p=i[2]/o,h=c===p?0:(0-c)/(p-c)
return new t.MercatorCoordinate(t.number(a,s,h)/this.worldSize,t.number(l,u,h)/this.worldSize)},pi.prototype.coordinatePoint=function(e){var r=[e.x*this.worldSize,e.y*this.worldSize,0,1]
return t.transformMat4(r,r,this.pixelMatrix),new t.Point(r[0]/r[3],r[1]/r[3])},pi.prototype.getBounds=function(){return(new t.LngLatBounds).extend(this.pointLocation(new t.Point(0,0))).extend(this.pointLocation(new t.Point(this.width,0))).extend(this.pointLocation(new t.Point(this.width,this.height))).extend(this.pointLocation(new t.Point(0,this.height)))},pi.prototype.getMaxBounds=function(){return this.latRange&&2===this.latRange.length&&this.lngRange&&2===this.lngRange.length?new t.LngLatBounds([this.lngRange[0],this.latRange[0]],[this.lngRange[1],this.latRange[1]]):null},pi.prototype.setMaxBounds=function(t){t?(this.lngRange=[t.getWest(),t.getEast()],this.latRange=[t.getSouth(),t.getNorth()],this._constrain()):(this.lngRange=null,this.latRange=[-this.maxValidLatitude,this.maxValidLatitude])},pi.prototype.calculatePosMatrix=function(e,r){void 0===r&&(r=!1)
var i=e.key,n=r?this._alignedPosMatrixCache:this._posMatrixCache
if(n[i])return n[i]
var o=e.canonical,a=this.worldSize/this.zoomScale(o.z),s=o.x+Math.pow(2,o.z)*e.wrap,l=t.identity(new Float64Array(16))
return t.translate(l,l,[s*a,o.y*a,0]),t.scale(l,l,[a/t.EXTENT,a/t.EXTENT,1]),t.multiply(l,r?this.alignedProjMatrix:this.projMatrix,l),n[i]=new Float32Array(l),n[i]},pi.prototype.customLayerMatrix=function(){return this.mercatorMatrix.slice()},pi.prototype._constrain=function(){if(this.center&&this.width&&this.height&&!this._constraining){this._constraining=!0
var e,r,i,n,o=-90,a=90,s=-180,l=180,u=this.size,c=this._unmodified
if(this.latRange){var p=this.latRange
o=t.mercatorYfromLat(p[1])*this.worldSize,e=(a=t.mercatorYfromLat(p[0])*this.worldSize)-o<u.y?u.y/(a-o):0}if(this.lngRange){var h=this.lngRange
s=t.mercatorXfromLng(h[0])*this.worldSize,r=(l=t.mercatorXfromLng(h[1])*this.worldSize)-s<u.x?u.x/(l-s):0}var f=this.point,d=Math.max(r||0,e||0)
if(d)return this.center=this.unproject(new t.Point(r?(l+s)/2:f.x,e?(a+o)/2:f.y)),this.zoom+=this.scaleZoom(d),this._unmodified=c,void(this._constraining=!1)
if(this.latRange){var m=f.y,y=u.y/2
m-y<o&&(n=o+y),m+y>a&&(n=a-y)}if(this.lngRange){var v=f.x,_=u.x/2
v-_<s&&(i=s+_),v+_>l&&(i=l-_)}void 0===i&&void 0===n||(this.center=this.unproject(new t.Point(void 0!==i?i:f.x,void 0!==n?n:f.y))),this._unmodified=c,this._constraining=!1}},pi.prototype._calcMatrices=function(){if(this.height){this.cameraToCenterDistance=.5/Math.tan(this._fov/2)*this.height
var e=this._fov/2,r=Math.PI/2+this._pitch,i=Math.sin(e)*this.cameraToCenterDistance/Math.sin(Math.PI-r-e),n=this.point,o=n.x,a=n.y,s=1.01*(Math.cos(Math.PI/2-this._pitch)*i+this.cameraToCenterDistance),l=this.height/50,u=new Float64Array(16)
t.perspective(u,this._fov,this.width/this.height,l,s),t.scale(u,u,[1,-1,1]),t.translate(u,u,[0,0,-this.cameraToCenterDistance]),t.rotateX(u,u,this._pitch),t.rotateZ(u,u,this.angle),t.translate(u,u,[-o,-a,0]),this.mercatorMatrix=t.scale([],u,[this.worldSize,this.worldSize,this.worldSize]),t.scale(u,u,[1,1,t.mercatorZfromAltitude(1,this.center.lat)*this.worldSize,1]),this.projMatrix=u
var c=this.width%2/2,p=this.height%2/2,h=Math.cos(this.angle),f=Math.sin(this.angle),d=o-Math.round(o)+h*c+f*p,m=a-Math.round(a)+h*p+f*c,y=new Float64Array(u)
if(t.translate(y,y,[d>.5?d-1:d,m>.5?m-1:m,0]),this.alignedProjMatrix=y,u=t.create(),t.scale(u,u,[this.width/2,-this.height/2,1]),t.translate(u,u,[1,-1,0]),this.labelPlaneMatrix=u,u=t.create(),t.scale(u,u,[1,-1,1]),t.translate(u,u,[-1,-1,0]),t.scale(u,u,[2/this.width,2/this.height,1]),this.glCoordMatrix=u,this.pixelMatrix=t.multiply(new Float64Array(16),this.labelPlaneMatrix,this.projMatrix),!(u=t.invert(new Float64Array(16),this.pixelMatrix)))throw new Error("failed to invert matrix")
this.pixelMatrixInverse=u,this._posMatrixCache={},this._alignedPosMatrixCache={}}},pi.prototype.maxPitchScaleFactor=function(){if(!this.pixelMatrixInverse)return 1
var e=this.pointCoordinate(new t.Point(0,0)),r=[e.x*this.worldSize,e.y*this.worldSize,0,1]
return t.transformMat4(r,r,this.pixelMatrix)[3]/this.cameraToCenterDistance},pi.prototype.getCameraPoint=function(){var e=this._pitch,r=Math.tan(e)*(this.cameraToCenterDistance||1)
return this.centerPoint.add(new t.Point(0,r))},pi.prototype.getCameraQueryGeometry=function(e){var r=this.getCameraPoint()
if(1===e.length)return[e[0],r]
for(var i=r.x,n=r.y,o=r.x,a=r.y,s=0,l=e;s<l.length;s+=1){var u=l[s]
i=Math.min(i,u.x),n=Math.min(n,u.y),o=Math.max(o,u.x),a=Math.max(a,u.y)}return[new t.Point(i,n),new t.Point(o,n),new t.Point(o,a),new t.Point(i,a),new t.Point(i,n)]},Object.defineProperties(pi.prototype,hi)
var fi=function(){var e,r,i,n
t.bindAll(["_onHashChange","_updateHash"],this),this._updateHash=(e=this._updateHashUnthrottled.bind(this),r=!1,i=null,n=function(){i=null,r&&(e(),i=setTimeout(n,300),r=!1)},function(){return r=!0,i||n(),i})}
fi.prototype.addTo=function(e){return this._map=e,t.window.addEventListener("hashchange",this._onHashChange,!1),this._map.on("moveend",this._updateHash),this},fi.prototype.remove=function(){return t.window.removeEventListener("hashchange",this._onHashChange,!1),this._map.off("moveend",this._updateHash),clearTimeout(this._updateHash()),delete this._map,this},fi.prototype.getHashString=function(t){var e=this._map.getCenter(),r=Math.round(100*this._map.getZoom())/100,i=Math.ceil((r*Math.LN2+Math.log(512/360/.5))/Math.LN10),n=Math.pow(10,i),o=Math.round(e.lng*n)/n,a=Math.round(e.lat*n)/n,s=this._map.getBearing(),l=this._map.getPitch(),u=""
return u+=t?"#/"+o+"/"+a+"/"+r:"#"+r+"/"+a+"/"+o,(s||l)&&(u+="/"+Math.round(10*s)/10),l&&(u+="/"+Math.round(l)),u},fi.prototype._onHashChange=function(){var e=t.window.location.hash.replace("#","").split("/")
return e.length>=3&&(this._map.jumpTo({center:[+e[2],+e[1]],zoom:+e[0],bearing:+(e[3]||0),pitch:+(e[4]||0)}),!0)},fi.prototype._updateHashUnthrottled=function(){var e=this.getHashString()
try{t.window.history.replaceState(t.window.history.state,"",e)}catch(t){}}
var di=function(e){function i(i,n,o,a){void 0===a&&(a={})
var s=r.mousePos(n.getCanvasContainer(),o),l=n.unproject(s)
e.call(this,i,t.extend({point:s,lngLat:l,originalEvent:o},a)),this._defaultPrevented=!1,this.target=n}e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i
var n={defaultPrevented:{configurable:!0}}
return i.prototype.preventDefault=function(){this._defaultPrevented=!0},n.defaultPrevented.get=function(){return this._defaultPrevented},Object.defineProperties(i.prototype,n),i}(t.Event),mi=function(e){function i(i,n,o){var a=r.touchPos(n.getCanvasContainer(),o),s=a.map(function(t){return n.unproject(t)}),l=a.reduce(function(t,e,r,i){return t.add(e.div(i.length))},new t.Point(0,0)),u=n.unproject(l)
e.call(this,i,{points:a,point:l,lngLats:s,lngLat:u,originalEvent:o}),this._defaultPrevented=!1}e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i
var n={defaultPrevented:{configurable:!0}}
return i.prototype.preventDefault=function(){this._defaultPrevented=!0},n.defaultPrevented.get=function(){return this._defaultPrevented},Object.defineProperties(i.prototype,n),i}(t.Event),yi=function(t){function e(e,r,i){t.call(this,e,{originalEvent:i}),this._defaultPrevented=!1}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e
var r={defaultPrevented:{configurable:!0}}
return e.prototype.preventDefault=function(){this._defaultPrevented=!0},r.defaultPrevented.get=function(){return this._defaultPrevented},Object.defineProperties(e.prototype,r),e}(t.Event),vi=function(e){this._map=e,this._el=e.getCanvasContainer(),this._delta=0,this._defaultZoomRate=.01,this._wheelZoomRate=1/450,t.bindAll(["_onWheel","_onTimeout","_onScrollFrame","_onScrollFinished"],this)}
vi.prototype.setZoomRate=function(t){this._defaultZoomRate=t},vi.prototype.setWheelZoomRate=function(t){this._wheelZoomRate=t},vi.prototype.isEnabled=function(){return!!this._enabled},vi.prototype.isActive=function(){return!!this._active},vi.prototype.isZooming=function(){return!!this._zooming},vi.prototype.enable=function(t){this.isEnabled()||(this._enabled=!0,this._aroundCenter=t&&"center"===t.around)},vi.prototype.disable=function(){this.isEnabled()&&(this._enabled=!1)},vi.prototype.onWheel=function(e){if(this.isEnabled()){var r=e.deltaMode===t.window.WheelEvent.DOM_DELTA_LINE?40*e.deltaY:e.deltaY,i=t.browser.now(),n=i-(this._lastWheelEventTime||0)
this._lastWheelEventTime=i,0!==r&&r%4.000244140625==0?this._type="wheel":0!==r&&Math.abs(r)<4?this._type="trackpad":n>400?(this._type=null,this._lastValue=r,this._timeout=setTimeout(this._onTimeout,40,e)):this._type||(this._type=Math.abs(n*r)<200?"trackpad":"wheel",this._timeout&&(clearTimeout(this._timeout),this._timeout=null,r+=this._lastValue)),e.shiftKey&&r&&(r/=4),this._type&&(this._lastWheelEvent=e,this._delta-=r,this.isActive()||this._start(e)),e.preventDefault()}},vi.prototype._onTimeout=function(t){this._type="wheel",this._delta-=this._lastValue,this.isActive()||this._start(t)},vi.prototype._start=function(e){if(this._delta){this._frameId&&(this._map._cancelRenderFrame(this._frameId),this._frameId=null),this._active=!0,this.isZooming()||(this._zooming=!0,this._map.fire(new t.Event("movestart",{originalEvent:e})),this._map.fire(new t.Event("zoomstart",{originalEvent:e}))),this._finishTimeout&&clearTimeout(this._finishTimeout)
var i=r.mousePos(this._el,e)
this._around=t.LngLat.convert(this._aroundCenter?this._map.getCenter():this._map.unproject(i)),this._aroundPoint=this._map.transform.locationPoint(this._around),this._frameId||(this._frameId=this._map._requestRenderFrame(this._onScrollFrame))}},vi.prototype._onScrollFrame=function(){var e=this
if(this._frameId=null,this.isActive()){var r=this._map.transform
if(0!==this._delta){var i="wheel"===this._type&&Math.abs(this._delta)>4.000244140625?this._wheelZoomRate:this._defaultZoomRate,n=2/(1+Math.exp(-Math.abs(this._delta*i)))
this._delta<0&&0!==n&&(n=1/n)
var o="number"==typeof this._targetZoom?r.zoomScale(this._targetZoom):r.scale
this._targetZoom=Math.min(r.maxZoom,Math.max(r.minZoom,r.scaleZoom(o*n))),"wheel"===this._type&&(this._startZoom=r.zoom,this._easing=this._smoothOutEasing(200)),this._delta=0}var a="number"==typeof this._targetZoom?this._targetZoom:r.zoom,s=this._startZoom,l=this._easing,u=!1
if("wheel"===this._type&&s&&l){var c=Math.min((t.browser.now()-this._lastWheelEventTime)/200,1),p=l(c)
r.zoom=t.number(s,a,p),c<1?this._frameId||(this._frameId=this._map._requestRenderFrame(this._onScrollFrame)):u=!0}else r.zoom=a,u=!0
r.setLocationAtPoint(this._around,this._aroundPoint),this._map.fire(new t.Event("move",{originalEvent:this._lastWheelEvent})),this._map.fire(new t.Event("zoom",{originalEvent:this._lastWheelEvent})),u&&(this._active=!1,this._finishTimeout=setTimeout(function(){e._zooming=!1,e._map.fire(new t.Event("zoomend",{originalEvent:e._lastWheelEvent})),e._map.fire(new t.Event("moveend",{originalEvent:e._lastWheelEvent})),delete e._targetZoom},200))}},vi.prototype._smoothOutEasing=function(e){var r=t.ease
if(this._prevEase){var i=this._prevEase,n=(t.browser.now()-i.start)/i.duration,o=i.easing(n+.01)-i.easing(n),a=.27/Math.sqrt(o*o+1e-4)*.01,s=Math.sqrt(.0729-a*a)
r=t.bezier(a,s,.25,1)}return this._prevEase={start:t.browser.now(),duration:e,easing:r},r}
var _i=function(e,r){this._map=e,this._el=e.getCanvasContainer(),this._container=e.getContainer(),this._clickTolerance=r.clickTolerance||1,t.bindAll(["_onMouseMove","_onMouseUp","_onKeyDown"],this)}
_i.prototype.isEnabled=function(){return!!this._enabled},_i.prototype.isActive=function(){return!!this._active},_i.prototype.enable=function(){this.isEnabled()||(this._enabled=!0)},_i.prototype.disable=function(){this.isEnabled()&&(this._enabled=!1)},_i.prototype.onMouseDown=function(e){this.isEnabled()&&e.shiftKey&&0===e.button&&(t.window.document.addEventListener("mousemove",this._onMouseMove,!1),t.window.document.addEventListener("keydown",this._onKeyDown,!1),t.window.document.addEventListener("mouseup",this._onMouseUp,!1),r.disableDrag(),this._startPos=this._lastPos=r.mousePos(this._el,e),this._active=!0)},_i.prototype._onMouseMove=function(t){var e=r.mousePos(this._el,t)
if(!(this._lastPos.equals(e)||!this._box&&e.dist(this._startPos)<this._clickTolerance)){var i=this._startPos
this._lastPos=e,this._box||(this._box=r.create("div","mapboxgl-boxzoom",this._container),this._container.classList.add("mapboxgl-crosshair"),this._fireEvent("boxzoomstart",t))
var n=Math.min(i.x,e.x),o=Math.max(i.x,e.x),a=Math.min(i.y,e.y),s=Math.max(i.y,e.y)
r.setTransform(this._box,"translate("+n+"px,"+a+"px)"),this._box.style.width=o-n+"px",this._box.style.height=s-a+"px"}},_i.prototype._onMouseUp=function(e){if(0===e.button){var i=this._startPos,n=r.mousePos(this._el,e)
this._finish(),r.suppressClick(),i.x===n.x&&i.y===n.y?this._fireEvent("boxzoomcancel",e):this._map.fitScreenCoordinates(i,n,this._map.getBearing(),{linear:!0}).fire(new t.Event("boxzoomend",{originalEvent:e}))}},_i.prototype._onKeyDown=function(t){27===t.keyCode&&(this._finish(),this._fireEvent("boxzoomcancel",t))},_i.prototype._finish=function(){this._active=!1,t.window.document.removeEventListener("mousemove",this._onMouseMove,!1),t.window.document.removeEventListener("keydown",this._onKeyDown,!1),t.window.document.removeEventListener("mouseup",this._onMouseUp,!1),this._container.classList.remove("mapboxgl-crosshair"),this._box&&(r.remove(this._box),this._box=null),r.enableDrag(),delete this._startPos,delete this._lastPos},_i.prototype._fireEvent=function(e,r){return this._map.fire(new t.Event(e,{originalEvent:r}))}
var gi=t.bezier(0,0,.25,1),xi=function(e,r){this._map=e,this._el=r.element||e.getCanvasContainer(),this._state="disabled",this._button=r.button||"right",this._bearingSnap=r.bearingSnap||0,this._pitchWithRotate=!1!==r.pitchWithRotate,t.bindAll(["onMouseDown","_onMouseMove","_onMouseUp","_onBlur","_onDragFrame"],this)}
xi.prototype.isEnabled=function(){return"disabled"!==this._state},xi.prototype.isActive=function(){return"active"===this._state},xi.prototype.enable=function(){this.isEnabled()||(this._state="enabled")},xi.prototype.disable=function(){if(this.isEnabled())switch(this._state){case"active":this._state="disabled",this._unbind(),this._deactivate(),this._fireEvent("rotateend"),this._pitchWithRotate&&this._fireEvent("pitchend"),this._fireEvent("moveend")
break
case"pending":this._state="disabled",this._unbind()
break
default:this._state="disabled"}},xi.prototype.onMouseDown=function(e){if("enabled"===this._state){var i="touchstart"===e.type
if(i)this._startTime=Date.now()
else if("right"===this._button){if(this._eventButton=r.mouseButton(e),this._eventButton!==(e.ctrlKey?0:2))return}else{if(e.ctrlKey||0!==r.mouseButton(e))return
this._eventButton=0}r.disableDrag(),i?(t.window.document.addEventListener("touchmove",this._onMouseMove,{capture:!0}),t.window.document.addEventListener("touchend",this._onMouseUp)):(t.window.document.addEventListener("mousemove",this._onMouseMove,{capture:!0}),t.window.document.addEventListener("mouseup",this._onMouseUp)),t.window.addEventListener("blur",this._onBlur),this._state="pending",this._inertia=[[t.browser.now(),this._map.getBearing()]],this._startPos=this._prevPos=this._lastPos=r.mousePos(this._el,e),this._center=this._map.transform.centerPoint,e.preventDefault()}},xi.prototype._onMouseMove=function(t){var e=r.mousePos(this._el,t)
this._lastPos.equals(e)||(this._lastMoveEvent=t,this._lastPos=e,"pending"===this._state&&(this._state="active",this._fireEvent("rotatestart",t),this._fireEvent("movestart",t),this._pitchWithRotate&&this._fireEvent("pitchstart",t)),this._frameId||(this._frameId=this._map._requestRenderFrame(this._onDragFrame)))},xi.prototype._onDragFrame=function(){this._frameId=null
var e=this._lastMoveEvent
if(e){var r=this._map.transform,i=this._prevPos,n=this._lastPos,o=.8*(i.x-n.x),a=-.5*(i.y-n.y),s=r.bearing-o,l=r.pitch-a,u=this._inertia,c=u[u.length-1]
this._drainInertiaBuffer(),u.push([t.browser.now(),this._map._normalizeBearing(s,c[1])]),r.bearing=s,this._pitchWithRotate&&(this._fireEvent("pitch",e),r.pitch=l),this._fireEvent("rotate",e),this._fireEvent("move",e),delete this._lastMoveEvent,this._prevPos=this._lastPos}},xi.prototype._onMouseUp=function(t){if("touchend"===t.type&&this._startPos===this._lastPos&&Date.now()-this._startTime<300&&this._el.click(),r.mouseButton(t)===this._eventButton)switch(this._state){case"active":this._state="enabled",r.suppressClick(),this._unbind(),this._deactivate(),this._inertialRotate(t)
break
case"pending":this._state="enabled",this._unbind()}},xi.prototype._onBlur=function(t){switch(this._state){case"active":this._state="enabled",this._unbind(),this._deactivate(),this._fireEvent("rotateend",t),this._pitchWithRotate&&this._fireEvent("pitchend",t),this._fireEvent("moveend",t)
break
case"pending":this._state="enabled",this._unbind()}},xi.prototype._unbind=function(){t.window.document.removeEventListener("mousemove",this._onMouseMove,{capture:!0}),t.window.document.removeEventListener("mouseup",this._onMouseUp),t.window.document.removeEventListener("touchmove",this._onMouseMove,{capture:!0}),t.window.document.removeEventListener("touchend",this._onMouseUp),t.window.removeEventListener("blur",this._onBlur),r.enableDrag()},xi.prototype._deactivate=function(){this._frameId&&(this._map._cancelRenderFrame(this._frameId),this._frameId=null),delete this._lastMoveEvent,delete this._startPos,delete this._prevPos,delete this._lastPos},xi.prototype._inertialRotate=function(t){var e=this
this._fireEvent("rotateend",t),this._drainInertiaBuffer()
var r=this._map,i=r.getBearing(),n=this._inertia,o=function(){Math.abs(i)<e._bearingSnap?r.resetNorth({noMoveStart:!0},{originalEvent:t}):e._fireEvent("moveend",t),e._pitchWithRotate&&e._fireEvent("pitchend",t)}
if(n.length<2)o()
else{var a=n[0],s=n[n.length-1],l=n[n.length-2],u=r._normalizeBearing(i,l[1]),c=s[1]-a[1],p=c<0?-1:1,h=(s[0]-a[0])/1e3
if(0!==c&&0!==h){var f=Math.abs(c*(.25/h))
f>180&&(f=180)
var d=f/180
u+=p*f*(d/2),Math.abs(r._normalizeBearing(u,0))<this._bearingSnap&&(u=r._normalizeBearing(0,u)),r.rotateTo(u,{duration:1e3*d,easing:gi,noMoveStart:!0},{originalEvent:t})}else o()}},xi.prototype._fireEvent=function(e,r){return this._map.fire(new t.Event(e,r?{originalEvent:r}:{}))},xi.prototype._drainInertiaBuffer=function(){for(var e=this._inertia,r=t.browser.now();e.length>0&&r-e[0][0]>160;)e.shift()}
var bi=t.bezier(0,0,.3,1),wi=function(e,r){this._map=e,this._el=e.getCanvasContainer(),this._state="disabled",this._clickTolerance=r.clickTolerance||1,t.bindAll(["_onMove","_onMouseUp","_onTouchEnd","_onBlur","_onDragFrame"],this)}
wi.prototype.isEnabled=function(){return"disabled"!==this._state},wi.prototype.isActive=function(){return"active"===this._state},wi.prototype.enable=function(){this.isEnabled()||(this._el.classList.add("mapboxgl-touch-drag-pan"),this._state="enabled")},wi.prototype.disable=function(){if(this.isEnabled())switch(this._el.classList.remove("mapboxgl-touch-drag-pan"),this._state){case"active":this._state="disabled",this._unbind(),this._deactivate(),this._fireEvent("dragend"),this._fireEvent("moveend")
break
case"pending":this._state="disabled",this._unbind()
break
default:this._state="disabled"}},wi.prototype.onMouseDown=function(e){"enabled"===this._state&&(e.ctrlKey||0!==r.mouseButton(e)||(r.addEventListener(t.window.document,"mousemove",this._onMove,{capture:!0}),r.addEventListener(t.window.document,"mouseup",this._onMouseUp),this._start(e)))},wi.prototype.onTouchStart=function(e){this.isEnabled()&&(e.touches&&e.touches.length>1&&("pending"===this._state||"active"===this._state)||(r.addEventListener(t.window.document,"touchmove",this._onMove,{capture:!0,passive:!1}),r.addEventListener(t.window.document,"touchend",this._onTouchEnd),this._start(e)))},wi.prototype._start=function(e){t.window.addEventListener("blur",this._onBlur),this._state="pending",this._startPos=this._mouseDownPos=this._prevPos=this._lastPos=r.mousePos(this._el,e),this._startTouch=this._lastTouch=t.window.TouchEvent&&e instanceof t.window.TouchEvent?r.touchPos(this._el,e):null,this._inertia=[[t.browser.now(),this._startPos]]},wi.prototype._touchesMatch=function(t,e){return!(!t||!e||t.length!==e.length)&&t.every(function(t,r){return e[r]===t})},wi.prototype._onMove=function(e){e.preventDefault()
var i=t.window.TouchEvent&&e instanceof t.window.TouchEvent?r.touchPos(this._el,e):null,n=r.mousePos(this._el,e);(i?this._touchesMatch(this._lastTouch,i):this._lastPos.equals(n))||"pending"===this._state&&n.dist(this._mouseDownPos)<this._clickTolerance||(this._lastMoveEvent=e,this._lastPos=n,this._lastTouch=i,this._drainInertiaBuffer(),this._inertia.push([t.browser.now(),this._lastPos]),"pending"===this._state&&(this._state="active",this._shouldStart=!0),this._frameId||(this._frameId=this._map._requestRenderFrame(this._onDragFrame)))},wi.prototype._onDragFrame=function(){this._frameId=null
var t=this._lastMoveEvent
if(t)if(this._map.touchZoomRotate.isActive())this._abort(t)
else if(this._shouldStart&&(this._fireEvent("dragstart",t),this._fireEvent("movestart",t),this._shouldStart=!1),this.isActive()){var e=this._map.transform
e.setLocationAtPoint(e.pointLocation(this._prevPos),this._lastPos),this._fireEvent("drag",t),this._fireEvent("move",t),this._prevPos=this._lastPos,delete this._lastMoveEvent}},wi.prototype._onMouseUp=function(t){if(0===r.mouseButton(t))switch(this._state){case"active":this._state="enabled",r.suppressClick(),this._unbind(),this._deactivate(),this._inertialPan(t)
break
case"pending":this._state="enabled",this._unbind()}},wi.prototype._onTouchEnd=function(t){if(t.touches&&0!==t.touches.length)switch(this._state){case"pending":case"active":break
case"enabled":this.onTouchStart(t)}else switch(this._state){case"active":this._state="enabled",this._unbind(),this._deactivate(),this._inertialPan(t)
break
case"pending":this._state="enabled",this._unbind()
break
case"enabled":this._unbind()}},wi.prototype._abort=function(e){switch(this._state){case"active":this._state="enabled",this._shouldStart||(this._fireEvent("dragend",e),this._fireEvent("moveend",e)),this._unbind(),this._deactivate(),t.window.TouchEvent&&e instanceof t.window.TouchEvent&&e.touches.length>1&&r.addEventListener(t.window.document,"touchend",this._onTouchEnd)
break
case"pending":this._state="enabled",this._unbind()
break
case"enabled":this._unbind()}},wi.prototype._onBlur=function(t){this._abort(t)},wi.prototype._unbind=function(){r.removeEventListener(t.window.document,"touchmove",this._onMove,{capture:!0,passive:!1}),r.removeEventListener(t.window.document,"touchend",this._onTouchEnd),r.removeEventListener(t.window.document,"mousemove",this._onMove,{capture:!0}),r.removeEventListener(t.window.document,"mouseup",this._onMouseUp),r.removeEventListener(t.window,"blur",this._onBlur)},wi.prototype._deactivate=function(){this._frameId&&(this._map._cancelRenderFrame(this._frameId),this._frameId=null),delete this._lastMoveEvent,delete this._startPos,delete this._prevPos,delete this._mouseDownPos,delete this._lastPos,delete this._startTouch,delete this._lastTouch,delete this._shouldStart},wi.prototype._inertialPan=function(t){this._fireEvent("dragend",t),this._drainInertiaBuffer()
var e=this._inertia
if(e.length<2)this._fireEvent("moveend",t)
else{var r=e[e.length-1],i=e[0],n=r[1].sub(i[1]),o=(r[0]-i[0])/1e3
if(0===o||r[1].equals(i[1]))this._fireEvent("moveend",t)
else{var a=n.mult(.3/o),s=a.mag()
s>1400&&(s=1400,a._unit()._mult(s))
var l=s/750,u=a.mult(-l/2)
this._map.panBy(u,{duration:1e3*l,easing:bi,noMoveStart:!0},{originalEvent:t})}}},wi.prototype._fireEvent=function(e,r){return this._map.fire(new t.Event(e,r?{originalEvent:r}:{}))},wi.prototype._drainInertiaBuffer=function(){for(var e=this._inertia,r=t.browser.now();e.length>0&&r-e[0][0]>160;)e.shift()}
var Si=function(e){this._map=e,this._el=e.getCanvasContainer(),t.bindAll(["_onKeyDown"],this)}
function Ei(t){return t*(2-t)}Si.prototype.isEnabled=function(){return!!this._enabled},Si.prototype.enable=function(){this.isEnabled()||(this._el.addEventListener("keydown",this._onKeyDown,!1),this._enabled=!0)},Si.prototype.disable=function(){this.isEnabled()&&(this._el.removeEventListener("keydown",this._onKeyDown),this._enabled=!1)},Si.prototype._onKeyDown=function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e=0,r=0,i=0,n=0,o=0
switch(t.keyCode){case 61:case 107:case 171:case 187:e=1
break
case 189:case 109:case 173:e=-1
break
case 37:t.shiftKey?r=-1:(t.preventDefault(),n=-1)
break
case 39:t.shiftKey?r=1:(t.preventDefault(),n=1)
break
case 38:t.shiftKey?i=1:(t.preventDefault(),o=-1)
break
case 40:t.shiftKey?i=-1:(o=1,t.preventDefault())
break
default:return}var a=this._map,s=a.getZoom(),l={duration:300,delayEndEvents:500,easing:Ei,zoom:e?Math.round(s)+e*(t.shiftKey?2:1):s,bearing:a.getBearing()+15*r,pitch:a.getPitch()+10*i,offset:[100*-n,100*-o],center:a.getCenter()}
a.easeTo(l,{originalEvent:t})}}
var Ti=function(e){this._map=e,t.bindAll(["_onDblClick","_onZoomEnd"],this)}
Ti.prototype.isEnabled=function(){return!!this._enabled},Ti.prototype.isActive=function(){return!!this._active},Ti.prototype.enable=function(){this.isEnabled()||(this._enabled=!0)},Ti.prototype.disable=function(){this.isEnabled()&&(this._enabled=!1)},Ti.prototype.onTouchStart=function(t){var e=this
if(this.isEnabled()&&!(t.points.length>1))if(this._tapped){var r=t.points[0],i=this._tappedPoint
if(i&&i.dist(r)<=30){t.originalEvent.preventDefault()
var n=function(){e._tapped&&e._zoom(t),e._map.off("touchcancel",o),e._resetTapped()},o=function(){e._map.off("touchend",n),e._resetTapped()}
this._map.once("touchend",n),this._map.once("touchcancel",o)}else this._resetTapped()}else this._tappedPoint=t.points[0],this._tapped=setTimeout(function(){e._tapped=null,e._tappedPoint=null},300)},Ti.prototype._resetTapped=function(){clearTimeout(this._tapped),this._tapped=null,this._tappedPoint=null},Ti.prototype.onDblClick=function(t){this.isEnabled()&&(t.originalEvent.preventDefault(),this._zoom(t))},Ti.prototype._zoom=function(t){this._active=!0,this._map.on("zoomend",this._onZoomEnd),this._map.zoomTo(this._map.getZoom()+(t.originalEvent.shiftKey?-1:1),{around:t.lngLat},t)},Ti.prototype._onZoomEnd=function(){this._active=!1,this._map.off("zoomend",this._onZoomEnd)}
var Ai=t.bezier(0,0,.15,1),Ii=function(e){this._map=e,this._el=e.getCanvasContainer(),t.bindAll(["_onMove","_onEnd","_onTouchFrame"],this)}
Ii.prototype.isEnabled=function(){return!!this._enabled},Ii.prototype.enable=function(t){this.isEnabled()||(this._el.classList.add("mapboxgl-touch-zoom-rotate"),this._enabled=!0,this._aroundCenter=!!t&&"center"===t.around)},Ii.prototype.disable=function(){this.isEnabled()&&(this._el.classList.remove("mapboxgl-touch-zoom-rotate"),this._enabled=!1)},Ii.prototype.disableRotation=function(){this._rotationDisabled=!0},Ii.prototype.enableRotation=function(){this._rotationDisabled=!1},Ii.prototype.isActive=function(){return this.isEnabled()&&!!this._gestureIntent},Ii.prototype.onStart=function(e){if(this.isEnabled()&&2===e.touches.length){var i=r.mousePos(this._el,e.touches[0]),n=r.mousePos(this._el,e.touches[1]),o=i.add(n).div(2)
this._startVec=i.sub(n),this._startAround=this._map.transform.pointLocation(o),this._gestureIntent=void 0,this._inertia=[],r.addEventListener(t.window.document,"touchmove",this._onMove,{passive:!1}),r.addEventListener(t.window.document,"touchend",this._onEnd)}},Ii.prototype._getTouchEventData=function(t){var e=r.mousePos(this._el,t.touches[0]),i=r.mousePos(this._el,t.touches[1]),n=e.sub(i)
return{vec:n,center:e.add(i).div(2),scale:n.mag()/this._startVec.mag(),bearing:this._rotationDisabled?0:180*n.angleWith(this._startVec)/Math.PI}},Ii.prototype._onMove=function(e){if(2===e.touches.length){var r=this._getTouchEventData(e),i=r.vec,n=r.scale,o=r.bearing
if(!this._gestureIntent){var a=this._rotationDisabled&&1!==n||Math.abs(1-n)>.15
Math.abs(o)>10?this._gestureIntent="rotate":a&&(this._gestureIntent="zoom"),this._gestureIntent&&(this._map.fire(new t.Event(this._gestureIntent+"start",{originalEvent:e})),this._map.fire(new t.Event("movestart",{originalEvent:e})),this._startVec=i)}this._lastTouchEvent=e,this._frameId||(this._frameId=this._map._requestRenderFrame(this._onTouchFrame)),e.preventDefault()}},Ii.prototype._onTouchFrame=function(){this._frameId=null
var e=this._gestureIntent
if(e){var r=this._map.transform
this._startScale||(this._startScale=r.scale,this._startBearing=r.bearing)
var i=this._getTouchEventData(this._lastTouchEvent),n=i.center,o=i.bearing,a=i.scale,s=r.pointLocation(n),l=r.locationPoint(s)
"rotate"===e&&(r.bearing=this._startBearing+o),r.zoom=r.scaleZoom(this._startScale*a),r.setLocationAtPoint(this._startAround,l),this._map.fire(new t.Event(e,{originalEvent:this._lastTouchEvent})),this._map.fire(new t.Event("move",{originalEvent:this._lastTouchEvent})),this._drainInertiaBuffer(),this._inertia.push([t.browser.now(),a,n])}},Ii.prototype._onEnd=function(e){r.removeEventListener(t.window.document,"touchmove",this._onMove,{passive:!1}),r.removeEventListener(t.window.document,"touchend",this._onEnd)
var i=this._gestureIntent,n=this._startScale
if(this._frameId&&(this._map._cancelRenderFrame(this._frameId),this._frameId=null),delete this._gestureIntent,delete this._startScale,delete this._startBearing,delete this._lastTouchEvent,i){this._map.fire(new t.Event(i+"end",{originalEvent:e})),this._drainInertiaBuffer()
var o=this._inertia,a=this._map
if(o.length<2)a.snapToNorth({},{originalEvent:e})
else{var s=o[o.length-1],l=o[0],u=a.transform.scaleZoom(n*s[1]),c=a.transform.scaleZoom(n*l[1]),p=u-c,h=(s[0]-l[0])/1e3,f=s[2]
if(0!==h&&u!==c){var d=.15*p/h
Math.abs(d)>2.5&&(d=d>0?2.5:-2.5)
var m=1e3*Math.abs(d/(12*.15)),y=u+d*m/2e3
y<0&&(y=0),a.easeTo({zoom:y,duration:m,easing:Ai,around:this._aroundCenter?a.getCenter():a.unproject(f),noMoveStart:!0},{originalEvent:e})}else a.snapToNorth({},{originalEvent:e})}}},Ii.prototype._drainInertiaBuffer=function(){for(var e=this._inertia,r=t.browser.now();e.length>2&&r-e[0][0]>160;)e.shift()}
var ki={scrollZoom:vi,boxZoom:_i,dragRotate:xi,dragPan:wi,keyboard:Si,doubleClickZoom:Ti,touchZoomRotate:Ii},zi=function(e){function r(r,i){e.call(this),this._moving=!1,this._zooming=!1,this.transform=r,this._bearingSnap=i.bearingSnap,t.bindAll(["_renderFrameCallback"],this)}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r.prototype.getCenter=function(){return new t.LngLat(this.transform.center.lng,this.transform.center.lat)},r.prototype.setCenter=function(t,e){return this.jumpTo({center:t},e)},r.prototype.panBy=function(e,r,i){return e=t.Point.convert(e).mult(-1),this.panTo(this.transform.center,t.extend({offset:e},r),i)},r.prototype.panTo=function(e,r,i){return this.easeTo(t.extend({center:e},r),i)},r.prototype.getZoom=function(){return this.transform.zoom},r.prototype.setZoom=function(t,e){return this.jumpTo({zoom:t},e),this},r.prototype.zoomTo=function(e,r,i){return this.easeTo(t.extend({zoom:e},r),i)},r.prototype.zoomIn=function(t,e){return this.zoomTo(this.getZoom()+1,t,e),this},r.prototype.zoomOut=function(t,e){return this.zoomTo(this.getZoom()-1,t,e),this},r.prototype.getBearing=function(){return this.transform.bearing},r.prototype.setBearing=function(t,e){return this.jumpTo({bearing:t},e),this},r.prototype.rotateTo=function(e,r,i){return this.easeTo(t.extend({bearing:e},r),i)},r.prototype.resetNorth=function(e,r){return this.rotateTo(0,t.extend({duration:1e3},e),r),this},r.prototype.resetNorthPitch=function(e,r){return this.easeTo(t.extend({bearing:0,pitch:0,duration:1e3},e),r),this},r.prototype.snapToNorth=function(t,e){return Math.abs(this.getBearing())<this._bearingSnap?this.resetNorth(t,e):this},r.prototype.getPitch=function(){return this.transform.pitch},r.prototype.setPitch=function(t,e){return this.jumpTo({pitch:t},e),this},r.prototype.cameraForBounds=function(e,r){return e=t.LngLatBounds.convert(e),this._cameraForBoxAndBearing(e.getNorthWest(),e.getSouthEast(),0,r)},r.prototype._cameraForBoxAndBearing=function(e,r,i,n){if("number"==typeof(n=t.extend({padding:{top:0,bottom:0,right:0,left:0},offset:[0,0],maxZoom:this.transform.maxZoom},n)).padding){var o=n.padding
n.padding={top:o,bottom:o,right:o,left:o}}if(t.deepEqual(Object.keys(n.padding).sort(function(t,e){return t<e?-1:t>e?1:0}),["bottom","left","right","top"])){var a=this.transform,s=a.project(t.LngLat.convert(e)),l=a.project(t.LngLat.convert(r)),u=s.rotate(-i*Math.PI/180),c=l.rotate(-i*Math.PI/180),p=new t.Point(Math.max(u.x,c.x),Math.max(u.y,c.y)),h=new t.Point(Math.min(u.x,c.x),Math.min(u.y,c.y)),f=p.sub(h),d=(a.width-n.padding.left-n.padding.right)/f.x,m=(a.height-n.padding.top-n.padding.bottom)/f.y
if(!(m<0||d<0)){var y=Math.min(a.scaleZoom(a.scale*Math.min(d,m)),n.maxZoom),v=t.Point.convert(n.offset),_=(n.padding.left-n.padding.right)/2,g=(n.padding.top-n.padding.bottom)/2,x=new t.Point(v.x+_,v.y+g).mult(a.scale/a.zoomScale(y))
return{center:a.unproject(s.add(l).div(2).sub(x)),zoom:y,bearing:i}}t.warnOnce("Map cannot fit within canvas with the given bounds, padding, and/or offset.")}else t.warnOnce("options.padding must be a positive number, or an Object with keys 'bottom', 'left', 'right', 'top'")},r.prototype.fitBounds=function(t,e,r){return this._fitInternal(this.cameraForBounds(t,e),e,r)},r.prototype.fitScreenCoordinates=function(e,r,i,n,o){return this._fitInternal(this._cameraForBoxAndBearing(this.transform.pointLocation(t.Point.convert(e)),this.transform.pointLocation(t.Point.convert(r)),i,n),n,o)},r.prototype._fitInternal=function(e,r,i){return e?(r=t.extend(e,r)).linear?this.easeTo(r,i):this.flyTo(r,i):this},r.prototype.jumpTo=function(e,r){this.stop()
var i=this.transform,n=!1,o=!1,a=!1
return"zoom"in e&&i.zoom!==+e.zoom&&(n=!0,i.zoom=+e.zoom),void 0!==e.center&&(i.center=t.LngLat.convert(e.center)),"bearing"in e&&i.bearing!==+e.bearing&&(o=!0,i.bearing=+e.bearing),"pitch"in e&&i.pitch!==+e.pitch&&(a=!0,i.pitch=+e.pitch),this.fire(new t.Event("movestart",r)).fire(new t.Event("move",r)),n&&this.fire(new t.Event("zoomstart",r)).fire(new t.Event("zoom",r)).fire(new t.Event("zoomend",r)),o&&this.fire(new t.Event("rotatestart",r)).fire(new t.Event("rotate",r)).fire(new t.Event("rotateend",r)),a&&this.fire(new t.Event("pitchstart",r)).fire(new t.Event("pitch",r)).fire(new t.Event("pitchend",r)),this.fire(new t.Event("moveend",r))},r.prototype.easeTo=function(e,r){var i=this
this.stop(),(!1===(e=t.extend({offset:[0,0],duration:500,easing:t.ease},e)).animate||t.browser.prefersReducedMotion)&&(e.duration=0)
var n=this.transform,o=this.getZoom(),a=this.getBearing(),s=this.getPitch(),l="zoom"in e?+e.zoom:o,u="bearing"in e?this._normalizeBearing(e.bearing,a):a,c="pitch"in e?+e.pitch:s,p=n.centerPoint.add(t.Point.convert(e.offset)),h=n.pointLocation(p),f=t.LngLat.convert(e.center||h)
this._normalizeCenter(f)
var d,m,y=n.project(h),v=n.project(f).sub(y),_=n.zoomScale(l-o)
return e.around&&(d=t.LngLat.convert(e.around),m=n.locationPoint(d)),this._zooming=l!==o,this._rotating=a!==u,this._pitching=c!==s,this._prepareEase(r,e.noMoveStart),clearTimeout(this._easeEndTimeoutID),this._ease(function(e){if(i._zooming&&(n.zoom=t.number(o,l,e)),i._rotating&&(n.bearing=t.number(a,u,e)),i._pitching&&(n.pitch=t.number(s,c,e)),d)n.setLocationAtPoint(d,m)
else{var h=n.zoomScale(n.zoom-o),f=l>o?Math.min(2,_):Math.max(.5,_),g=Math.pow(f,1-e),x=n.unproject(y.add(v.mult(e*g)).mult(h))
n.setLocationAtPoint(n.renderWorldCopies?x.wrap():x,p)}i._fireMoveEvents(r)},function(){e.delayEndEvents?i._easeEndTimeoutID=setTimeout(function(){return i._afterEase(r)},e.delayEndEvents):i._afterEase(r)},e),this},r.prototype._prepareEase=function(e,r){this._moving=!0,r||this.fire(new t.Event("movestart",e)),this._zooming&&this.fire(new t.Event("zoomstart",e)),this._rotating&&this.fire(new t.Event("rotatestart",e)),this._pitching&&this.fire(new t.Event("pitchstart",e))},r.prototype._fireMoveEvents=function(e){this.fire(new t.Event("move",e)),this._zooming&&this.fire(new t.Event("zoom",e)),this._rotating&&this.fire(new t.Event("rotate",e)),this._pitching&&this.fire(new t.Event("pitch",e))},r.prototype._afterEase=function(e){var r=this._zooming,i=this._rotating,n=this._pitching
this._moving=!1,this._zooming=!1,this._rotating=!1,this._pitching=!1,r&&this.fire(new t.Event("zoomend",e)),i&&this.fire(new t.Event("rotateend",e)),n&&this.fire(new t.Event("pitchend",e)),this.fire(new t.Event("moveend",e))},r.prototype.flyTo=function(e,r){var i=this
if(t.browser.prefersReducedMotion){var n=t.pick(e,["center","zoom","bearing","pitch","around"])
return this.jumpTo(n,r)}this.stop(),e=t.extend({offset:[0,0],speed:1.2,curve:1.42,easing:t.ease},e)
var o=this.transform,a=this.getZoom(),s=this.getBearing(),l=this.getPitch(),u="zoom"in e?t.clamp(+e.zoom,o.minZoom,o.maxZoom):a,c="bearing"in e?this._normalizeBearing(e.bearing,s):s,p="pitch"in e?+e.pitch:l,h=o.zoomScale(u-a),f=o.centerPoint.add(t.Point.convert(e.offset)),d=o.pointLocation(f),m=t.LngLat.convert(e.center||d)
this._normalizeCenter(m)
var y=o.project(d),v=o.project(m).sub(y),_=e.curve,g=Math.max(o.width,o.height),x=g/h,b=v.mag()
if("minZoom"in e){var w=t.clamp(Math.min(e.minZoom,a,u),o.minZoom,o.maxZoom),S=g/o.zoomScale(w-a)
_=Math.sqrt(S/b*2)}var E=_*_
function T(t){var e=(x*x-g*g+(t?-1:1)*E*E*b*b)/(2*(t?x:g)*E*b)
return Math.log(Math.sqrt(e*e+1)-e)}function A(t){return(Math.exp(t)-Math.exp(-t))/2}function I(t){return(Math.exp(t)+Math.exp(-t))/2}var k=T(0),z=function(t){return I(k)/I(k+_*t)},C=function(t){return g*((I(k)*(A(e=k+_*t)/I(e))-A(k))/E)/b
var e},P=(T(1)-k)/_
if(Math.abs(b)<1e-6||!isFinite(P)){if(Math.abs(g-x)<1e-6)return this.easeTo(e,r)
var M=x<g?-1:1
P=Math.abs(Math.log(x/g))/_,C=function(){return 0},z=function(t){return Math.exp(M*_*t)}}if("duration"in e)e.duration=+e.duration
else{var L="screenSpeed"in e?+e.screenSpeed/_:+e.speed
e.duration=1e3*P/L}return e.maxDuration&&e.duration>e.maxDuration&&(e.duration=0),this._zooming=!0,this._rotating=s!==c,this._pitching=p!==l,this._prepareEase(r,!1),this._ease(function(e){var n=e*P,h=1/z(n)
o.zoom=1===e?u:a+o.scaleZoom(h),i._rotating&&(o.bearing=t.number(s,c,e)),i._pitching&&(o.pitch=t.number(l,p,e))
var d=1===e?m:o.unproject(y.add(v.mult(C(n))).mult(h))
o.setLocationAtPoint(o.renderWorldCopies?d.wrap():d,f),i._fireMoveEvents(r)},function(){return i._afterEase(r)},e),this},r.prototype.isEasing=function(){return!!this._easeFrameId},r.prototype.stop=function(){if(this._easeFrameId&&(this._cancelRenderFrame(this._easeFrameId),delete this._easeFrameId,delete this._onEaseFrame),this._onEaseEnd){var t=this._onEaseEnd
delete this._onEaseEnd,t.call(this)}return this},r.prototype._ease=function(e,r,i){!1===i.animate||0===i.duration?(e(1),r()):(this._easeStart=t.browser.now(),this._easeOptions=i,this._onEaseFrame=e,this._onEaseEnd=r,this._easeFrameId=this._requestRenderFrame(this._renderFrameCallback))},r.prototype._renderFrameCallback=function(){var e=Math.min((t.browser.now()-this._easeStart)/this._easeOptions.duration,1)
this._onEaseFrame(this._easeOptions.easing(e)),e<1?this._easeFrameId=this._requestRenderFrame(this._renderFrameCallback):this.stop()},r.prototype._normalizeBearing=function(e,r){e=t.wrap(e,-180,180)
var i=Math.abs(e-r)
return Math.abs(e-360-r)<i&&(e-=360),Math.abs(e+360-r)<i&&(e+=360),e},r.prototype._normalizeCenter=function(t){var e=this.transform
if(e.renderWorldCopies&&!e.lngRange){var r=t.lng-e.center.lng
t.lng+=r>180?-360:r<-180?360:0}},r}(t.Evented),Ci=function(e){void 0===e&&(e={}),this.options=e,t.bindAll(["_updateEditLink","_updateData","_updateCompact"],this)}
Ci.prototype.getDefaultPosition=function(){return"bottom-right"},Ci.prototype.onAdd=function(t){var e=this.options&&this.options.compact
return this._map=t,this._container=r.create("div","mapboxgl-ctrl mapboxgl-ctrl-attrib"),this._innerContainer=r.create("div","mapboxgl-ctrl-attrib-inner",this._container),e&&this._container.classList.add("mapboxgl-compact"),this._updateAttributions(),this._updateEditLink(),this._map.on("styledata",this._updateData),this._map.on("sourcedata",this._updateData),this._map.on("moveend",this._updateEditLink),void 0===e&&(this._map.on("resize",this._updateCompact),this._updateCompact()),this._container},Ci.prototype.onRemove=function(){r.remove(this._container),this._map.off("styledata",this._updateData),this._map.off("sourcedata",this._updateData),this._map.off("moveend",this._updateEditLink),this._map.off("resize",this._updateCompact),this._map=void 0},Ci.prototype._updateEditLink=function(){var e=this._editLink
e||(e=this._editLink=this._container.querySelector(".mapbox-improve-map"))
var r=[{key:"owner",value:this.styleOwner},{key:"id",value:this.styleId},{key:"access_token",value:this._map._requestManager._customAccessToken||t.config.ACCESS_TOKEN}]
if(e){var i=r.reduce(function(t,e,i){return e.value&&(t+=e.key+"="+e.value+(i<r.length-1?"&":"")),t},"?")
e.href=t.config.FEEDBACK_URL+"/"+i+(this._map._hash?this._map._hash.getHashString(!0):""),e.rel="noopener nofollow"}},Ci.prototype._updateData=function(t){!t||"metadata"!==t.sourceDataType&&"style"!==t.dataType||(this._updateAttributions(),this._updateEditLink())},Ci.prototype._updateAttributions=function(){if(this._map.style){var t=[]
if(this.options.customAttribution&&(Array.isArray(this.options.customAttribution)?t=t.concat(this.options.customAttribution.map(function(t){return"string"!=typeof t?"":t})):"string"==typeof this.options.customAttribution&&t.push(this.options.customAttribution)),this._map.style.stylesheet){var e=this._map.style.stylesheet
this.styleOwner=e.owner,this.styleId=e.id}var r=this._map.style.sourceCaches
for(var i in r){var n=r[i]
if(n.used){var o=n.getSource()
o.attribution&&t.indexOf(o.attribution)<0&&t.push(o.attribution)}}t.sort(function(t,e){return t.length-e.length})
var a=(t=t.filter(function(e,r){for(var i=r+1;i<t.length;i++)if(t[i].indexOf(e)>=0)return!1
return!0})).join(" | ")
a!==this._attribHTML&&(this._attribHTML=a,t.length?(this._innerContainer.innerHTML=a,this._container.classList.remove("mapboxgl-attrib-empty")):this._container.classList.add("mapboxgl-attrib-empty"),this._editLink=null)}},Ci.prototype._updateCompact=function(){this._map.getCanvasContainer().offsetWidth<=640?this._container.classList.add("mapboxgl-compact"):this._container.classList.remove("mapboxgl-compact")}
var Pi=function(){t.bindAll(["_updateLogo"],this),t.bindAll(["_updateCompact"],this)}
Pi.prototype.onAdd=function(t){this._map=t,this._container=r.create("div","mapboxgl-ctrl")
var e=r.create("a","mapboxgl-ctrl-logo")
return e.target="_blank",e.rel="noopener nofollow",e.href="https://www.mapbox.com/",e.setAttribute("aria-label","Mapbox logo"),e.setAttribute("rel","noopener nofollow"),this._container.appendChild(e),this._container.style.display="none",this._map.on("sourcedata",this._updateLogo),this._updateLogo(),this._map.on("resize",this._updateCompact),this._updateCompact(),this._container},Pi.prototype.onRemove=function(){r.remove(this._container),this._map.off("sourcedata",this._updateLogo),this._map.off("resize",this._updateCompact)},Pi.prototype.getDefaultPosition=function(){return"bottom-left"},Pi.prototype._updateLogo=function(t){t&&"metadata"!==t.sourceDataType||(this._container.style.display=this._logoRequired()?"block":"none")},Pi.prototype._logoRequired=function(){if(this._map.style){var t=this._map.style.sourceCaches
for(var e in t)if(t[e].getSource().mapbox_logo)return!0
return!1}},Pi.prototype._updateCompact=function(){var t=this._container.children
if(t.length){var e=t[0]
this._map.getCanvasContainer().offsetWidth<250?e.classList.add("mapboxgl-compact"):e.classList.remove("mapboxgl-compact")}}
var Mi=function(){this._queue=[],this._id=0,this._cleared=!1,this._currentlyRunning=!1}
Mi.prototype.add=function(t){var e=++this._id
return this._queue.push({callback:t,id:e,cancelled:!1}),e},Mi.prototype.remove=function(t){for(var e=this._currentlyRunning,r=0,i=e?this._queue.concat(e):this._queue;r<i.length;r+=1){var n=i[r]
if(n.id===t)return void(n.cancelled=!0)}},Mi.prototype.run=function(){var t=this._currentlyRunning=this._queue
this._queue=[]
for(var e=0,r=t;e<r.length;e+=1){var i=r[e]
if(!i.cancelled&&(i.callback(),this._cleared))break}this._cleared=!1,this._currentlyRunning=!1},Mi.prototype.clear=function(){this._currentlyRunning&&(this._cleared=!0),this._queue=[]}
var Li=t.window.HTMLImageElement,Di=t.window.HTMLElement,Bi={center:[0,0],zoom:0,bearing:0,pitch:0,minZoom:0,maxZoom:22,interactive:!0,scrollZoom:!0,boxZoom:!0,dragRotate:!0,dragPan:!0,keyboard:!0,doubleClickZoom:!0,touchZoomRotate:!0,bearingSnap:7,clickTolerance:3,hash:!1,attributionControl:!0,failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!1,trackResize:!0,renderWorldCopies:!0,refreshExpiredTiles:!0,maxTileCacheSize:null,localIdeographFontFamily:"sans-serif",transformRequest:null,accessToken:null,fadeDuration:300,crossSourceCollisions:!0},Ri=function(i){function n(e){var n=this
if(null!=(e=t.extend({},Bi,e)).minZoom&&null!=e.maxZoom&&e.minZoom>e.maxZoom)throw new Error("maxZoom must be greater than minZoom")
var o=new pi(e.minZoom,e.maxZoom,e.renderWorldCopies)
if(i.call(this,o,e),this._interactive=e.interactive,this._maxTileCacheSize=e.maxTileCacheSize,this._failIfMajorPerformanceCaveat=e.failIfMajorPerformanceCaveat,this._preserveDrawingBuffer=e.preserveDrawingBuffer,this._antialias=e.antialias,this._trackResize=e.trackResize,this._bearingSnap=e.bearingSnap,this._refreshExpiredTiles=e.refreshExpiredTiles,this._fadeDuration=e.fadeDuration,this._crossSourceCollisions=e.crossSourceCollisions,this._crossFadingFactor=1,this._collectResourceTiming=e.collectResourceTiming,this._renderTaskQueue=new Mi,this._controls=[],this._mapId=t.uniqueId(),this._requestManager=new t.RequestManager(e.transformRequest,e.accessToken),"string"==typeof e.container){if(this._container=t.window.document.getElementById(e.container),!this._container)throw new Error("Container '"+e.container+"' not found.")}else{if(!(e.container instanceof Di))throw new Error("Invalid type: 'container' must be a String or HTMLElement.")
this._container=e.container}if(e.maxBounds&&this.setMaxBounds(e.maxBounds),t.bindAll(["_onWindowOnline","_onWindowResize","_contextLost","_contextRestored"],this),this._setupContainer(),this._setupPainter(),void 0===this.painter)throw new Error("Failed to initialize WebGL.")
this.on("move",function(){return n._update(!1)}),this.on("moveend",function(){return n._update(!1)}),this.on("zoom",function(){return n._update(!0)}),void 0!==t.window&&(t.window.addEventListener("online",this._onWindowOnline,!1),t.window.addEventListener("resize",this._onWindowResize,!1)),function(t,e){var i=t.getCanvasContainer(),n=null,o=!1,a=null
for(var s in ki)t[s]=new ki[s](t,e),e.interactive&&e[s]&&t[s].enable(e[s])
r.addEventListener(i,"mouseout",function(e){t.fire(new di("mouseout",t,e))}),r.addEventListener(i,"mousedown",function(n){o=!0,a=r.mousePos(i,n)
var s=new di("mousedown",t,n)
t.fire(s),s.defaultPrevented||(e.interactive&&!t.doubleClickZoom.isActive()&&t.stop(),t.boxZoom.onMouseDown(n),t.boxZoom.isActive()||t.dragPan.isActive()||t.dragRotate.onMouseDown(n),t.boxZoom.isActive()||t.dragRotate.isActive()||t.dragPan.onMouseDown(n))}),r.addEventListener(i,"mouseup",function(e){var r=t.dragRotate.isActive()
n&&!r&&t.fire(new di("contextmenu",t,n)),n=null,o=!1,t.fire(new di("mouseup",t,e))}),r.addEventListener(i,"mousemove",function(e){if(!t.dragPan.isActive()&&!t.dragRotate.isActive()){for(var r=e.target;r&&r!==i;)r=r.parentNode
r===i&&t.fire(new di("mousemove",t,e))}}),r.addEventListener(i,"mouseover",function(e){for(var r=e.target;r&&r!==i;)r=r.parentNode
r===i&&t.fire(new di("mouseover",t,e))}),r.addEventListener(i,"touchstart",function(r){var i=new mi("touchstart",t,r)
t.fire(i),i.defaultPrevented||(e.interactive&&t.stop(),t.boxZoom.isActive()||t.dragRotate.isActive()||t.dragPan.onTouchStart(r),t.touchZoomRotate.onStart(r),t.doubleClickZoom.onTouchStart(i))},{passive:!1}),r.addEventListener(i,"touchmove",function(e){t.fire(new mi("touchmove",t,e))},{passive:!1}),r.addEventListener(i,"touchend",function(e){t.fire(new mi("touchend",t,e))}),r.addEventListener(i,"touchcancel",function(e){t.fire(new mi("touchcancel",t,e))}),r.addEventListener(i,"click",function(n){var o=r.mousePos(i,n);(!a||o.equals(a)||o.dist(a)<e.clickTolerance)&&t.fire(new di("click",t,n))}),r.addEventListener(i,"dblclick",function(e){var r=new di("dblclick",t,e)
t.fire(r),r.defaultPrevented||t.doubleClickZoom.onDblClick(r)}),r.addEventListener(i,"contextmenu",function(e){var r=t.dragRotate.isActive()
o||r?o&&(n=e):t.fire(new di("contextmenu",t,e)),(t.dragRotate.isEnabled()||t.listens("contextmenu"))&&e.preventDefault()}),r.addEventListener(i,"wheel",function(r){e.interactive&&t.stop()
var i=new yi("wheel",t,r)
t.fire(i),i.defaultPrevented||t.scrollZoom.onWheel(r)},{passive:!1})}(this,e),this._hash=e.hash&&(new fi).addTo(this),this._hash&&this._hash._onHashChange()||(this.jumpTo({center:e.center,zoom:e.zoom,bearing:e.bearing,pitch:e.pitch}),e.bounds&&(this.resize(),this.fitBounds(e.bounds,t.extend({},e.fitBoundsOptions,{duration:0})))),this.resize(),this._localIdeographFontFamily=e.localIdeographFontFamily,e.style&&this.setStyle(e.style,{localIdeographFontFamily:e.localIdeographFontFamily}),e.attributionControl&&this.addControl(new Ci({customAttribution:e.customAttribution})),this.addControl(new Pi,e.logoPosition),this.on("style.load",function(){n.transform.unmodified&&n.jumpTo(n.style.stylesheet)}),this.on("data",function(e){n._update("style"===e.dataType),n.fire(new t.Event(e.dataType+"data",e))}),this.on("dataloading",function(e){n.fire(new t.Event(e.dataType+"dataloading",e))})}i&&(n.__proto__=i),n.prototype=Object.create(i&&i.prototype),n.prototype.constructor=n
var o={showTileBoundaries:{configurable:!0},showCollisionBoxes:{configurable:!0},showOverdrawInspector:{configurable:!0},repaint:{configurable:!0},vertices:{configurable:!0},version:{configurable:!0}}
return n.prototype._getMapId=function(){return this._mapId},n.prototype.addControl=function(e,r){if(void 0===r&&e.getDefaultPosition&&(r=e.getDefaultPosition()),void 0===r&&(r="top-right"),!e||!e.onAdd)return this.fire(new t.ErrorEvent(new Error("Invalid argument to map.addControl(). Argument must be a control with onAdd and onRemove methods.")))
var i=e.onAdd(this)
this._controls.push(e)
var n=this._controlPositions[r]
return-1!==r.indexOf("bottom")?n.insertBefore(i,n.firstChild):n.appendChild(i),this},n.prototype.removeControl=function(e){if(!e||!e.onRemove)return this.fire(new t.ErrorEvent(new Error("Invalid argument to map.removeControl(). Argument must be a control with onAdd and onRemove methods.")))
var r=this._controls.indexOf(e)
return r>-1&&this._controls.splice(r,1),e.onRemove(this),this},n.prototype.resize=function(e){var r=this._containerDimensions(),i=r[0],n=r[1]
return this._resizeCanvas(i,n),this.transform.resize(i,n),this.painter.resize(i,n),this.fire(new t.Event("movestart",e)).fire(new t.Event("move",e)).fire(new t.Event("resize",e)).fire(new t.Event("moveend",e)),this},n.prototype.getBounds=function(){return this.transform.getBounds()},n.prototype.getMaxBounds=function(){return this.transform.getMaxBounds()},n.prototype.setMaxBounds=function(e){return this.transform.setMaxBounds(t.LngLatBounds.convert(e)),this._update()},n.prototype.setMinZoom=function(t){if((t=null==t?0:t)>=0&&t<=this.transform.maxZoom)return this.transform.minZoom=t,this._update(),this.getZoom()<t&&this.setZoom(t),this
throw new Error("minZoom must be between 0 and the current maxZoom, inclusive")},n.prototype.getMinZoom=function(){return this.transform.minZoom},n.prototype.setMaxZoom=function(t){if((t=null==t?22:t)>=this.transform.minZoom)return this.transform.maxZoom=t,this._update(),this.getZoom()>t&&this.setZoom(t),this
throw new Error("maxZoom must be greater than the current minZoom")},n.prototype.getMaxZoom=function(){return this.transform.maxZoom},n.prototype.getRenderWorldCopies=function(){return this.transform.renderWorldCopies},n.prototype.setRenderWorldCopies=function(t){return this.transform.renderWorldCopies=t,this._update()},n.prototype.project=function(e){return this.transform.locationPoint(t.LngLat.convert(e))},n.prototype.unproject=function(e){return this.transform.pointLocation(t.Point.convert(e))},n.prototype.isMoving=function(){return this._moving||this.dragPan.isActive()||this.dragRotate.isActive()||this.scrollZoom.isActive()},n.prototype.isZooming=function(){return this._zooming||this.scrollZoom.isZooming()},n.prototype.isRotating=function(){return this._rotating||this.dragRotate.isActive()},n.prototype.on=function(t,e,r){var n=this
if(void 0===r)return i.prototype.on.call(this,t,e)
var o=function(){var i
if("mouseenter"===t||"mouseover"===t){var o=!1
return{layer:e,listener:r,delegates:{mousemove:function(i){var a=n.getLayer(e)?n.queryRenderedFeatures(i.point,{layers:[e]}):[]
a.length?o||(o=!0,r.call(n,new di(t,n,i.originalEvent,{features:a}))):o=!1},mouseout:function(){o=!1}}}}if("mouseleave"===t||"mouseout"===t){var a=!1
return{layer:e,listener:r,delegates:{mousemove:function(i){(n.getLayer(e)?n.queryRenderedFeatures(i.point,{layers:[e]}):[]).length?a=!0:a&&(a=!1,r.call(n,new di(t,n,i.originalEvent)))},mouseout:function(e){a&&(a=!1,r.call(n,new di(t,n,e.originalEvent)))}}}}return{layer:e,listener:r,delegates:(i={},i[t]=function(t){var i=n.getLayer(e)?n.queryRenderedFeatures(t.point,{layers:[e]}):[]
i.length&&(t.features=i,r.call(n,t),delete t.features)},i)}}()
for(var a in this._delegatedListeners=this._delegatedListeners||{},this._delegatedListeners[t]=this._delegatedListeners[t]||[],this._delegatedListeners[t].push(o),o.delegates)this.on(a,o.delegates[a])
return this},n.prototype.off=function(t,e,r){if(void 0===r)return i.prototype.off.call(this,t,e)
if(this._delegatedListeners&&this._delegatedListeners[t])for(var n=this._delegatedListeners[t],o=0;o<n.length;o++){var a=n[o]
if(a.layer===e&&a.listener===r){for(var s in a.delegates)this.off(s,a.delegates[s])
return n.splice(o,1),this}}return this},n.prototype.queryRenderedFeatures=function(e,r){if(!this.style)return[]
var i
if(void 0!==r||void 0===e||e instanceof t.Point||Array.isArray(e)||(r=e,e=void 0),r=r||{},(e=e||[[0,0],[this.transform.width,this.transform.height]])instanceof t.Point||"number"==typeof e[0])i=[t.Point.convert(e)]
else{var n=t.Point.convert(e[0]),o=t.Point.convert(e[1])
i=[n,new t.Point(o.x,n.y),o,new t.Point(n.x,o.y),n]}return this.style.queryRenderedFeatures(i,r,this.transform)},n.prototype.querySourceFeatures=function(t,e){return this.style.querySourceFeatures(t,e)},n.prototype.setStyle=function(e,r){return!1!==(r=t.extend({},{localIdeographFontFamily:this._localIdeographFontFamily},r)).diff&&r.localIdeographFontFamily===this._localIdeographFontFamily&&this.style&&e?(this._diffStyle(e,r),this):(this._localIdeographFontFamily=r.localIdeographFontFamily,this._updateStyle(e,r))},n.prototype._updateStyle=function(t,e){return this.style&&(this.style.setEventedParent(null),this.style._remove()),t?(this.style=new Fe(this,e||{}),this.style.setEventedParent(this,{style:this.style}),"string"==typeof t?this.style.loadURL(t):this.style.loadJSON(t),this):(delete this.style,this)},n.prototype._diffStyle=function(e,r){var i=this
if("string"==typeof e){var n=this._requestManager.normalizeStyleURL(e),o=this._requestManager.transformRequest(n,t.ResourceType.Style)
t.getJSON(o,function(e,n){e?i.fire(new t.ErrorEvent(e)):n&&i._updateDiff(n,r)})}else"object"==typeof e&&this._updateDiff(e,r)},n.prototype._updateDiff=function(e,r){try{this.style.setState(e)&&this._update(!0)}catch(i){t.warnOnce("Unable to perform style diff: "+(i.message||i.error||i)+".  Rebuilding the style from scratch."),this._updateStyle(e,r)}},n.prototype.getStyle=function(){if(this.style)return this.style.serialize()},n.prototype.isStyleLoaded=function(){return this.style?this.style.loaded():t.warnOnce("There is no style added to the map.")},n.prototype.addSource=function(t,e){return this.style.addSource(t,e),this._update(!0)},n.prototype.isSourceLoaded=function(e){var r=this.style&&this.style.sourceCaches[e]
if(void 0!==r)return r.loaded()
this.fire(new t.ErrorEvent(new Error("There is no source with ID '"+e+"'")))},n.prototype.areTilesLoaded=function(){var t=this.style&&this.style.sourceCaches
for(var e in t){var r=t[e]._tiles
for(var i in r){var n=r[i]
if("loaded"!==n.state&&"errored"!==n.state)return!1}}return!0},n.prototype.addSourceType=function(t,e,r){return this.style.addSourceType(t,e,r)},n.prototype.removeSource=function(t){return this.style.removeSource(t),this._update(!0)},n.prototype.getSource=function(t){return this.style.getSource(t)},n.prototype.addImage=function(e,r,i){void 0===i&&(i={})
var n=i.pixelRatio
void 0===n&&(n=1)
var o=i.sdf
if(void 0===o&&(o=!1),r instanceof Li){var a=t.browser.getImageData(r),s=a.width,l=a.height,u=a.data
this.style.addImage(e,{data:new t.RGBAImage({width:s,height:l},u),pixelRatio:n,sdf:o,version:0})}else{if(void 0===r.width||void 0===r.height)return this.fire(new t.ErrorEvent(new Error("Invalid arguments to map.addImage(). The second argument must be an `HTMLImageElement`, `ImageData`, or object with `width`, `height`, and `data` properties with the same format as `ImageData`")))
var c=r.width,p=r.height,h=r.data,f=r
this.style.addImage(e,{data:new t.RGBAImage({width:c,height:p},new Uint8Array(h)),pixelRatio:n,sdf:o,version:0,userImage:f}),f.onAdd&&f.onAdd(this,e)}},n.prototype.updateImage=function(e,r){var i=this.style.getImage(e)
if(!i)return this.fire(new t.ErrorEvent(new Error("The map has no image with that id. If you are adding a new image use `map.addImage(...)` instead.")))
var n=r instanceof Li?t.browser.getImageData(r):r,o=n.width,a=n.height,s=n.data
if(void 0===o||void 0===a)return this.fire(new t.ErrorEvent(new Error("Invalid arguments to map.updateImage(). The second argument must be an `HTMLImageElement`, `ImageData`, or object with `width`, `height`, and `data` properties with the same format as `ImageData`")))
if(o!==i.data.width||a!==i.data.height)return this.fire(new t.ErrorEvent(new Error("The width and height of the updated image must be that same as the previous version of the image")))
var l=!(r instanceof Li)
i.data.replace(s,l),this.style.updateImage(e,i)},n.prototype.hasImage=function(e){return e?!!this.style.getImage(e):(this.fire(new t.ErrorEvent(new Error("Missing required image id"))),!1)},n.prototype.removeImage=function(t){this.style.removeImage(t)},n.prototype.loadImage=function(e,r){t.getImage(this._requestManager.transformRequest(e,t.ResourceType.Image),r)},n.prototype.listImages=function(){return this.style.listImages()},n.prototype.addLayer=function(t,e){return this.style.addLayer(t,e),this._update(!0)},n.prototype.moveLayer=function(t,e){return this.style.moveLayer(t,e),this._update(!0)},n.prototype.removeLayer=function(t){return this.style.removeLayer(t),this._update(!0)},n.prototype.getLayer=function(t){return this.style.getLayer(t)},n.prototype.setLayerZoomRange=function(t,e,r){return this.style.setLayerZoomRange(t,e,r),this._update(!0)},n.prototype.setFilter=function(t,e,r){return void 0===r&&(r={}),this.style.setFilter(t,e,r),this._update(!0)},n.prototype.getFilter=function(t){return this.style.getFilter(t)},n.prototype.setPaintProperty=function(t,e,r,i){return void 0===i&&(i={}),this.style.setPaintProperty(t,e,r,i),this._update(!0)},n.prototype.getPaintProperty=function(t,e){return this.style.getPaintProperty(t,e)},n.prototype.setLayoutProperty=function(t,e,r,i){return void 0===i&&(i={}),this.style.setLayoutProperty(t,e,r,i),this._update(!0)},n.prototype.getLayoutProperty=function(t,e){return this.style.getLayoutProperty(t,e)},n.prototype.setLight=function(t,e){return void 0===e&&(e={}),this.style.setLight(t,e),this._update(!0)},n.prototype.getLight=function(){return this.style.getLight()},n.prototype.setFeatureState=function(t,e){return this.style.setFeatureState(t,e),this._update()},n.prototype.removeFeatureState=function(t,e){return this.style.removeFeatureState(t,e),this._update()},n.prototype.getFeatureState=function(t){return this.style.getFeatureState(t)},n.prototype.getContainer=function(){return this._container},n.prototype.getCanvasContainer=function(){return this._canvasContainer},n.prototype.getCanvas=function(){return this._canvas},n.prototype._containerDimensions=function(){var t=0,e=0
return this._container&&(t=this._container.clientWidth||400,e=this._container.clientHeight||300),[t,e]},n.prototype._detectMissingCSS=function(){"rgb(250, 128, 114)"!==t.window.getComputedStyle(this._missingCSSCanary).getPropertyValue("background-color")&&t.warnOnce("This page appears to be missing CSS declarations for Mapbox GL JS, which may cause the map to display incorrectly. Please ensure your page includes mapbox-gl-6bcad7ad946965bd5cd3a1ae318372e5.css, as described in https://www.mapbox.com/mapbox-gl-js/api/.")},n.prototype._setupContainer=function(){var t=this._container
t.classList.add("mapboxgl-map"),(this._missingCSSCanary=r.create("div","mapboxgl-canary",t)).style.visibility="hidden",this._detectMissingCSS()
var e=this._canvasContainer=r.create("div","mapboxgl-canvas-container",t)
this._interactive&&e.classList.add("mapboxgl-interactive"),this._canvas=r.create("canvas","mapboxgl-canvas",e),this._canvas.style.position="absolute",this._canvas.addEventListener("webglcontextlost",this._contextLost,!1),this._canvas.addEventListener("webglcontextrestored",this._contextRestored,!1),this._canvas.setAttribute("tabindex","0"),this._canvas.setAttribute("aria-label","Map")
var i=this._containerDimensions()
this._resizeCanvas(i[0],i[1])
var n=this._controlContainer=r.create("div","mapboxgl-control-container",t),o=this._controlPositions={};["top-left","top-right","bottom-left","bottom-right"].forEach(function(t){o[t]=r.create("div","mapboxgl-ctrl-"+t,n)})},n.prototype._resizeCanvas=function(e,r){var i=t.window.devicePixelRatio||1
this._canvas.width=i*e,this._canvas.height=i*r,this._canvas.style.width=e+"px",this._canvas.style.height=r+"px"},n.prototype._setupPainter=function(){var r=t.extend({},e.webGLContextAttributes,{failIfMajorPerformanceCaveat:this._failIfMajorPerformanceCaveat,preserveDrawingBuffer:this._preserveDrawingBuffer,antialias:this._antialias||!1}),i=this._canvas.getContext("webgl",r)||this._canvas.getContext("experimental-webgl",r)
i?(this.painter=new si(i,this.transform),t.webpSupported.testSupport(i)):this.fire(new t.ErrorEvent(new Error("Failed to initialize WebGL")))},n.prototype._contextLost=function(e){e.preventDefault(),this._frame&&(this._frame.cancel(),this._frame=null),this.fire(new t.Event("webglcontextlost",{originalEvent:e}))},n.prototype._contextRestored=function(e){this._setupPainter(),this.resize(),this._update(),this.fire(new t.Event("webglcontextrestored",{originalEvent:e}))},n.prototype.loaded=function(){return!this._styleDirty&&!this._sourcesDirty&&!!this.style&&this.style.loaded()},n.prototype._update=function(t){return this.style?(this._styleDirty=this._styleDirty||t,this._sourcesDirty=!0,this.triggerRepaint(),this):this},n.prototype._requestRenderFrame=function(t){return this._update(),this._renderTaskQueue.add(t)},n.prototype._cancelRenderFrame=function(t){this._renderTaskQueue.remove(t)},n.prototype._render=function(){this.painter.context.setDirty(),this.painter.setBaseState(),this._renderTaskQueue.run()
var e=!1
if(this.style&&this._styleDirty){this._styleDirty=!1
var r=this.transform.zoom,i=t.browser.now()
this.style.zoomHistory.update(r,i)
var n=new t.EvaluationParameters(r,{now:i,fadeDuration:this._fadeDuration,zoomHistory:this.style.zoomHistory,transition:this.style.getTransition()}),o=n.crossFadingFactor()
1===o&&o===this._crossFadingFactor||(e=!0,this._crossFadingFactor=o),this.style.update(n)}return this.style&&this._sourcesDirty&&(this._sourcesDirty=!1,this.style._updateSources(this.transform)),this._placementDirty=this.style&&this.style._updatePlacement(this.painter.transform,this.showCollisionBoxes,this._fadeDuration,this._crossSourceCollisions),this.painter.render(this.style,{showTileBoundaries:this.showTileBoundaries,showOverdrawInspector:this._showOverdrawInspector,rotating:this.isRotating(),zooming:this.isZooming(),moving:this.isMoving(),fadeDuration:this._fadeDuration}),this.fire(new t.Event("render")),this.loaded()&&!this._loaded&&(this._loaded=!0,this.fire(new t.Event("load"))),this.style&&(this.style.hasTransitions()||e)&&(this._styleDirty=!0),this.style&&!this._placementDirty&&this.style._releaseSymbolFadeTiles(),this._sourcesDirty||this._repaint||this._styleDirty||this._placementDirty?this.triggerRepaint():!this.isMoving()&&this.loaded()&&this.fire(new t.Event("idle")),this},n.prototype.remove=function(){this._hash&&this._hash.remove()
for(var e=0,r=this._controls;e<r.length;e+=1)r[e].onRemove(this)
this._controls=[],this._frame&&(this._frame.cancel(),this._frame=null),this._renderTaskQueue.clear(),this.setStyle(null),void 0!==t.window&&(t.window.removeEventListener("resize",this._onWindowResize,!1),t.window.removeEventListener("online",this._onWindowOnline,!1))
var i=this.painter.context.gl.getExtension("WEBGL_lose_context")
i&&i.loseContext(),Fi(this._canvasContainer),Fi(this._controlContainer),Fi(this._missingCSSCanary),this._container.classList.remove("mapboxgl-map"),this.fire(new t.Event("remove"))},n.prototype.triggerRepaint=function(){var e=this
this.style&&!this._frame&&(this._frame=t.browser.frame(function(){e._frame=null,e._render()}))},n.prototype._onWindowOnline=function(){this._update()},n.prototype._onWindowResize=function(t){this._trackResize&&this.resize({originalEvent:t})._update()},o.showTileBoundaries.get=function(){return!!this._showTileBoundaries},o.showTileBoundaries.set=function(t){this._showTileBoundaries!==t&&(this._showTileBoundaries=t,this._update())},o.showCollisionBoxes.get=function(){return!!this._showCollisionBoxes},o.showCollisionBoxes.set=function(t){this._showCollisionBoxes!==t&&(this._showCollisionBoxes=t,t?this.style._generateCollisionBoxes():this._update())},o.showOverdrawInspector.get=function(){return!!this._showOverdrawInspector},o.showOverdrawInspector.set=function(t){this._showOverdrawInspector!==t&&(this._showOverdrawInspector=t,this._update())},o.repaint.get=function(){return!!this._repaint},o.repaint.set=function(t){this._repaint!==t&&(this._repaint=t,this.triggerRepaint())},o.vertices.get=function(){return!!this._vertices},o.vertices.set=function(t){this._vertices=t,this._update()},n.prototype._setCacheLimits=function(e,r){t.setCacheLimits(e,r)},o.version.get=function(){return t.version},Object.defineProperties(n.prototype,o),n}(zi)
function Fi(t){t.parentNode&&t.parentNode.removeChild(t)}var Oi={showCompass:!0,showZoom:!0,visualizePitch:!1},Ui=function(e){var i=this
this.options=t.extend({},Oi,e),this._container=r.create("div","mapboxgl-ctrl mapboxgl-ctrl-group"),this._container.addEventListener("contextmenu",function(t){return t.preventDefault()}),this.options.showZoom&&(t.bindAll(["_updateZoomButtons"],this),this._zoomInButton=this._createButton("mapboxgl-ctrl-icon mapboxgl-ctrl-zoom-in","Zoom in",function(t){return i._map.zoomIn({},{originalEvent:t})}),this._zoomOutButton=this._createButton("mapboxgl-ctrl-icon mapboxgl-ctrl-zoom-out","Zoom out",function(t){return i._map.zoomOut({},{originalEvent:t})})),this.options.showCompass&&(t.bindAll(["_rotateCompassArrow"],this),this._compass=this._createButton("mapboxgl-ctrl-icon mapboxgl-ctrl-compass","Reset bearing to north",function(t){i.options.visualizePitch?i._map.resetNorthPitch({},{originalEvent:t}):i._map.resetNorth({},{originalEvent:t})}),this._compassArrow=r.create("span","mapboxgl-ctrl-compass-arrow",this._compass))}
function Vi(e,r,i){if(e=new t.LngLat(e.lng,e.lat),r){var n=new t.LngLat(e.lng-360,e.lat),o=new t.LngLat(e.lng+360,e.lat),a=i.locationPoint(e).distSqr(r)
i.locationPoint(n).distSqr(r)<a?e=n:i.locationPoint(o).distSqr(r)<a&&(e=o)}for(;Math.abs(e.lng-i.center.lng)>180;){var s=i.locationPoint(e)
if(s.x>=0&&s.y>=0&&s.x<=i.width&&s.y<=i.height)break
e.lng>i.center.lng?e.lng-=360:e.lng+=360}return e}Ui.prototype._updateZoomButtons=function(){var t=this._map.getZoom()
t===this._map.getMaxZoom()?this._zoomInButton.classList.add("mapboxgl-ctrl-icon-disabled"):this._zoomInButton.classList.remove("mapboxgl-ctrl-icon-disabled"),t===this._map.getMinZoom()?this._zoomOutButton.classList.add("mapboxgl-ctrl-icon-disabled"):this._zoomOutButton.classList.remove("mapboxgl-ctrl-icon-disabled")},Ui.prototype._rotateCompassArrow=function(){var t=this.options.visualizePitch?"scale("+1/Math.pow(Math.cos(this._map.transform.pitch*(Math.PI/180)),.5)+") rotateX("+this._map.transform.pitch+"deg) rotateZ("+this._map.transform.angle*(180/Math.PI)+"deg)":"rotate("+this._map.transform.angle*(180/Math.PI)+"deg)"
this._compassArrow.style.transform=t},Ui.prototype.onAdd=function(t){return this._map=t,this.options.showZoom&&(this._map.on("zoom",this._updateZoomButtons),this._updateZoomButtons()),this.options.showCompass&&(this.options.visualizePitch&&this._map.on("pitch",this._rotateCompassArrow),this._map.on("rotate",this._rotateCompassArrow),this._rotateCompassArrow(),this._handler=new xi(t,{button:"left",element:this._compass}),r.addEventListener(this._compass,"mousedown",this._handler.onMouseDown),r.addEventListener(this._compass,"touchstart",this._handler.onMouseDown,{passive:!1}),this._handler.enable()),this._container},Ui.prototype.onRemove=function(){r.remove(this._container),this.options.showZoom&&this._map.off("zoom",this._updateZoomButtons),this.options.showCompass&&(this.options.visualizePitch&&this._map.off("pitch",this._rotateCompassArrow),this._map.off("rotate",this._rotateCompassArrow),r.removeEventListener(this._compass,"mousedown",this._handler.onMouseDown),r.removeEventListener(this._compass,"touchstart",this._handler.onMouseDown,{passive:!1}),this._handler.disable(),delete this._handler),delete this._map},Ui.prototype._createButton=function(t,e,i){var n=r.create("button",t,this._container)
return n.type="button",n.title=e,n.setAttribute("aria-label",e),n.addEventListener("click",i),n}
var Ni={center:"translate(-50%,-50%)",top:"translate(-50%,0)","top-left":"translate(0,0)","top-right":"translate(-100%,0)",bottom:"translate(-50%,-100%)","bottom-left":"translate(0,-100%)","bottom-right":"translate(-100%,-100%)",left:"translate(0,-50%)",right:"translate(-100%,-50%)"}
function ji(t,e,r){var i=t.classList
for(var n in Ni)i.remove("mapboxgl-"+r+"-anchor-"+n)
i.add("mapboxgl-"+r+"-anchor-"+e)}var qi,Zi=function(e){function i(i,n){if(e.call(this),(i instanceof t.window.HTMLElement||n)&&(i=t.extend({element:i},n)),t.bindAll(["_update","_onMove","_onUp","_addDragHandler","_onMapClick"],this),this._anchor=i&&i.anchor||"center",this._color=i&&i.color||"#3FB1CE",this._draggable=i&&i.draggable||!1,this._state="inactive",i&&i.element)this._element=i.element,this._offset=t.Point.convert(i&&i.offset||[0,0])
else{this._defaultMarker=!0,this._element=r.create("div")
var o=r.createNS("http://www.w3.org/2000/svg","svg")
o.setAttributeNS(null,"display","block"),o.setAttributeNS(null,"height","41px"),o.setAttributeNS(null,"width","27px"),o.setAttributeNS(null,"viewBox","0 0 27 41")
var a=r.createNS("http://www.w3.org/2000/svg","g")
a.setAttributeNS(null,"stroke","none"),a.setAttributeNS(null,"stroke-width","1"),a.setAttributeNS(null,"fill","none"),a.setAttributeNS(null,"fill-rule","evenodd")
var s=r.createNS("http://www.w3.org/2000/svg","g")
s.setAttributeNS(null,"fill-rule","nonzero")
var l=r.createNS("http://www.w3.org/2000/svg","g")
l.setAttributeNS(null,"transform","translate(3.0, 29.0)"),l.setAttributeNS(null,"fill","#000000")
for(var u=0,c=[{rx:"10.5",ry:"5.25002273"},{rx:"10.5",ry:"5.25002273"},{rx:"9.5",ry:"4.77275007"},{rx:"8.5",ry:"4.29549936"},{rx:"7.5",ry:"3.81822308"},{rx:"6.5",ry:"3.34094679"},{rx:"5.5",ry:"2.86367051"},{rx:"4.5",ry:"2.38636864"}];u<c.length;u+=1){var p=c[u],h=r.createNS("http://www.w3.org/2000/svg","ellipse")
h.setAttributeNS(null,"opacity","0.04"),h.setAttributeNS(null,"cx","10.5"),h.setAttributeNS(null,"cy","5.80029008"),h.setAttributeNS(null,"rx",p.rx),h.setAttributeNS(null,"ry",p.ry),l.appendChild(h)}var f=r.createNS("http://www.w3.org/2000/svg","g")
f.setAttributeNS(null,"fill",this._color)
var d=r.createNS("http://www.w3.org/2000/svg","path")
d.setAttributeNS(null,"d","M27,13.5 C27,19.074644 20.250001,27.000002 14.75,34.500002 C14.016665,35.500004 12.983335,35.500004 12.25,34.500002 C6.7499993,27.000002 0,19.222562 0,13.5 C0,6.0441559 6.0441559,0 13.5,0 C20.955844,0 27,6.0441559 27,13.5 Z"),f.appendChild(d)
var m=r.createNS("http://www.w3.org/2000/svg","g")
m.setAttributeNS(null,"opacity","0.25"),m.setAttributeNS(null,"fill","#000000")
var y=r.createNS("http://www.w3.org/2000/svg","path")
y.setAttributeNS(null,"d","M13.5,0 C6.0441559,0 0,6.0441559 0,13.5 C0,19.222562 6.7499993,27 12.25,34.5 C13,35.522727 14.016664,35.500004 14.75,34.5 C20.250001,27 27,19.074644 27,13.5 C27,6.0441559 20.955844,0 13.5,0 Z M13.5,1 C20.415404,1 26,6.584596 26,13.5 C26,15.898657 24.495584,19.181431 22.220703,22.738281 C19.945823,26.295132 16.705119,30.142167 13.943359,33.908203 C13.743445,34.180814 13.612715,34.322738 13.5,34.441406 C13.387285,34.322738 13.256555,34.180814 13.056641,33.908203 C10.284481,30.127985 7.4148684,26.314159 5.015625,22.773438 C2.6163816,19.232715 1,15.953538 1,13.5 C1,6.584596 6.584596,1 13.5,1 Z"),m.appendChild(y)
var v=r.createNS("http://www.w3.org/2000/svg","g")
v.setAttributeNS(null,"transform","translate(6.0, 7.0)"),v.setAttributeNS(null,"fill","#FFFFFF")
var _=r.createNS("http://www.w3.org/2000/svg","g")
_.setAttributeNS(null,"transform","translate(8.0, 8.0)")
var g=r.createNS("http://www.w3.org/2000/svg","circle")
g.setAttributeNS(null,"fill","#000000"),g.setAttributeNS(null,"opacity","0.25"),g.setAttributeNS(null,"cx","5.5"),g.setAttributeNS(null,"cy","5.5"),g.setAttributeNS(null,"r","5.4999962")
var x=r.createNS("http://www.w3.org/2000/svg","circle")
x.setAttributeNS(null,"fill","#FFFFFF"),x.setAttributeNS(null,"cx","5.5"),x.setAttributeNS(null,"cy","5.5"),x.setAttributeNS(null,"r","5.4999962"),_.appendChild(g),_.appendChild(x),s.appendChild(l),s.appendChild(f),s.appendChild(m),s.appendChild(v),s.appendChild(_),o.appendChild(s),this._element.appendChild(o),this._offset=t.Point.convert(i&&i.offset||[0,-14])}this._element.classList.add("mapboxgl-marker"),this._element.addEventListener("dragstart",function(t){t.preventDefault()}),ji(this._element,this._anchor,"marker"),this._popup=null}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.addTo=function(t){return this.remove(),this._map=t,t.getCanvasContainer().appendChild(this._element),t.on("move",this._update),t.on("moveend",this._update),this.setDraggable(this._draggable),this._update(),this._map.on("click",this._onMapClick),this},i.prototype.remove=function(){return this._map&&(this._map.off("click",this._onMapClick),this._map.off("move",this._update),this._map.off("moveend",this._update),this._map.off("mousedown",this._addDragHandler),this._map.off("touchstart",this._addDragHandler),this._map.off("mouseup",this._onUp),this._map.off("touchend",this._onUp),this._map.off("mousemove",this._onMove),this._map.off("touchmove",this._onMove),delete this._map),r.remove(this._element),this._popup&&this._popup.remove(),this},i.prototype.getLngLat=function(){return this._lngLat},i.prototype.setLngLat=function(e){return this._lngLat=t.LngLat.convert(e),this._pos=null,this._popup&&this._popup.setLngLat(this._lngLat),this._update(),this},i.prototype.getElement=function(){return this._element},i.prototype.setPopup=function(t){if(this._popup&&(this._popup.remove(),this._popup=null),t){if(!("offset"in t.options)){var e=Math.sqrt(Math.pow(13.5,2)/2)
t.options.offset=this._defaultMarker?{top:[0,0],"top-left":[0,0],"top-right":[0,0],bottom:[0,-38.1],"bottom-left":[e,-1*(24.6+e)],"bottom-right":[-e,-1*(24.6+e)],left:[13.5,-24.6],right:[-13.5,-24.6]}:this._offset}this._popup=t,this._lngLat&&this._popup.setLngLat(this._lngLat)}return this},i.prototype._onMapClick=function(t){var e=t.originalEvent.target,r=this._element
this._popup&&(e===r||r.contains(e))&&this.togglePopup()},i.prototype.getPopup=function(){return this._popup},i.prototype.togglePopup=function(){var t=this._popup
return t?(t.isOpen()?t.remove():t.addTo(this._map),this):this},i.prototype._update=function(t){this._map&&(this._map.transform.renderWorldCopies&&(this._lngLat=Vi(this._lngLat,this._pos,this._map.transform)),this._pos=this._map.project(this._lngLat)._add(this._offset),t&&"moveend"!==t.type||(this._pos=this._pos.round()),r.setTransform(this._element,Ni[this._anchor]+" translate("+this._pos.x+"px, "+this._pos.y+"px)"))},i.prototype.getOffset=function(){return this._offset},i.prototype.setOffset=function(e){return this._offset=t.Point.convert(e),this._update(),this},i.prototype._onMove=function(e){this._pos=e.point.sub(this._positionDelta),this._lngLat=this._map.unproject(this._pos),this.setLngLat(this._lngLat),this._element.style.pointerEvents="none","pending"===this._state&&(this._state="active",this.fire(new t.Event("dragstart"))),this.fire(new t.Event("drag"))},i.prototype._onUp=function(){this._element.style.pointerEvents="auto",this._positionDelta=null,this._map.off("mousemove",this._onMove),this._map.off("touchmove",this._onMove),"active"===this._state&&this.fire(new t.Event("dragend")),this._state="inactive"},i.prototype._addDragHandler=function(t){this._element.contains(t.originalEvent.target)&&(t.preventDefault(),this._positionDelta=t.point.sub(this._pos).add(this._offset),this._state="pending",this._map.on("mousemove",this._onMove),this._map.on("touchmove",this._onMove),this._map.once("mouseup",this._onUp),this._map.once("touchend",this._onUp))},i.prototype.setDraggable=function(t){return this._draggable=!!t,this._map&&(t?(this._map.on("mousedown",this._addDragHandler),this._map.on("touchstart",this._addDragHandler)):(this._map.off("mousedown",this._addDragHandler),this._map.off("touchstart",this._addDragHandler))),this},i.prototype.isDraggable=function(){return this._draggable},i}(t.Evented),Gi={positionOptions:{enableHighAccuracy:!1,maximumAge:0,timeout:6e3},fitBoundsOptions:{maxZoom:15},trackUserLocation:!1,showUserLocation:!0},Xi=function(e){function i(r){e.call(this),this.options=t.extend({},Gi,r),t.bindAll(["_onSuccess","_onError","_finish","_setupUI","_updateCamera","_updateMarker"],this)}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.onAdd=function(e){var i
return this._map=e,this._container=r.create("div","mapboxgl-ctrl mapboxgl-ctrl-group"),i=this._setupUI,void 0!==qi?i(qi):void 0!==t.window.navigator.permissions?t.window.navigator.permissions.query({name:"geolocation"}).then(function(t){qi="denied"!==t.state,i(qi)}):(qi=!!t.window.navigator.geolocation,i(qi)),this._container},i.prototype.onRemove=function(){void 0!==this._geolocationWatchID&&(t.window.navigator.geolocation.clearWatch(this._geolocationWatchID),this._geolocationWatchID=void 0),this.options.showUserLocation&&this._userLocationDotMarker&&this._userLocationDotMarker.remove(),r.remove(this._container),this._map=void 0},i.prototype._onSuccess=function(e){if(this.options.trackUserLocation)switch(this._lastKnownPosition=e,this._watchState){case"WAITING_ACTIVE":case"ACTIVE_LOCK":case"ACTIVE_ERROR":this._watchState="ACTIVE_LOCK",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active")
break
case"BACKGROUND":case"BACKGROUND_ERROR":this._watchState="BACKGROUND",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background-error"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background")}this.options.showUserLocation&&"OFF"!==this._watchState&&this._updateMarker(e),this.options.trackUserLocation&&"ACTIVE_LOCK"!==this._watchState||this._updateCamera(e),this.options.showUserLocation&&this._dotElement.classList.remove("mapboxgl-user-location-dot-stale"),this.fire(new t.Event("geolocate",e)),this._finish()},i.prototype._updateCamera=function(e){var r=new t.LngLat(e.coords.longitude,e.coords.latitude),i=e.coords.accuracy,n=this._map.getBearing(),o=t.extend({bearing:n},this.options.fitBoundsOptions)
this._map.fitBounds(r.toBounds(i),o,{geolocateSource:!0})},i.prototype._updateMarker=function(t){t?this._userLocationDotMarker.setLngLat([t.coords.longitude,t.coords.latitude]).addTo(this._map):this._userLocationDotMarker.remove()},i.prototype._onError=function(e){if(this.options.trackUserLocation)if(1===e.code)this._watchState="OFF",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background-error"),void 0!==this._geolocationWatchID&&this._clearWatch()
else switch(this._watchState){case"WAITING_ACTIVE":this._watchState="ACTIVE_ERROR",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active-error")
break
case"ACTIVE_LOCK":this._watchState="ACTIVE_ERROR",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting")
break
case"BACKGROUND":this._watchState="BACKGROUND_ERROR",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background-error"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting")}"OFF"!==this._watchState&&this.options.showUserLocation&&this._dotElement.classList.add("mapboxgl-user-location-dot-stale"),this.fire(new t.Event("error",e)),this._finish()},i.prototype._finish=function(){this._timeoutId&&clearTimeout(this._timeoutId),this._timeoutId=void 0},i.prototype._setupUI=function(e){var i=this
!1!==e?(this._container.addEventListener("contextmenu",function(t){return t.preventDefault()}),this._geolocateButton=r.create("button","mapboxgl-ctrl-icon mapboxgl-ctrl-geolocate",this._container),this._geolocateButton.type="button",this._geolocateButton.title="Find my location",this._geolocateButton.setAttribute("aria-label","Find my location"),this.options.trackUserLocation&&(this._geolocateButton.setAttribute("aria-pressed","false"),this._watchState="OFF"),this.options.showUserLocation&&(this._dotElement=r.create("div","mapboxgl-user-location-dot"),this._userLocationDotMarker=new Zi(this._dotElement),this.options.trackUserLocation&&(this._watchState="OFF")),this._geolocateButton.addEventListener("click",this.trigger.bind(this)),this._setup=!0,this.options.trackUserLocation&&this._map.on("movestart",function(e){var r=e.originalEvent&&"resize"===e.originalEvent.type
e.geolocateSource||"ACTIVE_LOCK"!==i._watchState||r||(i._watchState="BACKGROUND",i._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background"),i._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"),i.fire(new t.Event("trackuserlocationend")))})):t.warnOnce("Geolocation support is not available, the GeolocateControl will not be visible.")},i.prototype.trigger=function(){if(!this._setup)return t.warnOnce("Geolocate control triggered before added to a map"),!1
if(this.options.trackUserLocation){switch(this._watchState){case"OFF":this._watchState="WAITING_ACTIVE",this.fire(new t.Event("trackuserlocationstart"))
break
case"WAITING_ACTIVE":case"ACTIVE_LOCK":case"ACTIVE_ERROR":case"BACKGROUND_ERROR":this._watchState="OFF",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background-error"),this.fire(new t.Event("trackuserlocationend"))
break
case"BACKGROUND":this._watchState="ACTIVE_LOCK",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background"),this._lastKnownPosition&&this._updateCamera(this._lastKnownPosition),this.fire(new t.Event("trackuserlocationstart"))}switch(this._watchState){case"WAITING_ACTIVE":this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active")
break
case"ACTIVE_LOCK":this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active")
break
case"ACTIVE_ERROR":this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active-error")
break
case"BACKGROUND":this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background")
break
case"BACKGROUND_ERROR":this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background-error")}"OFF"===this._watchState&&void 0!==this._geolocationWatchID?this._clearWatch():void 0===this._geolocationWatchID&&(this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.setAttribute("aria-pressed","true"),this._geolocationWatchID=t.window.navigator.geolocation.watchPosition(this._onSuccess,this._onError,this.options.positionOptions))}else t.window.navigator.geolocation.getCurrentPosition(this._onSuccess,this._onError,this.options.positionOptions),this._timeoutId=setTimeout(this._finish,1e4)
return!0},i.prototype._clearWatch=function(){t.window.navigator.geolocation.clearWatch(this._geolocationWatchID),this._geolocationWatchID=void 0,this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.setAttribute("aria-pressed","false"),this.options.showUserLocation&&this._updateMarker(null)},i}(t.Evented),Wi={maxWidth:100,unit:"metric"},Ki=function(e){this.options=t.extend({},Wi,e),t.bindAll(["_onMove","setUnit"],this)}
function Hi(t,e,r){var i,n,o,a,s,l,u=r&&r.maxWidth||100,c=t._container.clientHeight/2,p=(i=t.unproject([0,c]),n=t.unproject([u,c]),o=Math.PI/180,a=i.lat*o,s=n.lat*o,l=Math.sin(a)*Math.sin(s)+Math.cos(a)*Math.cos(s)*Math.cos((n.lng-i.lng)*o),6371e3*Math.acos(Math.min(l,1)))
if(r&&"imperial"===r.unit){var h=3.2808*p
h>5280?Ji(e,u,h/5280,"mi"):Ji(e,u,h,"ft")}else r&&"nautical"===r.unit?Ji(e,u,p/1852,"nm"):Ji(e,u,p,"m")}function Ji(t,e,r,i){var n,o,a,s=(n=r,(o=Math.pow(10,(""+Math.floor(n)).length-1))*(a=(a=n/o)>=10?10:a>=5?5:a>=3?3:a>=2?2:a>=1?1:function(t){var e=Math.pow(10,Math.ceil(-Math.log(t)/Math.LN10))
return Math.round(t*e)/e}(a))),l=s/r
"m"===i&&s>=1e3&&(s/=1e3,i="km"),t.style.width=e*l+"px",t.innerHTML=s+i}Ki.prototype.getDefaultPosition=function(){return"bottom-left"},Ki.prototype._onMove=function(){Hi(this._map,this._container,this.options)},Ki.prototype.onAdd=function(t){return this._map=t,this._container=r.create("div","mapboxgl-ctrl mapboxgl-ctrl-scale",t.getContainer()),this._map.on("move",this._onMove),this._onMove(),this._container},Ki.prototype.onRemove=function(){r.remove(this._container),this._map.off("move",this._onMove),this._map=void 0},Ki.prototype.setUnit=function(t){this.options.unit=t,Hi(this._map,this._container,this.options)}
var Yi=function(e){this._fullscreen=!1,e&&e.container&&(e.container instanceof t.window.HTMLElement?this._container=e.container:t.warnOnce("Full screen control 'container' must be a DOM element.")),t.bindAll(["_onClickFullscreen","_changeIcon"],this),"onfullscreenchange"in t.window.document?this._fullscreenchange="fullscreenchange":"onmozfullscreenchange"in t.window.document?this._fullscreenchange="mozfullscreenchange":"onwebkitfullscreenchange"in t.window.document?this._fullscreenchange="webkitfullscreenchange":"onmsfullscreenchange"in t.window.document&&(this._fullscreenchange="MSFullscreenChange"),this._className="mapboxgl-ctrl"}
Yi.prototype.onAdd=function(e){return this._map=e,this._container||(this._container=this._map.getContainer()),this._controlContainer=r.create("div",this._className+" mapboxgl-ctrl-group"),this._checkFullscreenSupport()?this._setupUI():(this._controlContainer.style.display="none",t.warnOnce("This device does not support fullscreen mode.")),this._controlContainer},Yi.prototype.onRemove=function(){r.remove(this._controlContainer),this._map=null,t.window.document.removeEventListener(this._fullscreenchange,this._changeIcon)},Yi.prototype._checkFullscreenSupport=function(){return!!(t.window.document.fullscreenEnabled||t.window.document.mozFullScreenEnabled||t.window.document.msFullscreenEnabled||t.window.document.webkitFullscreenEnabled)},Yi.prototype._setupUI=function(){(this._fullscreenButton=r.create("button",this._className+"-icon "+this._className+"-fullscreen",this._controlContainer)).type="button",this._updateTitle(),this._fullscreenButton.addEventListener("click",this._onClickFullscreen),t.window.document.addEventListener(this._fullscreenchange,this._changeIcon)},Yi.prototype._updateTitle=function(){var t=this._isFullscreen()?"Exit fullscreen":"Enter fullscreen"
this._fullscreenButton.setAttribute("aria-label",t),this._fullscreenButton.title=t},Yi.prototype._isFullscreen=function(){return this._fullscreen},Yi.prototype._changeIcon=function(){(t.window.document.fullscreenElement||t.window.document.mozFullScreenElement||t.window.document.webkitFullscreenElement||t.window.document.msFullscreenElement)===this._container!==this._fullscreen&&(this._fullscreen=!this._fullscreen,this._fullscreenButton.classList.toggle(this._className+"-shrink"),this._fullscreenButton.classList.toggle(this._className+"-fullscreen"),this._updateTitle())},Yi.prototype._onClickFullscreen=function(){this._isFullscreen()?t.window.document.exitFullscreen?t.window.document.exitFullscreen():t.window.document.mozCancelFullScreen?t.window.document.mozCancelFullScreen():t.window.document.msExitFullscreen?t.window.document.msExitFullscreen():t.window.document.webkitCancelFullScreen&&t.window.document.webkitCancelFullScreen():this._container.requestFullscreen?this._container.requestFullscreen():this._container.mozRequestFullScreen?this._container.mozRequestFullScreen():this._container.msRequestFullscreen?this._container.msRequestFullscreen():this._container.webkitRequestFullscreen&&this._container.webkitRequestFullscreen()}
var $i={closeButton:!0,closeOnClick:!0,className:"",maxWidth:"240px"},Qi=function(e){function i(r){e.call(this),this.options=t.extend(Object.create($i),r),t.bindAll(["_update","_onClickClose","remove"],this)}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.addTo=function(e){var r=this
return this._map=e,this.options.closeOnClick&&this._map.on("click",this._onClickClose),this._map.on("remove",this.remove),this._update(),this._trackPointer?(this._map.on("mousemove",function(t){r._update(t.point)}),this._map.on("mouseup",function(t){r._update(t.point)}),this._container&&this._container.classList.add("mapboxgl-popup-track-pointer"),this._map._canvasContainer.classList.add("mapboxgl-track-pointer")):this._map.on("move",this._update),this.fire(new t.Event("open")),this},i.prototype.isOpen=function(){return!!this._map},i.prototype.remove=function(){return this._content&&r.remove(this._content),this._container&&(r.remove(this._container),delete this._container),this._map&&(this._map.off("move",this._update),this._map.off("click",this._onClickClose),this._map.off("remove",this.remove),this._map.off("mousemove"),delete this._map),this.fire(new t.Event("close")),this},i.prototype.getLngLat=function(){return this._lngLat},i.prototype.setLngLat=function(e){return this._lngLat=t.LngLat.convert(e),this._pos=null,this._trackPointer=!1,this._update(),this._map&&(this._map.on("move",this._update),this._map.off("mousemove"),this._container&&this._container.classList.remove("mapboxgl-popup-track-pointer"),this._map._canvasContainer.classList.remove("mapboxgl-track-pointer")),this},i.prototype.trackPointer=function(){var t=this
return this._trackPointer=!0,this._pos=null,this._update(),this._map&&(this._map.off("move",this._update),this._map.on("mousemove",function(e){t._update(e.point)}),this._map.on("drag",function(e){t._update(e.point)}),this._container&&this._container.classList.add("mapboxgl-popup-track-pointer"),this._map._canvasContainer.classList.add("mapboxgl-track-pointer")),this},i.prototype.getElement=function(){return this._container},i.prototype.setText=function(e){return this.setDOMContent(t.window.document.createTextNode(e))},i.prototype.setHTML=function(e){var r,i=t.window.document.createDocumentFragment(),n=t.window.document.createElement("body")
for(n.innerHTML=e;r=n.firstChild;)i.appendChild(r)
return this.setDOMContent(i)},i.prototype.getMaxWidth=function(){return this._container.style.maxWidth},i.prototype.setMaxWidth=function(t){return this.options.maxWidth=t,this._update(),this},i.prototype.setDOMContent=function(t){return this._createContent(),this._content.appendChild(t),this._update(),this},i.prototype._createContent=function(){this._content&&r.remove(this._content),this._content=r.create("div","mapboxgl-popup-content",this._container),this.options.closeButton&&(this._closeButton=r.create("button","mapboxgl-popup-close-button",this._content),this._closeButton.type="button",this._closeButton.setAttribute("aria-label","Close popup"),this._closeButton.innerHTML="&#215;",this._closeButton.addEventListener("click",this._onClickClose))},i.prototype._update=function(e){var i=this,n=this._lngLat||this._trackPointer
if(this._map&&n&&this._content&&(this._container||(this._container=r.create("div","mapboxgl-popup",this._map.getContainer()),this._tip=r.create("div","mapboxgl-popup-tip",this._container),this._container.appendChild(this._content),this.options.className&&this.options.className.split(" ").forEach(function(t){return i._container.classList.add(t)}),this._trackPointer&&this._container.classList.add("mapboxgl-popup-track-pointer")),this.options.maxWidth&&this._container.style.maxWidth!==this.options.maxWidth&&(this._container.style.maxWidth=this.options.maxWidth),this._map.transform.renderWorldCopies&&!this._trackPointer&&(this._lngLat=Vi(this._lngLat,this._pos,this._map.transform)),!this._trackPointer||e)){var o=this._pos=this._trackPointer&&e?e:this._map.project(this._lngLat),a=this.options.anchor,s=function e(r){if(r){if("number"==typeof r){var i=Math.round(Math.sqrt(.5*Math.pow(r,2)))
return{center:new t.Point(0,0),top:new t.Point(0,r),"top-left":new t.Point(i,i),"top-right":new t.Point(-i,i),bottom:new t.Point(0,-r),"bottom-left":new t.Point(i,-i),"bottom-right":new t.Point(-i,-i),left:new t.Point(r,0),right:new t.Point(-r,0)}}if(r instanceof t.Point||Array.isArray(r)){var n=t.Point.convert(r)
return{center:n,top:n,"top-left":n,"top-right":n,bottom:n,"bottom-left":n,"bottom-right":n,left:n,right:n}}return{center:t.Point.convert(r.center||[0,0]),top:t.Point.convert(r.top||[0,0]),"top-left":t.Point.convert(r["top-left"]||[0,0]),"top-right":t.Point.convert(r["top-right"]||[0,0]),bottom:t.Point.convert(r.bottom||[0,0]),"bottom-left":t.Point.convert(r["bottom-left"]||[0,0]),"bottom-right":t.Point.convert(r["bottom-right"]||[0,0]),left:t.Point.convert(r.left||[0,0]),right:t.Point.convert(r.right||[0,0])}}return e(new t.Point(0,0))}(this.options.offset)
if(!a){var l,u=this._container.offsetWidth,c=this._container.offsetHeight
l=o.y+s.bottom.y<c?["top"]:o.y>this._map.transform.height-c?["bottom"]:[],o.x<u/2?l.push("left"):o.x>this._map.transform.width-u/2&&l.push("right"),a=0===l.length?"bottom":l.join("-")}var p=o.add(s[a]).round()
r.setTransform(this._container,Ni[a]+" translate("+p.x+"px,"+p.y+"px)"),ji(this._container,a,"popup")}},i.prototype._onClickClose=function(){this.remove()},i}(t.Evented),tn={version:t.version,supported:e,setRTLTextPlugin:t.setRTLTextPlugin,Map:Ri,NavigationControl:Ui,GeolocateControl:Xi,AttributionControl:Ci,ScaleControl:Ki,FullscreenControl:Yi,Popup:Qi,Marker:Zi,Style:Fe,LngLat:t.LngLat,LngLatBounds:t.LngLatBounds,Point:t.Point,MercatorCoordinate:t.MercatorCoordinate,Evented:t.Evented,config:t.config,get accessToken(){return t.config.ACCESS_TOKEN},set accessToken(e){t.config.ACCESS_TOKEN=e},get baseApiUrl(){return t.config.API_URL},set baseApiUrl(e){t.config.API_URL=e},get workerCount(){return Dt.workerCount},set workerCount(t){Dt.workerCount=t},get maxParallelImageRequests(){return t.config.MAX_PARALLEL_IMAGE_REQUESTS},set maxParallelImageRequests(e){t.config.MAX_PARALLEL_IMAGE_REQUESTS=e},clearStorage:function(e){t.clearTileCache(e)},workerUrl:""}
return tn}),r}()}}])
