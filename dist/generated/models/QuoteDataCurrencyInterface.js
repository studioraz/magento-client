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
exports.QuoteDataCurrencyInterfaceToJSON = exports.QuoteDataCurrencyInterfaceFromJSONTyped = exports.QuoteDataCurrencyInterfaceFromJSON = exports.instanceOfQuoteDataCurrencyInterface = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the QuoteDataCurrencyInterface interface.
 */
function instanceOfQuoteDataCurrencyInterface(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfQuoteDataCurrencyInterface = instanceOfQuoteDataCurrencyInterface;
function QuoteDataCurrencyInterfaceFromJSON(json) {
    return QuoteDataCurrencyInterfaceFromJSONTyped(json, false);
}
exports.QuoteDataCurrencyInterfaceFromJSON = QuoteDataCurrencyInterfaceFromJSON;
function QuoteDataCurrencyInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'globalCurrencyCode': !(0, runtime_1.exists)(json, 'global_currency_code') ? undefined : json['global_currency_code'],
        'baseCurrencyCode': !(0, runtime_1.exists)(json, 'base_currency_code') ? undefined : json['base_currency_code'],
        'storeCurrencyCode': !(0, runtime_1.exists)(json, 'store_currency_code') ? undefined : json['store_currency_code'],
        'quoteCurrencyCode': !(0, runtime_1.exists)(json, 'quote_currency_code') ? undefined : json['quote_currency_code'],
        'storeToBaseRate': !(0, runtime_1.exists)(json, 'store_to_base_rate') ? undefined : json['store_to_base_rate'],
        'storeToQuoteRate': !(0, runtime_1.exists)(json, 'store_to_quote_rate') ? undefined : json['store_to_quote_rate'],
        'baseToGlobalRate': !(0, runtime_1.exists)(json, 'base_to_global_rate') ? undefined : json['base_to_global_rate'],
        'baseToQuoteRate': !(0, runtime_1.exists)(json, 'base_to_quote_rate') ? undefined : json['base_to_quote_rate'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}
exports.QuoteDataCurrencyInterfaceFromJSONTyped = QuoteDataCurrencyInterfaceFromJSONTyped;
function QuoteDataCurrencyInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'global_currency_code': value.globalCurrencyCode,
        'base_currency_code': value.baseCurrencyCode,
        'store_currency_code': value.storeCurrencyCode,
        'quote_currency_code': value.quoteCurrencyCode,
        'store_to_base_rate': value.storeToBaseRate,
        'store_to_quote_rate': value.storeToQuoteRate,
        'base_to_global_rate': value.baseToGlobalRate,
        'base_to_quote_rate': value.baseToQuoteRate,
        'extension_attributes': value.extensionAttributes,
    };
}
exports.QuoteDataCurrencyInterfaceToJSON = QuoteDataCurrencyInterfaceToJSON;
//# sourceMappingURL=QuoteDataCurrencyInterface.js.map