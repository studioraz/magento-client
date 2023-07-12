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
import type { DirectoryDataExchangeRateInterface } from './DirectoryDataExchangeRateInterface';
/**
 * Currency Information interface.
 * @export
 * @interface DirectoryDataCurrencyInformationInterface
 */
export interface DirectoryDataCurrencyInformationInterface {
    /**
     * The base currency code for the store.
     * @type {string}
     * @memberof DirectoryDataCurrencyInformationInterface
     */
    baseCurrencyCode: string;
    /**
     * The currency symbol of the base currency for the store.
     * @type {string}
     * @memberof DirectoryDataCurrencyInformationInterface
     */
    baseCurrencySymbol: string;
    /**
     * The default display currency code for the store.
     * @type {string}
     * @memberof DirectoryDataCurrencyInformationInterface
     */
    defaultDisplayCurrencyCode: string;
    /**
     * The currency symbol of the default display currency for the store.
     * @type {string}
     * @memberof DirectoryDataCurrencyInformationInterface
     */
    defaultDisplayCurrencySymbol: string;
    /**
     * The list of allowed currency codes for the store.
     * @type {Array<string>}
     * @memberof DirectoryDataCurrencyInformationInterface
     */
    availableCurrencyCodes: Array<string>;
    /**
     * The list of exchange rate information for the store.
     * @type {Array<DirectoryDataExchangeRateInterface>}
     * @memberof DirectoryDataCurrencyInformationInterface
     */
    exchangeRates: Array<DirectoryDataExchangeRateInterface>;
    /**
     * ExtensionInterface class for @see \Magento\Directory\Api\Data\CurrencyInformationInterface
     * @type {object}
     * @memberof DirectoryDataCurrencyInformationInterface
     */
    extensionAttributes?: object;
}
/**
 * Check if a given object implements the DirectoryDataCurrencyInformationInterface interface.
 */
export declare function instanceOfDirectoryDataCurrencyInformationInterface(value: object): boolean;
export declare function DirectoryDataCurrencyInformationInterfaceFromJSON(json: any): DirectoryDataCurrencyInformationInterface;
export declare function DirectoryDataCurrencyInformationInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): DirectoryDataCurrencyInformationInterface;
export declare function DirectoryDataCurrencyInformationInterfaceToJSON(value?: DirectoryDataCurrencyInformationInterface | null): any;
