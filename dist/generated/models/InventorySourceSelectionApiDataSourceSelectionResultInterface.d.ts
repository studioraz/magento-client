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
import type { InventorySourceSelectionApiDataSourceSelectionItemInterface } from './InventorySourceSelectionApiDataSourceSelectionItemInterface';
/**
 * Result of how we will deduct product qty from different Sources
 * @export
 * @interface InventorySourceSelectionApiDataSourceSelectionResultInterface
 */
export interface InventorySourceSelectionApiDataSourceSelectionResultInterface {
    /**
     *
     * @type {Array<InventorySourceSelectionApiDataSourceSelectionItemInterface>}
     * @memberof InventorySourceSelectionApiDataSourceSelectionResultInterface
     */
    sourceSelectionItems: Array<InventorySourceSelectionApiDataSourceSelectionItemInterface>;
    /**
     *
     * @type {boolean}
     * @memberof InventorySourceSelectionApiDataSourceSelectionResultInterface
     */
    shippable: boolean;
    /**
     * ExtensionInterface class for @see \Magento\InventorySourceSelectionApi\Api\Data\SourceSelectionResultInterface
     * @type {object}
     * @memberof InventorySourceSelectionApiDataSourceSelectionResultInterface
     */
    extensionAttributes?: object;
}
/**
 * Check if a given object implements the InventorySourceSelectionApiDataSourceSelectionResultInterface interface.
 */
export declare function instanceOfInventorySourceSelectionApiDataSourceSelectionResultInterface(value: object): boolean;
export declare function InventorySourceSelectionApiDataSourceSelectionResultInterfaceFromJSON(json: any): InventorySourceSelectionApiDataSourceSelectionResultInterface;
export declare function InventorySourceSelectionApiDataSourceSelectionResultInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventorySourceSelectionApiDataSourceSelectionResultInterface;
export declare function InventorySourceSelectionApiDataSourceSelectionResultInterfaceToJSON(value?: InventorySourceSelectionApiDataSourceSelectionResultInterface | null): any;
