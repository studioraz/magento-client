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
exports.TaxDataOrderTaxDetailsAppliedTaxInterfaceToJSON = exports.TaxDataOrderTaxDetailsAppliedTaxInterfaceFromJSONTyped = exports.TaxDataOrderTaxDetailsAppliedTaxInterfaceFromJSON = exports.instanceOfTaxDataOrderTaxDetailsAppliedTaxInterface = void 0;
var runtime_1 = require("../runtime");
var TaxDataOrderTaxDetailsAppliedTaxExtensionInterface_1 = require("./TaxDataOrderTaxDetailsAppliedTaxExtensionInterface");
/**
 * Check if a given object implements the TaxDataOrderTaxDetailsAppliedTaxInterface interface.
 */
function instanceOfTaxDataOrderTaxDetailsAppliedTaxInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "baseAmount" in value;
    return isInstance;
}
exports.instanceOfTaxDataOrderTaxDetailsAppliedTaxInterface = instanceOfTaxDataOrderTaxDetailsAppliedTaxInterface;
function TaxDataOrderTaxDetailsAppliedTaxInterfaceFromJSON(json) {
    return TaxDataOrderTaxDetailsAppliedTaxInterfaceFromJSONTyped(json, false);
}
exports.TaxDataOrderTaxDetailsAppliedTaxInterfaceFromJSON = TaxDataOrderTaxDetailsAppliedTaxInterfaceFromJSON;
function TaxDataOrderTaxDetailsAppliedTaxInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'title': !(0, runtime_1.exists)(json, 'title') ? undefined : json['title'],
        'percent': !(0, runtime_1.exists)(json, 'percent') ? undefined : json['percent'],
        'amount': json['amount'],
        'baseAmount': json['base_amount'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : (0, TaxDataOrderTaxDetailsAppliedTaxExtensionInterface_1.TaxDataOrderTaxDetailsAppliedTaxExtensionInterfaceFromJSON)(json['extension_attributes']),
    };
}
exports.TaxDataOrderTaxDetailsAppliedTaxInterfaceFromJSONTyped = TaxDataOrderTaxDetailsAppliedTaxInterfaceFromJSONTyped;
function TaxDataOrderTaxDetailsAppliedTaxInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'title': value.title,
        'percent': value.percent,
        'amount': value.amount,
        'base_amount': value.baseAmount,
        'extension_attributes': (0, TaxDataOrderTaxDetailsAppliedTaxExtensionInterface_1.TaxDataOrderTaxDetailsAppliedTaxExtensionInterfaceToJSON)(value.extensionAttributes),
    };
}
exports.TaxDataOrderTaxDetailsAppliedTaxInterfaceToJSON = TaxDataOrderTaxDetailsAppliedTaxInterfaceToJSON;
//# sourceMappingURL=TaxDataOrderTaxDetailsAppliedTaxInterface.js.map