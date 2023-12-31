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
import * as runtime from '../runtime';
import type { ErrorResponse, PostV1InventoryBulkpartialsourcetransferRequest } from '../models';
export interface PostV1InventoryBulkpartialsourcetransferOperationRequest {
    postV1InventoryBulkpartialsourcetransferRequest?: PostV1InventoryBulkpartialsourcetransferRequest;
}
/**
 *
 */
export declare class InventoryCatalogApiBulkPartialInventoryTransferV1Api extends runtime.BaseAPI {
    /**
     * Run bulk partial inventory transfer for specified items.
     */
    postV1InventoryBulkpartialsourcetransferRaw(requestParameters: PostV1InventoryBulkpartialsourcetransferOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ErrorResponse>>;
    /**
     * Run bulk partial inventory transfer for specified items.
     */
    postV1InventoryBulkpartialsourcetransfer(requestParameters?: PostV1InventoryBulkpartialsourcetransferOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ErrorResponse>;
}
