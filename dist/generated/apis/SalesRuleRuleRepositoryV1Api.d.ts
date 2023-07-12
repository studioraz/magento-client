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
import type { PutV1SalesRulesRuleIdRequest, SalesRuleDataRuleInterface, SalesRuleDataRuleSearchResultInterface } from '../models';
export interface DeleteV1SalesRulesRuleIdRequest {
    ruleId: number;
}
export interface GetV1SalesRulesRuleIdRequest {
    ruleId: number;
}
export interface GetV1SalesRulesSearchRequest {
    searchCriteriaFilterGroups0Filters0Field?: string;
    searchCriteriaFilterGroups0Filters0Value?: string;
    searchCriteriaFilterGroups0Filters0ConditionType?: string;
    searchCriteriaSortOrders0Field?: string;
    searchCriteriaSortOrders0Direction?: string;
    searchCriteriaPageSize?: number;
    searchCriteriaCurrentPage?: number;
}
export interface PostV1SalesRulesRequest {
    putV1SalesRulesRuleIdRequest?: PutV1SalesRulesRuleIdRequest;
}
export interface PutV1SalesRulesRuleIdOperationRequest {
    ruleId: string;
    putV1SalesRulesRuleIdRequest?: PutV1SalesRulesRuleIdRequest;
}
/**
 *
 */
export declare class SalesRuleRuleRepositoryV1Api extends runtime.BaseAPI {
    /**
     * Delete rule by ID.
     */
    deleteV1SalesRulesRuleIdRaw(requestParameters: DeleteV1SalesRulesRuleIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;
    /**
     * Delete rule by ID.
     */
    deleteV1SalesRulesRuleId(requestParameters: DeleteV1SalesRulesRuleIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;
    /**
     * Get rule by ID.
     */
    getV1SalesRulesRuleIdRaw(requestParameters: GetV1SalesRulesRuleIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SalesRuleDataRuleInterface>>;
    /**
     * Get rule by ID.
     */
    getV1SalesRulesRuleId(requestParameters: GetV1SalesRulesRuleIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SalesRuleDataRuleInterface>;
    /**
     * Retrieve sales rules that match te specified criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See https://devdocs.magento.com/codelinks/attributes.html#RuleRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
     */
    getV1SalesRulesSearchRaw(requestParameters: GetV1SalesRulesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SalesRuleDataRuleSearchResultInterface>>;
    /**
     * Retrieve sales rules that match te specified criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See https://devdocs.magento.com/codelinks/attributes.html#RuleRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.
     */
    getV1SalesRulesSearch(requestParameters?: GetV1SalesRulesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SalesRuleDataRuleSearchResultInterface>;
    /**
     * Save sales rule.
     */
    postV1SalesRulesRaw(requestParameters: PostV1SalesRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SalesRuleDataRuleInterface>>;
    /**
     * Save sales rule.
     */
    postV1SalesRules(requestParameters?: PostV1SalesRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SalesRuleDataRuleInterface>;
    /**
     * Save sales rule.
     */
    putV1SalesRulesRuleIdRaw(requestParameters: PutV1SalesRulesRuleIdOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SalesRuleDataRuleInterface>>;
    /**
     * Save sales rule.
     */
    putV1SalesRulesRuleId(requestParameters: PutV1SalesRulesRuleIdOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SalesRuleDataRuleInterface>;
}