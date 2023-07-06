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
import type { FrameworkSearchCriteriaInterface } from './FrameworkSearchCriteriaInterface';
import {
    FrameworkSearchCriteriaInterfaceFromJSON,
    FrameworkSearchCriteriaInterfaceFromJSONTyped,
    FrameworkSearchCriteriaInterfaceToJSON,
} from './FrameworkSearchCriteriaInterface';
import type { SalesDataOrderItemInterface } from './SalesDataOrderItemInterface';
import {
    SalesDataOrderItemInterfaceFromJSON,
    SalesDataOrderItemInterfaceFromJSONTyped,
    SalesDataOrderItemInterfaceToJSON,
} from './SalesDataOrderItemInterface';

/**
 * Order item search result interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
 * @export
 * @interface SalesDataOrderItemSearchResultInterface
 */
export interface SalesDataOrderItemSearchResultInterface {
    /**
     * Array of collection items.
     * @type {Array<SalesDataOrderItemInterface>}
     * @memberof SalesDataOrderItemSearchResultInterface
     */
    items: Array<SalesDataOrderItemInterface>;
    /**
     * 
     * @type {FrameworkSearchCriteriaInterface}
     * @memberof SalesDataOrderItemSearchResultInterface
     */
    searchCriteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     * @type {number}
     * @memberof SalesDataOrderItemSearchResultInterface
     */
    totalCount: number;
}

/**
 * Check if a given object implements the SalesDataOrderItemSearchResultInterface interface.
 */
export function instanceOfSalesDataOrderItemSearchResultInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "searchCriteria" in value;
    isInstance = isInstance && "totalCount" in value;

    return isInstance;
}

export function SalesDataOrderItemSearchResultInterfaceFromJSON(json: any): SalesDataOrderItemSearchResultInterface {
    return SalesDataOrderItemSearchResultInterfaceFromJSONTyped(json, false);
}

export function SalesDataOrderItemSearchResultInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesDataOrderItemSearchResultInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(SalesDataOrderItemInterfaceFromJSON)),
        'searchCriteria': FrameworkSearchCriteriaInterfaceFromJSON(json['search_criteria']),
        'totalCount': json['total_count'],
    };
}

export function SalesDataOrderItemSearchResultInterfaceToJSON(value?: SalesDataOrderItemSearchResultInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': ((value.items as Array<any>).map(SalesDataOrderItemInterfaceToJSON)),
        'search_criteria': FrameworkSearchCriteriaInterfaceToJSON(value.searchCriteria),
        'total_count': value.totalCount,
    };
}

