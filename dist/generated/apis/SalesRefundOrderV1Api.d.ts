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
import type { PostV1OrderOrderIdRefundRequest } from '../models';
export interface PostV1OrderOrderIdRefundOperationRequest {
    orderId: number;
    postV1OrderOrderIdRefundRequest?: PostV1OrderOrderIdRefundRequest;
}
/**
 *
 */
export declare class SalesRefundOrderV1Api extends runtime.BaseAPI {
    /**
     * Create offline refund for order
     */
    postV1OrderOrderIdRefundRaw(requestParameters: PostV1OrderOrderIdRefundOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>>;
    /**
     * Create offline refund for order
     */
    postV1OrderOrderIdRefund(requestParameters: PostV1OrderOrderIdRefundOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number>;
}
