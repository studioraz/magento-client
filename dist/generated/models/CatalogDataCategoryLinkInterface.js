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
exports.CatalogDataCategoryLinkInterfaceToJSON = exports.CatalogDataCategoryLinkInterfaceFromJSONTyped = exports.CatalogDataCategoryLinkInterfaceFromJSON = exports.instanceOfCatalogDataCategoryLinkInterface = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the CatalogDataCategoryLinkInterface interface.
 */
function instanceOfCatalogDataCategoryLinkInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "categoryId" in value;
    return isInstance;
}
exports.instanceOfCatalogDataCategoryLinkInterface = instanceOfCatalogDataCategoryLinkInterface;
function CatalogDataCategoryLinkInterfaceFromJSON(json) {
    return CatalogDataCategoryLinkInterfaceFromJSONTyped(json, false);
}
exports.CatalogDataCategoryLinkInterfaceFromJSON = CatalogDataCategoryLinkInterfaceFromJSON;
function CatalogDataCategoryLinkInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'position': !(0, runtime_1.exists)(json, 'position') ? undefined : json['position'],
        'categoryId': json['category_id'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}
exports.CatalogDataCategoryLinkInterfaceFromJSONTyped = CatalogDataCategoryLinkInterfaceFromJSONTyped;
function CatalogDataCategoryLinkInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'position': value.position,
        'category_id': value.categoryId,
        'extension_attributes': value.extensionAttributes,
    };
}
exports.CatalogDataCategoryLinkInterfaceToJSON = CatalogDataCategoryLinkInterfaceToJSON;
//# sourceMappingURL=CatalogDataCategoryLinkInterface.js.map