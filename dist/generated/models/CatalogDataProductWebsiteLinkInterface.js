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
exports.CatalogDataProductWebsiteLinkInterfaceToJSON = exports.CatalogDataProductWebsiteLinkInterfaceFromJSONTyped = exports.CatalogDataProductWebsiteLinkInterfaceFromJSON = exports.instanceOfCatalogDataProductWebsiteLinkInterface = void 0;
/**
 * Check if a given object implements the CatalogDataProductWebsiteLinkInterface interface.
 */
function instanceOfCatalogDataProductWebsiteLinkInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "sku" in value;
    isInstance = isInstance && "websiteId" in value;
    return isInstance;
}
exports.instanceOfCatalogDataProductWebsiteLinkInterface = instanceOfCatalogDataProductWebsiteLinkInterface;
function CatalogDataProductWebsiteLinkInterfaceFromJSON(json) {
    return CatalogDataProductWebsiteLinkInterfaceFromJSONTyped(json, false);
}
exports.CatalogDataProductWebsiteLinkInterfaceFromJSON = CatalogDataProductWebsiteLinkInterfaceFromJSON;
function CatalogDataProductWebsiteLinkInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'sku': json['sku'],
        'websiteId': json['website_id'],
    };
}
exports.CatalogDataProductWebsiteLinkInterfaceFromJSONTyped = CatalogDataProductWebsiteLinkInterfaceFromJSONTyped;
function CatalogDataProductWebsiteLinkInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'sku': value.sku,
        'website_id': value.websiteId,
    };
}
exports.CatalogDataProductWebsiteLinkInterfaceToJSON = CatalogDataProductWebsiteLinkInterfaceToJSON;
//# sourceMappingURL=CatalogDataProductWebsiteLinkInterface.js.map