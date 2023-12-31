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
import type { EavDataAttributeOptionLabelInterface } from './EavDataAttributeOptionLabelInterface';
/**
 * Created from:
 * @export
 * @interface EavDataAttributeOptionInterface
 */
export interface EavDataAttributeOptionInterface {
    /**
     * Option label
     * @type {string}
     * @memberof EavDataAttributeOptionInterface
     */
    label: string;
    /**
     * Option value
     * @type {string}
     * @memberof EavDataAttributeOptionInterface
     */
    value: string;
    /**
     * Option order
     * @type {number}
     * @memberof EavDataAttributeOptionInterface
     */
    sortOrder?: number;
    /**
     * Default
     * @type {boolean}
     * @memberof EavDataAttributeOptionInterface
     */
    isDefault?: boolean;
    /**
     * Option label for store scopes
     * @type {Array<EavDataAttributeOptionLabelInterface>}
     * @memberof EavDataAttributeOptionInterface
     */
    storeLabels?: Array<EavDataAttributeOptionLabelInterface>;
}
/**
 * Check if a given object implements the EavDataAttributeOptionInterface interface.
 */
export declare function instanceOfEavDataAttributeOptionInterface(value: object): boolean;
export declare function EavDataAttributeOptionInterfaceFromJSON(json: any): EavDataAttributeOptionInterface;
export declare function EavDataAttributeOptionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): EavDataAttributeOptionInterface;
export declare function EavDataAttributeOptionInterfaceToJSON(value?: EavDataAttributeOptionInterface | null): any;
