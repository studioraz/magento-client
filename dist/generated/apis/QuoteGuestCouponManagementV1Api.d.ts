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
export interface DeleteV1GuestcartsCartIdCouponsRequest {
    cartId: string;
}
export interface GetV1GuestcartsCartIdCouponsRequest {
    cartId: string;
}
export interface PutV1GuestcartsCartIdCouponsCouponCodeRequest {
    cartId: string;
    couponCode: string;
}
/**
 *
 */
export declare class QuoteGuestCouponManagementV1Api extends runtime.BaseAPI {
    /**
     * Delete a coupon from a specified cart.
     */
    deleteV1GuestcartsCartIdCouponsRaw(requestParameters: DeleteV1GuestcartsCartIdCouponsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;
    /**
     * Delete a coupon from a specified cart.
     */
    deleteV1GuestcartsCartIdCoupons(requestParameters: DeleteV1GuestcartsCartIdCouponsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;
    /**
     * Return information for a coupon in a specified cart.
     */
    getV1GuestcartsCartIdCouponsRaw(requestParameters: GetV1GuestcartsCartIdCouponsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>>;
    /**
     * Return information for a coupon in a specified cart.
     */
    getV1GuestcartsCartIdCoupons(requestParameters: GetV1GuestcartsCartIdCouponsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string>;
    /**
     * Add a coupon by code to a specified cart.
     */
    putV1GuestcartsCartIdCouponsCouponCodeRaw(requestParameters: PutV1GuestcartsCartIdCouponsCouponCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;
    /**
     * Add a coupon by code to a specified cart.
     */
    putV1GuestcartsCartIdCouponsCouponCode(requestParameters: PutV1GuestcartsCartIdCouponsCouponCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;
}
