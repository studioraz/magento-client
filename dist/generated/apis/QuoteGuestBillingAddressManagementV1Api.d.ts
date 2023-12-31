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
import type { PostV1CartsCartIdBillingaddressRequest, QuoteDataAddressInterface } from '../models';
export interface GetV1GuestcartsCartIdBillingaddressRequest {
    cartId: string;
}
export interface PostV1GuestcartsCartIdBillingaddressRequest {
    cartId: string;
    postV1CartsCartIdBillingaddressRequest?: PostV1CartsCartIdBillingaddressRequest;
}
/**
 *
 */
export declare class QuoteGuestBillingAddressManagementV1Api extends runtime.BaseAPI {
    /**
     * Return the billing address for a specified quote.
     */
    getV1GuestcartsCartIdBillingaddressRaw(requestParameters: GetV1GuestcartsCartIdBillingaddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuoteDataAddressInterface>>;
    /**
     * Return the billing address for a specified quote.
     */
    getV1GuestcartsCartIdBillingaddress(requestParameters: GetV1GuestcartsCartIdBillingaddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuoteDataAddressInterface>;
    /**
     * Assign a specified billing address to a specified cart.
     */
    postV1GuestcartsCartIdBillingaddressRaw(requestParameters: PostV1GuestcartsCartIdBillingaddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>>;
    /**
     * Assign a specified billing address to a specified cart.
     */
    postV1GuestcartsCartIdBillingaddress(requestParameters: PostV1GuestcartsCartIdBillingaddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number>;
}
