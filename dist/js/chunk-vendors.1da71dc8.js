(self["webpackChunkJorgeMopanc"]=self["webpackChunkJorgeMopanc"]||[]).push([[998],{9662:function(t,e,n){var r=n(614),i=n(6330),s=TypeError;t.exports=function(t){if(r(t))return t;throw s(i(t)+" is not a function")}},6077:function(t,e,n){var r=n(614),i=String,s=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw s("Can't set "+i(t)+" as a prototype")}},1223:function(t,e,n){var r=n(5112),i=n(30),s=n(3070).f,o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s(a,o,{configurable:!0,value:i(null)}),t.exports=function(t){a[o][t]=!0}},5787:function(t,e,n){var r=n(7976),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw i("Incorrect invocation")}},9670:function(t,e,n){var r=n(111),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw s(i(t)+" is not an object")}},3013:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var r,i,s,o=n(3013),a=n(9781),c=n(7854),l=n(614),u=n(111),h=n(2597),d=n(648),f=n(6330),p=n(8880),g=n(8052),m=n(7045),y=n(7976),_=n(9518),v=n(7674),w=n(5112),b=n(9711),T=n(9909),E=T.enforce,C=T.get,S=c.Int8Array,k=S&&S.prototype,I=c.Uint8ClampedArray,x=I&&I.prototype,A=S&&_(S),D=k&&_(k),R=Object.prototype,N=c.TypeError,O=w("toStringTag"),P=b("TYPED_ARRAY_TAG"),M="TypedArrayConstructor",L=o&&!!v&&"Opera"!==d(c.opera),F=!1,U={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},V={BigInt64Array:8,BigUint64Array:8},j=function(t){if(!u(t))return!1;var e=d(t);return"DataView"===e||h(U,e)||h(V,e)},q=function(t){var e=_(t);if(u(e)){var n=C(e);return n&&h(n,M)?n[M]:q(e)}},B=function(t){if(!u(t))return!1;var e=d(t);return h(U,e)||h(V,e)},$=function(t){if(B(t))return t;throw N("Target is not a typed array")},z=function(t){if(l(t)&&(!v||y(A,t)))return t;throw N(f(t)+" is not a typed array constructor")},H=function(t,e,n,r){if(a){if(n)for(var i in U){var s=c[i];if(s&&h(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(l){}}}D[t]&&!n||g(D,t,n?e:L&&k[t]||e,r)}},W=function(t,e,n){var r,i;if(a){if(v){if(n)for(r in U)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(s){}if(A[t]&&!n)return;try{return g(A,t,n?e:L&&A[t]||e)}catch(s){}}for(r in U)i=c[r],!i||i[t]&&!n||g(i,t,e)}};for(r in U)i=c[r],s=i&&i.prototype,s?E(s)[M]=i:L=!1;for(r in V)i=c[r],s=i&&i.prototype,s&&(E(s)[M]=i);if((!L||!l(A)||A===Function.prototype)&&(A=function(){throw N("Incorrect invocation")},L))for(r in U)c[r]&&v(c[r],A);if((!L||!D||D===R)&&(D=A.prototype,L))for(r in U)c[r]&&v(c[r].prototype,D);if(L&&_(x)!==D&&v(x,D),a&&!h(D,O))for(r in F=!0,m(D,O,{configurable:!0,get:function(){return u(this)?this[P]:void 0}}),U)c[r]&&p(c[r],P,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:L,TYPED_ARRAY_TAG:F&&P,aTypedArray:$,aTypedArrayConstructor:z,exportTypedArrayMethod:H,exportTypedArrayStaticMethod:W,getTypedArrayConstructor:q,isView:j,isTypedArray:B,TypedArray:A,TypedArrayPrototype:D}},7745:function(t,e,n){var r=n(6244);t.exports=function(t,e){var n=0,i=r(e),s=new t(i);while(i>n)s[n]=e[n++];return s}},1318:function(t,e,n){var r=n(5656),i=n(1400),s=n(6244),o=function(t){return function(e,n,o){var a,c=r(e),l=s(c),u=i(o,l);if(t&&n!=n){while(l>u)if(a=c[u++],a!=a)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},3658:function(t,e,n){"use strict";var r=n(9781),i=n(3157),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!o(t,"length").writable)throw s("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},1843:function(t,e,n){var r=n(6244);t.exports=function(t,e){for(var n=r(t),i=new e(n),s=0;s<n;s++)i[s]=t[n-s-1];return i}},1572:function(t,e,n){var r=n(6244),i=n(9303),s=RangeError;t.exports=function(t,e,n,o){var a=r(t),c=i(n),l=c<0?a+c:c;if(l>=a||l<0)throw s("Incorrect index");for(var u=new e(a),h=0;h<a;h++)u[h]=h===l?o:t[h];return u}},4326:function(t,e,n){var r=n(1702),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},648:function(t,e,n){var r=n(1694),i=n(614),s=n(4326),o=n(5112),a=o("toStringTag"),c=Object,l="Arguments"==s(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(n){}};t.exports=r?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=c(t),a))?n:l?s(e):"Object"==(r=s(e))&&i(e.callee)?"Arguments":r}},9920:function(t,e,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);t.exports=function(t,e,n){for(var a=i(e),c=o.f,l=s.f,u=0;u<a.length;u++){var h=a[u];r(t,h)||n&&r(n,h)||c(t,h,l(e,h))}}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,n){var r=n(9781),i=n(3070),s=n(9114);t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},7045:function(t,e,n){var r=n(6339),i=n(3070);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},8052:function(t,e,n){var r=n(614),i=n(3070),s=n(6339),o=n(3072);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,l=void 0!==a.name?a.name:e;if(r(n)&&s(n,l,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(u){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(t,e,n){var r,i,s=n(7854),o=n(8113),a=s.process,c=s.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(r=u.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},8770:function(t,e,n){var r=n(7854);t.exports=function(t){return r[t].prototype}},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(t,e,n){var r=n(1702),i=Error,s=r("".replace),o=function(t){return String(i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=s(t,a,"");return t}},2109:function(t,e,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),c=n(9920),l=n(4705);t.exports=function(t,e){var n,u,h,d,f,p,g=t.target,m=t.global,y=t.stat;if(u=m?r:y?r[g]||a(g,{}):(r[g]||{}).prototype,u)for(h in e){if(f=e[h],t.dontCallGetSet?(p=i(u,h),d=p&&p.value):d=u[h],n=l(m?h:g+(y?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&s(f,"sham",!0),o(u,h,f,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(t,e,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,l=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},5668:function(t,e,n){var r=n(1702),i=n(9662);t.exports=function(t,e,n){try{return r(i(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(s){}}},1702:function(t,e,n){var r=n(4374),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);t.exports=r?o:function(t){return function(){return s.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),i=n(614),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662),i=n(8554);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),i=n(7293),s=n(317);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);t.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?a(t,""):o(t)}:o},9587:function(t,e,n){var r=n(614),i=n(111),s=n(7674);t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},2788:function(t,e,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},9909:function(t,e,n){var r,i,s,o=n(4811),a=n(7854),c=n(111),l=n(8880),u=n(2597),h=n(5465),d=n(6200),f=n(3501),p="Object already initialized",g=a.TypeError,m=a.WeakMap,y=function(t){return s(t)?i(t):r(t,{})},_=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var v=h.state||(h.state=new m);v.get=v.get,v.has=v.has,v.set=v.set,r=function(t,e){if(v.has(t))throw g(p);return e.facade=t,v.set(t,e),e},i=function(t){return v.get(t)||{}},s=function(t){return v.has(t)}}else{var w=d("state");f[w]=!0,r=function(t,e){if(u(t,w))throw g(p);return e.facade=t,l(t,w,e),e},i=function(t){return u(t,w)?t[w]:{}},s=function(t){return u(t,w)}}t.exports={set:r,get:i,has:s,enforce:y,getterFor:_}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},4067:function(t,e,n){var r=n(648);t.exports=function(t){var e=r(t);return"BigInt64Array"==e||"BigUint64Array"==e}},614:function(t,e,n){var r=n(4154),i=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===i}:function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==u||n!=l&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},l=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){var r=n(614),i=n(4154),s=i.all;t.exports=i.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===s}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),i=n(614),s=n(7976),o=n(3307),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&s(e.prototype,a(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(1702),i=n(7293),s=n(614),o=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,l=n(2788),u=n(9909),h=u.enforce,d=u.get,f=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),y=r([].join),_=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),v=String(String).split("String"),w=t.exports=function(t,e,n){"Symbol("===g(f(e),0,7)&&(e="["+m(f(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),_&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=h(t);return o(r,"source")||(r.source=y(v,"string"==typeof e?e:"")),t};Function.prototype.toString=w((function(){return s(this)&&d(this).source||l(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},6277:function(t,e,n){var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},30:function(t,e,n){var r,i=n(9670),s=n(6048),o=n(748),a=n(3501),c=n(490),l=n(317),u=n(6200),h=">",d="<",f="prototype",p="script",g=u("IE_PROTO"),m=function(){},y=function(t){return d+p+h+t+d+"/"+p+h},_=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},v=function(){var t,e=l("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}w="undefined"!=typeof document?document.domain&&r?_(r):v():_(r);var t=o.length;while(t--)delete w[f][o[t]];return w()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[f]=i(t),n=new m,m[f]=null,n[g]=t):n=w(),void 0===e?n:s.f(n,e)}},6048:function(t,e,n){var r=n(9781),i=n(3353),s=n(3070),o=n(9670),a=n(5656),c=n(1956);e.f=r&&!i?Object.defineProperties:function(t,e){o(t);var n,r=a(e),i=c(e),l=i.length,u=0;while(l>u)s.f(t,n=i[u++],r[n]);return t}},3070:function(t,e,n){var r=n(9781),i=n(4664),s=n(3353),o=n(9670),a=n(4948),c=TypeError,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";e.f=r?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&f in n&&!n[f]){var r=u(t,e);r&&r[f]&&(t[e]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return l(t,e,n)}:l:function(t,e,n){if(o(t),e=a(e),o(n),i)try{return l(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),l=n(2597),u=n(4664),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),u)try{return h(t,e)}catch(n){}if(l(t,e))return o(!i(s.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var r=n(2597),i=n(614),s=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),l=Object,u=l.prototype;t.exports=a?l.getPrototypeOf:function(t){var e=s(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof l?u:null}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);t.exports=function(t,e){var n,r=s(t),l=0,u=[];for(n in r)!i(a,n)&&i(r,n)&&c(u,n);while(e.length>l)i(r,n=e[l++])&&(~o(u,n)||c(u,n));return u}},1956:function(t,e,n){var r=n(6324),i=n(748);t.exports=Object.keys||function(t){return r(t,i)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(5668),i=n(9670),s=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),e?t(n,r):n.__proto__=r,n}}():void 0)},2140:function(t,e,n){var r=n(6916),i=n(614),s=n(111),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!s(a=r(n,t)))return a;if(i(n=t.valueOf)&&!s(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!s(a=r(n,t)))return a;throw o("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},7066:function(t,e,n){"use strict";var r=n(9670);t.exports=function(){var t=r(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},4488:function(t,e,n){var r=n(8554),i=TypeError;t.exports=function(t){if(r(t))throw i("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),i=n(9711),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},5465:function(t,e,n){var r=n(7854),i=n(3072),s="__core-js_shared__",o=r[s]||i(s,{});t.exports=o},2309:function(t,e,n){var r=n(1913),i=n(5465);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.30.1",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var r=n(7392),i=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(t,e,n){var r=n(9303),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},4599:function(t,e,n){var r=n(7593),i=TypeError;t.exports=function(t){var e=r(t,"number");if("number"==typeof e)throw i("Can't convert number to bigint");return BigInt(e)}},5656:function(t,e,n){var r=n(8361),i=n(4488);t.exports=function(t){return r(i(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),i=Object;t.exports=function(t){return i(r(t))}},7593:function(t,e,n){var r=n(6916),i=n(111),s=n(2190),o=n(8173),a=n(2140),c=n(5112),l=TypeError,u=c("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,c=o(t,u);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||s(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var r=n(7593),i=n(2190);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},1694:function(t,e,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},1340:function(t,e,n){var r=n(648),i=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},3307:function(t,e,n){var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),i=n(7293);t.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,e,n){var r=n(7854),i=n(614),s=r.WeakMap;t.exports=i(s)&&/native code/.test(String(s))},5112:function(t,e,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(6293),c=n(3307),l=r.Symbol,u=i("wks"),h=c?l["for"]||l:l&&l.withoutSetter||o;t.exports=function(t){return s(u,t)||(u[t]=a&&s(l,t)?l[t]:h("Symbol."+t)),u[t]}},7658:function(t,e,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(7207),c=n(7293),l=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=l||!u();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=i(this),n=s(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return o(e,n),n}})},476:function(t,e,n){"use strict";var r=n(2109),i=n(1843),s=n(5656),o=n(1223),a=Array;r({target:"Array",proto:!0},{toReversed:function(){return i(s(this),a)}}),o("toReversed")},6459:function(t,e,n){"use strict";var r=n(2109),i=n(1702),s=n(9662),o=n(5656),a=n(7745),c=n(8770),l=n(1223),u=Array,h=i(c("Array").sort);r({target:"Array",proto:!0},{toSorted:function(t){void 0!==t&&s(t);var e=o(this),n=a(u,e);return h(n,t)}}),l("toSorted")},9892:function(t,e,n){"use strict";var r=n(2109),i=n(1223),s=n(7207),o=n(6244),a=n(1400),c=n(5656),l=n(9303),u=Array,h=Math.max,d=Math.min;r({target:"Array",proto:!0},{toSpliced:function(t,e){var n,r,i,f,p=c(this),g=o(p),m=a(t,g),y=arguments.length,_=0;for(0===y?n=r=0:1===y?(n=0,r=g-m):(n=y-2,r=d(h(l(e),0),g-m)),i=s(g+n-r),f=u(i);_<m;_++)f[_]=p[_];for(;_<m+n;_++)f[_]=arguments[_-m+2];for(;_<i;_++)f[_]=p[_+r-n];return f}}),i("toSpliced")},2087:function(t,e,n){var r=n(7854),i=n(9781),s=n(7045),o=n(7066),a=n(7293),c=r.RegExp,l=c.prototype,u=i&&a((function(){var t=!0;try{c(".","d")}catch(u){t=!1}var e={},n="",r=t?"dgimsy":"gimsy",i=function(t,r){Object.defineProperty(e,t,{get:function(){return n+=r,!0}})},s={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var o in t&&(s.hasIndices="d"),s)i(o,s[o]);var a=Object.getOwnPropertyDescriptor(l,"flags").get.call(e);return a!==r||n!==r}));u&&s(l,"flags",{configurable:!0,get:o})},1439:function(t,e,n){"use strict";var r=n(1843),i=n(260),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},7585:function(t,e,n){"use strict";var r=n(260),i=n(1702),s=n(9662),o=n(7745),a=r.aTypedArray,c=r.getTypedArrayConstructor,l=r.exportTypedArrayMethod,u=i(r.TypedArrayPrototype.sort);l("toSorted",(function(t){void 0!==t&&s(t);var e=a(this),n=o(c(e),e);return u(n,t)}))},5315:function(t,e,n){"use strict";var r=n(1572),i=n(260),s=n(4067),o=n(9303),a=n(4599),c=i.aTypedArray,l=i.getTypedArrayConstructor,u=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}();u("with",{with:function(t,e){var n=c(this),i=o(t),u=s(n)?a(e):+e;return r(n,l(n),i,u)}}["with"],!h)},6882:function(t,e,n){n(476)},8525:function(t,e,n){n(6459)},7004:function(t,e,n){n(9892)},3767:function(t,e,n){n(1439)},8585:function(t,e,n){n(7585)},8696:function(t,e,n){n(5315)},2801:function(t,e,n){"use strict";var r=n(2109),i=n(7854),s=n(5005),o=n(9114),a=n(3070).f,c=n(2597),l=n(5787),u=n(9587),h=n(6277),d=n(3678),f=n(1060),p=n(9781),g=n(1913),m="DOMException",y=s("Error"),_=s(m),v=function(){l(this,w);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new _(e,n),i=y(e);return i.name=m,a(r,"stack",o(1,f(i.stack,1))),u(r,this,v),r},w=v.prototype=_.prototype,b="stack"in y(m),T="stack"in new _(1,2),E=_&&p&&Object.getOwnPropertyDescriptor(i,m),C=!!E&&!(E.writable&&E.configurable),S=b&&!C&&!T;r({global:!0,constructor:!0,forced:g||S},{DOMException:S?v:_});var k=s(m),I=k.prototype;if(I.constructor!==k)for(var x in g||a(I,"constructor",o(1,k)),d)if(c(d,x)){var A=d[x],D=A.s;c(k,D)||a(k,D,o(6,A.c))}},223:function(t,e,n){"use strict";n.d(e,{$s:function(){return st},BH:function(){return C},DV:function(){return H},GJ:function(){return $},L:function(){return h},LL:function(){return L},P0:function(){return T},Sg:function(){return S},UI:function(){return K},US:function(){return c},Wl:function(){return j},Yr:function(){return D},ZR:function(){return M},aH:function(){return E},b$:function(){return A},cI:function(){return V},dS:function(){return Z},eu:function(){return N},g5:function(){return s},gK:function(){return J},gQ:function(){return Q},h$:function(){return u},hl:function(){return R},hu:function(){return i},m9:function(){return ot},p$:function(){return f},r3:function(){return z},ru:function(){return x},uI:function(){return I},ug:function(){return tt},vZ:function(){return G},w9:function(){return B},xO:function(){return X},xb:function(){return W},zI:function(){return O}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(t,e){if(!t)throw s(e)},s=function(t){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)},o=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},a=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,l=e>>2,u=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(o(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):a(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,h=u?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==c||null==h)throw new l;const d=e<<2|o>>4;if(r.push(d),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==h){const t=c<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u=function(t){const e=o(t);return c.encodeByteArray(e,!0)},h=function(t){return u(t).replace(/\./g,"")},d=function(t){try{return c.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function f(t){return p(void 0,t)}function p(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&g(n)&&(t[n]=p(t[n],e[n]));return t}function g(t){return"__proto__"!==t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=()=>m().__FIREBASE_DEFAULTS__,_=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",VUE_APP_MASTER_CODE:"JM.gjpm!23A83g4x31",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},v=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&d(t[1]);return e&&JSON.parse(e)},w=()=>{try{return y()||_()||v()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},b=t=>{var e,n;return null===(n=null===(e=w())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},T=t=>{const e=b(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},E=()=>{var t;return null===(t=w())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[h(JSON.stringify(n)),h(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function I(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(k())}function x(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function A(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function D(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}function R(){try{return"object"===typeof indexedDB}catch(t){return!1}}function N(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}function O(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P="FirebaseError";class M extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=P,Object.setPrototypeOf(this,M.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,L.prototype.create)}}class L{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?F(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new M(r,o,n);return a}}function F(t,e){return t.replace(U,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const U=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t){return JSON.parse(t)}function j(t){return JSON.stringify(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=V(d(s[0])||""),n=V(d(s[1])||""),i=s[2],r=n["d"]||{},delete n["d"]}catch(s){}return{header:e,claims:n,data:r,signature:i}},B=function(t){const e=q(t),n=e.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},$=function(t){const e=q(t).claims;return"object"===typeof e&&!0===e["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function H(t,e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0}function W(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function K(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function G(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(Y(n)&&Y(s)){if(!G(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Y(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,e){e||(e=0);const n=this.W_;if("string"===typeof t)for(let u=0;u<16;u++)n[u]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(let u=0;u<16;u++)n[u]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(let u=16;u<80;u++){const t=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(t<<1|t>>>31)}let r,i,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(r=c^o&(a^c),i=1518500249):(r=o^a^c,i=1859775393):u<60?(r=o&a|c&(o|a),i=2400959708):(r=o^a^c,i=3395469782);const t=(s<<5|s>>>27)+r+l+i+n[u]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,e){if(null==t)return;void 0===e&&(e=t.length);const n=e-this.blockSize;let r=0;const i=this.buf_;let s=this.inbuf_;while(r<e){if(0===s)while(r<=n)this.compress_(t,r),r+=this.blockSize;if("string"===typeof t){while(r<e)if(i[s]=t.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else while(r<e)if(i[s]=t[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=e}digest(){const t=[];let e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&e,e/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let e=24;e>=0;e-=8)t[n]=this.chain_[r]>>e&255,++n;return t}}function J(t,e){return`${t} failed: ${e} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const e=s-55296;r++,i(r<t.length,"Surrogate pair missing trail surrogate.");const n=t.charCodeAt(r)-56320;s=65536+(e<<10)+n}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},tt=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e},et=1e3,nt=2,rt=144e5,it=.5;function st(t,e=et,n=nt){const r=e*Math.pow(n,t),i=Math.round(it*r*(Math.random()-.5)*2);return Math.min(rt,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ot(t){return t&&t._delegate?t._delegate:t}},4870:function(t,e,n){"use strict";n.d(e,{$y:function(){return bt},BX:function(){return It},Bj:function(){return o},Fl:function(){return Ut},IU:function(){return Ct},Jd:function(){return C},PG:function(){return wt},SU:function(){return Ot},Tn:function(){return Pt},Um:function(){return yt},WL:function(){return Lt},X$:function(){return L},X3:function(){return Et},XB:function(){return U},XI:function(){return Dt},Xl:function(){return St},YL:function(){return kt},YP:function(){return $t},dq:function(){return xt},fw:function(){return zt},iH:function(){return At},j:function(){return M},lk:function(){return S},qj:function(){return mt},qq:function(){return l},yT:function(){return Tt}});n(7658),n(2087),n(6882),n(8525),n(7004);var r=n(7139);let i,s;class o{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=i,!t&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let t,e;if(this._isPaused=!0,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){let t,e;if(this._isPaused=!1,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){1===++this._on&&(this.prevScope=i,i=this)}off(){this._on>0&&0===--this._on&&(i=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){let e,n;for(this._active=!1,e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(this.effects.length=0,e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0}}}function a(){return i}const c=new WeakSet;class l{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,i&&i.active&&i.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,c.has(this)&&(c.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||f(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,k(this),m(this);const t=s,e=T;s=this,T=!0;try{return this.fn()}finally{0,y(this),s=t,T=e,this.flags&=-3}}stop(){if(1&this.flags){for(let t=this.deps;t;t=t.nextDep)w(t);this.deps=this.depsTail=void 0,k(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_(this)&&this.run()}get dirty(){return _(this)}}let u,h,d=0;function f(t,e=!1){if(t.flags|=8,e)return t.next=h,void(h=t);t.next=u,u=t}function p(){d++}function g(){if(--d>0)return;if(h){let t=h;h=void 0;while(t){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let t;while(u){let n=u;u=void 0;while(n){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(e){t||(t=e)}n=r}}if(t)throw t}function m(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function y(t){let e,n=t.depsTail,r=n;while(r){const t=r.prevDep;-1===r.version?(r===n&&(n=t),w(r),b(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=t}t.deps=e,t.depsTail=n}function _(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(v(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function v(t){if(4&t.flags&&!(16&t.flags))return;if(t.flags&=-17,t.globalVersion===I)return;if(t.globalVersion=I,!t.isSSR&&128&t.flags&&(!t.deps&&!t._dirty||!_(t)))return;t.flags|=2;const e=t.dep,n=s,i=T;s=t,T=!0;try{m(t);const n=t.fn(t._value);(0===e.version||(0,r.aU)(n,t._value))&&(t.flags|=128,t._value=n,e.version++)}catch(o){throw e.version++,o}finally{s=n,T=i,y(t),t.flags&=-3}}function w(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let t=n.computed.deps;t;t=t.nextDep)w(t,!0)}e||--n.sc||!n.map||n.map.delete(n.key)}function b(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let T=!0;const E=[];function C(){E.push(T),T=!1}function S(){const t=E.pop();T=void 0===t||t}function k(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const t=s;s=void 0;try{e()}finally{s=t}}}let I=0;class x{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class A{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!s||!T||s===this.computed)return;let e=this.activeLink;if(void 0===e||e.sub!==s)e=this.activeLink=new x(s,this),s.deps?(e.prevDep=s.depsTail,s.depsTail.nextDep=e,s.depsTail=e):s.deps=s.depsTail=e,D(e);else if(-1===e.version&&(e.version=this.version,e.nextDep)){const t=e.nextDep;t.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=t),e.prevDep=s.depsTail,e.nextDep=void 0,s.depsTail.nextDep=e,s.depsTail=e,s.deps===e&&(s.deps=t)}return e}trigger(t){this.version++,I++,this.notify(t)}notify(t){p();try{0;for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{g()}}}function D(t){if(t.dep.sc++,4&t.sub.flags){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let t=e.deps;t;t=t.nextDep)D(t)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const R=new WeakMap,N=Symbol(""),O=Symbol(""),P=Symbol("");function M(t,e,n){if(T&&s){let e=R.get(t);e||R.set(t,e=new Map);let r=e.get(n);r||(e.set(n,r=new A),r.map=e,r.key=n),r.track()}}function L(t,e,n,i,s,o){const a=R.get(t);if(!a)return void I++;const c=t=>{t&&t.trigger()};if(p(),"clear"===e)a.forEach(c);else{const s=(0,r.kJ)(t),o=s&&(0,r.S0)(n);if(s&&"length"===n){const t=Number(i);a.forEach(((e,n)=>{("length"===n||n===P||!(0,r.yk)(n)&&n>=t)&&c(e)}))}else switch((void 0!==n||a.has(void 0))&&c(a.get(n)),o&&c(a.get(P)),e){case"add":s?o&&c(a.get("length")):(c(a.get(N)),(0,r._N)(t)&&c(a.get(O)));break;case"delete":s||(c(a.get(N)),(0,r._N)(t)&&c(a.get(O)));break;case"set":(0,r._N)(t)&&c(a.get(N));break}}g()}function F(t){const e=Ct(t);return e===t?e:(M(e,"iterate",P),Tt(t)?e:e.map(kt))}function U(t){return M(t=Ct(t),"iterate",P),t}const V={__proto__:null,[Symbol.iterator](){return j(this,Symbol.iterator,kt)},concat(...t){return F(this).concat(...t.map((t=>(0,r.kJ)(t)?F(t):t)))},entries(){return j(this,"entries",(t=>(t[1]=kt(t[1]),t)))},every(t,e){return B(this,"every",t,e,void 0,arguments)},filter(t,e){return B(this,"filter",t,e,(t=>t.map(kt)),arguments)},find(t,e){return B(this,"find",t,e,kt,arguments)},findIndex(t,e){return B(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return B(this,"findLast",t,e,kt,arguments)},findLastIndex(t,e){return B(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return B(this,"forEach",t,e,void 0,arguments)},includes(...t){return z(this,"includes",t)},indexOf(...t){return z(this,"indexOf",t)},join(t){return F(this).join(t)},lastIndexOf(...t){return z(this,"lastIndexOf",t)},map(t,e){return B(this,"map",t,e,void 0,arguments)},pop(){return H(this,"pop")},push(...t){return H(this,"push",t)},reduce(t,...e){return $(this,"reduce",t,e)},reduceRight(t,...e){return $(this,"reduceRight",t,e)},shift(){return H(this,"shift")},some(t,e){return B(this,"some",t,e,void 0,arguments)},splice(...t){return H(this,"splice",t)},toReversed(){return F(this).toReversed()},toSorted(t){return F(this).toSorted(t)},toSpliced(...t){return F(this).toSpliced(...t)},unshift(...t){return H(this,"unshift",t)},values(){return j(this,"values",kt)}};function j(t,e,n){const r=U(t),i=r[e]();return r===t||Tt(t)||(i._next=i.next,i.next=()=>{const t=i._next();return t.done||(t.value=n(t.value)),t}),i}const q=Array.prototype;function B(t,e,n,r,i,s){const o=U(t),a=o!==t&&!Tt(t),c=o[e];if(c!==q[e]){const e=c.apply(t,s);return a?kt(e):e}let l=n;o!==t&&(a?l=function(e,r){return n.call(this,kt(e),r,t)}:n.length>2&&(l=function(e,r){return n.call(this,e,r,t)}));const u=c.call(o,l,r);return a&&i?i(u):u}function $(t,e,n,r){const i=U(t);let s=n;return i!==t&&(Tt(t)?n.length>3&&(s=function(e,r,i){return n.call(this,e,r,i,t)}):s=function(e,r,i){return n.call(this,e,kt(r),i,t)}),i[e](s,...r)}function z(t,e,n){const r=Ct(t);M(r,"iterate",P);const i=r[e](...n);return-1!==i&&!1!==i||!Et(n[0])?i:(n[0]=Ct(n[0]),r[e](...n))}function H(t,e,n=[]){C(),p();const r=Ct(t)[e].apply(t,n);return g(),S(),r}const W=(0,r.fY)("__proto__,__v_isRef,__isVue"),K=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.yk));function G(t){(0,r.yk)(t)||(t=String(t));const e=Ct(this);return M(e,"has",t),e.hasOwnProperty(t)}class Y{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){if("__v_skip"===e)return t["__v_skip"];const i=this._isReadonly,s=this._isShallow;if("__v_isReactive"===e)return!i;if("__v_isReadonly"===e)return i;if("__v_isShallow"===e)return s;if("__v_raw"===e)return n===(i?s?ft:dt:s?ht:ut).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=(0,r.kJ)(t);if(!i){let t;if(o&&(t=V[e]))return t;if("hasOwnProperty"===e)return G}const a=Reflect.get(t,e,xt(t)?t:n);if((0,r.yk)(e)?K.has(e):W(e))return a;if(i||M(t,"get",e),s)return a;if(xt(a)){const t=o&&(0,r.S0)(e)?a:a.value;return i&&(0,r.Kn)(t)?_t(t):t}return(0,r.Kn)(a)?i?_t(a):mt(a):a}}class X extends Y{constructor(t=!1){super(!1,t)}set(t,e,n,i){let s=t[e];if(!this._isShallow){const e=bt(s);if(Tt(n)||bt(n)||(s=Ct(s),n=Ct(n)),!(0,r.kJ)(t)&&xt(s)&&!xt(n))return e||(s.value=n),!0}const o=(0,r.kJ)(t)&&(0,r.S0)(e)?Number(e)<t.length:(0,r.RI)(t,e),a=Reflect.set(t,e,n,xt(t)?t:i);return t===Ct(i)&&(o?(0,r.aU)(n,s)&&L(t,"set",e,n,s):L(t,"add",e,n)),a}deleteProperty(t,e){const n=(0,r.RI)(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&L(t,"delete",e,void 0,i),s}has(t,e){const n=Reflect.has(t,e);return(0,r.yk)(e)&&K.has(e)||M(t,"has",e),n}ownKeys(t){return M(t,"iterate",(0,r.kJ)(t)?"length":N),Reflect.ownKeys(t)}}class Q extends Y{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const J=new X,Z=new Q,tt=new X(!0),et=t=>t,nt=t=>Reflect.getPrototypeOf(t);function rt(t,e,n){return function(...i){const s=this["__v_raw"],o=Ct(s),a=(0,r._N)(o),c="entries"===t||t===Symbol.iterator&&a,l="keys"===t&&a,u=s[t](...i),h=n?et:e?It:kt;return!e&&M(o,"iterate",l?O:N),{next(){const{value:t,done:e}=u.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function it(t){return function(...e){return"delete"!==t&&("clear"===t?void 0:this)}}function st(t,e){const n={get(n){const i=this["__v_raw"],s=Ct(i),o=Ct(n);t||((0,r.aU)(n,o)&&M(s,"get",n),M(s,"get",o));const{has:a}=nt(s),c=e?et:t?It:kt;return a.call(s,n)?c(i.get(n)):a.call(s,o)?c(i.get(o)):void(i!==s&&i.get(n))},get size(){const e=this["__v_raw"];return!t&&M(Ct(e),"iterate",N),e.size},has(e){const n=this["__v_raw"],i=Ct(n),s=Ct(e);return t||((0,r.aU)(e,s)&&M(i,"has",e),M(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)},forEach(n,r){const i=this,s=i["__v_raw"],o=Ct(s),a=e?et:t?It:kt;return!t&&M(o,"iterate",N),s.forEach(((t,e)=>n.call(r,a(t),a(e),i)))}};(0,r.l7)(n,t?{add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear")}:{add(t){e||Tt(t)||bt(t)||(t=Ct(t));const n=Ct(this),r=nt(n),i=r.has.call(n,t);return i||(n.add(t),L(n,"add",t,t)),this},set(t,n){e||Tt(n)||bt(n)||(n=Ct(n));const i=Ct(this),{has:s,get:o}=nt(i);let a=s.call(i,t);a||(t=Ct(t),a=s.call(i,t));const c=o.call(i,t);return i.set(t,n),a?(0,r.aU)(n,c)&&L(i,"set",t,n,c):L(i,"add",t,n),this},delete(t){const e=Ct(this),{has:n,get:r}=nt(e);let i=n.call(e,t);i||(t=Ct(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&L(e,"delete",t,void 0,s),o},clear(){const t=Ct(this),e=0!==t.size,n=void 0,r=t.clear();return e&&L(t,"clear",void 0,void 0,n),r}});const i=["keys","values","entries",Symbol.iterator];return i.forEach((r=>{n[r]=rt(r,t,e)})),n}function ot(t,e){const n=st(t,e);return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.RI)(n,i)&&i in e?n:e,i,s)}const at={get:ot(!1,!1)},ct={get:ot(!1,!0)},lt={get:ot(!0,!1)};const ut=new WeakMap,ht=new WeakMap,dt=new WeakMap,ft=new WeakMap;function pt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:pt((0,r.W7)(t))}function mt(t){return bt(t)?t:vt(t,!1,J,at,ut)}function yt(t){return vt(t,!1,tt,ct,ht)}function _t(t){return vt(t,!0,Z,lt,dt)}function vt(t,e,n,i,s){if(!(0,r.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=gt(t);if(0===o)return t;const a=s.get(t);if(a)return a;const c=new Proxy(t,2===o?i:n);return s.set(t,c),c}function wt(t){return bt(t)?wt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function bt(t){return!(!t||!t["__v_isReadonly"])}function Tt(t){return!(!t||!t["__v_isShallow"])}function Et(t){return!!t&&!!t["__v_raw"]}function Ct(t){const e=t&&t["__v_raw"];return e?Ct(e):t}function St(t){return!(0,r.RI)(t,"__v_skip")&&Object.isExtensible(t)&&(0,r.Nj)(t,"__v_skip",!0),t}const kt=t=>(0,r.Kn)(t)?mt(t):t,It=t=>(0,r.Kn)(t)?_t(t):t;function xt(t){return!!t&&!0===t["__v_isRef"]}function At(t){return Rt(t,!1)}function Dt(t){return Rt(t,!0)}function Rt(t,e){return xt(t)?t:new Nt(t,e)}class Nt{constructor(t,e){this.dep=new A,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=e?t:Ct(t),this._value=e?t:kt(t),this["__v_isShallow"]=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,n=this["__v_isShallow"]||Tt(t)||bt(t);t=n?t:Ct(t),(0,r.aU)(t,e)&&(this._rawValue=t,this._value=n?t:kt(t),this.dep.trigger())}}function Ot(t){return xt(t)?t.value:t}function Pt(t){return(0,r.mf)(t)?t():Ot(t)}const Mt={get:(t,e,n)=>"__v_raw"===e?t:Ot(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return xt(i)&&!xt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Lt(t){return wt(t)?t:new Proxy(t,Mt)}class Ft{constructor(t,e,n){this.fn=t,this.setter=e,this._value=void 0,this.dep=new A(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=I-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!e,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||s===this))return f(this,!0),!0}get value(){const t=this.dep.track();return v(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ut(t,e,n=!1){let i,s;(0,r.mf)(t)?i=t:(i=t.get,s=t.set);const o=new Ft(i,s,n);return o}const Vt={},jt=new WeakMap;let qt;function Bt(t,e=!1,n=qt){if(n){let e=jt.get(n);e||jt.set(n,e=[]),e.push(t)}else 0}function $t(t,e,n=r.kT){const{immediate:i,deep:s,once:o,scheduler:c,augmentJob:u,call:h}=n,d=t=>s?t:Tt(t)||!1===s||0===s?zt(t,1):zt(t);let f,p,g,m,y=!1,_=!1;if(xt(t)?(p=()=>t.value,y=Tt(t)):wt(t)?(p=()=>d(t),y=!0):(0,r.kJ)(t)?(_=!0,y=t.some((t=>wt(t)||Tt(t))),p=()=>t.map((t=>xt(t)?t.value:wt(t)?d(t):(0,r.mf)(t)?h?h(t,2):t():void 0))):p=(0,r.mf)(t)?e?h?()=>h(t,2):t:()=>{if(g){C();try{g()}finally{S()}}const e=qt;qt=f;try{return h?h(t,3,[m]):t(m)}finally{qt=e}}:r.dG,e&&s){const t=p,e=!0===s?1/0:s;p=()=>zt(t(),e)}const v=a(),w=()=>{f.stop(),v&&v.active&&(0,r.Od)(v.effects,f)};if(o&&e){const t=e;e=(...e)=>{t(...e),w()}}let b=_?new Array(t.length).fill(Vt):Vt;const T=t=>{if(1&f.flags&&(f.dirty||t))if(e){const t=f.run();if(s||y||(_?t.some(((t,e)=>(0,r.aU)(t,b[e]))):(0,r.aU)(t,b))){g&&g();const n=qt;qt=f;try{const n=[t,b===Vt?void 0:_&&b[0]===Vt?[]:b,m];b=t,h?h(e,3,n):e(...n)}finally{qt=n}}}else f.run()};return u&&u(T),f=new l(p),f.scheduler=c?()=>c(T,!1):T,m=t=>Bt(t,!1,f),g=f.onStop=()=>{const t=jt.get(f);if(t){if(h)h(t,4);else for(const e of t)e();jt.delete(f)}},e?i?T(!0):b=f.run():c?c(T.bind(null,!0),!0):f.run(),w.pause=f.pause.bind(f),w.resume=f.resume.bind(f),w.stop=w,w}function zt(t,e=1/0,n){if(e<=0||!(0,r.Kn)(t)||t["__v_skip"])return t;if(n=n||new Map,(n.get(t)||0)>=e)return t;if(n.set(t,e),e--,xt(t))zt(t.value,e,n);else if((0,r.kJ)(t))for(let r=0;r<t.length;r++)zt(t[r],e,n);else if((0,r.DM)(t)||(0,r._N)(t))t.forEach((t=>{zt(t,e,n)}));else if((0,r.PO)(t)){for(const r in t)zt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&zt(t[r],e,n)}return t}},3396:function(t,e,n){"use strict";n.d(e,{$d:function(){return o},Ah:function(){return kt},EM:function(){return ue},FN:function(){return qn},Fl:function(){return sr},HY:function(){return an},JJ:function(){return ce},Jd:function(){return St},Ko:function(){return Ft},LL:function(){return Pt},P$:function(){return J},Q6:function(){return it},U2:function(){return tt},Uk:function(){return An},Us:function(){return Re},Wm:function(){return Sn},Xn:function(){return Et},Y3:function(){return m},Y8:function(){return W},YP:function(){return $e},_:function(){return Cn},aZ:function(){return st},bv:function(){return Tt},dG:function(){return Mn},dl:function(){return ft},f3:function(){return le},h:function(){return or},iD:function(){return _n},ic:function(){return Ct},j4:function(){return vn},kq:function(){return Rn},lR:function(){return q},m0:function(){return Be},nJ:function(){return G},nK:function(){return rt},qG:function(){return un},qb:function(){return w},se:function(){return pt},uE:function(){return Dn},up:function(){return Nt},w5:function(){return x},wg:function(){return fn},wy:function(){return A}});n(7658),n(2087);var r=n(4870),i=n(7139);function s(t,e,n,r){try{return r?t(...r):t()}catch(i){a(i,e,n)}}function o(t,e,n,r){if((0,i.mf)(t)){const o=s(t,e,n,r);return o&&(0,i.tI)(o)&&o.catch((t=>{a(t,e,n)})),o}if((0,i.kJ)(t)){const i=[];for(let s=0;s<t.length;s++)i.push(o(t[s],e,n,r));return i}}function a(t,e,n,o=!0){const a=e?e.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:u}=e&&e.appContext.config||i.kT;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const e=i.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,o,a))return;i=i.parent}if(l)return(0,r.Jd)(),s(l,null,10,[t,o,a]),void(0,r.lk)()}c(t,n,a,o,u)}function c(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}const l=[];let u=-1;const h=[];let d=null,f=0;const p=Promise.resolve();let g=null;function m(t){const e=g||p;return t?e.then(this?t.bind(this):t):e}function y(t){let e=u+1,n=l.length;while(e<n){const r=e+n>>>1,i=l[r],s=E(i);s<t||s===t&&2&i.flags?e=r+1:n=r}return e}function _(t){if(!(1&t.flags)){const e=E(t),n=l[l.length-1];!n||!(2&t.flags)&&e>=E(n)?l.push(t):l.splice(y(e),0,t),t.flags|=1,v()}}function v(){g||(g=p.then(C))}function w(t){(0,i.kJ)(t)?h.push(...t):d&&-1===t.id?d.splice(f+1,0,t):1&t.flags||(h.push(t),t.flags|=1),v()}function b(t,e,n=u+1){for(0;n<l.length;n++){const e=l[n];if(e&&2&e.flags){if(t&&e.id!==t.uid)continue;0,l.splice(n,1),n--,4&e.flags&&(e.flags&=-2),e(),4&e.flags||(e.flags&=-2)}}}function T(t){if(h.length){const t=[...new Set(h)].sort(((t,e)=>E(t)-E(e)));if(h.length=0,d)return void d.push(...t);for(d=t,f=0;f<d.length;f++){const t=d[f];0,4&t.flags&&(t.flags&=-2),8&t.flags||t(),t.flags&=-2}d=null,f=0}}const E=t=>null==t.id?2&t.flags?-1:1/0:t.id;function C(t){i.dG;try{for(u=0;u<l.length;u++){const t=l[u];!t||8&t.flags||(4&t.flags&&(t.flags&=-2),s(t,t.i,t.i?15:14),4&t.flags||(t.flags&=-2))}}finally{for(;u<l.length;u++){const t=l[u];t&&(t.flags&=-2)}u=-1,l.length=0,T(t),g=null,(l.length||h.length)&&C(t)}}let S=null,k=null;function I(t){const e=S;return S=t,k=t&&t.type.__scopeId||null,e}function x(t,e=S,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&mn(-1);const i=I(e);let s;try{s=t(...n)}finally{I(i),r._d&&mn(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function A(t,e){if(null===S)return t;const n=nr(S),s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,a,c,l=i.kT]=e[o];t&&((0,i.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&(0,r.fw)(a),s.push({dir:t,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function D(t,e,n,i){const s=t.dirs,a=e&&e.dirs;for(let c=0;c<s.length;c++){const l=s[c];a&&(l.oldValue=a[c].value);let u=l.dir[i];u&&((0,r.Jd)(),o(u,n,8,[t.el,l,t,e]),(0,r.lk)())}}const R=Symbol("_vte"),N=t=>t.__isTeleport,O=t=>t&&(t.disabled||""===t.disabled),P=t=>t&&(t.defer||""===t.defer),M=t=>"undefined"!==typeof SVGElement&&t instanceof SVGElement,L=t=>"function"===typeof MathMLElement&&t instanceof MathMLElement,F=(t,e)=>{const n=t&&t.to;if((0,i.HD)(n)){if(e){const t=e(n);return t}return null}return n},U={name:"Teleport",__isTeleport:!0,process(t,e,n,r,i,s,o,a,c,l){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:g,createComment:m}}=l,y=O(e.props);let{shapeFlag:_,children:v,dynamicChildren:w}=e;if(null==t){const t=e.el=g(""),l=e.anchor=g("");f(t,n,r),f(l,n,r);const h=(t,e)=>{16&_&&u(v,t,e,i,s,o,a,c)},d=()=>{const t=e.target=F(e.props,p),n=$(t,e,g,f);t&&("svg"!==o&&M(t)?o="svg":"mathml"!==o&&L(t)&&(o="mathml"),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(t),y||(h(t,n),B(e,!1)))};y&&(h(n,l),B(e,!0)),P(e.props)?(e.el.__isMounted=!1,De((()=>{d(),delete e.el.__isMounted}),s)):d()}else{if(P(e.props)&&!1===t.el.__isMounted)return void De((()=>{U.process(t,e,n,r,i,s,o,a,c,l)}),s);e.el=t.el,e.targetStart=t.targetStart;const u=e.anchor=t.anchor,f=e.target=t.target,g=e.targetAnchor=t.targetAnchor,m=O(t.props),_=m?n:f,v=m?u:g;if("svg"===o||M(f)?o="svg":("mathml"===o||L(f))&&(o="mathml"),w?(d(t.dynamicChildren,w,_,i,s,o,a),Le(t,e,!0)):c||h(t,e,_,v,i,s,o,a,!1),y)m?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):V(e,n,u,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const t=e.target=F(e.props,p);t&&V(e,t,null,l,0)}else m&&V(e,f,g,l,1);B(e,y)}},remove(t,e,n,{um:r,o:{remove:i}},s){const{shapeFlag:o,children:a,anchor:c,targetStart:l,targetAnchor:u,target:h,props:d}=t;if(h&&(i(l),i(u)),s&&i(c),16&o){const t=s||!O(d);for(let i=0;i<a.length;i++){const s=a[i];r(s,e,n,t,!!s.dynamicChildren)}}},move:V,hydrate:j};function V(t,e,n,{o:{insert:r},m:i},s=2){0===s&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,h=2===s;if(h&&r(o,e,n),(!h||O(u))&&16&c)for(let d=0;d<l.length;d++)i(l[d],e,n,2);h&&r(a,e,n)}function j(t,e,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:c,insert:l,createText:u}},h){function d(t,e,c,l){e.anchor=h(o(t),e,a(t),n,r,i,s),e.targetStart=c,e.targetAnchor=l}const f=e.target=F(e.props,c),p=O(e.props);if(f){const a=f._lpa||f.firstChild;if(16&e.shapeFlag)if(p)d(t,e,a,a&&o(a));else{e.anchor=o(t);let c=a;while(c){if(c&&8===c.nodeType)if("teleport start anchor"===c.data)e.targetStart=c;else if("teleport anchor"===c.data){e.targetAnchor=c,f._lpa=e.targetAnchor&&o(e.targetAnchor);break}c=o(c)}e.targetAnchor||$(f,e,u,l),h(a&&o(a),e,f,n,r,i,s)}B(e,p)}else p&&16&e.shapeFlag&&d(t,e,t,o(t));return e.anchor&&o(e.anchor)}const q=U;function B(t,e){const n=t.ctx;if(n&&n.ut){let r,i;e?(r=t.el,i=t.anchor):(r=t.targetStart,i=t.targetAnchor);while(r&&r!==i)1===r.nodeType&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function $(t,e,n,r){const i=e.targetStart=n(""),s=e.targetAnchor=n("");return i[R]=s,t&&(r(i,t),r(s,t)),s}const z=Symbol("_leaveCb"),H=Symbol("_enterCb");function W(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Tt((()=>{t.isMounted=!0})),St((()=>{t.isUnmounting=!0})),t}const K=[Function,Array],G={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:K,onEnter:K,onAfterEnter:K,onEnterCancelled:K,onBeforeLeave:K,onLeave:K,onAfterLeave:K,onLeaveCancelled:K,onBeforeAppear:K,onAppear:K,onAfterAppear:K,onAppearCancelled:K},Y=t=>{const e=t.subTree;return e.component?Y(e.component):e},X={name:"BaseTransition",props:G,setup(t,{slots:e}){const n=qn(),i=W();return()=>{const s=e.default&&it(e.default(),!0);if(!s||!s.length)return;const o=Q(s),a=(0,r.IU)(t),{mode:c}=a;if(i.isLeaving)return et(o);const l=nt(o);if(!l)return et(o);let u=tt(l,a,i,n,(t=>u=t));l.type!==ln&&rt(l,u);let h=n.subTree&&nt(n.subTree);if(h&&h.type!==ln&&!bn(h,l)&&Y(n).type!==ln){let t=tt(h,a,i,n);if(rt(h,t),"out-in"===c&&l.type!==ln)return i.isLeaving=!0,t.afterLeave=()=>{i.isLeaving=!1,8&n.job.flags||n.update(),delete t.afterLeave,h=void 0},et(o);"in-out"===c&&l.type!==ln?t.delayLeave=(t,e,n)=>{const r=Z(i,h);r[String(h.key)]=h,t[z]=()=>{e(),t[z]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{n(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return o}}};function Q(t){let e=t[0];if(t.length>1){let n=!1;for(const r of t)if(r.type!==ln){0,e=r,n=!0;break}}return e}const J=X;function Z(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function tt(t,e,n,r,s){const{appear:a,mode:c,persisted:l=!1,onBeforeEnter:u,onEnter:h,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:p,onLeave:g,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:_,onAppear:v,onAfterAppear:w,onAppearCancelled:b}=e,T=String(t.key),E=Z(n,t),C=(t,e)=>{t&&o(t,r,9,e)},S=(t,e)=>{const n=e[1];C(t,e),(0,i.kJ)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},k={mode:c,persisted:l,beforeEnter(e){let r=u;if(!n.isMounted){if(!a)return;r=_||u}e[z]&&e[z](!0);const i=E[T];i&&bn(t,i)&&i.el[z]&&i.el[z](),C(r,[e])},enter(t){let e=h,r=d,i=f;if(!n.isMounted){if(!a)return;e=v||h,r=w||d,i=b||f}let s=!1;const o=t[H]=e=>{s||(s=!0,C(e?i:r,[t]),k.delayedLeave&&k.delayedLeave(),t[H]=void 0)};e?S(e,[t,o]):o()},leave(e,r){const i=String(t.key);if(e[H]&&e[H](!0),n.isUnmounting)return r();C(p,[e]);let s=!1;const o=e[z]=n=>{s||(s=!0,r(),C(n?y:m,[e]),e[z]=void 0,E[i]===t&&delete E[i])};E[i]=t,g?S(g,[e,o]):o()},clone(t){const i=tt(t,e,n,r,s);return s&&s(i),i}};return k}function et(t){if(ht(t))return t=xn(t),t.children=null,t}function nt(t){if(!ht(t))return N(t.type)&&t.children?Q(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(16&e)return n[0];if(32&e&&(0,i.mf)(n.default))return n.default()}}function rt(t,e){6&t.shapeFlag&&t.component?(t.transition=e,rt(t.component.subTree,e)):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function it(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===an?(128&o.patchFlag&&i++,r=r.concat(it(o.children,e,a))):(e||o.type!==ln)&&r.push(null!=a?xn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function st(t,e){return(0,i.mf)(t)?(()=>(0,i.l7)({name:t.name},e,{setup:t}))():t}function ot(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const at=new WeakMap;function ct(t,e,n,o,a=!1){if((0,i.kJ)(t))return void t.forEach(((t,r)=>ct(t,e&&((0,i.kJ)(e)?e[r]:e),n,o,a)));if(ut(o)&&!a)return void(512&o.shapeFlag&&o.type.__asyncResolved&&o.component.subTree.component&&ct(t,e,n,o.component.subTree));const c=4&o.shapeFlag?nr(o.component):o.el,l=a?null:c,{i:u,r:h}=t;const d=e&&e.r,f=u.refs===i.kT?u.refs={}:u.refs,p=u.setupState,g=(0,r.IU)(p),m=p===i.kT?i.NO:t=>(0,i.RI)(g,t),y=t=>!0;if(null!=d&&d!==h)if(lt(e),(0,i.HD)(d))f[d]=null,m(d)&&(p[d]=null);else if((0,r.dq)(d)){y(d)&&(d.value=null);const t=e;t.k&&(f[t.k]=null)}if((0,i.mf)(h))s(h,u,12,[l,f]);else{const e=(0,i.HD)(h),s=(0,r.dq)(h);if(e||s){const r=()=>{if(t.f){const n=e?m(h)?p[h]:f[h]:y(h)||!t.k?h.value:f[t.k];if(a)(0,i.kJ)(n)&&(0,i.Od)(n,c);else if((0,i.kJ)(n))n.includes(c)||n.push(c);else if(e)f[h]=[c],m(h)&&(p[h]=f[h]);else{const e=[c];y(h)&&(h.value=e),t.k&&(f[t.k]=e)}}else e?(f[h]=l,m(h)&&(p[h]=l)):s&&(y(h)&&(h.value=l),t.k&&(f[t.k]=l))};if(l){const e=()=>{r(),at.delete(t)};e.id=-1,at.set(t,e),De(e,n)}else lt(t),r()}else 0}}function lt(t){const e=at.get(t);e&&(e.flags|=8,at.delete(t))}(0,i.E9)().requestIdleCallback,(0,i.E9)().cancelIdleCallback;const ut=t=>!!t.type.__asyncLoader;const ht=t=>t.type.__isKeepAlive;RegExp,RegExp;function dt(t,e){return(0,i.kJ)(t)?t.some((t=>dt(t,e))):(0,i.HD)(t)?t.split(",").includes(e):!!(0,i.Kj)(t)&&(t.lastIndex=0,t.test(e))}function ft(t,e){gt(t,"a",e)}function pt(t,e){gt(t,"da",e)}function gt(t,e,n=jn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(vt(e,r,n),n){let t=n.parent;while(t&&t.parent)ht(t.parent.vnode)&&mt(r,e,n,t),t=t.parent}}function mt(t,e,n,r){const s=vt(e,t,r,!0);kt((()=>{(0,i.Od)(r[e],s)}),n)}function yt(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function _t(t){return 128&t.shapeFlag?t.ssContent:t}function vt(t,e,n=jn,i=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{(0,r.Jd)();const s=zn(n),a=o(e,n,t,i);return s(),(0,r.lk)(),a});return i?s.unshift(a):s.push(a),a}}const wt=t=>(e,n=jn)=>{Yn&&"sp"!==t||vt(t,((...t)=>e(...t)),n)},bt=wt("bm"),Tt=wt("m"),Et=wt("bu"),Ct=wt("u"),St=wt("bum"),kt=wt("um"),It=wt("sp"),xt=wt("rtg"),At=wt("rtc");function Dt(t,e=jn){vt("ec",t,e)}const Rt="components";function Nt(t,e){return Mt(Rt,t,!0,e)||t}const Ot=Symbol.for("v-ndc");function Pt(t){return(0,i.HD)(t)?Mt(Rt,t,!1)||t:t||Ot}function Mt(t,e,n=!0,r=!1){const s=S||jn;if(s){const n=s.type;if(t===Rt){const t=rr(n,!1);if(t&&(t===e||t===(0,i._A)(e)||t===(0,i.kC)((0,i._A)(e))))return n}const o=Lt(s[t]||n[t],e)||Lt(s.appContext[t],e);return!o&&r?n:o}}function Lt(t,e){return t&&(t[e]||t[(0,i._A)(e)]||t[(0,i.kC)((0,i._A)(e))])}function Ft(t,e,n,s){let o;const a=n&&n[s],c=(0,i.kJ)(t);if(c||(0,i.HD)(t)){const n=c&&(0,r.PG)(t);let i=!1,s=!1;n&&(i=!(0,r.yT)(t),s=(0,r.$y)(t),t=(0,r.XB)(t)),o=new Array(t.length);for(let c=0,l=t.length;c<l;c++)o[c]=e(i?s?(0,r.BX)((0,r.YL)(t[c])):(0,r.YL)(t[c]):t[c],c,void 0,a&&a[c])}else if("number"===typeof t){0,o=new Array(t);for(let n=0;n<t;n++)o[n]=e(n+1,n,void 0,a&&a[n])}else if((0,i.Kn)(t))if(t[Symbol.iterator])o=Array.from(t,((t,n)=>e(t,n,void 0,a&&a[n])));else{const n=Object.keys(t);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=e(t[i],i,r,a&&a[r])}}else o=[];return n&&(n[s]=o),o}const Ut=t=>t?Wn(t)?nr(t):Ut(t.parent):null,Vt=(0,i.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ut(t.parent),$root:t=>Ut(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Gt(t),$forceUpdate:t=>t.f||(t.f=()=>{_(t.update)}),$nextTick:t=>t.n||(t.n=m.bind(t.proxy)),$watch:t=>He.bind(t)}),jt=(t,e)=>t!==i.kT&&!t.__isScriptSetup&&(0,i.RI)(t,e),qt={get({_:t},e){if("__v_skip"===e)return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:l,appContext:u}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(jt(s,e))return c[e]=1,s[e];if(o!==i.kT&&(0,i.RI)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,i.RI)(h,e))return c[e]=3,a[e];if(n!==i.kT&&(0,i.RI)(n,e))return c[e]=4,n[e];$t&&(c[e]=0)}}const d=Vt[e];let f,p;return d?("$attrs"===e&&(0,r.j)(t.attrs,"get",""),d(t)):(f=l.__cssModules)&&(f=f[e])?f:n!==i.kT&&(0,i.RI)(n,e)?(c[e]=4,n[e]):(p=u.config.globalProperties,(0,i.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return jt(s,e)?(s[e]=n,!0):r!==i.kT&&(0,i.RI)(r,e)?(r[e]=n,!0):!(0,i.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o,type:a}},c){let l,u;return!!(n[c]||t!==i.kT&&"$"!==c[0]&&(0,i.RI)(t,c)||jt(e,c)||(l=o[0])&&(0,i.RI)(l,c)||(0,i.RI)(r,c)||(0,i.RI)(Vt,c)||(0,i.RI)(s.config.globalProperties,c)||(u=a.__cssModules)&&u[c])},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.RI)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Bt(t){return(0,i.kJ)(t)?t.reduce(((t,e)=>(t[e]=null,t)),{}):t}let $t=!0;function zt(t){const e=Gt(t),n=t.proxy,s=t.ctx;$t=!1,e.beforeCreate&&Wt(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:l,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:_,beforeDestroy:v,beforeUnmount:w,destroyed:b,unmounted:T,render:E,renderTracked:C,renderTriggered:S,errorCaptured:k,serverPrefetch:I,expose:x,inheritAttrs:A,components:D,directives:R,filters:N}=e,O=null;if(h&&Ht(h,s,O),c)for(const r in c){const t=c[r];(0,i.mf)(t)&&(s[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,i.Kn)(e)&&(t.data=(0,r.qj)(e))}if($t=!0,a)for(const r in a){const t=a[r],e=(0,i.mf)(t)?t.bind(n,n):(0,i.mf)(t.get)?t.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(t)&&(0,i.mf)(t.set)?t.set.bind(n):i.dG,c=sr({get:e,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(l)for(const r in l)Kt(l[r],s,n,r);if(u){const t=(0,i.mf)(u)?u.call(n):u;Reflect.ownKeys(t).forEach((e=>{ce(e,t[e])}))}function P(t,e){(0,i.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(d&&Wt(d,t,"c"),P(bt,f),P(Tt,p),P(Et,g),P(Ct,m),P(ft,y),P(pt,_),P(Dt,k),P(At,C),P(xt,S),P(St,w),P(kt,T),P(It,I),(0,i.kJ)(x))if(x.length){const e=t.exposed||(t.exposed={});x.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e,enumerable:!0})}))}else t.exposed||(t.exposed={});E&&t.render===i.dG&&(t.render=E),null!=A&&(t.inheritAttrs=A),D&&(t.components=D),R&&(t.directives=R),I&&ot(t)}function Ht(t,e,n=i.dG){(0,i.kJ)(t)&&(t=Zt(t));for(const s in t){const n=t[s];let o;o=(0,i.Kn)(n)?"default"in n?le(n.from||s,n.default,!0):le(n.from||s):le(n),(0,r.dq)(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[s]=o}}function Wt(t,e,n){o((0,i.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Kt(t,e,n,r){let s=r.includes(".")?We(n,r):()=>n[r];if((0,i.HD)(t)){const n=e[t];(0,i.mf)(n)&&$e(s,n)}else if((0,i.mf)(t))$e(s,t.bind(n));else if((0,i.Kn)(t))if((0,i.kJ)(t))t.forEach((t=>Kt(t,e,n,r)));else{const r=(0,i.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.mf)(r)&&$e(s,r,t)}else 0}function Gt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let l;return c?l=c:s.length||n||r?(l={},s.length&&s.forEach((t=>Yt(l,t,a,!0))),Yt(l,e,a)):l=e,(0,i.Kn)(e)&&o.set(e,l),l}function Yt(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Yt(t,s,n,!0),i&&i.forEach((e=>Yt(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=Xt[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Xt={data:Qt,props:ne,emits:ne,methods:ee,computed:ee,beforeCreate:te,created:te,beforeMount:te,mounted:te,beforeUpdate:te,updated:te,beforeDestroy:te,beforeUnmount:te,destroyed:te,unmounted:te,activated:te,deactivated:te,errorCaptured:te,serverPrefetch:te,components:ee,directives:ee,watch:re,provide:Qt,inject:Jt};function Qt(t,e){return e?t?function(){return(0,i.l7)((0,i.mf)(t)?t.call(this,this):t,(0,i.mf)(e)?e.call(this,this):e)}:e:t}function Jt(t,e){return ee(Zt(t),Zt(e))}function Zt(t){if((0,i.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function te(t,e){return t?[...new Set([].concat(t,e))]:e}function ee(t,e){return t?(0,i.l7)(Object.create(null),t,e):e}function ne(t,e){return t?(0,i.kJ)(t)&&(0,i.kJ)(e)?[...new Set([...t,...e])]:(0,i.l7)(Object.create(null),Bt(t),Bt(null!=e?e:{})):e}function re(t,e){if(!t)return e;if(!e)return t;const n=(0,i.l7)(Object.create(null),t);for(const r in e)n[r]=te(t[r],e[r]);return n}function ie(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let se=0;function oe(t,e){return function(n,r=null){(0,i.mf)(n)||(n=(0,i.l7)({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=ie(),a=new WeakSet,c=[];let l=!1;const u=s.app={_uid:se++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:ar,get config(){return s.config},set config(t){0},use(t,...e){return a.has(t)||(t&&(0,i.mf)(t.install)?(a.add(t),t.install(u,...e)):(0,i.mf)(t)&&(a.add(t),t(u,...e))),u},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),u},component(t,e){return e?(s.components[t]=e,u):s.components[t]},directive(t,e){return e?(s.directives[t]=e,u):s.directives[t]},mount(i,o,a){if(!l){0;const c=u._ceVNode||Sn(n,r);return c.appContext=s,!0===a?a="svg":!1===a&&(a=void 0),o&&e?e(c,i):t(c,i,a),l=!0,u._container=i,i.__vue_app__=u,nr(c.component)}},onUnmount(t){c.push(t)},unmount(){l&&(o(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(t,e){return s.provides[t]=e,u},runWithContext(t){const e=ae;ae=u;try{return t()}finally{ae=e}}};return u}}let ae=null;function ce(t,e){if(jn){let n=jn.provides;const r=jn.parent&&jn.parent.provides;r===n&&(n=jn.provides=Object.create(r)),n[t]=e}else 0}function le(t,e,n=!1){const r=qn();if(r||ae){let s=ae?ae._context.provides:r?null==r.parent||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,i.mf)(e)?e.call(r&&r.proxy):e}else 0}function ue(){return!(!qn()&&!ae)}const he={},de=()=>Object.create(he),fe=t=>Object.getPrototypeOf(t)===he;function pe(t,e,n,i=!1){const s={},o=de();t.propsDefaults=Object.create(null),me(t,e,s,o);for(const r in t.propsOptions[0])r in s||(s[r]=void 0);n?t.props=i?s:(0,r.Um)(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function ge(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,l=(0,r.IU)(o),[u]=t.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;me(t,e,o,a)&&(h=!0);for(const s in l)e&&((0,i.RI)(e,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(e,r))||(u?!n||void 0===n[s]&&void 0===n[r]||(o[s]=ye(u,l,s,void 0,t,!0)):delete o[s]);if(a!==l)for(const t in a)e&&(0,i.RI)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(Qe(t.emitsOptions,s))continue;const c=e[s];if(u)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const e=(0,i._A)(s);o[e]=ye(u,l,e,c,t,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(t.attrs,"set","")}function me(t,e,n,s){const[o,a]=t.propsOptions;let c,l=!1;if(e)for(let r in e){if((0,i.Gg)(r))continue;const u=e[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=u:n[h]=u:Qe(t.emitsOptions,r)||r in s&&u===s[r]||(s[r]=u,l=!0)}if(a){const e=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=ye(o,e,c,s[c],t,!(0,i.RI)(s,c))}}return l}function ye(t,e,n,r,s,o){const a=t[n];if(null!=a){const t=(0,i.RI)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.mf)(t)){const{propsDefaults:i}=s;if(n in i)r=i[n];else{const o=zn(s);r=i[n]=t.call(null,e),o()}}else r=t;s.ce&&s.ce._setProp(n,r)}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}const _e=new WeakMap;function ve(t,e,n=!1){const r=n?_e:e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},c=[];let l=!1;if(!(0,i.mf)(t)){const r=t=>{l=!0;const[n,r]=ve(t,e,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!l)return(0,i.Kn)(t)&&r.set(t,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const t=(0,i._A)(o[h]);we(t)&&(a[t]=i.kT)}else if(o){0;for(const t in o){const e=(0,i._A)(t);if(we(e)){const n=o[t],r=a[e]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:(0,i.l7)({},n),s=r.type;let l=!1,u=!0;if((0,i.kJ)(s))for(let t=0;t<s.length;++t){const e=s[t],n=(0,i.mf)(e)&&e.name;if("Boolean"===n){l=!0;break}"String"===n&&(u=!1)}else l=(0,i.mf)(s)&&"Boolean"===s.name;r[0]=l,r[1]=u,(l||(0,i.RI)(r,"default"))&&c.push(e)}}}const u=[a,c];return(0,i.Kn)(t)&&r.set(t,u),u}function we(t){return"$"!==t[0]&&!(0,i.Gg)(t)}const be=t=>"_"===t||"_ctx"===t||"$stable"===t,Te=t=>(0,i.kJ)(t)?t.map(Nn):[Nn(t)],Ee=(t,e,n)=>{if(e._n)return e;const r=x(((...t)=>Te(e(...t))),n);return r._c=!1,r},Ce=(t,e,n)=>{const r=t._ctx;for(const s in t){if(be(s))continue;const n=t[s];if((0,i.mf)(n))e[s]=Ee(s,n,r);else if(null!=n){0;const t=Te(n);e[s]=()=>t}}},Se=(t,e)=>{const n=Te(e);t.slots.default=()=>n},ke=(t,e,n)=>{for(const r in e)!n&&be(r)||(t[r]=e[r])},Ie=(t,e,n)=>{const r=t.slots=de();if(32&t.vnode.shapeFlag){const t=e._;t?(ke(r,e,n),n&&(0,i.Nj)(r,"_",t,!0)):Ce(e,r)}else e&&Se(t,e)},xe=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=i.kT;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:ke(s,e,n):(o=!e.$stable,Ce(e,s)),a=e}else e&&(Se(t,e),a={default:1});if(o)for(const i in s)be(i)||null!=a[i]||delete s[i]};function Ae(){}const De=on;function Re(t){return Ne(t)}function Ne(t,e){Ae();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=i.dG,insertStaticContent:m}=t,y=(t,e,n,r=null,i=null,s=null,o=void 0,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!bn(t,e)&&(r=Q(t),W(t,i,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=e;switch(l){case cn:v(t,e,n,r);break;case ln:w(t,e,n,r);break;case un:null==t&&E(e,n,r,o);break;case an:M(t,e,n,r,i,s,o,a,c);break;default:1&h?k(t,e,n,r,i,s,o,a,c):6&h?L(t,e,n,r,i,s,o,a,c):(64&h||128&h)&&l.process(t,e,n,r,i,s,o,a,c,tt)}null!=u&&i?ct(u,t&&t.ref,s,e||t,!e):null==u&&t&&null!=t.ref&&ct(t.ref,null,s,t,!0)},v=(t,e,n,r)=>{if(null==t)s(e.el=l(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},w=(t,e,n,r)=>{null==t?s(e.el=u(e.children||""),n,r):e.el=t.el},E=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r,t.el,t.anchor)},C=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),s(t,n,r),t=i;s(e,n,r)},S=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},k=(t,e,n,r,i,s,o,a,c)=>{if("svg"===e.type?o="svg":"math"===e.type&&(o="mathml"),null==t)I(e,n,r,i,s,o,a,c);else{const n=t.el&&t.el._isVueCE?t.el:null;try{n&&n._beginPatch(),N(t,e,i,s,o,a,c)}finally{n&&n._endPatch()}}},I=(t,e,n,r,o,l,u,h)=>{let f,p;const{props:g,shapeFlag:m,transition:y,dirs:_}=t;if(f=t.el=c(t.type,l,g&&g.is,g),8&m?d(f,t.children):16&m&&A(t.children,f,null,r,o,Oe(t,l),u,h),_&&D(t,null,r,"created"),x(f,t,t.scopeId,u,r),g){for(const t in g)"value"===t||(0,i.Gg)(t)||a(f,t,null,g[t],l,r);"value"in g&&a(f,"value",null,g.value,l),(p=g.onVnodeBeforeMount)&&Ln(p,r,t)}_&&D(t,null,r,"beforeMount");const v=Me(o,y);v&&y.beforeEnter(f),s(f,e,n),((p=g&&g.onVnodeMounted)||v||_)&&De((()=>{p&&Ln(p,r,t),v&&y.enter(f),_&&D(t,null,r,"mounted")}),o)},x=(t,e,n,r,i)=>{if(n&&g(t,n),r)for(let s=0;s<r.length;s++)g(t,r[s]);if(i){let n=i.subTree;if(e===n||sn(n.type)&&(n.ssContent===e||n.ssFallback===e)){const e=i.vnode;x(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},A=(t,e,n,r,i,s,o,a,c=0)=>{for(let l=c;l<t.length;l++){const c=t[l]=a?On(t[l]):Nn(t[l]);y(null,c,e,n,r,i,s,o,a)}},N=(t,e,n,r,s,o,c)=>{const l=e.el=t.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=e;u|=16&t.patchFlag;const p=t.props||i.kT,g=e.props||i.kT;let m;if(n&&Pe(n,!1),(m=g.onVnodeBeforeUpdate)&&Ln(m,n,e,t),f&&D(e,t,n,"beforeUpdate"),n&&Pe(n,!0),(p.innerHTML&&null==g.innerHTML||p.textContent&&null==g.textContent)&&d(l,""),h?O(t.dynamicChildren,h,l,n,r,Oe(e,s),o):c||q(t,e,l,null,n,r,Oe(e,s),o,!1),u>0){if(16&u)P(l,p,g,n,s);else if(2&u&&p.class!==g.class&&a(l,"class",null,g.class,s),4&u&&a(l,"style",p.style,g.style,s),8&u){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const r=t[e],i=p[r],o=g[r];o===i&&"value"!==r||a(l,r,i,o,s,n)}}1&u&&t.children!==e.children&&d(l,e.children)}else c||null!=h||P(l,p,g,n,s);((m=g.onVnodeUpdated)||f)&&De((()=>{m&&Ln(m,n,e,t),f&&D(e,t,n,"updated")}),r)},O=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],l=e[a],u=c.el&&(c.type===an||!bn(c,l)||198&c.shapeFlag)?f(c.el):n;y(c,l,u,null,r,i,s,o,!0)}},P=(t,e,n,r,s)=>{if(e!==n){if(e!==i.kT)for(const o in e)(0,i.Gg)(o)||o in n||a(t,o,e[o],null,s,r);for(const o in n){if((0,i.Gg)(o))continue;const c=n[o],l=e[o];c!==l&&"value"!==o&&a(t,o,l,c,s,r)}"value"in n&&a(t,"value",e.value,n.value,s)}},M=(t,e,n,r,i,o,a,c,u)=>{const h=e.el=t?t.el:l(""),d=e.anchor=t?t.anchor:l("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(s(h,n,r),s(d,n,r),A(e.children||[],n,d,i,o,a,c,u)):f>0&&64&f&&p&&t.dynamicChildren?(O(t.dynamicChildren,p,n,i,o,a,c),(null!=e.key||i&&e===i.subTree)&&Le(t,e,!0)):q(t,e,n,d,i,o,a,c,u)},L=(t,e,n,r,i,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,c):F(e,n,r,i,s,o,c):U(t,e,c)},F=(t,e,n,r,i,s,o)=>{const a=t.component=Vn(t,r,i);if(ht(t)&&(a.ctx.renderer=tt),Xn(a,!1,o),a.asyncDep){if(i&&i.registerDep(a,V,o),!t.el){const r=a.subTree=Sn(ln);w(null,r,e,n),t.placeholder=r.el}}else V(a,t,e,n,i,s,o)},U=(t,e,n)=>{const r=e.component=t.component;if(en(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void j(r,e,n);r.next=e,r.update()}else e.el=t.el,r.vnode=e},V=(t,e,n,s,o,a,c)=>{const l=()=>{if(t.isMounted){let{next:e,bu:n,u:r,parent:s,vnode:u}=t;{const n=Ue(t);if(n)return e&&(e.el=u.el,j(t,e,c)),void n.asyncDep.then((()=>{t.isUnmounted||l()}))}let h,d=e;0,Pe(t,!1),e?(e.el=u.el,j(t,e,c)):e=u,n&&(0,i.ir)(n),(h=e.props&&e.props.onVnodeBeforeUpdate)&&Ln(h,s,e,u),Pe(t,!0);const p=Je(t);0;const g=t.subTree;t.subTree=p,y(g,p,f(g.el),Q(g),t,o,a),e.el=p.el,null===d&&rn(t,p.el),r&&De(r,o),(h=e.props&&e.props.onVnodeUpdated)&&De((()=>Ln(h,s,e,u)),o)}else{let r;const{el:c,props:l}=e,{bm:u,m:h,parent:d,root:f,type:p}=t,g=ut(e);if(Pe(t,!1),u&&(0,i.ir)(u),!g&&(r=l&&l.onVnodeBeforeMount)&&Ln(r,d,e),Pe(t,!0),c&&nt){const e=()=>{t.subTree=Je(t),nt(c,t.subTree,t,o,null)};g&&p.__asyncHydrate?p.__asyncHydrate(c,t,e):e()}else{f.ce&&!1!==f.ce._def.shadowRoot&&f.ce._injectChildStyle(p);const r=t.subTree=Je(t);0,y(null,r,n,s,t,o,a),e.el=r.el}if(h&&De(h,o),!g&&(r=l&&l.onVnodeMounted)){const t=e;De((()=>Ln(r,d,t)),o)}(256&e.shapeFlag||d&&ut(d.vnode)&&256&d.vnode.shapeFlag)&&t.a&&De(t.a,o),t.isMounted=!0,e=n=s=null}};t.scope.on();const u=t.effect=new r.qq(l);t.scope.off();const h=t.update=u.run.bind(u),d=t.job=u.runIfDirty.bind(u);d.i=t,d.id=t.uid,u.scheduler=()=>_(d),Pe(t,!0),h()},j=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,ge(t,e.props,i,n),xe(t,e.children,n),(0,r.Jd)(),b(t),(0,r.lk)()},q=(t,e,n,r,i,s,o,a,c=!1)=>{const l=t&&t.children,u=t?t.shapeFlag:0,h=e.children,{patchFlag:f,shapeFlag:p}=e;if(f>0){if(128&f)return void $(l,h,n,r,i,s,o,a,c);if(256&f)return void B(l,h,n,r,i,s,o,a,c)}8&p?(16&u&&X(l,i,s),h!==l&&d(n,h)):16&u?16&p?$(l,h,n,r,i,s,o,a,c):X(l,i,s,!0):(8&u&&d(n,""),16&p&&A(h,n,r,i,s,o,a,c))},B=(t,e,n,r,s,o,a,c,l)=>{t=t||i.Z6,e=e||i.Z6;const u=t.length,h=e.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const r=e[f]=l?On(e[f]):Nn(e[f]);y(t[f],r,n,null,s,o,a,c,l)}u>h?X(t,s,o,!0,!1,d):A(e,n,r,s,o,a,c,l,d)},$=(t,e,n,r,s,o,a,c,l)=>{let u=0;const h=e.length;let d=t.length-1,f=h-1;while(u<=d&&u<=f){const r=t[u],i=e[u]=l?On(e[u]):Nn(e[u]);if(!bn(r,i))break;y(r,i,n,null,s,o,a,c,l),u++}while(u<=d&&u<=f){const r=t[d],i=e[f]=l?On(e[f]):Nn(e[f]);if(!bn(r,i))break;y(r,i,n,null,s,o,a,c,l),d--,f--}if(u>d){if(u<=f){const t=f+1,i=t<h?e[t].el:r;while(u<=f)y(null,e[u]=l?On(e[u]):Nn(e[u]),n,i,s,o,a,c,l),u++}}else if(u>f)while(u<=d)W(t[u],s,o,!0),u++;else{const p=u,g=u,m=new Map;for(u=g;u<=f;u++){const t=e[u]=l?On(e[u]):Nn(e[u]);null!=t.key&&m.set(t.key,u)}let _,v=0;const w=f-g+1;let b=!1,T=0;const E=new Array(w);for(u=0;u<w;u++)E[u]=0;for(u=p;u<=d;u++){const r=t[u];if(v>=w){W(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(_=g;_<=f;_++)if(0===E[_-g]&&bn(r,e[_])){i=_;break}void 0===i?W(r,s,o,!0):(E[i-g]=u+1,i>=T?T=i:b=!0,y(r,e[i],n,null,s,o,a,c,l),v++)}const C=b?Fe(E):i.Z6;for(_=C.length-1,u=w-1;u>=0;u--){const t=g+u,i=e[t],d=e[t+1],f=t+1<h?d.el||d.placeholder:r;0===E[u]?y(null,i,n,f,s,o,a,c,l):b&&(_<0||u!==C[_]?H(i,n,f,2):_--)}}},H=(t,e,n,r,i=null)=>{const{el:a,type:c,transition:l,children:u,shapeFlag:h}=t;if(6&h)return void H(t.component.subTree,e,n,r);if(128&h)return void t.suspense.move(e,n,r);if(64&h)return void c.move(t,e,n,tt);if(c===an){s(a,e,n);for(let t=0;t<u.length;t++)H(u[t],e,n,r);return void s(t.anchor,e,n)}if(c===un)return void C(t,e,n);const d=2!==r&&1&h&&l;if(d)if(0===r)l.beforeEnter(a),s(a,e,n),De((()=>l.enter(a)),i);else{const{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{t.ctx.isUnmounted?o(a):s(a,e,n)},h=()=>{a._isLeaving&&a[z](!0),r(a,(()=>{u(),c&&c()}))};i?i(a,u,h):h()}else s(a,e,n)},W=(t,e,n,i=!1,s=!1)=>{const{type:o,props:a,ref:c,children:l,dynamicChildren:u,shapeFlag:h,patchFlag:d,dirs:f,cacheIndex:p}=t;if(-2===d&&(s=!1),null!=c&&((0,r.Jd)(),ct(c,null,n,t,!0),(0,r.lk)()),null!=p&&(e.renderCache[p]=void 0),256&h)return void e.ctx.deactivate(t);const g=1&h&&f,m=!ut(t);let y;if(m&&(y=a&&a.onVnodeBeforeUnmount)&&Ln(y,e,t),6&h)Y(t.component,n,i);else{if(128&h)return void t.suspense.unmount(n,i);g&&D(t,null,e,"beforeUnmount"),64&h?t.type.remove(t,e,n,tt,i):u&&!u.hasOnce&&(o!==an||d>0&&64&d)?X(u,e,n,!1,!0):(o===an&&384&d||!s&&16&h)&&X(l,e,n),i&&K(t)}(m&&(y=a&&a.onVnodeUnmounted)||g)&&De((()=>{y&&Ln(y,e,t),g&&D(t,null,e,"unmounted")}),n)},K=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===an)return void G(n,r);if(e===un)return void S(t);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,o=()=>e(n,s);r?r(t.el,s,o):o()}else s()},G=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},Y=(t,e,n)=>{const{bum:r,scope:s,job:o,subTree:a,um:c,m:l,a:u}=t;Ve(l),Ve(u),r&&(0,i.ir)(r),s.stop(),o&&(o.flags|=8,W(a,t,e,n)),c&&De(c,e),De((()=>{t.isUnmounted=!0}),e)},X=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)W(t[o],e,n,r,i)},Q=t=>{if(6&t.shapeFlag)return Q(t.component.subTree);if(128&t.shapeFlag)return t.suspense.next();const e=p(t.anchor||t.el),n=e&&e[R];return n?p(n):e};let J=!1;const Z=(t,e,n)=>{null==t?e._vnode&&W(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),e._vnode=t,J||(J=!0,b(),T(),J=!1)},tt={p:y,um:W,m:H,r:K,mt:F,mc:A,pc:q,pbc:O,n:Q,o:t};let et,nt;return e&&([et,nt]=e(tt)),{render:Z,hydrate:et,createApp:oe(Z,et)}}function Oe({type:t,props:e},n){return"svg"===n&&"foreignObject"===t||"mathml"===n&&"annotation-xml"===t&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Pe({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Me(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Le(t,e,n=!1){const r=t.children,s=e.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const t=r[i];let e=s[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[i]=On(s[i]),e.el=t.el),n||-2===e.patchFlag||Le(t,e)),e.type===cn&&-1!==e.patchFlag&&(e.el=t.el),e.type!==ln||e.el||(e.el=t.el)}}function Fe(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}function Ue(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ue(e)}function Ve(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const je=Symbol.for("v-scx"),qe=()=>{{const t=le(je);return t}};function Be(t,e){return ze(t,null,e)}function $e(t,e,n){return ze(t,e,n)}function ze(t,e,n=i.kT){const{immediate:s,deep:a,flush:c,once:l}=n;const u=(0,i.l7)({},n);const h=e&&s||!e&&"post"!==c;let d;if(Yn)if("sync"===c){const t=qe();d=t.__watcherHandles||(t.__watcherHandles=[])}else if(!h){const t=()=>{};return t.stop=i.dG,t.resume=i.dG,t.pause=i.dG,t}const f=jn;u.call=(t,e,n)=>o(t,f,e,n);let p=!1;"post"===c?u.scheduler=t=>{De(t,f&&f.suspense)}:"sync"!==c&&(p=!0,u.scheduler=(t,e)=>{e?t():_(t)}),u.augmentJob=t=>{e&&(t.flags|=4),p&&(t.flags|=2,f&&(t.id=f.uid,t.i=f))};const g=(0,r.YP)(t,e,u);return Yn&&(d?d.push(g):h&&g()),g}function He(t,e,n){const r=this.proxy,s=(0,i.HD)(t)?t.includes(".")?We(r,t):()=>r[t]:t.bind(r,r);let o;(0,i.mf)(e)?o=e:(o=e.handler,n=e);const a=zn(this),c=ze(s,o.bind(r),n);return a(),c}function We(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}const Ke=(t,e)=>"modelValue"===e||"model-value"===e?t.modelModifiers:t[`${e}Modifiers`]||t[`${(0,i._A)(e)}Modifiers`]||t[`${(0,i.rs)(e)}Modifiers`];function Ge(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.kT;let s=n;const a=e.startsWith("update:"),c=a&&Ke(r,e.slice(7));let l;c&&(c.trim&&(s=n.map((t=>(0,i.HD)(t)?t.trim():t))),c.number&&(s=n.map(i.h5)));let u=r[l=(0,i.hR)(e)]||r[l=(0,i.hR)((0,i._A)(e))];!u&&a&&(u=r[l=(0,i.hR)((0,i.rs)(e))]),u&&o(u,t,6,s);const h=r[l+"Once"];if(h){if(t.emitted){if(t.emitted[l])return}else t.emitted={};t.emitted[l]=!0,o(h,t,6,s)}}const Ye=new WeakMap;function Xe(t,e,n=!1){const r=n?Ye:e.emitsCache,s=r.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!(0,i.mf)(t)){const r=t=>{const n=Xe(t,e,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((t=>a[t]=null)):(0,i.l7)(a,o),(0,i.Kn)(t)&&r.set(t,a),a):((0,i.Kn)(t)&&r.set(t,null),null)}function Qe(t,e){return!(!t||!(0,i.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,i.RI)(t,(0,i.rs)(e))||(0,i.RI)(t,e))}function Je(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:c,attrs:l,emit:u,render:h,renderCache:d,props:f,data:p,setupState:g,ctx:m,inheritAttrs:y}=t,_=I(t);let v,w;try{if(4&n.shapeFlag){const t=s||r,e=t;v=Nn(h.call(e,t,d,f,g,p,m)),w=l}else{const t=e;0,v=Nn(t.length>1?t(f,{attrs:l,slots:c,emit:u}):t(f,null)),w=e.props?l:Ze(l)}}catch(T){hn.length=0,a(T,t,1),v=Sn(ln)}let b=v;if(w&&!1!==y){const t=Object.keys(w),{shapeFlag:e}=b;t.length&&7&e&&(o&&t.some(i.tR)&&(w=tn(w,o)),b=xn(b,w,!1,!0))}return n.dirs&&(b=xn(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&rt(b,n.transition),v=b,I(_),v}const Ze=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.F7)(n))&&((e||(e={}))[n]=t[n]);return e},tn=(t,e)=>{const n={};for(const r in t)(0,i.tR)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function en(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||nn(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?nn(r,o,l):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!Qe(l,n))return!0}}return!1}function nn(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Qe(n,s))return!0}return!1}function rn({vnode:t,parent:e},n){while(e){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r!==t)break;(t=e.vnode).el=n,e=e.parent}}const sn=t=>t.__isSuspense;function on(t,e){e&&e.pendingBranch?(0,i.kJ)(t)?e.effects.push(...t):e.effects.push(t):w(t)}const an=Symbol.for("v-fgt"),cn=Symbol.for("v-txt"),ln=Symbol.for("v-cmt"),un=Symbol.for("v-stc"),hn=[];let dn=null;function fn(t=!1){hn.push(dn=t?null:[])}function pn(){hn.pop(),dn=hn[hn.length-1]||null}let gn=1;function mn(t,e=!1){gn+=t,t<0&&dn&&e&&(dn.hasOnce=!0)}function yn(t){return t.dynamicChildren=gn>0?dn||i.Z6:null,pn(),gn>0&&dn&&dn.push(t),t}function _n(t,e,n,r,i,s){return yn(Cn(t,e,n,r,i,s,!0))}function vn(t,e,n,r,i){return yn(Sn(t,e,n,r,i,!0))}function wn(t){return!!t&&!0===t.__v_isVNode}function bn(t,e){return t.type===e.type&&t.key===e.key}const Tn=({key:t})=>null!=t?t:null,En=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,i.HD)(t)||(0,r.dq)(t)||(0,i.mf)(t)?{i:S,r:t,k:e,f:!!n}:t:null);function Cn(t,e=null,n=null,r=0,s=null,o=(t===an?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Tn(e),ref:e&&En(e),scopeId:k,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:S};return c?(Pn(l,n),128&o&&t.normalize(l)):n&&(l.shapeFlag|=(0,i.HD)(n)?8:16),gn>0&&!a&&dn&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&dn.push(l),l}const Sn=kn;function kn(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==Ot||(t=ln),wn(t)){const r=xn(t,e,!0);return n&&Pn(r,n),gn>0&&!a&&dn&&(6&r.shapeFlag?dn[dn.indexOf(t)]=r:dn.push(r)),r.patchFlag=-2,r}if(ir(t)&&(t=t.__vccOpts),e){e=In(e);let{class:t,style:n}=e;t&&!(0,i.HD)(t)&&(e.class=(0,i.C_)(t)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),e.style=(0,i.j5)(n))}const c=(0,i.HD)(t)?1:sn(t)?128:N(t)?64:(0,i.Kn)(t)?4:(0,i.mf)(t)?2:0;return Cn(t,e,n,s,o,c,a,!0)}function In(t){return t?(0,r.X3)(t)||fe(t)?(0,i.l7)({},t):t:null}function xn(t,e,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:l}=t,u=e?Mn(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Tn(u),ref:e&&e.ref?n&&o?(0,i.kJ)(o)?o.concat(En(e)):[o,En(e)]:En(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==an?-1===a?16:16|a:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xn(t.ssContent),ssFallback:t.ssFallback&&xn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&rt(h,l.clone(h)),h}function An(t=" ",e=0){return Sn(cn,null,t,e)}function Dn(t,e){const n=Sn(un,null,t);return n.staticCount=e,n}function Rn(t="",e=!1){return e?(fn(),vn(ln,null,t)):Sn(ln,null,t)}function Nn(t){return null==t||"boolean"===typeof t?Sn(ln):(0,i.kJ)(t)?Sn(an,null,t.slice()):wn(t)?On(t):Sn(cn,null,String(t))}function On(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:xn(t)}function Pn(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.kJ)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),Pn(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||fe(e)?3===r&&S&&(1===S.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=S}}else(0,i.mf)(e)?(e={default:e,_ctx:S},n=32):(e=String(e),64&r?(n=16,e=[An(e)]):n=8);t.children=e,t.shapeFlag|=n}function Mn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C_)([e.class,r.class]));else if("style"===t)e.style=(0,i.j5)([e.style,r.style]);else if((0,i.F7)(t)){const n=e[t],s=r[t];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=r[t])}return e}function Ln(t,e,n,r=null){o(t,e,7,[n,r])}const Fn=ie();let Un=0;function Vn(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||Fn,a={uid:Un++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ve(s,o),emitsOptions:Xe(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=Ge.bind(null,a),t.ce&&t.ce(a),a}let jn=null;const qn=()=>jn||S;let Bn,$n;{const t=(0,i.E9)(),e=(e,n)=>{let r;return(r=t[e])||(r=t[e]=[]),r.push(n),t=>{r.length>1?r.forEach((e=>e(t))):r[0](t)}};Bn=e("__VUE_INSTANCE_SETTERS__",(t=>jn=t)),$n=e("__VUE_SSR_SETTERS__",(t=>Yn=t))}const zn=t=>{const e=jn;return Bn(t),t.scope.on(),()=>{t.scope.off(),Bn(e)}},Hn=()=>{jn&&jn.scope.off(),Bn(null)};function Wn(t){return 4&t.vnode.shapeFlag}let Kn,Gn,Yn=!1;function Xn(t,e=!1,n=!1){e&&$n(e);const{props:r,children:i}=t.vnode,s=Wn(t);pe(t,r,s,e),Ie(t,i,n||e);const o=s?Qn(t,e):void 0;return e&&$n(!1),o}function Qn(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,qt);const{setup:o}=n;if(o){(0,r.Jd)();const n=t.setupContext=o.length>1?er(t):null,c=zn(t),l=s(o,t,0,[t.props,n]),u=(0,i.tI)(l);if((0,r.lk)(),c(),!u&&!t.sp||ut(t)||ot(t),u){if(l.then(Hn,Hn),e)return l.then((n=>{Jn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=l}else Jn(t,l,e)}else Zn(t,e)}function Jn(t,e,n){(0,i.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Kn)(e)&&(t.setupState=(0,r.WL)(e)),Zn(t,n)}function Zn(t,e,n){const s=t.type;if(!t.render){if(!e&&Kn&&!s.render){const e=s.template||Gt(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=Kn(e,c)}}t.render=s.render||i.dG,Gn&&Gn(t)}{const e=zn(t);(0,r.Jd)();try{zt(t)}finally{(0,r.lk)(),e()}}}const tr={get(t,e){return(0,r.j)(t,"get",""),t[e]}};function er(t){const e=e=>{t.exposed=e||{}};return{attrs:new Proxy(t.attrs,tr),slots:t.slots,emit:t.emit,expose:e}}function nr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in Vt?Vt[n](t):void 0},has(t,e){return e in t||e in Vt}})):t.proxy}function rr(t,e=!0){return(0,i.mf)(t)?t.displayName||t.name:t.name||e&&t.__name}function ir(t){return(0,i.mf)(t)&&"__vccOpts"in t}const sr=(t,e)=>{const n=(0,r.Fl)(t,e,Yn);return n};function or(t,e,n){try{mn(-1);const r=arguments.length;return 2===r?(0,i.Kn)(e)&&!(0,i.kJ)(e)?wn(e)?Sn(t,null,[e]):Sn(t,e):Sn(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&wn(n)&&(n=[n]),Sn(t,e,n))}finally{mn(1)}}const ar="3.5.24"},9242:function(t,e,n){"use strict";n.d(e,{D2:function(){return Ut},F8:function(){return U},W3:function(){return wt},bM:function(){return Rt},iM:function(){return Lt},nr:function(){return Dt},ri:function(){return Bt},sj:function(){return q},uT:function(){return w}});n(7658);var r=n(3396),i=n(7139),s=n(4870);
/**
* @vue/runtime-dom v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let o;const a="undefined"!==typeof window&&window.trustedTypes;if(a)try{o=a.createPolicy("vue",{createHTML:t=>t})}catch(Ht){}const c=o?t=>o.createHTML(t):t=>t,l="http://www.w3.org/2000/svg",u="http://www.w3.org/1998/Math/MathML",h="undefined"!==typeof document?document:null,d=h&&h.createElement("template"),f={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i="svg"===e?h.createElementNS(l,t):"mathml"===e?h.createElementNS(u,t):n?h.createElement(t,{is:n}):h.createElement(t);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>h.createTextNode(t),createComment:t=>h.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>h.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{d.innerHTML=c("svg"===r?`<svg>${t}</svg>`:"mathml"===r?`<math>${t}</math>`:t);const i=d.content;if("svg"===r||"mathml"===r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},p="transition",g="animation",m=Symbol("_vtc"),y={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},_=(0,i.l7)({},r.nJ,y),v=t=>(t.displayName="Transition",t.props=_,t),w=v(((t,{slots:e})=>(0,r.h)(r.P$,E(t),e))),b=(t,e=[])=>{(0,i.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)},T=t=>!!t&&((0,i.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function E(t){const e={};for(const i in t)i in y||(e[i]=t[i]);if(!1===t.css)return e;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:u=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=C(s),m=g&&g[0],_=g&&g[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:E,onLeave:S,onLeaveCancelled:A,onBeforeAppear:R=v,onAppear:N=w,onAppearCancelled:O=E}=e,M=(t,e,n,r)=>{t._enterCancelled=r,I(t,e?h:c),I(t,e?u:a),n&&n()},L=(t,e)=>{t._isLeaving=!1,I(t,d),I(t,p),I(t,f),e&&e()},F=t=>(e,n)=>{const i=t?N:w,s=()=>M(e,t,n);b(i,[e,s]),x((()=>{I(e,t?l:o),k(e,t?h:c),T(i)||D(e,r,m,s)}))};return(0,i.l7)(e,{onBeforeEnter(t){b(v,[t]),k(t,o),k(t,a)},onBeforeAppear(t){b(R,[t]),k(t,l),k(t,u)},onEnter:F(!1),onAppear:F(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>L(t,e);k(t,d),t._enterCancelled?(k(t,f),P(t)):(P(t),k(t,f)),x((()=>{t._isLeaving&&(I(t,d),k(t,p),T(S)||D(t,r,_,n))})),b(S,[t,n])},onEnterCancelled(t){M(t,!1,void 0,!0),b(E,[t])},onAppearCancelled(t){M(t,!0,void 0,!0),b(O,[t])},onLeaveCancelled(t){L(t),b(A,[t])}})}function C(t){if(null==t)return null;if((0,i.Kn)(t))return[S(t.enter),S(t.leave)];{const e=S(t);return[e,e]}}function S(t){const e=(0,i.He)(t);return e}function k(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t[m]||(t[m]=new Set)).add(e)}function I(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const n=t[m];n&&(n.delete(e),n.size||(t[m]=void 0))}function x(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let A=0;function D(t,e,n,r){const i=t._endId=++A,s=()=>{i===t._endId&&r()};if(null!=n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=R(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,d),s()},d=e=>{e.target===t&&++u>=c&&h()};setTimeout((()=>{u<c&&h()}),a+1),t.addEventListener(l,d)}function R(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(`${p}Delay`),s=r(`${p}Duration`),o=N(i,s),a=r(`${g}Delay`),c=r(`${g}Duration`),l=N(a,c);let u=null,h=0,d=0;e===p?o>0&&(u=p,h=o,d=s.length):e===g?l>0&&(u=g,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?p:g:null,d=u?u===p?s.length:c.length:0);const f=u===p&&/\b(?:transform|all)(?:,|$)/.test(r(`${p}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function N(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>O(e)+O(t[n]))))}function O(t){return"auto"===t?0:1e3*Number(t.slice(0,-1).replace(",","."))}function P(t){const e=t?t.ownerDocument:document;return e.body.offsetHeight}function M(t,e,n){const r=t[m];r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const L=Symbol("_vod"),F=Symbol("_vsh"),U={name:"show",beforeMount(t,{value:e},{transition:n}){t[L]="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):V(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!==!n&&(r?e?(r.beforeEnter(t),V(t,!0),r.enter(t)):r.leave(t,(()=>{V(t,!1)})):V(t,e))},beforeUnmount(t,{value:e}){V(t,e)}};function V(t,e){t.style.display=e?t[L]:"none",t[F]=!e}const j=Symbol("");function q(t){const e=(0,r.FN)();if(!e)return;const n=e.ut=(n=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach((t=>$(t,n)))};const s=()=>{const r=t(e.proxy);e.ce?$(e.ce,r):B(e.subTree,r),n(r)};(0,r.Xn)((()=>{(0,r.qb)(s)})),(0,r.bv)((()=>{(0,r.YP)(s,i.dG,{flush:"post"});const t=new MutationObserver(s);t.observe(e.subTree.el.parentNode,{childList:!0}),(0,r.Ah)((()=>t.disconnect()))}))}function B(t,e){if(128&t.shapeFlag){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push((()=>{B(n.activeBranch,e)}))}while(t.component)t=t.component.subTree;if(1&t.shapeFlag&&t.el)$(t.el,e);else if(t.type===r.HY)t.children.forEach((t=>B(t,e)));else if(t.type===r.qG){let{el:n,anchor:r}=t;while(n){if($(n,e),n===r)break;n=n.nextSibling}}}function $(t,e){if(1===t.nodeType){const n=t.style;let r="";for(const t in e){const s=(0,i.vt)(e[t]);n.setProperty(`--${t}`,s),r+=`--${t}: ${s};`}n[j]=r}}const z=/(?:^|;)\s*display\s*:/;function H(t,e,n){const r=t.style,s=(0,i.HD)(n);let o=!1;if(n&&!s){if(e)if((0,i.HD)(e))for(const t of e.split(";")){const e=t.slice(0,t.indexOf(":")).trim();null==n[e]&&K(r,e,"")}else for(const t in e)null==n[t]&&K(r,t,"");for(const t in n)"display"===t&&(o=!0),K(r,t,n[t])}else if(s){if(e!==n){const t=r[j];t&&(n+=";"+t),r.cssText=n,o=z.test(n)}}else e&&t.removeAttribute("style");L in t&&(t[L]=o?r.display:"",t[F]&&(r.display="none"))}const W=/\s*!important$/;function K(t,e,n){if((0,i.kJ)(n))n.forEach((n=>K(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=X(t,e);W.test(n)?t.setProperty((0,i.rs)(r),n.replace(W,""),"important"):t[r]=n}}const G=["Webkit","Moz","ms"],Y={};function X(t,e){const n=Y[e];if(n)return n;let r=(0,i._A)(e);if("filter"!==r&&r in t)return Y[e]=r;r=(0,i.kC)(r);for(let i=0;i<G.length;i++){const n=G[i]+r;if(n in t)return Y[e]=n}return e}const Q="http://www.w3.org/1999/xlink";function J(t,e,n,r,s,o=(0,i.Pq)(e)){r&&e.startsWith("xlink:")?null==n?t.removeAttributeNS(Q,e.slice(6,e.length)):t.setAttributeNS(Q,e,n):null==n||o&&!(0,i.yA)(n)?t.removeAttribute(e):t.setAttribute(e,o?"":(0,i.yk)(n)?String(n):n)}function Z(t,e,n,r,s){if("innerHTML"===e||"textContent"===e)return void(null!=n&&(t[e]="innerHTML"===e?c(n):n));const o=t.tagName;if("value"===e&&"PROGRESS"!==o&&!o.includes("-")){const r="OPTION"===o?t.getAttribute("value")||"":t.value,i=null==n?"checkbox"===t.type?"on":"":String(n);return r===i&&"_value"in t||(t.value=i),null==n&&t.removeAttribute(e),void(t._value=n)}let a=!1;if(""===n||null==n){const r=typeof t[e];"boolean"===r?n=(0,i.yA)(n):null==n&&"string"===r?(n="",a=!0):"number"===r&&(n=0,a=!0)}try{t[e]=n}catch(Ht){0}a&&t.removeAttribute(s||e)}function tt(t,e,n,r){t.addEventListener(e,n,r)}function et(t,e,n,r){t.removeEventListener(e,n,r)}const nt=Symbol("_vei");function rt(t,e,n,r,i=null){const s=t[nt]||(t[nt]={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=st(e);if(r){const o=s[e]=lt(r,i);tt(t,n,o,a)}else o&&(et(t,n,o,a),s[e]=void 0)}}const it=/(?:Once|Passive|Capture)$/;function st(t){let e;if(it.test(t)){let n;e={};while(n=t.match(it))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,i.rs)(t.slice(2));return[n,e]}let ot=0;const at=Promise.resolve(),ct=()=>ot||(at.then((()=>ot=0)),ot=Date.now());function lt(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,r.$d)(ut(t,n.value),e,5,[t])};return n.value=t,n.attached=ct(),n}function ut(t,e){if((0,i.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const ht=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,dt=(t,e,n,r,s,o)=>{const a="svg"===s;"class"===e?M(t,r,a):"style"===e?H(t,n,r):(0,i.F7)(e)?(0,i.tR)(e)||rt(t,e,n,r,o):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):ft(t,e,r,a))?(Z(t,e,r),t.tagName.includes("-")||"value"!==e&&"checked"!==e&&"selected"!==e||J(t,e,r,a,o,"value"!==e)):!t._isVueCE||!/[A-Z]/.test(e)&&(0,i.HD)(r)?("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),J(t,e,r,a)):Z(t,(0,i._A)(e),r,o,e)};function ft(t,e,n,r){if(r)return"innerHTML"===e||"textContent"===e||!!(e in t&&ht(e)&&(0,i.mf)(n));if("spellcheck"===e||"draggable"===e||"translate"===e||"autocorrect"===e)return!1;if("sandbox"===e&&"IFRAME"===t.tagName)return!1;if("form"===e)return!1;if("list"===e&&"INPUT"===t.tagName)return!1;if("type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;if("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)return!1}return(!ht(e)||!(0,i.HD)(n))&&e in t}"undefined"!==typeof HTMLElement&&HTMLElement;const pt=new WeakMap,gt=new WeakMap,mt=Symbol("_moveCb"),yt=Symbol("_enterCb"),_t=t=>(delete t.props.mode,t),vt=_t({name:"TransitionGroup",props:(0,i.l7)({},_,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=(0,r.FN)(),i=(0,r.Y8)();let o,a;return(0,r.ic)((()=>{if(!o.length)return;const e=t.moveClass||`${t.name||"v"}-move`;if(!Ct(o[0].el,n.vnode.el,e))return void(o=[]);o.forEach(bt),o.forEach(Tt);const r=o.filter(Et);P(n.vnode.el),r.forEach((t=>{const n=t.el,r=n.style;k(n,e),r.transform=r.webkitTransform=r.transitionDuration="";const i=n[mt]=t=>{t&&t.target!==n||t&&!t.propertyName.endsWith("transform")||(n.removeEventListener("transitionend",i),n[mt]=null,I(n,e))};n.addEventListener("transitionend",i)})),o=[]})),()=>{const c=(0,s.IU)(t),l=E(c);let u=c.tag||r.HY;if(o=[],a)for(let t=0;t<a.length;t++){const e=a[t];e.el&&e.el instanceof Element&&(o.push(e),(0,r.nK)(e,(0,r.U2)(e,l,i,n)),pt.set(e,{left:e.el.offsetLeft,top:e.el.offsetTop}))}a=e.default?(0,r.Q6)(e.default()):[];for(let t=0;t<a.length;t++){const e=a[t];null!=e.key&&(0,r.nK)(e,(0,r.U2)(e,l,i,n))}return(0,r.Wm)(u,null,a)}}}),wt=vt;function bt(t){const e=t.el;e[mt]&&e[mt](),e[yt]&&e[yt]()}function Tt(t){gt.set(t,{left:t.el.offsetLeft,top:t.el.offsetTop})}function Et(t){const e=pt.get(t),n=gt.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const e=t.el.style;return e.transform=e.webkitTransform=`translate(${r}px,${i}px)`,e.transitionDuration="0s",t}}function Ct(t,e,n){const r=t.cloneNode(),i=t[m];i&&i.forEach((t=>{t.split(/\s+/).forEach((t=>t&&r.classList.remove(t)))})),n.split(/\s+/).forEach((t=>t&&r.classList.add(t))),r.style.display="none";const s=1===e.nodeType?e:e.parentNode;s.appendChild(r);const{hasTransform:o}=R(r);return s.removeChild(r),o}const St=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,i.kJ)(e)?t=>(0,i.ir)(e,t):e};function kt(t){t.target.composing=!0}function It(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const xt=Symbol("_assign");function At(t,e,n){return e&&(t=t.trim()),n&&(t=(0,i.h5)(t)),t}const Dt={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[xt]=St(i);const s=r||i.props&&"number"===i.props.type;tt(t,e?"change":"input",(e=>{e.target.composing||t[xt](At(t.value,n,s))})),(n||s)&&tt(t,"change",(()=>{t.value=At(t.value,n,s)})),e||(tt(t,"compositionstart",kt),tt(t,"compositionend",It),tt(t,"change",It))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:o}},a){if(t[xt]=St(a),t.composing)return;const c=!o&&"number"!==t.type||/^0\d/.test(t.value)?t.value:(0,i.h5)(t.value),l=null==e?"":e;if(c!==l){if(document.activeElement===t&&"range"!==t.type){if(r&&e===n)return;if(s&&t.value.trim()===l)return}t.value=l}}};const Rt={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const o=(0,i.DM)(e);tt(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?(0,i.h5)(Ot(t)):Ot(t)));t[xt](t.multiple?o?new Set(e):e:e[0]),t._assigning=!0,(0,r.Y3)((()=>{t._assigning=!1}))})),t[xt]=St(s)},mounted(t,{value:e}){Nt(t,e)},beforeUpdate(t,e,n){t[xt]=St(n)},updated(t,{value:e}){t._assigning||Nt(t,e)}};function Nt(t,e){const n=t.multiple,r=(0,i.kJ)(e);if(!n||r||(0,i.DM)(e)){for(let s=0,o=t.options.length;s<o;s++){const o=t.options[s],a=Ot(o);if(n)if(r){const t=typeof a;o.selected="string"===t||"number"===t?e.some((t=>String(t)===String(a))):(0,i.hq)(e,a)>-1}else o.selected=e.has(a);else if((0,i.WV)(Ot(o),e))return void(t.selectedIndex!==s&&(t.selectedIndex=s))}n||-1===t.selectedIndex||(t.selectedIndex=-1)}}function Ot(t){return"_value"in t?t._value:t.value}const Pt=["ctrl","shift","alt","meta"],Mt={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>Pt.some((n=>t[`${n}Key`]&&!e.includes(n)))},Lt=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(n,...r)=>{for(let t=0;t<e.length;t++){const r=Mt[e[t]];if(r&&r(n,e))return}return t(n,...r)})},Ft={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ut=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=n=>{if(!("key"in n))return;const r=(0,i.rs)(n.key);return e.some((t=>t===r||Ft[t]===r))?t(n):void 0})},Vt=(0,i.l7)({patchProp:dt},f);let jt;function qt(){return jt||(jt=(0,r.Us)(Vt))}const Bt=(...t)=>{const e=qt().createApp(...t);const{mount:n}=e;return e.mount=t=>{const r=zt(t);if(!r)return;const s=e._component;(0,i.mf)(s)||s.render||s.template||(s.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const o=n(r,!1,$t(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function $t(t){return t instanceof SVGElement?"svg":"function"===typeof MathMLElement&&t instanceof MathMLElement?"mathml":void 0}function zt(t){if((0,i.HD)(t)){const e=document.querySelector(t);return e}return t}},7139:function(t,e,n){"use strict";n.d(e,{C_:function(){return Q},DM:function(){return m},E9:function(){return $},F7:function(){return c},Gg:function(){return A},HD:function(){return w},He:function(){return q},Kj:function(){return _},Kn:function(){return T},NO:function(){return a},Nj:function(){return V},Od:function(){return h},PO:function(){return I},Pq:function(){return Z},RI:function(){return f},S0:function(){return x},W7:function(){return k},WV:function(){return nt},Z6:function(){return s},_A:function(){return N},_N:function(){return g},aU:function(){return F},dG:function(){return o},fY:function(){return r},h5:function(){return j},hR:function(){return L},hq:function(){return rt},ir:function(){return U},j5:function(){return W},kC:function(){return M},kJ:function(){return p},kT:function(){return i},l7:function(){return u},mf:function(){return v},rs:function(){return P},tI:function(){return E},tR:function(){return l},vt:function(){return ct},yA:function(){return tt},yk:function(){return b},yl:function(){return H},zw:function(){return st}});n(7658);
/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function r(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return t=>t in e}const i={},s=[],o=()=>{},a=()=>!1,c=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),l=t=>t.startsWith("onUpdate:"),u=Object.assign,h=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(t,e)=>d.call(t,e),p=Array.isArray,g=t=>"[object Map]"===S(t),m=t=>"[object Set]"===S(t),y=t=>"[object Date]"===S(t),_=t=>"[object RegExp]"===S(t),v=t=>"function"===typeof t,w=t=>"string"===typeof t,b=t=>"symbol"===typeof t,T=t=>null!==t&&"object"===typeof t,E=t=>(T(t)||v(t))&&v(t.then)&&v(t.catch),C=Object.prototype.toString,S=t=>C.call(t),k=t=>S(t).slice(8,-1),I=t=>"[object Object]"===S(t),x=t=>w(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,A=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),D=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},R=/-\w/g,N=D((t=>t.replace(R,(t=>t.slice(1).toUpperCase())))),O=/\B([A-Z])/g,P=D((t=>t.replace(O,"-$1").toLowerCase())),M=D((t=>t.charAt(0).toUpperCase()+t.slice(1))),L=D((t=>{const e=t?`on${M(t)}`:"";return e})),F=(t,e)=>!Object.is(t,e),U=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},V=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},j=t=>{const e=parseFloat(t);return isNaN(e)?t:e},q=t=>{const e=w(t)?Number(t):NaN;return isNaN(e)?t:e};let B;const $=()=>B||(B="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const z="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",H=r(z);function W(t){if(p(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=w(r)?X(r):W(r);if(i)for(const t in i)e[t]=i[t]}return e}if(w(t)||T(t))return t}const K=/;(?![^(]*\))/g,G=/:([^]+)/,Y=/\/\*[^]*?\*\//g;function X(t){const e={};return t.replace(Y,"").split(K).forEach((t=>{if(t){const n=t.split(G);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function Q(t){let e="";if(w(t))e=t;else if(p(t))for(let n=0;n<t.length;n++){const r=Q(t[n]);r&&(e+=r+" ")}else if(T(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const J="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(J);function tt(t){return!!t||""===t}function et(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=nt(t[r],e[r]);return n}function nt(t,e){if(t===e)return!0;let n=y(t),r=y(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=b(t),r=b(e),n||r)return t===e;if(n=p(t),r=p(e),n||r)return!(!n||!r)&&et(t,e);if(n=T(t),r=T(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!nt(t[n],e[n]))return!1}}return String(t)===String(e)}function rt(t,e){return t.findIndex((t=>nt(t,e)))}const it=t=>!(!t||!0!==t["__v_isRef"]),st=t=>w(t)?t:null==t?"":p(t)||T(t)&&(t.toString===C||!v(t.toString))?it(t)?st(t.value):JSON.stringify(t,ot,2):String(t),ot=(t,e)=>it(e)?ot(t,e.value):g(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n],r)=>(t[at(e,r)+" =>"]=n,t)),{})}:m(e)?{[`Set(${e.size})`]:[...e.values()].map((t=>at(t)))}:b(e)?at(e):!T(e)||p(e)||I(e)?e:String(e),at=(t,e="")=>{var n;return b(t)?`Symbol(${null!=(n=t.description)?n:e})`:t};function ct(t){return null==t?"initial":"string"===typeof t?""===t?" ":t:("number"===typeof t&&Number.isFinite(t),String(t))}},6125:function(t,e,n){var r,i;!function(s,o){r=o,i="function"===typeof r?r.call(e,n,e,t):r,void 0===i||(t.exports=i)}(0,(function(t,e,n){var r=function(t,e,n,r,i,s){for(var o=0,a=["webkit","moz","ms","o"],c=0;c<a.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[a[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[a[c]+"CancelAnimationFrame"]||window[a[c]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var n=(new Date).getTime(),r=Math.max(0,16-(n-o)),i=window.setTimeout((function(){t(n+r)}),r);return o=n+r,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)});var l=this;for(var u in l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:null,formattingFn:null},s)s.hasOwnProperty(u)&&(l.options[u]=s[u]);""===l.options.separator&&(l.options.useGrouping=!1),l.options.prefix||(l.options.prefix=""),l.options.suffix||(l.options.suffix=""),l.d="string"==typeof t?document.getElementById(t):t,l.startVal=Number(e),l.endVal=Number(n),l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.decimals=Math.max(0,r||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(i)||2e3,l.formatNumber=function(t){var e,n,r,i;if(t=t.toFixed(l.decimals),t+="",e=t.split("."),n=e[0],r=e.length>1?l.options.decimal+e[1]:"",i=/(\d+)(\d{3})/,l.options.useGrouping)for(;i.test(n);)n=n.replace(i,"$1"+l.options.separator+"$2");return l.options.prefix+n+r+l.options.suffix},l.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},l.easingFn=l.options.easingFn?l.options.easingFn:l.easeOutExpo,l.formattingFn=l.options.formattingFn?l.options.formattingFn:l.formatNumber,l.version=function(){return"1.7.1"},l.printValue=function(t){var e=l.formattingFn(t);"INPUT"===l.d.tagName?this.d.value=e:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=e:this.d.innerHTML=e},l.count=function(t){l.startTime||(l.startTime=t),l.timestamp=t;var e=t-l.startTime;l.remaining=l.duration-e,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.easingFn(e,0,l.startVal-l.endVal,l.duration):l.frameVal=l.easingFn(e,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(e/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(e/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),e<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(t){return l.callback=t,l.rAF=requestAnimationFrame(l.count),!1},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.startVal=e,cancelAnimationFrame(l.rAF),l.printValue(l.startVal)},l.update=function(t){cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=Number(t),l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count)},l.printValue(l.startVal)};return r}))},5073:function(t,e,n){"use strict";n.d(e,{i:function(){return wn}});n(7658);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var s,o,a,c,l,u,h,d,f,p,g,m,y,_=function(){return s||"undefined"!==typeof window&&(s=window.gsap)&&s.registerPlugin&&s},v=1,w=[],b=[],T=[],E=Date.now,C=function(t,e){return e},S=function(){var t=f.core,e=t.bridge||{},n=t._scrollers,r=t._proxies;n.push.apply(n,b),r.push.apply(r,T),b=n,T=r,C=function(t,n){return e[t](n)}},k=function(t,e){return~T.indexOf(t)&&T[T.indexOf(t)+1][e]},I=function(t){return!!~p.indexOf(t)},x=function(t,e,n,r,i){return t.addEventListener(e,n,{passive:!1!==r,capture:!!i})},A=function(t,e,n,r){return t.removeEventListener(e,n,!!r)},D="scrollLeft",R="scrollTop",N=function(){return g&&g.isPressed||b.cache++},O=function(t,e){var n=function n(r){if(r||0===r){v&&(a.history.scrollRestoration="manual");var i=g&&g.isPressed;r=n.v=Math.round(r)||(g&&g.iOS?1:0),t(r),n.cacheID=b.cache,i&&C("ss",r)}else(e||b.cache!==n.cacheID||C("ref"))&&(n.cacheID=b.cache,n.v=t());return n.v+n.offset};return n.offset=0,t&&n},P={s:D,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:O((function(t){return arguments.length?a.scrollTo(t,M.sc()):a.pageXOffset||c[D]||l[D]||u[D]||0}))},M={s:R,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:P,sc:O((function(t){return arguments.length?a.scrollTo(P.sc(),t):a.pageYOffset||c[R]||l[R]||u[R]||0}))},L=function(t,e){return(e&&e._ctx&&e._ctx.selector||s.utils.toArray)(t)[0]||("string"===typeof t&&!1!==s.config().nullTargetWarn?console.warn("Element not found:",t):null)},F=function(t,e){var n=e.s,r=e.sc;I(t)&&(t=c.scrollingElement||l);var i=b.indexOf(t),o=r===M.sc?1:2;!~i&&(i=b.push(t)-1),b[i+o]||x(t,"scroll",N);var a=b[i+o],u=a||(b[i+o]=O(k(t,n),!0)||(I(t)?r:O((function(e){return arguments.length?t[n]=e:t[n]}))));return u.target=t,a||(u.smooth="smooth"===s.getProperty(t,"scrollBehavior")),u},U=function(t,e,n){var r=t,i=t,s=E(),o=s,a=e||50,c=Math.max(500,3*a),l=function(t,e){var c=E();e||c-s>a?(i=r,r=t,o=s,s=c):n?r+=t:r=i+(t-i)/(c-o)*(s-o)},u=function(){i=r=n?0:r,o=s=0},h=function(t){var e=o,a=i,u=E();return(t||0===t)&&t!==r&&l(t),s===o||u-o>c?0:(r+(n?a:-a))/((n?u:s)-e)*1e3};return{update:l,reset:u,getVelocity:h}},V=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},j=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},q=function(){f=s.core.globals().ScrollTrigger,f&&f.core&&S()},B=function(t){return s=t||_(),!o&&s&&"undefined"!==typeof document&&document.body&&(a=window,c=document,l=c.documentElement,u=c.body,p=[a,c,l,u],s.utils.clamp,y=s.core.context||function(){},d="onpointerenter"in u?"pointer":"mouse",h=$.isTouch=a.matchMedia&&a.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in a||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,m=$.eventTypes=("ontouchstart"in l?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in l?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout((function(){return v=0}),500),q(),o=1),o};P.op=M,b.cache=0;var $=function(){function t(t){this.init(t)}var e=t.prototype;return e.init=function(t){o||B(s)||console.warn("Please gsap.registerPlugin(Observer)"),f||q();var e=t.tolerance,n=t.dragMinimum,r=t.type,i=t.target,p=t.lineHeight,_=t.debounce,v=t.preventDefault,b=t.onStop,T=t.onStopDelay,C=t.ignore,S=t.wheelSpeed,k=t.event,D=t.onDragStart,R=t.onDragEnd,O=t.onDrag,$=t.onPress,z=t.onRelease,H=t.onRight,W=t.onLeft,K=t.onUp,G=t.onDown,Y=t.onChangeX,X=t.onChangeY,Q=t.onChange,J=t.onToggleX,Z=t.onToggleY,tt=t.onHover,et=t.onHoverEnd,nt=t.onMove,rt=t.ignoreCheck,it=t.isNormalizer,st=t.onGestureStart,ot=t.onGestureEnd,at=t.onWheel,ct=t.onEnable,lt=t.onDisable,ut=t.onClick,ht=t.scrollSpeed,dt=t.capture,ft=t.allowClicks,pt=t.lockAxis,gt=t.onLockAxis;this.target=i=L(i)||l,this.vars=t,C&&(C=s.utils.toArray(C)),e=e||1e-9,n=n||0,S=S||1,ht=ht||1,r=r||"wheel,touch,pointer",_=!1!==_,p||(p=parseFloat(a.getComputedStyle(u).lineHeight)||22);var mt,yt,_t,vt,wt,bt,Tt,Et=this,Ct=0,St=0,kt=t.passive||!v,It=F(i,P),xt=F(i,M),At=It(),Dt=xt(),Rt=~r.indexOf("touch")&&!~r.indexOf("pointer")&&"pointerdown"===m[0],Nt=I(i),Ot=i.ownerDocument||c,Pt=[0,0,0],Mt=[0,0,0],Lt=0,Ft=function(){return Lt=E()},Ut=function(t,e){return(Et.event=t)&&C&&~C.indexOf(t.target)||e&&Rt&&"touch"!==t.pointerType||rt&&rt(t,e)},Vt=function(){Et._vx.reset(),Et._vy.reset(),yt.pause(),b&&b(Et)},jt=function(){var t=Et.deltaX=j(Pt),n=Et.deltaY=j(Mt),r=Math.abs(t)>=e,i=Math.abs(n)>=e;Q&&(r||i)&&Q(Et,t,n,Pt,Mt),r&&(H&&Et.deltaX>0&&H(Et),W&&Et.deltaX<0&&W(Et),Y&&Y(Et),J&&Et.deltaX<0!==Ct<0&&J(Et),Ct=Et.deltaX,Pt[0]=Pt[1]=Pt[2]=0),i&&(G&&Et.deltaY>0&&G(Et),K&&Et.deltaY<0&&K(Et),X&&X(Et),Z&&Et.deltaY<0!==St<0&&Z(Et),St=Et.deltaY,Mt[0]=Mt[1]=Mt[2]=0),(vt||_t)&&(nt&&nt(Et),_t&&(O(Et),_t=!1),vt=!1),bt&&!(bt=!1)&&gt&&gt(Et),wt&&(at(Et),wt=!1),mt=0},qt=function(t,e,n){Pt[n]+=t,Mt[n]+=e,Et._vx.update(t),Et._vy.update(e),_?mt||(mt=requestAnimationFrame(jt)):jt()},Bt=function(t,e){pt&&!Tt&&(Et.axis=Tt=Math.abs(t)>Math.abs(e)?"x":"y",bt=!0),"y"!==Tt&&(Pt[2]+=t,Et._vx.update(t,!0)),"x"!==Tt&&(Mt[2]+=e,Et._vy.update(e,!0)),_?mt||(mt=requestAnimationFrame(jt)):jt()},$t=function(t){if(!Ut(t,1)){t=V(t,v);var e=t.clientX,r=t.clientY,i=e-Et.x,s=r-Et.y,o=Et.isDragging;Et.x=e,Et.y=r,(o||Math.abs(Et.startX-e)>=n||Math.abs(Et.startY-r)>=n)&&(O&&(_t=!0),o||(Et.isDragging=!0),Bt(i,s),o||D&&D(Et))}},zt=Et.onPress=function(t){Ut(t,1)||t&&t.button||(Et.axis=Tt=null,yt.pause(),Et.isPressed=!0,t=V(t),Ct=St=0,Et.startX=Et.x=t.clientX,Et.startY=Et.y=t.clientY,Et._vx.reset(),Et._vy.reset(),x(it?i:Ot,m[1],$t,kt,!0),Et.deltaX=Et.deltaY=0,$&&$(Et))},Ht=Et.onRelease=function(t){if(!Ut(t,1)){A(it?i:Ot,m[1],$t,!0);var e=!isNaN(Et.y-Et.startY),n=Et.isDragging,r=n&&(Math.abs(Et.x-Et.startX)>3||Math.abs(Et.y-Et.startY)>3),o=V(t);!r&&e&&(Et._vx.reset(),Et._vy.reset(),v&&ft&&s.delayedCall(.08,(function(){if(E()-Lt>300&&!t.defaultPrevented)if(t.target.click)t.target.click();else if(Ot.createEvent){var e=Ot.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,a,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),t.target.dispatchEvent(e)}}))),Et.isDragging=Et.isGesturing=Et.isPressed=!1,b&&n&&!it&&yt.restart(!0),R&&n&&R(Et),z&&z(Et,r)}},Wt=function(t){return t.touches&&t.touches.length>1&&(Et.isGesturing=!0)&&st(t,Et.isDragging)},Kt=function(){return(Et.isGesturing=!1)||ot(Et)},Gt=function(t){if(!Ut(t)){var e=It(),n=xt();qt((e-At)*ht,(n-Dt)*ht,1),At=e,Dt=n,b&&yt.restart(!0)}},Yt=function(t){if(!Ut(t)){t=V(t,v),at&&(wt=!0);var e=(1===t.deltaMode?p:2===t.deltaMode?a.innerHeight:1)*S;qt(t.deltaX*e,t.deltaY*e,0),b&&!it&&yt.restart(!0)}},Xt=function(t){if(!Ut(t)){var e=t.clientX,n=t.clientY,r=e-Et.x,i=n-Et.y;Et.x=e,Et.y=n,vt=!0,b&&yt.restart(!0),(r||i)&&Bt(r,i)}},Qt=function(t){Et.event=t,tt(Et)},Jt=function(t){Et.event=t,et(Et)},Zt=function(t){return Ut(t)||V(t,v)&&ut(Et)};yt=Et._dc=s.delayedCall(T||.25,Vt).pause(),Et.deltaX=Et.deltaY=0,Et._vx=U(0,50,!0),Et._vy=U(0,50,!0),Et.scrollX=It,Et.scrollY=xt,Et.isDragging=Et.isGesturing=Et.isPressed=!1,y(this),Et.enable=function(t){return Et.isEnabled||(x(Nt?Ot:i,"scroll",N),r.indexOf("scroll")>=0&&x(Nt?Ot:i,"scroll",Gt,kt,dt),r.indexOf("wheel")>=0&&x(i,"wheel",Yt,kt,dt),(r.indexOf("touch")>=0&&h||r.indexOf("pointer")>=0)&&(x(i,m[0],zt,kt,dt),x(Ot,m[2],Ht),x(Ot,m[3],Ht),ft&&x(i,"click",Ft,!0,!0),ut&&x(i,"click",Zt),st&&x(Ot,"gesturestart",Wt),ot&&x(Ot,"gestureend",Kt),tt&&x(i,d+"enter",Qt),et&&x(i,d+"leave",Jt),nt&&x(i,d+"move",Xt)),Et.isEnabled=!0,t&&t.type&&zt(t),ct&&ct(Et)),Et},Et.disable=function(){Et.isEnabled&&(w.filter((function(t){return t!==Et&&I(t.target)})).length||A(Nt?Ot:i,"scroll",N),Et.isPressed&&(Et._vx.reset(),Et._vy.reset(),A(it?i:Ot,m[1],$t,!0)),A(Nt?Ot:i,"scroll",Gt,dt),A(i,"wheel",Yt,dt),A(i,m[0],zt,dt),A(Ot,m[2],Ht),A(Ot,m[3],Ht),A(i,"click",Ft,!0),A(i,"click",Zt),A(Ot,"gesturestart",Wt),A(Ot,"gestureend",Kt),A(i,d+"enter",Qt),A(i,d+"leave",Jt),A(i,d+"move",Xt),Et.isEnabled=Et.isPressed=Et.isDragging=!1,lt&&lt(Et))},Et.kill=Et.revert=function(){Et.disable();var t=w.indexOf(Et);t>=0&&w.splice(t,1),g===Et&&(g=0)},w.push(Et),it&&I(i)&&(g=Et),Et.enable(k)},i(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t}();$.version="3.12.5",$.create=function(t){return new $(t)},$.register=B,$.getAll=function(){return w.slice()},$.getById=function(t){return w.filter((function(e){return e.vars.id===t}))[0]},_()&&s.registerPlugin($);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var z,H,W,K,G,Y,X,Q,J,Z,tt,et,nt,rt,it,st,ot,at,ct,lt,ut,ht,dt,ft,pt,gt,mt,yt,_t,vt,wt,bt,Tt,Et,Ct,St,kt,It,xt=1,At=Date.now,Dt=At(),Rt=0,Nt=0,Ot=function(t,e,n){var r=Yt(t)&&("clamp("===t.substr(0,6)||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=r,r?t.substr(6,t.length-7):t},Pt=function(t,e){return!e||Yt(t)&&"clamp("===t.substr(0,6)?t:"clamp("+t+")"},Mt=function t(){return Nt&&requestAnimationFrame(t)},Lt=function(){return rt=1},Ft=function(){return rt=0},Ut=function(t){return t},Vt=function(t){return Math.round(1e5*t)/1e5||0},jt=function(){return"undefined"!==typeof window},qt=function(){return z||jt()&&(z=window.gsap)&&z.registerPlugin&&z},Bt=function(t){return!!~X.indexOf(t)},$t=function(t){return("Height"===t?wt:W["inner"+t])||G["client"+t]||Y["client"+t]},zt=function(t){return k(t,"getBoundingClientRect")||(Bt(t)?function(){return fn.width=W.innerWidth,fn.height=wt,fn}:function(){return we(t)})},Ht=function(t,e,n){var r=n.d,i=n.d2,s=n.a;return(s=k(t,"getBoundingClientRect"))?function(){return s()[r]}:function(){return(e?$t(i):t["client"+i])||0}},Wt=function(t,e){return!e||~T.indexOf(t)?zt(t):function(){return fn}},Kt=function(t,e){var n=e.s,r=e.d2,i=e.d,s=e.a;return Math.max(0,(n="scroll"+r)&&(s=k(t,n))?s()-zt(t)()[i]:Bt(t)?(G[n]||Y[n])-$t(r):t[n]-t["offset"+r])},Gt=function(t,e){for(var n=0;n<ct.length;n+=3)(!e||~e.indexOf(ct[n+1]))&&t(ct[n],ct[n+1],ct[n+2])},Yt=function(t){return"string"===typeof t},Xt=function(t){return"function"===typeof t},Qt=function(t){return"number"===typeof t},Jt=function(t){return"object"===typeof t},Zt=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},te=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add((function(){return e(t)})):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},ee=Math.abs,ne="left",re="top",ie="right",se="bottom",oe="width",ae="height",ce="Right",le="Left",ue="Top",he="Bottom",de="padding",fe="margin",pe="Width",ge="Height",me="px",ye=function(t){return W.getComputedStyle(t)},_e=function(t){var e=ye(t).position;t.style.position="absolute"===e||"fixed"===e?e:"relative"},ve=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},we=function(t,e){var n=e&&"matrix(1, 0, 0, 1, 0, 0)"!==ye(t)[it]&&z.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=t.getBoundingClientRect();return n&&n.progress(0).kill(),r},be=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Te=function(t){var e,n=[],r=t.labels,i=t.duration();for(e in r)n.push(r[e]/i);return n},Ee=function(t){return function(e){return z.utils.snap(Te(t),e)}},Ce=function(t){var e=z.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort((function(t,e){return t-e}));return n?function(t,r,i){var s;if(void 0===i&&(i=.001),!r)return e(t);if(r>0){for(t-=i,s=0;s<n.length;s++)if(n[s]>=t)return n[s];return n[s-1]}s=n.length,t+=i;while(s--)if(n[s]<=t)return n[s];return n[0]}:function(n,r,i){void 0===i&&(i=.001);var s=e(n);return!r||Math.abs(s-n)<i||s-n<0===r<0?s:e(r<0?n-t:n+t)}},Se=function(t){return function(e,n){return Ce(Te(t))(e,n.direction)}},ke=function(t,e,n,r){return n.split(",").forEach((function(n){return t(e,n,r)}))},Ie=function(t,e,n,r,i){return t.addEventListener(e,n,{passive:!r,capture:!!i})},xe=function(t,e,n,r){return t.removeEventListener(e,n,!!r)},Ae=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},De={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Re={toggleActions:"play",anticipatePin:0},Ne={top:0,left:0,center:.5,bottom:1,right:1},Oe=function(t,e){if(Yt(t)){var n=t.indexOf("="),r=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(r*=e/100),t=t.substr(0,n-1)),t=r+(t in Ne?Ne[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Pe=function(t,e,n,r,i,s,o,a){var c=i.startColor,l=i.endColor,u=i.fontSize,h=i.indent,d=i.fontWeight,f=K.createElement("div"),p=Bt(n)||"fixed"===k(n,"pinType"),g=-1!==t.indexOf("scroller"),m=p?Y:n,y=-1!==t.indexOf("start"),_=y?c:l,v="border-color:"+_+";font-size:"+u+";color:"+_+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((g||a)&&p?"fixed;":"absolute;"),(g||a||!p)&&(v+=(r===M?ie:se)+":"+(s+parseFloat(h))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),f._isStart=y,f.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),f.style.cssText=v,f.innerText=e||0===e?t+"-"+e:t,m.children[0]?m.insertBefore(f,m.children[0]):m.appendChild(f),f._offset=f["offset"+r.op.d2],Me(f,0,r,y),f},Me=function(t,e,n,r){var i={display:"block"},s=n[r?"os2":"p2"],o=n[r?"p2":"os2"];t._isFlipped=r,i[n.a+"Percent"]=r?-100:0,i[n.a]=r?"1px":0,i["border"+s+pe]=1,i["border"+o+pe]=0,i[n.p]=e+"px",z.set(t,i)},Le=[],Fe={},Ue=function(){return At()-Rt>34&&(Ct||(Ct=requestAnimationFrame(rn)))},Ve=function(){(!dt||!dt.isPressed||dt.startX>Y.clientWidth)&&(b.cache++,dt?Ct||(Ct=requestAnimationFrame(rn)):rn(),Rt||He("scrollStart"),Rt=At())},je=function(){gt=W.innerWidth,pt=W.innerHeight},qe=function(){b.cache++,!nt&&!ht&&!K.fullscreenElement&&!K.webkitFullscreenElement&&(!ft||gt!==W.innerWidth||Math.abs(W.innerHeight-pt)>.25*W.innerHeight)&&Q.restart(!0)},Be={},$e=[],ze=function t(){return xe(wn,"scrollEnd",t)||tn(!0)},He=function(t){return Be[t]&&Be[t].map((function(t){return t()}))||$e},We=[],Ke=function(t){for(var e=0;e<We.length;e+=5)(!t||We[e+4]&&We[e+4].query===t)&&(We[e].style.cssText=We[e+1],We[e].getBBox&&We[e].setAttribute("transform",We[e+2]||""),We[e+3].uncache=1)},Ge=function(t,e){var n;for(st=0;st<Le.length;st++)n=Le[st],!n||e&&n._ctx!==e||(t?n.kill(1):n.revert(!0,!0));bt=!0,e&&Ke(e),e||He("revert")},Ye=function(t,e){b.cache++,(e||!St)&&b.forEach((function(t){return Xt(t)&&t.cacheID++&&(t.rec=0)})),Yt(t)&&(W.history.scrollRestoration=_t=t)},Xe=0,Qe=function(){if(kt!==Xe){var t=kt=Xe;requestAnimationFrame((function(){return t===Xe&&tn(!0)}))}},Je=function(){Y.appendChild(vt),wt=!dt&&vt.offsetHeight||W.innerHeight,Y.removeChild(vt)},Ze=function(t){return J(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach((function(e){return e.style.display=t?"none":"block"}))},tn=function(t,e){if(!Rt||t||bt){Je(),St=wn.isRefreshing=!0,b.forEach((function(t){return Xt(t)&&++t.cacheID&&(t.rec=t())}));var n=He("refreshInit");lt&&wn.sort(),e||Ge(),b.forEach((function(t){Xt(t)&&(t.smooth&&(t.target.style.scrollBehavior="auto"),t(0))})),Le.slice(0).forEach((function(t){return t.refresh()})),bt=!1,Le.forEach((function(t){if(t._subPinOffset&&t.pin){var e=t.vars.horizontal?"offsetWidth":"offsetHeight",n=t.pin[e];t.revert(!0,1),t.adjustPinSpacing(t.pin[e]-n),t.refresh()}})),Tt=1,Ze(!0),Le.forEach((function(t){var e=Kt(t.scroller,t._dir),n="max"===t.vars.end||t._endClamp&&t.end>e,r=t._startClamp&&t.start>=e;(n||r)&&t.setPositions(r?e-1:t.start,n?Math.max(r?e:t.start+1,e):t.end,!0)})),Ze(!1),Tt=0,n.forEach((function(t){return t&&t.render&&t.render(-1)})),b.forEach((function(t){Xt(t)&&(t.smooth&&requestAnimationFrame((function(){return t.target.style.scrollBehavior="smooth"})),t.rec&&t(t.rec))})),Ye(_t,1),Q.pause(),Xe++,St=2,rn(2),Le.forEach((function(t){return Xt(t.vars.onRefresh)&&t.vars.onRefresh(t)})),St=wn.isRefreshing=!1,He("refresh")}else Ie(wn,"scrollEnd",ze)},en=0,nn=1,rn=function(t){if(2===t||!St&&!bt){wn.isUpdating=!0,It&&It.update(0);var e=Le.length,n=At(),r=n-Dt>=50,i=e&&Le[0].scroll();if(nn=en>i?-1:1,St||(en=i),r&&(Rt&&!rt&&n-Rt>200&&(Rt=0,He("scrollEnd")),tt=Dt,Dt=n),nn<0){st=e;while(st-- >0)Le[st]&&Le[st].update(0,r);nn=1}else for(st=0;st<e;st++)Le[st]&&Le[st].update(0,r);wn.isUpdating=!1}Ct=0},sn=[ne,re,se,ie,fe+he,fe+ce,fe+ue,fe+le,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],on=sn.concat([oe,ae,"boxSizing","max"+pe,"max"+ge,"position",fe,de,de+ue,de+ce,de+he,de+le]),an=function(t,e,n){un(n);var r=t._gsap;if(r.spacerIsNative)un(r.spacerState);else if(t._gsap.swappedIn){var i=e.parentNode;i&&(i.insertBefore(t,e),i.removeChild(e))}t._gsap.swappedIn=!1},cn=function(t,e,n,r){if(!t._gsap.swappedIn){var i,s=sn.length,o=e.style,a=t.style;while(s--)i=sn[s],o[i]=n[i];o.position="absolute"===n.position?"absolute":"relative","inline"===n.display&&(o.display="inline-block"),a[se]=a[ie]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[oe]=be(t,P)+me,o[ae]=be(t,M)+me,o[de]=a[fe]=a[re]=a[ne]="0",un(r),a[oe]=a["max"+pe]=n[oe],a[ae]=a["max"+ge]=n[ae],a[de]=n[de],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},ln=/([A-Z])/g,un=function(t){if(t){var e,n,r=t.t.style,i=t.length,s=0;for((t.t._gsap||z.core.getCache(t.t)).uncache=1;s<i;s+=2)n=t[s+1],e=t[s],n?r[e]=n:r[e]&&r.removeProperty(e.replace(ln,"-$1").toLowerCase())}},hn=function(t){for(var e=on.length,n=t.style,r=[],i=0;i<e;i++)r.push(on[i],n[on[i]]);return r.t=t,r},dn=function(t,e,n){for(var r,i=[],s=t.length,o=n?8:0;o<s;o+=2)r=t[o],i.push(r,r in e?e[r]:t[o+1]);return i.t=t.t,i},fn={left:0,top:0},pn=function(t,e,n,r,i,s,o,a,c,l,u,h,d,f){Xt(t)&&(t=t(a)),Yt(t)&&"max"===t.substr(0,3)&&(t=h+("="===t.charAt(4)?Oe("0"+t.substr(3),n):0));var p,g,m,y=d?d.time():0;if(d&&d.seek(0),isNaN(t)||(t=+t),Qt(t))d&&(t=z.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,t)),o&&Me(o,n,r,!0);else{Xt(e)&&(e=e(a));var _,v,w,b,T=(t||"0").split(" ");m=L(e,a)||Y,_=we(m)||{},_&&(_.left||_.top)||"none"!==ye(m).display||(b=m.style.display,m.style.display="block",_=we(m),b?m.style.display=b:m.style.removeProperty("display")),v=Oe(T[0],_[r.d]),w=Oe(T[1]||"0",n),t=_[r.p]-c[r.p]-l+v+i-w,o&&Me(o,w,r,n-w<20||o._isStart&&w>20),n-=n-w}if(f&&(a[f]=t||-.001,t<0&&(t=0)),s){var E=t+n,C=s._isStart;p="scroll"+r.d2,Me(s,E,r,C&&E>20||!C&&(u?Math.max(Y[p],G[p]):s.parentNode[p])<=E+1),u&&(c=we(o),u&&(s.style[r.op.p]=c[r.op.p]-r.op.m-s._offset+me))}return d&&m&&(p=we(m),d.seek(h),g=we(m),d._caScrollDist=p[r.p]-g[r.p],t=t/d._caScrollDist*h),d&&d.seek(y),d?t:Math.round(t)},gn=/(webkit|moz|length|cssText|inset)/i,mn=function(t,e,n,r){if(t.parentNode!==e){var i,s,o=t.style;if(e===Y){for(i in t._stOrig=o.cssText,s=ye(t),s)+i||gn.test(i)||!s[i]||"string"!==typeof o[i]||"0"===i||(o[i]=s[i]);o.top=n,o.left=r}else o.cssText=t._stOrig;z.core.getCache(t).uncache=1,e.appendChild(t)}},yn=function(t,e,n){var r=e,i=r;return function(e){var s=Math.round(t());return s!==r&&s!==i&&Math.abs(s-r)>3&&Math.abs(s-i)>3&&(e=s,n&&n()),i=r,r=e,e}},_n=function(t,e,n){var r={};r[e.p]="+="+n,z.set(t,r)},vn=function(t,e){var n=F(t,e),r="_scroll"+e.p2,i=function e(i,s,o,a,c){var l=e.tween,u=s.onComplete,h={};o=o||n();var d=yn(n,o,(function(){l.kill(),e.tween=0}));return c=a&&c||0,a=a||i-o,l&&l.kill(),s[r]=i,s.inherit=!1,s.modifiers=h,h[r]=function(){return d(o+a*l.ratio+c*l.ratio*l.ratio)},s.onUpdate=function(){b.cache++,e.tween&&rn()},s.onComplete=function(){e.tween=0,u&&u.call(l)},l=e.tween=z.to(t,s),l};return t[r]=n,n.wheelHandler=function(){return i.tween&&i.tween.kill()&&(i.tween=0)},Ie(t,"wheel",n.wheelHandler),wn.isTouch&&Ie(t,"touchmove",n.wheelHandler),i},wn=function(){function t(e,n){H||t.register(z)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),yt(this),this.init(e,n)}var e=t.prototype;return e.init=function(e,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),Nt){e=ve(Yt(e)||Qt(e)||e.nodeType?{trigger:e}:e,Re);var r,i,s,o,a,c,l,u,h,d,f,p,g,m,y,_,v,w,E,C,S,I,x,A,D,R,N,O,U,V,j,q,B,$,H,X,Q,et,it,ot=e,at=ot.onUpdate,ct=ot.toggleClass,ht=ot.id,dt=ot.onToggle,ft=ot.onRefresh,pt=ot.scrub,gt=ot.trigger,mt=ot.pin,yt=ot.pinSpacing,_t=ot.invalidateOnRefresh,vt=ot.anticipatePin,wt=ot.onScrubComplete,bt=ot.onSnapComplete,Ct=ot.once,kt=ot.snap,Dt=ot.pinReparent,Mt=ot.pinSpacer,Lt=ot.containerAnimation,Ft=ot.fastScrollEnd,jt=ot.preventOverlaps,qt=e.horizontal||e.containerAnimation&&!1!==e.horizontal?P:M,$t=!pt&&0!==pt,zt=L(e.scroller||W),Gt=z.core.getCache(zt),ne=Bt(zt),re="fixed"===("pinType"in e?e.pinType:k(zt,"pinType")||ne&&"fixed"),ie=[e.onEnter,e.onLeave,e.onEnterBack,e.onLeaveBack],se=$t&&e.toggleActions.split(" "),Te="markers"in e?e.markers:Re.markers,ke=ne?0:parseFloat(ye(zt)["border"+qt.p2+pe])||0,Ae=this,Ne=e.onRefreshInit&&function(){return e.onRefreshInit(Ae)},Me=Ht(zt,ne,qt),Ue=Wt(zt,ne),je=0,Be=0,$e=0,He=F(zt,qt);if(Ae._startClamp=Ae._endClamp=!1,Ae._dir=qt,vt*=45,Ae.scroller=zt,Ae.scroll=Lt?Lt.time.bind(Lt):He,o=He(),Ae.vars=e,n=n||e.animation,"refreshPriority"in e&&(lt=1,-9999===e.refreshPriority&&(It=Ae)),Gt.tweenScroll=Gt.tweenScroll||{top:vn(zt,M),left:vn(zt,P)},Ae.tweenTo=r=Gt.tweenScroll[qt.p],Ae.scrubDuration=function(t){B=Qt(t)&&t,B?q?q.duration(t):q=z.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:B,paused:!0,onComplete:function(){return wt&&wt(Ae)}}):(q&&q.progress(1).kill(),q=0)},n&&(n.vars.lazy=!1,n._initted&&!Ae.isReverted||!1!==n.vars.immediateRender&&!1!==e.immediateRender&&n.duration()&&n.render(0,!0,!0),Ae.animation=n.pause(),n.scrollTrigger=Ae,Ae.scrubDuration(pt),V=0,ht||(ht=n.vars.id)),kt&&(Jt(kt)&&!kt.push||(kt={snapTo:kt}),"scrollBehavior"in Y.style&&z.set(ne?[Y,G]:zt,{scrollBehavior:"auto"}),b.forEach((function(t){return Xt(t)&&t.target===(ne?K.scrollingElement||G:zt)&&(t.smooth=!1)})),s=Xt(kt.snapTo)?kt.snapTo:"labels"===kt.snapTo?Ee(n):"labelsDirectional"===kt.snapTo?Se(n):!1!==kt.directional?function(t,e){return Ce(kt.snapTo)(t,At()-Be<500?0:e.direction)}:z.utils.snap(kt.snapTo),$=kt.duration||{min:.1,max:2},$=Jt($)?Z($.min,$.max):Z($,$),H=z.delayedCall(kt.delay||B/2||.1,(function(){var t=He(),e=At()-Be<500,i=r.tween;if(!(e||Math.abs(Ae.getVelocity())<10)||i||rt||je===t)Ae.isActive&&je!==t&&H.restart(!0);else{var o,a,u=(t-c)/m,h=n&&!$t?n.totalProgress():u,d=e?0:(h-j)/(At()-tt)*1e3||0,f=z.utils.clamp(-u,1-u,ee(d/2)*d/.185),p=u+(!1===kt.inertia?0:f),g=kt,y=g.onStart,_=g.onInterrupt,v=g.onComplete;if(o=s(p,Ae),Qt(o)||(o=p),a=Math.round(c+o*m),t<=l&&t>=c&&a!==t){if(i&&!i._initted&&i.data<=ee(a-t))return;!1===kt.inertia&&(f=o-u),r(a,{duration:$(ee(.185*Math.max(ee(p-h),ee(o-h))/d/.05||0)),ease:kt.ease||"power3",data:ee(a-t),onInterrupt:function(){return H.restart(!0)&&_&&_(Ae)},onComplete:function(){Ae.update(),je=He(),n&&(q?q.resetTo("totalProgress",o,n._tTime/n._tDur):n.progress(o)),V=j=n&&!$t?n.totalProgress():Ae.progress,bt&&bt(Ae),v&&v(Ae)}},t,f*m,a-t-f*m),y&&y(Ae,r.tween)}}})).pause()),ht&&(Fe[ht]=Ae),gt=Ae.trigger=L(gt||!0!==mt&&mt),it=gt&&gt._gsap&&gt._gsap.stRevert,it&&(it=it(Ae)),mt=!0===mt?gt:L(mt),Yt(ct)&&(ct={targets:gt,className:ct}),mt&&(!1===yt||yt===fe||(yt=!(!yt&&mt.parentNode&&mt.parentNode.style&&"flex"===ye(mt.parentNode).display)&&de),Ae.pin=mt,i=z.core.getCache(mt),i.spacer?y=i.pinState:(Mt&&(Mt=L(Mt),Mt&&!Mt.nodeType&&(Mt=Mt.current||Mt.nativeElement),i.spacerIsNative=!!Mt,Mt&&(i.spacerState=hn(Mt))),i.spacer=w=Mt||K.createElement("div"),w.classList.add("pin-spacer"),ht&&w.classList.add("pin-spacer-"+ht),i.pinState=y=hn(mt)),!1!==e.force3D&&z.set(mt,{force3D:!0}),Ae.spacer=w=i.spacer,U=ye(mt),A=U[yt+qt.os2],C=z.getProperty(mt),S=z.quickSetter(mt,qt.a,me),cn(mt,w,U),v=hn(mt)),Te){p=Jt(Te)?ve(Te,De):De,d=Pe("scroller-start",ht,zt,qt,p,0),f=Pe("scroller-end",ht,zt,qt,p,0,d),E=d["offset"+qt.op.d2];var We=L(k(zt,"content")||zt);u=this.markerStart=Pe("start",ht,We,qt,p,E,0,Lt),h=this.markerEnd=Pe("end",ht,We,qt,p,E,0,Lt),Lt&&(et=z.quickSetter([u,h],qt.a,me)),re||T.length&&!0===k(zt,"fixedMarkers")||(_e(ne?Y:zt),z.set([d,f],{force3D:!0}),R=z.quickSetter(d,qt.a,me),O=z.quickSetter(f,qt.a,me))}if(Lt){var Ke=Lt.vars.onUpdate,Ge=Lt.vars.onUpdateParams;Lt.eventCallback("onUpdate",(function(){Ae.update(0,0,1),Ke&&Ke.apply(Lt,Ge||[])}))}if(Ae.previous=function(){return Le[Le.indexOf(Ae)-1]},Ae.next=function(){return Le[Le.indexOf(Ae)+1]},Ae.revert=function(t,e){if(!e)return Ae.kill(!0);var r=!1!==t||!Ae.enabled,i=nt;r!==Ae.isReverted&&(r&&(X=Math.max(He(),Ae.scroll.rec||0),$e=Ae.progress,Q=n&&n.progress()),u&&[u,h,d,f].forEach((function(t){return t.style.display=r?"none":"block"})),r&&(nt=Ae,Ae.update(r)),!mt||Dt&&Ae.isActive||(r?an(mt,w,y):cn(mt,w,ye(mt),D)),r||Ae.update(r),nt=i,Ae.isReverted=r)},Ae.refresh=function(i,s,p,b){if(!nt&&Ae.enabled||s)if(mt&&i&&Rt)Ie(t,"scrollEnd",ze);else{!St&&Ne&&Ne(Ae),nt=Ae,r.tween&&!p&&(r.tween.kill(),r.tween=0),q&&q.pause(),_t&&n&&n.revert({kill:!1}).invalidate(),Ae.isReverted||Ae.revert(!0,!0),Ae._subPinOffset=!1;var T,E,S,k,A,R,O,U,V,j,B,$,W,J=Me(),Z=Ue(),tt=Lt?Lt.duration():Kt(zt,qt),et=m<=.01,rt=0,it=b||0,st=Jt(p)?p.end:e.end,ot=e.endTrigger||gt,at=Jt(p)?p.start:e.start||(0!==e.start&&gt?mt?"0 0":"0 100%":0),ct=Ae.pinnedContainer=e.pinnedContainer&&L(e.pinnedContainer,Ae),lt=gt&&Math.max(0,Le.indexOf(Ae))||0,ht=lt;Te&&Jt(p)&&($=z.getProperty(d,qt.p),W=z.getProperty(f,qt.p));while(ht--)R=Le[ht],R.end||R.refresh(0,1)||(nt=Ae),O=R.pin,!O||O!==gt&&O!==mt&&O!==ct||R.isReverted||(j||(j=[]),j.unshift(R),R.revert(!0,!0)),R!==Le[ht]&&(lt--,ht--);Xt(at)&&(at=at(Ae)),at=Ot(at,"start",Ae),c=pn(at,gt,J,qt,He(),u,d,Ae,Z,ke,re,tt,Lt,Ae._startClamp&&"_startClamp")||(mt?-.001:0),Xt(st)&&(st=st(Ae)),Yt(st)&&!st.indexOf("+=")&&(~st.indexOf(" ")?st=(Yt(at)?at.split(" ")[0]:"")+st:(rt=Oe(st.substr(2),J),st=Yt(at)?at:(Lt?z.utils.mapRange(0,Lt.duration(),Lt.scrollTrigger.start,Lt.scrollTrigger.end,c):c)+rt,ot=gt)),st=Ot(st,"end",Ae),l=Math.max(c,pn(st||(ot?"100% 0":tt),ot,J,qt,He()+rt,h,f,Ae,Z,ke,re,tt,Lt,Ae._endClamp&&"_endClamp"))||-.001,rt=0,ht=lt;while(ht--)R=Le[ht],O=R.pin,O&&R.start-R._pinPush<=c&&!Lt&&R.end>0&&(T=R.end-(Ae._startClamp?Math.max(0,R.start):R.start),(O===gt&&R.start-R._pinPush<c||O===ct)&&isNaN(at)&&(rt+=T*(1-R.progress)),O===mt&&(it+=T));if(c+=rt,l+=rt,Ae._startClamp&&(Ae._startClamp+=rt),Ae._endClamp&&!St&&(Ae._endClamp=l||-.001,l=Math.min(l,Kt(zt,qt))),m=l-c||(c-=.01)&&.001,et&&($e=z.utils.clamp(0,1,z.utils.normalize(c,l,X))),Ae._pinPush=it,u&&rt&&(T={},T[qt.a]="+="+rt,ct&&(T[qt.p]="-="+He()),z.set([u,h],T)),!mt||Tt&&Ae.end>=Kt(zt,qt)){if(gt&&He()&&!Lt){E=gt.parentNode;while(E&&E!==Y)E._pinOffset&&(c-=E._pinOffset,l-=E._pinOffset),E=E.parentNode}}else T=ye(mt),k=qt===M,S=He(),I=parseFloat(C(qt.a))+it,!tt&&l>1&&(B=(ne?K.scrollingElement||G:zt).style,B={style:B,value:B["overflow"+qt.a.toUpperCase()]},ne&&"scroll"!==ye(Y)["overflow"+qt.a.toUpperCase()]&&(B.style["overflow"+qt.a.toUpperCase()]="scroll")),cn(mt,w,T),v=hn(mt),E=we(mt,!0),U=re&&F(zt,k?P:M)(),yt?(D=[yt+qt.os2,m+it+me],D.t=w,ht=yt===de?be(mt,qt)+m+it:0,ht&&(D.push(qt.d,ht+me),"auto"!==w.style.flexBasis&&(w.style.flexBasis=ht+me)),un(D),ct&&Le.forEach((function(t){t.pin===ct&&!1!==t.vars.pinSpacing&&(t._subPinOffset=!0)})),re&&He(X)):(ht=be(mt,qt),ht&&"auto"!==w.style.flexBasis&&(w.style.flexBasis=ht+me)),re&&(A={top:E.top+(k?S-c:U)+me,left:E.left+(k?U:S-c)+me,boxSizing:"border-box",position:"fixed"},A[oe]=A["max"+pe]=Math.ceil(E.width)+me,A[ae]=A["max"+ge]=Math.ceil(E.height)+me,A[fe]=A[fe+ue]=A[fe+ce]=A[fe+he]=A[fe+le]="0",A[de]=T[de],A[de+ue]=T[de+ue],A[de+ce]=T[de+ce],A[de+he]=T[de+he],A[de+le]=T[de+le],_=dn(y,A,Dt),St&&He(0)),n?(V=n._initted,ut(1),n.render(n.duration(),!0,!0),x=C(qt.a)-I+m+it,N=Math.abs(m-x)>1,re&&N&&_.splice(_.length-2,2),n.render(0,!0,!0),V||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),ut(0)):x=m,B&&(B.value?B.style["overflow"+qt.a.toUpperCase()]=B.value:B.style.removeProperty("overflow-"+qt.a));j&&j.forEach((function(t){return t.revert(!1,!0)})),Ae.start=c,Ae.end=l,o=a=St?X:He(),Lt||St||(o<X&&He(X),Ae.scroll.rec=0),Ae.revert(!1,!0),Be=At(),H&&(je=-1,H.restart(!0)),nt=0,n&&$t&&(n._initted||Q)&&n.progress()!==Q&&n.progress(Q||0,!0).render(n.time(),!0,!0),(et||$e!==Ae.progress||Lt||_t)&&(n&&!$t&&n.totalProgress(Lt&&c<-.001&&!$e?z.utils.normalize(c,l,0):$e,!0),Ae.progress=et||(o-c)/m===$e?0:$e),mt&&yt&&(w._pinOffset=Math.round(Ae.progress*x)),q&&q.invalidate(),isNaN($)||($-=z.getProperty(d,qt.p),W-=z.getProperty(f,qt.p),_n(d,qt,$),_n(u,qt,$-(b||0)),_n(f,qt,W),_n(h,qt,W-(b||0))),et&&!St&&Ae.update(),!ft||St||g||(g=!0,ft(Ae),g=!1)}},Ae.getVelocity=function(){return(He()-a)/(At()-tt)*1e3||0},Ae.endAnimation=function(){Zt(Ae.callbackAnimation),n&&(q?q.progress(1):n.paused()?$t||Zt(n,Ae.direction<0,1):Zt(n,n.reversed()))},Ae.labelToScroll=function(t){return n&&n.labels&&(c||Ae.refresh()||c)+n.labels[t]/n.duration()*m||0},Ae.getTrailing=function(t){var e=Le.indexOf(Ae),n=Ae.direction>0?Le.slice(0,e).reverse():Le.slice(e+1);return(Yt(t)?n.filter((function(e){return e.vars.preventOverlaps===t})):n).filter((function(t){return Ae.direction>0?t.end<=c:t.start>=l}))},Ae.update=function(t,e,i){if(!Lt||i||t){var s,u,h,f,p,g,y,b,T=!0===St?X:Ae.scroll(),E=t?0:(T-c)/m,C=E<0?0:E>1?1:E||0,k=Ae.progress;if(e&&(a=o,o=Lt?He():T,kt&&(j=V,V=n&&!$t?n.totalProgress():C)),vt&&mt&&!nt&&!xt&&Rt&&(!C&&c<T+(T-a)/(At()-tt)*vt?C=1e-4:1===C&&l>T+(T-a)/(At()-tt)*vt&&(C=.9999)),C!==k&&Ae.enabled){if(s=Ae.isActive=!!C&&C<1,u=!!k&&k<1,g=s!==u,p=g||!!C!==!!k,Ae.direction=C>k?1:-1,Ae.progress=C,p&&!nt&&(h=C&&!k?0:1===C?1:1===k?2:3,$t&&(f=!g&&"none"!==se[h+1]&&se[h+1]||se[h],b=n&&("complete"===f||"reset"===f||f in n))),jt&&(g||b)&&(b||pt||!n)&&(Xt(jt)?jt(Ae):Ae.getTrailing(jt).forEach((function(t){return t.endAnimation()}))),$t||(!q||nt||xt?n&&n.totalProgress(C,!(!nt||!Be&&!t)):(q._dp._time-q._start!==q._time&&q.render(q._dp._time-q._start),q.resetTo?q.resetTo("totalProgress",C,n._tTime/n._tDur):(q.vars.totalProgress=C,q.invalidate().restart()))),mt)if(t&&yt&&(w.style[yt+qt.os2]=A),re){if(p){if(y=!t&&C>k&&l+1>T&&T+1>=Kt(zt,qt),Dt)if(t||!s&&!y)mn(mt,w);else{var D=we(mt,!0),P=T-c;mn(mt,Y,D.top+(qt===M?P:0)+me,D.left+(qt===M?0:P)+me)}un(s||y?_:v),N&&C<1&&s||S(I+(1!==C||y?0:x))}}else S(Vt(I+x*C));kt&&!r.tween&&!nt&&!xt&&H.restart(!0),ct&&(g||Ct&&C&&(C<1||!Et))&&J(ct.targets).forEach((function(t){return t.classList[s||Ct?"add":"remove"](ct.className)})),at&&!$t&&!t&&at(Ae),p&&!nt?($t&&(b&&("complete"===f?n.pause().totalProgress(1):"reset"===f?n.restart(!0).pause():"restart"===f?n.restart(!0):n[f]()),at&&at(Ae)),!g&&Et||(dt&&g&&te(Ae,dt),ie[h]&&te(Ae,ie[h]),Ct&&(1===C?Ae.kill(!1,1):ie[h]=0),g||(h=1===C?1:3,ie[h]&&te(Ae,ie[h]))),Ft&&!s&&Math.abs(Ae.getVelocity())>(Qt(Ft)?Ft:2500)&&(Zt(Ae.callbackAnimation),q?q.progress(1):Zt(n,"reverse"===f?1:!C,1))):$t&&at&&!nt&&at(Ae)}if(O){var L=Lt?T/Lt.duration()*(Lt._caScrollDist||0):T;R(L+(d._isFlipped?1:0)),O(L)}et&&et(-T/Lt.duration()*(Lt._caScrollDist||0))}},Ae.enable=function(e,n){Ae.enabled||(Ae.enabled=!0,Ie(zt,"resize",qe),ne||Ie(zt,"scroll",Ve),Ne&&Ie(t,"refreshInit",Ne),!1!==e&&(Ae.progress=$e=0,o=a=je=He()),!1!==n&&Ae.refresh())},Ae.getTween=function(t){return t&&r?r.tween:q},Ae.setPositions=function(t,e,n,r){if(Lt){var i=Lt.scrollTrigger,s=Lt.duration(),o=i.end-i.start;t=i.start+o*t/s,e=i.start+o*e/s}Ae.refresh(!1,!1,{start:Pt(t,n&&!!Ae._startClamp),end:Pt(e,n&&!!Ae._endClamp)},r),Ae.update()},Ae.adjustPinSpacing=function(t){if(D&&t){var e=D.indexOf(qt.d)+1;D[e]=parseFloat(D[e])+t+me,D[1]=parseFloat(D[1])+t+me,un(D)}},Ae.disable=function(e,n){if(Ae.enabled&&(!1!==e&&Ae.revert(!0,!0),Ae.enabled=Ae.isActive=!1,n||q&&q.pause(),X=0,i&&(i.uncache=1),Ne&&xe(t,"refreshInit",Ne),H&&(H.pause(),r.tween&&r.tween.kill()&&(r.tween=0)),!ne)){var s=Le.length;while(s--)if(Le[s].scroller===zt&&Le[s]!==Ae)return;xe(zt,"resize",qe),ne||xe(zt,"scroll",Ve)}},Ae.kill=function(t,r){Ae.disable(t,r),q&&!r&&q.kill(),ht&&delete Fe[ht];var s=Le.indexOf(Ae);s>=0&&Le.splice(s,1),s===st&&nn>0&&st--,s=0,Le.forEach((function(t){return t.scroller===Ae.scroller&&(s=1)})),s||St||(Ae.scroll.rec=0),n&&(n.scrollTrigger=null,t&&n.revert({kill:!1}),r||n.kill()),u&&[u,h,d,f].forEach((function(t){return t.parentNode&&t.parentNode.removeChild(t)})),It===Ae&&(It=0),mt&&(i&&(i.uncache=1),s=0,Le.forEach((function(t){return t.pin===mt&&s++})),s||(i.spacer=0)),e.onKill&&e.onKill(Ae)},Le.push(Ae),Ae.enable(!1,!1),it&&it(Ae),n&&n.add&&!m){var Ye=Ae.update;Ae.update=function(){Ae.update=Ye,c||l||Ae.refresh()},z.delayedCall(.01,Ae.update),m=.01,c=l=0}else Ae.refresh();mt&&Qe()}else this.update=this.refresh=this.kill=Ut},t.register=function(e){return H||(z=e||qt(),jt()&&window.document&&t.enable(),H=Nt),H},t.defaults=function(t){if(t)for(var e in t)Re[e]=t[e];return Re},t.disable=function(t,e){Nt=0,Le.forEach((function(n){return n[e?"kill":"disable"](t)})),xe(W,"wheel",Ve),xe(K,"scroll",Ve),clearInterval(et),xe(K,"touchcancel",Ut),xe(Y,"touchstart",Ut),ke(xe,K,"pointerdown,touchstart,mousedown",Lt),ke(xe,K,"pointerup,touchend,mouseup",Ft),Q.kill(),Gt(xe);for(var n=0;n<b.length;n+=3)Ae(xe,b[n],b[n+1]),Ae(xe,b[n],b[n+2])},t.enable=function(){if(W=window,K=document,G=K.documentElement,Y=K.body,z&&(J=z.utils.toArray,Z=z.utils.clamp,yt=z.core.context||Ut,ut=z.core.suppressOverwrites||Ut,_t=W.history.scrollRestoration||"auto",en=W.pageYOffset,z.core.globals("ScrollTrigger",t),Y)){Nt=1,vt=document.createElement("div"),vt.style.height="100vh",vt.style.position="absolute",Je(),Mt(),$.register(z),t.isTouch=$.isTouch,mt=$.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ft=1===$.isTouch,Ie(W,"wheel",Ve),X=[W,K,G,Y],z.matchMedia?(t.matchMedia=function(t){var e,n=z.matchMedia();for(e in t)n.add(e,t[e]);return n},z.addEventListener("matchMediaInit",(function(){return Ge()})),z.addEventListener("matchMediaRevert",(function(){return Ke()})),z.addEventListener("matchMedia",(function(){tn(0,1),He("matchMedia")})),z.matchMedia("(orientation: portrait)",(function(){return je(),je}))):console.warn("Requires GSAP 3.11.0 or later"),je(),Ie(K,"scroll",Ve);var e,n,r=Y.style,i=r.borderTopStyle,s=z.core.Animation.prototype;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",e=we(Y),M.m=Math.round(e.top+M.sc())||0,P.m=Math.round(e.left+P.sc())||0,i?r.borderTopStyle=i:r.removeProperty("border-top-style"),et=setInterval(Ue,250),z.delayedCall(.5,(function(){return xt=0})),Ie(K,"touchcancel",Ut),Ie(Y,"touchstart",Ut),ke(Ie,K,"pointerdown,touchstart,mousedown",Lt),ke(Ie,K,"pointerup,touchend,mouseup",Ft),it=z.utils.checkPrefix("transform"),on.push(it),H=At(),Q=z.delayedCall(.2,tn).pause(),ct=[K,"visibilitychange",function(){var t=W.innerWidth,e=W.innerHeight;K.hidden?(ot=t,at=e):ot===t&&at===e||qe()},K,"DOMContentLoaded",tn,W,"load",tn,W,"resize",qe],Gt(Ie),Le.forEach((function(t){return t.enable(0,1)})),n=0;n<b.length;n+=3)Ae(xe,b[n],b[n+1]),Ae(xe,b[n],b[n+2])}},t.config=function(e){"limitCallbacks"in e&&(Et=!!e.limitCallbacks);var n=e.syncInterval;n&&clearInterval(et)||(et=n)&&setInterval(Ue,n),"ignoreMobileResize"in e&&(ft=1===t.isTouch&&e.ignoreMobileResize),"autoRefreshEvents"in e&&(Gt(xe)||Gt(Ie,e.autoRefreshEvents||"none"),ht=-1===(e.autoRefreshEvents+"").indexOf("resize"))},t.scrollerProxy=function(t,e){var n=L(t),r=b.indexOf(n),i=Bt(n);~r&&b.splice(r,i?6:2),e&&(i?T.unshift(W,e,Y,e,G,e):T.unshift(n,e))},t.clearMatchMedia=function(t){Le.forEach((function(e){return e._ctx&&e._ctx.query===t&&e._ctx.kill(!0,!0)}))},t.isInViewport=function(t,e,n){var r=(Yt(t)?L(t):t).getBoundingClientRect(),i=r[n?oe:ae]*e||0;return n?r.right-i>0&&r.left+i<W.innerWidth:r.bottom-i>0&&r.top+i<W.innerHeight},t.positionInViewport=function(t,e,n){Yt(t)&&(t=L(t));var r=t.getBoundingClientRect(),i=r[n?oe:ae],s=null==e?i/2:e in Ne?Ne[e]*i:~e.indexOf("%")?parseFloat(e)*i/100:parseFloat(e)||0;return n?(r.left+s)/W.innerWidth:(r.top+s)/W.innerHeight},t.killAll=function(t){if(Le.slice(0).forEach((function(t){return"ScrollSmoother"!==t.vars.id&&t.kill()})),!0!==t){var e=Be.killAll||[];Be={},e.forEach((function(t){return t()}))}},t}();wn.version="3.12.5",wn.saveStyles=function(t){return t?J(t).forEach((function(t){if(t&&t.style){var e=We.indexOf(t);e>=0&&We.splice(e,5),We.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),z.core.getCache(t),yt())}})):We},wn.revert=function(t,e){return Ge(!t,e)},wn.create=function(t,e){return new wn(t,e)},wn.refresh=function(t){return t?qe():(H||wn.register())&&tn(!0)},wn.update=function(t){return++b.cache&&rn(!0===t?2:0)},wn.clearScrollMemory=Ye,wn.maxScroll=function(t,e){return Kt(t,e?P:M)},wn.getScrollFunc=function(t,e){return F(L(t),e?P:M)},wn.getById=function(t){return Fe[t]},wn.getAll=function(){return Le.filter((function(t){return"ScrollSmoother"!==t.vars.id}))},wn.isScrolling=function(){return!!Rt},wn.snapDirectional=Ce,wn.addEventListener=function(t,e){var n=Be[t]||(Be[t]=[]);~n.indexOf(e)||n.push(e)},wn.removeEventListener=function(t,e){var n=Be[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},wn.batch=function(t,e){var n,r=[],i={},s=e.interval||.016,o=e.batchMax||1e9,a=function(t,e){var n=[],r=[],i=z.delayedCall(s,(function(){e(n,r),n=[],r=[]})).pause();return function(t){n.length||i.restart(!0),n.push(t.trigger),r.push(t),o<=n.length&&i.progress(1)}};for(n in e)i[n]="on"===n.substr(0,2)&&Xt(e[n])&&"onRefreshInit"!==n?a(n,e[n]):e[n];return Xt(o)&&(o=o(),Ie(wn,"refresh",(function(){return o=e.batchMax()}))),J(t).forEach((function(t){var e={};for(n in i)e[n]=i[n];e.trigger=t,r.push(wn.create(e))})),r};var bn,Tn=function(t,e,n,r){return e>r?t(r):e<0&&t(0),n>r?(r-e)/(n-e):n<0?e/(e-n):1},En=function t(e,n){!0===n?e.style.removeProperty("touch-action"):e.style.touchAction=!0===n?"auto":n?"pan-"+n+($.isTouch?" pinch-zoom":""):"none",e===G&&t(Y,n)},Cn={auto:1,scroll:1},Sn=function(t){var e,n=t.event,r=t.target,i=t.axis,s=(n.changedTouches?n.changedTouches[0]:n).target,o=s._gsap||z.core.getCache(s),a=At();if(!o._isScrollT||a-o._isScrollT>2e3){while(s&&s!==Y&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!Cn[(e=ye(s)).overflowY]&&!Cn[e.overflowX]))s=s.parentNode;o._isScroll=s&&s!==r&&!Bt(s)&&(Cn[(e=ye(s)).overflowY]||Cn[e.overflowX]),o._isScrollT=a}(o._isScroll||"x"===i)&&(n.stopPropagation(),n._gsapAllow=!0)},kn=function(t,e,n,r){return $.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:r=r&&Sn,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&Ie(K,$.eventTypes[0],xn,!1,!0)},onDisable:function(){return xe(K,$.eventTypes[0],xn,!0)}})},In=/(input|label|select|textarea)/i,xn=function(t){var e=In.test(t.target.tagName);(e||bn)&&(t._gsapAllow=!0,bn=e)},An=function(t){Jt(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e,n,r,i,s,o,a,c,l=t,u=l.normalizeScrollX,h=l.momentum,d=l.allowNestedScroll,f=l.onRelease,p=L(t.target)||G,g=z.core.globals().ScrollSmoother,m=g&&g.get(),y=mt&&(t.content&&L(t.content)||m&&!1!==t.content&&!m.smooth()&&m.content()),_=F(p,M),v=F(p,P),w=1,T=($.isTouch&&W.visualViewport?W.visualViewport.scale*W.visualViewport.width:W.outerWidth)/W.innerWidth,E=0,C=Xt(h)?function(){return h(e)}:function(){return h||2.8},S=kn(p,t.type,!0,d),k=function(){return i=!1},I=Ut,x=Ut,A=function(){n=Kt(p,M),x=Z(mt?1:0,n),u&&(I=Z(0,Kt(p,P))),r=Xe},D=function(){y._gsap.y=Vt(parseFloat(y._gsap.y)+_.offset)+"px",y.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(y._gsap.y)+", 0, 1)",_.offset=_.cacheID=0},R=function(){if(i){requestAnimationFrame(k);var t=Vt(e.deltaY/2),n=x(_.v-t);if(y&&n!==_.v+_.offset){_.offset=n-_.v;var r=Vt((parseFloat(y&&y._gsap.y)||0)-_.offset);y.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+r+", 0, 1)",y._gsap.y=r+"px",_.cacheID=b.cache,rn()}return!0}_.offset&&D(),i=!0},N=function(){A(),s.isActive()&&s.vars.scrollY>n&&(_()>n?s.progress(1)&&_(n):s.resetTo("scrollY",n))};return y&&z.set(y,{y:"+=0"}),t.ignoreCheck=function(t){return mt&&"touchmove"===t.type&&R(t)||w>1.05&&"touchstart"!==t.type||e.isGesturing||t.touches&&t.touches.length>1},t.onPress=function(){i=!1;var t=w;w=Vt((W.visualViewport&&W.visualViewport.scale||1)/T),s.pause(),t!==w&&En(p,w>1.01||!u&&"x"),o=v(),a=_(),A(),r=Xe},t.onRelease=t.onGestureStart=function(t,e){if(_.offset&&D(),e){b.cache++;var r,i,o=C();u&&(r=v(),i=r+.05*o*-t.velocityX/.227,o*=Tn(v,r,i,Kt(p,P)),s.vars.scrollX=I(i)),r=_(),i=r+.05*o*-t.velocityY/.227,o*=Tn(_,r,i,Kt(p,M)),s.vars.scrollY=x(i),s.invalidate().duration(o).play(.01),(mt&&s.vars.scrollY>=n||r>=n-1)&&z.to({},{onUpdate:N,duration:o})}else c.restart(!0);f&&f(t)},t.onWheel=function(){s._ts&&s.pause(),At()-E>1e3&&(r=0,E=At())},t.onChange=function(t,e,n,i,s){if(Xe!==r&&A(),e&&u&&v(I(i[2]===e?o+(t.startX-t.x):v()+e-i[1])),n){_.offset&&D();var c=s[2]===n,l=c?a+t.startY-t.y:_()+n-s[1],h=x(l);c&&l!==h&&(a+=h-l),_(h)}(n||e)&&rn()},t.onEnable=function(){En(p,!u&&"x"),wn.addEventListener("refresh",N),Ie(W,"resize",N),_.smooth&&(_.target.style.scrollBehavior="auto",_.smooth=v.smooth=!1),S.enable()},t.onDisable=function(){En(p,!0),xe(W,"resize",N),wn.removeEventListener("refresh",N),S.kill()},t.lockAxis=!1!==t.lockAxis,e=new $(t),e.iOS=mt,mt&&!_()&&_(1),mt&&z.ticker.add(Ut),c=e._dc,s=z.to(e,{ease:"power4",paused:!0,inherit:!1,scrollX:u?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:yn(_,_(),(function(){return s.pause()}))},onUpdate:rn,onComplete:c.vars.onComplete}),e};wn.sort=function(t){return Le.sort(t||function(t,e){return-1e6*(t.vars.refreshPriority||0)+t.start-(e.start+-1e6*(e.vars.refreshPriority||0))})},wn.observe=function(t){return new $(t)},wn.normalizeScroll=function(t){if("undefined"===typeof t)return dt;if(!0===t&&dt)return dt.enable();if(!1===t)return dt&&dt.kill(),void(dt=t);var e=t instanceof $?t:An(t);return dt&&dt.target===e.target&&dt.kill(),Bt(e.target)&&(dt=e),e},wn.core={_getVelocityProp:U,_inputObserver:kn,_scrollers:b,_proxies:T,bridge:{ss:function(){Rt||He("scrollStart"),Rt=At()},ref:function(){return nt}}},qt()&&z.registerPlugin(wn)},8552:function(t,e,n){"use strict";n.d(e,{p8:function(){return ci}});n(7658);function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var s,o,a,c,l,u,h,d,f,p,g,m={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},y={duration:.5,overwrite:!1,delay:0},_=1e8,v=1/_,w=2*Math.PI,b=w/4,T=0,E=Math.sqrt,C=Math.cos,S=Math.sin,k=function(t){return"string"===typeof t},I=function(t){return"function"===typeof t},x=function(t){return"number"===typeof t},A=function(t){return"undefined"===typeof t},D=function(t){return"object"===typeof t},R=function(t){return!1!==t},N=function(){return"undefined"!==typeof window},O=function(t){return I(t)||k(t)},P="function"===typeof ArrayBuffer&&ArrayBuffer.isView||function(){},M=Array.isArray,L=/(?:-?\.?\d|\.)+/gi,F=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,U=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,V=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,j=/[+-]=-?[.\d]+/,q=/[^,'"\[\]\s]+/gi,B=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,$={},z={},H=function(t){return(z=bt(t,$))&&jn},W=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},K=function(t,e){return!e&&console.warn(t)},G=function(t,e){return t&&($[t]=e)&&z&&(z[t]=e)||$},Y=function(){return 0},X={suppressEvents:!0,isStart:!0,kill:!1},Q={suppressEvents:!0,kill:!1},J={suppressEvents:!0},Z={},tt=[],et={},nt={},rt={},it=30,st=[],ot="",at=function(t){var e,n,r=t[0];if(D(r)||I(r)||(t=[t]),!(e=(r._gsap||{}).harness)){n=st.length;while(n--&&!st[n].targetTest(r));e=st[n]}n=t.length;while(n--)t[n]&&(t[n]._gsap||(t[n]._gsap=new Ye(t[n],e)))||t.splice(n,1);return t},ct=function(t){return t._gsap||at(ie(t))[0]._gsap},lt=function(t,e,n){return(n=t[e])&&I(n)?t[e]():A(n)&&t.getAttribute&&t.getAttribute(e)||n},ut=function(t,e){return(t=t.split(",")).forEach(e)||t},ht=function(t){return Math.round(1e5*t)/1e5||0},dt=function(t){return Math.round(1e7*t)/1e7||0},ft=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),"+"===n?t+r:"-"===n?t-r:"*"===n?t*r:t/r},pt=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},gt=function(){var t,e,n=tt.length,r=tt.slice(0);for(et={},tt.length=0,t=0;t<n;t++)e=r[t],e&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)},mt=function(t,e,n,r){tt.length&&!o&&gt(),t.render(e,n,r||o&&e<0&&(t._initted||t._startAt)),tt.length&&!o&&gt()},yt=function(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(q).length<2?e:k(t)?t.trim():t},_t=function(t){return t},vt=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},wt=function(t){return function(e,n){for(var r in n)r in e||"duration"===r&&t||"ease"===r||(e[r]=n[r])}},bt=function(t,e){for(var n in e)t[n]=e[n];return t},Tt=function t(e,n){for(var r in n)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(e[r]=D(n[r])?t(e[r]||(e[r]={}),n[r]):n[r]);return e},Et=function(t,e){var n,r={};for(n in t)n in e||(r[n]=t[n]);return r},Ct=function(t){var e=t.parent||c,n=t.keyframes?wt(M(t.keyframes)):vt;if(R(t.inherit))while(e)n(t,e.vars.defaults),e=e.parent||e._dp;return t},St=function(t,e){var n=t.length,r=n===e.length;while(r&&n--&&t[n]===e[n]);return n<0},kt=function(t,e,n,r,i){void 0===n&&(n="_first"),void 0===r&&(r="_last");var s,o=t[r];if(i){s=e[i];while(o&&o[i]>s)o=o._prev}return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},It=function(t,e,n,r){void 0===n&&(n="_first"),void 0===r&&(r="_last");var i=e._prev,s=e._next;i?i._next=s:t[n]===e&&(t[n]=s),s?s._prev=i:t[r]===e&&(t[r]=i),e._next=e._prev=e.parent=null},xt=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},At=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0)){var n=t;while(n)n._dirty=1,n=n.parent}return t},Dt=function(t){var e=t.parent;while(e&&e.parent)e._dirty=1,e.totalDuration(),e=e.parent;return t},Rt=function(t,e,n,r){return t._startAt&&(o?t._startAt.revert(Q):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},Nt=function t(e){return!e||e._ts&&t(e.parent)},Ot=function(t){return t._repeat?Pt(t._tTime,t=t.duration()+t._rDelay)*t:0},Pt=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Mt=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Lt=function(t){return t._end=dt(t._start+(t._tDur/Math.abs(t._ts||t._rts||v)||0))},Ft=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=dt(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Lt(t),n._dirty||At(n,t)),t},Ut=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Mt(t.rawTime(),e),(!e._dur||Jt(0,e.totalDuration(),n)-e._tTime>v)&&e.render(n,!0)),At(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration()){n=t;while(n._dp)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp}t._zTime=-v}},Vt=function(t,e,n,r){return e.parent&&xt(e),e._start=dt((x(n)?n:n||t!==c?Yt(t,n,e):t._time)+e._delay),e._end=dt(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),kt(t,e,"_first","_last",t._sort?"_start":0),$t(e)||(t._recent=e),r||Ut(t,e),t._ts<0&&Ft(t,t._tTime),t},jt=function(t,e){return($.ScrollTrigger||W("scrollTrigger",e))&&$.ScrollTrigger.create(e,t)},qt=function(t,e,n,r,i){return sn(t,e,i),t._initted?!n&&t._pt&&!o&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==Pe.frame?(tt.push(t),t._lazy=[i,r],1):void 0:1},Bt=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},$t=function(t){var e=t.data;return"isFromStart"===e||"isStart"===e},zt=function(t,e,n,r){var i,s,a,c=t.ratio,l=e<0||!e&&(!t._start&&Bt(t)&&(t._initted||!$t(t))||(t._ts<0||t._dp._ts<0)&&!$t(t))?0:1,u=t._rDelay,h=0;if(u&&t._repeat&&(h=Jt(0,t._tDur,e),s=Pt(h,u),t._yoyo&&1&s&&(l=1-l),s!==Pt(t._tTime,u)&&(c=1-l,t.vars.repeatRefresh&&t._initted&&t.invalidate())),l!==c||o||r||t._zTime===v||!e&&t._zTime){if(!t._initted&&qt(t,e,r,n,h))return;a=t._zTime,t._zTime=e||(n?v:0),n||(n=e&&!a),t.ratio=l,t._from&&(l=1-l),t._time=0,t._tTime=h,i=t._pt;while(i)i.r(l,i.d),i=i._next;e<0&&Rt(t,e,n,!0),t._onUpdate&&!n&&be(t,"onUpdate"),h&&t._repeat&&!n&&t.parent&&be(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===l&&(l&&xt(t,1),n||o||(be(t,l?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Ht=function(t,e,n){var r;if(n>e){r=t._first;while(r&&r._start<=n){if("isPause"===r.data&&r._start>e)return r;r=r._next}}else{r=t._last;while(r&&r._start>=n){if("isPause"===r.data&&r._start<e)return r;r=r._prev}}},Wt=function(t,e,n,r){var i=t._repeat,s=dt(e)||0,o=t._tTime/t._tDur;return o&&!r&&(t._time*=s/t._dur),t._dur=s,t._tDur=i?i<0?1e10:dt(s*(i+1)+t._rDelay*i):s,o>0&&!r&&Ft(t,t._tTime=t._tDur*o),t.parent&&Lt(t),n||At(t.parent,t),t},Kt=function(t){return t instanceof Qe?At(t):Wt(t,t._dur)},Gt={_start:0,endTime:Y,totalDuration:Y},Yt=function t(e,n,r){var i,s,o,a=e.labels,c=e._recent||Gt,l=e.duration()>=_?c.endTime(!1):e._dur;return k(n)&&(isNaN(n)||n in a)?(s=n.charAt(0),o="%"===n.substr(-1),i=n.indexOf("="),"<"===s||">"===s?(i>=0&&(n=n.replace(/=/,"")),("<"===s?c._start:c.endTime(c._repeat>=0))+(parseFloat(n.substr(1))||0)*(o?(i<0?c:r).totalDuration()/100:1)):i<0?(n in a||(a[n]=l),a[n]):(s=parseFloat(n.charAt(i-1)+n.substr(i+1)),o&&r&&(s=s/100*(M(r)?r[0]:r).totalDuration()),i>1?t(e,n.substr(0,i-1),r)+s:l+s)):null==n?l:+n},Xt=function(t,e,n){var r,i,s=x(e[1]),o=(s?2:1)+(t<2?0:1),a=e[o];if(s&&(a.duration=e[1]),a.parent=n,t){r=a,i=n;while(i&&!("immediateRender"in r))r=i.vars.defaults||{},i=R(i.vars.inherit)&&i.parent;a.immediateRender=R(r.immediateRender),t<2?a.runBackwards=1:a.startAt=e[o-1]}return new dn(e[0],a,e[o+1])},Qt=function(t,e){return t||0===t?e(t):e},Jt=function(t,e,n){return n<t?t:n>e?e:n},Zt=function(t,e){return k(t)&&(e=B.exec(t))?e[1]:""},te=function(t,e,n){return Qt(n,(function(n){return Jt(t,e,n)}))},ee=[].slice,ne=function(t,e){return t&&D(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&D(t[0]))&&!t.nodeType&&t!==l},re=function(t,e,n){return void 0===n&&(n=[]),t.forEach((function(t){var r;return k(t)&&!e||ne(t,1)?(r=n).push.apply(r,ie(t)):n.push(t)}))||n},ie=function(t,e,n){return a&&!e&&a.selector?a.selector(t):!k(t)||n||!u&&Me()?M(t)?re(t,n):ne(t)?ee.call(t,0):t?[t]:[]:ee.call((e||h).querySelectorAll(t),0)},se=function(t){return t=ie(t)[0]||K("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ie(e,n.querySelectorAll?n:n===t?K("Invalid scope")||h.createElement("div"):t)}},oe=function(t){return t.sort((function(){return.5-Math.random()}))},ae=function(t){if(I(t))return t;var e=D(t)?t:{each:t},n=ze(e.ease),r=e.from||0,i=parseFloat(e.base)||0,s={},o=r>0&&r<1,a=isNaN(r)||o,c=e.axis,l=r,u=r;return k(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&a&&(l=r[0],u=r[1]),function(t,o,h){var d,f,p,g,m,y,v,w,b,T=(h||e).length,C=s[T];if(!C){if(b="auto"===e.grid?0:(e.grid||[1,_])[1],!b){v=-_;while(v<(v=h[b++].getBoundingClientRect().left)&&b<T);b<T&&b--}for(C=s[T]=[],d=a?Math.min(b,T)*l-.5:r%b,f=b===_?0:a?T*u/b-.5:r/b|0,v=0,w=_,y=0;y<T;y++)p=y%b-d,g=f-(y/b|0),C[y]=m=c?Math.abs("y"===c?g:p):E(p*p+g*g),m>v&&(v=m),m<w&&(w=m);"random"===r&&oe(C),C.max=v-w,C.min=w,C.v=T=(parseFloat(e.amount)||parseFloat(e.each)*(b>T?T-1:c?"y"===c?T/b:b:Math.max(b,T/b))||0)*("edges"===r?-1:1),C.b=T<0?i-T:i,C.u=Zt(e.amount||e.each)||0,n=n&&T<0?Be(n):n}return T=(C[t]-C.min)/C.max||0,dt(C.b+(n?n(T):T)*C.v)+C.u}},ce=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=dt(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(x(n)?0:Zt(n))}},le=function(t,e){var n,r,i=M(t);return!i&&D(t)&&(n=i=t.radius||_,t.values?(t=ie(t.values),(r=!x(t[0]))&&(n*=n)):t=ce(t.increment)),Qt(e,i?I(t)?function(e){return r=t(e),Math.abs(r-e)<=n?r:e}:function(e){var i,s,o=parseFloat(r?e.x:e),a=parseFloat(r?e.y:0),c=_,l=0,u=t.length;while(u--)r?(i=t[u].x-o,s=t[u].y-a,i=i*i+s*s):i=Math.abs(t[u]-o),i<c&&(c=i,l=u);return l=!n||c<=n?t[l]:e,r||l===e||x(e)?l:l+Zt(e)}:ce(t))},ue=function(t,e,n,r){return Qt(M(t)?!e:!0===n?!!(n=0):!r,(function(){return M(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+.99*n))/n)*n*r)/r}))},he=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduce((function(t,e){return e(t)}),t)}},de=function(t,e){return function(n){return t(parseFloat(n))+(e||Zt(n))}},fe=function(t,e,n){return _e(t,e,0,1,n)},pe=function(t,e,n){return Qt(n,(function(n){return t[~~e(n)]}))},ge=function t(e,n,r){var i=n-e;return M(e)?pe(e,t(0,e.length),n):Qt(r,(function(t){return(i+(t-e)%i)%i+e}))},me=function t(e,n,r){var i=n-e,s=2*i;return M(e)?pe(e,t(0,e.length-1),n):Qt(r,(function(t){return t=(s+(t-e)%s)%s||0,e+(t>i?s-t:t)}))},ye=function(t){var e,n,r,i,s=0,o="";while(~(e=t.indexOf("random(",s)))r=t.indexOf(")",e),i="["===t.charAt(e+7),n=t.substr(e+7,r-e-7).match(i?q:L),o+=t.substr(s,e-s)+ue(i?n:+n[0],i?0:+n[1],+n[2]||1e-5),s=r+1;return o+t.substr(s,t.length-s)},_e=function(t,e,n,r,i){var s=e-t,o=r-n;return Qt(i,(function(e){return n+((e-t)/s*o||0)}))},ve=function t(e,n,r,i){var s=isNaN(e+n)?0:function(t){return(1-t)*e+t*n};if(!s){var o,a,c,l,u,h=k(e),d={};if(!0===r&&(i=1)&&(r=null),h)e={p:e},n={p:n};else if(M(e)&&!M(n)){for(c=[],l=e.length,u=l-2,a=1;a<l;a++)c.push(t(e[a-1],e[a]));l--,s=function(t){t*=l;var e=Math.min(u,~~t);return c[e](t-e)},r=n}else i||(e=bt(M(e)?[]:{},e));if(!c){for(o in n)en.call(d,e,o,"get",n[o]);s=function(t){return bn(t,d)||(h?e.p:e)}}}return Qt(r,s)},we=function(t,e,n){var r,i,s,o=t.labels,a=_;for(r in o)i=o[r]-e,i<0===!!n&&i&&a>(i=Math.abs(i))&&(s=r,a=i);return s},be=function(t,e,n){var r,i,s,o=t.vars,c=o[e],l=a,u=t._ctx;if(c)return r=o[e+"Params"],i=o.callbackScope||t,n&&tt.length&&gt(),u&&(a=u),s=r?c.apply(i,r):c.call(i),a=l,s},Te=function(t){return xt(t),t.scrollTrigger&&t.scrollTrigger.kill(!!o),t.progress()<1&&be(t,"onInterrupt"),t},Ee=[],Ce=function(t){if(t)if(t=!t.name&&t["default"]||t,N()||t.headless){var e=t.name,n=I(t),r=e&&!n&&t.init?function(){this._props=[]}:t,i={init:Y,render:bn,add:en,kill:En,modifier:Tn,rawVars:0},s={targetTest:0,get:0,getSetter:yn,aliases:{},register:0};if(Me(),t!==r){if(nt[e])return;vt(r,vt(Et(t,i),s)),bt(r.prototype,bt(i,Et(t,s))),nt[r.prop=e]=r,t.targetTest&&(st.push(r),Z[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}G(e,r),t.register&&t.register(jn,r,kn)}else Ee.push(t)},Se=255,ke={aqua:[0,Se,Se],lime:[0,Se,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Se],navy:[0,0,128],white:[Se,Se,Se],olive:[128,128,0],yellow:[Se,Se,0],orange:[Se,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Se,0,0],pink:[Se,192,203],cyan:[0,Se,Se],transparent:[Se,Se,Se,0]},Ie=function(t,e,n){return t+=t<0?1:t>1?-1:0,(6*t<1?e+(n-e)*t*6:t<.5?n:3*t<2?e+(n-e)*(2/3-t)*6:e)*Se+.5|0},xe=function(t,e,n){var r,i,s,o,a,c,l,u,h,d,f=t?x(t)?[t>>16,t>>8&Se,t&Se]:0:ke.black;if(!f){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),ke[t])f=ke[t];else if("#"===t.charAt(0)){if(t.length<6&&(r=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+r+r+i+i+s+s+(5===t.length?t.charAt(4)+t.charAt(4):"")),9===t.length)return f=parseInt(t.substr(1,6),16),[f>>16,f>>8&Se,f&Se,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),f=[t>>16,t>>8&Se,t&Se]}else if("hsl"===t.substr(0,3))if(f=d=t.match(L),e){if(~t.indexOf("="))return f=t.match(F),n&&f.length<4&&(f[3]=1),f}else o=+f[0]%360/360,a=+f[1]/100,c=+f[2]/100,i=c<=.5?c*(a+1):c+a-c*a,r=2*c-i,f.length>3&&(f[3]*=1),f[0]=Ie(o+1/3,r,i),f[1]=Ie(o,r,i),f[2]=Ie(o-1/3,r,i);else f=t.match(L)||ke.transparent;f=f.map(Number)}return e&&!d&&(r=f[0]/Se,i=f[1]/Se,s=f[2]/Se,l=Math.max(r,i,s),u=Math.min(r,i,s),c=(l+u)/2,l===u?o=a=0:(h=l-u,a=c>.5?h/(2-l-u):h/(l+u),o=l===r?(i-s)/h+(i<s?6:0):l===i?(s-r)/h+2:(r-i)/h+4,o*=60),f[0]=~~(o+.5),f[1]=~~(100*a+.5),f[2]=~~(100*c+.5)),n&&f.length<4&&(f[3]=1),f},Ae=function(t){var e=[],n=[],r=-1;return t.split(Re).forEach((function(t){var i=t.match(U)||[];e.push.apply(e,i),n.push(r+=i.length+1)})),e.c=n,e},De=function(t,e,n){var r,i,s,o,a="",c=(t+a).match(Re),l=e?"hsla(":"rgba(",u=0;if(!c)return t;if(c=c.map((function(t){return(t=xe(t,e,1))&&l+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"})),n&&(s=Ae(t),r=n.c,r.join(a)!==s.c.join(a)))for(i=t.replace(Re,"1").split(U),o=i.length-1;u<o;u++)a+=i[u]+(~r.indexOf(u)?c.shift()||l+"0,0,0,0)":(s.length?s:c.length?c:n).shift());if(!i)for(i=t.split(Re),o=i.length-1;u<o;u++)a+=i[u]+c[u];return a+i[o]},Re=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in ke)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Ne=/hsl[a]?\(/,Oe=function(t){var e,n=t.join(" ");if(Re.lastIndex=0,Re.test(n))return e=Ne.test(n),t[1]=De(t[1],e),t[0]=De(t[0],e,Ae(t[1])),!0},Pe=function(){var t,e,n,r,i,s,o=Date.now,a=500,c=33,f=o(),p=f,m=1e3/240,y=m,_=[],v=function n(l){var u,h,d,g,v=o()-p,w=!0===l;if((v>a||v<0)&&(f+=v-c),p+=v,d=p-f,u=d-y,(u>0||w)&&(g=++r.frame,i=d-1e3*r.time,r.time=d/=1e3,y+=u+(u>=m?4:m-u),h=1),w||(t=e(n)),h)for(s=0;s<_.length;s++)_[s](d,i,g,l)};return r={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(t){return i/(1e3/(t||60))},wake:function(){d&&(!u&&N()&&(l=u=window,h=l.document||{},$.gsap=jn,(l.gsapVersions||(l.gsapVersions=[])).push(jn.version),H(z||l.GreenSockGlobals||!l.gsap&&l||{}),Ee.forEach(Ce)),n="undefined"!==typeof requestAnimationFrame&&requestAnimationFrame,t&&r.sleep(),e=n||function(t){return setTimeout(t,y-1e3*r.time+1|0)},g=1,v(2))},sleep:function(){(n?cancelAnimationFrame:clearTimeout)(t),g=0,e=Y},lagSmoothing:function(t,e){a=t||1/0,c=Math.min(e||33,a)},fps:function(t){m=1e3/(t||240),y=1e3*r.time+m},add:function(t,e,n){var i=e?function(e,n,s,o){t(e,n,s,o),r.remove(i)}:t;return r.remove(t),_[n?"unshift":"push"](i),Me(),i},remove:function(t,e){~(e=_.indexOf(t))&&_.splice(e,1)&&s>=e&&s--},_listeners:_},r}(),Me=function(){return!g&&Pe.wake()},Le={},Fe=/^[\d.\-M][\d.\-,\s]/,Ue=/["']/g,Ve=function(t){for(var e,n,r,i={},s=t.substr(1,t.length-3).split(":"),o=s[0],a=1,c=s.length;a<c;a++)n=s[a],e=a!==c-1?n.lastIndexOf(","):n.length,r=n.substr(0,e),i[o]=isNaN(r)?r.replace(Ue,"").trim():+r,o=n.substr(e+1).trim();return i},je=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},qe=function(t){var e=(t+"").split("("),n=Le[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Ve(e[1])]:je(t).split(",").map(yt)):Le._CE&&Fe.test(t)?Le._CE("",t):n},Be=function(t){return function(e){return 1-t(1-e)}},$e=function t(e,n){var r,i=e._first;while(i)i instanceof Qe?t(i,n):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===n||(i.timeline?t(i.timeline,n):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=n)),i=i._next},ze=function(t,e){return t&&(I(t)?t:Le[t]||qe(t))||e},He=function(t,e,n,r){void 0===n&&(n=function(t){return 1-e(1-t)}),void 0===r&&(r=function(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var i,s={easeIn:e,easeOut:n,easeInOut:r};return ut(t,(function(t){for(var e in Le[t]=$[t]=s,Le[i=t.toLowerCase()]=n,s)Le[i+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Le[t+"."+e]=s[e]})),s},We=function(t){return function(e){return e<.5?(1-t(1-2*e))/2:.5+t(2*(e-.5))/2}},Ke=function t(e,n,r){var i=n>=1?n:1,s=(r||(e?.3:.45))/(n<1?n:1),o=s/w*(Math.asin(1/i)||0),a=function(t){return 1===t?1:i*Math.pow(2,-10*t)*S((t-o)*s)+1},c="out"===e?a:"in"===e?function(t){return 1-a(1-t)}:We(a);return s=w/s,c.config=function(n,r){return t(e,n,r)},c},Ge=function t(e,n){void 0===n&&(n=1.70158);var r=function(t){return t?--t*t*((n+1)*t+n)+1:0},i="out"===e?r:"in"===e?function(t){return 1-r(1-t)}:We(r);return i.config=function(n){return t(e,n)},i};ut("Linear,Quad,Cubic,Quart,Quint,Strong",(function(t,e){var n=e<5?e+1:e;He(t+",Power"+(n-1),e?function(t){return Math.pow(t,n)}:function(t){return t},(function(t){return 1-Math.pow(1-t,n)}),(function(t){return t<.5?Math.pow(2*t,n)/2:1-Math.pow(2*(1-t),n)/2}))})),Le.Linear.easeNone=Le.none=Le.Linear.easeIn,He("Elastic",Ke("in"),Ke("out"),Ke()),function(t,e){var n=1/e,r=2*n,i=2.5*n,s=function(s){return s<n?t*s*s:s<r?t*Math.pow(s-1.5/e,2)+.75:s<i?t*(s-=2.25/e)*s+.9375:t*Math.pow(s-2.625/e,2)+.984375};He("Bounce",(function(t){return 1-s(1-t)}),s)}(7.5625,2.75),He("Expo",(function(t){return t?Math.pow(2,10*(t-1)):0})),He("Circ",(function(t){return-(E(1-t*t)-1)})),He("Sine",(function(t){return 1===t?1:1-C(t*b)})),He("Back",Ge("in"),Ge("out"),Ge()),Le.SteppedEase=Le.steps=$.SteppedEase={config:function(t,e){void 0===t&&(t=1);var n=1/t,r=t+(e?0:1),i=e?1:0,s=1-v;return function(t){return((r*Jt(0,s,t)|0)+i)*n}}},y.ease=Le["quad.out"],ut("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",(function(t){return ot+=t+","+t+"Params,"}));var Ye=function(t,e){this.id=T++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:lt,this.set=e?e.getSetter:yn},Xe=function(){function t(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Wt(this,+t.duration,1,1),this.data=t.data,a&&(this._ctx=a,a.data.push(this)),g||Pe.wake()}var e=t.prototype;return e.delay=function(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},e.duration=function(t){return arguments.length?this.totalDuration(this._repeat>0?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},e.totalDuration=function(t){return arguments.length?(this._dirty=0,Wt(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(t,e){if(Me(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){Ft(this,t),!n._dp||n.parent||Ut(n,this);while(n&&n.parent)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&t<this._tDur||this._ts<0&&t>0||!this._tDur&&!t)&&Vt(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===v||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),mt(this,t,e)),this},e.time=function(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Ot(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time},e.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+Ot(this),e):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(t,e){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*n,e):this._repeat?Pt(this._tTime,n)+1:1},e.timeScale=function(t,e){if(!arguments.length)return this._rts===-v?0:this._rts;if(this._rts===t)return this;var n=this.parent&&this._ts?Mt(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-v?0:this._rts,this.totalTime(Jt(-Math.abs(this._delay),this._tDur,n),!1!==e),Lt(this),Dt(this)},e.paused=function(t){return arguments.length?(this._ps!==t&&(this._ps=t,t?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Me(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==v&&(this._tTime-=v)))),this):this._ps},e.startTime=function(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return e&&(e._sort||!this.parent)&&Vt(e,this,t-this._delay),this}return this._start},e.endTime=function(t){return this._start+(R(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Mt(e.rawTime(t),this):this._tTime:this._tTime},e.revert=function(t){void 0===t&&(t=J);var e=o;return o=t,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),"nested"!==this.data&&!1!==t.kill&&this.kill(),o=e,this},e.globalTime=function(t){var e=this,n=arguments.length?t:e.rawTime();while(e)n=e._start+n/(Math.abs(e._ts)||1),e=e._dp;return!this.parent&&this._sat?this._sat.globalTime(t):n},e.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,Kt(this)):-2===this._repeat?1/0:this._repeat},e.repeatDelay=function(t){if(arguments.length){var e=this._time;return this._rDelay=t,Kt(this),e?this.time(e):this}return this._rDelay},e.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},e.seek=function(t,e){return this.totalTime(Yt(this,t),R(e))},e.restart=function(t,e){return this.play().totalTime(t?-this._delay:0,R(e))},e.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},e.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},e.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-v:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-v,this},e.isActive=function(){var t,e=this.parent||this._dp,n=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=n&&t<this.endTime(!0)-v))},e.eventCallback=function(t,e,n){var r=this.vars;return arguments.length>1?(e?(r[t]=e,n&&(r[t+"Params"]=n),"onUpdate"===t&&(this._onUpdate=e)):delete r[t],this):r[t]},e.then=function(t){var e=this;return new Promise((function(n){var r=I(t)?t:_t,i=function(){var t=e.then;e.then=null,I(r)&&(r=r(e))&&(r.then||r===e)&&(e.then=t),n(r),e.then=t};e._initted&&1===e.totalProgress()&&e._ts>=0||!e._tTime&&e._ts<0?i():e._prom=i}))},e.kill=function(){Te(this)},t}();vt(Xe.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-v,_prom:0,_ps:!1,_rts:1});var Qe=function(t){function e(e,n){var i;return void 0===e&&(e={}),i=t.call(this,e)||this,i.labels={},i.smoothChildTiming=!!e.smoothChildTiming,i.autoRemoveChildren=!!e.autoRemoveChildren,i._sort=R(e.sortChildren),c&&Vt(e.parent||c,r(i),n),e.reversed&&i.reverse(),e.paused&&i.paused(!0),e.scrollTrigger&&jt(r(i),e.scrollTrigger),i}i(e,t);var n=e.prototype;return n.to=function(t,e,n){return Xt(0,arguments,this),this},n.from=function(t,e,n){return Xt(1,arguments,this),this},n.fromTo=function(t,e,n,r){return Xt(2,arguments,this),this},n.set=function(t,e,n){return e.duration=0,e.parent=this,Ct(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new dn(t,e,Yt(this,n),1),this},n.call=function(t,e,n){return Vt(this,dn.delayedCall(0,t,e),n)},n.staggerTo=function(t,e,n,r,i,s,o){return n.duration=e,n.stagger=n.stagger||r,n.onComplete=s,n.onCompleteParams=o,n.parent=this,new dn(t,n,Yt(this,i)),this},n.staggerFrom=function(t,e,n,r,i,s,o){return n.runBackwards=1,Ct(n).immediateRender=R(n.immediateRender),this.staggerTo(t,e,n,r,i,s,o)},n.staggerFromTo=function(t,e,n,r,i,s,o,a){return r.startAt=n,Ct(r).immediateRender=R(r.immediateRender),this.staggerTo(t,e,r,i,s,o,a)},n.render=function(t,e,n){var r,i,s,a,l,u,h,d,f,p,g,m,y=this._time,_=this._dirty?this.totalDuration():this._tDur,w=this._dur,b=t<=0?0:dt(t),T=this._zTime<0!==t<0&&(this._initted||!w);if(this!==c&&b>_&&t>=0&&(b=_),b!==this._tTime||n||T){if(y!==this._time&&w&&(b+=this._time-y,t+=this._time-y),r=b,f=this._start,d=this._ts,u=!d,T&&(w||(y=this._zTime),(t||!e)&&(this._zTime=t)),this._repeat){if(g=this._yoyo,l=w+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*l+t,e,n);if(r=dt(b%l),b===_?(a=this._repeat,r=w):(a=~~(b/l),a&&a===b/l&&(r=w,a--),r>w&&(r=w)),p=Pt(this._tTime,l),!y&&this._tTime&&p!==a&&this._tTime-p*l-this._dur<=0&&(p=a),g&&1&a&&(r=w-r,m=1),a!==p&&!this._lock){var E=g&&1&p,C=E===(g&&1&a);if(a<p&&(E=!E),y=E?0:b%w?w:b,this._lock=1,this.render(y||(m?0:dt(a*l)),e,!w)._lock=0,this._tTime=b,!e&&this.parent&&be(this,"onRepeat"),this.vars.repeatRefresh&&!m&&(this.invalidate()._lock=1),y&&y!==this._time||u!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(w=this._dur,_=this._tDur,C&&(this._lock=2,y=E?w:-1e-4,this.render(y,!0),this.vars.repeatRefresh&&!m&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;$e(this,m)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=Ht(this,dt(y),dt(r)),h&&(b-=r-(r=h._start))),this._tTime=b,this._time=r,this._act=!d,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,y=0),!y&&r&&!e&&!a&&(be(this,"onStart"),this._tTime!==b))return this;if(r>=y&&t>=0){i=this._first;while(i){if(s=i._next,(i._act||r>=i._start)&&i._ts&&h!==i){if(i.parent!==this)return this.render(t,e,n);if(i.render(i._ts>0?(r-i._start)*i._ts:(i._dirty?i.totalDuration():i._tDur)+(r-i._start)*i._ts,e,n),r!==this._time||!this._ts&&!u){h=0,s&&(b+=this._zTime=-v);break}}i=s}}else{i=this._last;var S=t<0?t:r;while(i){if(s=i._prev,(i._act||S<=i._end)&&i._ts&&h!==i){if(i.parent!==this)return this.render(t,e,n);if(i.render(i._ts>0?(S-i._start)*i._ts:(i._dirty?i.totalDuration():i._tDur)+(S-i._start)*i._ts,e,n||o&&(i._initted||i._startAt)),r!==this._time||!this._ts&&!u){h=0,s&&(b+=this._zTime=S?-v:v);break}}i=s}}if(h&&!e&&(this.pause(),h.render(r>=y?0:-v)._zTime=r>=y?1:-1,this._ts))return this._start=f,Lt(this),this.render(t,e,n);this._onUpdate&&!e&&be(this,"onUpdate",!0),(b===_&&this._tTime>=this.totalDuration()||!b&&y)&&(f!==this._start&&Math.abs(d)===Math.abs(this._ts)||this._lock||((t||!w)&&(b===_&&this._ts>0||!b&&this._ts<0)&&xt(this,1),e||t<0&&!y||!b&&!y&&_||(be(this,b===_&&t>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(b<_&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(t,e){var n=this;if(x(e)||(e=Yt(this,e,t)),!(t instanceof Xe)){if(M(t))return t.forEach((function(t){return n.add(t,e)})),this;if(k(t))return this.addLabel(t,e);if(!I(t))return this;t=dn.delayedCall(0,t)}return this!==t?Vt(this,t,e):this},n.getChildren=function(t,e,n,r){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===n&&(n=!0),void 0===r&&(r=-_);var i=[],s=this._first;while(s)s._start>=r&&(s instanceof dn?e&&i.push(s):(n&&i.push(s),t&&i.push.apply(i,s.getChildren(!0,e,n)))),s=s._next;return i},n.getById=function(t){var e=this.getChildren(1,1,1),n=e.length;while(n--)if(e[n].vars.id===t)return e[n]},n.remove=function(t){return k(t)?this.removeLabel(t):I(t)?this.killTweensOf(t):(It(this,t),t===this._recent&&(this._recent=this._last),At(this))},n.totalTime=function(e,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=dt(Pe.time-(this._ts>0?e/this._ts:(this.totalDuration()-e)/-this._ts))),t.prototype.totalTime.call(this,e,n),this._forcing=0,this):this._tTime},n.addLabel=function(t,e){return this.labels[t]=Yt(this,e),this},n.removeLabel=function(t){return delete this.labels[t],this},n.addPause=function(t,e,n){var r=dn.delayedCall(0,e||Y,n);return r.data="isPause",this._hasPause=1,Vt(this,r,Yt(this,t))},n.removePause=function(t){var e=this._first;t=Yt(this,t);while(e)e._start===t&&"isPause"===e.data&&xt(e),e=e._next},n.killTweensOf=function(t,e,n){var r=this.getTweensOf(t,n),i=r.length;while(i--)Je!==r[i]&&r[i].kill(t,e);return this},n.getTweensOf=function(t,e){var n,r=[],i=ie(t),s=this._first,o=x(e);while(s)s instanceof dn?pt(s._targets,i)&&(o?(!Je||s._initted&&s._ts)&&s.globalTime(0)<=e&&s.globalTime(s.totalDuration())>e:!e||s.isActive())&&r.push(s):(n=s.getTweensOf(i,e)).length&&r.push.apply(r,n),s=s._next;return r},n.tweenTo=function(t,e){e=e||{};var n,r=this,i=Yt(r,t),s=e,o=s.startAt,a=s.onStart,c=s.onStartParams,l=s.immediateRender,u=dn.to(r,vt({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:i,overwrite:"auto",duration:e.duration||Math.abs((i-(o&&"time"in o?o.time:r._time))/r.timeScale())||v,onStart:function(){if(r.pause(),!n){var t=e.duration||Math.abs((i-(o&&"time"in o?o.time:r._time))/r.timeScale());u._dur!==t&&Wt(u,t,0,1).render(u._time,!0,!0),n=1}a&&a.apply(u,c||[])}},e));return l?u.render(0):u},n.tweenFromTo=function(t,e,n){return this.tweenTo(e,vt({startAt:{time:Yt(this,t)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(t){return void 0===t&&(t=this._time),we(this,Yt(this,t))},n.previousLabel=function(t){return void 0===t&&(t=this._time),we(this,Yt(this,t),1)},n.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+v)},n.shiftChildren=function(t,e,n){void 0===n&&(n=0);var r,i=this._first,s=this.labels;while(i)i._start>=n&&(i._start+=t,i._end+=t),i=i._next;if(e)for(r in s)s[r]>=n&&(s[r]+=t);return At(this)},n.invalidate=function(e){var n=this._first;this._lock=0;while(n)n.invalidate(e),n=n._next;return t.prototype.invalidate.call(this,e)},n.clear=function(t){void 0===t&&(t=!0);var e,n=this._first;while(n)e=n._next,this.remove(n),n=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),At(this)},n.totalDuration=function(t){var e,n,r,i=0,s=this,o=s._last,a=_;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-t:t));if(s._dirty){r=s.parent;while(o)e=o._prev,o._dirty&&o.totalDuration(),n=o._start,n>a&&s._sort&&o._ts&&!s._lock?(s._lock=1,Vt(s,o,n-o._delay,1)._lock=0):a=n,n<0&&o._ts&&(i-=n,(!r&&!s._dp||r&&r.smoothChildTiming)&&(s._start+=n/s._ts,s._time-=n,s._tTime-=n),s.shiftChildren(-n,!1,-Infinity),a=0),o._end>i&&o._ts&&(i=o._end),o=e;Wt(s,s===c&&s._time>i?s._time:i,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(t){if(c._ts&&(mt(c,Mt(t,c)),f=Pe.frame),Pe.frame>=it){it+=m.autoSleep||120;var e=c._first;if((!e||!e._ts)&&m.autoSleep&&Pe._listeners.length<2){while(e&&!e._ts)e=e._next;e||Pe.sleep()}}},e}(Xe);vt(Qe.prototype,{_lock:0,_hasPause:0,_forcing:0});var Je,Ze,tn=function(t,e,n,r,i,s,o){var a,c,l,u,h,d,f,p,g=new kn(this._pt,t,e,0,1,wn,null,i),m=0,y=0;g.b=n,g.e=r,n+="",r+="",(f=~r.indexOf("random("))&&(r=ye(r)),s&&(p=[n,r],s(p,t,e),n=p[0],r=p[1]),c=n.match(V)||[];while(a=V.exec(r))u=a[0],h=r.substring(m,a.index),l?l=(l+1)%5:"rgba("===h.substr(-5)&&(l=1),u!==c[y++]&&(d=parseFloat(c[y-1])||0,g._pt={_next:g._pt,p:h||1===y?h:",",s:d,c:"="===u.charAt(1)?ft(d,u)-d:parseFloat(u)-d,m:l&&l<4?Math.round:0},m=V.lastIndex);return g.c=m<r.length?r.substring(m,r.length):"",g.fp=o,(j.test(r)||f)&&(g.e=0),this._pt=g,g},en=function(t,e,n,r,i,s,o,a,c,l){I(r)&&(r=r(i||0,t,s));var u,h=t[e],d="get"!==n?n:I(h)?c?t[e.indexOf("set")||!I(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,f=I(h)?c?gn:pn:fn;if(k(r)&&(~r.indexOf("random(")&&(r=ye(r)),"="===r.charAt(1)&&(u=ft(d,r)+(Zt(d)||0),(u||0===u)&&(r=u))),!l||d!==r||Ze)return isNaN(d*r)||""===r?(!h&&!(e in t)&&W(e,r),tn.call(this,t,e,d,r,f,a||m.stringFilter,c)):(u=new kn(this._pt,t,e,+d||0,r-(d||0),"boolean"===typeof h?vn:_n,0,f),c&&(u.fp=c),o&&u.modifier(o,this,t),this._pt=u)},nn=function(t,e,n,r,i){if(I(t)&&(t=ln(t,i,e,n,r)),!D(t)||t.style&&t.nodeType||M(t)||P(t))return k(t)?ln(t,i,e,n,r):t;var s,o={};for(s in t)o[s]=ln(t[s],i,e,n,r);return o},rn=function(t,e,n,r,i,s){var o,a,c,l;if(nt[t]&&!1!==(o=new nt[t]).init(i,o.rawVars?e[t]:nn(e[t],r,i,s,n),n,r,s)&&(n._pt=a=new kn(n._pt,i,t,0,1,o.render,o,0,o.priority),n!==p)){c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;while(l--)c[o._props[l]]=a}return o},sn=function t(e,n,r){var i,a,l,u,h,d,f,p,g,m,w,b,T,E=e.vars,C=E.ease,S=E.startAt,k=E.immediateRender,I=E.lazy,x=E.onUpdate,A=E.runBackwards,D=E.yoyoEase,N=E.keyframes,O=E.autoRevert,P=e._dur,M=e._startAt,L=e._targets,F=e.parent,U=F&&"nested"===F.data?F.vars.targets:L,V="auto"===e._overwrite&&!s,j=e.timeline;if(j&&(!N||!C)&&(C="none"),e._ease=ze(C,y.ease),e._yEase=D?Be(ze(!0===D?C:D,y.ease)):0,D&&e._yoyo&&!e._repeat&&(D=e._yEase,e._yEase=e._ease,e._ease=D),e._from=!j&&!!E.runBackwards,!j||N&&!E.stagger){if(p=L[0]?ct(L[0]).harness:0,b=p&&E[p.prop],i=Et(E,Z),M&&(M._zTime<0&&M.progress(1),n<0&&A&&k&&!O?M.render(-1,!0):M.revert(A&&P?Q:X),M._lazy=0),S){if(xt(e._startAt=dn.set(L,vt({data:"isStart",overwrite:!1,parent:F,immediateRender:!0,lazy:!M&&R(I),startAt:null,delay:0,onUpdate:x&&function(){return be(e,"onUpdate")},stagger:0},S))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(o||!k&&!O)&&e._startAt.revert(Q),k&&P&&n<=0&&r<=0)return void(n&&(e._zTime=n))}else if(A&&P&&!M)if(n&&(k=!1),l=vt({overwrite:!1,data:"isFromStart",lazy:k&&!M&&R(I),immediateRender:k,stagger:0,parent:F},i),b&&(l[p.prop]=b),xt(e._startAt=dn.set(L,l)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(o?e._startAt.revert(Q):e._startAt.render(-1,!0)),e._zTime=n,k){if(!n)return}else t(e._startAt,v,v);for(e._pt=e._ptCache=0,I=P&&R(I)||I&&!P,a=0;a<L.length;a++){if(h=L[a],f=h._gsap||at(L)[a]._gsap,e._ptLookup[a]=m={},et[f.id]&&tt.length&&gt(),w=U===L?a:U.indexOf(h),p&&!1!==(g=new p).init(h,b||i,e,w,U)&&(e._pt=u=new kn(e._pt,h,g.name,0,1,g.render,g,0,g.priority),g._props.forEach((function(t){m[t]=u})),g.priority&&(d=1)),!p||b)for(l in i)nt[l]&&(g=rn(l,i,e,w,h,U))?g.priority&&(d=1):m[l]=u=en.call(e,h,l,"get",i[l],w,U,0,E.stringFilter);e._op&&e._op[a]&&e.kill(h,e._op[a]),V&&e._pt&&(Je=e,c.killTweensOf(h,m,e.globalTime(n)),T=!e.parent,Je=0),e._pt&&I&&(et[f.id]=1)}d&&Sn(e),e._onInit&&e._onInit(e)}e._onUpdate=x,e._initted=(!e._op||e._pt)&&!T,N&&n<=0&&j.render(_,!0,!0)},on=function(t,e,n,r,i,s,o,a){var c,l,u,h,d=(t._pt&&t._ptCache||(t._ptCache={}))[e];if(!d){d=t._ptCache[e]=[],u=t._ptLookup,h=t._targets.length;while(h--){if(c=u[h][e],c&&c.d&&c.d._pt){c=c.d._pt;while(c&&c.p!==e&&c.fp!==e)c=c._next}if(!c)return Ze=1,t.vars[e]="+=0",sn(t,o),Ze=0,a?K(e+" not eligible for reset"):1;d.push(c)}}h=d.length;while(h--)l=d[h],c=l._pt||l,c.s=!r&&0!==r||i?c.s+(r||0)+s*c.c:r,c.c=n-c.s,l.e&&(l.e=ht(n)+Zt(l.e)),l.b&&(l.b=c.s+Zt(l.b))},an=function(t,e){var n,r,i,s,o=t[0]?ct(t[0]).harness:0,a=o&&o.aliases;if(!a)return e;for(r in n=bt({},e),a)if(r in n){s=a[r].split(","),i=s.length;while(i--)n[s[i]]=n[r]}return n},cn=function(t,e,n,r){var i,s,o=e.ease||r||"power1.inOut";if(M(e))s=n[t]||(n[t]=[]),e.forEach((function(t,n){return s.push({t:n/(e.length-1)*100,v:t,e:o})}));else for(i in e)s=n[i]||(n[i]=[]),"ease"===i||s.push({t:parseFloat(t),v:e[i],e:o})},ln=function(t,e,n,r,i){return I(t)?t.call(e,n,r,i):k(t)&&~t.indexOf("random(")?ye(t):t},un=ot+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",hn={};ut(un+",id,stagger,delay,duration,paused,scrollTrigger",(function(t){return hn[t]=1}));var dn=function(t){function e(e,n,i,o){var a;"number"===typeof n&&(i.duration=n,n=i,i=null),a=t.call(this,o?n:Ct(n))||this;var l,u,h,d,f,p,g,y,_=a.vars,w=_.duration,b=_.delay,T=_.immediateRender,E=_.stagger,C=_.overwrite,S=_.keyframes,k=_.defaults,I=_.scrollTrigger,A=_.yoyoEase,N=n.parent||c,L=(M(e)||P(e)?x(e[0]):"length"in n)?[e]:ie(e);if(a._targets=L.length?at(L):K("GSAP target "+e+" not found. https://gsap.com",!m.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=C,S||E||O(w)||O(b)){if(n=a.vars,l=a.timeline=new Qe({data:"nested",defaults:k||{},targets:N&&"nested"===N.data?N.vars.targets:L}),l.kill(),l.parent=l._dp=r(a),l._start=0,E||O(w)||O(b)){if(d=L.length,g=E&&ae(E),D(E))for(f in E)~un.indexOf(f)&&(y||(y={}),y[f]=E[f]);for(u=0;u<d;u++)h=Et(n,hn),h.stagger=0,A&&(h.yoyoEase=A),y&&bt(h,y),p=L[u],h.duration=+ln(w,r(a),u,p,L),h.delay=(+ln(b,r(a),u,p,L)||0)-a._delay,!E&&1===d&&h.delay&&(a._delay=b=h.delay,a._start+=b,h.delay=0),l.to(p,h,g?g(u,p,L):0),l._ease=Le.none;l.duration()?w=b=0:a.timeline=0}else if(S){Ct(vt(l.vars.defaults,{ease:"none"})),l._ease=ze(S.ease||n.ease||"none");var F,U,V,j=0;if(M(S))S.forEach((function(t){return l.to(L,t,">")})),l.duration();else{for(f in h={},S)"ease"===f||"easeEach"===f||cn(f,S[f],h,S.easeEach);for(f in h)for(F=h[f].sort((function(t,e){return t.t-e.t})),j=0,u=0;u<F.length;u++)U=F[u],V={ease:U.e,duration:(U.t-(u?F[u-1].t:0))/100*w},V[f]=U.v,l.to(L,V,j),j+=V.duration;l.duration()<w&&l.to({},{duration:w-l.duration()})}}w||a.duration(w=l.duration())}else a.timeline=0;return!0!==C||s||(Je=r(a),c.killTweensOf(L),Je=0),Vt(N,r(a),i),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(T||!w&&!S&&a._start===dt(N._time)&&R(T)&&Nt(r(a))&&"nested"!==N.data)&&(a._tTime=-v,a.render(Math.max(0,-b)||0)),I&&jt(r(a),I),a}i(e,t);var n=e.prototype;return n.render=function(t,e,n){var r,i,s,o,a,c,l,u,h,d=this._time,f=this._tDur,p=this._dur,g=t<0,m=t>f-v&&!g?f:t<v?0:t;if(p){if(m!==this._tTime||!t||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==g){if(r=m,u=this.timeline,this._repeat){if(o=p+this._rDelay,this._repeat<-1&&g)return this.totalTime(100*o+t,e,n);if(r=dt(m%o),m===f?(s=this._repeat,r=p):(s=~~(m/o),s&&s===dt(m/o)&&(r=p,s--),r>p&&(r=p)),c=this._yoyo&&1&s,c&&(h=this._yEase,r=p-r),a=Pt(this._tTime,o),r===d&&!n&&this._initted&&s===a)return this._tTime=m,this;s!==a&&(u&&this._yEase&&$e(u,c),this.vars.repeatRefresh&&!c&&!this._lock&&this._time!==o&&this._initted&&(this._lock=n=1,this.render(dt(o*s),!0).invalidate()._lock=0))}if(!this._initted){if(qt(this,g?t:r,n,e,m))return this._tTime=0,this;if(d!==this._time&&(!n||!this.vars.repeatRefresh||s===a))return this;if(p!==this._dur)return this.render(t,e,n)}if(this._tTime=m,this._time=r,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=l=(h||this._ease)(r/p),this._from&&(this.ratio=l=1-l),r&&!d&&!e&&!s&&(be(this,"onStart"),this._tTime!==m))return this;i=this._pt;while(i)i.r(l,i.d),i=i._next;u&&u.render(t<0?t:u._dur*u._ease(r/this._dur),e,n)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(g&&Rt(this,t,e,n),be(this,"onUpdate")),this._repeat&&s!==a&&this.vars.onRepeat&&!e&&this.parent&&be(this,"onRepeat"),m!==this._tDur&&m||this._tTime!==m||(g&&!this._onUpdate&&Rt(this,t,!0,!0),(t||!p)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&xt(this,1),e||g&&!d||!(m||d||c)||(be(this,m===f?"onComplete":"onReverseComplete",!0),this._prom&&!(m<f&&this.timeScale()>0)&&this._prom()))}}else zt(this,t,e,n);return this},n.targets=function(){return this._targets},n.invalidate=function(e){return(!e||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(e),t.prototype.invalidate.call(this,e)},n.resetTo=function(t,e,n,r,i){g||Pe.wake(),this._ts||this.play();var s,o=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return this._initted||sn(this,o),s=this._ease(o/this._dur),on(this,t,e,n,r,s,o,i)?this.resetTo(t,e,n,r,1):(Ft(this,0),this.parent||kt(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(t,e){if(void 0===e&&(e="all"),!t&&(!e||"all"===e))return this._lazy=this._pt=0,this.parent?Te(this):this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,Je&&!0!==Je.vars.overwrite)._first||Te(this),this.parent&&n!==this.timeline.totalDuration()&&Wt(this,this._dur*this.timeline._tDur/n,0,1),this}var r,i,s,o,a,c,l,u=this._targets,h=t?ie(t):u,d=this._ptLookup,f=this._pt;if((!e||"all"===e)&&St(u,h))return"all"===e&&(this._pt=0),Te(this);r=this._op=this._op||[],"all"!==e&&(k(e)&&(a={},ut(e,(function(t){return a[t]=1})),e=a),e=an(u,e)),l=u.length;while(l--)if(~h.indexOf(u[l]))for(a in i=d[l],"all"===e?(r[l]=e,o=i,s={}):(s=r[l]=r[l]||{},o=e),o)c=i&&i[a],c&&("kill"in c.d&&!0!==c.d.kill(a)||It(this,c,"_pt"),delete i[a]),"all"!==s&&(s[a]=1);return this._initted&&!this._pt&&f&&Te(this),this},e.to=function(t,n){return new e(t,n,arguments[2])},e.from=function(t,e){return Xt(1,arguments)},e.delayedCall=function(t,n,r,i){return new e(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},e.fromTo=function(t,e,n){return Xt(2,arguments)},e.set=function(t,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new e(t,n)},e.killTweensOf=function(t,e,n){return c.killTweensOf(t,e,n)},e}(Xe);vt(dn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ut("staggerTo,staggerFrom,staggerFromTo",(function(t){dn[t]=function(){var e=new Qe,n=ee.call(arguments,0);return n.splice("staggerFromTo"===t?5:4,0,0),e[t].apply(e,n)}}));var fn=function(t,e,n){return t[e]=n},pn=function(t,e,n){return t[e](n)},gn=function(t,e,n,r){return t[e](r.fp,n)},mn=function(t,e,n){return t.setAttribute(e,n)},yn=function(t,e){return I(t[e])?pn:A(t[e])&&t.setAttribute?mn:fn},_n=function(t,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*t))/1e6,e)},vn=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},wn=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(1===t&&e.e)r=e.e;else{while(n)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round(1e4*(n.s+n.c*t))/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},bn=function(t,e){var n=e._pt;while(n)n.r(t,n.d),n=n._next},Tn=function(t,e,n,r){var i,s=this._pt;while(s)i=s._next,s.p===r&&s.modifier(t,e,n),s=i},En=function(t){var e,n,r=this._pt;while(r)n=r._next,r.p===t&&!r.op||r.op===t?It(this,r,"_pt"):r.dep||(e=1),r=n;return!e},Cn=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},Sn=function(t){var e,n,r,i,s=t._pt;while(s){e=s._next,n=r;while(n&&n.pr>s.pr)n=n._next;(s._prev=n?n._prev:i)?s._prev._next=s:r=s,(s._next=n)?n._prev=s:i=s,s=e}t._pt=r},kn=function(){function t(t,e,n,r,i,s,o,a,c){this.t=e,this.s=r,this.c=i,this.p=n,this.r=s||_n,this.d=o||this,this.set=a||fn,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=t.prototype;return e.modifier=function(t,e,n){this.mSet=this.mSet||this.set,this.set=Cn,this.m=t,this.mt=n,this.tween=e},t}();ut(ot+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",(function(t){return Z[t]=1})),$.TweenMax=$.TweenLite=dn,$.TimelineLite=$.TimelineMax=Qe,c=new Qe({sortChildren:!1,defaults:y,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),m.stringFilter=Oe;var In=[],xn={},An=[],Dn=0,Rn=0,Nn=function(t){return(xn[t]||An).map((function(t){return t()}))},On=function(){var t=Date.now(),e=[];t-Dn>2&&(Nn("matchMediaInit"),In.forEach((function(t){var n,r,i,s,o=t.queries,a=t.conditions;for(r in o)n=l.matchMedia(o[r]).matches,n&&(i=1),n!==a[r]&&(a[r]=n,s=1);s&&(t.revert(),i&&e.push(t))})),Nn("matchMediaRevert"),e.forEach((function(t){return t.onMatch(t,(function(e){return t.add(null,e)}))})),Dn=t,Nn("matchMedia"))},Pn=function(){function t(t,e){this.selector=e&&se(e),this.data=[],this._r=[],this.isReverted=!1,this.id=Rn++,t&&this.add(t)}var e=t.prototype;return e.add=function(t,e,n){I(t)&&(n=e,e=t,t=I);var r=this,i=function(){var t,i=a,s=r.selector;return i&&i!==r&&i.data.push(r),n&&(r.selector=se(n)),a=r,t=e.apply(r,arguments),I(t)&&r._r.push(t),a=i,r.selector=s,r.isReverted=!1,t};return r.last=i,t===I?i(r,(function(t){return r.add(null,t)})):t?r[t]=i:i},e.ignore=function(t){var e=a;a=null,t(this),a=e},e.getTweens=function(){var e=[];return this.data.forEach((function(n){return n instanceof t?e.push.apply(e,n.getTweens()):n instanceof dn&&!(n.parent&&"nested"===n.parent.data)&&e.push(n)})),e},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(t,e){var n=this;if(t?function(){var e,r=n.getTweens(),i=n.data.length;while(i--)e=n.data[i],"isFlip"===e.data&&(e.revert(),e.getChildren(!0,!0,!1).forEach((function(t){return r.splice(r.indexOf(t),1)})));r.map((function(t){return{g:t._dur||t._delay||t._sat&&!t._sat.vars.immediateRender?t.globalTime(0):-1/0,t:t}})).sort((function(t,e){return e.g-t.g||-1/0})).forEach((function(e){return e.t.revert(t)})),i=n.data.length;while(i--)e=n.data[i],e instanceof Qe?"nested"!==e.data&&(e.scrollTrigger&&e.scrollTrigger.revert(),e.kill()):!(e instanceof dn)&&e.revert&&e.revert(t);n._r.forEach((function(e){return e(t,n)})),n.isReverted=!0}():this.data.forEach((function(t){return t.kill&&t.kill()})),this.clear(),e){var r=In.length;while(r--)In[r].id===this.id&&In.splice(r,1)}},e.revert=function(t){this.kill(t||{})},t}(),Mn=function(){function t(t){this.contexts=[],this.scope=t,a&&a.data.push(this)}var e=t.prototype;return e.add=function(t,e,n){D(t)||(t={matches:t});var r,i,s,o=new Pn(0,n||this.scope),c=o.conditions={};for(i in a&&!o.selector&&(o.selector=a.selector),this.contexts.push(o),e=o.add("onMatch",e),o.queries=t,t)"all"===i?s=1:(r=l.matchMedia(t[i]),r&&(In.indexOf(o)<0&&In.push(o),(c[i]=r.matches)&&(s=1),r.addListener?r.addListener(On):r.addEventListener("change",On)));return s&&e(o,(function(t){return o.add(null,t)})),this},e.revert=function(t){this.kill(t||{})},e.kill=function(t){this.contexts.forEach((function(e){return e.kill(t,!0)}))},t}(),Ln={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach((function(t){return Ce(t)}))},timeline:function(t){return new Qe(t)},getTweensOf:function(t,e){return c.getTweensOf(t,e)},getProperty:function(t,e,n,r){k(t)&&(t=ie(t)[0]);var i=ct(t||{}).get,s=n?_t:yt;return"native"===n&&(n=""),t?e?s((nt[e]&&nt[e].get||i)(t,e,n,r)):function(e,n,r){return s((nt[e]&&nt[e].get||i)(t,e,n,r))}:t},quickSetter:function(t,e,n){if(t=ie(t),t.length>1){var r=t.map((function(t){return jn.quickSetter(t,e,n)})),i=r.length;return function(t){var e=i;while(e--)r[e](t)}}t=t[0]||{};var s=nt[e],o=ct(t),a=o.harness&&(o.harness.aliases||{})[e]||e,c=s?function(e){var r=new s;p._pt=0,r.init(t,n?e+n:e,p,0,[t]),r.render(1,r),p._pt&&bn(1,p)}:o.set(t,a);return s?c:function(e){return c(t,a,n?e+n:e,o,1)}},quickTo:function(t,e,n){var r,i=jn.to(t,bt((r={},r[e]="+=0.1",r.paused=!0,r),n||{})),s=function(t,n,r){return i.resetTo(e,t,n,r)};return s.tween=i,s},isTweening:function(t){return c.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ze(t.ease,y.ease)),Tt(y,t||{})},config:function(t){return Tt(m,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,i=t.defaults,s=t.extendTimeline;(r||"").split(",").forEach((function(t){return t&&!nt[t]&&!$[t]&&K(e+" effect requires "+t+" plugin.")})),rt[e]=function(t,e,r){return n(ie(t),vt(e||{},i),r)},s&&(Qe.prototype[e]=function(t,n,r){return this.add(rt[e](t,D(n)?n:(r=n)&&{},this),r)})},registerEase:function(t,e){Le[t]=ze(e)},parseEase:function(t,e){return arguments.length?ze(t,e):Le},getById:function(t){return c.getById(t)},exportRoot:function(t,e){void 0===t&&(t={});var n,r,i=new Qe(t);i.smoothChildTiming=R(t.smoothChildTiming),c.remove(i),i._dp=0,i._time=i._tTime=c._time,n=c._first;while(n)r=n._next,!e&&!n._dur&&n instanceof dn&&n.vars.onComplete===n._targets[0]||Vt(i,n,n._start-n._delay),n=r;return Vt(c,i,0),i},context:function(t,e){return t?new Pn(t,e):a},matchMedia:function(t){return new Mn(t)},matchMediaRefresh:function(){return In.forEach((function(t){var e,n,r=t.conditions;for(n in r)r[n]&&(r[n]=!1,e=1);e&&t.revert()}))||On()},addEventListener:function(t,e){var n=xn[t]||(xn[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=xn[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:ge,wrapYoyo:me,distribute:ae,random:ue,snap:le,normalize:fe,getUnit:Zt,clamp:te,splitColor:xe,toArray:ie,selector:se,mapRange:_e,pipe:he,unitize:de,interpolate:ve,shuffle:oe},install:H,effects:rt,ticker:Pe,updateRoot:Qe.updateRoot,plugins:nt,globalTimeline:c,core:{PropTween:kn,globals:G,Tween:dn,Timeline:Qe,Animation:Xe,getCache:ct,_removeLinkedListItem:It,reverting:function(){return o},context:function(t){return t&&a&&(a.data.push(t),t._ctx=a),a},suppressOverwrites:function(t){return s=t}}};ut("to,from,fromTo,delayedCall,set,killTweensOf",(function(t){return Ln[t]=dn[t]})),Pe.add(Qe.updateRoot),p=Ln.to({},{duration:0});var Fn=function(t,e){var n=t._pt;while(n&&n.p!==e&&n.op!==e&&n.fp!==e)n=n._next;return n},Un=function(t,e){var n,r,i,s=t._targets;for(n in e){r=s.length;while(r--)i=t._ptLookup[r][n],i&&(i=i.d)&&(i._pt&&(i=Fn(i,n)),i&&i.modifier&&i.modifier(e[n],t,s[r],n))}},Vn=function(t,e){return{name:t,rawVars:1,init:function(t,n,r){r._onInit=function(t){var r,i;if(k(n)&&(r={},ut(n,(function(t){return r[t]=1})),n=r),e){for(i in r={},n)r[i]=e(n[i]);n=r}Un(t,n)}}}},jn=Ln.registerPlugin({name:"attr",init:function(t,e,n,r,i){var s,o,a;for(s in this.tween=n,e)a=t.getAttribute(s)||"",o=this.add(t,"setAttribute",(a||0)+"",e[s],r,i,0,0,s),o.op=s,o.b=a,this._props.push(s)},render:function(t,e){var n=e._pt;while(n)o?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){var n=e.length;while(n--)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Vn("roundProps",ce),Vn("modifiers"),Vn("snap",le))||Ln;dn.version=Qe.version=jn.version="3.12.5",d=1,N()&&Me();Le.Power0,Le.Power1,Le.Power2,Le.Power3,Le.Power4,Le.Linear,Le.Quad,Le.Cubic,Le.Quart,Le.Quint,Le.Strong,Le.Elastic,Le.Back,Le.SteppedEase,Le.Bounce,Le.Sine,Le.Expo,Le.Circ;var qn,Bn,$n,zn,Hn,Wn,Kn,Gn,Yn=function(){return"undefined"!==typeof window},Xn={},Qn=180/Math.PI,Jn=Math.PI/180,Zn=Math.atan2,tr=1e8,er=/([A-Z])/g,nr=/(left|right|width|margin|padding|x)/i,rr=/[\s,\(]\S/,ir={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},sr=function(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)},or=function(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)},ar=function(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)},cr=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},lr=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},ur=function(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)},hr=function(t,e,n){return t.style[e]=n},dr=function(t,e,n){return t.style.setProperty(e,n)},fr=function(t,e,n){return t._gsap[e]=n},pr=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},gr=function(t,e,n,r,i){var s=t._gsap;s.scaleX=s.scaleY=n,s.renderTransform(i,s)},mr=function(t,e,n,r,i){var s=t._gsap;s[e]=n,s.renderTransform(i,s)},yr="transform",_r=yr+"Origin",vr=function t(e,n){var r=this,i=this.target,s=i.style,o=i._gsap;if(e in Xn&&s){if(this.tfm=this.tfm||{},"transform"===e)return ir.transform.split(",").forEach((function(e){return t.call(r,e,n)}));if(e=ir[e]||e,~e.indexOf(",")?e.split(",").forEach((function(t){return r.tfm[t]=Fr(i,t)})):this.tfm[e]=o.x?o[e]:Fr(i,e),e===_r&&(this.tfm.zOrigin=o.zOrigin),this.props.indexOf(yr)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(_r,n,"")),e=yr}(s||n)&&this.props.push(e,n,s[e])},wr=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},br=function(){var t,e,n=this.props,r=this.target,i=r.style,s=r._gsap;for(t=0;t<n.length;t+=3)n[t+1]?r[n[t]]=n[t+2]:n[t+2]?i[n[t]]=n[t+2]:i.removeProperty("--"===n[t].substr(0,2)?n[t]:n[t].replace(er,"-$1").toLowerCase());if(this.tfm){for(e in this.tfm)s[e]=this.tfm[e];s.svg&&(s.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),t=Kn(),t&&t.isStart||i[yr]||(wr(i),s.zOrigin&&i[_r]&&(i[_r]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},Tr=function(t,e){var n={target:t,props:[],revert:br,save:vr};return t._gsap||jn.core.getCache(t),e&&e.split(",").forEach((function(t){return n.save(t)})),n},Er=function(t,e){var n=Bn.createElementNS?Bn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Bn.createElement(t);return n&&n.style?n:Bn.createElement(t)},Cr=function t(e,n,r){var i=getComputedStyle(e);return i[n]||i.getPropertyValue(n.replace(er,"-$1").toLowerCase())||i.getPropertyValue(n)||!r&&t(e,kr(n)||n,1)||""},Sr="O,Moz,ms,Ms,Webkit".split(","),kr=function(t,e,n){var r=e||Hn,i=r.style,s=5;if(t in i&&!n)return t;t=t.charAt(0).toUpperCase()+t.substr(1);while(s--&&!(Sr[s]+t in i));return s<0?null:(3===s?"ms":s>=0?Sr[s]:"")+t},Ir=function(){Yn()&&window.document&&(qn=window,Bn=qn.document,$n=Bn.documentElement,Hn=Er("div")||{style:{}},Er("div"),yr=kr(yr),_r=yr+"Origin",Hn.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Gn=!!kr("perspective"),Kn=jn.core.reverting,zn=1)},xr=function t(e){var n,r=Er("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,s=this.nextSibling,o=this.style.cssText;if($n.appendChild(r),r.appendChild(this),this.style.display="block",e)try{n=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=t}catch(a){}else this._gsapBBox&&(n=this._gsapBBox());return i&&(s?i.insertBefore(this,s):i.appendChild(this)),$n.removeChild(r),this.style.cssText=o,n},Ar=function(t,e){var n=e.length;while(n--)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Dr=function(t){var e;try{e=t.getBBox()}catch(n){e=xr.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===xr||(e=xr.call(t,!0)),!e||e.width||e.x||e.y?e:{x:+Ar(t,["x","cx","x1"])||0,y:+Ar(t,["y","cy","y1"])||0,width:0,height:0}},Rr=function(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!Dr(t))},Nr=function(t,e){if(e){var n,r=t.style;e in Xn&&e!==_r&&(e=yr),r.removeProperty?(n=e.substr(0,2),"ms"!==n&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty("--"===n?e:e.replace(er,"-$1").toLowerCase())):r.removeAttribute(e)}},Or=function(t,e,n,r,i,s){var o=new kn(t._pt,e,n,0,1,s?ur:lr);return t._pt=o,o.b=r,o.e=i,t._props.push(n),o},Pr={deg:1,rad:1,turn:1},Mr={grid:1,flex:1},Lr=function t(e,n,r,i){var s,o,a,c,l=parseFloat(r)||0,u=(r+"").trim().substr((l+"").length)||"px",h=Hn.style,d=nr.test(n),f="svg"===e.tagName.toLowerCase(),p=(f?"client":"offset")+(d?"Width":"Height"),g=100,m="px"===i,y="%"===i;if(i===u||!l||Pr[i]||Pr[u])return l;if("px"!==u&&!m&&(l=t(e,n,r,"px")),c=e.getCTM&&Rr(e),(y||"%"===u)&&(Xn[n]||~n.indexOf("adius")))return s=c?e.getBBox()[d?"width":"height"]:e[p],ht(y?l/s*g:l/100*s);if(h[d?"width":"height"]=g+(m?u:i),o=~n.indexOf("adius")||"em"===i&&e.appendChild&&!f?e:e.parentNode,c&&(o=(e.ownerSVGElement||{}).parentNode),o&&o!==Bn&&o.appendChild||(o=Bn.body),a=o._gsap,a&&y&&a.width&&d&&a.time===Pe.time&&!a.uncache)return ht(l/a.width*g);if(!y||"height"!==n&&"width"!==n)(y||"%"===u)&&!Mr[Cr(o,"display")]&&(h.position=Cr(e,"position")),o===e&&(h.position="static"),o.appendChild(Hn),s=Hn[p],o.removeChild(Hn),h.position="absolute";else{var _=e.style[n];e.style[n]=g+i,s=e[p],_?e.style[n]=_:Nr(e,n)}return d&&y&&(a=ct(o),a.time=Pe.time,a.width=o[p]),ht(m?s*l/g:s&&l?g/s*l:0)},Fr=function(t,e,n,r){var i;return zn||Ir(),e in ir&&"transform"!==e&&(e=ir[e],~e.indexOf(",")&&(e=e.split(",")[0])),Xn[e]&&"transform"!==e?(i=Yr(t,r),i="transformOrigin"!==e?i[e]:i.svg?i.origin:Xr(Cr(t,_r))+" "+i.zOrigin+"px"):(i=t.style[e],(!i||"auto"===i||r||~(i+"").indexOf("calc("))&&(i=Br[e]&&Br[e](t,e,n)||Cr(t,e)||lt(t,e)||("opacity"===e?1:0))),n&&!~(i+"").trim().indexOf(" ")?Lr(t,e,i,n)+n:i},Ur=function(t,e,n,r){if(!n||"none"===n){var i=kr(e,t,1),s=i&&Cr(t,i,1);s&&s!==n?(e=i,n=s):"borderColor"===e&&(n=Cr(t,"borderTopColor"))}var o,a,c,l,u,h,d,f,p,g,y,_,v=new kn(this._pt,t.style,e,0,1,wn),w=0,b=0;if(v.b=n,v.e=r,n+="",r+="","auto"===r&&(h=t.style[e],t.style[e]=r,r=Cr(t,e)||r,h?t.style[e]=h:Nr(t,e)),o=[n,r],Oe(o),n=o[0],r=o[1],c=n.match(U)||[],_=r.match(U)||[],_.length){while(a=U.exec(r))d=a[0],p=r.substring(w,a.index),u?u=(u+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(u=1),d!==(h=c[b++]||"")&&(l=parseFloat(h)||0,y=h.substr((l+"").length),"="===d.charAt(1)&&(d=ft(l,d)+y),f=parseFloat(d),g=d.substr((f+"").length),w=U.lastIndex-g.length,g||(g=g||m.units[e]||y,w===r.length&&(r+=g,v.e+=g)),y!==g&&(l=Lr(t,e,h,g)||0),v._pt={_next:v._pt,p:p||1===b?p:",",s:l,c:f-l,m:u&&u<4||"zIndex"===e?Math.round:0});v.c=w<r.length?r.substring(w,r.length):""}else v.r="display"===e&&"none"===r?ur:lr;return j.test(r)&&(v.e=0),this._pt=v,v},Vr={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},jr=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return"top"!==n&&"bottom"!==n&&"left"!==r&&"right"!==r||(t=n,n=r,r=t),e[0]=Vr[n]||n,e[1]=Vr[r]||r,e.join(" ")},qr=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n,r,i,s=e.t,o=s.style,a=e.u,c=s._gsap;if("all"===a||!0===a)o.cssText="",r=1;else{a=a.split(","),i=a.length;while(--i>-1)n=a[i],Xn[n]&&(r=1,n="transformOrigin"===n?_r:yr),Nr(s,n)}r&&(Nr(s,yr),c&&(c.svg&&s.removeAttribute("transform"),Yr(s,1),c.uncache=1,wr(o)))}},Br={clearProps:function(t,e,n,r,i){if("isFromStart"!==i.data){var s=t._pt=new kn(t._pt,e,n,0,0,qr);return s.u=r,s.pr=-10,s.tween=i,t._props.push(n),1}}},$r=[1,0,0,1,0,0],zr={},Hr=function(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t},Wr=function(t){var e=Cr(t,yr);return Hr(e)?$r:e.substr(7).match(F).map(ht)},Kr=function(t,e){var n,r,i,s,o=t._gsap||ct(t),a=t.style,c=Wr(t);return o.svg&&t.getAttribute("transform")?(i=t.transform.baseVal.consolidate().matrix,c=[i.a,i.b,i.c,i.d,i.e,i.f],"1,0,0,1,0,0"===c.join(",")?$r:c):(c!==$r||t.offsetParent||t===$n||o.svg||(i=a.display,a.display="block",n=t.parentNode,n&&t.offsetParent||(s=1,r=t.nextElementSibling,$n.appendChild(t)),c=Wr(t),i?a.display=i:Nr(t,"display"),s&&(r?n.insertBefore(t,r):n?n.appendChild(t):$n.removeChild(t))),e&&c.length>6?[c[0],c[1],c[4],c[5],c[12],c[13]]:c)},Gr=function(t,e,n,r,i,s){var o,a,c,l,u=t._gsap,h=i||Kr(t,!0),d=u.xOrigin||0,f=u.yOrigin||0,p=u.xOffset||0,g=u.yOffset||0,m=h[0],y=h[1],_=h[2],v=h[3],w=h[4],b=h[5],T=e.split(" "),E=parseFloat(T[0])||0,C=parseFloat(T[1])||0;n?h!==$r&&(a=m*v-y*_)&&(c=E*(v/a)+C*(-_/a)+(_*b-v*w)/a,l=E*(-y/a)+C*(m/a)-(m*b-y*w)/a,E=c,C=l):(o=Dr(t),E=o.x+(~T[0].indexOf("%")?E/100*o.width:E),C=o.y+(~(T[1]||T[0]).indexOf("%")?C/100*o.height:C)),r||!1!==r&&u.smooth?(w=E-d,b=C-f,u.xOffset=p+(w*m+b*_)-w,u.yOffset=g+(w*y+b*v)-b):u.xOffset=u.yOffset=0,u.xOrigin=E,u.yOrigin=C,u.smooth=!!r,u.origin=e,u.originIsAbsolute=!!n,t.style[_r]="0px 0px",s&&(Or(s,u,"xOrigin",d,E),Or(s,u,"yOrigin",f,C),Or(s,u,"xOffset",p,u.xOffset),Or(s,u,"yOffset",g,u.yOffset)),t.setAttribute("data-svg-origin",E+" "+C)},Yr=function(t,e){var n=t._gsap||new Ye(t);if("x"in n&&!e&&!n.uncache)return n;var r,i,s,o,a,c,l,u,h,d,f,p,g,y,_,v,w,b,T,E,C,S,k,I,x,A,D,R,N,O,P,M,L=t.style,F=n.scaleX<0,U="px",V="deg",j=getComputedStyle(t),q=Cr(t,_r)||"0";return r=i=s=c=l=u=h=d=f=0,o=a=1,n.svg=!(!t.getCTM||!Rr(t)),j.translate&&("none"===j.translate&&"none"===j.scale&&"none"===j.rotate||(L[yr]=("none"!==j.translate?"translate3d("+(j.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==j.rotate?"rotate("+j.rotate+") ":"")+("none"!==j.scale?"scale("+j.scale.split(" ").join(",")+") ":"")+("none"!==j[yr]?j[yr]:"")),L.scale=L.rotate=L.translate="none"),y=Kr(t,n.svg),n.svg&&(n.uncache?(x=t.getBBox(),q=n.xOrigin-x.x+"px "+(n.yOrigin-x.y)+"px",I=""):I=!e&&t.getAttribute("data-svg-origin"),Gr(t,I||q,!!I||n.originIsAbsolute,!1!==n.smooth,y)),p=n.xOrigin||0,g=n.yOrigin||0,y!==$r&&(b=y[0],T=y[1],E=y[2],C=y[3],r=S=y[4],i=k=y[5],6===y.length?(o=Math.sqrt(b*b+T*T),a=Math.sqrt(C*C+E*E),c=b||T?Zn(T,b)*Qn:0,h=E||C?Zn(E,C)*Qn+c:0,h&&(a*=Math.abs(Math.cos(h*Jn))),n.svg&&(r-=p-(p*b+g*E),i-=g-(p*T+g*C))):(M=y[6],O=y[7],D=y[8],R=y[9],N=y[10],P=y[11],r=y[12],i=y[13],s=y[14],_=Zn(M,N),l=_*Qn,_&&(v=Math.cos(-_),w=Math.sin(-_),I=S*v+D*w,x=k*v+R*w,A=M*v+N*w,D=S*-w+D*v,R=k*-w+R*v,N=M*-w+N*v,P=O*-w+P*v,S=I,k=x,M=A),_=Zn(-E,N),u=_*Qn,_&&(v=Math.cos(-_),w=Math.sin(-_),I=b*v-D*w,x=T*v-R*w,A=E*v-N*w,P=C*w+P*v,b=I,T=x,E=A),_=Zn(T,b),c=_*Qn,_&&(v=Math.cos(_),w=Math.sin(_),I=b*v+T*w,x=S*v+k*w,T=T*v-b*w,k=k*v-S*w,b=I,S=x),l&&Math.abs(l)+Math.abs(c)>359.9&&(l=c=0,u=180-u),o=ht(Math.sqrt(b*b+T*T+E*E)),a=ht(Math.sqrt(k*k+M*M)),_=Zn(S,k),h=Math.abs(_)>2e-4?_*Qn:0,f=P?1/(P<0?-P:P):0),n.svg&&(I=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Hr(Cr(t,yr)),I&&t.setAttribute("transform",I))),Math.abs(h)>90&&Math.abs(h)<270&&(F?(o*=-1,h+=c<=0?180:-180,c+=c<=0?180:-180):(a*=-1,h+=h<=0?180:-180)),e=e||n.uncache,n.x=r-((n.xPercent=r&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-r)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+U,n.y=i-((n.yPercent=i&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-i)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+U,n.z=s+U,n.scaleX=ht(o),n.scaleY=ht(a),n.rotation=ht(c)+V,n.rotationX=ht(l)+V,n.rotationY=ht(u)+V,n.skewX=h+V,n.skewY=d+V,n.transformPerspective=f+U,(n.zOrigin=parseFloat(q.split(" ")[2])||!e&&n.zOrigin||0)&&(L[_r]=Xr(q)),n.xOffset=n.yOffset=0,n.force3D=m.force3D,n.renderTransform=n.svg?ri:Gn?ni:Jr,n.uncache=0,n},Xr=function(t){return(t=t.split(" "))[0]+" "+t[1]},Qr=function(t,e,n){var r=Zt(e);return ht(parseFloat(e)+parseFloat(Lr(t,"x",n+"px",r)))+r},Jr=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,ni(t,e)},Zr="0deg",ti="0px",ei=") ",ni=function(t,e){var n=e||this,r=n.xPercent,i=n.yPercent,s=n.x,o=n.y,a=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,h=n.skewX,d=n.skewY,f=n.scaleX,p=n.scaleY,g=n.transformPerspective,m=n.force3D,y=n.target,_=n.zOrigin,v="",w="auto"===m&&t&&1!==t||!0===m;if(_&&(u!==Zr||l!==Zr)){var b,T=parseFloat(l)*Jn,E=Math.sin(T),C=Math.cos(T);T=parseFloat(u)*Jn,b=Math.cos(T),s=Qr(y,s,E*b*-_),o=Qr(y,o,-Math.sin(T)*-_),a=Qr(y,a,C*b*-_+_)}g!==ti&&(v+="perspective("+g+ei),(r||i)&&(v+="translate("+r+"%, "+i+"%) "),(w||s!==ti||o!==ti||a!==ti)&&(v+=a!==ti||w?"translate3d("+s+", "+o+", "+a+") ":"translate("+s+", "+o+ei),c!==Zr&&(v+="rotate("+c+ei),l!==Zr&&(v+="rotateY("+l+ei),u!==Zr&&(v+="rotateX("+u+ei),h===Zr&&d===Zr||(v+="skew("+h+", "+d+ei),1===f&&1===p||(v+="scale("+f+", "+p+ei),y.style[yr]=v||"translate(0, 0)"},ri=function(t,e){var n,r,i,s,o,a=e||this,c=a.xPercent,l=a.yPercent,u=a.x,h=a.y,d=a.rotation,f=a.skewX,p=a.skewY,g=a.scaleX,m=a.scaleY,y=a.target,_=a.xOrigin,v=a.yOrigin,w=a.xOffset,b=a.yOffset,T=a.forceCSS,E=parseFloat(u),C=parseFloat(h);d=parseFloat(d),f=parseFloat(f),p=parseFloat(p),p&&(p=parseFloat(p),f+=p,d+=p),d||f?(d*=Jn,f*=Jn,n=Math.cos(d)*g,r=Math.sin(d)*g,i=Math.sin(d-f)*-m,s=Math.cos(d-f)*m,f&&(p*=Jn,o=Math.tan(f-p),o=Math.sqrt(1+o*o),i*=o,s*=o,p&&(o=Math.tan(p),o=Math.sqrt(1+o*o),n*=o,r*=o)),n=ht(n),r=ht(r),i=ht(i),s=ht(s)):(n=g,s=m,r=i=0),(E&&!~(u+"").indexOf("px")||C&&!~(h+"").indexOf("px"))&&(E=Lr(y,"x",u,"px"),C=Lr(y,"y",h,"px")),(_||v||w||b)&&(E=ht(E+_-(_*n+v*i)+w),C=ht(C+v-(_*r+v*s)+b)),(c||l)&&(o=y.getBBox(),E=ht(E+c/100*o.width),C=ht(C+l/100*o.height)),o="matrix("+n+","+r+","+i+","+s+","+E+","+C+")",y.setAttribute("transform",o),T&&(y.style[yr]=o)},ii=function(t,e,n,r,i){var s,o,a=360,c=k(i),l=parseFloat(i)*(c&&~i.indexOf("rad")?Qn:1),u=l-r,h=r+u+"deg";return c&&(s=i.split("_")[1],"short"===s&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-a)),"cw"===s&&u<0?u=(u+a*tr)%a-~~(u/a)*a:"ccw"===s&&u>0&&(u=(u-a*tr)%a-~~(u/a)*a)),t._pt=o=new kn(t._pt,e,n,r,u,or),o.e=h,o.u="deg",t._props.push(n),o},si=function(t,e){for(var n in e)t[n]=e[n];return t},oi=function(t,e,n){var r,i,s,o,a,c,l,u,h=si({},n._gsap),d="perspective,force3D,transformOrigin,svgOrigin",f=n.style;for(i in h.svg?(s=n.getAttribute("transform"),n.setAttribute("transform",""),f[yr]=e,r=Yr(n,1),Nr(n,yr),n.setAttribute("transform",s)):(s=getComputedStyle(n)[yr],f[yr]=e,r=Yr(n,1),f[yr]=s),Xn)s=h[i],o=r[i],s!==o&&d.indexOf(i)<0&&(l=Zt(s),u=Zt(o),a=l!==u?Lr(n,i,s,u):parseFloat(s),c=parseFloat(o),t._pt=new kn(t._pt,r,i,a,c-a,sr),t._pt.u=u||0,t._props.push(i));si(r,h)};ut("padding,margin,Width,Radius",(function(t,e){var n="Top",r="Right",i="Bottom",s="Left",o=(e<3?[n,r,i,s]:[n+s,n+r,i+r,i+s]).map((function(n){return e<2?t+n:"border"+n+t}));Br[e>1?"border"+t:t]=function(t,e,n,r,i){var s,a;if(arguments.length<4)return s=o.map((function(e){return Fr(t,e,n)})),a=s.join(" "),5===a.split(s[0]).length?s[0]:a;s=(r+"").split(" "),a={},o.forEach((function(t,e){return a[t]=s[e]=s[e]||s[(e-1)/2|0]})),t.init(e,a,i)}}));var ai={name:"css",register:Ir,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,i){var s,o,a,c,l,u,h,d,f,p,g,y,_,v,w,b,T=this._props,E=t.style,C=n.vars.startAt;for(h in zn||Ir(),this.styles=this.styles||Tr(t),b=this.styles.props,this.tween=n,e)if("autoRound"!==h&&(o=e[h],!nt[h]||!rn(h,e,n,r,t,i)))if(l=typeof o,u=Br[h],"function"===l&&(o=o.call(n,r,t,i),l=typeof o),"string"===l&&~o.indexOf("random(")&&(o=ye(o)),u)u(this,t,h,o,n)&&(w=1);else if("--"===h.substr(0,2))s=(getComputedStyle(t).getPropertyValue(h)+"").trim(),o+="",Re.lastIndex=0,Re.test(s)||(d=Zt(s),f=Zt(o)),f?d!==f&&(s=Lr(t,h,s,f)+f):d&&(o+=d),this.add(E,"setProperty",s,o,r,i,0,0,h),T.push(h),b.push(h,0,E[h]);else if("undefined"!==l){if(C&&h in C?(s="function"===typeof C[h]?C[h].call(n,r,t,i):C[h],k(s)&&~s.indexOf("random(")&&(s=ye(s)),Zt(s+"")||"auto"===s||(s+=m.units[h]||Zt(Fr(t,h))||""),"="===(s+"").charAt(1)&&(s=Fr(t,h))):s=Fr(t,h),c=parseFloat(s),p="string"===l&&"="===o.charAt(1)&&o.substr(0,2),p&&(o=o.substr(2)),a=parseFloat(o),h in ir&&("autoAlpha"===h&&(1===c&&"hidden"===Fr(t,"visibility")&&a&&(c=0),b.push("visibility",0,E.visibility),Or(this,E,"visibility",c?"inherit":"hidden",a?"inherit":"hidden",!a)),"scale"!==h&&"transform"!==h&&(h=ir[h],~h.indexOf(",")&&(h=h.split(",")[0]))),g=h in Xn,g)if(this.styles.save(h),y||(_=t._gsap,_.renderTransform&&!e.parseTransform||Yr(t,e.parseTransform),v=!1!==e.smoothOrigin&&_.smooth,y=this._pt=new kn(this._pt,E,yr,0,1,_.renderTransform,_,0,-1),y.dep=1),"scale"===h)this._pt=new kn(this._pt,_,"scaleY",_.scaleY,(p?ft(_.scaleY,p+a):a)-_.scaleY||0,sr),this._pt.u=0,T.push("scaleY",h),h+="X";else{if("transformOrigin"===h){b.push(_r,0,E[_r]),o=jr(o),_.svg?Gr(t,o,0,v,0,this):(f=parseFloat(o.split(" ")[2])||0,f!==_.zOrigin&&Or(this,_,"zOrigin",_.zOrigin,f),Or(this,E,h,Xr(s),Xr(o)));continue}if("svgOrigin"===h){Gr(t,o,1,v,0,this);continue}if(h in zr){ii(this,_,h,c,p?ft(c,p+o):o);continue}if("smoothOrigin"===h){Or(this,_,"smooth",_.smooth,o);continue}if("force3D"===h){_[h]=o;continue}if("transform"===h){oi(this,o,t);continue}}else h in E||(h=kr(h)||h);if(g||(a||0===a)&&(c||0===c)&&!rr.test(o)&&h in E)d=(s+"").substr((c+"").length),a||(a=0),f=Zt(o)||(h in m.units?m.units[h]:d),d!==f&&(c=Lr(t,h,s,f)),this._pt=new kn(this._pt,g?_:E,h,c,(p?ft(c,p+a):a)-c,g||"px"!==f&&"zIndex"!==h||!1===e.autoRound?sr:cr),this._pt.u=f||0,d!==f&&"%"!==f&&(this._pt.b=s,this._pt.r=ar);else if(h in E)Ur.call(this,t,h,s,p?p+o:o);else if(h in t)this.add(t,h,s||t[h],p?p+o:o,r,i);else if("parseTransform"!==h){W(h,o);continue}g||(h in E?b.push(h,0,E[h]):b.push(h,1,s||t[h])),T.push(h)}w&&Sn(this)},render:function(t,e){if(e.tween._time||!Kn()){var n=e._pt;while(n)n.r(t,n.d),n=n._next}else e.styles.revert()},get:Fr,aliases:ir,getSetter:function(t,e,n){var r=ir[e];return r&&r.indexOf(",")<0&&(e=r),e in Xn&&e!==_r&&(t._gsap.x||Fr(t,"x"))?n&&Wn===n?"scale"===e?pr:fr:(Wn=n||{})&&("scale"===e?gr:mr):t.style&&!A(t.style[e])?hr:~e.indexOf("-")?dr:yn(t,e)},core:{_removeProperty:Nr,_getMatrix:Kr}};jn.utils.checkPrefix=kr,jn.core.getStyleSaver=Tr,function(t,e,n,r){var i=ut(t+","+e+","+n,(function(t){Xn[t]=1}));ut(e,(function(t){m.units[t]="deg",zr[t]=1})),ir[i[13]]=t+","+e,ut(r,(function(t){var e=t.split(":");ir[e[1]]=i[e[0]]}))}("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),ut("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",(function(t){m.units[t]="px"})),jn.registerPlugin(ai);var ci=jn.registerPlugin(ai)||jn;ci.core.Tween},72:function(t,e,n){"use strict";n.d(e,{Z:function(){return bt}});n(7658);function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){return d(t)||p(t,e)||g(t,e)||_()}function u(t){return h(t)||f(t)||g(t)||y()}function h(t){if(Array.isArray(t))return m(t)}function d(t){if(Array.isArray(t))return t}function f(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function p(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(r=(o=a.next()).done);r=!0)if(n.push(o.value),e&&n.length===e)break}catch(c){i=!0,s=c}finally{try{r||null==a["return"]||a["return"]()}finally{if(i)throw s}}return n}}function g(t,e){if(t){if("string"===typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function y(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function v(t,e){return Object.getOwnPropertyNames(Object(t)).reduce((function(n,r){var i=Object.getOwnPropertyDescriptor(Object(t),r),s=Object.getOwnPropertyDescriptor(Object(e),r);return Object.defineProperty(n,r,s||i)}),{})}function w(t){return"string"===typeof t}function b(t){return Array.isArray(t)}function T(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=v(e);return void 0!==n.types?t=n.types:void 0!==n.split&&(t=n.split),void 0!==t&&(n.types=(w(t)||b(t)?String(t):"").split(",").map((function(t){return String(t).trim()})).filter((function(t){return/((line)|(word)|(char))/i.test(t)}))),(n.absolute||n.position)&&(n.absolute=n.absolute||/absolute/.test(e.position)),n}function E(t){var e=w(t)||b(t)?String(t):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function C(t){return null!==t&&"object"===typeof t}function S(t){return C(t)&&/^(1|3|11)$/.test(t.nodeType)}function k(t){return"number"===typeof t&&t>-1&&t%1===0}function I(t){return C(t)&&k(t.length)}function x(t){return b(t)?t:null==t?[]:I(t)?Array.prototype.slice.call(t):[t]}function A(t){var e=t;return w(t)&&(e=/^(#[a-z]\w+)$/.test(t.trim())?document.getElementById(t.trim().slice(1)):document.querySelectorAll(t)),x(e).reduce((function(t,e){return[].concat(u(t),u(x(e).filter(S)))}),[])}(function(){function t(){for(var t=arguments.length,e=0;e<t;e++){var n=e<0||arguments.length<=e?void 0:arguments[e];1===n.nodeType||11===n.nodeType?this.appendChild(n):this.appendChild(document.createTextNode(String(n)))}}function e(){while(this.lastChild)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function n(){for(var t=this.parentNode,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=n.length;if(t){i||t.removeChild(this);while(i--){var s=n[i];"object"!==typeof s?s=this.ownerDocument.createTextNode(s):s.parentNode&&s.parentNode.removeChild(s),i?t.insertBefore(this.previousSibling,s):t.replaceChild(s,this)}}}"undefined"!==typeof Element&&(Element.prototype.append||(Element.prototype.append=t,DocumentFragment.prototype.append=t),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=n,DocumentFragment.prototype.replaceWith=n))})();var D=Object.entries,R="_splittype",N={},O=0;function P(t,e,n){if(!C(t))return console.warn("[data.set] owner is not an object"),null;var r=t[R]||(t[R]=++O),i=N[r]||(N[r]={});return void 0===n?e&&Object.getPrototypeOf(e)===Object.prototype&&(N[r]=c(c({},i),e)):void 0!==e&&(i[e]=n),n}function M(t,e){var n=C(t)?t[R]:null,r=n&&N[n]||{};return void 0===e?r:r[e]}function L(t){var e=t&&t[R];e&&(delete t[e],delete N[e])}function F(){Object.keys(N).forEach((function(t){delete N[t]}))}function U(){D(N).forEach((function(t){var e=l(t,2),n=e[0],r=e[1],i=r.isRoot,s=r.isSplit;i&&s||(N[n]=null,delete N[n])}))}function V(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ",n=t?String(t):"";return n.trim().replace(/\s+/g," ").split(e)}var j="\\ud800-\\udfff",q="\\u0300-\\u036f\\ufe20-\\ufe23",B="\\u20d0-\\u20f0",$="\\ufe0e\\ufe0f",z="[".concat(j,"]"),H="[".concat(q).concat(B,"]"),W="\\ud83c[\\udffb-\\udfff]",K="(?:".concat(H,"|").concat(W,")"),G="[^".concat(j,"]"),Y="(?:\\ud83c[\\udde6-\\uddff]){2}",X="[\\ud800-\\udbff][\\udc00-\\udfff]",Q="\\u200d",J="".concat(K,"?"),Z="[".concat($,"]?"),tt="(?:"+Q+"(?:"+[G,Y,X].join("|")+")"+Z+J+")*",et=Z+J+tt,nt="(?:".concat(["".concat(G).concat(H,"?"),H,Y,X,z].join("|"),"\n)"),rt=RegExp("".concat(W,"(?=").concat(W,")|").concat(nt).concat(et),"g"),it=[Q,j,q,B,$],st=RegExp("[".concat(it.join(""),"]"));function ot(t){return t.split("")}function at(t){return st.test(t)}function ct(t){return t.match(rt)||[]}function lt(t){return at(t)?ct(t):ot(t)}function ut(t){return null==t?"":String(t)}function ht(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t=ut(t),t&&w(t)&&!e&&at(t)?lt(t):t.split(e)}function dt(t,e){var n=document.createElement(t);return e?(Object.keys(e).forEach((function(t){var r=e[t],i=w(r)?r.trim():r;null!==i&&""!==i&&("children"===t?n.append.apply(n,u(x(i))):n.setAttribute(t,i))})),n):n}var ft={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function pt(t,e){e=v(ft,e);var n=E(e.types),r=e.tagName,i=t.nodeValue,s=document.createDocumentFragment(),o=[],a=[];return/^\s/.test(i)&&s.append(" "),o=V(i).reduce((function(t,i,o,c){var l,h;return n.chars&&(h=ht(i).map((function(t){var n=dt(r,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:t});return P(n,"isChar",!0),a=[].concat(u(a),[n]),n}))),n.words||n.lines?(l=dt(r,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(n.words&&e.absolute?"position: relative;":""),children:n.chars?h:i}),P(l,{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(l)):h.forEach((function(t){s.appendChild(t)})),o<c.length-1&&s.append(" "),n.words?t.concat(l):t}),[]),/\s$/.test(i)&&s.append(" "),t.replaceWith(s),{words:o,chars:a}}function gt(t,e){var n=t.nodeType,r={words:[],chars:[]};if(!/(1|3|11)/.test(n))return r;if(3===n&&/\S/.test(t.nodeValue))return pt(t,e);var i=x(t.childNodes);if(i.length&&(P(t,"isSplit",!0),!M(t).isRoot)){t.style.display="inline-block",t.style.position="relative";var s=t.nextSibling,o=t.previousSibling,a=t.textContent||"",c=s?s.textContent:" ",l=o?o.textContent:" ";P(t,{isWordEnd:/\s$/.test(a)||/^\s/.test(c),isWordStart:/^\s/.test(a)||/\s$/.test(l)})}return i.reduce((function(t,n){var r=gt(n,e),i=r.words,s=r.chars;return{words:[].concat(u(t.words),u(i)),chars:[].concat(u(t.chars),u(s))}}),r)}function mt(t,e,n,r){if(!n.absolute)return{top:e?t.offsetTop:null};var i=t.offsetParent,s=l(r,2),o=s[0],a=s[1],c=0,u=0;if(i&&i!==document.body){var h=i.getBoundingClientRect();c=h.x+o,u=h.y+a}var d=t.getBoundingClientRect(),f=d.width,p=d.height,g=d.x,m=d.y,y=m+a-u,_=g+o-c;return{width:f,height:p,top:y,left:_}}function yt(t){M(t).isWord?(L(t),t.replaceWith.apply(t,u(t.childNodes))):x(t.children).forEach((function(t){return yt(t)}))}var _t=function(){return document.createDocumentFragment()};function vt(t,e,n){var r,i,s,o=E(e.types),a=e.tagName,c=t.getElementsByTagName("*"),l=[],u=[],h=null,d=[],f=t.parentElement,p=t.nextElementSibling,g=_t(),m=window.getComputedStyle(t),y=m.textAlign,_=parseFloat(m.fontSize),v=.2*_;return e.absolute&&(s={left:t.offsetLeft,top:t.offsetTop,width:t.offsetWidth},i=t.offsetWidth,r=t.offsetHeight,P(t,{cssWidth:t.style.width,cssHeight:t.style.height})),x(c).forEach((function(r){var i=r.parentElement===t,s=mt(r,i,e,n),a=s.width,c=s.height,d=s.top,f=s.left;/^br$/i.test(r.nodeName)||(o.lines&&i&&((null===h||d-h>=v)&&(h=d,l.push(u=[])),u.push(r)),e.absolute&&P(r,{top:d,left:f,width:a,height:c}))})),f&&f.removeChild(t),o.lines&&(d=l.map((function(t){var n=dt(a,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(y,"; width: 100%;")});P(n,"isLine",!0);var r={height:0,top:1e4};return g.appendChild(n),t.forEach((function(t,e,i){var s=M(t),o=s.isWordEnd,a=s.top,c=s.height,l=i[e+1];r.height=Math.max(r.height,c),r.top=Math.min(r.top,a),n.appendChild(t),o&&M(l).isWordStart&&n.append(" ")})),e.absolute&&P(n,{height:r.height,top:r.top}),n})),o.words||yt(g),t.replaceChildren(g)),e.absolute&&(t.style.width="".concat(t.style.width||i,"px"),t.style.height="".concat(r,"px"),x(c).forEach((function(t){var e=M(t),n=e.isLine,r=e.top,i=e.left,o=e.width,a=e.height,c=M(t.parentElement),l=!n&&c.isLine;t.style.top="".concat(l?r-c.top:r,"px"),t.style.left="".concat(n?s.left:i-(l?s.left:0),"px"),t.style.height="".concat(a,"px"),t.style.width="".concat(n?s.width:o,"px"),t.style.position="absolute"}))),f&&(p?f.insertBefore(t,p):f.appendChild(t)),d}var wt=v(ft,{}),bt=function(){function t(e,n){r(this,t),this.isSplit=!1,this.settings=v(wt,T(n)),this.elements=A(e),this.split()}return s(t,null,[{key:"clearData",value:function(){F()}},{key:"setDefaults",value:function(t){return wt=v(wt,T(t)),ft}},{key:"revert",value:function(t){A(t).forEach((function(t){var e=M(t),n=e.isSplit,r=e.html,i=e.cssWidth,s=e.cssHeight;n&&(t.innerHTML=r,t.style.width=i||"",t.style.height=s||"",L(t))}))}},{key:"create",value:function(e,n){return new t(e,n)}},{key:"data",get:function(){return N}},{key:"defaults",get:function(){return wt},set:function(t){wt=v(wt,T(t))}}]),s(t,[{key:"split",value:function(t){var e=this;this.revert(),this.elements.forEach((function(t){P(t,"html",t.innerHTML)})),this.lines=[],this.words=[],this.chars=[];var n=[window.pageXOffset,window.pageYOffset];void 0!==t&&(this.settings=v(this.settings,T(t)));var r=E(this.settings.types);r.none||(this.elements.forEach((function(t){P(t,"isRoot",!0);var n=gt(t,e.settings),r=n.words,i=n.chars;e.words=[].concat(u(e.words),u(r)),e.chars=[].concat(u(e.chars),u(i))})),this.elements.forEach((function(t){if(r.lines||e.settings.absolute){var i=vt(t,e.settings,n);e.lines=[].concat(u(e.lines),u(i))}})),this.isSplit=!0,window.scrollTo(n[0],n[1]),U())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),t.revert(this.elements)}}]),t}()},89:function(t,e){"use strict";e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},1804:function(t,e,n){"use strict";n.d(e,{Jn:function(){return gt},qX:function(){return ht},Xd:function(){return ut},Mq:function(){return yt},ZF:function(){return mt},KN:function(){return _t}});n(7658);var r=n(7142),i=n(5168),s=n(223);n(2801);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(T(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function y(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));d.set(t,e)}let _={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return T(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function v(t){_=t(_)}function w(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(t)?function(...e){return t.apply(E(this),e),T(h.get(this))}:function(...e){return T(t.apply(E(this),e))}:function(e,...n){const r=t.call(E(this),e,...n);return f.set(r,e.sort?e.sort():[e]),T(r)}}function b(t){return"function"===typeof t?w(t):(t instanceof IDBTransaction&&y(t),o(t,l())?new Proxy(t,_):t)}function T(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=b(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const E=t=>g.get(t);function C(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=T(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(T(o.result),t.oldVersion,t.newVersion,T(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],I=new Map;function x(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(I.get(e))return I.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=k.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return I.set(e,s),s}v((t=>({...t,get:(e,n,r)=>x(e,n)||t.get(e,n,r),has:(e,n)=>!!x(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(D(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function D(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const R="@firebase/app",N="0.9.9",O=new i.Yd("@firebase/app"),P="@firebase/app-compat",M="@firebase/analytics-compat",L="@firebase/analytics",F="@firebase/app-check-compat",U="@firebase/app-check",V="@firebase/auth",j="@firebase/auth-compat",q="@firebase/database",B="@firebase/database-compat",$="@firebase/functions",z="@firebase/functions-compat",H="@firebase/installations",W="@firebase/installations-compat",K="@firebase/messaging",G="@firebase/messaging-compat",Y="@firebase/performance",X="@firebase/performance-compat",Q="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",it="9.21.0",st="[DEFAULT]",ot={[R]:"fire-core",[P]:"fire-core-compat",[L]:"fire-analytics",[M]:"fire-analytics-compat",[U]:"fire-app-check",[F]:"fire-app-check-compat",[V]:"fire-auth",[j]:"fire-auth-compat",[q]:"fire-rtdb",[B]:"fire-rtdb-compat",[$]:"fire-fn",[z]:"fire-fn-compat",[H]:"fire-iid",[W]:"fire-iid-compat",[K]:"fire-fcm",[G]:"fire-fcm-compat",[Y]:"fire-perf",[X]:"fire-perf-compat",[Q]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function lt(t,e){try{t.container.addComponent(e)}catch(n){O.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ut(t){const e=t.name;if(ct.has(e))return O.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())lt(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ft=new s.LL("app","Firebase",dt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=it;function mt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),o=i.name;if("string"!==typeof o||!o)throw ft.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw ft.create("no-options");const a=at.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw ft.create("duplicate-app",{appName:o})}const c=new r.H0(o);for(const r of ct.values())c.addComponent(r);const l=new pt(n,i,c);return at.set(o,l),l}function yt(t=st){const e=at.get(t);if(!e&&t===st)return mt();if(!e)throw ft.create("no-app",{appName:t});return e}function _t(t,e,n){var i;let s=null!==(i=ot[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void O.warn(t.join(" "))}ut(new r.wA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vt="firebase-heartbeat-database",wt=1,bt="firebase-heartbeat-store";let Tt=null;function Et(){return Tt||(Tt=C(vt,wt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bt)}}}).catch((t=>{throw ft.create("idb-open",{originalErrorMessage:t.message})}))),Tt}async function Ct(t){try{const e=await Et();return e.transaction(bt).objectStore(bt).get(kt(t))}catch(e){if(e instanceof s.ZR)O.warn(e.message);else{const t=ft.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});O.warn(t.message)}}}async function St(t,e){try{const n=await Et(),r=n.transaction(bt,"readwrite"),i=r.objectStore(bt);return await i.put(e,kt(t)),r.done}catch(n){if(n instanceof s.ZR)O.warn(n.message);else{const t=ft.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});O.warn(t.message)}}}function kt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=1024,xt=2592e6;class At{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Nt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Dt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=xt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Dt(),{heartbeatsToSend:e,unsentEntries:n}=Rt(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Dt(){const t=new Date;return t.toISOString().substring(0,10)}function Rt(t,e=It){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Ot(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ot(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Nt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Ct(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Ot(t){return(0,s.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){ut(new r.wA("platform-logger",(t=>new A(t)),"PRIVATE")),ut(new r.wA("heartbeat",(t=>new At(t)),"PRIVATE")),_t(R,N,t),_t(R,N,"esm2017"),_t("fire-js","")}Pt("")},7142:function(t,e,n){"use strict";n.d(e,{H0:function(){return l},wA:function(){return i}});var r=n(223);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:function(t,e,n){"use strict";n.d(e,{Yd:function(){return l},in:function(){return i}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class l{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},250:function(t,e,n){"use strict";n.d(e,{h:function(){return a},u:function(){return l}});n(7658);var r=n(2555),i=n(3396),s=n(4870);const o=(t,e)=>(0,s.dq)(e)?(0,s.Tn)(e):e,a="usehead";function c(){if((0,i.EM)()){const t=(0,i.f3)(a);if(!t)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function l(t,e={}){const n=e.head||c();return n.ssr?n.push(t||{},e):u(n,t,e)}function u(t,e,n={}){const a=(0,s.iH)(!1);let c;(0,i.m0)((()=>{const i=a.value?{}:(0,r.w)(e,o);c?c.patch(i):c=t.push(i,n)}));const l=(0,i.FN)();return l&&((0,i.Jd)((()=>{c.dispose()})),(0,i.se)((()=>{a.value=!0})),(0,i.dl)((()=>{a.value=!1}))),c}},9365:function(t,e,n){"use strict";n.d(e,{IH:function(){return Be}});n(7658);var r=n(1804),i=n(5168),s=n(223),o=n(7142);n(2801),n(3767),n(8585),n(8696);const a=(t,e)=>e.some((e=>t instanceof e));let c,l;function u(){return c||(c=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h(){return l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap,m=new WeakMap;function y(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(E(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&d.set(e,t)})).catch((()=>{})),m.set(e,t),e}function _(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));f.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||p.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){v=t(v)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?h().includes(t)?function(...e){return t.apply(C(this),e),E(d.get(this))}:function(...e){return E(t.apply(C(this),e))}:function(e,...n){const r=t.call(C(this),e,...n);return p.set(r,e.sort?e.sort():[e]),E(r)}}function T(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&_(t),a(t,u())?new Proxy(t,v):t)}function E(t){if(t instanceof IDBRequest)return y(t);if(g.has(t))return g.get(t);const e=T(t);return e!==t&&(g.set(t,e),m.set(e,t)),e}const C=t=>m.get(t);function S(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const k=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],x=new Map;function A(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(x.get(e))return x.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!k.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return x.set(e,s),s}w((t=>({...t,get:(e,n,r)=>A(e,n)||t.get(e,n,r),has:(e,n)=>!!A(e,n)||t.has(e,n)})));const D="@firebase/installations",R="0.6.4",N=1e4,O=`w:${R}`,P="FIS_v2",M="https://firebaseinstallations.googleapis.com/v1",L=36e5,F="installations",U="Installations",V={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},j=new s.LL(F,U,V);function q(t){return t instanceof s.ZR&&t.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B({projectId:t}){return`${M}/projects/${t}/installations`}function $(t){return{token:t.token,requestStatus:2,expiresIn:G(t.expiresIn),creationTime:Date.now()}}async function z(t,e){const n=await e.json(),r=n.error;return j.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function H({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function W(t,{refreshToken:e}){const n=H(t);return n.append("Authorization",Y(e)),n}async function K(t){const e=await t();return e.status>=500&&e.status<600?t():e}function G(t){return Number(t.replace("s","000"))}function Y(t){return`${P} ${t}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=B(t),i=H(t),s=e.getImmediate({optional:!0});if(s){const t=await s.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={fid:n,authVersion:P,appId:t.appId,sdkVersion:O},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await K((()=>fetch(r,a)));if(c.ok){const t=await c.json(),e={fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:$(t.authToken)};return e}throw await z("Create Installation",c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t){return new Promise((e=>{setTimeout(e,t)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t){const e=btoa(String.fromCharCode(...t));return e.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=/^[cdef][\w-]{21}$/,tt="";function et(){try{const t=new Uint8Array(17),e=self.crypto||self.msCrypto;e.getRandomValues(t),t[0]=112+t[0]%16;const n=nt(t);return Z.test(n)?n:tt}catch(t){return tt}}function nt(t){const e=J(t);return e.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){return`${t.appName}!${t.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=new Map;function st(t,e){const n=rt(t);ot(n,e),at(n,e)}function ot(t,e){const n=it.get(t);if(n)for(const r of n)r(e)}function at(t,e){const n=lt();n&&n.postMessage({key:t,fid:e}),ut()}let ct=null;function lt(){return!ct&&"BroadcastChannel"in self&&(ct=new BroadcastChannel("[Firebase] FID Change"),ct.onmessage=t=>{ot(t.data.key,t.data.fid)}),ct}function ut(){0===it.size&&ct&&(ct.close(),ct=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="firebase-installations-database",dt=1,ft="firebase-installations-store";let pt=null;function gt(){return pt||(pt=S(ht,dt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ft)}}})),pt}async function mt(t,e){const n=rt(t),r=await gt(),i=r.transaction(ft,"readwrite"),s=i.objectStore(ft),o=await s.get(n);return await s.put(e,n),await i.done,o&&o.fid===e.fid||st(t,e.fid),e}async function yt(t){const e=rt(t),n=await gt(),r=n.transaction(ft,"readwrite");await r.objectStore(ft).delete(e),await r.done}async function _t(t,e){const n=rt(t),r=await gt(),i=r.transaction(ft,"readwrite"),s=i.objectStore(ft),o=await s.get(n),a=e(o);return void 0===a?await s.delete(n):await s.put(a,n),await i.done,!a||o&&o.fid===a.fid||st(t,a.fid),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(t){let e;const n=await _t(t.appConfig,(n=>{const r=wt(n),i=bt(t,r);return e=i.registrationPromise,i.installationEntry}));return n.fid===tt?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function wt(t){const e=t||{fid:et(),registrationStatus:0};return St(e)}function bt(t,e){if(0===e.registrationStatus){if(!navigator.onLine){const t=Promise.reject(j.create("app-offline"));return{installationEntry:e,registrationPromise:t}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Tt(t,n);return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:Et(t)}:{installationEntry:e}}async function Tt(t,e){try{const n=await X(t,e);return mt(t.appConfig,n)}catch(n){throw q(n)&&409===n.customData.serverCode?await yt(t.appConfig):await mt(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Et(t){let e=await Ct(t.appConfig);while(1===e.registrationStatus)await Q(100),e=await Ct(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await vt(t);return n||e}return e}function Ct(t){return _t(t,(t=>{if(!t)throw j.create("installation-not-found");return St(t)}))}function St(t){return kt(t)?{fid:t.fid,registrationStatus:0}:t}function kt(t){return 1===t.registrationStatus&&t.registrationTime+N<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It({appConfig:t,heartbeatServiceProvider:e},n){const r=xt(t,n),i=W(t,n),s=e.getImmediate({optional:!0});if(s){const t=await s.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={installation:{sdkVersion:O,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await K((()=>fetch(r,a)));if(c.ok){const t=await c.json(),e=$(t);return e}throw await z("Generate Auth Token",c)}function xt(t,{fid:e}){return`${B(t)}/${e}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function At(t,e=!1){let n;const r=await _t(t.appConfig,(r=>{if(!Ot(r))throw j.create("not-registered");const i=r.authToken;if(!e&&Pt(i))return r;if(1===i.requestStatus)return n=Dt(t,e),r;{if(!navigator.onLine)throw j.create("app-offline");const e=Lt(r);return n=Nt(t,e),e}})),i=n?await n:r.authToken;return i}async function Dt(t,e){let n=await Rt(t.appConfig);while(1===n.authToken.requestStatus)await Q(100),n=await Rt(t.appConfig);const r=n.authToken;return 0===r.requestStatus?At(t,e):r}function Rt(t){return _t(t,(t=>{if(!Ot(t))throw j.create("not-registered");const e=t.authToken;return Ft(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t}))}async function Nt(t,e){try{const n=await It(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await mt(t.appConfig,r),n}catch(n){if(!q(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await mt(t.appConfig,n)}else await yt(t.appConfig);throw n}}function Ot(t){return void 0!==t&&2===t.registrationStatus}function Pt(t){return 2===t.requestStatus&&!Mt(t)}function Mt(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+L}function Lt(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Ft(t){return 1===t.requestStatus&&t.requestTime+N<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(t){const e=t,{installationEntry:n,registrationPromise:r}=await vt(e);return r?r.catch(console.error):At(e).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(t,e=!1){const n=t;await jt(n);const r=await At(n,e);return r.token}async function jt(t){const{registrationPromise:e}=await vt(t);e&&await e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qt(t){if(!t||!t.options)throw Bt("App Configuration");if(!t.name)throw Bt("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Bt(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Bt(t){return j.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="installations",zt="installations-internal",Ht=t=>{const e=t.getProvider("app").getImmediate(),n=qt(e),i=(0,r.qX)(e,"heartbeat"),s={app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()};return s},Wt=t=>{const e=t.getProvider("app").getImmediate(),n=(0,r.qX)(e,$t).getImmediate(),i={getId:()=>Ut(n),getToken:t=>Vt(n,t)};return i};function Kt(){(0,r.Xd)(new o.wA($t,Ht,"PUBLIC")),(0,r.Xd)(new o.wA(zt,Wt,"PRIVATE"))}Kt(),(0,r.KN)(D,R),(0,r.KN)(D,R,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gt="analytics",Yt="firebase_id",Xt="origin",Qt=6e4,Jt="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Zt="https://www.googletagmanager.com/gtag/js",te=new i.Yd("@firebase/analytics"),ee={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ne=new s.LL("analytics","Analytics",ee);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function re(t){if(!t.startsWith(Zt)){const e=ne.create("invalid-gtag-resource",{gtagURL:t});return te.warn(e.message),""}return t}function ie(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function se(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function oe(t,e){const n=se("firebase-js-sdk-policy",{createScriptURL:re}),r=document.createElement("script"),i=`${Zt}?l=${t}&id=${e}`;r.src=n?null===n||void 0===n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function ae(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function ce(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const t=await ie(n),r=t.find((t=>t.measurementId===i));r&&await e[r.appId]}}catch(a){te.error(a)}t("config",i,s)}async function le(t,e,n,r,i){try{let s=[];if(i&&i["send_to"]){let t=i["send_to"];Array.isArray(t)||(t=[t]);const r=await ie(n);for(const n of t){const t=r.find((t=>t.measurementId===n)),i=t&&e[t.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){te.error(s)}}function ue(t,e,n,r){async function i(i,...s){try{if("event"===i){const[r,i]=s;await le(t,e,n,r,i)}else if("config"===i){const[i,o]=s;await ce(t,e,n,r,i,o)}else if("consent"===i){const[e]=s;t("consent","update",e)}else if("get"===i){const[e,n,r]=s;t("get",e,n,r)}else if("set"===i){const[e]=s;t("set",e)}else t(i,...s)}catch(o){te.error(o)}}return i}function he(t,e,n,r,i){let s=function(...t){window[r].push(arguments)};return window[i]&&"function"===typeof window[i]&&(s=window[i]),window[i]=ue(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function de(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Zt)&&n.src.includes(t))return n;return null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe=30,pe=1e3;class ge{constructor(t={},e=pe){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const me=new ge;function ye(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function _e(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:ye(r)},s=Jt.replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let t="";try{const n=await o.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(a){}throw ne.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}async function ve(t,e=me,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw ne.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ne.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Ee;return setTimeout((async()=>{a.abort()}),void 0!==n?n:Qt),we({appId:r,apiKey:i,measurementId:s},o,a,e)}async function we(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=me){var o;const{appId:a,measurementId:c}=t;try{await be(r,e)}catch(l){if(c)return te.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===l||void 0===l?void 0:l.message}]`),{appId:a,measurementId:c};throw l}try{const e=await _e(t);return i.deleteThrottleMetadata(a),e}catch(l){const e=l;if(!Te(e)){if(i.deleteThrottleMetadata(a),c)return te.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===e||void 0===e?void 0:e.message}]`),{appId:a,measurementId:c};throw l}const u=503===Number(null===(o=null===e||void 0===e?void 0:e.customData)||void 0===o?void 0:o.httpStatus)?(0,s.$s)(n,i.intervalMillis,fe):(0,s.$s)(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(a,h),te.debug(`Calling attemptFetch again in ${u} millis`),we(t,h,r,i)}}function be(t,e){return new Promise(((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener((()=>{clearTimeout(s),r(ne.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}function Te(t){if(!(t instanceof s.ZR)||!t.customData)return!1;const e=Number(t.customData["httpStatus"]);return 429===e||500===e||503===e||504===e}class Ee{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ce,Se;async function ke(t,e,n,r,i){if(i&&i.global)t("event",n,r);else{const i=await e,s=Object.assign(Object.assign({},r),{send_to:i});t("event",n,s)}}function Ie(t){Se=t}function xe(t){Ce=t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(){if(!(0,s.hl)())return te.warn(ne.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,s.eu)()}catch(t){return te.warn(ne.create("indexeddb-unavailable",{errorInfo:null===t||void 0===t?void 0:t.toString()}).message),!1}return!0}async function De(t,e,n,r,i,s,o){var a;const c=ve(t);c.then((e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&te.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>te.error(t))),e.push(c);const l=Ae().then((t=>t?r.getId():void 0)),[u,h]=await Promise.all([c,l]);de(s)||oe(s,u.measurementId),Se&&(i("consent","default",Se),Ie(void 0)),i("js",new Date);const d=null!==(a=null===o||void 0===o?void 0:o.config)&&void 0!==a?a:{};return d[Xt]="firebase",d.update=!0,null!=h&&(d[Yt]=h),i("config",u.measurementId,d),Ce&&(i("set",Ce),xe(void 0)),u.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t){this.app=t}_delete(){return delete Ne[this.app.options.appId],Promise.resolve()}}let Ne={},Oe=[];const Pe={};let Me,Le,Fe="dataLayer",Ue="gtag",Ve=!1;function je(){const t=[];if((0,s.ru)()&&t.push("This is a browser extension environment."),(0,s.zI)()||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),n=ne.create("invalid-analytics-context",{errorInfo:e});te.warn(n.message)}}function qe(t,e,n){je();const r=t.options.appId;if(!r)throw ne.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw ne.create("no-api-key");te.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Ne[r])throw ne.create("already-exists",{id:r});if(!Ve){ae(Fe);const{wrappedGtag:t,gtagCore:e}=he(Ne,Oe,Pe,Fe,Ue);Le=t,Me=e,Ve=!0}Ne[r]=De(t,Oe,Pe,e,Me,Fe,n);const i=new Re(t);return i}function Be(t=(0,r.Mq)()){t=(0,s.m9)(t);const e=(0,r.qX)(t,Gt);return e.isInitialized()?e.getImmediate():$e(t)}function $e(t,e={}){const n=(0,r.qX)(t,Gt);if(n.isInitialized()){const t=n.getImmediate();if((0,s.vZ)(e,n.getOptions()))return t;throw ne.create("already-initialized")}const i=n.initialize({options:e});return i}function ze(t,e,n,r){t=(0,s.m9)(t),ke(Le,Ne[t.app.options.appId],e,n,r).catch((t=>te.error(t)))}const He="@firebase/analytics",We="0.10.0";function Ke(){function t(t){try{const e=t.getProvider(Gt).getImmediate();return{logEvent:(t,n,r)=>ze(e,t,n,r)}}catch(e){throw ne.create("interop-component-reg-failed",{reason:e})}}(0,r.Xd)(new o.wA(Gt,((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return qe(n,r,e)}),"PUBLIC")),(0,r.Xd)(new o.wA("analytics-internal",t,"PRIVATE")),(0,r.KN)(He,We),(0,r.KN)(He,We,"esm2017")}Ke()},7795:function(t,e,n){"use strict";n.d(e,{ZF:function(){return r.ZF}});var r=n(1804),i="firebase",s="9.21.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,s,"app")},7130:function(t,e,n){"use strict";n.d(e,{U2:function(){return qo},N8:function(){return Qo},iH:function(){return Fo},Od:function(){return Vo},t8:function(){return jo}});n(7658);var r=n(1804),i=n(7142),s=n(223),o=n(5168);const a="@firebase/database",c="0.14.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l="";function u(t){l=t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,e){null==e?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),(0,s.Wl)(e))}get(t){const e=this.domStorage_.getItem(this.prefixedName_(t));return null==e?null:(0,s.cI)(e)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,e){null==e?delete this.cache_[t]:this.cache_[t]=e}get(t){return(0,s.r3)(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(t){try{if("undefined"!==typeof window&&"undefined"!==typeof window[t]){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new h(e)}}catch(e){}return new d},p=f("localStorage"),g=f("sessionStorage"),m=new o.Yd("@firebase/database"),y=function(){let t=1;return function(){return t++}}(),_=function(t){const e=(0,s.dS)(t),n=new s.gQ;n.update(e);const r=n.digest();return s.US.encodeByteArray(r)},v=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?e+=v.apply(null,r):e+="object"===typeof r?(0,s.Wl)(r):r,e+=" "}return e};let w=null,b=!0;const T=function(t,e){(0,s.hu)(!e||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(m.logLevel=o["in"].VERBOSE,w=m.log.bind(m),e&&g.set("logging_enabled",!0)):"function"===typeof t?w=t:(w=null,g.remove("logging_enabled"))},E=function(...t){if(!0===b&&(b=!1,null===w&&!0===g.get("logging_enabled")&&T(!0)),w){const e=v.apply(null,t);w(e)}},C=function(t){return function(...e){E(t,...e)}},S=function(...t){const e="FIREBASE INTERNAL ERROR: "+v(...t);m.error(e)},k=function(...t){const e=`FIREBASE FATAL ERROR: ${v(...t)}`;throw m.error(e),new Error(e)},I=function(...t){const e="FIREBASE WARNING: "+v(...t);m.warn(e)},x=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&I("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},A=function(t){return"number"===typeof t&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},D=function(t){if((0,s.Yr)()||"complete"===document.readyState)t();else{let e=!1;const n=function(){document.body?e||(e=!0,t()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},R="[MIN_NAME]",N="[MAX_NAME]",O=function(t,e){if(t===e)return 0;if(t===R||e===N)return-1;if(e===R||t===N)return 1;{const n=W(t),r=W(e);return null!==n?null!==r?n-r===0?t.length-e.length:n-r:-1:null!==r?1:t<e?-1:1}},P=function(t,e){return t===e?0:t<e?-1:1},M=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+(0,s.Wl)(e))},L=function(t){if("object"!==typeof t||null===t)return(0,s.Wl)(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)0!==r&&(n+=","),n+=(0,s.Wl)(e[r]),n+=":",n+=L(t[e[r]]);return n+="}",n},F=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function U(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const V=function(t){(0,s.hu)(!A(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,o,a,c,l;0===t?(o=0,a=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(t)/Math.LN2),r),o=c+r,a=Math.round(t*Math.pow(2,n-c)-Math.pow(2,n))):(o=0,a=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(l=e;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(i?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let t=parseInt(h.substr(l,8),2).toString(16);1===t.length&&(t="0"+t),d+=t}return d.toLowerCase()},j=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},q=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function B(t,e){let n="Unknown Error";"too_big"===t?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===t?n="Client doesn't have permission to access the desired data.":"unavailable"===t&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const $=new RegExp("^-?(0*)\\d{1,10}$"),z=-2147483648,H=2147483647,W=function(t){if($.test(t)){const e=Number(t);if(e>=z&&e<=H)return e}return null},K=function(t){try{t()}catch(e){setTimeout((()=>{const t=e.stack||"";throw I("Exception was thrown by user callback.",t),e}),Math.floor(0))}},G=function(){const t="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return t.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Y=function(t,e){const n=setTimeout(t,e);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X{constructor(t,e){this.appName_=t,this.appCheckProvider=e,this.appCheck=null===e||void 0===e?void 0:e.getImmediate({optional:!0}),this.appCheck||null===e||void 0===e||e.get().then((t=>this.appCheck=t))}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise(((e,n)=>{setTimeout((()=>{this.appCheck?this.getToken(t).then(e,n):e(null)}),0)}))}addTokenChangeListener(t){var e;null===(e=this.appCheckProvider)||void 0===e||e.get().then((e=>e.addTokenListener(t)))}notifyForInvalidToken(){I(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t,e,n){this.appName_=t,this.firebaseOptions_=e,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((t=>this.auth_=t))}getToken(t){return this.auth_?this.auth_.getToken(t).catch((t=>t&&"auth/token-not-initialized"===t.code?(E("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t))):new Promise(((e,n)=>{setTimeout((()=>{this.auth_?this.getToken(t).then(e,n):e(null)}),0)}))}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then((e=>e.addAuthTokenListener(t)))}removeTokenChangeListener(t){this.authProvider_.get().then((e=>e.removeAuthTokenListener(t)))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',I(t)}}class J{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}J.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="5",tt="v",et="s",nt="r",rt="f",it=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,st="ls",ot="p",at="ac",ct="websocket",lt="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut{constructor(t,e,n,r,i=!1,s="",o=!1,a=!1){this.secure=e,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+t)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",e=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${e}`}}function ht(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function dt(t,e,n){let r;if((0,s.hu)("string"===typeof e,"typeof type must == string"),(0,s.hu)("object"===typeof n,"typeof params must == object"),e===ct)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else{if(e!==lt)throw new Error("Unknown connection type: "+e);r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?"}ht(t)&&(n["ns"]=t.namespace);const i=[];return U(n,((t,e)=>{i.push(t+"="+e)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(){this.counters_={}}incrementCounter(t,e=1){(0,s.r3)(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e}get(){return(0,s.p$)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt={},gt={};function mt(t){const e=t.toString();return pt[e]||(pt[e]=new ft),pt[e]}function yt(t,e){const n=t.toString();return gt[n]||(gt[n]=e()),gt[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,e){this.pendingResponses[t]=e;while(this.pendingResponses[this.currentResponseNum]){const t=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let e=0;e<t.length;++e)t[e]&&K((()=>{this.onMessage_(t[e])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="start",wt="close",bt="pLPCommand",Tt="pRTLPCB",Et="id",Ct="pw",St="ser",kt="cb",It="seg",xt="ts",At="d",Dt="dframe",Rt=1870,Nt=30,Ot=Rt-Nt,Pt=25e3,Mt=3e4;class Lt{constructor(t,e,n,r,i,s,o){this.connId=t,this.repoInfo=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=C(t),this.stats_=mt(e),this.urlFn=t=>(this.appCheckToken&&(t[at]=this.appCheckToken),dt(e,lt,t))}open(t,e){this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new _t(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Mt)),D((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ft(((...t)=>{const[e,n,r,i,s]=t;if(this.incrementIncomingBytes_(t),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,e===vt)this.id=n,this.password=r;else{if(e!==wt)throw new Error("Unrecognized command received: "+e);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...t)=>{const[e,n]=t;this.incrementIncomingBytes_(t),this.myPacketOrderer.handleResponse(e,n)}),(()=>{this.onClosed_()}),this.urlFn);const t={};t[vt]="t",t[St]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(t[kt]=this.scriptTagHolder.uniqueCallbackIdentifier),t[tt]=Z,this.transportSessionId&&(t[et]=this.transportSessionId),this.lastSessionId&&(t[st]=this.lastSessionId),this.applicationId&&(t[ot]=this.applicationId),this.appCheckToken&&(t[at]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&it.test(location.hostname)&&(t[nt]=rt);const e=this.urlFn(t);this.log_("Connecting via long-poll to "+e),this.scriptTagHolder.addTag(e,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Lt.forceAllow_=!0}static forceDisallow(){Lt.forceDisallow_=!0}static isAvailable(){return!(0,s.Yr)()&&(!!Lt.forceAllow_||!Lt.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!j()&&!q())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const e=(0,s.Wl)(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=(0,s.h$)(e),r=F(n,Ot);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(t,e){if((0,s.Yr)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Dt]="t",n[Et]=t,n[Ct]=e,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const e=(0,s.Wl)(t).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}}class Ft{constructor(t,e,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,s.Yr)())this.commandCB=t,this.onMessageCB=e;else{this.uniqueCallbackIdentifier=y(),window[bt+this.uniqueCallbackIdentifier]=t,window[Tt+this.uniqueCallbackIdentifier]=e,this.myIFrame=Ft.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){const t=document.domain;n='<script>document.domain="'+t+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){E("frame writing exception"),i.stack&&E(i.stack),E(i)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(t);try{const e=t.contentWindow.document;e||E("No IE domain setting required")}catch(e){const n=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,e){this.myID=t,this.myPW=e,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[Et]=this.myID,t[Ct]=this.myPW,t[St]=this.currentSerial;let e=this.urlFn(t),n="",r=0;while(this.pendingSegs.length>0){const t=this.pendingSegs[0];if(!(t.d.length+Nt+n.length<=Rt))break;{const t=this.pendingSegs.shift();n=n+"&"+It+r+"="+t.seg+"&"+xt+r+"="+t.ts+"&"+At+r+"="+t.d,r++}}return e+=n,this.addLongPollTag_(e,this.currentSerial),!0}return!1}enqueueSegment(t,e,n){this.pendingSegs.push({seg:t,ts:e,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(t,e){this.outstandingRequests.add(e);const n=()=>{this.outstandingRequests.delete(e),this.newRequest_()},r=setTimeout(n,Math.floor(Pt)),i=()=>{clearTimeout(r),n()};this.addTag(t,i)}addTag(t,e){(0,s.Yr)()?this.doNodeLongPoll(t,e):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=t,n.onload=n.onreadystatechange=function(){const t=n.readyState;t&&"loaded"!==t&&"complete"!==t||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),e())},n.onerror=()=>{E("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=16384,Vt=45e3;let jt=null;"undefined"!==typeof MozWebSocket?jt=MozWebSocket:"undefined"!==typeof WebSocket&&(jt=WebSocket);class qt{constructor(t,e,n,r,i,s,o){this.connId=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=C(this.connId),this.stats_=mt(e),this.connURL=qt.connectionURL_(e,s,o,r,n),this.nodeAdmin=e.nodeAdmin}static connectionURL_(t,e,n,r,i){const o={};return o[tt]=Z,!(0,s.Yr)()&&"undefined"!==typeof location&&location.hostname&&it.test(location.hostname)&&(o[nt]=rt),e&&(o[et]=e),n&&(o[st]=n),r&&(o[at]=r),i&&(o[ot]=i),dt(t,ct,o)}open(t,e){this.onDisconnect=e,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{let t;if((0,s.Yr)()){const e=this.nodeAdmin?"AdminNode":"Node";t={headers:{"User-Agent":`Firebase/${Z}/${l}/${process.platform}/${e}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(t.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(t.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",VUE_APP_MASTER_CODE:"JM.gjpm!23A83g4x31",BASE_URL:"/"},r=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];r&&(t["proxy"]={origin:r})}this.mySock=new jt(this.connURL,[],t)}catch(n){this.log_("Error instantiating WebSocket.");const t=n.message||n.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=t=>{this.handleIncomingFrame(t)},this.mySock.onerror=t=>{this.log_("WebSocket error.  Closing connection.");const e=t.message||t.data;e&&this.log_(e),this.onClosed_()}}start(){}static forceDisallow(){qt.forceDisallow_=!0}static isAvailable(){let t=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const e=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(e);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==jt&&!qt.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const e=(0,s.cI)(t);this.onMessage(e)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if((0,s.hu)(null===this.frames,"We already have a frame buffer"),t.length<=6){const e=Number(t);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(null===this.mySock)return;const e=t["data"];if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e);else{const t=this.extractFrameCount_(e);null!==t&&this.appendFrame_(t)}}send(t){this.resetKeepAlive();const e=(0,s.Wl)(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=F(e,Ut);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(Vt))}sendString_(t){try{this.mySock.send(t)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qt.responsesRequiredToBeHealthy=2,qt.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bt{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Lt,qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const e=qt&&qt["isAvailable"]();let n=e&&!qt.previouslyFailed();if(t.webSocketOnly&&(e||I("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[qt];else{const t=this.transports_=[];for(const e of Bt.ALL_TRANSPORTS)e&&e["isAvailable"]()&&t.push(e);Bt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Bt.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $t=6e4,zt=5e3,Ht=10240,Wt=102400,Kt="t",Gt="d",Yt="s",Xt="r",Qt="e",Jt="o",Zt="a",te="n",ee="p",ne="h";class re{constructor(t,e,n,r,i,s,o,a,c,l){this.id=t,this.repoInfo_=e,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=C("c:"+this.id+":"),this.transportManager_=new Bt(e),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(e,n)}),Math.floor(0));const r=t["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=Y((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Wt?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ht?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return e=>{t===this.conn_?this.onConnectionLost_(e):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return e=>{2!==this.state_&&(t===this.rx_?this.onPrimaryMessageReceived_(e):t===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(t){const e={t:"d",d:t};this.sendData_(e)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Kt in t){const e=t[Kt];e===Zt?this.upgradeIfSecondaryHealthy_():e===Xt?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):e===Jt&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const e=M("t",t),n=M("d",t);if("c"===e)this.onSecondaryControl_(n);else{if("d"!==e)throw new Error("Unknown protocol layer: "+e);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ee,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Zt,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:te,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const e=M("t",t),n=M("d",t);"c"===e?this.onControl_(n):"d"===e&&this.onDataMessage_(n)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const e=M(Kt,t);if(Gt in t){const n=t[Gt];if(e===ne){const t=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(t.h=this.repoInfo_.host),this.onHandshake_(t)}else if(e===te){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let t=0;t<this.pendingDataMessages.length;++t)this.onDataMessage_(this.pendingDataMessages[t]);this.pendingDataMessages=[],this.tryCleanupConnection()}else e===Yt?this.onConnectionShutdown_(n):e===Xt?this.onReset_(n):e===Qt?S("Server Error: "+n):e===Jt?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):S("Unknown control packet command: "+e)}}onHandshake_(t){const e=t.ts,n=t.v,r=t.h;this.sessionId=t.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),Z!==n&&I("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,n),Y((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor($t))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,e){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(zt))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ee,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==t&&this.rx_!==t||this.close()}onConnectionLost_(t){this.conn_=null,t||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(t)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{put(t,e,n,r){}merge(t,e,n,r){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,e,n){}onDisconnectMerge(t,e,n){}onDisconnectCancel(t,e){}reportStats(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t){this.allowedEvents_=t,this.listeners_={},(0,s.hu)(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...e){if(Array.isArray(this.listeners_[t])){const n=[...this.listeners_[t]];for(let t=0;t<n.length;t++)n[t].callback.apply(n[t].context,e)}}on(t,e,n){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:n});const r=this.getInitialEvent(t);r&&e.apply(n,r)}off(t,e,n){this.validateEventType_(t);const r=this.listeners_[t]||[];for(let i=0;i<r.length;i++)if(r[i].callback===e&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(t){(0,s.hu)(this.allowedEvents_.find((e=>e===t)),"Unknown event: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe extends se{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,s.uI)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new oe}getInitialEvent(t){return(0,s.hu)("online"===t,"Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=32,ce=768;class le{constructor(t,e){if(void 0===e){this.pieces_=t.split("/");let e=0;for(let t=0;t<this.pieces_.length;t++)this.pieces_[t].length>0&&(this.pieces_[e]=this.pieces_[t],e++);this.pieces_.length=e,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=e}toString(){let t="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(t+="/"+this.pieces_[e]);return t||"/"}}function ue(){return new le("")}function he(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function de(t){return t.pieces_.length-t.pieceNum_}function fe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new le(t.pieces_,e)}function pe(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ge(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)""!==t.pieces_[n]&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function me(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ye(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new le(e,0)}function _e(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof le)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const t=e.split("/");for(let e=0;e<t.length;e++)t[e].length>0&&n.push(t[e])}return new le(n,0)}function ve(t){return t.pieceNum_>=t.pieces_.length}function we(t,e){const n=he(t),r=he(e);if(null===n)return e;if(n===r)return we(fe(t),fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function be(t,e){if(de(t)!==de(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Te(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(de(t)>de(e))return!1;while(n<t.pieces_.length){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Ee{constructor(t,e){this.errorPrefix_=e,this.parts_=me(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,s.ug)(this.parts_[n]);ke(this)}}function Ce(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=(0,s.ug)(e),ke(t)}function Se(t){const e=t.parts_.pop();t.byteLength_-=(0,s.ug)(e),t.parts_.length>0&&(t.byteLength_-=1)}function ke(t){if(t.byteLength_>ce)throw new Error(t.errorPrefix_+"has a key path longer than "+ce+" bytes ("+t.byteLength_+").");if(t.parts_.length>ae)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ae+") or object contains a cycle "+Ie(t))}function Ie(t){return 0===t.parts_.length?"":"in property '"+t.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends se{constructor(){let t,e;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(e="visibilitychange",t="hidden"):"undefined"!==typeof document["mozHidden"]?(e="mozvisibilitychange",t="mozHidden"):"undefined"!==typeof document["msHidden"]?(e="msvisibilitychange",t="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(e="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,(()=>{const e=!document[t];e!==this.visible_&&(this.visible_=e,this.trigger("visible",e))}),!1)}static getInstance(){return new xe}getInitialEvent(t){return(0,s.hu)("visible"===t,"Unknown event type: "+t),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=1e3,De=3e5,Re=3e4,Ne=1.3,Oe=3e4,Pe="server_kill",Me=3;class Le extends ie{constructor(t,e,n,r,i,o,a,c){if(super(),this.repoInfo_=t,this.applicationId_=e,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Le.nextPersistentConnectionId_++,this.log_=C("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ae,this.maxReconnectDelay_=De,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!(0,s.Yr)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xe.getInstance().on("visible",this.onVisible_,this),-1===t.host.indexOf("fblocal")&&oe.getInstance().on("online",this.onOnline_,this)}sendRequest(t,e,n){const r=++this.requestNumber_,i={r:r,a:t,b:e};this.log_((0,s.Wl)(i)),(0,s.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(t){this.initConnection_();const e=new s.BH,n={p:t._path.toString(),q:t._queryObject},r={action:"g",request:n,onComplete:t=>{const n=t["d"];"ok"===t["s"]?e.resolve(n):e.reject(n)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),e.promise}listen(t,e,n,r){this.initConnection_();const i=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),(0,s.hu)(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,s.hu)(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:e,query:t,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const e=this.outstandingGets_[t];this.sendRequest("g",e.request,(n=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),e.onComplete&&e.onComplete(n)}))}sendListen_(t){const e=t.query,n=e._path.toString(),r=e._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},s="q";t.tag&&(i["q"]=e._queryObject,i["t"]=t.tag),i["h"]=t.hashFn(),this.sendRequest(s,i,(i=>{const s=i["d"],o=i["s"];Le.warnOnListenWarnings_(s,e);const a=this.listens.get(n)&&this.listens.get(n).get(r);a===t&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),t.onComplete&&t.onComplete(o,s))}))}static warnOnListenWarnings_(t,e){if(t&&"object"===typeof t&&(0,s.r3)(t,"w")){const n=(0,s.DV)(t,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const t='".indexOn": "'+e._queryParams.getIndex().toString()+'"',n=e._path.toString();I(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${t} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){const e=t&&40===t.length;(e||(0,s.GJ)(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Re)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,e=(0,s.w9)(t)?"auth":"gauth",n={cred:t};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(e,n,(e=>{const n=e["s"],r=e["d"]||"error";this.authToken_===t&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(t=>{const e=t["s"],n=t["d"]||"error";"ok"===e?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(e,n)}))}unlisten(t,e){const n=t._path.toString(),r=t._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),(0,s.hu)(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,t._queryObject,e)}sendUnlisten_(t,e,n,r){this.log_("Unlisten on "+t+" for "+e);const i={p:t},s="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(s,i)}onDisconnectPut(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:e,onComplete:n})}onDisconnectMerge(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:e,onComplete:n})}onDisconnectCancel(t,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:e})}sendOnDisconnect_(t,e,n,r){const i={p:e,d:n};this.log_("onDisconnect "+t,i),this.sendRequest(t,i,(t=>{r&&setTimeout((()=>{r(t["s"],t["d"])}),Math.floor(0))}))}put(t,e,n,r){this.putInternal("p",t,e,n,r)}merge(t,e,n,r){this.putInternal("m",t,e,n,r)}putInternal(t,e,n,r,i){this.initConnection_();const s={p:e,d:n};void 0!==i&&(s["h"]=i),this.outstandingPuts_.push({action:t,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+e)}sendPut_(t){const e=this.outstandingPuts_[t].action,n=this.outstandingPuts_[t].request,r=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(e,n,(n=>{this.log_(e+" response",n),delete this.outstandingPuts_[t],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])}))}reportStats(t){if(this.connected_){const e={c:t};this.log_("reportStats",e),this.sendRequest("s",e,(t=>{const e=t["s"];if("ok"!==e){const e=t["d"];this.log_("reportStats","Error sending stats: "+e)}}))}}onDataMessage_(t){if("r"in t){this.log_("from server: "+(0,s.Wl)(t));const e=t["r"],n=this.requestCBHash_[e];n&&(delete this.requestCBHash_[e],n(t["b"]))}else{if("error"in t)throw"A server-side error has occurred: "+t["error"];"a"in t&&this.onDataPush_(t["a"],t["b"])}}onDataPush_(t,e){this.log_("handleServerMessage",t,e),"d"===t?this.onDataUpdate_(e["p"],e["d"],!1,e["t"]):"m"===t?this.onDataUpdate_(e["p"],e["d"],!0,e["t"]):"c"===t?this.onListenRevoked_(e["p"],e["q"]):"ac"===t?this.onAuthRevoked_(e["s"],e["d"]):"apc"===t?this.onAppCheckRevoked_(e["s"],e["d"]):"sd"===t?this.onSecurityDebugPacket_(e):S("Unrecognized action received from server: "+(0,s.Wl)(t)+"\nAre you using the latest client?")}onReady_(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){(0,s.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ae,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=Ae,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const t=(new Date).getTime()-this.lastConnectionEstablishedTime_;t>Oe&&(this.reconnectDelay_=Ae),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const t=(new Date).getTime()-this.lastConnectionAttemptTime_;let e=Math.max(0,this.reconnectDelay_-t);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ne)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),e=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Le.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},l=function(t){(0,s.hu)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(t)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?E("getToken() completed but was canceled"):(E("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=c&&c.token,a=new re(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,e,n,(t=>{I(t+" ("+this.repoInfo_.toString()+")"),this.interrupt(Pe)}),i))}catch(S){this.log_("Failed to get token: "+S),o||(this.repoInfo_.nodeAdmin&&I(S),c())}}}interrupt(t){E("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){E("Resuming connection for reason: "+t),delete this.interruptReasons_[t],(0,s.xb)(this.interruptReasons_)&&(this.reconnectDelay_=Ae,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const e=t-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const e=this.outstandingPuts_[t];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(t,e){let n;n=e?e.map((t=>L(t))).join("$"):"default";const r=this.removeListen_(t,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(t,e){const n=new le(t).toString();let r;if(this.listens.has(n)){const t=this.listens.get(n);r=t.get(e),t.delete(e),0===t.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(t,e){E("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Me&&(this.reconnectDelay_=Re,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,e){E("App check token revoked: "+t+"/"+e),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Me&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const e of t.values())this.sendListen_(e);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);while(this.onDisconnectRequestQueue_.length){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let e="js";(0,s.Yr)()&&(e=this.repoInfo_.nodeAdmin?"admin_node":"node"),t["sdk."+e+"."+l.replace(/\./g,"-")]=1,(0,s.uI)()?t["framework.cordova"]=1:(0,s.b$)()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=oe.getInstance().currentlyOnline();return(0,s.xb)(this.interruptReasons_)&&t}}Le.nextPersistentConnectionId_=0,Le.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe{constructor(t,e){this.name=t,this.node=e}static Wrap(t,e){return new Fe(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,e){const n=new Fe(R,t),r=new Fe(R,e);return 0!==this.compare(n,r)}minPost(){return Fe.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ve;class je extends Ue{static get __EMPTY_NODE(){return Ve}static set __EMPTY_NODE(t){Ve=t}compare(t,e){return O(t.name,e.name)}isDefinedOn(t){throw(0,s.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,e){return!1}minPost(){return Fe.MIN}maxPost(){return new Fe(N,Ve)}makePost(t,e){return(0,s.hu)("string"===typeof t,"KeyIndex indexValue must always be a string."),new Fe(t,Ve)}toString(){return".key"}}const qe=new je;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t,e,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;while(!t.isEmpty())if(s=e?n(t.key,e):1,r&&(s*=-1),s<0)t=this.isReverse_?t.left:t.right;else{if(0===s){this.nodeStack_.push(t);break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}getNext(){if(0===this.nodeStack_.length)return null;let t,e=this.nodeStack_.pop();if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_){e=e.left;while(!e.isEmpty())this.nodeStack_.push(e),e=e.right}else{e=e.right;while(!e.isEmpty())this.nodeStack_.push(e),e=e.left}return t}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class $e{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:$e.RED,this.left=null!=r?r:He.EMPTY_NODE,this.right=null!=i?i:He.EMPTY_NODE}copy(t,e,n,r,i){return new $e(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return He.EMPTY_NODE;let t=this;return t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,e){let n,r;if(n=this,e(t,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===e(t,n.key)){if(n.right.isEmpty())return He.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}$e.RED=!0,$e.BLACK=!1;class ze{copy(t,e,n,r,i){return this}insert(t,e,n){return new $e(t,e,null)}remove(t,e){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class He{constructor(t,e=He.EMPTY_NODE){this.comparator_=t,this.root_=e}insert(t,e){return new He(this.comparator_,this.root_.insert(t,e,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(t){return new He(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(t){let e,n=this.root_;while(!n.isEmpty()){if(e=this.comparator_(t,n.key),0===e)return n.value;e<0?n=n.left:e>0&&(n=n.right)}return null}getPredecessorKey(t){let e,n=this.root_,r=null;while(!n.isEmpty()){if(e=this.comparator_(t,n.key),0===e){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}e<0?n=n.left:e>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new Be(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,e){return new Be(this.root_,t,this.comparator_,!1,e)}getReverseIteratorFrom(t,e){return new Be(this.root_,t,this.comparator_,!0,e)}getReverseIterator(t){return new Be(this.root_,null,this.comparator_,!0,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function We(t,e){return O(t.name,e.name)}function Ke(t,e){return O(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ge;function Ye(t){Ge=t}He.EMPTY_NODE=new ze;const Xe=function(t){return"number"===typeof t?"number:"+V(t):"string:"+t},Qe=function(t){if(t.isLeafNode()){const e=t.val();(0,s.hu)("string"===typeof e||"number"===typeof e||"object"===typeof e&&(0,s.r3)(e,".sv"),"Priority must be a string or number.")}else(0,s.hu)(t===Ge||t.isEmpty(),"priority of unexpected type.");(0,s.hu)(t===Ge||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Je,Ze,tn;class en{constructor(t,e=en.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=e,this.lazyHash_=null,(0,s.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Qe(this.priorityNode_)}static set __childrenNodeConstructor(t){Je=t}static get __childrenNodeConstructor(){return Je}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new en(this.value_,t)}getImmediateChild(t){return".priority"===t?this.priorityNode_:en.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return ve(t)?this:".priority"===he(t)?this.priorityNode_:en.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,e){return null}updateImmediateChild(t,e){return".priority"===t?this.updatePriority(e):e.isEmpty()&&".priority"!==t?this:en.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,e).updatePriority(this.priorityNode_)}updateChild(t,e){const n=he(t);return null===n?e:e.isEmpty()&&".priority"!==n?this:((0,s.hu)(".priority"!==n||1===de(t),".priority must be the last token in a path"),this.updateImmediateChild(n,en.__childrenNodeConstructor.EMPTY_NODE.updateChild(fe(t),e)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,e){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Xe(this.priorityNode_.val())+":");const e=typeof this.value_;t+=e+":",t+="number"===e?V(this.value_):this.value_,this.lazyHash_=_(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===en.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof en.__childrenNodeConstructor?-1:((0,s.hu)(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const e=typeof t.value_,n=typeof this.value_,r=en.VALUE_TYPE_ORDER.indexOf(e),i=en.VALUE_TYPE_ORDER.indexOf(n);return(0,s.hu)(r>=0,"Unknown leaf type: "+e),(0,s.hu)(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const e=t;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1}}function nn(t){Ze=t}function rn(t){tn=t}en.VALUE_TYPE_ORDER=["object","boolean","number","string"];class sn extends Ue{compare(t,e){const n=t.node.getPriority(),r=e.node.getPriority(),i=n.compareTo(r);return 0===i?O(t.name,e.name):i}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,e){return!t.getPriority().equals(e.getPriority())}minPost(){return Fe.MIN}maxPost(){return new Fe(N,new en("[PRIORITY-POST]",tn))}makePost(t,e){const n=Ze(t);return new Fe(e,new en("[PRIORITY-POST]",n))}toString(){return".priority"}}const on=new sn,an=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t){const e=t=>parseInt(Math.log(t)/an,10),n=t=>parseInt(Array(t+1).join("1"),2);this.count=e(t+1),this.current_=this.count-1;const r=n(this.count);this.bits_=t+1&r}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const ln=function(t,e,n,r){t.sort(e);const i=function(e,r){const s=r-e;let o,a;if(0===s)return null;if(1===s)return o=t[e],a=n?n(o):o,new $e(a,o.node,$e.BLACK,null,null);{const c=parseInt(s/2,10)+e,l=i(e,c),u=i(c+1,r);return o=t[c],a=n?n(o):o,new $e(a,o.node,$e.BLACK,l,u)}},s=function(e){let r=null,s=null,o=t.length;const a=function(e,r){const s=o-e,a=o;o-=e;const l=i(s+1,a),u=t[s],h=n?n(u):u;c(new $e(h,u.node,r,null,l))},c=function(t){r?(r.left=t,r=t):(s=t,r=t)};for(let t=0;t<e.count;++t){const n=e.nextBitIsOne(),r=Math.pow(2,e.count-(t+1));n?a(r,$e.BLACK):(a(r,$e.BLACK),a(r,$e.RED))}return s},o=new cn(t.length),a=s(o);return new He(r||e,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un;const hn={};class dn{constructor(t,e){this.indexes_=t,this.indexSet_=e}static get Default(){return(0,s.hu)(hn&&on,"ChildrenNode.ts has not been loaded"),un=un||new dn({".priority":hn},{".priority":on}),un}get(t){const e=(0,s.DV)(this.indexes_,t);if(!e)throw new Error("No index defined for "+t);return e instanceof He?e:null}hasIndex(t){return(0,s.r3)(this.indexSet_,t.toString())}addIndex(t,e){(0,s.hu)(t!==qe,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=e.getIterator(Fe.Wrap);let o,a=i.getNext();while(a)r=r||t.isDefinedOn(a.node),n.push(a),a=i.getNext();o=r?ln(n,t.getCompare()):hn;const c=t.toString(),l=Object.assign({},this.indexSet_);l[c]=t;const u=Object.assign({},this.indexes_);return u[c]=o,new dn(u,l)}addToIndexes(t,e){const n=(0,s.UI)(this.indexes_,((n,r)=>{const i=(0,s.DV)(this.indexSet_,r);if((0,s.hu)(i,"Missing index implementation for "+r),n===hn){if(i.isDefinedOn(t.node)){const n=[],r=e.getIterator(Fe.Wrap);let s=r.getNext();while(s)s.name!==t.name&&n.push(s),s=r.getNext();return n.push(t),ln(n,i.getCompare())}return hn}{const r=e.get(t.name);let i=n;return r&&(i=i.remove(new Fe(t.name,r))),i.insert(t,t.node)}}));return new dn(n,this.indexSet_)}removeFromIndexes(t,e){const n=(0,s.UI)(this.indexes_,(n=>{if(n===hn)return n;{const r=e.get(t.name);return r?n.remove(new Fe(t.name,r)):n}}));return new dn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn;class pn{constructor(t,e,n){this.children_=t,this.priorityNode_=e,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Qe(this.priorityNode_),this.children_.isEmpty()&&(0,s.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fn||(fn=new pn(new He(Ke),null,dn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fn}updatePriority(t){return this.children_.isEmpty()?this:new pn(this.children_,t,this.indexMap_)}getImmediateChild(t){if(".priority"===t)return this.getPriority();{const e=this.children_.get(t);return null===e?fn:e}}getChild(t){const e=he(t);return null===e?this:this.getImmediateChild(e).getChild(fe(t))}hasChild(t){return null!==this.children_.get(t)}updateImmediateChild(t,e){if((0,s.hu)(e,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(e);{const n=new Fe(t,e);let r,i;e.isEmpty()?(r=this.children_.remove(t),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(t,e),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?fn:this.priorityNode_;return new pn(r,s,i)}}updateChild(t,e){const n=he(t);if(null===n)return e;{(0,s.hu)(".priority"!==he(t)||1===de(t),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(fe(t),e);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const e={};let n=0,r=0,i=!0;if(this.forEachChild(on,((s,o)=>{e[s]=o.val(t),n++,i&&pn.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1})),!t&&i&&r<2*n){const t=[];for(const n in e)t[n]=e[n];return t}return t&&!this.getPriority().isEmpty()&&(e[".priority"]=this.getPriority().val()),e}hash(){if(null===this.lazyHash_){let t="";this.getPriority().isEmpty()||(t+="priority:"+Xe(this.getPriority().val())+":"),this.forEachChild(on,((e,n)=>{const r=n.hash();""!==r&&(t+=":"+e+":"+r)})),this.lazyHash_=""===t?"":_(t)}return this.lazyHash_}getPredecessorChildName(t,e,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Fe(t,e));return n?n.name:null}return this.children_.getPredecessorKey(t)}getFirstChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.minKey();return t&&t.name}return this.children_.minKey()}getFirstChild(t){const e=this.getFirstChildName(t);return e?new Fe(e,this.children_.get(e)):null}getLastChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.maxKey();return t&&t.name}return this.children_.maxKey()}getLastChild(t){const e=this.getLastChildName(t);return e?new Fe(e,this.children_.get(e)):null}forEachChild(t,e){const n=this.resolveIndex_(t);return n?n.inorderTraversal((t=>e(t.name,t.node))):this.children_.inorderTraversal(e)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getIteratorFrom(t,(t=>t));{const n=this.children_.getIteratorFrom(t.name,Fe.Wrap);let r=n.peek();while(null!=r&&e.compare(r,t)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getReverseIteratorFrom(t,(t=>t));{const n=this.children_.getReverseIteratorFrom(t.name,Fe.Wrap);let r=n.peek();while(null!=r&&e.compare(r,t)>0)n.getNext(),r=n.peek();return n}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===mn?-1:0}withIndex(t){if(t===qe||this.indexMap_.hasIndex(t))return this;{const e=this.indexMap_.addIndex(t,this.children_);return new pn(this.children_,this.priorityNode_,e)}}isIndexed(t){return t===qe||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const e=t;if(this.getPriority().equals(e.getPriority())){if(this.children_.count()===e.children_.count()){const t=this.getIterator(on),n=e.getIterator(on);let r=t.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=t.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(t){return t===qe?null:this.indexMap_.get(t.toString())}}pn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gn extends pn{constructor(){super(new He(Ke),pn.EMPTY_NODE,dn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return pn.EMPTY_NODE}isEmpty(){return!1}}const mn=new gn;Object.defineProperties(Fe,{MIN:{value:new Fe(R,pn.EMPTY_NODE)},MAX:{value:new Fe(N,mn)}}),je.__EMPTY_NODE=pn.EMPTY_NODE,en.__childrenNodeConstructor=pn,Ye(mn),rn(mn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yn=!0;function _n(t,e=null){if(null===t)return pn.EMPTY_NODE;if("object"===typeof t&&".priority"in t&&(e=t[".priority"]),(0,s.hu)(null===e||"string"===typeof e||"number"===typeof e||"object"===typeof e&&".sv"in e,"Invalid priority type found: "+typeof e),"object"===typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!==typeof t||".sv"in t){const n=t;return new en(n,_n(e))}if(t instanceof Array||!yn){let n=pn.EMPTY_NODE;return U(t,((e,r)=>{if((0,s.r3)(t,e)&&"."!==e.substring(0,1)){const t=_n(r);!t.isLeafNode()&&t.isEmpty()||(n=n.updateImmediateChild(e,t))}})),n.updatePriority(_n(e))}{const n=[];let r=!1;const i=t;if(U(i,((t,e)=>{if("."!==t.substring(0,1)){const i=_n(e);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Fe(t,i)))}})),0===n.length)return pn.EMPTY_NODE;const s=ln(n,We,(t=>t.name),Ke);if(r){const t=ln(n,on.getCompare());return new pn(s,_n(e),new dn({".priority":t},{".priority":on}))}return new pn(s,_n(e),dn.Default)}}nn(_n);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vn extends Ue{constructor(t){super(),this.indexPath_=t,(0,s.hu)(!ve(t)&&".priority"!==he(t),"Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,e){const n=this.extractChild(t.node),r=this.extractChild(e.node),i=n.compareTo(r);return 0===i?O(t.name,e.name):i}makePost(t,e){const n=_n(t),r=pn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Fe(e,r)}maxPost(){const t=pn.EMPTY_NODE.updateChild(this.indexPath_,mn);return new Fe(N,t)}toString(){return me(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Ue{compare(t,e){const n=t.node.compareTo(e.node);return 0===n?O(t.name,e.name):n}isDefinedOn(t){return!0}indexedValueChanged(t,e){return!t.equals(e)}minPost(){return Fe.MIN}maxPost(){return Fe.MAX}makePost(t,e){const n=_n(t);return new Fe(e,n)}toString(){return".value"}}const bn=new wn;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t){return{type:"value",snapshotNode:t}}function En(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Cn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Sn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function kn(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t){this.index_=t}updateChild(t,e,n,r,i,o){(0,s.hu)(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=t.getImmediateChild(e);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?t:(null!=o&&(n.isEmpty()?t.hasChild(e)?o.trackChildChange(Cn(e,a)):(0,s.hu)(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(En(e,n)):o.trackChildChange(Sn(e,n,a))),t.isLeafNode()&&n.isEmpty()?t:t.updateImmediateChild(e,n).withIndex(this.index_))}updateFullNode(t,e,n){return null!=n&&(t.isLeafNode()||t.forEachChild(on,((t,r)=>{e.hasChild(t)||n.trackChildChange(Cn(t,r))})),e.isLeafNode()||e.forEachChild(on,((e,r)=>{if(t.hasChild(e)){const i=t.getImmediateChild(e);i.equals(r)||n.trackChildChange(Sn(e,r,i))}else n.trackChildChange(En(e,r))}))),e.withIndex(this.index_)}updatePriority(t,e){return t.isEmpty()?pn.EMPTY_NODE:t.updatePriority(e)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t){this.indexedFilter_=new In(t.getIndex()),this.index_=t.getIndex(),this.startPost_=xn.getStartPost_(t),this.endPost_=xn.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const e=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,n=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return e&&n}updateChild(t,e,n,r,i,s){return this.matches(new Fe(e,n))||(n=pn.EMPTY_NODE),this.indexedFilter_.updateChild(t,e,n,r,i,s)}updateFullNode(t,e,n){e.isLeafNode()&&(e=pn.EMPTY_NODE);let r=e.withIndex(this.index_);r=r.updatePriority(pn.EMPTY_NODE);const i=this;return e.forEachChild(on,((t,e)=>{i.matches(new Fe(t,e))||(r=r.updateImmediateChild(t,pn.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(t,r,n)}updatePriority(t,e){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const e=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),e)}return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const e=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),e)}return t.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(t){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const e=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?e<=0:e<0},this.withinEndPost=t=>{const e=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?e<=0:e<0},this.rangedFilter_=new xn(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,e,n,r,i,s){return this.rangedFilter_.matches(new Fe(e,n))||(n=pn.EMPTY_NODE),t.getImmediateChild(e).equals(n)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,e,n,r,i,s):this.fullLimitUpdateChild_(t,e,n,i,s)}updateFullNode(t,e,n){let r;if(e.isLeafNode()||e.isEmpty())r=pn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<e.numChildren()&&e.isIndexed(this.index_)){let t;r=pn.EMPTY_NODE.withIndex(this.index_),t=this.reverse_?e.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):e.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(t.hasNext()&&n<this.limit_){const e=t.getNext();if(this.withinDirectionalStart(e)){if(!this.withinDirectionalEnd(e))break;r=r.updateImmediateChild(e.name,e.node),n++}}}else{let t;r=e.withIndex(this.index_),r=r.updatePriority(pn.EMPTY_NODE),t=this.reverse_?r.getReverseIterator(this.index_):r.getIterator(this.index_);let n=0;while(t.hasNext()){const e=t.getNext(),i=n<this.limit_&&this.withinDirectionalStart(e)&&this.withinDirectionalEnd(e);i?n++:r=r.updateImmediateChild(e.name,pn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,r,n)}updatePriority(t,e){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,e,n,r,i){let o;if(this.reverse_){const t=this.index_.getCompare();o=(e,n)=>t(n,e)}else o=this.index_.getCompare();const a=t;(0,s.hu)(a.numChildren()===this.limit_,"");const c=new Fe(e,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(e)){const t=a.getImmediateChild(e);let s=r.getChildAfterChild(this.index_,l,this.reverse_);while(null!=s&&(s.name===e||a.hasChild(s.name)))s=r.getChildAfterChild(this.index_,s,this.reverse_);const h=null==s?1:o(s,c),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=i&&i.trackChildChange(Sn(e,n,t)),a.updateImmediateChild(e,n);{null!=i&&i.trackChildChange(Cn(e,t));const n=a.updateImmediateChild(e,pn.EMPTY_NODE),r=null!=s&&this.rangedFilter_.matches(s);return r?(null!=i&&i.trackChildChange(En(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?t:u&&o(l,c)>=0?(null!=i&&(i.trackChildChange(Cn(l.name,l.node)),i.trackChildChange(En(e,n))),a.updateImmediateChild(e,n).updateImmediateChild(l.name,pn.EMPTY_NODE)):t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=on}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,s.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,s.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:R}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,s.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,s.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:N}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,s.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===on}copy(){const t=new Dn;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function Rn(t){return t.loadsAllData()?new In(t.getIndex()):t.hasLimit()?new An(t):new xn(t)}function Nn(t){const e={};if(t.isDefault())return e;let n;if(t.index_===on?n="$priority":t.index_===bn?n="$value":t.index_===qe?n="$key":((0,s.hu)(t.index_ instanceof vn,"Unrecognized index type!"),n=t.index_.toString()),e["orderBy"]=(0,s.Wl)(n),t.startSet_){const n=t.startAfterSet_?"startAfter":"startAt";e[n]=(0,s.Wl)(t.indexStartValue_),t.startNameSet_&&(e[n]+=","+(0,s.Wl)(t.indexStartName_))}if(t.endSet_){const n=t.endBeforeSet_?"endBefore":"endAt";e[n]=(0,s.Wl)(t.indexEndValue_),t.endNameSet_&&(e[n]+=","+(0,s.Wl)(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e["limitToFirst"]=t.limit_:e["limitToLast"]=t.limit_),e}function On(t){const e={};if(t.startSet_&&(e["sp"]=t.indexStartValue_,t.startNameSet_&&(e["sn"]=t.indexStartName_),e["sin"]=!t.startAfterSet_),t.endSet_&&(e["ep"]=t.indexEndValue_,t.endNameSet_&&(e["en"]=t.indexEndName_),e["ein"]=!t.endBeforeSet_),t.limitSet_){e["l"]=t.limit_;let n=t.viewFrom_;""===n&&(n=t.isViewFromLeft()?"l":"r"),e["vf"]=n}return t.index_!==on&&(e["i"]=t.index_.toString()),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends ie{constructor(t,e,n,r){super(),this.repoInfo_=t,this.onDataUpdate_=e,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=C("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,e){return void 0!==e?"tag$"+e:((0,s.hu)(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,e,n,r){const i=t._path.toString();this.log_("Listen called for "+i+" "+t._queryIdentifier);const o=Pn.getListenId_(t,n),a={};this.listens_[o]=a;const c=Nn(t._queryParams);this.restRequest_(i+".json",c,((t,e)=>{let c=e;if(404===t&&(c=null,t=null),null===t&&this.onDataUpdate_(i,c,!1,n),(0,s.DV)(this.listens_,o)===a){let e;e=t?401===t?"permission_denied":"rest_error:"+t:"ok",r(e,null)}}))}unlisten(t,e){const n=Pn.getListenId_(t,e);delete this.listens_[n]}get(t){const e=Nn(t._queryParams),n=t._path.toString(),r=new s.BH;return this.restRequest_(n+".json",e,((t,e)=>{let i=e;404===t&&(i=null,t=null),null===t?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(t){}restRequest_(t,e={},n){return e["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(e["auth"]=r.accessToken),i&&i.token&&(e["ac"]=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+(0,s.xO)(e);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=(0,s.cI)(a.responseText)}catch(t){I("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&I("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(){this.rootNode_=pn.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(){return{value:null,children:new Map}}function Fn(t,e,n){if(ve(e))t.value=n,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(e,n);else{const r=he(e);t.children.has(r)||t.children.set(r,Ln());const i=t.children.get(r);e=fe(e),Fn(i,e,n)}}function Un(t,e,n){null!==t.value?n(e,t.value):Vn(t,((t,r)=>{const i=new le(e.toString()+"/"+t);Un(r,i,n)}))}function Vn(t,e){t.children.forEach(((t,n)=>{e(n,t)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),e=Object.assign({},t);return this.last_&&U(this.last_,((t,n)=>{e[t]=e[t]-n})),this.last_=t,e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=1e4,Bn=3e4,$n=3e5;class zn{constructor(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new jn(t);const n=qn+(Bn-qn)*Math.random();Y(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const t=this.statsListener_.get(),e={};let n=!1;U(t,((t,r)=>{r>0&&(0,s.r3)(this.statsToReport_,t)&&(e[t]=r,n=!0)})),n&&this.server_.reportStats(e),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*$n))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hn;function Wn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Kn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Gn(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["OVERWRITE"]=0]="OVERWRITE",t[t["MERGE"]=1]="MERGE",t[t["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",t[t["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Hn||(Hn={}));class Yn{constructor(t,e,n){this.path=t,this.affectedTree=e,this.revert=n,this.type=Hn.ACK_USER_WRITE,this.source=Wn()}operationForChild(t){if(ve(this.path)){if(null!=this.affectedTree.value)return(0,s.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const e=this.affectedTree.subtree(new le(t));return new Yn(ue(),e,this.revert)}}return(0,s.hu)(he(this.path)===t,"operationForChild called for unrelated child."),new Yn(fe(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,e){this.source=t,this.path=e,this.type=Hn.LISTEN_COMPLETE}operationForChild(t){return ve(this.path)?new Xn(this.source,ue()):new Xn(this.source,fe(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,e,n){this.source=t,this.path=e,this.snap=n,this.type=Hn.OVERWRITE}operationForChild(t){return ve(this.path)?new Qn(this.source,ue(),this.snap.getImmediateChild(t)):new Qn(this.source,fe(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(t,e,n){this.source=t,this.path=e,this.children=n,this.type=Hn.MERGE}operationForChild(t){if(ve(this.path)){const e=this.children.subtree(new le(t));return e.isEmpty()?null:e.value?new Qn(this.source,ue(),e.value):new Jn(this.source,ue(),e)}return(0,s.hu)(he(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Jn(this.source,fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(t,e,n){this.node_=t,this.fullyInitialized_=e,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(ve(t))return this.isFullyInitialized()&&!this.filtered_;const e=he(t);return this.isCompleteForChild(e)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function er(t,e,n,r){const i=[],s=[];return e.forEach((e=>{"child_changed"===e.type&&t.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)&&s.push(kn(e.childName,e.snapshotNode))})),nr(t,i,"child_removed",e,r,n),nr(t,i,"child_added",e,r,n),nr(t,i,"child_moved",s,r,n),nr(t,i,"child_changed",e,r,n),nr(t,i,"value",e,r,n),i}function nr(t,e,n,r,i,s){const o=r.filter((t=>t.type===n));o.sort(((e,n)=>ir(t,e,n))),o.forEach((n=>{const r=rr(t,n,s);i.forEach((i=>{i.respondsTo(n.type)&&e.push(i.createEvent(r,t.query_))}))}))}function rr(t,e,n){return"value"===e.type||"child_removed"===e.type||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ir(t,e,n){if(null==e.childName||null==n.childName)throw(0,s.g5)("Should only compare child_ events.");const r=new Fe(e.childName,e.snapshotNode),i=new Fe(n.childName,n.snapshotNode);return t.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t,e){return{eventCache:t,serverCache:e}}function or(t,e,n,r){return sr(new Zn(e,n,r),t.serverCache)}function ar(t,e,n,r){return sr(t.eventCache,new Zn(e,n,r))}function cr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function lr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ur;const hr=()=>(ur||(ur=new He(P)),ur);class dr{constructor(t,e=hr()){this.value=t,this.children=e}static fromObject(t){let e=new dr(null);return U(t,((t,n)=>{e=e.set(new le(t),n)})),e}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,e){if(null!=this.value&&e(this.value))return{path:ue(),value:this.value};if(ve(t))return null;{const n=he(t),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(fe(t),e);if(null!=i){const t=_e(new le(n),i.path);return{path:t,value:i.value}}return null}return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,(()=>!0))}subtree(t){if(ve(t))return this;{const e=he(t),n=this.children.get(e);return null!==n?n.subtree(fe(t)):new dr(null)}}set(t,e){if(ve(t))return new dr(e,this.children);{const n=he(t),r=this.children.get(n)||new dr(null),i=r.set(fe(t),e),s=this.children.insert(n,i);return new dr(this.value,s)}}remove(t){if(ve(t))return this.children.isEmpty()?new dr(null):new dr(null,this.children);{const e=he(t),n=this.children.get(e);if(n){const r=n.remove(fe(t));let i;return i=r.isEmpty()?this.children.remove(e):this.children.insert(e,r),null===this.value&&i.isEmpty()?new dr(null):new dr(this.value,i)}return this}}get(t){if(ve(t))return this.value;{const e=he(t),n=this.children.get(e);return n?n.get(fe(t)):null}}setTree(t,e){if(ve(t))return e;{const n=he(t),r=this.children.get(n)||new dr(null),i=r.setTree(fe(t),e);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new dr(this.value,s)}}fold(t){return this.fold_(ue(),t)}fold_(t,e){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(_e(t,r),e)})),e(t,this.value,n)}findOnPath(t,e){return this.findOnPath_(t,ue(),e)}findOnPath_(t,e,n){const r=!!this.value&&n(e,this.value);if(r)return r;if(ve(t))return null;{const r=he(t),i=this.children.get(r);return i?i.findOnPath_(fe(t),_e(e,r),n):null}}foreachOnPath(t,e){return this.foreachOnPath_(t,ue(),e)}foreachOnPath_(t,e,n){if(ve(t))return this;{this.value&&n(e,this.value);const r=he(t),i=this.children.get(r);return i?i.foreachOnPath_(fe(t),_e(e,r),n):new dr(null)}}foreach(t){this.foreach_(ue(),t)}foreach_(t,e){this.children.inorderTraversal(((n,r)=>{r.foreach_(_e(t,n),e)})),this.value&&e(t,this.value)}foreachChild(t){this.children.inorderTraversal(((e,n)=>{n.value&&t(e,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t){this.writeTree_=t}static empty(){return new fr(new dr(null))}}function pr(t,e,n){if(ve(e))return new fr(new dr(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(null!=r){const i=r.path;let s=r.value;const o=we(i,e);return s=s.updateChild(o,n),new fr(t.writeTree_.set(i,s))}{const r=new dr(n),i=t.writeTree_.setTree(e,r);return new fr(i)}}}function gr(t,e,n){let r=t;return U(n,((t,n)=>{r=pr(r,_e(e,t),n)})),r}function mr(t,e){if(ve(e))return fr.empty();{const n=t.writeTree_.setTree(e,new dr(null));return new fr(n)}}function yr(t,e){return null!=_r(t,e)}function _r(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return null!=n?t.writeTree_.get(n.path).getChild(we(n.path,e)):null}function vr(t){const e=[],n=t.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(on,((t,n)=>{e.push(new Fe(t,n))})):t.writeTree_.children.inorderTraversal(((t,n)=>{null!=n.value&&e.push(new Fe(t,n.value))})),e}function wr(t,e){if(ve(e))return t;{const n=_r(t,e);return new fr(null!=n?new dr(n):t.writeTree_.subtree(e))}}function br(t){return t.writeTree_.isEmpty()}function Tr(t,e){return Er(ue(),t.writeTree_,e)}function Er(t,e,n){if(null!=e.value)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal(((e,i)=>{".priority"===e?((0,s.hu)(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Er(_e(t,e),i,n)})),n.getChild(t).isEmpty()||null===r||(n=n.updateChild(_e(t,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(t,e){return Wr(e,t)}function Sr(t,e,n,r,i){(0,s.hu)(r>t.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=pr(t.visibleWrites,e,n)),t.lastWriteId=r}function kr(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Ir(t,e){const n=t.allWrites.findIndex((t=>t.writeId===e));(0,s.hu)(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,o=!1,a=t.allWrites.length-1;while(i&&a>=0){const e=t.allWrites[a];e.visible&&(a>=n&&xr(e,r.path)?i=!1:Te(r.path,e.path)&&(o=!0)),a--}if(i){if(o)return Ar(t),!0;if(r.snap)t.visibleWrites=mr(t.visibleWrites,r.path);else{const e=r.children;U(e,(e=>{t.visibleWrites=mr(t.visibleWrites,_e(r.path,e))}))}return!0}return!1}function xr(t,e){if(t.snap)return Te(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Te(_e(t.path,n),e))return!0;return!1}function Ar(t){t.visibleWrites=Rr(t.allWrites,Dr,ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Dr(t){return t.visible}function Rr(t,e,n){let r=fr.empty();for(let i=0;i<t.length;++i){const o=t[i];if(e(o)){const t=o.path;let e;if(o.snap)Te(n,t)?(e=we(n,t),r=pr(r,e,o.snap)):Te(t,n)&&(e=we(t,n),r=pr(r,ue(),o.snap.getChild(e)));else{if(!o.children)throw(0,s.g5)("WriteRecord should have .snap or .children");if(Te(n,t))e=we(n,t),r=gr(r,e,o.children);else if(Te(t,n))if(e=we(t,n),ve(e))r=gr(r,ue(),o.children);else{const t=(0,s.DV)(o.children,he(e));if(t){const n=t.getChild(fe(e));r=pr(r,ue(),n)}}}}}return r}function Nr(t,e,n,r,i){if(r||i){const s=wr(t.visibleWrites,e);if(!i&&br(s))return n;if(i||null!=n||yr(s,ue())){const s=function(t){return(t.visible||i)&&(!r||!~r.indexOf(t.writeId))&&(Te(t.path,e)||Te(e,t.path))},o=Rr(t.allWrites,s,e),a=n||pn.EMPTY_NODE;return Tr(o,a)}return null}{const r=_r(t.visibleWrites,e);if(null!=r)return r;{const r=wr(t.visibleWrites,e);if(br(r))return n;if(null!=n||yr(r,ue())){const t=n||pn.EMPTY_NODE;return Tr(r,t)}return null}}}function Or(t,e,n){let r=pn.EMPTY_NODE;const i=_r(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(on,((t,e)=>{r=r.updateImmediateChild(t,e)})),r;if(n){const i=wr(t.visibleWrites,e);return n.forEachChild(on,((t,e)=>{const n=Tr(wr(i,new le(t)),e);r=r.updateImmediateChild(t,n)})),vr(i).forEach((t=>{r=r.updateImmediateChild(t.name,t.node)})),r}{const n=wr(t.visibleWrites,e);return vr(n).forEach((t=>{r=r.updateImmediateChild(t.name,t.node)})),r}}function Pr(t,e,n,r,i){(0,s.hu)(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=_e(e,n);if(yr(t.visibleWrites,o))return null;{const e=wr(t.visibleWrites,o);return br(e)?i.getChild(n):Tr(e,i.getChild(n))}}function Mr(t,e,n,r){const i=_e(e,n),s=_r(t.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n)){const e=wr(t.visibleWrites,i);return Tr(e,r.getNode().getImmediateChild(n))}return null}function Lr(t,e){return _r(t.visibleWrites,e)}function Fr(t,e,n,r,i,s,o){let a;const c=wr(t.visibleWrites,e),l=_r(c,ue());if(null!=l)a=l;else{if(null==n)return[];a=Tr(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const t=[],e=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let c=n.getNext();while(c&&t.length<i)0!==e(c,r)&&t.push(c),c=n.getNext();return t}}function Ur(){return{visibleWrites:fr.empty(),allWrites:[],lastWriteId:-1}}function Vr(t,e,n,r){return Nr(t.writeTree,t.treePath,e,n,r)}function jr(t,e){return Or(t.writeTree,t.treePath,e)}function qr(t,e,n,r){return Pr(t.writeTree,t.treePath,e,n,r)}function Br(t,e){return Lr(t.writeTree,_e(t.treePath,e))}function $r(t,e,n,r,i,s){return Fr(t.writeTree,t.treePath,e,n,r,i,s)}function zr(t,e,n){return Mr(t.writeTree,t.treePath,e,n)}function Hr(t,e){return Wr(_e(t.treePath,e),t.writeTree)}function Wr(t,e){return{treePath:t,writeTree:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.changeMap=new Map}trackChildChange(t){const e=t.type,n=t.childName;(0,s.hu)("child_added"===e||"child_changed"===e||"child_removed"===e,"Only child changes supported for tracking"),(0,s.hu)(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===e&&"child_removed"===i)this.changeMap.set(n,Sn(n,t.snapshotNode,r.snapshotNode));else if("child_removed"===e&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===e&&"child_changed"===i)this.changeMap.set(n,Cn(n,r.oldSnap));else if("child_changed"===e&&"child_added"===i)this.changeMap.set(n,En(n,t.snapshotNode));else{if("child_changed"!==e||"child_changed"!==i)throw(0,s.g5)("Illegal combination of changes: "+t+" occurred after "+r);this.changeMap.set(n,Sn(n,t.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,t)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{getCompleteChild(t){return null}getChildAfterChild(t,e,n){return null}}const Yr=new Gr;class Xr{constructor(t,e,n=null){this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=n}getCompleteChild(t){const e=this.viewCache_.eventCache;if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t);{const e=null!=this.optCompleteServerCache_?new Zn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zr(this.writes_,t,e)}}getChildAfterChild(t,e,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:lr(this.viewCache_),i=$r(this.writes_,r,e,1,n,t);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(t){return{filter:t}}function Jr(t,e){(0,s.hu)(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),(0,s.hu)(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Zr(t,e,n,r,i){const o=new Kr;let a,c;if(n.type===Hn.OVERWRITE){const l=n;l.source.fromUser?a=ri(t,e,l.path,l.snap,r,i,o):((0,s.hu)(l.source.fromServer,"Unknown source."),c=l.source.tagged||e.serverCache.isFiltered()&&!ve(l.path),a=ni(t,e,l.path,l.snap,r,i,c,o))}else if(n.type===Hn.MERGE){const l=n;l.source.fromUser?a=si(t,e,l.path,l.children,r,i,o):((0,s.hu)(l.source.fromServer,"Unknown source."),c=l.source.tagged||e.serverCache.isFiltered(),a=ai(t,e,l.path,l.children,r,i,c,o))}else if(n.type===Hn.ACK_USER_WRITE){const s=n;a=s.revert?ui(t,e,s.path,r,i,o):ci(t,e,s.path,s.affectedTree,r,i,o)}else{if(n.type!==Hn.LISTEN_COMPLETE)throw(0,s.g5)("Unknown operation type: "+n.type);a=li(t,e,n.path,r,o)}const l=o.getChanges();return ti(e,a,l),{viewCache:a,changes:l}}function ti(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=cr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Tn(cr(e)))}}function ei(t,e,n,r,i,o){const a=e.eventCache;if(null!=Br(r,n))return e;{let c,l;if(ve(n))if((0,s.hu)(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const n=lr(e),i=n instanceof pn?n:pn.EMPTY_NODE,s=jr(r,i);c=t.filter.updateFullNode(e.eventCache.getNode(),s,o)}else{const n=Vr(r,lr(e));c=t.filter.updateFullNode(e.eventCache.getNode(),n,o)}else{const u=he(n);if(".priority"===u){(0,s.hu)(1===de(n),"Can't have a priority with additional path components");const i=a.getNode();l=e.serverCache.getNode();const o=qr(r,n,i,l);c=null!=o?t.filter.updatePriority(i,o):a.getNode()}else{const s=fe(n);let h;if(a.isCompleteForChild(u)){l=e.serverCache.getNode();const t=qr(r,n,a.getNode(),l);h=null!=t?a.getNode().getImmediateChild(u).updateChild(s,t):a.getNode().getImmediateChild(u)}else h=zr(r,u,e.serverCache);c=null!=h?t.filter.updateChild(a.getNode(),u,h,s,i,o):a.getNode()}}return or(e,c,a.isFullyInitialized()||ve(n),t.filter.filtersNodes())}}function ni(t,e,n,r,i,s,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(ve(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const t=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),t,null)}else{const t=he(n);if(!c.isCompleteForPath(n)&&de(n)>1)return e;const i=fe(n),s=c.getNode().getImmediateChild(t),o=s.updateChild(i,r);l=".priority"===t?u.updatePriority(c.getNode(),o):u.updateChild(c.getNode(),t,o,i,Yr,null)}const h=ar(e,l,c.isFullyInitialized()||ve(n),u.filtersNodes()),d=new Xr(i,h,s);return ei(t,h,n,i,d,a)}function ri(t,e,n,r,i,s,o){const a=e.eventCache;let c,l;const u=new Xr(i,e,s);if(ve(n))l=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=or(e,l,!0,t.filter.filtersNodes());else{const i=he(n);if(".priority"===i)l=t.filter.updatePriority(e.eventCache.getNode(),r),c=or(e,l,a.isFullyInitialized(),a.isFiltered());else{const s=fe(n),l=a.getNode().getImmediateChild(i);let h;if(ve(s))h=r;else{const t=u.getCompleteChild(i);h=null!=t?".priority"===pe(s)&&t.getChild(ye(s)).isEmpty()?t:t.updateChild(s,r):pn.EMPTY_NODE}if(l.equals(h))c=e;else{const n=t.filter.updateChild(a.getNode(),i,h,s,u,o);c=or(e,n,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function ii(t,e){return t.eventCache.isCompleteForChild(e)}function si(t,e,n,r,i,s,o){let a=e;return r.foreach(((r,c)=>{const l=_e(n,r);ii(e,he(l))&&(a=ri(t,a,l,c,i,s,o))})),r.foreach(((r,c)=>{const l=_e(n,r);ii(e,he(l))||(a=ri(t,a,l,c,i,s,o))})),a}function oi(t,e,n){return n.foreach(((t,n)=>{e=e.updateChild(t,n)})),e}function ai(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c,l=e;c=ve(n)?r:new dr(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const c=e.serverCache.getNode().getImmediateChild(n),u=oi(t,c,r);l=ni(t,l,new le(n),u,i,s,o,a)}})),c.children.inorderTraversal(((n,r)=>{const c=!e.serverCache.isCompleteForChild(n)&&null===r.value;if(!u.hasChild(n)&&!c){const c=e.serverCache.getNode().getImmediateChild(n),u=oi(t,c,r);l=ni(t,l,new le(n),u,i,s,o,a)}})),l}function ci(t,e,n,r,i,s,o){if(null!=Br(i,n))return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(null!=r.value){if(ve(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ni(t,e,n,c.getNode().getChild(n),i,s,a,o);if(ve(n)){let r=new dr(null);return c.getNode().forEachChild(qe,((t,e)=>{r=r.set(new le(t),e)})),ai(t,e,n,r,i,s,a,o)}return e}{let l=new dr(null);return r.foreach(((t,e)=>{const r=_e(n,t);c.isCompleteForPath(r)&&(l=l.set(t,c.getNode().getChild(r)))})),ai(t,e,n,l,i,s,a,o)}}function li(t,e,n,r,i){const s=e.serverCache,o=ar(e,s.getNode(),s.isFullyInitialized()||ve(n),s.isFiltered());return ei(t,o,n,r,Yr,i)}function ui(t,e,n,r,i,o){let a;if(null!=Br(r,n))return e;{const c=new Xr(r,e,i),l=e.eventCache.getNode();let u;if(ve(n)||".priority"===he(n)){let n;if(e.serverCache.isFullyInitialized())n=Vr(r,lr(e));else{const t=e.serverCache.getNode();(0,s.hu)(t instanceof pn,"serverChildren would be complete if leaf node"),n=jr(r,t)}u=t.filter.updateFullNode(l,n,o)}else{const i=he(n);let s=zr(r,i,e.serverCache);null==s&&e.serverCache.isCompleteForChild(i)&&(s=l.getImmediateChild(i)),u=null!=s?t.filter.updateChild(l,i,s,fe(n),c,o):e.eventCache.getNode().hasChild(i)?t.filter.updateChild(l,i,pn.EMPTY_NODE,fe(n),c,o):l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=Vr(r,lr(e)),a.isLeafNode()&&(u=t.filter.updateFullNode(u,a,o)))}return a=e.serverCache.isFullyInitialized()||null!=Br(r,ue()),or(e,u,a,t.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t,e){this.query_=t,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new In(n.getIndex()),i=Rn(n);this.processor_=Qr(i);const s=e.serverCache,o=e.eventCache,a=r.updateFullNode(pn.EMPTY_NODE,s.getNode(),null),c=i.updateFullNode(pn.EMPTY_NODE,o.getNode(),null),l=new Zn(a,s.isFullyInitialized(),r.filtersNodes()),u=new Zn(c,o.isFullyInitialized(),i.filtersNodes());this.viewCache_=sr(u,l),this.eventGenerator_=new tr(this.query_)}get query(){return this.query_}}function di(t){return t.viewCache_.serverCache.getNode()}function fi(t){return cr(t.viewCache_)}function pi(t,e){const n=lr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ve(e)&&!n.getImmediateChild(he(e)).isEmpty())?n.getChild(e):null}function gi(t){return 0===t.eventRegistrations_.length}function mi(t,e){t.eventRegistrations_.push(e)}function yi(t,e,n){const r=[];if(n){(0,s.hu)(null==e,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach((t=>{const e=t.createCancelEvent(n,i);e&&r.push(e)}))}if(e){let n=[];for(let r=0;r<t.eventRegistrations_.length;++r){const i=t.eventRegistrations_[r];if(i.matches(e)){if(e.hasAnyCallback()){n=n.concat(t.eventRegistrations_.slice(r+1));break}}else n.push(i)}t.eventRegistrations_=n}else t.eventRegistrations_=[];return r}function _i(t,e,n,r){e.type===Hn.MERGE&&null!==e.source.queryId&&((0,s.hu)(lr(t.viewCache_),"We should always have a full cache before handling merges"),(0,s.hu)(cr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,o=Zr(t.processor_,i,e,n,r);return Jr(t.processor_,o.viewCache),(0,s.hu)(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=o.viewCache,wi(t,o.changes,o.viewCache.eventCache.getNode(),null)}function vi(t,e){const n=t.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){const t=n.getNode();t.forEachChild(on,((t,e)=>{r.push(En(t,e))}))}return n.isFullyInitialized()&&r.push(Tn(n.getNode())),wi(t,r,n.getNode(),e)}function wi(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return er(t.eventGenerator_,e,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bi,Ti;class Ei{constructor(){this.views=new Map}}function Ci(t){(0,s.hu)(!bi,"__referenceConstructor has already been defined"),bi=t}function Si(){return(0,s.hu)(bi,"Reference.ts has not been loaded"),bi}function ki(t){return 0===t.views.size}function Ii(t,e,n,r){const i=e.source.queryId;if(null!==i){const o=t.views.get(i);return(0,s.hu)(null!=o,"SyncTree gave us an op for an invalid query."),_i(o,e,n,r)}{let i=[];for(const s of t.views.values())i=i.concat(_i(s,e,n,r));return i}}function xi(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let t=Vr(n,i?r:null),s=!1;t?s=!0:r instanceof pn?(t=jr(n,r),s=!1):(t=pn.EMPTY_NODE,s=!1);const o=sr(new Zn(t,s,!1),new Zn(r,i,!1));return new hi(e,o)}return o}function Ai(t,e,n,r,i,s){const o=xi(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),mi(o,n),vi(o,n)}function Di(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Mi(t);if("default"===i)for(const[c,l]of t.views.entries())o=o.concat(yi(l,n,r)),gi(l)&&(t.views.delete(c),l.query._queryParams.loadsAllData()||s.push(l.query));else{const e=t.views.get(i);e&&(o=o.concat(yi(e,n,r)),gi(e)&&(t.views.delete(i),e.query._queryParams.loadsAllData()||s.push(e.query)))}return a&&!Mi(t)&&s.push(new(Si())(e._repo,e._path)),{removed:s,events:o}}function Ri(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ni(t,e){let n=null;for(const r of t.views.values())n=n||pi(r,e);return n}function Oi(t,e){const n=e._queryParams;if(n.loadsAllData())return Li(t);{const n=e._queryIdentifier;return t.views.get(n)}}function Pi(t,e){return null!=Oi(t,e)}function Mi(t){return null!=Li(t)}function Li(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t){(0,s.hu)(!Ti,"__referenceConstructor has already been defined"),Ti=t}function Ui(){return(0,s.hu)(Ti,"Reference.ts has not been loaded"),Ti}let Vi=1;class ji{constructor(t){this.listenProvider_=t,this.syncPointTree_=new dr(null),this.pendingWriteTree_=Ur(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function qi(t,e,n,r,i){return Sr(t.pendingWriteTree_,e,n,r,i),i?Zi(t,new Qn(Wn(),e,n)):[]}function Bi(t,e,n=!1){const r=kr(t.pendingWriteTree_,e),i=Ir(t.pendingWriteTree_,e);if(i){let e=new dr(null);return null!=r.snap?e=e.set(ue(),!0):U(r.children,(t=>{e=e.set(new le(t),!0)})),Zi(t,new Yn(r.path,e,n))}return[]}function $i(t,e,n){return Zi(t,new Qn(Kn(),e,n))}function zi(t,e,n){const r=dr.fromObject(n);return Zi(t,new Jn(Kn(),e,r))}function Hi(t,e){return Zi(t,new Xn(Kn(),e))}function Wi(t,e,n){const r=ss(t,n);if(r){const n=os(r),i=n.path,s=n.queryId,o=we(i,e),a=new Xn(Gn(s),o);return as(t,i,a)}return[]}function Ki(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&("default"===e._queryIdentifier||Pi(o,e))){const c=Di(o,e,n,r);ki(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const l=c.removed;if(a=c.events,!i){const n=-1!==l.findIndex((t=>t._queryParams.loadsAllData())),i=t.syncPointTree_.findOnPath(s,((t,e)=>Mi(e)));if(n&&!i){const e=t.syncPointTree_.subtree(s);if(!e.isEmpty()){const n=cs(e);for(let e=0;e<n.length;++e){const r=n[e],i=r.query,s=ns(t,r);t.listenProvider_.startListening(ls(i),rs(t,i),s.hashFn,s.onComplete)}}}if(!i&&l.length>0&&!r)if(n){const n=null;t.listenProvider_.stopListening(ls(e),n)}else l.forEach((e=>{const n=t.queryToTagMap.get(is(e));t.listenProvider_.stopListening(ls(e),n)}))}us(t,l)}return a}function Gi(t,e,n,r){const i=ss(t,r);if(null!=i){const r=os(i),s=r.path,o=r.queryId,a=we(s,e),c=new Qn(Gn(o),a,n);return as(t,s,c)}return[]}function Yi(t,e,n,r){const i=ss(t,r);if(i){const r=os(i),s=r.path,o=r.queryId,a=we(s,e),c=dr.fromObject(n),l=new Jn(Gn(o),a,c);return as(t,s,l)}return[]}function Xi(t,e,n,r=!1){const i=e._path;let o=null,a=!1;t.syncPointTree_.foreachOnPath(i,((t,e)=>{const n=we(t,i);o=o||Ni(e,n),a=a||Mi(e)}));let c,l=t.syncPointTree_.get(i);if(l?(a=a||Mi(l),o=o||Ni(l,ue())):(l=new Ei,t.syncPointTree_=t.syncPointTree_.set(i,l)),null!=o)c=!0;else{c=!1,o=pn.EMPTY_NODE;const e=t.syncPointTree_.subtree(i);e.foreachChild(((t,e)=>{const n=Ni(e,ue());n&&(o=o.updateImmediateChild(t,n))}))}const u=Pi(l,e);if(!u&&!e._queryParams.loadsAllData()){const n=is(e);(0,s.hu)(!t.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=hs();t.queryToTagMap.set(n,r),t.tagToQueryMap.set(r,n)}const h=Cr(t.pendingWriteTree_,i);let d=Ai(l,e,n,h,o,c);if(!u&&!a&&!r){const n=Oi(l,e);d=d.concat(ds(t,e,n))}return d}function Qi(t,e,n){const r=!0,i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,((t,n)=>{const r=we(t,e),i=Ni(n,r);if(i)return i}));return Nr(i,e,s,n,r)}function Ji(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,((t,e)=>{const i=we(t,n);r=r||Ni(e,i)}));let i=t.syncPointTree_.get(n);i?r=r||Ni(i,ue()):(i=new Ei,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=null!=r,o=s?new Zn(r,!0,!1):null,a=Cr(t.pendingWriteTree_,e._path),c=xi(i,e,a,s?o.getNode():pn.EMPTY_NODE,s);return fi(c)}function Zi(t,e){return ts(e,t.syncPointTree_,null,Cr(t.pendingWriteTree_,ue()))}function ts(t,e,n,r){if(ve(t.path))return es(t,e,n,r);{const i=e.get(ue());null==n&&null!=i&&(n=Ni(i,ue()));let s=[];const o=he(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const t=n?n.getImmediateChild(o):null,e=Hr(r,o);s=s.concat(ts(a,c,t,e))}return i&&(s=s.concat(Ii(i,t,r,n))),s}}function es(t,e,n,r){const i=e.get(ue());null==n&&null!=i&&(n=Ni(i,ue()));let s=[];return e.children.inorderTraversal(((e,i)=>{const o=n?n.getImmediateChild(e):null,a=Hr(r,e),c=t.operationForChild(e);c&&(s=s.concat(es(c,i,o,a)))})),i&&(s=s.concat(Ii(i,t,r,n))),s}function ns(t,e){const n=e.query,r=rs(t,n);return{hashFn:()=>{const t=di(e)||pn.EMPTY_NODE;return t.hash()},onComplete:e=>{if("ok"===e)return r?Wi(t,n._path,r):Hi(t,n._path);{const r=B(e,n);return Ki(t,n,null,r)}}}}function rs(t,e){const n=is(e);return t.queryToTagMap.get(n)}function is(t){return t._path.toString()+"$"+t._queryIdentifier}function ss(t,e){return t.tagToQueryMap.get(e)}function os(t){const e=t.indexOf("$");return(0,s.hu)(-1!==e&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new le(t.substr(0,e))}}function as(t,e,n){const r=t.syncPointTree_.get(e);(0,s.hu)(r,"Missing sync point for query tag that we're tracking");const i=Cr(t.pendingWriteTree_,e);return Ii(r,n,i,null)}function cs(t){return t.fold(((t,e,n)=>{if(e&&Mi(e)){const t=Li(e);return[t]}{let t=[];return e&&(t=Ri(e)),U(n,((e,n)=>{t=t.concat(n)})),t}}))}function ls(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Ui())(t._repo,t._path):t}function us(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const e=is(r),n=t.queryToTagMap.get(e);t.queryToTagMap.delete(e),t.tagToQueryMap.delete(n)}}}function hs(){return Vi++}function ds(t,e,n){const r=e._path,i=rs(t,e),o=ns(t,n),a=t.listenProvider_.startListening(ls(e),i,o.hashFn,o.onComplete),c=t.syncPointTree_.subtree(r);if(i)(0,s.hu)(!Mi(c.value),"If we're adding a query, it shouldn't be shadowed");else{const e=c.fold(((t,e,n)=>{if(!ve(t)&&e&&Mi(e))return[Li(e).query];{let t=[];return e&&(t=t.concat(Ri(e).map((t=>t.query)))),U(n,((e,n)=>{t=t.concat(n)})),t}}));for(let n=0;n<e.length;++n){const r=e[n];t.listenProvider_.stopListening(ls(r),rs(t,r))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(t){this.node_=t}getImmediateChild(t){const e=this.node_.getImmediateChild(t);return new fs(e)}node(){return this.node_}}class ps{constructor(t,e){this.syncTree_=t,this.path_=e}getImmediateChild(t){const e=_e(this.path_,t);return new ps(this.syncTree_,e)}node(){return Qi(this.syncTree_,this.path_)}}const gs=function(t){return t=t||{},t["timestamp"]=t["timestamp"]||(new Date).getTime(),t},ms=function(t,e,n){return t&&"object"===typeof t?((0,s.hu)(".sv"in t,"Unexpected leaf node or priority contents"),"string"===typeof t[".sv"]?ys(t[".sv"],e,n):"object"===typeof t[".sv"]?_s(t[".sv"],e):void(0,s.hu)(!1,"Unexpected server value: "+JSON.stringify(t,null,2))):t},ys=function(t,e,n){switch(t){case"timestamp":return n["timestamp"];default:(0,s.hu)(!1,"Unexpected server value: "+t)}},_s=function(t,e,n){t.hasOwnProperty("increment")||(0,s.hu)(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t["increment"];"number"!==typeof r&&(0,s.hu)(!1,"Unexpected increment value: "+r);const i=e.node();if((0,s.hu)(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i,a=o.getValue();return"number"!==typeof a?r:a+r},vs=function(t,e,n,r){return bs(e,new ps(n,t),r)},ws=function(t,e,n){return bs(t,new fs(e),n)};function bs(t,e,n){const r=t.getPriority().val(),i=ms(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const r=t,s=ms(r.getValue(),e,n);return s!==r.getValue()||i!==r.getPriority().val()?new en(s,_n(i)):t}{const r=t;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new en(i))),r.forEachChild(on,((t,r)=>{const i=bs(r,e.getImmediateChild(t),n);i!==r&&(s=s.updateImmediateChild(t,i))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(t="",e=null,n={children:{},childCount:0}){this.name=t,this.parent=e,this.node=n}}function Es(t,e){let n=e instanceof le?e:new le(e),r=t,i=he(n);while(null!==i){const t=(0,s.DV)(r.node.children,i)||{children:{},childCount:0};r=new Ts(i,r,t),n=fe(n),i=he(n)}return r}function Cs(t){return t.node.value}function Ss(t,e){t.node.value=e,Ns(t)}function ks(t){return t.node.childCount>0}function Is(t){return void 0===Cs(t)&&!ks(t)}function xs(t,e){U(t.node.children,((n,r)=>{e(new Ts(n,t,r))}))}function As(t,e,n,r){n&&!r&&e(t),xs(t,(t=>{As(t,e,!0,r)})),n&&r&&e(t)}function Ds(t,e,n){let r=n?t:t.parent;while(null!==r){if(e(r))return!0;r=r.parent}return!1}function Rs(t){return new le(null===t.parent?t.name:Rs(t.parent)+"/"+t.name)}function Ns(t){null!==t.parent&&Os(t.parent,t.name,t)}function Os(t,e,n){const r=Is(n),i=(0,s.r3)(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Ns(t)):r||i||(t.node.children[e]=n.node,t.node.childCount++,Ns(t))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=/[\[\].#$\/\u0000-\u001F\u007F]/,Ms=/[\[\].#$\u0000-\u001F\u007F]/,Ls=10485760,Fs=function(t){return"string"===typeof t&&0!==t.length&&!Ps.test(t)},Us=function(t){return"string"===typeof t&&0!==t.length&&!Ms.test(t)},Vs=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Us(t)},js=function(t,e,n,r){r&&void 0===e||qs((0,s.gK)(t,"value"),e,n)},qs=function(t,e,n){const r=n instanceof le?new Ee(n,t):n;if(void 0===e)throw new Error(t+"contains undefined "+Ie(r));if("function"===typeof e)throw new Error(t+"contains a function "+Ie(r)+" with contents = "+e.toString());if(A(e))throw new Error(t+"contains "+e.toString()+" "+Ie(r));if("string"===typeof e&&e.length>Ls/3&&(0,s.ug)(e)>Ls)throw new Error(t+"contains a string greater than "+Ls+" utf8 bytes "+Ie(r)+" ('"+e.substring(0,50)+"...')");if(e&&"object"===typeof e){let n=!1,i=!1;if(U(e,((e,s)=>{if(".value"===e)n=!0;else if(".priority"!==e&&".sv"!==e&&(i=!0,!Fs(e)))throw new Error(t+" contains an invalid key ("+e+") "+Ie(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Ce(r,e),qs(t,s,r),Se(r)})),n&&i)throw new Error(t+' contains ".value" child '+Ie(r)+" in addition to actual children.")}},Bs=function(t,e,n,r){if((!r||void 0!==n)&&!Us(n))throw new Error((0,s.gK)(t,e)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},$s=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Bs(t,e,n,r)},zs=function(t,e){if(".info"===he(e))throw new Error(t+" failed = Can't modify data under /.info/")},Hs=function(t,e){const n=e.path.toString();if("string"!==typeof e.repoInfo.host||0===e.repoInfo.host.length||!Fs(e.repoInfo.namespace)&&"localhost"!==e.repoInfo.host.split(":")[0]||0!==n.length&&!Vs(n))throw new Error((0,s.gK)(t,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ws{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ks(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();null===n||be(s,n.path)||(t.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Gs(t,e,n){Ks(t,n),Ys(t,(t=>Te(t,e)||Te(e,t)))}function Ys(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Xs(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Xs(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(null!==n){t.events[e]=null;const r=n.getEventRunner();w&&E("event: "+n.toString()),K(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="repo_interrupt",Js=25;class Zs{constructor(t,e,n,r){this.repoInfo_=t,this.forceRestClient_=e,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ws,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ln(),this.transactionQueueTree_=new Ts,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function to(t,e,n){if(t.stats_=mt(t.repoInfo_),t.forceRestClient_||G())t.server_=new Pn(t.repoInfo_,((e,n,r,i)=>{ro(t,e,n,r,i)}),t.authTokenProvider_,t.appCheckProvider_),setTimeout((()=>io(t,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,s.Wl)(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Le(t.repoInfo_,e,((e,n,r,i)=>{ro(t,e,n,r,i)}),(e=>{io(t,e)}),(e=>{so(t,e)}),t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener((e=>{t.server_.refreshAuthToken(e)})),t.appCheckProvider_.addTokenChangeListener((e=>{t.server_.refreshAppCheckToken(e.token)})),t.statsReporter_=yt(t.repoInfo_,(()=>new zn(t.stats_,t.server_))),t.infoData_=new Mn,t.infoSyncTree_=new ji({startListening:(e,n,r,i)=>{let s=[];const o=t.infoData_.getNode(e._path);return o.isEmpty()||(s=$i(t.infoSyncTree_,e._path,o),setTimeout((()=>{i("ok")}),0)),s},stopListening:()=>{}}),oo(t,"connected",!1),t.serverSyncTree_=new ji({startListening:(e,n,r,i)=>(t.server_.listen(e,r,n,((n,r)=>{const s=i(n,r);Gs(t.eventQueue_,e._path,s)})),[]),stopListening:(e,n)=>{t.server_.unlisten(e,n)}})}function eo(t){const e=t.infoData_.getNode(new le(".info/serverTimeOffset")),n=e.val()||0;return(new Date).getTime()+n}function no(t){return gs({timestamp:eo(t)})}function ro(t,e,n,r,i){t.dataUpdateCount++;const o=new le(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let a=[];if(i)if(r){const e=(0,s.UI)(n,(t=>_n(t)));a=Yi(t.serverSyncTree_,o,e,i)}else{const e=_n(n);a=Gi(t.serverSyncTree_,o,e,i)}else if(r){const e=(0,s.UI)(n,(t=>_n(t)));a=zi(t.serverSyncTree_,o,e)}else{const e=_n(n);a=$i(t.serverSyncTree_,o,e)}let c=o;a.length>0&&(c=_o(t,o)),Gs(t.eventQueue_,c,a)}function io(t,e){oo(t,"connected",e),!1===e&&uo(t)}function so(t,e){U(e,((e,n)=>{oo(t,e,n)}))}function oo(t,e,n){const r=new le("/.info/"+e),i=_n(n);t.infoData_.updateSnapshot(r,i);const s=$i(t.infoSyncTree_,r,i);Gs(t.eventQueue_,r,s)}function ao(t){return t.nextWriteId_++}function co(t,e,n){const r=Ji(t.serverSyncTree_,e);return null!=r?Promise.resolve(r):t.server_.get(e).then((r=>{const i=_n(r).withIndex(e._queryParams.getIndex());let s;if(Xi(t.serverSyncTree_,e,n,!0),e._queryParams.loadsAllData())s=$i(t.serverSyncTree_,e._path,i);else{const n=rs(t.serverSyncTree_,e);s=Gi(t.serverSyncTree_,e._path,i,n)}return Gs(t.eventQueue_,e._path,s),Ki(t.serverSyncTree_,e,n,null,!0),i}),(n=>(fo(t,"get for query "+(0,s.Wl)(e)+" failed: "+n),Promise.reject(new Error(n)))))}function lo(t,e,n,r,i){fo(t,"set",{path:e.toString(),value:n,priority:r});const s=no(t),o=_n(n,r),a=Qi(t.serverSyncTree_,e),c=ws(o,a,s),l=ao(t),u=qi(t.serverSyncTree_,e,c,l,!0);Ks(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),((n,r)=>{const s="ok"===n;s||I("set at "+e+" failed: "+n);const o=Bi(t.serverSyncTree_,l,!s);Gs(t.eventQueue_,e,o),po(t,i,n,r)}));const h=Co(t,e);_o(t,h),Gs(t.eventQueue_,h,[])}function uo(t){fo(t,"onDisconnectEvents");const e=no(t),n=Ln();Un(t.onDisconnect_,ue(),((r,i)=>{const s=vs(r,i,t.serverSyncTree_,e);Fn(n,r,s)}));let r=[];Un(n,ue(),((e,n)=>{r=r.concat($i(t.serverSyncTree_,e,n));const i=Co(t,e);_o(t,i)})),t.onDisconnect_=Ln(),Gs(t.eventQueue_,ue(),r)}function ho(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Qs)}function fo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),E(n,...e)}function po(t,e,n,r){e&&K((()=>{if("ok"===n)e(null);else{const t=(n||"error").toUpperCase();let i=t;r&&(i+=": "+r);const s=new Error(i);s.code=t,e(s)}}))}function go(t,e,n){return Qi(t.serverSyncTree_,e,n)||pn.EMPTY_NODE}function mo(t,e=t.transactionQueueTree_){if(e||Eo(t,e),Cs(e)){const n=bo(t,e);(0,s.hu)(n.length>0,"Sending zero length transaction queue");const r=n.every((t=>0===t.status));r&&yo(t,Rs(e),n)}else ks(e)&&xs(e,(e=>{mo(t,e)}))}function yo(t,e,n){const r=n.map((t=>t.currentWriteId)),i=go(t,e,r);let o=i;const a=i.hash();for(let u=0;u<n.length;u++){const t=n[u];(0,s.hu)(0===t.status,"tryToSendTransactionQueue_: items in queue should all be run."),t.status=1,t.retryCount++;const r=we(e,t.path);o=o.updateChild(r,t.currentOutputSnapshotRaw)}const c=o.val(!0),l=e;t.server_.put(l.toString(),c,(r=>{fo(t,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let e=0;e<n.length;e++)n[e].status=2,i=i.concat(Bi(t.serverSyncTree_,n[e].currentWriteId)),n[e].onComplete&&r.push((()=>n[e].onComplete(null,!0,n[e].currentOutputSnapshotResolved))),n[e].unwatcher();Eo(t,Es(t.transactionQueueTree_,e)),mo(t,t.transactionQueueTree_),Gs(t.eventQueue_,e,i);for(let t=0;t<r.length;t++)K(r[t])}else{if("datastale"===r)for(let t=0;t<n.length;t++)3===n[t].status?n[t].status=4:n[t].status=0;else{I("transaction at "+l.toString()+" failed: "+r);for(let t=0;t<n.length;t++)n[t].status=4,n[t].abortReason=r}_o(t,e)}}),a)}function _o(t,e){const n=wo(t,e),r=Rs(n),i=bo(t,n);return vo(t,i,r),r}function vo(t,e,n){if(0===e.length)return;const r=[];let i=[];const o=e.filter((t=>0===t.status)),a=o.map((t=>t.currentWriteId));for(let c=0;c<e.length;c++){const o=e[c],l=we(n,o.path);let u,h=!1;if((0,s.hu)(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)h=!0,u=o.abortReason,i=i.concat(Bi(t.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=Js)h=!0,u="maxretry",i=i.concat(Bi(t.serverSyncTree_,o.currentWriteId,!0));else{const n=go(t,o.path,a);o.currentInputSnapshot=n;const r=e[c].update(n.val());if(void 0!==r){qs("transaction failed: Data returned ",r,o.path);let e=_n(r);const c="object"===typeof r&&null!=r&&(0,s.r3)(r,".priority");c||(e=e.updatePriority(n.getPriority()));const l=o.currentWriteId,u=no(t),h=ws(e,n,u);o.currentOutputSnapshotRaw=e,o.currentOutputSnapshotResolved=h,o.currentWriteId=ao(t),a.splice(a.indexOf(l),1),i=i.concat(qi(t.serverSyncTree_,o.path,h,o.currentWriteId,o.applyLocally)),i=i.concat(Bi(t.serverSyncTree_,l,!0))}else h=!0,u="nodata",i=i.concat(Bi(t.serverSyncTree_,o.currentWriteId,!0))}Gs(t.eventQueue_,n,i),i=[],h&&(e[c].status=2,function(t){setTimeout(t,Math.floor(0))}(e[c].unwatcher),e[c].onComplete&&("nodata"===u?r.push((()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot))):r.push((()=>e[c].onComplete(new Error(u),!1,null)))))}Eo(t,t.transactionQueueTree_);for(let s=0;s<r.length;s++)K(r[s]);mo(t,t.transactionQueueTree_)}function wo(t,e){let n,r=t.transactionQueueTree_;n=he(e);while(null!==n&&void 0===Cs(r))r=Es(r,n),e=fe(e),n=he(e);return r}function bo(t,e){const n=[];return To(t,e,n),n.sort(((t,e)=>t.order-e.order)),n}function To(t,e,n){const r=Cs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);xs(e,(e=>{To(t,e,n)}))}function Eo(t,e){const n=Cs(e);if(n){let t=0;for(let e=0;e<n.length;e++)2!==n[e].status&&(n[t]=n[e],t++);n.length=t,Ss(e,n.length>0?n:void 0)}xs(e,(e=>{Eo(t,e)}))}function Co(t,e){const n=Rs(wo(t,e)),r=Es(t.transactionQueueTree_,e);return Ds(r,(e=>{So(t,e)})),So(t,r),As(r,(e=>{So(t,e)})),n}function So(t,e){const n=Cs(e);if(n){const r=[];let i=[],o=-1;for(let e=0;e<n.length;e++)3===n[e].status||(1===n[e].status?((0,s.hu)(o===e-1,"All SENT items should be at beginning of queue."),o=e,n[e].status=3,n[e].abortReason="set"):((0,s.hu)(0===n[e].status,"Unexpected transaction status in abort"),n[e].unwatcher(),i=i.concat(Bi(t.serverSyncTree_,n[e].currentWriteId,!0)),n[e].onComplete&&r.push(n[e].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Ss(e,void 0):n.length=o+1,Gs(t.eventQueue_,Rs(e),i);for(let t=0;t<r.length;t++)K(r[t])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let t=n[i];try{t=decodeURIComponent(t.replace(/\+/g," "))}catch(r){}e+="/"+t}return e}function Io(t){const e={};"?"===t.charAt(0)&&(t=t.substring(1));for(const n of t.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):I(`Invalid query segment '${n}' in query '${t}'`)}return e}const xo=function(t,e){const n=Ao(t),r=n.namespace;"firebase.com"===n.domain&&k(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||k("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||x();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ut(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new le(n.pathString)}},Ao=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",c=443;if("string"===typeof t){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");-1===u&&(u=t.length);let h=t.indexOf("?");-1===h&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=ko(t.substring(u,h)));const d=Io(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const t=e.indexOf(".");r=e.substring(0,t).toLowerCase(),n=e.substring(t+1),s=r}"ns"in d&&(s=d["ns"])}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}},Do="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";(function(){let t=0;const e=[]})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ro{constructor(t,e,n,r){this.eventType=t,this.eventRegistration=e,this.snapshot=n,this.prevName=r}getPath(){const t=this.snapshot.ref;return"value"===this.eventType?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,s.Wl)(this.snapshot.exportVal())}}class No{constructor(t,e,n){this.eventRegistration=t,this.error=e,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(t,e){this.snapshotCallback=t,this.cancelCallback=e}onValue(t,e){this.snapshotCallback.call(null,t,e)}onCancel(t){return(0,s.hu)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Po{constructor(t,e,n,r){this._repo=t,this._path=e,this._queryParams=n,this._orderByCalled=r}get key(){return ve(this._path)?null:pe(this._path)}get ref(){return new Mo(this._repo,this._path)}get _queryIdentifier(){const t=On(this._queryParams),e=L(t);return"{}"===e?"default":e}get _queryObject(){return On(this._queryParams)}isEqual(t){if(t=(0,s.m9)(t),!(t instanceof Po))return!1;const e=this._repo===t._repo,n=be(this._path,t._path),r=this._queryIdentifier===t._queryIdentifier;return e&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+ge(this._path)}}class Mo extends Po{constructor(t,e){super(t,e,new Dn,!1)}get parent(){const t=ye(this._path);return null===t?null:new Mo(this._repo,t)}get root(){let t=this;while(null!==t.parent)t=t.parent;return t}}class Lo{constructor(t,e,n){this._node=t,this.ref=e,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const e=new le(t),n=Uo(this.ref,t);return new Lo(this._node.getChild(e),n,on)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){if(this._node.isLeafNode())return!1;const e=this._node;return!!e.forEachChild(this._index,((e,n)=>t(new Lo(n,Uo(this.ref,e),on))))}hasChild(t){const e=new le(t);return!this._node.getChild(e).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Fo(t,e){return t=(0,s.m9)(t),t._checkNotDeleted("ref"),void 0!==e?Uo(t._root,e):t._root}function Uo(t,e){return t=(0,s.m9)(t),null===he(t._path)?$s("child","path",e,!1):Bs("child","path",e,!1),new Mo(t._repo,_e(t._path,e))}function Vo(t){return zs("remove",t._path),jo(t,null)}function jo(t,e){t=(0,s.m9)(t),zs("set",t._path),js("set",e,t._path,!1);const n=new s.BH;return lo(t._repo,t._path,e,null,n.wrapCallback((()=>{}))),n.promise}function qo(t){t=(0,s.m9)(t);const e=new Oo((()=>{})),n=new Bo(e);return co(t._repo,t,n).then((e=>new Lo(e,new Mo(t._repo,t._path),t._queryParams.getIndex())))}class Bo{constructor(t){this.callbackContext=t}respondsTo(t){return"value"===t}createEvent(t,e){const n=e._queryParams.getIndex();return new Ro("value",this,new Lo(t.snapshotNode,new Mo(e._repo,e._path),n))}getEventRunner(t){return"cancel"===t.getEventType()?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,e){return this.callbackContext.hasCancelCallback?new No(this,t,e):null}matches(t){return t instanceof Bo&&(!t.callbackContext||!this.callbackContext||t.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}Ci(Mo),Fi(Mo);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $o="FIREBASE_DATABASE_EMULATOR_HOST",zo={};let Ho=!1;function Wo(t,e,n,r){t.repoInfo_=new ut(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function Ko(t,e,n,r,i){let s=r||t.options.databaseURL;void 0===s&&(t.options.projectId||k("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),E("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=xo(s,i),l=c.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",VUE_APP_MASTER_CODE:"JM.gjpm!23A83g4x31",BASE_URL:"/"}[$o]),a?(o=!0,s=`http://${a}?ns=${l.namespace}`,c=xo(s,i),l=c.repoInfo):o=!c.repoInfo.secure;const u=i&&o?new J(J.OWNER):new Q(t.name,t.options,e);Hs("Invalid Firebase Database URL",c),ve(c.path)||k("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Yo(l,t,u,new X(t.name,n));return new Xo(h,t)}function Go(t,e){const n=zo[e];n&&n[t.key]===t||k(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ho(t),delete n[t.key]}function Yo(t,e,n,r){let i=zo[e.name];i||(i={},zo[e.name]=i);let s=i[t.toURLString()];return s&&k("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Zs(t,Ho,n,r),i[t.toURLString()]=s,s}class Xo{constructor(t,e){this._repoInternal=t,this.app=e,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(to(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Mo(this._repo,ue())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Go(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){null===this._rootInternal&&k("Cannot call "+t+" on a deleted database.")}}function Qo(t=(0,r.Mq)(),e){const n=(0,r.qX)(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const t=(0,s.P0)("database");t&&Jo(n,...t)}return n}function Jo(t,e,n,r={}){t=(0,s.m9)(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&k("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&k('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new J(J.OWNER);else if(r.mockUserToken){const e="string"===typeof r.mockUserToken?r.mockUserToken:(0,s.Sg)(r.mockUserToken,t.app.options.projectId);o=new J(e)}Wo(i,e,n,o)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zo(t){u(r.Jn),(0,r.Xd)(new i.wA("database",((t,{instanceIdentifier:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return Ko(n,r,i,e)}),"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(a,c,t),(0,r.KN)(a,c,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Le.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},Le.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Zo()},4287:function(t,e,n){"use strict";n.d(e,{hJ:function(){return sh},oe:function(){return Zh},JU:function(){return oh},ad:function(){return uh},nP:function(){return id},cf:function(){return td},Bt:function(){return rd},pl:function(){return Qh},r7:function(){return Jh}});n(3767),n(8585),n(8696),n(7658),n(2801);var r,i=n(1804),s=n(7142),o=n(5168),a=n(223),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},l={},u=u||{},h=c||self;function d(){}function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function g(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++y)}var m="closure_uid_"+(1e9*Math.random()>>>0),y=0;function _(t,e,n){return t.call.apply(t.bind,arguments)}function v(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function w(t,e,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_:v,w.apply(null,arguments)}function b(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function T(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function E(){this.s=this.s,this.o=this.o}var C=0;E.prototype.s=!1,E.prototype.ra=function(){this.s||(this.s=!0,this.N(),0==C)||g(this)},E.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const S=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function k(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function I(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(f(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}function x(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",d,e),h.removeEventListener("test",d,e)}catch(n){}return t}();function D(t){return/^[\s\xa0]*$/.test(t)}var R=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function N(t,e){return t<e?-1:t>e?1:0}function O(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function P(t){return-1!=O().indexOf(t)}function M(t){return M[" "](t),t}function L(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}M[" "]=d;var F,U=P("Opera"),V=P("Trident")||P("MSIE"),j=P("Edge"),q=j||V,B=P("Gecko")&&!(-1!=O().toLowerCase().indexOf("webkit")&&!P("Edge"))&&!(P("Trident")||P("MSIE"))&&!P("Edge"),$=-1!=O().toLowerCase().indexOf("webkit")&&!P("Edge");function z(){var t=h.document;return t?t.documentMode:void 0}t:{var H="",W=function(){var t=O();return B?/rv:([^\);]+)(\)|;)/.exec(t):j?/Edge\/([\d\.]+)/.exec(t):V?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):$?/WebKit\/(\S+)/.exec(t):U?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(W&&(H=W?W[1]:""),V){var K=z();if(null!=K&&K>parseFloat(H)){F=String(K);break t}}F=H}var G,Y={};function X(){return L(Y,9,(function(){let t=0;const e=R(String(F)).split("."),n=R("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=N(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||N(0==i[2].length,0==s[2].length)||N(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(h.document&&V){var Q=z();G=Q||(parseInt(F,10)||void 0)}else G=void 0;var J=G;function Z(t,e){if(x.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(B){t:{try{M(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:tt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Z.$.h.call(this)}}T(Z,x);var tt={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),nt=0;function rt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++nt,this.fa=this.ia=!1}function it(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function st(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function ot(t){const e={};for(const n in t)e[n]=t[n];return e}const at="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ct(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<at.length;e++)n=at[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function lt(t){this.src=t,this.g={},this.h=0}function ut(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=S(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(it(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ht(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}lt.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=ht(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new rt(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};var dt="closure_lm_"+(1e6*Math.random()|0),ft={};function pt(t,e,n,r,i){if(r&&r.once)return yt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)pt(t,e[s],n,r,i);return null}return n=Ct(n),t&&t[et]?t.O(e,n,p(r)?!!r.capture:!!r,i):gt(t,e,n,!1,r,i)}function gt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=Tt(t);if(a||(t[dt]=a=new lt(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=mt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)A||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(wt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function mt(){function t(n){return e.call(t.src,t.listener,n)}const e=bt;return t}function yt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)yt(t,e[s],n,r,i);return null}return n=Ct(n),t&&t[et]?t.P(e,n,p(r)?!!r.capture:!!r,i):gt(t,e,n,!0,r,i)}function _t(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)_t(t,e[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=Ct(n),t&&t[et]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=ht(s,n,r,i),-1<n&&(it(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Tt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ht(e,n,r,i)),(n=-1<t?e[t]:null)&&vt(n))}function vt(t){if("number"!==typeof t&&t&&!t.fa){var e=t.src;if(e&&e[et])ut(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(wt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Tt(e))?(ut(n,t),0==n.h&&(n.src=null,e[dt]=null)):it(t)}}}function wt(t){return t in ft?ft[t]:ft[t]="on"+t}function bt(t,e){if(t.fa)t=!0;else{e=new Z(e,this);var n=t.listener,r=t.la||t.src;t.ia&&vt(t),t=n.call(r,e)}return t}function Tt(t){return t=t[dt],t instanceof lt?t:null}var Et="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ct(t){return"function"===typeof t?t:(t[Et]||(t[Et]=function(e){return t.handleEvent(e)}),t[Et])}function St(){E.call(this),this.i=new lt(this),this.S=this,this.J=null}function kt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,"string"===typeof e)e=new x(e,t);else if(e instanceof x)e.target=e.target||t;else{var i=e;e=new x(r,t),ct(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=It(o,r,!0,e)&&i}if(o=e.g=t,i=It(o,r,!0,e)&&i,i=It(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=It(o,r,!1,e)&&i}function It(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ut(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}T(St,E),St.prototype[et]=!0,St.prototype.removeEventListener=function(t,e,n,r){_t(this,t,e,n,r)},St.prototype.N=function(){if(St.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)it(n[r]);delete e.g[t],e.h--}}this.J=null},St.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},St.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var xt=h.JSON.stringify;function At(){var t=Ut;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Dt{constructor(){this.h=this.g=null}add(t,e){const n=Nt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Rt,Nt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Ot),(t=>t.reset()));class Ot{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Pt(t){h.setTimeout((()=>{throw t}),0)}function Mt(t,e){Rt||Lt(),Ft||(Rt(),Ft=!0),Ut.add(t,e)}function Lt(){var t=h.Promise.resolve(void 0);Rt=function(){t.then(Vt)}}var Ft=!1,Ut=new Dt;function Vt(){for(var t;t=At();){try{t.h.call(t.g)}catch(n){Pt(n)}var e=Nt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ft=!1}function jt(t,e){St.call(this),this.h=t||1,this.g=e||h,this.j=w(this.qb,this),this.l=Date.now()}function qt(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Bt(t,e,n){if("function"===typeof t)n&&(t=w(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=w(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function $t(t){t.g=Bt((()=>{t.g=null,t.i&&(t.i=!1,$t(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}T(jt,St),r=jt.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),kt(this,"tick"),this.ga&&(qt(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){jt.$.N.call(this),qt(this),delete this.g};class zt extends E{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:$t(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ht(t){E.call(this),this.h=t,this.g={}}T(Ht,E);var Wt=[];function Kt(t,e,n,r){Array.isArray(n)||(n&&(Wt[0]=n.toString()),n=Wt);for(var i=0;i<n.length;i++){var s=pt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Gt(t){st(t.g,(function(t,e){this.g.hasOwnProperty(e)&&vt(t)}),t),t.g={}}function Yt(){this.g=!0}function Xt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Qt(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Jt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+te(t,n)+(r?" "+r:"")}))}function Zt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function te(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return xt(n)}catch(a){return e}}Ht.prototype.N=function(){Ht.$.N.call(this),Gt(this)},Ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Yt.prototype.Ea=function(){this.g=!1},Yt.prototype.info=function(){};var ee={},ne=null;function re(){return ne=ne||new St}function ie(t){x.call(this,ee.Ta,t)}function se(t){const e=re();kt(e,new ie(e))}function oe(t,e){x.call(this,ee.STAT_EVENT,t),this.stat=e}function ae(t){const e=re();kt(e,new oe(e,t))}function ce(t,e){x.call(this,ee.Ua,t),this.size=e}function le(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}ee.Ta="serverreachability",T(ie,x),ee.STAT_EVENT="statevent",T(oe,x),ee.Ua="timingevent",T(ce,x);var ue={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},he={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function de(){}function fe(t){return t.h||(t.h=t.i())}function pe(){}de.prototype.h=null;var ge,me={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ye(){x.call(this,"d")}function _e(){x.call(this,"c")}function ve(){}function we(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ht(this),this.P=Te,t=q?125:void 0,this.V=new jt(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new be}function be(){this.i=null,this.g="",this.h=!1}T(ye,x),T(_e,x),T(ve,de),ve.prototype.g=function(){return new XMLHttpRequest},ve.prototype.i=function(){return{}},ge=new ve;var Te=45e3,Ee={},Ce={};function Se(t,e,n){t.L=1,t.v=Ke(Be(e)),t.s=n,t.S=!0,ke(t,null)}function ke(t,e){t.G=Date.now(),De(t),t.A=Be(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),an(n.i,"t",r),t.C=0,n=t.l.I,t.h=new be,t.g=hr(t.l,n?e:null,!t.s),0<t.O&&(t.M=new zt(w(t.Pa,t,t.g),t.O)),Kt(t.U,t.g,"readystatechange",t.nb),e=t.I?ot(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),se(),Xt(t.j,t.u,t.A,t.m,t.W,t.s)}function Ie(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function xe(t,e,n){let r,i=!0;for(;!t.J&&t.C<n.length;){if(r=Ae(t,n),r==Ce){4==e&&(t.o=4,ae(14),i=!1),Jt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Ee){t.o=4,ae(15),Jt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Jt(t.j,t.m,r,null),Me(t,r)}Ie(t)&&r!=Ce&&r!=Ee&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ae(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rr(e),e.L=!0,ae(11))):(Jt(t.j,t.m,n,"[Invalid Chunked Response]"),Pe(t),Oe(t))}function Ae(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Ce:(n=Number(e.substring(n,r)),isNaN(n)?Ee:(r+=1,r+n>e.length?Ce:(e=e.substr(r,n),t.C=r+n,e)))}function De(t){t.Y=Date.now()+t.P,Re(t,t.P)}function Re(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=le(w(t.lb,t),e)}function Ne(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Oe(t){0==t.l.H||t.J||or(t.l,t)}function Pe(t){Ne(t);var e=t.M;e&&"function"==typeof e.ra&&e.ra(),t.M=null,qt(t.V),Gt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function Me(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||gn(n.h,t)))if(!t.K&&gn(n.h,t)&&3==n.H){try{var r=n.Ja.g.parse(e)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;sr(n),Gn(n)}nr(n),ae(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&0==n.A&&!n.v&&(n.v=le(w(n.ib,n),6e3));if(1>=pn(n.h)&&n.na){try{n.na()}catch(l){}n.na=void 0}}else cr(n,11)}else if((t.K||n.g==t)&&sr(n),!D(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.V=l[0],l=l[1],2==n.H)if("c"==l[0]){n.J=l[1],n.oa=l[2];const e=l[3];null!=e&&(n.qa=e,n.j.info("VER="+n.qa));const i=l[4];null!=i&&(n.Ga=i,n.j.info("SVER="+n.Ga));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(r=1.5*u,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(mn(s,s.h),s.h=null))}if(r.F){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.Da=t,We(r.G,r.F,t))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=ur(r,r.I?r.oa:null,r.Y),o.K){yn(r.h,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Ne(a),De(a)),r.g=o}else er(r);0<n.i.length&&Xn(n)}else"stop"!=l[0]&&"close"!=l[0]||cr(n,7);else 3==n.H&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?cr(n,7):Kn(n):"noop"!=l[0]&&n.l&&n.l.Aa(l),n.A=0)}se(4)}catch(l){}}function Le(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Fe(t){if(t.sa&&"function"==typeof t.sa)return t.sa();if(!t.Z||"function"!=typeof t.Z){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(f(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Ue(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Fe(t),r=Le(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}r=we.prototype,r.setTimeout=function(t){this.P=t},r.nb=function(t){t=t.target;const e=this.M;e&&3==qn(t)?e.l():this.Pa(t)},r.Pa=function(t){try{if(t==this.g)t:{const u=qn(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>u)&&(3!=u||q||this.g&&(this.h.h||this.g.ja()||Bn(this.g)))){this.J||4!=u||7==e||se(8==e||0>=d?3:2),Ne(this);var n=this.g.da();this.aa=n;e:if(Ie(this)){var r=Bn(this.g);t="";var i=r.length,s=4==qn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Pe(this),Oe(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Qt(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,ae(12),Pe(this),Oe(this);break t}Jt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Me(this,n)}this.S?(xe(this,u,o),q&&this.i&&3==u&&(Kt(this.U,this.V,"tick",this.mb),this.V.start())):(Jt(this.j,this.m,o,null),Me(this,o)),4==u&&Pe(this),this.i&&!this.J&&(4==u?or(this.l,this):(this.i=!1,De(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ae(12)):(this.o=0,ae(13)),Pe(this),Oe(this)}}}catch(u){}},r.mb=function(){if(this.g){var t=qn(this.g),e=this.g.ja();this.C<e.length&&(Ne(this),xe(this,t,e),this.i&&4!=t&&De(this))}},r.cancel=function(){this.J=!0,Pe(this)},r.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Zt(this.j,this.A),2!=this.L&&(se(),ae(17)),Pe(this),this.o=2,Oe(this)):Re(this,this.Y-t)};var Ve=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function je(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function qe(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof qe){this.h=void 0!==e?e:t.h,$e(this,t.j),this.s=t.s,this.g=t.g,ze(this,t.m),this.l=t.l,e=t.i;var n=new nn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),He(this,n),this.o=t.o}else t&&(n=String(t).match(Ve))?(this.h=!!e,$e(this,n[1]||"",!0),this.s=Ge(n[2]||""),this.g=Ge(n[3]||"",!0),ze(this,n[4]),this.l=Ge(n[5]||"",!0),He(this,n[6]||"",!0),this.o=Ge(n[7]||"")):(this.h=!!e,this.i=new nn(null,this.h))}function Be(t){return new qe(t)}function $e(t,e,n){t.j=n?Ge(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ze(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function He(t,e,n){e instanceof nn?(t.i=e,ln(t.i,t.h)):(n||(e=Ye(e,tn)),t.i=new nn(e,t.h))}function We(t,e,n){t.i.set(e,n)}function Ke(t){return We(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ge(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ye(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Xe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Xe(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}qe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ye(e,Qe,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ye(e,Qe,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ye(n,"/"==n.charAt(0)?Ze:Je,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ye(n,en)),t.join("")};var Qe=/[#\/\?@]/g,Je=/[#\?:]/g,Ze=/[#\?]/g,tn=/[#\?@]/g,en=/#/g;function nn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function rn(t){t.g||(t.g=new Map,t.h=0,t.i&&je(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function sn(t,e){rn(t),e=cn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function on(t,e){return rn(t),e=cn(t,e),t.g.has(e)}function an(t,e,n){sn(t,e),0<n.length&&(t.i=null,t.g.set(cn(t,e),k(n)),t.h+=n.length)}function cn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ln(t,e){e&&!t.j&&(rn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(sn(this,e),an(this,n,t))}),t)),t.j=e}r=nn.prototype,r.add=function(t,e){rn(this),this.i=null,t=cn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){rn(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},r.sa=function(){rn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},r.Z=function(t){rn(this);let e=[];if("string"===typeof t)on(this,t)&&(e=e.concat(this.g.get(cn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return rn(this),this.i=null,t=cn(this,t),on(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};var un=class{constructor(t,e){this.h=t,this.g=e}};function hn(t){this.l=t||dn,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ka&&h.g.Ka()&&h.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dn=10;function fn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function pn(t){return t.h?1:t.g?t.g.size:0}function gn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function mn(t,e){t.g?t.g.add(e):t.h=e}function yn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function _n(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return k(t.i)}function vn(){}function wn(){this.g=new vn}function bn(t,e,n){const r=n||"";try{Ue(t,(function(t,n){let i=t;p(t)&&(i=xt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Tn(t,e){const n=new Yt;if(h.Image){const r=new Image;r.onload=b(En,n,r,"TestLoadImage: loaded",!0,e),r.onerror=b(En,n,r,"TestLoadImage: error",!1,e),r.onabort=b(En,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=b(En,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function En(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function Cn(t){this.l=t.fc||null,this.j=t.ob||!1}function Sn(t,e){St.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=kn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}hn.prototype.cancel=function(){if(this.i=_n(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},vn.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},vn.prototype.parse=function(t){return h.JSON.parse(t,void 0)},T(Cn,de),Cn.prototype.g=function(){return new Sn(this.l,this.j)},Cn.prototype.i=function(t){return function(){return t}}({}),T(Sn,St);var kn=0;function In(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function xn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,An(t)}function An(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Sn.prototype,r.open=function(t,e){if(this.readyState!=kn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,An(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||h).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,xn(this)),this.readyState=kn},r.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;In(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?xn(this):An(this),3==this.readyState&&In(this)}},r.Za=function(t){this.g&&(this.response=this.responseText=t,xn(this))},r.Ya=function(t){this.g&&(this.response=t,xn(this))},r.ka=function(){this.g&&xn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Sn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Dn=h.JSON.parse;function Rn(t){St.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Nn,this.L=this.M=!1}T(Rn,St);var Nn="",On=/^https?$/i,Pn=["POST","PUT"];function Mn(t){return V&&X()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Ln(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Fn(t),Vn(t)}function Fn(t){t.F||(t.F=!0,kt(t,"complete"),kt(t,"error"))}function Un(t){if(t.h&&"undefined"!=typeof u&&(!t.C[1]||4!=qn(t)||2!=t.da()))if(t.v&&4==qn(t))Bt(t.La,0,t);else if(kt(t,"readystatechange"),4==qn(t)){t.h=!1;try{const c=t.da();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var i=String(t.I).match(Ve)[1]||null;if(!i&&h.self&&h.self.location){var s=h.self.location.protocol;i=s.substr(0,s.length-1)}r=!On.test(i?i.toLowerCase():"")}n=r}if(n)kt(t,"complete"),kt(t,"success");else{t.m=6;try{var o=2<qn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.da()+"]",Fn(t)}}finally{Vn(t)}}}function Vn(t,e){if(t.g){jn(t);const r=t.g,i=t.C[0]?d:null;t.g=null,t.C=null,e||kt(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function jn(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function qn(t){return t.g?t.g.readyState:0}function Bn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Nn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Xr){return null}}function $n(t){let e="";return st(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function zn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=$n(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):We(t,e,n))}function Hn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Wn(t){this.Ga=0,this.i=[],this.j=new Yt,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Hn("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Hn("baseRetryDelayMs",5e3,t),this.hb=Hn("retryDelaySeedMs",1e4,t),this.eb=Hn("forwardChannelMaxRetries",2,t),this.xa=Hn("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new hn(t&&t.concurrentRequestLimit),this.Ja=new wn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}function Kn(t){if(Yn(t),3==t.H){var e=t.W++,n=Be(t.G);We(n,"SID",t.J),We(n,"RID",e),We(n,"TYPE","terminate"),Zn(t,n),e=new we(t,t.j,e,void 0),e.L=2,e.v=Ke(Be(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=hr(e.l,null),e.g.ha(e.v)),e.G=Date.now(),De(e)}lr(t)}function Gn(t){t.g&&(rr(t),t.g.cancel(),t.g=null)}function Yn(t){Gn(t),t.u&&(h.clearTimeout(t.u),t.u=null),sr(t),t.h.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Xn(t){fn(t.h)||t.m||(t.m=!0,Mt(t.Na,t),t.C=0)}function Qn(t,e){return!(pn(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.F.concat(t.i),!0):!(1==t.H||2==t.H||t.C>=(t.cb?0:t.eb))&&(t.m=le(w(t.Na,t,e),ar(t,t.C)),t.C++,!0))}function Jn(t,e){var n;n=e?e.m:t.W++;const r=Be(t.G);We(r,"SID",t.J),We(r,"RID",n),We(r,"AID",t.V),Zn(t,r),t.o&&t.s&&zn(r,t.o,t.s),n=new we(t,t.j,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=tr(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),mn(t.h,n),Se(n,r,e)}function Zn(t,e){t.ma&&st(t.ma,(function(t,n){We(e,n,t)})),t.l&&Ue({},(function(t,n){We(e,n,t)}))}function tr(t,e,n){n=Math.min(t.i.length,n);var r=t.l?w(t.l.Va,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),s=!1;else try{bn(a,t,"req"+n+"_")}catch(ai){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.F=t,r}function er(t){t.g||t.u||(t.ba=1,Mt(t.Ma,t),t.A=0)}function nr(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=le(w(t.Ma,t),ar(t,t.A)),t.A++,!0)}function rr(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function ir(t){t.g=new we(t,t.j,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Be(t.wa);We(e,"RID","rpc"),We(e,"SID",t.J),We(e,"CI",t.M?"0":"1"),We(e,"AID",t.V),We(e,"TYPE","xmlhttp"),Zn(t,e),t.o&&t.s&&zn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Ke(Be(e)),n.s=null,n.S=!0,ke(n,t)}function sr(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function or(t,e){var n=null;if(t.g==e){sr(t),rr(t),t.g=null;var r=2}else{if(!gn(t.h,e))return;n=e.F,yn(t.h,e),r=1}if(0!=t.H)if(t.ta=e.aa,e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=re(),kt(r,new ce(r,n)),Xn(t)}else er(t);else if(i=e.o,3==i||0==i&&0<t.ta||!(1==r&&Qn(t,e)||2==r&&nr(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:cr(t,5);break;case 4:cr(t,10);break;case 3:cr(t,6);break;default:cr(t,2)}}function ar(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function cr(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var r=w(t.pb,t);n||(n=new qe("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||$e(n,"https"),Ke(n)),Tn(n.toString(),r)}else ae(2);t.H=0,t.l&&t.l.za(e),lr(t),Yn(t)}function lr(t){if(t.H=0,t.pa=[],t.l){const e=_n(t.h);0==e.length&&0==t.i.length||(I(t.pa,e),I(t.pa,t.i),t.h.i.length=0,k(t.i),t.i.length=0),t.l.ya()}}function ur(t,e,n){var r=n instanceof qe?Be(n):new qe(n,void 0);if(""!=r.g)e&&(r.g=e+"."+r.g),ze(r,r.m);else{var i=h.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new qe(null,void 0);r&&$e(s,r),e&&(s.g=e),i&&ze(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&We(r,n,e),We(r,"VER",t.qa),Zn(t,r),r}function hr(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Rn(new Cn({ob:!0})):new Rn(t.va),e.Oa(t.I),e}function dr(){}function fr(){if(V&&!(10<=Number(J)))throw Error("Environmental error: no available transport.")}function pr(t,e){St.call(this),this.g=new Wn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!D(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!D(e)&&(this.g.F=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new yr(this)}function gr(t){ye.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function mr(){_e.call(this),this.status=1}function yr(t){this.g=t}function _r(){this.blockSize=-1}function vr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function wr(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function br(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}r=Rn.prototype,r.Oa=function(t){this.M=t},r.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ge.g(),this.C=this.u?fe(this.u):fe(ge),this.g.onreadystatechange=w(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){return void Ln(this,s)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=h.FormData&&t instanceof h.FormData,!(0<=S(Pn,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{jn(this),0<this.B&&((this.L=Mn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.ua,this)):this.A=Bt(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Ln(this,s)}},r.ua=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,kt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,kt(this,"complete"),kt(this,"abort"),Vn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vn(this,!0)),Rn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Un(this):this.kb())},r.kb=function(){Un(this)},r.da=function(){try{return 2<qn(this)?this.g.status:-1}catch(t){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Dn(e)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Wn.prototype,r.qa=8,r.H=1,r.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new we(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=ot(s),ct(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=tr(this,i,e),n=Be(this.G),We(n,"RID",t),We(n,"CVER",22),this.F&&We(n,"X-HTTP-Session-Id",this.F),Zn(this,n),s&&(this.O?e="headers="+encodeURIComponent(String($n(s)))+"&"+e:this.o&&zn(n,this.o,s)),mn(this.h,i),this.bb&&We(n,"TYPE","init"),this.P?(We(n,"$req",e),We(n,"SID","null"),i.ba=!0,Se(i,n,null)):Se(i,n,e),this.H=2}}else 3==this.H&&(t?Jn(this,t):0==this.i.length||fn(this.h)||Jn(this))},r.Ma=function(){if(this.u=null,ir(this),this.ca&&!(this.L||null==this.g||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=le(w(this.jb,this),t)}},r.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,ae(10),Gn(this),ir(this))},r.ib=function(){null!=this.v&&(this.v=null,Gn(this),nr(this),ae(19))},r.pb=function(t){t?(this.j.info("Successfully pinged google.com"),ae(2)):(this.j.info("Failed to ping google.com"),ae(1))},r=dr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.Va=function(){},fr.prototype.g=function(t,e){return new pr(t,e)},T(pr,St),pr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;ae(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=ur(t,null,t.Y),Xn(t)},pr.prototype.close=function(){Kn(this.g)},pr.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=xt(t),t=n);e.i.push(new un(e.fb++,t)),3==e.H&&Xn(e)},pr.prototype.N=function(){this.g.l=null,delete this.j,Kn(this.g),delete this.g,pr.$.N.call(this)},T(gr,ye),T(mr,_e),T(yr,dr),yr.prototype.Ba=function(){kt(this.g,"a")},yr.prototype.Aa=function(t){kt(this.g,new gr(t))},yr.prototype.za=function(t){kt(this.g,new mr)},yr.prototype.ya=function(){kt(this.g,"b")},T(vr,_r),vr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},vr.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(0==i)for(;s<=n;)wr(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){wr(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){wr(this,r),i=0;break}}this.h=i,this.i+=e},vr.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var Tr={};function Er(t){return-128<=t&&128>t?L(Tr,t,(function(t){return new br([0|t],0>t?-1:0)})):new br([0|t],0>t?-1:0)}function Cr(t){if(isNaN(t)||!isFinite(t))return Ir;if(0>t)return Nr(Cr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=kr;return new br(e,0)}function Sr(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return Nr(Sr(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Cr(Math.pow(e,8)),r=Ir,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Cr(Math.pow(e,s)),r=r.R(s).add(Cr(o))):(r=r.R(n),r=r.add(Cr(o)))}return r}var kr=4294967296,Ir=Er(0),xr=Er(1),Ar=Er(16777216);function Dr(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Rr(t){return-1==t.h}function Nr(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new br(n,~t.h).add(xr)}function Or(t,e){return t.add(Nr(e))}function Pr(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Mr(t,e){this.g=t,this.h=e}function Lr(t,e){if(Dr(e))throw Error("division by zero");if(Dr(t))return new Mr(Ir,Ir);if(Rr(t))return e=Lr(Nr(t),e),new Mr(Nr(e.g),Nr(e.h));if(Rr(e))return e=Lr(t,Nr(e)),new Mr(Nr(e.g),e.h);if(30<t.g.length){if(Rr(t)||Rr(e))throw Error("slowDivide_ only works with positive integers.");for(var n=xr,r=e;0>=r.X(t);)n=Fr(n),r=Fr(r);var i=Ur(n,1),s=Ur(r,1);for(r=Ur(r,2),n=Ur(n,2);!Dr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ur(r,1),n=Ur(n,1)}return e=Or(t,i.R(e)),new Mr(i,e)}for(i=Ir;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Cr(n),o=s.R(e);Rr(o)||0<o.X(t);)n-=r,s=Cr(n),o=s.R(e);Dr(s)&&(s=xr),i=i.add(s),t=Or(t,o)}return new Mr(i,t)}function Fr(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new br(n,t.h)}function Ur(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new br(i,t.h)}r=br.prototype,r.ea=function(){if(Rr(this))return-Nr(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:kr+r)*e,e*=kr}return t},r.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Dr(this))return"0";if(Rr(this))return"-"+Nr(this).toString(t);for(var e=Cr(Math.pow(t,6)),n=this,r="";;){var i=Lr(n,e).g;n=Or(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Dr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},r.X=function(t){return t=Or(this,t),Rr(t)?-1:Dr(t)?0:1},r.abs=function(){return Rr(this)?Nr(this):this},r.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(65535&this.D(i))+(65535&t.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new br(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(t){if(Dr(this)||Dr(t))return Ir;if(Rr(this))return Rr(t)?Nr(this).R(Nr(t)):Nr(Nr(this).R(t));if(Rr(t))return Nr(this.R(Nr(t)));if(0>this.X(Ar)&&0>t.X(Ar))return Cr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=t.D(i)>>>16,c=65535&t.D(i);n[2*r+2*i]+=o*c,Pr(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Pr(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Pr(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Pr(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new br(n,0)},r.gb=function(t){return Lr(this,t).h},r.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new br(n,this.h&t.h)},r.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new br(n,this.h|t.h)},r.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new br(n,this.h^t.h)},fr.prototype.createWebChannel=fr.prototype.g,pr.prototype.send=pr.prototype.u,pr.prototype.open=pr.prototype.m,pr.prototype.close=pr.prototype.close,ue.NO_ERROR=0,ue.TIMEOUT=8,ue.HTTP_ERROR=6,he.COMPLETE="complete",pe.EventType=me,me.OPEN="a",me.CLOSE="b",me.ERROR="c",me.MESSAGE="d",St.prototype.listen=St.prototype.O,Rn.prototype.listenOnce=Rn.prototype.P,Rn.prototype.getLastError=Rn.prototype.Sa,Rn.prototype.getLastErrorCode=Rn.prototype.Ia,Rn.prototype.getStatus=Rn.prototype.da,Rn.prototype.getResponseJson=Rn.prototype.Wa,Rn.prototype.getResponseText=Rn.prototype.ja,Rn.prototype.send=Rn.prototype.ha,Rn.prototype.setWithCredentials=Rn.prototype.Oa,vr.prototype.digest=vr.prototype.l,vr.prototype.reset=vr.prototype.reset,vr.prototype.update=vr.prototype.j,br.prototype.add=br.prototype.add,br.prototype.multiply=br.prototype.R,br.prototype.modulo=br.prototype.gb,br.prototype.compare=br.prototype.X,br.prototype.toNumber=br.prototype.ea,br.prototype.toString=br.prototype.toString,br.prototype.getBits=br.prototype.D,br.fromNumber=Cr,br.fromString=Sr;var Vr=l.createWebChannelTransport=function(){return new fr},jr=l.getStatEventTarget=function(){return re()},qr=l.ErrorCode=ue,Br=l.EventType=he,$r=l.Event=ee,zr=l.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Hr=l.FetchXmlHttpFactory=Cn,Wr=l.WebChannel=pe,Kr=l.XhrIo=Rn,Gr=l.Md5=vr,Yr=l.Integer=br;const Xr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Qr.UNAUTHENTICATED=new Qr(null),Qr.GOOGLE_CREDENTIALS=new Qr("google-credentials-uid"),Qr.FIRST_PARTY=new Qr("first-party-uid"),Qr.MOCK_USER=new Qr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Jr="9.21.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=new o.Yd("@firebase/firestore");function ti(){return Zr.logLevel}function ei(t,...e){if(Zr.logLevel<=o["in"].DEBUG){const n=e.map(ii);Zr.debug(`Firestore (${Jr}): ${t}`,...n)}}function ni(t,...e){if(Zr.logLevel<=o["in"].ERROR){const n=e.map(ii);Zr.error(`Firestore (${Jr}): ${t}`,...n)}}function ri(t,...e){if(Zr.logLevel<=o["in"].WARN){const n=e.map(ii);Zr.warn(`Firestore (${Jr}): ${t}`,...n)}}function ii(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t="Unexpected state"){const e=`FIRESTORE (${Jr}) INTERNAL ASSERTION FAILED: `+t;throw ni(e),new Error(e)}function oi(t,e){t||si()}function ai(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class li extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class di{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Qr.UNAUTHENTICATED)))}shutdown(){}}class fi{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class pi{constructor(t){this.t=t,this.currentUser=Qr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new ui;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ui,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{ei("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(ei("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ui)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(ei("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(oi("string"==typeof e.accessToken),new hi(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return oi(null===t||"string"==typeof t),new Qr(t)}}class gi{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=Qr.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class mi{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new gi(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Qr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class yi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _i{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){const n=t=>{null!=t.error&&ei("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.T;return this.T=t.token,ei("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{ei("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?r(t):ei("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(oi("string"==typeof t.token),this.T=t.token,new yi(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vi(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=vi(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function bi(t,e){return t<e?-1:t>e?1:0}function Ti(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ei{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new li(ci.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new li(ci.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new li(ci.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new li(ci.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ei.fromMillis(Date.now())}static fromDate(t){return Ei.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Ei(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?bi(this.nanoseconds,t.nanoseconds):bi(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Ci(t)}static min(){return new Ci(new Ei(0,0))}static max(){return new Ci(new Ei(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t,e,n){void 0===e?e=0:e>t.length&&si(),void 0===n?n=t.length-e:n>t.length-e&&si(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Si.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Si?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ki extends Si{construct(t,e,n){return new ki(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new li(ci.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ki(e)}static emptyPath(){return new ki([])}}const Ii=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xi extends Si{construct(t,e,n){return new xi(t,e,n)}static isValidIdentifier(t){return Ii.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xi.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new xi(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new li(ci.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new li(ci.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new li(ci.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new li(ci.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new xi(e)}static emptyPath(){return new xi([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t){this.path=t}static fromPath(t){return new Ai(ki.fromString(t))}static fromName(t){return new Ai(ki.fromString(t).popFirst(5))}static empty(){return new Ai(ki.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ki.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ki.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ai(new ki(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}Di.UNKNOWN_ID=-1;function Ri(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Ci.fromTimestamp(1e9===r?new Ei(n+1,0):new Ei(n,r));return new Oi(i,Ai.empty(),e)}function Ni(t){return new Oi(t.readTime,t.key,-1)}class Oi{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Oi(Ci.min(),Ai.empty(),-1)}static max(){return new Oi(Ci.max(),Ai.empty(),-1)}}function Pi(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Ai.comparator(t.documentKey,e.documentKey),0!==n?n:bi(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Li{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(t){if(t.code!==ci.FAILED_PRECONDITION||t.message!==Mi)throw t;ei("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&si(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ui(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Ui?e:Ui.resolve(e)}catch(t){return Ui.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Ui.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Ui.reject(e)}static resolve(t){return new Ui(((e,n)=>{e(t)}))}static reject(t){return new Ui(((e,n)=>{n(t)}))}static waitFor(t){return new Ui(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Ui.resolve(!1);for(const n of t)e=e.next((t=>t?Ui.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Ui(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new Ui(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ji{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}function qi(t){return null==t}function Bi(t){return 0===t&&1/t==-1/0}function $i(t){return"number"==typeof t&&Number.isInteger(t)&&!Bi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ji.ct=-1;const zi=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Hi=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Wi=Hi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ki(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Yi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(t,e){this.comparator=t,this.root=e||Ji.EMPTY}insert(t,e){return new Xi(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ji.BLACK,null,null))}remove(t){return new Xi(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ji.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Qi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Qi(this.root,t,this.comparator,!1)}getReverseIterator(){return new Qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Qi(this.root,t,this.comparator,!0)}}class Qi{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ji{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Ji.RED,this.left=null!=r?r:Ji.EMPTY,this.right=null!=i?i:Ji.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Ji(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ji.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Ji.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ji.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ji.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw si();if(this.right.isRed())throw si();const t=this.left.check();if(t!==this.right.check())throw si();return t+(this.isRed()?0:1)}}Ji.EMPTY=null,Ji.RED=!0,Ji.BLACK=!1,Ji.EMPTY=new class{constructor(){this.size=0}get key(){throw si()}get value(){throw si()}get color(){throw si()}get left(){throw si()}get right(){throw si()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ji(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zi{constructor(t){this.comparator=t,this.data=new Xi(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ts(this.data.getIterator())}getIteratorFrom(t){return new ts(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Zi))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Zi(this.comparator);return e.data=t,e}}class ts{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class es{constructor(t){this.fields=t,t.sort(xi.comparator)}static empty(){return new es([])}unionWith(t){let e=new Zi(xi.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new es(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ti(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rs{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new ns("Invalid base64 string: "+t):t}}(t);return new rs(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new rs(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return bi(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}rs.EMPTY_BYTE_STRING=new rs("");const is=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ss(t){if(oi(!!t),"string"==typeof t){let e=0;const n=is.exec(t);if(oi(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:os(t.seconds),nanos:os(t.nanos)}}function os(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function as(t){return"string"==typeof t?rs.fromBase64String(t):rs.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ls(t){const e=t.mapValue.fields.__previous_value__;return cs(e)?ls(e):e}function us(t){const e=ss(t.mapValue.fields.__local_write_time__.timestampValue);return new Ei(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class ds{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ds("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof ds&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ps(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?cs(t)?4:Is(t)?9007199254740991:10:si()}function gs(t,e){if(t===e)return!0;const n=ps(t);if(n!==ps(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return us(t).isEqual(us(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ss(t.timestampValue),r=ss(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return as(t.bytesValue).isEqual(as(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return os(t.geoPointValue.latitude)===os(e.geoPointValue.latitude)&&os(t.geoPointValue.longitude)===os(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return os(t.integerValue)===os(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=os(t.doubleValue),r=os(e.doubleValue);return n===r?Bi(n)===Bi(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Ti(t.arrayValue.values||[],e.arrayValue.values||[],gs);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Ki(n)!==Ki(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!gs(n[i],r[i])))return!1;return!0}(t,e);default:return si()}}function ms(t,e){return void 0!==(t.values||[]).find((t=>gs(t,e)))}function ys(t,e){if(t===e)return 0;const n=ps(t),r=ps(e);if(n!==r)return bi(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return bi(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=os(t.integerValue||t.doubleValue),r=os(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return _s(t.timestampValue,e.timestampValue);case 4:return _s(us(t),us(e));case 5:return bi(t.stringValue,e.stringValue);case 6:return function(t,e){const n=as(t),r=as(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=bi(n[i],r[i]);if(0!==t)return t}return bi(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=bi(os(t.latitude),os(e.latitude));return 0!==n?n:bi(os(t.longitude),os(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=ys(n[i],r[i]);if(t)return t}return bi(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===fs.mapValue&&e===fs.mapValue)return 0;if(t===fs.mapValue)return 1;if(e===fs.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=bi(r[o],s[o]);if(0!==t)return t;const e=ys(n[r[o]],i[s[o]]);if(0!==e)return e}return bi(r.length,s.length)}(t.mapValue,e.mapValue);default:throw si()}}function _s(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return bi(t,e);const n=ss(t),r=ss(e),i=bi(n.seconds,r.seconds);return 0!==i?i:bi(n.nanos,r.nanos)}function vs(t){return ws(t)}function ws(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ss(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?as(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Ai.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=ws(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${ws(t.fields[i])}`;return n+"}"}(t.mapValue):si();var e,n}function bs(t){return!!t&&"integerValue"in t}function Ts(t){return!!t&&"arrayValue"in t}function Es(t){return!!t&&"nullValue"in t}function Cs(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ss(t){return!!t&&"mapValue"in t}function ks(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Gi(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ks(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ks(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Is(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xs{constructor(t){this.value=t}static empty(){return new xs({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ss(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ks(e)}setAll(t){let e=xi.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=ks(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Ss(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return gs(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Ss(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Gi(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new xs(ks(this.value))}}function As(t){const e=[];return Gi(t.fields,((t,n)=>{const r=new xi([t]);if(Ss(n)){const t=As(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new es(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ds{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new Ds(t,0,Ci.min(),Ci.min(),Ci.min(),xs.empty(),0)}static newFoundDocument(t,e,n,r){return new Ds(t,1,e,Ci.min(),n,r,0)}static newNoDocument(t,e){return new Ds(t,2,e,Ci.min(),Ci.min(),xs.empty(),0)}static newUnknownDocument(t,e){return new Ds(t,3,e,Ci.min(),Ci.min(),xs.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Ci.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=xs.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=xs.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ci.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Ds&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ds(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(t,e){this.position=t,this.inclusive=e}}function Ns(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Ai.comparator(Ai.fromName(o.referenceValue),n.key):ys(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Os(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gs(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ms(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{}class Fs extends Ls{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Hs(t,e,n):"array-contains"===e?new Ys(t,n):"in"===e?new Xs(t,n):"not-in"===e?new Qs(t,n):"array-contains-any"===e?new Js(t,n):new Fs(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Ws(t,n):new Ks(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(ys(e,this.value)):null!==e&&ps(this.value)===ps(e)&&this.matchesComparison(ys(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return si()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Us extends Ls{constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}static create(t,e){return new Us(t,e)}matches(t){return Vs(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt((t=>t.isInequality()));return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function Vs(t){return"and"===t.op}function js(t){return qs(t)&&Vs(t)}function qs(t){for(const e of t.filters)if(e instanceof Us)return!1;return!0}function Bs(t){if(t instanceof Fs)return t.field.canonicalString()+t.op.toString()+vs(t.value);if(js(t))return t.filters.map((t=>Bs(t))).join(",");{const e=t.filters.map((t=>Bs(t))).join(",");return`${t.op}(${e})`}}function $s(t,e){return t instanceof Fs?function(t,e){return e instanceof Fs&&t.op===e.op&&t.field.isEqual(e.field)&&gs(t.value,e.value)}(t,e):t instanceof Us?function(t,e){return e instanceof Us&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&$s(n,e.filters[r])),!0)}(t,e):void si()}function zs(t){return t instanceof Fs?function(t){return`${t.field.canonicalString()} ${t.op} ${vs(t.value)}`}(t):t instanceof Us?function(t){return t.op.toString()+" {"+t.getFilters().map(zs).join(" ,")+"}"}(t):"Filter"}class Hs extends Fs{constructor(t,e,n){super(t,e,n),this.key=Ai.fromName(n.referenceValue)}matches(t){const e=Ai.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ws extends Fs{constructor(t,e){super(t,"in",e),this.keys=Gs("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Ks extends Fs{constructor(t,e){super(t,"not-in",e),this.keys=Gs("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Gs(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Ai.fromName(t.referenceValue)))}class Ys extends Fs{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ts(e)&&ms(e.arrayValue,this.value)}}class Xs extends Fs{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ms(this.value.arrayValue,e)}}class Qs extends Fs{constructor(t,e){super(t,"not-in",e)}matches(t){if(ms(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ms(this.value.arrayValue,e)}}class Js extends Fs{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ts(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>ms(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ft=null}}function to(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Zs(t,e,n,r,i,s,o)}function eo(t){const e=ai(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Bs(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),qi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>vs(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>vs(t))).join(",")),e.ft=t}return e.ft}function no(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ms(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$s(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Os(t.startAt,e.startAt)&&Os(t.endAt,e.endAt)}function ro(t){return Ai.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class io{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function so(t,e,n,r,i,s,o,a){return new io(t,e,n,r,i,s,o,a)}function oo(t){return new io(t)}function ao(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function co(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function lo(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function uo(t){return null!==t.collectionGroup}function ho(t){const e=ai(t);if(null===e.dt){e.dt=[];const t=lo(e),n=co(e);if(null!==t&&null===n)t.isKeyField()||e.dt.push(new Ps(t)),e.dt.push(new Ps(xi.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ps(xi.keyField(),t))}}}return e.dt}function fo(t){const e=ai(t);if(!e._t)if("F"===e.limitType)e._t=to(e.path,e.collectionGroup,ho(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of ho(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Ps(i.field,e))}const n=e.endAt?new Rs(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Rs(e.startAt.position,e.startAt.inclusive):null;e._t=to(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e._t}function po(t,e,n){return new io(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function go(t,e){return no(fo(t),fo(e))&&t.limitType===e.limitType}function mo(t){return`${eo(fo(t))}|lt:${t.limitType}`}function yo(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>zs(t))).join(", ")}]`),qi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>vs(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>vs(t))).join(",")),`Target(${e})`}(fo(t))}; limitType=${t.limitType})`}function _o(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Ai.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of ho(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Ns(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,ho(t),e))&&!(t.endAt&&!function(t,e,n){const r=Ns(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,ho(t),e))}(t,e)}function vo(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function wo(t){return(e,n)=>{let r=!1;for(const i of ho(t)){const t=bo(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function bo(t,e,n){const r=t.field.isKeyField()?Ai.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?ys(r,i):si()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return si()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Gi(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return Yi(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=new Xi(Ai.comparator);function Co(){return Eo}const So=new Xi(Ai.comparator);function ko(...t){let e=So;for(const n of t)e=e.insert(n.key,n);return e}function Io(t){let e=So;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function xo(){return Do()}function Ao(){return Do()}function Do(){return new To((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Ro=new Xi(Ai.comparator),No=new Zi(Ai.comparator);function Oo(...t){let e=No;for(const n of t)e=e.add(n);return e}const Po=new Zi(bi);function Mo(){return Po}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bi(e)?"-0":e}}function Fo(t){return{integerValue:""+t}}function Uo(t,e){return $i(e)?Fo(e):Lo(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this._=void 0}}function jo(t,e,n){return t instanceof $o?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&cs(e)&&(e=ls(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof zo?Ho(t,e):t instanceof Wo?Ko(t,e):function(t,e){const n=Bo(t,e),r=Yo(n)+Yo(t.wt);return bs(n)&&bs(t.wt)?Fo(r):Lo(t.serializer,r)}(t,e)}function qo(t,e,n){return t instanceof zo?Ho(t,e):t instanceof Wo?Ko(t,e):n}function Bo(t,e){return t instanceof Go?bs(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class $o extends Vo{}class zo extends Vo{constructor(t){super(),this.elements=t}}function Ho(t,e){const n=Xo(e);for(const r of t.elements)n.some((t=>gs(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Wo extends Vo{constructor(t){super(),this.elements=t}}function Ko(t,e){let n=Xo(e);for(const r of t.elements)n=n.filter((t=>!gs(t,r)));return{arrayValue:{values:n}}}class Go extends Vo{constructor(t,e){super(),this.serializer=t,this.wt=e}}function Yo(t){return os(t.integerValue||t.doubleValue)}function Xo(t){return Ts(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t,e){this.field=t,this.transform=e}}function Jo(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof zo&&e instanceof zo||t instanceof Wo&&e instanceof Wo?Ti(t.elements,e.elements,gs):t instanceof Go&&e instanceof Go?gs(t.wt,e.wt):t instanceof $o&&e instanceof $o}(t.transform,e.transform)}class Zo{constructor(t,e){this.version=t,this.transformResults=e}}class ta{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ta}static exists(t){return new ta(void 0,t)}static updateTime(t){return new ta(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ea(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class na{}function ra(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new fa(t.key,ta.none()):new ca(t.key,t.data,ta.none());{const n=t.data,r=xs.empty();let i=new Zi(xi.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new la(t.key,r,new es(i.toArray()),ta.none())}}function ia(t,e,n){t instanceof ca?function(t,e,n){const r=t.value.clone(),i=ha(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof la?function(t,e,n){if(!ea(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=ha(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(ua(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function sa(t,e,n,r){return t instanceof ca?function(t,e,n,r){if(!ea(t.precondition,e))return n;const i=t.value.clone(),s=da(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof la?function(t,e,n,r){if(!ea(t.precondition,e))return n;const i=da(t.fieldTransforms,r,e),s=e.data;return s.setAll(ua(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return ea(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function oa(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Bo(r.transform,t||null);null!=i&&(null===n&&(n=xs.empty()),n.set(r.field,i))}return n||null}function aa(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Ti(t,e,((t,e)=>Jo(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ca extends na{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class la extends na{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ua(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function ha(t,e,n){const r=new Map;oi(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,qo(o,a,n[i]))}return r}function da(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,jo(t,s,e))}return r}class fa extends na{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pa extends na{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&ia(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=sa(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=sa(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ao();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=ra(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Ci.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Oo())}isEqual(t){return this.batchId===t.batchId&&Ti(this.mutations,t.mutations,((t,e)=>aa(t,e)))&&Ti(this.baseMutations,t.baseMutations,((t,e)=>aa(t,e)))}}class ma{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){oi(t.mutations.length===n.length);let r=Ro;const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new ma(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _a{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var va,wa;function ba(t){switch(t){default:return si();case ci.CANCELLED:case ci.UNKNOWN:case ci.DEADLINE_EXCEEDED:case ci.RESOURCE_EXHAUSTED:case ci.INTERNAL:case ci.UNAVAILABLE:case ci.UNAUTHENTICATED:return!1;case ci.INVALID_ARGUMENT:case ci.NOT_FOUND:case ci.ALREADY_EXISTS:case ci.PERMISSION_DENIED:case ci.FAILED_PRECONDITION:case ci.ABORTED:case ci.OUT_OF_RANGE:case ci.UNIMPLEMENTED:case ci.DATA_LOSS:return!0}}function Ta(t){if(void 0===t)return ni("GRPC error has no .code"),ci.UNKNOWN;switch(t){case va.OK:return ci.OK;case va.CANCELLED:return ci.CANCELLED;case va.UNKNOWN:return ci.UNKNOWN;case va.DEADLINE_EXCEEDED:return ci.DEADLINE_EXCEEDED;case va.RESOURCE_EXHAUSTED:return ci.RESOURCE_EXHAUSTED;case va.INTERNAL:return ci.INTERNAL;case va.UNAVAILABLE:return ci.UNAVAILABLE;case va.UNAUTHENTICATED:return ci.UNAUTHENTICATED;case va.INVALID_ARGUMENT:return ci.INVALID_ARGUMENT;case va.NOT_FOUND:return ci.NOT_FOUND;case va.ALREADY_EXISTS:return ci.ALREADY_EXISTS;case va.PERMISSION_DENIED:return ci.PERMISSION_DENIED;case va.FAILED_PRECONDITION:return ci.FAILED_PRECONDITION;case va.ABORTED:return ci.ABORTED;case va.OUT_OF_RANGE:return ci.OUT_OF_RANGE;case va.UNIMPLEMENTED:return ci.UNIMPLEMENTED;case va.DATA_LOSS:return ci.DATA_LOSS;default:return si()}}(wa=va||(va={}))[wa.OK=0]="OK",wa[wa.CANCELLED=1]="CANCELLED",wa[wa.UNKNOWN=2]="UNKNOWN",wa[wa.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",wa[wa.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",wa[wa.NOT_FOUND=5]="NOT_FOUND",wa[wa.ALREADY_EXISTS=6]="ALREADY_EXISTS",wa[wa.PERMISSION_DENIED=7]="PERMISSION_DENIED",wa[wa.UNAUTHENTICATED=16]="UNAUTHENTICATED",wa[wa.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",wa[wa.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",wa[wa.ABORTED=10]="ABORTED",wa[wa.OUT_OF_RANGE=11]="OUT_OF_RANGE",wa[wa.UNIMPLEMENTED=12]="UNIMPLEMENTED",wa[wa.INTERNAL=13]="INTERNAL",wa[wa.UNAVAILABLE=14]="UNAVAILABLE",wa[wa.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ea{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ca}static getOrCreateInstance(){return null===Ca&&(Ca=new Ea),Ca}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach((e=>e(t)))}}let Ca=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=new Yr([4294967295,4294967295],0);function Ia(t){const e=Sa().encode(t),n=new Gr;return n.update(e),new Uint8Array(n.digest())}function xa(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Yr([n,r],0),new Yr([i,s],0)]}class Aa{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Da(`Invalid padding: ${e}`);if(n<0)throw new Da(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Da(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Da(`Invalid padding when bitmap length is 0: ${e}`);this.yt=8*t.length-e,this.It=Yr.fromNumber(this.yt)}Tt(t,e,n){let r=t.add(e.multiply(Yr.fromNumber(n)));return 1===r.compare(ka)&&(r=new Yr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.It).toNumber()}Et(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}At(t){if(0===this.yt)return!1;const e=Ia(t),[n,r]=xa(e);for(let i=0;i<this.hashCount;i++){const t=this.Tt(n,r,i);if(!this.Et(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new Aa(i,r,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.yt)return;const e=Ia(t),[n,r]=xa(e);for(let i=0;i<this.hashCount;i++){const t=this.Tt(n,r,i);this.Rt(t)}}Rt(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Da extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,Na.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Ra(Ci.min(),r,new Xi(bi),Co(),Oo())}}class Na{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Na(n,e,Oo(),Oo(),Oo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t,e,n,r){this.vt=t,this.removedTargetIds=e,this.key=n,this.Pt=r}}class Pa{constructor(t,e){this.targetId=t,this.bt=e}}class Ma{constructor(t,e,n=rs.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class La{constructor(){this.Vt=0,this.St=Va(),this.Dt=rs.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return 0!==this.Vt}get kt(){return this.xt}Mt(t){t.approximateByteSize()>0&&(this.xt=!0,this.Dt=t)}Ot(){let t=Oo(),e=Oo(),n=Oo();return this.St.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:si()}})),new Na(this.Dt,this.Ct,t,e,n)}$t(){this.xt=!1,this.St=Va()}Ft(t,e){this.xt=!0,this.St=this.St.insert(t,e)}Bt(t){this.xt=!0,this.St=this.St.remove(t)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class Fa{constructor(t){this.Kt=t,this.Gt=new Map,this.Qt=Co(),this.jt=Ua(),this.zt=new Xi(bi)}Wt(t){for(const e of t.vt)t.Pt&&t.Pt.isFoundDocument()?this.Ht(e,t.Pt):this.Jt(e,t.key,t.Pt);for(const e of t.removedTargetIds)this.Jt(e,t.key,t.Pt)}Yt(t){this.forEachTarget(t,(e=>{const n=this.Xt(e);switch(t.state){case 0:this.Zt(e)&&n.Mt(t.resumeToken);break;case 1:n.qt(),n.Nt||n.$t(),n.Mt(t.resumeToken);break;case 2:n.qt(),n.Nt||this.removeTarget(e);break;case 3:this.Zt(e)&&(n.Ut(),n.Mt(t.resumeToken));break;case 4:this.Zt(e)&&(this.te(e),n.Mt(t.resumeToken));break;default:si()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Gt.forEach(((t,n)=>{this.Zt(n)&&e(n)}))}ee(t){var e;const n=t.targetId,r=t.bt.count,i=this.ne(n);if(i){const s=i.target;if(ro(s))if(0===r){const t=new Ai(s.path);this.Jt(n,t,Ds.newNoDocument(t,Ci.min()))}else oi(1===r);else{const i=this.se(n);if(i!==r){const r=this.ie(t,i);if(0!==r){this.te(n);const t=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(n,t)}null===(e=Ea.instance)||void 0===e||e.notifyOnExistenceFilterMismatch(function(t,e,n){var r,i,s,o,a,c;const l={localCacheCount:e,existenceFilterCount:n.count},u=n.unchangedNames;return u&&(l.bloomFilter={applied:0===t,hashCount:null!==(r=null==u?void 0:u.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(o=null===(s=null===(i=null==u?void 0:u.bits)||void 0===i?void 0:i.bitmap)||void 0===s?void 0:s.length)&&void 0!==o?o:0,padding:null!==(c=null===(a=null==u?void 0:u.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),l}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,i,t.bt))}}}}ie(t,e){const{unchangedNames:n,count:r}=t.bt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=as(i).toUint8Array()}catch(t){if(t instanceof ns)return ri("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw t}try{c=new Aa(a,s,o)}catch(t){return ri(t instanceof Da?"BloomFilter error: ":"Applying bloom filter failed: ",t),1}return 0===c.yt?1:r!==e-this.re(t.targetId,c)?2:0}re(t,e){const n=this.Kt.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.Kt.oe(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.At(s)||(this.Jt(t,n,null),r++)})),r}ue(t){const e=new Map;this.Gt.forEach(((n,r)=>{const i=this.ne(r);if(i){if(n.current&&ro(i.target)){const e=new Ai(i.target.path);null!==this.Qt.get(e)||this.ce(r,e)||this.Jt(r,e,Ds.newNoDocument(e,t))}n.kt&&(e.set(r,n.Ot()),n.$t())}}));let n=Oo();this.jt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.ne(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.Qt.forEach(((e,n)=>n.setReadTime(t)));const r=new Ra(t,e,this.zt,this.Qt,n);return this.Qt=Co(),this.jt=Ua(),this.zt=new Xi(bi),r}Ht(t,e){if(!this.Zt(t))return;const n=this.ce(t,e.key)?2:0;this.Xt(t).Ft(e.key,n),this.Qt=this.Qt.insert(e.key,e),this.jt=this.jt.insert(e.key,this.ae(e.key).add(t))}Jt(t,e,n){if(!this.Zt(t))return;const r=this.Xt(t);this.ce(t,e)?r.Ft(e,1):r.Bt(e),this.jt=this.jt.insert(e,this.ae(e).delete(t)),n&&(this.Qt=this.Qt.insert(e,n))}removeTarget(t){this.Gt.delete(t)}se(t){const e=this.Xt(t).Ot();return this.Kt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Lt(t){this.Xt(t).Lt()}Xt(t){let e=this.Gt.get(t);return e||(e=new La,this.Gt.set(t,e)),e}ae(t){let e=this.jt.get(t);return e||(e=new Zi(bi),this.jt=this.jt.insert(t,e)),e}Zt(t){const e=null!==this.ne(t);return e||ei("WatchChangeAggregator","Detected inactive target",t),e}ne(t){const e=this.Gt.get(t);return e&&e.Nt?null:this.Kt.he(t)}te(t){this.Gt.set(t,new La),this.Kt.getRemoteKeysForTarget(t).forEach((e=>{this.Jt(t,e,null)}))}ce(t,e){return this.Kt.getRemoteKeysForTarget(t).has(e)}}function Ua(){return new Xi(Ai.comparator)}function Va(){return new Xi(Ai.comparator)}const ja=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),qa=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),Ba=(()=>{const t={and:"AND",or:"OR"};return t})();class $a{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function za(t,e){return t.useProto3Json||qi(e)?e:{value:e}}function Ha(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wa(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ka(t,e){return Ha(t,e.toTimestamp())}function Ga(t){return oi(!!t),Ci.fromTimestamp(function(t){const e=ss(t);return new Ei(e.seconds,e.nanos)}(t))}function Ya(t,e){return function(t){return new ki(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Xa(t){const e=ki.fromString(t);return oi(vc(e)),e}function Qa(t,e){return Ya(t.databaseId,e.path)}function Ja(t,e){const n=Xa(e);if(n.get(1)!==t.databaseId.projectId)throw new li(ci.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new li(ci.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ai(nc(n))}function Za(t,e){return Ya(t.databaseId,e)}function tc(t){const e=Xa(t);return 4===e.length?ki.emptyPath():nc(e)}function ec(t){return new ki(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function nc(t){return oi(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function rc(t,e,n){return{name:Qa(t,e),fields:n.value.mapValue.fields}}function ic(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:si()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(oi(void 0===e||"string"==typeof e),rs.fromBase64String(e||"")):(oi(void 0===e||e instanceof Uint8Array),rs.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?ci.UNKNOWN:Ta(t.code);return new li(e,t.message||"")}(o);n=new Ma(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ja(t,r.document.name),s=Ga(r.document.updateTime),o=r.document.createTime?Ga(r.document.createTime):Ci.min(),a=new xs({mapValue:{fields:r.document.fields}}),c=Ds.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Oa(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ja(t,r.document),s=r.readTime?Ga(r.readTime):Ci.min(),o=Ds.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Oa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ja(t,r.document),s=r.removedTargetIds||[];n=new Oa([],s,i,null)}else{if(!("filter"in e))return si();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new _a(r,i),o=t.targetId;n=new Pa(o,s)}}return n}function sc(t,e){let n;if(e instanceof ca)n={update:rc(t,e.key,e.value)};else if(e instanceof fa)n={delete:Qa(t,e.key)};else if(e instanceof la)n={update:rc(t,e.key,e.data),updateMask:_c(e.fieldMask)};else{if(!(e instanceof pa))return si();n={verify:Qa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof $o)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof zo)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Wo)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Go)return{fieldPath:e.field.canonicalString(),increment:n.wt};throw si()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ka(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:si()}(t,e.precondition)),n}function oc(t,e){return t&&t.length>0?(oi(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Ga(t.updateTime):Ga(e);return n.isEqual(Ci.min())&&(n=Ga(e)),new Zo(n,t.transformResults||[])}(t,e)))):[]}function ac(t,e){return{documents:[Za(t,e.path)]}}function cc(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Za(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Za(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0!==t.length)return yc(Us.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:gc(t.field),direction:dc(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=za(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function lc(t){let e=tc(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oi(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=hc(t);return e instanceof Us&&js(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Ps(mc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,qi(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Rs(n,e)}(n.startAt));let l=null;return n.endAt&&(l=function(t){const e=!t.before,n=t.values||[];return new Rs(n,e)}(n.endAt)),so(e,i,o,s,a,"F",c,l)}function uc(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return si()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function hc(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=mc(t.unaryFilter.field);return Fs.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=mc(t.unaryFilter.field);return Fs.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=mc(t.unaryFilter.field);return Fs.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=mc(t.unaryFilter.field);return Fs.create(i,"!=",{nullValue:"NULL_VALUE"});default:return si()}}(t):void 0!==t.fieldFilter?function(t){return Fs.create(mc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return si()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Us.create(t.compositeFilter.filters.map((t=>hc(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return si()}}(t.compositeFilter.op))}(t):si()}function dc(t){return ja[t]}function fc(t){return qa[t]}function pc(t){return Ba[t]}function gc(t){return{fieldPath:t.canonicalString()}}function mc(t){return xi.fromServerFormat(t.fieldPath)}function yc(t){return t instanceof Fs?function(t){if("=="===t.op){if(Cs(t.value))return{unaryFilter:{field:gc(t.field),op:"IS_NAN"}};if(Es(t.value))return{unaryFilter:{field:gc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Cs(t.value))return{unaryFilter:{field:gc(t.field),op:"IS_NOT_NAN"}};if(Es(t.value))return{unaryFilter:{field:gc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gc(t.field),op:fc(t.op),value:t.value}}}(t):t instanceof Us?function(t){const e=t.getFilters().map((t=>yc(t)));return 1===e.length?e[0]:{compositeFilter:{op:pc(t.op),filters:e}}}(t):si()}function _c(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function vc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t,e,n,r,i=Ci.min(),s=Ci.min(),o=rs.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new wc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new wc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new wc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new wc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(t){this.le=t}}function Tc(t){const e=lc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?po(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(){}_e(t,e){this.we(t,e),e.me()}we(t,e){if("nullValue"in t)this.ge(e,5);else if("booleanValue"in t)this.ge(e,10),e.ye(t.booleanValue?1:0);else if("integerValue"in t)this.ge(e,15),e.ye(os(t.integerValue));else if("doubleValue"in t){const n=os(t.doubleValue);isNaN(n)?this.ge(e,13):(this.ge(e,15),Bi(n)?e.ye(0):e.ye(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ge(e,20),"string"==typeof n?e.pe(n):(e.pe(`${n.seconds||""}`),e.ye(n.nanos||0))}else if("stringValue"in t)this.Ie(t.stringValue,e),this.Te(e);else if("bytesValue"in t)this.ge(e,30),e.Ee(as(t.bytesValue)),this.Te(e);else if("referenceValue"in t)this.Ae(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ge(e,45),e.ye(n.latitude||0),e.ye(n.longitude||0)}else"mapValue"in t?Is(t)?this.ge(e,Number.MAX_SAFE_INTEGER):(this.Re(t.mapValue,e),this.Te(e)):"arrayValue"in t?(this.ve(t.arrayValue,e),this.Te(e)):si()}Ie(t,e){this.ge(e,25),this.Pe(t,e)}Pe(t,e){e.pe(t)}Re(t,e){const n=t.fields||{};this.ge(e,55);for(const r of Object.keys(n))this.Ie(r,e),this.we(n[r],e)}ve(t,e){const n=t.values||[];this.ge(e,50);for(const r of n)this.we(r,e)}Ae(t,e){this.ge(e,37),Ai.fromName(t).path.forEach((t=>{this.ge(e,60),this.Pe(t,e)}))}ge(t,e){t.ye(e)}Te(t){t.ye(2)}}Ec.be=new Ec;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cc{constructor(){this.sn=new Sc}addToCollectionParentIndex(t,e){return this.sn.add(e),Ui.resolve()}getCollectionParents(t,e){return Ui.resolve(this.sn.getEntries(e))}addFieldIndex(t,e){return Ui.resolve()}deleteFieldIndex(t,e){return Ui.resolve()}getDocumentsMatchingTarget(t,e){return Ui.resolve(null)}getIndexType(t,e){return Ui.resolve(0)}getFieldIndexes(t,e){return Ui.resolve([])}getNextCollectionGroupToUpdate(t){return Ui.resolve(null)}getMinOffset(t,e){return Ui.resolve(Oi.min())}getMinOffsetFromCollectionGroup(t,e){return Ui.resolve(Oi.min())}updateCollectionGroup(t,e,n){return Ui.resolve()}updateIndexEntries(t,e){return Ui.resolve()}}class Sc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Zi(ki.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Zi(ki.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class kc{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new kc(t,kc.DEFAULT_COLLECTION_PERCENTILE,kc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kc.DEFAULT_COLLECTION_PERCENTILE=10,kc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kc.DEFAULT=new kc(41943040,kc.DEFAULT_COLLECTION_PERCENTILE,kc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kc.DISABLED=new kc(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ic{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static Nn(){return new Ic(0)}static kn(){return new Ic(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xc{constructor(){this.changes=new To((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ds.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ui.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ac{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&sa(n.mutation,t,es.empty(),Ei.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Oo()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Oo()){const r=xo();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=ko();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=xo();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Oo())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=Co();const s=Do(),o=Do();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof la)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),sa(o.mutation,e,o.mutation.getFieldMask(),Ei.now())):s.set(e.key,es.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Ac(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Do();let r=new Xi(((t,e)=>t-e)),i=Oo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||es.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||Oo()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,l=Ao();c.forEach((t=>{if(!i.has(t)){const r=ra(e.get(t),n.get(t));null!==r&&l.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,l))}return Ui.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Ai.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):uo(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Ui.resolve(xo());let o=-1,a=i;return s.next((e=>Ui.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Ui.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Oo()))).next((t=>({batchId:o,changes:Io(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Ai(e)).next((t=>{let e=ko();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=ko();return this.indexManager.getCollectionParents(t,r).next((s=>Ui.forEach(s,(s=>{const o=function(t,e){return new io(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r)))).next((t=>{r.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,Ds.newInvalidDocument(r)))}));let n=ko();return t.forEach(((t,i)=>{const s=r.get(t);void 0!==s&&sa(s.mutation,i,es.empty(),Ei.now()),_o(e,i)&&(n=n.insert(t,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t){this.serializer=t,this.us=new Map,this.cs=new Map}getBundleMetadata(t,e){return Ui.resolve(this.us.get(e))}saveBundleMetadata(t,e){var n;return this.us.set(e.id,{id:(n=e).id,version:n.version,createTime:Ga(n.createTime)}),Ui.resolve()}getNamedQuery(t,e){return Ui.resolve(this.cs.get(e))}saveNamedQuery(t,e){return this.cs.set(e.name,function(t){return{name:t.name,query:Tc(t.bundledQuery),readTime:Ga(t.readTime)}}(e)),Ui.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(){this.overlays=new Xi(Ai.comparator),this.hs=new Map}getOverlay(t,e){return Ui.resolve(this.overlays.get(e))}getOverlays(t,e){const n=xo();return Ui.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.de(t,e,r)})),Ui.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.hs.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.hs.delete(n)),Ui.resolve()}getOverlaysForCollection(t,e,n){const r=xo(),i=e.length+1,s=new Ai(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Ui.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Xi(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=xo(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=xo(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return Ui.resolve(o)}de(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.hs.get(r.largestBatchId).delete(n.key);this.hs.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new ya(e,n));let i=this.hs.get(e);void 0===i&&(i=Oo(),this.hs.set(e,i)),this.hs.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(){this.ls=new Zi(Pc.fs),this.ds=new Zi(Pc._s)}isEmpty(){return this.ls.isEmpty()}addReference(t,e){const n=new Pc(t,e);this.ls=this.ls.add(n),this.ds=this.ds.add(n)}ws(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.gs(new Pc(t,e))}ys(t,e){t.forEach((t=>this.removeReference(t,e)))}ps(t){const e=new Ai(new ki([])),n=new Pc(e,t),r=new Pc(e,t+1),i=[];return this.ds.forEachInRange([n,r],(t=>{this.gs(t),i.push(t.key)})),i}Is(){this.ls.forEach((t=>this.gs(t)))}gs(t){this.ls=this.ls.delete(t),this.ds=this.ds.delete(t)}Ts(t){const e=new Ai(new ki([])),n=new Pc(e,t),r=new Pc(e,t+1);let i=Oo();return this.ds.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Pc(t,0),n=this.ls.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Pc{constructor(t,e){this.key=t,this.Es=e}static fs(t,e){return Ai.comparator(t.key,e.key)||bi(t.Es,e.Es)}static _s(t,e){return bi(t.Es,e.Es)||Ai.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.As=1,this.Rs=new Zi(Pc.fs)}checkEmpty(t){return Ui.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new ga(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.Rs=this.Rs.add(new Pc(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Ui.resolve(s)}lookupMutationBatch(t,e){return Ui.resolve(this.vs(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Ps(n),i=r<0?0:r;return Ui.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Ui.resolve(0===this.mutationQueue.length?-1:this.As-1)}getAllMutationBatches(t){return Ui.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Pc(e,0),r=new Pc(e,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],(t=>{const e=this.vs(t.Es);i.push(e)})),Ui.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Zi(bi);return e.forEach((t=>{const e=new Pc(t,0),r=new Pc(t,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([e,r],(t=>{n=n.add(t.Es)}))})),Ui.resolve(this.bs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Ai.isDocumentKey(i)||(i=i.child(""));const s=new Pc(new Ai(i),0);let o=new Zi(bi);return this.Rs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.Es)),!0)}),s),Ui.resolve(this.bs(o))}bs(t){const e=[];return t.forEach((t=>{const n=this.vs(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){oi(0===this.Vs(e.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return Ui.forEach(e.mutations,(r=>{const i=new Pc(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.Rs=n}))}Dn(t){}containsKey(t,e){const n=new Pc(e,0),r=this.Rs.firstAfterOrEqual(n);return Ui.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Ui.resolve()}Vs(t,e){return this.Ps(t)}Ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}vs(t){const e=this.Ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t){this.Ss=t,this.docs=new Xi(Ai.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ss(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ui.resolve(n?n.document.mutableCopy():Ds.newInvalidDocument(e))}getEntries(t,e){let n=Co();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Ds.newInvalidDocument(t))})),Ui.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=Co();const s=e.path,o=new Ai(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Pi(Ni(o),n)<=0||(r.has(o.key)||_o(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Ui.resolve(i)}getAllFromCollectionGroup(t,e,n,r){si()}Ds(t,e){return Ui.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Fc(this)}getSize(t){return Ui.resolve(this.size)}}class Fc extends xc{constructor(t){super(),this.rs=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.rs.addEntry(t,r)):this.rs.removeEntry(n)})),Ui.waitFor(e)}getFromCache(t,e){return this.rs.getEntry(t,e)}getAllFromCache(t,e){return this.rs.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t){this.persistence=t,this.Cs=new To((t=>eo(t)),no),this.lastRemoteSnapshotVersion=Ci.min(),this.highestTargetId=0,this.xs=0,this.Ns=new Oc,this.targetCount=0,this.ks=Ic.Nn()}forEachTarget(t,e){return this.Cs.forEach(((t,n)=>e(n))),Ui.resolve()}getLastRemoteSnapshotVersion(t){return Ui.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ui.resolve(this.xs)}allocateTargetId(t){return this.highestTargetId=this.ks.next(),Ui.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.xs&&(this.xs=e),Ui.resolve()}$n(t){this.Cs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ks=new Ic(e),this.highestTargetId=e),t.sequenceNumber>this.xs&&(this.xs=t.sequenceNumber)}addTargetData(t,e){return this.$n(e),this.targetCount+=1,Ui.resolve()}updateTargetData(t,e){return this.$n(e),Ui.resolve()}removeTargetData(t,e){return this.Cs.delete(e.target),this.Ns.ps(e.targetId),this.targetCount-=1,Ui.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Cs.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Cs.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Ui.waitFor(i).next((()=>r))}getTargetCount(t){return Ui.resolve(this.targetCount)}getTargetData(t,e){const n=this.Cs.get(e)||null;return Ui.resolve(n)}addMatchingKeys(t,e,n){return this.Ns.ws(e,n),Ui.resolve()}removeMatchingKeys(t,e,n){this.Ns.ys(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Ui.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Ns.ps(e),Ui.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ns.Ts(e);return Ui.resolve(n)}containsKey(t,e){return Ui.resolve(this.Ns.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,e){this.Ms={},this.overlays={},this.Os=new ji(0),this.$s=!1,this.$s=!0,this.referenceDelegate=t(this),this.Fs=new Uc(this),this.indexManager=new Cc,this.remoteDocumentCache=function(t){return new Lc(t)}((t=>this.referenceDelegate.Bs(t))),this.serializer=new bc(e),this.Ls=new Rc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Nc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Ms[t.toKey()];return n||(n=new Mc(e,this.referenceDelegate),this.Ms[t.toKey()]=n),n}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(t,e,n){ei("MemoryPersistence","Starting transaction:",t);const r=new jc(this.Os.next());return this.referenceDelegate.qs(),n(r).next((t=>this.referenceDelegate.Us(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ks(t,e){return Ui.or(Object.values(this.Ms).map((n=>()=>n.containsKey(t,e))))}}class jc extends Li{constructor(t){super(),this.currentSequenceNumber=t}}class qc{constructor(t){this.persistence=t,this.Gs=new Oc,this.Qs=null}static js(t){return new qc(t)}get zs(){if(this.Qs)return this.Qs;throw si()}addReference(t,e,n){return this.Gs.addReference(n,e),this.zs.delete(n.toString()),Ui.resolve()}removeReference(t,e,n){return this.Gs.removeReference(n,e),this.zs.add(n.toString()),Ui.resolve()}markPotentiallyOrphaned(t,e){return this.zs.add(e.toString()),Ui.resolve()}removeTarget(t,e){this.Gs.ps(e.targetId).forEach((t=>this.zs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.zs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}qs(){this.Qs=new Set}Us(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ui.forEach(this.zs,(n=>{const r=Ai.fromPath(n);return this.Ws(t,r).next((t=>{t||e.removeEntry(r,Ci.min())}))})).next((()=>(this.Qs=null,e.apply(t))))}updateLimboDocument(t,e){return this.Ws(t,e).next((t=>{t?this.zs.delete(e.toString()):this.zs.add(e.toString())}))}Bs(t){return 0}Ws(t,e){return Ui.or([()=>Ui.resolve(this.Gs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ks(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bc{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.$i=n,this.Fi=r}static Bi(t,e){let n=Oo(),r=Oo();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Bc(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this.Li=!1}initialize(t,e){this.qi=t,this.indexManager=e,this.Li=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ui(t,e).next((i=>i||this.Ki(t,e,r,n))).next((n=>n||this.Gi(t,e)))}Ui(t,e){if(ao(e))return Ui.resolve(null);let n=fo(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=po(e,null,"F"),n=fo(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=Oo(...r);return this.qi.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Qi(e,r);return this.ji(e,s,i,n.readTime)?this.Ui(t,po(e,null,"F")):this.zi(t,s,e,n)}))))})))))}Ki(t,e,n,r){return ao(e)||r.isEqual(Ci.min())?this.Gi(t,e):this.qi.getDocuments(t,n).next((i=>{const s=this.Qi(e,i);return this.ji(e,s,n,r)?this.Gi(t,e):(ti()<=o["in"].DEBUG&&ei("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),yo(e)),this.zi(t,s,e,Ri(r,-1)))}))}Qi(t,e){let n=new Zi(wo(t));return e.forEach(((e,r)=>{_o(t,r)&&(n=n.add(r))})),n}ji(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Gi(t,e){return ti()<=o["in"].DEBUG&&ei("QueryEngine","Using full collection scan to execute query:",yo(e)),this.qi.getDocumentsMatchingQuery(t,e,Oi.min())}zi(t,e,n,r){return this.qi.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(t,e,n,r){this.persistence=t,this.Wi=e,this.serializer=r,this.Hi=new Xi(bi),this.Ji=new To((t=>eo(t)),no),this.Yi=new Map,this.Xi=t.getRemoteDocumentCache(),this.Fs=t.getTargetCache(),this.Ls=t.getBundleCache(),this.Zi(n)}Zi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Dc(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Hi)))}}function Hc(t,e,n,r){return new zc(t,e,n,r)}async function Wc(t,e){const n=ai(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.Zi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=Oo();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({tr:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function Kc(t,e){const n=ai(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Ui.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);oi(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Oo();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function Gc(t){const e=ai(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Fs.getLastRemoteSnapshotVersion(t)))}function Yc(t,e){const n=ai(t),r=e.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Fs.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Fs.addMatchingKeys(t,s.addedDocuments,a))));let l=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?l=l.withResumeToken(rs.EMPTY_BYTE_STRING,Ci.min()).withLastLimboFreeSnapshotVersion(Ci.min()):s.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(s.resumeToken,r)),i=i.insert(a,l),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,l,s)&&o.push(n.Fs.updateTargetData(t,l))}));let a=Co(),c=Oo();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(Xc(t,s,e.documentUpdates).next((t=>{a=t.er,c=t.nr}))),!r.isEqual(Ci.min())){const e=n.Fs.getLastRemoteSnapshotVersion(t).next((e=>n.Fs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Ui.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Hi=i,t)))}function Xc(t,e,n){let r=Oo(),i=Oo();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Co();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Ci.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):ei("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{er:r,nr:i}}))}function Qc(t,e){const n=ai(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Jc(t,e){const n=ai(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Fs.getTargetData(t,e).next((i=>i?(r=i,Ui.resolve(r)):n.Fs.allocateTargetId(t).next((i=>(r=new wc(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.Fs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Hi.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(t.targetId,t),n.Ji.set(e,t.targetId)),t}))}async function Zc(t,e,n){const r=ai(t),i=r.Hi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Vi(t))throw t;ei("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Hi=r.Hi.remove(e),r.Ji.delete(i.target)}function tl(t,e,n){const r=ai(t);let i=Ci.min(),s=Oo();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=ai(t),i=r.Ji.get(n);return void 0!==i?Ui.resolve(r.Hi.get(i)):r.Fs.getTargetData(e,n)}(r,t,fo(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Wi.getDocumentsMatchingQuery(t,e,n?i:Ci.min(),n?s:Oo()))).next((t=>(el(r,vo(e),t),{documents:t,sr:s})))))}function el(t,e,n){let r=t.Yi.get(e)||Ci.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Yi.set(e,r)}class nl{constructor(){this.activeTargetIds=Mo()}hr(t){this.activeTargetIds=this.activeTargetIds.add(t)}lr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ar(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class rl{constructor(){this.Wr=new nl,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Wr.hr(t),this.Hr[t]||"not-current"}updateQueryState(t,e,n){this.Hr[t]=e}removeLocalQueryTarget(t){this.Wr.lr(t)}isLocalQueryTarget(t){return this.Wr.activeTargetIds.has(t)}clearQueryState(t){delete this.Hr[t]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(t){return this.Wr.activeTargetIds.has(t)}start(){return this.Wr=new nl,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{Jr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(t){this.no.push(t)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){ei("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.no)t(0)}eo(){ei("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.no)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ol=null;function al(){return null===ol?ol=268435456+Math.round(2147483648*Math.random()):ol++,"0x"+ol.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const cl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t){this.io=t.io,this.ro=t.ro}oo(t){this.uo=t}co(t){this.ao=t}onMessage(t){this.ho=t}close(){this.ro()}send(t){this.io(t)}lo(){this.uo()}fo(t){this.ao(t)}_o(t){this.ho(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul="WebChannelConnection";class hl extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.wo=e+"://"+t.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(t,e,n,r,i){const s=al(),o=this.Io(t,e);ei("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={};return this.To(a,r,i),this.Eo(t,o,a,n).then((e=>(ei("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw ri("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}Ao(t,e,n,r,i,s){return this.po(t,e,n,r,i)}To(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Jr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}Io(t,e){const n=cl[t];return`${this.wo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Eo(t,e,n,r){const i=al();return new Promise(((s,o)=>{const a=new Kr;a.setWithCredentials(!0),a.listenOnce(Br.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case qr.NO_ERROR:const e=a.getResponseJson();ei(ul,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case qr.TIMEOUT:ei(ul,`RPC '${t}' ${i} timed out`),o(new li(ci.DEADLINE_EXCEEDED,"Request time out"));break;case qr.HTTP_ERROR:const n=a.getStatus();if(ei(ul,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(ci).indexOf(e)>=0?e:ci.UNKNOWN}(e.status);o(new li(t,e.message))}else o(new li(ci.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new li(ci.UNAVAILABLE,"Connection failed."));break;default:si()}}finally{ei(ul,`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(r);ei(ul,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)}))}Ro(t,e,n){const r=al(),i=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Vr(),o=jr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Hr({})),this.To(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=i.join("");ei(ul,`Creating RPC '${t}' stream ${r}: ${c}`,a);const l=s.createWebChannel(c,a);let u=!1,h=!1;const d=new ll({io:e=>{h?ei(ul,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(u||(ei(ul,`Opening RPC '${t}' stream ${r} transport.`),l.open(),u=!0),ei(ul,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},ro:()=>l.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(l,Wr.EventType.OPEN,(()=>{h||ei(ul,`RPC '${t}' stream ${r} transport opened.`)})),f(l,Wr.EventType.CLOSE,(()=>{h||(h=!0,ei(ul,`RPC '${t}' stream ${r} transport closed`),d.fo())})),f(l,Wr.EventType.ERROR,(e=>{h||(h=!0,ri(ul,`RPC '${t}' stream ${r} transport errored:`,e),d.fo(new li(ci.UNAVAILABLE,"The operation could not be completed")))})),f(l,Wr.EventType.MESSAGE,(e=>{var n;if(!h){const i=e.data[0];oi(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){ei(ul,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=va[t];if(void 0!==e)return Ta(e)}(e),i=o.message;void 0===n&&(n=ci.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),h=!0,d.fo(new li(n,i)),l.close()}else ei(ul,`RPC '${t}' stream ${r} received:`,i),d._o(i)}})),f(o,$r.STAT_EVENT,(e=>{e.stat===zr.PROXY?ei(ul,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===zr.NOPROXY&&ei(ul,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{d.lo()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(t){return new $a(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t,e,n=1e3,r=1.5,i=6e4){this.si=t,this.timerId=e,this.vo=n,this.Po=r,this.bo=i,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(t){this.cancel();const e=Math.floor(this.Vo+this.No()),n=Math.max(0,Date.now()-this.Do),r=Math.max(0,e-n);r>0&&ei("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Vo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,r,(()=>(this.Do=Date.now(),t()))),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){null!==this.So&&(this.So.skipDelay(),this.So=null)}cancel(){null!==this.So&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(t,e,n,r,i,s,o,a){this.si=t,this.Mo=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new pl(t,e)}qo(){return 1===this.state||5===this.state||this.Uo()}Uo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&null===this.Fo&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,(()=>this.jo())))}zo(t){this.Wo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(t,e){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,4!==t?this.Lo.reset():e&&e.code===ci.RESOURCE_EXHAUSTED?(ni(e.toString()),ni("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):e&&e.code===ci.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Jo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.co(e)}Jo(){}auth(){this.state=1;const t=this.Yo(this.$o),e=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.$o===e&&this.Xo(t,n)}),(e=>{t((()=>{const t=new li(ci.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Zo(t)}))}))}Xo(t,e){const n=this.Yo(this.$o);this.stream=this.tu(t,e),this.stream.oo((()=>{n((()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Uo()&&(this.state=3),Promise.resolve()))),this.listener.oo())))})),this.stream.co((t=>{n((()=>this.Zo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Ko(){this.state=5,this.Lo.xo((async()=>{this.state=0,this.start()}))}Zo(t){return ei("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Yo(t){return e=>{this.si.enqueueAndForget((()=>this.$o===t?e():(ei("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ml extends gl{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}tu(t,e){return this.connection.Ro("Listen",t,e)}onMessage(t){this.Lo.reset();const e=ic(this.serializer,t),n=function(t){if(!("targetChange"in t))return Ci.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Ci.min():e.readTime?Ga(e.readTime):Ci.min()}(t);return this.listener.eu(e,n)}nu(t){const e={};e.database=ec(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=ro(r)?{documents:ac(t,r)}:{query:cc(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Wa(t,e.resumeToken);const r=za(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(Ci.min())>0){n.readTime=Ha(t,e.snapshotVersion.toTimestamp());const r=za(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=uc(this.serializer,t);n&&(e.labels=n),this.zo(e)}su(t){const e={};e.database=ec(this.serializer),e.removeTarget=t,this.zo(e)}}class yl extends gl{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(t,e){return this.connection.Ro("Write",t,e)}onMessage(t){if(oi(!!t.streamToken),this.lastStreamToken=t.streamToken,this.iu){this.Lo.reset();const e=oc(t.writeResults,t.commitTime),n=Ga(t.commitTime);return this.listener.uu(n,e)}return oi(!t.writeResults||0===t.writeResults.length),this.iu=!0,this.listener.cu()}au(){const t={};t.database=ec(this.serializer),this.zo(t)}ou(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>sc(this.serializer,t)))};this.zo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.hu=!1}lu(){if(this.hu)throw new li(ci.FAILED_PRECONDITION,"The client has already been terminated.")}po(t,e,n){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.po(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ci.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new li(ci.UNKNOWN,t.toString())}))}Ao(t,e,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Ao(t,e,n,i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ci.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new li(ci.UNKNOWN,t.toString())}))}terminate(){this.hu=!0}}class vl{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){0===this.du&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve()))))}pu(t){"Online"===this.state?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.gu("Offline")))}set(t){this.Iu(),this.du=0,"Online"===t&&(this.wu=!1),this.gu(t)}gu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}yu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(ni(e),this.wu=!1):ei("OnlineStateTracker",e)}Iu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=i,this.vu.Jr((t=>{n.enqueueAndForget((async()=>{Al(this)&&(ei("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ai(t);e.Au.add(4),await Tl(e),e.Pu.set("Unknown"),e.Au.delete(4),await bl(e)}(this))}))})),this.Pu=new vl(n,r)}}async function bl(t){if(Al(t))for(const e of t.Ru)await e(!0)}async function Tl(t){for(const e of t.Ru)await e(!1)}function El(t,e){const n=ai(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),xl(n)?Il(n):Kl(n).Uo()&&Sl(n,e))}function Cl(t,e){const n=ai(t),r=Kl(n);n.Eu.delete(e),r.Uo()&&kl(n,e),0===n.Eu.size&&(r.Uo()?r.Qo():Al(n)&&n.Pu.set("Unknown"))}function Sl(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ci.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Kl(t).nu(e)}function kl(t,e){t.bu.Lt(e),Kl(t).su(e)}function Il(t){t.bu=new Fa({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),Kl(t).start(),t.Pu.mu()}function xl(t){return Al(t)&&!Kl(t).qo()&&t.Eu.size>0}function Al(t){return 0===ai(t).Au.size}function Dl(t){t.bu=void 0}async function Rl(t){t.Eu.forEach(((e,n)=>{Sl(t,e)}))}async function Nl(t,e){Dl(t),xl(t)?(t.Pu.pu(e),Il(t)):t.Pu.set("Unknown")}async function Ol(t,e,n){if(t.Pu.set("Online"),e instanceof Ma&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Eu.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Eu.delete(r),t.bu.removeTarget(r))}(t,e)}catch(n){ei("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Pl(t,n)}else if(e instanceof Oa?t.bu.Wt(e):e instanceof Pa?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(Ci.min()))try{const e=await Gc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.bu.ue(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Eu.get(r);i&&t.Eu.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.Eu.get(e);if(!r)return;t.Eu.set(e,r.withResumeToken(rs.EMPTY_BYTE_STRING,r.snapshotVersion)),kl(t,e);const i=new wc(r.target,e,n,r.sequenceNumber);Sl(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){ei("RemoteStore","Failed to raise snapshot:",e),await Pl(t,e)}}async function Pl(t,e,n){if(!Vi(e))throw e;t.Au.add(1),await Tl(t),t.Pu.set("Offline"),n||(n=()=>Gc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ei("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await bl(t)}))}function Ml(t,e){return e().catch((n=>Pl(t,n,e)))}async function Ll(t){const e=ai(t),n=Gl(e);let r=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;Fl(e);)try{const t=await Qc(e.localStore,r);if(null===t){0===e.Tu.length&&n.Qo();break}r=t.batchId,Ul(e,t)}catch(t){await Pl(e,t)}Vl(e)&&jl(e)}function Fl(t){return Al(t)&&t.Tu.length<10}function Ul(t,e){t.Tu.push(e);const n=Gl(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function Vl(t){return Al(t)&&!Gl(t).qo()&&t.Tu.length>0}function jl(t){Gl(t).start()}async function ql(t){Gl(t).au()}async function Bl(t){const e=Gl(t);for(const n of t.Tu)e.ou(n.mutations)}async function $l(t,e,n){const r=t.Tu.shift(),i=ma.from(r,e,n);await Ml(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Ll(t)}async function zl(t,e){e&&Gl(t).ru&&await async function(t,e){if(n=e.code,ba(n)&&n!==ci.ABORTED){const n=t.Tu.shift();Gl(t).Go(),await Ml(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Ll(t)}var n}(t,e),Vl(t)&&jl(t)}async function Hl(t,e){const n=ai(t);n.asyncQueue.verifyOperationInProgress(),ei("RemoteStore","RemoteStore received new credentials");const r=Al(n);n.Au.add(3),await Tl(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await bl(n)}async function Wl(t,e){const n=ai(t);e?(n.Au.delete(2),await bl(n)):e||(n.Au.add(2),await Tl(n),n.Pu.set("Unknown"))}function Kl(t){return t.Vu||(t.Vu=function(t,e,n){const r=ai(t);return r.lu(),new ml(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{oo:Rl.bind(null,t),co:Nl.bind(null,t),eu:Ol.bind(null,t)}),t.Ru.push((async e=>{e?(t.Vu.Go(),xl(t)?Il(t):t.Pu.set("Unknown")):(await t.Vu.stop(),Dl(t))}))),t.Vu}function Gl(t){return t.Su||(t.Su=function(t,e,n){const r=ai(t);return r.lu(),new yl(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{oo:ql.bind(null,t),co:zl.bind(null,t),cu:Bl.bind(null,t),uu:$l.bind(null,t)}),t.Ru.push((async e=>{e?(t.Su.Go(),await Ll(t)):(await t.Su.stop(),t.Tu.length>0&&(ei("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))}))),t.Su
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Yl{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ui,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Yl(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new li(ci.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xl(t,e){if(ni("AsyncQueue",`${e}: ${t}`),Vi(t))return new li(ci.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Ai.comparator(e.key,n.key):(t,e)=>Ai.comparator(t.key,e.key),this.keyedMap=ko(),this.sortedSet=new Xi(this.comparator)}static emptySet(t){return new Ql(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ql))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Ql;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(){this.Du=new Xi(Ai.comparator)}track(t){const e=t.doc.key,n=this.Du.get(e);n?0!==t.type&&3===n.type?this.Du=this.Du.insert(e,t):3===t.type&&1!==n.type?this.Du=this.Du.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Du=this.Du.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Du=this.Du.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Du=this.Du.remove(e):1===t.type&&2===n.type?this.Du=this.Du.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Du=this.Du.insert(e,{type:2,doc:t.doc}):si():this.Du=this.Du.insert(e,t)}Cu(){const t=[];return this.Du.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Zl{constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new Zl(t,e,Ql.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&go(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(){this.xu=void 0,this.listeners=[]}}class eu{constructor(){this.queries=new To((t=>mo(t)),go),this.onlineState="Unknown",this.Nu=new Set}}async function nu(t,e){const n=ai(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new tu),i)try{s.xu=await n.onListen(r)}catch(t){const n=Xl(t,`Initialization of query '${yo(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.ku(n.onlineState),s.xu&&e.Mu(s.xu)&&ou(n)}async function ru(t,e){const n=ai(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function iu(t,e){const n=ai(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Mu(i)&&(r=!0);e.xu=i}}r&&ou(n)}function su(t,e,n){const r=ai(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function ou(t){t.Nu.forEach((t=>{t.next()}))}class au{constructor(t,e,n){this.query=t,this.Ou=e,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=n||{}}Mu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Zl(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.$u?this.Bu(t)&&(this.Ou.next(t),e=!0):this.Lu(t,this.onlineState)&&(this.qu(t),e=!0),this.Fu=t,e}onError(t){this.Ou.error(t)}ku(t){this.onlineState=t;let e=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,t)&&(this.qu(this.Fu),e=!0),e}Lu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Uu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Bu(t){if(t.docChanges.length>0)return!0;const e=this.Fu&&this.Fu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}qu(t){t=Zl.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.$u=!0,this.Ou.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cu{constructor(t){this.key=t}}class lu{constructor(t){this.key=t}}class uu{constructor(t,e){this.query=t,this.Ju=e,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=Oo(),this.mutatedKeys=Oo(),this.Zu=wo(t),this.tc=new Ql(this.Zu)}get ec(){return this.Ju}nc(t,e){const n=e?e.sc:new Jl,r=e?e.tc:this.tc;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const l=r.get(t),u=_o(this.query,e)?e:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.ic(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Zu(u,a)>0||c&&this.Zu(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{tc:s,sc:n,ji:o,mutatedKeys:i}}ic(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.tc;this.tc=t.tc,this.mutatedKeys=t.mutatedKeys;const i=t.sc.Cu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return si()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Zu(t.doc,e.doc))),this.rc(n);const s=e?this.oc():[],o=0===this.Xu.size&&this.current?1:0,a=o!==this.Yu;return this.Yu=o,0!==i.length||a?{snapshot:new Zl(this.query,t.tc,r,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),uc:s}:{uc:s}}ku(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({tc:this.tc,sc:new Jl,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(t){return!this.Ju.has(t)&&!!this.tc.has(t)&&!this.tc.get(t).hasLocalMutations}rc(t){t&&(t.addedDocuments.forEach((t=>this.Ju=this.Ju.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Ju=this.Ju.delete(t))),this.current=t.current)}oc(){if(!this.current)return[];const t=this.Xu;this.Xu=Oo(),this.tc.forEach((t=>{this.cc(t.key)&&(this.Xu=this.Xu.add(t.key))}));const e=[];return t.forEach((t=>{this.Xu.has(t)||e.push(new lu(t))})),this.Xu.forEach((n=>{t.has(n)||e.push(new cu(n))})),e}ac(t){this.Ju=t.sr,this.Xu=Oo();const e=this.nc(t.documents);return this.applyChanges(e,!0)}hc(){return Zl.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,0===this.Yu,this.hasCachedResults)}}class hu{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class du{constructor(t){this.key=t,this.lc=!1}}class fu{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.fc={},this.dc=new To((t=>mo(t)),go),this._c=new Map,this.wc=new Set,this.mc=new Xi(Ai.comparator),this.gc=new Map,this.yc=new Oc,this.Ic={},this.Tc=new Map,this.Ec=Ic.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return!0===this.Ac}}async function pu(t,e){const n=Ou(t);let r,i;const s=n.dc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const t=await Jc(n.localStore,fo(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await gu(n,e,r,"current"===s,t.resumeToken),n.isPrimaryClient&&El(n.remoteStore,t)}return i}async function gu(t,e,n,r,i){t.Rc=(e,n,r)=>async function(t,e,n,r){let i=e.view.nc(n);i.ji&&(i=await tl(t.localStore,e.query,!1).then((({documents:t})=>e.view.nc(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return Iu(t,e.targetId,o.uc),o.snapshot}(t,e,n,r);const s=await tl(t.localStore,e,!0),o=new uu(e,s.sr),a=o.nc(s.documents),c=Na.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),l=o.applyChanges(a,t.isPrimaryClient,c);Iu(t,n,l.uc);const u=new hu(e,n,o);return t.dc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function mu(t,e){const n=ai(t),r=n.dc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter((t=>!go(t,e)))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Zc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Cl(n.remoteStore,r.targetId),Su(n,r.targetId)})).catch(Fi)):(Su(n,r.targetId),await Zc(n.localStore,r.targetId,!0))}async function yu(t,e,n){const r=Pu(t);try{const t=await function(t,e){const n=ai(t),r=Ei.now(),i=e.reduce(((t,e)=>t.add(e.key)),Oo());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Co(),c=Oo();return n.Xi.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=oa(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new la(t.key,e,As(e.value.mapValue),ta.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Io(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Ic[t.currentUser.toKey()];r||(r=new Xi(bi)),r=r.insert(e,n),t.Ic[t.currentUser.toKey()]=r}(r,t.batchId,n),await Du(r,t.changes),await Ll(r.remoteStore)}catch(t){const e=Xl(t,"Failed to persist write");n.reject(e)}}async function _u(t,e){const n=ai(t);try{const t=await Yc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.gc.get(e);r&&(oi(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.lc=!0:t.modifiedDocuments.size>0?oi(r.lc):t.removedDocuments.size>0&&(oi(r.lc),r.lc=!1))})),await Du(n,t,e)}catch(t){await Fi(t)}}function vu(t,e,n){const r=ai(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.dc.forEach(((n,r)=>{const i=r.view.ku(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=ai(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.ku(e)&&(r=!0)})),r&&ou(n)}(r.eventManager,e),t.length&&r.fc.eu(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wu(t,e,n){const r=ai(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.gc.get(e),s=i&&i.key;if(s){let t=new Xi(Ai.comparator);t=t.insert(s,Ds.newNoDocument(s,Ci.min()));const n=Oo().add(s),i=new Ra(Ci.min(),new Map,new Xi(bi),t,n);await _u(r,i),r.mc=r.mc.remove(s),r.gc.delete(e),Au(r)}else await Zc(r.localStore,e,!1).then((()=>Su(r,e,n))).catch(Fi)}async function bu(t,e){const n=ai(t),r=e.batch.batchId;try{const t=await Kc(n.localStore,e);Cu(n,r,null),Eu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Du(n,t)}catch(t){await Fi(t)}}async function Tu(t,e,n){const r=ai(t);try{const t=await function(t,e){const n=ai(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(oi(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);Cu(r,e,n),Eu(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Du(r,t)}catch(n){await Fi(n)}}function Eu(t,e){(t.Tc.get(e)||[]).forEach((t=>{t.resolve()})),t.Tc.delete(e)}function Cu(t,e,n){const r=ai(t);let i=r.Ic[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Ic[r.currentUser.toKey()]=i}}function Su(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.dc.delete(r),n&&t.fc.vc(r,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach((e=>{t.yc.containsKey(e)||ku(t,e)}))}function ku(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);null!==n&&(Cl(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),Au(t))}function Iu(t,e,n){for(const r of n)r instanceof cu?(t.yc.addReference(r.key,e),xu(t,r)):r instanceof lu?(ei("SyncEngine","Document no longer in limbo: "+r.key),t.yc.removeReference(r.key,e),t.yc.containsKey(r.key)||ku(t,r.key)):si()}function xu(t,e){const n=e.key,r=n.path.canonicalString();t.mc.get(n)||t.wc.has(r)||(ei("SyncEngine","New document in limbo: "+n),t.wc.add(r),Au(t))}function Au(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new Ai(ki.fromString(e)),r=t.Ec.next();t.gc.set(r,new du(n)),t.mc=t.mc.insert(n,r),El(t.remoteStore,new wc(fo(oo(n.path)),r,"TargetPurposeLimboResolution",ji.ct))}}async function Du(t,e,n){const r=ai(t),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach(((t,a)=>{o.push(r.Rc(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=Bc.Bi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.fc.eu(i),await async function(t,e){const n=ai(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Ui.forEach(e,(e=>Ui.forEach(e.$i,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Ui.forEach(e.Fi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Vi(t))throw t;ei("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Hi.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Hi=n.Hi.insert(t,i)}}}(r.localStore,s))}async function Ru(t,e){const n=ai(t);if(!n.currentUser.isEqual(e)){ei("SyncEngine","User change. New user:",e.toKey());const t=await Wc(n.localStore,e);n.currentUser=e,function(t,e){t.Tc.forEach((t=>{t.forEach((t=>{t.reject(new li(ci.CANCELLED,e))}))})),t.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Du(n,t.tr)}}function Nu(t,e){const n=ai(t),r=n.gc.get(e);if(r&&r.lc)return Oo().add(r.key);{let t=Oo();const r=n._c.get(e);if(!r)return t;for(const e of r){const r=n.dc.get(e);t=t.unionWith(r.view.ec)}return t}}function Ou(t){const e=ai(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=_u.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Nu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wu.bind(null,e),e.fc.eu=iu.bind(null,e.eventManager),e.fc.vc=su.bind(null,e.eventManager),e}function Pu(t){const e=ai(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bu.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Tu.bind(null,e),e}class Mu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=fl(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Hc(this.persistence,new $c,t.initialUser,this.serializer)}createPersistence(t){return new Vc(qc.js,this.serializer)}createSharedClientState(t){return new rl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Lu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>vu(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ru.bind(null,this.syncEngine),await Wl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new eu}createDatastore(t){const e=fl(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new hl(r));var r;return function(t,e,n,r){return new _l(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>vu(this.syncEngine,t,0),s=sl.D()?new sl:new il,new wl(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new fu(t,e,n,r,i,s);return o&&(a.Ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=ai(t);ei("RemoteStore","RemoteStore shutting down."),e.Au.add(5),await Tl(e),e.vu.shutdown(),e.Pu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fu{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Vc(this.observer.next,t)}error(t){this.observer.error?this.Vc(this.observer.error,t):ni("Uncaught Error in snapshot listener:",t.toString())}Sc(){this.muted=!0}Vc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uu{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Qr.UNAUTHENTICATED,this.clientId=wi.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{ei("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(ei("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new li(ci.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ui;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Xl(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Vu(t,e){t.asyncQueue.verifyOperationInProgress(),ei("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Wc(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function ju(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Bu(t);ei("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>Hl(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Hl(e.remoteStore,n))),t._onlineComponents=e}function qu(t){return"FirebaseError"===t.name?t.code===ci.FAILED_PRECONDITION||t.code===ci.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function Bu(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ei("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!qu(n))throw n;ri("Error using user provided cache. Falling back to memory cache: "+n),await Vu(t,new Mu)}}else ei("FirestoreClient","Using default OfflineComponentProvider"),await Vu(t,new Mu);return t._offlineComponents}async function $u(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ei("FirestoreClient","Using user provided OnlineComponentProvider"),await ju(t,t._uninitializedComponentsProvider._online)):(ei("FirestoreClient","Using default OnlineComponentProvider"),await ju(t,new Lu))),t._onlineComponents}function zu(t){return $u(t).then((t=>t.syncEngine))}async function Hu(t){const e=await $u(t),n=e.eventManager;return n.onListen=pu.bind(null,e.syncEngine),n.onUnlisten=mu.bind(null,e.syncEngine),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wu=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(t,e,n){if(!n)throw new li(ci.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Gu(t,e,n,r){if(!0===e&&!0===r)throw new li(ci.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yu(t){if(!Ai.isDocumentKey(t))throw new li(ci.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xu(t){if(Ai.isDocumentKey(t))throw new li(ci.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qu(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":si()}function Ju(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new li(ci.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qu(t);throw new li(ci.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zu{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new li(ci.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new li(ci.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Gu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling||void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new li(ci.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new li(ci.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zu(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new di;switch(t.type){case"firstParty":return new mi(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new li(ci.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Wu.get(t);e&&(ei("ComponentProvider","Removing Datastore"),Wu.delete(t),e.terminate())}(this),Promise.resolve()}}function eh(t,e,n,r={}){var i;const s=(t=Ju(t,th))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&ri("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Qr.MOCK_USER;else{e=(0,a.Sg)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new li(ci.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Qr(s)}t._authCredentials=new fi(new hi(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ih(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new nh(this.firestore,t,this._key)}}class rh{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new rh(this.firestore,t,this._query)}}class ih extends rh{constructor(t,e,n){super(t,e,oo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new nh(this.firestore,null,new Ai(t))}withConverter(t){return new ih(this.firestore,t,this._path)}}function sh(t,e,...n){if(t=(0,a.m9)(t),Ku("collection","path",e),t instanceof th){const r=ki.fromString(e,...n);return Xu(r),new ih(t,null,r)}{if(!(t instanceof nh||t instanceof ih))throw new li(ci.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ki.fromString(e,...n));return Xu(r),new ih(t.firestore,null,r)}}function oh(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=wi.A()),Ku("doc","path",e),t instanceof th){const r=ki.fromString(e,...n);return Yu(r),new nh(t,null,new Ai(r))}{if(!(t instanceof nh||t instanceof ih))throw new li(ci.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ki.fromString(e,...n));return Yu(r),new nh(t.firestore,t instanceof ih?t.converter:null,new Ai(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ah{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new pl(this,"async_queue_retry"),this.Yc=()=>{const t=dl();t&&ei("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Lo.ko()};const t=dl();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Xc(),this.Zc(t)}enterRestrictedMode(t){if(!this.Qc){this.Qc=!0,this.Hc=t||!1;const e=dl();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Yc)}}enqueue(t){if(this.Xc(),this.Qc)return new Promise((()=>{}));const e=new ui;return this.Zc((()=>this.Qc&&this.Hc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Gc.push(t),this.ta())))}async ta(){if(0!==this.Gc.length){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(t){if(!Vi(t))throw t;ei("AsyncQueue","Operation failed with retryable error: "+t)}this.Gc.length>0&&this.Lo.xo((()=>this.ta()))}}Zc(t){const e=this.Kc.then((()=>(this.Wc=!0,t().catch((t=>{this.zc=t,this.Wc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw ni("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Wc=!1,t))))));return this.Kc=e,e}enqueueAfterDelay(t,e,n){this.Xc(),this.Jc.indexOf(t)>-1&&(e=0);const r=Yl.createAndSchedule(this,t,e,n,(t=>this.ea(t)));return this.jc.push(r),r}Xc(){this.zc&&si()}verifyOperationInProgress(){}async na(){let t;do{t=this.Kc,await t}while(t!==this.Kc)}sa(t){for(const e of this.jc)if(e.timerId===t)return!0;return!1}ia(t){return this.na().then((()=>{this.jc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.jc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.na()}))}ra(t){this.Jc.push(t)}ea(t){const e=this.jc.indexOf(t);this.jc.splice(e,1)}}function ch(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class lh extends th{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new ah,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||dh(this),this._firestoreClient.terminate()}}function uh(t,e){const n="object"==typeof t?t:(0,i.Mq)(),r="string"==typeof t?t:e||"(default)",s=(0,i.qX)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const t=(0,a.P0)("firestore");t&&eh(s,...t)}return s}function hh(t){return t._firestoreClient||dh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function dh(t){var e,n,r;const i=t._freezeSettings(),s=function(t,e,n,r){return new hs(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Uu(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fh{constructor(t){this._byteString=t}static fromBase64String(t){try{return new fh(rs.fromBase64String(t))}catch(t){throw new li(ci.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new fh(rs.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new li(ci.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xi(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gh{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new li(ci.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new li(ci.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return bi(this._lat,t._lat)||bi(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=/^__.*__$/;class _h{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new la(t,this.data,this.fieldMask,e,this.fieldTransforms):new ca(t,this.data,e,this.fieldTransforms)}}class vh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new la(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function wh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw si()}}class bh{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.oa(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(t){return new bh(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ca({path:n,ha:!1});return r.la(t),r}fa(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ca({path:n,ha:!1});return r.oa(),r}da(t){return this.ca({path:void 0,ha:!0})}_a(t){return Fh(t,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}oa(){if(this.path)for(let t=0;t<this.path.length;t++)this.la(this.path.get(t))}la(t){if(0===t.length)throw this._a("Document fields must not be empty");if(wh(this.ua)&&yh.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class Th{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||fl(t)}ga(t,e,n,r=!1){return new bh({ua:t,methodName:e,ma:n,path:xi.emptyPath(),ha:!1,wa:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Eh(t){const e=t._freezeSettings(),n=fl(t._databaseId);return new Th(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ch(t,e,n,r,i,s={}){const o=t.ga(s.merge||s.mergeFields?2:0,e,n,i);Oh("Data must be an object, but it was:",o,r);const a=Rh(r,o);let c,l;if(s.merge)c=new es(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Ph(e,r,n);if(!o.contains(i))throw new li(ci.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Uh(t,i)||t.push(i)}c=new es(t),l=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,l=o.fieldTransforms;return new _h(new xs(a),c,l)}class Sh extends gh{_toFieldTransform(t){if(2!==t.ua)throw 1===t.ua?t._a(`${this._methodName}() can only appear at the top level of your update data`):t._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Sh}}class kh extends gh{_toFieldTransform(t){return new Qo(t.path,new $o)}isEqual(t){return t instanceof kh}}class Ih extends gh{constructor(t,e){super(t),this.pa=e}_toFieldTransform(t){const e=new Go(t.serializer,Uo(t.serializer,this.pa));return new Qo(t.path,e)}isEqual(t){return this===t}}function xh(t,e,n,r){const i=t.ga(1,e,n);Oh("Data must be an object, but it was:",i,r);const s=[],o=xs.empty();Gi(r,((t,r)=>{const c=Lh(e,t,n);r=(0,a.m9)(r);const l=i.fa(c);if(r instanceof Sh)s.push(c);else{const t=Dh(r,l);null!=t&&(s.push(c),o.set(c,t))}}));const c=new es(s);return new vh(o,c,i.fieldTransforms)}function Ah(t,e,n,r,i,s){const o=t.ga(1,e,n),c=[Ph(e,r,n)],l=[i];if(s.length%2!=0)throw new li(ci.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<s.length;a+=2)c.push(Ph(e,s[a])),l.push(s[a+1]);const u=[],h=xs.empty();for(let f=c.length-1;f>=0;--f)if(!Uh(u,c[f])){const t=c[f];let e=l[f];e=(0,a.m9)(e);const n=o.fa(t);if(e instanceof Sh)u.push(t);else{const r=Dh(e,n);null!=r&&(u.push(t),h.set(t,r))}}const d=new es(u);return new vh(h,d,o.fieldTransforms)}function Dh(t,e){if(Nh(t=(0,a.m9)(t)))return Oh("Unsupported field value:",e,t),Rh(t,e);if(t instanceof gh)return function(t,e){if(!wh(e.ua))throw e._a(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e._a(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&4!==e.ua)throw e._a("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Dh(i,e.da(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Uo(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Ei.fromDate(t);return{timestampValue:Ha(e.serializer,n)}}if(t instanceof Ei){const n=new Ei(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ha(e.serializer,n)}}if(t instanceof mh)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof fh)return{bytesValue:Wa(e.serializer,t._byteString)};if(t instanceof nh){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ya(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e._a(`Unsupported field value: ${Qu(t)}`)}(t,e)}function Rh(t,e){const n={};return Yi(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gi(t,((t,r)=>{const i=Dh(r,e.aa(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Nh(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Ei||t instanceof mh||t instanceof fh||t instanceof nh||t instanceof gh)}function Oh(t,e,n){if(!Nh(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Qu(n);throw"an object"===r?e._a(t+" a custom object"):e._a(t+" "+r)}}function Ph(t,e,n){if((e=(0,a.m9)(e))instanceof ph)return e._internalPath;if("string"==typeof e)return Lh(t,e);throw Fh("Field path arguments must be of type string or ",t,!1,void 0,n)}const Mh=new RegExp("[~\\*/\\[\\]]");function Lh(t,e,n){if(e.search(Mh)>=0)throw Fh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ph(...e.split("."))._internalPath}catch(r){throw Fh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new li(ci.INVALID_ARGUMENT,a+t+c)}function Uh(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new nh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new jh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(qh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class jh extends Vh{data(){return super.data()}}function qh(t,e){return"string"==typeof e?Lh(t,e):e instanceof ph?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new li(ci.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $h{convertValue(t,e="none"){switch(ps(t)){case 0:return null;case 1:return t.booleanValue;case 2:return os(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(as(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw si()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Gi(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new mh(os(t.latitude),os(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ls(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(us(t));default:return null}}convertTimestamp(t){const e=ss(t);return new Ei(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=ki.fromString(t);oi(vc(n));const r=new ds(n.get(1),n.get(3)),i=new Ai(n.popFirst(5));return r.isEqual(e)||ni(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hh{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Wh extends Vh{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Kh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(qh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Kh extends Wh{data(t={}){return super.data(t)}}class Gh{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Hh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Kh(this._firestore,this._userDataWriter,n.key,n,new Hh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new li(ci.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new Kh(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Hh(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new Kh(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Hh(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:Yh(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Yh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return si()}}class Xh extends $h{constructor(t){super(),this.firestore=t}convertBytes(t){return new fh(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new nh(this.firestore,null,e)}}function Qh(t,e,n){t=Ju(t,nh);const r=Ju(t.firestore,lh),i=zh(t.converter,e,n);return ed(r,[Ch(Eh(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,ta.none())])}function Jh(t,e,n,...r){t=Ju(t,nh);const i=Ju(t.firestore,lh),s=Eh(i);let o;return o="string"==typeof(e=(0,a.m9)(e))||e instanceof ph?Ah(s,"updateDoc",t._key,e,n,r):xh(s,"updateDoc",t._key,e),ed(i,[o.toMutation(t._key,ta.exists(!0))])}function Zh(t){return ed(Ju(t.firestore,lh),[new fa(t._key,ta.none())])}function td(t,...e){var n,r,i;t=(0,a.m9)(t);let s={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||ch(e[o])||(s=e[o],o++);const c={includeMetadataChanges:s.includeMetadataChanges};if(ch(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let l,u,h;if(t instanceof nh)u=Ju(t.firestore,lh),h=oo(t._key.path),l={next:n=>{e[o]&&e[o](nd(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=Ju(t,rh);u=Ju(n.firestore,lh),h=n._query;const r=new Xh(u);l={next:t=>{e[o]&&e[o](new Gh(u,r,n,t))},error:e[o+1],complete:e[o+2]},Bh(t._query)}return function(t,e,n,r){const i=new Fu(r),s=new au(e,i,n);return t.asyncQueue.enqueueAndForget((async()=>nu(await Hu(t),s))),()=>{i.Sc(),t.asyncQueue.enqueueAndForget((async()=>ru(await Hu(t),s)))}}(hh(u),h,c,l)}function ed(t,e){return function(t,e){const n=new ui;return t.asyncQueue.enqueueAndForget((async()=>yu(await zu(t),e,n))),n.promise}(hh(t),e)}function nd(t,e,n){const r=n.docs.get(e._key),i=new Xh(t);return new Wh(t,i,e._key,r,new Hh(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(){return new kh("serverTimestamp")}function id(t){return new Ih("increment",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){Jr=t}(i.Jn),(0,i.Xd)(new s.wA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new lh(new pi(t.getProvider("auth-internal")),new _i(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new li(ci.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ds(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(Xr,"3.11.0",t),(0,i.KN)(Xr,"3.11.0","esm2017")}()},1294:function(t,e,n){"use strict";n.d(e,{cF:function(){return W}});n(2801),n(7658),n(3767),n(8585),n(8696);var r=n(1804),i=n(223),s=n(7142);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",a="storageBucket",c=12e4,l=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u extends i.ZR{constructor(t,e,n=0){super(f(t),`Firebase Storage: ${e} (${f(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,u.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return f(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var h,d;function f(t){return"storage/"+t}function p(){const t="An unknown error occurred, please check the error payload for server response.";return new u(h.UNKNOWN,t)}function g(){return new u(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function m(){return new u(h.CANCELED,"User canceled the upload/download.")}function y(t){return new u(h.INVALID_URL,"Invalid URL '"+t+"'.")}function _(t){return new u(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function v(t){return new u(h.INVALID_ARGUMENT,t)}function w(){return new u(h.APP_DELETED,"The Firebase app was deleted.")}function b(t){return new u(h.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(h||(h={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class T{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=T.makeFromUrl(t,e)}catch(r){return new T(t,"")}if(""===n.path)return n;throw _(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+r+s,"i"),c={bucket:1,path:3};function l(t){t.path_=decodeURIComponent(t.path)}const u="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},g=e===o?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",_=new RegExp(`^https?://${g}/${r}/${m}`,"i"),v={bucket:1,path:2},w=[{regex:a,indices:c,postModify:i},{regex:f,indices:p,postModify:l},{regex:_,indices:v,postModify:l}];for(let o=0;o<w.length;o++){const e=w[o],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new T(t,i),e.postModify(n);break}}if(null==n)throw y(t);return n}}class E{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let l=!1;function u(...t){l||(l=!0,e.apply(null,t))}function h(e){i=setTimeout((()=>{i=null,t(f,c())}),e)}function d(){s&&clearTimeout(s)}function f(t,...e){if(l)return void d();if(t)return d(),void u.call(null,t,...e);const n=c()||o;if(n)return d(),void u.call(null,t,...e);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function g(t){p||(p=!0,d(),l||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,g(!0)}),n),g}function S(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t){return void 0!==t}function I(t,e,n,r){if(r<e)throw v(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw v(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function A(t,e){const n=t>=500&&t<600,r=[408,429],i=-1!==r.indexOf(t),s=-1!==e.indexOf(t);return n||i||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(d||(d={}));class D{constructor(t,e,n,r,i,s,o,a,c,l,u,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new R(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===d.NO_ERROR,i=n.getStatus();if(!e||A(i,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===d.ABORT;return void t(!1,new R(!1,null,e))}const s=-1!==this.successCodes_.indexOf(i);t(!0,new R(s,n))}))},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());k(t)?n(t):n()}catch(s){r(s)}else if(null!==i){const t=p();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){const t=this.appDelete_?w():m();r(t)}else{const t=g();r(t)}};this.canceled_?e(!1,new R(!1,null,!0)):this.backoffId_=C(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&S(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class R{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function N(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function O(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function P(t,e){e&&(t["X-Firebase-GMPID"]=e)}function M(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function L(t,e,n,r,i,s,o=!0){const a=x(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return P(l,e),N(l,n),O(l,s),M(l,r),new D(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function U(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class V{constructor(t,e){this._service=t,this._location=e instanceof T?e:T.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new V(t,e)}get root(){const t=new T(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return U(this._location.path)}get storage(){return this._service}get parent(){const t=F(this._location.path);if(null===t)return null;const e=new T(this._location.bucket,t);return new V(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw b(t)}}function j(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:T.makeFromBucketSpec(n,t)}function q(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken="string"===typeof s?s:(0,i.Sg)(s,t.app.options.projectId))}class B{constructor(t,e,n,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=l,this._requests=new Set,this._bucket=null!=r?T.makeFromBucketSpec(r,this._host):j(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=T.makeFromBucketSpec(this._url,t):this._bucket=j(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){I("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){I("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new V(this,t)}_makeRequest(t,e,n,r,i=!0){if(this._deleted)return new E(w());{const s=L(t,this._appId,n,r,e,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const $="@firebase/storage",z="0.11.2",H="storage";function W(t=(0,r.Mq)(),e){t=(0,i.m9)(t);const n=(0,r.qX)(t,H),s=n.getImmediate({identifier:e}),o=(0,i.P0)("storage");return o&&K(s,...o),s}function K(t,e,n,r={}){q(t,e,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new B(n,i,s,e,r.Jn)}function Y(){(0,r.Xd)(new s.wA(H,G,"PUBLIC").setMultipleInstances(!0)),(0,r.KN)($,z,""),(0,r.KN)($,z,"esm2017")}Y()},2555:function(t,e,n){"use strict";n.d(e,{d:function(){return a},i:function(){return o},n:function(){return d},w:function(){return c}});n(7658);var r=n(1350);const i=["name","property","http-equiv"],s=new Set(["viewport","description","keywords","robots"]);function o(t){const e=t.split(":");return!!e.length&&r.M.has(e[1])}function a(t){const{props:e,tag:n}=t;if(r.U.has(n))return n;if("link"===n&&"canonical"===e.rel)return"canonical";if(e.charset)return"charset";if("meta"===t.tag)for(const r of i)if(void 0!==e[r]){const i=e[r],o=i.includes(":"),a=s.has(i),c=o||a,l=!c&&t.key?`:key:${t.key}`:"";return`${n}:${i}${l}`}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(r.T.has(n)){const e=t.textContent||t.innerHTML;if(e)return`${n}:content:${e}`}}function c(t,e,n){const r=typeof t;let i;if("function"===r&&(n&&("titleTemplate"===n||"o"===n[0]&&"n"===n[1])||(t=t())),e&&(i=e(n,t)),Array.isArray(i))return i.map((t=>c(t,e)));if(i?.constructor===Object){const t={};for(const n of Object.keys(i))t[n]=c(i[n],e,n);return t}return i}function l(t,e){const n="style"===t?new Map:new Set;function r(e){const r=e.trim();if(r)if("style"===t){const[t,...e]=r.split(":").map((t=>t.trim()));t&&e.length&&n.set(t,e.join(":"))}else r.split(" ").filter(Boolean).forEach((t=>n.add(t)))}return"string"===typeof e?"style"===t?e.split(";").forEach(r):r(e):Array.isArray(e)?e.forEach((t=>r(t))):e&&"object"===typeof e&&Object.entries(e).forEach((([e,i])=>{i&&"false"!==i&&("style"===t?n.set(e.trim(),i):r(e))})),n}function u(t,e){return t.props=t.props||{},e?"templateParams"===t.tag?(t.props=e,t):(Object.entries(e).forEach((([n,i])=>{if(null===i)return void(t.props[n]=null);if("class"===n||"style"===n)return void(t.props[n]=l(n,i));if(r.a.has(n)){if(["textContent","innerHTML"].includes(n)&&"object"===typeof i){let r=e.type;if(e.type||(r="application/json"),!r?.endsWith("json")&&"speculationrules"!==r)return;e.type=r,t.props.type=r,t[n]=JSON.stringify(i)}else t[n]=i;return}const s=String(i),o=n.startsWith("data-");"true"===s||""===s?t.props[n]=!o||s:!i&&o&&"false"===s?t.props[n]="false":void 0!==i&&(t.props[n]=i)})),t):t}function h(t,e){const n="object"===typeof e&&"function"!==typeof e?e:{["script"===t||"noscript"===t||"style"===t?"innerHTML":"textContent"]:e},i=u({tag:t,props:{}},n);return i.key&&r.D.has(i.tag)&&(i.props["data-hid"]=i._h=i.key),"script"===i.tag&&"object"===typeof i.innerHTML&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map((t=>({...i,props:{...i.props,content:t}}))):i}function d(t,e){if(!t)return[];"function"===typeof t&&(t=t());const n=(t,n)=>{for(let r=0;r<e.length;r++)n=e[r](t,n);return n};t=n(void 0,t);const r=[];return t=c(t,n),Object.entries(t||{}).forEach((([t,e])=>{if(void 0!==e)for(const n of Array.isArray(e)?e:[e])r.push(h(t,n))})),r.flat()}},7670:function(t,e,n){"use strict";n.d(e,{a:function(){return T}});n(7658);function r(t,e={},n){for(const i in t){const s=t[i],o=n?`${n}:${i}`:i;"object"===typeof s&&null!==s?r(s,e,o):"function"===typeof s&&(e[o]=s)}return e}const i={run:t=>t()},s=()=>i,o="undefined"!==typeof console.createTask?console.createTask:s;function a(t,e){const n=e.shift(),r=o(n);return t.reduce(((t,n)=>t.then((()=>r.run((()=>n(...e)))))),Promise.resolve())}function c(t,e){const n=e.shift(),r=o(n);return Promise.all(t.map((t=>r.run((()=>t(...e))))))}function l(t,e){for(const n of[...t])n(e)}class u{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,e,n={}){if(!t||"function"!==typeof e)return()=>{};const r=t;let i;while(this._deprecatedHooks[t])i=this._deprecatedHooks[t],t=i.to;if(i&&!n.allowDeprecated){let t=i.message;t||(t=`${r} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(t)||(console.warn(t),this._deprecatedMessages.add(t))}if(!e.name)try{Object.defineProperty(e,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(e),()=>{e&&(this.removeHook(t,e),e=void 0)}}hookOnce(t,e){let n,r=(...t)=>("function"===typeof n&&n(),n=void 0,r=void 0,e(...t));return n=this.hook(t,r),n}removeHook(t,e){if(this._hooks[t]){const n=this._hooks[t].indexOf(e);-1!==n&&this._hooks[t].splice(n,1),0===this._hooks[t].length&&delete this._hooks[t]}}deprecateHook(t,e){this._deprecatedHooks[t]="string"===typeof e?{to:e}:e;const n=this._hooks[t]||[];delete this._hooks[t];for(const r of n)this.hook(t,r)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const e in t)this.deprecateHook(e,t[e])}addHooks(t){const e=r(t),n=Object.keys(e).map((t=>this.hook(t,e[t])));return()=>{for(const t of n.splice(0,n.length))t()}}removeHooks(t){const e=r(t);for(const n in e)this.removeHook(n,e[n])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...e){return e.unshift(t),this.callHookWith(a,t,...e)}callHookParallel(t,...e){return e.unshift(t),this.callHookWith(c,t,...e)}callHookWith(t,e,...n){const r=this._before||this._after?{name:e,args:n,context:{}}:void 0;this._before&&l(this._before,r);const i=t(e in this._hooks?[...this._hooks[e]]:[],n);return i instanceof Promise?i.finally((()=>{this._after&&r&&l(this._after,r)})):(this._after&&r&&l(this._after,r),i)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(void 0!==this._before){const e=this._before.indexOf(t);-1!==e&&this._before.splice(e,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(void 0!==this._after){const e=this._after.indexOf(t);-1!==e&&this._after.splice(e,1)}}}}function h(){return new u}var d=n(2555);const f=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,p={base:-10,title:10},g={critical:-8,high:-1,low:2},m={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},y=/@import/,_=t=>""===t||!0===t;function v(t,e){if("number"===typeof e.tagPriority)return e.tagPriority;let n=100;const r=g[e.tagPriority]||0,i=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:m;if(e.tag in p)n=p[e.tag];else if("meta"===e.tag){const t="content-security-policy"===e.props["http-equiv"]?"content-security-policy":e.props.charset?"charset":"viewport"===e.props.name?"viewport":null;t&&(n=m.meta[t])}else"link"===e.tag&&e.props.rel?n=i.link[e.props.rel]:"script"===e.tag?_(e.props.async)?n=i.script.async:!e.props.src||_(e.props.defer)||_(e.props.async)||"module"===e.props.type||e.props.type?.endsWith("json")?_(e.props.defer)&&e.props.src&&!_(e.props.async)&&(n=i.script.defer):n=i.script.sync:"style"===e.tag&&(n=e.innerHTML&&y.test(e.innerHTML)?i.style.imported:i.style.sync);return(n||100)+r}var w=n(1350);function b(t,e){const n="function"===typeof e?e(t):e,r=n.key||String(t.plugins.size+1),i=t.plugins.get(r);i||(t.plugins.set(r,n),t.hooks.addHooks(n.hooks||{}))}function T(t={}){const e=h();e.addHooks(t.hooks||{});const n=!t.document,r=new Map,i=new Map,s=new Set,o={_entryCount:1,plugins:i,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:r,headEntries(){return[...r.values()]},use:t=>b(o,t),push(t,i){const a={...i||{}};delete a.head;const c=a._index??o._entryCount++,l={_i:c,input:t,options:a},u={_poll(t=!1){o.dirty=!0,!t&&s.add(c),e.callHook("entries:updated",o)},dispose(){r.delete(c)&&o.invalidate()},patch(t){(!a.mode||"server"===a.mode&&n||"client"===a.mode&&!n)&&(l.input=t,r.set(c,l),u._poll())}};return u.patch(t),u},async resolveTags(){const n={tagMap:new Map,tags:[],entries:[...o.entries.values()]};await e.callHook("entries:resolve",n);while(s.size){const n=s.values().next().value;s.delete(n);const i=r.get(n);if(i){const n={tags:(0,d.n)(i.input,t.propResolvers||[]).map((t=>Object.assign(t,i.options))),entry:i};await e.callHook("entries:normalize",n),i._tags=n.tags.map(((t,e)=>(t._w=v(o,t),t._p=(i._i<<10)+e,t._d=(0,d.d)(t),t)))}}let i=!1;n.entries.flatMap((t=>(t._tags||[]).map((t=>({...t,props:{...t.props}}))))).sort(f).reduce(((t,e)=>{const n=String(e._d||e._p);if(!t.has(n))return t.set(n,e);const r=t.get(n),s=e?.tagDuplicateStrategy||(w.c.has(e.tag)?"merge":null)||(e.key&&e.key===r.key?"merge":null);if("merge"===s){const i={...r.props};Object.entries(e.props).forEach((([t,e])=>i[t]="style"===t?new Map([...r.props.style||new Map,...e]):"class"===t?new Set([...r.props.class||new Set,...e]):e)),t.set(n,{...e,props:i})}else e._p>>10===r._p>>10&&"meta"===e.tag&&(0,d.i)(n)?(t.set(n,Object.assign([...Array.isArray(r)?r:[r],e],e)),i=!0):(e._w===r._w?e._p>r._p:e?._w<r?._w)&&t.set(n,e);return t}),n.tagMap);const a=n.tagMap.get("title"),c=n.tagMap.get("titleTemplate");if(o._title=a?.textContent,c){const t=c?.textContent;if(o._titleTemplate=t,t){let e="function"===typeof t?t(a?.textContent):t;"string"!==typeof e||o.plugins.has("template-params")||(e=e.replace("%s",a?.textContent||"")),a?null===e?n.tagMap.delete("title"):n.tagMap.set("title",{...a,textContent:e}):(c.tag="title",c.textContent=e)}}n.tags=Array.from(n.tagMap.values()),i&&(n.tags=n.tags.flat().sort(f)),await e.callHook("tags:beforeResolve",n),await e.callHook("tags:resolve",n),await e.callHook("tags:afterResolve",n);const l=[];for(const t of n.tags){const{innerHTML:e,tag:n,props:r}=t;if(w.V.has(n)&&((0!==Object.keys(r).length||t.innerHTML||t.textContent)&&("meta"!==n||r.content||r["http-equiv"]||r.charset))){if("script"===n&&e){if(r.type?.endsWith("json")){const n="string"===typeof e?e:JSON.stringify(e);t.innerHTML=n.replace(/</g,"\\u003C")}else"string"===typeof e&&(t.innerHTML=e.replace(new RegExp(`</${n}`,"g"),`<\\/${n}`));t._d=(0,d.d)(t)}l.push(t)}}return l},invalidate(){for(const t of r.values())s.add(t._i);o.dirty=!0,e.callHook("entries:updated",o)}};return(t?.plugins||[]).forEach((t=>b(o,t))),o.hooks.callHook("init",o),t.init?.forEach((t=>t&&o.push(t))),o}},1350:function(t,e,n){"use strict";n.d(e,{D:function(){return r},M:function(){return l},T:function(){return i},U:function(){return o},V:function(){return s},a:function(){return a},c:function(){return c}});const r=new Set(["link","style","script","noscript"]),i=new Set(["title","titleTemplate","script","style","noscript"]),s=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),o=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),a=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),c=new Set(["templateParams","htmlAttrs","bodyAttrs"]),l=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"])},2483:function(t,e,n){"use strict";n.d(e,{PO:function(){return V},p7:function(){return ee},tv:function(){return re},yj:function(){return ie}});n(7658);var r=n(3396),i=n(4870);
/*!
  * vue-router v4.2.0
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(t){return t.__esModule||"Module"===t[Symbol.toStringTag]}const a=Object.assign;function c(t,e){const n={};for(const r in e){const i=e[r];n[r]=u(i)?i.map(t):t(i)}return n}const l=()=>{},u=Array.isArray;const h=/\/$/,d=t=>t.replace(h,"");function f(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=b(null!=r?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function p(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function g(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function m(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&y(e.matched[r],n.matched[i])&&_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function y(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function _(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!v(t[n],e[n]))return!1;return!0}function v(t,e){return u(t)?w(t,e):u(e)?w(e,t):t===e}function w(t,e){return u(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function b(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var T,E;(function(t){t["pop"]="pop",t["push"]="push"})(T||(T={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(E||(E={}));function C(t){if(!t)if(s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),d(t)}const S=/^[^#]+#/;function k(t,e){return t.replace(S,"#")+e}function I(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const x=()=>({left:window.pageXOffset,top:window.pageYOffset});function A(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=I(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function D(t,e){const n=history.state?history.state.position-e:-1;return n+t}const R=new Map;function N(t,e){R.set(t,e)}function O(t){const e=R.get(t);return R.delete(t),e}let P=()=>location.protocol+"//"+location.host;function M(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),g(n,"")}const o=g(n,t);return o+r+i}function L(t,e,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=M(t,location),c=n.value,l=e.value;let u=0;if(s){if(n.value=a,e.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else r(a);i.forEach((t=>{t(n.value,c,{delta:u,type:T.pop,direction:u?u>0?E.forward:E.back:E.unknown})}))};function l(){o=n.value}function u(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return s.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(a({},t.state,{scroll:x()}),"")}function d(){for(const t of s)t();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function F(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?x():null}}function U(t){const{history:e,location:n}=window,r={value:M(t,n)},i={value:e.state};function s(r,s,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:P()+t+r;try{e[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}function o(t,n){const o=a({},e.state,F(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});s(t,o,!0),r.value=t}function c(t,n){const o=a({},i.value,e.state,{forward:t,scroll:x()});s(o.current,o,!0);const c=a({},F(r.value,t,null),{position:o.position+1},n);s(t,c,!1),r.value=t}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function V(t){t=C(t);const e=U(t),n=L(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=a({location:"",base:t,go:r,createHref:k.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function j(t){return"string"===typeof t||t&&"object"===typeof t}function q(t){return"string"===typeof t||"symbol"===typeof t}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$=Symbol("");var z;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(z||(z={}));function H(t,e){return a(new Error,{type:t,[$]:!0},e)}function W(t,e){return t instanceof Error&&$ in t&&(null==e||!!(t.type&e))}const K="[^/]+?",G={sensitive:!1,strict:!1,start:!0,end:!0},Y=/[.+*?^${}()[\]/\\]/g;function X(t,e){const n=a({},G,e),r=[];let i=n.start?"^":"";const s=[];for(const a of t){const t=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let e=0;e<a.length;e++){const r=a[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(Y,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:c,regexp:l}=r;s.push({name:t,repeatable:n,optional:c});const u=l||K;if(u!==K){o+=10;try{new RegExp(`(${u})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${t}" (${u}): `+h.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;e||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===u&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=s[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function l(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:s,repeatable:o,optional:a}=t,c=s in e?e[s]:"";if(u(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=u(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:l}}function Q(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function J(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=Q(r[n],i[n]);if(t)return t;n++}if(1===Math.abs(i.length-r.length)){if(Z(r))return 1;if(Z(i))return-1}return i.length-r.length}function Z(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tt={type:0,value:""},et=/[a-zA-Z0-9_]/;function nt(t){if(!t)return[[]];if("/"===t)return[[tt]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${l}": ${t}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,l="",u="";function h(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:et.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function rt(t,e,n){const r=X(nt(t.path),n);const i=a(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function it(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function s(t,n,r){const i=!r,c=ot(t);c.aliasOf=r&&r.record;const h=ut(e,t),d=[c];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)d.push(a({},c,{components:r?r.record.components:c.components,path:t,aliasOf:r?r.record:c}))}let f,p;for(const e of d){const{path:a}=e;if(n&&"/"!==a[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(a&&r+a)}if(f=rt(e,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&t.name&&!ct(f)&&o(t.name)),c.children){const t=c.children;for(let e=0;e<t.length;e++)s(t[e],f,r&&r.children[e])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&u(f)}return p?()=>{o(p)}:l}function o(t){if(q(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function c(){return n}function u(t){let e=0;while(e<n.length&&J(t,n[e])>=0&&(t.record.path!==n[e].record.path||!ht(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!ct(t)&&r.set(t.record.name,t)}function h(t,e){let i,s,o,c={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw H(1,{location:t});0,o=i.record.name,c=a(st(e.params,i.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params&&st(t.params,i.keys.map((t=>t.name)))),s=i.stringify(c)}else if("path"in t)s=t.path,i=n.find((t=>t.re.test(s))),i&&(c=i.parse(s),o=i.record.name);else{if(i=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!i)throw H(1,{location:t,currentLocation:e});o=i.record.name,c=a({},e.params,t.params),s=i.stringify(c)}const l=[];let u=i;while(u)l.unshift(u.record),u=u.parent;return{name:o,path:s,params:c,matched:l,meta:lt(l)}}return e=ut({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>s(t))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function st(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ot(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:at(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function at(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function ct(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lt(t){return t.reduce(((t,e)=>a(t,e.meta)),{})}function ut(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ht(t,e){return e.children.some((e=>e===t||ht(t,e)))}const dt=/#/g,ft=/&/g,pt=/\//g,gt=/=/g,mt=/\?/g,yt=/\+/g,_t=/%5B/g,vt=/%5D/g,wt=/%5E/g,bt=/%60/g,Tt=/%7B/g,Et=/%7C/g,Ct=/%7D/g,St=/%20/g;function kt(t){return encodeURI(""+t).replace(Et,"|").replace(_t,"[").replace(vt,"]")}function It(t){return kt(t).replace(Tt,"{").replace(Ct,"}").replace(wt,"^")}function xt(t){return kt(t).replace(yt,"%2B").replace(St,"+").replace(dt,"%23").replace(ft,"%26").replace(bt,"`").replace(Tt,"{").replace(Ct,"}").replace(wt,"^")}function At(t){return xt(t).replace(gt,"%3D")}function Dt(t){return kt(t).replace(dt,"%23").replace(mt,"%3F")}function Rt(t){return null==t?"":Dt(t).replace(pt,"%2F")}function Nt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Ot(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(yt," "),n=t.indexOf("="),s=Nt(n<0?t:t.slice(0,n)),o=n<0?null:Nt(t.slice(n+1));if(s in e){let t=e[s];u(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function Pt(t){let e="";for(let n in t){const r=t[n];if(n=At(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=u(r)?r.map((t=>t&&xt(t))):[r&&xt(r)];i.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Mt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=u(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}const Lt=Symbol(""),Ft=Symbol(""),Ut=Symbol(""),Vt=Symbol(""),jt=Symbol("");function qt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Bt(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=t=>{!1===t?a(H(4,{from:n,to:e})):t instanceof Error?a(t):j(t)?a(H(2,{from:e,to:t})):(s&&r.enterCallbacks[i]===s&&"function"===typeof t&&s.push(t),o())},l=t.call(r&&r.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch((t=>a(t)))}))}function $t(t,e,n,r){const i=[];for(const s of t){0;for(const t in s.components){let a=s.components[t];if("beforeRouteEnter"===e||s.instances[t])if(zt(a)){const o=a.__vccOpts||a,c=o[e];c&&i.push(Bt(c,n,r,s,t))}else{let c=a();0,i.push((()=>c.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[t]=a;const c=a.__vccOpts||a,l=c[e];return l&&Bt(l,n,r,s,t)()}))))}}}return i}function zt(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Ht(t){const e=(0,r.f3)(Ut),n=(0,r.f3)(Vt),s=(0,r.Fl)((()=>e.resolve((0,i.SU)(t.to)))),o=(0,r.Fl)((()=>{const{matched:t}=s.value,{length:e}=t,r=t[e-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(y.bind(null,r));if(o>-1)return o;const a=Xt(t[e-2]);return e>1&&Xt(r)===a&&i[i.length-1].path!==a?i.findIndex(y.bind(null,t[e-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Yt(n.params,s.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&_(n.params,s.value.params)));function u(n={}){return Gt(n)?e[(0,i.SU)(t.replace)?"replace":"push"]((0,i.SU)(t.to)).catch(l):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:u}}const Wt=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ht,setup(t,{slots:e}){const n=(0,i.qj)(Ht(t)),{options:s}=(0,r.f3)(Ut),o=(0,r.Fl)((()=>({[Qt(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Qt(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=e.default&&e.default(n);return t.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Kt=Wt;function Gt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Yt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!u(i)||i.length!==r.length||r.some(((t,e)=>t!==i[e])))return!1}return!0}function Xt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qt=(t,e,n)=>null!=t?t:null!=e?e:n,Jt=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=(0,r.f3)(jt),o=(0,r.Fl)((()=>t.route||s.value)),c=(0,r.f3)(Ft,0),l=(0,r.Fl)((()=>{let t=(0,i.SU)(c);const{matched:e}=o.value;let n;while((n=e[t])&&!n.components)t++;return t})),u=(0,r.Fl)((()=>o.value.matched[l.value]));(0,r.JJ)(Ft,(0,r.Fl)((()=>l.value+1))),(0,r.JJ)(Lt,u),(0,r.JJ)(jt,o);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,u.value,t.name]),(([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&y(e,i)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const i=o.value,s=t.name,c=u.value,l=c&&c.components[s];if(!l)return Zt(n.default,{Component:l,route:i});const d=c.props[s],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=t=>{t.component.isUnmounted&&(c.instances[s]=null)},g=(0,r.h)(l,a({},f,e,{onVnodeUnmounted:p,ref:h}));return Zt(n.default,{Component:g,route:i})||g}}});function Zt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const te=Jt;function ee(t){const e=it(t.routes,t),n=t.parseQuery||Ot,o=t.stringifyQuery||Pt,h=t.history;const d=qt(),g=qt(),y=qt(),_=(0,i.XI)(B);let v=B;s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=c.bind(null,(t=>""+t)),b=c.bind(null,Rt),E=c.bind(null,Nt);function C(t,n){let r,i;return q(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function S(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function k(){return e.getRoutes().map((t=>t.record))}function I(t){return!!e.getRecordMatcher(t)}function R(t,r){if(r=a({},r||_.value),"string"===typeof t){const i=f(n,t,r.path),s=e.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:E(s.params),hash:Nt(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in t)i=a({},t,{path:f(n,t.path,r.path).path});else{const e=a({},t.params);for(const t in e)null==e[t]&&delete e[t];i=a({},t,{params:b(e)}),r.params=b(r.params)}const s=e.resolve(i,r),c=t.hash||"";s.params=w(E(s.params));const l=p(o,a({},t,{hash:It(c),path:s.path})),u=h.createHref(l);return a({fullPath:l,hash:c,query:o===Pt?Mt(t.query):t.query||{}},s,{redirectedFrom:void 0,href:u})}function P(t){return"string"===typeof t?f(n,t,_.value.path):a({},t)}function M(t,e){if(v!==t)return H(8,{from:e,to:t})}function L(t){return V(t)}function F(t){return L(a(P(t),{replace:!0}))}function U(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=P(r):{path:r},r.params={}),a({query:t.query,hash:t.hash,params:"path"in r?{}:t.params},r)}}function V(t,e){const n=v=R(t),r=_.value,i=t.state,s=t.force,c=!0===t.replace,l=U(n);if(l)return V(a(P(l),{state:"object"===typeof l?a({},i,l.state):i,force:s,replace:c}),e||n);const u=n;let h;return u.redirectedFrom=e,!s&&m(o,r,n)&&(h=H(16,{to:u,from:r}),rt(r,r,!0,!1)),(h?Promise.resolve(h):z(u,r)).catch((t=>W(t)?W(t,2)?t:nt(t):tt(t,u,r))).then((t=>{if(t){if(W(t,2))return V(a({replace:c},P(t.to),{state:"object"===typeof t.to?a({},i,t.to.state):i,force:s}),e||u)}else t=G(u,r,!0,c,i);return K(u,r,t),t}))}function j(t,e){const n=M(t,e);return n?Promise.reject(n):Promise.resolve()}function $(t){const e=at.values().next().value;return e&&"function"===typeof e.runWithContext?e.runWithContext(t):t()}function z(t,e){let n;const[r,i,s]=ne(t,e);n=$t(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Bt(r,t,e))}));const o=j.bind(null,t,e);return n.push(o),lt(n).then((()=>{n=[];for(const r of d.list())n.push(Bt(r,t,e));return n.push(o),lt(n)})).then((()=>{n=$t(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach((r=>{n.push(Bt(r,t,e))}));return n.push(o),lt(n)})).then((()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(u(r.beforeEnter))for(const i of r.beforeEnter)n.push(Bt(i,t,e));else n.push(Bt(r.beforeEnter,t,e));return n.push(o),lt(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=$t(s,"beforeRouteEnter",t,e),n.push(o),lt(n)))).then((()=>{n=[];for(const r of g.list())n.push(Bt(r,t,e));return n.push(o),lt(n)})).catch((t=>W(t,8)?t:Promise.reject(t)))}function K(t,e,n){for(const r of y.list())$((()=>r(t,e,n)))}function G(t,e,n,r,i){const o=M(t,e);if(o)return o;const c=e===B,l=s?history.state:{};n&&(r||c?h.replace(t.fullPath,a({scroll:c&&l&&l.scroll},i)):h.push(t.fullPath,i)),_.value=t,rt(t,e,n,c),nt()}let Y;function X(){Y||(Y=h.listen(((t,e,n)=>{if(!ct.listening)return;const r=R(t),i=U(r);if(i)return void V(a(i,{replace:!0}),r).catch(l);v=r;const o=_.value;s&&N(D(o.fullPath,n.delta),x()),z(r,o).catch((t=>W(t,12)?t:W(t,2)?(V(t.to,r).then((t=>{W(t,20)&&!n.delta&&n.type===T.pop&&h.go(-1,!1)})).catch(l),Promise.reject()):(n.delta&&h.go(-n.delta,!1),tt(t,r,o)))).then((t=>{t=t||G(r,o,!1),t&&(n.delta&&!W(t,8)?h.go(-n.delta,!1):n.type===T.pop&&W(t,20)&&h.go(-1,!1)),K(r,o,t)})).catch(l)})))}let Q,J=qt(),Z=qt();function tt(t,e,n){nt(t);const r=Z.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function et(){return Q&&_.value!==B?Promise.resolve():new Promise(((t,e)=>{J.add([t,e])}))}function nt(t){return Q||(Q=!t,X(),J.list().forEach((([e,n])=>t?n(t):e())),J.reset()),t}function rt(e,n,i,o){const{scrollBehavior:a}=t;if(!s||!a)return Promise.resolve();const c=!i&&O(D(e.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(e,n,c))).then((t=>t&&A(t))).catch((t=>tt(t,e,n)))}const st=t=>h.go(t);let ot;const at=new Set,ct={currentRoute:_,listening:!0,addRoute:C,removeRoute:S,hasRoute:I,getRoutes:k,resolve:R,options:t,push:L,replace:F,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:d.add,beforeResolve:g.add,afterEach:y.add,onError:Z.add,isReady:et,install(t){const e=this;t.component("RouterLink",Kt),t.component("RouterView",te),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(_)}),s&&!ot&&_.value===B&&(ot=!0,L(h.location).catch((t=>{0})));const n={};for(const i in B)n[i]=(0,r.Fl)((()=>_.value[i]));t.provide(Ut,e),t.provide(Vt,(0,i.qj)(n)),t.provide(jt,_);const o=t.unmount;at.add(t),t.unmount=function(){at.delete(t),at.size<1&&(v=B,Y&&Y(),Y=null,_.value=B,ot=!1,Q=!1),o()}}};function lt(t){return t.reduce(((t,e)=>t.then((()=>$(e)))),Promise.resolve())}return ct}function ne(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find((t=>y(t,s)))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find((t=>y(t,a)))||i.push(a))}return[n,r,i]}function re(){return(0,r.f3)(Ut)}function ie(){return(0,r.f3)(Vt)}}}]);