!function($__global){$__global.upgradeSystemLoader=function(){function e(e){var t=String(e).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@\/?#]*(?::[^:@\/?#]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);return t?{href:t[0]||"",protocol:t[1]||"",authority:t[2]||"",host:t[3]||"",hostname:t[4]||"",port:t[5]||"",pathname:t[6]||"",search:t[7]||"",hash:t[8]||""}:null}function t(t,a){function r(e){var t=[];return e.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(e){"/.."===e?t.pop():t.push(e)}),t.join("").replace(/^\//,"/"===e.charAt(0)?"/":"")}return a=e(a||""),t=e(t||""),a&&t?(a.protocol||t.protocol)+(a.protocol||a.authority?a.authority:t.authority)+r(a.protocol||a.authority||"/"===a.pathname.charAt(0)?a.pathname:a.pathname?(t.authority&&!t.pathname?"/":"")+t.pathname.slice(0,t.pathname.lastIndexOf("/")+1)+a.pathname:t.pathname)+(a.protocol||a.authority||a.pathname?a.search:a.search||t.search)+a.hash:null}function a(e){"undefined"==typeof h&&(h=Array.prototype.indexOf);var t=document.getElementsByTagName("head")[0];e.onScriptLoad=function(){},e.fetch=function(a){return new Promise(function(r,n){function o(){l.readyState&&"loaded"!=l.readyState&&"complete"!=l.readyState||(s(),e.onScriptLoad(a),a.metadata.registered||n(a.address+" did not call System.register or AMD define"),r(""))}function i(e){s(),n(e)}function s(){l.detachEvent?l.detachEvent("onreadystatechange",o):(l.removeEventListener("load",o,!1),l.removeEventListener("error",i,!1)),t.removeChild(l)}var l=document.createElement("script");l.async=!0,l.attachEvent?l.attachEvent("onreadystatechange",o):(l.addEventListener("load",o,!1),l.addEventListener("error",i,!1)),l.src=a.address,t.appendChild(l)})},e.scriptLoader=!0}function r(e){function t(e,t){var a=e.meta&&e.meta[t.name];if(a)for(var r in a)t.metadata[r]=t.metadata[r]||a[r]}var a=/^(\s*\/\*.*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)+/,r=/\/\*.*\*\/|\/\/[^\n]*|"[^"]+"\s*;?|'[^']+'\s*;?/g;e.meta={};var n=e.locate;e.locate=function(e){return t(this,e),n.call(this,e)};var o=e.translate;e.translate=function(e){var n=e.source.match(a);if(n)for(var i=n[0].match(r),s=0;s<i.length;s++){var l=i[s].length,u=i[s].substr(0,1);if(";"==i[s].substr(l-1,1)&&l--,'"'==u||"'"==u){var d=i[s].substr(1,i[s].length-3),c=d.substr(0,d.indexOf(" "));if(c){var f=d.substr(c.length+1,d.length-c.length-1);e.metadata[c]instanceof Array?e.metadata[c].push(f):e.metadata[c]||(e.metadata[c]=f)}}}return t(this,e),o.call(this,e)}}function n(e){function a(e){var a=this;"@traceur"==e.name&&(m=p);var r,n=e.source.lastIndexOf("\n");-1!=n&&"//# sourceMappingURL="==e.source.substr(n+1,21)&&(r=e.source.substr(n+22,e.source.length-n-22),"undefined"!=typeof t&&(r=t(e.address,r))),__eval(e.source,e.address,r),"@traceur"==e.name&&(a.global.traceurSystem=a.global.System,a.global.System=m)}function r(e){for(var t=[],a=0,r=e.length;r>a;a++)-1==h.call(t,e[a])&&t.push(e[a]);return t}function n(t,a,r,n){"string"!=typeof t&&(n=r,r=a,a=t,t=null),v=!0;var o;if(o="boolean"==typeof r?{declarative:!1,deps:a,execute:n,executingRequire:r}:{declarative:!0,deps:a,declare:r},t)o.name=t,e.defined[t]||(e.defined[t]=o);else if(o.declarative){if(g)throw new TypeError("Multiple anonymous System.register calls in the same module file.");g=o}}function o(e){if(!e.register){e.register=n,e.defined||(e.defined={});var t=e.onScriptLoad;e.onScriptLoad=function(e){t(e),g&&(e.metadata.entry=g),v&&(e.metadata.format=e.metadata.format||"register",e.metadata.registered=!0)}}}function i(e,t,a){if(a[e.groupIndex]=a[e.groupIndex]||[],-1==h.call(a[e.groupIndex],e)){a[e.groupIndex].push(e);for(var r=0,n=e.normalizedDeps.length;n>r;r++){var o=e.normalizedDeps[r],s=t.defined[o];if(s&&!s.evaluated){var l=e.groupIndex+(s.declarative!=e.declarative);if(void 0===s.groupIndex||s.groupIndex<l){if(s.groupIndex&&(a[s.groupIndex].splice(h.call(a[s.groupIndex],s),1),0==a[s.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");s.groupIndex=l}i(s,t,a)}}}}function s(e,t){var a=t.defined[e];a.groupIndex=0;var r=[];i(a,t,r);for(var n=!!a.declarative==r.length%2,o=r.length-1;o>=0;o--){for(var s=r[o],l=0;l<s.length;l++){var d=s[l];n?u(d,t):c(d,t)}n=!n}}function l(e){return b[e]||(b[e]={name:e,dependencies:[],exports:{},importers:[]})}function u(e,t){if(!e.module){var a=e.module=l(e.name),r=e.module.exports,n=e.declare.call(t.global,function(e,t){a.locked=!0,r[e]=t;for(var n=0,o=a.importers.length;o>n;n++){var i=a.importers[n];if(!i.locked){var s=h.call(i.dependencies,a);i.setters[s](r)}}return a.locked=!1,t});if(a.setters=n.setters,a.execute=n.execute,!a.setters||!a.execute)throw new TypeError("Invalid System.register form for "+e.name);for(var o=0,i=e.normalizedDeps.length;i>o;o++){var s,d=e.normalizedDeps[o],c=t.defined[d],f=b[d];f?s=f.exports:c&&!c.declarative?s={"default":c.module.exports,__useDefault:!0}:c?(u(c,t),f=c.module,s=f.exports):s=t.get(d),f&&f.importers?(f.importers.push(a),a.dependencies.push(f)):a.dependencies.push(null),a.setters[o]&&a.setters[o](s)}}}function d(e,t){var a,r=t.defined[e];if(r)r.declarative?f(e,[],t):r.evaluated||c(r,t),a=r.module.exports;else if(a=t.get(e),!a)throw new Error("Unable to load dependency "+e+".");return(!r||r.declarative)&&a&&a.__useDefault?a["default"]:a}function c(e,t){if(!e.module){var a={},r=e.module={exports:a,id:e.name};if(!e.executingRequire)for(var n=0,o=e.normalizedDeps.length;o>n;n++){var i=e.normalizedDeps[n],s=t.defined[i];s&&c(s,t)}e.evaluated=!0;var l=e.execute.call(t.global,function(a){for(var r=0,n=e.deps.length;n>r;r++)if(e.deps[r]==a)return d(e.normalizedDeps[r],t);throw new TypeError("Module "+a+" not declared as a dependency.")},a,r);l&&(r.exports=l)}}function f(e,t,a){var r=a.defined[e];if(!r.evaluated&&r.declarative){t.push(e);for(var n=0,o=r.normalizedDeps.length;o>n;n++){var i=r.normalizedDeps[n];-1==h.call(t,i)&&(a.defined[i]?f(i,t,a):a.get(i))}r.evaluated||(r.evaluated=!0,r.module.execute.call(a.global))}}"undefined"==typeof h&&(h=Array.prototype.indexOf),"undefined"==typeof __eval&&(__eval=0||eval);var m;e.__exec=a;var g,v;o(e);var b={},y=/System\.register/,x=e.fetch;e.fetch=function(e){var t=this;return o(t),t.defined[e.name]?(e.metadata.format="defined",""):(g=null,v=!1,x.call(t,e))};var _=e.translate;e.translate=function(e){return this.register=n,this.__exec=a,e.metadata.deps=e.metadata.deps||[],Promise.resolve(_.call(this,e)).then(function(t){return(e.metadata.init||e.metadata.exports)&&(e.metadata.format=e.metadata.format||"global"),("register"==e.metadata.format||!e.metadata.format&&e.source.match(y))&&(e.metadata.format="register"),t})};var S=e.instantiate;e.instantiate=function(e){var t,a=this;if(a.defined[e.name])t=a.defined[e.name],t.deps=t.deps.concat(e.metadata.deps);else if(e.metadata.entry)t=e.metadata.entry;else if(e.metadata.execute)t={declarative:!1,deps:e.metadata.deps||[],execute:e.metadata.execute,executingRequire:e.metadata.executingRequire};else if("register"==e.metadata.format){g=null,v=!1;var o=a.global.System=a.global.System||a,i=o.register;if(o.register=n,a.__exec(e),o.register=i,g&&(t=g),!t&&o.defined[e.name]&&(t=o.defined[e.name]),!v&&!e.metadata.registered)throw new TypeError(e.name+" detected as System.register but didn't execute.")}if(!t&&"es6"!=e.metadata.format)return{deps:[],execute:function(){return a.newModule({})}};if(!t)return S.call(this,e);a.defined[e.name]=t,t.deps=r(t.deps),t.name=e.name;for(var l=[],u=0,d=t.deps.length;d>u;u++)l.push(Promise.resolve(a.normalize(t.deps[u],e.name)));return Promise.all(l).then(function(r){return t.normalizedDeps=r,{deps:t.deps,execute:function(){s(e.name,a),f(e.name,[],a),a.defined[e.name]=void 0;var r=a.newModule(t.declarative?t.module.exports:{"default":t.module.exports,__useDefault:!0});return r}}})}}function o(e){var a=e["import"];e["import"]=function(e,t){return a.call(this,e,t).then(function(e){return e.__useDefault?e["default"]:e})},e.set("@empty",e.newModule({})),"undefined"!=typeof require&&(e._nodeRequire=require),e.config=function(e){for(var t in e){var a=e[t];if("object"!=typeof a||a instanceof Array)this[t]=a;else{this[t]=this[t]||{};for(var r in a)this[t][r]=a[r]}}};var r;if("undefined"==typeof window&&"undefined"==typeof WorkerGlobalScope)r="file:"+process.cwd()+"/";else if("undefined"==typeof window)r=e.global.location.href;else if(r=document.baseURI,!r){var n=document.getElementsByTagName("base");r=n[0]&&n[0].href||window.location.href}var o,i=e.locate;e.locate=function(e){return this.baseURL!=o&&(o=t(r,this.baseURL),"/"!=o.substr(o.length-1,1)&&(o+="/"),this.baseURL=o),Promise.resolve(i.call(this,e))};var s=/(^\s*|[}\);\n]\s*)(import\s+(['"]|(\*\s+as\s+)?[^"'\(\)\n;]+\s+from\s+['"]|\{)|export\s+\*\s+from\s+["']|export\s+(\{|default|function|class|var|const|let|async\s+function))/,l=/\$traceurRuntime/,u=e.translate;e.translate=function(e){var t=this;if("@traceur"==e.name||"@traceur-runtime"==e.name)return u.call(t,e);if(("es6"==e.metadata.format||!e.metadata.format&&e.source.match(s))&&(e.metadata.format="es6",!t.global.traceur))return t["import"]("@traceur").then(function(){return u.call(t,e)});if(!t.global.$traceurRuntime&&e.source.match(l)){var a=$__global.System;return t["import"]("@traceur-runtime").then(function(){return $__global.System=a,u.call(t,e)})}return u.call(t,e)};var d=e.instantiate;e.instantiate=function(e){var t=this;return"@traceur"==e.name||"@traceur-runtime"==e.name?(t.__exec(e),{deps:[],execute:function(){return t.newModule({})}}):d.call(t,e)}}function i(e){function t(e,t){for(var a=e.split(".");a.length;)t=t[a.shift()];return t}function a(e){if(!e.has("@@global-helpers")){var a,r,n=e.global.hasOwnProperty,o={};e.set("@@global-helpers",e.newModule({prepareGlobal:function(t,i){for(var s=0;s<i.length;s++){var l=o[i[s]];if(l)for(var u in l)e.global[u]=l[u]}a={},r=["indexedDB","sessionStorage","localStorage","clipboardData","frames","webkitStorageInfo","toolbar","statusbar","scrollbars","personalbar","menubar","locationbar","webkitIndexedDB"];for(var d in e.global)if(-1==h.call(r,d)&&(!n||e.global.hasOwnProperty(d)))try{a[d]=e.global[d]}catch(c){r.push(d)}},retrieveGlobal:function(i,s,l){var u,d,c={};if(l){for(var f=[],m=0;m<deps.length;m++)f.push(require(deps[m]));u=l.apply(e.global,f)}else if(s){var p=s.split(".")[0];u=t(s,e.global),c[p]=e.global[p]}else for(var g in e.global)-1==h.call(r,g)&&(n&&!e.global.hasOwnProperty(g)||g==e.global||a[g]==e.global[g]||(c[g]=e.global[g],u?u!==e.global[g]&&(d=!0):u!==!1&&(u=e.global[g])));return o[i]=c,d?c:u}}))}}a(e);var r=e.instantiate;e.instantiate=function(e){var t=this;a(t);var n=e.metadata.exports;return e.metadata.format||(e.metadata.format="global"),"global"==e.metadata.format&&(e.metadata.execute=function(a,r,o){t.get("@@global-helpers").prepareGlobal(o.id,e.metadata.deps),n&&(e.source+='\nthis["'+n+'"] = '+n+";");var i=t.global.define;return t.global.define=void 0,t.global.module=void 0,t.global.exports=void 0,t.__exec(e),t.global.define=i,t.get("@@global-helpers").retrieveGlobal(o.id,n,e.metadata.init)}),r.call(t,e)}}function s(e){function t(e){r.lastIndex=0;var t=[];e.length/e.split("\n").length<200&&(e=e.replace(n,""));for(var a;a=r.exec(e);)t.push(a[1].substr(1,a[1].length-2));return t}var a=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.]|module\.)(exports\s*\[['"]|\exports\s*\.)|(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])module\.exports\s*\=/,r=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF."'])require\s*\(\s*("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*')\s*\)/g,n=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,o=e.instantiate;e.instantiate=function(n){return n.metadata.format||(a.lastIndex=0,r.lastIndex=0,(r.exec(n.source)||a.exec(n.source))&&(n.metadata.format="cjs")),"cjs"==n.metadata.format&&(n.metadata.deps=n.metadata.deps?n.metadata.deps.concat(t(n.source)):n.metadata.deps,n.metadata.executingRequire=!0,n.metadata.execute=function(t,a,r){var o=(n.address||"").split("/");o.pop(),o=o.join("/"),p._nodeRequire&&(o=o.substr(5)),e.global._g={global:e.global,exports:a,module:r,require:t,__filename:p._nodeRequire?n.address.substr(5):n.address,__dirname:o};var i="(function(global, exports, module, require, __filename, __dirname) { "+n.source+"\n}).call(_g.exports, _g.global, _g.exports, _g.module, _g.require, _g.__filename, _g.__dirname);",s=e.global.define;e.global.define=void 0,e.__exec({name:n.name,address:n.address,source:i}),e.global.define=s,e.global._g=void 0}),o.call(this,n)}}function l(e){function t(e,t){e=e.replace(d,"");var a=e.match(m),r=(a[1].split(",")[t]||"require").replace(p,""),n=g[r]||(g[r]=new RegExp(c+r+f,"g"));n.lastIndex=0;for(var o,i=[];o=n.exec(e);)i.push(o[2]||o[3]);return i}function a(e,t,r,n){var o=this;if("object"==typeof e&&!(e instanceof Array))return a.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if(!(e instanceof Array)){if("string"==typeof e){var i=o.get(e);return i.__useDefault?i["default"]:i}throw new TypeError("Invalid require")}Promise.all(e.map(function(e){return o["import"](e,n)})).then(function(e){t&&t.apply(null,e)},r)}function r(e,t,r){return function(n,o,i){return"string"==typeof n?t(n):a.call(r,n,o,i,{name:e})}}function n(e){function a(a,n,o){"string"!=typeof a&&(o=n,n=a,a=null),n instanceof Array||(o=n,n=["require","exports","module"]),"function"!=typeof o&&(o=function(e){return function(){return e}}(o)),void 0===n[n.length-1]&&n.pop();var s,l,u;if(-1!=(s=h.call(n,"require"))){n.splice(s,1);var d=o.toString();n=n.concat(t(d,s))}-1!=(l=h.call(n,"exports"))&&n.splice(l,1),-1!=(u=h.call(n,"module"))&&n.splice(u,1);var c={deps:n,execute:function(t,a,d){for(var c=[],f=0;f<n.length;f++)c.push(t(n[f]));d.uri=e.baseURL+d.id,d.config=function(){},-1!=u&&c.splice(u,0,d),-1!=l&&c.splice(l,0,a),-1!=s&&c.splice(s,0,r(d.id,t,e));var m=o.apply(i,c);return"undefined"==typeof m&&d&&(m=d.exports),"undefined"!=typeof m?m:void 0}};if(a)v=0!=n.length||v||b?null:c,b=!0,e.register(a,c.deps,!1,c.execute);else{if(v)throw new TypeError("Multiple defines for anonymous module");v=c}}var n=e.onScriptLoad;e.onScriptLoad=function(e){n(e),(v||b)&&(e.metadata.format="defined",e.metadata.registered=!0),v&&(e.metadata.deps=e.metadata.deps?e.metadata.deps.concat(v.deps):v.deps,e.metadata.execute=v.execute)},a.amd={},e.amdDefine=a}function o(e){e.amdDefine||n(e),v=null,b=null;var t=e.global;y=t.module,x=t.exports,_=t.define,t.module=void 0,t.exports=void 0,t.define&&t.define===e.amdDefine||(t.define=e.amdDefine)}function s(e){var t=e.global;t.define=_,t.module=y,t.exports=x}var l="undefined"!=typeof module&&module.exports,u=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])define\s*\(\s*("[^"]+"\s*,\s*|'[^']+'\s*,\s*)?\s*(\[(\s*(("[^"]+"|'[^']+')\s*,|\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*(\s*("[^"]+"|'[^']+')\s*,?)?(\s*(\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*\s*\]|function\s*|{|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*\))/,d=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,c="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",f="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",m=/\(([^\)]*)\)/,p=/^\s+|\s+$/g,g={};e.amdRequire=a;var v,b,y,x,_;if(n(e),e.scriptLoader){var S=e.fetch;e.fetch=function(e){return o(this),S.call(this,e)}}var w=e.instantiate;e.instantiate=function(e){var t=this;if("amd"==e.metadata.format||!e.metadata.format&&e.source.match(u)){if(e.metadata.format="amd",t.execute!==!1&&(o(t),t.__exec(e),s(t),!v&&!b&&!l))throw new TypeError("AMD module "+e.name+" did not define");v&&(e.metadata.deps=e.metadata.deps?e.metadata.deps.concat(v.deps):v.deps,e.metadata.execute=v.execute)}return w.call(t,e)}}function u(e){function t(e,t){return e.length<t.length?!1:e.substr(0,t.length)!=t?!1:e[t.length]&&"/"!=e[t.length]?!1:!0}function a(e){for(var t=1,a=0,r=e.length;r>a;a++)"/"===e[a]&&t++;return t}function r(e,t,a){return a+e.substr(t)}function n(e,n,o){var i,s,l,u,d=0,c=0;if(n)for(var f in o.map){var m=o.map[f];if("object"==typeof m&&t(n,f)&&(l=a(f),!(c>=l)))for(var p in m)t(e,p)&&(u=a(p),d>=u||(i=p,d=u,s=f,c=l))}if(i)return r(e,i.length,o.map[s][i]);for(var f in o.map){var m=o.map[f];if("string"==typeof m&&t(e,f)){var u=a(f);d>=u||(i=f,d=u)}}return i?r(e,i.length,o.map[i]):e}e.map=e.map||{};var o=e.normalize;e.normalize=function(e,t,a){var r=this;r.map||(r.map={});var i=!1;return"/"==e.substr(e.length-1,1)&&(i=!0,e+="#"),Promise.resolve(o.call(r,e,t,a)).then(function(e){if(e=n(e,t,r),i){var a=e.split("/");a.pop();var o=a.pop();a.push(o),a.push(o),e=a.join("/")}return e})}}function d(e){"undefined"==typeof h&&(h=Array.prototype.indexOf);var t=e.normalize;e.normalize=function(e,a,r){var n,o=this;return a&&-1!=(n=a.indexOf("!"))&&(a=a.substr(0,n)),Promise.resolve(t.call(o,e,a,r)).then(function(e){var t=e.lastIndexOf("!");if(-1!=t){var n=e.substr(0,t),i=e.substr(t+1)||n.substr(n.lastIndexOf(".")+1);return new Promise(function(e){e(o.normalize(i,a,r))}).then(function(e){return i=e,o.normalize(n,a,r)}).then(function(e){return e+"!"+i})}return e})};var a=e.locate;e.locate=function(e){var t=this,r=e.name;if(this.defined&&this.defined[r])return a.call(this,e);var n=r.lastIndexOf("!");if(-1!=n){var o=r.substr(n+1);e.name=r.substr(0,n);var i=t.pluginLoader||t;return i["import"](o).then(function(){var a=i.get(o);return a=a["default"]||a,a.build===!1&&t.pluginLoader&&(e.metadata.build=!1),e.metadata.plugin=a,e.metadata.pluginName=o,e.metadata.pluginArgument=e.name,a.locate?a.locate.call(t,e):Promise.resolve(t.locate(e)).then(function(e){return e.substr(0,e.length-3)})})}return a.call(this,e)};var r=e.fetch;e.fetch=function(e){var t=this;return e.metadata.build===!1?"":e.metadata.plugin&&e.metadata.plugin.fetch&&!e.metadata.pluginFetchCalled?(e.metadata.pluginFetchCalled=!0,e.metadata.plugin.fetch.call(t,e,r)):r.call(t,e)};var n=e.translate;e.translate=function(e){var t=this;return e.metadata.plugin&&e.metadata.plugin.translate?Promise.resolve(e.metadata.plugin.translate.call(t,e)).then(function(a){return a&&(e.source=a),n.call(t,e)}):n.call(t,e)};var o=e.instantiate;e.instantiate=function(e){var t=this;return e.metadata.plugin&&e.metadata.plugin.instantiate?Promise.resolve(e.metadata.plugin.instantiate.call(t,e)).then(function(a){return e.metadata.format="defined",e.metadata.execute=function(){return a},o.call(t,e)}):e.metadata.plugin&&e.metadata.plugin.build===!1?(e.metadata.format="defined",e.metadata.deps.push(e.metadata.pluginName),e.metadata.execute=function(){return t.newModule({})},o.call(t,e)):o.call(t,e)}}function c(e){"undefined"==typeof h&&(h=Array.prototype.indexOf),e.bundles=e.bundles||{};var t=e.fetch;e.fetch=function(e){var a=this;if(a.trace)return t.call(this,e);a.bundles||(a.bundles={});for(var r in a.bundles)if(-1!=h.call(a.bundles[r],e.name))return Promise.resolve(a.normalize(r)).then(function(e){return a.bundles[e]=a.bundles[e]||a.bundles[r],a.meta=a.meta||{},a.meta[e]=a.meta[e]||{},a.meta[e].bundle=!0,a.load(e)}).then(function(){return""});return t.call(this,e)}}function f(e){function t(e){return parseInt(e,10)}function a(e){var a=e.match(s);return a?{major:t(a[1]),minor:t(a[2]),patch:t(a[3]),pre:a[4]&&a[4].split(".")}:{tag:e}}function r(e,a){if(e.tag&&a.tag)return 0;if(e.tag)return-1;if(a.tag)return 1;for(var r=0;r<u.length;r++){var n=u[r],o=e[n],i=a[n];if(o!=i)return isNaN(o)?-1:isNaN(i)?1:o>i?1:-1}if(!e.pre&&!a.pre)return 0;if(!e.pre)return 1;if(!a.pre)return-1;for(var r=0,s=Math.min(e.pre.length,a.pre.length);s>r;r++)if(e.pre[r]!=a.pre[r]){var d=e.pre[r].match(l),c=a.pre[r].match(l);return d&&!c?-1:c&&!d?1:d&&c?t(e.pre[r])>t(a.pre[r])?1:-1:e.pre[r]>a.pre[r]?1:-1}return e.pre.length==a.pre.length?0:e.pre.length>a.pre.length?1:-1}function n(e,t){var a=e.version;return a.tag?a.tag==t.tag:1==r(a,t)?!1:isNaN(t.minor)||isNaN(t.patch)?!1:t.pre?a.major!=t.major||a.minor!=t.minor||a.patch!=t.patch?!1:e.semver||e.fuzzy||a.pre.join(".")==t.pre.join("."):e.semver?0==a.major&&isNaN(a.minor)?t.major<1:a.major>=1?a.major==t.major:a.minor>=1?a.minor==t.minor:(a.patch||0)==t.patch:e.fuzzy?t.major==a.major&&t.minor<(a.minor||0)+1:!a.pre&&a.major==t.major&&a.minor==t.minor&&a.patch==t.patch}function o(e){var t={};((t.semver="^"==e.substr(0,1))||(t.fuzzy="~"==e.substr(0,1)))&&(e=e.substr(1));var r=t.version=a(e);return r.tag?t:(t.fuzzy||t.semver||!isNaN(r.minor)&&!isNaN(r.patch)||(t.fuzzy=!0),t.fuzzy&&isNaN(r.minor)&&(t.semver=!0,t.fuzzy=!1),t.semver&&!isNaN(r.minor)&&isNaN(r.patch)&&(t.semver=!1,t.fuzzy=!0),t)}function i(e,t){return r(a(e),a(t))}"undefined"==typeof h&&(h=Array.prototype.indexOf);var s=/^(\d+)(?:\.(\d+)(?:\.(\d+)(?:-([\da-z-]+(?:\.[\da-z-]+)*)(?:\+([\da-z-]+(?:\.[\da-z-]+)*))?)?)?)?$/i,l=/^\d+$/,u=["major","minor","patch"];e.versions=e.versions||{};var d=e.normalize;e.normalize=function(e,t,r){this.versions||(this.versions={});var s,l,u=this.versions,c=e.lastIndexOf("!"),f=(-1==c?e:e.substr(0,c)).lastIndexOf("@");if(f>0){var m=e.substr(f+1,e.length-f-1).split("/");s=m[0],l=m.length,e=e.substr(0,f)+e.substr(f+s.length+1,e.length-f-s.length-1)}return Promise.resolve(d.call(this,e,t,r)).then(function(e){var t=e.indexOf("@");if(s&&(-1==t||0==t)){var r=e.split("/");r[r.length-l]+="@"+s,e=r.join("/"),t=e.indexOf("@")}var d,c;if(-1==t||0==t){for(var f in u)if(c=u[f],e.substr(0,f.length)==f&&(d=e.substr(f.length,1),!d||"/"==d))return f+"@"+("string"==typeof c?c:c[c.length-1])+e.substr(f.length);return e}var m=e.substr(0,t),p=e.substr(t+1).split("/")[0],h=p.length,g=o(e.substr(t+1).split("/")[0]);c=u[e.substr(0,t)]||[],"string"==typeof c&&(c=[c]);for(var v=c.length-1;v>=0;v--)if(n(g,a(c[v])))return m+"@"+c[v]+e.substr(t+h+1);var b;return g.semver?b=0!=g.version.major||isNaN(g.version.minor)?g.version.major:"0."+g.version.minor:g.fuzzy?b=g.version.major+"."+g.version.minor:(b=p,c.push(p),c.sort(i),u[m]=1==c.length?c[0]:c),m+"@"+b+e.substr(t+h+1)})}}function m(e){e.depCache=e.depCache||{},loaderLocate=e.locate,e.locate=function(e){var t=this;t.depCache||(t.depCache={});var a=t.depCache[e.name];if(a)for(var r=0;r<a.length;r++)t.load(a[r]);return loaderLocate.call(t,e)}}$__global.upgradeSystemLoader=void 0;var p,h=Array.prototype.indexOf||function(e){for(var t=0,a=this.length;a>t;t++)if(this[t]===e)return t;return-1};!function(){var e=$__global.System;p=$__global.System=new LoaderPolyfill(e),p.baseURL=e.baseURL,p.paths={"*":"*.js"},p.originalSystem=e}(),p.noConflict=function(){$__global.SystemJS=p,$__global.System=p.originalSystem},a(p),r(p),n(p),o(p),i(p),s(p),l(p),u(p),d(p),c(p),f(p),m(p),p.paths["@traceur"]||(p.paths["@traceur"]=$__curScript&&$__curScript.getAttribute("data-traceur-src")||($__curScript&&$__curScript.src?$__curScript.src.substr(0,$__curScript.src.lastIndexOf("/")+1):p.baseURL+(p.baseURL.lastIndexOf("/")==p.baseURL.length-1?"":"/"))+"traceur.js"),p.paths["@traceur-runtime"]||(p.paths["@traceur-runtime"]=$__curScript&&$__curScript.getAttribute("data-traceur-runtime-src")||p.paths["@traceur"].replace(/\.js$/,"-runtime.js"))};var $__curScript,__eval;!function(){var doEval;__eval=function(e,t,a){e+="\n//# sourceURL="+t+(a?"\n//# sourceMappingURL="+a:"");try{doEval(e)}catch(r){var n="Error evaluating "+t+"\n";throw r instanceof Error?r.message=n+r.message:r=n+r,r}};var isWorker="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,isBrowser="undefined"!=typeof window;if(isBrowser){var head,scripts=document.getElementsByTagName("script");if($__curScript=scripts[scripts.length-1],doEval=function(e){head||(head=document.head||document.body||document.documentElement);var t=document.createElement("script");t.text=e;var a,r=window.onerror;if(window.onerror=function(e){a=e},head.appendChild(t),head.removeChild(t),window.onerror=r,a)throw a},$__global.System&&$__global.LoaderPolyfill)$__global.upgradeSystemLoader();else{var curPath=$__curScript.src,basePath=curPath.substr(0,curPath.lastIndexOf("/")+1);document.write('<script type="text/javascript" src="'+basePath+'es6-module-loader.js" data-init="upgradeSystemLoader">'+"<"+"/script>")}}else if(isWorker)if(doEval=function(source){try{eval(source)}catch(e){throw e}},$__global.System&&$__global.LoaderPolyfill)$__global.upgradeSystemLoader();else{var basePath="";try{throw new TypeError("Unable to get Worker base path.")}catch(err){var idx=err.stack.indexOf("at ")+3,withSystem=err.stack.substr(idx,err.stack.substr(idx).indexOf("\n"));basePath=withSystem.substr(0,withSystem.lastIndexOf("/")+1)}importScripts(basePath+"es6-module-loader.js")}else{var es6ModuleLoader=require("es6-module-loader");$__global.System=es6ModuleLoader.System,$__global.Loader=es6ModuleLoader.Loader,$__global.upgradeSystemLoader(),module.exports=$__global.System;var vm=require("vm");doEval=function(e){vm.runInThisContext(e)}}}()}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope?self:global);
//# sourceMappingURL=system-csp.js.map