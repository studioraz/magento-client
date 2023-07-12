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
import type { SalesDataOrderInterface } from './SalesDataOrderInterface';
/**
 * Order search result interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
 * @export
 * @interface SalesDataOrderSearchResultInterface
 */
export interface SalesDataOrderSearchResultInterface {
    /**
     * Array of collection items.
     * @type {Array<SalesDataOrderInterface>}
     * @memberof SalesDataOrderSearchResultInterface
     */
    items: Array<SalesDataOrderInterface>;
    /**
     *
     * @type {FrameworkSearchCriteriaInterface}
     * @memberof SalesDataOrderSearchResultInterface
     */
    searchCriteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     * @type {number}
     * @memberof SalesDataOrderSearchResultInterface
     */
    totalCount: number;
}
/**
 * Check if a given object implements the SalesDataOrderSearchResultInterface interface.
 */
export declare function instanceOfSalesDataOrderSearchResultInterface(value: object): boolean;
export declare function SalesDataOrderSearchResultInterfaceFromJSON(json: any): SalesDataOrderSearchResultInterface;
export declare function SalesDataOrderSearchResultInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesDataOrderSearchResultInterface;
export declare function SalesDataOrderSearchResultInterfaceToJSON(value?: SalesDataOrderSearchResultInterface | null): any;