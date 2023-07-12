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
 * Price interface.
 * @export
 * @interface CatalogDataBasePriceInterface
 */
export interface CatalogDataBasePriceInterface {
    /**
     * Price.
     * @type {number}
     * @memberof CatalogDataBasePriceInterface
     */
    price: number;
    /**
     * Store id.
     * @type {number}
     * @memberof CatalogDataBasePriceInterface
     */
    storeId: number;
    /**
     * SKU.
     * @type {string}
     * @memberof CatalogDataBasePriceInterface
     */
    sku: string;
    /**
     * ExtensionInterface class for @see \Magento\Catalog\Api\Data\BasePriceInterface
     * @type {object}
     * @memberof CatalogDataBasePriceInterface
     */
    extensionAttributes?: object;
}
/**
 * Check if a given object implements the CatalogDataBasePriceInterface interface.
 */
export declare function instanceOfCatalogDataBasePriceInterface(value: object): boolean;
export declare function CatalogDataBasePriceInterfaceFromJSON(json: any): CatalogDataBasePriceInterface;
export declare function CatalogDataBasePriceInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogDataBasePriceInterface;
export declare function CatalogDataBasePriceInterfaceToJSON(value?: CatalogDataBasePriceInterface | null): any;
