//Variables
var kids = 0;

var soldier = 0;
var soldierCost = 10;
var SoldierKidsPerSecond = 0;
var guns = 0;
var gunCost = 130;

var terrorist = 0;
var TerroristCost = 600;
var TerroristsKidsPerSecond = 0;
var bomb = 0;
var bombCost = 900;

var AntiVaxx = 0;
var AntiVaxxCost = 8000;
var AntiVaxxKidsPerSecond = 0;
var SocialMedia = 0;
var SocialMediaCost = 10000;

var Pedophile = 0;
var PedoCost = 35000;
var PedoKidsPerSecond = 0;
var PedoTrain = 0;
var PedoTrainCost = 99000;

//Unlockables
document.getElementById("UnlockTerrorist").style.display = "none"
document.getElementById("UnlockAntiVaxx").style.display = "none"
document.getElementById("UnlockPedos").style.display = "none"



function Unlockable() {
  if (kids >= 100) {
    document.getElementById("UnlockTerrorist").style.display = "inline-block"
  }
  if (kids >= 1000) {
    document.getElementById("UnlockAntiVaxx").style.display = "inline-block"
  if (kids >= 10000) {
    document.getElementById("UnlockPedos").style.display = "inline-block"
  }

  }
}


//Update fonction
function update() {
   document.getElementById("soldierCount").innerHTML = soldier;
  document.getElementById("kidCount").innerHTML = prettify(kids);
  document.getElementById("soldierCost").innerHTML = prettify(soldierCost);
  document.getElementById("soldierSpeed").innerHTML = SoldierKidsPerSecond;
  document.getElementById("gunCost").innerHTML = gunCost;
    document.getElementById("soldierSpeed").innerHTML = SoldierKidsPerSecond;
    document.getElementById("terroristCount").innerHTML = terrorist;
  document.getElementById("kidCount").innerHTML = prettify(kids);
  document.getElementById("terroristCost").innerHTML = prettify(TerroristCost);
  document.getElementById("terroristSpeed").innerHTML = (TerroristsKidsPerSecond);
  document.getElementById("bombCost").innerHTML = bombCost; 
    document.getElementById("terroristSpeed").innerHTML = TerroristsKidsPerSecond;
    document.getElementById("AntiVaxxCount").innerHTML = AntiVaxx;
  document.getElementById("kidCount").innerHTML = prettify(kids);
  document.getElementById("AntiVaxxCost").innerHTML = prettify(AntiVaxxCost);
  document.getElementById("AntiVaxxSpeed").innerHTML = (AntiVaxxKidsPerSecond);   
     
}


function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}

function killKid() {
  kids = kids + 1;
  document.getElementById("kidCount").innerHTML = prettify(kids);
}







//Soldier & Gun upgrades
function buySoldier(number) {
  if (kids >= soldierCost) {
    soldier = soldier + number;
    SoldierKidsPerSecond = SoldierKidsPerSecond + number;
    soldierCost = ((soldier + 1) * 35)
    kids = kids - soldierCost;
  update();
  playSoundSoldier();

  }
}

function buyGun() {
  if (kids >= gunCost) {
    guns = guns + 1;
    kids = kids - gunCost;
    SoldierKidsPerSecond = SoldierKidsPerSecond * 2;
    gunCost = ((gunCost + 1) * 8);
    update(); 
    playSoundGun()
  }
}


//Terrorist & Bomb upgrades
function buyTerrorist(number) {
  if (kids >= TerroristCost) {
    terrorist = terrorist + number;
    TerroristsKidsPerSecond = TerroristsKidsPerSecond + (5 * number);
    kids = kids - TerroristCost;
    TerroristCost = TerroristCost + ((terrorist + 1) * 180)
  update();
  playSoundTerrorist()
  }
}

function buyBomb() {
  if (kids >= bombCost) {
    bomb = bomb + 1;
    kids = kids - bombCost;
    TerroristsKidsPerSecond = TerroristsKidsPerSecond * 2;
    bombCost = ((bombCost + 1) * 8);
    update();
  }
}

//Antivaxx & Social Media upgrades
function buyAntiVaxx(number) {
  if (kids >= AntiVaxxCost) {
    AntiVaxx = AntiVaxx + number;
    AntiVaxxKidsPerSecond = AntiVaxxKidsPerSecond + (25 * number);
    kids = kids - AntiVaxxCost;
    AntiVaxxCost = AntiVaxxCost + ((AntiVaxx + 1) * 380)
  update();

  }
}

function buySocialMedia() {
  if (kids >= SocialMediaCost) {
    SocialMedia = SocialMedia + 1;
    kids = kids - SocialMediaCost;
    AntiVaxxKidsPerSecond = AntiVaxxKidsPerSecond * 2;
    SocialMediaCost = ((SocialMediaCost + 1) * 8);
    update();
    playSoundSocial();
  }
}


