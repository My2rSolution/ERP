function EntitiesController($scope, $http) {
    $scope.Entity = {
        "entity_id": "",
        "entity_name": "",
        "audit_user_id": "",
        "audit_ts": ""
    }

    $scope.Entities = {};
    $scope.Insert = function () {
        $http({ method: "POST", data: $scope.Entity, url: "/Api/BasicData/Entity" }).
            success(function (data, status, header, config) {
                var a = data;
                if (a != null) {
                    $scope.loading = true;
                    $scope.Entities = data;
                    $scope.Entity = {
                        "entity_id": "",
                        "entity_name": "",
                        "audit_user_id": "",
                        "audit_ts": ""
                    }
                    $scope.showdiv = false;
                    $scope.GriedEntity = true;
                    $scope.gridclass = "gridStyle";
                }
            });
    }

    // update method for entity
    $scope.btnEntityUpdate = function () {
        $http({ method: "PUT", data: $scope.Entity, url: "/Api/BasicData/Entity" }).
            success(function (data, status, header, config) {
                var a = data;
                if (a != null) {
                    $scope.Entities = data;
                    $scope.Entity = {
                        "entity_id": "",
                        "entity_name": "",
                        "audit_user_id": "",
                        "audit_ts": ""
                    }
                    $scope.showdiv = false;
                    $scope.GriedEntity = true;
                }
            });
    }
    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
    $scope.loading = true;
    $scope.editMode = false;

    $http.get('/Api/BasicData/Entity').success(function (data) {

        $scope.Entities = data;
        $scope.loading = false;
    })
        .error(function () {
            $scope.error = "An Error has occured while loading posts!";
            $scope.loading = false;
        });


    //display add button or update button for Entity 
    $scope.DisplayUpdate = true;
    $scope.DisplayUpdatebtn = false;

    //add entity edit button on ng-gried dynamically
    $scope.editableInPopup = '<button id="editBtn" type="button" class="btn btn-primary" ng-click="edit($event, row)" >Edit</button> ';

    $scope.editRow = function (row) {
        $scope.Entity = row;
        $scope.DisplayUpdate = false;
        $scope.DisplayUpdatebtn = true;

        $scope.showdiv = true;
        $scope.GriedEntity = false;
    }
    // ................ Ng- Grid..........................//
    $scope.gridclass = "gridStyle";

    $scope.filterOptions = {
        filterText: "",
        useExternalFilter: true
    };
    // $scope.mySelections = [];
    $scope.totalServerItems = 0;
    $scope.pagingOptions = {
        pageSizes: [10, 15, 30],
        pageSize: 10,
        currentPage: 1
    };
    $scope.setPagingData = function (data, page, pageSize) {

        var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
        $scope.myData = pagedData;
        $scope.totalServerItems = data.length;
        if (!$scope.$$phase) {
            $scope.$apply();
        }
    };
    $scope.getPagedDataAsync = function (pageSize, page, searchText) {
        setTimeout(function () {
            var data;
            if (searchText) {
                var ft = searchText.toLowerCase();
                $http.get('/Api/BasicData/Entity').success(function (largeLoad) {
                    data = largeLoad.filter(function (item) {
                        return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                    });

                });
            } else {
                $http.get('/Api/BasicData/Entity').success(function (largeLoad) {
                    $scope.setPagingData(largeLoad, page, pageSize);
                });
            }
        }, 100);
    };

    $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);
    $scope.$watch('pagingOptions', function (newVal, oldVal) {

        if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
            $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }
    }, true);
    $scope.$watch('filterOptions', function (newVal, oldVal) {

        if (newVal !== oldVal) {
            $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }
    }, true);

    $scope.class = "commonbtn";
    $scope.showdiv = false;
    $scope.GriedEntity = true;
    $scope.btnAdd = function () {
        $scope.Entity = {
            "entity_id": "",
            "entity_name": "",
            "audit_user_id": "",
            "audit_ts": ""
        }
        $scope.showdiv = true;
        $scope.GriedEntity = false;
        if ($scope.class === "commonbtn") {
            $scope.class = "Activebtn";

            $scope.DisplayUpdate = true;
            $scope.DisplayUpdatebtn = false;
        }
        else {
            $scope.class = "commonbtn";
        }
    }
    $scope.btnCencel = function () {
        $scope.showdiv = false;
        $scope.GriedEntity = true;
        if ($scope.class === "Activebtn")
            $scope.class = "commonbtn";
        else
            //$scope.class = "Activebtn";
            $scope.class = "commonbtn";
    }
}
app.controller('EntitiesController', EntitiesController);