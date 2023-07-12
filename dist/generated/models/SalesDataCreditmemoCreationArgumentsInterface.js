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
exports.SalesDataCreditmemoCreationArgumentsInterfaceToJSON = exports.SalesDataCreditmemoCreationArgumentsInterfaceFromJSONTyped = exports.SalesDataCreditmemoCreationArgumentsInterfaceFromJSON = exports.instanceOfSalesDataCreditmemoCreationArgumentsInterface = void 0;
var runtime_1 = require("../runtime");
var SalesDataCreditmemoCreationArgumentsExtensionInterface_1 = require("./SalesDataCreditmemoCreationArgumentsExtensionInterface");
/**
 * Check if a given object implements the SalesDataCreditmemoCreationArgumentsInterface interface.
 */
function instanceOfSalesDataCreditmemoCreationArgumentsInterface(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfSalesDataCreditmemoCreationArgumentsInterface = instanceOfSalesDataCreditmemoCreationArgumentsInterface;
function SalesDataCreditmemoCreationArgumentsInterfaceFromJSON(json) {
    return SalesDataCreditmemoCreationArgumentsInterfaceFromJSONTyped(json, false);
}
exports.SalesDataCreditmemoCreationArgumentsInterfaceFromJSON = SalesDataCreditmemoCreationArgumentsInterfaceFromJSON;
function SalesDataCreditmemoCreationArgumentsInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'shippingAmount': !(0, runtime_1.exists)(json, 'shipping_amount') ? undefined : json['shipping_amount'],
        'adjustmentPositive': !(0, runtime_1.exists)(json, 'adjustment_positive') ? undefined : json['adjustment_positive'],
        'adjustmentNegative': !(0, runtime_1.exists)(json, 'adjustment_negative') ? undefined : json['adjustment_negative'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : (0, SalesDataCreditmemoCreationArgumentsExtensionInterface_1.SalesDataCreditmemoCreationArgumentsExtensionInterfaceFromJSON)(json['extension_attributes']),
    };
}
exports.SalesDataCreditmemoCreationArgumentsInterfaceFromJSONTyped = SalesDataCreditmemoCreationArgumentsInterfaceFromJSONTyped;
function SalesDataCreditmemoCreationArgumentsInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'shipping_amount': value.shippingAmount,
        'adjustment_positive': value.adjustmentPositive,
        'adjustment_negative': value.adjustmentNegative,
        'extension_attributes': (0, SalesDataCreditmemoCreationArgumentsExtensionInterface_1.SalesDataCreditmemoCreationArgumentsExtensionInterfaceToJSON)(value.extensionAttributes),
    };
}
exports.SalesDataCreditmemoCreationArgumentsInterfaceToJSON = SalesDataCreditmemoCreationArgumentsInterfaceToJSON;
//# sourceMappingURL=SalesDataCreditmemoCreationArgumentsInterface.js.map