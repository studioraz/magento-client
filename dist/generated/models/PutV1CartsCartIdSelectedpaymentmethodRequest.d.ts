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
import type { QuoteDataPaymentInterface } from './QuoteDataPaymentInterface';
/**
 *
 * @export
 * @interface PutV1CartsCartIdSelectedpaymentmethodRequest
 */
export interface PutV1CartsCartIdSelectedpaymentmethodRequest {
    /**
     *
     * @type {QuoteDataPaymentInterface}
     * @memberof PutV1CartsCartIdSelectedpaymentmethodRequest
     */
    method: QuoteDataPaymentInterface;
}
/**
 * Check if a given object implements the PutV1CartsCartIdSelectedpaymentmethodRequest interface.
 */
export declare function instanceOfPutV1CartsCartIdSelectedpaymentmethodRequest(value: object): boolean;
export declare function PutV1CartsCartIdSelectedpaymentmethodRequestFromJSON(json: any): PutV1CartsCartIdSelectedpaymentmethodRequest;
export declare function PutV1CartsCartIdSelectedpaymentmethodRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutV1CartsCartIdSelectedpaymentmethodRequest;
export declare function PutV1CartsCartIdSelectedpaymentmethodRequestToJSON(value?: PutV1CartsCartIdSelectedpaymentmethodRequest | null): any;
