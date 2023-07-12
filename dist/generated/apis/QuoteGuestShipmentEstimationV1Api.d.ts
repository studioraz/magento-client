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
import type { PostV1CartsCartIdEstimateshippingmethodsRequest, QuoteDataShippingMethodInterface } from '../models';
export interface PostV1GuestcartsCartIdEstimateshippingmethodsRequest {
    cartId: string;
    postV1CartsCartIdEstimateshippingmethodsRequest?: PostV1CartsCartIdEstimateshippingmethodsRequest;
}
/**
 *
 */
export declare class QuoteGuestShipmentEstimationV1Api extends runtime.BaseAPI {
    /**
     * Estimate shipping by address and return list of available shipping methods
     */
    postV1GuestcartsCartIdEstimateshippingmethodsRaw(requestParameters: PostV1GuestcartsCartIdEstimateshippingmethodsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<QuoteDataShippingMethodInterface>>>;
    /**
     * Estimate shipping by address and return list of available shipping methods
     */
    postV1GuestcartsCartIdEstimateshippingmethods(requestParameters: PostV1GuestcartsCartIdEstimateshippingmethodsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<QuoteDataShippingMethodInterface>>;
}