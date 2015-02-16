var app = app || {};

app.Partner = (function () {
    'use strict'
    var partnerViewModel = (function () {
        
        var show = function (e) {
            var partner = appSettings.sessionSettings.selectedPartner;
            
            kendo.bind(e.view.element, partner, kendo.mobile.ui)
        }

        return {
            show: show
        };

    }());

    return partnerViewModel;

}())