//Pedophile upgrade
function buyPedo(number) {
  if (kids >= PedoCost) {
    Pedophile = Pedophile + 1;
    PedoKidsPerSecond = PedoKidsPerSecond + (50 * number);
    kids = kids - PedoCost;
    PedoCost = PedoCost + ((Pedophile + 1) * 580)
    document.getElementById("Pedophile").innerHTML = Pedophile;
    document.getElementById("PedoCost").innerHTML = PedoCost;
    document.getElementById("PedoSpeed").innerHTML = PedoKidsPerSecond;
    update();
  

  }
}

function buyPedoTrain() {
  if (kids >= PedoTrainCost) {
    PedoTrain = PedoTrain + 1;
    kids = kids - PedoTrainCost;
    PedoKidsPerSecond = PedoKidsPerSecond * 2;
    PedoTrainCost = ((PedoTrainCost + 1) * 8);
    document.getElementById("PedoTrainCost").innerHTML = PedoTrainCost; 
    document.getElementById("PedoSpeed").innerHTML = PedoKidsPerSecond
    playSoundSocial();
  }
}



//Ticks & kids per second

function Tick() {
  kids = kids + SoldierKidsPerSecond + TerroristsKidsPerSecond + AntiVaxxKidsPerSecond + PedoKidsPerSecond;
  document.getElementById("kidCount").innerHTML = prettify(kids);
  ;
}

window.setInterval(function(){
	
	Tick();
  Unlockable();
  
	
}, 1000);

//Save & Load




//Save & Load feature
























/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
 * Contains: cssanimations | csstransforms | csstransforms3d | iepp | cssclasses | teststyles | testprop | testallprops | prefixes | domprefixes | load
 */
