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
import type { QuoteDataAddressInterface } from './QuoteDataAddressInterface';
import {
    QuoteDataAddressInterfaceFromJSON,
    QuoteDataAddressInterfaceFromJSONTyped,
    QuoteDataAddressInterfaceToJSON,
} from './QuoteDataAddressInterface';

/**
 * 
 * @export
 * @interface PostV1CartsCartIdBillingaddressRequest
 */
export interface PostV1CartsCartIdBillingaddressRequest {
    /**
     * 
     * @type {QuoteDataAddressInterface}
     * @memberof PostV1CartsCartIdBillingaddressRequest
     */
    address: QuoteDataAddressInterface;
    /**
     * 
     * @type {boolean}
     * @memberof PostV1CartsCartIdBillingaddressRequest
     */
    useForShipping?: boolean;
}

/**
 * Check if a given object implements the PostV1CartsCartIdBillingaddressRequest interface.
 */
export function instanceOfPostV1CartsCartIdBillingaddressRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "address" in value;

    return isInstance;
}

export function PostV1CartsCartIdBillingaddressRequestFromJSON(json: any): PostV1CartsCartIdBillingaddressRequest {
    return PostV1CartsCartIdBillingaddressRequestFromJSONTyped(json, false);
}

export function PostV1CartsCartIdBillingaddressRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostV1CartsCartIdBillingaddressRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': QuoteDataAddressInterfaceFromJSON(json['address']),
        'useForShipping': !exists(json, 'useForShipping') ? undefined : json['useForShipping'],
    };
}

export function PostV1CartsCartIdBillingaddressRequestToJSON(value?: PostV1CartsCartIdBillingaddressRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': QuoteDataAddressInterfaceToJSON(value.address),
        'useForShipping': value.useForShipping,
    };
}

