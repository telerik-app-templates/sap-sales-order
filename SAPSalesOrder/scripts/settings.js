//"http://origin.kendostatic.com/sap/opu/odata/sap/ZCD204_EPM_DEMO_SRV/BusinessPartners",

var appSettings = {
    authSettings:{
        token : null
    },
    dataSettings:
    {
        partnersReadUrl: "http://api.everlive.com/v1/yqPFi0boAHdvqEWg/functions/SAPProxy?uri=https://sapes1.sapdevcenter.com/sap/opu/odata/sap/ZCD204_EPM_DEMO_SRV/BusinessPartners",
        ordersReadUrl: "http://api.everlive.com/v1/yqPFi0boAHdvqEWg/functions/SAPProxy?uri=https://sapes1.sapdevcenter.com/sap/opu/odata/sap/ZCD204_EPM_DEMO_SRV/BusinessPartners('#BusinesPartnerID#')/SalesOrders",
        
        //partnersReadUrl : "http://origin.kendostatic.com/sap/opu/odata/sap/ZGWSAMPLE_SRV/BusinessPartnerCollection", 
        //ordersReadUrl: "http://origin.kendostatic.com/sap/opu/odata/sap/ZGWSAMPLE_SRV/BusinessPartnerCollection('#BusinesPartnerID#')/SalesOrders",
        itemsReadUrl:"http://origin.kendostatic.com/sap/opu/odata/sap/ZGWSAMPLE_SRV/SalesOrderCollection('#SalesOrderID#')/LineItems"
        
        //partnersReadUrl : "https://sapes1.sapdevcenter.com/sap/opu/odata/sap/ZCD204_EPM_DEMO_SRV/BusinessPartners",
        //ordersReadUrl : "https://sapes1.sapdevcenter.com/sap/opu/odata/sap/ZCD204_EPM_DEMO_SRV/BusinessPartners('#BusinesPartnerID#')/SalesOrders",
        //itemsReadUrl: "https://sapes1.sapdevcenter.com/sap/opu/odata/sap/ZCD204_EPM_DEMO_SRV/SalesOrders('#SalesOrderID#')/SalesOrderItems" 
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