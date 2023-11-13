sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
], function (Controller, History, UIComponent) {
	"use strict";

	return Controller.extend("arvato.cx.scandialog.controller.BaseController", {
		getRouter: function () {
			return this.getOwnerComponent().getRouter();
		}, 
		onNavBack: function () {
			var oHistory, sPreviousHash;

			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("view", {}, true /*no history*/);
			}
		},
		onNavHome: function () {
			this.getRouter().navTo("view");
		}
	});
});