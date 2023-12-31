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
import type { QuoteDataTotalsInterface } from '../models';
export interface GetV1CartsCartIdTotalsRequest {
    cartId: number;
}
/**
 *
 */
export declare class QuoteCartTotalRepositoryV1Api extends runtime.BaseAPI {
    /**
     * Returns quote totals data for a specified cart.
     */
    getV1CartsCartIdTotalsRaw(requestParameters: GetV1CartsCartIdTotalsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuoteDataTotalsInterface>>;
    /**
     * Returns quote totals data for a specified cart.
     */
    getV1CartsCartIdTotals(requestParameters: GetV1CartsCartIdTotalsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuoteDataTotalsInterface>;
    /**
     * Returns quote totals data for a specified cart.
     */
    getV1CartsMineTotalsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuoteDataTotalsInterface>>;
    /**
     * Returns quote totals data for a specified cart.
     */
    getV1CartsMineTotals(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuoteDataTotalsInterface>;
}
