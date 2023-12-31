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
import type { InventoryApiDataSourceItemSearchResultsInterface } from '../models';
export interface GetV1InventorySourceitemsRequest {
    searchCriteriaFilterGroups0Filters0Field?: string;
    searchCriteriaFilterGroups0Filters0Value?: string;
    searchCriteriaFilterGroups0Filters0ConditionType?: string;
    searchCriteriaSortOrders0Field?: string;
    searchCriteriaSortOrders0Direction?: string;
    searchCriteriaPageSize?: number;
    searchCriteriaCurrentPage?: number;
}
/**
 *
 */
export declare class InventoryApiSourceItemRepositoryV1Api extends runtime.BaseAPI {
    /**
     * Find SourceItems by SearchCriteria We need to have this method for direct work with SourceItems because this object contains additional data like as qty, status (for example can be searchable by additional field)
     */
    getV1InventorySourceitemsRaw(requestParameters: GetV1InventorySourceitemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventoryApiDataSourceItemSearchResultsInterface>>;
    /**
     * Find SourceItems by SearchCriteria We need to have this method for direct work with SourceItems because this object contains additional data like as qty, status (for example can be searchable by additional field)
     */
    getV1InventorySourceitems(requestParameters?: GetV1InventorySourceitemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventoryApiDataSourceItemSearchResultsInterface>;
}
