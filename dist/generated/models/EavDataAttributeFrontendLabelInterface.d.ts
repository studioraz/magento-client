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
 * Interface AttributeFrontendLabelInterface
 * @export
 * @interface EavDataAttributeFrontendLabelInterface
 */
export interface EavDataAttributeFrontendLabelInterface {
    /**
     * Store id
     * @type {number}
     * @memberof EavDataAttributeFrontendLabelInterface
     */
    storeId?: number;
    /**
     * Option label
     * @type {string}
     * @memberof EavDataAttributeFrontendLabelInterface
     */
    label?: string;
}
/**
 * Check if a given object implements the EavDataAttributeFrontendLabelInterface interface.
 */
export declare function instanceOfEavDataAttributeFrontendLabelInterface(value: object): boolean;
export declare function EavDataAttributeFrontendLabelInterfaceFromJSON(json: any): EavDataAttributeFrontendLabelInterface;
export declare function EavDataAttributeFrontendLabelInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): EavDataAttributeFrontendLabelInterface;
export declare function EavDataAttributeFrontendLabelInterfaceToJSON(value?: EavDataAttributeFrontendLabelInterface | null): any;
