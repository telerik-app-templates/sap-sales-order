var app = app || {};

app.Partner = (function () {
    'use strict'
    var partnerViewModel = (function () {
        
        var show = function (e) {
            var partnerUid = e.view.params.uid;
            var partner = app.Partners.partners.getByUid(partnerUid);
            appSettings.sessionSettings.selectedPartner = partner;
            kendo.bind(e.view.element, partner, kendo.mobile.ui)
        }

        return {
            show: show
        };

    }());

    return partnerViewModel;

}())
