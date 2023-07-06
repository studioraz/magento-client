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
 * 
 * @export
 * @interface PutV1CustomersMeActivateRequest
 */
export interface PutV1CustomersMeActivateRequest {
    /**
     * 
     * @type {string}
     * @memberof PutV1CustomersMeActivateRequest
     */
    confirmationKey: string;
}

/**
 * Check if a given object implements the PutV1CustomersMeActivateRequest interface.
 */
export function instanceOfPutV1CustomersMeActivateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "confirmationKey" in value;

    return isInstance;
}

export function PutV1CustomersMeActivateRequestFromJSON(json: any): PutV1CustomersMeActivateRequest {
    return PutV1CustomersMeActivateRequestFromJSONTyped(json, false);
}

export function PutV1CustomersMeActivateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutV1CustomersMeActivateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'confirmationKey': json['confirmationKey'],
    };
}

export function PutV1CustomersMeActivateRequestToJSON(value?: PutV1CustomersMeActivateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'confirmationKey': value.confirmationKey,
    };
}

