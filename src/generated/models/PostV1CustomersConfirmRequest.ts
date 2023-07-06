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
 * @interface PostV1CustomersConfirmRequest
 */
export interface PostV1CustomersConfirmRequest {
    /**
     * 
     * @type {string}
     * @memberof PostV1CustomersConfirmRequest
     */
    email: string;
    /**
     * 
     * @type {number}
     * @memberof PostV1CustomersConfirmRequest
     */
    websiteId: number;
    /**
     * 
     * @type {string}
     * @memberof PostV1CustomersConfirmRequest
     */
    redirectUrl?: string;
}

/**
 * Check if a given object implements the PostV1CustomersConfirmRequest interface.
 */
export function instanceOfPostV1CustomersConfirmRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "websiteId" in value;

    return isInstance;
}

export function PostV1CustomersConfirmRequestFromJSON(json: any): PostV1CustomersConfirmRequest {
    return PostV1CustomersConfirmRequestFromJSONTyped(json, false);
}

export function PostV1CustomersConfirmRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostV1CustomersConfirmRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
        'websiteId': json['websiteId'],
        'redirectUrl': !exists(json, 'redirectUrl') ? undefined : json['redirectUrl'],
    };
}

export function PostV1CustomersConfirmRequestToJSON(value?: PostV1CustomersConfirmRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'websiteId': value.websiteId,
        'redirectUrl': value.redirectUrl,
    };
}

