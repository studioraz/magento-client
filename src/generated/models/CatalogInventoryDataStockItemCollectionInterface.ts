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
import type { CatalogInventoryDataStockItemInterface } from './CatalogInventoryDataStockItemInterface';
import {
    CatalogInventoryDataStockItemInterfaceFromJSON,
    CatalogInventoryDataStockItemInterfaceFromJSONTyped,
    CatalogInventoryDataStockItemInterfaceToJSON,
} from './CatalogInventoryDataStockItemInterface';
import type { CatalogInventoryStockItemCriteriaInterface } from './CatalogInventoryStockItemCriteriaInterface';
import {
    CatalogInventoryStockItemCriteriaInterfaceFromJSON,
    CatalogInventoryStockItemCriteriaInterfaceFromJSONTyped,
    CatalogInventoryStockItemCriteriaInterfaceToJSON,
} from './CatalogInventoryStockItemCriteriaInterface';

/**
 * Interface StockItemCollectionInterface
 * @export
 * @interface CatalogInventoryDataStockItemCollectionInterface
 */
export interface CatalogInventoryDataStockItemCollectionInterface {
    /**
     * Items
     * @type {Array<CatalogInventoryDataStockItemInterface>}
     * @memberof CatalogInventoryDataStockItemCollectionInterface
     */
    items: Array<CatalogInventoryDataStockItemInterface>;
    /**
     * 
     * @type {CatalogInventoryStockItemCriteriaInterface}
     * @memberof CatalogInventoryDataStockItemCollectionInterface
     */
    searchCriteria: CatalogInventoryStockItemCriteriaInterface;
    /**
     * Total count.
     * @type {number}
     * @memberof CatalogInventoryDataStockItemCollectionInterface
     */
    totalCount: number;
}

/**
 * Check if a given object implements the CatalogInventoryDataStockItemCollectionInterface interface.
 */
export function instanceOfCatalogInventoryDataStockItemCollectionInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "searchCriteria" in value;
    isInstance = isInstance && "totalCount" in value;

    return isInstance;
}

export function CatalogInventoryDataStockItemCollectionInterfaceFromJSON(json: any): CatalogInventoryDataStockItemCollectionInterface {
    return CatalogInventoryDataStockItemCollectionInterfaceFromJSONTyped(json, false);
}

export function CatalogInventoryDataStockItemCollectionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogInventoryDataStockItemCollectionInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(CatalogInventoryDataStockItemInterfaceFromJSON)),
        'searchCriteria': CatalogInventoryStockItemCriteriaInterfaceFromJSON(json['search_criteria']),
        'totalCount': json['total_count'],
    };
}

export function CatalogInventoryDataStockItemCollectionInterfaceToJSON(value?: CatalogInventoryDataStockItemCollectionInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': ((value.items as Array<any>).map(CatalogInventoryDataStockItemInterfaceToJSON)),
        'search_criteria': CatalogInventoryStockItemCriteriaInterfaceToJSON(value.searchCriteria),
        'total_count': value.totalCount,
    };
}

