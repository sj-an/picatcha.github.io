﻿
(function (n)
{
    function g(a) { try { if (navigator.plugins && navigator.plugins.length) for (var c = 0; c < navigator.plugins.length; c++) { var b = navigator.plugins[c]; if (b.name.indexOf(a) >= 0) return b.name + (b.description ? "|" + b.description : "") } } catch (e) { } return "" } function A(a)
    {
        try
        {
            if (!a) return B(); var c; a: {
                var b; try { b = document.getElementById(a) } catch (e) { } if (b === null || typeof b === "undefined") try { b = document.getElementsByName(a)[0] } catch (f) { } if (b === null || typeof b === "undefined") for (var d = 0; d < document.forms.length; d++) for (var h =
                document.forms[d], l = 0; l < h.elements.length; l++) { var k = h[l]; if (k.name === a || k.id === a) { c = k; break a } } c = b
            } if (c !== null) try { c.value = B() } catch (s) { c.value = escape(s.message) }
        } catch (C) { }
    } function B(a)
    {
        var c = new Date, b = new Date, e = [u("TF1"), u("021"), function () { return ScriptEngineMajorVersion() }, function () { return ScriptEngineMinorVersion() }, function () { return ScriptEngineBuildVersion() }, function () { return i("{7790769C-0471-11D2-AF11-00C04FA35D02}") }, function () { return i("{89820200-ECBD-11CF-8B85-00AA005B4340}") }, function () { return i("{283807B5-2C60-11D0-A31D-00AA00B92C03}") },
        function () { return i("{4F216970-C90C-11D1-B5C7-0000F8051515}") }, function () { return i("{44BBA848-CC51-11CF-AAFA-00AA00B6015C}") }, function () { return i("{9381D8F2-0288-11D0-9501-00AA00B911A5}") }, function () { return i("{4F216970-C90C-11D1-B5C7-0000F8051515}") }, function () { return i("{5A8D6EE0-3E18-11D0-821E-444553540000}") }, function () { return i("{89820200-ECBD-11CF-8B85-00AA005B4383}") }, function () { return i("{08B0E5C0-4FCB-11CF-AAA5-00401C608555}") }, function () { return i("{45EA75A0-A269-11D1-B5BF-0000F8051515}") },
        function () { return i("{DE5AED00-A4BF-11D1-9948-00C04F98BBC9}") }, function () { return i("{22D6F312-B0F6-11D0-94AB-0080C74C7E95}") }, function () { return i("{44BBA842-CC51-11CF-AAFA-00AA00B6015B}") }, function () { return i("{3AF36230-A269-11D1-B5BF-0000F8051515}") }, function () { return i("{44BBA840-CC51-11CF-AAFA-00AA00B6015C}") }, function () { return i("{CC2A9BA0-3BDD-11D0-821E-444553540000}") }, function () { return i("{08B0E5C0-4FCB-11CF-AAA5-00401C608500}") }, function () { return eval("navigator.appCodeName") }, function () { return eval("navigator.appName") },
        function () { return eval("navigator.appVersion") }, function () { return v(["navigator.productSub", "navigator.appMinorVersion"]) }, function () { return eval("navigator.browserLanguage") }, function () { return eval("navigator.cookieEnabled") }, function () { return v(["navigator.oscpu", "navigator.cpuClass"]) }, function () { return eval("navigator.onLine") }, function () { return eval("navigator.platform") }, function () { return eval("navigator.systemLanguage") }, function () { return eval("navigator.userAgent") }, function ()
        {
            return v(["navigator.language",
            "navigator.userLanguage"])
        }, function () { return eval("document.defaultCharset") }, function () { return eval("document.domain") }, function () { return eval("screen.deviceXDPI") }, function () { return eval("screen.deviceYDPI") }, function () { return eval("screen.fontSmoothingEnabled") }, function () { return eval("screen.updateInterval") }, function () { return Math.abs(p - q) !== 0 }, function () { return D(c) }, function () { return "@UTC@" }, function () { var k = 0; k = 0; if (D(c)) k = Math.abs(p - q); return k = -(c.getTimezoneOffset() + k) / 60 }, function ()
        {
            return (new Date(2005,
            5, 7, 21, 33, 44, 888)).toLocaleString()
        }, function () { return eval("screen.width") }, function () { return eval("screen.height") }, function () { return o.Acrobat }, function () { return o.Flash }, function () { return o.QuickTime }, function () { return o["Java Plug-in"] }, function () { return o.Director }, function () { return o.Office }, function () { return "@CT@" }, function () { return p }, function () { return q }, function () { return c.toLocaleString() }, function () { return eval("screen.colorDepth") }, function () { return eval("window.screen.availWidth") },
        function () { return eval("window.screen.availHeight") }, function () { return eval("window.screen.availLeft") }, function () { return eval("window.screen.availTop") }, function () { return g("Acrobat") }, function () { return g("Adobe SVG") }, function () { return g("Authorware") }, function () { return g("Citrix ICA") }, function () { return g("Director") }, function () { return g("Flash") }, function () { return g("MapGuide") }, function () { return g("MetaStream") }, function () { return g("PDFViewer") }, function () { return g("QuickTime") }, function () { return g("RealOne") },
        function () { return g("RealPlayer Enterprise") }, function () { return g("RealPlayer Plugin") }, function () { return g("Seagate Software Report") }, function () { return g("Silverlight") }, function () { return g("Windows Media") }, function () { return g("iPIX") }, function () { return g("nppdf.so") }, function () { var k = document.createElement("span"); k.innerHTML = "&nbsp;"; k.style.position = "absolute"; k.style.left = "-9999px"; document.body.appendChild(k); var s = k.offsetHeight; document.body.removeChild(k); return s }, j, j, j, j, j, j, j, j, j, j,
        j, j, j, j, function () { return "5.7.0-0" }, j, function () { return r }, j, j, j]; G(); for (var f = "", d = 0; d < e.length; d++) { if (a) { f += w(e[d].toString(), '"', "'", true); f += "=" } var h; try { h = e[d](this) } catch (l) { h = "" } f += a ? h : escape(h); f += ";"; if (a) f += "\\n" } f = w(f, escape("@UTC@"), (new Date).getTime()); f = w(f, escape("@CT@"), (new Date).getTime() - b.getTime()); return E && x ? x(f) : f
    } function w(a, c, b, e) { if (typeof e !== "boolean") e = false; for (var f = true, d; (d = a.indexOf(c)) >= 0 && (e || f) ;) { a = a.substr(0, d) + b + a.substr(d + c.length); f = false } return a } function D(a)
    {
        var c =
        Math.min(p, q); return Math.abs(p - q) !== 0 && a.getTimezoneOffset() === c
    } function G()
    {
        for (var a = ["Acrobat", "Flash", "QuickTime", "Java Plug-in", "Director", "Office"], c = 0; c < a.length; c++)
        {
            var b = a[c], e = o, f = b, d = b; b = ""; try
            {
                if (navigator.plugins && navigator.plugins.length) { var h = RegExp(d + ".* ([0-9._]+)"); for (d = 0; d < navigator.plugins.length; d++) { var l = h.exec(navigator.plugins[d].name); if (l === null) l = h.exec(navigator.plugins[d].description); if (l) b = l[1] } } else if (window.ActiveXObject && y[d]) try
                    {
                    var k = new ActiveXObject(y[d][0]);
                    b = y[d][1](k)
                } catch (s) { b = "" }
            } catch (C) { b = C.message } e[f] = b
        }
    } function v(a) { for (var c = 0; c < a.length; c++) try { var b = eval(a[c]); if (b) return b } catch (e) { } return "" } function i(a) { var c = ""; try { if (typeof m.a.getComponentVersion !== "undefined") c = m.a.getComponentVersion(a, "ComponentID") } catch (b) { a = b.message.length; a = a > 40 ? 40 : a; c = escape(b.message.substr(0, a)) } return c } function u(a) { return function () { return a } } function H(a)
    {
        function c(h) { e = e << h[0] | h[1]; for (f += h[0]; f >= 6;) { h = e >> f - 6 & 63; b += t.substring(h, h + 1); f -= 6; e ^= h << f } }
        var b = "", e = 0, f = 0; c([6, (a.length & 7) << 3 | 0]); c([6, a.length & 56 | 1]); for (var d = 0; d < a.length; d++) { if (z[a.charCodeAt(d)] == undefined) return; c(z[a.charCodeAt(d)]) } c(z[0]); f > 0 && c([6 - f, 0]); return b
    } function x(a)
    {
        for (var c = H, b = a, e = 0; F[e]; e++) b = b.split(F[e]).join(String.fromCharCode(e + 1)); c = c(b); if (c == undefined) return a; else
        {
            b = 65535; for (e = 0; e < a.length; e++) { b = (b >>> 8 | b << 8) & 65535; b ^= a.charCodeAt(e) & 255; b ^= (b & 255) >> 4; b ^= b << 12 & 65535; b ^= (b & 255) << 5 & 65535 } b &= 65535; a = ""; a += t.charAt(b >>> 12); a += t.charAt(b >>> 6 & 63); a += t.charAt(b &
            63); c += a; return c
        }
    } options = n || {}; n = options.ctx || window; var E = options.hasOwnProperty("compress") ? options.compress : true, m = {}, r = "", p = (new Date(2005, 0, 15)).getTimezoneOffset(), q = (new Date(2005, 6, 15)).getTimezoneOffset(), o = [], j = u(""), y = { Flash: ["ShockwaveFlash.ShockwaveFlash", function (a) { return a.getVariable("$version") }], Director: ["SWCtl.SWCtl", function (a) { return a.ShockwaveVersion("") }] }; try { m.a = document.createElement("span"); typeof m.a.addBehavior !== "undefined" && m.a.addBehavior("#default#clientCaps") } catch (I) { } o =
    {}; var z = {
        1: [4, 15], 110: [8, 239], 74: [8, 238], 57: [7, 118], 56: [7, 117], 71: [8, 233], 25: [8, 232], 101: [5, 28], 104: [7, 111], 4: [7, 110], 105: [6, 54], 5: [7, 107], 109: [7, 106], 103: [9, 423], 82: [9, 422], 26: [8, 210], 6: [7, 104], 46: [6, 51], 97: [6, 50], 111: [6, 49], 7: [7, 97], 45: [7, 96], 59: [5, 23], 15: [7, 91], 11: [8, 181], 72: [8, 180], 27: [8, 179], 28: [8, 178], 16: [7, 88], 88: [10, 703], 113: [11, 1405], 89: [12, 2809], 107: [13, 5617], 90: [14, 11233], 42: [15, 22465], 64: [16, 44929], 0: [16, 44928], 81: [9, 350], 29: [8, 174], 118: [8, 173], 30: [8, 172], 98: [8, 171], 12: [8, 170], 99: [7,
        84], 117: [6, 41], 112: [6, 40], 102: [9, 319], 68: [9, 318], 31: [8, 158], 100: [7, 78], 84: [6, 38], 55: [6, 37], 17: [7, 73], 8: [7, 72], 9: [7, 71], 77: [7, 70], 18: [7, 69], 65: [7, 68], 48: [6, 33], 116: [6, 32], 10: [7, 63], 121: [8, 125], 78: [8, 124], 80: [7, 61], 69: [7, 60], 119: [7, 59], 13: [8, 117], 79: [8, 116], 19: [7, 57], 67: [7, 56], 114: [6, 27], 83: [6, 26], 115: [6, 25], 14: [6, 24], 122: [8, 95], 95: [8, 94], 76: [7, 46], 24: [7, 45], 37: [7, 44], 50: [5, 10], 51: [5, 9], 108: [6, 17], 22: [7, 33], 120: [8, 65], 66: [8, 64], 21: [7, 31], 106: [7, 30], 47: [6, 14], 53: [5, 6], 49: [5, 5], 86: [8, 39], 85: [8, 38], 23: [7,
        18], 75: [7, 17], 20: [7, 16], 2: [5, 3], 73: [8, 23], 43: [9, 45], 87: [9, 44], 70: [7, 10], 3: [6, 4], 52: [5, 1], 54: [5, 0]
    }, F = ["%20", ";;;", "%3B", "%2C", "und", "fin", "ed;", "%28", "%29", "%3A", "/53", "ike", "Web", "0;", ".0", "e;", "on", "il", "ck", "01", "in", "Mo", "fa", "00", "32", "la", ".1", "ri", "it", "%u", "le"], t = ".0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz"; m.collect = A; m.f1b5 = x; m.setResource = function (a, c)
    {
        if (c) try
            {
            xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"); xmlhttp.open("GET",
            a, false); xmlhttp.send(); if (xmlhttp.readyState == 4 && xmlhttp.status == 200) r = xmlhttp.getResponseHeader("Last-Modified"); if (r === null) r = ""
        } catch (b) { } else r = ""
    }; n.fortyone = m; if (E) { n = navigator.userAgent.toLowerCase(); navigator.product === "Gecko" && parseInt(n.substring(n.indexOf("rv:") + 3, n.indexOf(")", n.indexOf("rv:") + 3)).split(".")[0]) <= 2 && A() }
})();

