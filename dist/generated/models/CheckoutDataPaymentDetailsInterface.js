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
exports.CheckoutDataPaymentDetailsInterfaceToJSON = exports.CheckoutDataPaymentDetailsInterfaceFromJSONTyped = exports.CheckoutDataPaymentDetailsInterfaceFromJSON = exports.instanceOfCheckoutDataPaymentDetailsInterface = void 0;
var runtime_1 = require("../runtime");
var QuoteDataPaymentMethodInterface_1 = require("./QuoteDataPaymentMethodInterface");
var QuoteDataTotalsInterface_1 = require("./QuoteDataTotalsInterface");
/**
 * Check if a given object implements the CheckoutDataPaymentDetailsInterface interface.
 */
function instanceOfCheckoutDataPaymentDetailsInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "paymentMethods" in value;
    isInstance = isInstance && "totals" in value;
    return isInstance;
}
exports.instanceOfCheckoutDataPaymentDetailsInterface = instanceOfCheckoutDataPaymentDetailsInterface;
function CheckoutDataPaymentDetailsInterfaceFromJSON(json) {
    return CheckoutDataPaymentDetailsInterfaceFromJSONTyped(json, false);
}
exports.CheckoutDataPaymentDetailsInterfaceFromJSON = CheckoutDataPaymentDetailsInterfaceFromJSON;
function CheckoutDataPaymentDetailsInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'paymentMethods': (json['payment_methods'].map(QuoteDataPaymentMethodInterface_1.QuoteDataPaymentMethodInterfaceFromJSON)),
        'totals': (0, QuoteDataTotalsInterface_1.QuoteDataTotalsInterfaceFromJSON)(json['totals']),
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}
exports.CheckoutDataPaymentDetailsInterfaceFromJSONTyped = CheckoutDataPaymentDetailsInterfaceFromJSONTyped;
function CheckoutDataPaymentDetailsInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'payment_methods': (value.paymentMethods.map(QuoteDataPaymentMethodInterface_1.QuoteDataPaymentMethodInterfaceToJSON)),
        'totals': (0, QuoteDataTotalsInterface_1.QuoteDataTotalsInterfaceToJSON)(value.totals),
        'extension_attributes': value.extensionAttributes,
    };
}
exports.CheckoutDataPaymentDetailsInterfaceToJSON = CheckoutDataPaymentDetailsInterfaceToJSON;
//# sourceMappingURL=CheckoutDataPaymentDetailsInterface.js.map