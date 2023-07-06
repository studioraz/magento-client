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
import type { InventoryApiDataStockExtensionInterface } from './InventoryApiDataStockExtensionInterface';
import {
    InventoryApiDataStockExtensionInterfaceFromJSON,
    InventoryApiDataStockExtensionInterfaceFromJSONTyped,
    InventoryApiDataStockExtensionInterfaceToJSON,
} from './InventoryApiDataStockExtensionInterface';

/**
 * Represents product aggregation among some different physical storages (in technical words, it is an index) Used fully qualified namespaces in annotations for proper work of WebApi request parser
 * @export
 * @interface InventoryApiDataStockInterface
 */
export interface InventoryApiDataStockInterface {
    /**
     * Stock id
     * @type {number}
     * @memberof InventoryApiDataStockInterface
     */
    stockId?: number;
    /**
     * Stock name
     * @type {string}
     * @memberof InventoryApiDataStockInterface
     */
    name?: string;
    /**
     * 
     * @type {InventoryApiDataStockExtensionInterface}
     * @memberof InventoryApiDataStockInterface
     */
    extensionAttributes?: InventoryApiDataStockExtensionInterface;
}

/**
 * Check if a given object implements the InventoryApiDataStockInterface interface.
 */
export function instanceOfInventoryApiDataStockInterface(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InventoryApiDataStockInterfaceFromJSON(json: any): InventoryApiDataStockInterface {
    return InventoryApiDataStockInterfaceFromJSONTyped(json, false);
}

export function InventoryApiDataStockInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventoryApiDataStockInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stockId': !exists(json, 'stock_id') ? undefined : json['stock_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : InventoryApiDataStockExtensionInterfaceFromJSON(json['extension_attributes']),
    };
}

export function InventoryApiDataStockInterfaceToJSON(value?: InventoryApiDataStockInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stock_id': value.stockId,
        'name': value.name,
        'extension_attributes': InventoryApiDataStockExtensionInterfaceToJSON(value.extensionAttributes),
    };
}

