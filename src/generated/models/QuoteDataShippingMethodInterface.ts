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
 * Interface ShippingMethodInterface
 * @export
 * @interface QuoteDataShippingMethodInterface
 */
export interface QuoteDataShippingMethodInterface {
    /**
     * Shipping carrier code.
     * @type {string}
     * @memberof QuoteDataShippingMethodInterface
     */
    carrierCode: string;
    /**
     * Shipping method code.
     * @type {string}
     * @memberof QuoteDataShippingMethodInterface
     */
    methodCode: string;
    /**
     * Shipping carrier title. Otherwise, null.
     * @type {string}
     * @memberof QuoteDataShippingMethodInterface
     */
    carrierTitle?: string;
    /**
     * Shipping method title. Otherwise, null.
     * @type {string}
     * @memberof QuoteDataShippingMethodInterface
     */
    methodTitle?: string;
    /**
     * Shipping amount in store currency.
     * @type {number}
     * @memberof QuoteDataShippingMethodInterface
     */
    amount: number;
    /**
     * Shipping amount in base currency.
     * @type {number}
     * @memberof QuoteDataShippingMethodInterface
     */
    baseAmount: number;
    /**
     * The value of the availability flag for the current shipping method.
     * @type {boolean}
     * @memberof QuoteDataShippingMethodInterface
     */
    available: boolean;
    /**
     * ExtensionInterface class for @see \Magento\Quote\Api\Data\ShippingMethodInterface
     * @type {object}
     * @memberof QuoteDataShippingMethodInterface
     */
    extensionAttributes?: object;
    /**
     * Shipping Error message.
     * @type {string}
     * @memberof QuoteDataShippingMethodInterface
     */
    errorMessage: string;
    /**
     * Shipping price excl tax.
     * @type {number}
     * @memberof QuoteDataShippingMethodInterface
     */
    priceExclTax: number;
    /**
     * Shipping price incl tax.
     * @type {number}
     * @memberof QuoteDataShippingMethodInterface
     */
    priceInclTax: number;
}

/**
 * Check if a given object implements the QuoteDataShippingMethodInterface interface.
 */
export function instanceOfQuoteDataShippingMethodInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "carrierCode" in value;
    isInstance = isInstance && "methodCode" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "baseAmount" in value;
    isInstance = isInstance && "available" in value;
    isInstance = isInstance && "errorMessage" in value;
    isInstance = isInstance && "priceExclTax" in value;
    isInstance = isInstance && "priceInclTax" in value;

    return isInstance;
}

export function QuoteDataShippingMethodInterfaceFromJSON(json: any): QuoteDataShippingMethodInterface {
    return QuoteDataShippingMethodInterfaceFromJSONTyped(json, false);
}

export function QuoteDataShippingMethodInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuoteDataShippingMethodInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'carrierCode': json['carrier_code'],
        'methodCode': json['method_code'],
        'carrierTitle': !exists(json, 'carrier_title') ? undefined : json['carrier_title'],
        'methodTitle': !exists(json, 'method_title') ? undefined : json['method_title'],
        'amount': json['amount'],
        'baseAmount': json['base_amount'],
        'available': json['available'],
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
        'errorMessage': json['error_message'],
        'priceExclTax': json['price_excl_tax'],
        'priceInclTax': json['price_incl_tax'],
    };
}

export function QuoteDataShippingMethodInterfaceToJSON(value?: QuoteDataShippingMethodInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'carrier_code': value.carrierCode,
        'method_code': value.methodCode,
        'carrier_title': value.carrierTitle,
        'method_title': value.methodTitle,
        'amount': value.amount,
        'base_amount': value.baseAmount,
        'available': value.available,
        'extension_attributes': value.extensionAttributes,
        'error_message': value.errorMessage,
        'price_excl_tax': value.priceExclTax,
        'price_incl_tax': value.priceInclTax,
    };
}

