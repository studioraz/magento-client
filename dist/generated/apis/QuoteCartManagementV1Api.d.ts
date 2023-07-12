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
import type { PutV1CartsCartIdRequest, PutV1CartsMineOrderRequest, QuoteDataCartInterface } from '../models';
export interface PostV1CustomersCustomerIdCartsRequest {
    customerId: number;
}
export interface PutV1CartsCartIdOperationRequest {
    cartId: number;
    putV1CartsCartIdRequest?: PutV1CartsCartIdRequest;
}
export interface PutV1CartsCartIdOrderRequest {
    cartId: number;
    putV1CartsMineOrderRequest?: PutV1CartsMineOrderRequest;
}
export interface PutV1CartsMineOrderOperationRequest {
    putV1CartsMineOrderRequest?: PutV1CartsMineOrderRequest;
}
/**
 *
 */
export declare class QuoteCartManagementV1Api extends runtime.BaseAPI {
    /**
     * Returns information for the cart for a specified customer.
     */
    getV1CartsMineRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuoteDataCartInterface>>;
    /**
     * Returns information for the cart for a specified customer.
     */
    getV1CartsMine(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuoteDataCartInterface>;
    /**
     * Creates an empty cart and quote for a guest.
     */
    postV1CartsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>>;
    /**
     * Creates an empty cart and quote for a guest.
     */
    postV1Carts(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number>;
    /**
     * Creates an empty cart and quote for a specified customer if customer does not have a cart yet.
     */
    postV1CartsMineRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>>;
    /**
     * Creates an empty cart and quote for a specified customer if customer does not have a cart yet.
     */
    postV1CartsMine(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number>;
    /**
     * Creates an empty cart and quote for a specified customer if customer does not have a cart yet.
     */
    postV1CustomersCustomerIdCartsRaw(requestParameters: PostV1CustomersCustomerIdCartsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>>;
    /**
     * Creates an empty cart and quote for a specified customer if customer does not have a cart yet.
     */
    postV1CustomersCustomerIdCarts(requestParameters: PostV1CustomersCustomerIdCartsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number>;
    /**
     * Assigns a specified customer to a specified shopping cart.
     */
    putV1CartsCartIdRaw(requestParameters: PutV1CartsCartIdOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;
    /**
     * Assigns a specified customer to a specified shopping cart.
     */
    putV1CartsCartId(requestParameters: PutV1CartsCartIdOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;
    /**
     * Places an order for a specified cart.
     */
    putV1CartsCartIdOrderRaw(requestParameters: PutV1CartsCartIdOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>>;
    /**
     * Places an order for a specified cart.
     */
    putV1CartsCartIdOrder(requestParameters: PutV1CartsCartIdOrderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number>;
    /**
     * Places an order for a specified cart.
     */
    putV1CartsMineOrderRaw(requestParameters: PutV1CartsMineOrderOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>>;
    /**
     * Places an order for a specified cart.
     */
    putV1CartsMineOrder(requestParameters?: PutV1CartsMineOrderOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number>;
}
