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
 * Interface CurrencyInterface
 * @export
 * @interface QuoteDataCurrencyInterface
 */
export interface QuoteDataCurrencyInterface {
    /**
     * Global currency code
     * @type {string}
     * @memberof QuoteDataCurrencyInterface
     */
    globalCurrencyCode?: string;
    /**
     * Base currency code
     * @type {string}
     * @memberof QuoteDataCurrencyInterface
     */
    baseCurrencyCode?: string;
    /**
     * Store currency code
     * @type {string}
     * @memberof QuoteDataCurrencyInterface
     */
    storeCurrencyCode?: string;
    /**
     * Quote currency code
     * @type {string}
     * @memberof QuoteDataCurrencyInterface
     */
    quoteCurrencyCode?: string;
    /**
     * Store currency to base currency rate
     * @type {number}
     * @memberof QuoteDataCurrencyInterface
     */
    storeToBaseRate?: number;
    /**
     * Store currency to quote currency rate
     * @type {number}
     * @memberof QuoteDataCurrencyInterface
     */
    storeToQuoteRate?: number;
    /**
     * Base currency to global currency rate
     * @type {number}
     * @memberof QuoteDataCurrencyInterface
     */
    baseToGlobalRate?: number;
    /**
     * Base currency to quote currency rate
     * @type {number}
     * @memberof QuoteDataCurrencyInterface
     */
    baseToQuoteRate?: number;
    /**
     * ExtensionInterface class for @see \Magento\Quote\Api\Data\CurrencyInterface
     * @type {object}
     * @memberof QuoteDataCurrencyInterface
     */
    extensionAttributes?: object;
}

/**
 * Check if a given object implements the QuoteDataCurrencyInterface interface.
 */
export function instanceOfQuoteDataCurrencyInterface(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function QuoteDataCurrencyInterfaceFromJSON(json: any): QuoteDataCurrencyInterface {
    return QuoteDataCurrencyInterfaceFromJSONTyped(json, false);
}

export function QuoteDataCurrencyInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuoteDataCurrencyInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'globalCurrencyCode': !exists(json, 'global_currency_code') ? undefined : json['global_currency_code'],
        'baseCurrencyCode': !exists(json, 'base_currency_code') ? undefined : json['base_currency_code'],
        'storeCurrencyCode': !exists(json, 'store_currency_code') ? undefined : json['store_currency_code'],
        'quoteCurrencyCode': !exists(json, 'quote_currency_code') ? undefined : json['quote_currency_code'],
        'storeToBaseRate': !exists(json, 'store_to_base_rate') ? undefined : json['store_to_base_rate'],
        'storeToQuoteRate': !exists(json, 'store_to_quote_rate') ? undefined : json['store_to_quote_rate'],
        'baseToGlobalRate': !exists(json, 'base_to_global_rate') ? undefined : json['base_to_global_rate'],
        'baseToQuoteRate': !exists(json, 'base_to_quote_rate') ? undefined : json['base_to_quote_rate'],
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}

export function QuoteDataCurrencyInterfaceToJSON(value?: QuoteDataCurrencyInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'global_currency_code': value.globalCurrencyCode,
        'base_currency_code': value.baseCurrencyCode,
        'store_currency_code': value.storeCurrencyCode,
        'quote_currency_code': value.quoteCurrencyCode,
        'store_to_base_rate': value.storeToBaseRate,
        'store_to_quote_rate': value.storeToQuoteRate,
        'base_to_global_rate': value.baseToGlobalRate,
        'base_to_quote_rate': value.baseToQuoteRate,
        'extension_attributes': value.extensionAttributes,
    };
}

