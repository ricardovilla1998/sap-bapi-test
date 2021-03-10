
import * as FicRFC from "node-rfc";


export function FicEjecutaBapi(){
//demo prg to showcase usage of table and variable parameters of SAP's BAPI while called from nodejs app via SAP/node-rfc nodule
"use strict";
//var FicRFC = './node-rfc';//node-rfc
var abapSystem = {
    user: 'fibarrac',       //sap_user
    passwd: 'franky8o',     //sap_user_pwd
    ashost: '180', //sap.nodomain
    sysnr: '01',            //01
    client: '180'           //800
};
var FicClient = new FicRFC.Client(abapSystem);
var MAX_ROWS = 3;
var SELECTION_RANGE_str = {
		PARAMETER: "FIC_PA_CUENTA_CORREO", //USERNAME
		SIGN:      "I",        // I
		OPTION:    "EQ",        //CP ,
		LOW:       "francisco.ibarra@elnayar.com" //A*
	};	
var SELECTION_RANGE_tab = [SELECTION_RANGE_str];
	
FicClient.connect(function(err) {
    if (err) {
        return console.error('could not connect to server', err);
    }	
    FicClient.invoke('BAPI_USER_GETLIST', {
			MAX_ROWS: MAX_ROWS,
			SELECTION_RANGE: SELECTION_RANGE_tab
        },
        function(err, res) {
            if (err) {
                return console.error('Error invoking BAPI_USER_GETLIST:', err);
            }
		console.log('Result BAPI_USER_GETLIST:', res);
        });	
});
}