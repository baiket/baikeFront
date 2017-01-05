var homeModule = angular.module('home', ['ui.router','ksSwiper']);
homeModule.config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider
            .state("home", {
                url: '/home',
                templateUrl: 'view/home.html',
                resolve: { //预加载的功能，在页面渲染出现之前，提前加载这些数据，并在controller中引用
                	datas: function (httpService,$rootScope,util) {
	                        return httpService.get("json/data.json")
	                         .then(function (data) {//.then()函数里的返回值解析.这适用于对返回值做一些处理后再返回.
	                             return data.page;
	                        });
	                    },
                },
                 controller: function ($scope,$stateParams,datas,$rootScope,util) {
                 	console.log(datas)
                    $scope.sliderShow=true
                    $scope.images = datas.page_img
                 }

            })
            .state("error404",{
                url:'/error404',
                templateUrl: 'view/404.html',
                controller:function($scope,$stateParams){
                }
            })
    }
])