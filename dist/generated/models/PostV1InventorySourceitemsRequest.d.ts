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
import type { InventoryApiDataSourceItemInterface } from './InventoryApiDataSourceItemInterface';
/**
 *
 * @export
 * @interface PostV1InventorySourceitemsRequest
 */
export interface PostV1InventorySourceitemsRequest {
    /**
     *
     * @type {Array<InventoryApiDataSourceItemInterface>}
     * @memberof PostV1InventorySourceitemsRequest
     */
    sourceItems: Array<InventoryApiDataSourceItemInterface>;
}
/**
 * Check if a given object implements the PostV1InventorySourceitemsRequest interface.
 */
export declare function instanceOfPostV1InventorySourceitemsRequest(value: object): boolean;
export declare function PostV1InventorySourceitemsRequestFromJSON(json: any): PostV1InventorySourceitemsRequest;
export declare function PostV1InventorySourceitemsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostV1InventorySourceitemsRequest;
export declare function PostV1InventorySourceitemsRequestToJSON(value?: PostV1InventorySourceitemsRequest | null): any;