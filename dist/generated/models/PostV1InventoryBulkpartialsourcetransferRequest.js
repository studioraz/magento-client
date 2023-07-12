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
exports.PostV1InventoryBulkpartialsourcetransferRequestToJSON = exports.PostV1InventoryBulkpartialsourcetransferRequestFromJSONTyped = exports.PostV1InventoryBulkpartialsourcetransferRequestFromJSON = exports.instanceOfPostV1InventoryBulkpartialsourcetransferRequest = void 0;
var InventoryCatalogApiDataPartialInventoryTransferItemInterface_1 = require("./InventoryCatalogApiDataPartialInventoryTransferItemInterface");
/**
 * Check if a given object implements the PostV1InventoryBulkpartialsourcetransferRequest interface.
 */
function instanceOfPostV1InventoryBulkpartialsourcetransferRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "originSourceCode" in value;
    isInstance = isInstance && "destinationSourceCode" in value;
    isInstance = isInstance && "items" in value;
    return isInstance;
}
exports.instanceOfPostV1InventoryBulkpartialsourcetransferRequest = instanceOfPostV1InventoryBulkpartialsourcetransferRequest;
function PostV1InventoryBulkpartialsourcetransferRequestFromJSON(json) {
    return PostV1InventoryBulkpartialsourcetransferRequestFromJSONTyped(json, false);
}
exports.PostV1InventoryBulkpartialsourcetransferRequestFromJSON = PostV1InventoryBulkpartialsourcetransferRequestFromJSON;
function PostV1InventoryBulkpartialsourcetransferRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'originSourceCode': json['originSourceCode'],
        'destinationSourceCode': json['destinationSourceCode'],
        'items': (json['items'].map(InventoryCatalogApiDataPartialInventoryTransferItemInterface_1.InventoryCatalogApiDataPartialInventoryTransferItemInterfaceFromJSON)),
    };
}
exports.PostV1InventoryBulkpartialsourcetransferRequestFromJSONTyped = PostV1InventoryBulkpartialsourcetransferRequestFromJSONTyped;
function PostV1InventoryBulkpartialsourcetransferRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'originSourceCode': value.originSourceCode,
        'destinationSourceCode': value.destinationSourceCode,
        'items': (value.items.map(InventoryCatalogApiDataPartialInventoryTransferItemInterface_1.InventoryCatalogApiDataPartialInventoryTransferItemInterfaceToJSON)),
    };
}
exports.PostV1InventoryBulkpartialsourcetransferRequestToJSON = PostV1InventoryBulkpartialsourcetransferRequestToJSON;
//# sourceMappingURL=PostV1InventoryBulkpartialsourcetransferRequest.js.map