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
import type { PostV1BundleproductsOptionsAddRequest } from '../models';
export interface PostV1BundleproductsOptionsAddOperationRequest {
    postV1BundleproductsOptionsAddRequest?: PostV1BundleproductsOptionsAddRequest;
}
export interface PutV1BundleproductsOptionsOptionIdRequest {
    optionId: string;
    postV1BundleproductsOptionsAddRequest?: PostV1BundleproductsOptionsAddRequest;
}
/**
 *
 */
export declare class BundleProductOptionManagementV1Api extends runtime.BaseAPI {
    /**
     * Add new option for bundle product
     */
    postV1BundleproductsOptionsAddRaw(requestParameters: PostV1BundleproductsOptionsAddOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>>;
    /**
     * Add new option for bundle product
     */
    postV1BundleproductsOptionsAdd(requestParameters?: PostV1BundleproductsOptionsAddOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number>;
    /**
     * Add new option for bundle product
     */
    putV1BundleproductsOptionsOptionIdRaw(requestParameters: PutV1BundleproductsOptionsOptionIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>>;
    /**
     * Add new option for bundle product
     */
    putV1BundleproductsOptionsOptionId(requestParameters: PutV1BundleproductsOptionsOptionIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number>;
}
