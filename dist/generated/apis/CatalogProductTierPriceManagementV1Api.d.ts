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
import type { CatalogDataProductTierPriceInterface } from '../models';
export interface DeleteV1ProductsSkuGrouppricesCustomerGroupIdTiersQtyRequest {
    sku: string;
    customerGroupId: string;
    qty: number;
}
export interface GetV1ProductsSkuGrouppricesCustomerGroupIdTiersRequest {
    sku: string;
    customerGroupId: string;
}
export interface PostV1ProductsSkuGrouppricesCustomerGroupIdTiersQtyPricePriceRequest {
    sku: string;
    customerGroupId: string;
    price: number;
    qty: number;
}
/**
 *
 */
export declare class CatalogProductTierPriceManagementV1Api extends runtime.BaseAPI {
    /**
     * Remove tier price from product
     */
    deleteV1ProductsSkuGrouppricesCustomerGroupIdTiersQtyRaw(requestParameters: DeleteV1ProductsSkuGrouppricesCustomerGroupIdTiersQtyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;
    /**
     * Remove tier price from product
     */
    deleteV1ProductsSkuGrouppricesCustomerGroupIdTiersQty(requestParameters: DeleteV1ProductsSkuGrouppricesCustomerGroupIdTiersQtyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;
    /**
     * Get tier price of product
     */
    getV1ProductsSkuGrouppricesCustomerGroupIdTiersRaw(requestParameters: GetV1ProductsSkuGrouppricesCustomerGroupIdTiersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CatalogDataProductTierPriceInterface>>>;
    /**
     * Get tier price of product
     */
    getV1ProductsSkuGrouppricesCustomerGroupIdTiers(requestParameters: GetV1ProductsSkuGrouppricesCustomerGroupIdTiersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CatalogDataProductTierPriceInterface>>;
    /**
     * Create tier price for product
     */
    postV1ProductsSkuGrouppricesCustomerGroupIdTiersQtyPricePriceRaw(requestParameters: PostV1ProductsSkuGrouppricesCustomerGroupIdTiersQtyPricePriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;
    /**
     * Create tier price for product
     */
    postV1ProductsSkuGrouppricesCustomerGroupIdTiersQtyPricePrice(requestParameters: PostV1ProductsSkuGrouppricesCustomerGroupIdTiersQtyPricePriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;
}
