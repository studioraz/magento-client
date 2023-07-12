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
import type { SalesDataOrderStatusHistoryInterface } from './SalesDataOrderStatusHistoryInterface';
/**
 * Order status history search result interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
 * @export
 * @interface SalesDataOrderStatusHistorySearchResultInterface
 */
export interface SalesDataOrderStatusHistorySearchResultInterface {
    /**
     * Array of collection items.
     * @type {Array<SalesDataOrderStatusHistoryInterface>}
     * @memberof SalesDataOrderStatusHistorySearchResultInterface
     */
    items: Array<SalesDataOrderStatusHistoryInterface>;
    /**
     *
     * @type {FrameworkSearchCriteriaInterface}
     * @memberof SalesDataOrderStatusHistorySearchResultInterface
     */
    searchCriteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     * @type {number}
     * @memberof SalesDataOrderStatusHistorySearchResultInterface
     */
    totalCount: number;
}
/**
 * Check if a given object implements the SalesDataOrderStatusHistorySearchResultInterface interface.
 */
export declare function instanceOfSalesDataOrderStatusHistorySearchResultInterface(value: object): boolean;
export declare function SalesDataOrderStatusHistorySearchResultInterfaceFromJSON(json: any): SalesDataOrderStatusHistorySearchResultInterface;
export declare function SalesDataOrderStatusHistorySearchResultInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesDataOrderStatusHistorySearchResultInterface;
export declare function SalesDataOrderStatusHistorySearchResultInterfaceToJSON(value?: SalesDataOrderStatusHistorySearchResultInterface | null): any;
