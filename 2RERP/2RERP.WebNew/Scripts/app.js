function BasicData($scope, $http) {
    $scope.Country = {
        "country_id": "",
        "country_code": "",
        "country_name": "",
        "audit_user_id": "",
        "audit_ts": ""
    }
    $scope.Countries = {};
    $scope.Insert = function () {
        $http({ method: "POST", data: $scope.Country, url: "/Api/BasicData", params: { 'foobar': new Date().getTime() } }).
        success(function (data, status, header, config) {
            var a = data;
            if (a != null) {
                $scope.Countries = data;
                $scope.Country = {
                    "country_id": "",
                    "country_code": "",
                    "country_name": "",
                    "audit_user_id": "",
                    "audit_ts": ""
                }
            //    //window.location.href = '/Home/Index?id=' + data;
            }
            //else {
            //    alert("Registration Failed !!!!");
            //}

        });
    }
    $scope.loading = true;
    $scope.editMode = false;

    $http.get('/Api/BasicData/').success(function (data) {
        $scope.Countries = data;
        $scope.loading = false;
    })
    .error(function () {
        $scope.error = "An Error has occured while loading posts!";
        $scope.loading = false;
    });

     //$scope.Load = function ()
     //{
     //    debugger;
     //    $http({ method: "GET", url: "/Api/BasicData" }).
     //   success(function (data, status, headers, config) {
     //       $scope.Countries = data;
     //   });
     //}
    $scope.get = function () {
         $http({ method: "GET", url: "/Api/BasicData" , params: { 'foobar': new Date().getTime() } }).
        success(function (data, status, headers, config) {
            $scope.Countries = data;
        });
     }
}

var app = angular.module("myApp", []);
app.controller('BasicData', BasicData);