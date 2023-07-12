"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Magento Community
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesDataInvoiceCreationArgumentsInterfaceToJSON = exports.SalesDataInvoiceCreationArgumentsInterfaceFromJSONTyped = exports.SalesDataInvoiceCreationArgumentsInterfaceFromJSON = exports.instanceOfSalesDataInvoiceCreationArgumentsInterface = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the SalesDataInvoiceCreationArgumentsInterface interface.
 */
function instanceOfSalesDataInvoiceCreationArgumentsInterface(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfSalesDataInvoiceCreationArgumentsInterface = instanceOfSalesDataInvoiceCreationArgumentsInterface;
function SalesDataInvoiceCreationArgumentsInterfaceFromJSON(json) {
    return SalesDataInvoiceCreationArgumentsInterfaceFromJSONTyped(json, false);
}
exports.SalesDataInvoiceCreationArgumentsInterfaceFromJSON = SalesDataInvoiceCreationArgumentsInterfaceFromJSON;
function SalesDataInvoiceCreationArgumentsInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}
exports.SalesDataInvoiceCreationArgumentsInterfaceFromJSONTyped = SalesDataInvoiceCreationArgumentsInterfaceFromJSONTyped;
function SalesDataInvoiceCreationArgumentsInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'extension_attributes': value.extensionAttributes,
    };
}
exports.SalesDataInvoiceCreationArgumentsInterfaceToJSON = SalesDataInvoiceCreationArgumentsInterfaceToJSON;
//# sourceMappingURL=SalesDataInvoiceCreationArgumentsInterface.js.map