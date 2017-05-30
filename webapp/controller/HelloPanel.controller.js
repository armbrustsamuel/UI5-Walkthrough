sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";
	return Controller.extend("sap.ui.demo.controller.HelloPanel", {
		onShowHello : function () {
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			MessageToast.show(sMsg);
		},
		
		onOpenDialog : function () {
			//getOwnerComponent is a helper method to call the Component.js
			//helloDialog is available due the addDependent
			//calls the open method available in HelloDialog.js
			//Indicates that this is the view to dialog will be assigned
			this.getOwnerComponent().helloDialog.open(this.getView());
		}
		
		//private methods <<<<<<<-- init with underscore
		// _getDialog : function () {
		// 	if(!this._oDialog) {
		// 		this._oDialog = sap.ui.xmlfragment("sap.ui.demo.view.HelloDialog",this);
		// 		this.getView().addDependent(this._oDialog);
		// 	}
		// 	return this._oDialog;
		// },
		
		//		This implementation went to HelloDialog.js
		// onOpenDialog : function () {
		// 	this._getDialog().open();
		// },
		
		//		This implementation went to HelloDialog.js
        // onCloseDialog : function () {
        //     this._getDialog().close();
        // }
	});
});