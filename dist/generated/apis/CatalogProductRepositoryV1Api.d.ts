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
import type { CatalogDataProductInterface, CatalogDataProductSearchResultsInterface, PostV1ProductsRequest } from '../models';
export interface DeleteV1ProductsSkuRequest {
    sku: string;
}
export interface GetV1ProductsRequest {
    searchCriteriaFilterGroups0Filters0Field?: string;
    searchCriteriaFilterGroups0Filters0Value?: string;
    searchCriteriaFilterGroups0Filters0ConditionType?: string;
    searchCriteriaSortOrders0Field?: string;
    searchCriteriaSortOrders0Direction?: string;
    searchCriteriaPageSize?: number;
    searchCriteriaCurrentPage?: number;
}
export interface GetV1ProductsSkuRequest {
    sku: string;
    editMode?: boolean;
    storeId?: number;
    forceReload?: boolean;
}
export interface PostV1ProductsOperationRequest {
    postV1ProductsRequest?: PostV1ProductsRequest;
}
export interface PutV1ProductsSkuRequest {
    sku: string;
    postV1ProductsRequest?: PostV1ProductsRequest;
}
/**
 *
 */
export declare class CatalogProductRepositoryV1Api extends runtime.BaseAPI {
    /**
     *
     */
    deleteV1ProductsSkuRaw(requestParameters: DeleteV1ProductsSkuRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;
    /**
     *
     */
    deleteV1ProductsSku(requestParameters: DeleteV1ProductsSkuRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;
    /**
     * Get product list
     */
    getV1ProductsRaw(requestParameters: GetV1ProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogDataProductSearchResultsInterface>>;
    /**
     * Get product list
     */
    getV1Products(requestParameters?: GetV1ProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogDataProductSearchResultsInterface>;
    /**
     * Get info about product by product SKU
     */
    getV1ProductsSkuRaw(requestParameters: GetV1ProductsSkuRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogDataProductInterface>>;
    /**
     * Get info about product by product SKU
     */
    getV1ProductsSku(requestParameters: GetV1ProductsSkuRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogDataProductInterface>;
    /**
     * Create product
     */
    postV1ProductsRaw(requestParameters: PostV1ProductsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogDataProductInterface>>;
    /**
     * Create product
     */
    postV1Products(requestParameters?: PostV1ProductsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogDataProductInterface>;
    /**
     * Create product
     */
    putV1ProductsSkuRaw(requestParameters: PutV1ProductsSkuRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogDataProductInterface>>;
    /**
     * Create product
     */
    putV1ProductsSku(requestParameters: PutV1ProductsSkuRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogDataProductInterface>;
}