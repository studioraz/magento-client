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
exports.InventoryExportStockApiDataExportStockSalableQtySearchResultInterfaceToJSON = exports.InventoryExportStockApiDataExportStockSalableQtySearchResultInterfaceFromJSONTyped = exports.InventoryExportStockApiDataExportStockSalableQtySearchResultInterfaceFromJSON = exports.instanceOfInventoryExportStockApiDataExportStockSalableQtySearchResultInterface = void 0;
var FrameworkSearchCriteriaInterface_1 = require("./FrameworkSearchCriteriaInterface");
/**
 * Check if a given object implements the InventoryExportStockApiDataExportStockSalableQtySearchResultInterface interface.
 */
function instanceOfInventoryExportStockApiDataExportStockSalableQtySearchResultInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "searchCriteria" in value;
    isInstance = isInstance && "totalCount" in value;
    return isInstance;
}
exports.instanceOfInventoryExportStockApiDataExportStockSalableQtySearchResultInterface = instanceOfInventoryExportStockApiDataExportStockSalableQtySearchResultInterface;
function InventoryExportStockApiDataExportStockSalableQtySearchResultInterfaceFromJSON(json) {
    return InventoryExportStockApiDataExportStockSalableQtySearchResultInterfaceFromJSONTyped(json, false);
}
exports.InventoryExportStockApiDataExportStockSalableQtySearchResultInterfaceFromJSON = InventoryExportStockApiDataExportStockSalableQtySearchResultInterfaceFromJSON;
function InventoryExportStockApiDataExportStockSalableQtySearchResultInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'items': json['items'],
        'searchCriteria': (0, FrameworkSearchCriteriaInterface_1.FrameworkSearchCriteriaInterfaceFromJSON)(json['search_criteria']),
        'totalCount': json['total_count'],
    };
}
exports.InventoryExportStockApiDataExportStockSalableQtySearchResultInterfaceFromJSONTyped = InventoryExportStockApiDataExportStockSalableQtySearchResultInterfaceFromJSONTyped;
function InventoryExportStockApiDataExportStockSalableQtySearchResultInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'items': value.items,
        'search_criteria': (0, FrameworkSearchCriteriaInterface_1.FrameworkSearchCriteriaInterfaceToJSON)(value.searchCriteria),
        'total_count': value.totalCount,
    };
}
exports.InventoryExportStockApiDataExportStockSalableQtySearchResultInterfaceToJSON = InventoryExportStockApiDataExportStockSalableQtySearchResultInterfaceToJSON;
//# sourceMappingURL=InventoryExportStockApiDataExportStockSalableQtySearchResultInterface.js.map