dimml.baseDynamic=function(){return '//baltar.dimml.io'};(function(){var preMatch=function(doMatch){
	try{
		if ( typeof( window.gemius_hcconn ) === "undefined" ) {
			var nInt	= 250;
			var nWaited = 0;
			var nMax 	= 20;
			var handle = setInterval( function( ) {
				nWaited++;
				if ( typeof( window.gemius_hcconn ) !== "undefined" || nWaited >= nMax ) {
					clearInterval( handle );
					doMatch();
				}
			}, nInt );
		} else {
			doMatch();
		}
	} catch( e ){}
};preMatch(function(){if(dimml.match('*')){dimml.send({},'static',null,'c4cadaa3dac058e59301a3e52e1bcca0c48df847')}});})();