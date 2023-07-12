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
 * ExtensionInterface class for @see \Magento\Customer\Api\Data\GroupInterface
 * @export
 * @interface CustomerDataGroupExtensionInterface
 */
export interface CustomerDataGroupExtensionInterface {
    /**
     *
     * @type {Array<number>}
     * @memberof CustomerDataGroupExtensionInterface
     */
    excludeWebsiteIds?: Array<number>;
}
/**
 * Check if a given object implements the CustomerDataGroupExtensionInterface interface.
 */
export declare function instanceOfCustomerDataGroupExtensionInterface(value: object): boolean;
export declare function CustomerDataGroupExtensionInterfaceFromJSON(json: any): CustomerDataGroupExtensionInterface;
export declare function CustomerDataGroupExtensionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerDataGroupExtensionInterface;
export declare function CustomerDataGroupExtensionInterfaceToJSON(value?: CustomerDataGroupExtensionInterface | null): any;