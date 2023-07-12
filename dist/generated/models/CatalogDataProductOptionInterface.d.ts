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
import type { CatalogDataProductOptionExtensionInterface } from './CatalogDataProductOptionExtensionInterface';
/**
 * Product option interface
 * @export
 * @interface CatalogDataProductOptionInterface
 */
export interface CatalogDataProductOptionInterface {
    /**
     *
     * @type {CatalogDataProductOptionExtensionInterface}
     * @memberof CatalogDataProductOptionInterface
     */
    extensionAttributes?: CatalogDataProductOptionExtensionInterface;
}
/**
 * Check if a given object implements the CatalogDataProductOptionInterface interface.
 */
export declare function instanceOfCatalogDataProductOptionInterface(value: object): boolean;
export declare function CatalogDataProductOptionInterfaceFromJSON(json: any): CatalogDataProductOptionInterface;
export declare function CatalogDataProductOptionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogDataProductOptionInterface;
export declare function CatalogDataProductOptionInterfaceToJSON(value?: CatalogDataProductOptionInterface | null): any;