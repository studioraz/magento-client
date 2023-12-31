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
import type { ErrorParametersItem } from './ErrorParametersItem';
import {
    ErrorParametersItemFromJSON,
    ErrorParametersItemFromJSONTyped,
    ErrorParametersItemToJSON,
} from './ErrorParametersItem';

/**
 * Error details
 * @export
 * @interface ErrorErrorsItem
 */
export interface ErrorErrorsItem {
    /**
     * Error message
     * @type {string}
     * @memberof ErrorErrorsItem
     */
    message?: string;
    /**
     * Error parameters list
     * @type {Array<ErrorParametersItem>}
     * @memberof ErrorErrorsItem
     */
    parameters?: Array<ErrorParametersItem>;
}

/**
 * Check if a given object implements the ErrorErrorsItem interface.
 */
export function instanceOfErrorErrorsItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ErrorErrorsItemFromJSON(json: any): ErrorErrorsItem {
    return ErrorErrorsItemFromJSONTyped(json, false);
}

export function ErrorErrorsItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorErrorsItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
        'parameters': !exists(json, 'parameters') ? undefined : ((json['parameters'] as Array<any>).map(ErrorParametersItemFromJSON)),
    };
}

export function ErrorErrorsItemToJSON(value?: ErrorErrorsItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'parameters': value.parameters === undefined ? undefined : ((value.parameters as Array<any>).map(ErrorParametersItemToJSON)),
    };
}

