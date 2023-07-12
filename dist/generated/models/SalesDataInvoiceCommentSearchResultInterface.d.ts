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
import type { SalesDataInvoiceCommentInterface } from './SalesDataInvoiceCommentInterface';
/**
 * Invoice comment search result interface. An invoice is a record of the receipt of payment for an order. An invoice can include comments that detail the invoice history.
 * @export
 * @interface SalesDataInvoiceCommentSearchResultInterface
 */
export interface SalesDataInvoiceCommentSearchResultInterface {
    /**
     * Array of collection items.
     * @type {Array<SalesDataInvoiceCommentInterface>}
     * @memberof SalesDataInvoiceCommentSearchResultInterface
     */
    items: Array<SalesDataInvoiceCommentInterface>;
    /**
     *
     * @type {FrameworkSearchCriteriaInterface}
     * @memberof SalesDataInvoiceCommentSearchResultInterface
     */
    searchCriteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     * @type {number}
     * @memberof SalesDataInvoiceCommentSearchResultInterface
     */
    totalCount: number;
}
/**
 * Check if a given object implements the SalesDataInvoiceCommentSearchResultInterface interface.
 */
export declare function instanceOfSalesDataInvoiceCommentSearchResultInterface(value: object): boolean;
export declare function SalesDataInvoiceCommentSearchResultInterfaceFromJSON(json: any): SalesDataInvoiceCommentSearchResultInterface;
export declare function SalesDataInvoiceCommentSearchResultInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesDataInvoiceCommentSearchResultInterface;
export declare function SalesDataInvoiceCommentSearchResultInterfaceToJSON(value?: SalesDataInvoiceCommentSearchResultInterface | null): any;