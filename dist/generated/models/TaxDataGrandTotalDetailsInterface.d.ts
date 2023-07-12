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
import type { TaxDataGrandTotalRatesInterface } from './TaxDataGrandTotalRatesInterface';
/**
 * Interface GrandTotalDetailsInterface
 * @export
 * @interface TaxDataGrandTotalDetailsInterface
 */
export interface TaxDataGrandTotalDetailsInterface {
    /**
     * Tax amount value
     * @type {number}
     * @memberof TaxDataGrandTotalDetailsInterface
     */
    amount: number;
    /**
     * Tax rates info
     * @type {Array<TaxDataGrandTotalRatesInterface>}
     * @memberof TaxDataGrandTotalDetailsInterface
     */
    rates: Array<TaxDataGrandTotalRatesInterface>;
    /**
     * Group identifier
     * @type {number}
     * @memberof TaxDataGrandTotalDetailsInterface
     */
    groupId: number;
}
/**
 * Check if a given object implements the TaxDataGrandTotalDetailsInterface interface.
 */
export declare function instanceOfTaxDataGrandTotalDetailsInterface(value: object): boolean;
export declare function TaxDataGrandTotalDetailsInterfaceFromJSON(json: any): TaxDataGrandTotalDetailsInterface;
export declare function TaxDataGrandTotalDetailsInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxDataGrandTotalDetailsInterface;
export declare function TaxDataGrandTotalDetailsInterfaceToJSON(value?: TaxDataGrandTotalDetailsInterface | null): any;