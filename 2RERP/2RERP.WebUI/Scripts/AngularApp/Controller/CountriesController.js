function CountryController($scope, $http) {
    $scope.Country = {
        "country_id": "",
        "country_code": "",
        "country_name": "",
        "audit_user_id": "",
        "audit_ts": ""
    }

    $scope.Countries = {};
    $scope.Insert = function() {
        $http({ method: "POST", data: $scope.Country, url: "/Api/BasicData/Country" }).
            success(function(data, status, header, config) {
                var a = data;
                if (a != null) {
                    $scope.loading = true;
                    $scope.Countries = data;
                    $scope.Country = {
                        "country_id": "",
                        "country_code": "",
                        "country_name": "",
                        "audit_user_id": "",
                        "audit_ts": ""
                    }
                    $scope.showdiv = false;
                    $scope.GriedCountry = true;
                    $scope.gridclass = "gridStyle";
                }
               
            });
    }
    // update method for country
    $scope.btnCountryUpdate = function() {
        $http({ method: "PUT", data: $scope.Country, url: "/Api/BasicData/Country"}).
            success(function(data, status, header, config) {
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
                    $scope.showdiv = false;
                    $scope.GriedCountry = true;
                }
            });
    }
    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
    $scope.loading = true;
    $scope.editMode = false;

    $http.get('/Api/BasicData/Country').success(function(data) {

            $scope.Countries = data;
            $scope.loading = false;
        })
        .error(function() {
            $scope.error = "An Error has occured while loading posts!";
            $scope.loading = false;
        });


//display add button or update button for Country 
    $scope.DisplayUpdate = true;
    $scope.DisplayUpdatebtn = false;

    //add country edit button on ng-gried dynamically
    $scope.editableInPopup = '<button id="editBtn" type="button" class="btn btn-primary" ng-click="edit($event, row)" >Edit</button> ';

    $scope.editRow = function (row) {
        $scope.Country = row;
        $scope.DisplayUpdate = false;
        $scope.DisplayUpdatebtn = true;

        $scope.showdiv = true;
        $scope.GriedCountry = false;
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
    $scope.setPagingData = function(data, page, pageSize) {
       
        var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
        $scope.myData = pagedData;
        $scope.totalServerItems = data.length;
        if (!$scope.$$phase) {
            $scope.$apply();
        }
    };
    $scope.getPagedDataAsync = function(pageSize, page, searchText) {
        setTimeout(function() {
           
            var data;
            if (searchText) {
                var ft = searchText.toLowerCase();
                $http.get('/Api/BasicData/Country').success(function(largeLoad) {
                    data = largeLoad.filter(function(item) {
                        return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                    });

                });
            } else {

                $http.get('/Api/BasicData/Country').success(function(largeLoad) {
                    $scope.setPagingData(largeLoad, page, pageSize);
                });

            }
        }, 100);
    };

    $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);
    $scope.$watch('pagingOptions', function(newVal, oldVal) {

        if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
            $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }
    }, true);
    $scope.$watch('filterOptions', function(newVal, oldVal) {

        if (newVal !== oldVal) {
            $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }
    }, true);
  
    $scope.gridOptions = {
      
        data: 'myData',
        enablePaging: true,
        // selectedItems: $scope.mySelections,
        
        showFooter: true,
        totalServerItems: 'totalServerItems',
        pagingOptions: $scope.pagingOptions,
        filterOptions: $scope.filterOptions,
        columnDefs: [
            { field: 'country_code', displayName: 'Country Code', sortable: true, width: '150px' },
            { field: 'country_name', displayName: 'Country Name', sortable: true, width: '150px' },
            { displayName: 'Action', cellTemplate: $scope.editableInPopup }
        ]
    };
    $scope.class = "commonbtn";
    $scope.showdiv = false;
    $scope.GriedCountry = true;
    $scope.btnAdd = function () {
        $scope.Country = {
            "country_id": "",
            "country_code": "",
            "country_name": "",
            "audit_user_id": "",
            "audit_ts": ""
        }
        $scope.showdiv = true;
        $scope.GriedCountry = false;
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
        $scope.GriedCountry = true;
        if ($scope.class === "Activebtn")
            $scope.class = "commonbtn";
        else
            //$scope.class = "Activebtn";
        $scope.class = "commonbtn";
    }

}
app.controller('CountryController', CountryController);