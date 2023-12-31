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
import type { SalesDataOrderInterface } from './SalesDataOrderInterface';
import {
    SalesDataOrderInterfaceFromJSON,
    SalesDataOrderInterfaceFromJSONTyped,
    SalesDataOrderInterfaceToJSON,
} from './SalesDataOrderInterface';

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
export function instanceOfSalesDataOrderSearchResultInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "searchCriteria" in value;
    isInstance = isInstance && "totalCount" in value;

    return isInstance;
}

export function SalesDataOrderSearchResultInterfaceFromJSON(json: any): SalesDataOrderSearchResultInterface {
    return SalesDataOrderSearchResultInterfaceFromJSONTyped(json, false);
}

export function SalesDataOrderSearchResultInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesDataOrderSearchResultInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(SalesDataOrderInterfaceFromJSON)),
        'searchCriteria': FrameworkSearchCriteriaInterfaceFromJSON(json['search_criteria']),
        'totalCount': json['total_count'],
    };
}

export function SalesDataOrderSearchResultInterfaceToJSON(value?: SalesDataOrderSearchResultInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': ((value.items as Array<any>).map(SalesDataOrderInterfaceToJSON)),
        'search_criteria': FrameworkSearchCriteriaInterfaceToJSON(value.searchCriteria),
        'total_count': value.totalCount,
    };
}

