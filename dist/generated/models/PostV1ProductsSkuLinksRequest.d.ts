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
import type { CatalogDataProductLinkInterface } from './CatalogDataProductLinkInterface';
/**
 *
 * @export
 * @interface PostV1ProductsSkuLinksRequest
 */
export interface PostV1ProductsSkuLinksRequest {
    /**
     *
     * @type {Array<CatalogDataProductLinkInterface>}
     * @memberof PostV1ProductsSkuLinksRequest
     */
    items: Array<CatalogDataProductLinkInterface>;
}
/**
 * Check if a given object implements the PostV1ProductsSkuLinksRequest interface.
 */
export declare function instanceOfPostV1ProductsSkuLinksRequest(value: object): boolean;
export declare function PostV1ProductsSkuLinksRequestFromJSON(json: any): PostV1ProductsSkuLinksRequest;
export declare function PostV1ProductsSkuLinksRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostV1ProductsSkuLinksRequest;
export declare function PostV1ProductsSkuLinksRequestToJSON(value?: PostV1ProductsSkuLinksRequest | null): any;
