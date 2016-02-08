function CompoundUnitController($scope, $http) {
    "use strict";
    $scope.CompoundUnit = null;
    $scope.CompoundUnit = {
        "compound_unit_id": "",
        "base_unit_id": "",
        "base_unit_name": "",
        "value": "",
        "compare_unit_id": "",
        "compare_unit_name": "",
        "audit_user_id": "",
        "audit_ts": ""
    }
    $scope.CompoundUnits = {};

    //.......Shorting.................................//

    $scope.initialmodel = "base_unit_name";
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
    $scope.InsertCompoundUnit = function () {

        $scope.Result = {
            "compound_unit_id": $scope.CompoundUnit.compound_unit_id,
            "base_unit_id": $scope.BaseUnit.unit_id,
            "base_unit_name": $scope.BaseUnit.unit_name,
            "value": $scope.CompoundUnit.value,
            "compare_unit_id": $scope.CompareUnit.unit_id,
            "compare_unit_name": $scope.CompareUnit.unit_name,
            "audit_user_id": $scope.CompoundUnit.audit_user_id,
            "audit_ts": $scope.CompoundUnit.audit_ts
        }

        $http({ method: "POST", data: $scope.Result, url: "/Api/InventoryBasicData/CompoundUnit", params: { 'foobar': new Date().getTime() } }).
            success(function (data, status, header, config) {
                var a = data;
                if (a != null) {
                    //$scope.CompoundUnits = data;
                    //$scope.myData = data;
                    $scope.CompoundUnit = {
                        "compound_unit_id": "",
                        "base_unit_id": "",
                        "base_unit_name": "",
                        "value": "",
                        "compare_unit_id": "",
                        "compare_unit_name": "",
                        "audit_user_id": "",
                        "audit_ts": ""
                    }
                    $scope.BaseUnit = {
                        "unit_id": "",
                        "unit_code": "",
                        "unit_name": "",
                        "audit_user_id": "",
                        "audit_ts": ""
                    }
                    $scope.CompareUnit = {
                        "unit_id": "",
                        "unit_code": "",
                        "unit_name": "",
                        "audit_user_id": "",
                        "audit_ts": ""
                    }
                    $scope.showdiv = false;
                    $scope.GriedCompoundUnit = true;
                    $scope.gridclass = "gridStyle";
                    $scope.fetchContent();
                }
            });
    }

    // update method for CompoundUnit
    // , params: { 'foobar': new Date().getTime() }
    $scope.btnCompoundUnitUpdate = function () {
        $scope.Result = {
            "compound_unit_id": $scope.CompoundUnit.compound_unit_id,
            "base_unit_id": $scope.BaseUnit.unit_id,
            "base_unit_name": $scope.BaseUnit.unit_name,
            "value": $scope.CompoundUnit.value,
            "compare_unit_id": $scope.CompareUnit.unit_id,
            "compare_unit_name": $scope.CompareUnit.unit_name,
            "audit_user_id": $scope.CompoundUnit.audit_user_id,
            "audit_ts": $scope.CompoundUnit.audit_ts
        }
        $http({ method: "PUT", data: $scope.Result, url: "/Api/InventoryBasicData/CompoundUnit", params: { 'foobar': new Date().getTime() } }).
            success(function (data, status, header, config) {
                var a = data;
                if (a != null) {
                    //$scope.CompoundUnits = data;
                    //$scope.myData = data;
                    $scope.fetchContent();
                    $scope.CompoundUnit = {
                        "compound_unit_id": "",
                        "base_unit_id": "",
                        "base_unit_name": "",
                        "value": "",
                        "compare_unit_id": "",
                        "compare_unit_name": "",
                        "audit_user_id": "",
                        "audit_ts": ""
                    }
                    $scope.BaseUnit = {
                        "unit_id": "",
                        "unit_code": "",
                        "unit_name": "",
                        "audit_user_id": "",
                        "audit_ts": ""
                    }
                    $scope.CompareUnit = {
                        "unit_id": "",
                        "unit_code": "",
                        "unit_name": "",
                        "audit_user_id": "",
                        "audit_ts": ""
                    }
                    $scope.showdiv = false;
                    $scope.GriedCompoundUnit = true;
                }
            });
    }

    //

    // Load method for state

    //$scope.loading = true;
    //$scope.editMode = false;
    //$http.get('/Api/InventoryBasicData/CompoundUnit').success(function (data) {
    //    $scope.CompoundUnits = data;
    //    $scope.loading = false;
    //})
    //    .error(function () {
    //        $scope.error = "An Error has occured while loading posts!";
    //        $scope.loading = false;
    //    });
    //debugger;
    $scope.loading = true;
    $scope.editMode = false;
    $scope.fetchContent = function () {
        $http.get('/Api/InventoryBasicData/Unit').success(function (data) {
            $scope.Units = data;
            $scope.CompoundUnits = [];
            angular.forEach(data, function (data, index) {
                angular.forEach(data.compoundunits, function (compoundunits, index) {
                    $scope.CompoundUnits.push(compoundunits);
                });
            });
        });
    }
    $scope.fetchContent();


    //............ Unit Dropdown List..................//

    $scope.BaseUnit = {
        "unit_id": "",
        "unit_code": "",
        "unit_name": "",
        "audit_user_id": "",
        "audit_ts": ""
    }

    //$scope.BaseUnits = {};
    var arrBaseUnits = new Array();
    //$http.get('/Api/InventoryBasicData/Unit').success(function (data) {
        //$scope.BaseUnits = data;
    //});

    $scope.CompareUnit = {
        "unit_id": "",
        "unit_code": "",
        "unit_name": "",
        "audit_user_id": "",
        "audit_ts": ""
    }

    //$scope.CompareUnits = {};
    var arrCompareUnits = new Array();
    //$http.get('/Api/InventoryBasicData/Unit').success(function (data) {
        //$scope.CompareUnits = data;
    //});

    //

    //display add button or update button for CompoundUnit

    $scope.DisplayUpdate = true;
    $scope.DisplayUpdatebtn = false;

    //add state edit button on ng-gried dynamically

    //$scope.editableInPopup = '<button id="editBtn" type="button" class="btn btn-primary" ng-click="edit($event, row)" >Edit</button> ';

    $scope.editRow = function (row) {
        $scope.CompoundUnit = row;
        //$scope.Unit = row;
        $scope.BaseUnit = row;
        $scope.CompareUnit = row;
        $scope.DisplayUpdate = false;
        $scope.DisplayUpdatebtn = true;

        $scope.showdiv = true;
        $scope.GriedCompoundUnit = false;
    }

    // ................ Ng- Grid..........................//

    //$scope.gridclass = "gridStyle";

    //$scope.filterOptions = {
    //    filterText: "",
    //    useExternalFilter: true
    //};
    //// $scope.mySelections = [];
    //$scope.totalServerItems = 0;
    //$scope.pagingOptions = {
    //    pageSizes: [10, 15, 30],
    //    pageSize: 10,
    //    currentPage: 1
    //};
    //$scope.setPagingData = function (data, page, pageSize) {

    //    var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
    //    $scope.myData = pagedData;
    //    $scope.totalServerItems = data.length;
    //    if (!$scope.$$phase) {
    //        $scope.$apply();
    //    }
    //};
    //$scope.getPagedDataAsync = function (pageSize, page, searchText) {
    //    setTimeout(function () {

    //        var data;
    //        if (searchText) {
    //            var ft = searchText.toLowerCase();
    //            $http.get('/Api/InventoryBasicData/CompoundUnit').success(function (largeLoad) {
    //                data = largeLoad.filter(function (item) {
    //                    return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
    //                });

    //            });
    //        } else {

    //            //data = $scope.Units;
    //            //  $scope.setPagingData(data, page, pageSize);
    //            $http.get('/Api/InventoryBasicData/CompoundUnit').success(function (largeLoad) {
    //                $scope.setPagingData(largeLoad, page, pageSize);
    //            });

    //        }
    //    }, 100);
    //};

    //$scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);
    //$scope.$watch('pagingOptions', function (newVal, oldVal) {

    //    if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
    //        $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
    //    }
    //}, true);
    //$scope.$watch('filterOptions', function (newVal, oldVal) {

    //    if (newVal !== oldVal) {
    //        $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
    //    }
    //}, true);

    //$scope.gridOptions = {

    //    data: 'myData',
    //    enablePaging: true,
    //    // selectedItems: $scope.mySelections,

    //    showFooter: true,
    //    totalServerItems: 'totalServerItems',
    //    pagingOptions: $scope.pagingOptions,
    //    filterOptions: $scope.filterOptions,
    //    columnDefs: [
    //        { field: 'country_id', displayName: 'Unit Name', sortable: true, width: '150px' },
    //        { field: 'state_code', displayName: 'CompoundUnit Code', sortable: true, width: '150px' },
    //        { field: 'state_name', displayName: 'CompoundUnit Name', sortable: true, width: '150px' },
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
    $scope.GriedCompoundUnit = true;
    $scope.btnAdd = function () {
        $scope.CompoundUnit = {
            "compound_unit_id": "",
            "base_unit_id": "",
            "base_unit_name": "",
            "value": "",
            "compare_unit_id": "",
            "compare_unit_name": "",
            "audit_user_id": "",
            "audit_ts": ""
        }
        $scope.BaseUnit = {
            "unit_id": "",
            "unit_code": "",
            "unit_name": "",
            "audit_user_id": "",
            "audit_ts": ""
        }
        $scope.CompareUnit = {
            "unit_id": "",
            "unit_code": "",
            "unit_name": "",
            "audit_user_id": "",
            "audit_ts": ""
        }
        $scope.showdiv = true;
        $scope.GriedCompoundUnit = false;
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
        $scope.GriedCompoundUnit = true;
        if ($scope.class === "Activebtn")
            $scope.class = "commonbtn";
        else
            //$scope.class = "Activebtn";
            $scope.class = "commonbtn";
    }
}
app.controller('CompoundUnitController', CompoundUnitController);