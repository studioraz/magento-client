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
import type { BundleDataLinkInterface, PostV1BundleproductsSkuLinksOptionIdRequest } from '../models';
export interface DeleteV1BundleproductsSkuOptionsOptionIdChildrenChildSkuRequest {
    sku: string;
    optionId: number;
    childSku: string;
}
export interface GetV1BundleproductsProductSkuChildrenRequest {
    productSku: string;
    optionId?: number;
}
export interface PostV1BundleproductsSkuLinksOptionIdOperationRequest {
    sku: string;
    optionId: number;
    postV1BundleproductsSkuLinksOptionIdRequest?: PostV1BundleproductsSkuLinksOptionIdRequest;
}
export interface PutV1BundleproductsSkuLinksIdRequest {
    sku: string;
    id: string;
    postV1BundleproductsSkuLinksOptionIdRequest?: PostV1BundleproductsSkuLinksOptionIdRequest;
}
/**
 *
 */
export declare class BundleProductLinkManagementV1Api extends runtime.BaseAPI {
    /**
     * Remove product from Bundle product option
     */
    deleteV1BundleproductsSkuOptionsOptionIdChildrenChildSkuRaw(requestParameters: DeleteV1BundleproductsSkuOptionsOptionIdChildrenChildSkuRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;
    /**
     * Remove product from Bundle product option
     */
    deleteV1BundleproductsSkuOptionsOptionIdChildrenChildSku(requestParameters: DeleteV1BundleproductsSkuOptionsOptionIdChildrenChildSkuRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;
    /**
     * Get all children for Bundle product
     */
    getV1BundleproductsProductSkuChildrenRaw(requestParameters: GetV1BundleproductsProductSkuChildrenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<BundleDataLinkInterface>>>;
    /**
     * Get all children for Bundle product
     */
    getV1BundleproductsProductSkuChildren(requestParameters: GetV1BundleproductsProductSkuChildrenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<BundleDataLinkInterface>>;
    /**
     * Add child product to specified Bundle option by product sku
     */
    postV1BundleproductsSkuLinksOptionIdRaw(requestParameters: PostV1BundleproductsSkuLinksOptionIdOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>>;
    /**
     * Add child product to specified Bundle option by product sku
     */
    postV1BundleproductsSkuLinksOptionId(requestParameters: PostV1BundleproductsSkuLinksOptionIdOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number>;
    /**
     *
     */
    putV1BundleproductsSkuLinksIdRaw(requestParameters: PutV1BundleproductsSkuLinksIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;
    /**
     *
     */
    putV1BundleproductsSkuLinksId(requestParameters: PutV1BundleproductsSkuLinksIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;
}
