function e(e,t,n,r){return new(n||(n=Promise))((function(o,u){function a(e){try{c(r.next(e))}catch(e){u(e)}}function i(e){try{c(r.throw(e))}catch(e){u(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))}function t(e,t){var n,r,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}}!function(){function n(){return e(this,void 0,void 0,(function(){var e,n,r,o,u;return t(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,fetch("https://favqs.com/api/quotes",{method:"GET",headers:{Authorization:'Token token="'.concat("35174d0b64c5690e2e2fce564c92be0b",'"')}})];case 1:return[4,t.sent().json()];case 2:return r=t.sent(),e=r.quotes[0].body,n=r.quotes[0].author,[3,4];case 3:return t.sent(),e="500",n="Server",[3,4];case 4:if(o=document.getElementById("quote"),u=document.getElementById("quote-author"),null==o||null==u)throw new Error("Cannot find the fact element");return o.innerText="«"+e+"»",u.innerText="©"+n,[2]}}))}))}onload=function(){return e(void 0,void 0,void 0,(function(){var e;return t(this,(function(t){switch(t.label){case 0:if(null==(e=document.getElementById("quote-slider")))throw new Error("Cannot find the fact element");return e.style.display="none",[4,n()];case 1:return t.sent(),e.style.display="flex",[2]}}))}))};var r=document.getElementById("next-quote-btn");if(null==r)throw new Error("Cannot find the fact element");r.addEventListener("click",n)}();
