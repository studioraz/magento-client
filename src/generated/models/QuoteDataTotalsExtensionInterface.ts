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
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalsInterface
 * @export
 * @interface QuoteDataTotalsExtensionInterface
 */
export interface QuoteDataTotalsExtensionInterface {
    /**
     * 
     * @type {string}
     * @memberof QuoteDataTotalsExtensionInterface
     */
    couponLabel?: string;
}

/**
 * Check if a given object implements the QuoteDataTotalsExtensionInterface interface.
 */
export function instanceOfQuoteDataTotalsExtensionInterface(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function QuoteDataTotalsExtensionInterfaceFromJSON(json: any): QuoteDataTotalsExtensionInterface {
    return QuoteDataTotalsExtensionInterfaceFromJSONTyped(json, false);
}

export function QuoteDataTotalsExtensionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuoteDataTotalsExtensionInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'couponLabel': !exists(json, 'coupon_label') ? undefined : json['coupon_label'],
    };
}

export function QuoteDataTotalsExtensionInterfaceToJSON(value?: QuoteDataTotalsExtensionInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'coupon_label': value.couponLabel,
    };
}

