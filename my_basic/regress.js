var url="www.baidu.com?a=1&b=2&C=3";//测试地址
	/*
		分析：
			最前面是?或&，紧跟着除 ?&#以外的字符若干，然后再等号，最后再跟着除 ?&#以外的字符，并且要分组捕获到【除?&#以外的字符】
	*/
	var reg=/[?&]([^?&#]+)=([^?&#]+)/g;
	
	var param={};
	var ret =  reg.exec(url);
	while(ret){//当ret为null时表示已经匹配到最后了，直接跳出
		param[ret[1]]=ret[2];
		ret = reg.exec(url);
	}
	
	console.log(param)

