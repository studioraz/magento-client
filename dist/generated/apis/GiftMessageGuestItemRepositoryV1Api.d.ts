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
import type { GiftMessageDataMessageInterface, PostV1CartsCartIdGiftmessageRequest } from '../models';
export interface GetV1GuestcartsCartIdGiftmessageItemIdRequest {
    cartId: string;
    itemId: number;
}
export interface PostV1GuestcartsCartIdGiftmessageItemIdRequest {
    cartId: string;
    itemId: number;
    postV1CartsCartIdGiftmessageRequest?: PostV1CartsCartIdGiftmessageRequest;
}
/**
 *
 */
export declare class GiftMessageGuestItemRepositoryV1Api extends runtime.BaseAPI {
    /**
     * Return the gift message for a specified item in a specified shopping cart.
     */
    getV1GuestcartsCartIdGiftmessageItemIdRaw(requestParameters: GetV1GuestcartsCartIdGiftmessageItemIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GiftMessageDataMessageInterface>>;
    /**
     * Return the gift message for a specified item in a specified shopping cart.
     */
    getV1GuestcartsCartIdGiftmessageItemId(requestParameters: GetV1GuestcartsCartIdGiftmessageItemIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GiftMessageDataMessageInterface>;
    /**
     * Set the gift message for a specified item in a specified shopping cart.
     */
    postV1GuestcartsCartIdGiftmessageItemIdRaw(requestParameters: PostV1GuestcartsCartIdGiftmessageItemIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;
    /**
     * Set the gift message for a specified item in a specified shopping cart.
     */
    postV1GuestcartsCartIdGiftmessageItemId(requestParameters: PostV1GuestcartsCartIdGiftmessageItemIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;
}
