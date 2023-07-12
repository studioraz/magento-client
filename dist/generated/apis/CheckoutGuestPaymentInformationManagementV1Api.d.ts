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
import type { CheckoutDataPaymentDetailsInterface, PostV1GuestcartsCartIdPaymentinformationRequest } from '../models';
export interface GetV1GuestcartsCartIdPaymentinformationRequest {
    cartId: string;
}
export interface PostV1GuestcartsCartIdPaymentinformationOperationRequest {
    cartId: string;
    postV1GuestcartsCartIdPaymentinformationRequest?: PostV1GuestcartsCartIdPaymentinformationRequest;
}
export interface PostV1GuestcartsCartIdSetpaymentinformationRequest {
    cartId: string;
    postV1GuestcartsCartIdPaymentinformationRequest?: PostV1GuestcartsCartIdPaymentinformationRequest;
}
/**
 *
 */
export declare class CheckoutGuestPaymentInformationManagementV1Api extends runtime.BaseAPI {
    /**
     * Get payment information
     */
    getV1GuestcartsCartIdPaymentinformationRaw(requestParameters: GetV1GuestcartsCartIdPaymentinformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CheckoutDataPaymentDetailsInterface>>;
    /**
     * Get payment information
     */
    getV1GuestcartsCartIdPaymentinformation(requestParameters: GetV1GuestcartsCartIdPaymentinformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CheckoutDataPaymentDetailsInterface>;
    /**
     * Set payment information and place order for a specified cart.
     */
    postV1GuestcartsCartIdPaymentinformationRaw(requestParameters: PostV1GuestcartsCartIdPaymentinformationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>>;
    /**
     * Set payment information and place order for a specified cart.
     */
    postV1GuestcartsCartIdPaymentinformation(requestParameters: PostV1GuestcartsCartIdPaymentinformationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number>;
    /**
     * Set payment information for a specified cart.
     */
    postV1GuestcartsCartIdSetpaymentinformationRaw(requestParameters: PostV1GuestcartsCartIdSetpaymentinformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>>;
    /**
     * Set payment information for a specified cart.
     */
    postV1GuestcartsCartIdSetpaymentinformation(requestParameters: PostV1GuestcartsCartIdSetpaymentinformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number>;
}
