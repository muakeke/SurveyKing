(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[4371],{30889:function(at,D,e){"use strict";e.r(D),e.d(D,{default:function(){return nt}});var y=e(11849),h=e(2824),i=e(67294),K=e(69968),G=e(8935),L=e(94184),z=e.n(L),J=e(93224),M=e(91512),p=e(68654),I=e(54549),Q=e(69610),U=e(27361),V=e.n(U),t=e(85893),it={},X=function s(){var a=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(0,Q.Z)(this,s),this._registry=void 0,this.registerComponent=function(r,v){a._registry[r]=v},this.getComponent=function(r){return V()(a._registry,"".concat(r),function(){return(0,t.jsxs)("div",{children:[r,"\u5BF9\u5E94\u7EC4\u4EF6\u672A\u6CE8\u518C"]})})},this._registry=n},T=new X,Y=function(a){var n=a.tabs,r=a.defaultActive,v=(0,i.useState)(r||n[0].key),l=(0,h.Z)(v,2),d=l[0],u=l[1],g=function(m){u(m),a.onChange(m)};return(0,t.jsx)("div",{className:"tabs-nav-list",children:n.map(function(o){return(0,t.jsx)("div",{onClick:function(){return g(o.key)},className:z()("tabs-tab",{active:d===o.key}),children:o.title},o.key)})})},O=i.createContext({});function lt(){return useContext(O)}var $=i.forwardRef(function(s,a){var n=s.className,r=s.id,v=s.type,l=s.children,d=s.title,u=s.tabs,g=s.widgetProps,o=s.toggleFullScreen,m=s.dataGrid,S=(0,J.Z)(s,["className","id","type","children","title","tabs","widgetProps","toggleFullScreen","dataGrid"]),F=(0,i.useState)(u&&u[0].key),j=(0,h.Z)(F,2),f=j[0],x=j[1],c=(0,i.useState)(!1),E=(0,h.Z)(c,2),B=E[0],H=E[1],st=function(){return u?(0,t.jsx)(Y,{tabs:u,onChange:function(C){return x(C)}}):(0,t.jsx)("span",{className:"",children:d})};return(0,t.jsxs)("div",(0,y.Z)((0,y.Z)({className:["widget",n].join(" ")},S),{},{ref:a,children:[(0,t.jsxs)("div",{className:"header",children:[(0,t.jsxs)("span",{className:"title",children:[st(),(0,t.jsx)("div",{className:"drag-handle"})]}),(0,t.jsxs)("div",{className:"widget-controls",children:[B&&(0,t.jsx)(M.Z,{className:"control-item",onClick:function(){H(!1),o()}}),!B&&(0,t.jsx)(p.Z,{className:"control-item",onClick:function(){H(!0),o()}}),(0,t.jsx)(I.Z,{className:"control-item"})]})]}),(0,t.jsx)(G.SizeMe,{monitorHeight:!0,children:function(W){var C=W.size;return(0,t.jsx)(O.Provider,{value:{height:C.height||0,width:C.width||0,activeKey:f},children:(0,t.jsx)("div",{style:{height:"100%"},children:i.createElement(T.getComponent(v),g)})})}}),l]}),r)}),k=function(a){var n=a.className,r=(0,i.useState)(a.data),v=(0,h.Z)(r,2),l=v[0],d=v[1];(0,i.useEffect)(function(){d(a.data)},[a.data]);var u=(0,i.useRef)(0),g=(0,i.useState)(),o=(0,h.Z)(g,2),m=o[0],S=o[1],F=function(f){if(m)d(m.cacheData),S(void 0);else{var x=JSON.parse(JSON.stringify(l.find(function(c){return c.id===f})));S({id:f,cacheData:l}),x.dataGrid={x:0,y:0,w:12,h:(u.current-100)/150,i:f,static:!0},d([x])}};return(0,t.jsx)("div",{className:z()("dynamic-grid",n),children:(0,t.jsx)(G.SizeMe,{monitorHeight:!0,children:function(f){var x=f.size;return u.current=x.height||0,(0,t.jsx)(K.Responsive,{autoSize:!1,className:"layout",draggableHandle:".drag-handle",breakpoints:{lg:1200,md:996,sm:768,xs:480,xxs:0},cols:{lg:12,md:12,sm:12,xs:4,xxs:2},width:x.width||0,layouts:{lg:l.map(function(c){return c.dataGrid}),md:l.map(function(c){return c.dataGrid})},useCSSTransforms:!1,children:l.map(function(c){return(0,t.jsx)($,(0,y.Z)((0,y.Z)({},c),{},{toggleFullScreen:function(){return F(c.id)}}),c.id)})})}})})},w=k,rt=e(13062),b=e(71230),ut=e(89032),Z=e(15746),dt=e(95300),N=e(7277),ot=e(22385),P=e(31097),q=e(68489),R=e(68628),_=e(2299),tt=(0,_.Pi)(function(){var s=(0,i.useState)(),a=(0,h.Z)(s,2),n=a[0],r=a[1],v=(0,i.useState)(!1),l=(0,h.Z)(v,2),d=l[0],u=l[1];return(0,i.useEffect)(function(){u(!0),q.hi.getFlowStatics().then(function(g){g&&r(g),u(!1)})},[]),(0,t.jsxs)(b.Z,{style:{marginTop:20},children:[(0,t.jsx)(Z.Z,{span:8,style:{textAlign:"center"},children:(0,t.jsx)(N.Z,{loading:d,title:(0,t.jsxs)("span",{children:["\u5168\u90E8\u5F85\u529E",(0,t.jsx)(P.Z,{title:"\u6211\u7684\u5168\u90E8\u5F85\u529E\u4EFB\u52A1",children:(0,t.jsx)(R.Z,{style:{marginLeft:8}})})]}),valueStyle:{cursor:"pointer"},value:n==null?void 0:n.todo})}),(0,t.jsx)(Z.Z,{span:8,style:{textAlign:"center"},children:(0,t.jsx)(N.Z,{loading:d,title:(0,t.jsx)("span",{children:"\u5DF2\u529E\u4EFB\u52A1"}),value:n==null?void 0:n.finished,valueStyle:{cursor:"pointer"}})}),(0,t.jsx)(Z.Z,{span:8,style:{textAlign:"center"},children:(0,t.jsx)(N.Z,{loading:d,title:(0,t.jsxs)("span",{children:["\u6211\u53D1\u8D77\u7684",(0,t.jsx)(P.Z,{title:"\u6211\u53D1\u8D77\u7684\u4E14\u6B63\u5728\u5BA1\u6279\u7684\u4EFB\u52A1",children:(0,t.jsx)(R.Z,{style:{marginLeft:8}})})]}),value:n==null?void 0:n.selfCreated,valueStyle:{cursor:"pointer"}})})]})});T.registerComponent("taskCenter",tt);var et=function(){return(0,t.jsx)("div",{style:{height:"100%"},children:(0,t.jsx)(w,{data:[{id:"taskCenter",type:"taskCenter",title:"\u6211\u7684\u4EFB\u52A1",dataGrid:{x:0,y:0,w:4,h:1,i:"taskCenter"}}]})})},nt=et}}]);
