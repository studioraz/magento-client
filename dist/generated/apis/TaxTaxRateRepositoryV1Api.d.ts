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
import type { PutV1TaxRatesRequest, TaxDataTaxRateInterface, TaxDataTaxRateSearchResultsInterface } from '../models';
export interface DeleteV1TaxRatesRateIdRequest {
    rateId: number;
}
export interface GetV1TaxRatesRateIdRequest {
    rateId: number;
}
export interface GetV1TaxRatesSearchRequest {
    searchCriteriaFilterGroups0Filters0Field?: string;
    searchCriteriaFilterGroups0Filters0Value?: string;
    searchCriteriaFilterGroups0Filters0ConditionType?: string;
    searchCriteriaSortOrders0Field?: string;
    searchCriteriaSortOrders0Direction?: string;
    searchCriteriaPageSize?: number;
    searchCriteriaCurrentPage?: number;
}
export interface PostV1TaxRatesRequest {
    putV1TaxRatesRequest?: PutV1TaxRatesRequest;
}
export interface PutV1TaxRatesOperationRequest {
    putV1TaxRatesRequest?: PutV1TaxRatesRequest;
}
/**
 *
 */
export declare class TaxTaxRateRepositoryV1Api extends runtime.BaseAPI {
    /**
     * Delete tax rate
     */
    deleteV1TaxRatesRateIdRaw(requestParameters: DeleteV1TaxRatesRateIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;
    /**
     * Delete tax rate
     */
    deleteV1TaxRatesRateId(requestParameters: DeleteV1TaxRatesRateIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;
    /**
     * Get tax rate
     */
    getV1TaxRatesRateIdRaw(requestParameters: GetV1TaxRatesRateIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaxDataTaxRateInterface>>;
    /**
     * Get tax rate
     */
    getV1TaxRatesRateId(requestParameters: GetV1TaxRatesRateIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaxDataTaxRateInterface>;
    /**
     * Search TaxRates This call returns an array of objects, but detailed information about each object’s attributes might not be included. See https://devdocs.magento.com/codelinks/attributes.html#TaxRateRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
     */
    getV1TaxRatesSearchRaw(requestParameters: GetV1TaxRatesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaxDataTaxRateSearchResultsInterface>>;
    /**
     * Search TaxRates This call returns an array of objects, but detailed information about each object’s attributes might not be included. See https://devdocs.magento.com/codelinks/attributes.html#TaxRateRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
     */
    getV1TaxRatesSearch(requestParameters?: GetV1TaxRatesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaxDataTaxRateSearchResultsInterface>;
    /**
     * Create or update tax rate
     */
    postV1TaxRatesRaw(requestParameters: PostV1TaxRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaxDataTaxRateInterface>>;
    /**
     * Create or update tax rate
     */
    postV1TaxRates(requestParameters?: PostV1TaxRatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaxDataTaxRateInterface>;
    /**
     * Create or update tax rate
     */
    putV1TaxRatesRaw(requestParameters: PutV1TaxRatesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaxDataTaxRateInterface>>;
    /**
     * Create or update tax rate
     */
    putV1TaxRates(requestParameters?: PutV1TaxRatesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaxDataTaxRateInterface>;
}