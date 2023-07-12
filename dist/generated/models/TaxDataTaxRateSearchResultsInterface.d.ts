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
import type { FrameworkSearchCriteriaInterface } from './FrameworkSearchCriteriaInterface';
import type { TaxDataTaxRateInterface } from './TaxDataTaxRateInterface';
/**
 * Interface for tax rate search results.
 * @export
 * @interface TaxDataTaxRateSearchResultsInterface
 */
export interface TaxDataTaxRateSearchResultsInterface {
    /**
     * Items
     * @type {Array<TaxDataTaxRateInterface>}
     * @memberof TaxDataTaxRateSearchResultsInterface
     */
    items: Array<TaxDataTaxRateInterface>;
    /**
     *
     * @type {FrameworkSearchCriteriaInterface}
     * @memberof TaxDataTaxRateSearchResultsInterface
     */
    searchCriteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     * @type {number}
     * @memberof TaxDataTaxRateSearchResultsInterface
     */
    totalCount: number;
}
/**
 * Check if a given object implements the TaxDataTaxRateSearchResultsInterface interface.
 */
export declare function instanceOfTaxDataTaxRateSearchResultsInterface(value: object): boolean;
export declare function TaxDataTaxRateSearchResultsInterfaceFromJSON(json: any): TaxDataTaxRateSearchResultsInterface;
export declare function TaxDataTaxRateSearchResultsInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxDataTaxRateSearchResultsInterface;
export declare function TaxDataTaxRateSearchResultsInterfaceToJSON(value?: TaxDataTaxRateSearchResultsInterface | null): any;
