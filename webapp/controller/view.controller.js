sap.ui.define([
    "arvato/cx/scandialog/controller/BaseController",
    "arvato/cx/scandialog/utils/dataWrapper"],
    function (BaseController, dataWrapper) {
        "use strict";

        return BaseController.extend("arvato.cx.scandialog.controller.view", {
            onInit: function () {
            },
            onNavToDataEnter: function () {
                this.getRouter().navTo("dataEnter");
            }
        });
    });
