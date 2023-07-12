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
import type { PutV1CartsCartIdRequest, PutV1CartsMineOrderRequest } from '../models';
export interface PutV1GuestcartsCartIdRequest {
    cartId: string;
    putV1CartsCartIdRequest?: PutV1CartsCartIdRequest;
}
export interface PutV1GuestcartsCartIdOrderRequest {
    cartId: string;
    putV1CartsMineOrderRequest?: PutV1CartsMineOrderRequest;
}
/**
 *
 */
export declare class QuoteGuestCartManagementV1Api extends runtime.BaseAPI {
    /**
     * Enable an customer or guest user to create an empty cart and quote for an anonymous customer.
     */
    postV1GuestcartsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>>;
    /**
     * Enable an customer or guest user to create an empty cart and quote for an anonymous customer.
     */
    postV1Guestcarts(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string>;
    /**
     * Assign a specified customer to a specified shopping cart.
     */
    putV1GuestcartsCartIdRaw(requestParameters: PutV1GuestcartsCartIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;
    /**
     * Assign a specified customer to a specified shopping cart.
     */
    putV1GuestcartsCartId(requestParameters: PutV1GuestcartsCartIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;
    /**
     * Place an order for a specified cart.
     */
    putV1GuestcartsCartIdOrderRaw(requestParameters: PutV1GuestcartsCartIdOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>>;
    /**
     * Place an order for a specified cart.
     */
    putV1GuestcartsCartIdOrder(requestParameters: PutV1GuestcartsCartIdOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number>;
}