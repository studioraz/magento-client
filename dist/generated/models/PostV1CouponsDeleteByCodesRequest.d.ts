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
 * @interface PostV1CouponsDeleteByCodesRequest
 */
export interface PostV1CouponsDeleteByCodesRequest {
    /**
     *
     * @type {Array<string>}
     * @memberof PostV1CouponsDeleteByCodesRequest
     */
    codes: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof PostV1CouponsDeleteByCodesRequest
     */
    ignoreInvalidCoupons?: boolean;
}
/**
 * Check if a given object implements the PostV1CouponsDeleteByCodesRequest interface.
 */
export declare function instanceOfPostV1CouponsDeleteByCodesRequest(value: object): boolean;
export declare function PostV1CouponsDeleteByCodesRequestFromJSON(json: any): PostV1CouponsDeleteByCodesRequest;
export declare function PostV1CouponsDeleteByCodesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostV1CouponsDeleteByCodesRequest;
export declare function PostV1CouponsDeleteByCodesRequestToJSON(value?: PostV1CouponsDeleteByCodesRequest | null): any;