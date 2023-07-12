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
 * @interface PostV1ProductsAttributesetsAttributesRequest
 */
export interface PostV1ProductsAttributesetsAttributesRequest {
    /**
     *
     * @type {number}
     * @memberof PostV1ProductsAttributesetsAttributesRequest
     */
    attributeSetId: number;
    /**
     *
     * @type {number}
     * @memberof PostV1ProductsAttributesetsAttributesRequest
     */
    attributeGroupId: number;
    /**
     *
     * @type {string}
     * @memberof PostV1ProductsAttributesetsAttributesRequest
     */
    attributeCode: string;
    /**
     *
     * @type {number}
     * @memberof PostV1ProductsAttributesetsAttributesRequest
     */
    sortOrder: number;
}
/**
 * Check if a given object implements the PostV1ProductsAttributesetsAttributesRequest interface.
 */
export declare function instanceOfPostV1ProductsAttributesetsAttributesRequest(value: object): boolean;
export declare function PostV1ProductsAttributesetsAttributesRequestFromJSON(json: any): PostV1ProductsAttributesetsAttributesRequest;
export declare function PostV1ProductsAttributesetsAttributesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostV1ProductsAttributesetsAttributesRequest;
export declare function PostV1ProductsAttributesetsAttributesRequestToJSON(value?: PostV1ProductsAttributesetsAttributesRequest | null): any;