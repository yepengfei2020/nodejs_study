//tealium universal tag - utag.1897 ut4.0.201602221517, Copyright 2016 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[function(a,b){var o=[{"page":"IBM_LinkedIn Insight Tag","url":"www.ibm.com/us-en/"},{"page":"IBM_LinkedIn Insight Tag","url":"www.ibm.com/cognitive/outthink/"},{"page":"IBM_LinkedIn Insight Tag","url":"www.ibm.com/analytics/us/en/?lnk=bua"},{"page":"IBM_LinkedIn Insight Tag","url":"www.ibm.com/cloud-computing/?lnk=bucl"},{"page":"IBM_LinkedIn Insight Tag","url":"www.ibm.com/commerce/us-en/?lnk=buco"},{"page":"IBM_LinkedIn Insight Tag","url":"www.ibm.com/it-infrastructure/us-en/"},{"page":"IBM_LinkedIn Insight Tag","url":"www.ibm.com/mobilefirst/us/en/?lnk=bumf"},{"page":"IBM_LinkedIn Insight Tag","url":"www.ibm.com/smarterplanet/us/en/ibmwatson/?lnk=buwa"},{"page":"LN_InsightLP_WA","url":"www.ibm.com/analytics/watson-analytics"},{"page":"LN_InsightReg_WA","url":"www.ibm.com/ibmid/basic_register/register.html"},{"page":"LN_InsightTY_WA","url":"www.ibm.com/ibmid/basic_register/register_confirmation.html"},{"page":"LN_InsightLP_BX","url":"www.ibm.com/cloud-computing/bluemix/"}]
function getURL(h){var l=document.createElement("a");var href=h+"";if(!(href.indexOf("http")==0||href.indexOf("//")==0)){href="//"+href}l.href=href;return l};function getPath(h){var p=getURL(h).pathname+"";return((p.indexOf("/")===0)?p:"/"+p)};for(var i=0;i<o.length;i++){var t=o[i];if(b["dom.pathname"]==getPath(t.url)&&(b["dom.query_string"]==getURL(t.url).search.substring(1)||getURL(t.url).search.substring(1)==""||b["dom.query_string"].indexOf(getURL(t.url).search.substring(1))>-1)&&(b["dom.hash"]==getURL(t.url).hash.substring(1)||getURL(t.url).hash.substring(1)==""||b["dom.hash"].indexOf(getURL(t.url).hash.substring(1))>-1)){utag.DB(t);utag.ut.loader({type:t.type,src:t.src})}}
return false;}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
}};utag.o[loader].loader.LOAD(id);})("1897","ibm.main");}catch(error){utag.DB(error);}
