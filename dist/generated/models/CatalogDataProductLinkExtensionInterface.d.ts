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
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductLinkInterface
 * @export
 * @interface CatalogDataProductLinkExtensionInterface
 */
export interface CatalogDataProductLinkExtensionInterface {
    /**
     *
     * @type {number}
     * @memberof CatalogDataProductLinkExtensionInterface
     */
    qty?: number;
}
/**
 * Check if a given object implements the CatalogDataProductLinkExtensionInterface interface.
 */
export declare function instanceOfCatalogDataProductLinkExtensionInterface(value: object): boolean;
export declare function CatalogDataProductLinkExtensionInterfaceFromJSON(json: any): CatalogDataProductLinkExtensionInterface;
export declare function CatalogDataProductLinkExtensionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogDataProductLinkExtensionInterface;
export declare function CatalogDataProductLinkExtensionInterfaceToJSON(value?: CatalogDataProductLinkExtensionInterface | null): any;