function MIIScriptCtrl()
{
    var miiscript = [];
    this.log = function (msg)
    {
        if (typeof MIILogging != 'undefined')
            console.log(msg);
    }
    this.log("creating new MIIScriptCtrl object from gwiq.js");
    this.push = function (src)
    {
        this.log("getmiifpid not ready yet; pushing src onto stack: " + src);

        if (src && src.length > 0)
        {
            miiscript.push(src);
            // add failsafe in case getmiifpid never gets set

        }
    }
    this.pop = function ()
    {
        var src = miiscript.pop();
        this.log("popping src from stack: " + src);
        return src;
    }
    this.popall = function () 
    { 
        while (this.isMIIscript())
            MIIObj.AddScript((this.pop()).replace(/%miifpid%/, "unknown"));
    }
    this.isMIIscript = function ()
    {
        return (miiscript.length > 0);
    }
    this.AddImage = function(url)
    {
        var ele = document.getElementById('gwiqImgTags');
        if (!ele)
        {
            ele = document.createElement('div');
            if (!ele)
                return;
            ele.id = 'gwiqImgTags';
            ele.style = "display: none;";
            document.body.appendChild(ele);
        }
        var html = ele.innerHTML;
        ele.innerHTML += "<img hidden src='" + url + "'/>";
    }
    this.AddScript = function (url, txt)
    {
        var js = document.createElement('script');
        js.type = 'text/javascript';
        js.charset = 'UTF-8';
        if (url && url != "")
        {
            this.log("AddScript url: " + url);
            js.src = url;
        }
        else if (txt && txt != "")
        {
            this.log("AddScript txt: " + txt);
            js.innerHTML = txt;
        }
        else return;

        var head = document.getElementsByTagName('head')[0];
        head.appendChild(js);
    }
    // we will collect this data only once per page because we only create one instance of MIIObj
    this.AddScript('//gwiq-sdr.secure.miisolutions.net/devid/script/gwiq/?rand=' + Math.random());

}
var MIIObj;
function gwiqobj()
{
    if (typeof MIIObj == 'undefined') MIIObj = new MIIScriptCtrl(); // we only want to create one instance per page
    // we will collect this data only once per page because we only create one instance of gwiqobj
    var AdTruthID = fortyone.collect();

    this.asyncjs = function (queryargs)
    {
        add = function ()
        {
            var src = '//gwiq.globalwebindex.net/gwiq/?';
            if (typeof queryargs == 'string' && queryargs != "")
                src += queryargs + "&";
            src += "rand=" + Math.random() + "&aid=" + AdTruthID + "&ce=" + navigator.cookieEnabled + "&miid=x";

            if (typeof miifp == 'undefined')
                MIIObj.push(src + '%miifpid%'); // wait for the getmiifpid function to complete
            else
                MIIObj.AddScript(src + miifp());
        };
        window.attachEvent ? window.attachEvent('onload', add) : window.addEventListener('load', add, false);  // execute add() after the onload event
    };
};
if (typeof gwiq == 'undefined') gwiq = new gwiqobj(); // we only want to create one instance per page
