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
/**
 *
 * @export
 * @interface PutV1CartsCartIdRequest
 */
export interface PutV1CartsCartIdRequest {
    /**
     * The customer ID.
     * @type {number}
     * @memberof PutV1CartsCartIdRequest
     */
    customerId: number;
    /**
     *
     * @type {number}
     * @memberof PutV1CartsCartIdRequest
     */
    storeId: number;
}
/**
 * Check if a given object implements the PutV1CartsCartIdRequest interface.
 */
export declare function instanceOfPutV1CartsCartIdRequest(value: object): boolean;
export declare function PutV1CartsCartIdRequestFromJSON(json: any): PutV1CartsCartIdRequest;
export declare function PutV1CartsCartIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutV1CartsCartIdRequest;
export declare function PutV1CartsCartIdRequestToJSON(value?: PutV1CartsCartIdRequest | null): any;
