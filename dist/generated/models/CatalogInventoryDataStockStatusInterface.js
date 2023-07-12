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
exports.CatalogInventoryDataStockStatusInterfaceToJSON = exports.CatalogInventoryDataStockStatusInterfaceFromJSONTyped = exports.CatalogInventoryDataStockStatusInterfaceFromJSON = exports.instanceOfCatalogInventoryDataStockStatusInterface = void 0;
var runtime_1 = require("../runtime");
var CatalogInventoryDataStockItemInterface_1 = require("./CatalogInventoryDataStockItemInterface");
/**
 * Check if a given object implements the CatalogInventoryDataStockStatusInterface interface.
 */
function instanceOfCatalogInventoryDataStockStatusInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "productId" in value;
    isInstance = isInstance && "stockId" in value;
    isInstance = isInstance && "qty" in value;
    isInstance = isInstance && "stockStatus" in value;
    isInstance = isInstance && "stockItem" in value;
    return isInstance;
}
exports.instanceOfCatalogInventoryDataStockStatusInterface = instanceOfCatalogInventoryDataStockStatusInterface;
function CatalogInventoryDataStockStatusInterfaceFromJSON(json) {
    return CatalogInventoryDataStockStatusInterfaceFromJSONTyped(json, false);
}
exports.CatalogInventoryDataStockStatusInterfaceFromJSON = CatalogInventoryDataStockStatusInterfaceFromJSON;
function CatalogInventoryDataStockStatusInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'productId': json['product_id'],
        'stockId': json['stock_id'],
        'qty': json['qty'],
        'stockStatus': json['stock_status'],
        'stockItem': (0, CatalogInventoryDataStockItemInterface_1.CatalogInventoryDataStockItemInterfaceFromJSON)(json['stock_item']),
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}
exports.CatalogInventoryDataStockStatusInterfaceFromJSONTyped = CatalogInventoryDataStockStatusInterfaceFromJSONTyped;
function CatalogInventoryDataStockStatusInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'product_id': value.productId,
        'stock_id': value.stockId,
        'qty': value.qty,
        'stock_status': value.stockStatus,
        'stock_item': (0, CatalogInventoryDataStockItemInterface_1.CatalogInventoryDataStockItemInterfaceToJSON)(value.stockItem),
        'extension_attributes': value.extensionAttributes,
    };
}
exports.CatalogInventoryDataStockStatusInterfaceToJSON = CatalogInventoryDataStockStatusInterfaceToJSON;
//# sourceMappingURL=CatalogInventoryDataStockStatusInterface.js.map