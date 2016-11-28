/**
 * Created by Tan$ on 11/26/2016.
 */
app.controller('JanampatriCtrl', function ($scope, $mdDialog, $http) {
    console.log("JanamPatri controller reporting on duty");
    $scope.user = {};

    $scope.submitUserForm = function (isValid) {
        console.log($scope.user);
        if (isValid) {
            $http.post('/storeCustomerDetails', $scope.user)
                .success(function (data) {
                    console.log(data);
                });
        }
    }
});