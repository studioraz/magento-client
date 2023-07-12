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
exports.CatalogInventoryDataStockItemCollectionInterfaceToJSON = exports.CatalogInventoryDataStockItemCollectionInterfaceFromJSONTyped = exports.CatalogInventoryDataStockItemCollectionInterfaceFromJSON = exports.instanceOfCatalogInventoryDataStockItemCollectionInterface = void 0;
var CatalogInventoryDataStockItemInterface_1 = require("./CatalogInventoryDataStockItemInterface");
var CatalogInventoryStockItemCriteriaInterface_1 = require("./CatalogInventoryStockItemCriteriaInterface");
/**
 * Check if a given object implements the CatalogInventoryDataStockItemCollectionInterface interface.
 */
function instanceOfCatalogInventoryDataStockItemCollectionInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "searchCriteria" in value;
    isInstance = isInstance && "totalCount" in value;
    return isInstance;
}
exports.instanceOfCatalogInventoryDataStockItemCollectionInterface = instanceOfCatalogInventoryDataStockItemCollectionInterface;
function CatalogInventoryDataStockItemCollectionInterfaceFromJSON(json) {
    return CatalogInventoryDataStockItemCollectionInterfaceFromJSONTyped(json, false);
}
exports.CatalogInventoryDataStockItemCollectionInterfaceFromJSON = CatalogInventoryDataStockItemCollectionInterfaceFromJSON;
function CatalogInventoryDataStockItemCollectionInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'items': (json['items'].map(CatalogInventoryDataStockItemInterface_1.CatalogInventoryDataStockItemInterfaceFromJSON)),
        'searchCriteria': (0, CatalogInventoryStockItemCriteriaInterface_1.CatalogInventoryStockItemCriteriaInterfaceFromJSON)(json['search_criteria']),
        'totalCount': json['total_count'],
    };
}
exports.CatalogInventoryDataStockItemCollectionInterfaceFromJSONTyped = CatalogInventoryDataStockItemCollectionInterfaceFromJSONTyped;
function CatalogInventoryDataStockItemCollectionInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'items': (value.items.map(CatalogInventoryDataStockItemInterface_1.CatalogInventoryDataStockItemInterfaceToJSON)),
        'search_criteria': (0, CatalogInventoryStockItemCriteriaInterface_1.CatalogInventoryStockItemCriteriaInterfaceToJSON)(value.searchCriteria),
        'total_count': value.totalCount,
    };
}
exports.CatalogInventoryDataStockItemCollectionInterfaceToJSON = CatalogInventoryDataStockItemCollectionInterfaceToJSON;
//# sourceMappingURL=CatalogInventoryDataStockItemCollectionInterface.js.map