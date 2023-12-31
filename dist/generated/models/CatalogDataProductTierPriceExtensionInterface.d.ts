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
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductTierPriceInterface
 * @export
 * @interface CatalogDataProductTierPriceExtensionInterface
 */
export interface CatalogDataProductTierPriceExtensionInterface {
    /**
     *
     * @type {number}
     * @memberof CatalogDataProductTierPriceExtensionInterface
     */
    percentageValue?: number;
    /**
     *
     * @type {number}
     * @memberof CatalogDataProductTierPriceExtensionInterface
     */
    websiteId?: number;
}
/**
 * Check if a given object implements the CatalogDataProductTierPriceExtensionInterface interface.
 */
export declare function instanceOfCatalogDataProductTierPriceExtensionInterface(value: object): boolean;
export declare function CatalogDataProductTierPriceExtensionInterfaceFromJSON(json: any): CatalogDataProductTierPriceExtensionInterface;
export declare function CatalogDataProductTierPriceExtensionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogDataProductTierPriceExtensionInterface;
export declare function CatalogDataProductTierPriceExtensionInterfaceToJSON(value?: CatalogDataProductTierPriceExtensionInterface | null): any;
