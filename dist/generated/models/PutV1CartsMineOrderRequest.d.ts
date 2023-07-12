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
 * @interface PutV1CartsMineOrderRequest
 */
export interface PutV1CartsMineOrderRequest {
    /**
     *
     * @type {QuoteDataPaymentInterface}
     * @memberof PutV1CartsMineOrderRequest
     */
    paymentMethod?: QuoteDataPaymentInterface;
}
/**
 * Check if a given object implements the PutV1CartsMineOrderRequest interface.
 */
export declare function instanceOfPutV1CartsMineOrderRequest(value: object): boolean;
export declare function PutV1CartsMineOrderRequestFromJSON(json: any): PutV1CartsMineOrderRequest;
export declare function PutV1CartsMineOrderRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutV1CartsMineOrderRequest;
export declare function PutV1CartsMineOrderRequestToJSON(value?: PutV1CartsMineOrderRequest | null): any;
