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
 *
 * @export
 * @interface CatalogDataProductAttributeTypeInterface
 */
export interface CatalogDataProductAttributeTypeInterface {
    /**
     * Value
     * @type {string}
     * @memberof CatalogDataProductAttributeTypeInterface
     */
    value: string;
    /**
     * Type label
     * @type {string}
     * @memberof CatalogDataProductAttributeTypeInterface
     */
    label: string;
    /**
     * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductAttributeTypeInterface
     * @type {object}
     * @memberof CatalogDataProductAttributeTypeInterface
     */
    extensionAttributes?: object;
}
/**
 * Check if a given object implements the CatalogDataProductAttributeTypeInterface interface.
 */
export declare function instanceOfCatalogDataProductAttributeTypeInterface(value: object): boolean;
export declare function CatalogDataProductAttributeTypeInterfaceFromJSON(json: any): CatalogDataProductAttributeTypeInterface;
export declare function CatalogDataProductAttributeTypeInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogDataProductAttributeTypeInterface;
export declare function CatalogDataProductAttributeTypeInterfaceToJSON(value?: CatalogDataProductAttributeTypeInterface | null): any;
