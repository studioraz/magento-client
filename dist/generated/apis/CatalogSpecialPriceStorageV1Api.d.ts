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
import type { CatalogDataPriceUpdateResultInterface, CatalogDataSpecialPriceInterface, PostV1ProductsSpecialpriceRequest, PostV1ProductsTierpricesinformationRequest } from '../models';
export interface PostV1ProductsSpecialpriceOperationRequest {
    postV1ProductsSpecialpriceRequest?: PostV1ProductsSpecialpriceRequest;
}
export interface PostV1ProductsSpecialpricedeleteRequest {
    postV1ProductsSpecialpriceRequest?: PostV1ProductsSpecialpriceRequest;
}
export interface PostV1ProductsSpecialpriceinformationRequest {
    postV1ProductsTierpricesinformationRequest?: PostV1ProductsTierpricesinformationRequest;
}
/**
 *
 */
export declare class CatalogSpecialPriceStorageV1Api extends runtime.BaseAPI {
    /**
     * Add or update product\'s special price. If any items will have invalid price, store id, sku or dates, they will be marked as failed and excluded from update list and \\Magento\\Catalog\\Api\\Data\\PriceUpdateResultInterface[] with problem description will be returned. If there were no failed items during update empty array will be returned. If error occurred during the update exception will be thrown.
     */
    postV1ProductsSpecialpriceRaw(requestParameters: PostV1ProductsSpecialpriceOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CatalogDataPriceUpdateResultInterface>>>;
    /**
     * Add or update product\'s special price. If any items will have invalid price, store id, sku or dates, they will be marked as failed and excluded from update list and \\Magento\\Catalog\\Api\\Data\\PriceUpdateResultInterface[] with problem description will be returned. If there were no failed items during update empty array will be returned. If error occurred during the update exception will be thrown.
     */
    postV1ProductsSpecialprice(requestParameters?: PostV1ProductsSpecialpriceOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CatalogDataPriceUpdateResultInterface>>;
    /**
     * Delete product\'s special price. If any items will have invalid price, store id, sku or dates, they will be marked as failed and excluded from delete list and \\Magento\\Catalog\\Api\\Data\\PriceUpdateResultInterface[] with problem description will be returned. If there were no failed items during update empty array will be returned. If error occurred during the delete exception will be thrown.
     */
    postV1ProductsSpecialpricedeleteRaw(requestParameters: PostV1ProductsSpecialpricedeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CatalogDataPriceUpdateResultInterface>>>;
    /**
     * Delete product\'s special price. If any items will have invalid price, store id, sku or dates, they will be marked as failed and excluded from delete list and \\Magento\\Catalog\\Api\\Data\\PriceUpdateResultInterface[] with problem description will be returned. If there were no failed items during update empty array will be returned. If error occurred during the delete exception will be thrown.
     */
    postV1ProductsSpecialpricedelete(requestParameters?: PostV1ProductsSpecialpricedeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CatalogDataPriceUpdateResultInterface>>;
    /**
     * Return product\'s special price. In case of at least one of skus is not found exception will be thrown.
     */
    postV1ProductsSpecialpriceinformationRaw(requestParameters: PostV1ProductsSpecialpriceinformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CatalogDataSpecialPriceInterface>>>;
    /**
     * Return product\'s special price. In case of at least one of skus is not found exception will be thrown.
     */
    postV1ProductsSpecialpriceinformation(requestParameters?: PostV1ProductsSpecialpriceinformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CatalogDataSpecialPriceInterface>>;
}
