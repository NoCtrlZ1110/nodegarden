"use strict";!function(){function t(){e=window.innerWidth*d,o=window.innerHeight*d,r=e*o,i.length=Math.sqrt(r)/25|0,h.width=e,h.height=o;var t,a;for(t=0,a=i.length;a>t;t++)i[t]||(i[t]={x:Math.random()*e,y:Math.random()*o,vx:1*Math.random()-.5,vy:1*Math.random()-.5,m:2*Math.random()+1,pos:Math.random()>=.5})}function a(t){var a={x:t.pageX,y:t.pageY},n=i[Math.floor(Math.random()*(i.length-1))];n.x=a.x,n.y=a.y,n.vx=0,n.vy=0,n.m=2*Math.random()+1}function n(){var t,a,m,r,d,h,v,x,l,M;for(requestAnimationFrame(n),y.clearRect(0,0,e,o),h=0,M=i.length-1;M>h;h++)for(v=h+1;M+1>v;v++){if(x=i[h],l=i[v],r=l.x-x.x,d=l.y-x.y,t=Math.sqrt(Math.pow(r,2)+Math.pow(d,2)),t<=x.m/2+l.m/2){if(x.m<=l.m){l.vx=l.m*l.vx/(x.m+l.m)+x.m*x.vx/(x.m+l.m),l.vy=l.m*l.vy/(x.m+l.m)+x.m*x.vy/(x.m+l.m),x.x=Math.random()*e,x.y=Math.random()*o,x.vx=1*Math.random()-.5,x.vy=1*Math.random()-.5,x.m=2*Math.random()+1;continue}if(l.m<=x.m){x.vx=x.m*x.vx/(x.m+l.m)+l.m*l.vx/(x.m+l.m),x.vy=x.m*x.vy/(x.m+l.m)+l.m*l.vy/(x.m+l.m),l.x=Math.random()*e,l.y=Math.random()*o,l.vx=1*Math.random()-.5,l.vy=1*Math.random()-.5,l.m=2*Math.random()+1;continue}}a={x:r/t,y:d/t},m=3*(x.m*l.m)/Math.pow(t,2);var c=100*m;if(!(.05>c)){var f=x.pos===l.pos?-1:1;y.beginPath(),1===f?y.strokeStyle="rgba(191,63,31,"+(1>c?c:1)+")":y.strokeStyle="rgba(31,63,191,"+(1>c?c:1)+")",y.moveTo(x.x,x.y),y.lineTo(l.x,l.y),y.stroke();var g=m*a.x/x.m,w=m*a.x/x.m,u=m*a.y/l.m,p=m*a.y/l.m;x.vx+=f*g,x.vy+=f*u,l.vx-=f*w,l.vy-=f*p}}for(s?y.fillStyle="#ffffff":y.fillStyle="#000000",h=0,M=i.length;M>h;h++)y.beginPath(),y.arc(i[h].x,i[h].y,i[h].m,0,2*Math.PI),y.fill(),i[h].x+=i[h].vx,i[h].y+=i[h].vy,(i[h].x>e+25||i[h].x<-25||i[h].y>o+25||i[h].y<-25)&&(i[h].x=Math.random()*e,i[h].y=Math.random()*o,i[h].vx=1*Math.random()-.5,i[h].vy=1*Math.random()-.5)}function m(t){t.stopPropagation(),s=!s,s?document.body.classList.add("nightmode"):document.body.classList.remove("nightmode")}var e,o,r,d=window.devicePixelRatio,i=new Array(Math.sqrt(r)/10|0),h=document.createElement("canvas"),y=h.getContext("2d"),v=document.getElementById("container"),x=document.getElementsByClassName("moon")[0],s=!1;1!==d&&(h.style.transform="scale("+1/d+")",h.style.transformOrigin="0 0"),h.id="nodegarden",v.appendChild(h),t(),n(),window.addEventListener("resize",t),window.addEventListener("click",a),x.addEventListener("click",m)}();
