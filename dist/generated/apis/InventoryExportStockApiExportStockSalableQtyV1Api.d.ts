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
import type { InventoryExportStockApiDataExportStockSalableQtySearchResultInterface } from '../models';
export interface GetV1InventoryExportstocksalableqtySalesChannelTypeSalesChannelCodeRequest {
    salesChannelType: string;
    salesChannelCode: string;
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
export declare class InventoryExportStockApiExportStockSalableQtyV1Api extends runtime.BaseAPI {
    /**
     * Export product stock data filtered by search criteria.
     */
    getV1InventoryExportstocksalableqtySalesChannelTypeSalesChannelCodeRaw(requestParameters: GetV1InventoryExportstocksalableqtySalesChannelTypeSalesChannelCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventoryExportStockApiDataExportStockSalableQtySearchResultInterface>>;
    /**
     * Export product stock data filtered by search criteria.
     */
    getV1InventoryExportstocksalableqtySalesChannelTypeSalesChannelCode(requestParameters: GetV1InventoryExportstocksalableqtySalesChannelTypeSalesChannelCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventoryExportStockApiDataExportStockSalableQtySearchResultInterface>;
}
