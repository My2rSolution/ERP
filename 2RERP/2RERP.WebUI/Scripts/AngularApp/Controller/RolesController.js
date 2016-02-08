function RoleController($scope, $http) {
    $scope.Role = {
        "role_id": "",
        "role_code": "",
        "role_name": "",
        "is_admin": "",
        "is_system": "",
        "audit_user_id": "",
        "audit_ts": ""
    }
    $scope.Roles = {};

    //------------- YES/NO Dropdown List-----------------
    $scope.RoleIsAdminobj = [];
    $scope.RoleIsAdmin = [
      
          { is_admin: true, name: 'Yes' },
          { is_admin: false, name: 'No' }
    ];
    $scope.RoleIsSystemobj = [];
    $scope.RoleIsSystem = [
       
          { is_system: true, name: 'Yes' },
          { is_system: false, name: 'No' }

    ];

    //------------- End fo YES/NO Dropdown List-----------------

    //.......Shorting.................................//

    $scope.initialmodel = "role_code";
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
    //, params: { 'foobar': new Date().getTime() }
    $scope.InsertRole = function () {
        $scope.Result = {
            "role_id": $scope.Role.role_id,
            "role_code": $scope.Role.role_code,
            "role_name": $scope.Role.role_name,
            "is_admin": $scope.RoleIsAdminobj.is_admin,
            "is_system": $scope.RoleIsSystemobj.is_system,
            "audit_user_id": $scope.Role.audit_user_id,
            "audit_ts": $scope.Role.audit_ts
        }
        $http({ method: "POST", data: $scope.Result, url: "/Api/BasicData/Role" }).
        success(function (data, status, header, config) {
            var a = data;
            if (a != null) {
                $scope.Roles = data;
                $scope.myData = data;
                $scope.Role = {
                    "role_id": "",
                    "role_code": "",
                    "role_name": "",
                    "is_admin": "",
                    "is_system": "",
                    "audit_user_id": "",
                    "audit_ts": ""
                }
                $scope.RoleIsAdminobj = null;
                $scope.RoleIsSystemobj = null;
                $scope.showdiv = false;
                $scope.GriedRole = true;
                $scope.gridclass = "gridStyle";
            }
        });
    }
    //

    // update method for Role
    // , params: { 'foobar': new Date().getTime() }
    $scope.btnRoleUpdate = function () {
        $scope.Result = {
            "role_id": $scope.Role.role_id,
            "role_code": $scope.Role.role_code,
            "role_name": $scope.Role.role_name,
            "is_admin": $scope.RoleIsAdminobj.is_admin,
            "is_system": $scope.RoleIsSystemobj.is_system,
            "audit_user_id": $scope.Role.audit_user_id,
            "audit_ts": $scope.Role.audit_ts
        }
        $http({ method: "PUT", data: $scope.Result, url: "/Api/BasicData/Role" }).
            success(function (data, status, header, config) {
                var a = data;
                if (a != null) {
                    $scope.Roles = data;
                    $scope.myData = data;
                    $scope.Role = {
                        "role_id": "",
                        "role_code": "",
                        "role_name": "",
                        "is_admin": "",
                        "is_system": "",
                        "audit_user_id": "",
                        "audit_ts": ""
                    }
                    $scope.RoleIsAdminobj = null;
                    $scope.RoleIsSystemobj = null;
                    $scope.showdiv = false;
                    $scope.GriedRole = true;
                }

            });
    }
    //

    // Load method for role
    $scope.loading = true;
    $scope.editMode = false;
    $http.get('/Api/BasicData/Role').success(function (data) {

        $scope.Roles = data;
        $scope.loading = false;
    })
    .error(function () {
        $scope.error = "An Error has occured while loading posts!";
        $scope.loading = false;
    });

    //


    //............ Is Adim and Is System Dropdown List..................//

    //$scope.Role = {
    //    "role_id": "",
    //    "role_code": "",
    //    "role_name": "",
    //    "is_admin": "",
    //    "is_system": "",
    //    "audit_user_id": "",
    //    "audit_ts": ""
    //}

    //$scope.Roles = {};
    //var arrCountries = new Array();
    //$http.get('/Api/BasicData/Role').success(function (data) {
    //    $scope.Roles = data;
    //});
    //$scope.Role = $scope.Role[1];

    //
    
    //display add button or update button for Role 
    $scope.DisplayUpdate = true;
    $scope.DisplayUpdatebtn = false;

    //add role edit button on ng-gried dynamically
    $scope.editableInPopup = '<button id="editBtn" type="button" class="btn btn-primary" ng-click="edit($event, row)" >Edit</button> ';

    $scope.editRow = function (row) {
        debugger;
        $scope.Role = row;
        $scope.RoleIsAdminobj = row;
        $scope.RoleIsSystemobj = row;
        $scope.DisplayUpdate = false;
        $scope.DisplayUpdatebtn = true;

        $scope.showdiv = true;
        $scope.GriedRole = false;
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
                $http.get('/Api/BasicData/Role').success(function (largeLoad) {
                    data = largeLoad.filter(function (item) {
                        return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                    });

                });
            } else {

                //data = $scope.Countries;
                //  $scope.setPagingData(data, page, pageSize);
                $http.get('/Api/BasicData/Role').success(function (largeLoad) {
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
    //        { field: 'role_code', displayName: 'Role Code', sortable: true, width: '150px' },
    //        { field: 'role_name', displayName: 'Role Name', sortable: true, width: '150px' },
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
    $scope.GriedRole = true;
    $scope.btnAdd = function () {
        $scope.Role = {
            "role_id": "",
            "role_code": "",
            "role_name": "",
            "is_admin": "",
            "is_system": "",
            "audit_user_id": "",
            "audit_ts": ""
        }
        $scope.RoleIsAdminobj = null;
        $scope.RoleIsSystemobj = null;
        $scope.showdiv = true;
        $scope.GriedRole = false;
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
        $scope.GriedRole = true;
        if ($scope.class === "Activebtn")
            $scope.class = "commonbtn";
        else
            //$scope.class = "Activebtn";
            $scope.class = "commonbtn";
    }
}
app.controller('RoleController', RoleController);