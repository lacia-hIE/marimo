import{k2 as n,hf as r,hg as t,k3 as u,hi as a,k4 as e,fI as i,k5 as f,k6 as o,k7 as c,k8 as s,k9 as l,ka as v,kb as h,k0 as k,h5 as b}from"./index-CaEtVMzc.js";import{d,c as g}from"./transform-Bt5y6rR1.js";var j=n?n.isConcatSpreadable:void 0;function p(n){return r(n)||t(n)||!!(j&&n&&n[j])}function m(n,r,t,a,e){var i=-1,f=n.length;for(t||(t=p),e||(e=[]);++i<f;){var o=n[i];t(o)?u(e,o):a||(e[e.length]=o)}return e}var O=1,x=2;function y(n){return n==n&&!i(n)}function w(n,r){return function(t){return null!=t&&(t[n]===r&&(void 0!==r||n in Object(t)))}}function C(n){var r=function(n){for(var r=f(n),t=r.length;t--;){var u=r[t],a=n[u];r[t]=[u,a,y(a)]}return r}(n);return 1==r.length&&r[0][2]?w(r[0][0],r[0][1]):function(t){return t===n||function(n,r,t,u){var i=t.length,f=i;if(null==n)return!f;for(n=Object(n);i--;){var o=t[i];if(o[2]?o[1]!==n[o[0]]:!(o[0]in n))return!1}for(;++i<f;){var c=(o=t[i])[0],s=n[c],l=o[1];if(o[2]){if(void 0===s&&!(c in n))return!1}else{var v=new a;if(!e(l,s,O|x,u,v))return!1}}return!0}(t,0,r)}}function I(n,r){return null!=n&&r in Object(n)}function S(n,u,a){for(var e=-1,i=(u=o(u,n)).length,f=!1;++e<i;){var v=c(u[e]);if(!(f=null!=n&&a(n,v)))break;n=n[v]}return f||++e!=i?f:!!(i=null==n?0:n.length)&&s(i)&&l(v,i)&&(r(n)||t(n))}function _(n,r){return null!=n&&S(n,r,I)}var q=1,z=2;function A(n){return v(n)?(r=c(n),function(n){return null==n?void 0:n[r]}):function(n){return function(r){return k(r,n)}}(n);var r}function B(n){return"function"==typeof n?n:null==n?d:"object"==typeof n?r(n)?(t=n[0],u=n[1],v(t)&&y(u)?w(c(t),u):function(n){var r=h(n,t);return void 0===r&&r===u?_(n,t):e(u,r,q|z)}):C(n):A(n);var t,u}function D(n,r){return n&&g(n,r,f)}var E,F=(E=D,function(n,r){if(null==n)return n;if(!b(n))return E(n,r);for(var t=n.length,u=-1,a=Object(n);++u<t&&!1!==r(a[u],u,a););return n});export{B as a,F as b,m as c,D as d,_ as e,S as h};