;window.Modernizr=function(a,b,c){function C(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+o.join(c+" ")+c).split(" ");return B(d,b)}function B(a,b){for(var d in a)if(k[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function A(a,b){return!!~(""+a).indexOf(b)}function z(a,b){return typeof a===b}function y(a,b){return x(n.join(a+";")+(b||""))}function x(a){k.cssText=a}var d="2.0.6",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l,m=Object.prototype.toString,n=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),o="Webkit Moz O ms Khtml".split(" "),p={},q={},r={},s=[],t=function(a,c,d,e){var f,h,j,k=b.createElement("div");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:i+(d+1),k.appendChild(j);f=["&shy;","<style>",a,"</style>"].join(""),k.id=i,k.innerHTML+=f,g.appendChild(k),h=c(k,a),k.parentNode.removeChild(k);return!!h},u,v={}.hasOwnProperty,w;!z(v,c)&&!z(v.call,c)?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],c)};var D=function(a,c){var d=a.join(""),f=c.length;t(d,function(a,c){var d=b.styleSheets[b.styleSheets.length-1],g=d.cssRules&&d.cssRules[0]?d.cssRules[0].cssText:d.cssText||"",h=a.childNodes,i={};while(f--)i[h[f].id]=h[f];e.csstransforms3d=i.csstransforms3d.offsetLeft===9},f,c)}([,["@media (",n.join("transform-3d),("),i,")","{#csstransforms3d{left:9px;position:absolute}}"].join("")],[,"csstransforms3d"]);p.cssanimations=function(){return C("animationName")},p.csstransforms=function(){return!!B(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},p.csstransforms3d=function(){var a=!!B(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);a&&"webkitPerspective"in g.style&&(a=e.csstransforms3d);return a};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));x(""),j=l=null,a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function s(a){var b=-1;while(++b<g)a.createElement(f[b])}a.iepp=a.iepp||{};var d=a.iepp,e=d.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",f=e.split("|"),g=f.length,h=new RegExp("(^|\\s)("+e+")","gi"),i=new RegExp("<(/*)("+e+")","gi"),j=/^\s*[\{\}]\s*$/,k=new RegExp("(^|[^\\n]*?\\s)("+e+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),l=b.createDocumentFragment(),m=b.documentElement,n=m.firstChild,o=b.createElement("body"),p=b.createElement("style"),q=/print|all/,r;d.getCSS=function(a,b){if(a+""===c)return"";var e=-1,f=a.length,g,h=[];while(++e<f){g=a[e];if(g.disabled)continue;b=g.media||b,q.test(b)&&h.push(d.getCSS(g.imports,b),g.cssText),b="all"}return h.join("")},d.parseCSS=function(a){var b=[],c;while((c=k.exec(a))!=null)b.push(((j.exec(c[1])?"\n":c[1])+c[2]+c[3]).replace(h,"$1.iepp_$2")+c[4]);return b.join("\n")},d.writeHTML=function(){var a=-1;r=r||b.body;while(++a<g){var c=b.getElementsByTagName(f[a]),d=c.length,e=-1;while(++e<d)c[e].className.indexOf("iepp_")<0&&(c[e].className+=" iepp_"+f[a])}l.appendChild(r),m.appendChild(o),o.className=r.className,o.id=r.id,o.innerHTML=r.innerHTML.replace(i,"<$1font")},d._beforePrint=function(){p.styleSheet.cssText=d.parseCSS(d.getCSS(b.styleSheets,"all")),d.writeHTML()},d.restoreHTML=function(){o.innerHTML="",m.removeChild(o),m.appendChild(r)},d._afterPrint=function(){d.restoreHTML(),p.styleSheet.cssText=""},s(b),s(l);d.disablePP||(n.insertBefore(p,n.firstChild),p.media="print",p.className="iepp-printshim",a.attachEvent("onbeforeprint",d._beforePrint),a.attachEvent("onafterprint",d._afterPrint))}(a,b),e._version=d,e._prefixes=n,e._domPrefixes=o,e.testProp=function(a){return B([a])},e.testAllProps=C,e.testStyles=t,g.className=g.className.replace(/\bno-js\b/,"")+(f?" js "+s.join(" "):"");return e}(this,this.document),function(a,b,c){function k(a){return!a||a=="loaded"||a=="complete"}function j(){var a=1,b=-1;while(p.length- ++b)if(p[b].s&&!(a=p[b].r))break;a&&g()}function i(a){var c=b.createElement("script"),d;c.src=a.s,c.onreadystatechange=c.onload=function(){!d&&k(c.readyState)&&(d=1,j(),c.onload=c.onreadystatechange=null)},m(function(){d||(d=1,j())},H.errorTimeout),a.e?c.onload():n.parentNode.insertBefore(c,n)}function h(a){var c=b.createElement("link"),d;c.href=a.s,c.rel="stylesheet",c.type="text/css";if(!a.e&&(w||r)){var e=function(a){m(function(){if(!d)try{a.sheet.cssRules.length?(d=1,j()):e(a)}catch(b){b.code==1e3||b.message=="security"||b.message=="denied"?(d=1,m(function(){j()},0)):e(a)}},0)};e(c)}else c.onload=function(){d||(d=1,m(function(){j()},0))},a.e&&c.onload();m(function(){d||(d=1,j())},H.errorTimeout),!a.e&&n.parentNode.insertBefore(c,n)}function g(){var a=p.shift();q=1,a?a.t?m(function(){a.t=="c"?h(a):i(a)},0):(a(),j()):q=0}function f(a,c,d,e,f,h){function i(){!o&&k(l.readyState)&&(r.r=o=1,!q&&j(),l.onload=l.onreadystatechange=null,m(function(){u.removeChild(l)},0))}var l=b.createElement(a),o=0,r={t:d,s:c,e:h};l.src=l.data=c,!s&&(l.style.display="none"),l.width=l.height="0",a!="object"&&(l.type=d),l.onload=l.onreadystatechange=i,a=="img"?l.onerror=i:a=="script"&&(l.onerror=function(){r.e=r.r=1,g()}),p.splice(e,0,r),u.insertBefore(l,s?null:n),m(function(){o||(u.removeChild(l),r.r=r.e=o=1,j())},H.errorTimeout)}function e(a,b,c){var d=b=="c"?z:y;q=0,b=b||"j",C(a)?f(d,a,b,this.i++,l,c):(p.splice(this.i++,0,a),p.length==1&&g());return this}function d(){var a=H;a.loader={load:e,i:0};return a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=r&&!s,u=s?l:n.parentNode,v=a.opera&&o.call(a.opera)=="[object Opera]",w="webkitAppearance"in l.style,x=w&&"async"in b.createElement("script"),y=r?"object":v||x?"img":"script",z=w?"img":y,A=Array.isArray||function(a){return o.call(a)=="[object Array]"},B=function(a){return Object(a)===a},C=function(a){return typeof a=="string"},D=function(a){return o.call(a)=="[object Function]"},E=[],F={},G,H;H=function(a){function f(a){var b=a.split("!"),c=E.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h;for(h=0;h<e;h++)g=F[b[h]],g&&(f=g(f));for(h=0;h<c;h++)f=E[h](f);return f}function e(a,b,e,g,h){var i=f(a),j=i.autoCallback;if(!i.bypass){b&&(b=D(b)?b:b[a]||b[g]||b[a.split("/").pop().split("?")[0]]);if(i.instead)return i.instead(a,b,e,g,h);e.load(i.url,i.forceCSS||!i.forceJS&&/css$/.test(i.url)?"c":c,i.noexec),(D(b)||D(j))&&e.load(function(){d(),b&&b(i.origUrl,h,g),j&&j(i.origUrl,h,g)})}}function b(a,b){function c(a){if(C(a))e(a,h,b,0,d);else if(B(a))for(i in a)a.hasOwnProperty(i)&&e(a[i],h,b,i,d)}var d=!!a.test,f=d?a.yep:a.nope,g=a.load||a.both,h=a.callback,i;c(f),c(g),a.complete&&b.load(a.complete)}var g,h,i=this.yepnope.loader;if(C(a))e(a,0,i,0);else if(A(a))for(g=0;g<a.length;g++)h=a[g],C(h)?e(h,0,i,0):A(h)?H(h):B(h)&&b(h,i);else B(a)&&b(a,i)},H.addPrefix=function(a,b){F[a]=b},H.addFilter=function(a){E.push(a)},H.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",G=function(){b.removeEventListener("DOMContentLoaded",G,0),b.readyState="complete"},0)),a.yepnope=d()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};