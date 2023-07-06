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
 * @interface PostV1CouponsDeleteByCodesRequest
 */
export interface PostV1CouponsDeleteByCodesRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof PostV1CouponsDeleteByCodesRequest
     */
    codes: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof PostV1CouponsDeleteByCodesRequest
     */
    ignoreInvalidCoupons?: boolean;
}

/**
 * Check if a given object implements the PostV1CouponsDeleteByCodesRequest interface.
 */
export function instanceOfPostV1CouponsDeleteByCodesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "codes" in value;

    return isInstance;
}

export function PostV1CouponsDeleteByCodesRequestFromJSON(json: any): PostV1CouponsDeleteByCodesRequest {
    return PostV1CouponsDeleteByCodesRequestFromJSONTyped(json, false);
}

export function PostV1CouponsDeleteByCodesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostV1CouponsDeleteByCodesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'codes': json['codes'],
        'ignoreInvalidCoupons': !exists(json, 'ignoreInvalidCoupons') ? undefined : json['ignoreInvalidCoupons'],
    };
}

export function PostV1CouponsDeleteByCodesRequestToJSON(value?: PostV1CouponsDeleteByCodesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'codes': value.codes,
        'ignoreInvalidCoupons': value.ignoreInvalidCoupons,
    };
}

