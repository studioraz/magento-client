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
import type { SalesDataOrderAddressInterface } from './SalesDataOrderAddressInterface';
/**
 *
 * @export
 * @interface PutV1OrdersParentIdRequest
 */
export interface PutV1OrdersParentIdRequest {
    /**
     *
     * @type {SalesDataOrderAddressInterface}
     * @memberof PutV1OrdersParentIdRequest
     */
    entity: SalesDataOrderAddressInterface;
}
/**
 * Check if a given object implements the PutV1OrdersParentIdRequest interface.
 */
export declare function instanceOfPutV1OrdersParentIdRequest(value: object): boolean;
export declare function PutV1OrdersParentIdRequestFromJSON(json: any): PutV1OrdersParentIdRequest;
export declare function PutV1OrdersParentIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutV1OrdersParentIdRequest;
export declare function PutV1OrdersParentIdRequestToJSON(value?: PutV1OrdersParentIdRequest | null): any;
