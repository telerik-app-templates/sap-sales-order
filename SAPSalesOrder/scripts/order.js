var app = app || {};

app.Order = (function(){
    'use strict'
    
    var orderViewModel = (function(){
                
        var show = function (e) {
            var order = appSettings.sessionSettings.selectedOrder;

            console.log(order);
            
            if (order.Tax == 0) {
                order.Tax = (order.TotalSum - order.NetSum).toFixed(2);
            }
            
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