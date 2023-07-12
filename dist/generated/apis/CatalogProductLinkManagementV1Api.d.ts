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
import type { CatalogDataProductLinkInterface, PostV1ProductsSkuLinksRequest } from '../models';
export interface GetV1ProductsSkuLinksTypeRequest {
    sku: string;
    type: string;
}
export interface PostV1ProductsSkuLinksOperationRequest {
    sku: string;
    postV1ProductsSkuLinksRequest?: PostV1ProductsSkuLinksRequest;
}
/**
 *
 */
export declare class CatalogProductLinkManagementV1Api extends runtime.BaseAPI {
    /**
     * Provide the list of links for a specific product
     */
    getV1ProductsSkuLinksTypeRaw(requestParameters: GetV1ProductsSkuLinksTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CatalogDataProductLinkInterface>>>;
    /**
     * Provide the list of links for a specific product
     */
    getV1ProductsSkuLinksType(requestParameters: GetV1ProductsSkuLinksTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CatalogDataProductLinkInterface>>;
    /**
     * Assign a product link to another product
     */
    postV1ProductsSkuLinksRaw(requestParameters: PostV1ProductsSkuLinksOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;
    /**
     * Assign a product link to another product
     */
    postV1ProductsSkuLinks(requestParameters: PostV1ProductsSkuLinksOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;
}
