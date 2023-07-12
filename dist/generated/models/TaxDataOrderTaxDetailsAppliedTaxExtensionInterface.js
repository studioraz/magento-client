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
exports.TaxDataOrderTaxDetailsAppliedTaxExtensionInterfaceToJSON = exports.TaxDataOrderTaxDetailsAppliedTaxExtensionInterfaceFromJSONTyped = exports.TaxDataOrderTaxDetailsAppliedTaxExtensionInterfaceFromJSON = exports.instanceOfTaxDataOrderTaxDetailsAppliedTaxExtensionInterface = void 0;
var runtime_1 = require("../runtime");
var TaxDataAppliedTaxRateInterface_1 = require("./TaxDataAppliedTaxRateInterface");
/**
 * Check if a given object implements the TaxDataOrderTaxDetailsAppliedTaxExtensionInterface interface.
 */
function instanceOfTaxDataOrderTaxDetailsAppliedTaxExtensionInterface(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfTaxDataOrderTaxDetailsAppliedTaxExtensionInterface = instanceOfTaxDataOrderTaxDetailsAppliedTaxExtensionInterface;
function TaxDataOrderTaxDetailsAppliedTaxExtensionInterfaceFromJSON(json) {
    return TaxDataOrderTaxDetailsAppliedTaxExtensionInterfaceFromJSONTyped(json, false);
}
exports.TaxDataOrderTaxDetailsAppliedTaxExtensionInterfaceFromJSON = TaxDataOrderTaxDetailsAppliedTaxExtensionInterfaceFromJSON;
function TaxDataOrderTaxDetailsAppliedTaxExtensionInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'rates': !(0, runtime_1.exists)(json, 'rates') ? undefined : (json['rates'].map(TaxDataAppliedTaxRateInterface_1.TaxDataAppliedTaxRateInterfaceFromJSON)),
    };
}
exports.TaxDataOrderTaxDetailsAppliedTaxExtensionInterfaceFromJSONTyped = TaxDataOrderTaxDetailsAppliedTaxExtensionInterfaceFromJSONTyped;
function TaxDataOrderTaxDetailsAppliedTaxExtensionInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'rates': value.rates === undefined ? undefined : (value.rates.map(TaxDataAppliedTaxRateInterface_1.TaxDataAppliedTaxRateInterfaceToJSON)),
    };
}
exports.TaxDataOrderTaxDetailsAppliedTaxExtensionInterfaceToJSON = TaxDataOrderTaxDetailsAppliedTaxExtensionInterfaceToJSON;
//# sourceMappingURL=TaxDataOrderTaxDetailsAppliedTaxExtensionInterface.js.map