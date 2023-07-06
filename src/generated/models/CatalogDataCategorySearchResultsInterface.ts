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
import type { CatalogDataCategoryInterface } from './CatalogDataCategoryInterface';
import {
    CatalogDataCategoryInterfaceFromJSON,
    CatalogDataCategoryInterfaceFromJSONTyped,
    CatalogDataCategoryInterfaceToJSON,
} from './CatalogDataCategoryInterface';
import type { FrameworkSearchCriteriaInterface } from './FrameworkSearchCriteriaInterface';
import {
    FrameworkSearchCriteriaInterfaceFromJSON,
    FrameworkSearchCriteriaInterfaceFromJSONTyped,
    FrameworkSearchCriteriaInterfaceToJSON,
} from './FrameworkSearchCriteriaInterface';

/**
 * 
 * @export
 * @interface CatalogDataCategorySearchResultsInterface
 */
export interface CatalogDataCategorySearchResultsInterface {
    /**
     * Categories
     * @type {Array<CatalogDataCategoryInterface>}
     * @memberof CatalogDataCategorySearchResultsInterface
     */
    items: Array<CatalogDataCategoryInterface>;
    /**
     * 
     * @type {FrameworkSearchCriteriaInterface}
     * @memberof CatalogDataCategorySearchResultsInterface
     */
    searchCriteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     * @type {number}
     * @memberof CatalogDataCategorySearchResultsInterface
     */
    totalCount: number;
}

/**
 * Check if a given object implements the CatalogDataCategorySearchResultsInterface interface.
 */
export function instanceOfCatalogDataCategorySearchResultsInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "searchCriteria" in value;
    isInstance = isInstance && "totalCount" in value;

    return isInstance;
}

export function CatalogDataCategorySearchResultsInterfaceFromJSON(json: any): CatalogDataCategorySearchResultsInterface {
    return CatalogDataCategorySearchResultsInterfaceFromJSONTyped(json, false);
}

export function CatalogDataCategorySearchResultsInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogDataCategorySearchResultsInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(CatalogDataCategoryInterfaceFromJSON)),
        'searchCriteria': FrameworkSearchCriteriaInterfaceFromJSON(json['search_criteria']),
        'totalCount': json['total_count'],
    };
}

export function CatalogDataCategorySearchResultsInterfaceToJSON(value?: CatalogDataCategorySearchResultsInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': ((value.items as Array<any>).map(CatalogDataCategoryInterfaceToJSON)),
        'search_criteria': FrameworkSearchCriteriaInterfaceToJSON(value.searchCriteria),
        'total_count': value.totalCount,
    };
}

