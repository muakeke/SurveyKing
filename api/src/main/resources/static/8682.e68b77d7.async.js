(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8682],{52683:function(){},31930:function(){},81643:function(ee,W,n){"use strict";n.d(W,{Z:function(){return d}});var d=function(h){if(!h)return null;var P=typeof h=="function";return P?h():h}},51890:function(ee,W,n){"use strict";n.d(W,{C:function(){return Oe}});var d=n(22122),o=n(96156),h=n(90484),P=n(28481),i=n(67294),te=n(94184),U=n.n(te),G=n(6925),v=n(42550),_=n(65632),T=n(21687),m=n(24308),R=n(25378),L=i.createContext("default"),re=function(s){var O=s.children,u=s.size;return i.createElement(L.Consumer,null,function(f){return i.createElement(L.Provider,{value:u||f},O)})},V=L,X=function(x,s){var O={};for(var u in x)Object.prototype.hasOwnProperty.call(x,u)&&s.indexOf(u)<0&&(O[u]=x[u]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,u=Object.getOwnPropertySymbols(x);f<u.length;f++)s.indexOf(u[f])<0&&Object.prototype.propertyIsEnumerable.call(x,u[f])&&(O[u[f]]=x[u[f]]);return O},ne=function(s,O){var u,f,oe=i.useContext(V),Q=i.useState(1),B=(0,P.Z)(Q,2),S=B[0],Y=B[1],J=i.useState(!1),I=(0,P.Z)(J,2),w=I[0],e=I[1],t=i.useState(!0),r=(0,P.Z)(t,2),a=r[0],c=r[1],l=i.useRef(),E=i.useRef(),C=(0,v.sQ)(O,l),p=i.useContext(_.E_),A=p.getPrefixCls,N=function(){if(!(!E.current||!l.current)){var g=E.current.offsetWidth,$=l.current.offsetWidth;if(g!==0&&$!==0){var Me=s.gap,xe=Me===void 0?4:Me;xe*2<$&&Y($-xe*2<g?($-xe*2)/g:1)}}};i.useEffect(function(){e(!0)},[]),i.useEffect(function(){c(!0),Y(1)},[s.src]),i.useEffect(function(){N()},[s.gap]);var Pe=function(){var g=s.onError,$=g?g():void 0;$!==!1&&c(!1)},ve=s.prefixCls,ie=s.shape,M=s.size,K=s.src,de=s.srcSet,Z=s.icon,me=s.className,se=s.alt,le=s.draggable,H=s.children,k=s.crossOrigin,F=X(s,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),y=M==="default"?oe:M,ce=(0,R.Z)(),Re=i.useMemo(function(){if((0,h.Z)(y)!=="object")return{};var ue=m.c4.find(function($){return ce[$]}),g=y[ue];return g?{width:g,height:g,lineHeight:"".concat(g,"px"),fontSize:Z?g/2:18}:{}},[ce,y]);(0,T.Z)(!(typeof Z=="string"&&Z.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(Z,"` at https://ant.design/components/icon"));var D=A("avatar",ve),ge=U()((u={},(0,o.Z)(u,"".concat(D,"-lg"),y==="large"),(0,o.Z)(u,"".concat(D,"-sm"),y==="small"),u)),pe=i.isValidElement(K),ze=U()(D,ge,(f={},(0,o.Z)(f,"".concat(D,"-").concat(ie),!!ie),(0,o.Z)(f,"".concat(D,"-image"),pe||K&&a),(0,o.Z)(f,"".concat(D,"-icon"),!!Z),f),me),Se=typeof y=="number"?{width:y,height:y,lineHeight:"".concat(y,"px"),fontSize:Z?y/2:18}:{},q;if(typeof K=="string"&&a)q=i.createElement("img",{src:K,draggable:le,srcSet:de,onError:Pe,alt:se,crossOrigin:k});else if(pe)q=K;else if(Z)q=Z;else if(w||S!==1){var Ce="scale(".concat(S,") translateX(-50%)"),Ze={msTransform:Ce,WebkitTransform:Ce,transform:Ce},De=typeof y=="number"?{lineHeight:"".concat(y,"px")}:{};q=i.createElement(G.Z,{onResize:N},i.createElement("span",{className:"".concat(D,"-string"),ref:function(g){E.current=g},style:(0,d.Z)((0,d.Z)({},De),Ze)},H))}else q=i.createElement("span",{className:"".concat(D,"-string"),style:{opacity:0},ref:function(g){E.current=g}},H);return delete F.onError,delete F.gap,i.createElement("span",(0,d.Z)({},F,{style:(0,d.Z)((0,d.Z)((0,d.Z)({},Se),Re),F.style),className:ze,ref:C}),q)},b=i.forwardRef(ne);b.displayName="Avatar",b.defaultProps={shape:"circle",size:"default"};var ae=b,j=n(50344),he=n(96159),z=n(55241),Ee=function(s){var O=i.useContext(_.E_),u=O.getPrefixCls,f=O.direction,oe=s.prefixCls,Q=s.className,B=Q===void 0?"":Q,S=s.maxCount,Y=s.maxStyle,J=s.size,I=u("avatar-group",oe),w=U()(I,(0,o.Z)({},"".concat(I,"-rtl"),f==="rtl"),B),e=s.children,t=s.maxPopoverPlacement,r=t===void 0?"top":t,a=s.maxPopoverTrigger,c=a===void 0?"hover":a,l=(0,j.Z)(e).map(function(A,N){return(0,he.Tm)(A,{key:"avatar-key-".concat(N)})}),E=l.length;if(S&&S<E){var C=l.slice(0,S),p=l.slice(S,E);return C.push(i.createElement(z.Z,{key:"avatar-popover-key",content:p,trigger:c,placement:r,overlayClassName:"".concat(I,"-popover")},i.createElement(ae,{style:Y},"+".concat(E-S)))),i.createElement(re,{size:J},i.createElement("div",{className:w,style:s.style},C))}return i.createElement(re,{size:J},i.createElement("div",{className:w,style:s.style},l))},fe=Ee,ye=ae;ye.Group=fe;var Oe=ye},94233:function(ee,W,n){"use strict";var d=n(38663),o=n.n(d),h=n(52683),P=n.n(h),i=n(20136)},55241:function(ee,W,n){"use strict";var d=n(22122),o=n(67294),h=n(31097),P=n(65632),i=n(81643),te=n(33603),U=function(v,_){var T={};for(var m in v)Object.prototype.hasOwnProperty.call(v,m)&&_.indexOf(m)<0&&(T[m]=v[m]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var R=0,m=Object.getOwnPropertySymbols(v);R<m.length;R++)_.indexOf(m[R])<0&&Object.prototype.propertyIsEnumerable.call(v,m[R])&&(T[m[R]]=v[m[R]]);return T},G=o.forwardRef(function(v,_){var T=v.prefixCls,m=v.title,R=v.content,L=U(v,["prefixCls","title","content"]),re=o.useContext(P.E_),V=re.getPrefixCls,X=function(j){return o.createElement(o.Fragment,null,m&&o.createElement("div",{className:"".concat(j,"-title")},(0,i.Z)(m)),o.createElement("div",{className:"".concat(j,"-inner-content")},(0,i.Z)(R)))},ne=V("popover",T),b=V();return o.createElement(h.Z,(0,d.Z)({},L,{prefixCls:ne,ref:_,overlay:X(ne),transitionName:(0,te.m)(b,"zoom-big",L.transitionName)}))});G.displayName="Popover",G.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}},W.Z=G},20136:function(ee,W,n){"use strict";var d=n(38663),o=n.n(d),h=n(31930),P=n.n(h)},6925:function(ee,W,n){"use strict";n.d(W,{Z:function(){return w}});var d=n(22122),o=n(67294),h=n(59864);function P(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[];return o.Children.forEach(e,function(a){a==null&&!t.keepEmpty||(Array.isArray(a)?r=r.concat(P(a)):(0,h.isFragment)(a)&&a.props?r=r.concat(P(a.props.children,t)):r.push(a))}),r}var i={};function te(e,t){}function U(e,t){}function G(){i={}}function v(e,t,r){!t&&!i[r]&&(e(!1,r),i[r]=!0)}function _(e,t){v(te,e,t)}function T(e,t){v(U,e,t)}var m=null,R=n(28991),L=n(90484);function re(e,t,r){var a=React.useRef({});return(!("value"in a.current)||r(a.current.condition,t))&&(a.current.value=e(),a.current.condition=t),a.current.value}function V(e,t){typeof e=="function"?e(t):(0,L.Z)(e)==="object"&&e&&"current"in e&&(e.current=t)}function X(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=t.filter(function(c){return c});return a.length<=1?a[0]:function(c){t.forEach(function(l){V(l,c)})}}function ne(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return useMemo(function(){return X.apply(void 0,t)},t,function(a,c){return a.length===c.length&&a.every(function(l,E){return l===c[E]})})}function b(e){var t,r,a=(0,h.isMemo)(e)?e.type.type:e.type;return!(typeof a=="function"&&!((t=a.prototype)===null||t===void 0?void 0:t.render)||typeof e=="function"&&!((r=e.prototype)===null||r===void 0?void 0:r.render))}var ae=n(73935);function j(e){return e instanceof HTMLElement?e:ae.findDOMNode(e)}var he=n(91033),z=new Map;function Ee(e){e.forEach(function(t){var r,a=t.target;(r=z.get(a))===null||r===void 0||r.forEach(function(c){return c(a)})})}var fe=new he.Z(Ee),ye=null,Oe=null;function x(e,t){z.has(e)||(z.set(e,new Set),fe.observe(e)),z.get(e).add(t)}function s(e,t){z.has(e)&&(z.get(e).delete(t),z.get(e).size||(fe.unobserve(e),z.delete(e)))}var O=n(6610),u=n(5991),f=n(10379),oe=n(81907),Q=function(e){(0,f.Z)(r,e);var t=(0,oe.Z)(r);function r(){return(0,O.Z)(this,r),t.apply(this,arguments)}return(0,u.Z)(r,[{key:"render",value:function(){return this.props.children}}]),r}(o.Component),B=o.createContext(null);function S(e){var t=e.children,r=e.onBatchResize,a=o.useRef(0),c=o.useRef([]),l=o.useContext(B),E=o.useCallback(function(C,p,A){a.current+=1;var N=a.current;c.current.push({size:C,element:p,data:A}),Promise.resolve().then(function(){N===a.current&&(r==null||r(c.current),c.current=[])}),l==null||l(C,p,A)},[r,l]);return o.createElement(B.Provider,{value:E},t)}function Y(e){var t=e.children,r=e.disabled,a=o.useRef(null),c=o.useRef(null),l=o.useContext(B),E=typeof t=="function",C=E?t(a):t,p=o.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),A=!E&&o.isValidElement(C)&&b(C),N=A?C.ref:null,Pe=o.useMemo(function(){return X(N,a)},[N,a]),ve=o.useRef(e);ve.current=e;var ie=o.useCallback(function(M){var K=ve.current,de=K.onResize,Z=K.data,me=M.getBoundingClientRect(),se=me.width,le=me.height,H=M.offsetWidth,k=M.offsetHeight,F=Math.floor(se),y=Math.floor(le);if(p.current.width!==F||p.current.height!==y||p.current.offsetWidth!==H||p.current.offsetHeight!==k){var ce={width:F,height:y,offsetWidth:H,offsetHeight:k};p.current=ce;var Re=H===Math.round(se)?se:H,D=k===Math.round(le)?le:k,ge=(0,R.Z)((0,R.Z)({},ce),{},{offsetWidth:Re,offsetHeight:D});l==null||l(ge,M,Z),de&&Promise.resolve().then(function(){de(ge,M)})}},[]);return o.useEffect(function(){var M=j(a.current)||j(c.current);return M&&!r&&x(M,ie),function(){return s(M,ie)}},[a.current,r]),o.createElement(Q,{ref:c},A?o.cloneElement(C,{ref:Pe}):C)}var J="rc-observer-key";function I(e){var t=e.children,r=typeof t=="function"?[t]:P(t);return r.map(function(a,c){var l=(a==null?void 0:a.key)||"".concat(J,"-").concat(c);return o.createElement(Y,(0,d.Z)({},e,{key:l}),a)})}I.Collection=S;var w=I}}]);
