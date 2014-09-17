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
            type: 'odata',
            transport: {
                read: {
                    url: function () {
                        return appSettings.dataSettings.partnersReadUrl;
                    },
                    dataType: "json",
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader("X-CSRF-Token", "fetch");
                    },
                    complete: function (xhr) {
                        appSettings.authSettings.token = xhr.getResponseHeader("X-CSRF-Token");
                    }

                },
                create: {
                    url: function () {
                        return appSettings.dataSettings.partnersReadUrl;
                    },
                    dataType: "json",
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader("X-CSRF-Token", appSettings.authSettings.token);
                    },
                }
            },
            sort: {
                field: "CompanyName",
                dir: "asc"
            },
            schema: {
                model: partnerModel
            },
            pageSize: 50,
            serverPaging: true,
            serverSorting: true,
        });

        return {
            partners: partnersDataSource
        }

    }());

    var partnersViewModel = (function () {

        var partnerSelected = function (e) {
            app.mobileApp.navigate(appSettings.viewSettings.partnerView + '?uid=' + e.data.uid);
        };

        return {
            partners: partnersModel.partners,
            partnerSelected: partnerSelected,
        };

    }());

    return partnersViewModel;

}());