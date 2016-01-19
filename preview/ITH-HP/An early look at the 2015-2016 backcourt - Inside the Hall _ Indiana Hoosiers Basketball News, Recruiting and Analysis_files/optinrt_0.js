function setCookie(nm, val, exp) {
	if (exp) {
		var x = new Date();
		x.setTime(x.getTime() + (exp * 1000 * 60 * 60 * 24));
		exp = ";expires=" + x.toGMTString();
	}
	if (val)  document.cookie = (nm + "=" + encodeURI(val) + ";domain=.dotomi.com;path=/" + exp);
}
function shuffleArray(array){
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}
function hRT(rt, calls, rtMx, blist,c) {
	var cnt = 0;
	for (var i = 0 ; i < calls.length ; i++){
		var img;
		var ci;
		var isrc;
		var pid = calls[i][0];
		if ( (c) && !rt[pid] && cnt < rtMx && !blist[pid]) {
			img = new Image();
			ci = calls[i];
			isrc = ci[1];
			img.src = isrc.replace("USERTOKENG", utokeng).replace("USERTOKEN", utoken);
			ci[0] = img;
			setCookie('rt_' + pid ,2, ci[2]);
			cnt++;
		}else if ( (c) && rt[pid]){
		}else if (cnt < rtMx && !blist[pid]){
			img = new Image();
			ci = calls[i];
			isrc = ci[1];
			img.src = isrc.replace("USERTOKENG", utokenfg).replace("USERTOKEN", utokenf);
			ci[0] = img;
			setCookie('rt_' + pid, 2, ci[2]);
			cnt++;
		}
	}
	return cnt;
}

function handleOptin(cg, max, calls) {
	var fst = +TC.le[cg];
	if (!fst) fst = 0;

	var l = calls.length;

	if (max > 0 && l > 0) {
		max = l < max ? l : max;
		var ht = "";

		for (var i = 0; i < max; i++)
			ht += calls[fst++ % l];

		setCookie('le_' + cg, fst, "");

		if (ht != "")  document.write('<scr' + 'ipt>' + ht + '</scr' + 'ipt>');
	}
}
function chkMax(mkm, numPix, c, TC) {
	var mx;
	try {
		mx = +dtm_max_cookie_calls;
		if (mx) {
			if (mx < 0)
				mx = mkm;
		} else {
			if (mx != 0)
				mx = mkm;
		}
	} catch (e) {
		mx = mkm;
	}
	dtm_max_cookie_calls = mx;

	if (mx != 0 && (c)) {
		c = c.split(";");
		for (var i = 0; i < c.length; i++) {
			var m = /^\s*(le|rt)_(\d+)\s*=\s*(\d+)/.exec(c[i]);
			if (m != null) {
				TC[m[1]][m[2]] = m[3];
			}
		}

		//mx = dtm_max_cookie_calls - numPix;
		//mx = (mx<1 ? 1 : mx);
		mx = dtm_max_cookie_calls;
	}else{
		mx = dtm_max_cookie_calls;
	}
	return mx;
}
function getFilt(blist) {
	var bl = {};
	if (blist != undefined && blist != null && blist != "") {
		blist = blist.split(",");
		for (var i = 0; i < blist.length; i++) {
			bl[blist[i]] = true;
		}
	}
	return bl;
}

function filterPix(blist, optins) {
	var filtered = [];
	for (var i = 0; i < optins.length; i++) {
		var ccInfo = optins[i];
		for (var p = 0, l = ccInfo.length - 1; p < l; p++) {
			if (blist["" + ccInfo[p]]) {
				break;
			}
		}
		if (p == l) {
			filtered.push(ccInfo[l]);
		}
	}
	return filtered;
}


