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
import type { SalesDataTransactionInterface } from './SalesDataTransactionInterface';
/**
 * Transaction search result interface. A transaction is an interaction between a merchant and a customer such as a purchase, a credit, a refund, and so on.
 * @export
 * @interface SalesDataTransactionSearchResultInterface
 */
export interface SalesDataTransactionSearchResultInterface {
    /**
     * Array of collection items.
     * @type {Array<SalesDataTransactionInterface>}
     * @memberof SalesDataTransactionSearchResultInterface
     */
    items: Array<SalesDataTransactionInterface>;
    /**
     *
     * @type {FrameworkSearchCriteriaInterface}
     * @memberof SalesDataTransactionSearchResultInterface
     */
    searchCriteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     * @type {number}
     * @memberof SalesDataTransactionSearchResultInterface
     */
    totalCount: number;
}
/**
 * Check if a given object implements the SalesDataTransactionSearchResultInterface interface.
 */
export declare function instanceOfSalesDataTransactionSearchResultInterface(value: object): boolean;
export declare function SalesDataTransactionSearchResultInterfaceFromJSON(json: any): SalesDataTransactionSearchResultInterface;
export declare function SalesDataTransactionSearchResultInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesDataTransactionSearchResultInterface;
export declare function SalesDataTransactionSearchResultInterfaceToJSON(value?: SalesDataTransactionSearchResultInterface | null): any;