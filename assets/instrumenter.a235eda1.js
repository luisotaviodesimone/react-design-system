var re=Object.defineProperty;var a=(t,n)=>re(t,"name",{value:n,configurable:!0});import{G as ie,H as ae,I as se,J as oe,K as ue,L as le,M as fe,k as ce,d as de,w as _}from"./iframe.834e5828.js";import"./es.map.constructor.0b664d78.js";var he=ie,ve=ae;he("toPrimitive");ve();var ge=se,Se=oe,Ee=TypeError,ye=a(function(t){if(ge(this),t==="string"||t==="default")t="string";else if(t!=="number")throw Ee("Incorrect hint");return Se(this,t)},"dateToPrimitive$1"),_e=ue,Re=le,Oe=ye,Te=fe,k=Te("toPrimitive"),W=Date.prototype;_e(W,k)||Re(W,k,Oe);var K;function pe(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}a(pe,"_taggedTemplateLiteral");function me(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}a(me,"_classCallCheck$2");function $(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}a($,"_defineProperties$2");function Ie(t,n,e){return n&&$(t.prototype,n),e&&$(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}a(Ie,"_createClass$2");var be=a(function(){return Math.random().toString(16).slice(2)},"generateRandomId"),Ae=function(){function t(){var n=this,e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=e.transport,i=e.async,s=i===void 0?!1:i;me(this,t),this.isAsync=void 0,this.sender=be(),this.events={},this.data={},this.transport=void 0,this.addPeerListener=ce(function(f,c){n.addListener(f,c)},de(K||(K=pe([`
      channel.addPeerListener is deprecated
    `])))),this.isAsync=s,r&&(this.transport=r,this.transport.setHandler(function(f){return n.handleEvent(f)}))}return a(t,"Channel"),Ie(t,[{key:"hasTransport",get:a(function(){return!!this.transport},"get")},{key:"addListener",value:a(function(e,r){this.events[e]=this.events[e]||[],this.events[e].push(r)},"addListener")},{key:"emit",value:a(function(e){for(var r=this,i=arguments.length,s=new Array(i>1?i-1:0),f=1;f<i;f++)s[f-1]=arguments[f];var c={type:e,args:s,from:this.sender},d={};s.length>=1&&s[0]&&s[0].options&&(d=s[0].options);var l=a(function(){r.transport&&r.transport.send(c,d),r.handleEvent(c)},"handler");this.isAsync?setImmediate(l):l()},"emit")},{key:"last",value:a(function(e){return this.data[e]},"last")},{key:"eventNames",value:a(function(){return Object.keys(this.events)},"eventNames")},{key:"listenerCount",value:a(function(e){var r=this.listeners(e);return r?r.length:0},"listenerCount")},{key:"listeners",value:a(function(e){var r=this.events[e];return r||void 0},"listeners")},{key:"once",value:a(function(e,r){var i=this.onceListener(e,r);this.addListener(e,i)},"once")},{key:"removeAllListeners",value:a(function(e){e?this.events[e]&&delete this.events[e]:this.events={}},"removeAllListeners")},{key:"removeListener",value:a(function(e,r){var i=this.listeners(e);i&&(this.events[e]=i.filter(function(s){return s!==r}))},"removeListener")},{key:"on",value:a(function(e,r){this.addListener(e,r)},"on")},{key:"off",value:a(function(e,r){this.removeListener(e,r)},"off")},{key:"handleEvent",value:a(function(e){var r=this.listeners(e.type);r&&r.length&&r.forEach(function(i){i.apply(e,e.args)}),this.data[e.type]=e.args},"handleEvent")},{key:"onceListener",value:a(function(e,r){var i=this,s=a(function f(){return i.removeListener(e,f),r.apply(void 0,arguments)},"onceListener");return s},"onceListener")}]),t}();const we=Ae;var Ce=_.LOGLEVEL,b=_.console,w={trace:1,debug:2,info:3,warn:4,error:5,silent:10},De=Ce,D=w[De]||w.info,G={trace:a(function(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];return D<=w.trace&&b.trace.apply(b,[n].concat(r))},"trace"),debug:a(function(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];return D<=w.debug&&b.debug.apply(b,[n].concat(r))},"debug"),info:a(function(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];return D<=w.info&&b.info.apply(b,[n].concat(r))},"info"),warn:a(function(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];return D<=w.warn&&b.warn.apply(b,[n].concat(r))},"warn"),error:a(function(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];return D<=w.error&&b.error.apply(b,[n].concat(r))},"error"),log:a(function(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];return D<w.silent&&b.log.apply(b,[n].concat(r))},"log")},x=new Set,p=a(function(n){return function(e){if(!x.has(e)){x.add(e);for(var r=arguments.length,i=new Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];return G[n].apply(G,[e].concat(i))}}},"once");p.clear=function(){return x.clear()};p.trace=p("trace");p.debug=p("debug");p.info=p("info");p.warn=p("warn");p.error=p("error");p.log=p("log");function Ne(){var t={setHandler:a(function(){},"setHandler"),send:a(function(){},"send")};return new we({transport:t})}a(Ne,"mockChannel");var B;(function(t){t.TAB="tab",t.PANEL="panel",t.TOOL="tool",t.TOOLEXTRA="toolextra",t.PREVIEW="preview",t.NOTES_ELEMENT="notes-element"})(B||(B={}));function V(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}a(V,"_defineProperties$1");function Pe(t,n,e){return n&&V(t.prototype,n),e&&V(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}a(Pe,"_createClass$1");function Le(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}a(Le,"_classCallCheck$1");var Ue=Pe(a(function t(){var n=this;Le(this,t),this.loaders={},this.elements={},this.config={},this.channel=void 0,this.serverChannel=void 0,this.promise=void 0,this.resolve=void 0,this.getChannel=function(){return n.channel||n.setChannel(Ne()),n.channel},this.getServerChannel=function(){if(!n.serverChannel)throw new Error("Accessing non-existent serverChannel");return n.serverChannel},this.ready=function(){return n.promise},this.hasChannel=function(){return!!n.channel},this.hasServerChannel=function(){return!!n.serverChannel},this.setChannel=function(e){n.channel=e,n.resolve()},this.setServerChannel=function(e){n.serverChannel=e},this.getElements=function(e){return n.elements[e]||(n.elements[e]={}),n.elements[e]},this.addPanel=function(e,r){n.add(e,Object.assign({type:B.PANEL},r))},this.add=function(e,r){var i=r.type,s=n.getElements(i);s[e]=Object.assign({id:e},r)},this.setConfig=function(e){Object.assign(n.config,e)},this.getConfig=function(){return n.config},this.register=function(e,r){n.loaders[e]&&G.warn("".concat(e," was loaded twice, this could have bad side-effects")),n.loaders[e]=r},this.loadAddons=function(e){Object.values(n.loaders).forEach(function(r){return r(e)})},this.promise=new Promise(function(e){n.resolve=function(){return e(n.getChannel())}})},"AddonStore")),L="__STORYBOOK_ADDONS";function je(){return _[L]||(_[L]=new Ue),_[L]}a(je,"getAddonsStore");var Ye=je(),S;(function(t){t.CHANNEL_CREATED="channelCreated",t.CONFIG_ERROR="configError",t.STORY_INDEX_INVALIDATED="storyIndexInvalidated",t.STORY_SPECIFIED="storySpecified",t.SET_STORIES="setStories",t.SET_CURRENT_STORY="setCurrentStory",t.CURRENT_STORY_WAS_SET="currentStoryWasSet",t.FORCE_RE_RENDER="forceReRender",t.FORCE_REMOUNT="forceRemount",t.PRELOAD_STORIES="preloadStories",t.STORY_PREPARED="storyPrepared",t.STORY_CHANGED="storyChanged",t.STORY_UNCHANGED="storyUnchanged",t.STORY_RENDERED="storyRendered",t.STORY_MISSING="storyMissing",t.STORY_ERRORED="storyErrored",t.STORY_THREW_EXCEPTION="storyThrewException",t.STORY_RENDER_PHASE_CHANGED="storyRenderPhaseChanged",t.UPDATE_STORY_ARGS="updateStoryArgs",t.STORY_ARGS_UPDATED="storyArgsUpdated",t.RESET_STORY_ARGS="resetStoryArgs",t.SET_GLOBALS="setGlobals",t.UPDATE_GLOBALS="updateGlobals",t.GLOBALS_UPDATED="globalsUpdated",t.REGISTER_SUBSCRIPTION="registerSubscription",t.PREVIEW_KEYDOWN="previewKeydown",t.SELECT_STORY="selectStory",t.STORIES_COLLAPSE_ALL="storiesCollapseAll",t.STORIES_EXPAND_ALL="storiesExpandAll",t.DOCS_RENDERED="docsRendered",t.SHARED_STATE_CHANGED="sharedStateChanged",t.SHARED_STATE_SET="sharedStateSet",t.NAVIGATE_URL="navigateUrl",t.UPDATE_QUERY_PARAMS="updateQueryParams"})(S||(S={}));S.CHANNEL_CREATED;S.CONFIG_ERROR;S.STORY_INDEX_INVALIDATED;S.STORY_SPECIFIED;S.SET_STORIES;var Ge=S.SET_CURRENT_STORY;S.CURRENT_STORY_WAS_SET;S.FORCE_RE_RENDER;var F=S.FORCE_REMOUNT;S.STORY_PREPARED;S.STORY_CHANGED;S.STORY_UNCHANGED;S.PRELOAD_STORIES;S.STORY_RENDERED;S.STORY_MISSING;S.STORY_ERRORED;S.STORY_THREW_EXCEPTION;var xe=S.STORY_RENDER_PHASE_CHANGED;S.UPDATE_STORY_ARGS;S.STORY_ARGS_UPDATED;S.RESET_STORY_ARGS;S.SET_GLOBALS;S.UPDATE_GLOBALS;S.GLOBALS_UPDATED;S.REGISTER_SUBSCRIPTION;S.PREVIEW_KEYDOWN;S.SELECT_STORY;S.STORIES_COLLAPSE_ALL;S.STORIES_EXPAND_ALL;S.DOCS_RENDERED;S.SHARED_STATE_CHANGED;S.SHARED_STATE_SET;S.NAVIGATE_URL;S.UPDATE_QUERY_PARAMS;var Be=new Error("ignoredException"),m;(function(t){t.DONE="done",t.ERROR="error",t.ACTIVE="active",t.WAITING="waiting"})(m||(m={}));var U;function N(t){return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},N(t)}a(N,"_typeof");function He(t,n){if(t==null)return{};var e=Me(t,n),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(n.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(e[r]=t[r]))}return e}a(He,"_objectWithoutProperties");function Me(t,n){if(t==null)return{};var e={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(n.indexOf(i)>=0)&&(e[i]=t[i]);return e}a(Me,"_objectWithoutPropertiesLoose");function ke(t){var n=We(t,"string");return N(n)==="symbol"?n:String(n)}a(ke,"_toPropertyKey");function We(t,n){if(N(t)!=="object"||t===null)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var r=e.call(t,n||"default");if(N(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}a(We,"_toPrimitive");function P(t){return Ve(t)||$e(t)||ee(t)||Ke()}a(P,"_toConsumableArray");function Ke(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}a(Ke,"_nonIterableSpread");function $e(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}a($e,"_iterableToArray");function Ve(t){if(Array.isArray(t))return H(t)}a(Ve,"_arrayWithoutHoles");function j(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}a(j,"_defineProperty");function Fe(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}a(Fe,"_classCallCheck");function X(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}a(X,"_defineProperties");function Xe(t,n,e){return n&&X(t.prototype,n),e&&X(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}a(Xe,"_createClass");function Z(t,n){return Je(t)||Qe(t,n)||ee(t,n)||ze()}a(Z,"_slicedToArray");function ze(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}a(ze,"_nonIterableRest");function ee(t,n){if(!!t){if(typeof t=="string")return H(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return H(t,n)}}a(ee,"_unsupportedIterableToArray");function H(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}a(H,"_arrayLikeToArray");function Qe(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var r=[],i=!0,s=!1,f,c;try{for(e=e.call(t);!(i=(f=e.next()).done)&&(r.push(f.value),!(n&&r.length===n));i=!0);}catch(d){s=!0,c=d}finally{try{!i&&e.return!=null&&e.return()}finally{if(s)throw c}}return r}}a(Qe,"_iterableToArrayLimit");function Je(t){if(Array.isArray(t))return t}a(Je,"_arrayWithHoles");var A={CALL:"instrumenter/call",SYNC:"instrumenter/sync",START:"instrumenter/start",BACK:"instrumenter/back",GOTO:"instrumenter/goto",NEXT:"instrumenter/next",END:"instrumenter/end"},te=((U=_.FEATURES)===null||U===void 0?void 0:U.interactionsDebugger)!==!0,z={debugger:!te,start:!1,back:!1,goto:!1,next:!1,end:!1},Q=new Error("This function ran after the play function completed. Did you forget to `await` it?"),J=a(function(n){return Object.prototype.toString.call(n)==="[object Object]"},"isObject"),qe=a(function(n){return Object.prototype.toString.call(n)==="[object Module]"},"isModule"),Ze=a(function(n){if(!J(n)&&!qe(n))return!1;if(n.constructor===void 0)return!0;var e=n.constructor.prototype;return!(!J(e)||Object.prototype.hasOwnProperty.call(e,"isPrototypeOf")===!1)},"isInstrumentable"),et=a(function(n){try{return new n.constructor}catch{return{}}},"construct"),Y=a(function(){return{renderPhase:void 0,isDebugging:!1,isPlaying:!1,isLocked:!1,cursor:0,calls:[],shadowCalls:[],callRefsByResult:new Map,chainedCallIds:new Set,parentId:void 0,playUntil:void 0,resolvers:{},syncTimeout:void 0,forwardedException:void 0}},"getInitialState"),q=a(function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=(e?n.shadowCalls:n.calls).filter(function(s){return s.retain});if(!!r.length){var i=new Map(Array.from(n.callRefsByResult.entries()).filter(function(s){var f=Z(s,2),c=f[1];return c.retain}));return{cursor:r.length,calls:r,callRefsByResult:i}}},"getRetainedState"),tt=function(){function t(){var n=this;Fe(this,t),this.channel=void 0,this.initialized=!1,this.state=void 0,this.channel=Ye.getChannel(),this.state=_.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__||{};var e=a(function(l){var o=l.storyId,h=l.isPlaying,E=h===void 0?!0:h,g=l.isDebugging,u=g===void 0?!1:g,v=n.getState(o);n.setState(o,Object.assign({},Y(),q(v,u),{shadowCalls:u?v.shadowCalls:[],chainedCallIds:u?v.chainedCallIds:new Set,playUntil:u?v.playUntil:void 0,isPlaying:E,isDebugging:u})),u||n.sync(o)},"resetState");this.channel.on(F,e),this.channel.on(xe,function(d){var l=d.storyId,o=d.newPhase,h=n.getState(l),E=h.isDebugging,g=h.forwardedException;if(n.setState(l,{renderPhase:o}),o==="playing"&&e({storyId:l,isDebugging:E}),o==="played"&&(n.setState(l,{isLocked:!1,isPlaying:!1,isDebugging:!1,forwardedException:void 0}),g))throw g}),this.channel.on(Ge,function(){n.initialized?n.cleanup():n.initialized=!0});var r=a(function(l){var o=l.storyId,h=l.playUntil;n.getState(o).isDebugging||n.setState(o,function(g){var u=g.calls;return{calls:[],shadowCalls:u.map(function(v){return Object.assign({},v,{status:m.WAITING})}),isDebugging:!0}});var E=n.getLog(o);n.setState(o,function(g){var u,v=g.shadowCalls,R=v.findIndex(function(y){return y.id===E[0].callId});return{playUntil:h||((u=v.slice(0,R).filter(function(y){return y.interceptable}).slice(-1)[0])===null||u===void 0?void 0:u.id)}}),n.channel.emit(F,{storyId:o,isDebugging:!0})},"start"),i=a(function(l){var o,h=l.storyId,E=n.getState(h),g=E.isDebugging,u=n.getLog(h),v=g?u.findIndex(function(R){var y=R.status;return y===m.WAITING}):u.length;r({storyId:h,playUntil:(o=u[v-2])===null||o===void 0?void 0:o.callId})},"back"),s=a(function(l){var o=l.storyId,h=l.callId,E=n.getState(o),g=E.calls,u=E.shadowCalls,v=E.resolvers,R=g.find(function(T){var C=T.id;return C===h}),y=u.find(function(T){var C=T.id;return C===h});if(!R&&y&&Object.values(v).length>0){var O,I=(O=n.getLog(o).find(function(T){return T.status===m.WAITING}))===null||O===void 0?void 0:O.callId;y.id!==I&&n.setState(o,{playUntil:y.id}),Object.values(v).forEach(function(T){return T()})}else r({storyId:o,playUntil:h})},"goto"),f=a(function(l){var o=l.storyId,h=n.getState(o),E=h.resolvers;if(Object.values(E).length>0)Object.values(E).forEach(function(v){return v()});else{var g,u=(g=n.getLog(o).find(function(v){return v.status===m.WAITING}))===null||g===void 0?void 0:g.callId;u?r({storyId:o,playUntil:u}):c({storyId:o})}},"next"),c=a(function(l){var o=l.storyId;n.setState(o,{playUntil:void 0,isDebugging:!1}),Object.values(n.getState(o).resolvers).forEach(function(h){return h()})},"end");this.channel.on(A.START,r),this.channel.on(A.BACK,i),this.channel.on(A.GOTO,s),this.channel.on(A.NEXT,f),this.channel.on(A.END,c)}return a(t,"Instrumenter"),Xe(t,[{key:"getState",value:a(function(e){return this.state[e]||Y()},"getState")},{key:"setState",value:a(function(e,r){var i=this.getState(e),s=typeof r=="function"?r(i):r;this.state=Object.assign({},this.state,j({},e,Object.assign({},i,s))),_.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state},"setState")},{key:"cleanup",value:a(function(){this.state=Object.entries(this.state).reduce(function(e,r){var i=Z(r,2),s=i[0],f=i[1],c=q(f);return c&&(e[s]=Object.assign(Y(),c)),e},{}),this.channel.emit(A.SYNC,{controlStates:z,logItems:[]}),_.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state},"cleanup")},{key:"getLog",value:a(function(e){var r=this.getState(e),i=r.calls,s=r.shadowCalls,f=P(s);i.forEach(function(d,l){f[l]=d});var c=new Set;return f.reduceRight(function(d,l){return l.args.forEach(function(o){o!=null&&o.__callId__&&c.add(o.__callId__)}),l.path.forEach(function(o){o.__callId__&&c.add(o.__callId__)}),l.interceptable&&!c.has(l.id)&&(d.unshift({callId:l.id,status:l.status}),c.add(l.id)),d},[])},"getLog")},{key:"instrument",value:a(function(e,r){var i=this;if(!Ze(e))return e;var s=r.mutate,f=s===void 0?!1:s,c=r.path,d=c===void 0?[]:c;return Object.keys(e).reduce(function(l,o){var h=e[o];return typeof h!="function"?(l[o]=i.instrument(h,Object.assign({},r,{path:d.concat(o)})),l):typeof h.__originalFn__=="function"?(l[o]=h,l):(l[o]=function(){for(var E=arguments.length,g=new Array(E),u=0;u<E;u++)g[u]=arguments[u];return i.track(o,h,g,r)},l[o].__originalFn__=h,Object.defineProperty(l[o],"name",{value:o,writable:!1}),Object.keys(h).length>0&&Object.assign(l[o],i.instrument(Object.assign({},h),Object.assign({},r,{path:d.concat(o)}))),l)},f?e:et(e))},"instrument")},{key:"track",value:a(function(e,r,i,s){var f,c,d,l,o=(i==null||(f=i[0])===null||f===void 0?void 0:f.__storyId__)||((c=_.window.__STORYBOOK_PREVIEW__)===null||c===void 0||(d=c.urlStore)===null||d===void 0||(l=d.selection)===null||l===void 0?void 0:l.storyId),h=this.getState(o),E=h.cursor,g=h.parentId;this.setState(o,{cursor:E+1});var u="".concat(g||o," [").concat(E,"] ").concat(e),v=s.path,R=v===void 0?[]:v,y=s.intercept,O=y===void 0?!1:y,I=s.retain,T=I===void 0?!1:I,C=typeof O=="function"?O(e,R):O,M={id:u,parentId:g,storyId:o,cursor:E,path:R,method:e,args:i,interceptable:C,retain:T},ne=(C?this.intercept:this.invoke).call(this,r,M,s);return this.instrument(ne,Object.assign({},s,{mutate:!0,path:[{__callId__:M.id}]}))},"track")},{key:"intercept",value:a(function(e,r,i){var s=this,f=this.getState(r.storyId),c=f.chainedCallIds,d=f.isDebugging,l=f.playUntil,o=c.has(r.id);return!d||o||l?(l===r.id&&this.setState(r.storyId,{playUntil:void 0}),this.invoke(e,r,i)):new Promise(function(h){s.setState(r.storyId,function(E){var g=E.resolvers;return{isLocked:!1,resolvers:Object.assign({},g,j({},r.id,h))}})}).then(function(){return s.setState(r.storyId,function(h){var E=h.resolvers,g=r.id;E[g];var u=He(E,[g].map(ke));return{isLocked:!0,resolvers:u}}),s.invoke(e,r,i)})},"intercept")},{key:"invoke",value:a(function(e,r,i){var s=this,f=this.getState(r.storyId),c=f.callRefsByResult,d=f.forwardedException,l=f.renderPhase,o=Object.assign({},r,{args:r.args.map(function(u){if(c.has(u))return c.get(u);if(u instanceof _.window.HTMLElement){var v=u.prefix,R=u.localName,y=u.id,O=u.classList,I=u.innerText,T=Array.from(O);return{__element__:{prefix:v,localName:R,id:y,classNames:T,innerText:I}}}return u})});r.path.forEach(function(u){u!=null&&u.__callId__&&s.setState(r.storyId,function(v){var R=v.chainedCallIds;return{chainedCallIds:new Set(Array.from(R).concat(u.__callId__))}})});var h=a(function(v){if(v instanceof Error){var R=v.name,y=v.message,O=v.stack,I={name:R,message:y,stack:O};if(s.update(Object.assign({},o,{status:m.ERROR,exception:I})),s.setState(r.storyId,function(T){return{callRefsByResult:new Map([].concat(P(Array.from(T.callRefsByResult.entries())),[[v,{__callId__:r.id,retain:r.retain}]]))}}),r.interceptable&&v!==Q)throw Be;return s.setState(r.storyId,{forwardedException:v}),v}throw v},"handleException");try{if(d)throw this.setState(r.storyId,{forwardedException:void 0}),d;if(l==="played"&&!r.retain)throw Q;var E=i.getArgs?i.getArgs(r,this.getState(r.storyId)):r.args,g=e.apply(void 0,P(E.map(function(u){return typeof u!="function"||Object.keys(u).length?u:function(){var v=s.getState(r.storyId),R=v.cursor,y=v.parentId;s.setState(r.storyId,{cursor:0,parentId:r.id});var O=a(function(){return s.setState(r.storyId,{cursor:R,parentId:y})},"restore"),I=u.apply(void 0,arguments);return I instanceof Promise?I.then(O,O):O(),I}})));return g&&["object","function","symbol"].includes(N(g))&&this.setState(r.storyId,function(u){return{callRefsByResult:new Map([].concat(P(Array.from(u.callRefsByResult.entries())),[[g,{__callId__:r.id,retain:r.retain}]]))}}),this.update(Object.assign({},o,{status:g instanceof Promise?m.ACTIVE:m.DONE})),g instanceof Promise?g.then(function(u){return s.update(Object.assign({},o,{status:m.DONE})),u},h):g}catch(u){return h(u)}},"invoke")},{key:"update",value:a(function(e){var r=this;clearTimeout(this.getState(e.storyId).syncTimeout),this.channel.emit(A.CALL,e),this.setState(e.storyId,function(i){var s=i.calls,f=s.concat(e).reduce(function(c,d){return Object.assign(c,j({},d.id,d))},{});return{calls:Object.values(f).sort(function(c,d){return c.id.localeCompare(d.id,void 0,{numeric:!0})}),syncTimeout:setTimeout(function(){return r.sync(e.storyId)},0)}})},"update")},{key:"sync",value:a(function(e){var r=this.getState(e),i=r.isLocked,s=r.isPlaying,f=this.getLog(e),c=f.some(function(o){return o.status===m.ACTIVE});if(te||i||c||f.length===0){this.channel.emit(A.SYNC,{controlStates:z,logItems:f});return}var d=f.some(function(o){return[m.DONE,m.ERROR].includes(o.status)}),l={debugger:!0,start:d,back:d,goto:!0,next:s,end:s};this.channel.emit(A.SYNC,{controlStates:l,logItems:f})},"sync")}]),t}();function at(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};try{var e,r,i,s,f=!1,c=!1;if(((e=_.window.location)===null||e===void 0||(r=e.search)===null||r===void 0?void 0:r.indexOf("instrument=true"))!==-1?f=!0:((i=_.window.location)===null||i===void 0||(s=i.search)===null||s===void 0?void 0:s.indexOf("instrument=false"))!==-1&&(c=!0),_.window.parent===_.window&&!f||c)return t;_.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__||(_.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__=new tt);var d=_.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__;return d.instrument(t,n)}catch(l){return p.warn(l),t}}a(at,"instrument");export{at as i};
//# sourceMappingURL=instrumenter.a235eda1.js.map
