console.log('yo');
angular.module('hello-protractor', [
    'ui.router'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'app/partials/index.tpl.html',
                controller: function($scope) {
                $scope.updateMessageText = function(text) {
                $scope.messageText = text;}
                    }
                });

                $urlRouterProvider.otherwise('/');
});

