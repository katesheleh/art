!function(){"use strict";if(window&&window.addEventListener){var e,t,n=Object.create(null),o=function(){clearTimeout(t),t=setTimeout(e,100)},i=function(){},r=function(){var e;window.addEventListener("resize",o,!1),window.addEventListener("orientationchange",o,!1),window.MutationObserver?(e=new MutationObserver(o),e.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),i=function(){try{e.disconnect(),window.removeEventListener("resize",o,!1),window.removeEventListener("orientationchange",o,!1)}catch(t){}}):(document.documentElement.addEventListener("DOMSubtreeModified",o,!1),i=function(){document.documentElement.removeEventListener("DOMSubtreeModified",o,!1),window.removeEventListener("resize",o,!1),window.removeEventListener("orientationchange",o,!1)})},d="http://www.w3.org/1999/xlink";e=function(){function e(){g-=1,0===g&&r()}function t(e){return function(){n[e.base]!==!0&&e.useEl.setAttributeNS(d,"xlink:href","#"+e.hash)}}function o(t){return function(){var n,o=document.body,i=document.createElement("x");t.onload=null,i.innerHTML=t.responseText,n=i.getElementsByTagName("svg")[0],n&&(n.setAttribute("aria-hidden","true"),n.style.position="absolute",n.style.width=0,n.style.height=0,n.style.overflow="hidden",o.insertBefore(n,o.firstChild)),e()}}function u(t){return function(){t.onerror=null,t.ontimeout=null,e()}}var s,a,c,l,w,m,v,h,f,E="",g=0;if(window.XMLHttpRequest&&(w=new XMLHttpRequest,w=void 0!==w.withCredentials?XMLHttpRequest:XDomainRequest||void 0),void 0!==w){for(i(),h=document.getElementsByTagName("use"),l=0;l<h.length;l+=1){try{a=h[l].getBoundingClientRect()}catch(b){a=!1}v=h[l].getAttributeNS(d,"href").split("#"),s=v[0],c=v[1],m=a&&0===a.left&&0===a.right&&0===a.top&&0===a.bottom,a&&0===a.width&&0===a.height&&!m?(E&&!s.length&&c&&!document.getElementById(c)&&(s=E),s.length&&(f=n[s],f!==!0&&setTimeout(t({useEl:h[l],base:s,hash:c}),0),void 0===f&&(f=new w,n[s]=f,f.onload=o(f),f.onerror=u(f),f.ontimeout=u(f),f.open("GET",s),f.send(),g+=1))):m||(void 0===n[s]?n[s]=!0:n[s].onload&&(n[s].abort(),n[s].onload=void 0,n[s]=!0))}h="",g+=1,e()}},window.addEventListener("load",function u(){window.removeEventListener("load",u,!1),t=setTimeout(e,0)},!1)}}();