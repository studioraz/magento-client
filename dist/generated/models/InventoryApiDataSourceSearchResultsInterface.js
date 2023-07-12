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
exports.InventoryApiDataSourceSearchResultsInterfaceToJSON = exports.InventoryApiDataSourceSearchResultsInterfaceFromJSONTyped = exports.InventoryApiDataSourceSearchResultsInterfaceFromJSON = exports.instanceOfInventoryApiDataSourceSearchResultsInterface = void 0;
var FrameworkSearchCriteriaInterface_1 = require("./FrameworkSearchCriteriaInterface");
var InventoryApiDataSourceInterface_1 = require("./InventoryApiDataSourceInterface");
/**
 * Check if a given object implements the InventoryApiDataSourceSearchResultsInterface interface.
 */
function instanceOfInventoryApiDataSourceSearchResultsInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "searchCriteria" in value;
    isInstance = isInstance && "totalCount" in value;
    return isInstance;
}
exports.instanceOfInventoryApiDataSourceSearchResultsInterface = instanceOfInventoryApiDataSourceSearchResultsInterface;
function InventoryApiDataSourceSearchResultsInterfaceFromJSON(json) {
    return InventoryApiDataSourceSearchResultsInterfaceFromJSONTyped(json, false);
}
exports.InventoryApiDataSourceSearchResultsInterfaceFromJSON = InventoryApiDataSourceSearchResultsInterfaceFromJSON;
function InventoryApiDataSourceSearchResultsInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'items': (json['items'].map(InventoryApiDataSourceInterface_1.InventoryApiDataSourceInterfaceFromJSON)),
        'searchCriteria': (0, FrameworkSearchCriteriaInterface_1.FrameworkSearchCriteriaInterfaceFromJSON)(json['search_criteria']),
        'totalCount': json['total_count'],
    };
}
exports.InventoryApiDataSourceSearchResultsInterfaceFromJSONTyped = InventoryApiDataSourceSearchResultsInterfaceFromJSONTyped;
function InventoryApiDataSourceSearchResultsInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'items': (value.items.map(InventoryApiDataSourceInterface_1.InventoryApiDataSourceInterfaceToJSON)),
        'search_criteria': (0, FrameworkSearchCriteriaInterface_1.FrameworkSearchCriteriaInterfaceToJSON)(value.searchCriteria),
        'total_count': value.totalCount,
    };
}
exports.InventoryApiDataSourceSearchResultsInterfaceToJSON = InventoryApiDataSourceSearchResultsInterfaceToJSON;
//# sourceMappingURL=InventoryApiDataSourceSearchResultsInterface.js.map