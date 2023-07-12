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
import type { CustomerDataCustomerInterface } from './CustomerDataCustomerInterface';
/**
 *
 * @export
 * @interface PutV1CustomersValidateRequest
 */
export interface PutV1CustomersValidateRequest {
    /**
     *
     * @type {CustomerDataCustomerInterface}
     * @memberof PutV1CustomersValidateRequest
     */
    customer: CustomerDataCustomerInterface;
}
/**
 * Check if a given object implements the PutV1CustomersValidateRequest interface.
 */
export declare function instanceOfPutV1CustomersValidateRequest(value: object): boolean;
export declare function PutV1CustomersValidateRequestFromJSON(json: any): PutV1CustomersValidateRequest;
export declare function PutV1CustomersValidateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutV1CustomersValidateRequest;
export declare function PutV1CustomersValidateRequestToJSON(value?: PutV1CustomersValidateRequest | null): any;