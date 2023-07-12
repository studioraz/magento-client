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
 * @interface PutV1CustomersCustomerIdRequest
 */
export interface PutV1CustomersCustomerIdRequest {
    /**
     *
     * @type {CustomerDataCustomerInterface}
     * @memberof PutV1CustomersCustomerIdRequest
     */
    customer: CustomerDataCustomerInterface;
    /**
     *
     * @type {string}
     * @memberof PutV1CustomersCustomerIdRequest
     */
    passwordHash?: string;
}
/**
 * Check if a given object implements the PutV1CustomersCustomerIdRequest interface.
 */
export declare function instanceOfPutV1CustomersCustomerIdRequest(value: object): boolean;
export declare function PutV1CustomersCustomerIdRequestFromJSON(json: any): PutV1CustomersCustomerIdRequest;
export declare function PutV1CustomersCustomerIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutV1CustomersCustomerIdRequest;
export declare function PutV1CustomersCustomerIdRequestToJSON(value?: PutV1CustomersCustomerIdRequest | null): any;