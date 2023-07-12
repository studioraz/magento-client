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
import type { EavDataAttributeSetInterface, EavDataAttributeSetSearchResultsInterface, PutV1EavAttributesetsAttributeSetIdRequest } from '../models';
export interface DeleteV1EavAttributesetsAttributeSetIdRequest {
    attributeSetId: number;
}
export interface GetV1EavAttributesetsAttributeSetIdRequest {
    attributeSetId: number;
}
export interface GetV1EavAttributesetsListRequest {
    searchCriteriaFilterGroups0Filters0Field?: string;
    searchCriteriaFilterGroups0Filters0Value?: string;
    searchCriteriaFilterGroups0Filters0ConditionType?: string;
    searchCriteriaSortOrders0Field?: string;
    searchCriteriaSortOrders0Direction?: string;
    searchCriteriaPageSize?: number;
    searchCriteriaCurrentPage?: number;
}
export interface PutV1EavAttributesetsAttributeSetIdOperationRequest {
    attributeSetId: string;
    putV1EavAttributesetsAttributeSetIdRequest?: PutV1EavAttributesetsAttributeSetIdRequest;
}
/**
 *
 */
export declare class EavAttributeSetRepositoryV1Api extends runtime.BaseAPI {
    /**
     * Remove attribute set by given ID
     */
    deleteV1EavAttributesetsAttributeSetIdRaw(requestParameters: DeleteV1EavAttributesetsAttributeSetIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;
    /**
     * Remove attribute set by given ID
     */
    deleteV1EavAttributesetsAttributeSetId(requestParameters: DeleteV1EavAttributesetsAttributeSetIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;
    /**
     * Retrieve attribute set information based on given ID
     */
    getV1EavAttributesetsAttributeSetIdRaw(requestParameters: GetV1EavAttributesetsAttributeSetIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EavDataAttributeSetInterface>>;
    /**
     * Retrieve attribute set information based on given ID
     */
    getV1EavAttributesetsAttributeSetId(requestParameters: GetV1EavAttributesetsAttributeSetIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EavDataAttributeSetInterface>;
    /**
     * Retrieve list of Attribute Sets This call returns an array of objects, but detailed information about each object’s attributes might not be included. See https://devdocs.magento.com/codelinks/attributes.html#AttributeSetRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
     */
    getV1EavAttributesetsListRaw(requestParameters: GetV1EavAttributesetsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EavDataAttributeSetSearchResultsInterface>>;
    /**
     * Retrieve list of Attribute Sets This call returns an array of objects, but detailed information about each object’s attributes might not be included. See https://devdocs.magento.com/codelinks/attributes.html#AttributeSetRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
     */
    getV1EavAttributesetsList(requestParameters?: GetV1EavAttributesetsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EavDataAttributeSetSearchResultsInterface>;
    /**
     * Save attribute set data
     */
    putV1EavAttributesetsAttributeSetIdRaw(requestParameters: PutV1EavAttributesetsAttributeSetIdOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EavDataAttributeSetInterface>>;
    /**
     * Save attribute set data
     */
    putV1EavAttributesetsAttributeSetId(requestParameters: PutV1EavAttributesetsAttributeSetIdOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EavDataAttributeSetInterface>;
}
