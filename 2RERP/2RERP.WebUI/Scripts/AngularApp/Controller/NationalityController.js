function NationalityController($scope, $http) {
    $scope.Nationality = {
        "nationality_code": "",
        "nationality_name": "",
        "audit_user_id": "",
        "audit_ts": ""
    }
    $scope.Nationalities = {};

    //.......Shorting.................................//

    $scope.initialmodel = "nationality_code";
    $scope.reverse = false;
    $scope.GetShort = function (column) {
        $scope.reverse = ($scope.initialmodel == column) ? !$scope.reverse : false;
        $scope.initialmodel = column;
    }
    $scope.GetSortClass = function (column) {
        if ($scope.initialmodel == column) {
            return $scope.reverse ? 'glyphicon-chevron-down' : 'glyphicon-chevron-up'
        }
        return '';
    }
    //.......................End Shorting ............................//

    // Insert Method for sate
    // , params: { 'foobar': new Date().getTime() }
    $scope.InsertNationality = function () {
        $http({ method: "POST", data: $scope.Nationality, url: "/Api/BasicData/Nationality" }).
        success(function (data, status, header, config) {
            var a = data;
            if (a != null) {
                $scope.Nationalities = data;
                $scope.myData = data;
                $scope.Nationality = {
                    "nationality_code": "",
                    "nationality_name": "",
                    "audit_user_id": "",
                    "audit_ts": ""
                }
                $scope.showdiv = false;
                $scope.GriedNationality = true;
                $scope.gridclass = "gridStyle";
            }
        });
    }

    //

    // update method for Nationality
    // , params: { 'foobar': new Date().getTime() } 
    $scope.btnNationalityUpdate = function () {
        $http({ method: "PUT", data: $scope.Nationality, url: "/Api/BasicData/Nationality" }).
            success(function (data, status, header, config) {
                var a = data;
                if (a != null) {
                    $scope.Nationalities = data;
                    $scope.myData = data;
                    $scope.Nationality = {
                        "nationality_code": "",
                        "nationality_name": "",
                        "audit_user_id": "",
                        "audit_ts": ""
                    }
                    $scope.showdiv = false;
                    $scope.GriedNationality = true;
                }
            });
    }

    //


    // Unique Checking
    //app.directive('requiredUniquevalue', function ($http) {
    //    debugger;
    //    return {
    //        require: 'ngModel',
    //        link: function (scope, element, attribute, ctrl) {
    //            scope.$watch(attribute.ngModel, function () {
    //                $http({
    //                    method: 'POST',
    //                    url: '/Api/BasicData/UniqueCheck' + attribute.requiredUniquevalue,
    //                    data: { 'nationality_code': attribute.requiredUniquevalue }
    //                }).success(function (res) {
    //                    if (res) {
    //                        ctrl.$setValidity('requiredUniquevalue', false);
    //                    } else {
    //                        ctrl.$setValidity('requiredUniquevalue', true);
    //                    }
    //                }).error(function (err) {
    //                    ctrl.$setValidity('requiredUniquevalue', false);
    //                });
    //            });
    //        }
    //    }
    //});
    //
    // Load method for state
    $scope.loading = true;
    $scope.editMode = false;
    $http.get('/Api/BasicData/Nationality').success(function (data) {

        $scope.Nationalities = data;
        $scope.loading = false;
    })
    .error(function () {
        $scope.error = "An Error has occured while loading posts!";
        $scope.loading = false;
    });

    //display add button or update button for Nationality 
    $scope.DisplayUpdate = true;
    $scope.DisplayUpdatebtn = false;

    //add Nationality edit button on ng-gried dynamically
    $scope.editableInPopup = '<button id="editBtn" type="button" class="btn btn-primary" ng-click="edit($event, row)" >Edit</button> ';

    $scope.editRow = function (row) {
        $scope.Nationality = row;
        $scope.DisplayUpdate = false;
        $scope.DisplayUpdatebtn = true;

        $scope.showdiv = true;
        $scope.GriedNationality = false;
    }

    //

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
                $http.get('/Api/BasicData/Nationality').success(function (largeLoad) {
                    data = largeLoad.filter(function (item) {
                        return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                    });

                });
            } else {

                //data = $scope.Countries;
                //  $scope.setPagingData(data, page, pageSize);
                $http.get('/Api/BasicData/Nationality').success(function (largeLoad) {
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
    //        //{ field: 'country_id', displayName: 'Country Name', sortable: true, width: '150px' },
    //        { field: 'Nationality_code', displayName: 'Nationality Code', sortable: true, width: '150px' },
    //        { field: 'Nationality_name', displayName: 'Nationality Name', sortable: true, width: '150px' },
    //        { field: 'is_admin', displayName: 'Is Admin', sortable: true, width: '150px', cellTemplate: '<div>{{row.getProperty(col.field) | true_false}}</div>' },
    //        { field: 'is_system', displayName: 'Is System', sortable: true, width: '150px', cellTemplate: '<div>{{row.getProperty(col.field) | true_false}}</div>' },
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
    $scope.GriedNationality = true;
    $scope.btnAdd = function () {
        $scope.Nationality = {
            "nationality_code": "",
            "nationality_name": "",
            "audit_user_id": "",
            "audit_ts": ""
        }
        $scope.showdiv = true;
        $scope.GriedNationality = false;
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
        $scope.GriedNationality = true;
        if ($scope.class === "Activebtn")
            $scope.class = "commonbtn";
        else
            //$scope.class = "Activebtn";
            $scope.class = "commonbtn";
    }

}
app.controller('NationalityController', NationalityController);