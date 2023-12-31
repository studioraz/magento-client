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
import type { PostV1TaxClassesRequest, TaxDataTaxClassInterface, TaxDataTaxClassSearchResultsInterface } from '../models';
export interface DeleteV1TaxClassesTaxClassIdRequest {
    taxClassId: number;
}
export interface GetV1TaxClassesSearchRequest {
    searchCriteriaFilterGroups0Filters0Field?: string;
    searchCriteriaFilterGroups0Filters0Value?: string;
    searchCriteriaFilterGroups0Filters0ConditionType?: string;
    searchCriteriaSortOrders0Field?: string;
    searchCriteriaSortOrders0Direction?: string;
    searchCriteriaPageSize?: number;
    searchCriteriaCurrentPage?: number;
}
export interface GetV1TaxClassesTaxClassIdRequest {
    taxClassId: number;
}
export interface PostV1TaxClassesOperationRequest {
    postV1TaxClassesRequest?: PostV1TaxClassesRequest;
}
export interface PutV1TaxClassesClassIdRequest {
    classId: string;
    postV1TaxClassesRequest?: PostV1TaxClassesRequest;
}
/**
 *
 */
export declare class TaxTaxClassRepositoryV1Api extends runtime.BaseAPI {
    /**
     * Delete a tax class with the given tax class id.
     */
    deleteV1TaxClassesTaxClassIdRaw(requestParameters: DeleteV1TaxClassesTaxClassIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;
    /**
     * Delete a tax class with the given tax class id.
     */
    deleteV1TaxClassesTaxClassId(requestParameters: DeleteV1TaxClassesTaxClassIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;
    /**
     * Retrieve tax classes which match a specific criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See https://devdocs.magento.com/codelinks/attributes.html#TaxClassRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
     */
    getV1TaxClassesSearchRaw(requestParameters: GetV1TaxClassesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaxDataTaxClassSearchResultsInterface>>;
    /**
     * Retrieve tax classes which match a specific criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See https://devdocs.magento.com/codelinks/attributes.html#TaxClassRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
     */
    getV1TaxClassesSearch(requestParameters?: GetV1TaxClassesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaxDataTaxClassSearchResultsInterface>;
    /**
     * Get a tax class with the given tax class id.
     */
    getV1TaxClassesTaxClassIdRaw(requestParameters: GetV1TaxClassesTaxClassIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaxDataTaxClassInterface>>;
    /**
     * Get a tax class with the given tax class id.
     */
    getV1TaxClassesTaxClassId(requestParameters: GetV1TaxClassesTaxClassIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaxDataTaxClassInterface>;
    /**
     * Create a Tax Class
     */
    postV1TaxClassesRaw(requestParameters: PostV1TaxClassesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>>;
    /**
     * Create a Tax Class
     */
    postV1TaxClasses(requestParameters?: PostV1TaxClassesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string>;
    /**
     * Create a Tax Class
     */
    putV1TaxClassesClassIdRaw(requestParameters: PutV1TaxClassesClassIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>>;
    /**
     * Create a Tax Class
     */
    putV1TaxClassesClassId(requestParameters: PutV1TaxClassesClassIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string>;
}
