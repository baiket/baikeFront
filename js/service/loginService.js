/**
 * 用户登录信息服务
 */

angular.module("loginMd", ["ngCookies","httpMd"])
    .factory("loginService", function ($cookies,httpService) {
        return {
            putCookie:function(key,value){
            	var expireDate = new Date();
            	//expireDate.setMinutes(expireDate.getMinutes()+5);
				expireDate.setHours(expireDate.getHours()+2);
               	$cookies.putObject(key,value,{'expires': expireDate});
            },
            putCookieForever:function(key,value){
               	$cookies.putObject(key,value);
            },
           	getCookie:function(key){
            	var temp = $cookies.getObject(key);
                if (temp != null || temp != "") {
                    return temp;
                }
                return null;
            },
        }
    })

