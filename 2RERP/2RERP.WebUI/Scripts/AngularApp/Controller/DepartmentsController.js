function DepartmentController($scope, $http) {
    $scope.Department = {
        "department_id": "",
        "department_code": "",
        "department_name": "",
        "audit_user_id": "",
        "audit_ts": ""
    }
    $scope.Departments = {};

    //.......Shorting.................................//

    $scope.initialmodel = "Department_code";
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
    $scope.InsertDept = function () {
        $http({ method: "POST", data: $scope.Department, url: "/Api/BasicData/Department" }).
        success(function (data, status, header, config) {
            var a = data;
            if (a != null) {
                $scope.Departments = data;
                $scope.myData = data;
                $scope.Department = {
                    "department_id": "",
                    "department_code": "",
                    "department_name": "",
                    "audit_user_id": "",
                    "audit_ts": ""
                }
                $scope.showdiv = false;
                $scope.GriedDepartment = true;
                $scope.gridclass = "gridStyle";
            }
        });
    }

    //

    // update method for Department
    // , params: { 'foobar': new Date().getTime() } 
    $scope.btnDepartmentUpdate = function () {
        $http({ method: "PUT", data: $scope.Department, url: "/Api/BasicData/Department" }).
            success(function (data, status, header, config) {
                var a = data;
                if (a != null) {
                    $scope.Departments = data;
                    $scope.myData = data;
                    $scope.Department = {
                        "department_id": "",
                        "department_code": "",
                        "department_name": "",
                        "audit_user_id": "",
                        "audit_ts": ""
                    }
                    $scope.showdiv = false;
                    $scope.GriedDepartment = true;
                }
            });
    }
    //

    // Load method for state
    $scope.loading = true;
    $scope.editMode = false;
    $http.get('/Api/BasicData/Department').success(function (data) {

        $scope.Departments = data;
        $scope.loading = false;
    })
    .error(function () {
        $scope.error = "An Error has occured while loading posts!";
        $scope.loading = false;
    });

    //display add button or update button for Department 
    $scope.DisplayUpdate = true;
    $scope.DisplayUpdatebtn = false;

    //add Department edit button on ng-gried dynamically
    $scope.editableInPopup = '<button id="editBtn" type="button" class="btn btn-primary" ng-click="edit($event, row)" >Edit</button> ';

    $scope.editRow = function (row) {
        $scope.Department = row;
        $scope.DisplayUpdate = false;
        $scope.DisplayUpdatebtn = true;

        $scope.showdiv = true;
        $scope.GriedDepartment = false;
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
                $http.get('/Api/BasicData/Department').success(function (largeLoad) {
                    data = largeLoad.filter(function (item) {
                        return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                    });

                });
            } else {

                //data = $scope.Countries;
                //  $scope.setPagingData(data, page, pageSize);
                $http.get('/Api/BasicData/Department').success(function (largeLoad) {
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
    //        { field: 'Department_code', displayName: 'Department Code', sortable: true, width: '150px' },
    //        { field: 'Department_name', displayName: 'Department Name', sortable: true, width: '150px' },
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
    $scope.GriedDepartment = true;
    $scope.btnAdd = function () {
        $scope.Department = {
            "department_id": "",
            "department_code": "",
            "department_name": "",
            "audit_user_id": "",
            "audit_ts": ""
        }
        $scope.showdiv = true;
        $scope.GriedDepartment = false;
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
        $scope.GriedDepartment = true;
        if ($scope.class === "Activebtn")
            $scope.class = "commonbtn";
        else
            //$scope.class = "Activebtn";
            $scope.class = "commonbtn";
    }
}
app.controller('DepartmentController', DepartmentController);