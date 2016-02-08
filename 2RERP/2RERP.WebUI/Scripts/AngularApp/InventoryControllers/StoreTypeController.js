function StoreTypeController($scope, $http) {
    $scope.StoreType = {
        "store_type_id": "",
        "store_type_code": "",
        "store_type_name": "",
        "audit_user_id": "",
        "audit_ts": ""
    }

    $scope.StoreTypes = {};
    $scope.Insert = function () {
        $http({ method: "POST", data: $scope.StoreType, url: "/Api/InventoryBasicData/StoreType" }).
            success(function (data, status, header, config) {
                var a = data;
                if (a != null) {
                    $scope.loading = true;
                    $scope.StoreTypes = data;
                    $scope.StoreType = {
                        "store_type_id": "",
                        "store_type_code": "",
                        "store_type_name": "",
                        "audit_user_id": "",
                        "audit_ts": ""
                    }
                    $scope.showdiv = false;
                    $scope.GriedStoreType = true;
                    $scope.gridclass = "gridStyle";
                }
            });
    }

    // update method for store_type
    $scope.btnStoreTypeUpdate = function () {
        $http({ method: "PUT", data: $scope.StoreType, url: "/Api/InventoryBasicData/StoreType" }).
            success(function (data, status, header, config) {
                var a = data;
                if (a != null) {
                    $scope.StoreTypes = data;
                    $scope.StoreType = {
                        "store_type_id": "",
                        "store_type_code": "",
                        "store_type_name": "",
                        "audit_user_id": "",
                        "audit_ts": ""
                    }
                    $scope.showdiv = false;
                    $scope.GriedStoreType = true;
                }
            });
    }
    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
    $scope.loading = true;
    $scope.editMode = false;

    $http.get('/Api/InventoryBasicData/StoreType').success(function (data) {

        $scope.StoreTypes = data;
        $scope.loading = false;
    })
        .error(function () {
            $scope.error = "An Error has occured while loading posts!";
            $scope.loading = false;
        });


    //display add button or update button for StoreType 
    $scope.DisplayUpdate = true;
    $scope.DisplayUpdatebtn = false;

    //add store_type edit button on ng-gried dynamically
    $scope.editableInPopup = '<button id="editBtn" type="button" class="btn btn-primary" ng-click="edit($event, row)" >Edit</button> ';
    $scope.editRow = function (row) {
        $scope.StoreType = row;
        $scope.DisplayUpdate = false;
        $scope.DisplayUpdatebtn = true;

        $scope.showdiv = true;
        $scope.GriedStoreType = false;
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
                $http.get('/Api/InventoryBasicData/StoreType').success(function (largeLoad) {
                    data = largeLoad.filter(function (item) {
                        return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                    });

                });
            } else {
                $http.get('/Api/InventoryBasicData/StoreType').success(function (largeLoad) {
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

    //$scope.gridOptions = {

    //    data: 'myData',
    //    enablePaging: true,
    //    // selectedItems: $scope.mySelections,

    //    showFooter: true,
    //    totalServerItems: 'totalServerItems',
    //    pagingOptions: $scope.pagingOptions,
    //    filterOptions: $scope.filterOptions,
    //    columnDefs: [
    //        { field: 'store_type_code', displayName: 'StoreType Code', sortable: true, width: '150px' },
    //        { field: 'store_type_name', displayName: 'StoreType Name', sortable: true, width: '150px' },
    //        { displayName: 'Action', cellTemplate: $scope.editableInPopup }
    //    ]

    //    //columnDefs: [{field:'name', displayName:'Name'}, 
    //    //            {field:'age', displayName:'Age',editableCellTemplate:self.editableCellTempate ,enableCellEdit:true},
    //    //            {displayName:'Pop up',cellTemplate:$scope.editableInPopup}]};
    //    //  "audit_user_id": "",
    //    //  "audit_ts": ""
    //};
    $scope.class = "commonbtn";
    $scope.showdiv = false;
    $scope.GriedStoreType = true;
    $scope.btnAdd = function () {
        $scope.StoreType = {
            "store_type_id": "",
            "store_type_code": "",
            "store_type_name": "",
            "audit_user_id": "",
            "audit_ts": ""
        }
        $scope.showdiv = true;
        $scope.GriedStoreType = false;
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
        $scope.GriedStoreType = true;
        if ($scope.class === "Activebtn")
            $scope.class = "commonbtn";
        else
            //$scope.class = "Activebtn";
            $scope.class = "commonbtn";
    }
    ///...........Referesh Grid..............///
    //$scope.update = function () {
    //    $http.get('/Api/InventoryBasicData/StoreType', {
    //        params: { filter: $scope.filterOptions.filterText }
    //    })
    //        .then(function(result) {
    //            $scope.addresses = result.data;
    //            $scope.gridOptions.data = 'addressData';
    //            alert(JSON.stringify(result));
    //        });
    //    $scope.$apply();
    //........... End Grid Referesh Code.................................//

}
app.controller('StoreTypeController', StoreTypeController);