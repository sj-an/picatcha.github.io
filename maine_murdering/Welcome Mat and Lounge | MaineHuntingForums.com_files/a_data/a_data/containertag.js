sovrn.ct.dataCallback({"containerId":"1", "tags":[{"id":6,"type":"img","src":"http://p.nexac.com/e/a-1281/s-2329.xgi?ret=img","fire":"once","frequency":"sample","percent":100.0,"time":null,"params":[{"key":"na_ci","var":"sovrnReader"},{"key":"r","var":"sovrnRandom"}],"rules":[{"var":"sovrnGeo","operand":"eq","value":"US"},{"var":"sovrnUser","operand":"ne","value":"legacy"}],"error":"Datalogix pixel failed to fire","disabled":false},{"id":7,"type":"script","src":"(function() { var qs_vars, sovrn_reader_id = sovrn.ct.getData('sovrnReader'); if(sovrn_reader_id && sovrn_reader_id.indexOf('__') === -1 ) { qs_vars = { \"subid\": sovrn.ct.getData('sovrnIid'), \"em\": sovrn_reader_id }; (new Image()).src = \"http://tag.apxlv.com/tag/partner/133?pixel_mode=pixel&\" + sovrn.ads.buildQS(qs_vars); } else { return false; } })();","fire":"once","frequency":"timed","percent":null,"time":86400,"params":[{"key":"partner_uid","var":"sovrnReader"}],"rules":[{"var":"sovrnUser","operand":"ne","value":"legacy"}],"error":"Cogo Pixel Error","disabled":false},{"id":25,"type":"script","src":"var audience_sci_script = document.createElement('script'); audience_sci_script.type = 'text/javascript'; document.body.appendChild(audience_sci_script); audience_sci_script.appendChild(document.createTextNode('function DM_prepClient\\(csid,client\\) \\{ client.DM_addEncToLoc\\(\\\"category\\\", \\\"food_and_drink\\\"\\)\\; \\}')); var audience_sci_script2 = document.createElement('script'); audience_sci_script2.type = 'text/javascript'; audience_sci_script2.src = \"http://js.revsci.net/gateway/gw.js?csid=F09828&auto=t&bpid=sovrn\"; document.body.appendChild(audience_sci_script2);","fire":"once","frequency":"users","percent":1.0,"time":null,"params":[],"rules":[{"var":"sovrnApplications","operand":"ct","value":"4"},{"var":"sovrnUser","operand":"ne","value":"legacy"}],"error":"Audience Science Tag Error","disabled":false},{"id":26,"type":"script","src":"var audience_sci_script = document.createElement('script'); audience_sci_script.type = 'text/javascript'; document.body.appendChild(audience_sci_script); audience_sci_script.appendChild(document.createTextNode('function DM_prepClient\\(csid,client\\) \\{ client.DM_addEncToLoc\\(\\\"category\\\", \\\"health_and_fitness\\\"\\)\\; \\}')); var audience_sci_script2 = document.createElement('script'); audience_sci_script2.type = 'text/javascript'; audience_sci_script2.src = \"http://js.revsci.net/gateway/gw.js?csid=F09828&auto=t&bpid=sovrn\"; document.body.appendChild(audience_sci_script2);","fire":"once","frequency":"users","percent":1.0,"time":null,"params":[],"rules":[{"var":"sovrnApplications","operand":"ct","value":"8"},{"var":"sovrnUser","operand":"ne","value":"legacy"}],"error":"Audience Science Tag Error","disabled":false},{"id":27,"type":"script","src":"var audience_sci_script = document.createElement('script'); audience_sci_script.type = 'text/javascript'; document.body.appendChild(audience_sci_script); audience_sci_script.appendChild(document.createTextNode('function DM_prepClient\\(csid,client\\) \\{ client.DM_addEncToLoc\\(\\\"category\\\", \\\"style_and_fashion\\\"\\)\\; \\}')); var audience_sci_script2 = document.createElement('script'); audience_sci_script2.type = 'text/javascript'; audience_sci_script2.src = \"http://js.revsci.net/gateway/gw.js?csid=F09828&auto=t&bpid=sovrn\"; document.body.appendChild(audience_sci_script2);","fire":"once","frequency":"users","percent":1.0,"time":null,"params":[],"rules":[{"var":"sovrnApplications","operand":"ct","value":"6"},{"var":"sovrnUser","operand":"ne","value":"legacy"}],"error":"Audience Science Tag Error","disabled":false},{"id":28,"type":"script","src":"var audience_sci_script = document.createElement('script'); audience_sci_script.type = 'text/javascript'; document.body.appendChild(audience_sci_script); audience_sci_script.appendChild(document.createTextNode('function DM_prepClient\\(csid,client\\) \\{ client.DM_addEncToLoc\\(\\\"category\\\", \\\"arts_and_entertainment\\\"\\)\\; \\}')); var audience_sci_script2 = document.createElement('script'); audience_sci_script2.type = 'text/javascript'; audience_sci_script2.src = \"http://js.revsci.net/gateway/gw.js?csid=F09828&auto=t&bpid=sovrn\"; document.body.appendChild(audience_sci_script2);","fire":"once","frequency":"users","percent":1.0,"time":null,"params":[],"rules":[{"var":"sovrnApplications","operand":"ct","value":"7"}],"error":"Audience Science Tag Error","disabled":false},{"id":36,"type":"script","src":"var audience_sci_script = document.createElement('script'); audience_sci_script.type = 'text/javascript'; document.body.appendChild(audience_sci_script); audience_sci_script.appendChild(document.createTextNode('function DM_prepClient\\(csid,client\\) \\{ client.DM_addEncToLoc\\(\\\"category\\\", \\\"family_and_parenting\\\"\\)\\; \\}')); var audience_sci_script2 = document.createElement('script'); audience_sci_script2.type = 'text/javascript'; audience_sci_script2.src = \"http://js.revsci.net/gateway/gw.js?csid=F09828&auto=t&bpid=sovrn\"; document.body.appendChild(audience_sci_script2);","fire":"once","frequency":"users","percent":1.0,"time":null,"params":[],"rules":[{"var":"sovrnApplications","operand":"ct","value":"10"}],"error":"Audience Science - Family didn't fire","disabled":false},{"id":37,"type":"script","src":"var audience_sci_script = document.createElement('script'); audience_sci_script.type = 'text/javascript'; document.body.appendChild(audience_sci_script); audience_sci_script.appendChild(document.createTextNode('function DM_prepClient\\(csid,client\\) \\{ client.DM_addEncToLoc\\(\\\"category\\\", \\\"pets\\\"\\)\\; \\}')); var audience_sci_script2 = document.createElement('script'); audience_sci_script2.type = 'text/javascript'; audience_sci_script2.src = \"http://js.revsci.net/gateway/gw.js?csid=F09828&auto=t&bpid=sovrn\"; document.body.appendChild(audience_sci_script2);","fire":"once","frequency":"users","percent":1.0,"time":null,"params":[],"rules":[{"var":"sovrnApplications","operand":"ct","value":"11"}],"error":"Audience Science - Pets Tag Error","disabled":false},{"id":38,"type":"script","src":"var audience_sci_script = document.createElement('script'); audience_sci_script.type = 'text/javascript'; document.body.appendChild(audience_sci_script); audience_sci_script.appendChild(document.createTextNode('function DM_prepClient\\(csid,client\\) \\{ client.DM_addEncToLoc\\(\\\"category\\\", \\\"society\\\"\\)\\; \\}')); var audience_sci_script2 = document.createElement('script'); audience_sci_script2.type = 'text/javascript'; audience_sci_script2.src = \"http://js.revsci.net/gateway/gw.js?csid=F09828&auto=t&bpid=sovrn\"; document.body.appendChild(audience_sci_script2);","fire":"once","frequency":"sample","percent":1.0,"time":null,"params":[],"rules":[{"var":"sovrnApplications","operand":"ct","value":"12"}],"error":"Audience Science - Society Tag Error","disabled":false},{"id":39,"type":"script","src":"try{ var resource = document.createElement('script'); resource.type = 'text/javascript'; document.body.appendChild(resource); resource.appendChild(document.createTextNode('function DM_prepClient\\(csid,client\\) \\{ client.DM_addEncToLoc\\(\\\"category\\\", \\\"sports\\\"\\)\\; \\}')); var resource2 = document.createElement('script'); resource2.type = 'text/javascript'; resource2.src = \"http://js.revsci.net/gateway/gw.js?csid=F09828&auto=t&bpid=sovrn\"; document.body.appendChild(resource2); }catch(e){}","fire":"once","frequency":"users","percent":1.0,"time":null,"params":[],"rules":[{"var":"sovrnApplications","operand":"ct","value":"12"}],"error":"Audience Science - Sports Tag Error","disabled":false},{"id":40,"type":"script","src":"var audience_sci_script = document.createElement('script'); audience_sci_script.type = 'text/javascript'; document.body.appendChild(audience_sci_script); audience_sci_script.appendChild(document.createTextNode('function DM_prepClient\\(csid,client\\) \\{ client.DM_addEncToLoc\\(\\\"category\\\", \\\"travel\\\"\\)\\; \\}')); var audience_sci_script2 = document.createElement('script'); audience_sci_script2.type = 'text/javascript'; audience_sci_script2.src = \"http://js.revsci.net/gateway/gw.js?csid=F09828&auto=t&bpid=sovrn\"; document.body.appendChild(audience_sci_script2);","fire":"once","frequency":"users","percent":1.0,"time":null,"params":[],"rules":[{"var":"sovrnApplications","operand":"ct","value":"14"}],"error":"Audience Science - Travel Tag Error","disabled":false},{"id":41,"type":"script","src":"try{ var resource = document.createElement('script'); resource.type = 'text/javascript'; document.body.appendChild(resource); resource.appendChild(document.createTextNode('function DM_prepClient\\(csid,client\\) \\{ client.DM_addEncToLoc\\(\\\"category\\\", \\\"shopping\\\"\\)\\; \\}')); var resource2 = document.createElement('script'); resource2.type = 'text/javascript'; resource2.src = \"http://js.revsci.net/gateway/gw.js?csid=F09828&auto=t&bpid=sovrn\"; document.body.appendChild(resource2); }catch(e){}","fire":"once","frequency":"users","percent":1.0,"time":null,"params":[],"rules":[{"var":"sovrnApplications","operand":"ct","value":"15"}],"error":"Audience Science - Shopping Tag Error","disabled":false},{"id":42,"type":"script","src":"var forensiq_scr = document.createElement('script'); forensiq_scr.type = 'text/javascript'; forensiq_scr.src = \"http://c.fqtag.com/tag/implement-r.js?org=n9QBiT0aw5IhdlZPmwBm&p=\"+encodeURIComponent(sovrn.ct.getData('sovrnUser'))+\"&fmt=banner&rt=display&sl=1&fq=1&c1=\"+sovrn.ads.getTID()+\"&rd=\"+sovrn.ads.getOD(); document.body.appendChild(forensiq_scr);","fire":"once","frequency":"sample","percent":7.0,"time":null,"params":[],"rules":[{"var":"sovrnApplications","operand":"ct","value":"24"}],"error":"Forensiq Pixel Error","disabled":false},{"id":46,"type":"img","src":"http://adadvisor.net/adscores/g.pixel?sid=9212274088","fire":"once","frequency":"sample","percent":25.0,"time":null,"params":[],"rules":[{"var":"sovrnUser","operand":"ne","value":"legacy"}],"error":"Neustar Error Pixel","disabled":false},{"id":53,"type":"script","src":"(function() { window._qevents = window._qevents || []; var u = 'unknown'; var zone = sovrn.ads.getZoneID()||u; var user = (sovrn.ct.getData('sovrnUser')||u).replace(/_/g, '+'); var mobile = /iPhone|iOS|IEMobile|Android|Blackberry/.test(navigator.userAgent || navigator.vendor || window.opera) ? 'Mobile' : 'Online'; var intl = sovrn.ct.getData('sovrnGeo') === 'US' ? 'US' : 'Intl'; var host = sovrn.ads.getLocHost(); var site = (/^[a-z\\d]([a-z\\d\\-]{0,61}[a-z\\d])?(\\.[a-z\\d]([a-z\\d\\-]{0,61}[a-z\\d])?)*$/i.test(host) ? host : u).replace(/\\./g, '+'); var scpt = document.getElementsByTagName('script')[0]; var elem = document.createElement('script'); elem.src = (document.location.protocol === 'https:' ? 'https://secure' : 'http://edge') + '.quantserve.com/quant.js'; elem.type = 'text/javascript'; scpt.parentNode.insertBefore(elem, scpt); _qevents.push({ qacct: 'p-56WJ0KtIxWJ_2', labels: 'Publishers.' + user + '.' + zone + ',Sites.' + site + '.' + user + '.' + intl + '.' + mobile }); })();","fire":"multi","frequency":"","percent":null,"time":null,"params":[],"rules":[{"var":"sovrnUser","operand":"ne","value":"legacy"}],"error":"Quantcast segmentation failed","disabled":false},{"id":55,"type":"script","src":"var aud_sci_scr = document.createElement('script'); aud_sci_scr.type = 'text/javascript'; document.body.appendChild(aud_sci_scr); aud_sci_scr.appendChild(document.createTextNode('function DM_prepClient\\(csid,client\\) \\{ client.DM_addEncToLoc\\(\\\"category\\\", \\\"sovrn\\\"\\)\\; \\}')); var aud_sci_scr2 = document.createElement('script'); aud_sci_scr2.type = 'text/javascript'; aud_sci_scr2.src = \"http://js.revsci.net/gateway/gw.js?csid=F09828&auto=t&bpid=sovrn\"; document.body.appendChild(aud_sci_scr2);","fire":"once","frequency":"sample","percent":100.0,"time":null,"params":[],"rules":[{"var":"sovrnApplications","operand":"ct","value":"23"}],"error":"Audience Science - Tag Error","disabled":false},{"id":56,"type":"img","src":"http://sync.graph.bluecava.com/ds.png?p=95b767e8-0bec-4fdb-a4d3-bc8ce01a08cd&segment=66afeee89497e411a7020050569b1b56","fire":"multi","frequency":"sample","percent":25.0,"time":null,"params":[{"key":"uid","var":"sovrnReader"},{"key":"sovrnrnd","var":"sovrnRandom"}],"rules":[{"var":"sovrnUser","operand":"ne","value":"legacy"}],"error":"Bluecava Data Pixel Error","disabled":false},{"id":57,"type":"img","src":"http://sovrn-travel.t.domdex.com/search.gif?k=travel","fire":"multi","frequency":"timed","percent":null,"time":86400,"params":[],"rules":[{"var":"sovrnApplications","operand":"ct","value":"26"}],"error":"Magnetic Travel Image Pixel Error","disabled":false},{"id":61,"type":"img","src":"http://track2.securedvisit.com/sync/1540_03681","fire":"once","frequency":"timed","percent":null,"time":86400,"params":[{"key":"id","var":"sovrnReader"}],"rules":[{"var":"sovrnUser","operand":"ne","value":"legacy"}],"error":"4cite container tag","disabled":false},{"id":63,"type":"script","src":"(function() { window.vglnk = { api_url: '//click.sovrn.com/api', key: '61f6503cec403805577532949f283e72' }; (function(d, t) { var s = d.createElement(t); s.type = 'text/javascript'; s.src = '//clickcdn.sovrn.com/api' + '/vglnk.js'; var r = d.getElementsByTagName(t)[0]; r.parentNode.insertBefore(s, r); })(document, 'script'); })();","fire":"once","frequency":"","percent":null,"time":null,"params":[],"rules":[{"var":"sovrnApplications","operand":"ct","value":"23"}],"error":"VigLink Did Not Fire Correctly","disabled":false},{"id":64,"type":"img","src":"http://idsync.rlcdn.com/382846.gif","fire":"multi","frequency":"sample","percent":50.0,"time":null,"params":[{"key":"partner_uuid","var":"sovrnReader"}],"rules":[{"var":"sovrnUser","operand":"ne","value":"legacy"}],"error":"LiveRamp Pixel Error","disabled":false},{"id":70,"type":"img","src":"http://p.univide.com/t.gif?pid=5&pidt=0","fire":"once","frequency":"sample","percent":5.0,"time":86400,"params":[{"key":"pdid","var":"sovrnReader"}],"rules":[{"var":"sovrnUser","operand":"ne","value":"legacy"}],"error":"Crosswise Data Pixel Error","disabled":false},{"id":72,"type":"script","src":"(function() { var sovrn_reader_id = encodeURIComponent(sovrn.ct.getData('sovrnReader')); (new Image()).src = \"http://d.audienceiq.com/r/dd/id/L21rdC80NC9jaWQvMjg1NDQ3ODEvdC8y/kv/puid=\" + sovrn_reader_id; })(); ","fire":"once","frequency":"sample","percent":5.0,"time":86400,"params":[{"key":"dpuid","var":"sovrnReader"}],"rules":[{"var":"sovrnUser","operand":"ne","value":"legacy"}],"error":"Experian Data Pixel Error ","disabled":false},{"id":73,"type":"script","src":"(function() { var sovrn_reader_id = encodeURIComponent(sovrn.ct.getData('sovrnReader')); (new Image()).src = \"http://bcp.crwdcntrl.net/5/c=5436/tp=SVRN/tpid=\" + sovrn_reader_id + \"/pv=y?http://ce.lijit.com/merge?pid=5001&3pid=${profile_id}\"; })();","fire":"once","frequency":"timed","percent":null,"time":86400,"params":[],"rules":[{"var":"sovrnUser","operand":"ne","value":"legacy"}],"error":"Lotame Data Pixel Error","disabled":false},{"id":74,"type":"script","src":"(function () { var qs_vars, sovrn_reader_id = sovrn.ct.getData('sovrnReader'); if (sovrn_reader_id) { qs_vars = { \"iv\": sovrn_reader_id }; (new Image()).src = \"http://pippio.com/api/sync?pid=1276&it=1&\" + sovrn.ads.buildQS(qs_vars); } else { (new Image()).src = \"http://pippio.com/api/sync?pid=1276\"; } })();","fire":"once","frequency":"timed","percent":null,"time":86400,"params":[{"key":"iv","var":"sovrnReader"}],"rules":[{"var":"sovrnUser","operand":"ne","value":"legacy"}],"error":"Pippio Data Pixel Error","disabled":false},{"id":76,"type":"script","src":"(function () { var qs_vars, sovrn_reader_id = sovrn.ct.getData('sovrnReader'), sovrn_geo_id = sovrn.ct.getData('sovrnGeo'); if (sovrn_geo_id === 'GB' || sovrn_geo_id === 'IE') { qs_vars = { \"phint\": sovrn_reader_id }; (new Image()).src = \"http://tags.bluekai.com/site/28061?limit=1&\" + sovrn.ads.buildQS(qs_vars); } else { return false; } })();","fire":"multi","frequency":"sample","percent":100.0,"time":null,"params":[],"rules":[{"var":"sovrnUser","operand":"ne","value":"legacy"}],"error":"DatalogixUK Pixel Error","disabled":false},{"id":79,"type":"img","src":"http://sovrn-auto.t.domdex.com/search.gif?k=auto","fire":"multi","frequency":"timed","percent":null,"time":86400,"params":[],"rules":[{"var":"sovrnApplications","operand":"ct","value":"27"}],"error":"Magnetic Auto Image Pixel Error","disabled":false},{"id":80,"type":"script","src":"document.writeln(sovrn.ct.createScript(\"//s.skimresources.com/js/89299X1542564.skimlinks.js\").outerHTML);","fire":"multi","frequency":"sample","percent":50.0,"time":null,"params":[],"rules":[],"error":"Skimlinks Javascript Error Message ","disabled":false},{"id":81,"type":"img","src":"http://sovrn-finance.t.domdex.com/search.gif?k=finance","fire":"multi","frequency":"timed","percent":null,"time":86400,"params":[],"rules":[{"var":"sovrnApplications","operand":"ct","value":"28"}],"error":"Magnetic Finance Image Pixel Error","disabled":false},{"id":82,"type":"img","src":"http://sovrn-foodanddrink.t.domdex.com/search.gif?k=food,drink","fire":"multi","frequency":"timed","percent":null,"time":86400,"params":[],"rules":[{"var":"sovrnApplications","operand":"ct","value":"29"}],"error":"Magnetic Food and Drink Image Pixel Error","disabled":false},{"id":84,"type":"script","src":"(function() { var oxfr=sovrn.ads.createiFrame('',1,1); oxfr.src='//sovrn-merge.openx.net/w/1.0/afr?auid=538152059&cc=1'; document.body.appendChild(oxfr); })();","fire":"multi","frequency":"sample","percent":10.0,"time":null,"params":[],"rules":[{"var":"sovrnUser","operand":"ne","value":"legacy"},{"var":"sovrnUser","operand":"ne","value":"swelcome"}],"error":"OpenX S2S Cookie Sync Error","disabled":false},{"id":85,"type":"img","src":"http://ds.reson8.com/sv-ext.gif","fire":"once","frequency":"timed","percent":null,"time":86400,"params":[{"key":"sovrnid","var":"sovrnReader"}],"rules":[],"error":"Resonate Data Pixel Error","disabled":false}], "geo":"US", "ljt_reader":"ef101c62d5637b7a8da3856d8eb23490", "application_ids":["25"], "commscoreCategory":7, "user":{"iid":7664850, "username":"adkarma"}, "3pids":{}});