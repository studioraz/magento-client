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
exports.TaxDataAppliedTaxRateInterfaceToJSON = exports.TaxDataAppliedTaxRateInterfaceFromJSONTyped = exports.TaxDataAppliedTaxRateInterfaceFromJSON = exports.instanceOfTaxDataAppliedTaxRateInterface = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the TaxDataAppliedTaxRateInterface interface.
 */
function instanceOfTaxDataAppliedTaxRateInterface(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfTaxDataAppliedTaxRateInterface = instanceOfTaxDataAppliedTaxRateInterface;
function TaxDataAppliedTaxRateInterfaceFromJSON(json) {
    return TaxDataAppliedTaxRateInterfaceFromJSONTyped(json, false);
}
exports.TaxDataAppliedTaxRateInterfaceFromJSON = TaxDataAppliedTaxRateInterfaceFromJSON;
function TaxDataAppliedTaxRateInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'title': !(0, runtime_1.exists)(json, 'title') ? undefined : json['title'],
        'percent': !(0, runtime_1.exists)(json, 'percent') ? undefined : json['percent'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}
exports.TaxDataAppliedTaxRateInterfaceFromJSONTyped = TaxDataAppliedTaxRateInterfaceFromJSONTyped;
function TaxDataAppliedTaxRateInterfaceToJSON(value) {
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
        'extension_attributes': value.extensionAttributes,
    };
}
exports.TaxDataAppliedTaxRateInterfaceToJSON = TaxDataAppliedTaxRateInterfaceToJSON;
//# sourceMappingURL=TaxDataAppliedTaxRateInterface.js.map