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
 * Validation rule interface.
 * @export
 * @interface CustomerDataValidationRuleInterface
 */
export interface CustomerDataValidationRuleInterface {
    /**
     * Validation rule name
     * @type {string}
     * @memberof CustomerDataValidationRuleInterface
     */
    name: string;
    /**
     * Validation rule value
     * @type {string}
     * @memberof CustomerDataValidationRuleInterface
     */
    value: string;
}

/**
 * Check if a given object implements the CustomerDataValidationRuleInterface interface.
 */
export function instanceOfCustomerDataValidationRuleInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function CustomerDataValidationRuleInterfaceFromJSON(json: any): CustomerDataValidationRuleInterface {
    return CustomerDataValidationRuleInterfaceFromJSONTyped(json, false);
}

export function CustomerDataValidationRuleInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerDataValidationRuleInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'value': json['value'],
    };
}

export function CustomerDataValidationRuleInterfaceToJSON(value?: CustomerDataValidationRuleInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': value.value,
    };
}

