!function(e){function n(t){if(r[t])return r[t].exports;var a=r[t]={exports:{},id:t,loaded:!1};return e[t].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}var t=window.webpackJsonp;window.webpackJsonp=function(o,i){for(var u,c,l=0,p=[];l<o.length;l++)c=o[l],a[c]&&p.push.apply(p,a[c]),a[c]=0;for(u in i)e[u]=i[u];for(t&&t(o,i);p.length;)p.shift().call(null,n);if(i[0])return r[0]=0,n(0)};var r={},a={2:0};n.e=function(e,t){if(0===a[e])return t.call(null,n);if(void 0!==a[e])a[e].push(t);else{a[e]=[t];var r=document.getElementsByTagName("head")[0],o=document.createElement("script");o.type="text/javascript",o.charset="utf-8",o.async=!0,o.src=n.p+""+e+"."+({0:"page",1:"post"}[e]||e)+"-bundle.js",r.appendChild(o)}},n.m=e,n.c=r,n.p="build/js"}([,function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=function(){function e(){t(this,e)}return r(e,[{key:"init",value:function(){this.append()}},{key:"append",value:function(){var e=document.getElementsByTagName("body")[0],n=document.createTextNode("this is the code");e.appendChild(n)}}]),e}();n["default"]=a}]);