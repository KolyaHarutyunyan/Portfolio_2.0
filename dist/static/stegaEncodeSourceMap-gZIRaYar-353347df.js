import{b as W}from"./sanity-cd7252c2.js";const x=/_key\s*==\s*['"](.*)['"]/;function q(n){return typeof n=="string"?x.test(n.trim()):typeof n=="object"&&"_key"in n}function R(n){if(!Array.isArray(n))throw new Error("Path is not an array");return n.reduce((t,e,r)=>{const i=typeof e;if(i==="number")return"".concat(t,"[").concat(e,"]");if(i==="string"){const c=r===0?"":".";return"".concat(t).concat(c).concat(e)}if(q(e)&&e._key)return"".concat(t,'[_key=="').concat(e._key,'"]');if(Array.isArray(e)){const[c,a]=e;return"".concat(t,"[").concat(c,":").concat(a,"]")}throw new Error("Unsupported path segment `".concat(JSON.stringify(e),"`"))},"")}const S={"\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","'":"\\'","\\":"\\\\"},P={"\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	","\\'":"'","\\\\":"\\"};function J(n){return"$".concat(n.map(t=>{if(typeof t=="string"){const e=t.replace(/[\f\n\r\t'\\]/g,r=>S[r]);return"['".concat(e,"']")}if(typeof t=="number")return"[".concat(t,"]");if(t._key!==""){const e=t._key.replace(/['\\]/g,r=>S[r]);return"[?(@._key=='".concat(e,"')]")}return"[".concat(t._index,"]")}).join(""))}function U(n){const t=[],e=/\['(.*?)'\]|\[(\d+)\]|\[\?\(@\._key=='(.*?)'\)\]/g;let r;for(;(r=e.exec(n))!==null;){if(r[1]!==void 0){const i=r[1].replace(/\\(\\|f|n|r|t|')/g,c=>P[c]);t.push(i);continue}if(r[2]!==void 0){t.push(parseInt(r[2],10));continue}if(r[3]!==void 0){const i=r[3].replace(/\\(\\')/g,c=>P[c]);t.push({_key:i,_index:-1});continue}}return t}function T(n){return n.map(t=>{if(typeof t=="string"||typeof t=="number")return t;if(t._key!=="")return{_key:t._key};if(t._index!==-1)return t._index;throw new Error("invalid segment:".concat(JSON.stringify(t)))})}function K(n){return n.map(t=>{if(typeof t=="string"||typeof t=="number")return t;if(t._index!==-1)return t._index;throw new Error("invalid segment:".concat(JSON.stringify(t)))})}function D(n,t){if(!(t!=null&&t.mappings))return;const e=J(K(n));if(t.mappings[e]!==void 0)return{mapping:t.mappings[e],matchedPath:e,pathSuffix:""};const r=Object.entries(t.mappings).filter(([l])=>e.startsWith(l)).sort(([l],[u])=>u.length-l.length);if(r.length==0)return;const[i,c]=r[0],a=e.substring(i.length);return{mapping:c,matchedPath:i,pathSuffix:a}}function V(n){return n!==null&&Array.isArray(n)}function v(n){return typeof n=="object"&&n!==null}function b(n,t,e=[]){return V(n)?n.map((r,i)=>{if(v(r)){const c=r._key;if(typeof c=="string")return b(r,t,e.concat({_key:c,_index:i}))}return b(r,t,e.concat(i))}):v(n)?Object.fromEntries(Object.entries(n).map(([r,i])=>[r,b(i,t,e.concat(r))])):t(n,e)}function $(n,t,e){return b(n,(r,i)=>{if(typeof r!="string")return r;const c=D(i,t);if(!c)return r;const{mapping:a,matchedPath:l}=c;if(a.type!=="value"||a.source.type!=="documentValue")return r;const u=t.documents[a.source.document],h=t.paths[a.source.path],y=U(l),d=U(h).concat(i.slice(y.length));return e({sourcePath:d,sourceDocument:u,resultPath:i,value:r})})}const A="drafts.";function B(n){return n.startsWith(A)?n.slice(A.length):n}function G(n){const{baseUrl:t,workspace:e="default",tool:r="default",id:i,type:c,path:a}=n;if(!t)throw new Error("baseUrl is required");if(!a)throw new Error("path is required");if(!i)throw new Error("id is required");if(t!=="/"&&t.endsWith("/"))throw new Error("baseUrl must not end with a slash");const l=e==="default"?void 0:e,u=r==="default"?void 0:r,h=B(i),y=Array.isArray(a)?R(T(a)):a,g=new URLSearchParams({baseUrl:t,id:h,type:c,path:y});l&&g.set("workspace",l),u&&g.set("tool",u);const d=[t==="/"?"":t];l&&d.push(l);const o=["mode=presentation","id=".concat(h),"type=".concat(c),"path=".concat(encodeURIComponent(y))];return u&&o.push("tool=".concat(u)),d.push("intent","edit","".concat(o.join(";"),"?").concat(g)),d.join("/")}function z(n){let t=typeof n=="string"?n:n.baseUrl;return t!=="/"&&(t=t.replace(/\/$/,"")),typeof n=="string"?{baseUrl:t}:{...n,baseUrl:t}}const m=({sourcePath:n,value:t})=>{if(X(t)||F(t))return!1;const e=n.at(-1);return!(n.at(-2)==="slug"&&e==="current"||typeof e=="string"&&e.startsWith("_")||typeof e=="number"&&n.at(-2)==="marks"||e==="href"&&typeof n.at(-2)=="number"&&n.at(-3)==="markDefs"||e==="style"||e==="listItem"||n.some(r=>r==="meta"||r==="metadata"||r==="openGraph"||r==="seo")||typeof e=="string"&&H.has(e))},H=new Set(["color","colour","currency","email","format","gid","hex","href","hsl","hsla","icon","id","index","key","language","layout","link","linkAction","locale","lqip","page","path","ref","rgb","rgba","route","secret","slug","status","tag","template","theme","type","unit","url","username","variant","website"]);function X(n){return/^\d{4}-\d{2}-\d{2}/.test(n)?!!Date.parse(n):!1}function F(n){try{new URL(n,n.startsWith("/")?"https://acme.com":void 0)}catch{return!1}return!0}const w=20;function Q(n,t,e){var r,i,c,a,l,u,h,y,g;const{filter:d,logger:o,enabled:O}=e;if(!O){const s="config.enabled must be true, don't call this function otherwise";throw(r=o==null?void 0:o.error)==null||r.call(o,"[@sanity/client/stega]: ".concat(s),{result:n,resultSourceMap:t,config:e}),new TypeError(s)}if(!t)return(i=o==null?void 0:o.error)==null||i.call(o,"[@sanity/client/stega]: Missing Content Source Map from response body",{result:n,resultSourceMap:t,config:e}),n;if(!e.studioUrl){const s="config.studioUrl must be defined";throw(c=o==null?void 0:o.error)==null||c.call(o,"[@sanity/client/stega]: ".concat(s),{result:n,resultSourceMap:t,config:e}),new TypeError(s)}const p={encoded:[],skipped:[]},C=$(n,t,({sourcePath:s,sourceDocument:_,resultPath:k,value:f})=>{if((typeof d=="function"?d({sourcePath:s,resultPath:k,filterDefault:m,sourceDocument:_,value:f}):m({sourcePath:s,resultPath:k,filterDefault:m,sourceDocument:_,value:f}))===!1)return o&&p.skipped.push({path:j(s),value:"".concat(f.slice(0,w)).concat(f.length>w?"...":""),length:f.length}),f;o&&p.encoded.push({path:j(s),value:"".concat(f.slice(0,w)).concat(f.length>w?"...":""),length:f.length});const{baseUrl:E,workspace:I,tool:L}=z(typeof e.studioUrl=="function"?e.studioUrl(_):e.studioUrl);if(!E)return f;const{_id:M,_type:N}=_;return W(f,{origin:"sanity.io",href:G({baseUrl:E,workspace:I,tool:L,id:M,type:N,path:s})},!1)});if(o){const s=p.skipped.length,_=p.encoded.length;if((s||_)&&((a=(o==null?void 0:o.groupCollapsed)||o.log)==null||a("[@sanity/client/stega]: Encoding source map into result"),(l=o.log)==null||l.call(o,"[@sanity/client/stega]: Paths encoded: ".concat(p.encoded.length,", skipped: ").concat(p.skipped.length))),p.encoded.length>0&&((u=o==null?void 0:o.log)==null||u.call(o,"[@sanity/client/stega]: Table of encoded paths"),(h=(o==null?void 0:o.table)||o.log)==null||h(p.encoded)),p.skipped.length>0){const k=new Set;for(const{path:f}of p.skipped)k.add(f.replace(x,"0").replace(/\[\d+\]/g,"[]"));(y=o==null?void 0:o.log)==null||y.call(o,"[@sanity/client/stega]: List of skipped paths",[...k.values()])}(s||_)&&((g=o==null?void 0:o.groupEnd)==null||g.call(o))}return C}function j(n){return R(T(n))}var Z=Object.freeze({__proto__:null,stegaEncodeSourceMap:Q});export{$ as encodeIntoResult,Q as stegaEncodeSourceMap,Z as stegaEncodeSourceMap$1};
