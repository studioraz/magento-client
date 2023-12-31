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
exports.CheckoutDataTotalsInformationInterfaceToJSON = exports.CheckoutDataTotalsInformationInterfaceFromJSONTyped = exports.CheckoutDataTotalsInformationInterfaceFromJSON = exports.instanceOfCheckoutDataTotalsInformationInterface = void 0;
var runtime_1 = require("../runtime");
var FrameworkAttributeInterface_1 = require("./FrameworkAttributeInterface");
var QuoteDataAddressInterface_1 = require("./QuoteDataAddressInterface");
/**
 * Check if a given object implements the CheckoutDataTotalsInformationInterface interface.
 */
function instanceOfCheckoutDataTotalsInformationInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "address" in value;
    return isInstance;
}
exports.instanceOfCheckoutDataTotalsInformationInterface = instanceOfCheckoutDataTotalsInformationInterface;
function CheckoutDataTotalsInformationInterfaceFromJSON(json) {
    return CheckoutDataTotalsInformationInterfaceFromJSONTyped(json, false);
}
exports.CheckoutDataTotalsInformationInterfaceFromJSON = CheckoutDataTotalsInformationInterfaceFromJSON;
function CheckoutDataTotalsInformationInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': (0, QuoteDataAddressInterface_1.QuoteDataAddressInterfaceFromJSON)(json['address']),
        'shippingMethodCode': !(0, runtime_1.exists)(json, 'shipping_method_code') ? undefined : json['shipping_method_code'],
        'shippingCarrierCode': !(0, runtime_1.exists)(json, 'shipping_carrier_code') ? undefined : json['shipping_carrier_code'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
        'customAttributes': !(0, runtime_1.exists)(json, 'custom_attributes') ? undefined : (json['custom_attributes'].map(FrameworkAttributeInterface_1.FrameworkAttributeInterfaceFromJSON)),
    };
}
exports.CheckoutDataTotalsInformationInterfaceFromJSONTyped = CheckoutDataTotalsInformationInterfaceFromJSONTyped;
function CheckoutDataTotalsInformationInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': (0, QuoteDataAddressInterface_1.QuoteDataAddressInterfaceToJSON)(value.address),
        'shipping_method_code': value.shippingMethodCode,
        'shipping_carrier_code': value.shippingCarrierCode,
        'extension_attributes': value.extensionAttributes,
        'custom_attributes': value.customAttributes === undefined ? undefined : (value.customAttributes.map(FrameworkAttributeInterface_1.FrameworkAttributeInterfaceToJSON)),
    };
}
exports.CheckoutDataTotalsInformationInterfaceToJSON = CheckoutDataTotalsInformationInterfaceToJSON;
//# sourceMappingURL=CheckoutDataTotalsInformationInterface.js.map