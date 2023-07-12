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
import type { EavDataAttributeGroupInterface, EavDataAttributeGroupSearchResultsInterface, PostV1ProductsAttributesetsGroupsRequest } from '../models';
export interface DeleteV1ProductsAttributesetsGroupsGroupIdRequest {
    groupId: number;
}
export interface GetV1ProductsAttributesetsGroupsListRequest {
    searchCriteriaFilterGroups0Filters0Field?: string;
    searchCriteriaFilterGroups0Filters0Value?: string;
    searchCriteriaFilterGroups0Filters0ConditionType?: string;
    searchCriteriaSortOrders0Field?: string;
    searchCriteriaSortOrders0Direction?: string;
    searchCriteriaPageSize?: number;
    searchCriteriaCurrentPage?: number;
}
export interface PostV1ProductsAttributesetsGroupsOperationRequest {
    postV1ProductsAttributesetsGroupsRequest?: PostV1ProductsAttributesetsGroupsRequest;
}
export interface PutV1ProductsAttributesetsAttributeSetIdGroupsRequest {
    attributeSetId: string;
    postV1ProductsAttributesetsGroupsRequest?: PostV1ProductsAttributesetsGroupsRequest;
}
/**
 *
 */
export declare class CatalogProductAttributeGroupRepositoryV1Api extends runtime.BaseAPI {
    /**
     * Remove attribute group by id
     */
    deleteV1ProductsAttributesetsGroupsGroupIdRaw(requestParameters: DeleteV1ProductsAttributesetsGroupsGroupIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;
    /**
     * Remove attribute group by id
     */
    deleteV1ProductsAttributesetsGroupsGroupId(requestParameters: DeleteV1ProductsAttributesetsGroupsGroupIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;
    /**
     * Retrieve list of attribute groups
     */
    getV1ProductsAttributesetsGroupsListRaw(requestParameters: GetV1ProductsAttributesetsGroupsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EavDataAttributeGroupSearchResultsInterface>>;
    /**
     * Retrieve list of attribute groups
     */
    getV1ProductsAttributesetsGroupsList(requestParameters?: GetV1ProductsAttributesetsGroupsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EavDataAttributeGroupSearchResultsInterface>;
    /**
     * Save attribute group
     */
    postV1ProductsAttributesetsGroupsRaw(requestParameters: PostV1ProductsAttributesetsGroupsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EavDataAttributeGroupInterface>>;
    /**
     * Save attribute group
     */
    postV1ProductsAttributesetsGroups(requestParameters?: PostV1ProductsAttributesetsGroupsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EavDataAttributeGroupInterface>;
    /**
     * Save attribute group
     */
    putV1ProductsAttributesetsAttributeSetIdGroupsRaw(requestParameters: PutV1ProductsAttributesetsAttributeSetIdGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EavDataAttributeGroupInterface>>;
    /**
     * Save attribute group
     */
    putV1ProductsAttributesetsAttributeSetIdGroups(requestParameters: PutV1ProductsAttributesetsAttributeSetIdGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EavDataAttributeGroupInterface>;
}
