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
exports.PostV1InventoryBulkproductsourceassignRequestToJSON = exports.PostV1InventoryBulkproductsourceassignRequestFromJSONTyped = exports.PostV1InventoryBulkproductsourceassignRequestFromJSON = exports.instanceOfPostV1InventoryBulkproductsourceassignRequest = void 0;
/**
 * Check if a given object implements the PostV1InventoryBulkproductsourceassignRequest interface.
 */
function instanceOfPostV1InventoryBulkproductsourceassignRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "skus" in value;
    isInstance = isInstance && "sourceCodes" in value;
    return isInstance;
}
exports.instanceOfPostV1InventoryBulkproductsourceassignRequest = instanceOfPostV1InventoryBulkproductsourceassignRequest;
function PostV1InventoryBulkproductsourceassignRequestFromJSON(json) {
    return PostV1InventoryBulkproductsourceassignRequestFromJSONTyped(json, false);
}
exports.PostV1InventoryBulkproductsourceassignRequestFromJSON = PostV1InventoryBulkproductsourceassignRequestFromJSON;
function PostV1InventoryBulkproductsourceassignRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'skus': json['skus'],
        'sourceCodes': json['sourceCodes'],
    };
}
exports.PostV1InventoryBulkproductsourceassignRequestFromJSONTyped = PostV1InventoryBulkproductsourceassignRequestFromJSONTyped;
function PostV1InventoryBulkproductsourceassignRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'skus': value.skus,
        'sourceCodes': value.sourceCodes,
    };
}
exports.PostV1InventoryBulkproductsourceassignRequestToJSON = PostV1InventoryBulkproductsourceassignRequestToJSON;
//# sourceMappingURL=PostV1InventoryBulkproductsourceassignRequest.js.map