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
import type { CmsDataPageInterface, CmsDataPageSearchResultsInterface, PostV1CmsPageRequest } from '../models';
export interface DeleteV1CmsPagePageIdRequest {
    pageId: number;
}
export interface GetV1CmsPagePageIdRequest {
    pageId: number;
}
export interface GetV1CmsPageSearchRequest {
    searchCriteriaFilterGroups0Filters0Field?: string;
    searchCriteriaFilterGroups0Filters0Value?: string;
    searchCriteriaFilterGroups0Filters0ConditionType?: string;
    searchCriteriaSortOrders0Field?: string;
    searchCriteriaSortOrders0Direction?: string;
    searchCriteriaPageSize?: number;
    searchCriteriaCurrentPage?: number;
}
export interface PostV1CmsPageOperationRequest {
    postV1CmsPageRequest?: PostV1CmsPageRequest;
}
export interface PutV1CmsPageIdRequest {
    id: string;
    postV1CmsPageRequest?: PostV1CmsPageRequest;
}
/**
 *
 */
export declare class CmsPageRepositoryV1Api extends runtime.BaseAPI {
    /**
     * Delete page by ID.
     */
    deleteV1CmsPagePageIdRaw(requestParameters: DeleteV1CmsPagePageIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;
    /**
     * Delete page by ID.
     */
    deleteV1CmsPagePageId(requestParameters: DeleteV1CmsPagePageIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;
    /**
     * Retrieve page.
     */
    getV1CmsPagePageIdRaw(requestParameters: GetV1CmsPagePageIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CmsDataPageInterface>>;
    /**
     * Retrieve page.
     */
    getV1CmsPagePageId(requestParameters: GetV1CmsPagePageIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CmsDataPageInterface>;
    /**
     * Retrieve pages matching the specified criteria.
     */
    getV1CmsPageSearchRaw(requestParameters: GetV1CmsPageSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CmsDataPageSearchResultsInterface>>;
    /**
     * Retrieve pages matching the specified criteria.
     */
    getV1CmsPageSearch(requestParameters?: GetV1CmsPageSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CmsDataPageSearchResultsInterface>;
    /**
     * Save page.
     */
    postV1CmsPageRaw(requestParameters: PostV1CmsPageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CmsDataPageInterface>>;
    /**
     * Save page.
     */
    postV1CmsPage(requestParameters?: PostV1CmsPageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CmsDataPageInterface>;
    /**
     * Save page.
     */
    putV1CmsPageIdRaw(requestParameters: PutV1CmsPageIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CmsDataPageInterface>>;
    /**
     * Save page.
     */
    putV1CmsPageId(requestParameters: PutV1CmsPageIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CmsDataPageInterface>;
}
