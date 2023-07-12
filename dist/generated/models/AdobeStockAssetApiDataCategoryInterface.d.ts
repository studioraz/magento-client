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
 * Adobe Stock asset Category data class
 * @export
 * @interface AdobeStockAssetApiDataCategoryInterface
 */
export interface AdobeStockAssetApiDataCategoryInterface {
    /**
     * The id
     * @type {number}
     * @memberof AdobeStockAssetApiDataCategoryInterface
     */
    id?: number;
    /**
     * The category name
     * @type {string}
     * @memberof AdobeStockAssetApiDataCategoryInterface
     */
    name: string;
    /**
     * ExtensionInterface class for @see \Magento\AdobeStockAssetApi\Api\Data\CategoryInterface
     * @type {object}
     * @memberof AdobeStockAssetApiDataCategoryInterface
     */
    extensionAttributes: object;
}
/**
 * Check if a given object implements the AdobeStockAssetApiDataCategoryInterface interface.
 */
export declare function instanceOfAdobeStockAssetApiDataCategoryInterface(value: object): boolean;
export declare function AdobeStockAssetApiDataCategoryInterfaceFromJSON(json: any): AdobeStockAssetApiDataCategoryInterface;
export declare function AdobeStockAssetApiDataCategoryInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdobeStockAssetApiDataCategoryInterface;
export declare function AdobeStockAssetApiDataCategoryInterfaceToJSON(value?: AdobeStockAssetApiDataCategoryInterface | null): any;
