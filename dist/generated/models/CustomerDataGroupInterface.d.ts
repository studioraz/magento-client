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
import type { CustomerDataGroupExtensionInterface } from './CustomerDataGroupExtensionInterface';
/**
 * Customer group interface.
 * @export
 * @interface CustomerDataGroupInterface
 */
export interface CustomerDataGroupInterface {
    /**
     * Id
     * @type {number}
     * @memberof CustomerDataGroupInterface
     */
    id?: number;
    /**
     * Code
     * @type {string}
     * @memberof CustomerDataGroupInterface
     */
    code: string;
    /**
     * Tax class id
     * @type {number}
     * @memberof CustomerDataGroupInterface
     */
    taxClassId: number;
    /**
     * Tax class name
     * @type {string}
     * @memberof CustomerDataGroupInterface
     */
    taxClassName?: string;
    /**
     *
     * @type {CustomerDataGroupExtensionInterface}
     * @memberof CustomerDataGroupInterface
     */
    extensionAttributes?: CustomerDataGroupExtensionInterface;
}
/**
 * Check if a given object implements the CustomerDataGroupInterface interface.
 */
export declare function instanceOfCustomerDataGroupInterface(value: object): boolean;
export declare function CustomerDataGroupInterfaceFromJSON(json: any): CustomerDataGroupInterface;
export declare function CustomerDataGroupInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerDataGroupInterface;
export declare function CustomerDataGroupInterfaceToJSON(value?: CustomerDataGroupInterface | null): any;
