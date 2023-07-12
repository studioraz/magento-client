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
exports.QuoteDataTotalSegmentExtensionInterfaceToJSON = exports.QuoteDataTotalSegmentExtensionInterfaceFromJSONTyped = exports.QuoteDataTotalSegmentExtensionInterfaceFromJSON = exports.instanceOfQuoteDataTotalSegmentExtensionInterface = void 0;
var runtime_1 = require("../runtime");
var TaxDataGrandTotalDetailsInterface_1 = require("./TaxDataGrandTotalDetailsInterface");
/**
 * Check if a given object implements the QuoteDataTotalSegmentExtensionInterface interface.
 */
function instanceOfQuoteDataTotalSegmentExtensionInterface(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfQuoteDataTotalSegmentExtensionInterface = instanceOfQuoteDataTotalSegmentExtensionInterface;
function QuoteDataTotalSegmentExtensionInterfaceFromJSON(json) {
    return QuoteDataTotalSegmentExtensionInterfaceFromJSONTyped(json, false);
}
exports.QuoteDataTotalSegmentExtensionInterfaceFromJSON = QuoteDataTotalSegmentExtensionInterfaceFromJSON;
function QuoteDataTotalSegmentExtensionInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'taxGrandtotalDetails': !(0, runtime_1.exists)(json, 'tax_grandtotal_details') ? undefined : (json['tax_grandtotal_details'].map(TaxDataGrandTotalDetailsInterface_1.TaxDataGrandTotalDetailsInterfaceFromJSON)),
    };
}
exports.QuoteDataTotalSegmentExtensionInterfaceFromJSONTyped = QuoteDataTotalSegmentExtensionInterfaceFromJSONTyped;
function QuoteDataTotalSegmentExtensionInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'tax_grandtotal_details': value.taxGrandtotalDetails === undefined ? undefined : (value.taxGrandtotalDetails.map(TaxDataGrandTotalDetailsInterface_1.TaxDataGrandTotalDetailsInterfaceToJSON)),
    };
}
exports.QuoteDataTotalSegmentExtensionInterfaceToJSON = QuoteDataTotalSegmentExtensionInterfaceToJSON;
//# sourceMappingURL=QuoteDataTotalSegmentExtensionInterface.js.map