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
exports.QuoteDataAddressExtensionInterfaceToJSON = exports.QuoteDataAddressExtensionInterfaceFromJSONTyped = exports.QuoteDataAddressExtensionInterfaceFromJSON = exports.instanceOfQuoteDataAddressExtensionInterface = void 0;
var runtime_1 = require("../runtime");
var SalesRuleDataRuleDiscountInterface_1 = require("./SalesRuleDataRuleDiscountInterface");
/**
 * Check if a given object implements the QuoteDataAddressExtensionInterface interface.
 */
function instanceOfQuoteDataAddressExtensionInterface(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfQuoteDataAddressExtensionInterface = instanceOfQuoteDataAddressExtensionInterface;
function QuoteDataAddressExtensionInterfaceFromJSON(json) {
    return QuoteDataAddressExtensionInterfaceFromJSONTyped(json, false);
}
exports.QuoteDataAddressExtensionInterfaceFromJSON = QuoteDataAddressExtensionInterfaceFromJSON;
function QuoteDataAddressExtensionInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'pickupLocationCode': !(0, runtime_1.exists)(json, 'pickup_location_code') ? undefined : json['pickup_location_code'],
        'discounts': !(0, runtime_1.exists)(json, 'discounts') ? undefined : (json['discounts'].map(SalesRuleDataRuleDiscountInterface_1.SalesRuleDataRuleDiscountInterfaceFromJSON)),
    };
}
exports.QuoteDataAddressExtensionInterfaceFromJSONTyped = QuoteDataAddressExtensionInterfaceFromJSONTyped;
function QuoteDataAddressExtensionInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'pickup_location_code': value.pickupLocationCode,
        'discounts': value.discounts === undefined ? undefined : (value.discounts.map(SalesRuleDataRuleDiscountInterface_1.SalesRuleDataRuleDiscountInterfaceToJSON)),
    };
}
exports.QuoteDataAddressExtensionInterfaceToJSON = QuoteDataAddressExtensionInterfaceToJSON;
//# sourceMappingURL=QuoteDataAddressExtensionInterface.js.map