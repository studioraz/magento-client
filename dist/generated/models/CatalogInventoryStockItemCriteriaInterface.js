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
exports.CatalogInventoryStockItemCriteriaInterfaceToJSON = exports.CatalogInventoryStockItemCriteriaInterfaceFromJSONTyped = exports.CatalogInventoryStockItemCriteriaInterfaceFromJSON = exports.instanceOfCatalogInventoryStockItemCriteriaInterface = void 0;
var FrameworkCriteriaInterface_1 = require("./FrameworkCriteriaInterface");
/**
 * Check if a given object implements the CatalogInventoryStockItemCriteriaInterface interface.
 */
function instanceOfCatalogInventoryStockItemCriteriaInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "mapperInterfaceName" in value;
    isInstance = isInstance && "criteriaList" in value;
    isInstance = isInstance && "filters" in value;
    isInstance = isInstance && "orders" in value;
    isInstance = isInstance && "limit" in value;
    return isInstance;
}
exports.instanceOfCatalogInventoryStockItemCriteriaInterface = instanceOfCatalogInventoryStockItemCriteriaInterface;
function CatalogInventoryStockItemCriteriaInterfaceFromJSON(json) {
    return CatalogInventoryStockItemCriteriaInterfaceFromJSONTyped(json, false);
}
exports.CatalogInventoryStockItemCriteriaInterfaceFromJSON = CatalogInventoryStockItemCriteriaInterfaceFromJSON;
function CatalogInventoryStockItemCriteriaInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'mapperInterfaceName': json['mapper_interface_name'],
        'criteriaList': (json['criteria_list'].map(FrameworkCriteriaInterface_1.FrameworkCriteriaInterfaceFromJSON)),
        'filters': json['filters'],
        'orders': json['orders'],
        'limit': json['limit'],
    };
}
exports.CatalogInventoryStockItemCriteriaInterfaceFromJSONTyped = CatalogInventoryStockItemCriteriaInterfaceFromJSONTyped;
function CatalogInventoryStockItemCriteriaInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'mapper_interface_name': value.mapperInterfaceName,
        'criteria_list': (value.criteriaList.map(FrameworkCriteriaInterface_1.FrameworkCriteriaInterfaceToJSON)),
        'filters': value.filters,
        'orders': value.orders,
        'limit': value.limit,
    };
}
exports.CatalogInventoryStockItemCriteriaInterfaceToJSON = CatalogInventoryStockItemCriteriaInterfaceToJSON;
//# sourceMappingURL=CatalogInventoryStockItemCriteriaInterface.js.map