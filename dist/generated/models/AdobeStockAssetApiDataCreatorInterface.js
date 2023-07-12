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
exports.AdobeStockAssetApiDataCreatorInterfaceToJSON = exports.AdobeStockAssetApiDataCreatorInterfaceFromJSONTyped = exports.AdobeStockAssetApiDataCreatorInterfaceFromJSON = exports.instanceOfAdobeStockAssetApiDataCreatorInterface = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the AdobeStockAssetApiDataCreatorInterface interface.
 */
function instanceOfAdobeStockAssetApiDataCreatorInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "extensionAttributes" in value;
    return isInstance;
}
exports.instanceOfAdobeStockAssetApiDataCreatorInterface = instanceOfAdobeStockAssetApiDataCreatorInterface;
function AdobeStockAssetApiDataCreatorInterfaceFromJSON(json) {
    return AdobeStockAssetApiDataCreatorInterfaceFromJSONTyped(json, false);
}
exports.AdobeStockAssetApiDataCreatorInterfaceFromJSON = AdobeStockAssetApiDataCreatorInterfaceFromJSON;
function AdobeStockAssetApiDataCreatorInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'extensionAttributes': json['extension_attributes'],
    };
}
exports.AdobeStockAssetApiDataCreatorInterfaceFromJSONTyped = AdobeStockAssetApiDataCreatorInterfaceFromJSONTyped;
function AdobeStockAssetApiDataCreatorInterfaceToJSON(value) {
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
exports.AdobeStockAssetApiDataCreatorInterfaceToJSON = AdobeStockAssetApiDataCreatorInterfaceToJSON;
//# sourceMappingURL=AdobeStockAssetApiDataCreatorInterface.js.map