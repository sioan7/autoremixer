var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function f(){return i(" ")}function d(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function $(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}let p;function m(t){p=t}function g(){const t=p;return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach(n=>{n.call(t,r)})}}}const h=[],y=[],v=[],x=[],_=Promise.resolve();let b=!1;function C(t){v.push(t)}function E(){const t=new Set;do{for(;h.length;){const t=h.shift();m(t),w(t.$$)}for(;y.length;)y.pop()();for(let n=0;n<v.length;n+=1){const e=v[n];t.has(e)||(e(),t.add(e))}v.length=0}while(h.length);for(;x.length;)x.pop()();b=!1}function w(t){t.fragment&&(t.update(t.dirty),o(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(C))}const k=new Set;let T;function j(t,n){t&&t.i&&(k.delete(t),t.i(n))}function A(t,n,e,o){if(t&&t.o){if(k.has(t))return;k.add(t),T.c.push(()=>{k.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function N(t,e,c){const{fragment:u,on_mount:l,on_destroy:a,after_update:s}=t.$$;u.m(e,c),C(()=>{const e=l.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]}),s.forEach(C)}function O(t,n){t.$$.fragment&&(o(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function L(t,n){t.$$.dirty||(h.push(t),b||(b=!0,_.then(E)),t.$$.dirty=e()),t.$$.dirty[n]=!0}function M(n,r,c,u,l,a){const s=p;m(n);const i=r.props||{},f=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:e(),dirty:null};let d=!1;f.ctx=c?c(n,i,(t,e,o=e)=>(f.ctx&&l(f.ctx[t],f.ctx[t]=o)&&(f.bound[t]&&f.bound[t](o),d&&L(n,t)),e)):i,f.update(),d=!0,o(f.before_update),f.fragment=u(f.ctx),r.target&&(r.hydrate?f.fragment.l(function(t){return Array.from(t.childNodes)}(r.target)):f.fragment.c(),r.intro&&j(n.$$.fragment),N(n,r.target,r.anchor),E()),m(s)}class S{$destroy(){O(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function q(n){var e;return{c(){(e=s("div")).textContent="Drop songs here",$(e,"class","dropzone svelte-86ew4y")},m(t,n){l(t,e,n)},p:t,i:t,o:t,d(t){t&&a(e)}}}class z extends S{constructor(t){super(),M(this,t,null,q,c,[])}}const B=[{value:"type1",text:"Type 1"},{value:"type2",text:"Type 2"},{value:"type3",text:"Type 3"}];function D(t,n,e){const o=Object.create(t);return o.value=n[e].value,o.text=n[e].text,o}function I(n){var e,o,r,c=n.text+"";return{c(){e=s("option"),o=i(c),r=f(),$(e,"class","selection"),e.__value=n.value,e.value=e.__value},m(t,n){l(t,e,n),u(e,o),u(e,r)},p:t,d(t){t&&a(e)}}}function P(n){var e,o;let r=B,c=[];for(let t=0;t<r.length;t+=1)c[t]=I(D(n,r,t));return{c(){e=s("select");for(let t=0;t<c.length;t+=1)c[t].c();$(e,"class","type-selector svelte-2mtksv"),o=d(e,"change",n.typeChange)},m(t,n){l(t,e,n);for(let t=0;t<c.length;t+=1)c[t].m(e,null)},p(t,n){if(t.remixTypes){let o;for(r=B,o=0;o<r.length;o+=1){const u=D(n,r,o);c[o]?c[o].p(t,u):(c[o]=I(u),c[o].c(),c[o].m(e,null))}for(;o<c.length;o+=1)c[o].d(1);c.length=r.length}},i:t,o:t,d(t){t&&a(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(c,t),o()}}}function R(t){const n=g();return{typeChange:function(t){n("typeChange",t.target.value)}}}class X extends S{constructor(t){super(),M(this,t,R,P,c,[])}}function F(n){var e,o;return{c(){(e=s("button")).textContent="REMIX",$(e,"class","default svelte-1ndm5ug"),o=d(e,"click",n.click_handler)},m(t,n){l(t,e,n)},p:t,i:t,o:t,d(t){t&&a(e),o()}}}function G(t){return{click_handler:function(n){!function(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(t=>t(n))}(t,n)}}}class H extends S{constructor(t){super(),M(this,t,G,F,c,[])}}function J(n){var e;return{c(){(e=s("audio")).controls=!0},m(t,n){l(t,e,n)},p:t,i:t,o:t,d(t){t&&a(e)}}}class K extends S{constructor(t){super(),M(this,t,null,J,c,[])}}function Q(n){var e,o,r,c,i,d=new z({}),p=new X({});p.$on("typeChange",n.typeChange);var m=new H({});m.$on("click",n.remix);var g=new K({});return{c(){e=s("div"),d.$$.fragment.c(),o=f(),p.$$.fragment.c(),r=f(),m.$$.fragment.c(),c=f(),g.$$.fragment.c(),$(e,"class","content svelte-1t021ue")},m(t,n){l(t,e,n),N(d,e,null),u(e,o),N(p,e,null),u(e,r),N(m,e,null),u(e,c),N(g,e,null),i=!0},p:t,i(t){i||(j(d.$$.fragment,t),j(p.$$.fragment,t),j(m.$$.fragment,t),j(g.$$.fragment,t),i=!0)},o(t){A(d.$$.fragment,t),A(p.$$.fragment,t),A(m.$$.fragment,t),A(g.$$.fragment,t),i=!1},d(t){t&&a(e),O(d),O(p),O(m),O(g)}}}function U(t){let n=B[0].value;return{remix:function(){console.log(n)},typeChange:function(t){n=t.detail}}}const V=new class extends S{constructor(t){super(),M(this,t,U,Q,c,[])}}({target:document.body,props:{name:"world"}});return document.body.style.padding="0",V}();
//# sourceMappingURL=bundle.js.map