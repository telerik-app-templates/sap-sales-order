var app = app || {};

app.Order = (function(){
    'use strict'
    
    var orderViewModel = (function(){
                
        var show = function (e) {
            var order = appSettings.sessionSettings.selectedOrder;

            kendo.bind(e.view.element, order, kendo.mobile.ui)

            $("#order-chart").kendoChart({
                title: {
                    text: "Sales Breakdown"
                },
                series: [{
                    data: [order.NetSum, order.Tax, order.TotalSum]
                }],
                categoryAxis: {
                    categories: [ "Net", "Tax", "Total" ]
                }
            });
        }
		
        return {
				show:show,
              };                       
    }());

    return orderViewModel;
}())