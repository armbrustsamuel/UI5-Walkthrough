sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/demo/model/formatter",
	"sap/ui/demo/model/filter"
], function (Controller, JSONModel, formatter, filter) {
	"use strict";

	return Controller.extend("sap.ui.demo.controller.InvoiceList", {
		formatter: formatter,
		filter: filter,
		onInit : function () {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},
		
		onFilterInvoices : function(oEvent) {
			
			//Building Filter - calling external method
			var aFilter = filter.filterData(oEvent);
			
			//Filter binding
			var oList = this.getView().byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		}

	});
});