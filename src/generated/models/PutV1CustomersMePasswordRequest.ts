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
 * @interface PutV1CustomersMePasswordRequest
 */
export interface PutV1CustomersMePasswordRequest {
    /**
     * 
     * @type {string}
     * @memberof PutV1CustomersMePasswordRequest
     */
    currentPassword: string;
    /**
     * 
     * @type {string}
     * @memberof PutV1CustomersMePasswordRequest
     */
    newPassword: string;
}

/**
 * Check if a given object implements the PutV1CustomersMePasswordRequest interface.
 */
export function instanceOfPutV1CustomersMePasswordRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "currentPassword" in value;
    isInstance = isInstance && "newPassword" in value;

    return isInstance;
}

export function PutV1CustomersMePasswordRequestFromJSON(json: any): PutV1CustomersMePasswordRequest {
    return PutV1CustomersMePasswordRequestFromJSONTyped(json, false);
}

export function PutV1CustomersMePasswordRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutV1CustomersMePasswordRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currentPassword': json['currentPassword'],
        'newPassword': json['newPassword'],
    };
}

export function PutV1CustomersMePasswordRequestToJSON(value?: PutV1CustomersMePasswordRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currentPassword': value.currentPassword,
        'newPassword': value.newPassword,
    };
}

