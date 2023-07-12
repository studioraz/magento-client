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
exports.QuoteDataTotalSegmentInterfaceToJSON = exports.QuoteDataTotalSegmentInterfaceFromJSONTyped = exports.QuoteDataTotalSegmentInterfaceFromJSON = exports.instanceOfQuoteDataTotalSegmentInterface = void 0;
var runtime_1 = require("../runtime");
var QuoteDataTotalSegmentExtensionInterface_1 = require("./QuoteDataTotalSegmentExtensionInterface");
/**
 * Check if a given object implements the QuoteDataTotalSegmentInterface interface.
 */
function instanceOfQuoteDataTotalSegmentInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "value" in value;
    return isInstance;
}
exports.instanceOfQuoteDataTotalSegmentInterface = instanceOfQuoteDataTotalSegmentInterface;
function QuoteDataTotalSegmentInterfaceFromJSON(json) {
    return QuoteDataTotalSegmentInterfaceFromJSONTyped(json, false);
}
exports.QuoteDataTotalSegmentInterfaceFromJSON = QuoteDataTotalSegmentInterfaceFromJSON;
function QuoteDataTotalSegmentInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': json['code'],
        'title': !(0, runtime_1.exists)(json, 'title') ? undefined : json['title'],
        'value': json['value'],
        'area': !(0, runtime_1.exists)(json, 'area') ? undefined : json['area'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : (0, QuoteDataTotalSegmentExtensionInterface_1.QuoteDataTotalSegmentExtensionInterfaceFromJSON)(json['extension_attributes']),
    };
}
exports.QuoteDataTotalSegmentInterfaceFromJSONTyped = QuoteDataTotalSegmentInterfaceFromJSONTyped;
function QuoteDataTotalSegmentInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'title': value.title,
        'value': value.value,
        'area': value.area,
        'extension_attributes': (0, QuoteDataTotalSegmentExtensionInterface_1.QuoteDataTotalSegmentExtensionInterfaceToJSON)(value.extensionAttributes),
    };
}
exports.QuoteDataTotalSegmentInterfaceToJSON = QuoteDataTotalSegmentInterfaceToJSON;
//# sourceMappingURL=QuoteDataTotalSegmentInterface.js.map