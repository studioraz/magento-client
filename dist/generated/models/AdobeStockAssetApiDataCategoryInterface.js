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
exports.AdobeStockAssetApiDataCategoryInterfaceToJSON = exports.AdobeStockAssetApiDataCategoryInterfaceFromJSONTyped = exports.AdobeStockAssetApiDataCategoryInterfaceFromJSON = exports.instanceOfAdobeStockAssetApiDataCategoryInterface = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the AdobeStockAssetApiDataCategoryInterface interface.
 */
function instanceOfAdobeStockAssetApiDataCategoryInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "extensionAttributes" in value;
    return isInstance;
}
exports.instanceOfAdobeStockAssetApiDataCategoryInterface = instanceOfAdobeStockAssetApiDataCategoryInterface;
function AdobeStockAssetApiDataCategoryInterfaceFromJSON(json) {
    return AdobeStockAssetApiDataCategoryInterfaceFromJSONTyped(json, false);
}
exports.AdobeStockAssetApiDataCategoryInterfaceFromJSON = AdobeStockAssetApiDataCategoryInterfaceFromJSON;
function AdobeStockAssetApiDataCategoryInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'extensionAttributes': json['extension_attributes'],
    };
}
exports.AdobeStockAssetApiDataCategoryInterfaceFromJSONTyped = AdobeStockAssetApiDataCategoryInterfaceFromJSONTyped;
function AdobeStockAssetApiDataCategoryInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'name': value.name,
        'extension_attributes': value.extensionAttributes,
    };
}
exports.AdobeStockAssetApiDataCategoryInterfaceToJSON = AdobeStockAssetApiDataCategoryInterfaceToJSON;
//# sourceMappingURL=AdobeStockAssetApiDataCategoryInterface.js.map