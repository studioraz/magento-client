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
import type { DownloadableDataSampleInterface } from './DownloadableDataSampleInterface';
/**
 *
 * @export
 * @interface PostV1ProductsSkuDownloadablelinksSamplesRequest
 */
export interface PostV1ProductsSkuDownloadablelinksSamplesRequest {
    /**
     *
     * @type {DownloadableDataSampleInterface}
     * @memberof PostV1ProductsSkuDownloadablelinksSamplesRequest
     */
    sample: DownloadableDataSampleInterface;
    /**
     *
     * @type {boolean}
     * @memberof PostV1ProductsSkuDownloadablelinksSamplesRequest
     */
    isGlobalScopeContent?: boolean;
}
/**
 * Check if a given object implements the PostV1ProductsSkuDownloadablelinksSamplesRequest interface.
 */
export declare function instanceOfPostV1ProductsSkuDownloadablelinksSamplesRequest(value: object): boolean;
export declare function PostV1ProductsSkuDownloadablelinksSamplesRequestFromJSON(json: any): PostV1ProductsSkuDownloadablelinksSamplesRequest;
export declare function PostV1ProductsSkuDownloadablelinksSamplesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostV1ProductsSkuDownloadablelinksSamplesRequest;
export declare function PostV1ProductsSkuDownloadablelinksSamplesRequestToJSON(value?: PostV1ProductsSkuDownloadablelinksSamplesRequest | null): any;
