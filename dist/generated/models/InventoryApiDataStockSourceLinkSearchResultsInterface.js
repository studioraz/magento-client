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
exports.InventoryApiDataStockSourceLinkSearchResultsInterfaceToJSON = exports.InventoryApiDataStockSourceLinkSearchResultsInterfaceFromJSONTyped = exports.InventoryApiDataStockSourceLinkSearchResultsInterfaceFromJSON = exports.instanceOfInventoryApiDataStockSourceLinkSearchResultsInterface = void 0;
var FrameworkSearchCriteriaInterface_1 = require("./FrameworkSearchCriteriaInterface");
var InventoryApiDataStockSourceLinkInterface_1 = require("./InventoryApiDataStockSourceLinkInterface");
/**
 * Check if a given object implements the InventoryApiDataStockSourceLinkSearchResultsInterface interface.
 */
function instanceOfInventoryApiDataStockSourceLinkSearchResultsInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "searchCriteria" in value;
    isInstance = isInstance && "totalCount" in value;
    return isInstance;
}
exports.instanceOfInventoryApiDataStockSourceLinkSearchResultsInterface = instanceOfInventoryApiDataStockSourceLinkSearchResultsInterface;
function InventoryApiDataStockSourceLinkSearchResultsInterfaceFromJSON(json) {
    return InventoryApiDataStockSourceLinkSearchResultsInterfaceFromJSONTyped(json, false);
}
exports.InventoryApiDataStockSourceLinkSearchResultsInterfaceFromJSON = InventoryApiDataStockSourceLinkSearchResultsInterfaceFromJSON;
function InventoryApiDataStockSourceLinkSearchResultsInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'items': (json['items'].map(InventoryApiDataStockSourceLinkInterface_1.InventoryApiDataStockSourceLinkInterfaceFromJSON)),
        'searchCriteria': (0, FrameworkSearchCriteriaInterface_1.FrameworkSearchCriteriaInterfaceFromJSON)(json['search_criteria']),
        'totalCount': json['total_count'],
    };
}
exports.InventoryApiDataStockSourceLinkSearchResultsInterfaceFromJSONTyped = InventoryApiDataStockSourceLinkSearchResultsInterfaceFromJSONTyped;
function InventoryApiDataStockSourceLinkSearchResultsInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'items': (value.items.map(InventoryApiDataStockSourceLinkInterface_1.InventoryApiDataStockSourceLinkInterfaceToJSON)),
        'search_criteria': (0, FrameworkSearchCriteriaInterface_1.FrameworkSearchCriteriaInterfaceToJSON)(value.searchCriteria),
        'total_count': value.totalCount,
    };
}
exports.InventoryApiDataStockSourceLinkSearchResultsInterfaceToJSON = InventoryApiDataStockSourceLinkSearchResultsInterfaceToJSON;
//# sourceMappingURL=InventoryApiDataStockSourceLinkSearchResultsInterface.js.map