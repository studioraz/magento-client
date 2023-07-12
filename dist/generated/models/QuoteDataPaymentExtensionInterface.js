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
exports.QuoteDataPaymentExtensionInterfaceToJSON = exports.QuoteDataPaymentExtensionInterfaceFromJSONTyped = exports.QuoteDataPaymentExtensionInterfaceFromJSON = exports.instanceOfQuoteDataPaymentExtensionInterface = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the QuoteDataPaymentExtensionInterface interface.
 */
function instanceOfQuoteDataPaymentExtensionInterface(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfQuoteDataPaymentExtensionInterface = instanceOfQuoteDataPaymentExtensionInterface;
function QuoteDataPaymentExtensionInterfaceFromJSON(json) {
    return QuoteDataPaymentExtensionInterfaceFromJSONTyped(json, false);
}
exports.QuoteDataPaymentExtensionInterfaceFromJSON = QuoteDataPaymentExtensionInterfaceFromJSON;
function QuoteDataPaymentExtensionInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'agreementIds': !(0, runtime_1.exists)(json, 'agreement_ids') ? undefined : json['agreement_ids'],
    };
}
exports.QuoteDataPaymentExtensionInterfaceFromJSONTyped = QuoteDataPaymentExtensionInterfaceFromJSONTyped;
function QuoteDataPaymentExtensionInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'agreement_ids': value.agreementIds,
    };
}
exports.QuoteDataPaymentExtensionInterfaceToJSON = QuoteDataPaymentExtensionInterfaceToJSON;
//# sourceMappingURL=QuoteDataPaymentExtensionInterface.js.map