var withinViewport=function(){"use strict";if(window.requestAnimationFrame&&document.documentElement.classList){document.documentElement.classList.add("enhanced");var e=function(e,t,n){var i,o,r,a={now:Date.now||function(){return(new Date).getTime()}},u=null,l=0;n||(n={});var d=function(){l=n.leading===!1?0:a.now(),u=null,r=e.apply(i,o),u||(i=o=null)};return function(){var w=a.now();l||n.leading!==!1||(l=w);var s=t-(w-l);return i=this,o=arguments,0>=s||s>t?(u&&(clearTimeout(u),u=null),l=w,r=e.apply(i,o),u||(i=o=null)):u||n.trailing===!1||(u=setTimeout(d,s)),r}},t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame,n=document.querySelectorAll(".revealer"),i=function(){return{width:window.document.documentElement.clientWidth,height:window.document.documentElement.clientHeight}},o=function(){return{x:window.pageXOffset,y:window.pageYOffset}},r=function(e){var t=0,n=0,i=e.offsetHeight,o=e.offsetWidth;do isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(n+=e.offsetLeft);while(null!==(e=e.offsetParent));return{top:t,left:n,height:i,width:o}},a=function(e){var t=i(),n=o(),a=r(e),u=.2,l=a.height,d=a.width,w=a.top,s=a.left,c=w+l,f=s+d,m=function(){var e=w+l*u,i=s+d*u,o=c-l*u,r=f-d*u,a=n.y+0,m=n.x+0,h=n.y-0+t.height,v=n.x-0+t.width;return h>e&&o>a&&i>m&&v>r};return m()},u=function(){for(var e=0;e<n.length;e++)a(n[e])?n[e].classList.add("revealed"):n[e].classList.remove("revealed")},l=e(function(){t(u)},300),d=e(function(){t(u),w()},300);l(),window.addEventListener?(addEventListener("scroll",l,!1),addEventListener("resize",d,!1)):window.attachEvent?(window.attachEvent("onscroll",l),window.attachEvent("onresize",d)):(window.onscroll=l,window.onresize=d)}var w=function(){for(var e=document.querySelectorAll(".fullscreen"),t=0;t<e.length;t++)e[t].style.height=i().height+1+"px"};return w(),withinViewport}();