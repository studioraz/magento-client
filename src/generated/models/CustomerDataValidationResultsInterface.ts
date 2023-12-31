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
 * Validation results interface.
 * @export
 * @interface CustomerDataValidationResultsInterface
 */
export interface CustomerDataValidationResultsInterface {
    /**
     * If the provided data is valid.
     * @type {boolean}
     * @memberof CustomerDataValidationResultsInterface
     */
    valid: boolean;
    /**
     * Error messages as array in case of validation failure, else return empty array.
     * @type {Array<string>}
     * @memberof CustomerDataValidationResultsInterface
     */
    messages: Array<string>;
}

/**
 * Check if a given object implements the CustomerDataValidationResultsInterface interface.
 */
export function instanceOfCustomerDataValidationResultsInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "valid" in value;
    isInstance = isInstance && "messages" in value;

    return isInstance;
}

export function CustomerDataValidationResultsInterfaceFromJSON(json: any): CustomerDataValidationResultsInterface {
    return CustomerDataValidationResultsInterfaceFromJSONTyped(json, false);
}

export function CustomerDataValidationResultsInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerDataValidationResultsInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'valid': json['valid'],
        'messages': json['messages'],
    };
}

export function CustomerDataValidationResultsInterfaceToJSON(value?: CustomerDataValidationResultsInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'valid': value.valid,
        'messages': value.messages,
    };
}

