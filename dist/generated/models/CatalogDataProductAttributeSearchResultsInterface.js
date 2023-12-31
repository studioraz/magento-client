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
exports.CatalogDataProductAttributeSearchResultsInterfaceToJSON = exports.CatalogDataProductAttributeSearchResultsInterfaceFromJSONTyped = exports.CatalogDataProductAttributeSearchResultsInterfaceFromJSON = exports.instanceOfCatalogDataProductAttributeSearchResultsInterface = void 0;
var CatalogDataProductAttributeInterface_1 = require("./CatalogDataProductAttributeInterface");
var FrameworkSearchCriteriaInterface_1 = require("./FrameworkSearchCriteriaInterface");
/**
 * Check if a given object implements the CatalogDataProductAttributeSearchResultsInterface interface.
 */
function instanceOfCatalogDataProductAttributeSearchResultsInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "searchCriteria" in value;
    isInstance = isInstance && "totalCount" in value;
    return isInstance;
}
exports.instanceOfCatalogDataProductAttributeSearchResultsInterface = instanceOfCatalogDataProductAttributeSearchResultsInterface;
function CatalogDataProductAttributeSearchResultsInterfaceFromJSON(json) {
    return CatalogDataProductAttributeSearchResultsInterfaceFromJSONTyped(json, false);
}
exports.CatalogDataProductAttributeSearchResultsInterfaceFromJSON = CatalogDataProductAttributeSearchResultsInterfaceFromJSON;
function CatalogDataProductAttributeSearchResultsInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'items': (json['items'].map(CatalogDataProductAttributeInterface_1.CatalogDataProductAttributeInterfaceFromJSON)),
        'searchCriteria': (0, FrameworkSearchCriteriaInterface_1.FrameworkSearchCriteriaInterfaceFromJSON)(json['search_criteria']),
        'totalCount': json['total_count'],
    };
}
exports.CatalogDataProductAttributeSearchResultsInterfaceFromJSONTyped = CatalogDataProductAttributeSearchResultsInterfaceFromJSONTyped;
function CatalogDataProductAttributeSearchResultsInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'items': (value.items.map(CatalogDataProductAttributeInterface_1.CatalogDataProductAttributeInterfaceToJSON)),
        'search_criteria': (0, FrameworkSearchCriteriaInterface_1.FrameworkSearchCriteriaInterfaceToJSON)(value.searchCriteria),
        'total_count': value.totalCount,
    };
}
exports.CatalogDataProductAttributeSearchResultsInterfaceToJSON = CatalogDataProductAttributeSearchResultsInterfaceToJSON;
//# sourceMappingURL=CatalogDataProductAttributeSearchResultsInterface.js.map