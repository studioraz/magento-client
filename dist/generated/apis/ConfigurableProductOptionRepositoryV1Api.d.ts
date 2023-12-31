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
import type { ConfigurableProductDataOptionInterface, PutV1ConfigurableproductsSkuOptionsIdRequest } from '../models';
export interface DeleteV1ConfigurableproductsSkuOptionsIdRequest {
    sku: string;
    id: number;
}
export interface GetV1ConfigurableproductsSkuOptionsAllRequest {
    sku: string;
}
export interface GetV1ConfigurableproductsSkuOptionsIdRequest {
    sku: string;
    id: number;
}
export interface PostV1ConfigurableproductsSkuOptionsRequest {
    sku: string;
    putV1ConfigurableproductsSkuOptionsIdRequest?: PutV1ConfigurableproductsSkuOptionsIdRequest;
}
export interface PutV1ConfigurableproductsSkuOptionsIdOperationRequest {
    sku: string;
    id: string;
    putV1ConfigurableproductsSkuOptionsIdRequest?: PutV1ConfigurableproductsSkuOptionsIdRequest;
}
/**
 *
 */
export declare class ConfigurableProductOptionRepositoryV1Api extends runtime.BaseAPI {
    /**
     * Remove option from configurable product
     */
    deleteV1ConfigurableproductsSkuOptionsIdRaw(requestParameters: DeleteV1ConfigurableproductsSkuOptionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;
    /**
     * Remove option from configurable product
     */
    deleteV1ConfigurableproductsSkuOptionsId(requestParameters: DeleteV1ConfigurableproductsSkuOptionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;
    /**
     * Get all options for configurable product
     */
    getV1ConfigurableproductsSkuOptionsAllRaw(requestParameters: GetV1ConfigurableproductsSkuOptionsAllRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ConfigurableProductDataOptionInterface>>>;
    /**
     * Get all options for configurable product
     */
    getV1ConfigurableproductsSkuOptionsAll(requestParameters: GetV1ConfigurableproductsSkuOptionsAllRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ConfigurableProductDataOptionInterface>>;
    /**
     * Get option for configurable product
     */
    getV1ConfigurableproductsSkuOptionsIdRaw(requestParameters: GetV1ConfigurableproductsSkuOptionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConfigurableProductDataOptionInterface>>;
    /**
     * Get option for configurable product
     */
    getV1ConfigurableproductsSkuOptionsId(requestParameters: GetV1ConfigurableproductsSkuOptionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConfigurableProductDataOptionInterface>;
    /**
     * Save option
     */
    postV1ConfigurableproductsSkuOptionsRaw(requestParameters: PostV1ConfigurableproductsSkuOptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>>;
    /**
     * Save option
     */
    postV1ConfigurableproductsSkuOptions(requestParameters: PostV1ConfigurableproductsSkuOptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number>;
    /**
     * Save option
     */
    putV1ConfigurableproductsSkuOptionsIdRaw(requestParameters: PutV1ConfigurableproductsSkuOptionsIdOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>>;
    /**
     * Save option
     */
    putV1ConfigurableproductsSkuOptionsId(requestParameters: PutV1ConfigurableproductsSkuOptionsIdOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number>;
}
