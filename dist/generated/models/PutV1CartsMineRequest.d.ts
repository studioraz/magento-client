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
import type { QuoteDataCartInterface } from './QuoteDataCartInterface';
/**
 *
 * @export
 * @interface PutV1CartsMineRequest
 */
export interface PutV1CartsMineRequest {
    /**
     *
     * @type {QuoteDataCartInterface}
     * @memberof PutV1CartsMineRequest
     */
    quote: QuoteDataCartInterface;
}
/**
 * Check if a given object implements the PutV1CartsMineRequest interface.
 */
export declare function instanceOfPutV1CartsMineRequest(value: object): boolean;
export declare function PutV1CartsMineRequestFromJSON(json: any): PutV1CartsMineRequest;
export declare function PutV1CartsMineRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutV1CartsMineRequest;
export declare function PutV1CartsMineRequestToJSON(value?: PutV1CartsMineRequest | null): any;
