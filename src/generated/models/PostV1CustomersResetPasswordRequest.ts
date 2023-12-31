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
 * @interface PostV1CustomersResetPasswordRequest
 */
export interface PostV1CustomersResetPasswordRequest {
    /**
     * If empty value given then the customer will be matched by the RP token.
     * @type {string}
     * @memberof PostV1CustomersResetPasswordRequest
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof PostV1CustomersResetPasswordRequest
     */
    resetToken: string;
    /**
     * 
     * @type {string}
     * @memberof PostV1CustomersResetPasswordRequest
     */
    newPassword: string;
}

/**
 * Check if a given object implements the PostV1CustomersResetPasswordRequest interface.
 */
export function instanceOfPostV1CustomersResetPasswordRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "resetToken" in value;
    isInstance = isInstance && "newPassword" in value;

    return isInstance;
}

export function PostV1CustomersResetPasswordRequestFromJSON(json: any): PostV1CustomersResetPasswordRequest {
    return PostV1CustomersResetPasswordRequestFromJSONTyped(json, false);
}

export function PostV1CustomersResetPasswordRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostV1CustomersResetPasswordRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
        'resetToken': json['resetToken'],
        'newPassword': json['newPassword'],
    };
}

export function PostV1CustomersResetPasswordRequestToJSON(value?: PostV1CustomersResetPasswordRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'resetToken': value.resetToken,
        'newPassword': value.newPassword,
    };
}

