import{w as n,c as t}from"./path-qnb_ma6O.js";import{u as r,v as c,w as e,x as a,y as u,t as i,r as o,z as y,A as l,B as f,C as s,D as p,E as x}from"./step-CPXY0cSE.js";function h(n){return n.innerRadius}function v(n){return n.outerRadius}function g(n){return n.startAngle}function d(n){return n.endAngle}function m(n){return n&&n.padAngle}function T(n,t,r,c,e,a,u){var i=n-r,y=t-c,l=(u?a:-a)/o(i*i+y*y),f=l*y,s=-l*i,p=n+f,h=t+s,v=r+f,g=c+s,d=(p+v)/2,m=(h+g)/2,T=v-p,A=g-h,R=T*T+A*A,j=e-a,w=p*g-v*h,b=(A<0?-1:1)*o(x(0,j*j*R-w*w)),z=(w*A-T*b)/R,B=(-w*T-A*b)/R,C=(w*A+T*b)/R,D=(-w*T+A*b)/R,E=z-d,P=B-m,k=C-d,q=D-m;return E*E+P*P>k*k+q*q&&(z=C,B=D),{cx:z,cy:B,x01:-f,y01:-s,x11:z*(e/j-1),y11:B*(e/j-1)}}function A(){var x=h,A=v,R=t(0),j=null,w=g,b=d,z=m,B=null,C=n(D);function D(){var n,t,h=+x.apply(this,arguments),v=+A.apply(this,arguments),g=w.apply(this,arguments)-a,d=b.apply(this,arguments)-a,m=l(d-g),D=d>g;if(B||(B=n=C()),v<h&&(t=v,v=h,h=t),v>u)if(m>i-u)B.moveTo(v*c(g),v*e(g)),B.arc(0,0,v,g,d,!D),h>u&&(B.moveTo(h*c(d),h*e(d)),B.arc(0,0,h,d,g,D));else{var E,P,k=g,q=d,F=g,G=d,H=m,I=m,J=z.apply(this,arguments)/2,K=J>u&&(j?+j.apply(this,arguments):o(h*h+v*v)),L=y(l(v-h)/2,+R.apply(this,arguments)),M=L,N=L;if(K>u){var O=s(K/h*e(J)),Q=s(K/v*e(J));(H-=2*O)>u?(F+=O*=D?1:-1,G-=O):(H=0,F=G=(g+d)/2),(I-=2*Q)>u?(k+=Q*=D?1:-1,q-=Q):(I=0,k=q=(g+d)/2)}var S=v*c(k),U=v*e(k),V=h*c(G),W=h*e(G);if(L>u){var X,Y=v*c(q),Z=v*e(q),$=h*c(F),_=h*e(F);if(m<r)if(X=function(n,t,r,c,e,a,i,o){var y=r-n,l=c-t,f=i-e,s=o-a,p=s*y-f*l;if(!(p*p<u))return[n+(p=(f*(t-a)-s*(n-e))/p)*y,t+p*l]}(S,U,$,_,Y,Z,V,W)){var nn=S-X[0],tn=U-X[1],rn=Y-X[0],cn=Z-X[1],en=1/e(p((nn*rn+tn*cn)/(o(nn*nn+tn*tn)*o(rn*rn+cn*cn)))/2),an=o(X[0]*X[0]+X[1]*X[1]);M=y(L,(h-an)/(en-1)),N=y(L,(v-an)/(en+1))}else M=N=0}I>u?N>u?(E=T($,_,S,U,v,N,D),P=T(Y,Z,V,W,v,N,D),B.moveTo(E.cx+E.x01,E.cy+E.y01),N<L?B.arc(E.cx,E.cy,N,f(E.y01,E.x01),f(P.y01,P.x01),!D):(B.arc(E.cx,E.cy,N,f(E.y01,E.x01),f(E.y11,E.x11),!D),B.arc(0,0,v,f(E.cy+E.y11,E.cx+E.x11),f(P.cy+P.y11,P.cx+P.x11),!D),B.arc(P.cx,P.cy,N,f(P.y11,P.x11),f(P.y01,P.x01),!D))):(B.moveTo(S,U),B.arc(0,0,v,k,q,!D)):B.moveTo(S,U),h>u&&H>u?M>u?(E=T(V,W,Y,Z,h,-M,D),P=T(S,U,$,_,h,-M,D),B.lineTo(E.cx+E.x01,E.cy+E.y01),M<L?B.arc(E.cx,E.cy,M,f(E.y01,E.x01),f(P.y01,P.x01),!D):(B.arc(E.cx,E.cy,M,f(E.y01,E.x01),f(E.y11,E.x11),!D),B.arc(0,0,h,f(E.cy+E.y11,E.cx+E.x11),f(P.cy+P.y11,P.cx+P.x11),D),B.arc(P.cx,P.cy,M,f(P.y11,P.x11),f(P.y01,P.x01),!D))):B.arc(0,0,h,G,F,D):B.lineTo(V,W)}else B.moveTo(0,0);if(B.closePath(),n)return B=null,n+""||null}return D.centroid=function(){var n=(+x.apply(this,arguments)+ +A.apply(this,arguments))/2,t=(+w.apply(this,arguments)+ +b.apply(this,arguments))/2-r/2;return[c(t)*n,e(t)*n]},D.innerRadius=function(n){return arguments.length?(x="function"==typeof n?n:t(+n),D):x},D.outerRadius=function(n){return arguments.length?(A="function"==typeof n?n:t(+n),D):A},D.cornerRadius=function(n){return arguments.length?(R="function"==typeof n?n:t(+n),D):R},D.padRadius=function(n){return arguments.length?(j=null==n?null:"function"==typeof n?n:t(+n),D):j},D.startAngle=function(n){return arguments.length?(w="function"==typeof n?n:t(+n),D):w},D.endAngle=function(n){return arguments.length?(b="function"==typeof n?n:t(+n),D):b},D.padAngle=function(n){return arguments.length?(z="function"==typeof n?n:t(+n),D):z},D.context=function(n){return arguments.length?(B=null==n?null:n,D):B},D}export{A as a};
