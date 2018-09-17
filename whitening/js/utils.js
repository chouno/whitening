function isMobile() {
    /*
    var c = navigator.userAgent.toLowerCase();
    var iphone = c.indexOf("iphone");
    var ipad = c.indexOf("ipad");
    var ipod = c.indexOf("ipod");
    var blackberry = c.indexOf("blackberry");
    var android = c.indexOf("android");
    var mobile = c.indexOf("mobile");
    return -1 < c.indexOf("blackberry") || -1 < c.indexOf("iphone") || -1 < c.indexOf("iphone") || -1 < c.indexOf("android") && -1 < c.indexOf("mobile");
    */
	if( navigator.userAgent.match(/Android/i)
	 || navigator.userAgent.match(/webOS/i)
	 || navigator.userAgent.match(/iPhone/i)
	 || navigator.userAgent.match(/iPad/i)
	 || navigator.userAgent.match(/iPod/i)
	 || navigator.userAgent.match(/BlackBerry/i)
	 || navigator.userAgent.match(/Windows Phone/i)
	 ){
		return true;
	  }
	 else {
	    return false;
	  }
}

function isAppleMobile(){
	if(navigator.userAgent.match(/iPhone/i)
	 || navigator.userAgent.match(/iPad/i)
	 || navigator.userAgent.match(/iPod/i)
	 ){
		return true;
	  }
	 else {
	    return false;
	  }
}

function isLessThanIE10(){
	var result = false;
	var userAgent = navigator.userAgent.toLowerCase();
	var appVersion = navigator.appVersion.toLowerCase();
	if(!userAgent||!appVersion){
		return true;
	}
	if (userAgent.indexOf('msie') != -1) {
	    if (appVersion.indexOf("msie 6.") != -1) {
	        result=true;
	    }else if (appVersion.indexOf("msie 7.") != -1) {
	        result=true;
	    }else if (appVersion.indexOf("msie 8.") != -1) {
	        result=true;
	    }else if (appVersion.indexOf("msie 9.") != -1) {
	        result=true;
	    }
    }
    return result;
}

function isIE(){
	var userAgent = navigator.userAgent.toLowerCase();
	if (userAgent.indexOf('msie') != -1) {
		return true;
	}
	return false;
}

function isFireFox(){
	var userAgent = navigator.userAgent.toLowerCase();
	if (userAgent.indexOf('firefox') != -1) {
	    return true; 
	};
	return false;
}

function isOpera(){
	var userAgent = navigator.userAgent.toLowerCase();
	if (userAgent.indexOf('opera') != -1) {
	    return true; 
	};
	return false;
}

function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (h && s === undefined && v === undefined) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.floor(r * 255),
        g: Math.floor(g * 255),
        b: Math.floor(b * 255)
    };
}

function setLiquidFrame(target){
	var h = getBrowserHeight();
	var w = getBrowserWidth();
	$(target).css({
		'height':h
	});
}

function getBrowserHeight() {
        if ( window.innerHeight ) {
                return window.innerHeight;
        }
        else if ( document.documentElement && document.documentElement.clientHeight != 0 ) {
                return document.documentElement.clientHeight;
        }
        else if ( document.body ) {
                return document.body.clientHeight;
        }
        return 0;
}

function getBrowserWidth() {
        if ( window.innerWidth ) {
                return window.innerWidth;
        }
        else if ( document.documentElement && document.documentElement.clientWidth != 0 ) {
                return document.documentElement.clientWidth;
        }
        else if ( document.body ) {
                return document.body.clientWidth;
        }
        return 0;
}

function checkCompatible3D(){
	var userAgent = window.navigator.userAgent.toLowerCase();
	
	if( userAgent.indexOf('webkit') != -1 ){
		return true;
	}
	
	return false;
}

