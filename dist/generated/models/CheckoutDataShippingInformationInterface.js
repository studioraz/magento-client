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
exports.CheckoutDataShippingInformationInterfaceToJSON = exports.CheckoutDataShippingInformationInterfaceFromJSONTyped = exports.CheckoutDataShippingInformationInterfaceFromJSON = exports.instanceOfCheckoutDataShippingInformationInterface = void 0;
var runtime_1 = require("../runtime");
var FrameworkAttributeInterface_1 = require("./FrameworkAttributeInterface");
var QuoteDataAddressInterface_1 = require("./QuoteDataAddressInterface");
/**
 * Check if a given object implements the CheckoutDataShippingInformationInterface interface.
 */
function instanceOfCheckoutDataShippingInformationInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "shippingAddress" in value;
    isInstance = isInstance && "shippingMethodCode" in value;
    isInstance = isInstance && "shippingCarrierCode" in value;
    return isInstance;
}
exports.instanceOfCheckoutDataShippingInformationInterface = instanceOfCheckoutDataShippingInformationInterface;
function CheckoutDataShippingInformationInterfaceFromJSON(json) {
    return CheckoutDataShippingInformationInterfaceFromJSONTyped(json, false);
}
exports.CheckoutDataShippingInformationInterfaceFromJSON = CheckoutDataShippingInformationInterfaceFromJSON;
function CheckoutDataShippingInformationInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'shippingAddress': (0, QuoteDataAddressInterface_1.QuoteDataAddressInterfaceFromJSON)(json['shipping_address']),
        'billingAddress': !(0, runtime_1.exists)(json, 'billing_address') ? undefined : (0, QuoteDataAddressInterface_1.QuoteDataAddressInterfaceFromJSON)(json['billing_address']),
        'shippingMethodCode': json['shipping_method_code'],
        'shippingCarrierCode': json['shipping_carrier_code'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
        'customAttributes': !(0, runtime_1.exists)(json, 'custom_attributes') ? undefined : (json['custom_attributes'].map(FrameworkAttributeInterface_1.FrameworkAttributeInterfaceFromJSON)),
    };
}
exports.CheckoutDataShippingInformationInterfaceFromJSONTyped = CheckoutDataShippingInformationInterfaceFromJSONTyped;
function CheckoutDataShippingInformationInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'shipping_address': (0, QuoteDataAddressInterface_1.QuoteDataAddressInterfaceToJSON)(value.shippingAddress),
        'billing_address': (0, QuoteDataAddressInterface_1.QuoteDataAddressInterfaceToJSON)(value.billingAddress),
        'shipping_method_code': value.shippingMethodCode,
        'shipping_carrier_code': value.shippingCarrierCode,
        'extension_attributes': value.extensionAttributes,
        'custom_attributes': value.customAttributes === undefined ? undefined : (value.customAttributes.map(FrameworkAttributeInterface_1.FrameworkAttributeInterfaceToJSON)),
    };
}
exports.CheckoutDataShippingInformationInterfaceToJSON = CheckoutDataShippingInformationInterfaceToJSON;
//# sourceMappingURL=CheckoutDataShippingInformationInterface.js.map