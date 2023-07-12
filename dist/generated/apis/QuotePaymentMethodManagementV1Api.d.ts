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
import type { PutV1CartsCartIdSelectedpaymentmethodRequest, QuoteDataPaymentInterface, QuoteDataPaymentMethodInterface } from '../models';
export interface GetV1CartsCartIdPaymentmethodsRequest {
    cartId: number;
}
export interface GetV1CartsCartIdSelectedpaymentmethodRequest {
    cartId: number;
}
export interface PutV1CartsCartIdSelectedpaymentmethodOperationRequest {
    cartId: number;
    putV1CartsCartIdSelectedpaymentmethodRequest?: PutV1CartsCartIdSelectedpaymentmethodRequest;
}
export interface PutV1CartsMineSelectedpaymentmethodRequest {
    putV1CartsCartIdSelectedpaymentmethodRequest?: PutV1CartsCartIdSelectedpaymentmethodRequest;
}
/**
 *
 */
export declare class QuotePaymentMethodManagementV1Api extends runtime.BaseAPI {
    /**
     * Lists available payment methods for a specified shopping cart. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See https://devdocs.magento.com/codelinks/attributes.html#PaymentMethodManagementInterface to determine which call to use to get detailed information about all attributes for an object.
     */
    getV1CartsCartIdPaymentmethodsRaw(requestParameters: GetV1CartsCartIdPaymentmethodsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<QuoteDataPaymentMethodInterface>>>;
    /**
     * Lists available payment methods for a specified shopping cart. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See https://devdocs.magento.com/codelinks/attributes.html#PaymentMethodManagementInterface to determine which call to use to get detailed information about all attributes for an object.
     */
    getV1CartsCartIdPaymentmethods(requestParameters: GetV1CartsCartIdPaymentmethodsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<QuoteDataPaymentMethodInterface>>;
    /**
     * Returns the payment method for a specified shopping cart.
     */
    getV1CartsCartIdSelectedpaymentmethodRaw(requestParameters: GetV1CartsCartIdSelectedpaymentmethodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuoteDataPaymentInterface>>;
    /**
     * Returns the payment method for a specified shopping cart.
     */
    getV1CartsCartIdSelectedpaymentmethod(requestParameters: GetV1CartsCartIdSelectedpaymentmethodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuoteDataPaymentInterface>;
    /**
     * Lists available payment methods for a specified shopping cart. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See https://devdocs.magento.com/codelinks/attributes.html#PaymentMethodManagementInterface to determine which call to use to get detailed information about all attributes for an object.
     */
    getV1CartsMinePaymentmethodsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<QuoteDataPaymentMethodInterface>>>;
    /**
     * Lists available payment methods for a specified shopping cart. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See https://devdocs.magento.com/codelinks/attributes.html#PaymentMethodManagementInterface to determine which call to use to get detailed information about all attributes for an object.
     */
    getV1CartsMinePaymentmethods(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<QuoteDataPaymentMethodInterface>>;
    /**
     * Returns the payment method for a specified shopping cart.
     */
    getV1CartsMineSelectedpaymentmethodRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuoteDataPaymentInterface>>;
    /**
     * Returns the payment method for a specified shopping cart.
     */
    getV1CartsMineSelectedpaymentmethod(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuoteDataPaymentInterface>;
    /**
     * Adds a specified payment method to a specified shopping cart.
     */
    putV1CartsCartIdSelectedpaymentmethodRaw(requestParameters: PutV1CartsCartIdSelectedpaymentmethodOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>>;
    /**
     * Adds a specified payment method to a specified shopping cart.
     */
    putV1CartsCartIdSelectedpaymentmethod(requestParameters: PutV1CartsCartIdSelectedpaymentmethodOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string>;
    /**
     * Adds a specified payment method to a specified shopping cart.
     */
    putV1CartsMineSelectedpaymentmethodRaw(requestParameters: PutV1CartsMineSelectedpaymentmethodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>>;
    /**
     * Adds a specified payment method to a specified shopping cart.
     */
    putV1CartsMineSelectedpaymentmethod(requestParameters?: PutV1CartsMineSelectedpaymentmethodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string>;
}