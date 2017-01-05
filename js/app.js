/**
 * 创建总的入口模块：xmStoreApp，它依赖其它所有模块
 */

var dnaStore = angular.module('dnaStore',
    [
        'ui.router',
        'home',
		
        'loginMd',
        'httpMd',
        "utilMd"
    ]
);
dnaStore
    .config(
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
        }
    )
    //配置系统初始需要的数据
    .run(function ($rootScope,httpService,util, $state, $location,loginService) {
        //用户登录信息绑定在跟作用域下，因为各个状态路由可能都需要涉及登录信息
        $rootScope.user = 'shileiding'
					

        //判定状态改变事件
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        });
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        });

        //实现返回上一状态的函数 back button function   ng-click="back()"
        $rootScope.back = function () {
           // $state.go($rootScope.previousState_name, $rootScope.previousState_params);
        };
    })




