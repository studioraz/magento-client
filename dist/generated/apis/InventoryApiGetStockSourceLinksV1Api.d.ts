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
import type { InventoryApiDataStockSourceLinkSearchResultsInterface } from '../models';
export interface GetV1InventoryStocksourcelinksRequest {
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
export declare class InventoryApiGetStockSourceLinksV1Api extends runtime.BaseAPI {
    /**
     * Find StockSourceLink list by given SearchCriteria
     */
    getV1InventoryStocksourcelinksRaw(requestParameters: GetV1InventoryStocksourcelinksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventoryApiDataStockSourceLinkSearchResultsInterface>>;
    /**
     * Find StockSourceLink list by given SearchCriteria
     */
    getV1InventoryStocksourcelinks(requestParameters?: GetV1InventoryStocksourcelinksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventoryApiDataStockSourceLinkSearchResultsInterface>;
}
