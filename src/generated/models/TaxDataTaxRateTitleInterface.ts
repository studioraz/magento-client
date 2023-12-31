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
 * Tax rate title interface.
 * @export
 * @interface TaxDataTaxRateTitleInterface
 */
export interface TaxDataTaxRateTitleInterface {
    /**
     * Store id
     * @type {string}
     * @memberof TaxDataTaxRateTitleInterface
     */
    storeId: string;
    /**
     * Title value
     * @type {string}
     * @memberof TaxDataTaxRateTitleInterface
     */
    value: string;
    /**
     * ExtensionInterface class for @see \Magento\Tax\Api\Data\TaxRateTitleInterface
     * @type {object}
     * @memberof TaxDataTaxRateTitleInterface
     */
    extensionAttributes?: object;
}

/**
 * Check if a given object implements the TaxDataTaxRateTitleInterface interface.
 */
export function instanceOfTaxDataTaxRateTitleInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "storeId" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function TaxDataTaxRateTitleInterfaceFromJSON(json: any): TaxDataTaxRateTitleInterface {
    return TaxDataTaxRateTitleInterfaceFromJSONTyped(json, false);
}

export function TaxDataTaxRateTitleInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxDataTaxRateTitleInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'storeId': json['store_id'],
        'value': json['value'],
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}

export function TaxDataTaxRateTitleInterfaceToJSON(value?: TaxDataTaxRateTitleInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'store_id': value.storeId,
        'value': value.value,
        'extension_attributes': value.extensionAttributes,
    };
}

