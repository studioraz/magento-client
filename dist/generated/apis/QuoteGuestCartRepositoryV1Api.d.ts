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
import type { QuoteDataCartInterface } from '../models';
export interface GetV1GuestcartsCartIdRequest {
    cartId: string;
}
/**
 *
 */
export declare class QuoteGuestCartRepositoryV1Api extends runtime.BaseAPI {
    /**
     * Enable a guest user to return information for a specified cart.
     */
    getV1GuestcartsCartIdRaw(requestParameters: GetV1GuestcartsCartIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuoteDataCartInterface>>;
    /**
     * Enable a guest user to return information for a specified cart.
     */
    getV1GuestcartsCartId(requestParameters: GetV1GuestcartsCartIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuoteDataCartInterface>;
}
