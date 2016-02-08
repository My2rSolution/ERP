function StateController($scope, $http) {
    "use strict";
    $scope.State = null;
    $scope.State = {
        "state_id": "",
        "country_id": "",
        "country_name": "",
        "state_code": "",
        "state_name": "",
        "audit_user_id": "",
        "audit_ts": ""
    }
    $scope.States = {};

    //.......Shorting.................................//

    $scope.initialmodel = "country_name";
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
    $scope.InsertState = function () {

        $scope.Result = {
            "state_id": $scope.State.state_id,
            "country_id": $scope.Country.country_id,
            "country_name": $scope.Country.country_name,
            "state_code": $scope.State.state_code,
            "state_name": $scope.State.state_name,
            "audit_user_id": $scope.State.audit_user_id,
            "audit_ts": $scope.State.audit_ts
        }

        $http({ method: "POST", data: $scope.Result, url: "/Api/BasicData/State", params: { 'foobar': new Date().getTime() } }).
            success(function (data, status, header, config) {
                var a = data;
                if (a != null) {
                    //$scope.States = data.states;


                    $scope.State = {
                        "state_id": "",
                        "country_id": "",
                        "country_name": "",
                        "state_code": "",
                        "state_name": "",
                        "audit_user_id": "",
                        "audit_ts": ""
                    }
                    $scope.Country = {
                        "country_id": "",
                        "country_code": "",
                        "country_name": "",
                        "audit_user_id": "",
                        "audit_ts": ""
                    }
                    $scope.showdiv = false;
                    $scope.GriedState = true;
                    $scope.gridclass = "gridStyle";
                    $scope.fetchContent();
                }
            });
    }

    // update method for State
    // , params: { 'foobar': new Date().getTime() }
    $scope.btnStateUpdate = function () {
        $scope.Result = {
            "state_id": $scope.State.state_id,
            "country_id": $scope.Country.country_id,
            "country_name": $scope.Country.country_name,
            "state_code": $scope.State.state_code,
            "state_name": $scope.State.state_name,
            "audit_user_id": $scope.State.audit_user_id,
            "audit_ts": $scope.State.audit_ts
        }
        $http({ method: "PUT", data: $scope.Result, url: "/Api/BasicData/State", params: { 'foobar': new Date().getTime() } }).
            success(function (data, status, header, config) {
                var a = data;
                if (a != null) {
                    //$scope.States = data.states;
                    $scope.fetchContent();

                    $scope.State = {
                        "state_id": "",
                        "country_id": "",
                        "country_name": "",
                        "state_code": "",
                        "state_name": "",
                        "audit_user_id": "",
                        "audit_ts": ""
                    }
                    $scope.Country = {
                        "country_id": "",
                        "country_code": "",
                        "country_name": "",
                        "audit_user_id": "",
                        "audit_ts": ""
                    }
                    $scope.showdiv = false;
                    $scope.GriedState = true;
                }
            });
    }

    //

    // Load method for state

    //$scope.fetchContent = function () {
    //    $http.get($scope.url).then(function (result) {
    //        $scope.content = result.data;
    //    });
    //}
    $scope.loading = true;
    $scope.editMode = false;
    $scope.fetchContent = function () {
        $http.get('/Api/BasicData/Country').success(function (data) {
            $scope.Countries = data;
            $scope.States = [];
            angular.forEach(data, function (data, index) {
                angular.forEach(data.states, function (states, index) {
                    $scope.States.push(states);
                });
            });
        });
    }
    $scope.fetchContent();

    //$scope.loading = true;
    //$scope.editMode = false;
    //$http.get('/Api/BasicData/Country').success(function (data) {
    //    $scope.Countries = data;
    //    $scope.States = [];
    //    angular.forEach(data, function (data, index) {
    //        angular.forEach(data.states, function (states, index) {
    //            $scope.States.push(states);
    //        });
    //    });
    //    //$.each(data.Countries, function (index, element) {
    //    //    $.each(this.states, function (index, element) {
    //    //        $scope.States.push(element);
    //    //    });
    //    //});
    //    //angular.forEach(data, function (value, key) {
    //    //    $scope.Countries.push(value);
    //    //});

    //    // $scope.loading = false;
    //})
    //    .error(function () {
    //        $scope.error = "An Error has occured while loading posts!";
    //        $scope.loading = false;
    //    });


    //............ Country Dropdown List..................//

    $scope.Country = {
        "country_id": "",
        "country_code": "",
        "country_name": "",
        "audit_user_id": "",
        "audit_ts": ""
    }

    // $scope.Countries = {};
    var arrCountries = new Array();
    //$http.get('/Api/BasicData/Country').success(function (data) {
    //    $scope.Countries = data;
    //});

    //

    //display add button or update button for State

    $scope.DisplayUpdate = true;
    $scope.DisplayUpdatebtn = false;

    //add state edit button on ng-gried dynamically

    //$scope.editableInPopup = '<button id="editBtn" type="button" class="btn btn-primary" ng-click="edit($event, row)" >Edit</button> ';

    $scope.editRow = function (row) {
        $scope.State = row;
        $scope.Country = row;
        $scope.DisplayUpdate = false;
        $scope.DisplayUpdatebtn = true;

        $scope.showdiv = true;
        $scope.GriedState = false;
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
    //            $http.get('/Api/BasicData/State').success(function (largeLoad) {
    //                data = largeLoad.filter(function (item) {
    //                    return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
    //                });

    //            });
    //        } else {

    //            //data = $scope.Countries;
    //            //  $scope.setPagingData(data, page, pageSize);
    //            $http.get('/Api/BasicData/State').success(function (largeLoad) {
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
    //        { field: 'country_id', displayName: 'Country Name', sortable: true, width: '150px' },
    //        { field: 'state_code', displayName: 'State Code', sortable: true, width: '150px' },
    //        { field: 'state_name', displayName: 'State Name', sortable: true, width: '150px' },
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
    $scope.GriedState = true;
    $scope.btnAdd = function () {
        $scope.State = {
            "state_id": "",
            "country_id": "",
            "state_code": "",
            "state_name": "",
            "audit_user_id": "",
            "audit_ts": ""
        }
        $scope.Country = {
            "country_id": "",
            "country_code": "",
            "country_name": "",
            "audit_user_id": "",
            "audit_ts": ""
        }
        $scope.showdiv = true;
        $scope.GriedState = false;
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
        $scope.GriedState = true;
        if ($scope.class === "Activebtn")
            $scope.class = "commonbtn";
        else
            //$scope.class = "Activebtn";
            $scope.class = "commonbtn";
    }
}
app.controller('StateController', StateController);