//"http://origin.kendostatic.com/sap/opu/odata/sap/ZCD204_EPM_DEMO_SRV/BusinessPartners",

var appSettings = {
    authSettings:{
        token : null
    },
    dataSettings:
    {
        partnersReadUrl : "http://origin.kendostatic.com/sap/opu/odata/sap/ZGWSAMPLE_SRV/BusinessPartnerCollection", 
        ordersReadUrl: "http://origin.kendostatic.com/sap/opu/odata/sap/ZGWSAMPLE_SRV/BusinessPartnerCollection('#BusinesPartnerID#')/SalesOrders",
        itemsReadUrl:"http://origin.kendostatic.com/sap/opu/odata/sap/ZGWSAMPLE_SRV/SalesOrderCollection('#SalesOrderID#')/LineItems"
    },
    
    sessionSettings:
    {
        selectedPartner:null,
        selectedOrder:null
    },
    
    viewSettings:
    {
        partnerView: "views/partnerView.html",
        orderView: "views/orderView.html",
        itemsView: "views/itemsView.html"
    }
};