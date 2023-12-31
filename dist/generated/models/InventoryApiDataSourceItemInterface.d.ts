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
 * Represents amount of product on physical storage Entity id getter is missed because entity identifies by compound identifier (sku and source_code) Used fully qualified namespaces in annotations for proper work of WebApi request parser
 * @export
 * @interface InventoryApiDataSourceItemInterface
 */
export interface InventoryApiDataSourceItemInterface {
    /**
     * Source item sku
     * @type {string}
     * @memberof InventoryApiDataSourceItemInterface
     */
    sku?: string;
    /**
     * Source code
     * @type {string}
     * @memberof InventoryApiDataSourceItemInterface
     */
    sourceCode?: string;
    /**
     * Source item quantity
     * @type {number}
     * @memberof InventoryApiDataSourceItemInterface
     */
    quantity?: number;
    /**
     * Source item status (One of self::STATUS_*)
     * @type {number}
     * @memberof InventoryApiDataSourceItemInterface
     */
    status?: number;
    /**
     * ExtensionInterface class for @see \Magento\InventoryApi\Api\Data\SourceItemInterface
     * @type {object}
     * @memberof InventoryApiDataSourceItemInterface
     */
    extensionAttributes?: object;
}
/**
 * Check if a given object implements the InventoryApiDataSourceItemInterface interface.
 */
export declare function instanceOfInventoryApiDataSourceItemInterface(value: object): boolean;
export declare function InventoryApiDataSourceItemInterfaceFromJSON(json: any): InventoryApiDataSourceItemInterface;
export declare function InventoryApiDataSourceItemInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventoryApiDataSourceItemInterface;
export declare function InventoryApiDataSourceItemInterfaceToJSON(value?: InventoryApiDataSourceItemInterface | null): any;
