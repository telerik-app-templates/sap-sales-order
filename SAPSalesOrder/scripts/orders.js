var app = app || {};

app.Orders = (function () {

    var ordersModel = (function () {

        var orderModel = {
            id: "SoId",
            fields: {
                SalesOrderID: { field: "SoId", type: "string" },
                NetSum: { field: 'NetAmount', type: 'number' },
                Tax: { field: 'TaxAmount', type: 'number' },
                Currency: { field: 'CurrencyCode' },
                Note: { field: 'Note' },
                TotalSum: { field: 'GrossAmount', type: 'number' },
                Status: { field: 'Status' },
                Customer: { field: 'CustomerName' },
                CreatedAt: { field: 'CreatedAt', type: 'date' },
                ChangedAt: { field: 'ChangedAt', type: 'date' },
                BusinessPartnerID: { field: 'BusinessPartnerID' }
            },
            CreatedAtFormatted: function () {

                return kendo.toString(this.get('CreatedAt'), "MMM dd yy");
            },
        };

        var ordersDataSource = new kendo.data.DataSource({
            type: 'odata',
            transport: {
                read: {
                    url: function () {
                        var businessPartnerID = appSettings.sessionSettings.selectedPartner.id;
                        var readUrl = appSettings.dataSettings.ordersReadUrl.replace("#BusinesPartnerID#", businessPartnerID);
                        console.log(readUrl);
                        return readUrl;
                    },
                    dataType: "json"
                }
            },
            sort: {
                field: "ChangedAt",
                dir: "desc"
            },
            schema: {
                model: orderModel
            },
            change: function (e) {

                if (e.items && e.items.length > 0) {
                    $('#no-orders-span').hide();
                } else {
                    $('#no-orders-span').show();
                }
            },
            pageSize: 50,
            serverPaging: true,
            serverSorting: true,
        });

        return {
            orders: ordersDataSource
        }

    }());


    var ordersViewModel = (function () {

        var orderSelected = function (e) {
            var orderUid = $(e.touch.currentTarget).data("uid");
            appSettings.sessionSettings.selectedOrder = ordersModel.orders.getByUid(orderUid);
            app.mobileApp.navigate(appSettings.viewSettings.orderView + '?uid=' + orderUid);
        };

        var show = function (e) {
            if (appSettings.sessionSettings.selectedPartner) {
                $('#no-orders-span').hide();
                var listView = $("#orders-listview").data("kendoMobileListView");
                if (listView) {
                    listView.setDataSource(ordersModel.orders);
                }
                else {
                    $("#orders-listview").kendoMobileListView({
                        style: "inset",
                        dataSource: ordersModel.orders,
                        template: $("#orderTemplate").text()
                    }).kendoTouch({
                        filter: ">li",
                        tap: orderSelected,
                    });
                }                
            }
        }

        return {
            orderSelected: orderSelected,
            show: show
        };

    }());

    return ordersViewModel;

}());