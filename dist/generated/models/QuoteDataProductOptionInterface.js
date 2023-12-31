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
exports.QuoteDataProductOptionInterfaceToJSON = exports.QuoteDataProductOptionInterfaceFromJSONTyped = exports.QuoteDataProductOptionInterfaceFromJSON = exports.instanceOfQuoteDataProductOptionInterface = void 0;
var runtime_1 = require("../runtime");
var QuoteDataProductOptionExtensionInterface_1 = require("./QuoteDataProductOptionExtensionInterface");
/**
 * Check if a given object implements the QuoteDataProductOptionInterface interface.
 */
function instanceOfQuoteDataProductOptionInterface(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfQuoteDataProductOptionInterface = instanceOfQuoteDataProductOptionInterface;
function QuoteDataProductOptionInterfaceFromJSON(json) {
    return QuoteDataProductOptionInterfaceFromJSONTyped(json, false);
}
exports.QuoteDataProductOptionInterfaceFromJSON = QuoteDataProductOptionInterfaceFromJSON;
function QuoteDataProductOptionInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : (0, QuoteDataProductOptionExtensionInterface_1.QuoteDataProductOptionExtensionInterfaceFromJSON)(json['extension_attributes']),
    };
}
exports.QuoteDataProductOptionInterfaceFromJSONTyped = QuoteDataProductOptionInterfaceFromJSONTyped;
function QuoteDataProductOptionInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'extension_attributes': (0, QuoteDataProductOptionExtensionInterface_1.QuoteDataProductOptionExtensionInterfaceToJSON)(value.extensionAttributes),
    };
}
exports.QuoteDataProductOptionInterfaceToJSON = QuoteDataProductOptionInterfaceToJSON;
//# sourceMappingURL=QuoteDataProductOptionInterface.js.map