try {
	var c = document.cookie;
	var TC = {
		'le': {},
		'rt': {}
	};
	var rtc;
	var blist;
	var elist;
	var filteredUrls;
	var callLimit;
	var rtMx;
	if (c) {

		rtc =  new Array();
rtc[0] = [14000, 'http://cm.g.doubleclick.net/pixel?dtm_ghm&google_nid=dotomi&google_sc&google_ula=17128&google_hm=USERTOKEN ', 7];	// 
rtc[1] = [1982, 'http://ib.adnxs.com/setuid?entity=34&code=USERTOKEN', 7];	// 
rtc[2] = [14100, 'http://ad.afy11.net/ad?mode=7&publisher_dsp_id=6&external_user_id=USERTOKEN ', 7];	// 
rtc[3] = [19998, 'http://r.casalemedia.com/rum?cm_dsp_id=65&external_user_id=USERTOKEN', 7];	// 
rtc[4] = [3387, 'http://sync.adaptv.advertising.com/sync?type=gif&key=valueclickinc&uid=USERTOKEN', 7];	// 
rtc[5] = [60, 'http://ums.adtechus.com/mapuser?providerid=1013;userid=USERTOKEN', 7];	// 
rtc[6] = [80426, 'http://sync.search.spotxchange.com/partner?adv_id=7183&img=1&uid=USERTOKEN', 7];	// 
rtc[7] = [14200, 'http://bh.contextweb.com/bh/rtset?do=add&pid=530912&ev=USERTOKEN', 7];	// 
rtc[8] = [3435, 'http://www.facebook.com/fr/u.php?p=282726141853322&m=USERTOKEN', 7];	// 
rtc[9] = [3110, 'http://t4.liverail.com/?metric=csync&p=3011&s=USERTOKEN', 7];	// 
rtc[10] = [1988, 'http://pix.btrll.com/partner/692277.png', 7];	// 
rtc[11] = [1500, 'http://mpp.vindicosuite.com/sync/?pid=1005&pu=USERTOKEN', 7];	// 
rtc[12] = [5010, 'http://ads.yahoo.com/pixel?id=2217983&t=2&piggyback=http%3A%2F%2Fads.yahoo.com%2Fcms%2Fv1%3Fesig%3D1~4151a35556a52d081b3f866339189142d9cbceda%26nwid%3D10000780685%26sigv%3D1', 7];	// 


			var optinUrls = new Array();


			blist = getFilt(window['dtm_publisher_bl'], optinUrls);
		var forceCookies = getFilt(window['dtm_force_cookies_drop']).length > 0;
		filteredUrls = filterPix(blist, optinUrls);

		callLimit = forceCookies ? 666 : 8;
		rtMx = chkMax(callLimit, filteredUrls.length, c, TC);
		c = hRT(TC.rt, rtc, rtMx, blist,c);

		callLimit = forceCookies ? 666 : (dtm_max_cookie_calls - c);
		handleOptin('10846', callLimit, filteredUrls);
	}else{
		if (utokenf){
			rtc =  new Array();
rtc[0] = [14000, 'http://cm.g.doubleclick.net/pixel?dtm_ghm&google_nid=dotomi&google_sc&google_ula=17128&google_hm=USERTOKEN ', 7];	// 
rtc[1] = [1982, 'http://ib.adnxs.com/setuid?entity=34&code=USERTOKEN', 7];	// 
rtc[2] = [14100, 'http://ad.afy11.net/ad?mode=7&publisher_dsp_id=6&external_user_id=USERTOKEN ', 7];	// 
rtc[3] = [19998, 'http://r.casalemedia.com/rum?cm_dsp_id=65&external_user_id=USERTOKEN', 7];	// 
rtc[4] = [3387, 'http://sync.adaptv.advertising.com/sync?type=gif&key=valueclickinc&uid=USERTOKEN', 7];	// 
rtc[5] = [60, 'http://ums.adtechus.com/mapuser?providerid=1013;userid=USERTOKEN', 7];	// 
rtc[6] = [80426, 'http://sync.search.spotxchange.com/partner?adv_id=7183&img=1&uid=USERTOKEN', 7];	// 
rtc[7] = [14200, 'http://bh.contextweb.com/bh/rtset?do=add&pid=530912&ev=USERTOKEN', 7];	// 
rtc[8] = [3435, 'http://www.facebook.com/fr/u.php?p=282726141853322&m=USERTOKEN', 7];	// 
rtc[9] = [3110, 'http://t4.liverail.com/?metric=csync&p=3011&s=USERTOKEN', 7];	// 
rtc[10] = [1988, 'http://pix.btrll.com/partner/692277.png', 7];	// 
rtc[11] = [1500, 'http://mpp.vindicosuite.com/sync/?pid=1005&pu=USERTOKEN', 7];	// 
rtc[12] = [5010, 'http://ads.yahoo.com/pixel?id=2217983&t=2&piggyback=http%3A%2F%2Fads.yahoo.com%2Fcms%2Fv1%3Fesig%3D1~4151a35556a52d081b3f866339189142d9cbceda%26nwid%3D10000780685%26sigv%3D1', 7];	// 


				var optinUrls = new Array();


				blist = getFilt(window['dtm_publisher_bl'], optinUrls);
			elist = getFilt(window['dtm_publisher_el']);
			filteredUrls = filterPix(blist, optinUrls);

			callLimit = 8;
			rtMx = chkMax(callLimit, filteredUrls.length, c, TC);
			var scalls = shuffleArray(rtc);
			c = hRT(TC.rt, scalls, rtMx, blist,c);

			callLimit = dtm_max_cookie_calls - c;
			handleOptin('10846', callLimit, filteredUrls);
		}
	}

} catch (e) {
}