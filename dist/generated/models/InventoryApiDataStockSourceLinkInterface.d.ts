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
import type { InventoryApiDataStockSourceLinkExtensionInterface } from './InventoryApiDataStockSourceLinkExtensionInterface';
/**
 * Represents relation between Stock and Source entities. Used fully qualified namespaces in annotations for proper work of WebApi request parser
 * @export
 * @interface InventoryApiDataStockSourceLinkInterface
 */
export interface InventoryApiDataStockSourceLinkInterface {
    /**
     * Stock id
     * @type {number}
     * @memberof InventoryApiDataStockSourceLinkInterface
     */
    stockId?: number;
    /**
     * Source code of the link
     * @type {string}
     * @memberof InventoryApiDataStockSourceLinkInterface
     */
    sourceCode?: string;
    /**
     * Priority of the link
     * @type {number}
     * @memberof InventoryApiDataStockSourceLinkInterface
     */
    priority?: number;
    /**
     *
     * @type {InventoryApiDataStockSourceLinkExtensionInterface}
     * @memberof InventoryApiDataStockSourceLinkInterface
     */
    extensionAttributes?: InventoryApiDataStockSourceLinkExtensionInterface;
}
/**
 * Check if a given object implements the InventoryApiDataStockSourceLinkInterface interface.
 */
export declare function instanceOfInventoryApiDataStockSourceLinkInterface(value: object): boolean;
export declare function InventoryApiDataStockSourceLinkInterfaceFromJSON(json: any): InventoryApiDataStockSourceLinkInterface;
export declare function InventoryApiDataStockSourceLinkInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventoryApiDataStockSourceLinkInterface;
export declare function InventoryApiDataStockSourceLinkInterfaceToJSON(value?: InventoryApiDataStockSourceLinkInterface | null): any;