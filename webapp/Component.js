sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/demo/controller/HelloDialog"
], function(UIComponent, JSONModel, HelloDialog) {
	"use strict";
	return UIComponent.extend("sap.ui.demo.Component", {
		metadata : {
			manifest: "json"
			// rootView: "sap.ui.demo.view.App"
		},
		
		init : function() {
			//init function of the parent
			UIComponent.prototype.init.apply(this,arguments);
			
			
			//set data model
			var oData = {
				recipient : {
					name : "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
			
			//set invoice model - remote
			// var oConfig = this.getMetadata().getConfig();
			// var oInvoiceModel = new oDataModel(oConfig.invoiceRemote);
			// oInvoiceModel.setUseBatch(false);
			// this.setModel(oInvoiceModel, "invoice");
			
			var oConfig = this.getMetadata().getConfig();
			var sNamespace = this.getMetadata().getManifestEntry("sap.app").id;
			var oInvoiceModel = new JSONModel(jQuery.sap.getModulePath(sNamespace, oConfig.invoiceLocal));
			this.setModel(oInvoiceModel, "invoice");
			
			//set dialog
			this.helloDialog = new HelloDialog();            
			
			//set i18n model
			// var i18nModel = new ResourceModel({
			// 	bundleName : "sap.ui.demo.i18n.i18n"
			// });
			// this.setModel(i18nModel, "i18n");
		}
	});
});