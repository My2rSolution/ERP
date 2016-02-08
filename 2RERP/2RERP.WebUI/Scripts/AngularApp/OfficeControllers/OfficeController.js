function OfficeController($scope, $http) {
    "use strict";
    $scope.Office = null;
    $scope.Office = {
        "office_id": "",
        "office_code": "",
        "office_name": "",
        "nick_name": "",
        "registration_date": "",
        "currency_code": "",
        "po_box": "",
        "address_line_1": "",
        "address_line_2": "",
        "street": "",
        "city": "",
        "state": "",
        "zip_code": "",
        "country": "",
        "phone": "",
        "fax": "",
        "email": "",
        "url": "",
        "registration_number": "",
        "pan_number": "",
        "allow_transaction_posting": "",
        //"parent_office_id": "",
        "audit_user_id": "",
        "audit_ts": "",
        "income_tax_rate": "",
        "transaction_start_date": "",
        "week_start_day": "",
        "primary_sales_tax_is_vat": "",
        "has_state_sales_tax": "",
        //"has_county_sales_tax": "",
        //"logo_file": ""
    }
    $scope.Offices = {};

    //.......Shorting.................................//

    $scope.initialmodel = "office_name";
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

    //------------- YES/NO Dropdown List-----------------
    $scope.AllowTransactionPostingobj = [];
    $scope.AllowTransactionPosting = [

          { allow_transaction_posting: true, name: 'Yes' },
          { allow_transaction_posting: false, name: 'No' }
    ];

    $scope.PrimarySalesTaxIsVatobj = [];
    $scope.PrimarySalesTaxIsVat = [

          { primary_sales_tax_is_vat: true, name: 'Yes' },
          { primary_sales_tax_is_vat: false, name: 'No' }

    ];

    $scope.HasStateSalesTaxobj = [];
    $scope.HasStateSalesTax = [

          { has_state_sales_tax: true, name: 'Yes' },
          { has_state_sales_tax: false, name: 'No' }

    ];

    //$scope.HasCountySalesTaxobj = [];
    //$scope.HasCountySalesTax = [

    //      { has_county_sales_tax: true, name: 'Yes' },
    //      { has_county_sales_tax: false, name: 'No' }

    //];

    //------------- End fo YES/NO Dropdown List-----------------



    // Insert Method for sate
    // , params: { 'foobar': new Date().getTime() }
    debugger;
    $scope.InsertOffice = function () {
        $scope.Result = {
            "office_id": $scope.Office.office_id,
            "office_code": $scope.Office.office_code,
            "office_name": $scope.Office.office_name,
            "nick_name": $scope.Office.nick_name,
            "registration_date": $scope.Office.registration_date,
            "currency_code": $scope.Currency.currency_code,
            "po_box": $scope.Office.po_box,
            "address_line_1": $scope.Office.address_line_1,
            "address_line_2": $scope.Office.address_line_2,
            "street": $scope.Office.street,
            "city": $scope.Office.city,
            "state": $scope.Office.state,
            "zip_code": $scope.Office.zip_code,
            "country": $scope.Office.country,
            "phone": $scope.Office.phone,
            "fax": $scope.Office.fax,
            "email": $scope.Office.email,
            "url": $scope.Office.url,
            "registration_number": $scope.Office.registration_number,
            "pan_number": $scope.Office.pan_number,
            "allow_transaction_posting": $scope.AllowTransactionPostingobj.allow_transaction_posting,
            //"parent_office_id": $scope.Office.parent_office_id,
            "audit_user_id": $scope.Office.audit_user_id,
            "audit_ts": $scope.Office.audit_ts,
            "income_tax_rate": $scope.Office.income_tax_rate,
            "transaction_start_date": $scope.Office.transaction_start_date,
            "week_start_day": $scope.Office.week_start_day,
            "primary_sales_tax_is_vat": $scope.PrimarySalesTaxIsVatobj.primary_sales_tax_is_vat,
            "has_state_sales_tax": $scope.HasStateSalesTaxobj.has_state_sales_tax,
            //"has_county_sales_tax": $scope.HasCountySalesTaxobj.has_county_sales_tax,
            //"logo_file": $scope.Office.logo_file
        }
        // , params: { 'foobar': new Date().getTime() }
        $http({ method: "POST", data: $scope.Result, url: "/Api/OfficeBasicData/Offices" }).
            success(function (data, status, header, config) {
                var a = data;
                if (a != null) {
                    //$scope.Offices = data.states;

                    $scope.Office = {
                        "office_id": "",
                        "office_code": "",
                        "office_name": "",
                        "nick_name": "",
                        "registration_date": "",
                        "currency_code": "",
                        "po_box": "",
                        "address_line_1": "",
                        "address_line_2": "",
                        "street": "",
                        "city": "",
                        "state": "",
                        "zip_code": "",
                        "country": "",
                        "phone": "",
                        "fax": "",
                        "email": "",
                        "url": "",
                        "registration_number": "",
                        "pan_number": "",
                        "allow_transaction_posting": "",
                        //"parent_office_id": "",
                        "audit_user_id": "",
                        "audit_ts": "",
                        "income_tax_rate": "",
                        "transaction_start_date": "",
                        "week_start_day": "",
                        "primary_sales_tax_is_vat": "",
                        "has_state_sales_tax": "",
                        //"has_county_sales_tax": "",
                        //"logo_file": ""
                    }
                    $scope.Currency = {
                        "currency_code": "",
                        "currency_symbol": "",
                        "currency_name": "",
                        "hundredth_name": "",
                        "audit_user_id": "",
                        "audit_ts": ""
                    }
                    $scope.AllowTransactionPostingobj = null;
                    $scope.PrimarySalesTaxIsVatobj = null;
                    $scope.HasStateSalesTaxobj = null;
                    //$scope.HasCountySalesTaxobj = null;
                    $scope.showdiv = false;
                    $scope.GriedOffice = true;
                    $scope.gridclass = "gridStyle";
                    $scope.fetchContent();
                }
            });
    }
    // update method for Office
    // , params: { 'foobar': new Date().getTime() }

    $scope.btnOfficeUpdate = function () {
        //debugger;
        //var x = $scope.Currency.currency_code;
        $scope.Result = {
            "office_id": $scope.Office.office_id,
            "office_code": $scope.Office.office_code,
            "office_name": $scope.Office.office_name,
            "nick_name": $scope.Office.nick_name,
            "registration_date": $scope.Office.registration_date,
            "currency_code": $scope.Currency.currency_code,
            "po_box": $scope.Office.po_box,
            "address_line_1": $scope.Office.address_line_1,
            "address_line_2": $scope.Office.address_line_2,
            "street": $scope.Office.street,
            "city": $scope.Office.city,
            "state": $scope.Office.state,
            "zip_code": $scope.Office.zip_code,
            "country": $scope.Office.country,
            "phone": $scope.Office.phone,
            "fax": $scope.Office.fax,
            "email": $scope.Office.email,
            "url": $scope.Office.url,
            "registration_number": $scope.Office.registration_number,
            "pan_number": $scope.Office.pan_number,
            "allow_transaction_posting": $scope.AllowTransactionPostingobj.allow_transaction_posting,
            //"parent_office_id": $scope.Office.parent_office_id,
            "audit_user_id": $scope.Office.audit_user_id,
            "audit_ts": $scope.Office.audit_ts,
            "income_tax_rate": $scope.Office.income_tax_rate,
            "transaction_start_date": $scope.Office.transaction_start_date,
            "week_start_day": $scope.Office.week_start_day,
            "primary_sales_tax_is_vat": $scope.PrimarySalesTaxIsVatobj.primary_sales_tax_is_vat,
            "has_state_sales_tax": $scope.HasStateSalesTaxobj.has_state_sales_tax,
            //"has_county_sales_tax": $scope.HasCountySalesTaxobj.has_state_sales_tax,
            //"logo_file": $scope.Office.logo_file
        }
        //, params: { 'foobar': new Date().getTime() }
        $http({ method: "PUT", data: $scope.Result, url: "/Api/OfficeBasicData/Offices" }).
            success(function (data, status, header, config) {
                var a = data;
                if (a != null) {
                    //$scope.Offices = data.states;
                    $scope.fetchContent();

                    $scope.Office = {
                        "office_id": "",
                        "office_code": "",
                        "office_name": "",
                        "nick_name": "",
                        "registration_date": "",
                        "currency_code": "",
                        "po_box": "",
                        "address_line_1": "",
                        "address_line_2": "",
                        "street": "",
                        "city": "",
                        "state": "",
                        "zip_code": "",
                        "country": "",
                        "phone": "",
                        "fax": "",
                        "email": "",
                        "url": "",
                        "registration_number": "",
                        "pan_number": "",
                        "allow_transaction_posting": "",
                        //"parent_office_id": "",
                        "audit_user_id": "",
                        "audit_ts": "",
                        "income_tax_rate": "",
                        "transaction_start_date": "",
                        "week_start_day": "",
                        "primary_sales_tax_is_vat": "",
                        "has_state_sales_tax": "",
                        //"has_county_sales_tax": "",
                        //"logo_file": ""
                    }
                    $scope.Currency = {
                        "currency_code": "",
                        "currency_symbol": "",
                        "currency_name": "",
                        "hundredth_name": "",
                        "audit_user_id": "",
                        "audit_ts": ""
                    }
                    $scope.AllowTransactionPostingobj = null;
                    $scope.PrimarySalesTaxIsVatobj = null;
                    $scope.HasStateSalesTaxobj = null;
                    //$scope.HasCountySalesTaxobj = null;
                    $scope.showdiv = false;
                    $scope.GriedOffice = true;
                }
            });
    }

    $scope.loading = true;
    $scope.editMode = false;
    $http.get('/Api/OfficeBasicData/Offices').success(function (data) {

        $scope.Offices = data;
        $scope.loading = false;
    })
    .error(function () {
        $scope.error = "An Error has occured while loading posts!";
        $scope.loading = false;
    });

    //

    $scope.loading = true;
    $scope.editMode = false;
    $scope.fetchContent = function () {
        $http.get('/Api/BasicData/Currency').success(function (data) {
            $scope.Currencies = data;
            $scope.Offices = [];
            angular.forEach(data, function (data, index) {
                angular.forEach(data.offices, function (offices, index) {
                    $scope.Offices.push(offices);
                });
            });
        });
    }
    $scope.fetchContent();

    //............ Currency Dropdown List..................//

    $scope.Currency = {
        "currency_code": "",
        "currency_symbol": "",
        "currency_name": "",
        "hundredth_name": "",
        "audit_user_id": "",
        "audit_ts": ""
    }
    var arrCurrencies = new Array();

    $scope.DisplayUpdate = true;
    $scope.DisplayUpdatebtn = false;

    //add state edit button on ng-gried dynamically

    //$scope.editableInPopup = '<button id="editBtn" type="button" class="btn btn-primary" ng-click="edit($event, row)" >Edit</button> ';

    $scope.editRow = function (row) {
        $scope.Office = row;
        $scope.Currency = row;
        $scope.AllowTransactionPostingobj = row;
        $scope.PrimarySalesTaxIsVatobj = row;
        $scope.HasStateSalesTaxobj = row;
        //$scope.HasCountySalesTaxobj = row;
        $scope.DisplayUpdate = false;
        $scope.DisplayUpdatebtn = true;
        $scope.showdiv = true;
        $scope.GriedOffice = false;
    }

    // ................ Grid..........................//

    $scope.class = "commonbtn";
    $scope.showdiv = false;
    $scope.GriedOffice = true;
    $scope.btnAdd = function () {
        $scope.Office = {
            "office_id": "",
            "office_code": "",
            "office_name": "",
            "nick_name": "",
            "registration_date": "",
            "currency_code": "",
            "po_box": "",
            "address_line_1": "",
            "address_line_2": "",
            "street": "",
            "city": "",
            "state": "",
            "zip_code": "",
            "country": "",
            "phone": "",
            "fax": "",
            "email": "",
            "url": "",
            "registration_number": "",
            "pan_number": "",
            "allow_transaction_posting": "",
            //"parent_office_id": "",
            "audit_user_id": "",
            "audit_ts": "",
            "income_tax_rate": "",
            "transaction_start_date": "",
            "week_start_day": "",
            "primary_sales_tax_is_vat": "",
            "has_state_sales_tax": "",
            //"has_county_sales_tax": "",
            //"logo_file": ""
        }
        $scope.Currency = {
            "currency_code": "",
            "currency_symbol": "",
            "currency_name": "",
            "hundredth_name": "",
            "audit_user_id": "",
            "audit_ts": ""
        }
        $scope.AllowTransactionPostingobj = null;
        $scope.PrimarySalesTaxIsVatobj = null;
        $scope.HasStateSalesTaxobj = null;
        //$scope.HasCountySalesTaxobj = null;
        $scope.showdiv = true;
        $scope.GriedOffice = false;
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
        $scope.GriedOffice = true;
        if ($scope.class === "Activebtn")
            $scope.class = "commonbtn";
        else
            //$scope.class = "Activebtn";
            $scope.class = "commonbtn";
    }
}
app.controller('OfficeController', OfficeController);