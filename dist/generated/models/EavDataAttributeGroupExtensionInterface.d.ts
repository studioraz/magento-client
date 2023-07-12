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
 * ExtensionInterface class for @see \Magento\Eav\Api\Data\AttributeGroupInterface
 * @export
 * @interface EavDataAttributeGroupExtensionInterface
 */
export interface EavDataAttributeGroupExtensionInterface {
    /**
     *
     * @type {string}
     * @memberof EavDataAttributeGroupExtensionInterface
     */
    attributeGroupCode?: string;
    /**
     *
     * @type {string}
     * @memberof EavDataAttributeGroupExtensionInterface
     */
    sortOrder?: string;
}
/**
 * Check if a given object implements the EavDataAttributeGroupExtensionInterface interface.
 */
export declare function instanceOfEavDataAttributeGroupExtensionInterface(value: object): boolean;
export declare function EavDataAttributeGroupExtensionInterfaceFromJSON(json: any): EavDataAttributeGroupExtensionInterface;
export declare function EavDataAttributeGroupExtensionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): EavDataAttributeGroupExtensionInterface;
export declare function EavDataAttributeGroupExtensionInterfaceToJSON(value?: EavDataAttributeGroupExtensionInterface | null): any;
