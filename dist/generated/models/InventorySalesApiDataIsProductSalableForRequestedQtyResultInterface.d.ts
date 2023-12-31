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
import type { InventorySalesApiDataProductSalabilityErrorInterface } from './InventorySalesApiDataProductSalabilityErrorInterface';
/**
 * Represents "is product salable for requested quantity" result interface.
 * @export
 * @interface InventorySalesApiDataIsProductSalableForRequestedQtyResultInterface
 */
export interface InventorySalesApiDataIsProductSalableForRequestedQtyResultInterface {
    /**
     * Product sku from result.
     * @type {string}
     * @memberof InventorySalesApiDataIsProductSalableForRequestedQtyResultInterface
     */
    sku: string;
    /**
     * Stock id from result.
     * @type {number}
     * @memberof InventorySalesApiDataIsProductSalableForRequestedQtyResultInterface
     */
    stockId: number;
    /**
     * Is salable result.
     * @type {boolean}
     * @memberof InventorySalesApiDataIsProductSalableForRequestedQtyResultInterface
     */
    salable: boolean;
    /**
     * Errors from result.
     * @type {Array<InventorySalesApiDataProductSalabilityErrorInterface>}
     * @memberof InventorySalesApiDataIsProductSalableForRequestedQtyResultInterface
     */
    errors: Array<InventorySalesApiDataProductSalabilityErrorInterface>;
    /**
     * ExtensionInterface class for @see \Magento\InventorySalesApi\Api\Data\IsProductSalableForRequestedQtyResultInterface
     * @type {object}
     * @memberof InventorySalesApiDataIsProductSalableForRequestedQtyResultInterface
     */
    extensionAttributes?: object;
}
/**
 * Check if a given object implements the InventorySalesApiDataIsProductSalableForRequestedQtyResultInterface interface.
 */
export declare function instanceOfInventorySalesApiDataIsProductSalableForRequestedQtyResultInterface(value: object): boolean;
export declare function InventorySalesApiDataIsProductSalableForRequestedQtyResultInterfaceFromJSON(json: any): InventorySalesApiDataIsProductSalableForRequestedQtyResultInterface;
export declare function InventorySalesApiDataIsProductSalableForRequestedQtyResultInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventorySalesApiDataIsProductSalableForRequestedQtyResultInterface;
export declare function InventorySalesApiDataIsProductSalableForRequestedQtyResultInterfaceToJSON(value?: InventorySalesApiDataIsProductSalableForRequestedQtyResultInterface | null): any;
