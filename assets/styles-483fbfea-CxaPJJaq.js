import{G as e}from"./graph-KoVDMSPu.js";import{S as t,r as n,f as r,s as o}from"./transform-DQq59FTQ.js";import{J as l,n as a,l as s,o as i,c,i as d,r as p,p as b,x as f,q as w,K as u}from"./mermaid-BSzfkLmF.js";import{r as g}from"./index-01f381cb-BBgmNCk_.js";import{hg as h}from"./index-Bh_LkwFB.js";import{c as y}from"./channel-D1tcX4DO.js";import{k}from"./step-CPXY0cSE.js";function x(e){return"string"==typeof e?new t([document.querySelectorAll(e)],[document.documentElement]):new t([r(e)],n)}function m(e,t){return!!e.children(t).length}function v(e){return T(e.v)+":"+T(e.w)+":"+T(e.name)}var S=/:/g;function T(e){return e?String(e).replace(S,"\\:"):""}function _(e,t){t&&e.attr("style",t)}function C(e,t,n){t&&e.attr("class",t).attr("class",n+" "+e.attr("class"))}function $(e,t){var n=t.graph();if(l(n)){var r=n.transition;if(h(r))return r(e)}return e}function E(e,t){var n=e.append("foreignObject").attr("width","100000"),r=n.append("xhtml:div");r.attr("xmlns","http://www.w3.org/1999/xhtml");var o=t.label;switch(typeof o){case"function":r.insert(o);break;case"object":r.insert((function(){return o}));break;default:r.html(o)}_(r,t.labelStyle),r.style("display","inline-block"),r.style("white-space","nowrap");var l=r.node().getBoundingClientRect();return n.attr("width",l.width).attr("height",l.height),n}const A={},B=async function(e,t,n,r,o,l){const b=r.select(`[id="${n}"]`),f=Object.keys(e);for(const w of f){const n=e[w];let r="default";n.classes.length>0&&(r=n.classes.join(" ")),r+=" flowchart-label";const f=a(n.styles);let u,g=void 0!==n.text?n.text:n.id;if(s.info("vertex",n,n.labelType),"markdown"===n.labelType)s.info("vertex",n,n.labelType);else if(i(c().flowchart.htmlLabels)){u=E(b,{label:g}).node(),u.parentNode.removeChild(u)}else{const e=o.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",f.labelStyle.replace("color:","fill:"));const t=g.split(d.lineBreakRegex);for(const n of t){const t=o.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=n,e.appendChild(t)}u=e}let h=0,y="";switch(n.type){case"round":h=5,y="rect";break;case"square":case"group":default:y="rect";break;case"diamond":y="question";break;case"hexagon":y="hexagon";break;case"odd":case"odd_right":y="rect_left_inv_arrow";break;case"lean_right":y="lean_right";break;case"lean_left":y="lean_left";break;case"trapezoid":y="trapezoid";break;case"inv_trapezoid":y="inv_trapezoid";break;case"circle":y="circle";break;case"ellipse":y="ellipse";break;case"stadium":y="stadium";break;case"subroutine":y="subroutine";break;case"cylinder":y="cylinder";break;case"doublecircle":y="doublecircle"}const k=await p(g,c());t.setNode(n.id,{labelStyle:f.labelStyle,shape:y,labelText:k,labelType:n.labelType,rx:h,ry:h,class:r,style:f.style,id:n.id,link:n.link,linkTarget:n.linkTarget,tooltip:l.db.getTooltip(n.id)||"",domId:l.db.lookUpDomId(n.id),haveCallback:n.haveCallback,width:"group"===n.type?500:void 0,dir:n.dir,type:n.type,props:n.props,padding:c().flowchart.padding}),s.info("setNode",{labelStyle:f.labelStyle,labelType:n.labelType,shape:y,labelText:k,rx:h,ry:h,class:r,style:f.style,id:n.id,domId:l.db.lookUpDomId(n.id),width:"group"===n.type?500:void 0,type:n.type,dir:n.dir,props:n.props,padding:c().flowchart.padding})}},j=async function(e,t,n){s.info("abc78 edges = ",e);let r,o,l=0,i={};if(void 0!==e.defaultStyle){const t=a(e.defaultStyle);r=t.style,o=t.labelStyle}for(const f of e){l++;const n="L-"+f.start+"-"+f.end;void 0===i[n]?(i[n]=0,s.info("abc78 new entry",n,i[n])):(i[n]++,s.info("abc78 new entry",n,i[n]));let w=n+"-"+i[n];s.info("abc78 new link id to be used is",n,w,i[n]);const u="LS-"+f.start,g="LE-"+f.end,h={style:"",labelStyle:""};switch(h.minlen=f.length||1,"arrow_open"===f.type?h.arrowhead="none":h.arrowhead="normal",h.arrowTypeStart="arrow_open",h.arrowTypeEnd="arrow_open",f.type){case"double_arrow_cross":h.arrowTypeStart="arrow_cross";case"arrow_cross":h.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":h.arrowTypeStart="arrow_point";case"arrow_point":h.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":h.arrowTypeStart="arrow_circle";case"arrow_circle":h.arrowTypeEnd="arrow_circle"}let y="",x="";switch(f.stroke){case"normal":y="fill:none;",void 0!==r&&(y=r),void 0!==o&&(x=o),h.thickness="normal",h.pattern="solid";break;case"dotted":h.thickness="normal",h.pattern="dotted",h.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":h.thickness="thick",h.pattern="solid",h.style="stroke-width: 3.5px;fill:none;";break;case"invisible":h.thickness="invisible",h.pattern="solid",h.style="stroke-width: 0;fill:none;"}if(void 0!==f.style){const e=a(f.style);y=e.style,x=e.labelStyle}h.style=h.style+=y,h.labelStyle=h.labelStyle+=x,void 0!==f.interpolate?h.curve=b(f.interpolate,k):void 0!==e.defaultInterpolate?h.curve=b(e.defaultInterpolate,k):h.curve=b(A.curve,k),void 0===f.text?void 0!==f.style&&(h.arrowheadStyle="fill: #333"):(h.arrowheadStyle="fill: #333",h.labelpos="c"),h.labelType=f.labelType,h.label=await p(f.text.replace(d.lineBreakRegex,"\n"),c()),void 0===f.style&&(h.style=h.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),h.labelStyle=h.labelStyle.replace("color:","fill:"),h.id=w,h.classes="flowchart-link "+u+" "+g,t.setEdge(f.start,f.end,h,l)}},L={setConf:function(e){const t=Object.keys(e);for(const n of t)A[n]=e[n]},addVertices:B,addEdges:j,getClasses:function(e,t){return t.db.getClasses()},draw:async function(t,n,r,l){s.info("Drawing flowchart");let a=l.db.getDirection();void 0===a&&(a="TD");const{securityLevel:i,flowchart:d}=c(),p=d.nodeSpacing||50,b=d.rankSpacing||50;let u;"sandbox"===i&&(u=o("#i"+n));const h=o("sandbox"===i?u.nodes()[0].contentDocument.body:"body"),y="sandbox"===i?u.nodes()[0].contentDocument:document,k=new e({multigraph:!0,compound:!0}).setGraph({rankdir:a,nodesep:p,ranksep:b,marginx:0,marginy:0}).setDefaultEdgeLabel((function(){return{}}));let m;const v=l.db.getSubGraphs();s.info("Subgraphs - ",v);for(let e=v.length-1;e>=0;e--)m=v[e],s.info("Subgraph - ",m),l.db.addVertex(m.id,{text:m.title,type:m.labelType},"group",void 0,m.classes,m.dir);const S=l.db.getVertices(),T=l.db.getEdges();s.info("Edges",T);let _=0;for(_=v.length-1;_>=0;_--){m=v[_],x("cluster").append("text");for(let e=0;e<m.nodes.length;e++)s.info("Setting up subgraphs",m.nodes[e],m.id),k.setParent(m.nodes[e],m.id)}await B(S,k,n,h,y,l),await j(T,k);const C=h.select(`[id="${n}"]`),$=h.select("#"+n+" g");if(await g($,k,["point","circle","cross"],"flowchart",n),f.insertTitle(C,"flowchartTitleText",d.titleTopMargin,l.db.getDiagramTitle()),w(k,C,d.diagramPadding,d.useMaxWidth),l.db.indexNodes("subGraph"+_),!d.htmlLabels){const e=y.querySelectorAll('[id="'+n+'"] .edgeLabel .label');for(const t of e){const e=t.getBBox(),n=y.createElementNS("http://www.w3.org/2000/svg","rect");n.setAttribute("rx",0),n.setAttribute("ry",0),n.setAttribute("width",e.width),n.setAttribute("height",e.height),t.insertBefore(n,t.firstChild)}}Object.keys(S).forEach((function(e){const t=S[e];if(t.link){const r=o("#"+n+' [id="'+e+'"]');if(r){const e=y.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",t.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",t.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===i?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):t.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",t.linkTarget);const n=r.insert((function(){return e}),":first-child"),o=r.select(".label-container");o&&n.append((function(){return o.node()}));const l=r.select(".label");l&&n.append((function(){return l.node()}))}}}))}},N=e=>`.label {\n    font-family: ${e.fontFamily};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n  .cluster-label text {\n    fill: ${e.titleColor};\n  }\n  .cluster-label span,p {\n    color: ${e.titleColor};\n  }\n\n  .label text,span,p {\n    fill: ${e.nodeTextColor||e.textColor};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${e.mainBkg};\n    stroke: ${e.nodeBorder};\n    stroke-width: 1px;\n  }\n  .flowchart-label text {\n    text-anchor: middle;\n  }\n  // .flowchart-label .text-outer-tspan {\n  //   text-anchor: middle;\n  // }\n  // .flowchart-label .text-inner-tspan {\n  //   text-anchor: start;\n  // }\n\n  .node .katex path {\n    fill: #000;\n    stroke: #000;\n    stroke-width: 1px;\n  }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${e.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${e.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${e.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${e.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n      background-color: ${e.edgeLabelBackground};\n      fill: ${e.edgeLabelBackground};\n    }\n    text-align: center;\n  }\n\n  /* For html labels only */\n  .labelBkg {\n    background-color: ${((e,t)=>{const n=y,r=n(e,"r"),o=n(e,"g"),l=n(e,"b");return u(r,o,l,t)})(e.edgeLabelBackground,.5)};\n    // background-color: \n  }\n\n  .cluster rect {\n    fill: ${e.clusterBkg};\n    stroke: ${e.clusterBorder};\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${e.titleColor};\n  }\n\n  .cluster span,p {\n    color: ${e.titleColor};\n  }\n  /* .cluster div {\n    color: ${e.titleColor};\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${e.fontFamily};\n    font-size: 12px;\n    background: ${e.tertiaryColor};\n    border: 1px solid ${e.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${e.textColor};\n  }\n`;export{_ as a,E as b,$ as c,C as d,v as e,L as f,N as g,m as i,x as s};
