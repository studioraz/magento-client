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
 * Cost interface.
 * @export
 * @interface CatalogDataCostInterface
 */
export interface CatalogDataCostInterface {
    /**
     * Cost value.
     * @type {number}
     * @memberof CatalogDataCostInterface
     */
    cost: number;
    /**
     * Store id.
     * @type {number}
     * @memberof CatalogDataCostInterface
     */
    storeId: number;
    /**
     * SKU.
     * @type {string}
     * @memberof CatalogDataCostInterface
     */
    sku: string;
    /**
     * ExtensionInterface class for @see \Magento\Catalog\Api\Data\CostInterface
     * @type {object}
     * @memberof CatalogDataCostInterface
     */
    extensionAttributes?: object;
}
/**
 * Check if a given object implements the CatalogDataCostInterface interface.
 */
export declare function instanceOfCatalogDataCostInterface(value: object): boolean;
export declare function CatalogDataCostInterfaceFromJSON(json: any): CatalogDataCostInterface;
export declare function CatalogDataCostInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogDataCostInterface;
export declare function CatalogDataCostInterfaceToJSON(value?: CatalogDataCostInterface | null): any;
