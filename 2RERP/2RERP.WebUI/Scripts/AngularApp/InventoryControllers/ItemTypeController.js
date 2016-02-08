function ItemTypeController($scope, $http) {
    $scope.ItemType = {
        "item_type_id": "",
        "item_type_code": "",
        "item_type_name": "",
        "audit_user_id": "",
        "audit_ts": ""
    }

    $scope.ItemTypes = {};
    $scope.Insert = function () {
        $http({ method: "POST", data: $scope.ItemType, url: "/Api/InventoryBasicData/ItemType" }).
            success(function (data, status, header, config) {
                var a = data;
                if (a != null) {
                    $scope.loading = true;
                    $scope.ItemTypes = data;
                    $scope.ItemType = {
                        "item_type_id": "",
                        "item_type_code": "",
                        "item_type_name": "",
                        "audit_user_id": "",
                        "audit_ts": ""
                    }
                    $scope.showdiv = false;
                    $scope.GriedItemType = true;
                    $scope.gridclass = "gridStyle";
                }
            });
    }

    // update method for item_type

    $scope.btnItemTypeUpdate = function () {
        $http({ method: "PUT", data: $scope.ItemType, url: "/Api/InventoryBasicData/ItemType" }).
            success(function (data, status, header, config) {
                var a = data;
                if (a != null) {
                    $scope.ItemTypes = data;
                    $scope.ItemType = {
                        "item_type_id": "",
                        "item_type_code": "",
                        "item_type_name": "",
                        "audit_user_id": "",
                        "audit_ts": ""
                    }
                    $scope.showdiv = false;
                    $scope.GriedItemType = true;
                }
            });
    }

    //

    // delete method for item_type

    $scope.btnItemTypeDelete = function () {
        $http({ method: "DELETE", data: $scope.ItemType, url: "/Api/InventoryBasicData/ItemType" }).
            success(function (data, status, header, config) {
                var a = data;
                if (a != null) {
                    $scope.ItemTypes = data;
                    $scope.ItemType = {
                        "item_type_id": "",
                        "item_type_code": "",
                        "item_type_name": "",
                        "audit_user_id": "",
                        "audit_ts": ""
                    }
                    $scope.showdiv = false;
                    $scope.GriedItemType = true;
                }
            });
    }

    //


    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
    $scope.loading = true;
    $scope.editMode = false;

    $http.get('/Api/InventoryBasicData/ItemType').success(function (data) {

        $scope.ItemTypes = data;
        $scope.loading = false;
    })
        .error(function () {
            $scope.error = "An Error has occured while loading posts!";
            $scope.loading = false;
        });


    //display add button or update button for ItemType 
    $scope.DisplayUpdate = true;
    $scope.DisplayUpdatebtn = false;

    //add item_type edit button on ng-gried dynamically
    $scope.editableInPopup = '<button id="editBtn" type="button" class="btn btn-primary" ng-click="edit($event, row)" >Edit</button> ';
    $scope.editRow = function (row) {
        $scope.ItemType = row;
        $scope.DisplayUpdate = false;
        $scope.DisplayUpdatebtn = true;

        $scope.showdiv = true;
        $scope.GriedItemType = false;
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
                $http.get('/Api/InventoryBasicData/ItemType').success(function (largeLoad) {
                    data = largeLoad.filter(function (item) {
                        return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                    });

                });
            } else {
                $http.get('/Api/InventoryBasicData/ItemType').success(function (largeLoad) {
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
    //        { field: 'item_type_code', displayName: 'ItemType Code', sortable: true, width: '150px' },
    //        { field: 'item_type_name', displayName: 'ItemType Name', sortable: true, width: '150px' },
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
    $scope.GriedItemType = true;
    $scope.btnAdd = function () {
        $scope.ItemType = {
            "item_type_id": "",
            "item_type_code": "",
            "item_type_name": "",
            "audit_user_id": "",
            "audit_ts": ""
        }
        $scope.showdiv = true;
        $scope.GriedItemType = false;
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
        $scope.GriedItemType = true;
        if ($scope.class === "Activebtn")
            $scope.class = "commonbtn";
        else
            //$scope.class = "Activebtn";
            $scope.class = "commonbtn";
    }
    ///...........Referesh Grid..............///
    //$scope.update = function () {
    //    $http.get('/Api/InventoryBasicData/ItemType', {
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
app.controller('ItemTypeController', ItemTypeController);