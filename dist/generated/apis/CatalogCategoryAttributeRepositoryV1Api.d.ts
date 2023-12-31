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
import type { CatalogDataCategoryAttributeInterface, CatalogDataCategoryAttributeSearchResultsInterface } from '../models';
export interface GetV1CategoriesAttributesRequest {
    searchCriteriaFilterGroups0Filters0Field?: string;
    searchCriteriaFilterGroups0Filters0Value?: string;
    searchCriteriaFilterGroups0Filters0ConditionType?: string;
    searchCriteriaSortOrders0Field?: string;
    searchCriteriaSortOrders0Direction?: string;
    searchCriteriaPageSize?: number;
    searchCriteriaCurrentPage?: number;
}
export interface GetV1CategoriesAttributesAttributeCodeRequest {
    attributeCode: string;
}
/**
 *
 */
export declare class CatalogCategoryAttributeRepositoryV1Api extends runtime.BaseAPI {
    /**
     * Retrieve all attributes for entity type
     */
    getV1CategoriesAttributesRaw(requestParameters: GetV1CategoriesAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogDataCategoryAttributeSearchResultsInterface>>;
    /**
     * Retrieve all attributes for entity type
     */
    getV1CategoriesAttributes(requestParameters?: GetV1CategoriesAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogDataCategoryAttributeSearchResultsInterface>;
    /**
     * Retrieve specific attribute
     */
    getV1CategoriesAttributesAttributeCodeRaw(requestParameters: GetV1CategoriesAttributesAttributeCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogDataCategoryAttributeInterface>>;
    /**
     * Retrieve specific attribute
     */
    getV1CategoriesAttributesAttributeCode(requestParameters: GetV1CategoriesAttributesAttributeCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogDataCategoryAttributeInterface>;
}
