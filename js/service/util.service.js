/**
 * 工具类服务：返回一些公共的工具方法
 */

angular.module("utilMd", ["swxLocalStorage"])
    .factory("util", function ($localStorage,loginService) {
        return {
            //通过参数字段查询某个产品集合,key为查询值，field为查询的表字段名称
            queryArrByField: function (arr, key, field) {
                var tmpArr = [];
                angular.forEach(arr, function (item, index) {
                    if (item[field] == key || item[field].indexOf(','+key+',') != -1) {
                        tmpArr.push(item);
                    }
                })
                return tmpArr;
            },
            set:function(key,value){
            	$localStorage.put(key,value)
            },
            get:function(key){
            	var temp = $localStorage.get(key);
                if (temp != null || temp != "") {
                    return temp;
                }
                return loginService.get(key);
            },
        }
    })