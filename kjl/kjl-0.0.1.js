/*! KJL_ v0.0.1 | MIT License */
/* Used js-cookie library. */
    
/*! js-cookie v3.0.0-rc.0 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var r=e.Cookies,n=e.Cookies=t();n.noConflict=function(){return e.Cookies=r,n}}())}(this,function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}var t={read:function(e){return e.replace(/%3B/g,";")},write:function(e){return e.replace(/;/g,"%3B")}};return function r(n,i){function o(r,o,u){if("undefined"!=typeof document){"number"==typeof(u=e({},i,u)).expires&&(u.expires=new Date(Date.now()+864e5*u.expires)),u.expires&&(u.expires=u.expires.toUTCString()),r=t.write(r).replace(/=/g,"%3D"),o=n.write(String(o),r);var c="";for(var f in u)u[f]&&(c+="; "+f,!0!==u[f]&&(c+="="+u[f].split(";")[0]));return document.cookie=r+"="+o+c}}return Object.create({set:o,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],i={},o=0;o<r.length;o++){var u=r[o].split("="),c=u.slice(1).join("="),f=t.read(u[0]).replace(/%3D/g,"=");if(i[f]=n.read(c,f),e===f)break}return e?i[e]:i}},remove:function(t,r){o(t,"",e({},r,{expires:-1}))},withAttributes:function(t){return r(this.converter,e({},this.attributes,t))},withConverter:function(t){return r(e({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(n)}})}(t,{path:"/"})});
/* js-cookie end */

const kjlobject = {
    css: function(el, name, val) {
        if (el && name && val) {
            if (el.startsWith("#")) {
                var newEl = document.getElementById(el.substring(el.indexOf("#")+1, el.length));
                newEl.style[name] = val;
            }
            else if (el.startsWith(".")) {
                var classList = document.getElementsByClassName(el.substring(el.indexOf(".")+1, el.length)); //type:array
                for (i = 0; i < classList.length; i++) {
                    classList[i].style[name] += val;
                }
            }
            else {
                var tagList = document.getElementsByTagName(el);
                for (i = 0; i < tagList.length-1; i++) {
                    tagList[i].style[name] += val;
                }
            }
        }
        else {
            return "one of element, classname, value is/are missing.";
        }
    }
    ,
    cookie: function(abbv, name, value, date) {
        if (abbv && name && value) {
            if (abbv != 'set'){ alert('kjl_35 error: value exists, but option is not \'set\'.'); return;}
            if (date) {
                if (Number.isInteger(date)) {
                    Cookies.set(name, value, {expires: date});
                    return;
                }
                else {
                    Cookies.set(name, value, {expires: parseInt(date)});
                    return;
                    
                }
            }
            else {
                Cookies.set(name, value);
                return;
            }
        }
        else if (abbv && name) {
            if (abbv == "get") {return Cookies.get(name);}
            else if (abbv == "remove") {Cookies.remove(name); return;}
            else {alert('kjl_48 error: didn\'t provide value, invalid option. try \'get\' or \'remove\'.')}
        }
        else {
            return "Cookie option(get,set etc) or name or value missing.";
        } 
    }
    ,
    id: function(id) {
        return document.getElementById(id);
    }
    ,
    kjlinfo: function() {
        return "version: 0.0.1";
    }
}

const _ = kjlobject;