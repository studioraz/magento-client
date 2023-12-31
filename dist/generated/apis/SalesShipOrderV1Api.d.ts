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
import type { PostV1OrderOrderIdShipRequest } from '../models';
export interface PostV1OrderOrderIdShipOperationRequest {
    orderId: number;
    postV1OrderOrderIdShipRequest?: PostV1OrderOrderIdShipRequest;
}
/**
 *
 */
export declare class SalesShipOrderV1Api extends runtime.BaseAPI {
    /**
     * Creates new Shipment for given Order.
     */
    postV1OrderOrderIdShipRaw(requestParameters: PostV1OrderOrderIdShipOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>>;
    /**
     * Creates new Shipment for given Order.
     */
    postV1OrderOrderIdShip(requestParameters: PostV1OrderOrderIdShipOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number>;
}
