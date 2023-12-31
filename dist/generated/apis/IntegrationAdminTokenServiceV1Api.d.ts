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
import type { PostV1IntegrationAdminTokenRequest } from '../models';
export interface PostV1IntegrationAdminTokenOperationRequest {
    postV1IntegrationAdminTokenRequest?: PostV1IntegrationAdminTokenRequest;
}
/**
 *
 */
export declare class IntegrationAdminTokenServiceV1Api extends runtime.BaseAPI {
    /**
     * Create access token for admin given the admin credentials.
     */
    postV1IntegrationAdminTokenRaw(requestParameters: PostV1IntegrationAdminTokenOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>>;
    /**
     * Create access token for admin given the admin credentials.
     */
    postV1IntegrationAdminToken(requestParameters?: PostV1IntegrationAdminTokenOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string>;
}
