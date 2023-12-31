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
import type { CmsDataBlockInterface, CmsDataBlockSearchResultsInterface, PostV1CmsBlockRequest } from '../models';
export interface DeleteV1CmsBlockBlockIdRequest {
    blockId: string;
}
export interface GetV1CmsBlockBlockIdRequest {
    blockId: string;
}
export interface GetV1CmsBlockSearchRequest {
    searchCriteriaFilterGroups0Filters0Field?: string;
    searchCriteriaFilterGroups0Filters0Value?: string;
    searchCriteriaFilterGroups0Filters0ConditionType?: string;
    searchCriteriaSortOrders0Field?: string;
    searchCriteriaSortOrders0Direction?: string;
    searchCriteriaPageSize?: number;
    searchCriteriaCurrentPage?: number;
}
export interface PostV1CmsBlockOperationRequest {
    postV1CmsBlockRequest?: PostV1CmsBlockRequest;
}
export interface PutV1CmsBlockIdRequest {
    id: string;
    postV1CmsBlockRequest?: PostV1CmsBlockRequest;
}
/**
 *
 */
export declare class CmsBlockRepositoryV1Api extends runtime.BaseAPI {
    /**
     * Delete block by ID.
     */
    deleteV1CmsBlockBlockIdRaw(requestParameters: DeleteV1CmsBlockBlockIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;
    /**
     * Delete block by ID.
     */
    deleteV1CmsBlockBlockId(requestParameters: DeleteV1CmsBlockBlockIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;
    /**
     * Retrieve block.
     */
    getV1CmsBlockBlockIdRaw(requestParameters: GetV1CmsBlockBlockIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CmsDataBlockInterface>>;
    /**
     * Retrieve block.
     */
    getV1CmsBlockBlockId(requestParameters: GetV1CmsBlockBlockIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CmsDataBlockInterface>;
    /**
     * Retrieve blocks matching the specified criteria.
     */
    getV1CmsBlockSearchRaw(requestParameters: GetV1CmsBlockSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CmsDataBlockSearchResultsInterface>>;
    /**
     * Retrieve blocks matching the specified criteria.
     */
    getV1CmsBlockSearch(requestParameters?: GetV1CmsBlockSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CmsDataBlockSearchResultsInterface>;
    /**
     * Save block.
     */
    postV1CmsBlockRaw(requestParameters: PostV1CmsBlockOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CmsDataBlockInterface>>;
    /**
     * Save block.
     */
    postV1CmsBlock(requestParameters?: PostV1CmsBlockOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CmsDataBlockInterface>;
    /**
     * Save block.
     */
    putV1CmsBlockIdRaw(requestParameters: PutV1CmsBlockIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CmsDataBlockInterface>>;
    /**
     * Save block.
     */
    putV1CmsBlockId(requestParameters: PutV1CmsBlockIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CmsDataBlockInterface>;
}
