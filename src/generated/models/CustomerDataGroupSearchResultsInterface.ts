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
import type { CustomerDataGroupInterface } from './CustomerDataGroupInterface';
import {
    CustomerDataGroupInterfaceFromJSON,
    CustomerDataGroupInterfaceFromJSONTyped,
    CustomerDataGroupInterfaceToJSON,
} from './CustomerDataGroupInterface';
import type { FrameworkSearchCriteriaInterface } from './FrameworkSearchCriteriaInterface';
import {
    FrameworkSearchCriteriaInterfaceFromJSON,
    FrameworkSearchCriteriaInterfaceFromJSONTyped,
    FrameworkSearchCriteriaInterfaceToJSON,
} from './FrameworkSearchCriteriaInterface';

/**
 * Interface for customer groups search results.
 * @export
 * @interface CustomerDataGroupSearchResultsInterface
 */
export interface CustomerDataGroupSearchResultsInterface {
    /**
     * Customer groups list.
     * @type {Array<CustomerDataGroupInterface>}
     * @memberof CustomerDataGroupSearchResultsInterface
     */
    items: Array<CustomerDataGroupInterface>;
    /**
     * 
     * @type {FrameworkSearchCriteriaInterface}
     * @memberof CustomerDataGroupSearchResultsInterface
     */
    searchCriteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     * @type {number}
     * @memberof CustomerDataGroupSearchResultsInterface
     */
    totalCount: number;
}

/**
 * Check if a given object implements the CustomerDataGroupSearchResultsInterface interface.
 */
export function instanceOfCustomerDataGroupSearchResultsInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "searchCriteria" in value;
    isInstance = isInstance && "totalCount" in value;

    return isInstance;
}

export function CustomerDataGroupSearchResultsInterfaceFromJSON(json: any): CustomerDataGroupSearchResultsInterface {
    return CustomerDataGroupSearchResultsInterfaceFromJSONTyped(json, false);
}

export function CustomerDataGroupSearchResultsInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerDataGroupSearchResultsInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(CustomerDataGroupInterfaceFromJSON)),
        'searchCriteria': FrameworkSearchCriteriaInterfaceFromJSON(json['search_criteria']),
        'totalCount': json['total_count'],
    };
}

export function CustomerDataGroupSearchResultsInterfaceToJSON(value?: CustomerDataGroupSearchResultsInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': ((value.items as Array<any>).map(CustomerDataGroupInterfaceToJSON)),
        'search_criteria': FrameworkSearchCriteriaInterfaceToJSON(value.searchCriteria),
        'total_count': value.totalCount,
    };
}

