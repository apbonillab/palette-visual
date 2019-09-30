var regressionTest = angular.module('regressionTest', []);

function mainController($scope, $http) {

    $scope.execute = () => {
        $http.post('/test/compare', {})
            .success(function (data) {
                $scope.executions = data.map(item => parseExecution(item));            
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

}
