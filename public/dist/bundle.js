!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var a=e&&e.prototype instanceof d?e:d,o=Object.create(a.prototype),i=new E(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return M()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===l)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),o}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l={};function d(){}function h(){}function f(){}var p={};p[a]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(W([])));y&&y!==e&&n.call(y,a)&&(p=y);var m=f.prototype=d.prototype=Object.create(p);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var r;this._invoke=function(a,o){function i(){return new e((function(r,i){!function r(a,o,i,c){var u=s(t[a],t,o);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function W(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:M}}function M(){return{value:void 0,done:!0}}return h.prototype=m.constructor=f,f.constructor=h,h.displayName=c(f,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,c(t,i,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(w.prototype),w.prototype[o]=function(){return this},t.AsyncIterator=w,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new w(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(m),c(m,i,"Generator"),m[a]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=W,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;k(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:W(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(0),n(1);function r(){return(new Date).getHours()>18?{thunderstorm:"night-alt-thunderstorm",drizzle:"night-alt-showers",rain:"night-alt-rain",snow:"night-alt-snow",mist:"night-fog",smoke:"smoke",haze:"dust",dust:"dust",fog:"night-fog",sand:"sandstorm",ash:"dust",squall:"dust",tornado:"tornado",clear:"night-clear",clouds:"night-alt-cloudy"}:{thunderstorm:"day-thunderstorm",drizzle:"showers",rain:"day-rain",snow:"snow",mist:"fog",smoke:"smoke",haze:"dust",dust:"dust",fog:"day-fog",sand:"sandstorm",ash:"dust",squall:"dust",tornado:"tornado",clear:"day-sunny",clouds:"day-cloudy"}}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.currentWeather,this.hourlyWeather,this.dailyWeather}var e,n,o;return e=t,o=[{key:"loadBg",value:function(){document.body.classList.add("loaded")}},{key:"loading",value:function(){var t=document.getElementById("currentWeather"),e=document.getElementById("hourlyWeather"),n=document.getElementById("averageWeather"),r=document.querySelector("#dailyWeather table tbody");t.innerHTML="",e.innerHTML='\n         <div class="spinner"></div>\n      ',n.innerHTML="",r.innerHTML='\n         <tr>\n            <td></td>\n            <td></td>\n            <td>\n               <div class="spinner"></div>\n            </td>\n            <td></td>\n            <td></td>\n         </tr>\n      '}},{key:"searching",value:function(){document.getElementById("searchResults").innerHTML='\n         <div class="spinner"></div>\n      '}}],(n=[{key:"updateOnlineStatus",value:function(t){var e=document.getElementById("onlineStatus");"offline"===t?(e.classList.add("active"),e.innerHTML="\n            <p>Looks like you're offline. The current information may be innacurate.</p>\n         "):(e.classList.remove("active"),e.innerHTML="")}},{key:"loadEventInfo",value:function(t){document.getElementById("loadEventInfo").onclick=function(){t("New York")}}},{key:"setCurrentWeather",value:function(t){this.currentWeather=t;var e,n=document.getElementById("currentWeather"),a=t.sys.country,o=t.name,i=Math.round(t.main.temp);n.innerHTML="",n.innerHTML='\n         <div class="time">\n            <h2 class="location">'.concat(o,", ").concat(a,'</h2>\n            <p class="date">').concat(function(){var e=new Date(1e3*t.dt),n=e.toLocaleDateString(e,{weekday:"short"}),r=e.toLocaleDateString(e,{month:"short"}),a=e.getDate();return e="".concat(n,", ").concat(r," ").concat(a),e}(),'</p>\n         </div>\n         <div class="status">\n            <div class="icon">\n               <p>\n                  <i class="wi wi-').concat(r()[t.weather[0].main.toLowerCase()],'"></i>\n                  <span>').concat((e=t.weather[0].description,e="".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))),'</span>\n               </p>\n            </div>\n            <div class="units">\n               <h1>').concat(i,"<sup>o</sup>C</h1>\n            </div>\n         </div>\n      "),this.setEventStatus(),this.setAverageWeather()}},{key:"setEventStatus",value:function(){var t,e=document.getElementById("eventStatus"),n=document.getElementById("loadEventInfo"),r=this.currentWeather,a=r.name,o=Math.round(r.main.feels_like);if("New York"!==a)return n.classList.add("active"),void(e.innerHTML="");n.classList.remove("active"),o>=15&&o<=30?(t="EVENT POSSIBLE",e.classList.add("safe")):(t="EVENT NOT POSSIBLE",e.classList.remove("safe")),e.innerHTML="\n            <p>".concat(t,"</p>\n         ")}},{key:"setAverageWeather",value:function(){var t=document.getElementById("averageWeather"),e=this.currentWeather.main;t.innerHTML="",[{name:"Min",key:"temp_min"},{name:"Max",key:"temp_max"}].forEach((function(n){t.innerHTML+='\n            <div class="chip">\n               <span class="title">'.concat(n.name,'</span>\n               <span class="units">\n                  ').concat(Math.round(e[n.key]),"<sup>o</sup>C\n               </span>\n            </div>\n         ")}))}},{key:"setHourlyWeather",value:function(t){this.hourlyWeather=t;var e=document.getElementById("hourlyWeather"),n=t.temp;e.innerHTML="",[{name:"Morning",key:"morn"},{name:"Afternoon",key:"day"},{name:"Evening",key:"eve"},{name:"Night",key:"night"}].forEach((function(t){e.innerHTML+='\n            <div class="chip">\n               <div class="chip-head">\n                  <p>'.concat(t.name,'</p>\n               </div>\n               <div class="chip-body">\n                  <p class="units">\n                     ').concat(Math.round(n[t.key]),"<sup>o</sup>C\n                  </p>\n               </div>\n            </div>\n         ")}))}},{key:"setDailyWeather",value:function(t){var e=this;this.dailyWeather=t;var n=document.querySelector("#dailyWeather table tbody");n.innerHTML="",t.forEach((function(t,a){var o,i=t.humidity,c=Math.round(t.wind_speed),u=function(){var e=t.temp;return{max:Math.round(e.max),min:Math.round(e.min)}},s=e.currentWeather.name,l=function(){if("New York"===s)return Math.round((t.feels_like.morn+t.feels_like.day+t.feels_like.eve+t.feels_like.night)/4)};n.innerHTML+='\n            <tr>\n               <td>\n                  <span class="status \n                        '.concat("New York"===s&&"active","\n                        ").concat(l()>=15&&l()<=30&&"safe",'\n                     ">\n                  </span>\n                  ').concat(function(){for(var t=new Date,e=[],n=0;n<8;n++)e.push("\n            ".concat(t.toLocaleDateString(t,{weekday:"short"}),",\n            ").concat(t.toLocaleDateString(t,{month:"short"}),"\n            ").concat(t.getDate(),"\n         ")),t.setDate(t.getDate()+1);return e}()[a],"\n               </td>\n               <td>").concat(i,'%</td>\n               <td><i class="wi wi-').concat(r()[t.weather[0].main.toLowerCase()],'"></i>&nbsp;').concat((o=t.weather[0].description,o="".concat(o.charAt(0).toUpperCase()).concat(o.slice(1))),"</td>\n               <td>\n                  <span>").concat(u().max,"<sup>o</sup>C</span>\n                  <span>").concat(u().min,"<sup>o</sup>C</span>\n               </td>\n               <td>").concat(c,"m/s</td>\n            </tr>\n         ")}))}},{key:"search",value:function(t){var e=document.getElementById("searchForm"),n=e.query;e.onsubmit=function(e){e.preventDefault(),n.value&&t(n.value)}}},{key:"setSearchResults",value:function(t,e){var n=document.getElementById("searchResults");if(404==t.cod){var a=t.message;return a="".concat(a.charAt(0).toUpperCase()).concat(a.slice(1)),void(n.innerHTML='\n            <p class="error">'.concat(a,"</p>\n         "))}if(503==t.cod){var o=t.message;return o="".concat(o.charAt(0).toUpperCase()).concat(o.slice(1)),void(n.innerHTML='\n            <p class="error">'.concat(o,"</p>\n         "))}var i,c=t.sys.country,u=t.name,s=t.coord,l=t.main,d=Math.round(t.wind.speed);n.innerHTML="",n.innerHTML='\n         <div class="card" data-lat="'.concat(s.lat,'" data-lon="').concat(s.lon,'">\n            <div class="card-head">\n               <i class="wi wi-').concat(r()[t.weather[0].main.toLowerCase()],'"></i>\n            </div>\n            <div class="card-body">\n               <p>\n                  <strong>').concat(u,", ").concat(c,"</strong> \n                  [").concat(s.lon,", ").concat(s.lat,"], \n                  <i>").concat((i=t.weather[0].description,i="".concat(i.charAt(0).toUpperCase()).concat(i.slice(1))),'</i>\n               </p>\n               <p class="summary">\n                     <span class="main">\n                        ').concat(Math.round(l.temp),"<sup>o</sup>C\n                     </span>\n                     temp from\n                     <span>\n                        ").concat(Math.round(l.temp_min),"<sup>o</sup>C\n                     </span>\n                     to\n                     <span>\n                        ").concat(Math.round(l.temp_max),"<sup>o</sup>C\n                     </span>,\n                     wind speed\n                     <span>\n                        ").concat(d,"m/s\n                     </span>\n               </p>\n            </div>\n         </div>\n      "),this.loadSearchResults(e)}},{key:"loadSearchResults",value:function(t){document.querySelectorAll("#searchResults .card").forEach((function(e){e.onmouseover=function(){e.parentElement.classList.add("active")},e.onclick=function(){document.getElementById("searchInput").value="";var n=e.getAttribute("data-lat"),r=e.getAttribute("data-lon");t(n,r),e.parentElement.classList.remove("active"),e.parentElement.innerHTML=""}}))}}])&&a(e.prototype,n),o&&a(e,o),t}();function i(t,e,n,r,a,o,i){try{var c=t[o](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,a)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function c(t){i(o,r,a,c,u,"next",t)}function u(t){i(o,r,a,c,u,"throw",t)}c(void 0)}))}}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r,a,o;return e=t,n=[{key:"get",value:(o=c(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)})}],r=[{key:"checkOnlineStatus",value:(a=c(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Math.round(999999*Math.random()),t.prev=1,t.next=4,fetch("https://api.github.com/users/ekaranjaa?rand=".concat(e));case 4:return n=t.sent,t.abrupt("return",n.status>=200&&n.status<300);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",!1);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),function(){return a.apply(this,arguments)})}],n&&u(e.prototype,n),r&&u(e,r),t}();function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var d,h=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,r=[{key:"getWeather",value:function(t){return null===localStorage.getItem(t)?[]:JSON.parse(localStorage.getItem(t))}},{key:"saveWeather",value:function(t,e){localStorage.setItem(t,JSON.stringify(e))}}],(n=null)&&l(e.prototype,n),r&&l(e,r),t}();function f(t,e){o.loading();var n=new o,r=new s,a="bbd01c6c17c4679bbe4ed1f606945865",i=Math.round(999999*Math.random());s.checkOnlineStatus().then((function(o){o?(n.updateOnlineStatus("online"),r.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(t,"&lon=").concat(e,"&units=metric&appid=").concat(a,"&rand=").concat(i)).then((function(t){n.setCurrentWeather(t),h.saveWeather("current",t)})).catch((function(t){return console.log(t)})),r.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t,"&lon=").concat(e,"&units=metric&appid=").concat(a,"&rand=").concat(i)).then((function(t){n.setHourlyWeather(t.daily[0]),h.saveWeather("hourly",t.daily[0]),n.setDailyWeather(t.daily),h.saveWeather("daily",t.daily)})).catch((function(t){return console.log(t)}))):(n.updateOnlineStatus("offline"),n.setCurrentWeather(h.getWeather("current")),n.setHourlyWeather(h.getWeather("hourly")),n.setDailyWeather(h.getWeather("daily")))}))}function p(t){o.loading();var e=new o,n=new s,r="bbd01c6c17c4679bbe4ed1f606945865",a=Math.round(999999*Math.random());s.checkOnlineStatus().then((function(o){o?(e.updateOnlineStatus("online"),n.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=metric&appid=").concat(r,"&rand=").concat(a)).then((function(t){e.setCurrentWeather(t),h.saveWeather("current",t);var o=t.coord.lat,i=t.coord.lon;n.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(o,"&lon=").concat(i,"&units=metric&appid=").concat(r,"&rand=").concat(a)).then((function(t){e.setHourlyWeather(t.daily[0]),h.saveWeather("hourly",t.daily[0]),e.setDailyWeather(t.daily),h.saveWeather("daily",t.daily)})).catch((function(t){return console.log(t)}))})).catch((function(t){return console.log(t)}))):(e.updateOnlineStatus("offline"),e.setCurrentWeather(h.getWeather("current")),e.setHourlyWeather(h.getWeather("hourly")),e.setDailyWeather(h.getWeather("daily")))}))}function v(t){o.searching();var e=new o,n=new s,r=Math.round(999999*Math.random());s.checkOnlineStatus().then((function(a){if(a)n.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=metric&appid=").concat("bbd01c6c17c4679bbe4ed1f606945865","&rand=").concat(r)).then((function(t){return e.setSearchResults(t,f)})).catch((function(t){return console.log(t)}));else{e.setSearchResults({cod:503,message:"looks like you're offline."},f)}}))}document.addEventListener("DOMContentLoaded",(function(){return o.loadBg()})),navigator.geolocation.getCurrentPosition((function(t){window.onload=function(){var e,n;if(null===h.getWeather("current"))e=t.coords.latitude,n=t.coords.longitude;else{var r=h.getWeather("current");e=r.coord.lat,n=r.coord.lon}return f(e,n)}})),(d=new o).loadEventInfo(p),d.search(v),setTimeout((function(){var t=h.getWeather("current");f(t.coord.lat,t.coord.lon)}),6e5),"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then((function(t){return console.log("SW registered")})).catch((function(t){return console.log("SW registration failed",t)}))}]);