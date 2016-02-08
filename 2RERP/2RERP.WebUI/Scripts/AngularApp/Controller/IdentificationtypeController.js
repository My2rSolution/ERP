function IdentificationtypeController($scope, $http) {
    $scope.Identification_type = {
        "identification_type_code": "",
        "identification_type_name": "",
        "can_expire":"",
        "audit_user_id": "",
        "audit_ts": ""
    }
    $scope.Identification_types = {};


    //------------- YES/NO Dropdown List-----------------

    $scope.CanExpireobj = [];
    $scope.CanExpire = [

          { can_expire: true, name: 'Yes' },
          { can_expire: false, name: 'No' }
    ];

    //------------- End fo YES/NO Dropdown List-----------------

    //.......Shorting.................................//

    $scope.initialmodel = "identification_type_code";
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
    $scope.InsertIdentification_type = function () {
        $scope.Result = {
            "identification_type_code": $scope.Identification_type.identification_type_code,
            "identification_type_name": $scope.Identification_type.identification_type_name,
            "can_expire": $scope.CanExpireobj.can_expire,
            "audit_user_id": $scope.Identification_type.audit_user_id,
            "audit_ts": $scope.Identification_type.audit_ts
        }
        //$http({ method: "POST", data: $scope.Identification_type, url: "/Api/BasicData/Identificationtypes" }).
        $http({ method: "POST", data: $scope.Result, url: "/Api/BasicData/Identificationtypes" }).
        success(function (data, status, header, config) {
            var a = data;
            if (a != null) {
                $scope.Identification_types = data;
                $scope.myData = data;
                $scope.Identification_type = {
                    "identification_type_code": "",
                    "identification_type_name": "",
                    "can_expire": "",
                    "audit_user_id": "",
                    "audit_ts": ""
                }
                $scope.CanExpireobj = null;
                $scope.showdiv = false;
                $scope.GriedIdentificationtype = true;
                $scope.gridclass = "gridStyle";
            }
        });
    }

    //

    // update method for Identification_type
    // , params: { 'foobar': new Date().getTime() } 
    $scope.btnIdentification_typeUpdate = function () {
        $scope.Result = {
            "identification_type_code": $scope.Identification_type.identification_type_code,
            "identification_type_name": $scope.Identification_type.identification_type_name,
            "can_expire": $scope.CanExpireobj.can_expire,
            "audit_user_id": $scope.Identification_type.audit_user_id,
            "audit_ts": $scope.Identification_type.audit_ts
        }
        //$http({ method: "PUT", data: $scope.Identification_type, url: "/Api/BasicData/Identificationtypes" }).
        $http({ method: "PUT", data: $scope.Result, url: "/Api/BasicData/Identificationtypes" }).
            success(function (data, status, header, config) {
                var a = data;
                if (a != null) {
                    $scope.Identification_types = data;
                    $scope.myData = data;
                    $scope.Identification_type = {
                        "identification_type_code": "",
                        "identification_type_name": "",
                        "can_expire": "",
                        "audit_user_id": "",
                        "audit_ts": ""
                    }
                    $scope.CanExpireobj = null;
                    $scope.showdiv = false;
                    $scope.GriedIdentificationtype = true;
                }
            });
    }
    
    // Load method for state
    $scope.loading = true;
    $scope.editMode = false;
    $http.get('/Api/BasicData/Identificationtypes').success(function (data) {

        $scope.Identification_types = data;
        $scope.loading = false;
    })
    .error(function () {
        $scope.error = "An Error has occured while loading posts!";
        $scope.loading = false;
    });

    //display add button or update button for Identification_type 
    $scope.DisplayUpdate = true;
    $scope.DisplayUpdatebtn = false;

    //add Identification_type edit button on ng-gried dynamically
    $scope.editableInPopup = '<button id="editBtn" type="button" class="btn btn-primary" ng-click="edit($event, row)" >Edit</button> ';

    $scope.editRow = function (row) {
        $scope.Identification_type = row;
        $scope.CanExpireobj = row;
        $scope.DisplayUpdate = false;
        $scope.DisplayUpdatebtn = true;

        $scope.showdiv = true;
        $scope.GriedIdentificationtype = false;
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
                $http.get('/Api/BasicData/Identification_type').success(function (largeLoad) {
                    data = largeLoad.filter(function (item) {
                        return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                    });
                });
            } else {
                //  data = $scope.Countries;
                //  $scope.setPagingData(data, page, pageSize);
                $http.get('/Api/BasicData/Identification_type').success(function (largeLoad) {
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
    //        { field: 'Identificationtype_code', displayName: 'Identification_type Code', sortable: true, width: '150px' },
    //        { field: 'Identificationtype_name', displayName: 'Identification_type Name', sortable: true, width: '150px' },
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
    $scope.GriedIdentificationtype = true;
    $scope.btnAdd = function () {
        $scope.Identification_type = {
            "identification_type_code": "",
            "identification_type_name": "",
            "can_expire": "",
            "audit_user_id": "",
            "audit_ts": ""
        }
        $scope.CanExpireobj = null;
        $scope.showdiv = true;
        $scope.GriedIdentificationtype = false;
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
        $scope.GriedIdentificationtype = true;
        if ($scope.class === "Activebtn")
            $scope.class = "commonbtn";
        else
            //$scope.class = "Activebtn";
            $scope.class = "commonbtn";
    }




    //// Can Expire True/False

    //$scope.CanExpire = [
    //      { can_expire: true, name: 'Yes' },
    //      { can_expire: false, name: 'No' }
    //];
    //$scope.Identification_type = $scope.CanExpire.can_expire;

    //// End of Can Expire True/False
}
app.controller('IdentificationtypeController', IdentificationtypeController);