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
exports.CatalogDataProductLinkAttributeInterfaceToJSON = exports.CatalogDataProductLinkAttributeInterfaceFromJSONTyped = exports.CatalogDataProductLinkAttributeInterfaceFromJSON = exports.instanceOfCatalogDataProductLinkAttributeInterface = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the CatalogDataProductLinkAttributeInterface interface.
 */
function instanceOfCatalogDataProductLinkAttributeInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfCatalogDataProductLinkAttributeInterface = instanceOfCatalogDataProductLinkAttributeInterface;
function CatalogDataProductLinkAttributeInterfaceFromJSON(json) {
    return CatalogDataProductLinkAttributeInterfaceFromJSONTyped(json, false);
}
exports.CatalogDataProductLinkAttributeInterfaceFromJSON = CatalogDataProductLinkAttributeInterfaceFromJSON;
function CatalogDataProductLinkAttributeInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': json['code'],
        'type': json['type'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}
exports.CatalogDataProductLinkAttributeInterfaceFromJSONTyped = CatalogDataProductLinkAttributeInterfaceFromJSONTyped;
function CatalogDataProductLinkAttributeInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'type': value.type,
        'extension_attributes': value.extensionAttributes,
    };
}
exports.CatalogDataProductLinkAttributeInterfaceToJSON = CatalogDataProductLinkAttributeInterfaceToJSON;
//# sourceMappingURL=CatalogDataProductLinkAttributeInterface.js.map