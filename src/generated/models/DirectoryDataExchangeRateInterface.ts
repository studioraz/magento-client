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
 * Exchange Rate interface.
 * @export
 * @interface DirectoryDataExchangeRateInterface
 */
export interface DirectoryDataExchangeRateInterface {
    /**
     * The currency code associated with the exchange rate.
     * @type {string}
     * @memberof DirectoryDataExchangeRateInterface
     */
    currencyTo: string;
    /**
     * The exchange rate for the associated currency and the store's base currency.
     * @type {number}
     * @memberof DirectoryDataExchangeRateInterface
     */
    rate: number;
    /**
     * ExtensionInterface class for @see \Magento\Directory\Api\Data\ExchangeRateInterface
     * @type {object}
     * @memberof DirectoryDataExchangeRateInterface
     */
    extensionAttributes?: object;
}

/**
 * Check if a given object implements the DirectoryDataExchangeRateInterface interface.
 */
export function instanceOfDirectoryDataExchangeRateInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "currencyTo" in value;
    isInstance = isInstance && "rate" in value;

    return isInstance;
}

export function DirectoryDataExchangeRateInterfaceFromJSON(json: any): DirectoryDataExchangeRateInterface {
    return DirectoryDataExchangeRateInterfaceFromJSONTyped(json, false);
}

export function DirectoryDataExchangeRateInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): DirectoryDataExchangeRateInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currencyTo': json['currency_to'],
        'rate': json['rate'],
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}

export function DirectoryDataExchangeRateInterfaceToJSON(value?: DirectoryDataExchangeRateInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currency_to': value.currencyTo,
        'rate': value.rate,
        'extension_attributes': value.extensionAttributes,
    };
}

