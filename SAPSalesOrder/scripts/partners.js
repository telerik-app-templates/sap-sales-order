var app = app || {};

app.Partners = (function () {
    'use strict'

    var partnersModel = (function () {

        var partnerModel = {
            id: "BusinessPartnerID",
            fields: {
                Company: { field: 'CompanyName' },
                Email: { field: 'EmailAddress' },
                Phone: { field: 'PhoneNumber' },
                Fax: { field: 'FaxNumber' },
                Web: { field: 'WebAddress' },
                LegalForm: { field: 'LegalForm' },
                Currency: { field: 'CurrencyCode' },
                City: { field: 'City' },
                PostalCode: { field: 'PostalCode' },
                Street: { field: 'Street' },
                Building: { field: 'Building' },
                Country: { field: 'Country' },
            }
        };

        var partnersDataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: function () {
                        return appSettings.dataSettings.partnersReadUrl;
                    },
                    dataType: "json"
                }
            },
            sort: {
                field: "Company",
                dir: "asc"
            },
            schema: {
                model: partnerModel,
                data: function(dta) {
                    var responseArray = JSON.parse(dta);
                    return responseArray.d.results;
                }
            },
            pageSize: 50,
            serverPaging: true,
            serverSorting: true,
            error: function (e) {
                console.log("datasource error");
                console.log(e);
                app.mobileApp.hideLoading();
                $("#sap-long-load-div").show();
                $("#partner-list-wrapper").hide();
            }
        });

        return {
            partners: partnersDataSource
        }

    }());
    
    var partnersViewModel = (function () {
        
        var partnerSelected = function (e) {
            appSettings.sessionSettings.selectedPartner = e.data;
            app.mobileApp.navigate(appSettings.viewSettings.partnerView + '?uid=' + e.data.uid);
        };

        var init = function (e) {

        };
        
        return {
            init: init,
            partners: partnersModel.partners,
            partnerSelected: partnerSelected,
        };

    }());

    return partnersViewModel;

}());