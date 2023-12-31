/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * Tax class interface.
 * @export
 * @interface TaxDataTaxClassInterface
 */
export interface TaxDataTaxClassInterface {
    /**
     * Tax class ID.
     * @type {number}
     * @memberof TaxDataTaxClassInterface
     */
    classId?: number;
    /**
     * Tax class name.
     * @type {string}
     * @memberof TaxDataTaxClassInterface
     */
    className: string;
    /**
     * Tax class type.
     * @type {string}
     * @memberof TaxDataTaxClassInterface
     */
    classType: string;
    /**
     * ExtensionInterface class for @see \Magento\Tax\Api\Data\TaxClassInterface
     * @type {object}
     * @memberof TaxDataTaxClassInterface
     */
    extensionAttributes?: object;
}

/**
 * Check if a given object implements the TaxDataTaxClassInterface interface.
 */
export function instanceOfTaxDataTaxClassInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "className" in value;
    isInstance = isInstance && "classType" in value;

    return isInstance;
}

export function TaxDataTaxClassInterfaceFromJSON(json: any): TaxDataTaxClassInterface {
    return TaxDataTaxClassInterfaceFromJSONTyped(json, false);
}

export function TaxDataTaxClassInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxDataTaxClassInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'classId': !exists(json, 'class_id') ? undefined : json['class_id'],
        'className': json['class_name'],
        'classType': json['class_type'],
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}

export function TaxDataTaxClassInterfaceToJSON(value?: TaxDataTaxClassInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'class_id': value.classId,
        'class_name': value.className,
        'class_type': value.classType,
        'extension_attributes': value.extensionAttributes,
    };
}

