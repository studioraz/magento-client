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
exports.PutV1ProductsProductSkuStockItemsItemIdRequestToJSON = exports.PutV1ProductsProductSkuStockItemsItemIdRequestFromJSONTyped = exports.PutV1ProductsProductSkuStockItemsItemIdRequestFromJSON = exports.instanceOfPutV1ProductsProductSkuStockItemsItemIdRequest = void 0;
var CatalogInventoryDataStockItemInterface_1 = require("./CatalogInventoryDataStockItemInterface");
/**
 * Check if a given object implements the PutV1ProductsProductSkuStockItemsItemIdRequest interface.
 */
function instanceOfPutV1ProductsProductSkuStockItemsItemIdRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "stockItem" in value;
    return isInstance;
}
exports.instanceOfPutV1ProductsProductSkuStockItemsItemIdRequest = instanceOfPutV1ProductsProductSkuStockItemsItemIdRequest;
function PutV1ProductsProductSkuStockItemsItemIdRequestFromJSON(json) {
    return PutV1ProductsProductSkuStockItemsItemIdRequestFromJSONTyped(json, false);
}
exports.PutV1ProductsProductSkuStockItemsItemIdRequestFromJSON = PutV1ProductsProductSkuStockItemsItemIdRequestFromJSON;
function PutV1ProductsProductSkuStockItemsItemIdRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'stockItem': (0, CatalogInventoryDataStockItemInterface_1.CatalogInventoryDataStockItemInterfaceFromJSON)(json['stockItem']),
    };
}
exports.PutV1ProductsProductSkuStockItemsItemIdRequestFromJSONTyped = PutV1ProductsProductSkuStockItemsItemIdRequestFromJSONTyped;
function PutV1ProductsProductSkuStockItemsItemIdRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'stockItem': (0, CatalogInventoryDataStockItemInterface_1.CatalogInventoryDataStockItemInterfaceToJSON)(value.stockItem),
    };
}
exports.PutV1ProductsProductSkuStockItemsItemIdRequestToJSON = PutV1ProductsProductSkuStockItemsItemIdRequestToJSON;
//# sourceMappingURL=PutV1ProductsProductSkuStockItemsItemIdRequest.js.map